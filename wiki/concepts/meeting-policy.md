---
kind: "concept"
title: "Teams meeting policy: which meeting features does each user get?"
slug: "meeting-policy"
summary: "A Teams meeting policy is a named set of Teams admin centre settings that switches meeting features, such as recording, transcription, captions and Copilot, on or off for the users and groups it is assigned to."
created: "2026-11-17"
updated: "2026-11-24"
version: 3
tags: ["meeting-policy","teams","policy","admin-controls","powershell","meeting-transcripts"]
covers: []
sources:
  - title: "Manage meeting and events policies in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
    kind: "learn"
  - title: "Assign policies in Teams – getting started"
    url: "https://learn.microsoft.com/microsoftteams/policy-assignment-overview"
    kind: "learn"
  - title: "Assign policies to users and groups"
    url: "https://learn.microsoft.com/microsoftteams/assign-policies-users-and-groups"
    kind: "learn"
  - title: "Manage Teams recording policies for meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Manage Teams meeting transcription"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    kind: "learn"
  - title: "Use Microsoft Teams administrator roles to manage Teams"
    url: "https://learn.microsoft.com/microsoftteams/using-admin-roles"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "Get-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmeetingpolicy"
    kind: "learn"
  - title: "Manage Teams with policies"
    url: "https://learn.microsoft.com/microsoftteams/manage-teams-with-policies"
    kind: "learn"
related: ["microsoft-teams-automatic-recording-and-transcription-choices-align-with-admin-policies","microsoft-teams-enhanced-copilot-and-ai-controls-for-meetings","teams-ai-generated-meeting-memory","meeting-transcripts"]
controls:
  - governs: "Settings held in a meeting policy (global or custom)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Edit"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -<parameter> <value>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Teams Administrator or Teams Communications Administrator; Teams Reader is read-only."
  - governs: "Which group receives a meeting policy"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > Group policy assignment > Add"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    api:
      kind: "powershell"
      call: "Grant-CsTeamsMeetingPolicy -Group <group ID> -PolicyName <policy name> -Rank <rank>"
      docs: "https://learn.microsoft.com/microsoftteams/assign-policies-users-and-groups"
    note: "Direct members only; a direct user assignment overrides it. The assignment article labels the button Add group."
  - governs: "Which meeting policy an individual user holds"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Manage users > Assign users"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    api:
      kind: "powershell"
      call: "Grant-CsTeamsMeetingPolicy -Identity <user> -PolicyName <policy name>"
      docs: "https://learn.microsoft.com/microsoftteams/assign-policies-users-and-groups"
    note: "Takes precedence over group and Global policies."
  - governs: "Whether users can record meetings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting recording"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowCloudRecording $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    note: "Per-organiser and per-user: the organiser and the person starting the recording both need it."
  - governs: "Whether users can transcribe meetings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Per-organiser and per-user. On by default for new policies."
  - governs: "Whether live captions are available in meetings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Live captions"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -LiveCaptionsEnabledType Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Per-user policy. DisabledUserOverride lets users turn captions on."
  - governs: "Organisers' default Copilot option in meetings and events"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Recording & transcription > Copilot"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -Copilot Enabled"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    note: "Needs an add-on Microsoft Copilot licence for users. Other values: EnabledWithTranscript, EnabledWithTranscriptDefaultOn, Disabled."
confidence: "high"
dependents: 50
changes:
  - date: "2026-11-17"
    note: "New concept page: how Teams meeting policies are built, assigned and prioritised, with controls for recording, transcription, captions and Copilot."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 72 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected: Copilot Off is an organiser-overridable default, the Copilot setting also governs events, group rankings can be changed in PowerShell, and the propagation, Teams Reader and consent notes were narrowed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 87 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 80 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected how policies are assigned in PowerShell: Grant-CsTeamsMeetingPolicy for a user or group, New-CsBatchPolicyAssignmentOperation for a batch; reworded one checklist item."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 81 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 81
  confirmed: 81
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "993739b164d0117460ef923646daaecf"
---

## What it is

A Teams meeting policy is a named set of settings, managed in the Teams admin centre or with the Teams PowerShell module, that controls which meeting features organisers and participants can use. Every user has one effective meeting policy: the Global (Org-wide default) policy unless a custom policy has been assigned to them directly or through a group.

