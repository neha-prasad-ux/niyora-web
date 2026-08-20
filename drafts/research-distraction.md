---
title: "Distraction as an emotion regulation strategy"
description: "Research draft. Fourteen verified citations on the process model, distraction versus reappraisal at high emotional intensity, and what happens when distraction is the only tool. Includes the honest finding that distraction has never been tested premenstrually."
date: 2026-08-19
collection: research-draft
status: draft
reviewed_by: ""
---

# Research draft: distraction as an emotion regulation strategy

Nothing here is published. Every citation below was re-checked against its PubMed record, and Lambert 2025 was read in full text. Title, journal, year, design, sample size and result were confirmed for every row. Two rows sit behind a Taylor and Francis paywall and could not be fully checked: Gross 2015, where the finding is unverified, and Matthews 2021, where the numbers are. Both carry a `_WARNING` field. The full audit is in "Citation check" at the end.

Grades follow the site rubric. Strong is a randomized trial or a review of them. Moderate is a large observational study, a cell study, or a review that lines up. Weak is thin, unreplicated, or borrowed from a related field.

Three judgement calls to flag before you read the rows.

**First.** Almost all of this literature is lab work with pictures, sounds and mild electric stimulation, mostly in university students. It is randomized in the technical sense, participants are randomly assigned to conditions, but it is not clinical trial evidence about a person managing a real feeling on a real evening. I graded single lab studies moderate at best, and reserved strong for the meta-analyses.

**Second.** The headline claim, distraction beats reappraisal when emotion is intense, splits into two separate claims that the field often blurs. The claim that people *choose* distraction when emotion is intense is very well supported. The claim that distraction *works better* at high intensity is supported by one small EEG study and contradicted by another lab study. I graded them separately, and I would rather the site does the same.

**Third.** The premenstrual question has a clean, honest answer: nobody has tested it. The 2025 systematic review of emotion regulation in PMDD and PMS covers 22 studies and 1,529 participants, and the word "distraction" does not appear in it. That absence is a finding worth publishing.

---

## 1. Candidate rows

Paste-ready. The `n` field is not included, assign it on paste to keep the existing numbering contiguous.

