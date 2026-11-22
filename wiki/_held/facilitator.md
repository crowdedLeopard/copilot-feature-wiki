---
kind: "concept"
title: "Facilitator in Microsoft Teams: what does the meeting agent do, and who can switch it off?"
slug: "facilitator"
summary: "Facilitator is the AI agent in Teams meetings that takes shared notes and answers in the meeting chat. It comes with a Microsoft Copilot licence and is governed through Teams app settings, Loop settings and Purview."
created: "2026-11-22"
updated: "2026-11-22"
version: 3
tags: ["facilitator","teams","teams-rooms","m365-copilot","microsoft-loop","meeting-transcripts","meeting-policy","retention"]
covers: []
sources:
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
  - title: "Facilitator in Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft Facilitator"
    url: "https://learn.microsoft.com/purview/ai-teams-facilitator"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
  - title: "Admin policies for Loop components and Loop workspaces"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "New-RetentionComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule"
    kind: "learn"
  - title: "Automatically retain or delete content by using retention policies"
    url: "https://learn.microsoft.com/purview/create-retention-policies"
    kind: "learn"
related: ["meeting-transcripts","meeting-policy","retention","microsoft-teams-enhanced-copilot-and-ai-controls-for-meetings","microsoft-teams-ai-powered-notes-for-in-person-meetings-with-facilitator-in-teams-r-560318","microsoft-teams-facilitator-in-gcc"]
controls:
  - governs: "Whether the Facilitator app is allowed or blocked for the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Facilitator > actions menu > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -IsBlocked <boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "The reference documents the Boolean state parameter but describes both $true and $false examples as unblocking; it does not reliably establish the blocking value. Use the documented admin UI to block Facilitator."
  - governs: "Which users and groups Facilitator is available to"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Facilitator > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability > Available to"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -AppAssignmentType Everyone"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Applies to app centric management; the Facilitator page also describes app permission policies. Specific users and groups use -AppAssignmentType UsersAndGroups."
  - governs: "Loop components in Teams, which Facilitator needs in meetings"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsLoopEnabled $true"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration"
    note: "Tenant-wide; cannot be configured per user. Loop components default to on."
  - governs: "AI-generated notes for meetings"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $false"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration"
    note: "Tenant-wide. Microsoft says the property does not apply to collaborative meeting notes in Teams New Calendar."
  - governs: "Whether users can transcribe meetings, a Teams Rooms setup step"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Learn lists turning on transcription as a step for Facilitator in Teams Rooms."
  - governs: "Take notes button on a room's console home screen"
    scope: "other"
    ui:
      surface: "Pro Management portal"
      path: "Rooms > room > Settings > Device > Show Take notes button on the home screen"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms"
    api: null
    note: "Preview; Teams Rooms Pro. The default setting is enabled."
  - governs: "Retention of Facilitator chat interactions and notes"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Lifecycle Management > Policies > Retention policies > New retention policy > Choose the type of retention policy to create > Static > Choose locations to apply the policy > location"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api:
      kind: "powershell"
      call: "New-RetentionComplianceRule -Policy <policy name> -RetentionDuration <days> -RetentionComplianceAction <Keep, Delete or KeepAndDelete>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule"
    note: "Teams chats location for interactions, OneDrive accounts for notes; create separate policies for the two locations. The cmdlet adds a rule to an existing policy; duration is in days."
