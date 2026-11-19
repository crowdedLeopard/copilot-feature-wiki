---
title: "Microsoft Teams: customise the recording and transcription notification text"
slug: "microsoft-teams-ability-for-it-admins-to-customize-the-user-notification-messages-for-reco"
roadmapId: 567302
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "IT admins can replace part of the recording and transcription notification text Teams shows participants. Launched; nothing changes until an admin sets it, and Learn says 1:1 calls are not supported."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Microsoft Learn's page on this feature names no licence and no price at the time of writing (November 2026)."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["teams","meeting-policy","meeting-transcripts","powershell","privacy","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 567302"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567302"
    kind: "roadmap"
  - title: "Custom in-meeting notification for recording and transcription"
    url: "https://learn.microsoft.com/microsoftteams/recording-transcription-custom-message"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Set-CsTeamsCallingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps"
    kind: "learn"
  - title: "New-CsTeamsRecordingAndTranscriptionCustomMessage"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csteamsrecordingandtranscriptioncustommessage?view=teams-ps"
    kind: "learn"
  - title: "Calling policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-calling-policy"
    kind: "learn"
  - title: "Overview- Recording and transcription for Teams meetings, events, and calls"
    url: "https://learn.microsoft.com/microsoftteams/recording-transcription-overview"
    kind: "learn"
  - title: "Configure call recording, transcription, and captions in Teams"
    url: "https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions"
    kind: "learn"
videos: []
related: ["meeting-policy","microsoft-teams-audio-announcement-for-recording-and-transcription","microsoft-teams-explicit-consent-for-recording-and-transcription-in-one-to-one-pstn-calls","microsoft-teams-automatic-recording-and-transcription-choices-align-with-admin-policies","microsoft-teams-tenant-policy-controls-who-can-record-and-transcribe"]
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
    note: "Applies to users assigned the policy and to meetings they organise."
  - governs: "Which custom message text a meeting policy displays"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Recording & transcription > Customize notification"
      docs: "https://learn.microsoft.com/microsoftteams/recording-transcription-custom-message"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -RecordingAndTranscriptionCustomMessageIdentifier <guid>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "The message set is created with New-CsTeamsRecordingAndTranscriptionCustomMessage, whose reference says the feature was not fully released and the setting would have no effect."
  - governs: "Custom recording and transcription notification setting in a Teams calling policy"
    scope: "group"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity <policy name> -EnableRecordingAndTranscriptionCustomMessage $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps"
    note: "Parameter listed in the cmdlet reference. Learn's feature page says custom messages are not supported in 1:1 calls, so its effect on calls is unconfirmed."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-19"
    note: "New briefing: launched meeting-policy setting for custom recording and transcription notification text; Learn says 1:1 calls are not supported."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 50
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "f0a55211690066b210ba2b1de079c61b"
---

## What's changing

Teams admins can customise part of the notification that tells participants a recording or transcription has started. The roadmap item describes it as the ability for IT admins to customise a portion of the user notification messages for recording and transcription during Teams calls.

Microsoft Learn documents the feature for meetings. When recording or transcription starts, Teams shows a notification banner, and admins can change the consent message and the URL of the privacy policy. Only the URL of the privacy policy link can change: its display text "Privacy policy" is fixed. The message supports plain text and HTML links in the banner. In meetings that require explicit consent, the consent dialog shown when a user unmutes or turns on the camera allows plain text only. Messages are set per scenario and language in a CSV template, and each message is limited to 200 characters. Fixed information, such as the initiator's name and the privacy policy link, is always shown.

The roadmap and Learn differ on scope. The roadmap item refers to calls; Learn's page on the feature says custom messages are not supported in 1:1 calls. Learn does not say how the feature applies to group calls. The roadmap item shows status Launched with a target of August CY2026, for General Availability and Targeted Release on Desktop, Mac and Web, in Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.

## Why it matters

Many organisations have legal or works-council wording for notifying people that a conversation is recorded or transcribed. This setting lets you put that wording, in each supported language, into the notice participants see, instead of living with the Teams default text.

