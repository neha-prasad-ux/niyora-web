import { describe, it, expect } from 'vitest';
import {
  CLUSTERS,
  DISPLAY_ORDER,
  GRADE_ORDER,
  allRows,
  clusterFor,
  grouped,
  sourceLabel,
  unclustered,
} from './_clusters';

describe('research clustering', () => {
  it('claims every row', () => {
    expect(unclustered().map((r) => `${r.n} ${r.topic} [${r.tags.join(', ')}]`)).toEqual([]);
  });

  it('keeps every row on exactly one cluster page', () => {
    const placed = grouped().flatMap((g) => g.rows.map((r) => r.n));
    expect(new Set(placed).size).toBe(placed.length);
    expect(placed.length).toBe(allRows.length);
  });

  it('displays every non-empty cluster', () => {
    expect(DISPLAY_ORDER).toHaveLength(CLUSTERS.length);
    expect([...DISPLAY_ORDER].sort()).toEqual(CLUSTERS.map((c) => c.slug).sort());
  });

  it('routes micronutrient rows to micronutrients, not mechanism', () => {
    // Magnesium is tagged both `micronutrient` and `GABA`, so this is the
    // ordering that the CLUSTERS array exists to get right.
    const magnesium = allRows.find((r) => r.tags.includes('magnesium'))!;
    expect(clusterFor(magnesium)?.slug).toBe('micronutrients');
  });

  it('sorts strongest evidence first within a cluster', () => {
    for (const { cluster, rows } of grouped()) {
      const ranks = rows.map((r) => GRADE_ORDER.indexOf(r.grade));
      expect(ranks, cluster.slug).toEqual([...ranks].sort((a, b) => a - b));
    }
  });

  it('grades every row with a known grade', () => {
    for (const row of allRows) {
      expect(GRADE_ORDER, `row ${row.n}`).toContain(row.grade);
    }
  });

  it('never shows the internal appendix pointer as a source', () => {
    for (const row of allRows) {
      const label = sourceLabel(row);
      expect(label.toLowerCase(), `row ${row.n}`).not.toContain('appendix');
      expect(label.toLowerCase(), `row ${row.n}`).not.toContain('verify');
      expect(label.length, `row ${row.n}`).toBeGreaterThan(2);
    }
  });

  it('keeps the written citation when there is one', () => {
    const calcium = allRows.find((r) => r.tags.includes('calcium'))!;
    expect(sourceLabel(calcium)).toBe('Thys-Jacobs RCT');
  });

  it('names the journal when the citation is only an appendix pointer', () => {
    const magnesium = allRows.find((r) => r.tags.includes('magnesium'))!;
    expect(sourceLabel(magnesium)).toBe('PubMed');
  });

  it('keeps parentheses that belong to a name', () => {
    const escez = allRows.find((r) => r.source.includes('ESC/E'))!;
    expect(sourceLabel(escez)).toBe('ESC/E(Z) follow-ups');
  });

  it('never publishes the internal roadmap columns', () => {
    for (const row of allRows) {
      expect(Object.keys(row)).not.toContain('Use it for');
      expect(Object.keys(row)).not.toContain('Gap / to add');
    }
  });

  /**
   * The research page tells the reader "I do not write studies show without a
   * link". Four rows shipped without one, and the page had no way to notice.
   * A finding nobody can check does not belong in the file at all.
   */
  it('gives every published finding a link the reader can open', () => {
    const unlinked = allRows.filter((r) => !r.link?.startsWith('http'));
    expect(
      unlinked.map((r) => `n=${r.n} ${r.source}`),
      'source these or take them out, the page promises a link for every finding',
    ).toEqual([]);
  });
});
