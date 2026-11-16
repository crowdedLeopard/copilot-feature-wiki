import { z } from 'zod';
import { ALLOWED_SOURCE_DOMAINS, TOPIC_IDS, TAG_GROUP_IDS } from '../../config/taxonomy.mjs';
import { verificationSummary } from './verify-schema.mjs';

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

/** A glossary entry for a tag the model is using for the first time. See wiki/tags.json and SCHEMA.md, "Tags". */
export const tagDefinition = z.object({
  tag: slug.describe('The kebab-case tag exactly as it appears in tags.'),
  label: z.string().min(2).max(60).describe('The name readers see. Plain English, abbreviations expanded: "US Government: DoD", "Pay-as-you-go", "MCP (Model Context Protocol)".'),
  group: z.enum(TAG_GROUP_IDS.filter((g) => g !== 'other')).describe('cloud | product | capability | licensing | security | governance | data'),
  description: z.string().min(20).max(220).describe('One sentence for the tag page: what it is, and why an administrator cares (cost, risk or control).'),
});

/** Where a control lives. Admin UI side: the admin centre and the exact navigation path. API side: the
 *  cmdlet, endpoint or CLI command. Both must point at the Microsoft Learn page that documents them;
 *  `null` means Microsoft has not documented that surface yet, which the page states as such. */
export const CONTROL_SCOPES = ['tenant', 'environment', 'environment-group', 'site', 'group', 'user', 'agent', 'app', 'maker', 'other'];
export const API_KINDS = ['powershell', 'graph', 'power-platform-api', 'pac-cli', 'azure-cli', 'rest', 'other'];

export const controlSchema = z.object({
  governs: z.string().min(3).max(120).describe('What the control decides, as a noun phrase: "Which credential types makers may use", "Tenant-wide availability".'),
  scope: z.enum(CONTROL_SCOPES).describe('Where the control applies.'),
  ui: z.object({
    surface: z.string().min(3).max(80).describe('The admin centre or portal, by its current name: "Power Platform admin center", "Microsoft Purview portal", "Copilot Studio (maker)".'),
    path: z.string().min(3).max(240).describe('Exact navigation path with " > " between steps, as Microsoft Learn gives it.'),
    docs: z.string().url().describe('Microsoft Learn page that documents this setting.'),
  }).nullable().describe('null when no admin UI control is documented.'),
  api: z.object({
    kind: z.enum(API_KINDS),
    call: z.string().min(3).max(240).describe('The cmdlet and key parameters, the HTTP method and endpoint, or the CLI command. One line.'),
    docs: z.string().url().describe('Microsoft Learn reference page for the cmdlet, endpoint or command.'),
  }).nullable().describe('null when no programmatic control is documented.'),
  note: z.string().max(240).optional().describe('One short qualifier if needed: role required, preview status, maker-side only.'),
});

/** One documented fact the briefing relies on, with the page and the sentence it was read in. Not
 *  printed on the page: it makes the writer check each fact before stating it, and it is where the
 *  verifier starts. See SCHEMA.md, "Evidence". */
export const evidenceSchema = z.object({
  claim: z.string().min(8).max(400).describe('One fact the briefing states, in a sentence.'),
  url: z.string().url().describe('The Microsoft page the fact was read on during this research.'),
  quote: z.string().min(8).max(400).describe('The sentence or phrase on that page that states it, copied exactly.'),
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
  topic: z.enum(TOPIC_IDS),
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
  controls: z.array(controlSchema).default([]),
  confidence: z.enum(['high', 'medium', 'low']),
  created: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  roadmapModified: z.string().nullable().default(null),
  changes: z.array(changeSchema).default([]),
  version: z.number().int().positive().default(1),
  /** Stamped by the independent check (pipeline/lib/verify.mjs). Absent until a page has been checked at its current version. */
  verification: verificationSummary.optional(),
  // Set by pipeline/lib/lifecycle.mjs when the roadmap item is cancelled or has left the roadmap. Absent on live pages.
  archived: z.object({
    reason: z.enum(['cancelled', 'removed']),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    lastSeen: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullable().default(null),
  }).optional(),
});

