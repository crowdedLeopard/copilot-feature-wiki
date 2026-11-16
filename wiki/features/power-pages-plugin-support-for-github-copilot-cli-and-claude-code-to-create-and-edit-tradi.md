---
title: "Power Pages: plugin for GitHub Copilot CLI and Claude Code edits traditional sites"
slug: "power-pages-plugin-support-for-github-copilot-cli-and-claude-code-to-create-and-edit-tradi"
roadmapId: 577900
topic: "power-platform"
products: ["Power Pages"]
summary: "The Power Pages plugin for GitHub Copilot CLI and Claude Code will create and edit traditional (non-SPA) sites, uploading changes with the Power Platform CLI."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Plugin pricing is not published. GitHub Copilot or Claude subscriptions are separate and outside Microsoft licensing."
audiences: ["maker","power-platform-admin","security","service-owner"]
tags: ["power-pages","github-copilot-cli","claude-code","coding-agents","power-platform-cli","table-permissions"]
sources:
  - title: "Microsoft 365 Roadmap item 577900"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577900"
    kind: "roadmap"
  - title: "Get started with the Power Pages plugin for GitHub Copilot CLI and Claude Code"
    url: "https://learn.microsoft.com/power-pages/configure/create-code-site-using-claude-code"
    kind: "learn"
  - title: "Downloading and uploading site content and code (Power Platform CLI)"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/pages"
    kind: "learn"
videos: []
related: ["agent-identity"]
controls:
  - governs: "Downloading and uploading site content and code"
    scope: "maker"
    ui: null
    api:
      kind: "pac-cli"
      call: "pac pages download / pac pages upload / pac pages upload-code-site"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/pages"
    note: "Runs under the developer's own sign-in and environment roles."
  - governs: "Admin switch for the coding-agent plugin"
    scope: "tenant"
    ui: null
    api: null
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577900 with Learn plugin guidance."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 37
  confirmed: 31
  unconfirmed: 2
  contradicted: 4
  attempts: 1
---

## What's changing

The Power Pages plugin for GitHub Copilot CLI and Claude Code will support traditional (non-SPA) Power Pages sites. Developers can use natural language to create a traditional site, or download, inspect and update existing site metadata.

The roadmap lists web pages, web templates, content snippets, basic and multistep forms, lists, table permissions, web roles and site settings. Changes are uploaded back to the environment with the Power Platform CLI.

Preview is listed for October CY2026 and general availability for November CY2026, Worldwide only. Learn today describes the plugin for modern SPA sites, with a warning that generated code and configuration can be inaccurate and must be reviewed.

## Why it matters

Traditional sites often hold years of configuration, including table permissions and web roles that protect Dataverse data. Letting an agent edit these is productive but needs control.

It also introduces third-party AI tools into the Power Platform developer workflow, which security teams should know about.

## Risk assessment

**Data exposure**
- The agent downloads site metadata to a developer machine, which may include configuration details.

**Security & identity**
- Table permissions and web roles are security controls. An incorrect edit could widen anonymous or authenticated access.

**Autonomy & actions**
- Agent proposals upload changes through the CLI after developer approval. Learn says to review proposals before approving.

**Change & support**
- Changes made outside the maker studio may be harder to trace. Use source control.

## Cost and licensing

No Microsoft charge for the plugin is published. GitHub Copilot or Claude subscriptions are separate and billed by those providers. Developer time for review is the main cost.

## Scope

Developers and makers using GitHub Copilot CLI or Claude Code with the Power Platform CLI. Roadmap cloud: Worldwide only.

## Governance guidance

### Before rollout
- [ ] Decide whether coding agents are permitted against your Power Pages environments.
- [ ] Require source control and code review for site metadata.

### At rollout
- [ ] Limit use to development environments.
- [ ] Ask developers to review every permission and web role change before upload.

