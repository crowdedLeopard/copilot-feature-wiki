---
title: "OneDrive: build and share agents from OneDrive files, with .agent files retiring after March 2027"
slug: "onedrive-agents-in-onedrive"
roadmapId: 469503
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","OneDrive"]
summary: "Copilot-licensed users can build agents from their own OneDrive files on the web. Since mid-November 2026 new ones are made in Agent Builder, and existing .agent files stop responding after March 2027 unless their owners upgrade them."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2025"
previewDate: "September CY2025"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "The roadmap item states the feature requires a Microsoft Copilot for Microsoft 365 licence. Microsoft says upgraded agents follow the capabilities and licensing model for agents in the Microsoft Copilot app."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["onedrive","agents","m365-copilot","sharepoint-agents","agent-builder","declarative-agents","sharing","dlp"]
sources:
  - title: "Microsoft 365 Roadmap 469503"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=469503"
    kind: "roadmap"
  - title: "Upgrade agents in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/sharepoint/upgrade-sharepoint-agents"
    kind: "learn"
  - title: "Manage access to agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Pay-as-you-go services available in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-services"
    kind: "learn"
  - title: "Supported Agent resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-agent-resources"
    kind: "learn"
  - title: "Manage Copilot agents in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-copilot-agents-integrated-apps"
    kind: "learn"
  - title: "Use agents with pay-as-you-go billing"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing"
    kind: "learn"
  - title: "Which users hold the Microsoft Copilot licence that agents in OneDrive require (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft Copilot licence that agents in OneDrive require (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Which users or groups can access and install agents and plugins (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Which users or groups can access and install agents and plugins (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Blocking or unblocking an agent for the whole organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["onedrive-onedrive-files-as-knowledge-sources-for-agents","sharepoint-agents","declarative-agents","agent-registry","sharepoint-agent-chat-web-part"]
controls:
  - governs: "Which users hold the Microsoft Copilot licence that agents in OneDrive require"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "The roadmap item names the Microsoft Copilot for Microsoft 365 licence as the requirement."
  - governs: "Which users or groups can access and install agents and plugins"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Default is All users. Listed as a prerequisite for upgrading a .agent file. API: applyOnce monitor with the microsoft.agent.useraccess resource (preview); AI Administrator."
  - governs: "Who can share Agent Builder agents with everyone in the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Sharing"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Applies only to agents built with Agent Builder, not .agent files. API: applyOnce monitor with the microsoft.agent.sharing resource (preview)."
  - governs: "Blocking or unblocking an agent for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "For agents created in SharePoint, blocking affects Copilot Chat only and doesn't yet apply to OneDrive. The API requires a Microsoft Agent 365 licence."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-02-05T00:15:27"
changes:
  - date: "2026-11-26"
    note: "New briefing: covers agents in OneDrive, the move to Agent Builder from mid-November 2026 and the end-of-March 2027 retirement of .agent files."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 64 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected the blocking statement: SharePoint-created agents are blocked in Copilot Chat only, while blocking Agent Builder agents also affects other host products; removed an unsupported claim about the roadmap record."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 73 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 71
  unconfirmed: 1
  contradicted: 1
  attempts: 2
  hash: "cbb94a3827137d5a378be5ce1fb4cc96"
---

## What's changing

Agents in OneDrive let a user build an agent from files stored in their own OneDrive, then use it and share it, in OneDrive on the web. The roadmap item states that the feature requires a Microsoft Copilot for Microsoft 365 licence.

Agents built this way were saved as .agent files. Microsoft's upgrade guidance tells OneDrive users they can find their agents through the filters on Home, Shared or Favorites and in the save location **My Files > Documents > Agents**. Microsoft is now retiring the .agent format: starting in mid-November 2026, creating an agent from OneDrive uses Microsoft Copilot Agent Builder and no longer saves a .agent file, and agents are edited, shared and monitored through the Copilot app and managed through Agent 365. Microsoft also says OneDrive users should use the Copilot app to use their agents.

Existing .agent files continue to work across SharePoint, Microsoft Teams and the Copilot app until the end of March 2027. After that they stop responding, and opening one in OneDrive shows a message that an upgrade is required. Microsoft states there is no automatic upgrade: the owner upgrades each agent in the builder with **Upgrade to Microsoft 365 agent**, re-creates it, or deletes it.

The roadmap record lists the item as Launched and in General Availability, with a preview date of September CY2025 and a target of November CY2025, for the Worldwide (Standard Multi-Tenant) cloud on the Web. The Microsoft Learn upgrade page describes the creation experience as having changed since.

## Why it matters

For most tenants the decision now is not whether to allow OneDrive agents but what happens to the ones people already built. Each .agent file sits in one person's OneDrive, so there is no site owner to notice it, and Microsoft's guidance leaves the upgrade to the agent's owner. Agents that colleagues rely on will stop answering after March 2027 unless their owner upgrades them, and sharing does not carry over except where the file was shared with everyone in the organisation.

