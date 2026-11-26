---
title: "Microsoft 365 Copilot connectors: index browser, schema and errors for custom connectors in the admin centre"
slug: "m365-copilot-copilot-extensibility-view-index-browser-schema-and-errors-for-custom-connect"
roadmapId: 498898
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans an index browser, schema view and error detail in the Microsoft 365 admin center for admins troubleshooting custom Copilot connectors. Admin-only; check who holds AI Administrator."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer","Web"]
targetDate: "August CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's connector prerequisites page states the tenant must have Microsoft 365 licences, and that indexing of synced connector data incurs no extra cost for tenants with them. A licence or charge specific to these views is not yet published."
audiences: ["m365-admin","service-owner","security"]
tags: ["copilot-connectors","m365-copilot","m365-admin-center","diagnostics","extensibility","oversharing"]
sources:
  - title: "Search and validate indexed content"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/indexed-content"
    kind: "learn"
  - title: "Monitor Microsoft 365 Copilot connector errors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/error-responses"
    kind: "learn"
  - title: "Manage connector connections"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "View connection details"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/view-details"
    kind: "learn"
  - title: "Manage access permissions for connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Work with the Copilot connectors API"
    url: "https://learn.microsoft.com/graph/connecting-external-content-connectors-api-overview"
    kind: "learn"
  - title: "Microsoft 365 Copilot connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/overview"
    kind: "learn"
  - title: "externalConnection resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-externalconnection?view=graph-rest-beta"
    kind: "learn"
  - title: "Microsoft Entra built-in roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#ai-administrator"
    kind: "learn"
  - title: "About administrator roles in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/add-users/about-admin-roles?view=o365-worldwide"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 498898"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498898"
    kind: "roadmap"
  - title: "Who can open Copilot connector pages, including the index browser, schema and errors (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles"
    kind: "learn"
  - title: "Who can open Copilot connector pages, including the index browser, schema and errors (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["copilot-connectors","m365-copilot-copilot-extensibility-schema-recommendations-for-custom-connectors-in-m365-ad","m365-copilot-copilot-extensibility-adminx-pre-setup-guides-editability-actionable-errors-a","m365-copilot-copilot-extensibility-graph-api-enhancements-for-better-relevance-and-ux","m365-copilot-copilot-extensibility-delete-schema-properties-via-copilot-connector-apis"]
controls:
  - governs: "Who can open Copilot connector pages, including the index browser, schema and errors"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Roles > Role assignments > Microsoft Entra ID > AI Administrator > Assigned > Add users"
      docs: "https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    note: "The request body sets roleDefinitionId and principalId. For delegated access using a work or school account, Privileged Role Administrator is the least privileged role supported for this operation."
  - governs: "Where a connection's error codes and counts are reviewed and downloaded"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Connectors > Your connections > connection > Error"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/error-responses"
    api:
      kind: "powershell"
      call: "DownloadErrorScript.ps1"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/error-responses"
    note: "Monitoring only. The admin centre shows a limited set of errors; the script prompts for the connection ID and a batch size of up to 5,000 errors."
  - governs: "Whether a connection's indexed content is used in Copilot Search and Copilot Chat"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connection > Copilot Visibility"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    api: null
    note: "Described for partner connectors. Visible by default; does not affect declarative agents and their data. The connection keeps crawling."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2025-08-18T23:00:53"
changes:
  - date: "2026-11-26"
    note: "New briefing: index browser, schema recommendations and error views for custom Copilot connectors, with the role, error-script and Copilot Visibility controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 63 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: qualified the Privileged Role Administrator requirement to delegated access, limited the Copilot Visibility advice to partner connectors, removed checklist steps without a control row, and replaced the AI Reader source."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 78 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 78
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "4ad7feff92df073191e262ba0c417949"
---

## What's changing

Microsoft plans to let administrators view the index browser, the schema and the errors for custom Copilot connectors from the Microsoft 365 admin center, to make troubleshooting easier. Custom connectors are connections an organisation's developers build with the Copilot connectors REST API to bring an external system's content into the Microsoft Graph index that Copilot and Microsoft Search read.

