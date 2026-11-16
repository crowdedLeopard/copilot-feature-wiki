// Shared taxonomy for the pipeline and the site. Plain JS so both can import it.

export const SITE = {
  name: 'Release Ledger',
  tagline: 'Microsoft Copilot, Power Platform and Modern Work changes, briefed for the people who run them.',
  repo: 'https://github.com/crowdedLeopard/copilot-feature-wiki',
};

// Topics are the top-level categories. Every roadmap item is filed under exactly one.
// Order matters twice: it is the order topics are listed in, and an item with several products is
// filed under the first topic whose product list matches. Specific platforms come before the broad
// "Microsoft Copilot (Microsoft 365)" tag, which Microsoft adds to most AI items.
export const TOPICS = [
  {
    id: 'copilot-studio',
    label: 'Copilot Studio & agents',
    short: 'Copilot Studio',
    blurb: 'Copilot Studio, Agent 365, Work IQ and the controls for building and running agents.',
    products: ['Microsoft Copilot Studio', 'Copilot Studio', 'Microsoft Agent 365', 'Agent 365', 'Work IQ'],
  },
  {
    id: 'power-platform',
    label: 'Power Platform',
    short: 'Power Platform',
    blurb: 'Power Apps, Power Automate, Power Pages, Dataverse and platform administration.',
    products: [
      'Power Apps', 'PowerApps', 'Power Automate', 'Power Pages', 'Microsoft Dataverse', 'Dataverse',
      'Microsoft Power Platform governance and administration', 'Power Platform', 'Power BI', 'AI Builder',
    ],
  },
  {
    id: 'governance',
    label: 'Governance & security',
    short: 'Governance',
    blurb: 'Purview, Entra, Defender, Intune and the Microsoft 365 admin centre: compliance, identity, licensing and billing.',
    products: [
      'Microsoft Purview', 'Microsoft Purview compliance portal', 'Microsoft Entra', 'Microsoft Defender for Office 365',
      'Microsoft Intune', 'Microsoft 365 Defender', 'Microsoft Defender', 'Microsoft Information Protection',
      'Microsoft 365 admin center', 'Microsoft 365 Admin Center',
    ],
  },
  {
    id: 'm365-copilot',
    label: 'Microsoft 365 Copilot',
    short: 'M365 Copilot',
    blurb: 'Copilot Chat, Microsoft 365 Copilot, Researcher, Analyst, connectors and Copilot in the apps.',
    products: ['Microsoft Copilot (Microsoft 365)', 'Microsoft 365 Copilot', 'Microsoft 365 Copilot Chat', 'Microsoft Copilot'],
  },
  {
    id: 'modern-work',
    label: 'Modern Work',
    short: 'Modern Work',
    blurb: 'Teams, SharePoint, OneDrive, Outlook, Viva and the Microsoft 365 apps.',
    products: [
      'Microsoft Teams', 'SharePoint', 'SharePoint Syntex', 'OneDrive', 'Outlook', 'Exchange', 'Microsoft Viva', 'Word', 'Excel',
      'PowerPoint', 'OneNote', 'Planner', 'Microsoft 365 app', 'Microsoft 365', 'Microsoft Edge', 'Microsoft Clipchamp',
      'Forms', 'Microsoft Stream', 'Microsoft Loop', 'Loop', 'Whiteboard', 'Visio', 'Microsoft Project', 'Microsoft To Do',
      'Access', 'Windows 365', 'Windows', 'Universal Print', 'Microsoft Graph',
    ],
  },
];

export const TOPIC_IDS = TOPICS.map((t) => t.id);

// What happens to a briefing after it is written. Nothing is deleted: a page whose roadmap item is
// cancelled, or has been gone from the roadmap for the grace period, is archived in place (kept at
// its address, listed under /archive/). A live page untouched for the review period goes back into
// its topic's queue for a re-check. Used by pipeline/lib/lifecycle.mjs and the site.
export const LIFECYCLE = {
  removedGraceDays: 90,
  reviewAfterDays: { default: 120, launched: 180 },
};

