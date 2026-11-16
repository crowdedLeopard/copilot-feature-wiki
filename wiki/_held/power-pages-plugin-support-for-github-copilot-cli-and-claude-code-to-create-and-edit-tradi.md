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
  notes: "Plugin pricing is not published. Coding-agent costs depend on the organisation's existing plan and billing arrangement; GitHub Copilot can be billed through a linked Azure subscription."
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
  - title: "Use the Visual Studio Code extension"
    url: "https://learn.microsoft.com/power-pages/configure/vs-code-extension"
    kind: "learn"
  - title: "Optimize GitHub costs with a Pre-Purchase plan"
    url: "https://learn.microsoft.com/azure/cost-management-billing/reservations/github-pre-purchase"
    kind: "learn"
  - title: "Configure Claude Code for Microsoft Foundry"
    url: "https://learn.microsoft.com/azure/foundry/foundry-models/how-to/configure-claude-code"
    kind: "learn"
  - title: "Assign table permissions"
    url: "https://learn.microsoft.com/power-pages/security/assign-table-permissions"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Downloading and uploading site content and code"
    scope: "maker"
    ui:
      surface: "Visual Studio Code (Power Platform Tools)"
      path: "Explorer > Power Pages Actions > Active Sites > site (right-click) > Download / Upload"
      docs: "https://learn.microsoft.com/power-pages/configure/vs-code-extension"
    api:
      kind: "pac-cli"
      call: "pac pages download / pac pages upload / pac pages upload-code-site"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/pages"
    note: "Developer UI, not a plugin-specific tenant switch. Runs under the developer's own sign-in and environment roles."
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
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected after a failed check: removed unsupported approval-gate, billing and admin-centre claims; added the Visual Studio Code upload/download path."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 40 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 36
  unconfirmed: 2
  contradicted: 2
  attempts: 2
  hash: "c9c55c13bdcf27e9c0c56641aa1cd8d2"
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
- Require developers to review and approve proposed changes before upload. Learn says to review, test and validate all generated content before approving or deploying it.

**Change & support**
- Changes made outside the maker studio may be harder to trace. Use source control.

## Cost and licensing

No Microsoft charge for the plugin is published. Coding-agent costs depend on the organisation's existing plan and billing arrangement. Microsoft Learn documents GitHub usage, including GitHub Copilot, being billed through the Azure subscription linked to a GitHub organisation. For Claude Code, billing depends on the service it is configured with; Learn documents a Microsoft Foundry configuration that requires a paid Azure subscription. Developer time for review is the main known cost.

## Scope

Developers and makers using GitHub Copilot CLI or Claude Code with the Power Platform CLI. Roadmap cloud: Worldwide only.

## Governance guidance

### Before rollout
- Decide whether coding agents are permitted against your Power Pages environments.
- Require source control and code review for site metadata.

### At rollout
- Limit use to development environments.
- Ask developers to review every permission and web role change before upload.

### After rollout
- Run table permission audits after agent changes.
- Review who has installed the plugin and which environments they target.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Downloading and uploading site content and code</strong><br><small>Maker</small><br><small class="controls__note">Developer UI, not a plugin-specific tenant switch. Runs under the developer's own sign-in and environment roles.</small></td><td data-label="Admin UI"><strong>Visual Studio Code (Power Platform Tools)</strong><br>Explorer › Power Pages Actions › Active Sites › site (right-click) › Download / Upload <a href="https://learn.microsoft.com/power-pages/configure/vs-code-extension" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac pages download / pac pages upload / pac pages upload-code-site</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/pages" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin switch for the coding-agent plugin</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The plugin drives the Power Platform CLI, so the governance surface is the CLI's: environment access, the roles the developer holds, and the [Power Platform CLI for Power Pages](https://learn.microsoft.com/power-pages/configure/power-platform-cli) guidance on source control. [Code sites](https://learn.microsoft.com/power-pages/configure/create-code-sites) follow the same path. Microsoft has not documented a plugin-specific upload identifier in the admin center at the time of writing (November 2026).

## Open questions

- Will an admin control exist to restrict agent-driven site changes?
- What audit trail shows changes made through the plugin?
- How will traditional-site support relate to the existing security review skills?

<!-- rationale
risk: Medium. An AI coding agent can change site metadata, table permissions and web roles in an environment, so developer authentication and review matter.
cost: Low. No charge for the plugin is published; coding-agent costs depend on the organisation's existing plan and billing arrangement, and the known cost is developer time.
impact: Low. It affects developers and makers who adopt the plugin.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] What's changing; Scope / availability: Traditional-site plugin support is Worldwide only. | Found: Searched: Power Pages traditional sites Worldwide GCC GitHub Copilot CLI Claude Code plugin availability. Opened plugin guidance and create-code-sites; the roadmap lists Worldwide but does not state that other clouds are excluded. | Fix: Replace 'Worldwide only' in What's changing with 'with Worldwide (Standard Multi-Tenant) listed on the roadmap'. Replace 'Roadmap cloud: Worldwide only.' in Scope with 'The roadmap lists Worldwide (Standard Multi-Tenant).'
- [contradicted, blocker] controls[0].api; Governance controls table / command: The printed automation call 'pac pages download / pac pages upload / pac pages upload-code-site' supplies the calls for downloading and uploading site content and code. | Found: Required Parameters for pages download: --path ... --webSiteId ... Required Parameters for pages upload: --path ... Required Parameters for pages upload-code-site: --rootPath | Fix: Replace controls[0].api.call and its rendered counterpart with 'pac pages download --path <download-folder> --webSiteId <site-guid> --modelVersion <model-version>; pac pages upload --path <site-folder> --modelVersion <model-version>'. The cited reference documents these arguments. Remove upload-code-site from this traditional-site row rather than presenting the SPA operation as another equivalent. | Source: https://learn.microsoft.com/power-platform/developer/cli/reference/pages
- [unsupported, major] Why it matters / behaviour: Traditional Power Pages sites often hold years of configuration. | Found: Searched: "traditional" "Power Pages" "years" configuration. Opened plugin guidance, Power Platform CLI support and create-code-sites; none substantiates how often traditional sites contain years of configuration. | Fix: Replace 'Traditional sites often hold years of configuration, including table permissions and web roles that protect Dataverse data.' with 'Table permissions assigned to web roles control access to Dataverse data.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls / applicability: The developer's environment security roles govern access to the Dataverse configuration modified through the CLI. | Found: Your code will only be able to perform operations based on the privileges assigned to the user account through security roles or team membership. | Fix: Cite https://learn.microsoft.com/power-apps/developer/data-platform/security-model for the statement that environment roles govern the developer's Dataverse operations. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/security-model
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist's table-permission audit control is represented in the controls table. | Found: Checklist: 'Run table permission audits after agent changes.' Table rows: 'Downloading and uploading site content and code' and 'Admin switch for the coding-agent plugin'. | Fix: The checklist step 'Run table permission audits after agent changes' has no corresponding controls-table row; do not imply that the current table locates this audit control.
-->
