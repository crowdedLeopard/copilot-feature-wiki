---
title: "Microsoft Teams: Channel Agent, a built-in Copilot agent for each Teams channel"
slug: "microsoft-teams-channel-agent"
roadmapId: 502526
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "A built-in agent joins Teams channels, learns from channel messages, files and meetings, and writes status reports. It is allowed by default and auto-added to new channels. Decide availability and auto-creation now."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "September CY2025"
previewDate: null
risk: "high"
cost: "medium"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "per-user"
  notes: "The Teams setup page requires an eligible Microsoft 365 base licence, an eligible Teams licence and a Microsoft Copilot licence for each user. The page publishes no price or meter specific to Channel Agent."
audiences: ["m365-admin","service-owner","compliance","end-user"]
tags: ["teams","m365-copilot","agents","channels","app-management","microsoft-loop","meeting-transcripts","sensitivity-labels","information-barriers","web-search"]
sources:
  - title: "Set up a Channel Agent for Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Channel Agent in Teams"
    url: "https://learn.microsoft.com/purview/ai-teams-channel-agent"
    kind: "learn"
  - title: "Admin policies for Loop components and Loop workspaces"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration"
    kind: "learn"
  - title: "Data, privacy, and security for web search in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    kind: "learn"
  - title: "Microsoft 365 Roadmap: Microsoft Teams: Channel Agent"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=502526"
    kind: "roadmap"
  - title: "Who can use Channel Agent (everyone, specific users or groups, or no one) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Retention of Channel Agent interactions under the Teams chats location (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    kind: "learn"
videos: []
related: ["microsoft-teams-channel-agent-to-3p-mcp-tool-orchestration-in-teams-channels","app-management","meeting-transcripts","sensitivity-labels","web-search"]
controls:
  - governs: "Who can use Channel Agent (everyone, specific users or groups, or no one)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Built-in Teams agents > agent > Edit availability"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -AppAssignmentType <String>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Teams Administrator role. The cmdlet reference describes Teams apps and does not mention built-in Teams agents; Learn does not publish Channel Agent's app ID."
  - governs: "Whether the Channel Agent app is allowed or blocked, as the setup page gives it"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Channel Agent > Actions > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "The Teams app management overview says built-in agents are managed from Built-in Teams agents, not Manage apps."
  - governs: "Whether a Channel Agent is added automatically to each new channel"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Agent settings > auto-creation"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams"
    api: null
    note: "On by default; off by default for EDU tenants."
  - governs: "Whether Loop experiences in Teams are on, which Channel Agents need in meetings"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsLoopEnabled $true"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration"
    note: "SharePoint PowerShell. Tenant-wide; setting it to $false turns off Loop components in Teams for everyone."
  - governs: "Retention of Channel Agent interactions under the Teams chats location"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Lifecycle Management > Policies > Retention Policies"
      docs: "https://learn.microsoft.com/purview/ai-teams-channel-agent"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy -Name <String> -TeamsChatLocation <MultiValuedProperty>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    note: "Create the policy with the Teams chats location. Security & Compliance PowerShell; the policy needs a rule (New-RetentionComplianceRule) to take effect."
confidence: "high"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2025-09-24T23:15:27"
changes:
  - date: "2026-11-26"
    note: "New briefing: Channel Agent availability and auto-creation controls, licensing, knowledge sources and Purview coverage."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 93 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 93
  confirmed: 89
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "624f265013db899210bc9282e7cb9dfe"
---

## What's changing

Channel Agent is a built-in Teams agent that sits in a channel and acts as that channel's assistant. Microsoft's setup page says it adopts the channel's name and helps with tasks such as flagging deadlines buried in conversations, writing status reports, assigning tasks and due dates, and answering questions about the work. The roadmap item also says it can send emails, schedule meetings and co-author documents; Microsoft Learn documents that its scheduling skill schedules channel meetings only in the agent's own channel.

