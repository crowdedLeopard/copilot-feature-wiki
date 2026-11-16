---
title: "Power Pages: client APIs for scripting forms, lists, users and data"
slug: "power-pages-professional-developer-experiences-control-power-pages-components-using-client"
roadmapId: 577821
topic: "power-platform"
products: ["Power Pages"]
summary: "Power Pages sites get a supported JavaScript client API ($pages) for forms, lists, sign-in and Dataverse calls. Nothing changes until a developer writes script; table permissions stay the data control. No admin action is required."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "November CY2025"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "unknown"
  notes: "The client API pages state no licence, price or meter. Power Pages is licensed by capacity (authenticated and anonymous users per website per month); whether client API calls count differently is not stated."
audiences: ["power-platform-admin","maker","security","service-owner"]
tags: ["power-pages","client-api","web-api","table-permissions","web-roles","extensibility","end-user-authentication","copilot-studio","server-logic","power-platform-cli"]
sources:
  - title: "Microsoft 365 Roadmap 577821"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577821"
    kind: "roadmap"
  - title: "Power Pages client APIs"
    url: "https://learn.microsoft.com/power-pages/configure/client-api"
    kind: "learn"
  - title: "Client API initialization"
    url: "https://learn.microsoft.com/power-pages/configure/client-api/initialization"
    kind: "learn"
  - title: "Client API Dataverse records, files, and images"
    url: "https://learn.microsoft.com/power-pages/configure/client-api/dataverse"
    kind: "learn"
  - title: "Client API user authentication"
    url: "https://learn.microsoft.com/power-pages/configure/client-api/user-authentication"
    kind: "learn"
  - title: "Client API server endpoints and cloud flows"
    url: "https://learn.microsoft.com/power-pages/configure/client-api/ajax"
    kind: "learn"
  - title: "Use the Client API with Copilot Studio agents"
    url: "https://learn.microsoft.com/power-pages/configure/client-api/agents"
    kind: "learn"
  - title: "Power Pages client API examples"
    url: "https://learn.microsoft.com/power-pages/configure/client-api/examples"
    kind: "learn"
  - title: "Portals Web API overview"
    url: "https://learn.microsoft.com/power-pages/configure/web-api-overview"
    kind: "learn"
  - title: "Assign table permissions"
    url: "https://learn.microsoft.com/power-pages/security/assign-table-permissions"
    kind: "learn"
  - title: "Configure Power Automate cloud flows in Power Pages"
    url: "https://learn.microsoft.com/power-pages/configure/cloud-flow-integration"
    kind: "learn"
  - title: "Microsoft Power Platform CLI support for Power Pages"
    url: "https://learn.microsoft.com/power-pages/configure/power-platform-cli"
    kind: "learn"
  - title: "Configure site settings for websites"
    url: "https://learn.microsoft.com/power-pages/configure/configure-site-settings"
    kind: "learn"
  - title: "Portal Management app overview"
    url: "https://learn.microsoft.com/power-pages/configure/portal-management-app"
    kind: "learn"
  - title: "Power Platform licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq"
    kind: "learn"
videos: []
related: ["power-pages-first-class-support-for-connector-apis-in-power-pages","power-pages-design-studio-unify-power-pages-authorization-by-merging-web-role-with-dataver","power-pages-power-pages-copilot-use-power-pages-mcp-server-capabilities","power-pages-plugin-support-for-github-copilot-cli-and-claude-code-to-create-and-edit-tradi"]
controls:
  - governs: "Which Dataverse records and operations site script can reach through the client API"
    scope: "site"
    ui:
      surface: "Power Pages design studio"
      path: "Security > Table permissions"
      docs: "https://learn.microsoft.com/power-pages/security/assign-table-permissions"
    api:
      kind: "pac-cli"
      call: "pac pages upload --path <site-folder> --modelVersion <1|2>"
      docs: "https://learn.microsoft.com/power-pages/configure/power-platform-cli"
    note: "Site owner task. Learn says the client API cannot override table permissions. The PAC CLI deploys site configuration (adx_entitypermission is a supported table); it is not a dedicated permission cmdlet."
  - governs: "Whether the portals Web API is enabled for a table, and which columns it exposes"
    scope: "site"
    ui:
      surface: "Portal Management app (opened from Power Pages design studio)"
      path: "Website > Site settings"
      docs: "https://learn.microsoft.com/power-pages/configure/configure-site-settings"
    api:
      kind: "pac-cli"
      call: "pac pages upload --path <site-folder> --deploymentProfile <profile> --modelVersion <1|2>"
      docs: "https://learn.microsoft.com/power-pages/configure/power-platform-cli"
    note: "Needs the system administrator role in the site's environment. Documented for the portals Web API; Learn's client API pages do not say these settings gate $pages.webAPI."
  - governs: "Tenant or site switch to turn the client API off"
    scope: "site"
    ui: null
    api: null
    note: "A search of Microsoft Learn found no such control at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-22T23:45:46"
