---
kind: "concept"
title: "Meeting transcripts: who can create them, where they live and who can read them"
slug: "meeting-transcripts"
summary: "A Teams meeting transcript is the saved written record of a meeting. Administrators decide who can create one, how long it is kept, and whether Copilot, apps and agents can read it."
created: "2026-11-19"
updated: "2026-11-20"
version: 2
tags: ["meeting-transcripts","teams","meeting-policy","intelligent-recap","work-iq","microsoft-graph","ediscovery","privacy","retention"]
covers: []
sources:
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Manage transcript API access for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    kind: "learn"
  - title: "Teams meeting recording and transcript storage and permissions in OneDrive and SharePoint"
    url: "https://learn.microsoft.com/microsoftteams/tmr-meeting-recording-change"
    kind: "learn"
  - title: "Manage Teams recording expiration policy"
    url: "https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy"
    kind: "learn"
  - title: "Manage Teams meeting transcription"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    kind: "learn"
  - title: "Manage Microsoft Teams meeting recording and transcription options for sensitive meetings"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-recording-options"
    kind: "learn"
  - title: "Manage Teams recording policies for meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    kind: "learn"
  - title: "Overview- Recording and transcription for Teams meetings, events, and calls"
    url: "https://learn.microsoft.com/microsoftteams/recording-transcription-overview"
    kind: "learn"
  - title: "Set-CsTeamsEventsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps"
    kind: "learn"
  - title: "Understand costs for Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
related: ["meeting-policy","work-iq","retention","sensitivity-labels","work-iq-real-time-transcripts","microsoft-teams-admins-can-control-profanity-filtering-in-meeting-transcripts","microsoft-teams-audio-announcement-for-recording-and-transcription","microsoft-teams-enhanced-copilot-and-ai-controls-for-meetings"]
controls:
  - governs: "Whether users with a meeting policy can transcribe meetings and group calls"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "On by default for new policies. The organizer and the user who starts the transcript both need it on."
  - governs: "Whether transcription is allowed in events up to 1,000 attendees"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Transcription for events up to 1k attendees"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -TranscriptionForWebinar $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Large-audience events use -TranscriptionForTownhall; both on by default. The reference marks events policies preview and types the parameter String (default Enabled); the guide shows $true."
  - governs: "Whether organizers' meetings default to Copilot with a saved transcript"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Recording & transcription > Copilot"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -Copilot EnabledWithTranscriptDefaultOn"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    note: "The default value, EnabledWithTranscript, is enforced and organizers cannot change it. Needs an add-on Microsoft Copilot licence."
  - governs: "Whether recordings and transcripts automatically expire, and after how many days"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Recording & transcription > Recordings and transcriptions automatically expire"
      docs: "https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -NewMeetingRecordingExpirationDays <days>"
      docs: "https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy"
    note: "General default is 120 days; maximum default for A1 users is 30 days; published Teams event recordings expire after 30 days, extendable to 90. Only new files are affected. -1 (PowerShell only) never expires."
  - governs: "Whether apps and agents can read meeting transcripts through Microsoft Graph"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting settings > Transcript API access > Microsoft Graph access"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingConfiguration -Identity Global -EnableGraphTranscriptAccess $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    note: "Off by default. Individual apps are then allowed or blocked through API permissions in the Microsoft Entra admin center."
  - governs: "Whether transcripts read through Microsoft Graph include speaker attribution"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting settings > Transcript API access > Microsoft Graph access > Configure > Include speaker attribution"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingConfiguration -Identity Global -EnableAttributedTranscripts $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    note: "Off by default. Applies only to Microsoft Graph; Work IQ transcripts include speaker names."
  - governs: "Whether apps and agents can receive real-time transcripts through Work IQ"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting settings > Transcript API access > WorkIQ access"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingConfiguration -Identity Global -EnableWorkIQTranscriptAccess $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    note: "Off by default and independent of Graph access. The organizer's organisation setting applies. Needs the latest Teams PowerShell module."
confidence: "medium"
dependents: 12
changes:
  - date: "2026-11-19"
    note: "New concept page: how Teams meeting transcripts are created, stored, expired and exposed to Copilot, Graph and Work IQ."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 92 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected expiry defaults (A1 users and published event recordings), removed the transcript-size open question, noted events-policy preview status, and aligned the checklist with the controls table."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 103 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 103
  confirmed: 103
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "bd3a5b07fa7da125ffacea878c0bfa3a"
---

## What it is

A **meeting transcript** is the written record Teams makes of what was said in a meeting or event, with timestamps and speaker attribution. It is a file stored alongside the recording in OneDrive and SharePoint, so it is both a Teams feature and stored content that other tools can read.

