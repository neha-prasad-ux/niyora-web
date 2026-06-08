import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(dirname(fileURLToPath(import.meta.url)));

function read(rel: string): string {
  return readFileSync(resolve(root, rel), 'utf-8');
}

describe('index.astro — Windows personalisation script', () => {
  const page = read('src/pages/index.astro');

  it('detects Windows via navigator.userAgent', () => {
    expect(page).toContain('/Windows/i.test(navigator.userAgent)');
  });

  it('applies Windows-specific CTA label', () => {
    expect(page).toContain("'Download for Windows'");
  });

  it('swaps trust-tagline text on Windows', () => {
    expect(page).toContain("['trust-tagline', 'Nothing leaves your PC.']");
  });

  it('swaps video-tagline text on Windows', () => {
    expect(page).toContain("['video-tagline', 'Sixty seconds of calm, in your system tray.']");
  });

  it('swaps privacy-tagline text on Windows', () => {
    expect(page).toContain("['privacy-tagline', 'Nothing leaves your PC. Ever.']");
  });

  it('swaps recognition-copy text on Windows', () => {
    expect(page).toContain("Niyora reads passive signals from your PC.");
  });

  it('detects Intel Mac via WebGL renderer string', () => {
    expect(page).toContain('WEBGL_debug_renderer_info');
    expect(page).toContain("return 'intel'");
  });

  it('routes Intel Macs to the intel download URL', () => {
    expect(page).toContain("detectMacArch() === 'intel'");
  });
});

describe('index.astro — section orb attributes', () => {
  const page = read('src/pages/index.astro');

  it('every section that declares data-hue also declares data-sat', () => {
    const hueMatches = (page.match(/data-hue="/g) || []).length;
    const satMatches = (page.match(/data-sat="/g) || []).length;
    expect(hueMatches).toBeGreaterThan(0);
    expect(satMatches).toBe(hueMatches);
  });

  it('hero section carries orb attributes', () => {
    expect(page).toMatch(/class="hero"[^>]*data-hue/);
  });
});

describe('index.astro — download CTAs', () => {
  const page = read('src/pages/index.astro');

  it('primary CTA defaults to apple-silicon arch', () => {
    expect(page).toContain('data-arch="apple-silicon"');
  });

  it('download grid includes all three platform cards', () => {
    expect(page).toContain('data-arch="apple-silicon"');
    expect(page).toContain('data-arch="intel"');
    expect(page).toContain('data-arch="windows-x64"');
  });

  it('uses downloads.apple for Apple Silicon links', () => {
    expect(page).toContain('href={downloads.apple}');
  });

  it('uses downloads.windows for Windows link', () => {
    expect(page).toContain('href={downloads.windows}');
  });
});

describe('index.astro — footer navigation', () => {
  const page = read('src/pages/index.astro');

  it('links to /demo/', () => {
    expect(page).toContain('href="/demo/"');
  });

  it('links to /changelog/', () => {
    expect(page).toContain('href="/changelog/"');
  });

  it('links to /privacy/', () => {
    expect(page).toContain('href="/privacy/"');
  });

  it('links to /terms/', () => {
    expect(page).toContain('href="/terms/"');
  });
});
