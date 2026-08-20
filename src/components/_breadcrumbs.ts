export interface Crumb { name: string; href: string }

/**
 * BreadcrumbList JSON-LD. Google shows the trail instead of a bare URL in the
 * result, so every page below the top level should carry one. Pass the trail
 * without Home: it is always the first item.
 */
export function breadcrumbs(trail: Crumb[]) {
  const items = [{ name: 'Home', href: '/' }, ...trail];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.href, 'https://niyora.com').href,
    })),
  };
}
