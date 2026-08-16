import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { QUESTIONS, OPTIONS, BANDS, MAX_SCORE, bandFor } from './_score';

const here = dirname(fileURLToPath(import.meta.url));
const page = readFileSync(resolve(here, 'index.astro'), 'utf-8');

describe('quiz shape', () => {
  it('has 8 questions', () => {
    expect(QUESTIONS).toHaveLength(8);
  });

  it('offers a 0 to 3 intensity scale', () => {
    expect(OPTIONS.map((o) => o.value)).toEqual([0, 1, 2, 3]);
  });

  it('max score is questions times 3', () => {
    expect(MAX_SCORE).toBe(24);
  });
});

describe('bands', () => {
  it('cover 0..MAX contiguously with no gaps or overlaps', () => {
    const sorted = [...BANDS].sort((a, b) => a.min - b.min);
    expect(sorted[0].min).toBe(0);
    expect(sorted[sorted.length - 1].max).toBe(MAX_SCORE);
    for (let i = 0; i < sorted.length; i++) {
      expect(sorted[i].max).toBeGreaterThanOrEqual(sorted[i].min);
      if (i > 0) expect(sorted[i].min).toBe(sorted[i - 1].max + 1);
    }
  });
});

describe('bandFor', () => {
  it('maps the mild band', () => {
    expect(bandFor(0).id).toBe('mild');
    expect(bandFor(6).id).toBe('mild');
  });

  it('maps the noticeable band', () => {
    expect(bandFor(7).id).toBe('noticeable');
    expect(bandFor(15).id).toBe('noticeable');
  });

  it('maps the high band', () => {
    expect(bandFor(16).id).toBe('high');
    expect(bandFor(24).id).toBe('high');
  });

  it('clamps out-of-range scores', () => {
    expect(bandFor(-5).id).toBe('mild');
    expect(bandFor(999).id).toBe('high');
  });

  it('every possible total lands in exactly one band', () => {
    for (let t = 0; t <= MAX_SCORE; t++) {
      const matches = BANDS.filter((b) => t >= b.min && t <= b.max);
      expect(matches).toHaveLength(1);
      expect(bandFor(t)).toBe(matches[0]);
    }
  });

  it('only the high band carries a safety note', () => {
    expect(BANDS.filter((b) => b.note).map((b) => b.id)).toEqual(['high']);
  });
});

describe('quiz page SEO', () => {
  it('sets a keyword-forward title', () => {
    expect(page).toContain('title="How much is PMS affecting you? A free PMS quiz · Niyora"');
  });

  it('sets a canonical URL pointing to /quiz', () => {
    expect(page).toContain('canonicalUrl="https://www.niyora.com/quiz"');
  });

  it('has exactly one h1', () => {
    expect(page.match(/<h1[\s>]/g) ?? []).toHaveLength(1);
  });

  it('says plainly that it is a self-check, not a diagnosis', () => {
    expect(page).toContain('not a medical diagnosis');
  });

  it('does not gate the result behind installing the app', () => {
    // The App Store link is a soft CTA, not a prerequisite to see the band.
    expect(page).toContain('data-view="result"');
  });
});