Microsoft has not stated whether the setting is on or off by default, and no source says existing notifications change. The default text stays in use for any scenario or language where no custom message is set. Treat it as an optional control to review, and decide with your legal or compliance team whether the default wording is enough.

## Risk assessment

**Data exposure**

- No new data access is documented: the feature changes notification text and the privacy policy URL, not what is recorded or transcribed.
- A custom banner message can carry HTML links. Check where each link leads, because participants will click what the organisation puts in front of them.

**Security & identity**

- No change documented: Learn describes no new permission, identity or sign-in behaviour for this setting.
- The notification applies to every participant through the organiser's policy: the page says all users on the policy see custom notifications in meetings they organise, and all participants in those meetings follow the organiser's settings. A weak or misleading message therefore reaches everyone in those meetings; test with the Preview button before saving.

**Autonomy & actions**

- No change: the setting does not start, stop or block recording or transcription. Inserting `<empty>` for a scenario leaves only the fixed information, so a message left empty can remove wording your organisation relies on.

**Change & support**

- Messages are per scenario and per language. Where a language or scenario has no custom message, users see the default Teams text, so users in different languages can see different wording.
- Mobile clients differ: Learn says iOS and Android currently support plain text only, with full customisability coming soon. Expect support questions if your messages rely on links.
- Editing the CSV in Excel can corrupt it in some non-English system languages; Learn tells those admins to use a plain text editor.
- Learn states that custom messages are not supported in 1:1 calls, which differs from the roadmap's wording about calls. Tell the service desk before promising users a custom 1:1 call notice.

## Cost and licensing

No licence or price is published for this feature. Learn's page on custom in-meeting notifications names no licence requirement and no meter, and the recording and transcription overview page names none for it either, so the licence entitlement is not yet published.

The cost the sources do show is indirect: admin time to write messages, translate them into each language you support, review them with legal or compliance, test them with Preview and keep them current. Separate licensing for recording and transcription itself, such as Teams Premium or Copilot for some options, is described on other pages and is not stated to apply to this setting.

## Scope

- **Users:** Learn says all users assigned to a meeting policy with custom messages enabled see the custom notifications in meetings they organise, and all participants follow the organiser's settings.
- **Calls:** the roadmap item refers to Teams calls. Learn says custom messages are not supported in 1:1 calls. The Set-CsTeamsCallingPolicy reference does list the same two custom message parameters as the meeting policy; how they apply is not documented.
- **Clouds (roadmap record):** Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.
- **Platforms:** the roadmap lists Desktop, Mac and Web. Learn says Teams Windows, macOS and Web clients are supported, and iOS and Android currently support plain text only.
- **Release phase (roadmap record):** General Availability and Targeted Release, status Launched, target August CY2026.
- **Languages:** Learn lists the supported languages and codes; a message is shown only when its language matches the participant's client language.

## Governance guidance

### Before rollout

- Decide with legal or compliance which notification wording you need per scenario: initiator or participant, implicit or explicit consent.
- Check which meeting policies and calling policies your users hold, so you know whose meetings will show the new text.
- Draft messages within the 200-character limit for each language you support, and agree who edits the CSV in a plain text editor.

### At rollout

- Turn on the custom notification setting in a test meeting policy and upload the CSV, then use Preview to compare against the defaults.
- Assign the test policy to a pilot group and start a recording or transcription in a meeting to see the real banner on desktop, web and mobile.
- Assign the policy more widely once the pilot users confirm the wording and any links.

### After rollout