### How it is made and stored

- **Two settings must agree.** Transcription is both a per-organizer and per-user policy setting: the organizer must have it on, and so must the user who starts the transcript. The Transcription setting in a meeting policy is on by default for new policies.
- **Storage follows the recording.** For meetings and events, the recording normally saves to the organizer's OneDrive, even if the organizer did not attend. Channel meetings save to a Recordings folder in the channel's SharePoint site.
- **Live captions are not transcripts.** Live captions give real-time subtitles, and Teams does not save them.
- **Meetings, events and calls have separate policies.** Events have their own transcription settings in events policies, and voice calling policies control 1:1 calls.

### Who else reads a transcript

Other features take the transcript as input. The Copilot meeting policy changes how Copilot works, and intelligent recap depends on transcript availability. Apps and agents can read transcripts through Microsoft Graph or, while the meeting runs, through Work IQ (see [Work IQ](/concepts/work-iq/)). Both routes are separate settings from transcription itself, and both are off by default.

## Why it matters

A transcript turns a conversation into searchable text. That makes it useful to Copilot and agents, and sensitive for the same reason: whatever was said aloud can end up in a file that others can open, search and feed to AI. The settings decide who may create one, how long it is kept and which apps may read it.

Left at defaults, creation is wide open. Microsoft states that in the global policy for both meetings and events, recording and transcription are on by default. Reading by apps and agents is the opposite: Graph access and Work IQ access are both off until an administrator turns them on, so enabling them is a deliberate decision. Because meetings, events and 1:1 calls each have their own policy, a restriction set in one place does not carry to the others.

## Cost and licensing

The transcription admin page marks Teams Premium only against specific features and states no licence for the Transcription policy setting itself. The licences it and related pages do state:

- **Live translated transcription:** the organizer must have a Teams Premium licence for attendees to use it.
- **Copilot in Teams meetings:** an add-on Microsoft Copilot licence for the intended users.
- **Intelligent recap:** users with a Teams Premium or Microsoft Copilot licence get it automatically; the transcription policy also controls it.
- **Enforcing who can record and transcribe by sensitivity label or template:** listed against a Teams Premium or Copilot licence. Microsoft's recording and transcription overview describes this label and template control for organizers with Teams Premium, while the sensitive-meetings table says Teams Premium/Copilot.
- **Storage:** recording files count toward your OneDrive and SharePoint quota, and Microsoft gives 400 MB as the size of a one-hour recording.

Charges for apps and agents that read transcripts belong to those products; see [Work IQ](/concepts/work-iq/).

## Risks and limits

- **Policies do not line up across meetings and calls.** Turning transcription off in a calling policy leaves meetings and events to their own policies, and users without a custom assignment keep the global policy, where transcription is on by default.
- **Expiry is not retention.** Recordings and transcripts expire after 120 days by default and move to the recycle bin; the maximum default expiration time for A1 users is 30 days, and published Teams event recordings expire after 30 days, extendable to 90 days. Changes affect only newly created files, and a recording moved from its original location is no longer affected. Microsoft says expiry does not enforce compliance requirements; use [Purview retention](/concepts/retention/) for that.
- **Turning Copilot off turns transcription off.** When an organizer turns Copilot off for a meeting, recording and transcription are also turned off for it.
- **The Copilot default forces saved transcripts.** The default Copilot policy value, On with saved transcript required, is enforced: organizers cannot change it per meeting.
- **Graph access is all-or-nothing at tenant level.** While the Microsoft Graph access toggle is off, apps and agents cannot read transcripts whatever permissions they hold. Once it is on, individual apps are allowed or blocked through Microsoft Entra API permissions.
- **Work IQ changes are not immediate and do not cut live transcripts.** The organizer's organisation decides, a change can take time to apply, and turning access off does not stop transcripts apps are already receiving.
- **Work IQ access is not a transcription switch.** Turning it off does not turn off transcription, and Copilot, Facilitator and intelligent recap keep working as configured.
- **Participants may not know.** The audio announcement for recording and transcription is Disabled by default, and does not cover PSTN users.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users with a meeting policy can transcribe meetings and group calls</strong><br><small>User</small><br><small class="controls__note">On by default for new policies. The organizer and the user who starts the transcript both need it on.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether transcription is allowed in events up to 1,000 attendees</strong><br><small>User</small><br><small class="controls__note">Large-audience events use -TranscriptionForTownhall; both on by default. The reference marks events policies preview and types the parameter String (default Enabled); the guide shows $true.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Transcription for events up to 1k attendees <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -TranscriptionForWebinar $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether organizers' meetings default to Copilot with a saved transcript</strong><br><small>User</small><br><small class="controls__note">The default value, EnabledWithTranscript, is enforced and organizers cannot change it. Needs an add-on Microsoft Copilot licence.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Copilot <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -Copilot EnabledWithTranscriptDefaultOn</code> <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether recordings and transcripts automatically expire, and after how many days</strong><br><small>User</small><br><small class="controls__note">General default is 120 days; maximum default for A1 users is 30 days; published Teams event recordings expire after 30 days, extendable to 90. Only new files are affected. -1 (PowerShell only) never expires.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Recordings and transcriptions automatically expire <a href="https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -NewMeetingRecordingExpirationDays &lt;days&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether apps and agents can read meeting transcripts through Microsoft Graph</strong><br><small>Tenant</small><br><small class="controls__note">Off by default. Individual apps are then allowed or blocked through API permissions in the Microsoft Entra admin center.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting settings › Transcript API access › Microsoft Graph access <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingConfiguration -Identity Global -EnableGraphTranscriptAccess $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether transcripts read through Microsoft Graph include speaker attribution</strong><br><small>Tenant</small><br><small class="controls__note">Off by default. Applies only to Microsoft Graph; Work IQ transcripts include speaker names.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting settings › Transcript API access › Microsoft Graph access › Configure › Include speaker attribution <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingConfiguration -Identity Global -EnableAttributedTranscripts $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether apps and agents can receive real-time transcripts through Work IQ</strong><br><small>Tenant</small><br><small class="controls__note">Off by default and independent of Graph access. The organizer's organisation setting applies. Needs the latest Teams PowerShell module.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting settings › Transcript API access › WorkIQ access <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingConfiguration -Identity Global -EnableWorkIQTranscriptAccess $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Policies take effect for users through assignment: the global policy covers everyone without a custom assignment, and custom policies are assigned to users or groups.

