---
title: "Microsoft Teams: Facilitator joins channel meetings"
slug: "microsoft-teams-facilitator-can-join-channel-meetings"
roadmapId: 568936
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans to let licensed users add Facilitator to Teams channel meetings for notes, agenda, questions and tasks, from February 2027. Microsoft's notice says no action is required."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "February CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Facilitator setup page says Facilitator is included with a Microsoft Copilot licence and subject to available capacity, and lists a Microsoft 365 base licence, a Teams licence and a Copilot licence as requirements. It states no separate price or meter for channel meetings."
audiences: ["m365-admin","compliance","end-user","change-adoption"]
tags: ["facilitator","teams","channels","copilot","meeting-policy","microsoft-loop","purview"]
sources:
  - title: "Microsoft 365 Roadmap 568936"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568936"
    kind: "roadmap"
  - title: "MC1461165: (Updated) Microsoft Teams: Facilitator can join channel meetings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1461165"
    kind: "message-center"
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft Facilitator"
    url: "https://learn.microsoft.com/purview/ai-teams-facilitator"
    kind: "learn"
  - title: "Admin policies for Loop components and Loop workspaces"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Manage who can start instant meetings and schedule meetings"
    url: "https://learn.microsoft.com/microsoftteams/manage-who-can-schedule-meetings"
    kind: "learn"
  - title: "Overview of meetings and events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/overview-meetings-events"
    kind: "learn"
videos: []
related: ["microsoft-teams-facilitator-detects-and-answers-questions","microsoft-teams-facilitator-in-gcc","microsoft-teams-meeting-shared-files","meeting-policy","meeting-transcripts"]
controls:
  - governs: "Whether Facilitator is allowed or blocked for the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Facilitator > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -IsBlocked $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Automation shown here unblocks the app, as described in reference example 4. The reference also describes -IsBlocked $true as unblocking, so a reliable blocking value is not stated; use the admin UI to block."
  - governs: "Whether collaborative AI-generated meeting notes are enabled in Teams"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $false"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    note: "Tenant-wide, not per user. Does not apply to collaborative meeting notes in Teams New Calendar, where Cloud Policy applies. Requires the SharePoint PowerShell module."
  - governs: "Who can schedule channel meetings (existing control; does not govern Facilitator)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting scheduling > Channel meeting scheduling"
      docs: "https://learn.microsoft.com/microsoftteams/manage-who-can-schedule-meetings"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowChannelMeetingScheduling $False"
      docs: "https://learn.microsoft.com/microsoftteams/manage-who-can-schedule-meetings"
    note: "New channel meetings only; the organiser can still edit existing ones. Turning off meeting policy settings also disables join links and conference IDs of existing meetings of that type the user organised; content stays accessible."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-22"
    note: "New briefing: Facilitator in Teams channel meetings, with the schedule from MC1461165 (updated 20 October 2026) and the existing Facilitator controls."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 82 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: removed the unreliable Update-M365TeamsApp blocking call, added the meeting-policy join-link warning, and aligned rollout wording, language limits and checklist with their sources."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 92 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: row 1 now gives the Update-M365TeamsApp automation (documented as unblocking) instead of saying none is documented."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 95 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 95
  confirmed: 95
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "8b407e4bda8b460b1dab1777481e545f"
---

## What's changing

The roadmap item says Facilitator, the AI agent in Teams meetings, can join meetings set up in Teams channels. In the roadmap's words, it helps participants run more effective meetings by taking live notes, managing the agenda, answering questions and capturing tasks. Microsoft's notice MC1461165 says users will be able to add Facilitator to channel meetings.

Microsoft Learn does not describe channel-meeting behaviour yet, so what follows about this feature is the roadmap's and the notice's description. The Facilitator setup page covers Facilitator in meetings generally and, at the time of writing (November 2026), does not mention channel meetings. It lists 1:1 chats, group chats and external chats and meetings as unsupported.

