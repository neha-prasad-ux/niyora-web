---
title: "Mindfulness and meditation for premenstrual symptoms"
description: "Research draft. Twelve verified citations on MBSR, mindfulness apps, MBCT and brief practice, graded, with the borrowed anxiety evidence marked as borrowed."
date: 2026-08-19
collection: research-draft
status: draft
reviewed_by: ""
---

# Research draft: mindfulness and meditation for premenstrual symptoms

Nothing here is published. Every citation below was re-checked against its PubMed or PMC record, and Bluth 2015 was read in full text because PubMed carries no abstract for it. Title, journal, year, design, sample size and result were confirmed for every row. Nine rows checked out to the digit. Three carry a `_WARNING` field. The full audit is in "Citation check" at the end, and anything I could not open is listed there instead of cited.

Grades follow the site rubric. Strong is a randomized trial or a review of them. Moderate is a large observational study, a cell study, or a review that lines up. Weak is thin, unreplicated, or borrowed from a related field.

One judgement call to flag before you read the rows. By the letter of the rubric, every premenstrual mindfulness RCT below is "strong", because they are randomized trials. I graded most of them **moderate** instead. The reason is the same in all of them: the control group got nothing, the participants knew which group they were in, and the outcome was a questionnaire the participant filled in herself. That design cannot separate mindfulness from attention and expectation. If you would rather follow the rubric literally, these become strong and the honest caveat moves into the finding text. Your call, not mine.

---

## 1. Candidate rows

Paste-ready. The `n` field is not included, assign it on paste to keep the existing numbering contiguous.

