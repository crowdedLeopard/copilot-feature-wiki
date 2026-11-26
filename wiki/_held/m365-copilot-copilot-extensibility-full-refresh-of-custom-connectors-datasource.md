---
title: "Microsoft 365 Copilot connectors: full refresh of a custom connector's data source through Microsoft Graph"
slug: "m365-copilot-copilot-extensibility-full-refresh-of-custom-connectors-datasource"
roadmapId: 498910
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a Graph API full sync for custom Copilot connectors that also removes items deleted in the source. It is a developer-side option; admins should ask connector owners whether they will adopt it."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer","Web"]
targetDate: "September CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Indexing synced connector data incurs no extra cost for tenants with Microsoft 365 licences; Copilot grounding on connector content needs the Microsoft 365 Copilot add-on or Microsoft 365 E7. Nothing specific to full sync is published."
audiences: ["m365-admin","service-owner"]
tags: ["copilot-connectors","m365-copilot","microsoft-graph","extensibility","stale-content"]
sources:
  - title: "Microsoft 365 Roadmap item 498910"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498910"
    kind: "roadmap"
  - title: "Create, update, and delete items in a Microsoft Graph connection"
    url: "https://learn.microsoft.com/graph/connecting-external-content-manage-items"
    kind: "learn"
  - title: "externalConnection resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-externalconnection?view=graph-rest-beta"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoftsearch/licensing"
    kind: "learn"
  - title: "Manage connector connections"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "Search and validate indexed content"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/indexed-content"
    kind: "learn"
  - title: "Microsoft 365 Copilot connectors FAQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/frequently-asked-questions"
    kind: "learn"
  - title: "Work with the Copilot connectors API"
    url: "https://learn.microsoft.com/graph/connecting-external-content-connectors-api-overview"
    kind: "learn"
  - title: "Copilot connectors SDK overview"
    url: "https://learn.microsoft.com/graph/custom-connector-sdk-overview"
    kind: "learn"
  - title: "Removing from the index an item deleted in the source (today's route) (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalitem-delete?view=graph-rest-1.0"
    kind: "learn"
  - title: "Additional applications allowed to manage a connection and index content into it (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["copilot-connectors","m365-copilot-copilot-extensibility-delete-schema-properties-via-copilot-connector-apis","m365-copilot-support-permission-sync-missed-in-incremental-crawl","m365-copilot-copilot-extensibility-graph-api-enhancements-for-better-relevance-and-ux","m365-copilot-copilot-extensibility-adminx-pre-setup-guides-editability-actionable-errors-a"]
controls:
  - governs: "Full refresh of a custom connection's data source, with removal of items deleted at source"
    scope: "app"
    ui: null
    api: null
    note: "Roadmap capability. At the time of writing (November 2026) Microsoft Learn documents no operation or admin-centre setting for it."
  - governs: "Removing from the index an item deleted in the source (today's route)"
    scope: "app"
    ui: null
    api:
      kind: "graph"
      call: "DELETE /v1.0/external/connections/{connectionsId}/items/{externalItemId}"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalitem-delete?view=graph-rest-1.0"
    note: "One call per item. Least privileged permission ExternalItem.ReadWrite.OwnedBy; higher ExternalItem.ReadWrite.All."
  - governs: "Additional applications allowed to manage a connection and index content into it"
    scope: "app"
    ui: null
    api:
      kind: "graph"
      call: "PATCH /v1.0/external/connections/{connectionsId}"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update?view=graph-rest-1.0"
    note: "The request body sets configuration. Least privileged permission ExternalConnection.ReadWrite.OwnedBy."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2025-07-25T22:15:54"
changes:
  - date: "2026-11-26"
    note: "New briefing: planned Graph API full sync for custom Copilot connectors, with today's per-item delete route and app permissions as controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 57 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 51
  unconfirmed: 2
  contradicted: 4
  attempts: 1
  hash: "17f3037466d6d96b6808fec8e5ba2448"
---

## What's changing

Microsoft plans to let administrators and developers run a full refresh, or sync, of a custom Copilot connector's data source through Microsoft Graph APIs. The roadmap item states that items deleted in the source are deleted automatically during this full sync, so admins do not have to call separate delete APIs.

