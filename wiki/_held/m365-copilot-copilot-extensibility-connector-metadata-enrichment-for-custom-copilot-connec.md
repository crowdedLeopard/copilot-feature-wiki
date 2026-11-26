---
title: "Microsoft 365 Copilot connectors: descriptive metadata for custom connectors and their schema properties"
slug: "m365-copilot-copilot-extensibility-connector-metadata-enrichment-for-custom-copilot-connec"
roadmapId: 498918
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Developers and admins can describe a custom Copilot connector and its schema properties so Copilot interprets the content better. Optional, set through Microsoft Graph; no admin action is required, but descriptions are worth reviewing."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer","Web"]
targetDate: "September CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Connector grounding in Copilot is included with Microsoft 365 Copilot licences, and indexing synced connector data has no extra cost for tenants with Microsoft 365 licences. Microsoft publishes no licence or charge specific to the metadata."
audiences: ["m365-admin","service-owner"]
tags: ["copilot-connectors","m365-copilot","microsoft-graph","extensibility"]
sources:
  - title: "Microsoft 365 Roadmap 498918"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498918"
    kind: "roadmap"
  - title: "externalConnection resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-externalconnection?view=graph-rest-1.0"
    kind: "learn"
  - title: "property resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-property?view=graph-rest-1.0"
    kind: "learn"
  - title: "Enhance Copilot discovery of connectors content"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/enhance-copilot-discovery"
    kind: "learn"
  - title: "Manage connector connections"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Microsoft Graph what's new history"
    url: "https://learn.microsoft.com/graph/whats-new-earlier"
    kind: "learn"
  - title: "Work with the Copilot connectors API"
    url: "https://learn.microsoft.com/graph/connecting-external-content-connectors-api-overview"
    kind: "learn"
  - title: "Build Microsoft 365 Copilot connectors for people data"
    url: "https://learn.microsoft.com/plugins/build-connectors-with-people-data"
    kind: "learn"
  - title: "Editing an existing custom connection's description through Microsoft Graph (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "Descriptions of a custom connection's schema properties (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-patch-schema?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["copilot-connectors","m365-copilot-copilot-extensibility-graph-api-enhancements-for-better-relevance-and-ux","m365-copilot-copilot-extensibility-schema-recommendations-for-custom-connectors-in-m365-ad","m365-copilot-copilot-extensibility-delete-schema-properties-via-copilot-connector-apis","m365-copilot-copilot-extensibility-adminx-pre-setup-guides-editability-actionable-errors-a"]
controls:
  - governs: "Editing an existing custom connection's description through Microsoft Graph"
    scope: "other"
    ui: null
    api:
      kind: "graph"
      call: "PATCH /v1.0/external/connections/{connectionsId}"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update?view=graph-rest-1.0"
    note: "The request body sets description. Needs ExternalConnection.ReadWrite.OwnedBy or ExternalConnection.ReadWrite.All. Per connection."
  - governs: "Descriptions of a custom connection's schema properties"
    scope: "other"
    ui: null
    api:
      kind: "graph"
      call: "PATCH /v1.0/external/connections/{id}/schema"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-patch-schema?view=graph-rest-1.0"
    note: "Each property object in the request body sets description, up to 200 characters. Schema creation can take 5 to 15 minutes."
  - governs: "Tenant-wide switch for connector metadata enrichment"
    scope: "tenant"
    ui: null
    api: null
    note: "Metadata is set per connection by its developer or managing app."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2025-07-25T22:15:54"
changes:
  - date: "2026-11-26"
    note: "New briefing: connector category and schema property descriptions are documented in Microsoft Graph; alternate names and common actions are not yet documented."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 63 statements contradicted, 5 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected after review: removed unsupported claims about unchanged data access, source-system actions and full crawls after schema edits; trimmed checklist steps without control rows; added the people-data source and the person* description caveat."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 69
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "d87e7e92c9937c781b37f81ccb8baaa9"
---

## What's changing

Microsoft plans to let admins and developers add descriptive metadata to custom Copilot connectors and their schema properties, so that Copilot's model has more context about what a connection holds. The roadmap item lists four kinds of metadata: alternate names, data source categories and common actions for the connector, and descriptions for schema properties.

