---
title: "Microsoft 365 Copilot connectors: edit ServiceNow user mapping and query filters on a published connection"
slug: "m365-copilot-admins-can-now-edit-user-mappings-and-query-filters-for-servicenow-connector"
roadmapId: 503590
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Admins can now change the user mapping and query filter of a ServiceNow Copilot connector without recreating it. Nothing changes until an AI administrator edits the connection, and an edit may trigger a full crawl."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: "February CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's connector licensing table covers synced connectors: Microsoft Search with any Microsoft 365 plan, Copilot grounding with the Microsoft 365 Copilot add-on or E7. No licence specific to editing a connection is published."
audiences: ["m365-admin","security"]
tags: ["copilot-connectors","m365-copilot","m365-admin-center","servicenow","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 503590"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503590"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Manage connector connections"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "Map non-Microsoft Entra ID identities"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/map-non-entra-id"
    kind: "learn"
  - title: "Deploy the ServiceNow Knowledge Copilot connector"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/servicenow-knowledge-deployment"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Update externalConnection"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["copilot-connectors","m365-copilot-streamlined-authentication-process-with-oauth-for-connector-admins"]
controls:
  - governs: "Edit a published ServiceNow connection's query string, advanced criteria and user mapping"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connection"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    api: null
    note: "Requires the AI administrator role. Release notes describe choosing Edit connection on the ServiceNow connector; the manage page lists the editable ServiceNow settings."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-23T23:27:16"
changes:
  - date: "2026-11-23"
    note: "New briefing: admins can edit ServiceNow connector user mapping and query filters on a published connection; Microsoft's pages disagree on whether a mapping can be changed."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 59 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 57
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "10d3035146cebad7905f76a411c7b67b"
---

## What's changing

Administrators can now edit the user mapping and the query filter of a ServiceNow Copilot connector after it is published, without deleting and recreating the connection. The roadmap item describes this as "Support connection edit of user mapping, query filter for ServiceNow".

Microsoft's release notes explain the change: previously, once the ServiceNow connector was configured, user mappings and query filters could not be changed without recreating the connection. The notes describe the new route as selecting the ServiceNow connector in the Microsoft 365 admin center and choosing Edit connection.

The Learn page on managing connections lists, for a published connection from Microsoft, these editable items: name and description, connection settings, property labels, schema, refresh schedule, and for ServiceNow the query string, advanced criteria and user mapping. It adds that editing a connection might trigger a full crawl, where applicable. That page names "ServiceNow" without saying which of the ServiceNow connectors (Knowledge, Catalog, Tickets) it covers; the query string setting for ServiceNow Knowledge is documented as a custom setup option whose default is `active=true^workflow_state=published`.

The page on mapping non-Microsoft Entra ID identities still says "You can't change your mapping after the connection is published". That conflicts with the manage page, and this briefing reports both. The roadmap record gives the status as Launched, with a preview target of February CY2026 and a general availability target of March CY2026, for Web in the Worldwide (Standard Multi-Tenant) cloud. The release notes list the item under their section dated July 29, 2026.

## Why it matters

Before this change, correcting a wrong user mapping or an over-broad query filter meant recreating the connection. An edit in place lets an administrator tighten what a ServiceNow connection indexes without rebuilding it, which is the control readers most often want after a connector has been live for a while.

Nothing happens to a tenant unless an AI administrator makes an edit, so the decision for a service owner is whether to review existing ServiceNow connections against current needs. Plan for the cost of an edit: Microsoft says it might trigger a full crawl, so schedule changes rather than making them casually.

## Risk assessment

**Data exposure**
- A query string decides which ServiceNow records are indexed; Learn says you can modify the default filter to index only specific articles. Widening it can index more content than before, narrowing it indexes less. Review the filter in the connection's custom settings after every edit.
- The ServiceNow Knowledge connector's access permissions setting (Everyone, or Only people with access to this data source) is separate from the mapping. Check that it still matches your intent after any edit, because Everyone shows indexed data in search results for all users.

**Security & identity**
- User mapping decides how people in the ServiceNow access control list are matched to Microsoft Entra identities. A mapping that fails to resolve some users means those users are not matched. Use the mapping preview, which shows five users and a Success or Failed result, before saving.
- Microsoft's pages disagree about whether a mapping can be changed after publishing. Test an edit on a non-critical connection first.

**Autonomy & actions**
- No change: the feature adds no agent or autonomous behaviour. It is an administrator edit to an existing connection.

**Change & support**
- Editing a connection might trigger a full crawl, where applicable. During the initial full crawl, an edit does not trigger another one and takes effect at the next scheduled full crawl.
- Only one mapping is supported for all users and conditional mappings are not supported, according to the identity-mapping page.

## Cost and licensing

Microsoft publishes no separate licence or price for editing a connection. The prerequisites page for connectors states: "Indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses." ServiceNow is named there as a prebuilt synced connector.

The same page's licensing table shows which Copilot experiences each licence supports for synced connectors: Microsoft 365 (any plan) supports Microsoft Search only; Microsoft 365 with the Microsoft 365 Copilot add-on, or Microsoft 365 E7, supports Microsoft Search and Copilot grounding and agents; a Copilot Studio licence or Microsoft 365 Copilot pay-as-you-go supports agents only. The page also states that if your organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply.

Indirect cost is admin time, plus the possible full crawl after an edit.

## Scope

Who: an AI administrator in the Microsoft 365 admin center. Learn states that to access and manage Copilot connectors you must be an AI administrator for your organisation, and for prebuilt synced connectors such as ServiceNow you also need admin access to the external service.

Where: the roadmap record lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform and General Availability. Editing a published connection is listed on the manage page for connectors by Microsoft, not for partner connectors, which support name and description edits only.

Which connectors: the manage page says "ServiceNow" without naming the connector. Only the ServiceNow Knowledge connector's settings page was checked for the query string and identity settings.

## Governance guidance

### Before rollout
- Inventory existing ServiceNow connections under Copilot > Connectors > Your Connections and note each one's current query string and user mapping.
- Confirm which administrators hold the AI administrator role, and that a ServiceNow admin is available, since Microsoft lists admin access to the external service as a prerequisite for prebuilt synced connectors.
- Decide which connections could be edited in place and which should wait, given that an edit might trigger a full crawl.

### At rollout
- Edit the connection from the Your Connections page and change only the query string or user mapping that needs it.
- Run the mapping preview where you change the user mapping and check that the five sampled users resolve to Microsoft Entra users.
- Record the old and new query string and mapping values in your own change log before saving the edit.

### After rollout
- Check the connection state on the Your Connections tab returns to Ready after any crawl the edit triggers.
- Validate indexed content by searching for a known record and checking who can see it, using the Search and validate indexed content guidance for connectors.
- Re-check the Learn identity-mapping page for its limitation on changing a mapping after publishing, and raise the conflict with Microsoft if it persists.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Edit a published ServiceNow connection's query string, advanced criteria and user mapping</strong><br><small>Tenant</small><br><small class="controls__note">Requires the AI administrator role. Release notes describe choosing Edit connection on the ServiceNow connector; the manage page lists the editable ServiceNow settings.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Editing is done by an AI administrator on the connection in the Microsoft 365 admin center. The table has one row because the manage page documents the edit itself as the control.

Microsoft Learn's Graph reference for updating an external connection lists configuration, description and name as the properties that can be updated, so it is not a route to the ServiceNow user mapping or query string.

## Open questions

- Does the user mapping really become editable after publishing, given that the identity-mapping page says you can't change your mapping after the connection is published? Watch the Learn pages for manage connector connections and map non-Microsoft Entra ID identities.
- Which ServiceNow connectors (Knowledge, Catalog, Tickets) support editing user mapping and query string on a published connection? The manage page says only "ServiceNow".
- When does an edit to user mapping or query string trigger a full crawl rather than waiting for the next scheduled one? Watch the manage connector connections page.
- The roadmap targets General Availability in March CY2026 while the release notes list the item under July 29, 2026; which date should tenants treat as availability?

<!-- rationale
risk: Low. This is an admin-side edit to an existing connection and nothing changes until an administrator makes one; the exposure to watch is that a changed query string alters what is indexed and a changed user mapping alters how people are matched.
cost: Low. The only cost the sources show is admin time and a possible full crawl; Microsoft's prerequisites page states that indexing synced connector data incurs no extra cost for tenants with Microsoft 365 licences.
impact: Low. Only AI administrators and ServiceNow admins notice; end users see a difference only if an edit changes what the connection indexes or who is matched to it.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState; summary; Why it matters; rationale: risk, impact / default: The change is admin-opt-in and nothing changes in a tenant until an AI administrator edits a connection. | Found: Searched: '503590 default'; 'Microsoft 365 ServiceNow connection edit user mapping query filter default rollout admin opt in'. Read the roadmap, release notes, manage-connector and ServiceNow Knowledge deployment pages; none explicitly states this change's arrival default. | Fix: Set defaultState to 'unknown'. Replace 'Nothing changes until an AI administrator edits the connection' in the summary with 'Microsoft has not stated what happens on arrival'. Replace the opening of the second paragraph of Why it matters with 'Microsoft has not stated this change's arrival default; no source says existing connection behaviour changes. Review existing ServiceNow connections against current needs.' In the risk rationale replace 'and nothing changes until an administrator makes one' with 'and no source says existing connection behaviour changes on arrival'. Remove the impact rationale's assertion that end users see a difference only if an edit is made; retain 'Low. This is an administrator-side connection-editing capability.' The documented manual editing procedure does not itself establish a rollout default.
- [contradicted, blocker] Cost and licensing / licensing: A Copilot Studio licence supports synced connector agents, with no Microsoft 365 prerequisite stated for that option. | Found: Your tenant must have Microsoft 365 licenses. Microsoft 365 + Copilot Studio license | ✅ | Agents only (no Copilot grounding) | ❌ | Fix: Replace 'a Copilot Studio licence or Microsoft 365 Copilot pay-as-you-go supports agents only' with 'Microsoft 365 with a Copilot Studio licence, or Microsoft 365 Copilot pay-as-you-go, supports agents but not Copilot grounding'. This preserves the Microsoft 365 prerequisite in the licensing table at https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] title; summary; What's changing; Why it matters; controls[0] / behaviour: Administrators can edit a published ServiceNow connector's query filter without recreating the connection. | Found: Previously, once the ServiceNow connector was configured, user mappings and query filters could not be changed without recreating the connection. Now, admins can edit these settings directly within the connector configuration. | Fix: After the existing documentation-conflict paragraph in What's changing, add: "The connector FAQ also conflicts with the release notes and manage page: it says editing a query string after publishing isn't supported and requires a new connection." Cite and add to sources https://learn.microsoft.com/microsoft-365/copilot/connectors/frequently-asked-questions, whose 'Can I edit the query string after the connection is published?' answer says exactly that. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
- [supported, minor] controls[0].ui; What's changing; Governance guidance; Governance controls / admin-path: The Microsoft 365 admin center route to the connection is Copilot > Connectors > Your Connections > connection. | Found: Go to Copilot > Connectors > Your Connections. Select the connection that you want to modify. | Fix: The row stops on the correct connection page. Complete controls[0].ui.path and the rendered table path as 'Copilot > Connectors > Your Connections > connection > Edit connection', combining the cited manage page's navigation with 'Select the ServiceNow connector and choose Edit connection' at https://learn.microsoft.com/microsoft-365/copilot/release-notes. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector
-->
