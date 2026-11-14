import type { APIRoute } from 'astro';
import { allFeatures } from '../lib/data';
import { buildRadar } from '../lib/graph';

/** Tracked roadmap items without a briefing yet. Loaded after the atlas has drawn, to keep first paint small. */
export const GET: APIRoute = async () => {
  return new Response(JSON.stringify(buildRadar(await allFeatures())), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
