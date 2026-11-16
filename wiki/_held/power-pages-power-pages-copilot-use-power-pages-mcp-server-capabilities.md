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
  - title: "MCP server on or off for a site (Power Pages Management app)"
    url: "https://learn.microsoft.com/power-pages/configure/mcp-configure-site-settings#create-site-settings"
    kind: "learn"
  - title: "MCP server on or off for a site (Power Platform CLI)"
    url: "https://learn.microsoft.com/power-pages/configure/power-platform-cli-tutorial"
    kind: "learn"
  - title: "App registration that MCP clients authenticate with (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/power-pages/configure/mcp-configure-entra"
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
      path: "Website > Site settings > MCP/Enabled"
      docs: "https://learn.microsoft.com/power-pages/configure/mcp-configure-site-settings#create-site-settings"
    api:
      kind: "pac-cli"
      call: "pac pages upload --path <site-folder> --modelVersion <1-or-2>"
      docs: "https://learn.microsoft.com/power-pages/configure/power-platform-cli-tutorial"
    note: "Companion site settings cover bearer authentication. The CLI deploys site configuration (adx_sitesetting is a supported table), not a dedicated MCP toggle; download with pac pages download first."
  - governs: "App registration that MCP clients authenticate with"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > App registrations"
      docs: "https://learn.microsoft.com/power-pages/configure/mcp-configure-entra"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/applications with displayName in the request body"
      docs: "https://learn.microsoft.com/graph/api/application-post-applications?view=graph-rest-1.0"
    note: "The call creates the application object only; MCP scope, delegated permissions, consent and redirect URIs are configured separately."
  - governs: "Public visibility of the site"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Power Pages > Settings > Set site visibility to public access for non-production sites"
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
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 41
  unconfirmed: 2
  contradicted: 5
  attempts: 2
  hash: "278205bdf3e68542bc50f54fb881646d"
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
- Audit table permissions and web roles for every table the Web API exposes.
- Choose Entra ID or External ID and plan app registrations.

### At rollout
- Enable MCP only on a test site first.
- Grant admin consent only for the required MCP, openid and profile scopes.

### After rollout
- Review who connects and what operations they run.
- Re-test permissions whenever tables or roles change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>MCP server on or off for a site</strong><br><small>Site</small><br><small class="controls__note">Companion site settings cover bearer authentication. The CLI deploys site configuration (adx_sitesetting is a supported table), not a dedicated MCP toggle; download with pac pages download first.</small></td><td data-label="Admin UI"><strong>Power Pages Management app</strong><br>Website › Site settings › MCP/Enabled <a href="https://learn.microsoft.com/power-pages/configure/mcp-configure-site-settings#create-site-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac pages upload --path &lt;site-folder&gt; --modelVersion &lt;1-or-2&gt;</code> <a href="https://learn.microsoft.com/power-pages/configure/power-platform-cli-tutorial" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>App registration that MCP clients authenticate with</strong><br><small>Tenant</small><br><small class="controls__note">The call creates the application object only; MCP scope, delegated permissions, consent and redirect URIs are configured separately.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations <a href="https://learn.microsoft.com/power-pages/configure/mcp-configure-entra" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/applications with displayName in the request body</code> <a href="https://learn.microsoft.com/graph/api/application-post-applications?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Public visibility of the site</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Power Pages › Settings › Set site visibility to public access for non-production sites <a href="https://learn.microsoft.com/power-pages/admin/site-visibility-governance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the Power Pages MCP server</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The server is off until a site setting turns it on, and each site is governed separately. As of November 2026, Microsoft documents no admin-center inventory field identifying MCP-enabled sites. Data access through the server follows the site's table permissions and web roles, as the [MCP overview](https://learn.microsoft.com/power-pages/configure/mcp-overview) explains, so those remain the real boundary. Site settings can also be changed through the [Portal Management app](https://learn.microsoft.com/power-pages/configure/configure-site-settings#manage-site-settings).