```json
[
  {
    "topic": "PMS",
    "tags": ["mindfulness", "MBSR", "intervention", "active-tool"],
    "finding": "8-week MBSR reduced premenstrual symptom scores vs no-treatment control (RCT, n=90 randomized, 74 completed; large effect, partial eta-squared 0.510)",
    "grade": "moderate",
    "plain": "An eight-week mindfulness course lowered premenstrual symptom scores in a trial. The comparison group got nothing, so part of that is the attention.",
    "source": "Sener Cetin & Solt Kirca, J Midwifery Womens Health 2023",
    "link": "https://pubmed.ncbi.nlm.nih.gov/37335817/",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["mindfulness", "MBSR", "intervention", "replication"],
    "finding": "Online 8-session MBSR reduced premenstrual symptom severity vs no intervention (RCT, n=126; moderate effect, partial eta-squared 0.117)",
    "grade": "moderate",
    "plain": "A second, larger trial found the same direction with a smaller effect, and it worked delivered online.",
    "_WARNING": "Every number confirmed against the record (PMID 42319498, PMC13282192): n=126, 63 per arm, 8-session online MBSR, no-intervention control, PMSS, partial eta-squared 0.117. Two things the row hides. The trial is titled and framed around fear of childbirth and psychological well-being, with premenstrual symptom severity as one of three outcomes, not the primary question. And the 8 sessions ran twice weekly at 40 minutes each, so roughly four weeks, not an eight-week course. Both belong in the finding if this row is used as the replication.",
    "source": "Akbeniz & Sabanci Baransel, Arch Womens Ment Health 2026",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13282192/",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["mindfulness", "app", "digital", "intervention"],
    "finding": "Smartphone-delivered mindfulness training reduced PMS screening scores and improved quality of life vs no intervention (RCT, n=80, 8 weeks; eta-squared 0.18)",
    "grade": "moderate",
    "plain": "Mindfulness delivered through a phone app, not a room, also moved the scores. Small trial, no-treatment control.",
    "source": "Mazaheri Asadi et al., Front Psychiatry 2022",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9249312/",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["mindfulness", "MBCT", "depression", "anxiety", "intervention"],
    "finding": "8-session mindfulness-based cognitive therapy lowered depression, anxiety and total premenstrual scores in women with mild to moderate PMS and depressive symptoms (RCT, n=60)",
    "grade": "moderate",
    "plain": "Mindfulness combined with cognitive therapy helped most where low mood was already part of the picture.",
    "source": "Panahi & Faramarzi, Depress Res Treat 2016",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5153465/",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["mindfulness", "intimacy", "quality-of-life", "intervention"],
    "finding": "8-session online mindfulness counselling improved sexual desire, orgasm, satisfaction and overall sexual function vs no intervention in women with PMS (RCT, n=112, held at one month)",
    "grade": "moderate",
    "plain": "Mindfulness sessions improved sexual function in women with PMS, and the gain was still there a month later.",
    "_WARNING": "Confirmed (PMID 37423143): n=112, 56 per arm, 8 online sessions of 60 minutes, gains held at one month. The source line names only the journal. The authors are Hojjati Najafabadi, Vakilian, Ghaemmaghami, Zamanian and Beigi. Sexual pain also improved and is not listed, while vaginal lubrication did not move and arousal only reached significance at one month.",
    "source": "Sexual & Reproductive Healthcare 2023 (Isfahan)",
    "link": "https://pubmed.ncbi.nlm.nih.gov/37423143/",
    "status": "draft"
  },
  {
    "topic": "PMDD",
    "tags": ["mindfulness", "MBSR", "PMDD", "pilot"],
    "finding": "The only MBSR study in diagnosed PMDD is an uncontrolled pilot (n=21 completers, historical comparison group): emotional symptoms, cold-pressor pain tolerance and cardiovascular stress reactivity improved; sleep, headache and joint pain did not",
    "grade": "weak",
    "plain": "In PMDD specifically there is one small study with no real control group. It points the right way. It does not prove anything yet.",
    "source": "Bluth et al., Mindfulness 2015",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4651211/",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["mindfulness", "rumination", "stress", "mechanism"],
    "finding": "Two-cycle daily diary study (n=56): late-luteal symptom rises predicted more daily rumination and perceived stress; higher trait present-moment awareness tracked lower symptoms and impairment",
    "grade": "weak-moderate",
    "plain": "Symptoms and looping thoughts feed each other in the days before your period. Women who already notice the present moment more report less of both. That is a link, not a cause.",
    "source": "Nayman et al., Arch Womens Ment Health 2023",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10063513/",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["psychotherapy", "meta-analysis", "coping-skills"],
    "finding": "Meta-analysis of psychosocial interventions for PMS (11 studies, n=324): overall SMD -0.29; coping skills training SMD -0.53; education and social support showed no effect",
    "grade": "strong",
    "plain": "Pooled across trials, learning a skill you practise helps. Being told about PMS, or being supported without a skill, does not.",
    "source": "J Psychosom Obstet Gynaecol 2019",
    "link": "https://pubmed.ncbi.nlm.nih.gov/29962276/",
    "status": "draft"
  },
  {
    "topic": "Anxiety (borrowed)",
    "tags": ["mindfulness", "MBSR", "anxiety", "borrowed-evidence"],
    "finding": "In diagnosed anxiety disorders, not premenstrual populations: 8-week MBSR was non-inferior to escitalopram (RCT, n=276 randomized, 208 analysed); adverse events 15% MBSR vs 79% escitalopram",
    "grade": "strong",
    "plain": "In anxiety disorders, an eight-week mindfulness course matched a standard antidepressant. This was not tested in premenstrual symptoms.",
    "source": "Hoge et al., JAMA Psychiatry 2023",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9647561/",
    "status": "draft"
  },
  {
    "topic": "Stress (borrowed)",
    "tags": ["meditation", "meta-analysis", "anxiety", "borrowed-evidence"],
    "finding": "Not premenstrual: 47 RCTs with active controls, 3,515 participants. Mindfulness meditation showed moderate evidence for anxiety (ES 0.38 at 8 weeks), depression (0.30) and pain (0.33), and no evidence of being better than drugs, exercise or other behavioural therapy",
    "grade": "strong",
    "plain": "Across the wider evidence, meditation gives a small to moderate improvement in anxiety and low mood. It has not been shown to beat other active treatments.",
    "source": "Goyal et al., JAMA Intern Med 2014",
    "link": "https://pubmed.ncbi.nlm.nih.gov/24395196/",
    "status": "draft"
  },
  {
    "topic": "Brief practice (borrowed)",
    "tags": ["meditation", "brief-practice", "meta-analysis", "publication-bias", "borrowed-evidence"],
    "finding": "Not premenstrual: 65 RCTs of brief mindfulness (single session up to 2 weeks), 5,489 participants. Effect on negative affect g=0.21, falling to g=0.04 once publication bias was corrected for",
    "grade": "strong",
    "plain": "Short mindfulness sessions show a small benefit, and most of it disappears once you account for the studies that were never published.",
    "source": "Schumer et al., J Consult Clin Psychol 2018",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6441958/",
    "status": "draft"
  },
  {
    "topic": "Acute stress (borrowed)",
    "tags": ["meditation", "brief-practice", "active-tool", "borrowed-evidence"],
    "finding": "Not premenstrual: 5 studies, 277 adults with high trait anxiety. A single brief audio mindfulness exercise reduced state anxiety (g=-0.60) vs non-therapeutic control, with high risk of bias and low certainty of evidence",
    "grade": "weak",
    "plain": "One short guided practice can lower anxiety in the moment. The studies behind that are few and shaky, so treat it as a promising tool, not a proven one.",
    "_WARNING": "Confirmed (PMID 38215647): 5 studies, 277 participants with elevated trait or generalised anxiety, high risk of bias, low certainty. Two precision points. The g=-0.60 pooled estimate came from 3 of the 5 studies (k=3, n=100), not from all 277. And one of the five was non-randomised, so 'studies' is right where 'trials' would not be. The word 'audio' is ours; the review says mindfulness induction.",
    "source": "J Psychiatr Res 2024 (acute mindfulness induction review)",
    "link": "https://pubmed.ncbi.nlm.nih.gov/38215647/",
    "status": "draft"
  }
]
```

