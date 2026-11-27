---
title: "Microsoft Teams: express voice enrollment from meeting audio"
slug: "microsoft-teams-express-voice-enrollment-in-microsoft-teams"
roadmapId: 537269
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "Teams users can opt in to create a voice profile from their speech in meetings. Microsoft Learn documents the policy as enabled by default, so decide whether to leave it on or turn it off with PowerShell."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Teams and Surface Devices"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "Teams use requires a Teams license; no licence requirement specific to express voice enrollment is stated on the cited enrollment and policy pages. Teams Rooms recognition is stated as exclusive to devices with a Teams Rooms Pro license."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["teams","voice-and-face-recognition","privacy","powershell","meeting-transcripts","teams-rooms","m365-copilot","intelligent-recap"]
sources:
  - title: "Overview and configuration of voice and face enrollment"
    url: "https://learn.microsoft.com/microsoftteams/rooms/voice-and-face-recognition"
    kind: "learn"
  - title: "Set-CsTeamsAIPolicy"
    url: "https://learn.microsoft.com/powershell/module/teams/set-csteamsaipolicy"
    kind: "learn"
  - title: "Manage voice isolation for your users' Microsoft Teams calls and meetings"
    url: "https://learn.microsoft.com/microsoftteams/voice-isolation"
    kind: "learn"
  - title: "Enable People Recognition on Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 537269"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=537269"
    kind: "roadmap"
videos: []
related: ["microsoft-teams-express-face-enrollment","meeting-transcripts","meeting-policy"]
controls:
  - governs: "Whether users can enrol their voice from meeting audio (express enrolment)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsAIPolicy -Identity Global -PassiveVoiceEnrollment Disabled"
      docs: "https://learn.microsoft.com/powershell/module/teams/set-csteamsaipolicy"
    note: "Learn documents the default as Enabled. Use New-CsTeamsAIPolicy and Grant-CsTeamsAIPolicy to apply a custom policy to selected users."
  - governs: "Whether users can enrol their voice manually from the Recognition settings (active enrolment)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsAIPolicy -Identity Global -EnrollVoice Disabled"
      docs: "https://learn.microsoft.com/powershell/module/teams/set-csteamsaipolicy"
    note: "Independent of PassiveVoiceEnrollment; Learn says to set both to Disabled to turn voice enrolment off completely."
  - governs: "Whether Teams Rooms use enrolled voice profiles to identify speakers"
    scope: "other"
    ui:
      surface: "Teams Pro Management Portal"
      path: "Rooms > Settings > Recognition > Configure with device settings > Voice Recognition"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity PolicyName -roomAttributeUserOverride Attribute"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition"
    note: "Device setting defaults to Off. Needs a Teams Rooms Pro license. Meeting-policy configuration is documented as to be retired in the future."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-13T19:41:44"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: documents the PassiveVoiceEnrollment policy, its documented default, the PowerShell controls and the unpublished licensing."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected the checklist step that said transcription depends on enrolled profiles, set licensing to included on the Teams licence requirement, and noted the -VoiceIsolation documentation conflict."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 82 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 82 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 80
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "2eb9c98903c7bbe215f3259224d8b995"
---

## What's changing

Express voice enrollment lets a Teams user create a voice profile from their speech in Teams meetings, instead of submitting a manual recording. The user goes to the **Recognition** tab in Teams settings and opts in. Microsoft Learn says generating a profile from in-meeting speech typically takes a couple of meetings, and that the profile supports speaker identification, transcription and voice isolation.

The roadmap item states that the profile also enables identification in a meeting room and in transcripts, and enhanced meeting recaps and insights from Microsoft 365 Copilot. It adds that administrators can enable or disable the feature.

An admin policy, `PassiveVoiceEnrollment` in the Teams AI policy, controls it, separately from `EnrollVoice` (manual, active enrollment). Learn documents both as enabled by default, and says users still have to opt in before a profile is created. The Set-CsTeamsAIPolicy reference says that an organisation that previously had `EnrollVoice` disabled gets a one-time copy of that state into `PassiveVoiceEnrollment` when the setting launches.

The roadmap item is Launched, with a target date of June CY2026, for Desktop, Mac and Teams and Surface Devices. The Set-CsTeamsAIPolicy reference says the setting starts in May 2026; the Microsoft 365 Copilot release notes list it under November 17, 2026 for Windows and Mac.

## Why it matters

