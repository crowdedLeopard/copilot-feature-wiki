---
title: "Microsoft 365 Copilot: Graph API options for icons, visibility, metadata and labels on custom connectors"
slug: "m365-copilot-copilot-extensibility-graph-api-enhancements-for-better-relevance-and-ux"
roadmapId: 502537
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans Graph API options for custom Copilot connectors: icons, visibility, connection metadata, property descriptions and semantic labels. Developer-facing; no admin action is requested, and the default is not stated."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Copilot connectors prerequisites list Microsoft Search for any Microsoft 365 plan and Copilot grounding for synced connectors with the Microsoft 365 Copilot add-on or Microsoft 365 E7. No price or meter specific to this item is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["m365-copilot","copilot-connectors","microsoft-graph","extensibility"]
sources:
  - title: "Microsoft 365 Roadmap item 502537"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502537"
    kind: "roadmap"
  - title: "property resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-property"
    kind: "learn"
  - title: "Register and manage schema for the Microsoft 365 Copilot connectors"
    url: "https://learn.microsoft.com/graph/connecting-external-content-manage-schema"
    kind: "learn"
  - title: "Copilot connector experiences"
    url: "https://learn.microsoft.com/graph/connecting-external-content-experiences"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Work with the Copilot connectors API"
    url: "https://learn.microsoft.com/graph/connecting-external-content-connectors-api-overview"
    kind: "learn"
  - title: "Manage access permissions for connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions"
    kind: "learn"
  - title: "Microsoft 365 Copilot connectors overview"
    url: "https://learn.microsoft.com/plugins/overview-copilot-connector"
    kind: "learn"
  - title: "Whether a connection's data is used in Copilot Search and Copilot Chat results (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "Semantic labels and property descriptions in a custom connector's schema (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-patch-schema"
    kind: "learn"
  - title: "Publish custom Copilot connectors to the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/graph/custom-connector-sdk-publish"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto","m365-admin-center-usage-reports-m365-copilot-connectors","m365-copilot-federated-copilot-connectors-in-m365-copilot","m365-copilot-copilot-people-connectors-introduces-people-data-ingestions-with-differentiat"]
controls:
  - governs: "Whether a connection's data is used in Copilot Search and Copilot Chat results"
    scope: "app"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connection > Copilot Visibility"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    api: null
    note: "AI administrator role. Learn describes this toggle for partner data sources; visible by default; changes can take up to 30 minutes."
  - governs: "Semantic labels and property descriptions in a custom connector built directly with the Graph API (not the SDK)"
    scope: "app"
    ui: null
    api:
      kind: "graph"
      call: "PATCH /v1.0/external/connections/{id}/schema"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-patch-schema"
    note: "Developer-side. The property resource documents labels and description; the request body carries them. SDK-built custom connectors have an Assign property labels page during admin-center publishing."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-10-01T23:01:01"
changes:
  - date: "2026-11-22"
    note: "New briefing: roadmap item 502537 still shows In development, while a May 19, 2026 Learn release note says the options are available."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 70 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: the schema call is described as setting descriptions and label mappings, not connector icons; three checklist steps with no controls row were removed; risk rationale reworded."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: the schema row is narrowed to connectors built directly with the Graph API, noting the SDK's Assign property labels page; removed an unbacked Permissions review bullet."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 62 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 62
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "daac07c2b651544ac75428ca9be905da"
---

## What's changing

The roadmap item says the Microsoft Graph API for custom connectors will provide options to configure icons, visibility, connection metadata, property descriptions and more semantic labels, for better relevance and user experience. A custom connector is one a developer builds with the Copilot connectors API to index content from their own data source.

Microsoft Learn already documents several of these pieces. The schema `property` resource has an optional `description` property of up to 200 characters, which Learn says helps Copilot map queries to properties. The `iconUrl` semantic label is listed among the labels a property can carry, and Learn lists `title`, `url` and `iconUrl` as labels to apply so content surfaces in Copilot. A Microsoft 365 Copilot release note dated May 19, 2026 states that developers can now configure icons, visibility settings, connection metadata, property descriptions and semantic labels for custom connectors. Another Learn page still says property description support is expected in Q4 2025. Learn does not say which API property or setting the roadmap's "visibility" and "connection metadata" refer to.

The roadmap record gives a target of December CY2025 and a status of In development, for Worldwide (Standard Multi-Tenant), on the Web platform, at General Availability. That target has passed while the status is unchanged, so treat the roadmap and the May 2026 release note as two statements to reconcile. Microsoft has not stated what happens on arrival or whether any admin switch applies, so the default state is Not stated.

## Why it matters

Custom connectors feed organisational content into Copilot, and the metadata decides how well that content is found and presented. Microsoft Learn says rich connection descriptions improve the likelihood of content being displayed in Copilot, and that semantic labels help Copilot understand and rank properties. Expect connector builders in your organisation to revisit their schemas, which changes what Copilot surfaces from those sources.

