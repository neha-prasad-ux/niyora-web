import trials from '../../data/trials.json';

export interface Location {
  facility: string;
  city: string;
  state: string | null;
  country: string;
  status: string | null;
}

export interface Trial {
  nctId: string;
  url: string;
  briefTitle: string;
  officialTitle: string | null;
  overallStatus: string;
  studyType: string;
  phases: string[];
  conditions: string[];
  briefSummary: string | null;
  enrollment: number | null;
  startDate: string | null;
  primaryCompletionDate: string | null;
  lastUpdateDate: string | null;
  sponsor: string | null;
  healthyVolunteers: boolean | null;
  sex: string;
  minimumAge: string | null;
  maximumAge: string | null;
  locations: Location[];
}

export const allTrials = trials as Trial[];

/** Registry dates are sometimes year or year-month only. */
export function parseDate(value: string | null | undefined): Date | null {
  if (!value) return null;
  const [y, m, d] = value.split('-').map(Number);
  if (!y) return null;
  const date = new Date(Date.UTC(y, (m || 1) - 1, d || 1));
  return Number.isNaN(date.getTime()) ? null : date;
}

function daysBetween(later: Date, earlier: Date): number {
  return (later.getTime() - earlier.getTime()) / 86_400_000;
}

/**
 * "Recruiting" on ClinicalTrials.gov only means nobody has updated the record.
 * A trial is worth showing to someone who might join only if its completion
 * date has not already passed, someone touched the record in the last year,
 * and it names a place you could actually go.
 */
export function isCurrent(trial: Trial, today = new Date()): boolean {
  const completion = parseDate(trial.primaryCompletionDate);
  const updated = parseDate(trial.lastUpdateDate);
  if (completion && completion < today) return false;
  if (!updated || daysBetween(today, updated) > 365) return false;
  return trial.locations.length > 0;
}

export type Family = 'pms-pmdd' | 'period-pain' | 'other';

export const FAMILIES: { key: Family; title: string; blurb: string }[] = [
  {
    key: 'pms-pmdd',
    title: 'PMS and PMDD',
    blurb: 'Studies on premenstrual mood, irritability and premenstrual dysphoric disorder.',
  },
  {
    key: 'period-pain',
    title: 'Period pain',
    blurb: 'Dysmenorrhea and menstrual cramps. This is where most of the research money goes.',
  },
  {
    key: 'other',
    title: 'Other cycle conditions',
    blurb: 'Endometriosis, PCOS, amenorrhea and general menstrual cycle studies.',
  },
];

export function familyOf(trial: Trial): Family {
  const text = trial.conditions.join(' ').toLowerCase();
  if (/premenstrual|pmdd|\bpms\b/.test(text)) return 'pms-pmdd';
  if (/dysmenorrh|menstrual pain|menstrual cramp/.test(text)) return 'period-pain';
  return 'other';
}

export function countries(trial: Trial): string[] {
  return [...new Set(trial.locations.map((l) => l.country))].sort();
}

/** Current trials, grouped into families, freshest record first. */
export function grouped(today = new Date()) {
  const current = allTrials.filter((t) => isCurrent(t, today));
  return FAMILIES.map((family) => ({
    family,
    trials: current
      .filter((t) => familyOf(t) === family.key)
      .sort(
        (a, b) =>
          (parseDate(b.lastUpdateDate)?.getTime() ?? 0) -
          (parseDate(a.lastUpdateDate)?.getTime() ?? 0)
      ),
  })).filter((g) => g.trials.length > 0);
}

export function stats(today = new Date()) {
  const current = allTrials.filter((t) => isCurrent(t, today));
  const stale = allTrials.filter((t) => {
    const c = parseDate(t.primaryCompletionDate);
    return c !== null && c < today;
  });
  return {
    total: allTrials.length,
    current: current.length,
    stale: stale.length,
    noLocation: allTrials.filter((t) => t.locations.length === 0).length,
    countries: [...new Set(current.flatMap(countries))].sort(),
  };
}
