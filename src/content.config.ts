import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { TOPIC_IDS } from '../config/taxonomy.mjs';

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const source = z.object({ title: z.string(), url: z.string().url(), kind: z.enum(['roadmap', 'learn', 'blog', 'message-center', 'docs', 'video']) });
const video = z.object({ title: z.string(), url: z.string().url(), channel: z.string().optional() });
const change = z.object({ date: z.string(), note: z.string() });
const control = z.object({
  governs: z.string(),
  scope: z.enum(['tenant', 'environment', 'environment-group', 'site', 'group', 'user', 'agent', 'app', 'maker', 'other']),
  ui: z.object({ surface: z.string(), path: z.string(), docs: z.string().url() }).nullable(),
  api: z.object({ kind: z.enum(['powershell', 'graph', 'power-platform-api', 'pac-cli', 'azure-cli', 'rest', 'other']), call: z.string(), docs: z.string().url() }).nullable(),
  note: z.string().optional(),
});

const VERIFICATION_STATUS = ['verified', 'verified-with-gaps', 'needs-correction', 'held'] as const;
// Stamped on a page by pipeline/lib/verify.mjs after the independent check; the full report is the `verifications` collection.
const verification = z.object({
  status: z.enum(VERIFICATION_STATUS),
  date: z.string(),
  version: z.number().int(),
  model: z.string(),
  engine: z.string(),
  claims: z.number().int(),
  confirmed: z.number().int(),
  unconfirmed: z.number().int(),
  contradicted: z.number().int(),
  attempts: z.number().int().default(0),
});

const features = defineCollection({
  loader: glob({ pattern: '*.md', base: './wiki/features' }),
  schema: z.object({
    title: z.string(),
    slug,
    roadmapId: z.number().int().nullable(),
    topic: z.enum(TOPIC_IDS as [string, ...string[]]),
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
    controls: z.array(control).default([]),
    confidence: z.enum(['high', 'medium', 'low']),
    created: z.string(),
    updated: z.string(),
    roadmapModified: z.string().nullable().default(null),
    changes: z.array(change).default([]),
    version: z.number().int().default(1),
    verification: verification.optional(),
    archived: z.object({ reason: z.enum(['cancelled', 'removed']), date: z.string(), lastSeen: z.string().nullable().default(null) }).optional(),
  }),
});

// One report per checked briefing, written by the verifier run to wiki/verification/<slug>.json: the verdict summary,
// every claim with its status, source and quote, and the history of earlier checks.
const claim = z.object({
  n: z.number().int(),
  where: z.string(),
  type: z.string(),
  claim: z.string(),
  status: z.enum(['supported', 'contradicted', 'unsupported']),
  source: z.string().nullable().default(null),
  quote: z.string().nullable().default(null),
  severity: z.enum(['blocker', 'major', 'minor']).nullable().default(null),
  fix: z.string().nullable().default(null),
});
const verifications = defineCollection({
  loader: glob({ pattern: '*.json', base: './wiki/verification' }),
  schema: z.object({
    slug,
    roadmapId: z.number().int().nullable().default(null),
    title: z.string(),
    status: z.enum(VERIFICATION_STATUS),
    date: z.string(),
    version: z.number().int(),
    model: z.string(),
    engine: z.string(),
    attempts: z.number().int().default(0),
    verifierVerdict: z.string().optional(),
    notes: z.array(z.string()).default([]),
    hold: z.object({ reason: z.string(), since: z.string().nullable().default(null), reasons: z.array(z.string()).default([]) }).nullable().default(null),
    counts: z.object({ claims: z.number(), confirmed: z.number(), unconfirmed: z.number(), contradicted: z.number(), blocker: z.number(), major: z.number(), minor: z.number() }),
    summary: z.string(),
    claims: z.array(claim),
    history: z.array(z.object({ date: z.string(), status: z.string(), version: z.number(), model: z.string() })).default([]),
  }).passthrough(),
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

export const collections = { features, concepts, digests, verifications };
