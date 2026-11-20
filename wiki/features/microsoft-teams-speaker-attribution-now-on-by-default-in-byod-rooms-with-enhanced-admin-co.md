---
title: "Microsoft Teams: speaker attribution in BYOD rooms is on by default, with a PowerShell setting to turn it off"
slug: "microsoft-teams-speaker-attribution-now-on-by-default-in-byod-rooms-with-enhanced-admin-co"
roadmapId: 488301
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams speaker attribution in BYOD meeting rooms is enabled by default, and admins can turn it off with SpeakerAttributionBYOD in the Teams AI policy (PowerShell). Decide whether voice-based labelling suits your organisation."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Desktop","Mac"]
targetDate: "July CY2025"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "add-on"
  notes: "Learn says BYOD Rooms speaker recognition is available in rooms where the room host has either a Microsoft Teams Premium or a Copilot licence. Whether other licences also qualify is not stated on that page."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["teams","voice-and-face-recognition","speaker-attribution","meeting-transcripts","m365-copilot","teams-premium","powershell","privacy","gcc"]
sources:
  - title: "Microsoft 365 Roadmap item 488301"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=488301"
    kind: "roadmap"
  - title: "Set-CsTeamsAIPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaipolicy?view=teams-ps"
    kind: "learn"
  - title: "Grant-CsTeamsAIPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsaipolicy?view=teams-ps"
    kind: "learn"
  - title: "Manage voice recognition for Intelligent Speaker"
    url: "https://learn.microsoft.com/microsoftteams/rooms/voice-recognition"
    kind: "learn"
  - title: "Overview and configuration of voice and face enrollment"
    url: "https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Microsoft Teams Premium licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams"
    kind: "learn"
videos: []
related: ["microsoft-teams-express-face-enrollment","microsoft-teams-intelliframe-people-labels-in-teams-rooms-on-windows","meeting-transcripts","microsoft-teams-focus-on-the-conversation-while-facilitator-in-teams-mobile-takes-the-note"]
controls:
  - governs: "Whether speaker attribution runs in BYOD rooms"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsAIPolicy -Identity Global -SpeakerAttributionBYOD Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaipolicy?view=teams-ps"
    note: "Values Enabled or Disabled; default Enabled. Use -Identity <policy name> for a custom policy."
  - governs: "Which users or groups get a custom Teams AI policy"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Grant-CsTeamsAIPolicy -PolicyName <policy name> -Identity <user>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsaipolicy?view=teams-ps"
    note: "Reference also gives -Group <group id> with -Rank, and -Global for the tenant."
  - governs: "Whether users can enrol a voice profile through active enrolment"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsAIPolicy -Identity Global -EnrollVoice Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaipolicy?view=teams-ps"
    note: "PassiveVoiceEnrollment is a separate parameter for express enrolment; both set to Disabled turns voice enrolment off completely."
  - governs: "Whether users can transcribe meetings, which Learn says identification requires"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Existing meeting policy control, not specific to speaker attribution. Learn says transcription is set per organiser and per user."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-20"
    note: "New briefing: speaker attribution in BYOD rooms is on by default, with SpeakerAttributionBYOD in the Teams AI policy as the PowerShell control."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: cost rating changed from low to medium with its rationale, and the Teams Premium licensing page added as a source for the add-on model."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 67 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "2e12daec2eba9cb42c77becbf0b09cba"
---

## What's changing

Speaker attribution for BYOD (bring your own device) meeting rooms is now on by default, and a new PowerShell setting lets administrators turn it off. The roadmap item describes a setting called SpeakerAttributionBYOD in csTeamsAIPolicy (the Teams AI policy), enabled by default, which it says gives IT admins more control over speaker attribution in BYOD rooms and supports clear speaker labels and richer in-meeting and post-meeting insights with Microsoft 365 Copilot. It adds that users enrol profiles in Teams settings to be recognised.

The cmdlet reference agrees: Set-CsTeamsAIPolicy documents the SpeakerAttributionBYOD parameter, with the values Enabled and Disabled and a default of Enabled. Learn defines a BYOD room as one where the room host connects their laptop to an Intelligent Speaker, and says identification requires transcription to be enabled and the people to be identified to have enrolled a voice profile. Learn says BYOD rooms need the Teams desktop client on Windows or macOS, which matches the roadmap's Desktop and Mac platforms.

The roadmap record gives status Launched, target date July CY2025, release phases General Availability and Targeted Release, and clouds Worldwide (Standard Multi-Tenant) and GCC.

