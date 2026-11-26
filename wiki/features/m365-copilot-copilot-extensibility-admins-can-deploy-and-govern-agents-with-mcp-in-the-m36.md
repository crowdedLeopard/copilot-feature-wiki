---
title: "Microsoft 365 Copilot: admins deploy and govern MCP-based agents in the Microsoft 365 admin center"
slug: "m365-copilot-copilot-extensibility-admins-can-deploy-and-govern-agents-with-mcp-in-the-m36"
roadmapId: 501124
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap plans admin deployment and management of Model Context Protocol (MCP) agents in the Microsoft 365 admin center. Learn already documents MCP server controls there. Admins decide which servers and tools agents may use."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn says agent management needs a subscription for Microsoft 365, Microsoft Copilot or Microsoft Agent 365. The Agent 365 service description lists the Tools Registry and tenant-wide control of tools, including Microsoft MCP servers, as core capabilities included with Microsoft cloud subscription. No MCP-specific price or meter is published."
audiences: ["m365-admin","security","service-owner"]
tags: ["mcp","mcp-server","m365-copilot","agent-365","agent-governance","admin-controls","m365-admin-center","agent-and-plugin-access","extensibility"]
sources:
  - title: "Microsoft 365 Roadmap 501124"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501124"
    kind: "roadmap"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Overview of the Tools page in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-tools-overview"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Bring your own (BYO) MCP server"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-byo-mcp-server"
    kind: "learn"
  - title: "Agent management in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Supported Agent resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-agent-resources"
    kind: "learn"
  - title: "Supported resources for remediation and applyOnce (preview)"
    url: "https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Microsoft Agent 365"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365"
    kind: "learn"
videos: []
related: ["mcp","m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto","m365-copilot-agent-lifecycle-management-rules","m365-copilot-dynamic-tool-discovery-for-declarative-agents-and-federated-copilot-connector","work-iq"]
controls:
  - governs: "Whether an MCP server is available to agents (block or unblock)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Blocks the server's tools through governed Agent 365 and Microsoft 365 admin center pathways; does not automatically disable the underlying API or service endpoint outside them. BYO: enforced by the Agent 365 Tooling Gateway."
  - governs: "Which individual tools of an MCP server are enabled"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Tools > Enabled or Disabled toggle"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Rolling out; supports only specific MCP server types registered on Agent 365. Each tool has an Enabled or Disabled toggle."
  - governs: "Whether a registered MCP server is approved into the organisational registry"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Requests (preview) > Approve"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Needs access to the Tools page and tenant-wide consent rights (AI Administrator or Global Administrator). Entra consent after approval is a separate step."
  - governs: "Which publisher categories of agents and plugins, including MCP servers, users can install"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Options are Microsoft, your organisation and certified external publishers; the Agent settings page labels the third Allow agents and plugins built by external publishers. API: preview TCM applyOnce (see notes below)."
  - governs: "Which users or groups can use agents and plugins, including MCP servers"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "UI options: All users (the documented default), No users, or Specific users or groups. API: preview TCM applyOnce, everyone or noOne only (see notes below)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-26"
roadmapModified: "2025-09-19T22:00:03"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: the roadmap text is thin, so the page describes the MCP server controls that Learn documents in the Microsoft 365 admin center."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected: added the preview Tenant Configuration Management API for Agent and plugin access and User access, extended two admin paths to the control, and removed two checklist items with no matching control row."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 100 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: licensing model set to included, citing the Agent 365 service description; MCP server blocking now says it applies through governed Agent 365 and admin center pathways for all servers, not only BYO."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 97 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 97
  confirmed: 97
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d4314d4dbb27f28d99750a478fde0a33"
---

## What's changing

The roadmap item states that admins can deploy, monitor and manage agents built with the Model Context Protocol (MCP) in the Microsoft 365 admin center, "for secure enterprise use". The record gives no further description, and its status is In development with a target of October CY2025, a date that has passed. The record lists release phase General Availability, the Worldwide (Standard Multi-Tenant) cloud and the Web platform.

Microsoft Learn already documents MCP governance in the admin center, which does not match the roadmap's In development status. Under **Agents** > **Tools**, the Registry tab lists MCP servers with a status of Available or Blocked, and admins can block or unblock a whole server. The Requests tab (marked preview) holds MCP servers that a developer has registered, which an admin approves or rejects. Learn describes per-tool toggles inside a server as rolling out and limited to specific types of MCP servers registered on Agent 365.

