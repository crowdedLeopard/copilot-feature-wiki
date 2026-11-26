---
title: "Microsoft 365 Copilot connectors: available in the US Department of Defense (DoD) cloud"
slug: "m365-copilot-copilot-connectors-are-available-for-u-s-department-of-defense-environment"
roadmapId: 512428
topic: "governance"
products: ["Microsoft 365 admin center","Microsoft Copilot (Microsoft 365)"]
summary: "DoD tenants can now connect external data sources to Microsoft Graph so Copilot and Microsoft Search can use them. External connections are not enabled by default in government clouds; an AI administrator deploys each connection."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["DoD"]
platforms: ["Desktop"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "off"
action: "review"
licensing:
  model: "included"
  notes: "Synced connectors in Microsoft Search come with any Microsoft 365 plan. Copilot grounding on connector data, and federated connectors, need the Microsoft 365 Copilot add-on (or Microsoft 365 E7), with no extra charges for grounding."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["copilot-connectors","m365-copilot","microsoft-graph","m365-admin-center","copilot-search","oversharing","dod"]
sources:
  - title: "Microsoft 365 Roadmap 512428"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=512428"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot connectors overview"
    url: "https://learn.microsoft.com/plugins/overview-copilot-connector"
    kind: "learn"
  - title: "Microsoft Copilot (service description)"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Deploy connectors in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    kind: "learn"
  - title: "Microsoft 365 Copilot connectors: Terms of use"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/terms-of-use"
    kind: "learn"
  - title: "Microsoft Copilot Search"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-overview"
    kind: "learn"
  - title: "Which external data sources are connected and indexed for Copilot and Microsoft Search (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections?view=graph-rest-1.0"
    kind: "learn"
  - title: "Whether indexed items are visible to everyone or only to users with access in the source (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-put-items?view=graph-rest-1.0"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that Copilot grounding on connector data requires (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that Copilot grounding on connector data requires (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["copilot-connectors","m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u","m365-copilot-federated-copilot-connectors","m365-admin-center-usage-reports-m365-copilot-connectors"]
controls:
  - governs: "Which external data sources are connected and indexed for Copilot and Microsoft Search"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Connectors > Gallery > data source"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    api:
      kind: "graph"
      call: "POST /v1.0/external/connections"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections?view=graph-rest-1.0"
    note: "AI administrator role. The setup screen offers deployment to a subset of users before broader rollout; Create deploys the connection. The Graph call creates a connection for custom connectors."
  - governs: "Whether indexed items are visible to everyone or only to users with access in the source"
    scope: "app"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Connectors > Gallery > data source > Custom setup > Users > Access Permissions"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview"
    api:
      kind: "graph"
      call: "PUT /v1.0/external/connections/{connection-id}/items/{item-id}"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-put-items?view=graph-rest-1.0"
    note: "The API side is for custom connectors: the request body's acl property sets who can see each item."
  - governs: "Which users hold the Microsoft 365 Copilot licence that Copilot grounding on connector data requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Decides Copilot grounding and federated connector use; Microsoft Search results from synced connectors need only a Microsoft 365 plan."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-13T23:07:14"
changes:
  - date: "2026-11-26"
    note: "New briefing: Copilot connectors launched for DoD, with the government-cloud default, licensing table, DoD IP ranges and admin-centre and Graph controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 74 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 72
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "c7e10e32202d2dfd7c475d4af148a632"
---

## What's changing

Microsoft 365 Copilot connectors are now available to tenants in the US Department of Defense (DoD) cloud. A connector brings content from an external system (a ticketing tool, a wiki, a database) into Microsoft Graph, where Microsoft 365 Copilot and Microsoft Search can find and reason over it. Microsoft's connectors overview now states that Copilot connectors are available in commercial environments and in GCC, GCC High and DoD environments, and the Microsoft Copilot service description marks Microsoft 365 Copilot Connectors as available in DoD.

Microsoft documents two models. **Synced connectors** index content from the external source into Microsoft Graph on a schedule; **federated connectors** query the source in real time through Model Context Protocol (MCP) without indexing it. The service description adds a government-cloud qualification: external connections and partner connectors aren't enabled by default for government clouds. It does not say how they are enabled.

Connections are deployed by an AI administrator in the Microsoft 365 admin center, under **Copilot > Connectors**. The deployment steps let the administrator deploy a connector to a subset of users for validation before a broader rollout, and once the connection is created, the connector begins indexing content using default settings.

The roadmap item is **Launched**, released as General Availability for DoD on Desktop, with a target of June CY2026. One Microsoft page reads differently: the Copilot Search overview still lists **Connectors** for DoD among Copilot Search features not yet available, with an estimated availability of 2026.

## Why it matters

For a DoD tenant this puts content from non-Microsoft systems in front of Copilot inside the tenant. Indexed connector data becomes Customer Data held in the Microsoft 365 tenant, and Microsoft's terms of use make the organisation responsible, as data controller, for what it indexes and for any third-party terms. That makes each connection a data-handling decision that the accreditation and records owners will want to see before the AI administrator creates it.

If nobody acts, the service description's government-cloud note means external connections stay off. The real exposure starts when a connection is created: the access setting chosen at setup decides whether indexed items are visible only to users with access in the source system or to everyone in the organisation, and that choice carries straight into Copilot answers.

## Risk assessment

**Data exposure**
- Each synced connection copies external content into the Microsoft 365 index. On the connector's **Users** tab, **Access Permissions** can be set to **Everyone in the organization**, which makes the connection's indexed data visible to everyone in the organisation.
- Incremental crawls don't support permission updates, so a permission removed in the source system reaches the index only when a full crawl runs. Plan full crawls for connections whose source permissions change often.

**Security & identity**
- Synced connectors use data source credentials such as API keys or service account tokens, and prebuilt connectors need admin access to the external service. Those credentials become a standing route into the source system; scope the service account to the content you intend to index.
- Users are mapped by matching their email to UserPrincipalName or Mail in Microsoft Entra ID by default; a wrong mapping formula can give the wrong people access to items.
- If the data source sits behind an IP firewall, Microsoft publishes dedicated ranges for the DoD regions (usdodcentral 57.17.40.192/26, usdodeast 52.181.74.64/26) to allow.

**Autonomy & actions**
- No change for synced connectors: they read and index content on a schedule set by the administrator. Microsoft's terms of use say enabling connectors can also authorise sending Customer Data to third-party services and modifying data in them, subject to your configuration; check what each connector you deploy does before enabling it.

**Change & support**
- Users will start seeing external content in Copilot answers once a connection is deployed to them. The Copilot Search overview's note that connectors in Copilot Search are not yet available for DoD means the surfaces where DoD users find connector content may not match the commercial experience; confirm what your users see before announcing it.

## Cost and licensing

**Licence.** The connectors prerequisites page says your tenant must have Microsoft 365 licences, and that the surfaces available to users depend on licensing:

- Microsoft 365 (any plan): synced connectors in Microsoft Search only.
- Microsoft 365 plus the Microsoft 365 Copilot add-on, or Microsoft 365 E7: synced connectors for Microsoft Search, Copilot grounding and agents, and federated connectors.
- Microsoft 365 plus a Copilot Studio licence, or Microsoft 365 Copilot pay-as-you-go: synced connectors for Microsoft Search and agents only, with no Copilot grounding and no federated connectors.

**Charges.** The same page says indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licences, and that where the organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply. Federated connectors need a Microsoft 365 Copilot add-on licence for every user who queries the federated source. For usage billing on the agent routes, the page points to the Copilot Studio billing rates page.

**Indirect costs.** Admin time to plan each connection, prepare service accounts in the source systems and review access settings.

## Scope

- **Cloud:** the roadmap item lists DoD only; Microsoft's connectors overview lists commercial, GCC, GCC High and DoD.
- **Platform:** Desktop, per the roadmap item.
- **Role:** an AI administrator in the Microsoft 365 admin center configures and deploys connectors. Prebuilt synced connectors also need admin access to the external service.
- **Users:** Microsoft Search results need any Microsoft 365 plan; Copilot grounding needs the Microsoft 365 Copilot add-on (see Cost and licensing).
- **Automation:** the Microsoft Graph create externalConnection and create externalItem APIs are listed as available in US Government L5 (DOD).
- **Prerequisites:** data source credentials, configuration of the external environment and permission to read the content to be indexed.

## Governance guidance

### Before rollout
- Decide with the authorising official and records owner which external systems may be indexed into the DoD tenant, since indexed data becomes Customer Data under Microsoft's terms.
- Confirm which users hold the Microsoft 365 Copilot licence, because Copilot grounding on connector data needs it and Microsoft Search alone does not.
- Prepare a least-privilege service account in each source system, and allow the usdodcentral and usdodeast ranges if the source uses an IP firewall.
- Assign the AI administrator role only to the people who will deploy connections.

### At rollout
- Create each connection under Copilot > Connectors and deploy it to a subset of users for validation first.
- Choose Custom setup and set Access Permissions on the Users tab to Only users with access to the content unless the source content is meant for everyone.
- Check the identity mapping on the Users tab against a sample of users before widening the rollout.

### After rollout
- Test that a user without access in the source system cannot find its items in Copilot or Microsoft Search.
- Schedule full crawls on connections whose source permissions change, since incremental crawls don't process permission updates.
- Watch Message center for how Microsoft enables external connections in government clouds and for connectors in Copilot Search for DoD.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which external data sources are connected and indexed for Copilot and Microsoft Search</strong><br><small>Tenant</small><br><small class="controls__note">AI administrator role. The setup screen offers deployment to a subset of users before broader rollout; Create deploys the connection. The Graph call creates a connection for custom connectors.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Connectors › Gallery › data source <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/external/connections</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-external-post-connections?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether indexed items are visible to everyone or only to users with access in the source</strong><br><small>App</small><br><small class="controls__note">The API side is for custom connectors: the request body's acl property sets who can see each item.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Connectors › Gallery › data source › Custom setup › Users › Access Permissions <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PUT /v1.0/external/connections/{connection-id}/items/{item-id}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-put-items?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that Copilot grounding on connector data requires</strong><br><small>User</small><br><small class="controls__note">Decides Copilot grounding and federated connector use; Microsoft Search results from synced connectors need only a Microsoft 365 plan.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

All admin-centre steps need the AI administrator role. The access setting on the Users tab applies to connectors deployed from the gallery; custom connectors built on the Graph API set an access control list (acl) on each item they push instead. Neither control decides whether external connections are enabled for a government-cloud tenant in the first place: Microsoft's service description says they aren't enabled by default there but does not give the switch. Licence assignment decides who gets Copilot grounding, not who sees connector results in Microsoft Search.

## Open questions

- How are external connections and partner connectors enabled in a DoD tenant, given the service description says they aren't enabled by default for government clouds? Watch the service description and Message center.
- Are federated (MCP-based) connectors available in DoD, or only synced connectors? Watch the connectors overview and federated connectors pages.
- When will connector content appear in Copilot Search for DoD, which the Copilot Search overview still lists as not yet available with an estimate of 2026?
- Which Microsoft-built connectors in the gallery are offered in DoD, and do any send data to, or change data in, third-party services?

<!-- rationale
risk: Low. Microsoft's service description says external connections and partner connectors aren't enabled by default for government clouds, so nothing is indexed until an administrator deploys a connection.
cost: Low. Indexing synced connector data incurs no extra cost for tenants with Microsoft 365 licences, and grounding in Copilot is included with the Microsoft 365 Copilot add-on; the cost is admin time to plan and run connections.
impact: Low. Administrators notice first; users see external content in Copilot and Microsoft Search only after an AI administrator deploys a connection to them.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: paragraph after table / role: All admin-centre steps, including user licence assignment, need the AI administrator role. | Found: You must be at least a License or User Administrator to assign licenses. | Fix: Replace 'All admin-centre steps need the AI administrator role.' with 'Connector deployment and gallery access configuration require the AI administrator role. Assigning user licences requires at least a License or User Administrator.' The licence-assignment source already cited gives the latter requirement. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: Microsoft 365 admin center > Copilot > Connectors > Connectors > Gallery > data source reaches connector setup. | Found: In the left pane, choose Copilot > Connectors. On the Connectors tab, in the left pane, choose Gallery, and select the data source you want to connect ... Choose Create to deploy the connection. | Fix: Extend controls[0].ui.path and its rendered table path to 'Copilot > Connectors > Connectors > Gallery > data source > Create'. The printed route reaches the correct setup page but stops before the deployment control; credentials and other fields remain part of the linked procedure. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/deployment-overview
- [supported, minor] Why it matters; Governance guidance: After rollout / applicability: Item access permissions govern what connector content users can see in Copilot and Search. | Found: Each item includes content, metadata (like title and URL), and an access control list (ACL) that enforces permissions. ... Search and Copilot only show items to users who have access in the source system. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/connectors/overview to sources for the statement that connector item permissions are enforced in both Search and Copilot. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/overview
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Synced connector ingestion reads and indexes content rather than writing changes to the source system. | Found: | Connectors | Plugins | ... | Run on a schedule | Run in real-time | ... | One way data flow (read) | Can support two-way data flow (read and write) | | Fix: Add https://learn.microsoft.com/compliance/anz/blueprint-copilot-servicecom to sources for the scheduled, one-way read behaviour of synced connectors; retain the existing qualification about broader connector functionality in the terms of use. | Source: https://learn.microsoft.com/compliance/anz/blueprint-copilot-servicecom#connectors-and-plugins
- [contradicted, minor] Governance guidance; Governance controls / consistency: The checklist tells readers to check identity mapping, schedule full crawls and restrict AI administrator assignments, but those controls have no table rows. | Found: Check the identity mapping on the Users tab ... Schedule full crawls ... Assign the AI administrator role only ... Table rows cover source connections, item access permissions and user licence assignment. | Fix: The identity-mapping check, full-crawl scheduling and AI administrator role-assignment guidance have no corresponding controls-table rows. Record these as checklist/table coverage gaps; this correction does not request additional rows.
-->
