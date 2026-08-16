// Scoring model for the "How much is PMS affecting you?" self-check.
// One source of truth: the page renders questions, options and band copy from
// here, and _quiz.test.ts asserts the band maths. This is a self-check, not a
// diagnosis. If exact in-app scoring is ever documented, reconcile it here.

export type Option = { label: string; value: number };
export type Question = { id: string; eyebrow: string; text: string };
export type BandId = 'mild' | 'noticeable' | 'high';

export type Band = {
  id: BandId;
  label: string;
  min: number;
  max: number;
  hue: number; // tints the orb accents on the result
  headline: string;
  body: string; // grounded in the Reflect / Regulate / Respond model
  note?: string; // shown only when present (safety line on the high band)
};

// A 0 to 3 intensity scale, uniform across every question so the score is a
// plain sum. Loosely modelled on the Premenstrual Symptoms Screening Tool.
export const OPTIONS: Option[] = [
  { label: 'Not at all', value: 0 },
  { label: 'A little', value: 1 },
  { label: 'Quite a bit', value: 2 },
  { label: 'A lot', value: 3 },
];

// Five feelings (the ones Niyora is built around) plus two impact questions and
// one overall read. Each answer is 0 to 3.
export const QUESTIONS: Question[] = [
  {
    id: 'irritable',
    eyebrow: 'On edge',
    text: 'In the days before your period, how much do small things make you snap or leave you on edge?',
  },
  {
    id: 'anxious',
    eyebrow: 'Anxious',
    text: 'How much does anxiety, or a sense of dread, turn up that week?',
  },
  {
    id: 'low',
    eyebrow: 'Low',
    text: 'How often are you low or tearful, or unable to enjoy things you usually like?',
  },
  {
    id: 'overwhelmed',
    eyebrow: 'Overwhelmed',
    text: 'Does an ordinary day start to feel like too much, like the load got heavier on its own?',
  },
  {
    id: 'foggy',
    eyebrow: 'Foggy',
    text: 'How much does your focus scatter, with your attention pulled toward the worst case or the self critical?',
  },
  {
    id: 'relationships',
    eyebrow: 'The people close to you',
    text: 'How much does it spill onto the people close to you, sharper words, more distance, more friction?',
  },
  {
    id: 'function',
    eyebrow: 'Getting things done',
    text: 'How much does it get in the way of work, study, or what you need to get done?',
  },
  {
    id: 'overall',
    eyebrow: 'Taken together',
    text: 'Overall, how much does the week before your period take from you?',
  },
];

const MAX_PER = Math.max(...OPTIONS.map((o) => o.value));
export const MAX_SCORE = QUESTIONS.length * MAX_PER; // 24

export const BANDS: Band[] = [
  {
    id: 'mild',
    label: 'Mild',
    min: 0,
    max: 6,
    hue: 210,
    headline: 'Your PMS sits on the lighter side.',
    body: "You feel the shift, but most months it stays in the background. That is worth protecting. The same skill that keeps a light week light, noticing the feeling, settling your body, and seeing the thought from a step back, is what stops the occasional rough month from taking over. Niyora teaches it in about a minute a day, so it is ready if a week ever lands harder.",
  },
  {
    id: 'noticeable',
    label: 'Noticeable',
    min: 7,
    max: 15,
    hue: 280,
    headline: 'PMS is clearly landing on your week.',
    body: "For a stretch each cycle, the same normal hormone shift hits your brain harder than it hits most people. That is sensitivity, not weakness, and it has an end date every month. What changes a week like this is not your hormones, it is having something to do in the moment: reflect on what you are feeling, regulate your body through the wave, then respond in a way you will not regret. That is the loop Niyora walks you through.",
  },
  {
    id: 'high',
    label: 'High impact',
    min: 16,
    max: MAX_SCORE,
    hue: 335,
    headline: 'PMS is taking a real toll right now.',
    body: 'This is a heavy load to carry every cycle, and the research is clear that the size of the response, not your hormone levels, is what makes a week like this. It can be met. Reflecting on the feeling, regulating your body before you act, and responding with a clearer head are learnable skills, and they move the needle most for weeks this strong. Niyora is built for exactly these days.',
    note: 'If the week before your period regularly brings deep hopelessness, or any thought of harming yourself, this self-check is not the right tool. Please reach out to a doctor or a local crisis line. A small share of people have PMDD, a severe and treatable form, and a clinician can help you name it.',
  },
];

export function bandFor(total: number): Band {
  const t = Math.max(0, Math.min(total, MAX_SCORE));
  return BANDS.find((b) => t >= b.min && t <= b.max) ?? BANDS[BANDS.length - 1];
}
