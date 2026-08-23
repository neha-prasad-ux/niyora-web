import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(resolve(here, 'index.astro'), 'utf-8');
const badge = readFileSync(resolve(here, '../../public/app-store-badge.svg'), 'utf-8');

describe('homepage SEO', () => {
  it('titles the page after the app, not the old desktop product', () => {
    expect(src).toContain('title="Niyora · a PMS app that predicts, then helps you through it"');
  });

  it('canonicalises to the root', () => {
    expect(src).toContain('canonicalUrl="https://niyora.com"');
  });

  it('sets an OG image', () => {
    expect(src).toContain('ogImage=');
  });

  it('describes itself to search engines as an iOS app', () => {
    expect(src).toContain("'@type': 'MobileApplication'");
    expect(src).toContain("operatingSystem: 'iOS'");
  });
});

describe('homepage App Store wiring', () => {
  it('reads the listing URL from config rather than restating it', () => {
    expect(src).toContain("from '../config/downloads'");
    // A literal apps.apple.com URL here means the config and the page can drift,
    // which is exactly how the old niyora-pms-mood-relief slug went stale.
    expect(src).not.toMatch(/https:\/\/apps\.apple\.com/);
  });

  it('points the JSON-LD and both CTAs at downloads.appStore', () => {
    expect(src).toContain('url: downloads.appStore');
    expect(src.match(/href=\{downloads\.appStore\}/g) ?? []).toHaveLength(2);
  });
});

describe("Apple's App Store badge", () => {
  it('uses the supplied artwork, never a hand-built pill', () => {
    expect(src).toContain('src="/app-store-badge.svg"');
    // Apple's guidelines forbid recreating the badge. A styled element carrying
    // the badge wording is a recreation.
    expect(src).not.toMatch(/>\s*Download on the App Store\s*</);
  });

  it('ships the real artwork, at the aspect ratio Apple drew it', () => {
    const w = Number(badge.match(/width="([\d.]+)"/)?.[1]);
    const h = Number(badge.match(/height="([\d.]+)"/)?.[1]);
    expect(w / h).toBeCloseTo(2.9915, 3);
  });

  it('renders it above the 40px minimum height, undistorted', () => {
    expect(src).toContain('.store-badge img { display: block; height: 48px; width: auto; }');
  });

  it('keeps clear space of a quarter the badge height around it', () => {
    expect(src).toContain('.store-badge { display: inline-block; padding: 12px; margin: -12px; }');
  });

  it('shows one badge per layout, as the guidelines require', () => {
    expect(src.match(/class="store-badge"/g) ?? []).toHaveLength(1);
  });
});

describe('the pre-launch interest counter is gone', () => {
  it('no longer asks visitors to register interest in a shipped app', () => {
    expect(src).not.toContain("I'm interested");
    expect(src).not.toContain('data-interest');
    expect(src).not.toContain('/api/interest');
  });
});
