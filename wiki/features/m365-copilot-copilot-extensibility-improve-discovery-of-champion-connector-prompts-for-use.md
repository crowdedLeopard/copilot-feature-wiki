---
title: "Microsoft 365 Copilot: suggested prompts and a prompt library for Champion connectors"
slug: "m365-copilot-copilot-extensibility-improve-discovery-of-champion-connector-prompts-for-use"
roadmapId: 502542
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Roadmap item, now Launched: Microsoft Copilot on the web gets inline suggested prompts and a prompt library for Champion connectors. No admin switch or default is documented; tell users and check connector licences."
status: "launched"
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
  model: "included"
  notes: "Connector grounding in Copilot is included with Microsoft 365 Copilot licences, and federated connectors need a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7), per the connector prerequisites page. Licensing specific to these prompts is not yet published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["m365-copilot","copilot-chat","copilot-connectors","prompt-gallery","adoption"]
sources:
  - title: "Microsoft 365 Roadmap item 502542"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502542"
    kind: "roadmap"
  - title: "Release Notes for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Understand Prompt Gallery in Copilot"
    url: "https://learn.microsoft.com/copilot/manage/copilot-prompt-gallery"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "copilotAdminSetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotadminsetting"
    kind: "learn"
  - title: "Which external data sources are connected to Copilot through Copilot connectors (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    kind: "learn"
  - title: "Which external data sources are connected to Copilot through Copilot connectors (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections?view=graph-rest-1.0"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that connector grounding in Copilot needs (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that connector grounding in Copilot needs (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-discover-graph-connector-prompts-in-the-prompt-gallery-when-using-copilot-cha","copilot-connectors","m365-copilot-copilot-extensibility-improved-discovery-of-copilot-connector-sources-in-m365","microsoft-copilot-microsoft-m365-delegated-prompt-publishing-for-organization-prompts"]
controls:
  - governs: "Tenant-wide switch for Champion connector prompt suggestions"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting for these prompts is documented at the time of writing (November 2026)."
  - governs: "Which external data sources are connected to Copilot through Copilot connectors"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Connectors > Gallery > data source"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    api:
      kind: "graph"
      call: "POST /v1.0/external/connections"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections?view=graph-rest-1.0"
    note: "Requires the AI administrator role. The Graph call creates a custom connection; Microsoft-built connectors are deployed from the Gallery."
  - governs: "Which users hold the Microsoft 365 Copilot licence that connector grounding in Copilot needs"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Governs the licence, not the prompts. Federated connectors also need this licence (or Microsoft 365 E7)."
confidence: "low"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-26"
    note: "First briefing: Launched roadmap item for Champion connector prompt suggestions; Microsoft Learn documents no setting, default or licence specific to it."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 53 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 52
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "2d9c362e0d95bfbba84527c7a8fb65de"
---

## What's changing

The roadmap item states that Microsoft is improving how users discover prompts for "Champion connectors" in Microsoft Copilot, through what it calls "inline suggestive pre & post prompts" and a prompt library. The record does not say where in the conversation those prompts appear. Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description.

The record does not say which connectors count as Champion connectors. The only other mention on Microsoft Learn is in the Microsoft 365 Copilot release notes for February 10, 2026, which say field teams can use getting started guides of champion connectors to guide customers through Copilot adoption; they do not list the connectors. Microsoft Learn describes the existing Prompt Gallery as available within Microsoft Copilot or Copilot Chat, holding Microsoft-curated prompts (under **Suggested**) and prompts saved by users (under **Your Prompts**) and by team (under **Teams**). Whether the prompt library in this item is that gallery is not stated.

The record lists the item as Launched, release phase General Availability, with a target of December CY2025, for Worldwide (Standard Multi-Tenant) on the Web platform. No Message Center post was supplied for it.

## Why it matters

This is an adoption change: users are steered towards asking Copilot about content from connected external systems. Where your tenant has deployed Copilot connectors, expect more questions that ground on that content, and more support questions from users who see a connector prompt for a source they cannot use or that your tenant has not connected.

Microsoft has not stated what happens on arrival or whether an administrator can hide these prompts. No source says existing data access changes, so the practical work is knowing which connectors are deployed and who holds the licence that connector grounding needs, before users act on the suggestions.

## Risk assessment

**Data exposure**
- The roadmap describes prompts, not a new data path. Connector content reaches Copilot through connectors that must be deployed by an AI administrator, per the connector prerequisites page.
- Prompts users save or share in the Prompt Gallery are stored in user and group collections that the Prompt Gallery page places within the tenant boundary. Whether connector prompts in the new library are stored the same way is not stated.

**Security & identity**
- No new identity model is described. For federated connectors, the prerequisites page says Copilot queries the source on behalf of the signed-in user through an OAuth-based identity configuration.

**Autonomy & actions**
- No change: the item adds suggested prompts and a prompt library; it describes no actions taken without the user.

**Change & support**
- Users may be shown prompts for connectors they are not licensed for, or that are not deployed in your tenant; whether suggestions are filtered by either is not stated. Microsoft Learn documents no setting for these prompts (row 1), so communication is the available lever.

## Cost and licensing

**Licence.** The connector prerequisites page says that if your organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply. Federated Copilot connectors are available only to tenants and users with a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7), and the page says they aren't supported with Copilot Studio licences or Microsoft 365 Copilot pay-as-you-go. Assigning that licence is row 3 of the controls table.

**Meter.** The prerequisites page says indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licences. No meter is documented for these prompts at the time of writing (November 2026).

**Indirect costs.** Admin time to review deployed connectors and to brief the service desk and champions.

**Not yet published.** Licensing specific to Champion connector prompts, and whether the prompts appear for users without a Microsoft 365 Copilot licence.

## Scope

- **Clouds:** Worldwide (Standard Multi-Tenant), as the record lists. The record does not list GCC, GCC High or DoD; that is not a statement that they are excluded.
- **Platforms:** Web.
- **Users:** Microsoft Copilot users; which users see the prompts, and which connectors are Champion connectors, is not stated.
- **Roles:** deploying Copilot connectors needs the AI administrator role in the Microsoft 365 admin center, per the prerequisites page.
- **Prerequisites:** not stated for the prompts. Connector grounding in Copilot follows the licensing table on the prerequisites page.

## Governance guidance

### Before rollout
- List the Copilot connectors deployed in the tenant (Microsoft 365 admin center > Copilot > Connectors) so the service desk knows which sources a suggested prompt can actually reach.
- Check which users hold a Microsoft 365 Copilot licence (row 3), since connector grounding in Copilot and federated connectors depend on it.

### At rollout
- Brief the service desk and Copilot champions that Copilot on the web may suggest prompts for connectors, and which connectors the tenant has deployed.
- Use the deployment wizard's option to deploy a new connector to a subset of users for validation before a broader rollout, if suggested prompts drive requests for new connectors.

### After rollout
- Test in Copilot on the web with a Copilot-licensed and an unlicensed account whether connector prompts appear for sources the tenant has not deployed, and record the result.
- Watch Message center and the Microsoft 365 Copilot release notes for an admin setting for these prompts (row 1).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for Champion connector prompt suggestions</strong><br><small>Tenant</small><br><small class="controls__note">No setting for these prompts is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which external data sources are connected to Copilot through Copilot connectors</strong><br><small>Tenant</small><br><small class="controls__note">Requires the AI administrator role. The Graph call creates a custom connection; Microsoft-built connectors are deployed from the Gallery.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Connectors › Gallery › data source <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/external/connections</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that connector grounding in Copilot needs</strong><br><small>User</small><br><small class="controls__note">Governs the licence, not the prompts. Federated connectors also need this licence (or Microsoft 365 E7).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant switch, per-user setting or API that hides Champion connector prompts at the time of writing (November 2026). The Copilot settings page lists none among its user access, data access, Copilot actions and other settings, and the Microsoft Graph Copilot admin settings resource exposes only a Teams meetings setting. The controls that exist govern the connectors themselves and the licence: deploying a connector needs the AI administrator role, and the Graph call creates a custom connection, while Microsoft-built connectors are deployed from the Gallery in the admin centre.

## Open questions

- Which connectors are Champion connectors, and will Microsoft publish the list on the Copilot connectors pages?
- Do Champion connector prompts appear for users in tenants that have not deployed that connector, or for users without a Microsoft 365 Copilot licence?
- Is the prompt library in this item the existing Prompt Gallery, and are connector prompts stored or reported with its user and team collections?
- Will Microsoft add an admin setting to hide connector prompt suggestions? Watch Message center and the Copilot settings page.

<!-- rationale
risk: Low. The roadmap describes prompt suggestions and a prompt library, not new data access; connector content reaches Copilot through connectors that an AI administrator deploys.
cost: Low. Connector grounding in Copilot is included with Microsoft 365 Copilot licences with no extra charge; the only other cost shown is admin and communication time. Nothing specific to these prompts is published.
impact: Low. Copilot users on the web see extra prompt suggestions for connectors; what Copilot can reach does not change.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: Meter / cost: The prerequisites page says indexing synced connector data incurs no extra cost for tenants with Microsoft 365 licences. | Found: Indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses. | Fix: Keep this attribution, but add: 'Microsoft's Copilot Search FAQ gives different guidance: it says connectors may incur additional costs and are licensed separately.' Cite https://learn.microsoft.com/copilot/manage/copilot-search-faq#where-can-i-access-microsoft-copilot-search, which states: 'Microsoft 365 Copilot connectors are licensed separately and may require Microsoft 365 E5, Microsoft Viva, or additional capacity units depending on the volume and type of data being indexed.' | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Copilot > Connectors > Connectors > Gallery > data source in the Microsoft 365 admin center opens connector setup. | Found: In the left pane, choose Copilot > Connectors. On the Connectors tab, in the left pane, choose Gallery, and select the data source you want to connect | Fix: The route reaches the correct setup page but stops before deploying the connection. Extend controls[1].ui.path to 'Copilot > Connectors > Connectors > Gallery > data source > authentication method > Create', using 'authentication method' as the choice placeholder. The cited deployment overview instructs the admin to choose an authentication method and then choose Create to deploy the connection. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview
- [supported, minor] Governance guidance: Before rollout / admin-path: Copilot > Connectors is where the administrator can list deployed connectors. | Found: You can view the connection state for your deployed connectors on the Your Connections tab in the admin center. Go to Copilot > Connectors > Your Connections. | Fix: Replace the parenthesised inventory route with 'Microsoft 365 admin center > Copilot > Connectors > Your Connections' and add https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector to sources. The current route stops early on the right connector page, but the source documenting the deployed-connection list is not cited. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector
- [unsupported, minor] rationale: impact / behaviour: What Copilot can reach does not change. | Found: Searched: "Champion" "Copilot" prompts data access permissions unchanged; "connector prompts" Copilot inline suggestions prompt library default licensing. Read roadmap, prerequisites, deployment overview, Prompt Gallery and enterprise-protection excerpts; none states unchanged feature reach. | Fix: Replace 'what Copilot can reach does not change' with 'the roadmap describes prompt discovery, not a change to data access'. This confines the rationale to the supplied record rather than asserting an undocumented guarantee.
-->
