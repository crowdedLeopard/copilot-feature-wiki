---
title: "SharePoint and OneDrive agents: OneDrive files as knowledge sources"
slug: "onedrive-onedrive-files-as-knowledge-sources-for-agents"
roadmapId: 480728
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","OneDrive","SharePoint"]
summary: "Agents created from SharePoint and OneDrive can be grounded in a maker's OneDrive files. Launched for Copilot-licensed users; no switch specific to OneDrive sources is documented, so admins govern it through licences and agent settings."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2025"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Creating agents in SharePoint needs a Copilot licence. Unlicensed users can use .agent-file agents through SharePoint agents pay-as-you-go billing (12 messages per interaction). Agent Builder agents follow the Copilot app licensing model. No OneDrive-specific rate is published."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["onedrive","sharepoint-agents","knowledge-grounding","agent-builder","m365-copilot","pay-as-you-go","restricted-content-discovery","sensitivity-labels"]
sources:
  - title: "Microsoft 365 Roadmap 480728"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=480728"
    kind: "roadmap"
  - title: "Upgrade agents in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/sharepoint/upgrade-sharepoint-agents"
    kind: "learn"
  - title: "Add knowledge sources to an agent in Agent Builder"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-add-knowledge"
    kind: "learn"
  - title: "Add knowledge sources to your declarative agent"
    url: "https://learn.microsoft.com/plugins/knowledge-sources"
    kind: "learn"
  - title: "Get started with agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/get-started-sharepoint-agents"
    kind: "learn"
  - title: "Manage access to agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    kind: "learn"
  - title: "Use agents with pay-as-you-go billing"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing"
    kind: "learn"
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites"
    kind: "learn"
  - title: "Supported Agent resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-agent-resources"
    kind: "learn"
  - title: "Set up file storage and sharing in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/admin/setup/set-up-file-storage-and-sharing"
    kind: "learn"
  - title: "Which users hold the Copilot licence needed to create agents in SharePoint (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Copilot licence needed to create agents in SharePoint (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Which users or groups can access agents and plugins (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/agent-settings"
    kind: "learn"
  - title: "Which users or groups can access agents and plugins (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Blocking or unblocking an agent for the whole organisation (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Blocking or unblocking an agent for the whole organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Whether a SharePoint site's content can be added to agents (Restricted Content Discovery) (SharePoint admin center)"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
videos: []
related: ["sharepoint-lists-as-a-knowledge-source-for-agents-in-sharepoint-and-onedrive","m365-copilot-sharepoint-list-support-in-agent-builder","restricted-content-discovery","declarative-agents","agent-registry"]
controls:
  - governs: "Which users hold the Copilot licence needed to create agents in SharePoint"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "License Administrator or User Administrator at least."
  - governs: "Whether a licensed user can use Copilot experiences on SharePoint, including agents"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses > Turn apps and services on or off"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses $addLicenses -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Service plan 'Microsoft Copilot for SharePoint'; $addLicenses sets SkuId and DisabledPlans. Also disables Copilot in OneDrive."
  - governs: "Which users or groups can access agents and plugins"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/agent-settings"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Default is All users. Applies to agents in the agent registry, including Agent Builder agents. Preview: applyOnce, resourceType microsoft.agent.useraccess; userAssignmentCategory sets everyone or noOne."
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
    note: "For agents created in SharePoint, blocking only affects Copilot Chat. The Graph API is beta and needs a Microsoft Agent 365 licence."
  - governs: "Whether a SharePoint site's content can be added to agents (Restricted Content Discovery)"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Not supported for OneDrive sites, so it does not govern OneDrive files as knowledge sources."
  - governs: "Tenant switch for OneDrive files as an agent knowledge source"
    scope: "tenant"
    ui: null
    api: null
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-03-09T23:15:17"
changes:
  - date: "2026-11-25"
    note: "New briefing: OneDrive files as agent knowledge, the move to Agent Builder from mid-November 2026, licensing, pay-as-you-go rates and the controls that apply."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected: cost rated variable (metered unlicensed use); added the preview Graph route for agent User access; fixed licence attribution and Azure role scopes; removed checklist steps with no matching control row."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 83 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 83
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "b83d241a24411b5ca19bb796eb3e85b8"
---

## What's changing

Makers can add files from their OneDrive as a knowledge source when they create a custom agent. The roadmap item states that OneDrive files can be added as a grounding source in the Sources tab, for agents created from both OneDrive and SharePoint.

Microsoft Learn does not describe the Sources tab of the SharePoint agent builder in detail. What it does document is the builder that replaces it. Microsoft's upgrade guidance says that from mid-November 2026, agents for SharePoint and OneDrive are created with [Microsoft Copilot Agent Builder](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-add-knowledge), where makers "can still select SharePoint and OneDrive content as knowledge sources", and creating an agent no longer saves a .agent file. In Agent Builder a maker can browse for OneDrive files and folders or enter a OneDrive shared link, up to 50 OneDrive files for each agent. Newly added content can show a **Preparing** status until it is ready.

