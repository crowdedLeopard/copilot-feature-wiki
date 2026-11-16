import type { APIRoute } from 'astro';
import { allFeaturesIncludingArchived, allConcepts, allNotices } from '../lib/data';
import { TOPIC_BY_ID, featureUrl, conceptUrl, noticeUrl } from '../lib/site';
import { tagLabel } from '../lib/tags';

export const GET: APIRoute = async () => {
  const features = await allFeaturesIncludingArchived();
  const concepts = await allConcepts();
  const notices = await allNotices();
  const docs = [
    ...features.map((f) => ({
      id: `f:${f.data.slug}`,
      kind: 'briefing',
      title: f.data.title,
      summary: f.data.summary,
      url: featureUrl(f.data.slug),
      topic: f.data.archived ? 'Archived' : ((TOPIC_BY_ID as Record<string, { short: string }>)[f.data.topic]?.short ?? f.data.topic),
      tags: [...f.data.tags, ...f.data.tags.map(tagLabel), String(f.data.roadmapId ?? ''), ...(f.data.archived ? ['archived', 'archive'] : [])],
      products: f.data.products,
      action: f.data.archived ? undefined : f.data.action,
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
    ...notices.map((n) => ({
      id: `m:${n.data.id}`,
      kind: 'notice',
      title: `${n.data.id}: ${n.data.title}`,
      summary: n.data.summary || `Message Center post, ${n.data.category}${n.data.actionRequiredBy ? `, act by ${n.data.actionRequiredBy.slice(0, 10)}` : ''}.`,
      url: noticeUrl(n.data.id),
      topic: 'Message Centre',
      tags: [n.data.id, ...n.data.tags, ...n.data.roadmapIds.map(String)],
      products: n.data.services,
    })),
  ];
  return new Response(JSON.stringify(docs), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