This is a biometric-style profile built from what people say in meetings, so it is a privacy and works-council conversation as much as a feature. Because Learn documents the policy as enabled by default, users in a tenant that has changed nothing can already be offered express enrolment; whether any individual enrols depends on their opt-in.

The benefit is real for transcripts and Copilot recaps, which depend on knowing who spoke. An administrator should decide before users find the option: leave it on and communicate it, or disable `PassiveVoiceEnrollment` for the whole organisation or for selected users. Learn says users who already enrolled can still unenroll if enrolment is later disabled.

## Risk assessment

**Data exposure**
- Express enrolment lets the Teams app capture voice data from meetings on an ongoing basis to create and update the profile. Learn says the Teams audio and video used to create profiles is not retained after the end of the call, and that the profile is removed right away on unenrolling or when unused for one year.
- Learn says voice data is stored in the Office 365 trusted compliance store, and that Microsoft does not use voice and face profiles to train models or for purposes other than the recognition feature.
- Where Voice Isolation is used, Learn says a local copy of the voice profile is stored encrypted on the device and expires after 14 days, then is replaced.

**Security & identity**
- A voice profile is tied to a person. Learn says Teams Rooms can use enrolled profiles to attribute speakers in transcripts and recaps, so a profile affects what is written about who said what.
- Enrolment can fail if `*.speech.microsoft.com` is blocked; Learn lists it as the endpoint to allow.

**Autonomy & actions**
- The user initiates enrolment by opting in, and Learn says users can delete their voice and face profile at any time.

**Change & support**
- Expect help-desk questions from users who see the Recognition tab, and from works councils. Administrators cannot export end-user voice enrolment data; Learn says export is under the end user's control.
- Learn lists voice and face enrolment as available up to GCC and not in GCC High or DoD; the roadmap record lists only Worldwide (Standard Multi-Tenant).

## Cost and licensing

Each user in an organisation must have a Teams licence before they can use Teams, except for joining Teams meetings anonymously, per the Manage Teams licenses page. The Learn pages on voice and face enrollment and on Set-CsTeamsAIPolicy name no licence and no meter specific to express voice enrollment, and a licence requirement specific to it is Not yet published.

Two documented points sit beside that gap. The people recognition page for Teams Rooms states that recognition in meeting rooms is exclusive to Microsoft Teams Rooms devices with a Teams Rooms Pro license. The roadmap item lists Microsoft 365 Copilot among its products, because Copilot recap and insight features use the profile; no Copilot licence statement for this feature is published on the pages read.

Indirect cost is admin time to set the policy and to brief users.

## Scope

- **Users:** any user whose Teams AI policy allows `PassiveVoiceEnrollment` and who opts in at Settings > Recognition. Users on policies with it disabled cannot use express enrolment, per the Learn voice isolation page.
- **Roles:** Learn says enterprise administrators manage enrolment settings with PowerShell, using the Teams AI policy. The role needed is not stated on the pages read.
- **Cloud:** the roadmap record lists Worldwide (Standard Multi-Tenant) only. Learn's FAQ lists voice and face enrolment as available up to GCC and not in GCC High or DoD.
- **Platforms:** the record lists Desktop, Mac and Teams and Surface Devices; the Copilot release notes list Windows and Mac. Release phase per the record: General Availability and Targeted Release.
- **Rooms:** identifying people in a Teams Room is a separate setting and, per Learn, needs a Teams Rooms Pro license.

## Governance guidance

### Before rollout
- Decide whether express enrolment is acceptable to your organisation, and involve privacy, legal and works-council contacts before users see it.
- Check the current `PassiveVoiceEnrollment` and `EnrollVoice` values on your Teams AI policies; an organisation that had `EnrollVoice` disabled is documented as having that state copied over once.
- Draft user guidance that says enrolment is opt-in, that users can delete their profile, and what the profile is used for.

### At rollout
- Set `PassiveVoiceEnrollment` to `Disabled` on the Global policy, or on a custom policy granted to specific users, if you do not want express enrolment offered.
- Set `EnrollVoice` to `Disabled` as well if you want to turn off voice enrolment completely; Learn says both must be disabled for that.
- Allow `*.speech.microsoft.com` on the network so that enrolment does not fail.

