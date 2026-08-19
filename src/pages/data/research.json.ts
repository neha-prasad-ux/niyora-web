// The graded research the site and the app are built on, published as open data
// so the Dataset markup on /research/ points at a real download.
import rows from '../../data/research.json';

export const GET = () =>
  new Response(JSON.stringify(rows, null, 2), {
    headers: { 'content-type': 'application/json', 'access-control-allow-origin': '*' },
  });
