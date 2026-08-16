import gaps from '../../data/research-gaps.json';

export interface Lane {
  lane: string;
  axis: string;
  tags: string[];
  /** Europe PMC hitCount for the lane's query. */
  total: number;
  /** Of those, publication type RCT, meta-analysis, or systematic review. */
  strong: number;
}

/**
 * The bank also runs 27 women-at-work lanes. Those queries are not
 * cycle-specific, so their counts are not comparable to these and would make
 * the chart dishonest. Cycle lanes only.
 */
const CYCLE_AXES = ['core', 'modulator', 'impact', 'context'];

export const lanes: Lane[] = (gaps as Lane[])
  .filter((l) => CYCLE_AXES.includes(l.axis))
  .sort((a, b) => a.total - b.total);

/** Log axis, because the lanes span 3 to over 5,000 papers. */
export const DOMAIN = { min: 1, max: 10000 };
export const TICKS = [1, 10, 100, 1000, 10000];

export function logPosition(value: number): number {
  if (value <= DOMAIN.min) return 0;
  return Math.log10(value) / Math.log10(DOMAIN.max);
}

export function trialShare(lane: Lane): number {
  return lane.total === 0 ? 0 : lane.strong / lane.total;
}

export const stats = {
  laneCount: lanes.length,
  totalPapers: lanes.reduce((sum, l) => sum + l.total, 0),
  totalTrials: lanes.reduce((sum, l) => sum + l.strong, 0),
  noTrials: lanes.filter((l) => l.strong === 0),
  thinnest: lanes[0],
};

/** Comparisons that are true, checkable, and worth saying out loud. */
export function laneByName(name: string): Lane {
  const found = lanes.find((l) => l.lane === name);
  if (!found) throw new Error(`no lane named ${name}`);
  return found;
}