### After rollout
- [ ] Run table permission audits after agent changes.
- [ ] Review who has installed the plugin and which environments they target.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Downloading and uploading site content and code</strong><br><small>Maker</small><br><small class="controls__note">Runs under the developer's own sign-in and environment roles.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac pages download / pac pages upload / pac pages upload-code-site</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/pages" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin switch for the coding-agent plugin</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The plugin drives the Power Platform CLI, so the governance surface is the CLI's: environment access, the roles the developer holds, and the [Power Platform CLI for Power Pages](https://learn.microsoft.com/power-pages/configure/power-platform-cli) guidance on source control. [Code sites](https://learn.microsoft.com/power-pages/configure/create-code-sites) follow the same path. Nothing in the admin center distinguishes uploads made by a coding agent from uploads made by hand.

## Open questions

- Will an admin control exist to restrict agent-driven site changes?
- What audit trail shows changes made through the plugin?
- How will traditional-site support relate to the existing security review skills?

<!-- rationale
risk: Medium. An AI coding agent can change site metadata, table permissions and web roles in an environment, so developer authentication and review matter.
cost: Low. The plugin has no published charge; the coding agent subscription is separate and the cost is developer time.
impact: Low. It affects developers and makers who adopt the plugin.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] Why it matters; Risk assessment: Security & identity / behaviour: Table permissions and web roles control access to Dataverse data, including anonymous access. | Found: Table permissions assigned to web roles allow members of the web role to access data that's stored in Dataverse tables. ... When the Anonymous users web role is granted access to a table, any user who visits the site can access the data in the table. | Fix: Add https://learn.microsoft.com/power-pages/security/assign-table-permissions to sources and cite it for the table-permission and anonymous-access risk. | Source: https://learn.microsoft.com/power-pages/security/assign-table-permissions
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Agent uploads of traditional-site changes happen after developer approval. | Found: Searched: Power Pages plugin Claude Code approval before upload; read plugin guide and roadmap. The guide requires review as advice and documents some proposal gates, but no universal approval gate for traditional-site uploads. | Fix: Replace the assertion with advice: 'Require developers to review and approve proposed changes before upload. Learn says to review, test and validate generated content before approving or deploying it.' Do not promise an enforced traditional-site upload approval gate.
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: GitHub Copilot subscriptions are separate, outside Microsoft licensing and billed by their provider. | Found: All GitHub usage from that organization — including GitHub Copilot and GitHub Actions — flows to that subscription. | Fix: Remove the blanket 'outside Microsoft licensing' and provider-only billing assertion. Say that coding-agent costs depend on the organisation's existing plan and billing arrangement; GitHub Copilot can be billed through a linked Azure subscription. Cite https://learn.microsoft.com/azure/cost-management-billing/reservations/github-pre-purchase. | Source: https://learn.microsoft.com/azure/cost-management-billing/reservations/github-pre-purchase
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: Claude Code costs are a separate provider-billed subscription outside Microsoft billing. | Found: When you configure Claude Code with Microsoft Foundry, you run the coding agent on Azure infrastructure ... To use Claude models in Microsoft Foundry, you must have a paid Azure subscription | Fix: Remove the universal provider-subscription billing statement. Say that Claude Code billing depends on its configured service; Microsoft documents a Microsoft Foundry configuration requiring a paid Azure subscription at https://learn.microsoft.com/azure/foundry/foundry-models/how-to/configure-claude-code. Keep plugin-specific licensing as not yet published. | Source: https://learn.microsoft.com/azure/foundry/foundry-models/how-to/configure-claude-code
- [contradicted, blocker] controls[0].ui; Governance controls table / absence: No UI surface is documented for downloading and uploading site content. | Found: Power Pages Actions is available in the pane titled Power Pages Actions in the Explorer sidebar of Visual Studio Code. ... Upload: Uploads local changes back to your environment. Download: Downloads the site content to a local folder for offline editing. | Fix: Replace controls[0].ui=null with a maker-side Visual Studio Code (Power Platform Tools) entry: 'Explorer > Power Pages Actions > Active Sites > site (right-click) > Download / Upload', citing https://learn.microsoft.com/power-pages/configure/vs-code-extension#power-pages-actions. Note that this is a developer UI, not a plugin-specific tenant switch. | Source: https://learn.microsoft.com/power-pages/configure/vs-code-extension
- [supported, minor] controls[0].note; Governance controls; rationale: risk / applicability: The developer's environment permissions govern access to the Dataverse site configuration. | Found: Table privileges define which tasks a user with access to a table record can do, such as Read, Create, Delete, Write, Assign, Share, Append, and Append To. | Fix: Cite https://learn.microsoft.com/power-platform/admin/security-roles-privileges for Dataverse role enforcement alongside the CLI authentication guidance. Do not imply that this establishes a separate coding-agent permission model. | Source: https://learn.microsoft.com/power-platform/admin/security-roles-privileges#role-name-and-description-of-a-security-role
- [unsupported, blocker] Governance controls / absence: Nothing in the admin center distinguishes coding-agent uploads from manual uploads. | Found: Searched: Power Pages plugin audit logs; Power Pages plugin audit admin center. Read plugin guide, Copilot hub and View Power Pages activity logs in Microsoft Purview; none states that agent and manual uploads cannot be distinguished. | Fix: Replace the categorical assertion with 'Microsoft has not documented a plugin-specific upload identifier in the admin center at the time of writing (November 2026).' Keep the plugin audit-trail question open; do not conclude that identification is impossible.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist asks readers to run table-permission audits, but the controls table has no permission-review row. | Found: Checklist: 'Run table permission audits after agent changes.' Table rows: 'Downloading and uploading site content and code' and 'Admin switch for the coding-agent plugin'. | Fix: Add a site-scoped table-permission review row. The documented manual UI is Power Pages site > Security > Table permissions > table (...) > Edit, at https://learn.microsoft.com/power-pages/security/assign-table-permissions. The plugin guide also documents /audit-permissions for its current SPA workflow; explicitly leave traditional-site applicability unconfirmed.
-->
