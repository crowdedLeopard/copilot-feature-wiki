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
  model: "mixed"
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
    note: "Needs the AI administrator role. Schema recommendations are shown in the connection detail panel."
  - governs: "Changing a connection's schema to add the missing labels"
    scope: "app"
    ui: null
    api:
      kind: "graph"
      call: "PATCH /v1.0/external/connections/{id}/schema"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-patch-schema?view=graph-rest-1.0"
    note: "The request body supplies the schema object. Least privileged permission is ExternalConnection.ReadWrite.OwnedBy."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-07-25T22:15:54"
changes:
  - date: "2026-11-22"
    note: "First briefing: Learn documents schema recommendations for custom connectors that check four semantic labels, while the roadmap item is still In development."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 44 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 42
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "d5d7bacbe233168f91cea186fc922437"
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
- Adding labels changes how connector content is indexed and surfaced in Microsoft 365 Copilot, according to Learn, so a schema change can make more items citable. Learn says deployed connectors are tenant-wide unless external item security is restricted, so check item permissions on the connector before relying on better citations.

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

Learn describes the recommendations for published custom Copilot connectors, shown in the Microsoft 365 admin center. Managing connectors needs the AI administrator role.

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud, with General Availability and Targeted Release phases and Developer and Web platforms. Rollout mechanics are not stated in the record or on the Learn page.

## Governance guidance

### Before rollout
- Inventory the custom connectors in your tenant and name the developer who owns each schema.
- Confirm who holds the AI administrator role, which Learn requires to manage connectors.
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
<tr><td data-label="Control"><strong>Viewing schema recommendations for a published custom connector</strong><br><small>App</small><br><small class="controls__note">Needs the AI administrator role. Schema recommendations are shown in the connection detail panel.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Changing a connection's schema to add the missing labels</strong><br><small>App</small><br><small class="controls__note">The request body supplies the schema object. Least privileged permission is ExternalConnection.ReadWrite.OwnedBy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/external/connections/{id}/schema</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-patch-schema?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
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
- [contradicted, blocker] front matter: licensing.model / consistency: The administrative schema-recommendations feature has a mixed licensing model. | Found: Page field: model: "mixed". Microsoft: "Your tenant must have Microsoft 365 licenses." The standard assigns included to a new option inside a product covered by its general licensing requirement. | Fix: Set licensing.model to 'included'. Keep the existing notes naming Microsoft 365 licenses and distinguishing the unpublished recommendation-specific licence; the table's alternative licences govern downstream connector experiences, not a mixed entitlement for this administrative view. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Risk assessment: Security & identity; Scope; Governance guidance / role: Accessing and managing connectors requires the AI administrator role. | Found: To access and manage your Microsoft 365 Copilot connectors, you must be an AI administrator for your organization. | Fix: Keep the AI administrator requirement, but add: 'The cited Graph connection-management guide instead says a search admin can view and manage all tenant connections; the Microsoft guidance differs on the role.' The differing page is https://learn.microsoft.com/graph/connecting-external-content-manage-connections. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector
- [supported, minor] Risk assessment: Data exposure / behaviour: Adding labels changes how connector content is indexed and surfaced. | Found: When you build a custom Copilot connector, the schema you define determines how your content is indexed and surfaced in Microsoft 365 Copilot. | Fix: Replace the opening clause with 'Semantic labels help Copilot understand, rank and cite connector content'. The cited overview at https://learn.microsoft.com/plugins/overview-copilot-connector explicitly says 'Semantic labels are used for filtering and don't affect semantic indexing', so do not imply that label changes alter semantic indexing. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector
- [supported, minor] Risk assessment: Autonomy & actions; Governance guidance / behaviour: A person or application changes the schema to assign missing semantic labels. | Found: You can assign or remove semantic labels. These labels influence experiences such as **Relevance** and **Viva Topics**. | Fix: Add https://learn.microsoft.com/graph/connecting-external-content-manage-schema to sources, titled 'Register and manage schema for the Microsoft 365 Copilot connectors'; it explicitly documents adding or removing labels on an existing schema. | Source: https://learn.microsoft.com/graph/connecting-external-content-manage-schema
- [supported, minor] controls[1].api; Governance controls / command: PATCH /v1.0/external/connections/{id}/schema updates a connection schema and can add labels. | Found: Create a new or update an existing schema for a Microsoft Search connection. PATCH https://graph.microsoft.com/v1.0/external/connections/contosohr/schema | Fix: Keep the call unchanged. Replace the first sentence of controls[1].note with 'The request body sets properties[].labels on the schema properties to add the missing semantic labels.' The cited reference's example uses properties entries containing labels. | Source: https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-patch-schema?view=graph-rest-1.0
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells readers to confirm AI administrator assignments without a corresponding role-assignment control row. | Found: Checklist: 'Confirm who holds the AI administrator role'. The controls table contains only viewing recommendations and changing schemas. | Fix: Replace that checklist bullet with 'Arrange for an AI administrator to review the recommendations.' This preserves the verified prerequisite without asking readers to inspect an unlisted role-assignment control.
-->
