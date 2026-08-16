import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const here = dirname(fileURLToPath(import.meta.url));
const demo = readFileSync(resolve(here, 'index.astro'), 'utf-8');

describe('demo page SEO', () => {
  it('sets a descriptive title', () => {
    expect(demo).toContain('title="Niyora in motion"');
  });

  it('sets a description prop', () => {
    expect(demo).toContain('description=');
  });

  it('sets a canonical URL pointing to /demo', () => {
    expect(demo).toContain('canonicalUrl="https://niyora.com/demo"');
  });

  it('sets an OG image', () => {
    expect(demo).toContain('ogImage=');
  });
});

describe('demo page download CTA', () => {
  it('imports the downloads config', () => {
    expect(demo).toContain("from '../../config/downloads'");
  });

  it('uses apple silicon URL as the default download href', () => {
    expect(demo).toContain('href={downloads.apple}');
  });

  it('passes all three platform URLs via define:vars', () => {
    expect(demo).toContain('apple: downloads.apple');
    expect(demo).toContain('intel: downloads.intel');
    expect(demo).toContain('windows: downloads.windows');
  });

  it('sets data-arch="apple-silicon" as the default CTA attribute', () => {
    expect(demo).toContain('data-arch="apple-silicon"');
  });
});

describe('demo page platform-detection script', () => {
  it('guards against missing anchor element', () => {
    expect(demo).toContain('if (!a) return');
  });

  it('detects Windows and redirects to the Windows build', () => {
    expect(demo).toMatch(/Windows.*?test.*?navigator\.userAgent/s);
    expect(demo).toContain("a.href = windows");
  });

  it('detects Mac via userAgent before querying WebGL', () => {
    expect(demo).toMatch(/Mac.*?iPhone.*?iPad.*?test.*?navigator\.userAgent/s);
  });

  it('switches to intel URL when WebGL renderer reports Intel', () => {
    expect(demo).toContain("detectMacArch() === 'intel'");
    expect(demo).toContain('a.href = intel');
  });

  it('includes a try/catch so WebGL errors do not break the page', () => {
    expect(demo).toContain('try {');
    expect(demo).toContain('} catch (_)');
  });
});

describe('demo page video element', () => {
  it('has an aria-label on the video for accessibility', () => {
    expect(demo).toContain('aria-label=');
  });

  it('includes a fallback text link inside the video element', () => {
    expect(demo).toContain('Your browser does not support the video element');
  });

  it('sets autoplay, muted, and playsinline for safe inline autoplay', () => {
    expect(demo).toContain('autoplay');
    expect(demo).toContain('muted');
    expect(demo).toContain('playsinline');
  });
});
