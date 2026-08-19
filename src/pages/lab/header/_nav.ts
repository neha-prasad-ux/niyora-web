export interface NavLink { href: string; label: string; note?: string }
export interface NavSection { key: string; label: string; blurb: string; links: NavLink[] }

/** The real tree, so each variant is judged against real content volume. */
export const SECTIONS: NavSection[] = [
  {
    key: 'pms',
    label: 'Your symptoms',
    blurb: 'Start with what you are feeling right now.',
    links: [
      { href: '/pms/anxiety/', label: 'Anxiety', note: 'Worry out of proportion' },
      { href: '/pms/anger/', label: 'Anger', note: 'Rage that arrives fast' },
      { href: '/pms/crying/', label: 'Crying', note: 'Tears with no clear cause' },
      { href: '/pms/brain-fog/', label: 'Brain fog', note: 'Words and focus slipping' },
      { href: '/pms/insomnia/', label: 'Insomnia', note: 'Mind will not stop at night' },
      { href: '/pms/overwhelm/', label: 'Overwhelm', note: 'Everything at once' },
    ],
  },
  {
    key: 'research',
    label: 'The research',
    blurb: 'Every claim graded, with the paper behind it.',
    links: [
      { href: '/research/', label: 'All 26 findings', note: 'Graded strong to weak' },
      { href: '/research/mechanism/', label: 'What is happening', note: 'Genes, GABA, serotonin' },
      { href: '/research/micronutrients/', label: 'Calcium, magnesium, vitamin D' },
      { href: '/research/tools-with-evidence/', label: 'Things actually tested' },
      { href: '/research/differentials/', label: 'Is it PMS, or something else' },
      { href: '/research/gaps/', label: 'What nobody studies', note: '3 papers on one topic' },
      { href: '/research/trials/', label: 'Trials you could join', note: '49 open studies' },
    ],
  },
  {
    key: 'compare',
    label: 'Compare',
    blurb: 'How Niyora differs, and what other apps do with your data.',
    links: [
      { href: '/compare/privacy/', label: 'What apps do with your data', note: '9 apps, their own words' },
      { href: '/compare/niyora-vs-flo/', label: 'vs Flo' },
      { href: '/compare/niyora-vs-clue/', label: 'vs Clue' },
      { href: '/compare/niyora-vs-stardust/', label: 'vs Stardust' },
      { href: '/compare/niyora-vs-bearable/', label: 'vs Bearable' },
      { href: '/compare/niyora-vs-apple-cycle-tracking/', label: 'vs Apple Cycle Tracking' },
      { href: '/compare/alternatives-to-mood-trackers/', label: 'All comparisons' },
    ],
  },
  {
    key: 'read',
    label: 'Reading',
    blurb: 'Longer pieces, and the practical how-to.',
    links: [
      { href: '/blog/', label: 'Writing', note: '19 pieces' },
      { href: '/guide/', label: 'The guide' },
      { href: '/faq/', label: 'FAQ' },
      { href: '/about/', label: 'About' },
      { href: '/changelog/', label: "What's new" },
    ],
  },
];