---

## 2. What the evidence supports, honestly

**An eight-week structured mindfulness course improves self-reported premenstrual symptoms.** Four randomized trials in premenstrual populations point the same way: MBSR in person (n=90), MBSR online (n=126), a mindfulness app (n=80), and MBCT where low mood was present (n=60). Four independent teams, three countries, consistent direction. That is a real signal.

**The size of the effect is unstable across trials.** The 2023 in-person trial reported partial eta-squared 0.510. The larger 2026 online trial reported 0.117 for the same outcome scale. A five-fold difference in effect size for a similar intervention on the same measure is a sign that these numbers should be read as "something happened", not as a dose you can quote.

**Practising a skill beats being taught about the condition.** The 2019 meta-analysis found coping skills training moved PMS severity (SMD -0.53) while education programmes and social support did not. That result is not mindfulness-specific, but it supports the shape of what Niyora does: give someone something to do, not something to read.

**Mindfulness has genuinely good evidence in anxiety, and that is a different population.** MBSR matched escitalopram in a properly designed non-inferiority trial with a real active comparator. That is the strongest mindfulness result on this page, and it is borrowed. Nobody has run it in PMDD.

## What the evidence does not support

**It does not support a claim about PMDD.** The only MBSR study in diagnosed PMDD is a 21-person pilot with no randomized control group. If we say anything about mindfulness and PMDD, it has to be "one small study, no control group".

**It does not support the 60-second version.** This matters most for Niyora. Every positive premenstrual trial ran a multi-week structured course of 8 sessions, 40 to 150 minutes each, in one case with a six-hour silent retreat.