Custom connectors (synced connectors built with the Copilot connectors API, formerly Microsoft Graph connectors) push each item into the index as an **externalItem**. Microsoft's guide to managing items documents adding, updating and deleting items one at a time by item ID, describes a full crawl as "capturing all additions and deletions", and leaves the refresh strategy to the connector's owner. Connectors built on the Copilot connectors SDK already have a connector agent that detects items deleted from the source during periodic full crawls. Microsoft Learn does not describe this feature yet: at the time of writing (November 2026) the beta **externalConnection** reference lists no full-sync operation, so what follows about its behaviour is the roadmap's description.

The roadmap item is **In development** with a target of **September CY2025**, release phases General Availability and Targeted Release, for Worldwide (Standard Multi-Tenant), on the Developer and Web platforms. The target month has passed and the record, last modified in July 2025, still shows In development.

## Why it matters

Stale items are the problem this addresses. Microsoft's connectors FAQ says an incremental crawl does not handle deletions, so items removed from the data source remain in the index; for a custom connector, Microsoft's item guide documents removal as a delete call per item. Content that was withdrawn at source can therefore keep appearing in Microsoft Search and, for users licensed for Copilot grounding, in Copilot answers. A full sync that reconciles deletions would close that gap for connectors whose code adopts it.

Microsoft has not stated what happens on arrival. The roadmap describes the full sync as something admins and developers "can do", and no source says existing connections change. The governance question for a service owner is which application is allowed to rewrite a connection's whole index, and whether a sync that sends an incomplete set of items could remove content that still exists: Microsoft has not described how the full sync decides an item was deleted, so confirm that before pointing it at a production connection.

## Risk assessment

**Data exposure**
- No new data source: the roadmap describes refreshing a connector's existing data source. The effect it describes is fewer stale items, not more data.
- Items deleted at source stay searchable today until the connector deletes them; the full sync would remove them in one pass, if the connector uses it.

**Security & identity**
- Deleting an item today needs the Graph permission ExternalItem.ReadWrite.OwnedBy (least privileged) or ExternalItem.ReadWrite.All (row 2). The permission the full-sync operation will need is not yet documented.
- A connection's **configuration** property lists additional application IDs allowed to manage the connection and index content into it (row 3); each one is an app that could run a full sync on that connection once the operation exists.

**Autonomy & actions**
- The roadmap says deletions happen automatically during the full sync. How an item is judged deleted, and what happens if a sync run ends early, is not described; test on a non-production connection first.

**Change & support**
- The change sits in connector code. For connections built by partners or custom-built, the Microsoft 365 admin center supports editing only the name and description, and deleting the connection.

## Cost and licensing

- **Licence.** The connectors prerequisites page says "Indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses", and Microsoft's connectors overview lists the Copilot connector APIs as one way to create a synced connector. Its licensing table shows synced connectors in Microsoft Search for any Microsoft 365 plan; Copilot grounding and agents need the Microsoft 365 Copilot add-on or Microsoft 365 E7; a Copilot Studio licence or Microsoft 365 Copilot pay-as-you-go gives agents only, with no Copilot grounding.
- **Item quota.** The Copilot connectors API overview still says items ingested through API-built connections consume your item quota, and links to the same licensing page, which no longer describes a quota. The two pages read differently.
- **Meter.** No charge or meter specific to the full sync is published.
- **Indirect costs.** Developer time to adopt the operation and test it. The Graph connectors API limits an application to 25 concurrent operations on a connection, which bears on how long a full refresh of a large source takes.

## Scope

- **Who:** administrators and developers who own custom connectors built on the Copilot connectors API, per the roadmap item. Microsoft-built connections already offer scheduled and on-demand full or incremental crawls in the admin centre; on-demand crawl needs Microsoft Graph connector agent 2.1.0.0 or later.
- **Roles:** the connectors prerequisites page says configuring and deploying Copilot connectors needs the AI administrator role, and Microsoft's connectors overview says an AI administrator registers the application and grants admin consent for its Graph permissions in the Microsoft Entra admin center. The connectors FAQ says creating a custom connector needs the Global administrator role. The pages differ.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the record lists.
- **Platforms:** Developer and Web.
- **Rollout:** General Availability and Targeted Release phases; target September CY2025, status In development.

## Governance guidance

