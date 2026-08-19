#!/usr/bin/env python3
"""Ask ClinicalTrials.gov which cycle-health trials are still taking participants.

One search per condition below against the v2 REST API, filtered to studies a
person could actually still join (recruiting or not yet recruiting) and to real
studies (interventional or observational, so no expanded-access records). Results
are merged on NCT ID, since a PMDD trial also answers to premenstrual syndrome.

Locations are kept flat (facility, city, state, country) because the only
question a reader asks is whether one of these is near her.

Run:  python3 scripts/trials-export.py
Writes src/data/trials.json. About a dozen requests, so a few seconds.
"""

import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'src/data/trials.json'

BASE = 'https://clinicaltrials.gov/api/v2/studies'
JOINABLE = 'RECRUITING|NOT_YET_RECRUITING'
REAL_STUDIES = 'AREA[StudyType](INTERVENTIONAL OR OBSERVATIONAL)'
PAGE = 200

# Condition-field searches, not free text: query.term matches any word anywhere
# and drags in menopause and IVF studies that merely mention a cycle.
CONDITIONS = [
    'premenstrual syndrome',
    'premenstrual dysphoric disorder',
    'PMDD',
    'menstrual cycle mood',
    'dysmenorrhea',
    'menstrual health',
]


def search(condition: str) -> list[dict]:
    studies, token = [], None
    while True:
        params = {
            'query.cond': condition,
            'filter.overallStatus': JOINABLE,
            'filter.advanced': REAL_STUDIES,
            'pageSize': PAGE,
            'countTotal': 'true',
        }
        if token:
            params['pageToken'] = token
        url = f'{BASE}?{urllib.parse.urlencode(params)}'
        with urllib.request.urlopen(url, timeout=45) as r:
            page = json.load(r)
        studies += page.get('studies', [])
        token = page.get('nextPageToken')
        if not token:
            return studies
        time.sleep(0.3)


def shape(study: dict) -> dict:
    p = study.get('protocolSection', {})
    ident = p.get('identificationModule', {})
    status = p.get('statusModule', {})
    design = p.get('designModule', {})
    elig = p.get('eligibilityModule', {})
    nct = ident.get('nctId')

    phases = design.get('phases') or []
    return {
        'nctId': nct,
        'url': f'https://clinicaltrials.gov/study/{nct}',
        'briefTitle': ident.get('briefTitle'),
        'officialTitle': ident.get('officialTitle'),
        'overallStatus': status.get('overallStatus'),
        'studyType': design.get('studyType'),
        'phases': phases,
        'conditions': p.get('conditionsModule', {}).get('conditions') or [],
        'briefSummary': p.get('descriptionModule', {}).get('briefSummary'),
        'enrollment': design.get('enrollmentInfo', {}).get('count'),
        'enrollmentType': design.get('enrollmentInfo', {}).get('type'),
        'startDate': status.get('startDateStruct', {}).get('date'),
        'primaryCompletionDate': status.get('primaryCompletionDateStruct', {}).get('date'),
        'lastUpdateDate': status.get('lastUpdatePostDateStruct', {}).get('date'),
        'sponsor': p.get('sponsorCollaboratorsModule', {}).get('leadSponsor', {}).get('name'),
        'healthyVolunteers': elig.get('healthyVolunteers'),
        'sex': elig.get('sex'),
        'minimumAge': elig.get('minimumAge'),
        'maximumAge': elig.get('maximumAge'),
        'locations': [
            {
                'facility': loc.get('facility'),
                'city': loc.get('city'),
                'state': loc.get('state'),
                'country': loc.get('country'),
                'status': loc.get('status'),
            }
            for loc in p.get('contactsLocationsModule', {}).get('locations') or []
        ],
    }


def main() -> int:
    found: dict[str, dict] = {}
    for condition in CONDITIONS:
        hits = search(condition)
        new = 0
        for study in hits:
            record = shape(study)
            if record['nctId'] and record['nctId'] not in found:
                found[record['nctId']] = record
                new += 1
        print(f'{condition:<32} {len(hits):>4} joinable, {new:>4} new')
        time.sleep(0.3)

    trials = sorted(found.values(), key=lambda t: (t['overallStatus'], t['nctId']))
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(trials, indent=2, ensure_ascii=False) + '\n')

    countries: dict[str, int] = {}
    for t in trials:
        for c in {loc['country'] for loc in t['locations'] if loc['country']}:
            countries[c] = countries.get(c, 0) + 1
    nowhere = sum(1 for t in trials if not t['locations'])

    print(f'\nwrote {len(trials)} trials to {OUT.relative_to(ROOT)}')
    for status in sorted({t['overallStatus'] for t in trials}):
        print(f'  {status:<20} {sum(1 for t in trials if t["overallStatus"] == status)}')
    print(f'  no location listed  {nowhere}')
    print('\ntop countries:')
    for country, n in sorted(countries.items(), key=lambda kv: -kv[1])[:10]:
        print(f'  {country:<20} {n}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
