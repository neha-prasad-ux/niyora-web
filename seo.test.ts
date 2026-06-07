import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(dirname(fileURLToPath(import.meta.url)));

function read(rel: string): string {
  return readFileSync(resolve(root, rel), 'utf-8');
}

describe('robots.txt', () => {
  const robots = read('public/robots.txt');

  it('allows all crawlers', () => {
    expect(robots).toContain('User-agent: *');
    expect(robots).toContain('Allow: /');
  });

  it('points to the sitemap index', () => {
    expect(robots).toContain('Sitemap: https://niyora.com/sitemap-index.xml');
  });
});

describe('Base.astro OG/Twitter meta tags', () => {
  const base = read('src/layouts/Base.astro');

  it('emits og:title', () => {
    expect(base).toContain('og:title');
  });

  it('emits og:description', () => {
    expect(base).toContain('og:description');
  });

  it('emits og:image', () => {
    expect(base).toContain('og:image');
  });

  it('emits og:url', () => {
    expect(base).toContain('og:url');
  });

  it('emits og:type', () => {
    expect(base).toContain('og:type');
  });

  it('emits twitter:card', () => {
    expect(base).toContain('twitter:card');
  });

  it('emits twitter:title', () => {
    expect(base).toContain('twitter:title');
  });

  it('emits twitter:description', () => {
    expect(base).toContain('twitter:description');
  });

  it('emits twitter:image', () => {
    expect(base).toContain('twitter:image');
  });

  it('has ogImage prop with a default value', () => {
    expect(base).toMatch(/ogImage\s*[?=]/);
  });

  it('derives the canonical URL from Astro.url by default', () => {
    expect(base).toContain('Astro.url');
  });
});
