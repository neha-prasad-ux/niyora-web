#!/usr/bin/env python3
"""Ask Europe PMC how much literature exists per research lane.

The bank in research-cockpit caps each lane at 100 downloaded papers, so its row
counts measure our own ceiling, not the field. This asks for hitCount instead,
which is the real total, and asks a second time filtered to trials and systematic
reviews. Two numbers per lane: how much exists, and how much of it is strong.

Run:  python3 scripts/gapmap-export.py
Writes src/data/research-gaps.json. 2 requests per lane, so about two minutes.
"""

import json
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COCKPIT = ROOT.parent / 'research-cockpit'
OUT = ROOT / 'src/data/research-gaps.json'

sys.path.insert(0, str(COCKPIT))
from lanes import LANES  # noqa: E402

BASE = 'https://www.ebi.ac.uk/europepmc/webservices/rest/search'
STRONG = '(PUB_TYPE:"Randomized Controlled Trial" OR PUB_TYPE:"Meta-Analysis" OR PUB_TYPE:"Systematic Review")'


def hit_count(query: str) -> int:
    params = urllib.parse.urlencode(
        {'query': query, 'format': 'json', 'pageSize': 1, 'resultType': 'idlist'}
    )
    with urllib.request.urlopen(f'{BASE}?{params}', timeout=45) as r:
        return int(json.load(r)['hitCount'])


def main() -> int:
    lanes = []
    for i, (name, axis, query, _cap, tags) in enumerate(LANES, 1):
        total = hit_count(query)
        time.sleep(0.3)
        strong = hit_count(f'({query}) AND {STRONG}')
        time.sleep(0.3)
        lanes.append(
            {
                'lane': name,
                'axis': axis,
                'tags': [t for t in tags.split(',') if t],
                'total': total,
                'strong': strong,
            }
        )
        print(f'{i:>3}/{len(LANES)}  {name:<38} {total:>6} papers, {strong:>4} trials/reviews')

    lanes.sort(key=lambda l: l['total'])
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(lanes, indent=2) + '\n')
    print(f'\nwrote {len(lanes)} lanes to {OUT.relative_to(ROOT)}')
    print(f'thinnest: {lanes[0]["lane"]} ({lanes[0]["total"]})')
    print(f'no trials at all: {sum(1 for l in lanes if l["strong"] == 0)} lanes')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