Two Learn statements do not line up. The voice recognition page's example uses the parameter name -SpeakerAttributionForBYOD, while the cmdlet reference names it -SpeakerAttributionBYOD; this briefing uses the reference's name. The same page also says BYOD scenarios aren't supported for identification features in its note on hybrid deployments, which sits awkwardly beside its BYOD requirements. Both are listed under open questions.

## Why it matters

This is an on-by-default feature that works from voice profiles, so it is a privacy decision as well as a meeting feature. Learn describes speaker recognition as analysing the distinct vocal characteristics of each speaker, such as pitch, tone and speaking style, to create a voiceprint. Whether that suits your organisation is for you to decide, and the setting that turns it off is a PowerShell setting, not a switch in the Teams admin center.

If nobody acts, the roadmap item and the cmdlet reference both say the setting is enabled by default, so BYOD rooms where the host holds a qualifying licence can show named speakers for users who have chosen to enrol. Learn says users still have to opt in to enrol, which limits the practical exposure. Expect questions from works councils, security teams and users about what is stored, and plan your answers before they ask.

## Risk assessment

**Data exposure**

- Attribution rests on voice profiles. Learn says each person gets a unique voice signature, stored in your organisation's tenant in the Microsoft Cloud, and that a voice and face profile not used for one year is removed automatically. Learn says Microsoft doesn't use these profiles to train models or for other purposes than providing the recognition feature. Turn attribution off for chosen users with SpeakerAttributionBYOD, and limit enrolment with EnrollVoice and PassiveVoiceEnrollment.
- Named speakers feed Copilot. Learn says Copilot needs a transcript with attribution for every speaker to produce summaries, insights and action items, so attribution decides how individuals' contributions appear in those outputs.

**Security & identity**

- The feature depends on users opting in. Learn says that even when the feature is available, users must opt in to enrol before recognition is used, and can unenrol later even if the organisation no longer allows enrolment.
- Learn lists Exchange Online as a prerequisite: identification is supported only when the organiser's mailbox is in Exchange Online, and its hybrid note says BYOD scenarios aren't supported for identification features. Confirm in a pilot room which applies to you.

**Autonomy & actions**

- No change is described: the roadmap item presents the setting as controlling how speakers in BYOD rooms are labelled and does not describe an agent or automated action.

**Change & support**

- The setting arrives enabled, so help desks may field questions from users who see named labels or are asked to enrol. Learn says users need an updated Teams client.
- Learn's cmdlet example for the setting uses a different parameter name from the cmdlet reference, so scripts copied from the wrong page can fail. Test the command in a pilot before wide use.
- Learn says that after a policy is assigned it can take up to 48 hours to take effect, and signing out and in makes it apply sooner.

## Cost and licensing

**Licence.** Learn's voice recognition page says BYOD Rooms speaker recognition is available in rooms where the room host has either a Microsoft Teams Premium or a Copilot licence, and lists the same requirement under BYOD Rooms prerequisites. It defines the room host as the person who connects their laptop to the Intelligent Speaker. The licensing model is therefore recorded as an add-on held by the room host.

**Meter and price.** Learn's cmdlet reference and the voice recognition page name no separate meter or charge for the SpeakerAttributionBYOD setting. A price for Teams Premium or Copilot is not on those pages; check your own agreements.

**Indirect costs.** Admin time to set the policy and brief users, and the cost of any Intelligent Speaker hardware you choose to buy. Learn says that although BYOD users can use any speaker microphone connected over USB, a certified Intelligent Speaker can give higher quality.

## Scope

**Who.** BYOD-room users whose meetings are attributed: the room host (who needs Teams Premium or a Copilot licence) and attendees with an enrolled voice profile. Learn recommends at most 10 in-person attendees for best transcript precision, and says the limit for invitees with a voice profile is 50.

**Prerequisites.** Teams desktop client on Windows or macOS with an updated client; transcription enabled; the organiser's mailbox in Exchange Online.

**Clouds and platforms.** The roadmap lists Worldwide (Standard Multi-Tenant) and GCC, and the platforms Desktop and Mac. Learn's FAQ says voice and face enrolments are currently available only up to GCC and aren't available in GCC High or DoD.

**Rollout.** The roadmap status is Launched, with a July CY2025 target date. Learn and the roadmap both say the setting is enabled by default.

