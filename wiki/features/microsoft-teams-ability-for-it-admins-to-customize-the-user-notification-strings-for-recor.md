---
title: "Microsoft Teams: customise the recording and transcription notification and consent text"
slug: "microsoft-teams-ability-for-it-admins-to-customize-the-user-notification-strings-for-recor"
roadmapId: 536570
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "Teams admins can customise recording and transcription messages per meeting policy and set the privacy policy link tenant-wide. The roadmap item is Launched; it is an optional setting to review with legal or privacy owners."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Desktop","Mac"]
targetDate: "January CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Except for joining Teams meetings anonymously, each user must have a Teams licence before they can use Teams. No licence requirement specific to custom recording and transcription notifications is published at the time of writing (November 2026)."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["teams","meeting-policy","recording-consent","meeting-transcripts","privacy","powershell","user-experience","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 536570"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=536570"
    kind: "roadmap"
  - title: "Custom in-meeting notification for recording and transcription"
    url: "https://learn.microsoft.com/microsoftteams/recording-transcription-custom-message"
    kind: "learn"
  - title: "Manage participant agreement for recording and transcription"
    url: "https://learn.microsoft.com/microsoftteams/participant-agreement-recording-transcription"
    kind: "learn"
  - title: "Manage Teams recording policies for meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    kind: "learn"
  - title: "Customize meeting invitations (IT admins)"
    url: "https://learn.microsoft.com/microsoftteams/customize-meeting-invitations"
    kind: "learn"
  - title: "New-CsTeamsRecordingAndTranscriptionCustomMessage"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsrecordingandtranscriptioncustommessage?view=teams-ps"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Whether a meeting policy shows custom recording and transcription notifications (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Which privacy policy URL the recording and transcription notice links to (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingconfiguration?view=teams-ps"
    kind: "learn"
videos: []
related: ["microsoft-teams-ability-for-it-admins-to-customize-the-user-notification-messages-for-reco","meeting-policy","microsoft-teams-audio-announcement-for-recording-and-transcription","microsoft-teams-tenant-policy-controls-who-can-record-and-transcribe","meeting-transcripts"]
controls:
  - governs: "Whether a meeting policy shows custom recording and transcription notifications"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Recording & transcription > Show customized in-meeting notification for recording and transcription"
      docs: "https://learn.microsoft.com/microsoftteams/recording-transcription-custom-message"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -EnableRecordingAndTranscriptionCustomMessage $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "Applies to users assigned the policy and to all participants in meetings they organise."
  - governs: "Which custom message text a meeting policy displays"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Recording & transcription > Customize notification"
      docs: "https://learn.microsoft.com/microsoftteams/recording-transcription-custom-message"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -RecordingAndTranscriptionCustomMessageIdentifier <Guid>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "In the admin centre the text is uploaded as a CSV. The Guid is a message set from New-CsTeamsRecordingAndTranscriptionCustomMessage, whose reference says the setting has no effect yet."
  - governs: "Which privacy policy URL the recording and transcription notice links to"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting settings > Email invitation > Privacy and security URL"
      docs: "https://learn.microsoft.com/microsoftteams/customize-meeting-invitations"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingConfiguration -LegalURL <String>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingconfiguration?view=teams-ps"
    note: "Also used in meeting invitations. If empty, Teams shows the Microsoft Entra ID privacy policy, or the Microsoft Privacy policy to external and anonymous users."
  - governs: "Whether meetings require participants to give explicit consent to recording and transcription"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting Policies > policy > Recording & Transcription > Require participant agreement for recording and transcription"
      docs: "https://learn.microsoft.com/microsoftteams/participant-agreement-recording-transcription"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -ExplicitRecordingConsent Enabled"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    note: "Off (Disabled) is the default. Decides whether the explicit consent scenarios and the consent dialog apply."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-01-30T23:15:49"
changes:
  - date: "2026-11-26"
    note: "New briefing: launched meeting-policy setting for custom recording and transcription notification text, with the privacy URL and explicit consent settings it works with."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 62 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: the summary now says the privacy policy link is set tenant-wide, not per meeting policy; removed the claim about a later roadmap item, the unsupported wording that the setting does not start, stop or block recording, and the consent-data review step."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 71 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 71
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "348c35f416ae0b0b6c285bc6b84bec03"
---

## What's changing

Teams admins can customise the message and the privacy policy URL that Teams shows meeting participants when recording or transcription starts. The roadmap item describes it as customising the message and privacy link used to notify participants implicitly, or to gain their explicit consent, for recording and transcription during the meeting.

Microsoft Learn documents the feature as a meeting policy setting. In the notification banner, admins can change the consent message, which supports plain text and HTML `<a>` tags for links, and the URL of the privacy policy; the display text "Privacy policy" is fixed. In meetings that require explicit consent, the consent dialog shown when a user unmutes or turns on the camera accepts plain text only. Messages are written per scenario (six, such as `initiator_implicit` and `agreement_dialogue`) and per language in a CSV template downloaded from the Teams admin center, and each message can't exceed 200 characters. Fixed information, such as the initiator's name and the privacy policy link, is always included. The privacy policy URL itself is set separately, in the tenant's meeting settings (see the controls table).

Once enabled for a meeting policy, users assigned that policy see the custom notifications in meetings they organise, and all participants in those meetings follow the organiser's settings. The message shown depends on the scenario and the participant's client language; where no custom message exists for that language or scenario, the participant sees the default Teams message. Learn says custom messages are not supported in 1:1 calls.

The roadmap item shows status Launched, with a target of January CY2026, General Availability, on Desktop and Mac, in Worldwide (Standard Multi-Tenant) and GCC. Learn names Teams Windows, macOS and Web as supported clients, and says iOS and Android currently support plain text only.

## Why it matters

Organisations with legal, works-council or privacy-office wording for recording notices can now put that wording, in each supported language, in front of participants instead of relying on the Teams default text. Combined with the explicit consent policy, it also lets you explain in your own words what a participant is agreeing to before they unmute.

Microsoft has not stated whether the setting is on or off when it arrives, and no source says existing notifications change on their own. Learn says participants see the default Teams message wherever no custom message is set. Treat it as an optional control: decide with your privacy or legal team whether the default wording is enough, and if not, which policies and languages need custom text.

## Risk assessment

**Data exposure**

- No new data access is documented: the setting changes notification text and the privacy policy URL.
- Banner messages can carry HTML links. Check every link target before upload, because participants, including external ones, will follow what the organiser's policy shows them.

**Security & identity**

- No change documented to permissions or sign-in. The message follows the organiser's policy, so a wrong or misleading message reaches every participant in meetings those organisers run. Use the **Preview** button in the customisation panel before saving.
- If no privacy and security URL is set, Learn says Teams shows the Microsoft Entra ID privacy policy, and external or anonymous users see the Microsoft Privacy policy instead. Set the URL if you want your own policy shown to everyone.

**Autonomy & actions**

- The documented setting customises notification text and its privacy policy link. Inserting `<empty>` for a language or scenario leaves only the fixed information, which can remove wording your organisation relies on.

**Change & support**

- Messages are per scenario and per language. Participants whose client language has no custom message see the default text, so people in one meeting can see different wording.
- Learn warns that in some non-English system languages Excel uses a different CSV delimiter, and tells those admins to edit the template in a plain text editor rather than Excel.
- The `New-CsTeamsRecordingAndTranscriptionCustomMessage` reference still says the feature has not been fully released and the setting will have no effect, while the roadmap item says Launched. Test the PowerShell route before relying on it.

## Cost and licensing

Teams licensing applies: the Manage Teams licenses page says that, except for joining Teams meetings anonymously, each user in your organisation must have a Teams licence before they can use Teams. The feature's Learn page names no licence among its steps, and no licence or meter specific to custom recording and transcription notifications is published at the time of writing (November 2026).

The indirect cost is admin and legal time: drafting messages for up to six scenarios, translating them for the languages your users run Teams in, and keeping the CSV and privacy URL current.

## Scope

- **Who sees it:** participants in meetings organised by users assigned a meeting policy with **Show customized in-meeting notification for recording and transcription** turned on. Not supported in 1:1 calls.
- **Clients:** the roadmap item lists Desktop and Mac; Learn lists Teams Windows, macOS and Web, with iOS and Android limited to plain text.
- **Clouds:** Worldwide (Standard Multi-Tenant) and GCC on the roadmap item.
- **Languages:** the Learn page lists the supported languages and their codes for the CSV template.
- **Related setting:** Learn says participants see the explicit consent scenario notifications when explicit consent (**Require participant agreement for recording and transcription**) is turned on; Learn gives Off as that setting's default.

## Governance guidance

### Before rollout

- Agree the wording for each of the six scenarios with your privacy, legal or works-council owners, keeping each message within 200 characters.
- Decide which meeting policies need custom messages, and whether the explicit consent setting should be on for those policies.
- Check the tenant's privacy and security URL in Teams admin center meeting settings, and set it to your own privacy notice if it is empty.
- Download the CSV template from the **Customize notification** panel and fill it in a plain text editor if admins use a non-English system language.

### At rollout

- Turn on **Show customized in-meeting notification for recording and transcription** in the chosen meeting policies and upload the CSV.
- Use **Preview** to compare each scenario with the default text before saving.
- Run a test meeting as an organiser on the policy, with participants on Windows, Mac, web and mobile clients in different languages.

### After rollout

- Recheck messages and links whenever your privacy notice or consent wording changes.
- Tell the service desk that custom messages are not supported in 1:1 calls, and that participants whose language has no custom message see the default text.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a meeting policy shows custom recording and transcription notifications</strong><br><small>Group</small><br><small class="controls__note">Applies to users assigned the policy and to all participants in meetings they organise.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Show customized in-meeting notification for recording and transcription <a href="https://learn.microsoft.com/microsoftteams/recording-transcription-custom-message" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -EnableRecordingAndTranscriptionCustomMessage $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which custom message text a meeting policy displays</strong><br><small>Group</small><br><small class="controls__note">In the admin centre the text is uploaded as a CSV. The Guid is a message set from New-CsTeamsRecordingAndTranscriptionCustomMessage, whose reference says the setting has no effect yet.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Customize notification <a href="https://learn.microsoft.com/microsoftteams/recording-transcription-custom-message" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -RecordingAndTranscriptionCustomMessageIdentifier &lt;Guid&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which privacy policy URL the recording and transcription notice links to</strong><br><small>Tenant</small><br><small class="controls__note">Also used in meeting invitations. If empty, Teams shows the Microsoft Entra ID privacy policy, or the Microsoft Privacy policy to external and anonymous users.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting settings › Email invitation › Privacy and security URL <a href="https://learn.microsoft.com/microsoftteams/customize-meeting-invitations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingConfiguration -LegalURL &lt;String&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingconfiguration?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether meetings require participants to give explicit consent to recording and transcription</strong><br><small>Group</small><br><small class="controls__note">Off (Disabled) is the default. Decides whether the explicit consent scenarios and the consent dialog apply.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting Policies › policy › Recording &amp; Transcription › Require participant agreement for recording and transcription <a href="https://learn.microsoft.com/microsoftteams/participant-agreement-recording-transcription" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -ExplicitRecordingConsent Enabled</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The custom message toggle and the message text live in the meeting policy and follow the organiser, so assign the policy to the people whose meetings need the wording. The privacy policy URL is a tenant-wide meeting setting shared with meeting invitations, not part of the meeting policy. Learn says participants see the explicit consent scenario notifications when explicit consent is turned on, so the explicit consent setting decides which of the scenario messages are used. The PowerShell route assigns a message set created with `New-CsTeamsRecordingAndTranscriptionCustomMessage`, whose reference says the feature has not been fully released and the setting will have no effect; the Teams admin center route is the one the feature page documents.

## Open questions

- What state does **Show customized in-meeting notification for recording and transcription** take in existing meeting policies, including Global, when the setting appears? Watch the feature's Learn page.
- When will the PowerShell custom message cmdlets take effect, given their reference still says the feature is not fully released?
- When will iOS and Android support links in custom messages, which Learn describes as coming soon?
- Will custom messages extend to 1:1 calls, which Learn says are not supported? Watch the later roadmap item and Message center.
- Are changes to custom messages recorded in the Microsoft Purview audit log?

<!-- rationale
risk: Low. The documented setting customises recording-notice wording and the privacy policy link; the risk is a misleading or broken message reaching every participant in affected meetings.
cost: Low. The feature sits in Teams meeting policies, which need users with a Teams licence; no separate licence or meter for custom notifications is published. The cost is time to write and translate the messages.
impact: Low. Admins configure it; participants only see different text in meetings organised by users whose meeting policy has custom messages switched on.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; rendered controls / admin-path: Teams admin center > Meetings > Meeting policies > policy > Recording & transcription > Customize notification reaches the panel for custom message text. | Found: Click the Customize notification button to set your custom message. Download the CSV template from the customization panel. [...] Upload the completed CSV using the Select a file button. | Fix: Finish controls[1].ui.path at the upload control: 'Meetings > Meeting policies > policy > Recording & transcription > Customize notification > Select a file', as documented at https://learn.microsoft.com/microsoftteams/recording-transcription-custom-message. | Source: https://learn.microsoft.com/microsoftteams/recording-transcription-custom-message
- [supported, minor] Open questions: 1:1 calls / behaviour: A later roadmap item concerns custom notification messages for recording and transcription in calls. | Found: Ability for IT admins to customize the user notification messages for recording and transcription in calls [Windows, Mac] [...] Roadmap ID: 567302 | Fix: Replace 'Watch the later roadmap item and Message center' with 'Watch Message center and roadmap item 567302, which the November 17, 2026 Copilot release notes describe as custom notifications for calls.' Cite https://learn.microsoft.com/microsoft-365/copilot/release-notes#november-17,-2026 in sources. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes#november-17,-2026
-->