// Concept pages (wiki/concepts/) each explain one mechanism that several briefings depend on. The
// daily run offers a tag as a concept once enough live briefings carry it and no concept page covers
// it yet, and spends a few of each run's writer sessions on them. Used by pipeline/lib/concepts.mjs.
export const CONCEPTS = {
  /** Live briefings that must carry a tag before it is offered as a concept. */
  minBriefings: 4,
  /** Writer sessions per run spent on concept pages. They come out of COMPILE_LIMIT, not on top of it. */
  perRun: 2,
  /** A run smaller than this writes no concept pages, so a three-briefing test run stays three briefings. */
  minRunLimit: 8,
  /** Tag groups that name a mechanism. A capability tag counts only when it turns up under two or more topics. */
  mechanismGroups: ['licensing', 'security', 'governance', 'data'],
  /** A tag on more than this share of the live briefings is a category ("agents"), not a mechanism. */
  maxShare: 0.15,
  /** Product and cloud tags are not concepts, with these exceptions. Each is the lead tag of one page. */
  alsoTags: ['work-iq'],
  /** A tag the writer declined is offered again once this many times as many briefings carry it. */
  reofferFactor: 2,
  /** A concept page is refreshed once this many more briefings depend on it than when it was written. */
  refreshAfterNewBriefings: 6,
  /** ...or when it has not been written or refreshed for this many days. */
  reviewAfterDays: 120,
  /** The validator rejects a concept page whose sections run past this many words (the standard asks for 700 to 1,200). */
  maxWords: 1500,
};
export const ARCHIVE_REASON = {
  cancelled: { label: 'Cancelled by Microsoft', help: 'Microsoft marked the roadmap item as cancelled.' },
  removed: { label: 'Left the roadmap', help: `The item disappeared from the Microsoft 365 Roadmap and did not return within ${LIFECYCLE.removedGraceDays} days.` },
};
export const TOPIC_BY_ID = Object.fromEntries(TOPICS.map((t) => [t.id, t]));

export function topicForProducts(products = []) {
  for (const topic of TOPICS) {
    if (products.some((p) => topic.products.includes(p))) return topic.id;
  }
  return null; // out of scope (for example Dynamics 365)
}

// Until November 2026 topics were called "desks" and there were six of them. Pages and links written
// under the old names are mapped here; the lint step rewrites any page that still carries a desk.
export const LEGACY_DESK_TOPIC = {
  agents: 'copilot-studio',
  'power-platform': 'power-platform',
  'security-compliance': 'governance',
  'admin-billing': 'governance',
  copilot: 'm365-copilot',
  'modern-work': 'modern-work',
};

// Assessment scales. Labels are what readers see; ids are what pages store.
export const RISK = {
  low: { label: 'Low', rank: 1, help: 'Stays inside existing data and security boundaries. Admin opt-in or cosmetic.' },
  medium: { label: 'Medium', rank: 2, help: 'New behaviour or data access that existing controls mostly cover, but needs configuration or communication.' },
  high: { label: 'High', rank: 3, help: 'Can move or expose organisational data, act autonomously, is on by default with thin controls, or creates uncapped spend.' },
};

export const COST = {
  none: { label: 'None', rank: 0, help: 'Included in licences you already have.' },
  low: { label: 'Low', rank: 1, help: 'Indirect cost only: admin time, communications, training.' },
  medium: { label: 'Medium', rank: 2, help: 'Add-on licences for a subset of users, or predictable consumption.' },
  high: { label: 'High', rank: 3, help: 'Broad add-on licensing or significant new consumption.' },
  variable: { label: 'Variable', rank: 2.5, help: 'Metered (Copilot Credits, pay-as-you-go, Azure). Spend depends on usage, so set budgets and alerts.' },
};

export const IMPACT = {
  low: { label: 'Low', rank: 1, help: 'Admins only, or opt-in for a small group.' },
  medium: { label: 'Medium', rank: 2, help: 'Specific roles: makers, analysts, champions or a business unit.' },
  high: { label: 'High', rank: 3, help: 'Most users, or a change to default behaviour.' },
};

export const DEFAULT_STATE = {
  on: { label: 'On by default', short: 'On', help: 'Users get it without anyone in your organisation switching it on.' },
  off: { label: 'Off by default', short: 'Off', help: 'Nothing changes until an administrator turns it on.' },
  'admin-opt-in': { label: 'Admin opt-in', short: 'Admin opt-in', help: 'An administrator has to enable it, usually per tenant or per environment.' },
  'user-opt-in': { label: 'User opt-in', short: 'User opt-in', help: 'Each user chooses whether to turn it on for themselves.' },
  unknown: { label: 'Not stated', short: 'Not stated', help: 'Microsoft has not said whether it will be on or off by default.' },
};

export const ACTION = {
  'act-now': { label: 'Act now', rank: 3, help: 'On by default or a deadline is close. Configure controls before the rollout date.' },
  prepare: { label: 'Prepare', rank: 2, help: 'Plan configuration, licensing and comms within the release window.' },
  review: { label: 'Review', rank: 1, help: 'Check fit with your policies. No change needed unless you want it.' },
  none: { label: 'No action', rank: 0, help: 'Nothing to configure or budget. Briefed so you know it is coming.' },
};

// Status follows the Microsoft 365 Roadmap. Help text is shown as a tooltip and in the legend.
export const STATUS = {
  'in-development': { label: 'In development', rank: 1, help: 'Microsoft is still building it. The target date is an estimate and often moves.' },
  preview: { label: 'Preview', rank: 2, help: 'Available to try before general release. Behaviour and licensing can still change.' },
  'rolling-out': { label: 'Rolling out', rank: 3, help: 'Microsoft has started switching it on for tenants. It may already be in yours.' },
  launched: { label: 'Launched', rank: 4, help: 'Generally available in the clouds listed on the briefing.' },
  cancelled: { label: 'Cancelled', rank: 0, help: 'Microsoft has withdrawn this roadmap item.' },
};

