---
title: "Power Pages: MCP server exposes site data to AI clients"
slug: "power-pages-power-pages-copilot-use-power-pages-mcp-server-capabilities"
roadmapId: 577813
topic: "power-platform"
products: ["Microsoft Copilot (Microsoft 365)","Power Pages"]
summary: "Makers can provision an MCP server endpoint for a Power Pages site so AI clients can run create, read, update and delete operations over its Web API."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "January CY2026"
risk: "high"
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn requires a Microsoft 365 Copilot licence for end users of the Copilot agent example. Power Pages licensing is separate. Mixed describes the Power Pages and AI-client licensing layers, not a separately published Power Pages MCP tariff."
audiences: ["power-platform-admin","security","maker","service-owner"]
tags: ["power-pages","mcp","web-api","dataverse","table-permissions","m365-copilot"]
sources:
  - title: "Microsoft 365 Roadmap item 577813"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577813"
    kind: "roadmap"
  - title: "Model Context Protocol (MCP) Server for Power Pages overview"
    url: "https://learn.microsoft.com/power-pages/configure/mcp-overview"
    kind: "learn"
  - title: "Configure site settings for MCP server"
    url: "https://learn.microsoft.com/power-pages/configure/mcp-configure-site-settings"
    kind: "learn"
  - title: "Connect to MCP server via Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/power-pages/configure/mcp-connect-clients"
    kind: "learn"
  - title: "Microsoft Power Platform CLI support for Power Pages"
    url: "https://learn.microsoft.com/power-pages/configure/power-platform-cli"
    kind: "learn"
  - title: "Power Pages licensing"
    url: "https://learn.microsoft.com/power-pages/go-live/assign-licensing"
    kind: "learn"
  - title: "Copilot Studio licensing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
  - title: "Configure the identity provider for MCP server"
    url: "https://learn.microsoft.com/power-pages/configure/mcp-configure-entra"
    kind: "learn"
  - title: "Register an application in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity-platform/quickstart-register-app#register-an-application"
    kind: "learn"
  - title: "Portals Web API overview"
    url: "https://learn.microsoft.com/power-pages/configure/web-api-overview"
    kind: "learn"
  - title: "MCP server on or off for a site (Power Pages Management app)"
    url: "https://learn.microsoft.com/power-pages/configure/mcp-configure-site-settings#create-site-settings"
    kind: "learn"
  - title: "MCP server on or off for a site (Power Platform CLI)"
    url: "https://learn.microsoft.com/power-pages/configure/power-platform-cli-tutorial"
    kind: "learn"
  - title: "App registration that MCP clients authenticate with (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/application-post-applications?view=graph-rest-1.0"
    kind: "learn"
  - title: "Public visibility of the site (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-pages/admin/site-visibility-governance"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "MCP server on or off for a site"
    scope: "site"
    ui:
      surface: "Power Pages Management app"
      path: "Site Settings > New"
      docs: "https://learn.microsoft.com/power-pages/configure/mcp-configure-site-settings#create-site-settings"
    api:
      kind: "pac-cli"
      call: "pac pages upload --path <site-folder> --modelVersion <1-or-2>"
      docs: "https://learn.microsoft.com/power-pages/configure/power-platform-cli-tutorial"
    note: "Create a site setting named MCP/Enabled with value true to enable the server. The CLI deploys site configuration (adx_sitesetting is a supported table), not a dedicated MCP toggle; download with pac pages download first."
  - governs: "App registration that MCP clients authenticate with"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > App registrations"
      docs: "https://learn.microsoft.com/entra/identity-platform/quickstart-register-app#register-an-application"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/applications with displayName in the request body"
      docs: "https://learn.microsoft.com/graph/api/application-post-applications?view=graph-rest-1.0"
    note: "The call creates the application object only; MCP scope, delegated permissions, consent and redirect URIs are configured separately."
  - governs: "Public visibility of the site"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Products > Power Pages > Settings > Set site visibility to public access for non-production sites"
      docs: "https://learn.microsoft.com/power-pages/admin/site-visibility-governance"
    api: null
  - governs: "Tenant-wide switch for the Power Pages MCP server"
    scope: "tenant"
    ui: null
    api: null
confidence: "high"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-22T23:45:38"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577813 with Learn MCP setup guidance."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Correction: added pac pages and Microsoft Graph automation, separated the site-visibility delegation setting, raised cost to medium and changed action to review."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 48 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-16"
    note: "Correction: fixed the site-settings, Entra and Power Platform admin center paths, narrowed the Web API data-exposure and setup-error statements, and removed two checklist items with no table row."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 50 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-16"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 50
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c378ae9883b777eab14589b1b9bcbe77"
---

## What's changing

