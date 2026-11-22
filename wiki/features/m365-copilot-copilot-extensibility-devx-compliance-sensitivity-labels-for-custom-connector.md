---
title: "Microsoft 365 Copilot: compliance sensitivity labels for custom connectors"
slug: "m365-copilot-copilot-extensibility-devx-compliance-sensitivity-labels-for-custom-connector"
roadmapId: 502540
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap plans sensitivity labels for custom connectors. Learn documents a beta Graph property that sets a Purview label on indexed items. Nothing is documented for admins to switch; confirm how Copilot treats labelled items."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn's connector prerequisites page lists synced connectors for Copilot grounding under Microsoft 365 + Microsoft 365 Copilot add-on and Microsoft 365 E7. No licence specific to labels is published."
audiences: ["compliance","m365-admin","security"]
tags: ["m365-copilot","copilot-connectors","sensitivity-labels","purview","information-protection","microsoft-graph","extensibility"]
sources:
  - title: "Microsoft 365 Roadmap item 502540"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502540"
    kind: "roadmap"
  - title: "externalItem resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-externalitem?view=graph-rest-beta"
    kind: "learn"
  - title: "externalItemInformationProtectionLabel resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-externaliteminformationprotectionlabel?view=graph-rest-beta"
    kind: "learn"
  - title: "Create externalItem"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-put-items?view=graph-rest-beta"
    kind: "learn"
  - title: "Considerations to manage Microsoft 365 Copilot and Channel Agent in Teams for security and compliance"
    url: "https://learn.microsoft.com/purview/ai-m365-copilot-considerations"
    kind: "learn"
  - title: "Microsoft 365 Copilot connectors FAQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/frequently-asked-questions"
    kind: "learn"
  - title: "Copilot connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/overview"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Deploy connectors in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    kind: "learn"
videos: []
related: ["sensitivity-labels"]
controls:
  - governs: "Sensitivity label on items a custom connector indexes"
    scope: "other"
    ui: null
    api:
      kind: "graph"
      call: "PUT /beta/external/connections/{connection-id}/items/{item-id}"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-put-items?view=graph-rest-beta"
    note: "Beta. The request body sets informationProtectionLabel.sensitivityLabelId to a Purview label GUID. Developer-side; needs ExternalItem.ReadWrite.OwnedBy or ExternalItem.ReadWrite.All."
  - governs: "Who can see items indexed by a connector"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > connector > Custom setup > Users > Access Permissions"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    api:
      kind: "graph"
      call: "PUT /beta/external/connections/{connection-id}/items/{item-id}"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-put-items?view=graph-rest-beta"
    note: "Access control, not a label. The request body sets acl per item; the admin centre page describes Custom setup for connectors deployed there. Needs the AI administrator role."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-10-27T23:15:26"
changes:
  - date: "2026-11-22"
    note: "First briefing for this roadmap item; it records the documented beta label property and what Microsoft has not said."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 54 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 51
  unconfirmed: 1
  contradicted: 2
  attempts: 0
  hash: "fe5076c233e6a0df62f38577e4966033"
---

## What's changing

The Microsoft 365 Roadmap item (ID 502540, "Compliance sensitivity labels for custom connectors") plans sensitivity label support for custom Microsoft 365 Copilot connectors. Its entire description is that one sentence. The record shows status In development, a target of December CY2025, release phase General Availability, platform Web and the Worldwide (Standard Multi-Tenant) cloud. The record has no more-info link and gives no detail on behaviour; the December CY2025 target month has passed while the status still reads In development.

Microsoft Learn documents something close, but does not connect it to this item. In the Microsoft Graph beta reference, an externalItem (an item a connector indexes) has an optional `informationProtectionLabel` property. Learn says to set its `sensitivityLabelId` to the GUID of a Purview sensitivity label, and that the service then applies the label rules to the item. The Create externalItem page repeats this and notes that beta APIs are subject to change and are not supported in production applications. Microsoft has not said whether this property is the roadmap feature.

