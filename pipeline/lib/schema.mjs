import { z } from 'zod';
import { ALLOWED_SOURCE_DOMAINS } from '../../config/taxonomy.mjs';

const slug = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'kebab-case slug');

export const sourceSchema = z.object({
  title: z.string().min(3).max(200),
  url: z.string().url(),
  kind: z.enum(['roadmap', 'learn', 'blog', 'message-center', 'docs', 'video']),
});

export const videoSchema = z.object({
  title: z.string().min(3).max(200),
  url: z.string().url(),
  channel: z.string().max(100).optional(),
});

export const changeSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  note: z.string().min(3).max(300),
});

/** Frontmatter of a feature briefing. The site's content collection validates the same shape. */
export const featureFrontmatter = z.object({
  title: z.string().min(8).max(160),
  slug,
  roadmapId: z.number().int().positive().nullable(),
  desk: z.enum(['agents', 'copilot', 'power-platform', 'security-compliance', 'admin-billing', 'modern-work']),
  products: z.array(z.string()).min(1),
  summary: z.string().min(40).max(260),
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
  licensing: z.object({
    model: z.enum(['included', 'per-user', 'consumption', 'add-on', 'mixed', 'unknown']),
    notes: z.string().max(400),
  }),
  audiences: z.array(z.enum([
    'm365-admin', 'power-platform-admin', 'service-owner', 'security', 'compliance', 'finops', 'maker', 'end-user', 'change-adoption',
  ])).min(1),
  tags: z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)).min(2).max(12),
  sources: z.array(sourceSchema).min(1),
  videos: z.array(videoSchema).default([]),
  related: z.array(slug).default([]),
  confidence: z.enum(['high', 'medium', 'low']),
  created: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  roadmapModified: z.string().nullable().default(null),
  changes: z.array(changeSchema).default([]),
  version: z.number().int().positive().default(1),
});

/** What the model returns for one roadmap item. The pipeline adds bookkeeping fields and renders markdown. */
export const briefingOutput = z.object({
  title: z.string().min(8).max(160).describe('Plain-English title. Product first, then the capability. No marketing adjectives.'),
  summary: z.string().min(40).max(260).describe('One or two sentences a service owner can skim. State what changes and who it affects.'),
  risk: z.enum(['low', 'medium', 'high']),
  riskRationale: z.string().min(20).max(400),
  cost: z.enum(['none', 'low', 'medium', 'high', 'variable']),
  costRationale: z.string().min(20).max(400),
  impact: z.enum(['low', 'medium', 'high']),
  impactRationale: z.string().min(20).max(400),
  defaultState: z.enum(['on', 'off', 'admin-opt-in', 'user-opt-in', 'unknown']),
  action: z.enum(['act-now', 'prepare', 'review', 'none']),
  licensingModel: z.enum(['included', 'per-user', 'consumption', 'add-on', 'mixed', 'unknown']),
  licensingNotes: z.string().max(400),
  audiences: z.array(z.enum([
    'm365-admin', 'power-platform-admin', 'service-owner', 'security', 'compliance', 'finops', 'maker', 'end-user', 'change-adoption',
  ])).min(1),
  tags: z.array(z.string()).min(2).max(12).describe('kebab-case topic tags, e.g. dlp, pay-as-you-go, mcp, agent-identity'),
  confidence: z.enum(['high', 'medium', 'low']).describe('high = key claims verified in Microsoft Learn; medium = roadmap text plus partial docs; low = roadmap text only'),
  sections: z.object({
    whatsChanging: z.string().min(200).describe('Markdown. 2 to 4 paragraphs. Neutral, specific, no hype.'),
    whyItMatters: z.string().min(120).describe('Markdown. Why a service owner or administrator should care.'),
    riskAssessment: z.string().min(120).describe('Markdown bullets grouped by: Data exposure, Security & identity, Autonomy & actions, Change & support.'),
    costAndLicensing: z.string().min(80).describe('Markdown. Licences, meters, credits, hidden costs. Say "not yet published" where unknown.'),
    scope: z.string().min(60).describe('Markdown. Users, roles, clouds, platforms, tenants affected.'),
    governance: z.string().min(200).describe('Markdown checklist with three headings: Before rollout, At rollout, After rollout. Each item actionable.'),
    adminControls: z.string().min(60).describe('Markdown. Where the controls live (portal path, policy, PowerShell). Say if none exist yet.'),
    openQuestions: z.string().min(40).describe('Markdown bullets. Unknowns to watch.'),
  }),
  sources: z.array(sourceSchema).min(1).describe('Only URLs you actually opened or that came from the roadmap item. No guesses.'),
  videos: z.array(videoSchema).describe('Official Microsoft videos found via search. Empty array if none found.'),
  relatedSlugs: z.array(z.string()).describe('Slugs of existing briefings from the index that this one relates to. Empty if none.'),
  changeNote: z.string().min(5).max(300).describe('One line for the change log, e.g. "Initial briefing" or "Status moved to Rolling out; added admin control path".'),
});

export function isAllowedSourceUrl(url) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return ALLOWED_SOURCE_DOMAINS.some((d) => host === d || host.endsWith('.' + d));
  } catch {
    return false;
  }
}
