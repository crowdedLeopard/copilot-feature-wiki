---
title: "Microsoft 365 Copilot: Microsoft Graph APIs for agent and app inventory and details"
slug: "m365-copilot-microsoft-graph-apis-for-app-and-agent-inventory-and-details"
roadmapId: 502875
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap lists Graph inventory and details APIs for agents and apps as Launched. Learn documents them as List packages and Get package details, which need a Microsoft Agent 365 licence. Admins act only if they script agent governance."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "March CY2026"
risk: "low"
cost: "medium"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Learn states that access to the Package Management API requires a Microsoft Agent 365 licence. The Agent 365 overview says Microsoft 365 (E7) includes Microsoft Agent 365."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["microsoft-graph","agent-registry","agent-365","agent-governance","app-management","copilot-control-system","m365-copilot","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap: item 502875"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502875"
    kind: "roadmap"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "List packages"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    kind: "learn"
  - title: "Get Copilot package details"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-get"
    kind: "learn"
  - title: "copilotPackage resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/resources/copilotpackage"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Graph API for agent registry and agent details"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/graph-api"
    kind: "learn"
  - title: "Manage agent registry in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    kind: "learn"
  - title: "Agent management in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
videos: []
related: ["agent-registry","app-management","m365-admin-center-agent-metadata-in-inventory-export","microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin","m365-copilot-agent-lifecycle-management-rules"]
controls:
  - governs: "Reading the tenant's agent inventory"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All Agents > Registry"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    api:
      kind: "graph"
      call: "GET /v1.0/copilot/admin/catalog/packages"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    note: "Read-only. Needs AI admin or Global admin and CopilotPackages.Read.All; returns agents by default. Get package details is GET /v1.0/copilot/admin/catalog/packages/{id}."
  - governs: "Blocking an agent for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Preview, beta endpoint. Delegated CopilotPackages.ReadWrite.All only. Same API family, not part of the inventory read. For agents created using SharePoint or Microsoft Foundry, blocking only affects availability in Microsoft Copilot Chat."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-25"
roadmapModified: "2026-05-08T22:15:03"
changes:
  - date: "2026-11-24"
    note: "First briefing: documents the List packages and Get package details Graph endpoints, their Agent 365 licence requirement and the differences between the roadmap and Learn."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 75 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after verification: block is qualified for SharePoint and Foundry agents, the role requirement is limited to the two read APIs, and the unsupported 'nothing happens until called' claim is removed."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 74 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 74
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "35a4f41b59581ed437a81f226a2a9e9a"
---

## What's changing

The roadmap item says Microsoft 365 will add Microsoft Graph endpoints that give administrators and developers programmatic access to app and agent management across Copilot, Teams, Outlook and other hosts. It describes an inventory API, with filtering by type, host and last updated date, and a details API that returns metadata for one app or agent.

Microsoft Learn documents these as the Package Management API. A package represents an agent or a tool such as a plugin, MCP server or skill. **List packages** (`GET /copilot/admin/catalog/packages`) returns the inventory and **Get package details** (`GET /copilot/admin/catalog/packages/{id}`) returns detailed metadata for one package. The Learn pages print both `/v1.0/` and `/beta/` URLs for these two operations. By default, listing returns only titles that contain an agent; filtering on `elementTypes` returns tools, and the API does not return Power Platform connectors. The documented filters are `supportedHosts` (Copilot, Outlook, Teams, M365), `elementTypes`, `lastModifiedDateTime`, `platform`, `requestStatus` and `requestType`.

The roadmap record gives the status as Launched, with a preview date of March CY2026 and a target date of April CY2026, for Worldwide (Standard Multi-Tenant) on the Web platform, in General Availability and Targeted Release. Learn and the roadmap differ in places: the Agent Registry page still describes the Graph endpoints as "now in preview", the roadmap describes filtering by type (1P, 3P, LOB, Shared) while the List packages filter table has no `type` entry, and the roadmap speaks of apps and agents where Learn speaks of agents and tools.

## Why it matters

This gives a tenant a scriptable inventory of its agents and, with a filter, its tools, so compliance checks, audits and reporting no longer depend on reading the Registry in the Microsoft 365 admin center. The details endpoint returns fields an auditor asks for, including publisher, version, owners, categories, sensitivity, supported hosts and element details.

The main decision is licensing and access, not risk. Microsoft has not stated a default for the endpoints in the pages read at the time of writing (November 2026), and no source says existing behaviour changes. If your agent governance relies on Agent 365, check that the licence the API requires is already in place.

## Risk assessment

**Data exposure**
- The package resource carries owners, publisher, appId, agentIdentityId and an availableTo value showing whether users can access the package. A caller allowed to read packages can enumerate which agents exist and who owns them. Learn says the APIs require the AI admin or Global admin role, and lists `CopilotPackages.Read.All` as the least privileged delegated and application permission for Get package details.

**Security & identity**
- Learn lists an application permission for the read operation, so a registered app can call it without a signed-in user. Treat any script or service holding `CopilotPackages.Read.All` as having tenant-wide visibility of the agent catalogue.
- The block operation lists a delegated permission only (`CopilotPackages.ReadWrite.All`); Learn shows application permission as not available.

**Autonomy & actions**
- List packages and Get package details are read operations. The same API family has operations that change state, among them update, block, unblock and reassign, which Learn marks preview; block prevents use of the package across the organisation. For agents created using SharePoint or Microsoft Foundry, blocking only affects availability in Microsoft Copilot Chat.

