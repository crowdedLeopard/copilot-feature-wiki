---
title: "SharePoint: SharePoint agents in Teams mobile group chats and meetings"
slug: "sharepoint-sharepoint-agents-in-teams-mobile"
roadmapId: 481823
topic: "m365-copilot"
products: ["SharePoint","Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap plans SharePoint agents in Teams mobile group chats and meetings. Microsoft has not stated the default or a feature-specific control, so existing agent controls are what an administrator has today."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2025"
previewDate: "August CY2025"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Nothing specific to this feature is published. For SharePoint agents generally, Learn says users with a Microsoft Copilot licence can use them, and users without one can be covered by pay-as-you-go billing."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["sharepoint-agents","sharepoint","teams","mobile","m365-copilot","agents","restricted-content-discovery","pay-as-you-go"]
sources:
  - title: "Manage access to agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    kind: "learn"
  - title: "Upgrade agents in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/sharepoint/upgrade-sharepoint-agents"
    kind: "learn"
  - title: "Use agents with pay-as-you-go billing"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Share an agent in Microsoft Teams"
    url: "https://learn.microsoft.com/training/modules/use-no-code-agents-sharepoint/3-share-agent-microsoft-teams"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 481823"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=481823"
    kind: "roadmap"
videos: []
related: ["microsoft-teams-adaptive-card-based-app-and-copilot-agent-link-unfurling-in-teams","sharepoint-agent-chat-web-part","microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin","m365-copilot-copilot-in-sharepoint"]
controls:
  - governs: "Whether a specific agent is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "For an agent created in SharePoint, Learn says the block only affects Microsoft Copilot Chat. The API is beta and its reference says it needs a Microsoft Agent 365 licence."
  - governs: "Which SharePoint sites Microsoft Copilot can discover content from, and whether their AI entry points show"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "Site permissions are unchanged. Requires a Microsoft Copilot licence and SharePoint Advanced Management; by default only SharePoint administrators manage it."
  - governs: "Which users hold a Microsoft Copilot licence, the licence Learn gives for SharePoint agents"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Requires at least the License Administrator or User Administrator role. Users without a Microsoft Copilot licence can instead be covered by pay-as-you-go billing for SharePoint agents."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-04-01T23:30:25"
changes:
  - date: "2026-11-22"
    note: "First briefing: roadmap-only description of the feature, with the existing SharePoint agent controls and the .agent upgrade timeline around it."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected cost to variable, with the Copilot Studio meter named for pay-as-you-go use, and removed two checklist items that had no matching control row."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the Security & identity bullet on whose permissions apply when an agent is shared in Teams, using Microsoft's Learn module on sharing agents in Teams."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 58
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f5bc376c6f141b2c2cd5b3f42fa97f73"
---

## What's changing

The roadmap item plans to let people use SharePoint agents in Teams mobile group chats and meetings. Its description reads: "Use SharePoint agents in Teams Mobile group chats and meetings." Microsoft Learn does not describe this feature itself at the time of writing (November 2026), so what follows about behaviour is the roadmap's description. The wiki does not state how an agent is added to a chat or meeting on mobile, or what the agent can see there.

The record lists the Worldwide (Standard Multi-Tenant) cloud, release phase General Availability and the platform Web, even though the title names Teams mobile. The record's own platform list and its title therefore differ, and Microsoft has not said which surfaces the item covers.

The status is In development, with a preview target of August CY2025 and a general availability target of September CY2025. Both dates have passed as of 22 November 2026, and the record was last modified on 1 April 2025, so treat the timing as unconfirmed.

Related Learn context: Microsoft's "Upgrade agents in SharePoint and OneDrive" page says existing agents in the .agent file format continue to work across SharePoint, Microsoft Teams and the Copilot app until the end of March 2027, and that .agent files stop responding after March 2027. It says these agents may currently be used in a Microsoft Teams chat or channel. Microsoft has not said how this roadmap item relates to that upgrade.

## Why it matters

For an administrator the change is about reach rather than new data. SharePoint agents are meant to be used where people already talk, so use of them may grow outside the SharePoint sites where they were created. Learn says agents in SharePoint access organisation data the same way Copilot in other Microsoft 365 apps does, responding to users based on their access permissions, so oversharing in the underlying sites matters more than the new entry point.

Microsoft has not stated what happens on arrival, including whether users get the capability automatically or an administrator has to enable it. No source says existing behaviour changes, so the practical step is to confirm that the agent controls you already have cover Teams, as set out under governance.

## Risk assessment

**Data exposure**
- Agents in SharePoint use SharePoint sites, pages and document libraries as knowledge sources, and Learn says an agent's responses depend on each user's permissions to those sources. A new route to the agent should expose nothing beyond those permissions, but it makes existing oversharing easier to hit. Restricted Content Discovery on a site is the documented way to remove that site's AI entry points, including creating agents (see the controls table).
- Microsoft has not said what chat or meeting content, if any, an agent used in a group chat or meeting can read. Confirm this before piloting in meetings.

**Security & identity**
- Learn says the permissions on the .agent file decide who can access or edit an agent. Review those permissions before the agent becomes available in group chats.
- For existing SharePoint agents shared in Teams, Microsoft says the agent responds based on the permissions of the person asking the question; sharing the agent does not automatically change permissions on its sources.

**Autonomy & actions**
- The roadmap description covers only using agents in group chats and meetings. It mentions no new actions or autonomous behaviour.

**Change & support**
- Learn says that blocking an agent in the Microsoft 365 admin center only affects its availability in Copilot Chat for an agent created by using SharePoint, and "doesn't yet apply to OneDrive, SharePoint, or Teams". Do not tell users an agent is blocked in Teams on the strength of that setting.
- Agents saved as .agent files are due to stop responding after March 2027 according to the upgrade page, and the page says an agent added to a Teams chat then shows a message that it needs to be upgraded. Expect support questions from group chats that rely on them.

## Cost and licensing

Microsoft publishes no licence or meter specific to this feature. For SharePoint agents generally, "Manage access to agents in SharePoint" says users with a Microsoft Copilot licence can use the agents, and that access can be managed through Copilot licence assignment.

For users who are not assigned a Microsoft Copilot licence, the same page says access can be controlled through pay-as-you-go billing, and that only users in the security group assigned to the billing policy have access to agents. That page is not specific to this feature, so whether this feature changes any of those charges is not yet published.

For the existing .agent experience, pay-as-you-go charges appear under the Copilot Studio meter on the Azure invoice.

Indirect cost is admin time: checking who holds the licence, which sites agents draw on, and how block and Restricted Content Discovery settings behave.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and release phase General Availability. It lists no US Government cloud. The record's platform is Web, although the title says Teams mobile.

The roadmap does not say which users see the feature or how it rolls out. For SharePoint agents generally, Learn says users with a Microsoft Copilot licence can use them, agents do not require activation, and tenant admins and AI admins can manage actively used agents in the Microsoft 365 admin center. Roles that manage this feature itself are not stated.

## Governance guidance

### Before rollout
- Inventory which sites hold .agent files.
- Identify sites that are not ready for agent use and decide whether to apply Restricted Content Discovery to them (controls table, row 2).
- Confirm which pilot users hold a Microsoft Copilot licence (controls table, row 3).

### At rollout
- Test with a small pilot group whether a SharePoint agent can be used in a Teams mobile group chat or meeting, and note what the agent can read there.
- Block one test agent in the Microsoft 365 admin center (controls table, row 1) and check whether it still responds in Teams, because Learn says the block for a SharePoint agent applies to Copilot Chat.

### After rollout
- Watch the Microsoft 365 roadmap item and Message center for a status change, since the record still shows In development.
- Plan the move of .agent agents before the end of March 2027 date on the upgrade page, starting with agents already added to Teams chats.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a specific agent is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">For an agent created in SharePoint, Learn says the block only affects Microsoft Copilot Chat. The API is beta and its reference says it needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites Microsoft Copilot can discover content from, and whether their AI entry points show</strong><br><small>Site</small><br><small class="controls__note">Site permissions are unchanged. Requires a Microsoft Copilot licence and SharePoint Advanced Management; by default only SharePoint administrators manage it.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold a Microsoft Copilot licence, the licence Learn gives for SharePoint agents</strong><br><small>User</small><br><small class="controls__note">Requires at least the License Administrator or User Administrator role. Users without a Microsoft Copilot licence can instead be covered by pay-as-you-go billing for SharePoint agents.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The block action is the only agent-level availability control in the table, and Learn says that for an agent created in SharePoint it only affects Microsoft Copilot Chat. The Graph reference for the block operation says access to the Package Management API requires a Microsoft Agent 365 licence and the operation is in beta.

Restricted Content Discovery changes discoverability and AI entry points on a site, not permissions: Learn says users who already have access to content can continue to access it. By default only SharePoint administrators manage it, it requires a Microsoft Copilot licence, and the page links SharePoint Advanced Management prerequisites. Licence assignment decides who holds the Microsoft Copilot licence that Learn gives for SharePoint agents, and the licence page says you must be at least a License or User Administrator to assign licences. None of these rows is documented as a control for this roadmap item; they are the existing controls for SharePoint agents.

## Open questions

- Does the roadmap item cover Teams mobile as the title says, or only the Web platform the record lists? Watch the roadmap item and Message center.
- Is the capability on by default for licensed users, or does an administrator or user have to enable it? Microsoft has not stated this.
- Does the admin centre block, or any other setting, stop a SharePoint agent from responding in Teams group chats and meetings, given that Learn says the block does not yet apply to Teams?
- How does this item relate to the .agent file upgrade and the March 2027 end date for .agent files in Teams chats?

<!-- rationale
risk: Low. The roadmap describes a new place to use SharePoint agents, not new data access; Learn says agent responses follow each user's permissions to the agent's data sources.
cost: Variable. SharePoint agent usage by users without a Microsoft Copilot licence uses pay-as-you-go billing and appears under the Copilot Studio meter on the Azure invoice; no separate Teams mobile rate is published.
impact: Low. The roadmap describes use in Teams mobile group chats and meetings, and Microsoft has not said who sees it first or whether it appears by default.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing; controls[2].note; rationale: cost / licensing: Users without a Microsoft Copilot licence can be covered by SharePoint agents pay-as-you-go billing. | Found: For users who aren't assigned with a Microsoft Copilot license, you can control user access to agents through pay-as-you-go billing. | Fix: Narrow the repeated general pay-as-you-go wording in licensing.notes, Cost and licensing, controls[2].note and the cost rationale to: 'For existing .agent files, users without a Microsoft Copilot licence can be covered by SharePoint agents pay-as-you-go billing.' Cite https://learn.microsoft.com/sharepoint/upgrade-sharepoint-agents, which states: 'SharePoint Agents pay-as-you-go only applies to .agent files. The upgraded agents follow the capabilities and licensing model for agents in Microsoft Copilot app.' | Source: https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint
-->
