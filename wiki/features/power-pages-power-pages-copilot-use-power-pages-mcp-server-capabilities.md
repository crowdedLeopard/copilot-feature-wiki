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
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Learn requires a Microsoft 365 Copilot licence for end users of the Copilot agent example. Power Pages licensing is separate."
audiences: ["power-platform-admin","security","maker","service-owner"]
tags: ["power-pages","mcp","model-context-protocol","web-api","dataverse","table-permissions","microsoft-365-copilot"]
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
  - title: "MCP server on or off for a site (Power Pages Management app)"
    url: "https://learn.microsoft.com/power-pages/configure/mcp-configure-site-settings#create-site-settings"
    kind: "learn"
  - title: "App registration that MCP clients authenticate with (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/power-pages/configure/mcp-configure-entra"
    kind: "learn"
  - title: "Public visibility of the site (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-pages/admin/site-visibility-governance"
    kind: "learn"
  - title: "Public visibility of the site (PowerShell)"
    url: "https://learn.microsoft.com/power-pages/security/site-visibility#permissions-required-to-change-site-visibility"
    kind: "learn"
videos: []
related: ["copilot-studio-mcp-tools-in-agents","work-iq-business-skills-to-manage-your-business-processes-in-work-iq-mcp","agent-identity"]
controls:
  - governs: "MCP server on or off for a site"
    scope: "site"
    ui:
      surface: "Power Pages Management app"
      path: "Website > Site settings > MCP/Enabled"
      docs: "https://learn.microsoft.com/power-pages/configure/mcp-configure-site-settings#create-site-settings"
    api: null
    note: "Companion site settings cover bearer authentication for MCP clients."
  - governs: "App registration that MCP clients authenticate with"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > App registrations"
      docs: "https://learn.microsoft.com/power-pages/configure/mcp-configure-entra"
    api: null
  - governs: "Public visibility of the site"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Power Pages > Settings > Set site visibility to public access for non-production sites"
      docs: "https://learn.microsoft.com/power-pages/admin/site-visibility-governance"
    api:
      kind: "powershell"
      call: "Set-TenantSettings -RequestBody @{ powerPlatform = @{ powerPages = @{ enableSystemAdminsToChangeSiteVisibility = $false } } }"
      docs: "https://learn.microsoft.com/power-pages/security/site-visibility#permissions-required-to-change-site-visibility"
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
version: 2
---

## What's changing

The MCP server for Power Pages exposes site data and operations through a standard interface for AI clients. In public preview, makers enable create, read, update and delete operations over the site's Web API without custom code, and provision the endpoint through site settings.

Learn describes it as respecting web roles, table permissions and authentication boundaries. Setup involves a Microsoft Entra or Entra External ID app registration with an exposed MCP scope, site settings including MCP/Enabled, and a client such as an agent in Copilot Studio published to Microsoft 365 Copilot.

The roadmap lists a preview date of January CY2026 and general availability in January CY2027, Worldwide only.

## Why it matters

Natural-language access to site data changes how records are read and altered. Table permissions that were adequate for a form-based site can behave differently when an agent issues arbitrary queries.

It also lets internal teams work with portal data from Copilot, which is useful but adds a new path to the data.

## Risk assessment

**Data exposure**
- Agents can query anything the signed-in user's web role and table permissions allow.

**Security & identity**
- OAuth with Entra scopes and bearer authentication settings protect the endpoint. Client secrets and redirect URIs need careful handling.

**Autonomy & actions**
- CRUD operations include deletes and updates. Consider read-only permissions for pilots.

**Change & support**
- Misconfigured site settings can break sign-in or leave the endpoint exposed.

## Cost and licensing

No charge for the MCP server is published. Learn lists a Microsoft 365 Copilot licence for end users of the Copilot agent example, and Copilot Studio use may consume credits. Confirm against your agent design.

## Scope

Makers and admins of Power Pages sites, and users of MCP-compatible clients such as VS Code, Copilot Studio and Microsoft 365 Copilot. Roadmap cloud: Worldwide only.

## Governance guidance

### Before rollout
- [ ] Audit table permissions and web roles for every table the Web API exposes.
- [ ] Choose Entra ID or External ID and plan app registrations.

### At rollout
- [ ] Enable MCP only on a test site first.
- [ ] Grant admin consent only for the required MCP, openid and profile scopes.

### After rollout
- [ ] Review who connects and what operations they run.
- [ ] Re-test permissions whenever tables or roles change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>MCP server on or off for a site</strong><br><small>Site</small><br><small class="controls__note">Companion site settings cover bearer authentication for MCP clients.</small></td><td data-label="Admin UI"><strong>Power Pages Management app</strong><br>Website › Site settings › MCP/Enabled <a href="https://learn.microsoft.com/power-pages/configure/mcp-configure-site-settings#create-site-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>App registration that MCP clients authenticate with</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations <a href="https://learn.microsoft.com/power-pages/configure/mcp-configure-entra" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Public visibility of the site</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Power Pages › Settings › Set site visibility to public access for non-production sites <a href="https://learn.microsoft.com/power-pages/admin/site-visibility-governance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-TenantSettings -RequestBody @{ powerPlatform = @{ powerPages = @{ enableSystemAdminsToChangeSiteVisibility = $false } } }</code> <a href="https://learn.microsoft.com/power-pages/security/site-visibility#permissions-required-to-change-site-visibility" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the Power Pages MCP server</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The server is off until a site setting turns it on, and each site is governed separately; there is no inventory of MCP-enabled sites in the admin center. Data access through the server follows the site's table permissions and web roles, as the [MCP overview](https://learn.microsoft.com/power-pages/configure/mcp-overview) explains, so those remain the real boundary. Site settings can also be changed through the [Portal Management app](https://learn.microsoft.com/power-pages/configure/configure-site-settings#manage-site-settings).

## Open questions

- Will administrators get a tenant-level control over MCP on sites?
- What logging shows agent calls to the endpoint?
- What will be generally available at January CY2027?

<!-- rationale
risk: High. It opens site data and write operations to AI agents, so a weak table permission or web role could expose or alter Dataverse records.
cost: Low. No charge is published for the server; Learn notes users of Microsoft 365 Copilot agents need a licence.
impact: Medium. It affects site makers and the users or agents that connect to site data.
-->