The site-visibility row covers only the policy for non-production sites; Microsoft Learn documents no API for that policy at the time of writing (November 2026). A separate tenant-level setting, `enableSystemAdminsToChangeSiteVisibility`, decides whether members of the System administrator security role can change site visibility. When it is set to `false`, those administrators must be members of an exclusive security group in Microsoft Entra that has the permissions to manage site visibility, as [Learn](https://learn.microsoft.com/power-pages/security/site-visibility#permissions-required-to-change-site-visibility) describes.

## Open questions

- Will administrators get a tenant-level control over MCP on sites?
- What logging shows agent calls to the endpoint?
- What will be generally available at January CY2027?

<!-- rationale
risk: High. It opens site data and write operations to AI agents, so a weak table permission or web role could expose or alter Dataverse records.
cost: Medium. Learn lists a Microsoft 365 Copilot licence as a prerequisite for end users of the Copilot agent example, so a subset of users needs it; no charge for the server itself is published.
impact: Medium. It affects site makers and the users or agents that connect to site data.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The linked MCP configuration page documents Power Pages Management app > Website > Site settings > MCP/Enabled. | Found: Select Site Settings from the Portal Management menu. ... For each setting, select New to create a new site setting record. | Fix: Replace controls[0].ui.path and the rendered path with 'Site Settings > New'. Retain the docs URL and add to the existing note: 'Create a site setting named MCP/Enabled with value true to enable the server.' The cited page does not give a Website step or an existing MCP/Enabled navigation item. | Source: https://learn.microsoft.com/power-pages/configure/mcp-configure-site-settings#create-site-settings
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The linked MCP identity-provider article documents Entra ID > App registrations in Microsoft Entra admin center. | Found: In the Microsoft Entra admin center, select App registrations from the navigation pane. | Fix: Keep 'Entra ID > App registrations', but replace controls[1].ui.docs and the rendered link with https://learn.microsoft.com/entra/identity-platform/quickstart-register-app#register-an-application, which explicitly says 'Browse to Entra ID > App registrations'. Add that URL to sources. | Source: https://learn.microsoft.com/power-pages/configure/mcp-configure-entra
- [contradicted, blocker] controls[2].ui; Governance controls table / admin-path: The public-access policy path is Manage > Power Pages > Settings > Set site visibility to public access for non-production sites. | Found: In the left navigation pane, select Manage. ... Under Products, select Power Pages. ... Select the Settings tab. | Fix: Replace controls[2].ui.path and the rendered path with 'Manage > Products > Power Pages > Settings > Set site visibility to public access for non-production sites'. Retain the existing docs URL. | Source: https://learn.microsoft.com/power-pages/admin/site-visibility-governance
- [contradicted, blocker] Risk assessment: Data exposure / applicability: Agents can query anything the signed-in user's web role and table permissions allow. | Found: To enable the portals Web API for your site, configure the site settings for each table that you want to expose. ... You can configure column permissions to further define privileges to individual columns within a table while using the portal Web API. | Fix: Replace the bullet with 'Agent access through the site's Web API respects web roles and table permissions, and is also limited by the tables and columns exposed through the Web API and any column permissions.' Cite https://learn.microsoft.com/power-pages/configure/web-api-overview. | Source: https://learn.microsoft.com/power-pages/configure/web-api-overview
- [unsupported, major] Why it matters / behaviour: An agent can issue arbitrary queries against the site. | Found: Searched: Power Pages MCP arbitrary queries; Power Pages MCP Web API table permissions queries authentication misconfigured. Opened mcp-overview and web-api-overview. They document conversational CRUD through a constrained Web API, not arbitrary query execution. | Fix: Replace 'Table permissions that were adequate for a form-based site can behave differently when an agent issues arbitrary queries.' with 'Review existing table permissions before exposing site data through natural-language queries.'
- [unsupported, major] Risk assessment: Change & support / behaviour: Misconfigured site settings can leave the MCP endpoint exposed. | Found: Searched: Power Pages MCP misconfigured authentication endpoint exposed. Opened mcp-configure-site-settings and mcp-overview; read security-agent search excerpts. No passage states that an MCP site-setting error bypasses authentication or exposes the endpoint. | Fix: Remove 'or leave the endpoint exposed'. Alternatively replace the entire bullet with 'Incorrect site-setting names or values prevent the MCP server from functioning properly', as stated at https://learn.microsoft.com/power-pages/configure/mcp-configure-site-settings#verify-configuration.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; front matter: targetDate; Open questions / record: The roadmap lists general availability in January CY2027. | Found: "targetDate": "January CY2027", "status": "In development" | Fix: Replace 'general availability in January CY2027' with 'a general availability target of January CY2027'; replace 'What will be generally available at January CY2027?' with 'What will the January CY2027 general availability target cover?'
- [supported, minor] Risk assessment: Change & support / behaviour: Misconfigured authentication site settings can break sign-in. | Found: Configure authentication providers, validate authentication settings, and diagnose common sign-in problems. ... Users click Sign in but return to the sign-in page. Help me identify the problem. | Fix: Cite https://learn.microsoft.com/power-pages/security/security-agent#security-scenarios for the sign-in troubleshooting statement, or narrow it to the MCP configuration article's statement that incorrect site-setting names or values prevent the MCP server from functioning properly. | Source: https://learn.microsoft.com/power-pages/security/security-agent#security-scenarios
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The checklist tells administrators to audit and re-test table permissions and web roles, but neither control has a table row. | Found: Audit table permissions and web roles for every table the Web API exposes. ... Re-test permissions whenever tables or roles change. ... Table rows cover MCP, app registration, public visibility and a tenant switch. | Fix: The table has no row for the checklist's table-permission and web-role audit and re-test steps. Remove those checklist bullets to resolve the mismatch without adding unverified control rows.
-->