The agent learns from the channel's messages and the files in the channel's SharePoint folder, and from standard and channel meetings it is added to. After a meeting transcript is generated, it proposes a summary; if nobody approves or rejects it within 24 hours, the summary is added to its knowledge automatically. Status reports are saved as a `.loop` file in the channel's SharePoint folder, authored by the user who created the agent.

On arrival, Channel Agents are allowed by default, and a Channel Agent is added automatically to any new channel an eligible user creates. Auto-creation is off by default for education tenants. Private channels are not supported, and the agent does not work in tenants that use Customer Key.

The roadmap item is **Rolling out**, targeted for September CY2025, with General Availability and Targeted Release phases, on desktop, Mac, web, iOS and Android, in the Worldwide cloud. The sources disagree on maturity: the Teams setup page is marked public preview and lists membership of the Teams Public preview as a user requirement.

## Why it matters

This is an agent that turns up in channels without anyone asking for it. Because it is allowed by default and auto-created in new channels, a tenant with Copilot licences will start accumulating agents that read channel conversations, files and meeting transcripts, and that write Loop files into channel SharePoint folders. If nobody acts, that happens in every new channel an eligible user creates.

The sharper concern is where its knowledge ends up. Meeting summaries become channel knowledge that any channel member can draw on, including people who were not in the meeting, and Microsoft notes the agent may gather context that crosses Information Barriers. Compliance teams with ethical walls, label-based handling rules or EU Data Boundary commitments should decide before rollout reaches their users, not after.

## Risk assessment

**Data exposure**
- A meeting summary shared with the agent can be used to help any channel member, including people who did not attend or cannot read the transcript. Summaries are added after 24 hours unless a user rejects them; no admin setting for that window is documented.
- Microsoft states Channel Agents may gather context that crosses Information Barriers. Information Barriers policies are therefore not a reliable wall for channel content the agent has learned.
- The agent shows a sensitivity label above its response, but the response does not inherit the label's controls and can be shared further. New Loop components and files it creates do inherit the source label, per the Purview page.
- The Purview page says the agent could summarise, for an authorised user, encrypted items that other channel members cannot open; the user is warned.

**Security & identity**
- The agent checks the requesting user's file permissions and will not use files whose labels prevent extraction or whose DLP policies prevent AI use. When it cannot confirm that every recipient has access, it asks the requester before sharing.
- Processing data from previews can happen outside the EU Data Boundary, according to the setup page.

**Autonomy & actions**
- The agent adds meeting summaries to its knowledge on its own after the 24-hour window. The roadmap describes it sending emails and scheduling meetings; Microsoft Learn does not describe approval steps for those actions.
- The agent searches the web if a user asks it to. The setup page points to the Copilot web search controls for turning this off (see notes below the table).

**Change & support**
- Auto-creation adds an agent to new channels, even when a team owner has turned off **Allow members to add and remove apps**. Expect questions from channel members who see an agent they did not add.

## Cost and licensing

