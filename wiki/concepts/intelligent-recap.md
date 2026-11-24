---
kind: "concept"
title: "Intelligent recap: what Teams generates after a meeting or call, and what controls it"
slug: "intelligent-recap"
summary: "Intelligent recap is the AI summary Teams produces after meetings, events and calls: notes, tasks, chapters and markers. Administrators use licences, transcription and meeting policies to decide who gets it and how long its content is kept."
created: "2026-11-24"
updated: "2026-11-24"
version: 2
tags: ["intelligent-recap","teams","teams-premium","m365-copilot","teams-phone","licensing","retention","privacy"]
covers: []
sources:
  - title: "Intelligent recap for Teams calls, meetings, and events"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings"
    kind: "learn"
  - title: "Intelligent recap in Teams meetings without saving transcripts"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts"
    kind: "learn"
  - title: "Data, privacy, and security for intelligent recap in Teams Premium"
    url: "https://learn.microsoft.com/microsoftteams/privacy/intelligent-recap"
    kind: "learn"
  - title: "Microsoft Teams Premium - Overview for admins"
    url: "https://learn.microsoft.com/microsoftteams/enhanced-teams-experience"
    kind: "learn"
  - title: "Manage the Meeting Recaps app for your organization in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-recaps-app"
    kind: "learn"
  - title: "Overview of AI in Microsoft Teams for IT admins"
    url: "https://learn.microsoft.com/microsoftteams/copilot-ai-agents-overview"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Manage Teams meeting transcription"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    kind: "learn"
  - title: "Manage Teams recording expiration policy"
    url: "https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy"
    kind: "learn"
  - title: "Configure call recording, transcription, and captions in Teams"
    url: "https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions"
    kind: "learn"
  - title: "Memory for Microsoft Teams Meetings"
    url: "https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
related: ["meeting-transcripts","meeting-policy","retention","ediscovery","teams-intelligent-recap-without-saving-transcript","teams-ai-generated-meeting-memory","microsoft-teams-delete-meeting-generated-content-in-recap"]
controls:
  - governs: "Whether intelligent recap is available in meetings"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policyname> -AllowIntelligentRecap $false"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts"
    note: "Per meeting policy; disables recap for all meetings. The no-transcript page documents the switch as effective; the cmdlet reference says it has no effect yet. Not reconciled."
  - governs: "Whether users can transcribe meetings, which full recap depends on"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Per-organiser and per-user setting. On by default for new policies."
  - governs: "Whether call transcription is allowed for 1:1 and PSTN calls"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity <policy name> -AllowTranscriptionForCalling $true"
      docs: "https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions"
    note: "Call transcription is off by default."
  - governs: "Copilot in meetings and events, which sets the default transcript behaviour"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Recording & transcription > Copilot"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -Copilot Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    note: "Other values: Enabled, EnabledWithTranscript, EnabledWithTranscriptDefaultOn. Recap without saving transcripts needs a policy with Copilot enabled."
  - governs: "Expiry of recap Word files for non-transcribed meetings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Copilot and other AI > Set a default expiration time for Intelligent Recap .docx files for non-transcribed meetings"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policyname> -IntelligentRecapDocxFileExpirationDays <days>"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts"
    note: "1 to 9999 days, or -1 for no expiration; default 120. The no-transcript page documents the parameter as effective; the cmdlet reference says it has no effect yet. Not reconciled."
  - governs: "Whether recordings and transcripts expire automatically, and after how many days"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Recording & transcription > Recordings and transcriptions automatically expire"
      docs: "https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -NewMeetingRecordingExpirationDays <days>"
      docs: "https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy"
    note: "Generally 120 days by default; max default for A1 users is 30 days. Affects only new recordings and transcripts. With expiry on, set Default expiration time (days)."
confidence: "medium"
dependents: 8
changes:
  - date: "2026-11-24"
    note: "New concept page on intelligent recap: variants, licences, storage, and the meeting and calling policies that govern it."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 78 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after the independent check: audio recap prerequisites, storage locations, A1 expiry limit, meeting memory preview status, and the documented conflict over whether -AllowIntelligentRecap takes effect; removed an unsupported pricing pointer."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 90 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 90
  confirmed: 89
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "7b09017782a61445b520ffb4e8214247"
---

## What it is

Intelligent recap is the set of AI-generated summaries that Microsoft Teams produces after a meeting, event or call: notes, recommended tasks, speaker and topic markers and chapters. Users reach it from the **Recap** tab in the Teams calendar and chat, or the **Recap** button on a call.

It is available automatically to users who hold the required licences and are covered by the required policies. It is built from the meeting transcript, so transcription is the main prerequisite; recording adds the parts that depend on the video.

### Variants

