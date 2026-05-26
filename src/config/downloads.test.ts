import { describe, it, expect } from 'vitest';
import { downloads } from './downloads';

describe('downloads', () => {
  it('exports all three platform keys', () => {
    expect(downloads).toHaveProperty('apple');
    expect(downloads).toHaveProperty('intel');
    expect(downloads).toHaveProperty('windows');
    expect(Object.keys(downloads)).toHaveLength(3);
  });

  it('macOS URLs point to .dmg files over HTTPS', () => {
    expect(downloads.apple).toMatch(/^https:\/\//);
    expect(downloads.apple).toMatch(/\.dmg$/);
    expect(downloads.intel).toMatch(/^https:\/\//);
    expect(downloads.intel).toMatch(/\.dmg$/);
  });

  it('Windows URL points to a .exe file over HTTPS', () => {
    expect(downloads.windows).toMatch(/^https:\/\//);
    expect(downloads.windows).toMatch(/\.exe$/);
  });

  it('all URLs use the downloads.niyora.com origin', () => {
    for (const url of Object.values(downloads)) {
      expect(url).toMatch(/^https:\/\/downloads\.niyora\.com\//);
    }
  });

  it('apple and intel serve different binaries', () => {
    expect(downloads.apple).not.toBe(downloads.intel);
  });
});
