import type { APIRoute } from 'astro';
import { allFeatures, allConcepts } from '../lib/data';
import { DESK_BY_ID, featureUrl, conceptUrl } from '../lib/site';

export const GET: APIRoute = async () => {
  const features = await allFeatures();
  const concepts = await allConcepts();
  const docs = [
    ...features.map((f) => ({
      id: `f:${f.data.slug}`,
      kind: 'briefing',
      title: f.data.title,
      summary: f.data.summary,
      url: featureUrl(f.data.slug),
      desk: (DESK_BY_ID as Record<string, { short: string }>)[f.data.desk]?.short ?? f.data.desk,
      tags: [...f.data.tags, String(f.data.roadmapId ?? '')],
      products: f.data.products,
      action: f.data.action,
      risk: f.data.risk,
    })),
    ...concepts.map((c) => ({
      id: `c:${c.data.slug}`,
      kind: 'concept',
      title: c.data.title,
      summary: c.data.summary,
      url: conceptUrl(c.data.slug),
      desk: 'Concept',
      tags: c.data.tags,
      products: [],
    })),
  ];
  return new Response(JSON.stringify(docs), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