/** What the model returns for one roadmap item. The pipeline adds bookkeeping fields and renders markdown. */
export const briefingOutput = z.object({
  title: z.string().min(8).max(160).describe('Product first, then the capability, in plain words. Sentence case. No marketing adjectives.'),
  summary: z.string().min(40).max(260).describe('One or two sentences a service owner can act on: what changes, who is affected, and whether an administrator has to do anything.'),
  risk: z.enum(['low', 'medium', 'high']).describe('Exposure if the change is left ungoverned. Scale in SCHEMA.md.'),
  riskRationale: z.string().min(20).max(400).describe('Starts with the rating word ("High."), then the one fact that decided it, in plain words. Printed beside the rating.'),
  cost: z.enum(['none', 'low', 'medium', 'high', 'variable']).describe('Direct and indirect cost. "variable" means metered.'),
  costRationale: z.string().min(20).max(400).describe('Starts with the rating word. Names the licence or the meter, or says licensing is not yet published.'),
  impact: z.enum(['low', 'medium', 'high']).describe('How many people notice.'),
  impactRationale: z.string().min(20).max(400).describe('Starts with the rating word. Says who notices.'),
  defaultState: z.enum(['on', 'off', 'admin-opt-in', 'user-opt-in', 'unknown']).describe('From the wording of the sources only. "unknown" when they do not say; never inferred from similar features.'),
  action: z.enum(['act-now', 'prepare', 'review', 'none']).describe('What the reader should do now, judged against today\'s date in the brief.'),
  licensingModel: z.enum(['included', 'per-user', 'consumption', 'add-on', 'mixed', 'unknown']).describe('"unknown" when Microsoft has not published the licensing.'),
  licensingNotes: z.string().max(400).describe('One or two sentences on the licence or meter as a Microsoft page states it, or that it is not yet published.'),
  audiences: z.array(z.enum([
    'm365-admin', 'power-platform-admin', 'service-owner', 'security', 'compliance', 'finops', 'maker', 'end-user', 'change-adoption',
  ])).min(1),
  tags: z.array(z.string()).min(2).max(12).describe('kebab-case tags. Reuse the glossary tags listed in the brief before inventing one; prefer the name of a product, control, meter or risk. Do not add cloud tags (gcc, gcc-high, dod): the pipeline adds them from the roadmap record.'),
  newTags: z.array(tagDefinition).default([]).describe('A definition for every tag in tags that is not in the glossary listed in the brief, or that the brief marks as needing a description. Empty when every tag is already defined.'),
  confidence: z.enum(['high', 'medium', 'low']).describe('high = key claims verified in Microsoft Learn; medium = roadmap text plus partial docs; low = roadmap text only'),
  sections: z.object({
    whatsChanging: z.string().min(200).describe('Markdown, 2 to 4 paragraphs. The change in one plain sentence first, then how it behaves, then status and dates as the roadmap record gives them.'),
    whyItMatters: z.string().min(120).describe('Markdown, 1 or 2 paragraphs. What this changes for a service owner (data, identity, spend, support) and what happens if nobody acts.'),
    riskAssessment: z.string().min(120).describe('Markdown bullets under four bold labels: Data exposure, Security & identity, Autonomy & actions, Change & support. Each bullet names the mechanism, the consequence and the control that covers it, or says there is none.'),
    costAndLicensing: z.string().min(80).describe('Markdown. The licence a user needs, any meter and where it is charged, caps, indirect costs. Say "not yet published" where Microsoft has not said. No figure without a cited page.'),
    scope: z.string().min(60).describe('Markdown. Users and licences in scope, roles that configure it, clouds and platforms as the record lists them, rollout mechanics, prerequisites.'),
    governance: z.string().min(200).describe('Markdown: three H3 headings (Before rollout, At rollout, After rollout), each with plain bullets that start with a verb and are specific to this feature.'),
    governanceControls: z.string().min(40).describe('Markdown notes printed under the controls table: enforcement gaps, roles required, how the controls interact, maker-side settings. Do not repeat the table.'),
    openQuestions: z.string().min(40).describe('Markdown bullets. What Microsoft has not said that a reader needs in order to decide, each as a question specific to this feature.'),
  }),
  controls: z.array(controlSchema).min(1).max(8).describe('Where the governance controls live, one row per control, most decisive first: admin UI path and API or automation equivalent, each with the Learn page it was read on, or null where Microsoft has not documented that surface. Never guess a path, cmdlet or endpoint.'),
  evidence: z.array(evidenceSchema).max(60).default([]).describe('One entry for every documented fact a reader could act on: each control side that is not null, the default state, every licensing and cost statement, every role, limit, number and date that did not come from the roadmap record. A fact with no quote to support it does not belong in the briefing.'),
  sources: z.array(sourceSchema).min(1).describe('Only pages opened during this research or links from the roadmap record, titled as Microsoft titles them. No guesses.'),
  videos: z.array(videoSchema).describe('Official Microsoft videos found via search. Empty array if none found.'),
  relatedSlugs: z.array(z.string()).describe('Slugs of existing briefings from the index that this one relates to. Empty if none.'),
  changeNote: z.string().min(5).max(300).describe('One line for the reader on what is new or different on the page, e.g. "Initial briefing" or "Status moved to Rolling out; added the tenant setting, documented since October".'),
});

const tagId = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