| Variant | What it needs | Notes |
| --- | --- | --- |
| Full recap for meetings, events and calls | Transcription on; recording on for speakers, topics and chapters | Meetings, events, PSTN, 1:1 and group peer-to-peer calls |
| Recap without saving transcripts | Copilot licence for organiser and attendees; meeting policy with Copilot enabled | Scheduled meetings only; read-only Word file in the organiser's OneDrive |
| Audio recap (preview) | Copilot licence; transcribed (or recorded) scheduled meetings | Summarises up to eight meetings |
| Video recap | Recorded and transcribed meeting of at least 10 minutes; Copilot licence | Stored with the recording |

### Where the content lives

AI-generated notes and tasks are stored in an Exchange folder in the mailboxes of the meeting participants. Chapters and topics are stored in OneDrive or SharePoint with the recording. Microsoft states that these features follow the meeting recording retention policy.

For events, only organisers, co-organisers and presenters have recap. Organisers can share a recap with external attendees through Outlook.

## Why it matters

Recap decides whether a meeting leaves behind an AI-written record, who holds it and how long it lasts. Microsoft documents it as automatically available once the licences and transcription policy are in place, so an organisation that has assigned Copilot or Teams Premium licences and enabled transcription has made full recap available for transcribed meetings.

The controls pull in different directions. Turning transcription off removes full recap, yet the separate no-transcript recap still works for Copilot-licensed organisers. The meeting policy parameter `-AllowIntelligentRecap` switches intelligent recap off for all meetings under that policy, whether or not transcripts are saved, although Microsoft's cmdlet reference says the setting has no effect yet (see the notes under the controls table). Decide which outcome you want before changing any one policy. See [Meeting transcripts](/concepts/meeting-transcripts/) and [Teams meeting policy](/concepts/meeting-policy/) for the policy mechanics.

## Cost and licensing

Intelligent recap needs a Microsoft 365 subscription that includes Teams, or one without Teams plus a separate Teams licence, and then a Teams Premium licence or a Microsoft Copilot licence. Audio recap needs a Microsoft Copilot licence. Microsoft's AI overview for Teams admins also lists audio recap among the features included with Teams Premium, while the recap prerequisites and the Meeting Recaps app licensing require Copilot; the pages disagree. The Meeting Recaps page says AI-generated recap experiences, including audio and video recap, require a Microsoft Copilot licence, and that intelligent text recap requires Teams Premium or Copilot.

For PSTN calls (calls made through a phone number) users also need a Teams Phone licence and a calling plan. Recap without saving transcripts needs a Copilot licence.

The recap pages name licences only: they state no separate meter or per-use charge, and no prices. The no-transcript Word summary is stored in the organiser's OneDrive; meeting notes and tasks are stored in participants' Exchange mailboxes, while chapters and topics are stored with the recording in OneDrive or SharePoint. The recap pages publish no recap-specific storage charge.

## Risks and limits

- **Transcription off removes full recap.** Microsoft's Teams Premium admin page says that with Transcription set to Off, intelligent meeting recap isn't available for users with that policy. Meeting recording off removes the recording, speakers, topics and chapters from the recap.
- **`-AllowIntelligentRecap $false` is broad.** Microsoft says it disables intelligent recap for all meetings, whether or not transcripts are saved, and the related settings are unavailable in Teams.
- **Organiser-level Copilot Off disables recording too.** When organisers turn off Copilot for their meeting or event, recording and transcription are also turned off.
- **Recap files expire on their own schedule.** The no-transcript Word summary expires after 120 days by default. Meeting recordings and transcripts generally default to 120 days; the maximum default expiration time for A1 users is 30 days. A change affects only newly created ones.
- **Meeting memory is not deleted with the transcript.** Meeting memory is in preview and only available to organisations in the Teams TAP program; Microsoft documents memory generation as on by default for those organisations. It does not delete automatically when the transcript or recording expires. See [AI-generated meeting memory](/features/teams-ai-generated-meeting-memory/).
- **Audience limits.** The no-transcript summary is open only to attendees in the organiser's organisation who hold a Copilot licence; guests and external attendees cannot open it.
- **Preview parts.** Audio recap and multilingual recap are marked public preview; do not rely on their behaviour yet.
- **Compliance.** No-transcript summary documents support Microsoft Purview eDiscovery and legal hold. See [eDiscovery](/concepts/ediscovery/) and [Retention](/concepts/retention/).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether intelligent recap is available in meetings</strong><br><small>User</small><br><small class="controls__note">Per meeting policy; disables recap for all meetings. The no-transcript page documents the switch as effective; the cmdlet reference says it has no effect yet. Not reconciled.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policyname&gt; -AllowIntelligentRecap $false</code> <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can transcribe meetings, which full recap depends on</strong><br><small>User</small><br><small class="controls__note">Per-organiser and per-user setting. On by default for new policies.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether call transcription is allowed for 1:1 and PSTN calls</strong><br><small>User</small><br><small class="controls__note">Call transcription is off by default.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity &lt;policy name&gt; -AllowTranscriptionForCalling $true</code> <a href="https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot in meetings and events, which sets the default transcript behaviour</strong><br><small>User</small><br><small class="controls__note">Other values: Enabled, EnabledWithTranscript, EnabledWithTranscriptDefaultOn. Recap without saving transcripts needs a policy with Copilot enabled.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Copilot <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -Copilot Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Expiry of recap Word files for non-transcribed meetings</strong><br><small>User</small><br><small class="controls__note">1 to 9999 days, or -1 for no expiration; default 120. The no-transcript page documents the parameter as effective; the cmdlet reference says it has no effect yet. Not reconciled.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Copilot and other AI › Set a default expiration time for Intelligent Recap .docx files for non-transcribed meetings <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policyname&gt; -IntelligentRecapDocxFileExpirationDays &lt;days&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether recordings and transcripts expire automatically, and after how many days</strong><br><small>User</small><br><small class="controls__note">Generally 120 days by default; max default for A1 users is 30 days. Affects only new recordings and transcripts. With expiry on, set Default expiration time (days).</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Recordings and transcriptions automatically expire <a href="https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -NewMeetingRecordingExpirationDays &lt;days&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Meeting policies apply per policy, assigned to users or groups. Transcription is both a per-organiser and per-user setting, so the organiser's policy and the person starting transcription both matter.