- Review messages when your privacy policy URL or legal wording changes.
- Confirm 1:1 call behaviour in your tenant, since Learn states custom messages are not supported there.
- Watch the Teams admin center and the Learn page for the iOS and Android customisability Learn says is coming.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a meeting policy shows custom recording and transcription notifications</strong><br><small>Group</small><br><small class="controls__note">Applies to users assigned the policy and to meetings they organise.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Show customized in-meeting notification for recording and transcription <a href="https://learn.microsoft.com/microsoftteams/recording-transcription-custom-message" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -EnableRecordingAndTranscriptionCustomMessage $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which custom message text a meeting policy displays</strong><br><small>Group</small><br><small class="controls__note">The message set is created with New-CsTeamsRecordingAndTranscriptionCustomMessage, whose reference says the feature was not fully released and the setting would have no effect.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Customize notification <a href="https://learn.microsoft.com/microsoftteams/recording-transcription-custom-message" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -RecordingAndTranscriptionCustomMessageIdentifier &lt;guid&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Custom recording and transcription notification setting in a Teams calling policy</strong><br><small>Group</small><br><small class="controls__note">Parameter listed in the cmdlet reference. Learn's feature page says custom messages are not supported in 1:1 calls, so its effect on calls is unconfirmed.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity &lt;policy name&gt; -EnableRecordingAndTranscriptionCustomMessage $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The setting lives in the meeting policy, so it follows the policy assignment rules for meetings. The Learn page does not name a role needed to configure it. Learn says the message a participant sees depends on the organiser's policy.

The New-CsTeamsRecordingAndTranscriptionCustomMessage reference carries a note that the feature "has not been fully released yet, so the setting will have no effect", which does not match the roadmap status of Launched; test the cmdlet route before relying on it. The calling policy row records the parameters that the Set-CsTeamsCallingPolicy reference lists, and Learn's feature page says 1:1 calls are not supported, so do not treat that row as a confirmed control over call notifications.

## Open questions

- Does the custom message apply to any kind of Teams call, given the roadmap item says calls and Learn's page says custom messages are not supported in 1:1 calls? Watch the Learn page and Message center.
- What is the default state of the custom notification setting in a meeting policy or calling policy? Microsoft has not stated it.
- Is any licence required? No licence is published for this feature.
- Does the calling policy parameter set (Set-CsTeamsCallingPolicy) take effect, and where in the Teams admin center is it set? Learn's calling policy page lists no such setting.
- When will iOS and Android get full customisability? Learn says it is coming soon without a date.

<!-- rationale
risk: Low. The change alters the wording of a notification, not what is recorded or who can record, and Microsoft Learn documents it as a per-policy setting an admin chooses to use.
cost: Low. The only cost the sources show is admin time to write, translate and test messages; no licence or meter is yet published for this feature.
impact: Low. Admins configure it, and users notice only where a policy carries custom text; the page says all participants in a meeting follow the organiser's settings.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary versus front matter: defaultState and Why it matters / consistency: The summary promises that nothing changes until an administrator sets it, while the page reports the arrival default as unknown. | Found: summary: "nothing changes until an admin sets it"; defaultState: "unknown"; Why it matters: "Microsoft has not stated whether the setting is on or off by default". | Fix: Replace the summary with: "IT admins can replace part of the recording and transcription notification text Teams shows participants. The roadmap status is Launched; Microsoft has not stated the setting's default, and Learn says custom messages are not supported in 1:1 calls." Keep defaultState as unknown.
- [contradicted, blocker] Governance guidance: Before rollout, second bullet / applicability: Checking users' calling policies helps determine whose meetings will display the new custom text. | Found: Meeting policies: These policies control user permissions for recording and transcription in Teams meetings and group calls. ... Voice calling policies: These policies control user permissions for 1:1 calls | Fix: Replace the bullet with: "Check which meeting policies your users hold, so you know whose meetings will show the new text." The feature page places custom meeting notifications under the organiser's meeting policy; the briefing already correctly warns that calling-policy effects are unconfirmed. | Source: https://learn.microsoft.com/microsoftteams/recording-transcription-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; Open questions / licensing: The licensing model is unknown because no feature-specific licence entitlement is published. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to included. Replace the licensing notes and the broad entitlement gap in Cost and licensing and Open questions with: "A Teams licence is required to use Teams, except for joining meetings anonymously. No additional licence requirement specific to custom notifications is published at the time of writing (November 2026)." Cite https://learn.microsoft.com/microsoftteams/user-access. This is the standard's product-level licensing understatement, not evidence of a published feature-specific licence. | Source: https://learn.microsoft.com/microsoftteams/user-access
-->