Custom connectors are the ones a developer builds, with the Microsoft 365 Agents Toolkit or the Microsoft Graph connectors API. Learn's overview lists custom connectors under synced connectors, which index data into Microsoft Graph; it does not list them under federated connectors. Two Learn pages describe the current behaviour for labels on external data differently: the Purview considerations page says labels on data from external sources are not recognised by Microsoft 365 Copilot Chat, while the connectors FAQ says label handling is based on Purview labels and external systems' classifications might not map to them. Both are reported here without choosing between them.

## Why it matters

If a connector indexes content that is sensitive in its source system, the Purview label is how a compliance team would expect that content to be protected once Copilot can read it. Learn's Purview considerations page says labels on data from external sources are not recognised by Copilot Chat, and recommends disconnecting external data sources if that is a concern. A label on connector items would change that position, so compliance and Copilot owners should know which custom connectors exist and what they index.

Microsoft has not stated what happens on arrival or if nobody acts. No source says existing connector behaviour changes, so treat this as a capability a connector developer would choose to use, and plan reviews rather than emergency changes.

## Risk assessment

**Data exposure**
- Content from a custom synced connector is indexed into Microsoft Graph and can be used by Copilot. Learn's Purview considerations page says sensitivity labels applied to data from external sources are not recognised by Microsoft 365 Copilot Chat. Until Microsoft documents otherwise for this feature, rely on the connection's access permissions and the item access control lists, not on labels.
- The beta `informationProtectionLabel` property is set by whoever writes the connector code. A wrong or missing GUID is a developer error that the admin centre does not show; Microsoft has not documented a report of labels per connection.

**Security & identity**
- Setting a label needs the Graph permission the Create externalItem page lists: `ExternalItem.ReadWrite.OwnedBy` as least privileged, or `ExternalItem.ReadWrite.All`. Review which apps hold the broader permission.

**Autonomy & actions**
- No change documented: the property labels indexed items and Learn describes no action taken on them.

**Change & support**
- The property is beta, so Learn says it is subject to change and not supported in production applications, while the roadmap lists General Availability. Expect the design to differ from what the beta page shows.

## Cost and licensing

Learn's connector prerequisites page says synced connectors need Microsoft 365 licences, and shows synced connectors for Copilot grounding and agents under Microsoft 365 + Microsoft 365 Copilot add-on and under Microsoft 365 E7. It also says that if your organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply, and that indexing synced connector data incurs no extra cost for tenants with Microsoft 365 licences.

The pages read name no meter or charge specific to sensitivity labels on connector items, and the roadmap record names no licence for this item. A price or licence rule specific to this feature is not yet published. Indirect cost is developer time to set the label GUID in connector code and compliance time to review what each connector indexes.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform and release phase General Availability, and does not list US Government clouds. A record that omits a cloud is not a statement that the feature is unavailable there.

The documented beta property applies to items on a Microsoft Graph connection. Learn says that configuring and deploying Copilot connectors in the Microsoft 365 admin center requires the AI administrator role. Rollout mechanics and prerequisites for the planned feature are not yet published.

## Governance guidance

### Before rollout
- Inventory the custom connectors in your tenant in the Microsoft 365 admin center (Copilot > Connectors) and ask each developer which content they index and whether the source holds sensitive data.
- Ask developers whether their code uses the beta `informationProtectionLabel` property, and which Purview label GUIDs it sets.
- Check each connector's access permissions (Users tab, Access Permissions) and the item access control lists, as the controls table shows.

### At rollout
- Test a labelled item in a pilot group before relying on labels, and compare what Copilot Chat returns with the label's intent.
- Keep production connectors off the beta property until Microsoft documents the final design.

### After rollout
- Re-read the Create externalItem page and the Purview considerations page when Microsoft publishes the roadmap change, because the statement that external-source labels are not recognised may be revised.
- Disconnect any connection whose content cannot be protected to your requirements, as Learn's Purview considerations page describes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Sensitivity label on items a custom connector indexes</strong><br><small class="controls__note">Beta. The request body sets informationProtectionLabel.sensitivityLabelId to a Purview label GUID. Developer-side; needs ExternalItem.ReadWrite.OwnedBy or ExternalItem.ReadWrite.All.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PUT /beta/external/connections/{connection-id}/items/{item-id}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-put-items?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can see items indexed by a connector</strong><br><small class="controls__note">Access control, not a label. The request body sets acl per item; the admin centre page describes Custom setup for connectors deployed there. Needs the AI administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › connector › Custom setup › Users › Access Permissions <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PUT /beta/external/connections/{connection-id}/items/{item-id}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-put-items?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No admin-centre setting for labelling connector items is documented at the time of writing (November 2026): the label is set by connector code through the Graph API. The Access Permissions choice and the item `acl` are access controls, not labels, and do not replace one.