The intelligent recap on/off parameter has no documented admin centre toggle at the time of writing (November 2026). Microsoft's Teams Premium page answers "No, contact support for assistance" to whether admins can turn intelligent meeting recap on or off, while the cmdlet reference and the no-transcript page document `-AllowIntelligentRecap`. Treat the two as unreconciled. The no-transcript recap page documents `-AllowIntelligentRecap` and `-IntelligentRecapDocxFileExpirationDays` as effective, while the Set-CsTeamsMeetingPolicy reference says under each: "This feature has not been fully released yet, so the setting will have no effect." Microsoft has not reconciled these statements.

There is no separate policy setting for the no-transcript recap, so turning it off means turning off intelligent recap for everyone under that policy. Organisers can delete an AI summary from the Recap tab; no admin switch for that is documented.

Organisers can also change the Copilot option per meeting, depending on the policy value chosen.

## What to check

- Review the **Transcription** setting in each meeting policy, since recap depends on it.
- Confirm which users hold Teams Premium or Copilot licences, and Teams Phone for PSTN calls.
- Check the policy's **Copilot** value and whether organisers can override it.
- Decide whether intelligent recap should be switched off for whole policies, knowing that doing so also removes the no-transcript recap.
- Set the expiry for recap Word files and for recordings and transcripts to match your retention rules.
- Review calling policies if recap of 1:1 or PSTN calls matters: call transcription is a separate setting.

## Open questions

- Does `-AllowIntelligentRecap` also switch off recap for calls? Microsoft's page says it disables recap for all meetings; calls are not mentioned.
- Why does the Teams Premium admin page say admins cannot turn intelligent meeting recap on or off when the cmdlet exists? Microsoft has not reconciled the two.
- Is there an admin centre toggle for `-AllowIntelligentRecap`? None was found in Learn at the time of writing.
- Is there a recap-specific storage charge? Microsoft's recap pages publish none.

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is; Variants; Risks and limits: Transcription off removes full recap / behaviour: Recording adds recording-dependent recap elements; turning it off removes the recording, speakers, topics and chapters. | Found: If recording is turned off, users experience recap without the recording, speakers, topics, and chapters. | Fix: After the recording prerequisite explanation, add: "The privacy article instead says users must enable both transcription and recording; Microsoft's prerequisites article describes recap without recording." The differing page is https://learn.microsoft.com/microsoftteams/privacy/intelligent-recap. | Source: https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings
- [supported, minor] controls[3].api / command: Set-CsTeamsMeetingPolicy -Identity <policy name> -Copilot Disabled sets the organizer's default Copilot option to Off. | Found: To set the organizer's default Copilot option to Off and allow them to change it, use the following script: ```PowerShell Set-CsTeamsMeetingPolicy -Identity <policy name> -Copilot Disabled ``` | Fix: Append to controls[3].note: "The Copilot management page documents Disabled and EnabledWithTranscriptDefaultOn, while the Set-CsTeamsMeetingPolicy reference's possible-values list names only Enabled and EnabledWithTranscript." The differing reference is https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy. | Source: https://learn.microsoft.com/microsoftteams/copilot-teams-transcription
- [contradicted, minor] What to check: Confirm which users hold licences / consistency: The checklist asks readers to take stock of licence assignments, but no controls row covers licence assignment. | Found: Confirm which users hold Teams Premium or Copilot licences, and Teams Phone for PSTN calls. The six controls rows cover recap, transcription, Copilot and expiration settings, not licence assignment. | Fix: Remove the checklist bullet "Confirm which users hold Teams Premium or Copilot licences, and Teams Phone for PSTN calls." The licence requirements remain in Cost and licensing; no new controls row is requested.
-->
