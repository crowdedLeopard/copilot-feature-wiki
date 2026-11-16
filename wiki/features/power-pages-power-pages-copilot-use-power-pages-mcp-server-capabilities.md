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
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 33
  unconfirmed: 0
  contradicted: 6
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: licensing.notes / licensing: Power Pages has its own licensing, separate from the Copilot agent's end-user prerequisite. | Found: As you work on projects and need to establish permanent sites that don't expire, you can apply Power Pages subscriptions and convert websites from trial to production. | Fix: Add https://learn.microsoft.com/power-pages/go-live/assign-licensing to sources for the statement about separate Power Pages licensing. | Source: https://learn.microsoft.com/power-pages/go-live/assign-licensing
- [supported, minor] front matter: licensing.model / licensing: The solution's licensing model is mixed, reflecting client licensing and potential consumption rather than a published standalone MCP server SKU. | Found: Copilot Credits are the common currency across Copilot Studio capabilities. You can get them through pay-as-you-go meters, prepurchase plans, and Copilot Credit prepaid pack subscriptions. | Fix: Retain mixed, but explain that it describes the Power Pages and chosen AI client's licensing layers, not a separately published Power Pages MCP tariff. Add https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing to sources. | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing
- [supported, minor] Cost and licensing / cost: Copilot Studio usage can consume Copilot Credits depending on the agent design. | Found: The number of Copilot Credits an agent consumes depends on the design of the agent, how often customers interact with it, and the features they use. | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management and add that eligible employee-facing agent usage under the authenticated Microsoft 365 Copilot licence holder's identity is included, subject to the documented conditions; other designs can consume credits. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management
- [contradicted, blocker] controls[0].api; Governance controls table / absence: Automation for changing the site's MCP enablement setting is not yet documented. | Found: Supported tables
adx_sitesetting
In this file, you can have the table (entity) name with table ID, list of attributes, and the values that you want to override while uploading the portal configuration using the `deploymentProfile` parameter. | Fix: Replace the absence with documented site-setting deployment automation: download the site, change the MCP/Enabled site-setting record, then use pac pages upload --path <site-folder> --modelVersion <1-or-2>. Cite https://learn.microsoft.com/power-pages/configure/power-platform-cli and https://learn.microsoft.com/power-pages/configure/power-platform-cli-tutorial. Explain that this is configuration deployment, not a dedicated MCP toggle command; the CLI supported-tables list includes adx_sitesetting. | Source: https://learn.microsoft.com/power-pages/configure/power-platform-cli
- [supported, minor] controls[1].ui; Governance controls table / admin-path: App registrations are reached through Microsoft Entra admin center > Entra ID > App registrations. | Found: Browse to Entra ID > App registrations and select New registration. | Fix: Add https://learn.microsoft.com/entra/identity-platform/quickstart-register-app#register-an-application as the exact navigation reference; retain the MCP identity-provider page for the feature-specific scope and delegated-permission setup. | Source: https://learn.microsoft.com/entra/identity-platform/quickstart-register-app#register-an-application
- [contradicted, blocker] controls[1].api; Governance controls table / absence: Automation for the app registration used by MCP clients is not yet documented. | Found: Create a new application object.
POST https://graph.microsoft.com/v1.0/applications | Fix: Replace the absence with Microsoft Graph POST /v1.0/applications, supplying the required displayName in the request body, and cite https://learn.microsoft.com/graph/api/application-post-applications?view=graph-rest-1.0. Note that creating the registration alone does not complete the MCP scope, delegated permissions, consent or redirect-URI configuration. | Source: https://learn.microsoft.com/graph/api/application-post-applications?view=graph-rest-1.0
- [contradicted, blocker] controls[2].api; Governance controls table / command: Setting enableSystemAdminsToChangeSiteVisibility to false is the automation equivalent of the non-production public-access policy shown in this row. | Found: When you don't want all system administrators to be able to change site visibility, set `enableSystemAdminsToChangeSiteVisibility` to `false`. Then delegate site visibility management to a select set of users. | Fix: Do not present this command as the equivalent of the non-production visibility policy. Move it to a separate control describing delegation of site-visibility changes by system administrators, and explain that false requires the documented delegated security-group membership. Keep the non-production policy and this role-delegation setting distinct. | Source: https://learn.microsoft.com/power-pages/security/site-visibility#permissions-required-to-change-site-visibility
- [supported, minor] Governance controls / absence: No admin-center inventory specifically identifying MCP-enabled Power Pages sites is documented. | Found: Searched: "Power Pages" "MCP" "tenant" "inventory". Opened https://learn.microsoft.com/power-pages/admin/power-pages-inventory and MCP overview; the inventory's documented site fields do not include MCP enablement. | Fix: Replace 'there is no inventory of MCP-enabled sites in the admin center' with 'As of November 2026, Microsoft documents no admin-center inventory field identifying MCP-enabled sites.' Do not imply that the documented general Power Pages site inventory does not exist.
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The low cost rating correctly represents indirect costs only. | Found: cost: "low"
Learn lists a Microsoft 365 Copilot licence for end users of the Copilot agent example, and Copilot Studio use may consume credits. | Fix: Change cost to medium for the documented licensed-user example and explain the subset-user licence requirement in the rationale. If retaining metered Copilot Studio deployments as part of the assessed scenario, use variable and name Copilot Credits. Do not justify low solely by the absence of a separate server price.
- [contradicted, minor] front matter: action / consistency: Prepare is the appropriate action rating for this optional, explicitly enabled capability. | Found: action: "prepare"
The server is off until a site setting turns it on, and each site is governed separately | Fix: Change action to review: this optional capability changes nothing until it is configured. The standard's prepare exception for a new control closing an existing high exposure does not describe this new data-access capability.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The controls table includes the data-boundary controls that the checklist asks administrators to audit. | Found: Audit table permissions and web roles for every table the Web API exposes.
MCP server on or off for a site
App registration that MCP clients authenticate with
Public visibility of the site
Tenant-wide switch for the Power Pages MCP server | Fix: Add a governance-control row for the site's table permissions and associated web roles, with a Microsoft-documented management path and a separately researched automation side.
-->
