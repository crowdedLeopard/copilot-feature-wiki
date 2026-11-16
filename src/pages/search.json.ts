import type { APIRoute } from 'astro';
import { allFeatures, allConcepts } from '../lib/data';
import { TOPIC_BY_ID, featureUrl, conceptUrl } from '../lib/site';
import { tagLabel } from '../lib/tags';

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
      topic: (TOPIC_BY_ID as Record<string, { short: string }>)[f.data.topic]?.short ?? f.data.topic,
      tags: [...f.data.tags, ...f.data.tags.map(tagLabel), String(f.data.roadmapId ?? '')],
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
      topic: 'Concept',
      tags: [...c.data.tags, ...c.data.tags.map(tagLabel)],
      products: [],
    })),
  ];
  return new Response(JSON.stringify(docs), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