If nobody acts, no source says existing behaviour changes, so this is a review item rather than a deadline. The practical risk is indirect: better relevance makes content in a poorly permissioned connector easier to surface, so check connector access permissions before builders tune relevance.

## Risk assessment

**Data exposure**
- Labels, descriptions and icons are metadata about indexed content; the roadmap does not describe new data sources. Better relevance can still surface more of an over-shared connection: Learn warns that granting access to Everyone can lead to oversharing of sensitive content, and that deployed connectors are accessible tenant-wide unless external item security is locked down.

**Security & identity**
- The schema operation that carries labels and property descriptions lists ExternalConnection.ReadWrite.OwnedBy as its least privileged permission, with ExternalConnection.ReadWrite.All as the higher one. Whether the new options need further permissions is a question for the reference pages.

**Autonomy & actions**
- No change documented: the options describe how indexed content is labelled and shown, not new actions.

**Change & support**
- Schema changes take time to apply: Learn says creating a schema can take between 5 and 15 minutes, and recommends reindexing items after a schema update. Adding or removing a search capability requires reingestion.
- Learn says visibility changes can take up to 30 minutes to propagate across Copilot experiences, so expect delayed results when testing.
- Learn says assigning a label to a property that does not match its purpose degrades the experience, so wrongly mapped labels are a support source.

## Cost and licensing

Microsoft Learn publishes no price or meter specific to these options at the time of writing (November 2026). The Copilot connectors prerequisites page covers licensing for connectors generally: its table lists synced connectors for Microsoft Search under any Microsoft 365 plan, and synced connectors for Copilot grounding and agents under Microsoft 365 plus the Microsoft 365 Copilot add-on, or Microsoft 365 E7. It also says that if your organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply, and that indexing synced connector data incurs no extra cost for tenants with Microsoft 365 licences.

Items ingested through connections built with the Copilot connectors API consume your item quota, per the Copilot connectors API overview. Indirect cost is developer time to revise schemas and admin time to review connections. A rate or meter specific to this roadmap item is not yet published.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), the Web platform and General Availability as the release phase. The record lists no US Government clouds; that is a record fact, not a statement that the options are unavailable there.

The people affected are developers who build custom connectors with the Copilot connectors API, and the AI administrators who manage connections: Learn says you must be an AI administrator to access and manage Microsoft 365 Copilot connectors. The prerequisites page lists the Microsoft 365 Copilot add-on or Microsoft 365 E7 for Copilot grounding with synced connectors. Rollout mechanics are not stated.

## Governance guidance

### Before rollout
- Inventory custom connections in Copilot > Connectors > Your Connections and note who built each one (row 1).
- Ask connector builders which of icons, descriptions, labels and metadata they plan to set, and which Graph version they will call (row 2).

### At rollout
- Test relevance with a pilot group before widening, allowing up to 30 minutes after a visibility change.

### After rollout
- Revisit the Copilot Visibility toggle for any connection whose results look wrong (row 1).
- Watch the roadmap item and the Microsoft 365 Copilot release notes for the status change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a connection's data is used in Copilot Search and Copilot Chat results</strong><br><small>App</small><br><small class="controls__note">AI administrator role. Learn describes this toggle for partner data sources; visible by default; changes can take up to 30 minutes.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection › Copilot Visibility <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Semantic labels and property descriptions in a custom connector built directly with the Graph API (not the SDK)</strong><br><small>App</small><br><small class="controls__note">Developer-side. The property resource documents labels and description; the request body carries them. SDK-built custom connectors have an Assign property labels page during admin-center publishing.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/external/connections/{id}/schema</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-patch-schema" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Copilot Visibility toggle is described on Learn for partner data sources, and turning it off excludes the connection from Copilot Search and Copilot Chat results without affecting declarative agents and their data. The admin centre also shows schema recommendations for published custom connectors; these are a view of missing labels. Property descriptions and semantic label mappings, including the iconUrl label, are set by the developer through the Graph schema call in row 2. Whether a connection-level icon can be set is an open question below. Learn documents the Microsoft 365 admin center role needed as AI administrator.

## Open questions

- Which API properties or settings does the roadmap mean by "visibility" and "connection metadata"? Watch the externalConnection resource page and the roadmap item.
- Does the May 19, 2026 release note describe this roadmap item, and when will its status leave In development?
- Does the admin centre's Copilot Visibility toggle apply to custom connectors built with the Graph API, and will a Graph property control it?
- Will a connection-level icon be added, or is the `iconUrl` property label the only icon setting? Watch the Copilot connectors API pages.
- Is any licence or meter specific to these options planned? Watch the Copilot connectors prerequisites page.

<!-- rationale
risk: Low. The roadmap describes display and relevance metadata for custom connectors, not new data sources or actions; review existing connector access permissions before builders tune relevance.
cost: Low. Only admin and developer time is known; Microsoft Learn publishes no charge or meter specific to these options, and connector licensing follows the Copilot connectors prerequisites page.
impact: Low. Developers and AI administrators of custom connectors notice first; end users may see different icons, titles and relevance in Copilot results once connector builders apply the options.
-->
