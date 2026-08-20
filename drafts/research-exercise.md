# Research draft: exercise for premenstrual symptoms

Status: draft for review. Nothing here is published. Every citation below was re-checked
against its PubMed or PMC record, and the four open-access papers were read in full text.
Seven rows came back with something to fix and carry a `_WARNING` field. The full audit is
in "Citation check" at the end. Two candidates were dropped because the claim did not
survive checking at all, see "Rejected".

Scope: exercise as a treatment for premenstrual symptoms specifically, mood and physical,
in the days before a period. Not general mood, not fitness, not period pain on its own.

Rows below carry no `n` value. Assign numbers at paste time so they do not collide with
whatever else lands in `src/data/research.json` this week.

---

## 1. Candidate rows

```json
[
  {
    "topic": "PMS",
    "tags": ["exercise", "intervention", "active-tool"],
    "finding": "Meta-analysis of 15 RCTs (n=717): exercise lowered global premenstrual symptom scores (SMD -1.08, 95% CI -1.88 to -0.29), but 87% of the trials were at high risk of bias",
    "grade": "moderate",
    "plain": "Moving your body does seem to help the week before your period. The trials behind that are small and loosely run, so treat the size of the effect as an estimate, not a promise.",
    "source": "Pearce 2020, BJGP Open",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7465566/",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["exercise", "dose", "intervention"],
    "finding": "Review of 20 RCTs (n=1,230): exercise reduced premenstrual negative affect (SMD -0.81), pain (SMD -1.04) and fatigue (SMD -0.54); subgroup effects held at 9 to 12 weeks and at 3 or more sessions a week, and were not significant at 4 to 8 weeks",
    "grade": "moderate",
    "plain": "Three sessions a week for about three months is where the effect shows up. Under two months, the trials mostly show nothing.",
    "_WARNING": "Checked against the full text (PMC12874746, PMID 41507956). n=1,230 and the pooled SMDs are exact: negative affect -0.81, pain -1.04, fatigue -0.54. But 'not significant at 4 to 8 weeks' is WRONG. 4 to 8 weeks was significant for negative affect (SMD -0.608, P<0.01) and for pain (SMD -0.377, P=0.002). Only fatigue was non-significant there (P=0.065). The plain line 'under two months the trials mostly show nothing' is wrong for the same reason. Rewrite both before this row is used.",
    "source": "Li 2026, BMC Women's Health",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12874746/",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["exercise", "dose", "yoga"],
    "finding": "In subgroup analysis of the same 20 trials, running gave the largest effect on premenstrual mood (SMD -0.99), yoga the largest on pain (SMD -1.51) and fatigue (SMD -0.84); Pilates was not significant for pain or fatigue",
    "grade": "weak",
    "plain": "Running looks better for mood. Yoga looks better for pain and tiredness. This comes from slicing the data after the fact, so hold it loosely.",
    "_WARNING": "Running on mood (-0.987) and yoga on fatigue (-0.842) are exact, and 'Pilates not significant for pain or fatigue' is stated verbatim by the paper. But yoga on pain was SMD -1.025 (P=0.026), not -1.51. The -1.507 figure belongs to the 9 to 12 week and the 3-or-more-sessions pain subgroups, not to yoga. Fix the number. Note also that running was not entered into the pain or fatigue subgroups at all, so 'largest' compares yoga against Pilates only.",
    "source": "Li 2026, BMC Women's Health (subgroup analysis)",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12874746/",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["exercise", "resistance", "anxiety"],
    "finding": "8-week 3-arm RCT (n=56 analysed): aerobic and resistance training both lowered luteal-phase anxiety vs control; resistance training beat aerobic on anxiety scores and on prefrontal activation (fNIRS)",
    "grade": "weak",
    "plain": "One small trial found lifting weights beat cardio for premenstrual anxiety. One trial is not an answer, but it is a reason to stop assuming cardio is the only option.",
    "_WARNING": "Title, journal, fNIRS design, 3 arms, 8 weeks and 56 of 60 analysed all confirmed (PMID 42162624). One overreach: the abstract reports resistance beating aerobic on anxiety scores and on reaction times, and reports greater prefrontal Oxy-Hb for both exercise arms versus control. A direct resistance-over-aerobic result on prefrontal activation is not stated. Drop 'and on prefrontal activation' or soften it.",
    "source": "Wu 2026, Journal of Affective Disorders",
    "link": "https://pubmed.ncbi.nlm.nih.gov/42162624/",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["exercise", "resistance", "intervention"],
    "finding": "The first head-to-head trial (n=23, 3 months): aerobic and non-aerobic strength training both improved premenstrual symptoms, aerobic improved more symptoms, especially premenstrual depression",
    "grade": "weak",
    "plain": "The oldest comparison put cardio ahead for premenstrual low mood. Twenty-three women, published in 1993, and it points the opposite way to the newest trial.",
    "_WARNING": "The finding is confirmed word for word against the abstract (PMID 8463989). Two things the row does not say. The paper calls itself 'a preliminary study' and never claims randomization, so grading it as a trial is our reading. And the sample is healthy premenopausal middle-aged women, not the university students in almost every other row here. 'The first head-to-head trial' is our claim, not the paper's.",
    "source": "Steege and Blumenthal 1993, J Psychosomatic Research",
    "link": "https://pubmed.ncbi.nlm.nih.gov/8463989/",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["exercise", "dose", "intervention"],
    "finding": "RCT (n=65): 8 weeks of aerobic exercise at 3 sessions of 20 minutes a week reduced headache, nausea, bloating, swelling and appetite change vs control",
    "grade": "weak",
    "plain": "Twenty minutes of cardio, three times a week, moved the physical symptoms in one small trial. Headache, nausea, bloating.",
    "_WARNING": "n=65, 8 weeks, 3 sessions of 20 minutes all confirmed (PMID 29855308). The symptom list mixes two different analyses. Headache, nausea/constipation/diarrhoea and swelling were the between-group results at study end. Bloating, vomiting, hot flushes and appetite increase came from a comparison of change scores instead. Listing all of them as 'vs control' overstates. Separate them.",
    "source": "Mohebbi Dehnavi 2018, BMC Women's Health",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5984430/",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["exercise", "yoga", "clinical-reference"],
    "finding": "Yoga meta-analysis (14 studies, 7 pooled) concludes yoga helps PMS, but the pooled outcomes were blood pressure and heart rate; only 3 studies pooled a symptom score, at I-squared 92%",
    "grade": "weak",
    "plain": "The headline says yoga works for premenstrual symptoms. What the review actually pooled was blood pressure and heart rate. That is not the same thing.",
    "source": "Ranga and Dev 2024, JOGC",
    "link": "https://pubmed.ncbi.nlm.nih.gov/38871120/",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["exercise", "behavior"],
    "finding": "Cross-sectional study (n=414): recreational physical activity was not associated with PMS prevalence or with total, affective or physical symptom scores; women who exercised specifically to treat symptoms reported worse symptoms",
    "grade": "moderate",
    "plain": "Being an active person does not predict an easier premenstrual week. Exercise looks like something you do for the symptoms, not a trait that protects you from them.",
    "_WARNING": "Both halves confirmed in the full text (PMC5231278, PMID 28081191). The null association is exact. The reverse-causality result is real: in the 107 women reporting exercise to treat symptoms, total symptom score was 2.96 points higher (p=0.03) and physical symptom score 2.54 higher (p<0.01). But the affective symptom score was not significant (p=0.52). 'Reported worse symptoms' should read 'worse total and physical symptom scores', since the affective half is where our readers live.",
    "source": "Kroll-Desrosiers 2017, PLOS ONE",
    "link": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0169728",
    "status": "draft"
  },
  {
    "topic": "PMS",
    "tags": ["exercise", "sleep", "intervention"],
    "finding": "12-week RCT (n=54) of mixed aerobic, strengthening and flexibility exercise: menstrual symptom scores and sleep quality improved vs control, but the premenstrual subscale of the MDQ did not differ between groups",
    "grade": "weak",
    "plain": "The newest trial improved period symptoms and sleep, and did not move the premenstrual ones. Worth knowing before anyone promises you the world.",
    "_WARNING": "Confirmed exactly (PMID 40849627), including the non-significant MDQ premenstrual subscale (p=0.626) and the 12-week, n=54 design. One correction: the plain line calls it 'the newest trial'. It is not. Wu 2026 and Li 2026 are both later.",
    "source": "Kocak and Sevgin 2025, BMC Women's Health",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12374421/",
    "status": "draft"
  }
]
```