> **WARNING, corrected on checking.** This paragraph used to say "a full eight-week course, weekly sessions". That is true of Sener Cetin 2023 (8 weekly sessions of 2.5 hours plus a 6-hour retreat) and Panahi 2016 (8 weekly sessions of 120 minutes), but not of Akbeniz 2026, which ran 8 sessions twice weekly at 40 minutes, so about four weeks. The argument survives intact. Nothing here is a two-minute practice. But do not publish "eight weeks" as if it covered all four trials. Nothing in the premenstrual literature tests a two-minute practice. When you look at the brief-practice literature outside premenstrual health, the pooled effect on negative affect is g=0.21 and drops to g=0.04 after correcting for publication bias. The single-session evidence in high-anxiety adults (g=-0.60) is better, but rests on five studies rated high risk of bias and low certainty.

The honest sentence is: the long course has premenstrual evidence, the short practice has adjacent evidence that shrinks under scrutiny. We should not carry the eight-week result over to a two-minute tool and let readers assume it transfers.

**It does not support mindfulness over anything else.** Goyal's meta-analysis found no evidence that meditation beat drugs, exercise or other behavioural therapies. The site should not imply a ranking.

**It does not support a physical-symptom claim.** The PMDD pilot found no change in sleep, headache or joint pain. The measured gains are emotional.

---

## 3. What is missing or contested, and what would change the grade

**Every premenstrual trial used a control group that received nothing.** Participants knew which arm they were in and filled in their own symptom scale. That design measures mindfulness plus attention plus expectation, and cannot separate them. This is the single biggest reason the grades above sit at moderate.
*What would change it:* one trial with an active control of matched time and attention, for example psychoeducation or a sham relaxation protocol.

**None of the positive premenstrual trials used prospective daily ratings.** They used the Premenstrual Syndrome Scale or the PSST, both retrospective self-report. Prospective daily rating over at least two cycles (the DRSP) is the standard for diagnosing premenstrual disorders, precisely because retrospective recall inflates symptoms. The PMDD pilot did use DRSP, and it is the one with no control group.
*What would change it:* an RCT using DRSP over two or more cycles. That single change would justify a strong grade.

**Nobody has tested a brief practice in a premenstrual population.** Zero trials.
*What would change it:* the trial we would have to run ourselves.

**No cycle-phase timing evidence.** The diary study suggests present-moment awareness matters most as the late luteal phase arrives, and other work points at cycle-phase-specific practice. No trial has tested whether practising in the premenstrual window beats practising all month.
*What would change it:* a trial randomizing timing, not just presence of practice.

**No long-term follow-up.** The 2026 trial says this in its own limitations. All outcomes are measured immediately after the course. We do not know whether anything holds at six months.

**Geographic and demographic narrowness.** The premenstrual trials are Turkish and Iranian, largely university students and young women. Whether the effect generalizes is untested.

**Dropout is not trivial.** The 2023 trial randomized 90 and analysed 74, an 18% loss over eight weeks. That is normal for a course of this length and it is also the practical problem: the intervention with the evidence is the one people struggle to finish.

**Could not verify, so not cited:** a pilot of a mindfulness-based programme for premenstrual dysphoric symptoms in late adolescents, published on ScienceDirect (PII S2666915322001536). The publisher returned 403 and the record is not in Europe PMC. It would only be a weak-grade row anyway. Do not cite it until someone opens it.

---

## 4. Does this deserve its own page

**Yes, one page, at `/techniques/mindfulness/`.** It sits with breathing, cold water and muscle relaxation, which is the right shelf. It should not go under `/pms/` or become a blog post, because the useful thing here is the graded distinction, not a story.

What the page should target:

