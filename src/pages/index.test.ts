import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(resolve(here, 'index.astro'), 'utf-8');

describe('homepage SEO', () => {
  it('sets the correct page title', () => {
    expect(src).toContain('title="Niyora · Calm in 60 seconds"');
  });

  it('sets a canonical URL pointing to the root', () => {
    expect(src).toContain('canonicalUrl="https://niyora.com"');
  });

  it('sets an OG image', () => {
    expect(src).toContain('ogImage=');
  });
});

describe('homepage downloads wiring', () => {
  it('imports the downloads config', () => {
    expect(src).toContain("from '../config/downloads'");
  });

  it('uses apple silicon URL as default for primary CTA', () => {
    expect(src).toContain('id="primary-download"');
    expect(src).toContain('href={downloads.apple}');
  });

  it('includes download cards for all three platforms', () => {
    expect(src).toContain('data-arch="apple-silicon"');
    expect(src).toContain('data-arch="intel"');
    expect(src).toContain('data-arch="windows-x64"');
  });

  it('wires the intel download card to the intel URL', () => {
    expect(src).toContain('href={downloads.intel}');
  });

  it('wires the windows download card to the windows URL', () => {
    expect(src).toContain('href={downloads.windows}');
  });
});

describe('homepage platform-detection script', () => {
  it('passes all three platform URLs via define:vars', () => {
    expect(src).toContain('define:vars');
    expect(src).toContain('apple: downloads.apple');
    expect(src).toContain('intel: downloads.intel');
    expect(src).toContain('windows: downloads.windows');
  });

  it('detects Windows via navigator.userAgent', () => {
    expect(src).toContain('/Windows/i');
    expect(src).toContain('navigator.userAgent');
  });

  it('updates both primary-download and final-download CTAs', () => {
    expect(src).toContain('primary-download');
    expect(src).toContain('final-download');
    expect(src).toContain("'primary-download', 'final-download'");
  });

  it('guards against missing anchor element', () => {
    expect(src).toContain('if (!a) return');
  });

  it('swaps Windows-specific copy for trust, video, privacy, and recognition elements', () => {
    expect(src).toContain('trust-tagline');
    expect(src).toContain('video-tagline');
    expect(src).toContain('privacy-tagline');
    expect(src).toContain('recognition-copy');
    expect(src).toContain('Nothing leaves your PC.');
  });

  it('detects Mac via userAgent before attempting WebGL lookup', () => {
    expect(src).toMatch(/Mac.*?iPhone.*?iPad.*?test.*?navigator\.userAgent/s);
  });

  it('switches to Intel URL when WebGL renderer reports Intel', () => {
    expect(src).toContain("detectMacArch() === 'intel'");
    expect(src).toContain('applyCta(intel');
  });

  it('uses WEBGL_debug_renderer_info to read the GPU renderer string', () => {
    expect(src).toContain('WEBGL_debug_renderer_info');
    expect(src).toContain('UNMASKED_RENDERER_WEBGL');
  });

  it('wraps WebGL detection in try/catch so errors do not break the page', () => {
    expect(src).toContain('try {');
    expect(src).toContain('} catch (_)');
  });
});
