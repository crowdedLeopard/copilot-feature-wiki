---
title: "Microsoft 365 Copilot connectors: custom icons and display names for custom connectors"
slug: "m365-copilot-copilot-extensibility-customize-icons-and-display-names-for-custom-copilot-co"
roadmapId: 498909
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to let custom Copilot connectors carry their own icon and display name, set through Microsoft Graph or the Microsoft 365 admin center. Cosmetic for most tenants; check naming before connector owners change what users see."
status: "in-development"
releasePhase: ["General Availability"]
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
  notes: "The Copilot connectors prerequisites page says the tenant must have Microsoft 365 licences, and that the surfaces available depend on licensing (Microsoft Search with any Microsoft 365 plan; Copilot grounding with the Microsoft 365 Copilot add-on or E7). Nothing specific to icons or display names is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["m365-copilot","copilot-connectors","microsoft-graph","m365-admin-center","extensibility","copilot-search"]
sources:
  - title: "Microsoft 365 Roadmap 498909"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498909"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot connectors FAQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/frequently-asked-questions"
    kind: "learn"
  - title: "Update externalConnection"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "externalConnection resource type"
    url: "https://learn.microsoft.com/graph/api/resources/externalconnectors-externalconnection?view=graph-rest-beta"
    kind: "learn"
  - title: "Manage connector connections"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "Enhance Copilot discovery of connectors content"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/enhance-copilot-discovery"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-extensibility-graph-api-enhancements-for-better-relevance-and-ux","copilot-connectors","m365-copilot-copilot-extensibility-improved-discovery-of-copilot-connector-sources-in-m365","m365-copilot-copilot-extensibility-schema-recommendations-for-custom-connectors-in-m365-ad"]
controls:
  - governs: "Display name and description of a custom connection built with the Copilot connectors API"
    scope: "app"
    ui: null
    api:
      kind: "graph"
      call: "PATCH /v1.0/external/connections/{connectionsId}"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update?view=graph-rest-1.0"
    note: "The request body sets name (up to 128 characters) and description. Least privileged permission: ExternalConnection.ReadWrite.OwnedBy; higher: ExternalConnection.ReadWrite.All."
  - governs: "Icon shown for a custom connection built with the Copilot connectors API"
    scope: "app"
    ui: null
    api: null
    note: "The May 19, 2026 release note says developers can now configure icons for custom connectors; the externalConnection reference lists no icon property."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2025-07-25T22:15:54"
changes:
  - date: "2026-11-26"
    note: "New briefing: documents today's names and icons for custom connectors, the Graph rename call, and the undocumented icon setting."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 59 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 56
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "055b70f4e2c6ac0c55835339aba31b99"
---

## What's changing

Microsoft plans to let organisations add or change the icon and the display name of custom Copilot connectors (connectors a developer builds to bring an outside data source into Microsoft 365 Copilot), either through the Microsoft Graph API or from the Microsoft 365 admin center, according to the roadmap item.