### Before rollout
- List custom connections under **Copilot > Connectors > Your Connections** in the Microsoft 365 admin center and record each one's owner and build route (Graph API code, connector SDK or partner).
- Ask each owner how deletions are handled today (per-item DELETE calls, SDK full crawls or nothing) and whether they plan to adopt the full sync.
- Review which applications hold ExternalItem.ReadWrite.All or ExternalItem.ReadWrite.OwnedBy, and which app IDs each connection's **configuration** property allows (rows 2 and 3).

### At rollout
- Run the first full sync against a test connection and compare the connection's **ingestedItemsCount** before and after; Microsoft says the value refreshes every 15 minutes.
- Spot-check items deleted at source with the index browser (see [Search and validate indexed content](https://learn.microsoft.com/microsoft-365/copilot/connectors/indexed-content)) to confirm they are gone and that live items remain.

### After rollout
- Check the externalConnection reference for the full-sync operation and the permission it requires, and add that permission to the app review in row 3.
- Retire per-item delete jobs only once the full sync has run cleanly on that connection.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Full refresh of a custom connection's data source, with removal of items deleted at source</strong><br><small>App</small><br><small class="controls__note">Roadmap capability. At the time of writing (November 2026) Microsoft Learn documents no operation or admin-centre setting for it.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Removing from the index an item deleted in the source (today's route)</strong><br><small>App</small><br><small class="controls__note">One call per item. Least privileged permission ExternalItem.ReadWrite.OwnedBy; higher ExternalItem.ReadWrite.All.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>DELETE /v1.0/external/connections/{connectionsId}/items/{externalItemId}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalitem-delete?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Additional applications allowed to manage a connection and index content into it</strong><br><small>App</small><br><small class="controls__note">The request body sets configuration. Least privileged permission ExternalConnection.ReadWrite.OwnedBy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/external/connections/{connectionsId}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No admin-centre setting decides whether a connector's code uses the full sync: Microsoft documents control here through the Graph permissions the connector's application holds, which an administrator grants with admin consent in the Microsoft Entra admin center. For partner and custom-built connections, the admin centre's supported operations are deleting the connection and editing its name and description. The index browser shows an item's status, properties and permissions; Microsoft does not document deleting items there. Row 2's per-item delete and row 3's list of allowed apps both rest on the connection's application identity, so review them together. See the [Copilot connectors](/concepts/copilot-connectors/) concept page for the wider control set.

## Open questions

- Which Graph operation and API version will carry the full sync, and will it need more than ExternalItem.ReadWrite.OwnedBy? Watch the externalConnection reference.
- How does the full sync decide an item was deleted, and are items removed if a sync run ends early or fails part-way?
- Will administrators be able to start or watch a full sync from **Copilot > Connectors** in the Microsoft 365 admin center, or is it API-only?
- Does an item quota still apply to API-built connections, given that the API overview and the licensing page read differently?
- With the September CY2025 target passed and the status still In development, when will it ship? Watch Message center and the roadmap item.

<!-- rationale
risk: Low. The roadmap describes an option that developers and admins call to bring a custom connection's index in line with its source, deletions included; no source says existing connections change on arrival.
cost: Low. Microsoft's connector prerequisites page says indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licences; the known cost is developer and admin time. No charge specific to full sync is published.
impact: Low. Connector developers and AI administrators notice it; users only see search and Copilot results that drop items already deleted in the source system.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Risk assessment: Security & identity / applicability: Every app listed in configuration could run the planned full sync once that operation exists. | Found: Searched: externalConnection full sync configuration; Graph externalConnection full sync refresh synchronization custom connector permission. Read update reference and beta/v1.0 resource; no passage authorizes those apps for the unpublished operation. | Fix: Remove '; each one is an app that could run a full sync on that connection once the operation exists'. Retain the documented description of configuration.
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: Items deleted at source stay searchable today until the connector deletes them. | Found: If connection failures prevent delete detection from running reliably, items that aren't rediscovered during crawls for 28 days are automatically removed from the Microsoft 365 index to maintain compliance. | Fix: Replace the bullet with: 'For API-built custom connectors, Microsoft's item guide documents removal by deleting the externalItem using its unique identifier; the roadmap plans automatic source-deletion cleanup during the new full sync.' See https://learn.microsoft.com/graph/connecting-external-content-manage-items. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector
- [contradicted, blocker] Risk assessment: Change & support; Governance controls / behaviour: The admin centre's supported operations for partner and custom-built connections are connection deletion and name and description editing only. | Found: Admins can control the visibility of partner connectors in Copilot and Copilot Search via a simple toggle. | Fix: Replace the operations statements with: 'For partner connections, the supported-operations table lists connection deletion and name and description editing.' This limits the statement to the table rather than implying that the page documents no other operations. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector
- [unsupported, blocker] Governance controls / applicability: Microsoft documents control of the new full sync through the connector application's existing Graph permissions. | Found: Searched: Graph externalConnection full sync refresh synchronization custom connector permission. Opened connectors overview, API overview, beta/v1.0 resources and delete/update references; they do not establish authorization for the planned full sync. | Fix: Replace the first Governance controls sentence with: 'Microsoft Learn does not document an admin-centre setting for the planned full sync at the time of writing (November 2026). Rows 2 and 3 describe existing Graph operations, not confirmed authorization requirements for full sync.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Cost and licensing / behaviour: The Copilot connector APIs are a way to build a custom synced connector. | Found: You can create a synced Copilot connector in one of three ways: ... Use the Copilot connector APIs | Fix: Add https://learn.microsoft.com/plugins/overview-copilot-connector to sources; it supports the cited connectors-overview statements. | Source: https://learn.microsoft.com/plugins/overview-copilot-connector
- [supported, minor] Why it matters; rationale: impact / behaviour: Indexed connector content can surface in Microsoft Search and Copilot answers. | Found: Synced and federated connectors power Microsoft 365 Copilot and other Microsoft 365 intelligent experiences, such as Microsoft Search ... Users can find, summarize, and learn from this content using natural language prompts. | Fix: Add https://learn.microsoft.com/plugins/overview-copilot-connector to sources. | Source: https://learn.microsoft.com/plugins/overview-copilot-connector
- [supported, minor] Cost and licensing / cost: The Graph connectors API limits an application to 25 concurrent operations on a connection. | Found: An application is limited to 25 concurrent operations on a connection. | Fix: Add https://learn.microsoft.com/graph/api/resources/connectors-api-overview?view=graph-rest-1.0 to sources for the concurrency limit. | Source: https://learn.microsoft.com/graph/api/resources/connectors-api-overview?view=graph-rest-1.0
- [supported, minor] Scope; Governance controls / role: The connectors overview says an AI administrator registers the synced connector app and grants consent for its Graph permissions in Microsoft Entra admin center. | Found: To build a synced connector, an AI administrator must register an application and grant admin consent for required Microsoft Graph permissions in the Microsoft Entra admin center. | Fix: Add https://learn.microsoft.com/plugins/overview-copilot-connector to sources. | Source: https://learn.microsoft.com/plugins/overview-copilot-connector
- [supported, minor] Governance guidance: At rollout / behaviour: externalConnection.ingestedItemsCount gives the number of ingested items and refreshes every 15 minutes. | Found: The number of items ingested into a connection. This value is refreshed every 15 minutes. If the connection state is draft, then ingestedItemsCount will be null. | Fix: Replace the first At rollout bullet with: 'Run the first full sync against a test connection and compare ingestedItemsCount before and after; the beta externalConnection reference documents a 15-minute refresh and a null value for draft connections. Microsoft does not support beta APIs in production applications.' | Source: https://learn.microsoft.com/graph/api/resources/externalconnectors-externalconnection?view=graph-rest-beta
- [supported, minor] Governance controls / behaviour: The existing connector indexing operations are performed using an application's identity and application permissions. | Found: Requests to index data are performed on behalf of an application without the presence of a signed-in user via an access token with application permission. | Fix: Add https://learn.microsoft.com/graph/api/resources/connectors-api-overview?view=graph-rest-1.0 to sources. | Source: https://learn.microsoft.com/graph/api/resources/connectors-api-overview?view=graph-rest-1.0
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist's instruction to take stock of connections through Your Connections has no matching controls-table row. | Found: List custom connections under Copilot > Connectors > Your Connections ... Controls rows: full refresh; per-item deletion; additional allowed applications. | Fix: The Before rollout step that lists connections at Copilot > Connectors > Your Connections is not represented in the controls table. No new row is requested.
- [contradicted, minor] Governance guidance: At rollout / consistency: The checklist's instruction to monitor indexed content with the index browser has no matching controls-table row. | Found: Spot-check items deleted at source with the index browser ... Controls rows: full refresh; per-item deletion; additional allowed applications. | Fix: The At rollout step that checks indexed content with the index browser is not represented in the controls table. No new row is requested.
-->
