import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const source = z.object({ title: z.string(), url: z.string().url(), kind: z.enum(['roadmap', 'learn', 'blog', 'message-center', 'docs', 'video']) });
const video = z.object({ title: z.string(), url: z.string().url(), channel: z.string().optional() });
const change = z.object({ date: z.string(), note: z.string() });

const features = defineCollection({
  loader: glob({ pattern: '*.md', base: './wiki/features' }),
  schema: z.object({
    title: z.string(),
    slug,
    roadmapId: z.number().int().nullable(),
    desk: z.enum(['agents', 'copilot', 'power-platform', 'security-compliance', 'admin-billing', 'modern-work']),
    products: z.array(z.string()).min(1),
    summary: z.string(),
    status: z.enum(['in-development', 'preview', 'rolling-out', 'launched', 'cancelled']),
    releasePhase: z.array(z.string()).default([]),
    clouds: z.array(z.string()).default([]),
    platforms: z.array(z.string()).default([]),
    targetDate: z.string().nullable().default(null),
    previewDate: z.string().nullable().default(null),
    risk: z.enum(['low', 'medium', 'high']),
    cost: z.enum(['none', 'low', 'medium', 'high', 'variable']),
    impact: z.enum(['low', 'medium', 'high']),
    defaultState: z.enum(['on', 'off', 'admin-opt-in', 'user-opt-in', 'unknown']),
    action: z.enum(['act-now', 'prepare', 'review', 'none']),
    licensing: z.object({ model: z.enum(['included', 'per-user', 'consumption', 'add-on', 'mixed', 'unknown']), notes: z.string() }),
    audiences: z.array(z.string()).min(1),
    tags: z.array(z.string()).min(1),
    sources: z.array(source).min(1),
    videos: z.array(video).default([]),
    related: z.array(z.string()).default([]),
    confidence: z.enum(['high', 'medium', 'low']),
    created: z.string(),
    updated: z.string(),
    roadmapModified: z.string().nullable().default(null),
    changes: z.array(change).default([]),
    version: z.number().int().default(1),
  }),
});

const concepts = defineCollection({
  loader: glob({ pattern: '*.md', base: './wiki/concepts' }),
  schema: z.object({
    title: z.string(),
    slug,
    summary: z.string(),
    updated: z.string(),
    tags: z.array(z.string()).default([]),
    sources: z.array(source).default([]),
    related: z.array(z.string()).default([]),
  }),
});

const digests = defineCollection({
  loader: glob({ pattern: '*.md', base: './wiki/digests' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    date: z.string(),
    weekStart: z.string(),
    counts: z.object({ updated: z.number(), actNow: z.number(), highRisk: z.number(), statusChanges: z.number() }),
  }),
});

export const collections = { features, concepts, digests };