The Teams setup page lists three licences every user must hold: an eligible Microsoft 365 base licence (the eligible list is on Microsoft's Copilot licensing page), an eligible Microsoft Teams licence, and a Microsoft Copilot licence. Tenants with Microsoft 365 (no Teams) licences need separate Teams licences.

The setup page publishes no price, meter or credit charge specific to Channel Agent. Indirect costs are storage for status-report Loop files in channel SharePoint sites, retention of agent interactions under Teams chats retention policies, and admin time to set availability and auto-creation.

## Scope

- **Users:** those with the three licences above who are enabled for the agent. Users who are not enabled can see the agent's presence and messages but cannot interact with it.
- **Who creates it:** owners or members of the team and channel, in standard or shared channels. Private channels are not supported. One agent per channel.
- **Meetings:** to use the agent in a meeting chat, a user must be a member of the agent's channel; Loop experiences in Teams must be on.
- **Admin role:** the Teams admin center requires the Teams Administrator role.
- **Not supported:** tenants using Customer Key; channels with external users, where the agent is not functional.
- **Clouds and platforms:** Worldwide only, per the roadmap record; desktop, Mac, web, iOS and Android.
- **Education:** auto-creation is off by default.

## Governance guidance

### Before rollout
- Decide who should have Channel Agent, then set availability in Teams admin center > Teams apps > Built-in Teams agents (Teams Administrator).
- Decide whether new channels should get an agent automatically, and set auto-creation under Teams apps > Agent settings.
- Brief the compliance team that the agent may gather context across Information Barriers, and that its answers do not carry label controls.
- Check that Loop experiences in Teams are on (`IsLoopEnabled`) if users will add the agent to meetings.

### At rollout
- Create or extend a retention policy with the **Teams chats** location in the Microsoft Purview portal so Channel Agent interactions are retained as required.
- Tell channel owners that meeting summaries join the agent's knowledge after 24 hours unless someone rejects them, and how to remove the agent from a channel.
- Tell users the agent is not supported in private channels or channels with external users.

### After rollout
- Search the unified audit log in the Microsoft Purview portal's Audit solution for Channel Agent prompts and responses.
- Re-check the Teams setup page for the end of the public preview label and any change to the user requirements.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can use Channel Agent (everyone, specific users or groups, or no one)</strong><br><small>Tenant</small><br><small class="controls__note">Teams Administrator role. The cmdlet reference describes Teams apps and does not mention built-in Teams agents; Learn does not publish Channel Agent's app ID.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Built-in Teams agents › agent › Edit availability <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -AppAssignmentType &lt;String&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Channel Agent app is allowed or blocked, as the setup page gives it</strong><br><small>Tenant</small><br><small class="controls__note">The Teams app management overview says built-in agents are managed from Built-in Teams agents, not Manage apps.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Channel Agent › Actions › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a Channel Agent is added automatically to each new channel</strong><br><small>Tenant</small><br><small class="controls__note">On by default; off by default for EDU tenants.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Agent settings › auto-creation <a href="https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Loop experiences in Teams are on, which Channel Agents need in meetings</strong><br><small>Tenant</small><br><small class="controls__note">SharePoint PowerShell. Tenant-wide; setting it to $false turns off Loop components in Teams for everyone.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsLoopEnabled $true</code> <a href="https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Retention of Channel Agent interactions under the Teams chats location</strong><br><small>Tenant</small><br><small class="controls__note">Create the policy with the Teams chats location. Security &amp; Compliance PowerShell; the policy needs a rule (New-RetentionComplianceRule) to take effect.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Lifecycle Management › Policies › Retention Policies <a href="https://learn.microsoft.com/purview/ai-teams-channel-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy -Name &lt;String&gt; -TeamsChatLocation &lt;MultiValuedProperty&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Two Microsoft pages give different places to switch the agent off. The Channel Agent setup page says to allow or block it on **Manage apps**; the Teams app management overview says built-in Teams agents such as Channel Agent are managed from the **Built-in Teams agents** page, not **Manage apps**. Check both in your tenant.

The setup page says that if all apps are blocked for the organisation, Channel Agents are also blocked. The Update-M365TeamsApp cmdlet works on an app ID, and Microsoft Learn does not publish Channel Agent's app ID at the time of writing (November 2026).

Web search by the agent is governed by the **Allow web search in Copilot** policy in Cloud Policy service for Microsoft 365, which applies to Microsoft Copilot and Microsoft Copilot Chat. The setup page warns that turning off web search for users turns it off for all Copilot features that can search the web. See [Data, privacy, and security for web search](https://learn.microsoft.com/copilot/plan/manage-public-web-access).

DLP policies for Teams can scan the messages the agent exchanges with users. Retention policies need a rule before they take effect (New-RetentionComplianceRule).

## Open questions

- Will the Teams setup page drop the public preview label and the Teams Public preview participant requirement, given the roadmap lists General Availability? Watch the Learn page and Message center.
- Does Channel Agent appear in the Microsoft 365 admin center agent inventory, so it can be blocked there as well as in the Teams admin center?
- Will Microsoft document a PowerShell or Graph equivalent for the auto-creation setting under Agent settings?
- What approval does a user give before the agent sends an email or schedules a meeting, as the roadmap describes?
- Will there be an admin setting for the 24-hour window after which meeting summaries join the agent's knowledge?

<!-- rationale
risk: High. Channel Agent is allowed by default and is auto-added to new channels, and Microsoft documents that it may gather context across Information Barriers and that its answers do not carry the controls of a sensitivity label.
cost: Medium. Each user needs a Microsoft Copilot licence on top of an eligible Microsoft 365 base licence and a Teams licence; tenants that already hold Copilot licences pay nothing new for the agent itself.
impact: High. Every new channel an eligible user creates gets a Channel Agent by default, and channel members who are not enabled for it still see its presence and messages.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] rationale: cost / cost: Tenants that already hold Copilot licenses pay nothing new for the agent itself. | Found: Searched: 'Channel Agent pricing meter Copilot license included no additional charge'; '"Channel Agent" "license" "included"'. Read setup, Copilot licensing and Studio billing excerpts; none establishes no new charge for this built-in agent. | Fix: Replace 'tenants that already hold Copilot licences pay nothing new for the agent itself' with 'the Teams setup page publishes no price or meter specific to Channel Agent'.
- [contradicted, blocker] Scope: Who creates it / role: Owners or members of the team and channel can create an agent in standard or shared channels, without an owner-only exception. | Found: If a Team owner has turned off the default setting Allow members to add and remove apps, only Team owners can create and delete a Channel Agent | Fix: After the creator requirement, add: 'If the team owner has turned off Allow members to add and remove apps, only team owners can create and delete a Channel Agent.' Keep the separately documented auto-creation exception. Source: https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams. | Source: https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams
- [contradicted, blocker] controls[3].note; Governance controls table / applicability: Setting IsLoopEnabled to false turns off Loop components in Teams for everyone without regional qualification. | Found: If your organization has multiple regions (that is, organization URLs), you need to disable loop components for all the regions to have consistent results across the organization. | Fix: Replace the disablement sentence in both the note and rendered table with: 'Set-SPOTenant -IsLoopEnabled $false disables Loop components in Teams; organizations with multiple regions (organization URLs) must disable them in all regions for consistent results.' Source: https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration. | Source: https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity / applicability: The setup page says the agent excludes files with DLP policies preventing AI use. | Found: It won't use files that the requesting user doesn't have access to, files whose sensitivity labels prevent extractions, or files with DLP policies that prevent AI-usage. | Fix: Attribute this to the setup page and append: 'The Purview Channel Agent page, however, lists scanning messages in Teams conversations as the only supported DLP capability.' Cite https://learn.microsoft.com/purview/ai-teams-channel-agent; retain both sources rather than resolving their disagreement. | Source: https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams
- [supported, minor] Governance controls: all-apps blocking note / applicability: The setup page says blocking all organization apps also blocks Channel Agent. | Found: Channel Agents are allowed by default. However, if all apps are blocked for your organization, Channel Agents are also blocked. | Fix: Append: 'The Teams app management overview separately says built-in agents are no longer controlled by the Microsoft apps setting and are managed on Built-in Teams agents.' Cite https://learn.microsoft.com/microsoftteams/manage-apps for that qualification; do not present the Microsoft apps setting as a confirmed way to block Channel Agent. | Source: https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The governance checklist's instruction to search Audit has no matching controls-table row. | Found: After rollout: 'Search the unified audit log in the Microsoft Purview portal's Audit solution for Channel Agent prompts and responses.' The five control rows cover availability, blocking, auto-creation, Loop and retention, not Audit. | Fix: The After rollout instruction to search Audit has no corresponding controls-table row. Remove that checklist bullet to reconcile the checklist with the existing table without adding an unverified control row.
-->
