import { describe, it, expect } from 'vitest';
import config from './astro.config.mjs';

describe('astro.config', () => {
  it('sets site to the production HTTPS URL', () => {
    expect(config.site).toBe('https://niyora.com');
  });

  it('site URL is parseable and uses HTTPS', () => {
    expect(() => new URL(config.site)).not.toThrow();
    expect(new URL(config.site).protocol).toBe('https:');
  });

  it('includes exactly one integration', () => {
    expect(config.integrations).toHaveLength(1);
  });

  it('uses the sitemap integration', () => {
    expect(config.integrations[0].name).toBe('@astrojs/sitemap');
  });
});