You can edit the Global policy or create custom policies. A user can hold only one meeting policy and one events policy at a time; events policies are a separate policy type with their own recording and transcription settings, and are not covered here.

**Who a setting applies to**

Microsoft documents three implementation types, and each setting follows one of them.

| Type | What it does | Example Microsoft gives |
| --- | --- | --- |
| Per-organiser | Participants inherit the organiser's policy | Who can bypass the lobby |
| Per-user | Allows or prevents the feature for each user | Meet now in channel meetings |
| Both | Restricts participants by their own and the organiser's policy | Meeting recording |

**Which policy a user gets**

A directly assigned policy takes precedence. Without one, the user inherits the policy of the group assignment with the highest ranking (1 is highest). Without either, the Global policy applies. Policies can be assigned to individual users, to batches of users or to a group in the admin centre. In PowerShell, `Grant-CsTeamsMeetingPolicy` assigns a policy to an individual user or a group; `New-CsBatchPolicyAssignmentOperation` submits a batch assignment.

## Why it matters

Meeting policies are where an organisation decides who can record, transcribe, caption or use Copilot in meetings, and for which groups. A change to the Global policy reaches every user who has no custom assignment, so the Global policy is the baseline that every other decision is measured against.

Because several settings are per-organiser, the policy of whoever schedules a meeting shapes what every participant can do in it. Recording and transcription also depend on two people: the organiser and the person starting them both need the setting turned on. A setting that looks enabled in your own policy can therefore still be unavailable in a meeting that someone else organises.

## Cost and licensing

The meeting policies overview and the policy-assignment pages read for this page state no licence or meter for meeting policies themselves at the time of writing (November 2026). Individual settings carry their own requirements, and Microsoft states these on the page for each feature:

- Copilot in Teams meetings lists "An add-on Microsoft Copilot license for intended users" as a prerequisite.
- Live translated transcription and live translated captions need the meeting organiser to hold a Teams Premium licence.
- Organisers with a Teams Premium licence can use their meeting options to control who can record and transcribe.
- Recordings and transcripts are stored in the organiser's OneDrive or SharePoint storage. `AllowCloudRecording` does not configure or validate that storage.

Copilot billing is covered on Copilot pages, not here.

## Risks and limits

- **A direct assignment silently beats a group assignment.** A user who was assigned a policy individually does not inherit the group's policy until you remove the direct assignment, which Microsoft documents as unassigning in bulk.
- **Group assignment has gaps.** Assignments reach direct members only, not members of nested groups, and groups with HiddenGroupMembership enabled (class Teams by default) cannot be used. Propagation runs in the background: the group-assignment article gives no group-size-specific propagation time; Microsoft's general policy guidance says changes may take up to 24 hours to take effect.
- **Policies cannot be tidied freely.** A policy cannot be deleted while users are assigned to it, and a policy's name cannot be changed after creation.
- **An organiser turning Copilot off in a meeting's options disables recording and transcription.** Microsoft states that when organisers turn off Copilot for their meeting or event, recording and transcription are also turned off. The policy's Copilot Off value sets an organiser-overridable default. Check the meeting's Copilot option before diagnosing a recording complaint.
- **Transcription needs two parties.** If the organiser's policy has Transcription off, meetings they organise cannot include transcripts, even for participants whose own policy allows it.
- **Allowing recording does not provide storage.** If a recording cannot be uploaded to OneDrive or SharePoint, it is held temporarily and deleted unless downloaded within 21 days.
- **External participants.** Microsoft documents that external participants cannot record meetings except under third-party compliance recording.
- **Meeting policy is not events policy.** Event recording and transcription have their own settings in events policies; the Copilot setting in a meeting policy also governs the default Copilot option for events.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Settings held in a meeting policy (global or custom)</strong><br><small>Tenant</small><br><small class="controls__note">Teams Administrator or Teams Communications Administrator; Teams Reader is read-only.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Edit <a href="https://learn.microsoft.com/microsoftteams/meeting-policies-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -&lt;parameter&gt; &lt;value&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which group receives a meeting policy</strong><br><small>Group</small><br><small class="controls__note">Direct members only; a direct user assignment overrides it. The assignment article labels the button Add group.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › Group policy assignment › Add <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Grant-CsTeamsMeetingPolicy -Group &lt;group ID&gt; -PolicyName &lt;policy name&gt; -Rank &lt;rank&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/assign-policies-users-and-groups" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which meeting policy an individual user holds</strong><br><small>User</small><br><small class="controls__note">Takes precedence over group and Global policies.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Manage users › Assign users <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Grant-CsTeamsMeetingPolicy -Identity &lt;user&gt; -PolicyName &lt;policy name&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/assign-policies-users-and-groups" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can record meetings</strong><br><small>User</small><br><small class="controls__note">Per-organiser and per-user: the organiser and the person starting the recording both need it.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting recording <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowCloudRecording $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can transcribe meetings</strong><br><small>User</small><br><small class="controls__note">Per-organiser and per-user. On by default for new policies.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether live captions are available in meetings</strong><br><small>User</small><br><small class="controls__note">Per-user policy. DisabledUserOverride lets users turn captions on.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Live captions <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -LiveCaptionsEnabledType Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Organisers' default Copilot option in meetings and events</strong><br><small>User</small><br><small class="controls__note">Needs an add-on Microsoft Copilot licence for users. Other values: EnabledWithTranscript, EnabledWithTranscriptDefaultOn, Disabled.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Copilot <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -Copilot Enabled</code> <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Teams Administrator and Teams Communications Administrator both list managing meeting policies among their tasks; Teams Reader provides read-only access to meeting policy settings. Roles are Microsoft Entra roles.

