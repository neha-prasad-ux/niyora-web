import { describe, it, expect } from 'vitest';
import {
  allTrials,
  countries,
  familyOf,
  grouped,
  isCurrent,
  parseDate,
  stats,
  type Trial,
} from './_trials';

const TODAY = new Date(Date.UTC(2026, 7, 19));

function trial(over: Partial<Trial> = {}): Trial {
  return {
    nctId: 'NCT00000000',
    url: 'https://clinicaltrials.gov/study/NCT00000000',
    briefTitle: 'Test',
    officialTitle: null,
    overallStatus: 'RECRUITING',
    studyType: 'INTERVENTIONAL',
    phases: [],
    conditions: ['Premenstrual Syndrome'],
    briefSummary: null,
    enrollment: null,
    startDate: null,
    primaryCompletionDate: '2027-01-01',
    lastUpdateDate: '2026-06-01',
    sponsor: null,
    healthyVolunteers: null,
    sex: 'FEMALE',
    minimumAge: null,
    maximumAge: null,
    locations: [{ facility: 'A', city: 'B', state: null, country: 'Norway', status: null }],
    ...over,
  };
}

describe('trial dates', () => {
  it('parses full, month-only and year-only registry dates', () => {
    expect(parseDate('2026-03-14')?.toISOString().slice(0, 10)).toBe('2026-03-14');
    expect(parseDate('2026-03')?.toISOString().slice(0, 10)).toBe('2026-03-01');
    expect(parseDate('2026')?.toISOString().slice(0, 10)).toBe('2026-01-01');
  });

  it('treats missing and malformed dates as null rather than 1970', () => {
    expect(parseDate(null)).toBeNull();
    expect(parseDate('')).toBeNull();
    expect(parseDate('not-a-date')).toBeNull();
  });
});

describe('isCurrent', () => {
  it('accepts an open, recently updated trial with a location', () => {
    expect(isCurrent(trial(), TODAY)).toBe(true);
  });

  it('rejects a trial whose completion date has already passed', () => {
    expect(isCurrent(trial({ primaryCompletionDate: '2025-01-01' }), TODAY)).toBe(false);
  });

  it('rejects a record nobody has touched in over a year', () => {
    expect(isCurrent(trial({ lastUpdateDate: '2024-01-01' }), TODAY)).toBe(false);
  });

  it('rejects a record with no update date at all', () => {
    expect(isCurrent(trial({ lastUpdateDate: null }), TODAY)).toBe(false);
  });

  it('rejects a trial with nowhere to go', () => {
    expect(isCurrent(trial({ locations: [] }), TODAY)).toBe(false);
  });
});

describe('classification', () => {
  it('reads PMS and PMDD out of the condition list', () => {
    expect(familyOf(trial({ conditions: ['PMDD'] }))).toBe('pms-pmdd');
    expect(familyOf(trial({ conditions: ['Premenstrual Dysphoric Disorder'] }))).toBe('pms-pmdd');
  });

  it('separates period pain from premenstrual mood', () => {
    expect(familyOf(trial({ conditions: ['Primary Dysmenorrhea'] }))).toBe('period-pain');
    expect(familyOf(trial({ conditions: ['Menstrual Cramps'] }))).toBe('period-pain');
  });

  it('prefers PMS over period pain when a trial lists both', () => {
    expect(familyOf(trial({ conditions: ['Dysmenorrhea', 'Premenstrual Syndrome'] }))).toBe(
      'pms-pmdd'
    );
  });

  it('falls back to other', () => {
    expect(familyOf(trial({ conditions: ['Endometriosis'] }))).toBe('other');
  });

  it('deduplicates countries across sites', () => {
    const t = trial({
      locations: [
        { facility: 'A', city: 'Oslo', state: null, country: 'Norway', status: null },
        { facility: 'B', city: 'Bergen', state: null, country: 'Norway', status: null },
        { facility: 'C', city: 'Paris', state: null, country: 'France', status: null },
      ],
    });
    expect(countries(t)).toEqual(['France', 'Norway']);
  });
});

describe('the real dataset', () => {
  it('has no duplicate registrations', () => {
    const ids = allTrials.map((t) => t.nctId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('only ever shows trials people could still join', () => {
    for (const { trials } of grouped(TODAY)) {
      for (const t of trials) {
        expect(isCurrent(t, TODAY), t.nctId).toBe(true);
      }
    }
  });

  it('puts every current trial in exactly one family', () => {
    const shown = grouped(TODAY).flatMap((g) => g.trials.map((t) => t.nctId));
    expect(new Set(shown).size).toBe(shown.length);
    expect(shown.length).toBe(stats(TODAY).current);
  });

  it('shows far fewer than the registry claims are open', () => {
    const s = stats(TODAY);
    expect(s.current).toBeLessThan(s.total);
    expect(s.stale).toBeGreaterThan(0);
  });

  it('links every trial to its registry record', () => {
    for (const t of allTrials) {
      expect(t.url, t.nctId).toBe(`https://clinicaltrials.gov/study/${t.nctId}`);
    }
  });
});