The bring-your-own (BYO) route, in which an organisation registers its own remote MCP server with Agent 365, is documented as a preview. Learn does not say whether the roadmap item refers to these pages, so treat what follows as Learn's description of the current controls, not as the item's confirmed scope.

## Why it matters

MCP servers are how agents reach tools, and Learn says some of those tools write, delete or process payments. The admin center is where an organisation decides which servers exist for its agents, who approved them and which tools stay switched off. If nobody sets these controls, Microsoft has not stated what happens on arrival for this roadmap item. The documented default for the **User access** setting is All users, subject to existing app policies and user assignments.

The wiki's view is that service owners should look at the Tools registry now, whatever the roadmap status says. Review which servers are listed, who can approve new ones, and whether the supported ones offer per-tool control. Learn also warns that package-level approval or blocking is not a change to the permissions or credentials of the connected service.

## Risk assessment

**Data exposure**

- A registered MCP server exposes tools that agents can call. Learn gives writing, deleting and processing payments as examples of high-risk tools, and the per-tool toggles in the Registry are the documented way to keep those off while allowing lower-risk tools on the same server.
- Data processed by non-Microsoft services is not subject to Microsoft agreements, per the **User access** page. Check the publisher terms of any external MCP server before it is approved.

**Security & identity**

- Approving a server and granting Microsoft Entra consent are separate steps. Reviewing requests needs access to the Tools page and the ability to grant tenant-wide consent; Learn names AI Administrator and Global Administrator as the two roles that meet both.
- Blocking a BYO server is enforced by the Agent 365 Tooling Gateway for calls routed through it from supported clients. Learn says not to assume a block prevents direct access to the server's own endpoint.

**Autonomy & actions**

- Blocking an MCP server disables its exposed tools through governed Agent 365 and Microsoft 365 admin center pathways; it does not automatically disable the underlying API or service endpoint outside those pathways. A block can stop agents that depend on the server. Tool-level control applies only to supported server types, and for BYO servers it is planned for a future release.

**Change & support**

- Package-level and server-level actions are separate. Blocking a plugin does not block MCP servers or connectors that other plugins use, and Copilot Studio and Power Platform can have separate controls for their components and connections.
- After approval and consent, a server can take up to 30 minutes to appear in all Copilot Studio environments in the tenant, which matters when users report a missing tool.

## Cost and licensing

Learn's agent management page lists the subscriptions that cover agent management in the Microsoft 365 admin center: Microsoft 365 plans (which include Copilot Chat), Microsoft Copilot, and Microsoft Agent 365. Microsoft 365 (E7) includes Microsoft 365 E5, Microsoft Copilot, Microsoft Agent 365 and Microsoft Entra Suite. Its prerequisites also ask that users who create, publish or use agents have the appropriate licences.

The [Microsoft Agent 365 service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365) lists viewing plugins, skills and MCP servers in one registry (Tools Registry) and controlling which tools (plugins, skills, connectors, Microsoft MCP servers) Copilot and Microsoft platform agents can access tenant-wide as core capabilities included with Microsoft cloud subscription.

The pages on the Tools registry, MCP approval and BYO servers state no price and no meter for these controls. A price or consumption rate specific to MCP governance is not yet published. The indirect cost is admin time to review requests and, for BYO servers, developer time to register servers with the Agent 365 CLI.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform, and release phase General Availability. It lists no US Government cloud for this item; that is a record fact, not a statement that the controls are unavailable there.

On Learn, MCP servers appear in the Tools registry alongside plugins, skills and connectors. Reviewing and approving MCP requests needs access to the Tools page and tenant-wide consent rights (AI Administrator or Global Administrator). BYO registration is in preview, with Copilot Studio, Visual Studio Code, Claude Code and GitHub Copilot CLI listed as supported client surfaces; Azure AI Foundry and Microsoft 365 Declarative Agents are not supported in preview. Tool-level control is rolling out and supports only specific MCP server types registered on Agent 365.

## Governance guidance

### Before rollout

- Review the Tools registry (**Agents** > **Tools** > **Registry**) and list each MCP server, its publisher and its status.
- Decide who may approve MCP server requests, and confirm they hold the AI Administrator or Global Administrator role.
- Check the **Agent and plugin access** setting to see which publisher categories (Microsoft, your organisation, certified external publishers) users may install from.
- Check the **User access** setting, whose documented default is All users, and decide whether to narrow it to specific users or groups.

### At rollout

- Review each pending request on the Requests (preview) tab, including the declared tools, before selecting Approve.
- Turn off high-risk tools, such as those that write, delete or process payments, on supported servers instead of blocking the whole server.