Part of this is already documented. The [Copilot connectors FAQ](https://learn.microsoft.com/microsoft-365/copilot/connectors/frequently-asked-questions) says that in the data source filter on the Copilot Search results page, prebuilt connectors show standard names and icons, custom connectors built with the Copilot connectors SDK show the name and icon the developer supplies, and custom connectors built with the Connectors API show a default connection name and icon. The same FAQ points to [Update externalConnection](https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update?view=graph-rest-1.0) to change the display name or description of an API-built custom connector; its `name` property is the display name shown in the Microsoft 365 admin center, up to 128 characters. Microsoft Learn documents no icon property on the externalConnection resource, in v1.0 or beta, at the time of writing (November 2026).

The roadmap item is **In development**, targeted for **September CY2025** at General Availability, for Worldwide (Standard Multi-Tenant) on the Developer and Web platforms. That target has passed and the record has not changed since July 2025. The [Microsoft 365 Copilot release notes](https://learn.microsoft.com/microsoft-365/copilot/release-notes) entry for May 19, 2026 says developers can now configure icons, visibility settings, connection metadata, property descriptions and semantic labels for custom connectors, without naming the setting that holds the icon. The two sources disagree on status. Microsoft has not stated what happens to existing connections on arrival.

## Why it matters

The connection name is not only a label. Microsoft's guidance on [enhancing Copilot discovery](https://learn.microsoft.com/microsoft-365/copilot/connectors/enhance-copilot-discovery) says a meaningful connection name and description help Copilot match the connector's content to the user's request, so renaming a custom connection can change which requests draw on it as well as what users see in the source filter. API-built custom connectors share a default name and icon today, so several of them look alike to users choosing a source.

Microsoft has not stated what happens on arrival, and no source says existing connection names or icons change. Expect the change to reach users only when a connector owner sets a new name or icon, which makes naming a decision for whoever owns the custom connectors.

## Risk assessment

**Data exposure**
- No change: a name or icon is a label on the connection, and the roadmap describes no new data the connector reads. Who sees indexed items is still decided by the connection's access control lists.

**Security & identity**
- The Graph call that renames a connection (row 1) needs the ExternalConnection.ReadWrite.OwnedBy permission, or the higher-privileged ExternalConnection.ReadWrite.All. Apps granted either permission can rename the connections that permission covers.
- A custom connector given a name or icon that resembles a Microsoft or well-known source could mislead users choosing where an answer comes from.

**Autonomy & actions**
- No change: the feature performs no actions on its own.

**Change & support**
- A renamed connection changes the label users pick in the Copilot Search source filter and can change how Copilot matches requests to it. Tell users before renaming a source they already filter on.

## Cost and licensing

The [Copilot connectors prerequisites](https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites) page says the tenant must have Microsoft 365 licences and that the surfaces available depend on licensing: any Microsoft 365 plan covers synced connectors in Microsoft Search, and the Microsoft 365 Copilot add-on or Microsoft 365 E7 covers synced connectors for Copilot grounding and agents. That page names no licence or charge specific to connector icons or display names.

The cost the sources show is time: developers updating connection names and icons, and AI administrators agreeing a naming convention.

## Scope

- **Connectors:** custom Copilot connectors, built with the Copilot connectors API or SDK. Learn documents separate behaviour for each today (see What's changing).
- **Roles:** the [Manage connector connections](https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector) page says managing Copilot connectors in the admin centre requires the AI administrator role. The Graph update call uses application or delegated permissions (row 1).
- **Clouds:** Worldwide (Standard Multi-Tenant) on the roadmap record. US Government clouds are not listed on the record.
- **Platforms:** Developer and Web.
- **Rollout:** the roadmap record gives no rollout mechanics.

## Governance guidance

### Before rollout
- List the custom connections on the **Your Connections** tab of the Microsoft 365 admin center and note which show a default name or icon.
- Agree a naming convention with connector owners, following Microsoft's guidance: a representative and concise name, and a description that gives the content type, scope, keywords and alternative names.
- Identify the apps that hold ExternalConnection.ReadWrite.OwnedBy or ExternalConnection.ReadWrite.All, the permissions the rename call in row 1 uses, and who owns them.

### At rollout
- Rename API-built custom connections whose default name tells users nothing, with the Graph update call in row 1, and tell users beforehand which source names change.
- Ask developers of SDK-built connectors to set the intended name when they publish, as the FAQ advises.
- Hold icon changes until Microsoft documents where a connection icon is set (row 2).

### After rollout
- Check the Copilot Search data source filter shows each custom connection under its agreed name and icon.
- Recheck names and icons after each connector release, and correct any that imitate another source.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Display name and description of a custom connection built with the Copilot connectors API</strong><br><small>App</small><br><small class="controls__note">The request body sets name (up to 128 characters) and description. Least privileged permission: ExternalConnection.ReadWrite.OwnedBy; higher: ExternalConnection.ReadWrite.All.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/external/connections/{connectionsId}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Icon shown for a custom connection built with the Copilot connectors API</strong><br><small>App</small><br><small class="controls__note">The May 19, 2026 release note says developers can now configure icons for custom connectors; the externalConnection reference lists no icon property.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The display name and description of an API-built custom connection are set through Microsoft Graph (row 1); the FAQ points there rather than to the admin centre. The Manage connector connections page lists name and description as editable for published connections of connectors by partners, without giving the steps, and the Enhance Copilot discovery page gives an Edit description route for Microsoft-built connectors only, pointing on-premises connectors to the API. The admin centre route the roadmap describes for custom connectors is not yet documented. The May 19, 2026 release note says developers can configure icons, but the externalConnection reference lists no icon property (row 2). Managing connectors in the admin centre needs the AI administrator role.

## Open questions

- Which externalConnection property, manifest field or admin centre setting will hold a custom connection's icon, and in which Graph version? Watch the externalConnection reference.
- Will the admin centre's name editing cover custom connectors built with the API and the SDK, and through which steps? Watch the Manage connector connections page.
- Has this shipped, given the May 19, 2026 release note and a roadmap status still at In development? Watch the roadmap item and Message center.
- Will icons have format or size rules, or any admin review before users see them? Watch the Copilot connectors FAQ.

<!-- rationale
risk: Low. Icons and display names are labels on an existing connection; the roadmap describes no new data access, and who can see indexed content stays with the connection's permissions.
cost: Low. The only cost the sources show is developer and admin time; Copilot connectors need Microsoft 365 licences, and nothing specific to icons or names is published.
impact: Low. Connector developers and AI administrators make the change; users notice only a different source name or icon for custom connectors in Copilot Search.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope: Roles / role: The Graph update call uses application or delegated permissions, without a stated administrator requirement for delegated access. | Found: Allows the app to read and write settings of external connections on behalf of a signed-in user. The signed-in user must be an administrator. The app can only read and write settings of connections that it is authorized to. | Fix: Replace the Graph sentence in Scope with: 'The Graph update call supports application permissions or delegated work-or-school permissions; for delegated access, the signed-in user must be an administrator (row 1).' Cite https://learn.microsoft.com/graph/permissions-reference#externalconnectionreadwriteownedby. | Source: https://learn.microsoft.com/graph/permissions-reference#externalconnectionreadwriteownedby
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature performs no actions on its own. | Found: Searched: Copilot connectors icons actions automatically; Copilot connectors icons automatically existing. Read roadmap, FAQ, manage-connector and May 19 release-note passage; none explicitly states that the customization feature performs no autonomous actions. | Fix: Replace the bullet with: 'The roadmap describes icon and display-name customization, not new autonomous actions.'
- [contradicted, blocker] Governance guidance: Before rollout, first bullet / admin-path: The inventory instruction starts at the Your Connections tab of the Microsoft 365 admin center, without the navigation needed to reach it. | Found: Go to Copilot > Connectors > Your Connections. | Fix: Replace the bullet with: 'In the Microsoft 365 admin center, go to Copilot > Connectors > Your Connections, list the custom connections, and note which show a default name or icon.' | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].scope; Risk assessment: Security & identity / applicability: Apps granted the update permissions can rename the connections covered by those permissions. | Found: The app can only read and write external connections that it is authorized to, or it can create new external connections. | Fix: Add https://learn.microsoft.com/graph/permissions-reference#externalconnectionreadwriteownedby to sources to support the permission-scope statement. | Source: https://learn.microsoft.com/graph/permissions-reference#externalconnectionreadwriteownedby
- [supported, minor] What's changing; controls[1].note; Governance controls / absence: The externalConnection resource reference lists no icon property in v1.0 or beta. | Found: Searched: Graph externalConnection icon; custom Copilot connectors configure icons Graph API. Read Properties and JSON representation at graph/api/resources/externalconnectors-externalconnection?view=graph-rest-1.0 and ?view=graph-rest-beta; neither lists an icon property. | Fix: Add https://learn.microsoft.com/graph/api/resources/externalconnectors-externalconnection?view=graph-rest-1.0 to sources; the briefing currently cites only the beta resource reference for its two-version absence claim.
-->