The roadmap record shows the item as In development with a target of February CY2027, for Android, Desktop, iOS, Mac and Web in the Worldwide (Standard Multi-Tenant) cloud, in General Availability and Targeted Release phases. MC1461165 (updated 20 October 2026) gives the schedule: Targeted Release begins in early February 2027 (previously early November 2026) and is expected to complete by mid-February 2027; General Availability (Worldwide) begins in mid-February 2027 (previously mid-November 2026) and is expected to complete by early March 2027. The notice sets no act-by date.

## Why it matters

Channel meetings are visible to a whole team, so an AI agent that writes notes and answers prompts there reaches a different audience from a scheduled meeting with named invitees. Microsoft's notice says organisations that have enabled Facilitator and users licensed for it are affected, and that no action is required. It does not say whether the capability is on by default, so plan on the controls you already have for Facilitator rather than waiting for a new switch.

The practical decision is whether your current Facilitator settings, retention and labelling position suit channel meetings before the February 2027 targets. Facilitator's responses are visible to all participants, and Purview documents gaps for Facilitator AI interactions, so compliance owners should hear about it before users do.

## Risk assessment

**Data exposure**
- Facilitator acts like an assistant in the meeting: the Facilitator page says that if a user prompts it, all users can view that communication. In a channel meeting, confirm who counts as a participant and who can open the notes afterwards; Microsoft has not said.
- The Facilitator page says its meeting data is stored as a .loop file in a OneDrive Meetings folder of the user who initiated Facilitator and is treated as meeting transcript data. The Loop admin page lists a SharePoint site Meetings folder as the storage result for Teams channel meeting notes. Where Facilitator notes from a channel meeting are saved is not stated; confirm this in a pilot.
- The Facilitator page says AI-generated notes do not inherit the meeting's sensitivity label, and that Prevent copy and paste and Watermarks are not applied to Facilitator's responses or notes.

**Security & identity**
- Only licensed users can prompt Facilitator; the page says unlicensed users can see others' prompts, its responses and its notes.
- The Purview page marks sensitivity labels, data loss prevention and Insider Risk Management as not supported for Facilitator AI interactions, and auditing, eDiscovery, communication compliance and data lifecycle management as supported.

**Autonomy & actions**
- The roadmap says Facilitator manages the agenda and captures tasks. The Facilitator page lists task tracking integration with Planner as a public preview capability; whether channel meetings use it is not stated.

**Change & support**
- Facilitator requires Loop experiences in Teams to be turned on, and the page says AI-generated notes support meetings where a single language is spoken. In a multilingual meeting, notes are taken only for portions spoken in the selected meeting language. Expect support questions when notes are missing for either reason.
- The page says Facilitator's notes are not automatically collected as cloud attachments in Purview eDiscovery.

## Cost and licensing

The Facilitator setup page says Facilitator is included with a Microsoft Copilot licence and subject to available capacity. It lists three requirements: an eligible Microsoft 365 base licence, an eligible Teams licence and a Microsoft Copilot licence. Users who lack a Copilot licence cannot prompt Facilitator.

The page states no separate price or meter for channel meetings, and MC1461165 names no cost. Indirect costs are admin time, communications and any extra Copilot licences you assign to people who run channel meetings. The page's wording "subject to available capacity" is not defined there, so ask your Microsoft account team what it means for your tenant.

## Scope

MC1461165 says the affected organisations are those that have enabled Facilitator in Teams, and the affected users are those licensed for Facilitator. The platforms and services it names are Microsoft Teams and Teams channel meetings. The roadmap lists Android, Desktop, iOS, Mac and Web, in the Worldwide (Standard Multi-Tenant) cloud only; the record lists no US Government clouds.

Prerequisites on the Facilitator page: a Microsoft 365 base licence, a Teams licence, a Microsoft Copilot licence, and Loop experiences in Teams for Facilitator in meetings turned on. The page says Facilitator is allowed by default unless all apps are blocked for the organisation. Rollout is Targeted Release from early February 2027, then General Availability from mid-February 2027, expected to complete by early March 2027, per MC1461165.

## Governance guidance

