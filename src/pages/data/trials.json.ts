// The menstrual and premenstrual health trials behind /research/trials/, published
// as open data so the Dataset markup points at a real download.
import rows from '../../data/trials.json';

export const GET = () =>
  new Response(JSON.stringify(rows, null, 2), {
    headers: { 'content-type': 'application/json', 'access-control-allow-origin': '*' },
  });