changes:
  - date: "2026-11-16"
    note: "First briefing: documents the Power Pages client API, its table-permission boundary and the absence of a documented switch to turn it off."
  - date: "2026-11-16"
    note: "Corrected after verification: replaced the 'no approval step' and 'nothing breaks' claims, fixed the $count guidance, and added the PAC CLI deployment route, the Anonymous users warning and cloud flow licensing."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 74
  unconfirmed: 0
  contradicted: 3
  attempts: 1
---

## What's changing

Power Pages has a documented JavaScript client API for developers who customise site pages. Once a page has loaded, script receives a `$pages` object (through `Microsoft.PowerPages.onPagesClientApiReady`) that can read and change forms and their controls, style rows and cells in modern lists, sign users in and out, work with Dataverse records and files, and call server logic or cloud flows.

The Learn overview lists these areas: forms and controls, lists, user authentication (`signIn` and `signOut`), Dataverse records, files and images through `$pages.webAPI`, languages, server endpoints and cloud flows through `$pages.ajax`, and Microsoft Copilot Studio agents through `$pages.agent`. The roadmap description presents the API as a supported alternative to custom script that depends on fragile Document Object Model (DOM, the page's underlying HTML structure) manipulation.

The Learn page says the client API "becomes available when your page loads". The older `Microsoft.Dynamic365.Portal.onPagesClientApiReady` alias is deprecated: Learn says it still works so that existing scripts keep running, writes a one-time console warning and is removed in a future release.

The roadmap record shows the item as Launched, with release phases General Availability and Preview, a preview date of November CY2025 and a target date of September CY2026, for Worldwide (Standard Multi-Tenant) on the web. The roadmap description labels the APIs Preview; the Learn pages read at the time of writing (November 2026) do not mark them as preview.

## Why it matters

This is a developer capability, not a tenant switch, so the effect for a service owner is on what site script can do. Script on a page has a supported route to create, update and delete Dataverse records, call server logic and trigger cloud flows, so the site's table permissions matter more than the script itself: Learn says Power Pages applies table permissions on the server and the client API cannot override them.

Using the new APIs requires developers to add calls to their site scripts. Learn also says the deprecated initialisation alias still works for existing scripts. The practical decisions are whether makers on your sites should use `$pages` for new work, and whether your review of site changes covers script that writes data.

## Risk assessment

**Data exposure**

- `$pages.webAPI` offers `createRecord`, `retrieveRecord`, `retrieveMultipleRecords`, `updateRecord`, `deleteRecord` and file upload and download. Learn states that Power Pages applies table permissions on the server and the client API cannot override them, so the web roles on each table permission set the ceiling.
- Granting the Anonymous users web role access to a table makes its data available to any visitor, and that includes script calling `$pages.webAPI`.
- `setVisible(false)` on a control, and `row.setVisible(false)` on a list row, change only what the browser shows. Learn says to protect data with table permissions and column security, not by hiding it.

**Security & identity**

- `$pages.user.signIn` redirects the user to the sign-in page and `signOut` signs the current user out. Learn gives no method that changes which identity providers the site accepts.
- `$pages.ajax.request` adds the cross-site request forgery (CSRF) token and the session cookie to every call, so scripted requests run in the visitor's own session.
- Learn does not say whether the Web API site settings (`Webapi/<table-name>/enabled` and `Webapi/<table-name>/fields`) gate `$pages.webAPI`; see Open questions.

**Autonomy & actions**

- Script can call `/_api/serverlogics/` endpoints and trigger cloud flows registered with the site. Developers choose when scripts invoke them; any approval or business checks depend on the called server logic or flow.
- `$pages.agent.SendActivity` sends a message or event to a Copilot Studio agent. Learn lists "user doesn't have access permissions to the agent" as a cause of the access-denied error, so agent access is checked for the current user.

**Change & support**

- Scripts that use the deprecated `Microsoft.Dynamic365.Portal.onPagesClientApiReady` alias will stop working when Microsoft removes it; ask developers to move to `Microsoft.PowerPages.onPagesClientApiReady`.
- `getRecordCount` returns at most 5,000. Learn points developers who want records together with their total to `retrieveMultipleRecords` with `$count=true`, which returns the total in `@odata.count`.

## Cost and licensing

The client API pages read (overview, initialisation, Dataverse, user authentication, server endpoints and cloud flows, Copilot Studio agents and examples) name no licence, price or meter. That is a statement about those pages at the time of writing (November 2026), not a statement that nothing is charged.

The Power Platform licensing FAQs say Power Pages licensing is capacity based, with authenticated users per website per month and anonymous users per website per month. The portals Web API overview adds that its operations "require a Power Pages license", that calls by anonymous users count towards anonymous user capacity, and that calls by authenticated users need the applicable authenticated user capacity licences. Learn does not say whether that applies unchanged to `$pages.webAPI`.

Cloud flows called from script carry their own requirement: the cloud flow integration page lists a Power Automate licence as a prerequisite and recommends a Power Automate Process licence in production. Licensing for Copilot Studio agents called through `$pages.agent` is not covered on the client API page. Indirect cost is developer time to learn and migrate to the API, and security review time for script that writes data.

## Scope

The roadmap lists Power Pages on the web, in Worldwide (Standard Multi-Tenant), and says it is enabled for end users automatically. In practice it affects sites where a developer adds script; visitors see the result, not the API.

The Learn client API pages list no prerequisite licence or admin role. Table permissions and web roles are set in the site's Security workspace. The Portal Management app, where the Web API site settings live, requires the system administrator role in the site's Dataverse environment; Learn adds that the system customizer role also has access, with limited privileges on some tables. Other clouds are not listed on the roadmap item; the roadmap does not say whether they are excluded.

## Governance guidance

### Before rollout

- Review table permissions (design studio > Security > Table permissions) for every table that site script could reach, and clear the Anonymous users web role from any table whose data should not be public.
- Record which web roles may create, update or delete each table's records, because `$pages.webAPI` writes run under those roles.
- Tell site developers to use `Microsoft.PowerPages.onPagesClientApiReady` rather than the deprecated `Microsoft.Dynamic365.Portal.onPagesClientApiReady` alias.

### At rollout

- Ask developers to treat `setVisible(false)` and `setDisabled` as presentation only, and to enforce rules through table permissions and column security, as Learn instructs.
- Check the `Webapi/<table-name>/enabled` and `Webapi/<table-name>/fields` site settings in the Portal Management app (Site settings) for tables a script calls, and confirm with a test user that calls succeed or fail as the web role intends.
- Confirm that any cloud flow a script triggers is registered with the site and secured with a web role, as the cloud flow integration page requires.

### After rollout

- Re-test affected pages as a user in each web role, including an anonymous visitor, to confirm script cannot read or change more than the table permissions allow.
- Search site script for the deprecated alias and replace it before Microsoft removes it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which Dataverse records and operations site script can reach through the client API</strong><br><small>Site</small><br><small class="controls__note">Site owner task. Learn says the client API cannot override table permissions. The PAC CLI deploys site configuration (adx_entitypermission is a supported table); it is not a dedicated permission cmdlet.</small></td><td data-label="Admin UI"><strong>Power Pages design studio</strong><br>Security › Table permissions <a href="https://learn.microsoft.com/power-pages/security/assign-table-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac pages upload --path &lt;site-folder&gt; --modelVersion &lt;1|2&gt;</code> <a href="https://learn.microsoft.com/power-pages/configure/power-platform-cli" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the portals Web API is enabled for a table, and which columns it exposes</strong><br><small>Site</small><br><small class="controls__note">Needs the system administrator role in the site's environment. Documented for the portals Web API; Learn's client API pages do not say these settings gate $pages.webAPI.</small></td><td data-label="Admin UI"><strong>Portal Management app (opened from Power Pages design studio)</strong><br>Website › Site settings <a href="https://learn.microsoft.com/power-pages/configure/configure-site-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac pages upload --path &lt;site-folder&gt; --deploymentProfile &lt;profile&gt; --modelVersion &lt;1|2&gt;</code> <a href="https://learn.microsoft.com/power-pages/configure/power-platform-cli" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant or site switch to turn the client API off</strong><br><small>Site</small><br><small class="controls__note">A search of Microsoft Learn found no such control at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Table permissions are the control that bounds what `$pages.webAPI` can reach, because Learn states that the client API cannot override them. The Learn page that documents PAC CLI configuration deployment lists `adx_entitypermission` and `adx_sitesetting` among its supported tables, so table permissions and site settings can be moved between environments as site configuration; it is not a dedicated permission-setting command, and the page lists standard data model (`adx_`) tables only.

The Web API site settings are documented for the portals Web API. The client API pages do not say they gate `$pages.webAPI`, so treat that row as a related control and verify it by test. On a site that uses the enhanced data model, the app is named Power Pages Management rather than Portal Management.

No administrator switch for the client API itself is documented at the time of writing (November 2026), so site-level governance rests on who may edit site script and on table permissions.

## Open questions

- Do the `Webapi/<table-name>/enabled` and `Webapi/<table-name>/fields` site settings, which govern the portals Web API, also gate `$pages.webAPI`? Watch the client API Dataverse page on Microsoft Learn.
- Is the feature preview or generally available? The roadmap record lists both release phases and the Launched status, and its description says Preview, while the Learn pages read do not state a phase.
- Do calls made through `$pages.webAPI` and `$pages.ajax` count towards Power Pages anonymous or authenticated user capacity any differently from other site traffic? Watch the Power Platform licensing FAQs.
- Will Microsoft add an administrator control, in the Power Platform admin center or through an API, to restrict or audit client API use per site?

<!-- rationale
risk: Medium. Site script can create, update and delete Dataverse records through $pages.webAPI, so exposure rests on table permissions and web roles; Microsoft Learn documents no switch that turns the client API off.
cost: Low. The client API pages name no licence or meter, so the known cost is developer and review time; the Power Pages capacity licensing position for client API calls is not stated.
impact: Low. Developers and makers who write site script notice it; site visitors see a change only when a developer ships script that uses the API.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] Risk assessment: Data exposure; Governance guidance: Before rollout / applicability: Granting the Anonymous users web role table access makes the table's data available to any visitor. | Found: When the Anonymous users web role is granted access to a table, any user who visits the site can access the data in the table. | Fix: Also cite https://learn.microsoft.com/power-pages/security/disable-anonymous-access and qualify the warning: the tenant's Anonymous access to Dataverse control can override maker table permissions and block anonymous reads, while anonymous writes can remain possible. | Source: https://learn.microsoft.com/power-pages/security/assign-table-permissions
- [contradicted, blocker] Risk assessment: Security & identity; controls[1].note; Governance controls; Open questions / absence: Microsoft Learn does not establish whether Web API table and column site settings apply to $pages.webAPI. | Found: Common call patterns include:

