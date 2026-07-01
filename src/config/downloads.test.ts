import { describe, it, expect } from 'vitest';
import { downloads } from './downloads';

const desktopKeys = ['apple', 'intel', 'windows'] as const;
const desktopUrls = desktopKeys.map((k) => downloads[k]);

describe('downloads', () => {
  it('exports the App Store key plus all three desktop keys', () => {
    expect(downloads).toHaveProperty('appStore');
    expect(downloads).toHaveProperty('apple');
    expect(downloads).toHaveProperty('intel');
    expect(downloads).toHaveProperty('windows');
    expect(Object.keys(downloads)).toHaveLength(4);
  });

  it('App Store URL points to apps.apple.com over HTTPS', () => {
    expect(downloads.appStore).toMatch(/^https:\/\/apps\.apple\.com\//);
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

  it('all desktop URLs use the downloads.niyora.com origin', () => {
    for (const url of desktopUrls) {
      expect(url).toMatch(/^https:\/\/downloads\.niyora\.com\//);
    }
  });

  it('apple and intel serve different binaries', () => {
    expect(downloads.apple).not.toBe(downloads.intel);
  });

  it('windows URL is distinct from all mac URLs', () => {
    expect(downloads.windows).not.toBe(downloads.apple);
    expect(downloads.windows).not.toBe(downloads.intel);
  });

  it('all URLs are valid parseable URLs', () => {
    for (const url of Object.values(downloads)) {
      expect(() => new URL(url)).not.toThrow();
    }
  });

  it('all desktop URLs reference the same release version', () => {
    const versionPattern = /(\d+\.\d+\.\d+)/;
    const versions = desktopUrls.map((url) => {
      const match = url.match(versionPattern);
      return match ? match[1] : null;
    });
    const unique = new Set(versions);
    expect(unique.size).toBe(1);
    expect(versions[0]).not.toBeNull();
  });

  it('each URL encodes a platform identifier in the filename', () => {
    expect(downloads.apple).toMatch(/AppleSilicon/);
    expect(downloads.intel).toMatch(/Intel/);
    expect(downloads.windows).toMatch(/Windows/);
  });
});
