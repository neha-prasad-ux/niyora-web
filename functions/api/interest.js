// Interest counter, backed by a Cloudflare KV namespace bound as INTEREST.
// GET  -> { count } current tally (count: null if KV isn't bound yet)
// POST -> increments and returns the new { count }
//
// ponytail: KV get-then-put is not atomic, so two taps landing in the same
// instant can lose one increment. Fine for a vanity interest counter. If it
// ever needs to be exact, move the tally to a Durable Object.
const KEY = 'count';

const json = (data) =>
  new Response(JSON.stringify(data), {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  });

export async function onRequestGet({ env }) {
  if (!env.INTEREST) return json({ count: null });
  const count = parseInt((await env.INTEREST.get(KEY)) || '0', 10);
  return json({ count });
}

export async function onRequestPost({ env }) {
  if (!env.INTEREST) return json({ count: null });
  const count = parseInt((await env.INTEREST.get(KEY)) || '0', 10) + 1;
  await env.INTEREST.put(KEY, String(count));
  return json({ count });
}