**Change & support**
- Scripts built on the default List packages call miss tools such as plugins, MCP servers and skills unless they filter on `elementTypes`, and miss Power Platform connectors entirely.
- Learn warns that `/beta` APIs are subject to change and not supported in production applications. Build production scripts on the `/v1.0/` URLs that the two read operations print.

## Cost and licensing

The licence is Microsoft Agent 365. The List packages, Get package details and block pages each state that access to the Package Management API requires a Microsoft Agent 365 licence. The Agent 365 overview says Microsoft 365 (E7) includes Microsoft Agent 365.

The pages read name no meter or credit rate for these endpoints. The indirect cost is administrator and developer time to script and maintain the calls, and to keep scripts on the `/v1.0/` endpoints.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform.

Callers need the AI admin or Global admin role, per the Agent 365 Graph API page, and the Microsoft Graph permission named on each reference page (`CopilotPackages.Read.All` for the two read operations). The roadmap record gives no rollout window and no Message Center post is attached to this item.

## Governance guidance

### Before rollout
- Confirm whether the tenant holds Microsoft Agent 365 or Microsoft 365 E7, since Learn says API access requires an Agent 365 licence.
- Decide which administrators and which scripts need inventory access, and limit them to the AI admin or Global admin role the Learn page names.
- Choose the `/v1.0/` endpoints for scheduled jobs, because Learn says `/beta` operations may change.

### At rollout
- Run `GET /v1.0/copilot/admin/catalog/packages` and compare the result with the Registry under Agents > All Agents in the Microsoft 365 admin center.
- Add an `elementTypes` filter where you also need plugins, MCP servers or skills, since the default list returns agents only.
- Use `supportedHosts` and `platform` filters to separate Copilot, Teams and Outlook agents, and Copilot Studio from Agent Builder agents.

### After rollout
- Schedule inventory pulls with a `lastModifiedDateTime ge` filter to find recently changed agents.
- Review agents whose `availableTo` or `deployedTo` shows they reach all users, and pass the owner to the team that built them.
- Use the block row below when an agent must be withdrawn, and note that the Graph block call is preview. For agents created using SharePoint or Microsoft Foundry, blocking only affects availability in Microsoft Copilot Chat.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Reading the tenant's agent inventory</strong><br><small>Tenant</small><br><small class="controls__note">Read-only. Needs AI admin or Global admin and CopilotPackages.Read.All; returns agents by default. Get package details is GET /v1.0/copilot/admin/catalog/packages/{id}.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Registry <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /v1.0/copilot/admin/catalog/packages</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Blocking an agent for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Preview, beta endpoint. Delegated CopilotPackages.ReadWrite.All only. Same API family, not part of the inventory read. For agents created using SharePoint or Microsoft Foundry, blocking only affects availability in Microsoft Copilot Chat.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The inventory endpoints do not change anything: the Registry row is the way to read the same inventory in the admin centre, and the block row is the one control from this API family that blocks an agent in the applicable Microsoft Copilot hosts. Blocking applies to the selected agent; Learn says that if the agent is included in a plugin, you should not assume the action also applies to the whole plugin.

The Graph block operation lists a delegated permission only, so run it as a signed-in administrator rather than as an app. Access to these Graph operations requires a Microsoft Agent 365 licence. The List packages and Get package details APIs require the AI admin or Global admin role, per the Agent 365 Graph API page.

## Open questions

- The roadmap describes filtering the inventory by type (1P, 3P, LOB, Shared). The List packages page documents no `type` filter, although the `type` property on the package says whether it is first-party, third-party, shared or LOB. Does a type filter exist, or must callers filter the results themselves?
- The roadmap says the details API returns capabilities such as Graph connectors, knowledge sources and plugin actions. Which fields of Get package details carry them?
- The Agent Registry page calls the Graph endpoints "now in preview" while the roadmap item is Launched and the read operations print `/v1.0/` URLs. Which endpoints does Microsoft treat as generally available?
- Microsoft has not stated whether the read endpoints are on by default or need a tenant setting. Does a tenant without an Agent 365 licence get an error or an empty list?

<!-- rationale
risk: Low. The two endpoints read inventory and metadata and need the AI admin or Global admin role; the write operations in the same API family (such as block) are marked preview.
cost: Medium. Learn says access to the Package Management API requires a Microsoft Agent 365 licence, which Microsoft 365 E7 includes; a tenant without either needs to add one.
impact: Low. Administrators and developers who script agent governance notice it; end users see no change from the read endpoints.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity / behaviour: An app with the application permission can read package information without a signed-in user. | Found: CopilotPackages.Read.All ... DisplayText | Read all packages information ... Description | Allows the app to read packages information without a signed-in user. | Fix: Add https://learn.microsoft.com/graph/permissions-reference and https://learn.microsoft.com/graph/permissions-overview to sources for the explanations of app-only and delegated access. | Source: https://learn.microsoft.com/graph/permissions-reference#all-permissions
- [supported, minor] front matter: licensing.model; rationale: cost / licensing: Agent 365 can be added separately when it is not already included in the tenant's plan, supporting the add-on model. | Found: Microsoft Agent 365 is available as a stand-alone subscription for use with eligible Microsoft 365 subscriptions and is also included with Microsoft 365 E7. | Fix: Add https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365 to sources to support the separate subscription option used by the add-on model and cost rationale. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
-->
