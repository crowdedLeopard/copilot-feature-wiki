---
title: "Power Pages: client APIs for scripting forms, lists, users and data"
slug: "power-pages-professional-developer-experiences-control-power-pages-components-using-client"
roadmapId: 577821
topic: "power-platform"
products: ["Power Pages"]
summary: "Power Pages sites get a supported JavaScript client API ($pages) for forms, lists, sign-in and Dataverse calls. Nothing changes until a developer writes script; table permissions remain the data control. No admin action is required."
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
  notes: "The client API pages state no licence, price or meter. Power Pages sites are licensed by capacity (authenticated and anonymous users per website per month); whether client API calls are counted separately is not stated."
audiences: ["power-platform-admin","maker","security","service-owner"]
tags: ["power-pages","client-api","web-api","table-permissions","web-roles","extensibility","end-user-authentication","copilot-studio"]
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
  - title: "Configuring table permissions"
    url: "https://learn.microsoft.com/power-pages/security/table-permissions"
    kind: "learn"
  - title: "Power Platform licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq"
    kind: "learn"
  - title: "Whether the portals Web API is enabled for a table, and which columns it exposes (Power Pages design studio)"
    url: "https://learn.microsoft.com/power-pages/security/manage-content-security-policy"
    kind: "learn"
videos: []
related: ["power-pages-design-studio-unify-power-pages-authorization-by-merging-web-role-with-dataver","power-pages-first-class-support-for-connector-apis-in-power-pages","power-pages-power-pages-copilot-use-power-pages-mcp-server-capabilities","power-pages-plugin-support-for-github-copilot-cli-and-claude-code-to-create-and-edit-tradi"]
controls:
  - governs: "Which Dataverse records and operations site script can reach through the client API"
    scope: "site"
    ui:
      surface: "Power Pages design studio"
      path: "Security > Table permissions"
      docs: "https://learn.microsoft.com/power-pages/security/table-permissions"
    api: null
    note: "Site owner task. Learn says table permissions are applied on the server and the client API cannot override them. No cmdlet or API call was found."
  - governs: "Whether the portals Web API is enabled for a table, and which columns it exposes"
    scope: "site"
    ui:
      surface: "Power Pages design studio"
      path: "More items (…) > Portal Management > Site Settings"
      docs: "https://learn.microsoft.com/power-pages/security/manage-content-security-policy"
    api: null
    note: "Setting names are documented for the portals Web API (Webapi/<table-name>/enabled and /fields). Learn's client API pages do not say they gate $pages.webAPI."
  - governs: "Tenant or site switch to turn the client API off"
    scope: "site"
    ui: null
    api: null
    note: "No such control found in Microsoft Learn at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-22T23:45:46"
changes:
  - date: "2026-11-16"
    note: "First briefing: documents the Power Pages client API, its table-permission boundary and the absence of a documented switch to turn it off."
version: 1
---

## What's changing

Power Pages now has a documented JavaScript client API for developers who customise site pages. Once a page has loaded, script receives a `$pages` object (through `Microsoft.PowerPages.onPagesClientApiReady`) that can read and change forms and their controls, style rows and cells in modern lists, sign users in and out, work with Dataverse records, and call server logic or cloud flows.

The Learn overview lists these areas: forms and controls, lists, user authentication (`signIn` and `signOut`), Dataverse records, files and images through `$pages.webAPI`, languages, server endpoints and cloud flows through `$pages.ajax`, and Microsoft Copilot Studio agents through `$pages.agent`. The API is meant to replace custom script that edits the page's Document Object Model (DOM, the page's underlying HTML structure), which the roadmap description calls fragile.

The Learn page says the client API "becomes available when your page loads". Script can be placed in a JavaScript web file or in the **Custom JavaScript** section of a page. The older `Microsoft.Dynamic365.Portal.onPagesClientApiReady` alias is deprecated: it still works, writes a one-time console warning and will be removed in a future release.

The roadmap record shows the item as Launched, with release phases General Availability and Preview, a preview date of November CY2025 and a target date of September CY2026, for Worldwide (Standard Multi-Tenant) on the web. The roadmap description labels the APIs Preview; the Learn pages read at the time of writing (November 2026) do not describe them as preview.

## Why it matters

This is a developer capability, not a tenant switch, so the main effect for a service owner is on what site script is allowed to do. Script on a page now has a supported route to create, update and delete Dataverse records, call server logic and trigger cloud flows, so reviewing the site's table permissions matters more than reviewing the script itself.

If nobody acts, nothing breaks: existing sites behave as before and no administrator setting is documented for the client API. The practical decision is whether makers on your sites should use `$pages` for new work, and whether your security review of site changes covers it.

## Risk assessment

**Data exposure**

- `$pages.webAPI` offers `createRecord`, `retrieveRecord`, `retrieveMultipleRecords`, `updateRecord`, `deleteRecord` and file upload and download. The examples page states that Power Pages applies table permissions on the server and the client API cannot override them, so the web roles on each table permission set the ceiling.
- Any table permission granted to the Anonymous users web role makes that table's data available to any visitor, which includes script that calls `$pages.webAPI`.
- `setVisible(false)` on a control and `row.setVisible(false)` on a list row change only what the browser shows. Learn warns that hidden data must still be protected with table permissions and column security.

**Security & identity**

- `$pages.user.signIn` redirects the user to the sign-in page and `signOut` signs the current user out. Neither changes which identity providers the site accepts.
- `$pages.ajax.request` adds the cross-site request forgery token and the session cookie to every call, so scripted requests run as the signed-in visitor or as an anonymous visitor.
- Microsoft Learn does not say whether the Web API site settings (`Webapi/<table-name>/enabled` and `Webapi/<table-name>/fields`) gate `$pages.webAPI`; see Open questions.