These controls sit on the same Microsoft pages but are not in the table: `-ExplicitRecordingConsent Enabled` in the meeting policy requires participants to consent to being recorded or transcribed; `-RecordingAndTranscriptionAudioNotification Enabled` in the meeting and calling policies turns on audio announcements; `-ChannelRecordingDownload Block` saves channel recordings and transcripts to a view-only folder; and a per-organizer setting, on by default, lets organizers stop participants copying or forwarding transcripts.

For Work IQ, turning the setting on is not enough: AI must be allowed in the meeting, transcription must be running (Work IQ does not start it), and the app must act for a signed-in user with the permissions it needs in Microsoft Entra ID.

To find transcripts, use eDiscovery in the Microsoft Purview portal. To delete them, an auto-apply retention label policy can target recordings and their transcripts; the minimum retention period is one day. To check why a user cannot transcribe, run the Teams transcripts diagnostic in the Microsoft 365 admin centre, which is not available for Microsoft 365 Government, 21Vianet or Germany. Link: [Teams meeting policy](/concepts/meeting-policy/).

## What to check

- Review the Transcription setting in the global meeting policy and in each custom policy, and note who is assigned each.
- Compare the events policy transcription toggles with the meeting policy, so one scenario does not stay open when you close another.
- Check the Copilot value in each meeting policy, and whether a saved transcript is required.
- Confirm whether Microsoft Graph access, speaker attribution and Work IQ access are on or off in Meeting settings.
- Review the expiry setting and the default expiration time.
- Check organizers' OneDrive quota before encouraging transcription at scale.

## Open questions

- Does Microsoft state a licence requirement for the base Transcription policy setting? The transcription admin page does not.
- How does an auto-apply retention label policy interact with the expiry setting when both apply to the same transcript? Not yet documented on the pages read.
- Which Microsoft Entra permission names allow an app to read Graph transcripts? The transcript API page points to the Entra admin centre without listing them.

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Open questions: auto-apply retention label policy and expiry / absence: The pages cited by this concept do not explain how an auto-apply retention label interacts with expiration. | Found: Searched: Teams recording expiration auto apply retention label policy expiration retention priority transcripts. Read the cited storage, expiration and sensitive-meetings pages; the explanation is instead in manage-teams-recording-compliance and Purview retention guidance. | Fix: Remove the open question beginning 'How does an auto-apply retention label policy interact with the expiry setting'. Its qualification 'on the pages read' is accurate, but the question is answered elsewhere: https://learn.microsoft.com/microsoftteams/manage-teams-recording-compliance explains retention versus expiration, and https://learn.microsoft.com/purview/retention-policies-sharepoint states that permanent deletion is suspended when the item must be retained by a retention policy or retention label. No replacement paragraph is needed.
-->