The MCP server for Power Pages exposes site data and operations through a standard interface for AI clients. In public preview, makers enable create, read, update and delete operations over the site's Web API without custom code, and provision the endpoint through site settings.

Learn describes it as respecting web roles, table permissions and authentication boundaries. Setup involves a Microsoft Entra or Entra External ID app registration with an exposed MCP scope, site settings including MCP/Enabled, and a client such as an agent in Copilot Studio published to Microsoft 365 Copilot.

The roadmap lists a preview date of January CY2026 and a general availability target of January CY2027, Worldwide only.

## Why it matters

Natural-language access to site data changes how records are read and altered. Review existing table permissions before exposing site data through natural-language queries.

It also lets internal teams work with portal data from Copilot, which is useful but adds a new path to the data.

## Risk assessment

**Data exposure**
- Agent access through the site's Web API respects web roles and table permissions, and is also limited by the tables and columns exposed through the Web API and any column permissions.

**Security & identity**
- OAuth with Entra scopes and bearer authentication settings protect the endpoint. Client secrets and redirect URIs need careful handling.

**Autonomy & actions**
- CRUD operations include deletes and updates. Consider read-only permissions for pilots.

**Change & support**
- Incorrect site-setting names or values prevent the MCP server from functioning properly.

## Cost and licensing

No charge for the MCP server is published. Learn lists a Microsoft 365 Copilot licence for end users of the Copilot agent example, and Copilot Studio use may consume credits. Confirm against your agent design.

## Scope

Makers and admins of Power Pages sites, and users of MCP-compatible clients such as VS Code, Copilot Studio and Microsoft 365 Copilot. Roadmap cloud: Worldwide only.

## Governance guidance

### Before rollout
- Choose Entra ID or External ID and plan app registrations.

### At rollout
- Enable MCP only on a test site first.
- Grant admin consent only for the required MCP, openid and profile scopes.

### After rollout
- Review who connects and what operations they run.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>MCP server on or off for a site</strong><br><small>Site</small><br><small class="controls__note">Create a site setting named MCP/Enabled with value true to enable the server. The CLI deploys site configuration (adx_sitesetting is a supported table), not a dedicated MCP toggle; download with pac pages download first.</small></td><td data-label="Admin UI"><strong>Power Pages Management app</strong><br>Site Settings › New <a href="https://learn.microsoft.com/power-pages/configure/mcp-configure-site-settings#create-site-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac pages upload --path &lt;site-folder&gt; --modelVersion &lt;1-or-2&gt;</code> <a href="https://learn.microsoft.com/power-pages/configure/power-platform-cli-tutorial" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>App registration that MCP clients authenticate with</strong><br><small>Tenant</small><br><small class="controls__note">The call creates the application object only; MCP scope, delegated permissions, consent and redirect URIs are configured separately.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations <a href="https://learn.microsoft.com/entra/identity-platform/quickstart-register-app#register-an-application" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/applications with displayName in the request body</code> <a href="https://learn.microsoft.com/graph/api/application-post-applications?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Public visibility of the site</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Products › Power Pages › Settings › Set site visibility to public access for non-production sites <a href="https://learn.microsoft.com/power-pages/admin/site-visibility-governance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the Power Pages MCP server</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The server is off until a site setting turns it on, and each site is governed separately. As of November 2026, Microsoft documents no admin-center inventory field identifying MCP-enabled sites. Data access through the server follows the site's table permissions and web roles, as the [MCP overview](https://learn.microsoft.com/power-pages/configure/mcp-overview) explains, so those remain the real boundary. Site settings can also be changed through the [Portal Management app](https://learn.microsoft.com/power-pages/configure/configure-site-settings#manage-site-settings).

The site-visibility row covers only the policy for non-production sites; Microsoft Learn documents no API for that policy at the time of writing (November 2026). A separate tenant-level setting, `enableSystemAdminsToChangeSiteVisibility`, decides whether members of the System administrator security role can change site visibility. When it is set to `false`, those administrators must be members of an exclusive security group in Microsoft Entra that has the permissions to manage site visibility, as [Learn](https://learn.microsoft.com/power-pages/security/site-visibility#permissions-required-to-change-site-visibility) describes.

## Open questions

- Will administrators get a tenant-level control over MCP on sites?
- What logging shows agent calls to the endpoint?
- What will the January CY2027 general availability target cover?

<!-- rationale
risk: High. It opens site data and write operations to AI agents, so a weak table permission or web role could expose or alter Dataverse records.
cost: Medium. Learn lists a Microsoft 365 Copilot licence as a prerequisite for end users of the Copilot agent example, so a subset of users needs it; no charge for the server itself is published.
impact: Medium. It affects site makers and the users or agents that connect to site data.
-->