**Roles.** The pages read do not name a role for configuring the Teams AI policy; confirm the role your Teams PowerShell session needs.

## Governance guidance

### Before rollout

- Decide with your privacy and security leads whether voice-based speaker attribution in BYOD rooms is acceptable for all users, some groups or none.
- Identify the BYOD rooms and room hosts that hold Teams Premium or a Copilot licence, since Learn ties BYOD speaker recognition to that licence.
- Check that transcription is allowed for those users in the meeting policy, because Learn says identification requires transcription.
- Test Set-CsTeamsAIPolicy with the SpeakerAttributionBYOD parameter in a pilot, using the reference's parameter name.

### At rollout

- Set SpeakerAttributionBYOD to Disabled in the Global policy if you want attribution off by default.
- Create a custom Teams AI policy and assign it with Grant-CsTeamsAIPolicy to the users or groups that need a different setting.
- Decide whether to leave EnrollVoice and PassiveVoiceEnrollment enabled; Learn says setting both to Disabled turns off voice enrolment completely.
- Tell users that enrolment is their choice, and where to unenrol.

### After rollout

- Verify in a BYOD-room meeting that labels behave as set, allowing for the 48 hours Learn says a policy can take.
- Re-read the Learn voice recognition page for a resolution of the BYOD wording and parameter name noted under open questions.
- Brief the help desk on how to turn the setting off for an individual and how users unenrol.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether speaker attribution runs in BYOD rooms</strong><br><small>User</small><br><small class="controls__note">Values Enabled or Disabled; default Enabled. Use -Identity &lt;policy name&gt; for a custom policy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsAIPolicy -Identity Global -SpeakerAttributionBYOD Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaipolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups get a custom Teams AI policy</strong><br><small>User</small><br><small class="controls__note">Reference also gives -Group &lt;group id&gt; with -Rank, and -Global for the tenant.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Grant-CsTeamsAIPolicy -PolicyName &lt;policy name&gt; -Identity &lt;user&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamsaipolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can enrol a voice profile through active enrolment</strong><br><small>User</small><br><small class="controls__note">PassiveVoiceEnrollment is a separate parameter for express enrolment; both set to Disabled turns voice enrolment off completely.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsAIPolicy -Identity Global -EnrollVoice Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaipolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can transcribe meetings, which Learn says identification requires</strong><br><small>User</small><br><small class="controls__note">Existing meeting policy control, not specific to speaker attribution. Learn says transcription is set per organiser and per user.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The setting is documented only for PowerShell: Learn says the Teams AI policy can be accessed only through PowerShell, so the table shows the Teams admin center side as not yet documented for it. Assign custom policies with Grant-CsTeamsAIPolicy; the grant reference gives user, group and tenant forms. New-CsTeamsAIPolicy creates a policy.

SpeakerAttributionBYOD turns the function on or off; EnrollVoice and PassiveVoiceEnrollment decide whether users can enrol, and they are separate settings. Disabling enrolment is not the same as turning attribution off, and this briefing does not establish what happens to profiles already enrolled.

Learn also describes a Teams admin center experience to view end-user voice and face enrolment status and to delete profiles and enrolment data; admins can't export that data. See the voice and face enrolment page.

## Open questions

- Does BYOD speaker identification work for hybrid (on-premises Exchange) organisers? Learn's voice recognition page says BYOD scenarios aren't supported for identification features in its hybrid note, while listing BYOD Rooms requirements. Watch that page.
- Which parameter name is correct in practice, -SpeakerAttributionBYOD (the cmdlet reference) or -SpeakerAttributionForBYOD (the voice recognition page example)?
- Will the setting get a Teams admin center control? Watch the Learn Teams AI policy pages and Message center.
- Which Microsoft 365 or Teams licences besides Teams Premium and Copilot, if any, qualify a room host?
- What happens to already-enrolled voice profiles if EnrollVoice and PassiveVoiceEnrollment are set to Disabled?

<!-- rationale
risk: Medium. Speaker attribution in BYOD rooms is enabled by default and works from voice profiles that users choose to enrol; a PowerShell setting turns it off, but there is no Teams admin center switch.
cost: Medium. BYOD speaker recognition requires a room host with Teams Premium or a Copilot licence, so hosts without a qualifying licence need an add-on; the cited pages name no separate meter for this setting.
impact: Medium. People who join BYOD-room meetings with an enrolled voice profile are the ones who notice, as speaker labels and Copilot insights in those meetings; most other users never see it.
-->
