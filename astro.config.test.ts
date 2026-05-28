import { describe, it, expect } from 'vitest';
import config from './astro.config.mjs';

describe('astro.config', () => {
  it('targets the production site URL', () => {
    expect(config.site).toBe('https://niyora.com');
  });

  it('site URL is a valid parseable HTTPS URL', () => {
    expect(() => new URL(config.site!)).not.toThrow();
    expect(new URL(config.site!).protocol).toBe('https:');
  });

  it('includes exactly one integration', () => {
    expect(config.integrations).toHaveLength(1);
  });

  it('sitemap integration is registered', () => {
    const sitemap = config.integrations![0] as { name: string };
    expect(sitemap.name).toBe('@astrojs/sitemap');
  });
});
