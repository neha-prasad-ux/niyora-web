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

  it('includes the sitemap integration', () => {
    expect(config.integrations.some(i => i.name === '@astrojs/sitemap')).toBe(true);
  });
});
