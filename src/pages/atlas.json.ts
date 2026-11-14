import type { APIRoute } from 'astro';
import { allFeatures, allConcepts } from '../lib/data';
import { buildAtlas } from '../lib/graph';

/** Nodes, links and positions for the atlas. Rebuilt with the site, so it follows the daily run. */
export const GET: APIRoute = async () => {
  const atlas = buildAtlas(await allFeatures(), await allConcepts());
  return new Response(JSON.stringify(atlas), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
