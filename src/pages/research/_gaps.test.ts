import { describe, it, expect } from 'vitest';
import { DOMAIN, lanes, laneByName, logPosition, stats, TICKS } from './_gaps';

describe('research gap map', () => {
  it('keeps only cycle lanes, so the counts are comparable', () => {
    expect(lanes.length).toBeGreaterThan(20);
    for (const lane of lanes) {
      expect(['core', 'modulator', 'impact', 'context'], lane.lane).toContain(lane.axis);
    }
  });

  it('sorts scarcest first', () => {
    const totals = lanes.map((l) => l.total);
    expect(totals).toEqual([...totals].sort((a, b) => a - b));
  });

  it('never reports more trials than papers', () => {
    for (const lane of lanes) {
      expect(lane.strong, lane.lane).toBeLessThanOrEqual(lane.total);
    }
  });

  it('maps the log axis into 0..1 with every tick inside', () => {
    expect(logPosition(DOMAIN.min)).toBe(0);
    expect(logPosition(DOMAIN.max)).toBeCloseTo(1);
    for (const tick of TICKS) {
      const pos = logPosition(tick);
      expect(pos, `tick ${tick}`).toBeGreaterThanOrEqual(0);
      expect(pos, `tick ${tick}`).toBeLessThanOrEqual(1);
    }
  });

  it('clamps zero and one to the axis floor rather than plotting -Infinity', () => {
    expect(logPosition(0)).toBe(0);
    expect(Number.isFinite(logPosition(0))).toBe(true);
  });

  it('keeps every lane inside the plotted domain', () => {
    for (const lane of lanes) {
      expect(lane.total, lane.lane).toBeLessThanOrEqual(DOMAIN.max);
    }
  });

  it('holds the claims the page makes in prose', () => {
    // If a re-harvest moves these, the page copy is wrong and must change with it.
    expect(laneByName('Lunar / moon myth').total).toBeGreaterThan(
      laneByName('Geographical').total
    );
    expect(laneByName('PMS in animals').total).toBeGreaterThan(
      laneByName('Self-harm / suicidality').total
    );
    expect(laneByName('Genetic').strong).toBe(0);
    expect(stats.thinnest.lane).toBe('Environmental');
    expect(stats.noTrials.length).toBeGreaterThan(0);
  });
});
