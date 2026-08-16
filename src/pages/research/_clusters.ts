import rows from '../../data/research.json';

export interface ResearchRow {
  n: number;
  topic: string;
  tags: string[];
  finding: string;
  grade: string;
  plain: string;
  source: string;
  link: string;
  status: string;
}

export interface Cluster {
  slug: string;
  title: string;
  question: string;
  intro: string;
  /** First cluster whose triggers match a row's tags wins, so this order matters. */
  triggers: string[];
  related: { label: string; href: string }[];
}

/**
 * Match order, not reading order. Narrow clusters come first so a row tagged
 * both `micronutrient` and `GABA` lands under micronutrients rather than
 * mechanism. Reading order is DISPLAY_ORDER below.
 */
export const CLUSTERS: Cluster[] = [
  {
    slug: 'differentials',
    title: 'Is it PMS, or something else',
    question: 'How do I know whether this is PMS, PMDD, or another condition?',
    intro:
      'What the evidence says about the conditions that look like PMS, overlap with it, or make it worse, and what separates them.',
    triggers: ['differential', 'comorbidity'],
    related: [{ label: 'PMS vs PMDD', href: '/blog/pms-vs-pmdd-whats-the-difference/' }],
  },
  {
    slug: 'tools-with-evidence',
    title: 'Non-drug tools with trial evidence',
    question: 'What can I actually do in the moment, that has been tested?',
    intro:
      'The small, physical things that have been measured in trials rather than passed around as advice.',
    triggers: ['active-tool', 'intervention'],
    related: [
      { label: 'How to calm down fast', href: '/blog/how-to-calm-down-fast/' },
      { label: 'How to process anger', href: '/blog/how-to-process-anger/' },
    ],
  },
  {
    slug: 'micronutrients',
    title: 'Micronutrients',
    question: 'Do calcium, magnesium, or vitamin D actually help PMS?',
    intro:
      'Three micronutrients have real trial evidence behind them. The quality is not the same for all three, so the grade matters here more than anywhere.',
    triggers: ['micronutrient'],
    related: [],
  },
  {
    slug: 'ovaries-and-nerves',
    title: 'Ovaries and the nervous system',
    question: 'Is there a physical connection between stress and my ovaries?',
    intro:
      'Your ovaries are directly wired into your nervous system. This is newer research and worth watching.',
    triggers: ['reproductive'],
    related: [
      { label: 'Your ovaries and your nervous system', href: '/blog/ovaries-nervous-system/' },
    ],
  },
  {
    slug: 'sleep-and-body-clock',
    title: 'Sleep and the body clock',
    question: 'Why does my sleep fall apart before my period?',
    intro: 'What is known about melatonin timing and sleep across the cycle.',
    triggers: ['sleep', 'circadian'],
    related: [
      { label: 'PMS insomnia', href: '/pms/insomnia/' },
      {
        label: 'How to stop overthinking at night',
        href: '/blog/how-to-stop-overthinking-at-night/',
      },
    ],
  },
  {
    slug: 'inflammation-and-blood-sugar',
    title: 'Inflammation and blood sugar',
    question: 'Does what my body is carrying physically change how the week lands?',
    intro:
      'Two background loads that track with symptom severity. Most of this evidence is correlational, so read the grades carefully.',
    triggers: ['inflammation', 'blood-sugar', 'metabolic'],
    related: [{ label: 'PMS overwhelm', href: '/pms/overwhelm/' }],
  },
  {
    slug: 'mechanism',
    title: 'What is actually happening',
    question: 'What is physically going on in my brain?',
    intro:
      'Genetics, GABA, serotonin, and the add-back studies. This is the strongest-evidenced part of the picture, and the reason none of this is you imagining things.',
    triggers: ['mechanism', 'genetics', 'hormone-sensitivity', 'root-cause'],
    related: [{ label: 'PMS anxiety', href: '/pms/anxiety/' }],
  },
  {
    slug: 'stress-and-cortisol',
    title: 'Stress, history, and cortisol',
    question: 'Why do these weeks land harder when life has been hard?',
    intro:
      'How the stress axis shifts across the cycle, and what early adversity appears to do to premenstrual symptoms.',
    triggers: ['stress', 'trauma', 'cortisol', 'HPA'],
    related: [{ label: 'PMS anxiety', href: '/pms/anxiety/' }],
  },
  {
    slug: 'getting-help',
    title: 'Getting help',
    question: 'What treatments exist, and why do so few of us ask?',
    intro:
      'The clinical references behind what is treatable, and the research on why women wait so long to raise it.',
    triggers: ['clinical-reference', 'help-seeking', 'treatment'],
    related: [{ label: 'Take the two-minute check', href: '/quiz/' }],
  },
];

