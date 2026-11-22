---
title: "Microsoft 365 Copilot connectors: schema recommendations for custom connectors in the admin centre"
slug: "m365-copilot-copilot-extensibility-schema-recommendations-for-custom-connectors-in-m365-ad"
roadmapId: 498911
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The Microsoft 365 admin center shows schema recommendations for published custom Copilot connectors, flagging four missing semantic labels. It gives AI administrators and connector developers something to review; no switch is documented."
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
  notes: "The connectors prerequisites page says the tenant must have Microsoft 365 licenses and lists which experiences each licence supports; no licence specific to schema recommendations is published."
audiences: ["m365-admin","service-owner"]
tags: ["m365-copilot","copilot-connectors","extensibility","m365-admin-center","microsoft-graph","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 498911"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498911"
    kind: "roadmap"
  - title: "Manage connector connections"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "View connection details"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/view-details"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Microsoft 365 Copilot connectors overview"
    url: "https://learn.microsoft.com/plugins/overview-copilot-connector"
    kind: "learn"
  - title: "Create or update schema"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-patch-schema?view=graph-rest-1.0"
    kind: "learn"
  - title: "Create, update, and delete connections in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/connecting-external-content-manage-connections"
    kind: "learn"
  - title: "Register and update schema for the Microsoft Graph connection"
    url: "https://learn.microsoft.com/graph/connecting-external-content-manage-schema"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto","m365-copilot-copilot-extensibility-devx-compliance-sensitivity-labels-for-custom-connector","m365-copilot-streamlined-authentication-process-with-oauth-for-connector-admins","m365-admin-center-usage-reports-m365-copilot-connectors"]
controls:
  - governs: "Viewing schema recommendations for a published custom connector"
    scope: "app"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connection"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    api: null
    note: "Needs the AI administrator role. The Graph connection guide instead says a search admin can view and manage all tenant connections; Microsoft's guidance differs on the role."
  - governs: "Changing a connection's schema to add the missing labels"
    scope: "app"
    ui: null
    api:
      kind: "graph"
      call: "PATCH /v1.0/external/connections/{id}/schema"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-patch-schema?view=graph-rest-1.0"
    note: "The request body sets properties[].labels on the schema properties to add the missing semantic labels. Least privileged permission is ExternalConnection.ReadWrite.OwnedBy."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-07-25T22:15:54"
changes:
  - date: "2026-11-22"
    note: "First briefing: Learn documents schema recommendations for custom connectors that check four semantic labels, while the roadmap item is still In development."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 44 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Correction: licensing model set to included, the role difference between Learn pages noted, label wording and schema-call note aligned with Learn, and the role checklist step reworded."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 51 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 48
  unconfirmed: 2
  contradicted: 1
  attempts: 2
  hash: "9694dfa3920b3bae4bdad771bf578312"
---

## What's changing

The Microsoft 365 admin center shows schema recommendations for published custom Copilot connectors. Microsoft Learn says they analyse the connector's schema and highlight missing semantic labels for key properties that Copilot relies on to understand, rank and cite content.

Microsoft Learn says the recommendations currently check for four missing semantic labels: `title`, `url`, `lastModifiedBy` and `lastModifiedDateTime`. It also says they are not exhaustive and do not replace the full schema design guidance for Copilot connectors. They are reached through the connection detail panel.

The roadmap item describes more: proposed schema suggestions tailored to the connector, and real-time recommendations that identify gaps or errors in a schema. The Learn page describes missing-label checks only, so treat the proposed-schema and error-checking parts as the roadmap's plan.

The roadmap record shows status In development with a target of September CY2025, for Worldwide (Standard Multi-Tenant), with General Availability and Targeted Release phases, on Developer and Web platforms. Learn already documents the recommendations as a feature of the admin center, so the record and the documentation differ on status.

## Why it matters

For a service owner, the value is better Copilot answers from connector data you already run. Learn says `title` is required for meaningful result rendering and relevant Copilot results, and `url` is required for citations to link back to the source system. A custom connector missing either is the likeliest place for poor results.

Microsoft has not stated what happens on arrival, so this page makes no claim about a default. The recommendations are guidance rather than a change to existing behaviour, so nobody needs to act before they appear. Plan for the developer who owns each custom connector to review them and decide on schema changes.

## Risk assessment

**Data exposure**
- Semantic labels help Copilot understand, rank and cite connector content, so a schema change can make more items citable. Learn says deployed connectors are tenant-wide unless external item security is restricted, so check item permissions on the connector before relying on better citations.

**Security & identity**
- Viewing and managing Copilot connectors needs the AI administrator role, per Learn. Changing a schema through Microsoft Graph uses the `ExternalConnection.ReadWrite.OwnedBy` permission or the higher `ExternalConnection.ReadWrite.All`, so review which applications hold either.

**Autonomy & actions**
- The Learn page describes recommendations as analysing the schema and highlighting missing labels. A person or an application still has to change the schema.

**Change & support**
- Learn says editing a connection might trigger a full crawl, where applicable, so schedule label changes outside peak sync windows and expect the connection state to show Syncing.
- The four-label check is not exhaustive, so a connector with no recommendations has not been shown to be well designed.

## Cost and licensing

The connectors prerequisites page says the tenant must have Microsoft 365 licenses, and that the surfaces available to users (Microsoft Search, Microsoft 365 Copilot grounding, Copilot Chat agents) depend on the organisation's licensing. Its table lists synced connectors as supported for Copilot grounding and agents with a Microsoft 365 Copilot add-on or Microsoft 365 E7. The page also says indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses.

A licence or meter specific to schema recommendations is not yet published. Indirect cost is developer and administrator time to review recommendations and change schemas.

## Scope

Learn describes the recommendations for published custom Copilot connectors, shown in the Microsoft 365 admin center. Managing connectors needs the AI administrator role. The Graph connection-management guide instead says a search admin can view and manage all the connections in the tenant, so Microsoft's guidance differs on the role.

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud, with General Availability and Targeted Release phases and Developer and Web platforms. Rollout mechanics are not stated in the record or on the Learn page.

## Governance guidance

### Before rollout
- Inventory the custom connectors in your tenant and name the developer who owns each schema.
- Arrange for an AI administrator to review the recommendations.
- Check the semantic label guidance linked from the Learn page, so developers know what `title`, `url`, `lastModifiedBy` and `lastModifiedDateTime` should map to.

### At rollout
- Open each published custom connection's detail panel and read its schema recommendations.
- Send missing-label findings to the connector developer, who changes the schema through Microsoft Graph.

### After rollout
- Watch the connection state after a schema change, because editing a connection might trigger a full crawl.
- Re-check the recommendations after each change and ask users whether Copilot answers cite the right source items.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Viewing schema recommendations for a published custom connector</strong><br><small>App</small><br><small class="controls__note">Needs the AI administrator role. The Graph connection guide instead says a search admin can view and manage all tenant connections; Microsoft's guidance differs on the role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Changing a connection's schema to add the missing labels</strong><br><small>App</small><br><small class="controls__note">The request body sets properties[].labels on the schema properties to add the missing semantic labels. Least privileged permission is ExternalConnection.ReadWrite.OwnedBy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/external/connections/{id}/schema</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-patch-schema?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The recommendations are shown to AI administrators in the connection detail panel; the controls here are where to read them and how a schema is changed.

The connection-operations table on the Learn page lists schema editing for connectors by Microsoft and only name and description for connectors by partners. It does not list custom connectors separately, so confirm with your connector developer where the schema is changed.

The Microsoft Graph row is the documented call that updates a connection's schema. It is not a switch for the recommendations.

## Open questions

- Will the recommendations grow beyond the four labels Learn lists today, and will the proposed-schema and error-checking parts in the roadmap description ship? Watch the Manage connector connections page.
- Is there a setting or API to turn recommendations off or read them programmatically? Watch the same page and the Microsoft Graph connectors reference.
- Does a licence beyond the tenant's Microsoft 365 licences apply to this view? Watch the connectors prerequisites page.
- When will the roadmap status move from In development, given Learn already documents the feature? Watch roadmap item 498911.

<!-- rationale
risk: Low. Microsoft Learn describes the feature as analysing a connector's schema and highlighting missing semantic labels; the risk sits in whoever later changes the schema, which existing connector controls cover.
cost: Low. The cost the sources show is admin and developer time to review and fix labels; no licence or meter specific to schema recommendations is published, and Microsoft 365 licensing for connectors is covered on the prerequisites page.
impact: Low. AI administrators and the developers of custom connectors see the recommendations; Microsoft Learn describes no change to what end users see until a schema is changed.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters / default: The recommendations are not a change to existing behaviour, so nobody needs to act before they appear. | Found: Searched: Copilot connectors schema recommendations automatically change schema apply recommendations. Read manage-connector and schema guide; also searched recommendations' default and rollout. Neither source states that existing behaviour is unchanged on arrival. | Fix: Replace 'The recommendations are guidance rather than a change to existing behaviour, so nobody needs to act before they appear.' with 'No source says existing behaviour changes, so plan for the connector developer to review the guidance rather than assuming a required pre-rollout change.' Keep defaultState as unknown.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: A person or an application still has to change the schema rather than the recommendations making changes. | Found: Searched: Copilot connectors schema recommendations automatically change schema apply recommendations; schema recommendations Copilot read-only automatically. Read manage-connector, schema guide and PATCH reference. They document highlighting and schema updates, not this mandatory intervention rule. | Fix: Replace 'A person or an application still has to change the schema.' with 'Microsoft Graph documents a separate operation to change the schema.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support; Governance guidance: After rollout / behaviour: Editing a connection might trigger a full crawl, where applicable. | Found: Editing a connection might trigger a full crawl, where applicable. However, during the initial full crawl, editing the connection doesn't trigger another full crawl. Changes made during the first crawl are applied during the next scheduled full crawl. | Fix: Add after the full-crawl statement: 'During the initial full crawl, edits do not trigger another full crawl; changes are applied during the next scheduled full crawl.' | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist tells administrators to monitor connection state, but that monitoring control has no table row. | Found: After rollout: 'Watch the connection state after a schema change'. The table's rows cover only 'Viewing schema recommendations for a published custom connector' and 'Changing a connection's schema to add the missing labels'. | Fix: Remove the After rollout bullet 'Watch the connection state after a schema change, because editing a connection might trigger a full crawl.' The full-crawl consideration remains in Risk assessment; do not add a control row in this correction.
-->