confidence: "medium"
dependents: 10
changes:
  - date: "2026-11-22"
    note: "New concept page on Facilitator: what it does in meetings and Teams Rooms, its licence, risks and controls."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 78 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the block command (the reference's examples describe both values as unblocking), the retention command (a rule, not a policy), the availability delay and path, and three smaller wording points."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 111 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: who can see Facilitator output (replacing the claim that any licensed user can start it), open questions that named skills and a policy replacement no Microsoft page states, and the retention policy path."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 114 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 114
  confirmed: 113
  unconfirmed: 0
  contradicted: 1
  attempts: 3
  hash: "0639b12e9d58e46a30e1b549c5dfff9c"
---

## What it is

Facilitator is an AI-powered agent in Microsoft Teams that surfaces agendas, tracks progress and captures key highlights in meetings. Administrators manage it as a Teams app that can be allowed or blocked.

Microsoft says Facilitator acts like an assistant sitting in a meeting: if a user prompts it, all users can view that exchange and its response in the meeting conversation. Copilot in Teams differs, because its prompts and responses are private to the user.

### Where it runs

| Surface | What Learn documents | Status on Learn |
| --- | --- | --- |
| Scheduled Teams meetings | Collaborative notes in the Notes tab, Q&A from meeting and web content, timeline markers, Word documents | Listed as generally available |
| Planner task tracking, PowerPoint creation | Tasks in Planner, decks built from meetings | Public preview |
| Teams Rooms, unscheduled in-person talks | AI notes started from a Take notes button on the room console | Preview |

In meetings, notes are stored as a `.loop` file in the **Meetings** folder in OneDrive of the user who started Facilitator, and Microsoft treats that data as meeting transcript data (see [meeting transcripts](/concepts/meeting-transcripts/)). In Teams Rooms, notes are a Loop file in SharePoint Embedded storage that belongs to the tenant.

## Why it matters

Facilitator is allowed by default, but not if all apps are blocked for the organisation. A licensed user's prompts to it, and its responses and notes, are visible to everyone in the meeting, including unlicensed users.

That makes three decisions yours: who may use it (app availability), whether the Loop and transcription settings it depends on stay on, and how its notes and chat interactions are retained and discovered. Purview support is partial, so these decisions cannot be left to labels or data loss prevention.

## Cost and licensing

Microsoft states that Facilitator is included with a Microsoft Copilot licence and subject to available capacity. Users also need an eligible Microsoft 365 base licence and an eligible Teams licence. For the consumption-only in-room experience in a scheduled meeting, the Teams Rooms page says only the meeting organiser requires a Copilot licence; the Facilitator setup page requires a Copilot licence for users accessing its meeting features.

For in-person notes on a Teams Rooms device, Learn says the preview is currently included with Teams Rooms Pro and requires a Teams Rooms Pro licence on each room resource account. It also says the licensing model may change before final release.

The Facilitator setup page lists licences and user requirements as its prerequisites and names no separate meter or price. For the Copilot licence, see the pages it links.

## Risks and limits

- **Everyone sees prompts.** A prompt typed to Facilitator appears in the meeting chat for all participants, so a sensitive question is disclosed to the whole meeting.
- **Unlicensed users still see output.** Unlicensed users cannot prompt Facilitator, but they can see others' prompts, its responses and its notes.
- **Purview coverage is partial.** Purview lists sensitivity labels, data loss prevention and Insider Risk Management as not supported for Facilitator AI interactions. Notes do not inherit the meeting's sensitivity label, and Prevent copy and paste and Watermarks do not apply to its responses or notes.
- **Retention and discovery gaps.** Retention labels are not supported for cloud attachments in AI-generated notes, and notes are not automatically collected as cloud attachments in eDiscovery.
- **Loop settings can switch it off.** Facilitator needs Loop experiences in Teams turned on. Disabling `IsCollabMeetingNotesFluidEnabled` turns AI-generated notes off for all users, because it cannot be set per user.
- **Language and meeting type.** Notes are not generated if the selected language differs from the spoken one, and in a multilingual meeting, notes are taken only for portions spoken in the selected meeting language. Facilitator is not supported in 1:1 chats, group chats, or external chats and meetings.
- **Rooms notes.** Unsaved Teams Rooms notes are deleted when the session ends, and only participants who add their names and have enrolled profiles are attributed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Facilitator app is allowed or blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">The reference documents the Boolean state parameter but describes both $true and $false examples as unblocking; it does not reliably establish the blocking value. Use the documented admin UI to block Facilitator.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Facilitator › actions menu › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/facilitator-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -IsBlocked &lt;boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups Facilitator is available to</strong><br><small>Group</small><br><small class="controls__note">Applies to app centric management; the Facilitator page also describes app permission policies. Specific users and groups use -AppAssignmentType UsersAndGroups.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Facilitator › Users and groups › Select to manage who this app is installed for or available to in your organization › Availability › Edit availability › Available to <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -AppAssignmentType Everyone</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Loop components in Teams, which Facilitator needs in meetings</strong><br><small>Tenant</small><br><small class="controls__note">Tenant-wide; cannot be configured per user. Loop components default to on.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsLoopEnabled $true</code> <a href="https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>AI-generated notes for meetings</strong><br><small>Tenant</small><br><small class="controls__note">Tenant-wide. Microsoft says the property does not apply to collaborative meeting notes in Teams New Calendar.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $false</code> <a href="https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can transcribe meetings, a Teams Rooms setup step</strong><br><small>User</small><br><small class="controls__note">Learn lists turning on transcription as a step for Facilitator in Teams Rooms.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Take notes button on a room's console home screen</strong><br><small class="controls__note">Preview; Teams Rooms Pro. The default setting is enabled.</small></td><td data-label="Admin UI"><strong>Pro Management portal</strong><br>Rooms › room › Settings › Device › Show Take notes button on the home screen <a href="https://learn.microsoft.com/microsoftteams/rooms/facilitator-teams-rooms" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Retention of Facilitator chat interactions and notes</strong><br><small>Tenant</small><br><small class="controls__note">Teams chats location for interactions, OneDrive accounts for notes; create separate policies for the two locations. The cmdlet adds a rule to an existing policy; duration is in days.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Lifecycle Management › Policies › Retention policies › New retention policy › Choose the type of retention policy to create › Static › Choose locations to apply the policy › location <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionComplianceRule -Policy &lt;policy name&gt; -RetentionDuration &lt;days&gt; -RetentionComplianceAction &lt;Keep, Delete or KeepAndDelete&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Allowing or blocking the app and setting its availability are separate steps: Microsoft describes availability as controlling whether Facilitator is offered to the whole organisation or a group of users. Availability changes take up to 24 hours to take effect; in rare cases, they may take up to six days to appear in the client.

For Teams Rooms, Learn's setup steps are: enable the Facilitator app for the room resource account (include it if availability is scoped to specific users and groups), turn on transcription, turn on Loop experiences, then turn on the Take notes button. The two Loop settings differ in scope: `IsLoopEnabled` governs Loop components in Teams, and `IsCollabMeetingNotesFluidEnabled` governs collaborative meeting notes. Microsoft says the latter does not apply in Teams New Calendar, where Cloud Policy is used instead.

Facilitator interactions in meetings fall under a retention policy for Teams chats, and its notes under OneDrive accounts. Purview Audit supports Facilitator notes, moderation and Q&A.

## What to check

- Check whether Facilitator is allowed, and who it is available to, on the Manage apps page in the Teams admin center.
- Confirm Loop experiences in Teams are on (`IsLoopEnabled`) if you want Facilitator in meetings, and decide deliberately before turning `IsCollabMeetingNotesFluidEnabled` off, since it affects all users.
- Review the Transcription setting in the meeting policies of users who will run Facilitator in Teams Rooms.
- Verify that each Teams Rooms resource account has a Teams Rooms Pro licence and is covered by the app's availability before enabling the Take notes button.
- Create or review retention policies covering Teams chats and OneDrive accounts if Facilitator output must be kept or deleted on a schedule.
- Tell users that Facilitator prompts and answers are visible to everyone in the meeting.

## Open questions

- Which other Facilitator skills will get their own admin switch? The skills section of the Set up Facilitator page documents only the AI-generated notes control at the time of writing.
- Will the Copilot meeting policy change how Facilitator is governed?
- What will Teams Rooms Pro in-person note-taking cost once it leaves preview? Learn says the licensing model may change.
- When will Facilitator reach the US government clouds, and how will it behave there? See the GCC briefing.

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[6].ui / admin-path: The retention path uses Choose locations to apply the policy for both Teams chats interactions and OneDrive accounts notes. | Found: If you chose Static: On the Choose locations to apply the policy page, select one or more locations: Retention policy for all other services: If you chose Static: On the Choose locations page, toggle on or off any of the locations | Fix: Replace controls[6].ui.path and its rendered path with 'Data Lifecycle Management > Policies > Retention policies > New retention policy > Choose the type of retention policy to create > Static > Choose locations to apply the policy (Teams chats) or Choose locations (OneDrive accounts) > location'. Learn documents the two location-page labels separately at https://learn.microsoft.com/purview/create-retention-policies. | Source: https://learn.microsoft.com/purview/create-retention-policies
-->