export function statusFromRoadmap(s = '') {
  const v = s.toLowerCase();
  if (v.startsWith('launch')) return 'launched';
  if (v.startsWith('rolling')) return 'rolling-out';
  if (v.startsWith('cancel')) return 'cancelled';
  return 'in-development';
}

export const LICENSING_MODEL = {
  included: 'Included',
  'per-user': 'Per-user licence',
  consumption: 'Consumption (metered)',
  'add-on': 'Add-on',
  mixed: 'Mixed',
  unknown: 'Not yet published',
};

export const LICENSING_MODEL_HELP = {
  included: 'No extra licence. Covered by subscriptions you already hold.',
  'per-user': 'A licence for each person who uses it.',
  consumption: 'Metered. You pay for what is used, so spend depends on usage.',
  'add-on': 'A separate add-on subscription on top of your base licences.',
  mixed: 'Partly included and partly paid for, depending on the user or the usage.',
  unknown: 'Microsoft has not published the licensing yet.',
};

// Microsoft clouds, as the roadmap names them. `short` is the compact form for tables; the full name
// and the one-line explanation live in the tag glossary (wiki/tags.json) under `tag`, so that the
// Facts grid, the tag pages and the tooltips all say the same thing.
export const CLOUDS = {
  'Worldwide (Standard Multi-Tenant)': { tag: 'worldwide', short: 'Worldwide' },
  GCC: { tag: 'gcc', short: 'GCC' },
  'GCC High': { tag: 'gcc-high', short: 'GCC High' },
  DoD: { tag: 'dod', short: 'DoD' },
};

// Government clouds are tagged automatically from the roadmap's cloud list, so the "US Government"
// tag pages are complete rather than dependent on the model remembering. Worldwide is not tagged:
// it would sit on almost every page and say nothing.
export const AUTO_TAG_CLOUDS = ['GCC', 'GCC High', 'DoD'];

export function cloudTags(clouds = []) {
  return clouds.filter((c) => AUTO_TAG_CLOUDS.includes(c)).map((c) => CLOUDS[c].tag);
}

// Tag groups. Every tag in the glossary (wiki/tags.json) is filed under one of these; the tags index
// and each tag page use the group to show a tag beside its siblings, for example the other clouds.
export const TAG_GROUPS = [
  { id: 'cloud', label: 'Cloud instance', blurb: 'Which Microsoft cloud the change applies to. Features usually reach the US Government clouds after Worldwide, sometimes by a year or more.' },
  { id: 'product', label: 'Products and services', blurb: 'The Microsoft product, service or tool the change belongs to.' },
  { id: 'capability', label: 'Capabilities', blurb: 'What a feature does, or the mechanism it relies on.' },
  { id: 'licensing', label: 'Licensing and cost', blurb: 'Licences, meters, credits and the controls that cap spend.' },
  { id: 'security', label: 'Security and identity', blurb: 'Who or what a user, visitor or agent acts as, and how that is authenticated and authorised.' },
  { id: 'governance', label: 'Governance and administration', blurb: 'The policies, settings and admin centres used to control a feature.' },
  { id: 'data', label: 'Data, privacy and compliance', blurb: 'Where data goes, who can see it, how long it is kept and how that is audited.' },
  { id: 'other', label: 'Other', blurb: 'Tags that have not been filed under a group yet.' },
];
export const TAG_GROUP_IDS = TAG_GROUPS.map((g) => g.id);
export const TAG_GROUP_BY_ID = Object.fromEntries(TAG_GROUPS.map((g) => [g.id, g]));

export const AUDIENCES = {
  'm365-admin': 'Microsoft 365 admins',
  'power-platform-admin': 'Power Platform admins',
  'service-owner': 'Service owners',
  security: 'Security teams',
  compliance: 'Compliance & records',
  finops: 'Finance & licensing',
  maker: 'Makers & developers',
  'end-user': 'End users',
  'change-adoption': 'Change & adoption',
};

export const SOURCE_KIND = {
  roadmap: 'Roadmap',
  learn: 'Microsoft Learn',
  blog: 'Microsoft blog',
  'message-center': 'Message center',
  docs: 'Documentation',
  video: 'Video',
};

// Domains a briefing may cite. Anything else is dropped by the pipeline.
export const ALLOWED_SOURCE_DOMAINS = [
  'learn.microsoft.com', 'www.microsoft.com', 'microsoft.com', 'techcommunity.microsoft.com', 'adoption.microsoft.com',
  'blogs.microsoft.com', 'news.microsoft.com', 'powerplatform.microsoft.com', 'www.microsoft365.com',
  'admin.microsoft.com', 'aka.ms', 'github.com', 'devblogs.microsoft.com', 'azure.microsoft.com', 'query.prod.cms.rt.microsoft.com',
  'www.youtube.com', 'youtube.com', 'youtu.be',
];