The Graph row is a beta operation. Write calls need the `ExternalItem.ReadWrite.OwnedBy` or `ExternalItem.ReadWrite.All` permission, and the admin centre row needs the AI administrator role.

## Open questions

- Is the roadmap item the beta `informationProtectionLabel` property, or a separate capability such as an admin-side label setting? Watch the roadmap record and the Create externalItem page.
- Will Microsoft 365 Copilot Chat recognise the label on a connector item, and will it apply the label's protection when it uses the item? Watch the Purview considerations page.
- Will an admin-centre setting for labelling connector items be added, or will it remain a developer API only?
- What default applies on arrival, and will the feature reach General Availability in the Worldwide cloud, as the record lists, on a new date? The record's December CY2025 target has passed.

<!-- rationale
risk: Medium. A Learn page says Microsoft 365 Copilot Chat does not recognise sensitivity labels on data from external sources, so connector content is not label-protected today; the planned feature may close this.
cost: Low. Learn says indexing synced connector data incurs no extra cost for tenants with Microsoft 365 licences; the sources show only developer and admin time, and no label-specific charge is published.
impact: Low. Connector developers, AI administrators and compliance teams notice first; Microsoft has not said what users would see for a labelled connector item.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: The admin centre does not show wrong or missing label GUID errors. | Found: Searched: Copilot connector sensitivity label invalid GUID missing error admin center index browser report. Opened indexed-content, error-responses and manage-connector. They document general error visibility but do not state whether label-GUID errors are shown or hidden. | Fix: Remove 'that the admin centre does not show'. The checked documentation does not establish whether these particular errors are visible.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: Microsoft recommends disconnecting external sources if their sensitivity label handling is a concern. | Found: You can always disconnect the external data sources | Fix: Replace 'and recommends disconnecting external data sources if that is a concern' with 'and says administrators can disconnect external data sources'. The source describes an option, not a recommendation. | Source: https://learn.microsoft.com/purview/ai-m365-copilot-considerations
- [supported, minor] controls[1].ui; Governance guidance: Before rollout / admin-path: For connectors deployed through the documented admin-centre setup, access is configured at Copilot > Connectors > connector > Custom setup > Users > Access Permissions. | Found: In the left pane, choose Copilot > Connectors. On the connector page in the admin center, select Custom setup. On the Users tab, under Access Permissions, choose whether indexed data is visible to: | Fix: Use 'Copilot > Connectors > Your Connections > connector > Custom setup > Users > Access Permissions'. Add https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector to sources for the Your Connections step. Keep the existing qualification about connectors deployed through this setup. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview
- [contradicted, minor] rationale: risk / consistency: Connector content is not label-protected today. | Found: Rationale: 'connector content is not label-protected today'. Graph reference, also reported in What's changing: 'The service then applies the label rules to the item.' | Fix: Replace the risk rationale with: 'Medium. Microsoft has not stated the planned control's default. On the basis of today's behaviour continuing, the Purview page's external-source label limitation warrants review, while the beta Graph reference separately says assigned Purview label rules are applied to indexed items.' | Source: https://learn.microsoft.com/graph/api/resources/externalconnectors-externalitem?view=graph-rest-beta
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist tells administrators to disconnect connections, but that control has no table row. | Found: Checklist: 'Disconnect any connection whose content cannot be protected to your requirements'. Controls rows: 'Sensitivity label on items a custom connector indexes'; 'Who can see items indexed by a connector'. | Fix: Remove the 'Disconnect any connection whose content cannot be protected to your requirements' checklist bullet. It directs a control action that has no controls-table row; do not add a new row in this correction.
-->
