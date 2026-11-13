import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { allFeatures } from '../lib/data';
import { SITE, DESK_BY_ID, featureUrl, RISK, COST, ACTION } from '../lib/site';

export async function GET(context: APIContext) {
  const features = (await allFeatures()).sort((a, b) => b.data.updated.localeCompare(a.data.updated)).slice(0, 50);
  return rss({
    title: `${SITE.name} briefings`,
    description: SITE.tagline,
    site: context.site!,
    items: features.map((f) => ({
      title: f.data.title,
      link: featureUrl(f.data.slug),
      pubDate: new Date(f.data.updated),
      description: `${(ACTION as any)[f.data.action]?.label ?? f.data.action} · Risk ${(RISK as any)[f.data.risk]?.label} · Cost ${(COST as any)[f.data.cost]?.label}. ${f.data.summary}`,
      categories: [(DESK_BY_ID as any)[f.data.desk]?.label ?? f.data.desk, ...f.data.tags],
    })),
    customData: '<language>en-gb</language>',
  });
}