### Before rollout
- Check whether Facilitator is allowed or blocked in the Teams admin center and decide whether it should be available to everyone or a group (controls table, row 1).
- Confirm Loop experiences in Teams are on, because the Facilitator page requires them; decide whether the collaborative meeting notes property should stay enabled (row 2).
- Tell compliance owners that Purview lists no sensitivity label, DLP or Insider Risk Management support for Facilitator AI interactions and that notes do not inherit the meeting's label.
- Identify which people who organise channel meetings hold a Copilot licence.

### At rollout
- Watch MC1461165 and the roadmap item for date changes; the schedule has already moved once.
- Pilot Facilitator in one channel meeting with licensed users and note where the notes are saved and who can open them.
- Tell organisers that Facilitator's responses are visible to everyone in the meeting and that users must select the spoken language when they turn it on.

### After rollout
- Re-read the Facilitator setup page for any channel-meeting limits Microsoft adds.
- Revisit rows 1 and 2 if notes need to be switched off for the whole tenant.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Facilitator is allowed or blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Automation shown here unblocks the app, as described in reference example 4. The reference also describes -IsBlocked $true as unblocking, so a reliable blocking value is not stated; use the admin UI to block.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Facilitator › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/facilitator-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -IsBlocked $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether collaborative AI-generated meeting notes are enabled in Teams</strong><br><small>Tenant</small><br><small class="controls__note">Tenant-wide, not per user. Does not apply to collaborative meeting notes in Teams New Calendar, where Cloud Policy applies. Requires the SharePoint PowerShell module.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $false</code> <a href="https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can schedule channel meetings (existing control; does not govern Facilitator)</strong><br><small>User</small><br><small class="controls__note">New channel meetings only; the organiser can still edit existing ones. Turning off meeting policy settings also disables join links and conference IDs of existing meetings of that type the user organised; content stays accessible.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting scheduling › Channel meeting scheduling <a href="https://learn.microsoft.com/microsoftteams/manage-who-can-schedule-meetings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowChannelMeetingScheduling $False</code> <a href="https://learn.microsoft.com/microsoftteams/manage-who-can-schedule-meetings" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Row 1 gives the organisation-wide Allow or Block action. The Facilitator page separately describes group availability through app policies and app-centric management. It says Facilitator is allowed by default unless all apps are blocked.

Row 2 is a tenant-wide SharePoint property: the Facilitator page says it cannot be set per user and that disabling it turns AI-generated notes for meetings off for all users. The Loop admin page says the property does not apply to collaborative meeting notes in Teams New Calendar, where Cloud Policy applies instead. Microsoft Learn documents no admin centre page for the property at the time of writing (November 2026).

Row 3 is today's control over who can schedule channel meetings. It does not govern Facilitator inside those meetings. Microsoft Learn documents no setting that restricts Facilitator to or from channel meetings only; the Facilitator page's controls apply to Facilitator generally.

For retention, the Purview page says to use a retention policy with the Teams chats option for Facilitator interactions in meetings, and one with the OneDrive accounts option for the notes.

## Open questions

- Is Facilitator available in channel meetings by default once it rolls out, or does an admin or organiser have to turn it on? Watch MC1461165 and the Facilitator setup page.
- Where are Facilitator notes from a channel meeting stored, and who can open them: the initiating user's OneDrive Meetings folder (as the Facilitator page states for meetings) or a SharePoint site folder (as the Loop admin page lists for channel meeting notes)?
- Do the Facilitator allow/block setting and the collaborative meeting notes property cover channel meetings in the same way as other meetings?
- Does task capture in channel meetings use the Planner integration the Facilitator page lists as public preview?
- What does the Facilitator page's "subject to available capacity" mean for licensed users in busy tenants?

<!-- rationale
risk: Medium. Facilitator's prompts, responses and notes are visible to everyone in the meeting, and Purview lists no support for sensitivity labels, DLP or Insider Risk Management for Facilitator AI interactions.
cost: Low. The Facilitator page says Facilitator is included with a Microsoft Copilot licence; it states no separate price or meter for channel meetings, so the known cost is licence assignment and admin time.
impact: Medium. Licensed users in organisations that have enabled Facilitator can add it to channel meetings; everyone in those meetings sees its responses and notes.
-->