New tags introduced: `exercise`, `dose`, `resistance`, `yoga`, `anxiety`. The rest reuse the
existing vocabulary in `src/data/research.json`.

---

## 2. What the evidence supports, honestly

**Supported.** Regular exercise reduces premenstrual symptoms across mood, physical and
behavioural clusters. Two independent reviews of randomised trials agree on direction and
on rough size, and the effect is not small: standardised mean differences around -0.8 to
-1.1. It is one of the better-evidenced non-drug options for the days before a period.

**Supported on dose, with caveats.** The one review that analysed dose found the effect
concentrated at 9 to 12 weeks of training at 3 or more sessions a week. If we say anything
about dose on the site, "three times a week for about three months" is the defensible line.

> **WARNING, checked against the Li 2026 full text.** Two claims that stood here did not
> survive. "Interventions of 4 to 8 weeks were not significant for pain or fatigue" is only
> true of fatigue (P=0.065). For pain, 4 to 8 weeks was significant (SMD -0.377, P=0.002),
> and for negative affect it was significant too (SMD -0.608, P<0.01). And "41 to 60 minute
> sessions doing better than 20 to 40 minute ones for pain" overstates: the point estimates
> are effectively the same (-1.03 vs -1.066), only the significance differs, and for fatigue
> the shorter sessions did better. The nine-to-twelve-week line holds. The rest did not.