### After rollout

- Block any server that fails review, and confirm with its owners which agents depended on it.
- Re-open the Tools registry after each Message center notice about agents or tools to see whether new servers or per-tool controls have appeared.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an MCP server is available to agents (block or unblock)</strong><br><small>Tenant</small><br><small class="controls__note">Blocks the server's tools through governed Agent 365 and Microsoft 365 admin center pathways; does not automatically disable the underlying API or service endpoint outside them. BYO: enforced by the Agent 365 Tooling Gateway.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which individual tools of an MCP server are enabled</strong><br><small>Tenant</small><br><small class="controls__note">Rolling out; supports only specific MCP server types registered on Agent 365. Each tool has an Enabled or Disabled toggle.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Tools › Enabled or Disabled toggle <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a registered MCP server is approved into the organisational registry</strong><br><small>Tenant</small><br><small class="controls__note">Needs access to the Tools page and tenant-wide consent rights (AI Administrator or Global Administrator). Entra consent after approval is a separate step.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Requests (preview) › Approve <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which publisher categories of agents and plugins, including MCP servers, users can install</strong><br><small>Tenant</small><br><small class="controls__note">Options are Microsoft, your organisation and certified external publishers; the Agent settings page labels the third Allow agents and plugins built by external publishers. API: preview TCM applyOnce (see notes below).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can use agents and plugins, including MCP servers</strong><br><small>Tenant</small><br><small class="controls__note">UI options: All users (the documented default), No users, or Specific users or groups. API: preview TCM applyOnce, everyone or noOne only (see notes below).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

All rows are Microsoft 365 admin center settings that Learn documents for MCP servers or for agents and plugins, which Learn says include MCP servers. Microsoft documents preview TCM automation for Agent and plugin access and User access; no matching automation was found for the three MCP server controls at the time of writing (November 2026). The Package Management API's block operation is documented for a Copilot package, and its page does not mention MCP servers.

Preview TCM (Tenant Configuration Management) automation for Agent and plugin access uses mode=applyOnce and baseline.resources with resourceType=microsoft.agent.allowedagenttypes, resourceVersion=1, and properties.valueObject fields areMicrosoftAppsAllowed, areTenantScopedAppsAllowed, areISVAppsAllowed and areMicrosoftCertifiedThirdPartyAppsAllowed. For User access it uses resourceType=microsoft.agent.useraccess, resourceVersion=1, and properties.valueObject.userAssignmentCategory set to everyone or noOne; the reference does not document selecting specific users or groups through this resource. Both require the signed-in AI Administrator and the delegated permissions described at https://learn.microsoft.com/graph/utcm-agent-resources, and TCM applyOnce is available only in the global service.

Blocking a server and blocking a plugin are separate actions: blocking a plugin leaves its MCP servers available to other plugins. Approval of a server request does not grant Microsoft Entra consent, and per-tool toggles apply only to supported server types. A server block applies through governed Agent 365 and Microsoft 365 admin center pathways and does not automatically disable the underlying API or service endpoint outside them; for BYO servers, the Agent 365 Tooling Gateway enforces a block only for calls that pass through it from supported clients.

## Open questions

- Is the roadmap item (target October CY2025, status In development) the same capability as the Tools registry and MCP controls that Learn documents as available, and when will the roadmap status change? Watch the roadmap item and Message center.
- Which MCP server types support per-tool control, and when will it reach BYO servers? Watch the Manage plugins, skills, and MCP servers page.
- Will a price or Copilot Credits rate apply to MCP governance or gateway use? None is published at the time of writing (November 2026).

<!-- rationale
risk: Medium. MCP servers expose tools that can write, delete or process payments, and Learn documents admin controls (block, approval, per-tool toggles) that need configuring; the roadmap item itself states no default.
cost: Low. The only cost the sources show is admin time; Learn lists the Microsoft 365, Microsoft Copilot or Microsoft Agent 365 licences that cover agent management, and no meter or price for these MCP controls is published.
impact: Low. The controls are used by admins and by developers who register servers; users notice only when a server, plugin or tool they rely on is blocked or not approved.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].note; Governance guidance: Before rollout / behaviour: The cited MCP management page describes the publisher categories as Microsoft, your organisation and certified external publishers. | Found: Choose which publisher categories users can access: Microsoft, your organization, or certified external publishers. | Fix: Add to controls[3].note: 'The Agent settings page describes the external option as allowing non-Microsoft agents and plugins built by external developers, without the certification qualifier (https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings).' | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
-->
