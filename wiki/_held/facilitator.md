---
kind: "concept"
title: "Facilitator in Microsoft Teams: what does the meeting agent do, and who can switch it off?"
slug: "facilitator"
summary: "Facilitator is the AI agent in Teams meetings that takes shared notes and answers in the meeting chat. It comes with a Microsoft Copilot licence and is governed through Teams app settings, Loop settings and Purview."
created: "2026-11-22"
updated: "2026-11-22"
version: 2
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
      path: "Data Lifecycle Management > Policies > Retention Policies"
      docs: "https://learn.microsoft.com/purview/ai-teams-facilitator"
    api:
      kind: "powershell"
      call: "New-RetentionComplianceRule -Policy <policy name> -RetentionDuration <days> -RetentionComplianceAction <Keep, Delete or KeepAndDelete>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule"
    note: "Create the policy in the portal: Teams chats location for interactions, OneDrive accounts for notes. The cmdlet adds a retention rule to an existing policy already scoped to that location; duration is in days."
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
verification:
  status: "held"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 111
  confirmed: 106
  unconfirmed: 3
  contradicted: 2
  attempts: 2
  hash: "4972eee2cd9112d28534b90dbfee70ac"
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

Facilitator is allowed by default, but not if all apps are blocked for the organisation. Unless someone decides otherwise, any user with the required licences can start an agent whose prompts, answers and notes are shared with everyone in the meeting.

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
<tr><td data-label="Control"><strong>Retention of Facilitator chat interactions and notes</strong><br><small>Tenant</small><br><small class="controls__note">Create the policy in the portal: Teams chats location for interactions, OneDrive accounts for notes. The cmdlet adds a retention rule to an existing policy already scoped to that location; duration is in days.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Lifecycle Management › Policies › Retention Policies <a href="https://learn.microsoft.com/purview/ai-teams-facilitator" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionComplianceRule -Policy &lt;policy name&gt; -RetentionDuration &lt;days&gt; -RetentionComplianceAction &lt;Keep, Delete or KeepAndDelete&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
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

- Which other Facilitator skills (question detection, Protection, meeting memory) will get their own admin switch? The skills section of the Set up Facilitator page documents only the AI-generated notes control at the time of writing.
- Will the Copilot meeting policy and its planned replacements change how Facilitator is governed? See the linked briefing on MeetingAI.
- What will Teams Rooms Pro in-person note-taking cost once it leaves preview? Learn says the licensing model may change.
- When will Facilitator reach the US government clouds, and how will it behave there? See the GCC briefing.

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters / role: Any user with the required licences can start Facilitator unless someone decides otherwise. | Found: Only meeting participants who are organizers or presenters and are using Teams for web or desktop can turn Facilitator on or off during a meeting. | Fix: Replace 'any user with the required licences can start an agent' with 'a user with the required licences who is an organiser or presenter using Teams for web or desktop can turn Facilitator on during a meeting'. Cite https://support.microsoft.com/office/37657f91-39b5-40eb-9421-45141e3ce9f6. | Source: https://support.microsoft.com/office/37657f91-39b5-40eb-9421-45141e3ce9f6
- [contradicted, blocker] Open questions: other skills / absence: Meeting memory is among the Facilitator capabilities still waiting for its own admin switch. | Found: Meeting memory is in preview and only available to organizations in the Teams TAP program. ... In the Teams Admin Center, you can disable meeting memory for your organization | Fix: Remove 'meeting memory' from the first open question: https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings already documents its preview admin switch. Do not imply that the switch is unpublished. | Source: https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings
- [unsupported, major] Open questions: other skills / behaviour: Question detection is a named Facilitator skill. | Found: Searched: Facilitator question detection; Facilitator question detection Protection meeting memory. Opened Facilitator setup and the linked Microsoft Support article; neither names a Question detection skill. | Fix: Remove 'question detection' from the parenthetical list in the first open question; no Microsoft page read states this skill name.
- [unsupported, major] Open questions: other skills / behaviour: Protection is a named Facilitator skill. | Found: Searched: Facilitator Protection skill; Facilitator question detection Protection meeting memory. Opened Facilitator setup and the linked Microsoft Support article; the latter describes preview verbal-phishing monitoring but does not name a Protection skill. | Fix: Remove 'Protection' from the parenthetical list in the first open question; no Microsoft page read states this skill name.
- [unsupported, major] Open questions: Copilot meeting policy / behaviour: The Copilot meeting policy has planned replacements. | Found: Searched: Teams MeetingAI policy replaces Copilot meeting policy enhanced AI controls. Read Copilot meeting-policy search excerpts and Facilitator setup; no Microsoft passage read states the planned replacements. The linked wiki briefing is not evidence. | Fix: Remove 'and its planned replacements' from the second open question, leaving 'Will the Copilot meeting policy change how Facilitator is governed?'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[6].ui / admin-path: Facilitator retention policies are configured under Microsoft Purview portal > Data Lifecycle Management > Policies > Retention Policies. | Found: navigate to Data Lifecycle Management > Policies > Retention Policies and create a retention policy | Fix: The path stops on the policy list. For a static policy, extend it to 'Data Lifecycle Management > Policies > Retention Policies > New retention policy > Choose the type of retention policy to create > Static > Choose locations to apply the policy > location > Decide if you want to retain content, delete it, or both'. Keep the note identifying Teams chats and OneDrive accounts; create separate policies for those locations. Cite https://learn.microsoft.com/purview/create-retention-policies. | Source: https://learn.microsoft.com/purview/ai-teams-facilitator
- [supported, minor] Open questions: other skills / behaviour: Facilitator uses meeting memory. | Found: Copilot and Facilitator use meeting memory to answer questions about a meeting. | Fix: For the supported meeting-memory reference, add https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings to sources if retaining that reference. The role correction also relies on https://support.microsoft.com/office/37657f91-39b5-40eb-9421-45141e3ce9f6, and the retention-path correction on https://learn.microsoft.com/purview/create-retention-policies; add those URLs when applying those fixes. | Source: https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings
-->