**Not supported.** That any specific modality is best. The head-to-head evidence is three
small trials pointing three ways: aerobic ahead of strength (1993, n=23), yoga ahead of
aerobic (2019, n=72), resistance ahead of aerobic (2026, n=56). Subgroup analysis of a
larger review favours running for mood and yoga for pain. None of this is settled.

**Not supported.** That exercise prevents premenstrual symptoms. The largest observational
study here found no association between how active a woman is and how bad her premenstrual
week is, and found that women who exercised to treat symptoms had worse symptoms. That is
consistent with exercise being a treatment you reach for, not a shield.

**Grading note for you.** Under the site rubric, "a review of randomised trials" reads as
strong, so Pearce 2020 and Li 2026 both technically qualify. I graded both moderate
instead. Pearce: 87% of included trials at high risk of bias, and only 7 of 15 trials
contributed to the pooled result (n=265 of 717). Li: GRADE rated the evidence low for both
mood and pain, and Egger's test found significant publication bias for both. Every figure in
this paragraph was re-checked line by line against both papers and every one is exact. Grading them
strong would put them next to the calcium RCT, and they are not that solid. Overrule me if
you would rather the rubric be applied mechanically.

---

## 3. What is missing or contested

- **The trials are almost all unblinded and small.** You cannot blind someone to whether
  they went running. Everyone knew which group they were in, and every outcome is
  self-reported. That inflates effects and there is no fix for it in this design.
- **Geography.** The majority of trials in the 2026 review came from Turkey and Iran, in
  university students. Nothing here has been tested in a general adult population at scale.
- **Publication bias is measured, not suspected.** Egger's test was significant for both
  mood and pain in the 2026 review. Small negative trials of exercise are probably not
  being published.
- **Resistance training is nearly unstudied.** Two trials, thirty-three years apart, with a
  combined n of 79, disagreeing with each other. Anyone telling you strength training is
  the answer for premenstrual mood is ahead of the evidence.
- **PMDD is absent.** Every trial here recruited on PMS scales or self-report. I found no
  randomised trial of exercise in prospectively confirmed PMDD. We cannot extend any of
  this to PMDD without saying we are extending it.
- **The field has an integrity problem.** A 2023 RCT of whole-body vibration versus aerobic
  exercise in PMS was retracted in 2024 after an independent review found statistically
  implausible patterns in the patient data. https://pubmed.ncbi.nlm.nih.gov/39212289/
  Any future citation in this area gets checked for retraction before it goes on the site.
