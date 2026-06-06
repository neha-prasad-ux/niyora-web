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

  it('sitemap integration is registered', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sitemap = (config.integrations! as any[]).find((i) => i?.name === '@astrojs/sitemap');
    expect(sitemap).not.toBeUndefined();
  });
});
