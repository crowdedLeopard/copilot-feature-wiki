---
title: "Microsoft Teams: Channel Agent works with GitHub, Asana and Jira through MCP servers"
slug: "microsoft-teams-channel-agent-to-3p-mcp-tool-orchestration-in-teams-channels"
roadmapId: 515466
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans to let Teams Channel Agent use GitHub, Asana and Jira through MCP servers. Rollout is paused, it needs admin enablement and a Microsoft 365 Copilot licence, and Learn documents no MCP-specific control."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "November CY2025"
previewDate: null
risk: "medium"
cost: "medium"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "add-on"
  notes: "Microsoft's notice MC1182703 says a Microsoft 365 Copilot licence is required. The Channel Agent Learn page lists a Microsoft Copilot licence, a Teams licence and a Microsoft 365 base licence as prerequisites. No price or meter for this feature is stated. Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible subscription plans."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["teams","channels","agents","mcp","m365-copilot","github","app-management","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap item 515466"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=515466"
    kind: "roadmap"
  - title: "MC1182703: (Updated) Microsoft Teams: Channel agent orchestration with GitHub, Asana, and Jira via Model Context Protocol (MCP)"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1182703"
    kind: "message-center"
  - title: "Set up a Channel Agent for Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Channel Agent in Teams"
    url: "https://learn.microsoft.com/purview/ai-teams-channel-agent"
    kind: "learn"
  - title: "Considerations for Microsoft Purview to manage Microsoft 365 Copilot and Channel Agent in Teams for security and compliance"
    url: "https://learn.microsoft.com/purview/ai-m365-copilot-considerations"
    kind: "learn"
  - title: "License Options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
videos: []
related: ["mcp","microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin","microsoft-teams-enable-agents-for-existing-applications-in-your-organization"]
controls:
  - governs: "Whether the Channel Agent app is allowed or blocked for the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Channel Agent > Actions > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Turns off the whole Channel Agent, not only third-party MCP use. The cmdlet is the general Teams app cmdlet."
  - governs: "Which users and groups can use Channel Agent"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Channel Agent > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability > Available to"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -AppAssignmentType Everyone"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Learn says users not enabled for Channel Agent can see the agent's messages but cannot interact with it. Covers Channel Agent as a whole, not MCP separately."
  - governs: "Third-party MCP server access from Channel Agent"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting specific to this feature is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2025-11-14T23:15:39"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item; reflects Microsoft's notice that the rollout is paused (update dated August 20, 2026)."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 77 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Correction: noted that Channel Agent auto-creation is off by default for EDU tenants, described the Targeted Release dates as the notice's window, added the Copilot licence source and the Purview DLP caveat, and removed the audit-log checklist step."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 82 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 82
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a5c41ccd048d20deb8ad820e0bfbe855"
---

## What's changing

Microsoft plans to let Channel Agent, the agent that Teams can attach to a channel, work with selected third-party Model Context Protocol (MCP) servers, named as GitHub, Asana and Atlassian (Jira). The roadmap item says that when a user asks Channel Agent a question, it can use these tools to gather information or complete tasks, and it shows each step of its reasoning.

The roadmap record gives the status as Rolling out with a target of November CY2025, for Worldwide (Standard Multi-Tenant), on Desktop, in the General Availability and Targeted Release phases. Microsoft's notice [MC1182703](https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1182703) (published 2025-11-04, last updated 2026-10-12) gives a Targeted Release window beginning in mid-November 2025 and expected to complete by the end of July 2026 (previously late January). It says the feature will be available in preview and requires admin enablement. An update dated August 20, 2026 says Microsoft has paused the rollout and will announce in Message center when it proceeds, and that General Availability timing will also be communicated there. The notice is the later statement, so treat the roadmap's Rolling out status as superseded for rollout timing.

The Channel Agent Learn page is marked public preview and describes the agent, its knowledge sources and its admin controls. It does not describe MCP orchestration, so what this briefing says about the MCP behaviour comes from the roadmap description and the notice.

## Why it matters

The decision for an administrator is whether a channel-scoped agent may reach tools that hold source code and work tracking. Channel Agent is allowed by default, and by default a Channel Agent is added automatically to any new channel an eligible user creates, so the agent may already be present in many teams before MCP is switched on. For EDU tenants, however, auto-creation is off by default. The MCP capability would extend what that existing agent can reach.

Microsoft's notice says there is no impact unless tenant admins enable the feature, so with the rollout paused nothing needs doing in a hurry. The reasonable view is to prepare the decision now: know who has Channel Agent, who holds a Microsoft 365 Copilot licence and which teams use GitHub, Asana or Jira, so that the resumption notice finds you ready.

## Risk assessment

**Data exposure**

- Channel Agent already draws on a channel's messages, its SharePoint files, channel and standard meetings, and meeting transcripts. Microsoft has not described which of that content would be sent to GitHub, Asana or Atlassian servers when the agent calls them; confirm this before enabling.
- For files it reads, Learn says the agent checks the requesting user's access and does not use files whose sensitivity labels prevent extraction or files with DLP policies that prevent AI use. Microsoft's Purview considerations page gives different guidance: it says you can't prevent Channel Agent from summarizing labeled files that are identified by a Microsoft Purview Data Loss Protection policy. Whether those checks also cover what is sent to a third-party server is not documented.
- The Channel Agent page lists that processing data from previews can happen outside the EU Data Boundaries. The notice describes this feature as preview.

**Security & identity**

- Microsoft has not described which account Channel Agent would use to reach the third-party servers or how a user authorises the connection. Confirm both before approving any pilot.
- Learn lists that Channel Agents are not supported in tenants that use Customer Key.

**Autonomy & actions**

- The roadmap says the agent can complete tasks using these tools, so actions in the third-party service are possible. Which actions, and whether a user approves each one, is not described.

**Change & support**

- The roadmap still says Rolling out while the notice says the rollout is paused. Expect questions from users who read the roadmap, and keep helpdesk guidance aligned to the notice.
- Learn documents no switch that turns off third-party MCP use while leaving the rest of Channel Agent on; blocking the Channel Agent app turns off the whole agent.

## Cost and licensing

Microsoft's notice MC1182703 says a Microsoft 365 Copilot licence is required to use this feature. The Channel Agent Learn page ([Set up a Channel Agent for Microsoft Teams](https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams)) lists licensing requirements for users: an eligible Microsoft 365 base licence, an eligible Teams licence (which might be included in the Microsoft 365 subscription) and a Microsoft Copilot licence. It also lists membership of the Teams public preview and Loop experiences in Teams turned on.

That page names no meter, cap or price for Channel Agent, and no meter or price for this feature is stated in the sources. Whether GitHub, Asana or Atlassian require their own plans for this use is also not stated; confirm with each vendor.

The indirect costs are admin time to decide who may use Channel Agent, a pilot group and updated helpdesk guidance, which the notice asks administrators to review.

## Scope

- **Users:** people who meet the Channel Agent prerequisites, including a Microsoft Copilot licence, and who are enabled for Channel Agent. Learn says users who aren't enabled can view the agent's presence and messages but can't interact with it.
- **Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Desktop. It lists no other cloud or platform.
- **Rollout:** the notice gives a Targeted Release window beginning in mid-November 2025; rollout is now paused, with no General Availability date given.
- **Learn limitations for Channel Agent:** one Channel Agent per channel, no support in private channels, no support in tenants that use Customer Key, and Channel Agents with external users aren't functional.
- **Prerequisite:** Loop experiences in Teams must be turned on for Channel Agents to be used in meetings.

## Governance guidance

### Before rollout

- Check whether the Channel Agent app is allowed or blocked in the Teams admin center, using the first row of the controls table.
- Check which users and groups can use Channel Agent, using the second row, and compare that list with who holds a Microsoft 365 Copilot licence.
- List the teams that use GitHub, Asana or Jira and ask their owners what the agent should and should not be able to read or change there.
- Watch Message center post MC1182703 for Microsoft's notice that rollout resumes.

### At rollout

- Follow Microsoft's notice: it asks administrators to enable Channel Agent usage in Teams and to allow apps that integrate with MCP servers such as GitHub, Asana or Jira. Which setting allows those apps is not stated, so confirm it before acting.
- Start with a pilot group through the availability control in the second row, not the whole tenant.
- Test with a non-sensitive channel and record what each reasoning step shows, which tool it calls and whether the user is asked to approve.

### After rollout

- Review the pilot's labelled content: Learn says responses show the sensitivity label but do not inherit the label's controls.
- Update helpdesk guidance, as the notice advises, once the behaviour is confirmed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Channel Agent app is allowed or blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Turns off the whole Channel Agent, not only third-party MCP use. The cmdlet is the general Teams app cmdlet.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Channel Agent › Actions › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups can use Channel Agent</strong><br><small>Group</small><br><small class="controls__note">Learn says users not enabled for Channel Agent can see the agent's messages but cannot interact with it. Covers Channel Agent as a whole, not MCP separately.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Channel Agent › Users and groups › Select to manage who this app is installed for or available to in your organization › Availability › Edit availability › Available to <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -AppAssignmentType Everyone</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Third-party MCP server access from Channel Agent</strong><br><small>Tenant</small><br><small class="controls__note">No setting specific to this feature is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Blocking the Channel Agent app in the Teams admin center turns off Channel Agent for users, which includes any MCP use; it is not an MCP-only switch. Learn says Channel Agents are also blocked if all apps are blocked for the organisation, and that the Allow button is missing when availability is set to No one.

The third row states a gap: Microsoft Learn documents no admin setting or Teams PowerShell parameter specific to third-party MCP servers in Channel Agent at the time of writing (November 2026). Microsoft's notice asks administrators to allow apps that integrate with MCP servers, without naming a setting.

The Channel Agent page also describes a toggle at Teams admin center > Teams apps > Agent settings > auto-creation for automatic creation of Channel Agents in new channels; that governs creation, not MCP use.

## Open questions

- When will Microsoft resume the rollout and announce General Availability? Watch Message center post MC1182703.
- Which setting, if any, turns off third-party MCP use in Channel Agent without blocking the whole Channel Agent app? Watch the Channel Agent page on Microsoft Learn.
- What content leaves Microsoft 365 when Channel Agent calls GitHub, Asana or Atlassian, and which account does it use to sign in?
- Can Channel Agent change data in those tools, and does a user approve each action?
- Are calls to the third-party servers recorded in the unified audit log and covered by DLP and sensitivity label checks?

<!-- rationale
risk: Medium. Channel Agent would call third-party servers (GitHub, Asana, Atlassian) and Learn documents no setting specific to that; the notice says nothing changes unless admins enable it.
cost: Medium. Microsoft's notice MC1182703 requires a Microsoft 365 Copilot licence for each user; no separate meter or price for this feature is stated.
impact: Low. Microsoft's notice says there is no impact unless tenant admins enable it, and rollout is paused, so only an opted-in group of Copilot-licensed users would notice.
-->