The agent respects existing permissions and sensitivity labels on the files. Agents in SharePoint answer each user according to that user's own permissions to the agent's data sources, so a colleague who cannot open a OneDrive file gets no content from it.

The roadmap record lists the item as Launched, General Availability, with a target of October CY2025, on the web, in the Worldwide (Standard Multi-Tenant) cloud. Existing .agent files stop responding to prompts after March 2027, according to the [upgrade guidance](https://learn.microsoft.com/sharepoint/upgrade-sharepoint-agents).

## Why it matters

OneDrive is personal storage: [when a file is stored in OneDrive, only its owner can access it unless they share it](https://learn.microsoft.com/microsoft-365/admin/setup/set-up-file-storage-and-sharing). In the wiki's view, that leaves unshared OneDrive files outside the site-level governance most tenants built for Copilot. This feature lets a maker build an agent over those files and share the agent. Because answers follow each user's file permissions, sharing the agent does not by itself expose the files: access to an agent doesn't grant access to its underlying SharePoint or OneDrive content. The practical effect is that makers who want colleagues to get useful answers have a reason to share OneDrive files more widely, and site-level tools such as Restricted Content Discovery do not reach OneDrive.

Agents in SharePoint need no activation: once users hold a Copilot licence, or pay-as-you-go billing covers them, the agents become available to them. Adding OneDrive files is then each maker's choice in the builder. Microsoft Learn documents no tenant setting for OneDrive sources on their own at the time of writing (November 2026), so the levers are the licence, the agent settings in the Microsoft 365 admin center, and the permissions and labels on the files.

## Risk assessment

**Data exposure**
- An agent grounded in OneDrive files answers from those files for anyone the maker shares it with who can also open the files. Permissions and sensitivity labels on the files apply; there is no exposure beyond what file sharing already allows.
- Restricted Content Discovery is not supported for OneDrive sites, so it cannot keep a OneDrive out of agents. The SharePoint guidance says restricted access control can be applied to individual sites or OneDrive.
- Microsoft Purview DLP policies with a **Sensitivity labels** condition can exclude labelled items from being processed by SharePoint agents.

**Security & identity**
- No change to identity: the agent responds with each user's own permissions to its data sources.

**Autonomy & actions**
- No change: the feature adds a knowledge source and does not add actions.

**Change & support**
- Blocking an agent created in SharePoint in the Microsoft 365 admin center only affects its availability in Copilot Chat, not in OneDrive, SharePoint or Teams.
- From mid-November 2026, new agents are created in Agent Builder, and .agent files stop responding after March 2027. Users who built .agent-file agents over OneDrive files will need to upgrade them.

## Cost and licensing

**Licence.** The [SharePoint agents getting-started page](https://learn.microsoft.com/sharepoint/get-started-sharepoint-agents) requires a Copilot licence to create an agent, plus the ability to add new files to a SharePoint site. The [declarative-agent knowledge-sources page](https://learn.microsoft.com/plugins/knowledge-sources#sharepoint-and-onedrive) states that SharePoint and OneDrive knowledge sources require the signed-in user to have an active Microsoft 365 Copilot license. Its introductory table nevertheless lists OneDrive as requiring a licence or metered usage.

**Meter.** For .agent-file agents, the [pay-as-you-go billing page](https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing) bills unlicensed use at 12 messages per interaction (10 for tenant graph grounding, 2 for generative answers). Charges appear under the Copilot Studio meter on the invoice. Interactive use by authenticated Microsoft Copilot users is included at no extra cost. Only users in the security group assigned to the billing policy can use SharePoint agents under pay-as-you-go. Microsoft Cost Management budgets send alerts when spending reaches a threshold.

**After the upgrade.** The upgrade guidance says SharePoint agents pay-as-you-go only applies to .agent files, and upgraded agents follow the licensing model for agents in the Microsoft Copilot app. The Agent Builder prerequisites page says that, for agents using SharePoint files as knowledge, the billing policy must be connected to the SharePoint agents service. The two pages read differently for unlicensed users of Agent Builder agents grounded in OneDrive files. The [upgrade guidance](https://learn.microsoft.com/sharepoint/upgrade-sharepoint-agents) explicitly says unlicensed use is consolidated under Copilot app pay-as-you-go. The [declarative-agent knowledge-sources page](https://learn.microsoft.com/plugins/knowledge-sources) lists OneDrive as requiring a licence or metered usage, but its SharePoint and OneDrive note says an active Microsoft 365 Copilot licence is required and unlicensed requests fail.

Microsoft has published no rate specific to OneDrive knowledge sources.

## Scope

- **Users:** Copilot-licensed users who can add files to a SharePoint site can create agents. Unlicensed users can use .agent-file agents only where pay-as-you-go billing covers them.
- **Roles:** License Administrator or User Administrator to assign licences; SharePoint administrator, plus Owner or Contributor Azure roles on both the Azure subscription and a resource group linked to that subscription, to set up SharePoint agents pay-as-you-go.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Platforms:** Web.
- **Limits:** up to 50 OneDrive files for each Agent Builder agent.
- **Rollout:** Launched; target October CY2025.

## Governance guidance

### Before rollout
- Decide which users hold a Copilot licence, since that decides who can create agents over OneDrive files (Microsoft 365 admin center > Users > Active users).
- Turn off the **Microsoft Copilot for SharePoint** service plan for users who should not build or use agents in SharePoint, knowing that this also disables Copilot in OneDrive for them.
- Set **User access** for agents and plugins to the users or groups allowed to use agents built in Agent Builder.

### At rollout
- Tell makers that each colleague only gets answers from OneDrive files they can already open, so they should not widen file sharing just to make an agent work.

### After rollout
- Block an agent in **Agents > All agents** when it must stop, and remember that for SharePoint-created agents this only removes it from Copilot Chat.
- Inventory .agent-file agents grounded in OneDrive and plan their upgrade before .agent files stop responding after March 2027.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Copilot licence needed to create agents in SharePoint</strong><br><small>User</small><br><small class="controls__note">License Administrator or User Administrator at least.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a licensed user can use Copilot experiences on SharePoint, including agents</strong><br><small>User</small><br><small class="controls__note">Service plan 'Microsoft Copilot for SharePoint'; $addLicenses sets SkuId and DisabledPlans. Also disables Copilot in OneDrive.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses › Turn apps and services on or off <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses $addLicenses -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">Default is All users. Applies to agents in the agent registry, including Agent Builder agents. Preview: applyOnce, resourceType microsoft.agent.useraccess; userAssignmentCategory sets everyone or noOne.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-365/admin/manage/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Blocking or unblocking an agent for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">For agents created in SharePoint, blocking only affects Copilot Chat. The Graph API is beta and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a SharePoint site's content can be added to agents (Restricted Content Discovery)</strong><br><small>Site</small><br><small class="controls__note">Not supported for OneDrive sites, so it does not govern OneDrive files as knowledge sources.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for OneDrive files as an agent knowledge source</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant setting at the time of writing (November 2026) that allows or blocks OneDrive files as a knowledge source on their own. The controls above act on who can build or use agents at all.

- Turning off the **Microsoft Copilot for SharePoint** service plan blocks a user from agents on SharePoint, but also disables Copilot in OneDrive and SharePoint page authoring Copilot for that user.
- Blocking an agent created in SharePoint only affects Copilot Chat. The Graph block operation needs a Microsoft Agent 365 licence and delegated CopilotPackages.ReadWrite.All.
- The Graph route for **User access** is a preview [Tenant Configuration Management](https://learn.microsoft.com/graph/utcm-agent-resources) baseline applied once (mode applyOnce, resourceVersion 1). It does not document specific-user or group selection. It requires delegated ConfigurationMonitoring.ReadWrite.All for the caller, CopilotPolicySettings.ReadWrite for the TCM service principal, and an AI Administrator signed-in user.
- The **Sharing** setting under Agents > Settings applies only to agents built with Microsoft Copilot Agent Builder, which is how agents for SharePoint and OneDrive are created from mid-November 2026.
- Restricted Content Discovery stops a SharePoint site's content being added to agents, but it is not supported for OneDrive sites. For OneDrive, the SharePoint guidance points to [restricted access control](https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint) and Purview DLP with sensitivity labels.

## Open questions

- Will Microsoft add a tenant or per-user setting that stops makers adding OneDrive files to agents, separate from the Copilot licence service plan? Watch Message center and the [SharePoint agents access page](https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint).
- How are unlicensed users billed for Agent Builder agents grounded in OneDrive files, given that the upgrade guidance and the Agent Builder prerequisites page describe pay-as-you-go differently? Watch the [upgrade guidance](https://learn.microsoft.com/sharepoint/upgrade-sharepoint-agents).
- Which Microsoft Purview audit events record a OneDrive file being added to an agent as a knowledge source?
- Will Restricted Content Discovery, or a similar control, be extended to OneDrive?

<!-- rationale
risk: Medium. Makers can point agents at personal OneDrive files, but answers follow each user's own file permissions and labels; Restricted Content Discovery does not cover OneDrive.
cost: Variable. Interactive use by authenticated Microsoft Copilot users is included at no extra cost, while unlicensed .agent-file use is metered at 12 messages per interaction under the Copilot Studio meter.
impact: Medium. Copilot-licensed users who build agents in SharePoint or OneDrive notice it; other users see it only through agents shared with them.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / admin-path: The agent Sharing setting is under Agents > Settings. | Found: Org-wide sharing: In Agents > Settings > Sharing, control who can share agents built in Agent Builder with the organization. | Fix: Add https://learn.microsoft.com/plugins/agent-builder-share-manage-agents to sources and cite it for 'Sharing' under Agents > Settings. | Source: https://learn.microsoft.com/plugins/agent-builder-share-manage-agents
-->