Two of these are documented in the Microsoft Graph connectors API at the time of writing (November 2026). The **externalConnection** resource has a **contentCategory** property that "specifies the domain category of the content" with values such as `knowledgeBase`, `wikis`, `crm`, `qna` and `taskManagement`; it is optional and defaults to `uncategorized`. Each schema **property** has an optional **description** of up to 200 characters, which Microsoft says helps Copilot "interpret queries and accurately map them to properties". For people-data connectors, descriptions on properties with `person*` labels are ignored ([Build Microsoft 365 Copilot connectors for people data](https://learn.microsoft.com/plugins/build-connectors-with-people-data#recommendations-for-people-connectors)). Microsoft Learn documents no connector-level property for alternate names or common actions; its guidance instead suggests putting alternative names in the connection description.

The roadmap record gives the status as In development, with a target of September CY2025 for General Availability and Targeted Release, on Web and Developer platforms, in the Worldwide (Standard Multi-Tenant) cloud. Microsoft Graph's change log records **contentCategory** as added in February 2026 under "New and generally available", so Learn already documents part of what the roadmap still lists as in development.

## Why it matters

For a tenant running custom connectors, this is a relevance lever. The documented properties are optional, so connections that nobody updates stay `uncategorized` and keep the descriptions they have. Microsoft documents contentCategory and property descriptions as relevance aids.

The service-owner angle is ownership of the text. Connection and property descriptions become input that shapes when Copilot draws on a connector, so they deserve the same review as any other content Copilot reads. A vague or inaccurate description can make Copilot reach for the wrong source, and Microsoft requires connectors that carry people data to set the category to `people`.

## Risk assessment

**Data exposure**
- The documented metadata describes the connection and its schema properties.
- Connection and property descriptions are written for Copilot's model, so do not put internal system names or other text in them that users should not see in an answer. Microsoft has not said whether property descriptions can appear to users.

**Security & identity**
- Changing a connection or its schema through Graph needs the `ExternalConnection.ReadWrite.OwnedBy` or `ExternalConnection.ReadWrite.All` permission, so whoever controls the connector's app controls what Copilot is told about its content.

**Autonomy & actions**
- The documented contentCategory and property description fields provide context for relevance and query interpretation. The roadmap's "common actions" metadata is not described on Learn, so what it would tell Copilot to do is not yet documented.

**Change & support**
- A schema update can take between 5 and 15 minutes to be created.

## Cost and licensing

- **Licence:** the Copilot connectors [prerequisites page](https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites) says connector grounding in Copilot is included with Microsoft 365 Copilot licences and "no extra charges apply". Synced connectors grounding Copilot need Microsoft 365 plus the Microsoft 365 Copilot add-on, or Microsoft 365 E7; a Copilot Studio licence or Microsoft 365 Copilot pay-as-you-go covers agents only, not Copilot grounding.
- **Meter:** the same page says indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licences. Microsoft publishes no meter or charge for the metadata itself.
- **Indirect cost:** developer time to write category and property descriptions.
- **Not yet published:** any licence or charge specific to alternate names or common actions.

## Scope

- **Who:** custom Copilot connectors built against the Microsoft Graph connectors API. The admin centre documents name and description editing for connectors by Microsoft and by partners; it lists no custom-connector column.
- **Roles:** managing connectors in the Microsoft 365 admin center needs the AI administrator role. Graph calls need the `ExternalConnection.ReadWrite.OwnedBy` or `.All` permission.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists.
- **Platforms:** Web and Developer, per the record.
- **Prerequisite:** a schema with up to 128 properties registered on the connection.

## Governance guidance

### Before rollout
- Agree a description standard with connector developers, using Microsoft's guidance: content type, scope, keywords and alternative names.

### At rollout
- Ask developers to add a **description** to each queryable schema property through the schema update call, within the 200-character limit.

### After rollout
- Review Copilot answers that cite custom connector content to see whether the right connection is being chosen, and correct its description where not.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Editing an existing custom connection's description through Microsoft Graph</strong><br><small class="controls__note">The request body sets description. Needs ExternalConnection.ReadWrite.OwnedBy or ExternalConnection.ReadWrite.All. Per connection.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/external/connections/{connectionsId}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Descriptions of a custom connection's schema properties</strong><br><small class="controls__note">Each property object in the request body sets description, up to 200 characters. Schema creation can take 5 to 15 minutes.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/external/connections/{id}/schema</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-patch-schema?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for connector metadata enrichment</strong><br><small>Tenant</small><br><small class="controls__note">Metadata is set per connection by its developer or managing app.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant-wide setting that turns this metadata on or off at the time of writing (November 2026); it is set per connection by whoever can write to that connection through Graph. The Microsoft 365 admin center's **Edit description** option is documented for Microsoft-built connectors, and Microsoft directs on-premises connector descriptions to the API. The practical control is therefore which apps hold the `ExternalConnection.ReadWrite.OwnedBy` or `.All` permission. The update call for a connection documents **name**, **description** and **configuration** as updatable; it does not list **contentCategory**.

## Open questions

- When will the roadmap's connector-level alternate names and common actions appear in the Graph connectors API, and as which properties? Watch the Microsoft Graph change log.
- Which call sets **contentCategory** on an existing connection, given that the update reference lists only name, description and configuration?
- Will the Microsoft 365 admin center let AI administrators edit the metadata of existing custom Graph connections, as the roadmap's mention of admins suggests?
- Can schema property descriptions appear to users in Copilot answers or citations?

<!-- rationale
risk: Low. The metadata describes a custom connection and its schema properties, though misleading descriptions could steer which content Copilot uses.
cost: Low. Connector grounding is included with Microsoft 365 Copilot licences; the cost is developer and admin time to write and maintain descriptions. Nothing specific to this feature is published.
impact: Low. Connector developers and AI administrators do the work; users see it only indirectly, as Copilot answers that draw on custom connector content.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters / default: Connections that nobody updates stay uncategorized. | Found: Copilot connectors that contain people data must have the value people in the contentCategory property of the externalConnections API. | Fix: Replace 'The documented properties are optional, so connections that nobody updates stay uncategorized and keep the descriptions they have' with 'The documented properties are optional. The default category is uncategorized when no category is supplied; descriptions need not be changed.' This avoids implying that an existing explicitly categorized connection is uncategorized. | Source: https://learn.microsoft.com/plugins/build-connectors-with-people-data
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; controls[1].note; Risk assessment / behaviour: The v1.0 schema property resource has a human-readable description. | Found: description | String | Specifies a human-readable description that explains the purpose, usage, or guidance related to the property. | Fix: After the paragraph describing the documented fields, add: 'The schema design guide still says support for adding property descriptions to custom connectors was expected in Q4 2025, while the v1.0 property reference now documents description.' Cite https://learn.microsoft.com/graph/connecting-external-content-manage-schema. | Source: https://learn.microsoft.com/graph/api/resources/externalconnectors-property?view=graph-rest-1.0
-->
