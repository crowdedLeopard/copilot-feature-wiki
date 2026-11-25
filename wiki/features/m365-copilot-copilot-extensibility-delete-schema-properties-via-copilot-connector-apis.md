---
title: "Microsoft 365 Copilot connectors: delete schema properties with the connector APIs"
slug: "m365-copilot-copilot-extensibility-delete-schema-properties-via-copilot-connector-apis"
roadmapId: 498919
topic: "governance"
products: ["Microsoft 365 admin center","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans an API to delete individual schema properties from custom Copilot connectors without full re-ingestion. It is a developer-side change; Learn does not yet document the operation, so administrators need not act."
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
  notes: "The connectors prerequisites page says the tenant must have Microsoft 365 licences, and that the surfaces and connector types available depend on licensing. Nothing specific to property deletion is published."
audiences: ["m365-admin","service-owner"]
tags: ["copilot-connectors","microsoft-graph","extensibility","m365-copilot"]
sources:
  - title: "Microsoft 365 Roadmap 498919"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498919"
    kind: "roadmap"
  - title: "Register and manage schema for the Microsoft 365 Copilot connectors"
    url: "https://learn.microsoft.com/graph/connecting-external-content-manage-schema"
    kind: "learn"
  - title: "Manage search schema (preview)"
    url: "https://learn.microsoft.com/microsoftsearch/manage-search-schema"
    kind: "learn"
  - title: "Update schema"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-schema-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
videos: []
related: ["copilot-connectors","m365-copilot-copilot-extensibility-schema-recommendations-for-custom-connectors-in-m365-ad","m365-copilot-copilot-extensibility-graph-api-enhancements-for-better-relevance-and-ux"]
controls:
  - governs: "Schema changes to a connector connection through the admin centre (existing route)"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Customization > Schema > Copilot connectors schema > View details > connection > Customize schema"
      docs: "https://learn.microsoft.com/microsoftsearch/manage-search-schema"
    api:
      kind: "graph"
      call: "PATCH /beta/external/connections/{connectionId}/schema"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-schema-update?view=graph-rest-beta"
    note: "Today's alternative, not the deletion control. The admin page covers Microsoft-built connectors and says an existing property of a published connection cannot be deleted. The API page documents no property deletion; it is /beta."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-07-25T22:15:54"
changes:
  - date: "2026-11-25"
    note: "New briefing: roadmap item for deleting schema properties in custom Copilot connectors; Learn does not yet document the operation."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 44 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 43
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "1a87b7c797d983ef094cb15fd1b4bb80"
---

## What's changing

The roadmap item states that Microsoft is adding support for property deletion in custom Copilot connectors. Using the Copilot connector APIs, a developer or admin would delete individual schema properties that are no longer needed, keep the schema current and avoid full re-ingestion of the connector's content.

Microsoft Learn does not describe this operation yet, so what follows about behaviour is the roadmap's description. The Learn page on schema update capabilities lists adding a property, adding or removing a search capability, adding or removing an alias and adding or removing a semantic label, and recommends reindexing items after an update. It lists no way to delete a property. A separate Learn page for Microsoft-built connectors states: "You cannot delete an existing property for a published connection. To remove a property, you must delete and recreate a connection." That page is about Microsoft-built connectors, not the custom connectors this item covers.

The roadmap record gives the status as In development, with a target of September CY2025 for Worldwide (Standard Multi-Tenant), release phases General Availability and Targeted Release, and platforms Developer and Web. The target month is before the date of writing (November 2026) and the record still reads In development, so treat the date as a plan that has passed.

## Why it matters

A connector schema is a flat list of properties that defines how content is used across Microsoft 365 Copilot experiences. Today the documented route for removing a property is to delete and recreate the connection (Microsoft-built connectors) or to work within the schema update capabilities listed on Learn, so a deletion API would be a maintenance control for connector owners rather than something that reaches users.

Microsoft has not stated what happens on arrival or whether tenants must do anything, and no source says existing behaviour changes. Expect the effect to be limited to the teams that own custom connectors. If you run connectors, agree who may call the schema API before the capability appears, because removing a property is a schema change that other things may rely on.

## Risk assessment

**Data exposure**
- Removing a property from the schema changes what the connection exposes for search, query and retrieval. The roadmap item describes no new data source and no change to who can see indexed items. Microsoft has not described what happens to values already ingested for a deleted property; confirm this on a test connection before using it on a production one.

**Security & identity**
- The existing schema update API (PATCH /external/connections/{connectionId}/schema) lists ExternalConnection.ReadWrite.OwnedBy as the least privileged application permission and ExternalConnection.ReadWrite.All as the higher one. Review which apps hold these permissions, because the same permission set may govern the new deletion route; Microsoft has not said whether it does.

**Autonomy & actions**
- No change documented: the roadmap item describes a manual API call by a developer or admin, and no autonomous behaviour.

**Change & support**
- Anything that refers to a property by name, such as aliases, semantic labels, refinable filters or declarative agent instructions that quote property descriptions, may need updating once a property is gone. The schema page tells declarative agent owners to include property descriptions in their instruction set.
- The roadmap says deletion avoids full re-ingestion, but the Learn schema page says adding or removing a search capability requires reingestion. Do not assume deletion needs none until Learn documents it.

## Cost and licensing

No licence or meter specific to property deletion is published. The connectors prerequisites page says: "Your tenant must have Microsoft 365 licenses", and that the surfaces available (Microsoft Search, Microsoft 365 Copilot grounding, Copilot Chat agents) and the connector types you can deploy depend on your organisation's licensing. It also says indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licences. That page is about synced and federated connectors and does not name this feature.

The indirect cost is developer and admin time to update connector code and to re-check the schema, aliases and agent instructions after a property is removed. No credit rate, quota or cap for this operation is published at the time of writing (November 2026).

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) as the cloud, General Availability and Targeted Release as release phases, and Developer and Web as platforms, with the products Microsoft 365 admin center and Microsoft Copilot (Microsoft 365). It targets custom Copilot connectors.