/** Reading order on the index: the frame first, then what people search for. */
export const DISPLAY_ORDER = [
  'mechanism',
  'micronutrients',
  'tools-with-evidence',
  'differentials',
  'inflammation-and-blood-sugar',
  'stress-and-cortisol',
  'sleep-and-body-clock',
  'ovaries-and-nerves',
  'getting-help',
];

export const GRADE_ORDER = ['strong', 'moderate', 'weak-moderate', 'weak'];

export const allRows = rows as ResearchRow[];

const HOSTS: Record<string, string> = {
  'pubmed.ncbi.nlm.nih.gov': 'PubMed',
  'pmc.ncbi.nlm.nih.gov': 'PubMed Central',
  'www.ncbi.nlm.nih.gov': 'PubMed Central',
  'www.nature.com': 'Nature',
  'www.cambridge.org': 'BJPsych',
  'www.medrxiv.org': 'medRxiv preprint',
  'www.nejm.org': 'NEJM',
  'journals.plos.org': 'PLOS ONE',
  'www.sciencedirect.com': 'ScienceDirect',
  'link.springer.com': 'Springer',
  'www.ucsf.edu': 'UCSF',
};

/**
 * The Source column is written for us, not for readers: half of it is
 * "appendix L2 (Mg)". Show the citation when there is one, otherwise name the
 * journal the link points at. Never show the internal appendix pointer.
 */
export function sourceLabel(row: ResearchRow): string {
  // Only internal notes get stripped. Parentheses can be part of a name, as in
  // "ESC/E(Z) follow-ups".
  const cleaned = row.source
    .replace(/\([^)]*\b(?:appendix|verify)\b[^)]*\)/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (cleaned && !/^appendix/i.test(cleaned)) return cleaned;
  if (!row.link) return 'Source on file';
  const host = new URL(row.link).hostname;
  return HOSTS[host] ?? host.replace(/^www\./, '');
}

export function clusterFor(row: ResearchRow): Cluster | undefined {
  return CLUSTERS.find((c) => row.tags.some((tag) => c.triggers.includes(tag)));
}

/** Clusters in reading order, each with its rows, strongest evidence first. */
export function grouped(): { cluster: Cluster; rows: ResearchRow[] }[] {
  return DISPLAY_ORDER.map((slug) => {
    const cluster = CLUSTERS.find((c) => c.slug === slug)!;
    return {
      cluster,
      rows: allRows
        .filter((row) => clusterFor(row)?.slug === slug)
        .sort((a, b) => GRADE_ORDER.indexOf(a.grade) - GRADE_ORDER.indexOf(b.grade)),
    };
  }).filter((group) => group.rows.length > 0);
}

/** Rows no cluster claims. Should always be empty, see _clusters.test.ts. */
export function unclustered(): ResearchRow[] {
  return allRows.filter((row) => !clusterFor(row));
}

/**
 * Clusters big enough to carry their own page. One row is a paragraph, not a
 * page, so it stays on the index until the table grows into it.
 */
export function pagedClusters(): { cluster: Cluster; rows: ResearchRow[] }[] {
  return grouped().filter((group) => group.rows.length >= 2);
}