```javascript
$.ajax(...)
fetch(...)
webapi.safeAjax(...)
$pages.webAPI.retrieveRecord(...)
$pages.webAPI.retrieveMultipleRecords(...)
``` | Fix: Cite this troubleshooting page: it explicitly includes $pages.webAPI calls in Web API column-configuration migration and tells readers to verify Webapi/<table-name>/enabled=True. Replace the unresolved-applicability statements with that documented relationship. Explain that fields uses explicit columns, optionally combined with UseFieldsFromView on supported versions; wildcard fields are no longer supported. Remove the corresponding open question. The narrower observation that the client API reference itself omits these settings can remain only alongside this documentation. | Source: https://learn.microsoft.com/troubleshoot/power-platform/power-pages/migrate-web-api-wildcard
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist's instruction to enforce rules through column security is represented in the controls table. | Found: The checklist says 'enforce rules through table permissions and column security'; the table contains table permissions, portals Web API site settings and a client API switch gap, but no column-security row. | Fix: Add a separate column-security control row, or remove column security from the actionable checklist while retaining the sourced explanation in Risk assessment. Research its exact UI and automation routes before populating that row.
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist's cloud-flow registration and web-role control is represented in the controls table. | Found: The checklist says 'Confirm that any cloud flow a script triggers is registered with the site and secured with a web role'; none of the three control rows covers cloud-flow registration or access. | Fix: Add a site-scoped cloud-flow registration/access row. UI: Power Pages > site > + Edit > Set up > Integrations > Cloud flows > + Add cloud flow > select flow > Roles > + Add roles > select roles > Save. Cite https://learn.microsoft.com/power-pages/configure/cloud-flow-integration and research automation before filling that side or marking it undocumented.
-->
