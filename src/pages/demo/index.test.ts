import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const src = readFileSync(resolve(root, 'pages/demo/index.astro'), 'utf-8');

describe('demo/index.astro — video element', () => {
  it('has autoplay, muted, controls, and playsinline attributes', () => {
    expect(src).toContain('autoplay');
    expect(src).toContain('muted');
    expect(src).toContain('controls');
    expect(src).toContain('playsinline');
  });

  it('has an aria-label for accessibility', () => {
    expect(src).toContain('aria-label=');
  });

  it('includes a fallback paragraph for browsers without video support', () => {
    expect(src).toMatch(/<p>.*does not support the video element/);
  });

  it('links to a downloadable copy of the video as the fallback', () => {
    expect(src).toContain('Download the demo video');
  });
});

describe('demo/index.astro — platform-detection script', () => {
  it('passes all three platform URLs via define:vars', () => {
    expect(src).toContain('define:vars');
    expect(src).toContain('apple:');
    expect(src).toContain('intel:');
    expect(src).toContain('windows:');
  });

  it('detects Windows via navigator.userAgent', () => {
    expect(src).toContain('navigator.userAgent');
    expect(src).toContain('/Windows/i');
  });

  it('detects Intel Mac via WebGL WEBGL_debug_renderer_info', () => {
    expect(src).toContain('WEBGL_debug_renderer_info');
    expect(src).toContain('UNMASKED_RENDERER_WEBGL');
    expect(src).toContain('/Intel/i');
  });

  it('detects Apple Silicon via renderer string', () => {
    expect(src).toContain('Apple');
    expect(src).toContain('apple-silicon');
  });

  it('sets the Windows anchor text when Windows is detected', () => {
    expect(src).toContain('Download for Windows');
  });
});

describe('demo/index.astro — CTA and metadata', () => {
  it('defaults the download CTA to the Apple Silicon build', () => {
    expect(src).toContain("href={downloads.apple}");
    expect(src).toContain('data-arch="apple-silicon"');
  });

  it('sets a canonical URL for the demo page', () => {
    expect(src).toContain('canonicalUrl="https://niyora.com/demo"');
  });

  it('provides an ogImage', () => {
    expect(src).toContain('ogImage=');
  });

  it('links back to the homepage', () => {
    expect(src).toContain('href="/"');
  });
});