**Autonomy & actions**

- Script can trigger cloud flows registered with the site and call `/_api/serverlogics/` endpoints. These run on page events chosen by the developer, with no approval step.
- `$pages.agent.SendActivity` sends messages or events to a Copilot Studio agent available to the current user, so agent access rules apply to the visitor.

**Change & support**

- Scripts written against the deprecated `Microsoft.Dynamic365.Portal.onPagesClientApiReady` alias will stop working when Microsoft removes it; ask developers to move to `Microsoft.PowerPages.onPagesClientApiReady`.
- `getRecordCount` returns at most 5,000; a developer who needs a larger total must use `$count=true` with `retrieveMultipleRecords`.

## Cost and licensing

No licence, price or meter is named on the client API pages read (the overview, initialisation, Dataverse, user authentication, server endpoints, Copilot Studio agents and examples pages). That is a statement about those pages at the time of writing (November 2026), not a statement that nothing is charged.

Power Pages licensing is capacity based, with authenticated users per website per month and anonymous users per website per month, according to the Power Platform licensing FAQ. The separate portals Web API overview states that portals Web API operations require a Power Pages licence, that calls by anonymous users count towards the anonymous user capacity, and that calls by authenticated users need the applicable authenticated user capacity licence. Learn does not say whether that applies unchanged to `$pages.webAPI`.

Indirect cost is developer time to learn and migrate to the API, and security review time for scripts that write data. Cloud flows and Copilot Studio agents called from script carry their own licensing, which these pages do not cover.

## Scope

The roadmap lists Power Pages on the web, in Worldwide (Standard Multi-Tenant), and says the feature is enabled for end users automatically. In practice it affects sites where a developer adds script; visitors see the result, not the API.

The Learn client API pages list no prerequisite licence or admin role. Table permissions and web roles are configured by the people who manage the site's Security workspace. Other clouds are not listed on the roadmap item; the roadmap does not say whether they are excluded.

## Governance guidance

### Before rollout

- Review table permissions (design studio > Security > Table permissions) for every table that site script could reach, and remove the Anonymous users web role from any table whose data should not be public.
- Decide whether `$pages.webAPI` writes are acceptable on your sites, and record which web roles may create, update or delete each table's records.
- Tell site developers to use `Microsoft.PowerPages.onPagesClientApiReady` rather than the deprecated `Microsoft.Dynamic365.Portal.onPagesClientApiReady` alias.

### At rollout

- Ask developers to treat `setVisible(false)` and `setDisabled` as presentation only, and to enforce rules through table permissions, as Learn instructs.
- Check the Web API site settings in the Portal Management app (Site Settings) for the tables a script calls, and confirm with a test user that calls succeed or fail as the web role intends.

### After rollout

- Re-test affected pages with a user in each web role, including an anonymous visitor, to confirm that script cannot read or change more than the table permissions allow.
- Search site script for the deprecated alias and replace it before Microsoft removes it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which Dataverse records and operations site script can reach through the client API</strong><br><small>Site</small><br><small class="controls__note">Site owner task. Learn says table permissions are applied on the server and the client API cannot override them. No cmdlet or API call was found.</small></td><td data-label="Admin UI"><strong>Power Pages design studio</strong><br>Security › Table permissions <a href="https://learn.microsoft.com/power-pages/security/table-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the portals Web API is enabled for a table, and which columns it exposes</strong><br><small>Site</small><br><small class="controls__note">Setting names are documented for the portals Web API (Webapi/&lt;table-name&gt;/enabled and /fields). Learn's client API pages do not say they gate $pages.webAPI.</small></td><td data-label="Admin UI"><strong>Power Pages design studio</strong><br>More items (…) › Portal Management › Site Settings <a href="https://learn.microsoft.com/power-pages/security/manage-content-security-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or site switch to turn the client API off</strong><br><small>Site</small><br><small class="controls__note">No such control found in Microsoft Learn at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Table permissions are the control that bounds what `$pages.webAPI` can reach, because Learn states that the client API cannot override them. They are managed by the site owner in the design studio; no cmdlet, REST call or CLI command for them was found in Microsoft Learn at the time of writing (November 2026).

No administrator setting to turn the client API off for a site is documented at the time of writing (November 2026). The Web API site settings are documented for the portals Web API; the client API pages do not say they gate `$pages.webAPI`, so treat that row as a related control and verify it by test. The Content Security Policy site setting is a separate general control that the client API pages do not mention.

## Open questions

- Do the `Webapi/<table-name>/enabled` and `Webapi/<table-name>/fields` site settings, which govern the portals Web API, also gate `$pages.webAPI`? Watch the client API Dataverse page on Microsoft Learn.
- Is the feature preview or generally available? The roadmap record lists both release phases and the Launched status, while the description says Preview; the Learn pages read do not state a phase.
- Do calls made through `$pages.webAPI` and `$pages.ajax` count towards Power Pages anonymous or authenticated user capacity in any different way from existing site traffic?
- Will Microsoft add an administrator control, in the Power Pages admin centre or through the Power Platform API, to restrict or audit client API use per site?

<!-- rationale
risk: Medium. Site script can create, update and delete Dataverse records through $pages.webAPI, so the exposure depends on table permissions and web roles; Learn documents no switch to turn the API off.
cost: Low. The client API pages name no licence or meter, so the known cost is developer and review time; the site itself is licensed by Power Pages capacity, and the licence position for client API calls is not stated.
impact: Low. Developers and makers who write site script notice it; site visitors see changes only when a developer ships script that uses the API.
-->