Order of work: set the Global policy first, then create custom policies only for users who need to differ, and assign them to groups where possible. Group assignments need a ranking when a user may be in several groups; an assignment without one gets the lowest ranking. In the Teams admin centre, changing a ranking means removing and re-adding the assignment; PowerShell Grant cmdlets can change the ranking of an existing assignment.

Settings that depend on one another: Transcription and Copilot interact, and the Copilot page tabulates the combinations. Policy assignments made in the admin centre are tracked in the Teams admin centre Activity log, which shows group operations and batch operations for more than 20 users for the last 30 days. Related meeting AI controls are discussed in [the MeetingAI briefing](/features/microsoft-teams-enhanced-copilot-and-ai-controls-for-meetings/).

## What to check

- Review the Global (Org-wide default) meeting policy first, since it applies to every user without a custom assignment.
- Review custom meeting policy settings and confirm each policy is still assigned to a group or user.
- Compare the Meeting recording, Transcription and Copilot settings for each policy. An organiser turning Copilot Off in a meeting's options disables that meeting's recording and transcription; the policy's Copilot Off value sets an organiser-overridable default.
- Check users who were assigned a policy directly, since these ignore any group assignment you add later.
- Confirm group assignments are ranked, and that the groups are not nested or hidden-membership groups.

## Open questions

- How long does group policy propagation take for large groups? The group-assignment article gives no group-size-specific propagation time; Microsoft's general policy guidance says changes may take up to 24 hours to take effect.
- Is there an admin centre toggle for channel recording download? The recording page documents it only as a PowerShell parameter.
- Which audit events record a change to a meeting policy, and where do they appear? The pages read for this page do not say.
- How will the MeetingAI settings interact with existing Copilot policy values in scripts?

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui / admin-path: Individual meeting-policy assignment is at Meetings > Meeting policies > policy > Manage users > Assign users. | Found: To specific users: Select your policy, select Manage users > Assign users, enter the names of specific users in the search bar, select Add, and then select Apply. | Fix: Add to this row's note: 'The recording guide gives Manage users > Assign users; https://learn.microsoft.com/microsoftteams/assign-policies-users-and-groups instead says to select the policy, select Assign users, and then use the Manage users pane.' Keep the documented route and its existing link. | Source: https://learn.microsoft.com/microsoftteams/meeting-recording
- [supported, minor] controls[6].note / command: The other documented Copilot parameter values are EnabledWithTranscript, EnabledWithTranscriptDefaultOn and Disabled. | Found: On with saved transcript required | EnabledWithTranscript On with transcript saved by default | EnabledWithTranscriptDefaultOn Off | Disabled | Fix: Append to controls[6].note: 'The feature guide lists these four values; the Set-CsTeamsMeetingPolicy reference currently lists only Enabled and EnabledWithTranscript.' The reference is https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy#-copilot. Retain the values supported by the feature guide. | Source: https://learn.microsoft.com/microsoftteams/copilot-teams-transcription
-->