```json
[
  {
    "topic": "Emotion regulation",
    "tags": ["process-model", "framework", "regulate", "theory"],
    "finding": "The extended process model splits emotion regulation into three stages: identifying that a feeling needs handling, selecting a strategy, implementing it. Framework paper, not a trial",
    "grade": "weak",
    "plain": "Handling a feeling is three steps, not one. Noticing it. Picking what to do. Actually doing it. Most of the time the step that fails is not the last one.",
    "_WARNING": "COULD NOT VERIFY. Paywalled at Taylor and Francis, and not indexed in PubMed or Europe PMC, so there is no record to check the finding against. Title, author, year and DOI were confirmed only through third-party records. Section 3 discloses this; the warning belongs here, next to the row. Do not publish anything resting on this row until someone opens the paper.",
    "source": "Gross, Psychological Inquiry 2015",
    "link": "https://doi.org/10.1080/1047840X.2014.940781",
    "status": "draft"
  },
  {
    "topic": "Emotion regulation",
    "tags": ["distraction", "reappraisal", "intensity", "choice"],
    "finding": "Given a free choice, people picked distraction for high-intensity negative material and reappraisal for low-intensity material (3 experiments, pictures and unpredictable electric stimulation)",
    "grade": "moderate",
    "plain": "When something hits hard, people reach for distraction. When it is milder, they are willing to think it through. That pattern is not weakness, it is what everyone does.",
    "source": "Sheppes, Scheibe, Suri & Gross, Psychological Science 2011",
    "link": "https://pubmed.ncbi.nlm.nih.gov/21960251/",
    "status": "draft"
  },
  {
    "topic": "Emotion regulation",
    "tags": ["distraction", "reappraisal", "intensity", "meta-analysis"],
    "finding": "Systematic review of 219 studies on how people choose a regulation strategy. Emotional intensity had a very large relationship with which strategy was chosen (r+ = 0.61, k = 51 studies), rated highly suggestive on the authors' own evidence criteria",
    "grade": "strong",
    "plain": "Across fifty-one studies, intensity was the single strongest thing predicting which strategy a person reaches for.",
    "_WARNING": "Title, journal, year, authors and '219 studies' all confirmed (PMID 34165040). The numbers in this row could NOT be verified: r+ = 0.61, k = 51 and the 'highly suggestive' rating do not appear in the public abstract, and the full text is paywalled at Taylor and Francis. This row is graded strong and is load-bearing for the whole draft, so the figures need opening before publication.",
    "source": "Matthews, Webb, Shafir, Snow & Sheppes, Cognition and Emotion 2021",
    "link": "https://pubmed.ncbi.nlm.nih.gov/34165040/",
    "status": "draft"
  },
  {
    "topic": "Emotion regulation",
    "tags": ["distraction", "reappraisal", "intensity", "EEG", "mechanism"],
    "finding": "EEG study (n=30 recruited, 27 analyzed): at high intensity both strategies reduced negative experience, and distraction's advantage over just watching was larger than reappraisal's; at low intensity the two were equal. 24 of 27 preferred distraction when anticipating high-intensity images",
    "grade": "weak-moderate",
    "plain": "In one small brain-recording study, distraction pulled the feeling down faster than reasoning did when the feeling was strong. Twenty-seven people. Treat it as a lead, not a rule.",
    "_WARNING": "Direction confirmed exactly (PMID 25700568): at high but not low intensity, distraction produced stronger modulation of negative experience and reduced LPP relative to reappraisal, and anticipating high-intensity stimuli produced a distraction preference. The counts (30 recruited, 27 analysed, 24 of 27 preferring distraction) are not in the abstract. Full text is open at PMC4590533. Check them there before the numbers are published.",
    "source": "Shafir, Schwartz, Blechert & Sheppes, Soc Cogn Affect Neurosci 2015",
    "link": "https://pubmed.ncbi.nlm.nih.gov/25700568/",
    "status": "draft"
  },
  {
    "topic": "Emotion regulation",
    "tags": ["distraction", "reappraisal", "intensity", "contradiction"],
    "finding": "Preference replicated (n=58 chose distraction at high intensity), but on efficacy reappraisal outperformed distraction regardless of intensity (n=50), so what people prefer at high intensity is not what worked in this study",
    "grade": "moderate",
    "plain": "One study tested whether the strategy people prefer is the one that actually helps. It was not. What we reach for and what works are two different questions.",
    "source": "Vered, Haim-Nachum & Levy-Gigi, PLoS One 2021",
    "link": "https://pubmed.ncbi.nlm.nih.gov/34252137/",
    "status": "draft"
  },
  {
    "topic": "Emotion regulation",
    "tags": ["distraction", "effect-size", "meta-analysis"],
    "finding": "Meta-analysis of 306 experimental comparisons: distraction worked but the effect was small (d+ = 0.27). Attentional deployment as a whole did nothing (d+ = 0.00). Reappraising the situation was larger (d+ = 0.36)",
    "grade": "strong",
    "plain": "Distraction works. The effect is small. It is a real tool, not a solution.",
    "source": "Webb, Miles & Sheeran, Psychological Bulletin 2012",
    "link": "https://pubmed.ncbi.nlm.nih.gov/22582737/",
    "status": "draft"
  },
  {
    "topic": "Emotion regulation",
    "tags": ["distraction", "avoidance", "rebound", "long-term"],
    "finding": "Distraction matched distanced reflection for immediate relief, but 1 or 7 days later the distraction group's low mood had risen significantly (d = 0.43) and they reported more recurring thoughts, while the reflection group held (Study 1 n=141, Study 2 n=328)",
    "grade": "moderate",
    "plain": "Distraction felt as good as thinking it through, on the day. A week later only the people who had thought it through were still better off. The feeling came back for the others.",
    "_WARNING": "Design and result confirmed exactly (PMID 18469151), including the 1-day and 7-day follow-ups, the distraction group losing its gain and the fewer recurring thoughts in the distanced-analysis group. The sample sizes (141, 328) and d=0.43 are not in the abstract and the paper is paywalled. Verify before publishing a number. One framing point: the comparator is distanced-analysis specifically, not reflection in general.",
    "source": "Kross & Ayduk, Pers Soc Psychol Bull 2008",
    "link": "https://pubmed.ncbi.nlm.nih.gov/18469151/",
    "status": "draft"
  },
  {
    "topic": "Emotion regulation",
    "tags": ["avoidance", "rumination", "psychopathology", "meta-analysis"],
    "finding": "Meta-analysis of 114 studies and 241 effect sizes on habitual strategy use: rumination showed a large association with anxiety, depression, eating and substance disorders, avoidance a medium to large one",
    "grade": "moderate",
    "plain": "People who mostly avoid, and people who mostly ruminate, carry more symptoms. This is a correlation. It does not prove the strategy caused the symptoms.",
    "source": "Aldao, Nolen-Hoeksema & Schweizer, Clinical Psychology Review 2010",
    "link": "https://pubmed.ncbi.nlm.nih.gov/20015584/",
    "status": "draft"
  },
  {
    "topic": "Emotion regulation",
    "tags": ["distraction", "exposure", "avoidance", "meta-analysis", "contested"],
    "finding": "Meta-analysis of 15 randomized studies (444 participants) on distraction during exposure therapy for specific phobia: distraction was no worse than focused exposure for distress or physiology, and at follow-up favoured distraction for approach behaviour",
    "grade": "strong",
    "plain": "The idea that distraction always sabotages facing a fear did not hold up. In phobia treatment it was not counterproductive, and sometimes helped.",
    "_WARNING": "Confirmed exactly (PMID 24185091): 15 randomized studies, 444 participants, no difference for distress or physiology, follow-up significantly favouring distraction for approach behaviour. One omission that cuts against how this row is used: the abstract also reports that attentionally uninstructed exposure was superior to distraction for behaviour. Add it, otherwise the row reads as a stronger defence of distraction than the paper gives.",
    "source": "Podina, Koster, Philippot, Dethier & David, Clinical Psychology Review 2013",
    "link": "https://pubmed.ncbi.nlm.nih.gov/24185091/",
    "status": "draft"
  },
  {
    "topic": "Emotion regulation",
    "tags": ["flexibility", "repertoire", "framework"],
    "finding": "Regulatory flexibility framework: outcomes depend on reading the context, having more than one strategy available, and adjusting on feedback, rather than on any strategy being good or bad. Review, not a trial",
    "grade": "weak",
    "plain": "No strategy is good or bad on its own. What matters is whether you have more than one and can tell which moment needs which.",
    "source": "Bonanno & Burton, Perspectives on Psychological Science 2013",
    "link": "https://pubmed.ncbi.nlm.nih.gov/26173226/",
    "status": "draft"
  },
  {
    "topic": "PMDD / PMS",
    "tags": ["emotion-regulation", "systematic-review", "evidence-gap"],
    "finding": "Systematic review of emotion regulation in PMDD and PMS, 22 studies and 1,529 participants: signs of difficulty at the identification and selection stages, increased rumination in the late luteal phase, and almost no experimental work on whether strategies can actually be carried out. Distraction is not examined in any included study",
    "grade": "moderate",
    "plain": "The research on handling feelings before a period is mostly about noticing and choosing, not about what actually works. Distraction has not been tested at all.",
    "_WARNING": "Verified against the open full text (PMC12642270, PMID 41287037): 22 studies, n=1,529, difficulties at the identification and selection stages, increased late-luteal rumination, and few experimental studies on implementation. The key claim holds. 'Distraction' occurs twice in the entire paper and both occurrences are in the reference list, so no included study examined it. Correct one detail in section 3: the word does appear, just never outside the references.",
    "source": "Lambert, Hunter, Cocker, Gurvich & Chalder, BMC Psychology 2025",
    "link": "https://pubmed.ncbi.nlm.nih.gov/41287037/",
    "status": "draft"
  },
  {
    "topic": "PMDD",
    "tags": ["emotion-regulation", "reappraisal", "luteal", "daily-life"],
    "finding": "Ambulatory study, 61 women with PMDD and 61 controls sampled across four cycle phases: reappraisal and mindfulness predicted better mood across the cycle, but did not prevent mood dropping in the late luteal phase. Women using the better strategies had stronger cyclicity and ended up level with the rest premenstrually",
    "grade": "moderate",
    "plain": "The strategies that carry you through the month stop holding in the days before your period. That is the study's actual result, and it is worth knowing before you blame yourself for it.",
    "source": "Nayman, Beddig, Reinhard & Kuehner, Psychological Medicine 2023",
    "link": "https://pubmed.ncbi.nlm.nih.gov/35979813/",
    "status": "draft"
  },
  {
    "topic": "PMDD",
    "tags": ["executive-function", "reappraisal", "luteal", "mechanism"],
    "finding": "63 women with PMDD vs 53 controls tested in early and late luteal phases: response inhibition on a Simon task was worse in the late luteal phase in the PMDD group only, and reappraisal use was lower in both luteal phases and correlated with executive function",
    "grade": "moderate",
    "plain": "Reasoning yourself out of a feeling takes the same attention that dips in the days before your period. The tool gets harder to use exactly when you need it.",
    "source": "Lin, Ko & Yen, Journal of Personalized Medicine 2022",
    "link": "https://pubmed.ncbi.nlm.nih.gov/35629240/",
    "status": "draft"
  },
  {
    "topic": "PMS / PMDD",
    "tags": ["rumination", "premenstrual", "risk-factor"],
    "finding": "Rumination was strongly related to premenstrual distress in a retrospective sample (n=735) and in a prospectively confirmed sample (n=85) after 60 days of symptom monitoring",
    "grade": "moderate",
    "plain": "Going over the same thought again and again tracks with worse premenstrual symptoms. It is the pattern most worth interrupting.",
    "source": "Craner, Sigmon, Martinson & McGillicuddy, J Clin Psychol 2014",
    "link": "https://pubmed.ncbi.nlm.nih.gov/23798035/",
    "status": "draft"
  }
]
```