If nobody acts, Copilot-licensed users can keep building agents from their OneDrive files, now through Agent Builder, where the Microsoft 365 admin center's agent settings apply, and any .agent files they made stop responding after March 2027. Expect support requests from users who meet the upgrade-required message and from people who lose access to an agent that was re-created as private.

## Risk assessment

**Data exposure**
- An agent answers from the OneDrive and SharePoint content its owner selects. Microsoft states that access to an agent doesn't grant access to its underlying SharePoint or OneDrive content, so each user's answers stay within files they can already open; an agent built on overshared files repeats that oversharing.
- Microsoft's page on agents in SharePoint documents Purview DLP as the way to keep selected files out of agent answers, and says to govern .agent files with conditions based on the .agent extension rather than sensitivity labels.

**Security & identity**
- The permissions on the .agent file decide who can open or edit the agent, so a OneDrive agent is shared like any other file. After the upgrade, sharing is set on the agent in Agent Builder, and the upgraded agent is private unless the .agent file was shared with everyone in the organisation.

**Autonomy & actions**
- No change described: Microsoft's upgrade page describes agents built from SharePoint and OneDrive content as question-and-answer, retrieval and analysis experiences.

**Change & support**
- .agent files stop responding after March 2027, there is no automatic upgrade, and existing .agent usage history doesn't transfer to the replacement.
- For agents created using SharePoint, blocking affects Copilot Chat only and does not yet apply to OneDrive, SharePoint or Teams. Blocking Agent Builder agents also affects other host products.

## Cost and licensing

- **Licence.** The roadmap item states that the feature requires a Microsoft Copilot for Microsoft 365 licence. Microsoft's page on agents in SharePoint says users with a Microsoft Copilot licence can use the agents.
- **After the upgrade.** Microsoft's upgrade page says upgraded agents follow the capabilities and licensing model for agents in the Microsoft Copilot app, and that SharePoint Agents pay-as-you-go applies only to .agent files.
- **Pay-as-you-go.** Microsoft's pay-as-you-go pages describe the SharePoint agents service in terms of SharePoint sites and document libraries; whether it covers .agent files stored in OneDrive is not yet published.
- **Automation.** The Graph block operation in the controls table requires a Microsoft Agent 365 licence, according to its reference page.
- **Indirect costs.** Owner time to upgrade, re-share and test agents, and admin time to find them and communicate the March 2027 deadline.

## Scope

- **Users:** the roadmap item names a Microsoft Copilot for Microsoft 365 licence; to upgrade an agent, Microsoft lists edit permission on the .agent file, user access to agents and plugins, and the ability to share the agent.
- **Platform:** OneDrive on the web, per the roadmap record.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) only. Microsoft's upgrade page states that all the upcoming .agent changes apply to Microsoft Government Cloud.
- **Roles:** for the Graph Tenant Configuration Management calls in the controls table, AI Administrator is the least-privileged role for the signed-in user.
- **Rollout:** the Agent Builder creation experience and the upgrade button began rolling out in mid-November 2026; .agent files stop responding after March 2027.

## Governance guidance

### Before rollout
- Confirm which users hold the Microsoft Copilot licence that the roadmap names, under Users > Active users in the Microsoft 365 admin center.
- Check the **User access** setting under Agents > Settings, which Microsoft lists as a prerequisite for upgrading an agent and which defaults to **All users**.
- Decide who may share Agent Builder agents with everyone in the organisation under Agents > Settings > Sharing, before owners re-share upgraded agents.

### At rollout
- Tell Copilot-licensed users that new OneDrive agents are now built in Agent Builder and that .agent files in My Files > Documents > Agents stop responding after March 2027.
- Ask owners to upgrade the agents others depend on with **Upgrade to Microsoft 365 agent**, then share the upgraded agent again with the people who need it.
- Ask owners to capture any .agent usage figures they need first, because usage history doesn't transfer.

### After rollout
- Review upgraded agents under Agents > All agents in the Microsoft 365 admin center, and block any that should not be used, remembering that blocking a SharePoint-created agent affects only Copilot Chat.
- Ask owners to delete .agent files they no longer use; deleted files go to the recycle bin.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft Copilot licence that agents in OneDrive require</strong><br><small>User</small><br><small class="controls__note">The roadmap item names the Microsoft Copilot for Microsoft 365 licence as the requirement.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access and install agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">Default is All users. Listed as a prerequisite for upgrading a .agent file. API: applyOnce monitor with the microsoft.agent.useraccess resource (preview); AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can share Agent Builder agents with everyone in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Applies only to agents built with Agent Builder, not .agent files. API: applyOnce monitor with the microsoft.agent.sharing resource (preview).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Sharing <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Blocking or unblocking an agent for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">For agents created in SharePoint, blocking affects Copilot Chat only and doesn't yet apply to OneDrive. The API requires a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no OneDrive-specific switch for agents at the time of writing (November 2026); access follows the Copilot licence. Microsoft's [page on agents in SharePoint](https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint) also describes turning the **Microsoft Copilot for SharePoint** service plan off per user on the Microsoft Copilot licence details page, which also disables Copilot in OneDrive for that user.