- **Primary query intent:** "does meditation help PMS", "mindfulness for PMS", "meditation for PMDD". These are people deciding whether to bother, not people looking for a script.
- **The angle only we can take:** every other page on this topic says "studies show mindfulness helps PMS". The four trials are real, and every one of them compared against a group that got nothing. Saying that out loud is the differentiator, and it is consistent with how `/research/` already grades.
- **The structure:** what was actually tested (eight weeks, weekly sessions), what it moved (emotional symptoms, not sleep or headache), what nobody tested (short practice, PMDD, timing to the cycle), and what to do with that.
- **The line the page must not cross:** do not let the eight-week MBSR result stand behind a two-minute in-app practice. State plainly that the short version borrows its evidence from general anxiety research, and that the borrowed evidence weakens when corrected for publication bias.
- **Internal links:** `/techniques/muscle-relaxation/` (the intervention on this site with a cleaner RCT behind it), `/research/` for the grades, `/research/gaps/` for the untested brief-practice question, `/research/trials/` if any mindfulness trial is recruiting.
- **What it should not claim:** no effect sizes in the headline, no "proven", no comparison to medication. The Hoge result is about anxiety disorders and putting it near a PMS claim would mislead even if every word were true.

One more thing worth putting on `/research/gaps/`: nobody has tested a brief mindfulness practice in a premenstrual population, and nobody has tested whether timing practice to the luteal phase beats practising all month. Both are small, cheap, obvious studies. Their absence is a finding.

---

## Citation check, run against the source records

Every link was resolved against its PubMed or PMC record. Titles, journals, years, authors,
designs, sample sizes and headline numbers were compared against what each row claims.
Bluth 2015 was read in full text, since it carries no abstract in PubMed.

**Verified exactly, no changes needed.**

- Sener Cetin and Solt Kirca 2023 (PMID 37335817): 90 randomized, 74 completed, 37 per arm,
  partial eta-squared 0.510, 8 weekly sessions of 2.5 hours plus a 6-hour retreat, control
  received nothing. Exact. Both this trial and Akbeniz used the PMSS, so "the same outcome
  scale" in section 2 is correct.
- Mazaheri Asadi 2022 (PMC9249312): n=80, 40 per arm, 8 weeks, PSST and SF-12, eta-squared
  0.18 for symptoms and 0.14 for quality of life, no-intervention control. Exact. Small
  note: the app weeks were preceded by two online introductory group sessions, so it is not
  purely smartphone-delivered.
- Panahi and Faramarzi 2016 (PMC5153465): n=60, 8 group sessions of 120 minutes over 8
  weeks, mild to moderate PMS with Beck scores 16 to 47, depression, anxiety and total PAS
  all improved. Exact.
- Bluth 2015 (PMC4651211, full text read): 24 enrolled, 21 completed, historical control
  group, cold pressor pain tolerance rose (t(20)=-2.46, p=.02) and differed from control
  (t(58)=-2.53, p=.02), TSST systolic BP and HR reactivity fell, and sleeplessness, headache
  and joint pain did not move. Exact, including the negatives.
- Nayman 2023, Arch Womens Ment Health (PMC10063513): n=56, two consecutive cycles, online
  diary, late-luteal symptoms predicted rumination and perceived stress, habitual
  present-moment awareness tracked lower symptoms and impairment. Exact.
- Han, Cha and Kim 2019 (PMID 29962276): 11 interventions, n=324, SMD -0.29 [-0.45, -0.13],
  coping skills -0.53, no effect for education or social support. Exact. The source line
  gives only the journal; the authors are Han, Cha and Kim.
- Hoge 2023 (PMC9647561): 276 recruited, 208 completed, MBSR noninferior to escitalopram,
  adverse events 15.4% vs 78.6%. Exact.
- Goyal 2014 (PMID 24395196): 47 trials, 3,515 participants, anxiety 0.38 at 8 weeks,
  depression 0.30, pain 0.33, no evidence of superiority over other active treatments.
  Exact.
- Schumer 2018 (PMC6441958): 65 RCTs, 5,489 participants, single session to 2 weeks, g=.21
  falling to g=.04 once publication bias was accounted for. Exact.

**Rows carrying a `_WARNING` field.** Akbeniz 2026, the Isfahan sexual-functioning trial,
and the 2024 acute-induction review. Read the field before the row.

**Still unverifiable, as the draft already says.** The ScienceDirect adolescent pilot
(PII S2666915322001536). It is not in PubMed or Europe PMC and the publisher returns 403.
Leave it uncited.