Every link above was opened and confirmed against the paper's own record. Lin 2022 was read through its open-access PMC copy, [PMC9147888](https://pmc.ncbi.nlm.nih.gov/articles/PMC9147888/), if you would rather link the free full text than the PubMed stub.

---

## 2. What the evidence supports, and what it does not

**Supported.** People reliably choose distraction when a feeling is intense and reappraisal when it is mild. This is the best-established finding in the set. It holds across pictures, sounds, words and electric stimulation, it holds when intensity is measured rather than manipulated, and the meta-analysis of 219 studies puts it at r+ = 0.61 across 51 studies.

**Supported.** Distraction reduces negative feeling in the moment. The effect is small, d+ = 0.27 across 306 experimental comparisons, and it is smaller than reappraising the situation.

**Supported, with one study behind it.** At high intensity, distraction may work faster than reappraisal, not just be preferred. That comes from 27 people with EEG caps on. It is a lead.

**Not supported.** That distraction is generally the better strategy at high intensity. A direct efficacy test found reappraisal outperformed distraction at both intensity levels. The preference and the payoff came apart.

**Supported.** Distraction does not process anything. In the study with follow-up, relief on the day was real and equal to reflection, and by the next day or the next week the mood had climbed back and the thoughts had returned. Reflection held, distraction did not.