The prerequisites page says that to configure and deploy Copilot connectors you must be an AI administrator in the Microsoft 365 admin center. The roles and permissions for calling a deletion API are not documented; the existing Update schema reference lists ExternalConnection.ReadWrite.OwnedBy and ExternalConnection.ReadWrite.All for its operation. That reference is a /beta page, which Microsoft marks as subject to change and not supported for production use.

## Governance guidance

### Before rollout
- Inventory the custom connectors in your tenant and name an owner for each, as the person who would approve a schema change.
- List which apps hold ExternalConnection.ReadWrite.OwnedBy or ExternalConnection.ReadWrite.All, using your app registration records, so you know who could call the schema API.
- Ask connector developers which aliases, semantic labels and declarative agent instructions refer to properties they might want to remove.

### At rollout
- Check the Learn schema update capabilities page for a documented delete operation before anyone relies on the roadmap description.
- Test property removal on a non-production connection first, and confirm how items already ingested behave.
- Record each schema change in your change process, since the Customize schema page in the admin center is the documented admin route for Microsoft-built connectors.

### After rollout
- Re-test the searches, filters and agent prompts that used the removed property.
- Reindex items if Learn or the connector owner recommends it; the schema page recommends reindexing after a schema update.
- Watch the roadmap item and Message center for a rollout date, since the target of September CY2025 has passed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Schema changes to a connector connection through the admin centre (existing route)</strong><br><small class="controls__note">Today's alternative, not the deletion control. The admin page covers Microsoft-built connectors and says an existing property of a published connection cannot be deleted. The API page documents no property deletion; it is /beta.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Customization › Schema › Copilot connectors schema › View details › connection › Customize schema <a href="https://learn.microsoft.com/microsoftsearch/manage-search-schema" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/external/connections/{connectionId}/schema</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-schema-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The table gives the schema routes Microsoft documents today. Neither documents property deletion, and the admin centre page states that an existing property of a published connection cannot be deleted for Microsoft-built connectors.

Microsoft Learn documents no separate tenant setting for allowing or blocking property deletion at the time of writing (November 2026). Permissions on the app that calls the API, and the AI administrator role for admin-centre configuration, are the controls the pages describe.

## Open questions

- Which API operation will delete a schema property, and will it appear in Microsoft Graph v1.0 or only in /beta? Watch the Update schema reference and the schema update capabilities page on Learn.
- What happens to values already ingested, and to aliases or semantic labels attached to a property when it is deleted?
- Does deletion require reingestion in any case, given that the Learn schema page says adding or removing a search capability does?
- Which permissions or roles will be needed to delete a property, and will the Microsoft 365 admin center offer the same action for custom connectors?
- Is any default or rollout behaviour planned? Microsoft has not stated one; watch Message center and the roadmap item.

<!-- rationale
risk: Low. The roadmap describes a developer API for editing the schema of custom connectors; it adds no new data source, and Microsoft has not stated that it changes any default.
cost: Low. The only cost the sources show is developer and admin time; the prerequisites page says indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licences. Nothing specific to this feature is published.
impact: Low. Connector developers and the admins who own the connectors notice it; end users see a change only if a deleted property was one they searched or filtered on.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The roadmap describes the new API call as manual. | Found: Searched: Copilot connectors schema delete manual. Read roadmap, schema guide and Update schema; the roadmap names admins, developers and APIs but does not state that calls are manual. | Fix: Replace the bullet with 'No autonomous behaviour is described in the roadmap item; it describes admins and developers using Copilot connector APIs to delete individual schema properties.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls table / command: PATCH /beta/external/connections/{connectionId}/schema updates a connection's schema. | Found: Update the properties of a schema for an externalConnection. ... PATCH https://graph.microsoft.com/beta/external/connections/contosohr/schema ... supply a JSON representation of a schema object. | Fix: Add to controls[0].note and the rendered note: 'The request body sets properties and requires baseType to be microsoft.graph.externalItem.' The beta reference documents both fields. | Source: https://learn.microsoft.com/graph/api/externalconnectors-schema-update?view=graph-rest-beta
- [supported, minor] controls[0].note; What's changing; Why it matters; Governance controls / behaviour: For Microsoft-built published connections, the documented way to remove an existing property is to delete and recreate the connection. | Found: You cannot delete an existing property for a published connection. To remove a property, you must delete and recreate a connection. | Fix: Qualify the first discussion of this limitation and controls[0].note with 'The Manage search schema documentation is marked preview.' Keep the Microsoft-built connector qualification. | Source: https://learn.microsoft.com/microsoftsearch/manage-search-schema
-->