Microsoft Learn already documents an index browser, an **Error** tab and schema recommendations for connections in the admin centre. The [index browser](https://learn.microsoft.com/microsoft-365/copilot/connectors/indexed-content) takes an item's unique identifier (for a custom connector, its item ID) and shows the item's name, its status and last refresh time, the status of each property, the users and groups on its permissions list, and a **Check user access** search that lists the groups a named user belongs to. The [Error tab](https://learn.microsoft.com/microsoft-365/copilot/connectors/error-responses) lists error codes, their counts and a download log; Microsoft notes that the admin centre shows a limited set of errors and gives a PowerShell script for the full list. For published custom connectors, the admin centre gives [schema recommendations](https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector#view-schema-recommendations-for-custom-copilot-connectors) that flag four missing semantic labels: `title`, `url`, `lastModifiedBy` and `lastModifiedDateTime`.

The roadmap item gives the status as In development, with a target of August CY2025, for General Availability and Targeted Release on the Web and Developer platforms in the Worldwide (Standard Multi-Tenant) cloud. That target has passed while the record still says In development, and Learn already describes these views, so the two sources disagree on whether the feature has shipped. Microsoft has not stated whether the views are switched on when they arrive.

## Why it matters

For a service owner this is a support tool, not a new exposure. When a user reports that Copilot cannot find a record from a custom connection, or shows one they should not see, the index browser shows from the admin centre whether the item was indexed, which properties arrived and which users and groups its permissions list allows. That shortens the back-and-forth between the admins who own the connection and the developers who wrote it.

It also brings a configuration choice into view. Microsoft's page states that where a connection's access permissions were set to **Allow everyone** instead of **Only people with access**, everyone can see all items in the index. Admins using the index browser will find such connections, and Microsoft states that updating access permissions after a connection is created isn't currently supported. Microsoft has not stated what happens on arrival, and no source says that what users see through existing connections changes.

## Risk assessment

**Data exposure**
- The index browser shows an item's name, properties and permissions list, and **Check user access** lists the groups a named user belongs to. Those details are visible to whoever can open connector pages; Microsoft's connector pages state that managing connectors requires the AI administrator role (row 1).
- The views can reveal a connection set to **Allow everyone**. Microsoft's documented fix is to delete the connection and recreate it with the intended permissions. For partner connectors, the **Copilot Visibility** toggle (row 3) excludes a connection from Copilot Search and Copilot Chat, but does not affect declarative agents and their data; its availability for API-built custom synced connectors is not established.

**Security & identity**
- AI Administrator is a privileged Microsoft Entra role that manages all aspects of Microsoft Copilot. Granting it to support staff so they can troubleshoot connectors gives them that wider reach as well (row 1).

**Autonomy & actions**
- No change: the documented views are for checking items, properties, permissions and errors.

**Change & support**
- Microsoft states that permission changes can take up to 24 hours to reach Microsoft Search and Microsoft 365 Copilot, and are applied during a full crawl, not an incremental one. An index browser check made straight after a change in the source can still show the old permissions.
- The admin centre shows a limited set of errors. The full list comes from the `DownloadErrorScript` PowerShell script (row 2), which support staff need installed before they need it.

## Cost and licensing

Copilot connectors need Microsoft 365 licences in the tenant. The [prerequisites page](https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites) states "Your tenant must have Microsoft 365 licenses" and that indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licences. What users can reach through a connection depends on their licence: the same page lists Copilot grounding and agents from synced connectors with the Microsoft 365 Copilot add-on or Microsoft 365 E7, and Microsoft Search only with a Microsoft 365 plan alone.

A licence, price or meter specific to the index browser, schema and error views is not yet published. The cost the sources show is admin time: finding item IDs in the source system, running the error script and passing schema fixes back to developers.

## Scope

- **Who uses it:** administrators who manage Copilot connectors. Microsoft's connector pages state that managing connectors requires the AI administrator role.
- **Connections:** the roadmap item names custom connectors. The Learn index browser page lists custom connectors, by item ID, alongside connectors such as ServiceNow, Jira and Salesforce. Schema recommendations cover published custom connectors.
- **Indexed content:** the index browser looks up indexed items. The prerequisites page states that federated connectors don't index content, so the lookup concerns synced connections.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists.
- **Platforms and release:** Web and Developer; Targeted Release and General Availability, targeted for August CY2025.

## Governance guidance

### Before rollout
- List who holds AI Administrator under Roles > Role assignments in the Microsoft 365 admin center (row 1), and decide who will troubleshoot custom connectors.
- Agree with each custom connector's developer which item ID their connection ingests, so support staff can look items up in the index browser.
- Install `DownloadErrorScript` on the support team's admin workstation (row 2) for errors beyond those the **Error** tab shows.

### At rollout
- Open each custom connection's **Error** tab (row 2) and record the error codes and counts as a baseline.

### After rollout
- Pass schema recommendations for missing `title`, `url`, `lastModifiedBy` and `lastModifiedDateTime` labels to the connector's developer.
- Review AI Administrator assignments (row 1) once troubleshooting needs settle.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can open Copilot connector pages, including the index browser, schema and errors</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets roleDefinitionId and principalId. For delegated access using a work or school account, Privileged Role Administrator is the least privileged role supported for this operation.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Roles › Role assignments › Microsoft Entra ID › AI Administrator › Assigned › Add users <a href="https://learn.microsoft.com/microsoft-365/admin/add-users/assign-admin-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Where a connection's error codes and counts are reviewed and downloaded</strong><br><small class="controls__note">Monitoring only. The admin centre shows a limited set of errors; the script prompts for the connection ID and a batch size of up to 5,000 errors.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Connectors › Your connections › connection › Error <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/error-responses" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>DownloadErrorScript.ps1</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/error-responses" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a connection's indexed content is used in Copilot Search and Copilot Chat</strong><br><small class="controls__note">Described for partner connectors. Visible by default; does not affect declarative agents and their data. The connection keeps crawling.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection › Copilot Visibility <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- Microsoft's connector pages state that accessing and managing Copilot connectors requires the AI administrator role. Microsoft's admin roles page describes the AI Reader role as able to view the features and settings in the admin centres that the AI Administrator can view, without editing any settings.
- For delegated access using a work or school account, Privileged Role Administrator is the least privileged role supported for creating a role assignment through Microsoft Graph.
- The error pages give the path as **Connectors > Your connections**, while other connector pages give **Copilot > Connectors > Your Connections**; follow the labels your admin centre shows.
- The **Copilot Visibility** toggle is described for partner connectors. With visibility off, the connection can still crawl, and changes take up to 30 minutes to reach all Copilot experiences. Microsoft states that updating a connection's access permissions after creation isn't currently supported.

## Open questions

- What remains to ship under this item, given that Microsoft Learn already documents the index browser, Error tab and schema recommendations while the roadmap still says In development? Watch the roadmap item and Message center.
- Can holders of the read-only AI Reader role open the index browser and run **Check user access**, which lists a user's group memberships? Watch the [index browser page](https://learn.microsoft.com/microsoft-365/copilot/connectors/indexed-content).
- Does the **Copilot Visibility** toggle, described for partner connectors, appear for custom connectors built with the Copilot connectors API?
- Will the admin centre show the full error list for custom connections, or will `DownloadErrorScript` still be needed?

<!-- rationale
risk: Low. The views are for administrators who already manage connectors; they show item permissions and group memberships to role holders, and no source says they change what users see in Copilot.
cost: Low. Copilot connectors need Microsoft 365 licences in the tenant; no licence or charge specific to these views is published, so the known cost is admin troubleshooting time.
impact: Low. Only administrators who manage Copilot connectors, and the developers they work with, will notice.
-->