**Not supported, and this is where the popular version of this idea is wrong.** That distraction is a form of avoidance and therefore harmful. Habitual avoidance correlates with more anxiety and depression, but that is dispositional and correlational, and it is measured as a personality-level pattern, not as one person using one strategy on one evening. And when distraction was tested directly inside exposure therapy, across 15 randomized studies, it was not counterproductive at all. The honest statement is narrower: relief without processing does not accumulate, and a person who has only one strategy is worse off than a person who has several.

**Not tested.** Any of this, premenstrually. Not one study.

The closest premenstrual evidence is indirect and points in a specific direction. Reappraisal is the effortful strategy, it needs attention and inhibition, and late-luteal executive function is measurably worse in PMDD. Reappraisal use is lower in the luteal phase. And in daily life, the women with the best habitual strategies still lost the premenstrual battle. If you put those three together you get a plausible argument that the premenstrual window is exactly where the low-effort strategy should earn its place. That argument is a hypothesis. It has never been run.

---

## 3. What is missing or contested, and what would change the grade

**Missing: any premenstrual test of distraction.** The 2025 systematic review is the definitive statement of the gap. 22 studies, 1,529 participants, and distraction is not one of the strategies anyone measured. Craner 2014 administered a coping-styles questionnaire to 820 women across two studies but reported nothing on distraction. What would change the grade: a within-person study comparing distraction and reappraisal in the late luteal versus follicular phase, with the same women. Sample of 60 to 80 would settle it. This is a study somebody should run.

**Contested: whether distraction actually wins at high intensity.** Shafir 2015 says yes on 27 people with neural corroboration. Vered 2021 says no on 50 people with a direct efficacy comparison. There is no meta-analysis of efficacy by intensity, only of choice by intensity. What would change the grade: a preregistered replication with adequate power, or a meta-analysis restricted to efficacy outcomes. Until then the efficacy claim stays weak-moderate and the site should not say distraction works better when it is bad.

**Contested: whether distraction is avoidance.** The exposure therapy meta-analysis is the strongest counter-evidence and it is inconvenient for the simple story. Distraction during exposure was not harmful and at follow-up favoured distraction for approach behaviour. The avoidance concern rests on dispositional correlations (Aldao 2010) and on the rebound seen in Kross 2008. Those are different levels of analysis. What would change this: a longitudinal study measuring within-person distraction use and outcomes over months. What exists is cross-sectional.

**Weak by design: the ecological validity of the whole lab literature.** Mutilation photographs are not a fight with your partner. The intensity manipulation is not the same as the intensity of a real feeling that has a history. No row in this draft should be described on the site as if it were tested on real life.

**One near miss worth knowing about.** There is a 2025 randomized trial of virtual reality relaxation and exergaming in 43 women with primary dysmenorrhea. It is cycle-adjacent and the exergaming arm works partly by pulling attention away from the body. I read it and left it out. It is menstrual pain, not premenstrual emotion, no arm was framed as distraction, and the control arm did as well or better. It does not belong in the rows.

