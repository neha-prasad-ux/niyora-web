import data from '../../data/app-privacy.json';

export interface App {
  app: string;
  company: string;
  jurisdiction: string;
  /** Apple's "Data Used to Track You". Empty means the heading is absent. */
  tracking: string[];
  linkedToYou: string[];
  notLinkedToYou: string[];
  storage: string;
  storageQuote: string;
  storageSource: string;
  sells: 'no' | 'partial' | 'contradictory' | 'unknown';
  sellsQuote: string | null;
  sellsSource: string;
  lawEnforcement: string;
  lawSource: string;
  deletionCoversShared: 'yes' | 'no' | 'not addressed';
  deletionQuote: string;
  deletionSource: string;
  policyDate: string;
  labelSource: string;
}

export interface Contradiction {
  app: string;
  summary: string;
  sources: string[];
}

export const checked: string = data.checked;
export const apps = data.apps as App[];
export const contradictions = data.contradictions as Contradiction[];

/** Health data declared as linked to your real identity is the line that matters most. */
export function healthLinked(app: App): boolean {
  return app.linkedToYou.some((c) => c === 'Health & Fitness' || c === 'Sensitive Info');
}

/**
 * Ordering is a stated rule, not a score: how many data types the app tells
 * Apple may track you, then whether health is linked to your identity, then
 * alphabetical. Every term is the company's own declaration, so the order can
 * be checked rather than trusted.
 */
export function sortKey(app: App): [number, number, string] {
  return [app.tracking.length, healthLinked(app) ? 1 : 0, app.app];
}

export const ranked: App[] = [...apps].sort((a, b) => {
  const [at, ah, an] = sortKey(a);
  const [bt, bh, bn] = sortKey(b);
  return at - bt || ah - bh || an.localeCompare(bn);
});

export const SELLS_LABEL: Record<App['sells'], string> = {
  no: 'Says it does not',
  partial: 'Partly',
  contradictory: 'Says both',
  unknown: 'Does not say',
};

export const stats = {
  total: apps.length,
  tracked: apps.filter((a) => a.tracking.length > 0).length,
  healthLinked: apps.filter(healthLinked).length,
  deletionReachesShared: apps.filter((a) => a.deletionCoversShared === 'yes').length,
  onDeviceOnly: apps.filter((a) => /^On your device/.test(a.storage)).length,
};
