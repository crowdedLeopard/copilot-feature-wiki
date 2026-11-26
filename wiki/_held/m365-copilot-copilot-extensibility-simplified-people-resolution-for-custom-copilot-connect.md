---
title: "Microsoft 365 Copilot connectors: people properties in custom connectors resolved to Microsoft Entra users"
slug: "m365-copilot-copilot-extensibility-simplified-people-resolution-for-custom-copilot-connect"
roadmapId: 498912
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Developers of custom Copilot connectors can tag people fields with an email or external ID and have them matched to Microsoft Entra users, so Copilot attributes content to the right person. Optional for developers; admins review fit."
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
  notes: "Copilot grounding on synced connector content comes with the Microsoft 365 Copilot add-on (or Microsoft 365 E7); Microsoft 365 alone covers Microsoft Search only. Nothing specific to people resolution is published."
audiences: ["m365-admin","service-owner","security"]
tags: ["copilot-connectors","m365-copilot","extensibility","microsoft-graph","entra-id","identity"]
sources:
  - title: "Microsoft 365 Roadmap 498912"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498912"
    kind: "roadmap"
  - title: "principal resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-principal?view=graph-rest-1.0"
    kind: "learn"
  - title: "property resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-property?view=graph-rest-1.0"
    kind: "learn"
  - title: "acl resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-acl?view=graph-rest-1.0"
    kind: "learn"
  - title: "externalConnection resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-externalconnection?view=graph-rest-1.0"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Work with the Copilot connectors API"
    url: "https://learn.microsoft.com/graph/connecting-external-content-connectors-api-overview"
    kind: "learn"
  - title: "Create, update, and delete connections in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/connecting-external-content-manage-connections"
    kind: "learn"
  - title: "Build Microsoft 365 Copilot connectors for people data"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/build-connectors-with-people-data"
    kind: "learn"
  - title: "Whether a connection's content is used in Copilot Search and Copilot Chat (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "Removing a custom connection and every item it indexed (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["copilot-connectors","m365-copilot-copilot-extensibility-graph-api-enhancements-for-better-relevance-and-ux","m365-copilot-copilot-extensibility-schema-recommendations-for-custom-connectors-in-m365-ad","m365-copilot-copilot-people-connectors-introduces-people-data-ingestions-with-differentiat"]
controls:
  - governs: "Whether a connection's content is used in Copilot Search and Copilot Chat"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connection > Copilot Visibility"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    api: null
    note: "AI administrator. Documented for partner data sources; crawling continues while off, and declarative agents are not affected. Scope is one connection."
  - governs: "Removing a custom connection and every item it indexed"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connection"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    api:
      kind: "graph"
      call: "DELETE /v1.0/external/connections/{connectionsId}"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete?view=graph-rest-1.0"
    note: "The admin centre page lists Delete a connection as supported for partner connectors without naming the button. The API needs ExternalConnection.ReadWrite.OwnedBy or ExternalConnection.ReadWrite.All."
  - governs: "Admin switch for people resolution in custom connectors"
    scope: "tenant"
    ui: null
    api: null
    note: "The connector developer chooses principal or principalCollection in the schema; no tenant or connection setting over it is documented."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2025-07-25T22:15:54"
changes:
  - date: "2026-11-26"
    note: "New briefing: people properties in custom Copilot connectors, mapped to the documented principal property types, with visibility and delete controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 58 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 54
  unconfirmed: 3
  contradicted: 1
  attempts: 1
  hash: "593bcbe6bbf4ce381ce3abcc1aca1c8d"
---

## What's changing

Microsoft plans to let custom Copilot connectors match people named in third-party data (an email address or a user ID from the source system) to the corresponding Microsoft Entra ID users. The roadmap item states that developers will no longer need their own Microsoft Graph lookups or a strict dependency on Entra object IDs, and that Copilot search and chat will attribute people more accurately across connected systems.

Microsoft Learn does not describe this roadmap item by name. The closest documented match is the Microsoft Graph connector reference, which defines `principal` and `principalCollection` property types "used to add people-related properties to items indexed by an externalConnection". A `principal` carries an `externalId` that "could also be an email associated with the person on the external source", alongside optional `entraId`, `email` and `upn` fields. Microsoft says that using these types "instead of a string or string collection for people related properties while ingesting ExternalItems can provide better and more relevant results in Copilot Search or chat". The developer chooses the type when registering the connection's schema. Microsoft does not describe how the service matches an `externalId` or email to a user.

The roadmap record lists the item as In development, with a target of September CY2025, for General Availability and Targeted Release, on the Developer and Web platforms, in the Worldwide (Standard Multi-Tenant) cloud. That target has passed and the record has not been updated since July 2025, while the Graph v1.0 reference already lists `principal` and `principalCollection` as property types. Microsoft has not stated whether connections that already use string properties for people change on arrival.

## Why it matters

For a service owner, this moves people matching for custom connectors from the developer's code into the platform. That removes a source of brittle integration code, but it also means the accuracy of "who wrote this ticket" or "who owns this record" in Copilot answers now depends on a match Microsoft performs and has not described. Until Microsoft documents the matching rules, treat people whose addresses in the source system differ from their Entra user principal names (UPNs) as a group to test.

It does not, on the documentation available, change who can see connector content. Access to each indexed item is still set by its access control list, whose reference describes Entra users by object ID. Microsoft has not stated what happens on arrival, and no source says existing connections change, so the practical step is to agree with connector developers whether and when to adopt the new property types.

## Risk assessment

**Data exposure**
- People fields in a `principal` property can carry a person's external name, email and UPN into the index. Treat these fields as visible to anyone who can see the item; the per-connection **Copilot Visibility** toggle is the admin-side way to withhold a whole connection.
- No change to item permissions is documented: the access control reference still sets Entra users by object ID.

**Security & identity**
- A wrong match attributes content to the wrong colleague, which matters where answers are used to find an owner or approver. Microsoft documents no matching rules or audit of matches for this capability at the time of writing (November 2026).

**Autonomy & actions**
- No change: the capability labels indexed items and takes no actions.

**Change & support**
- Questions about "wrong person" in Copilot answers will land with whoever owns the custom connector. Connector developers, not the Microsoft 365 admin centre, decide the property type, so support needs a named owner for each custom connection.

## Cost and licensing

- **Licence.** The connectors prerequisites page licenses Copilot grounding on synced connector content with the Microsoft 365 Copilot add-on or Microsoft 365 E7; Microsoft 365 alone supports synced connectors in Microsoft Search only. It states: "If your organization has Microsoft 365 Copilot licenses, connector grounding in Copilot is included, and no extra charges apply."
- **Indexing.** The same page says indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licences. The Copilot connectors API overview says items ingested through connections built with the APIs consume the tenant's item quota, and links to the licensing and pricing page. The two pages are worded differently; check your tenant's quota position before a large re-ingestion.
- **Indirect cost.** Developer time to move people fields to the new types, and a likely re-ingestion of items for existing connections.
- **Not yet published.** A price, meter or licence specific to people resolution in custom connectors.

## Scope

- **Who builds it:** developers of custom Copilot connectors that use the Microsoft Graph connectors API.
- **Who manages connections:** AI administrators, in the Microsoft 365 admin center.
- **Who sees the result:** users with Copilot grounding on connector content (see Cost and licensing).
- **Cloud:** Worldwide (Standard Multi-Tenant) on the roadmap record.
- **Platforms:** Developer and Web.
- **Rollout:** General Availability and Targeted Release, target September CY2025, status In development.
- **Out of scope as documented:** connectors for people data, whose build guide says the `principal` and `principalCollection` types aren't currently supported.

## Governance guidance

### Before rollout
- List the custom connections in Microsoft 365 admin center > Copilot > Connectors > Your Connections and record the developer or team that owns each one.
- Ask each owner whether their connector stores people as plain strings today and whether they plan to move to `principal` or `principalCollection` properties.
- Compare the email addresses held in each source system with users' Entra UPNs and primary email, and note groups (contractors, merged domains) likely to mismatch.

### At rollout
- Test a changed connector in a non-production connection first and check a sample of Copilot answers for correct people attribution.
- Keep the **Copilot Visibility** toggle off for a re-ingested connection until the attribution sample is acceptable, where that toggle is offered for the connection.

### After rollout
- Review user reports of wrong attribution with the connector owner and correct the source data or the fields the connector sends.
- Check the Your Connections tab for Failed states after schema changes; permanent failures are also posted to Service health.
- Delete connections that are replaced by a rebuilt connector so their items leave the index.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a connection's content is used in Copilot Search and Copilot Chat</strong><br><small class="controls__note">AI administrator. Documented for partner data sources; crawling continues while off, and declarative agents are not affected. Scope is one connection.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection › Copilot Visibility <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Removing a custom connection and every item it indexed</strong><br><small class="controls__note">The admin centre page lists Delete a connection as supported for partner connectors without naming the button. The API needs ExternalConnection.ReadWrite.OwnedBy or ExternalConnection.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>DELETE /v1.0/external/connections/{connectionsId}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin switch for people resolution in custom connectors</strong><br><small>Tenant</small><br><small class="controls__note">The connector developer chooses principal or principalCollection in the schema; no tenant or connection setting over it is documented.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Managing Copilot connectors in the Microsoft 365 admin center requires the AI administrator role. The **Copilot Visibility** toggle is documented under "Manage visibility of partner data sources in Copilot"; the page groups custom-built connectors with partner connectors for admin operations but does not say in terms that the toggle appears for custom connections. Turning visibility off excludes the connection from Copilot Search and Copilot Chat while crawls continue, and the page says the change does not affect declarative agents and their data. The property type that enables people resolution is set in the connector's schema by its developer; Microsoft Learn documents no admin setting over it at the time of writing (November 2026).

## Open questions

- Is this roadmap item delivered by the `principal` and `principalCollection` property types already in the Graph v1.0 reference, or is further matching behaviour still to come? Watch the roadmap item and the Graph connectors changelog.
- Which Entra attributes does the service match an `externalId` or email against, and what happens to an unmatched or ambiguous person?
- Will the same resolution extend to item access control lists, which today take Entra object IDs?
- Do existing connections that store people as strings change on arrival, or only after the developer updates the schema?
- Is there an audit record or report of people matches that an administrator can review?

<!-- rationale
risk: Low. The change concerns who indexed content is attributed to, not who can read it: the connector access control reference still keys Microsoft Entra users by object ID. A wrong match would mislabel a person in Copilot answers.
cost: Low. Connector grounding in Copilot is included with Microsoft 365 Copilot licences; the only cost the sources show is developer and admin time. No separate price for this capability is published.
impact: Low. Connector developers and AI administrators notice it; users see only better people attribution in answers drawn from custom connectors that adopt it.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] What's changing: optional entraId, email and upn / behaviour: The entraId, email and upn fields are optional. | Found: Searched: "principal" "externalId" "optional" Copilot connector resolution. Read the full v1.0 principal and property references: principal lists these fields but does not state their optionality; search returned no passage establishing it. | Fix: Remove 'optional' from 'alongside optional entraId, email and upn fields'. The principal reference at https://learn.microsoft.com/graph/api/resources/externalconnectors-principal?view=graph-rest-1.0 lists the fields without stating which are required.
- [unsupported, major] Governance controls: property type that enables people resolution / behaviour: The schema property type enables the roadmap's people resolution. | Found: Searched: "Simplified People Resolution" "custom" Copilot connectors. Read principal, property and connector API references; none identifies these types as enabling automatic identity resolution. | Fix: Replace 'The property type that enables people resolution is set in the connector's schema by its developer' with 'The developer sets people property types in the connector schema; Microsoft has not identified these types as the implementation of the roadmap item.' This preserves the uncertainty already stated in Open questions.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The capability labels indexed items and takes no actions. | Found: Searched: Copilot connector principal people resolution actions read-only external system. Read principal, connector API and overview excerpts: people metadata and read-only Chat by default are documented, not a categorical no-actions guarantee for this capability. | Fix: Replace 'No change: the capability labels indexed items and takes no actions' with 'The roadmap describes identity resolution and people attribution, not new actions.' Do not turn the absence of announced actions into a guarantee about the undocumented implementation.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure: withhold a whole connection / applicability: Copilot Visibility provides an admin-side way to withhold a whole connection. | Found: When the visibility is off, the connector is excluded from all Copilot Search and Copilot Chat results and responses. ... without affecting declarative agents and their data. | Fix: Replace 'the per-connection Copilot Visibility toggle is the admin-side way to withhold a whole connection' with 'where offered, the per-connection Copilot Visibility toggle withholds the connection from Copilot Search and Copilot Chat, but does not affect declarative agents and their data'. This makes the limitation already given elsewhere clear in the exposure advice. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector
- [supported, minor] controls[0].note; Scope; Governance controls / role: Managing connectors in the Microsoft 365 admin center requires AI administrator. | Found: To access and manage your Microsoft 365 Copilot connectors, you must be an AI administrator for your organization. | Fix: Add to this role sentence: 'The Graph connection-management guide instead says a search admin can view and manage all tenant connections.' That guide is already cited: https://learn.microsoft.com/graph/connecting-external-content-manage-connections. Keep the AI administrator requirement from the admin-center guide. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector
- [supported, minor] Cost and licensing: Indirect cost; Governance guidance / behaviour: Moving existing items to updated schema properties is likely to involve re-ingestion. | Found: After updating your schema, we recommend reindexing items to align them with the latest schema. Without reingestion, item behavior might be inconsistent. | Fix: Add https://learn.microsoft.com/graph/connecting-external-content-manage-schema to sources for the re-ingestion advice. Keep 'likely'; the source recommends reindexing after schema changes rather than stating that this particular type migration is supported or always requires it. | Source: https://learn.microsoft.com/graph/connecting-external-content-manage-schema
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist tells readers to monitor connection states, but the controls table has no monitoring row. | Found: Check the Your Connections tab for Failed states after schema changes; permanent failures are also posted to Service health. The table has visibility, deletion and an absent people-resolution switch, but no connection-state monitoring control. | Fix: The 'Check the Your Connections tab for Failed states' checklist step has no corresponding controls row. Move that factual monitoring sentence from the checklist to the Governance controls prose; do not add a row.
- [supported, minor] title; summary / record: The title and summary describe matching as an available capability rather than explicitly as Microsoft's plan. | Found: "status": "In development". This feature enables connectors to resolve external identities ... to their corresponding Microsoft Entra ID (Azure AD) identities. | Fix: Change the title to 'Microsoft 365 Copilot connectors: planned people resolution for custom connectors'. Replace the summary with 'Microsoft plans to let custom Copilot connectors resolve external emails or user IDs to Entra users for better people attribution. Developers should review fit; rollout behaviour is not stated.' The body already distinguishes the plan from the published property references.
-->