**Sharing** applies only to agents built with Microsoft Copilot Agent Builder, so it governs new and upgraded agents and not .agent files, whose access follows file permissions. Blocking in the admin centre affects Copilot Chat only for agents created in SharePoint.

The Graph calls for User access and Sharing are Tenant Configuration Management monitors in **applyOnce** mode (preview, beta), which apply a baseline holding the `microsoft.agent.useraccess` or `microsoft.agent.sharing` resource once. The Graph block operation requires a Microsoft Agent 365 licence.

## Open questions

- Does the SharePoint agents pay-as-you-go service cover .agent files stored in OneDrive, so that unlicensed users can use them until March 2027? Watch the SharePoint pay-as-you-go pages on Microsoft Learn.
- Do the inventory routes Microsoft lists for SharePoint agents (SharePoint Advanced Management agent reports, the agent registry) list .agent files stored in users' OneDrive accounts? Watch the upgrade page.
- Does the **User access** setting in Agents > Settings govern existing .agent files in OneDrive, or only agents in the catalogue? Watch the agent settings page.
- Will agents in OneDrive be offered in US Government clouds, given that the roadmap lists Worldwide only while the upgrade page says the .agent changes apply to Microsoft Government Cloud? Watch the roadmap item and Message center.

<!-- rationale
risk: Medium. Agents answer from files their owner picks and are shared like files, so exposure follows existing OneDrive permissions, but blocking a legacy SharePoint-created agent in the Microsoft 365 admin center does not yet apply to OneDrive.
cost: Low. The roadmap ties the feature to the Microsoft Copilot for Microsoft 365 licence; the cost to plan for is owner and admin time to upgrade or retire .agent files before the end of March 2027.
impact: Medium. Copilot-licensed users who built or rely on OneDrive agents notice: creation has moved to Agent Builder, and their .agent files stop answering after March 2027.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Because a OneDrive .agent file sits in one person's OneDrive, there is no site owner to notice it. | Found: Searched: OneDrive agents .agent files site owner upgrade owner responsibility. Read upgrade-sharepoint-agents and manage-access-agents-in-sharepoint; neither establishes that OneDrive agent files have no site-owner oversight. | Fix: Remove ', so there is no site owner to notice it' from Why it matters. Retain the documented owner-led upgrade guidance.
- [contradicted, blocker] Open questions: inventory routes / absence: Whether SharePoint Advanced Management agent reports cover .agent files in users' OneDrive accounts remains an open documentation question. | Found: The Agent Insights report gives SharePoint admins detailed visibility into newly created agents across all SharePoint and OneDrive sites within their organization. | Fix: Replace the inventory bullet with: 'Does the agent registry list .agent files stored in users' OneDrive accounts? Watch the upgrade page.' Remove SharePoint Advanced Management agent reports from that open question; their OneDrive coverage is documented at https://learn.microsoft.com/sharepoint/monitor-agent-usage and https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents. | Source: https://learn.microsoft.com/sharepoint/monitor-agent-usage
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].api / command: POST /beta/admin/configurationManagement/configurationMonitors applies User access through an applyOnce baseline containing microsoft.agent.useraccess. | Found: applies a desired-state baseline once in applyOnce mode. POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors | Fix: Keep the call. Append to controls[1].note: 'The request body sets mode to applyOnce and baseline.resources to a microsoft.agent.useraccess resource, with properties.valueObject.userAssignmentCategory set to everyone or noOne.' The property is documented at https://learn.microsoft.com/graph/utcm-agent-resources. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
- [supported, minor] controls[2].api / command: POST /beta/admin/configurationManagement/configurationMonitors applies Sharing through an applyOnce baseline containing microsoft.agent.sharing. | Found: applies a desired-state baseline once in applyOnce mode. POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors | Fix: Keep the call. Append to controls[2].note: 'The request body sets mode to applyOnce and baseline.resources to a microsoft.agent.sharing resource, with properties.valueObject.organizationWideSharingAssignment.userAssignmentCategory set to everyone or noOne.' The property is documented at https://learn.microsoft.com/graph/utcm-agent-resources. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
- [supported, minor] controls[3].api / command: POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block blocks the selected Copilot package. | Found: Block a Copilot package to prevent its usage. POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block | Fix: Keep the call and licence note. Append to controls[3].note: 'This is a beta API; Microsoft does not support its use in production applications.' | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
-->
