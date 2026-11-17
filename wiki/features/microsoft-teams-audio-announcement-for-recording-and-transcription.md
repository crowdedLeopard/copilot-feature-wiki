---
title: "Microsoft Teams: audio announcement when recording or transcription starts"
slug: "microsoft-teams-audio-announcement-for-recording-and-transcription"
roadmapId: 559609
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams meeting and calling policies gain a setting that plays an audio announcement when recording or transcription starts. Microsoft says it is off by default and no admin action is required."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Microsoft's notice MC1556096 and the cmdlet reference pages name no licence, add-on or meter for this setting."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["teams","meeting-policy","meeting-transcripts","powershell","admin-controls","privacy","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 559609"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559609"
    kind: "roadmap"
  - title: "MC1556096: Microsoft Teams: Audio announcement for Recording and Transcription"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1556096"
    kind: "message-center"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Set-CsTeamsCallingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Manage Teams recording policies for meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    kind: "learn"
videos: []
related: ["microsoft-teams-tenant-policy-controls-who-can-record-and-transcribe","microsoft-teams-automatic-recording-and-transcription-choices-align-with-admin-policies","microsoft-teams-automatic-recording-indicator-for-call-queue-calls-on-mobile"]
controls:
  - governs: "Whether an audio announcement plays when recording or transcription starts in meetings"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity Global -RecordingAndTranscriptionAudioNotification Enabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "Default Disabled. Applies to Teams client users in VoIP calls only. The page notes the feature is not fully released, so the setting has no effect yet."
  - governs: "Whether an audio announcement plays when recording or transcription starts in calls"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity Global -RecordingAndTranscriptionAudioNotification Enabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps"
    note: "Default Disabled. Does not control announcements for PSTN users or one-to-one Teams to PSTN calls. The page notes the feature is not fully released."
  - governs: "Which groups receive a meeting policy that has the setting enabled"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > Group policy assignment > Add"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    api:
      kind: "powershell"
      call: "Grant-CsTeamsMeetingPolicy -Group \"<group ID>\" -PolicyName \"<policy name>\""
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    note: "General meeting policy assignment, read on the meeting recording page; it is not specific to this setting."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-17"
    note: "First briefing: documents the audio announcement setting, its PowerShell parameter on meeting and calling policies, and the rollout windows in MC1556096."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 49 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 47
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "20469e1b4e08598190e771ca163d42b3"
---

## What's changing

Microsoft Teams is adding a policy setting that plays an audio announcement when recording or transcription starts. The roadmap item says admins can apply it tenant-wide or to specific groups, and that the announcement helps make sure participants are informed and improves accessibility awareness. Microsoft's notice MC1556096 says the setting appears in both the meeting policy and the calling policy.

Microsoft's notice says the default audio announcement policy is off and can be turned on as needed. The notice words the audience as allowed participants who are permitted by policy; the roadmap item says all participants. The Set-CsTeamsMeetingPolicy and Set-CsTeamsCallingPolicy reference pages describe a `-RecordingAndTranscriptionAudioNotification` parameter with the values Enabled and Disabled, default Disabled. They say it applies only to Teams client users in VoIP calls, and that it does not control the audio announcements Teams already plays by default for PSTN users or for one-to-one calls between Teams and PSTN.

The roadmap record lists the item as In development with a target of December CY2026, for Worldwide, GCC, GCC High and DoD, on Android, desktop, iOS, Mac and web. MC1556096, published 2026-11-16, gives a different picture of rollout: public preview in Worldwide began in early May 2026 and is expected to finish by mid-December 2026; general availability begins in mid-December 2026 and is expected to finish by early January 2027 in Worldwide and by late January 2027 in GCC, GCC High and DoD. The notice sets no act-by date. The cmdlet reference pages carry a note that the feature has not been fully released yet, so the setting has no effect.

## Why it matters

This is a new control rather than a change to existing behaviour. Because Microsoft's notice says the policy is off by default and requires no admin action, tenants that do nothing see no new announcement. The decision for a service owner is whether to turn it on, and for whom, as part of how the organisation tells people they are being recorded or transcribed.

The decision touches more than one policy. The setting exists in both the meeting policy and the calling policy, so an organisation that wants a consistent experience has to set both. Microsoft's notice also says compliance recording is not supported with this feature, so organisations that rely on compliance recording should not treat the announcement as covering that case.

## Risk assessment

**Data exposure**

- The roadmap item and the notice describe an announcement only. Neither says the feature changes what is recorded or transcribed, or where recordings are stored.

**Security & identity**

- Microsoft's notice says compliance recording is not supported with this feature, so the announcement is not a substitute for notification arrangements that the compliance recording solution provides.
- The reference pages say the setting applies only to Teams client users in VoIP calls and does not control the announcements already played by default for PSTN users or for one-to-one calls between Teams and PSTN. Enabling it will not change those calls.

**Autonomy & actions**

- No change: the feature plays a sound when recording or transcription starts; the sources describe no action taken on anyone's behalf.

**Change & support**

- Once the setting is on, people will hear a new sound at the start of recording or transcription. Expect help-desk questions in groups that were not told in advance.
- The reference pages list Windows and macOS desktop, web, Microsoft Teams Rooms, Android, iOS and VDI 2.0 as supported clients, and say VDI 1.0 is not supported. Users on VDI 1.0 will not hear the announcement.
- The reference pages say the feature has not been fully released yet, so the setting has no effect. A policy set before general availability may appear to do nothing.

## Cost and licensing

No licence, add-on or meter for this setting is stated in Microsoft's notice MC1556096 or in the Set-CsTeamsMeetingPolicy and Set-CsTeamsCallingPolicy reference pages, so licensing is not yet published. The cost the sources show is admin time to set the policy and assign it, and communication time to tell users to expect the announcement.

No price or consumption rate is published for this setting at the time of writing (November 2026).

## Scope

- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. MC1556096 gives general availability windows for each: Worldwide begins mid-December 2026 and completes by early January 2027; GCC, GCC High and DoD begin mid-December 2026 and complete by late January 2027.
- **Platforms:** the roadmap record lists Android, desktop, iOS, Mac and web. The cmdlet reference pages list supported clients as Windows and macOS desktop, web, Microsoft Teams Rooms, Android, iOS and VDI 2.0, and say VDI 1.0 is not supported.
- **Calls covered:** the setting applies only to Teams client users in VoIP calls. PSTN users and one-to-one calls between Teams and PSTN already get audio announcements by default, and this setting does not control them.
- **Policies:** the setting is in the meeting policy and the calling policy, according to MC1556096.
- **Release phase:** the roadmap record lists General Availability and Targeted Release. MC1556096 says public preview began in Worldwide in early May 2026.
- **Not supported:** Microsoft's notice says compliance recording is not supported with this feature.

## Governance guidance

### Before rollout

- Decide which groups should hear the announcement and whether it should be set on the Global meeting policy, which covers users with no other assignment, or on a custom policy for specific groups.
- Check whether the same groups need the setting in both the meeting policy and the calling policy, so that meetings and calls behave alike.
- Identify any use of compliance recording, which Microsoft's notice says is not supported with this feature, and decide how participants are told in those cases.
- Check which users are on VDI 1.0, which the reference pages say is not supported.

### At rollout

- Set `-RecordingAndTranscriptionAudioNotification Enabled` on a pilot meeting policy and calling policy and assign them to a test group.
- Confirm the tenant has reached general availability before judging the result, because the reference pages say the setting has no effect until the feature is fully released.
- Tell pilot users what the announcement sounds like and that it plays when recording or transcription starts.

### After rollout

- Extend the policy to further groups by assigning the policy to the group in the Teams admin center or with `Grant-CsTeamsMeetingPolicy -Group`.
- Record which policies have the setting enabled, since the documented default is Disabled.
- Watch Message center and the Set-CsTeamsMeetingPolicy reference for the removal of the not-fully-released note.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an audio announcement plays when recording or transcription starts in meetings</strong><br><small>Tenant</small><br><small class="controls__note">Default Disabled. Applies to Teams client users in VoIP calls only. The page notes the feature is not fully released, so the setting has no effect yet.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity Global -RecordingAndTranscriptionAudioNotification Enabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an audio announcement plays when recording or transcription starts in calls</strong><br><small>Tenant</small><br><small class="controls__note">Default Disabled. Does not control announcements for PSTN users or one-to-one Teams to PSTN calls. The page notes the feature is not fully released.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity Global -RecordingAndTranscriptionAudioNotification Enabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which groups receive a meeting policy that has the setting enabled</strong><br><small>Group</small><br><small class="controls__note">General meeting policy assignment, read on the meeting recording page; it is not specific to this setting.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › Group policy assignment › Add <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Grant-CsTeamsMeetingPolicy -Group &quot;&lt;group ID&gt;&quot; -PolicyName &quot;&lt;policy name&gt;&quot;</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The setting has a PowerShell parameter on both policy types. Microsoft Learn documents no Teams admin center path for the setting itself at the time of writing (November 2026), although MC1556096 says it appears in the meeting policy and the calling policy. Group assignment of a meeting policy is a separate, general control documented on the meeting recording page.

The meeting policy and calling policy are separate objects, so enabling one does not enable the other. The reference pages say the setting does not change the announcements played to PSTN users and in one-to-one Teams to PSTN calls.

## Open questions

- Where in the Teams admin center does an administrator turn the setting on in the meeting policy and the calling policy, and what is the label? Watch the Teams meeting recording and call recording Learn pages.
- What licence, if any, does the setting need? Microsoft has not published licensing; watch MC1556096 and the Learn pages.
- Does the announcement reach every participant, or only the allowed participants who are permitted by policy that the notice mentions? The roadmap item says all participants.
- When does the not-fully-released note come off the cmdlet pages, given that the roadmap still lists the item as In development with a December CY2026 target and the notice says preview began in May 2026?

<!-- rationale
risk: Low. Microsoft's notice says the audio announcement policy is off by default, so nothing is announced until an administrator turns the setting on, and the feature adds no new data access.
cost: Low. The only cost the sources show is admin time to set and assign the policy; Microsoft's notice and the cmdlet reference name no licence or meter, and licensing is not yet published.
impact: Low. With the setting off by default, nobody notices until an administrator enables it; once enabled, people on affected calls and meetings hear the announcement when recording or transcription starts.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: risk / behaviour: The feature adds no new data access. | Found: Searched: "RecordingAndTranscriptionAudioNotification" "data" permissions access; Teams "audio announcement" "recording" "data access". Read roadmap, MC1556096 and both Set-CsTeams policy references; none states that the feature adds no data access. | Fix: Remove 'and the feature adds no new data access' from the risk rationale. The documented off-by-default policy already supports the low-risk rationale.
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: Every policy-assignment control recommended by the checklist appears in the controls table. | Found: Checklist: 'Set ... on a pilot meeting policy and calling policy and assign them to a test group.' Table: 'Which groups receive a meeting policy that has the setting enabled'. There is no calling-policy group-assignment row. | Fix: The checklist's calling-policy group-assignment step has no corresponding table row. Narrow that bullet to: 'Set -RecordingAndTranscriptionAudioNotification Enabled on a pilot meeting policy and calling policy. Assign the pilot meeting policy to a test group.'
-->