- **Contested directly:** Vaghela 2019 (n=72, 40 minutes, 3 times a week, 1 month) found
  yoga beat aerobic exercise on the PMS scale with no difference in pain, which cuts against
  the 2026 subgroup finding that running is better for mood.
  https://pmc.ncbi.nlm.nih.gov/articles/PMC6852652/

**What would change the grade.** One adequately powered trial, n in the several hundreds,
prospectively confirmed diagnosis over two cycles, an active control group doing something
equally social and equally time-consuming, and a pre-registered primary outcome. That would
move the top row to strong. A registered head-to-head of aerobic versus resistance versus
yoga, powered for a between-arm difference, would let us say anything at all about modality.

---

## 4. Does this deserve its own page?

Yes, one page. This is the most-searched self-help question in the category and we
currently have nothing on it.

**Target:** "does exercise help PMS" and "best exercise for PMS", plus the dose long tail
("how often", "how long before it works"). The dose answer is the thing nobody else states
plainly, and we can state it with a citation: three sessions a week, roughly three months
before the effect shows up in trials.

**Angle that is ours, not everyone else's.** Every other page says "exercise helps PMS."
Ours says which claim survives the evidence and which does not: the effect is real and the
dose is knowable, the best modality is not, and being a generally active person does not
protect you. The retraction and the publication bias belong on the page too. That is the
brand.

**What the page must not say.** Do not name a best exercise type. Do not extend any of this
to PMDD. Do not imply exercise prevents symptoms.

---

## Rejected during checking

- **Tsai 2016, yoga in Taiwanese employees.** Widely cited as a yoga RCT. It is a
  non-randomised before-and-after study with 198 enrolled and 134 dropping out, and the
  significant results were abdominal swelling, breast tenderness, cramps and cold sweats.
  Not usable as trial evidence. https://pmc.ncbi.nlm.nih.gov/articles/PMC4962262/
- **Saglam and Orsal 2020, "Effect of exercise on premenstrual symptoms: a systematic
  review."** Real and verified, 17 studies, concludes exercise is effective. Dropped as a
  row because it reports no pooled effect size and no risk-of-bias grading, so it adds a
  conclusion without adding evidence. https://pubmed.ncbi.nlm.nih.gov/31987230/

---

## Citation check, run against the source records

Every link above was resolved against its PubMed or PMC record, and the four open-access
papers were read in full text. Method: NCBI E-utilities for titles, journals, years,
authors and abstracts, Europe PMC full text where the licence allowed it.

**Verified exactly, no changes needed.** Pearce 2020 (PMID 32522750): 15 RCTs, n=717,
SMD -1.08 [-1.88, -0.29], 87% high risk of bias, 7 of 15 pooled at n=265, all exact.
Ranga and Dev 2024 (PMID 38871120): 14 studies, 7 pooled, outcomes were SBP, DBP, HR and
the Moos questionnaire, 3 studies contributed the symptom score at I-squared 92%, all
exact. The retraction (PMID 39212289): the notice says an independent review of the dataset
"found consistent patterns in patient data that are statistically implausible", which is
what the draft says. Vaghela 2019 (PMC6852652): n=72, 40 minutes, 3 times a week, 1 month,
yoga beat aerobic on the PMS scale with no difference in pain, exact. Tsai 2016
(PMC4962262): non-randomised, 64 completers, significant results were abdominal swelling,
breast tenderness, abdominal cramps and cold sweats, exact. Yesildere Saglam and Orsal 2020
(PMID 31987230): 17 publications, narrative synthesis with no pooled effect size, exact.
Note the first author is Yesildere Saglam, not Saglam.

**Rows carrying a `_WARNING` field.** Li 2026 (two rows), Wu 2026, Steege 1993, Mohebbi
Dehnavi 2018, Kroll-Desrosiers 2017, Kocak 2025. Read the field before the row.

**Not checked.** The claim in section 3 that most trials in the Li review came from Turkey
and Iran is broadly right from the included-studies table (Turkey and Iran dominate, with
Egypt and Taiwan also present), but nobody counted them formally. Say "mostly" rather than
"the majority" unless you want to count.
