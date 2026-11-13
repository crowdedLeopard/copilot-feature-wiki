// Shared taxonomy for the pipeline and the site. Plain JS so both can import it.

export const SITE = {
  name: 'Release Ledger',
  tagline: 'Microsoft Copilot, Power Platform and Modern Work changes, briefed for the people who run them.',
  repo: 'https://github.com/crowdedLeopard/copilot-feature-wiki',
};

// Desks are the top-level sections. Order matters: an item with several products
// is filed under the first desk whose product list matches. Specific platforms come before
// the broad "Microsoft Copilot (Microsoft 365)" tag, which Microsoft adds to most AI items.
export const DESKS = [
  {
    id: 'agents',
    label: 'Agents & Copilot Studio',
    short: 'Agents',
    blurb: 'Copilot Studio, Agent 365, Work IQ and the agent control plane.',
    products: ['Microsoft Copilot Studio', 'Copilot Studio', 'Microsoft Agent 365', 'Agent 365', 'Work IQ'],
  },
  {
    id: 'power-platform',
    label: 'Power Platform',
    short: 'Power Platform',
    blurb: 'Power Apps, Power Automate, Power Pages, Dataverse and platform governance.',
    products: [
      'Power Apps', 'PowerApps', 'Power Automate', 'Power Pages', 'Microsoft Dataverse', 'Dataverse',
      'Microsoft Power Platform governance and administration', 'Power Platform', 'Power BI', 'AI Builder',
    ],
  },
  {
    id: 'security-compliance',
    label: 'Security & Compliance',
    short: 'Security',
    blurb: 'Purview, Entra, Defender and Intune changes that touch Copilot and collaboration data.',
    products: [
      'Microsoft Purview', 'Microsoft Purview compliance portal', 'Microsoft Entra', 'Microsoft Defender for Office 365',
      'Microsoft Intune', 'Microsoft 365 Defender', 'Microsoft Defender', 'Microsoft Information Protection',
    ],
  },
  {
    id: 'admin-billing',
    label: 'Admin & Billing',
    short: 'Admin',
    blurb: 'Microsoft 365 admin center, usage reporting, licensing and pay-as-you-go billing.',
    products: ['Microsoft 365 admin center', 'Microsoft 365 Admin Center'],
  },
  {
    id: 'copilot',
    label: 'Microsoft 365 Copilot',
    short: 'Copilot',
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

export const DESK_BY_ID = Object.fromEntries(DESKS.map((d) => [d.id, d]));

export function deskForProducts(products = []) {
  for (const desk of DESKS) {
    if (products.some((p) => desk.products.includes(p))) return desk.id;
  }
  return null; // out of scope (for example Dynamics 365)
}

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
  on: { label: 'On by default', short: 'On' },
  off: { label: 'Off by default', short: 'Off' },
  'admin-opt-in': { label: 'Admin opt-in', short: 'Admin opt-in' },
  'user-opt-in': { label: 'User opt-in', short: 'User opt-in' },
  unknown: { label: 'Not stated', short: 'Not stated' },
};

export const ACTION = {
  'act-now': { label: 'Act now', rank: 3, help: 'On by default or a deadline is close. Configure controls before the rollout date.' },
  prepare: { label: 'Prepare', rank: 2, help: 'Plan configuration, licensing and comms within the release window.' },
  review: { label: 'Review', rank: 1, help: 'Check fit with your policies. No change needed unless you want it.' },
  none: { label: 'Awareness', rank: 0, help: 'Informational.' },
};

export const STATUS = {
  'in-development': { label: 'In development', rank: 1 },
  preview: { label: 'Preview', rank: 2 },
  'rolling-out': { label: 'Rolling out', rank: 3 },
  launched: { label: 'Launched', rank: 4 },
  cancelled: { label: 'Cancelled', rank: 0 },
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