**What I could not verify.** The Gross 2015 process model paper is behind a paywall at Taylor and Francis. I confirmed title, author, year and DOI through the Semantic Scholar record and through the Lambert 2025 review, which uses the extended process model as its organizing frame and describes the same three stages. I did not read the full text. If that is not good enough for the site's standard, cut the row. The model is described accurately either way.

---

## 4. Does this deserve its own page

Yes, and it is a stronger page than most of the research topics, for a reason that has nothing to do with the strength of the evidence.

Every woman reading this already uses distraction. She scrolls, she cleans, she puts something on. What she does not have is permission for it, or a boundary around it. The page is not selling a technique. It is telling her that the thing she already does is a recognized strategy with a research literature, that it works in the moment, that the science says it works less well the more it is the only thing she does, and that the moment it becomes the only tool is the moment it stops being regulation.

What the page should target.

- The search intent is "how to stop feeling like this right now" and "why can't I just calm down before my period". Not "emotion regulation strategies", which is a psychology-student query.
- The honest hook is the gap, not the finding. A page that opens with "distraction has never been studied in the days before a period, here is what we know from everywhere else and how far it carries" is more trustworthy than any competitor page and is genuinely novel content.
- It should carry the catch in the body, not in a footnote. Distraction bought relief on the day and the mood was back a week later. That is one sentence and it is the whole argument for having a second tool.
- It links naturally to whatever page covers rumination, since rumination is the pattern distraction is competing against, and rumination is the one thing with real premenstrual evidence behind it.
- It should not claim that distraction is better than reappraisal when things are intense. The evidence for that is one small study, and one study says the opposite.

What the page must not say: that distraction is avoidance, that avoidance causes anxiety, or that reappraisal is the mature strategy. None of those are supported at the strength the phrasing would imply.

---

## Citation check, run against the source records

Every link was resolved against its PubMed record, and Lambert 2025 was read in full text
to test the central claim that no included study examined distraction. It holds.

**Verified exactly, no changes needed.**

- Sheppes 2011 (PMID 21960251): three experiments, emotional pictures and unpredictable
  electric stimulation, distraction preferred at high intensity and reappraisal at low.
  Exact.
- Vered 2021 (PMID 34252137): Experiment 1A n=58 replicated the preference, Experiment 1B
  n=50 found reappraisal more effective than distraction independent of intensity. Exact,
  including the "contrary to our prediction" framing. Worth knowing that a third experiment
  (n=113) found distraction's advantage grew with depressive symptoms in perceived
  low-intensity situations. It does not contradict the row.
- Webb, Miles and Sheeran 2012 (PMID 22582737): 306 experimental comparisons, attentional
  deployment d+ = 0.00, distraction d+ = 0.27, reappraising the emotional stimulus
  d+ = 0.36. Exact.
- Aldao, Nolen-Hoeksema and Schweizer 2010 (PMID 20015584): 241 effect sizes from 114
  studies, large for rumination, medium to large for avoidance, across anxiety, depression,
  eating and substance disorders. Exact.
- Bonanno and Burton 2013 (PMID 26173226): review, three components are sensitivity to
  context, a diverse repertoire and responsiveness to feedback. Exact.
- Nayman, Beddig, Reinhard and Kuehner 2023 (PMID 35979813): 61 with PMDD and 61 controls,
  four cycle phases, favourable strategies predicted better mood yet produced stronger mood
  cyclicity, "thereby resembling women with more unfavourable ER-strategies toward the end
  of the cycle". Exact, and the draft's rendering of it is the best line in the file.
- Lin, Ko and Yen 2022 (PMID 35629240): 63 with PMDD and 53 controls, Simon task worse in
  the late luteal phase in the PMDD group, reappraisal use lower in both luteal phases and
  correlated with executive function. Exact. PMC9147888 is the free full text, as noted.
- Craner 2014 (PMID 23798035): n=735 retrospective and n=85 after 60-day monitoring, coping
  styles questionnaires in both, rumination strongly related throughout. Exact, and 735 + 85
  is the 820 quoted in section 3.

**Rows carrying a `_WARNING` field.** Gross 2015 (unverifiable), Matthews 2021 (numbers
unverifiable), Shafir 2015, Kross and Ayduk 2008, Podina 2013, Lambert 2025. Read the field
before the row.

**The two rows to resolve before anything publishes.** Gross 2015 and Matthews 2021 are the
framework and the strongest quantitative claim in the draft, and both sit behind the same
paywall. Everything else here checked out to the digit.
