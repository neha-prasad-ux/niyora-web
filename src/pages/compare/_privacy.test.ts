import { describe, it, expect } from 'vitest';
import { apps, contradictions, healthLinked, ranked, sortKey, stats } from './_privacy';

describe('app privacy data', () => {
  it('gives every app a source for every claim it makes', () => {
    for (const a of apps) {
      expect(a.labelSource, a.app).toMatch(/^https:\/\//);
      expect(a.storageSource, a.app).toMatch(/^https:\/\//);
      expect(a.sellsSource, a.app).toMatch(/^https:\/\//);
      expect(a.lawSource, a.app).toMatch(/^https:\/\//);
      expect(a.deletionSource, a.app).toMatch(/^https:\/\//);
    }
  });

  it('only quotes a source when it has something to quote', () => {
    for (const a of apps) {
      if (a.sells === 'unknown') expect(a.sellsQuote, a.app).toBeNull();
      else expect(a.sellsQuote, a.app).toBeTruthy();
    }
  });

  it('keeps every quote short enough to be a citation, not a copy', () => {
    const quotes = apps.flatMap((a) => [a.storageQuote, a.sellsQuote, a.deletionQuote]);
    for (const q of quotes) {
      if (q) expect(q.split(/\s+/).length, q).toBeLessThanOrEqual(25);
    }
  });

  it('orders by declared tracking, then health linkage, then name', () => {
    const keys = ranked.map(sortKey);
    for (let i = 1; i < keys.length; i++) {
      const [pt, ph, pn] = keys[i - 1];
      const [ct, ch, cn] = keys[i];
      expect(pt < ct || (pt === ct && (ph < ch || (ph === ch && pn <= cn))), `${pn} before ${cn}`).toBe(true);
    }
  });

  it('never lets an app outrank one that declares less tracking', () => {
    const flo = ranked.findIndex((a) => a.app === 'Flo');
    const clue = ranked.findIndex((a) => a.app === 'Clue');
    expect(clue).toBeLessThan(flo);
  });

  it('treats an absent tracking heading as no tracking, not unknown', () => {
    const apple = apps.find((a) => a.app === 'Apple Cycle Tracking')!;
    expect(apple.tracking).toEqual([]);
    expect(sortKey(apple)[0]).toBe(0);
  });

  it('flags health linked to identity wherever either category appears', () => {
    expect(healthLinked(apps.find((a) => a.app === 'Flo')!)).toBe(true);
    expect(healthLinked(apps.find((a) => a.app === 'Stardust')!)).toBe(false);
  });

  it('names a real app in every contradiction', () => {
    const names = new Set(apps.map((a) => a.app));
    for (const c of contradictions) {
      expect(names, c.app).toContain(c.app);
      expect(c.sources.length).toBeGreaterThan(0);
    }
  });

  it('counts the summary stats off the same data the table uses', () => {
    expect(stats.total).toBe(apps.length);
    expect(stats.tracked).toBe(apps.filter((a) => a.tracking.length > 0).length);
    expect(stats.deletionReachesShared).toBeGreaterThanOrEqual(1);
  });
});