/**
 * Front matter of a concept page (wiki/concepts/). Lenient where the four pages written by hand in
 * November 2026 differ from the pages the pipeline writes: those have no kind, created, version,
 * covers or controls until their first rewrite. The site's content collection validates the same shape.
 */
export const conceptFrontmatter = z.object({
  kind: z.literal('concept').optional(),
  title: z.string().min(3).max(160),
  slug,
  summary: z.string().min(40).max(320),
  updated: isoDate,
  created: isoDate.optional(),
  version: z.number().int().positive().default(1),
  tags: z.array(tagId).default([]),
  /** Tags this page explains, besides the one it is named after. A covered tag is not offered as a concept of its own. */
  covers: z.array(tagId).default([]),
  sources: z.array(sourceSchema).default([]),
  related: z.array(slug).default([]),
  controls: z.array(controlSchema).default([]),
  confidence: z.enum(['high', 'medium', 'low']).optional(),
  /** Live briefings that depended on the page when it was written; the refresh rule compares today's count with it. */
  dependents: z.number().int().nonnegative().optional(),
  changes: z.array(changeSchema).default([]),
  verification: verificationSummary.optional(),
});

/** What the model returns for one concept page. The pipeline adds bookkeeping fields and renders markdown. */
export const conceptOutput = z.object({
  title: z.string().min(3).max(120).describe('The name of the mechanism as Microsoft names it, then, if it helps, a colon and the question the page answers. Sentence case. No marketing adjectives.'),
  summary: z.string().min(40).max(320).describe('One or two sentences: what the mechanism is and what an administrator uses it to decide, cap or see.'),
  tags: z.array(z.string()).min(2).max(10).describe('kebab-case tags from the glossary, the lead tag first. Tags are for finding the page; covers says what it explains.'),
  newTags: z.array(tagDefinition).default([]).describe('A definition for every tag in tags or covers that is not in the glossary listed in the brief.'),
  covers: z.array(z.string()).max(8).default([]).describe('Other tags from the brief\'s list of recurring tags that this page explains fully enough that they need no page of their own. Empty when the page explains only its lead tag.'),
  confidence: z.enum(['high', 'medium', 'low']).describe('high = every control and licensing statement read on a Microsoft page; medium = some surfaces not documented; low = thinly documented.'),
  sections: z.object({
    whatItIs: z.string().min(200).describe('Markdown. The definition in one or two plain sentences first, then how it works: its parts, who does what, where it sits. H3 headings allowed.'),
    whyItMatters: z.string().min(120).describe('Markdown, 1 or 2 paragraphs. What it lets an organisation decide, cap or see, and what happens where it is not set up.'),
    costAndLicensing: z.string().min(60).describe('Markdown. The licence it needs, any meter and where it is charged, as Microsoft pages state them, or that none is documented or published.'),
    risksAndLimits: z.string().min(120).describe('Markdown bullets. Where the mechanism does not reach, limits Microsoft documents, and the mistakes that follow from misunderstanding it. Each names the consequence.'),
    governanceControls: z.string().min(40).describe('Markdown notes printed under the controls table: roles required, how the controls interact, enforcement gaps. Do not repeat the table.'),
    whatToCheck: z.string().min(80).describe('Markdown bullets that start with a verb: what to look at in your own tenant to know where you stand. Every control named here has a row in controls.'),
    openQuestions: z.string().min(20).describe('Markdown bullets. What Microsoft has not said that a reader needs in order to decide.'),
  }),
  controls: z.array(controlSchema).min(1).max(10).describe('Where the controls for this mechanism live, one row per control, most decisive first, with the same rules as a briefing.'),
  evidence: z.array(evidenceSchema).max(80).default([]).describe('One entry for every documented fact a reader could act on, as for a briefing. A concept page has no roadmap record, so every fact that is not analysis needs an entry.'),
  sources: z.array(sourceSchema).min(2).describe('Only pages opened during this research, titled as Microsoft titles them.'),
  relatedSlugs: z.array(z.string()).default([]).describe('Up to eight slugs from the brief: the briefings that best show the mechanism at work, and neighbouring concept pages.'),
  changeNote: z.string().min(5).max(300).describe('One line for the reader on what is new or different, e.g. "First version" or "Rewritten to the concept standard; added the Graph endpoint, documented since October".'),
});

/** Returned instead of a page when the tag offered does not name a mechanism worth a page of its own. */
export const conceptDecline = z.object({
  decline: z.string().min(20).max(400).describe('One or two sentences saying why: too broad to explain in one page, a feature rather than a shared mechanism, or already explained by a named concept page.'),
});

export function isAllowedSourceUrl(url) {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return ALLOWED_SOURCE_DOMAINS.some((d) => host === d || host.endsWith('.' + d));
  } catch {
    return false;
  }
}