### After rollout
- Review enrolment status for your users in the Teams admin center, and delete profiles where required; the experience is described on the voice and face enrolment page.
- Check that voice isolation and room recognition settings still match your intent, because these features use enrolled profiles.
- Re-read the Learn voice and face enrolment page each quarter; the documented behaviour and policy names have already changed once, from `EnrollUserOverride` to the Teams AI policy.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can enrol their voice from meeting audio (express enrolment)</strong><br><small>User</small><br><small class="controls__note">Learn documents the default as Enabled. Use New-CsTeamsAIPolicy and Grant-CsTeamsAIPolicy to apply a custom policy to selected users.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsAIPolicy -Identity Global -PassiveVoiceEnrollment Disabled</code> <a href="https://learn.microsoft.com/powershell/module/teams/set-csteamsaipolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can enrol their voice manually from the Recognition settings (active enrolment)</strong><br><small>User</small><br><small class="controls__note">Independent of PassiveVoiceEnrollment; Learn says to set both to Disabled to turn voice enrolment off completely.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsAIPolicy -Identity Global -EnrollVoice Disabled</code> <a href="https://learn.microsoft.com/powershell/module/teams/set-csteamsaipolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Teams Rooms use enrolled voice profiles to identify speakers</strong><br><small class="controls__note">Device setting defaults to Off. Needs a Teams Rooms Pro license. Meeting-policy configuration is documented as to be retired in the future.</small></td><td data-label="Admin UI"><strong>Teams Pro Management Portal</strong><br>Rooms › Settings › Recognition › Configure with device settings › Voice Recognition <a href="https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity PolicyName -roomAttributeUserOverride Attribute</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/teams-rooms-people-recognition" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Teams AI policy is documented as accessible only through PowerShell, so the table has no admin-centre path for it. `PassiveVoiceEnrollment` and `EnrollVoice` operate independently: disabling only one leaves the other route open, and Learn says to disable both to turn voice enrolment off completely.

Separately, Learn says administrators can use the **Teams admin center** to view end-user voice and face enrollment status and to delete profiles and enrolment data. The pages read give no navigation path for it, so it has no row. It does not change default availability.

Voice isolation is controlled by `-VoiceIsolation` in `Set-CsTeamsMeetingPolicy`, and Learn says users also need `EnrollVoice` or `PassiveVoiceEnrollment` enabled to use it. The enrollment overview instead says CsTeamsAIPolicy includes -VoiceIsolation; the voice isolation guide places it on the meeting policy. For the Teams Rooms row, Learn recommends device settings, and says meeting-policy configuration will be retired in the future; if transcription is not enabled in the meeting policy, voice identification does not occur.

## Open questions

- Is any licence required for express voice enrolment, and does the Microsoft 365 Copilot recap use of the profile need a Copilot licence? Watch the voice and face enrollment page on Microsoft Learn.
- Which Teams admin center path shows enrolment status and deletes profiles, and which admin role is needed? Watch the same Learn page.
- Which admin role is needed to set the Teams AI policy? Watch the Set-CsTeamsAIPolicy reference.

<!-- rationale
risk: Medium. Once a user opts in, Teams captures voice data from meetings on an ongoing basis to build a voice profile, and the policy that allows this is documented as enabled by default.
cost: Low. The cost shown is admin and communication time; the Learn pages read for this briefing name no licence or meter for express voice enrollment, and Teams Rooms recognition needs a Teams Rooms Pro licence.
impact: Medium. Users who opt in notice it, and their profile feeds voice isolation, transcript speaker attribution, meeting-room identification and Microsoft 365 Copilot meeting recaps.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout and After rollout; Governance controls / consistency: The checklist instructs readers to allow a network endpoint, review enrollment status, delete profiles and check voice isolation, but these controls have no table rows. | Found: Allow *.speech.microsoft.com on the network; Review enrolment status for your users in the Teams admin center, and delete profiles where required; Check that voice isolation and room recognition settings still match your intent. Rows cover only enrollment and room recognition. | Fix: Remove the At rollout bullet beginning 'Allow *.speech.microsoft.com' and the After rollout bullets beginning 'Review enrolment status' and 'Check that voice isolation'. Their factual descriptions may remain in Risk assessment and Governance controls; these checklist controls lack table rows.
- [contradicted, minor] front matter: action / consistency: The prepare action rating understates the decision for a launched, medium-risk feature offered without administrator action. | Found: action: "prepare"; status: "launched"; risk: "medium"; Microsoft Learn documents the policy as enabled by default, so decide whether to leave it on or turn it off with PowerShell. | Fix: Set action to 'act-now': the change is launched, risk is medium, and administrators must decide whether to leave default enrollment availability enabled. Individual profile creation remains user-opt-in.
-->
