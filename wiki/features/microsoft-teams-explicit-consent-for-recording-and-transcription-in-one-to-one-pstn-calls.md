---
title: "Microsoft Teams: keypad consent for recording and transcription in one-to-one PSTN calls"
slug: "microsoft-teams-explicit-consent-for-recording-and-transcription-in-one-to-one-pstn-calls"
roadmapId: 577543
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams will ask phone (PSTN) participants in one-to-one calls to press 1 or 2 before recording or transcription includes them, using the existing calling policy setting. No new setting; prepare users."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","iOS","Mobile"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for this capability. Neither the roadmap item nor Microsoft's notice MC1530950 names a licence or meter."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["teams","policy","privacy","transcripts","auditing","powershell","mobile","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 577543"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577543"
    kind: "roadmap"
  - title: "MC1530950: Microsoft Teams: Explicit consent for PSTN participants in one-to-one calls"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1530950"
    kind: "message-center"
  - title: "Configure call recording, transcription, and captions in Teams"
    url: "https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions"
    kind: "learn"
  - title: "Calling policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-calling-policy"
    kind: "learn"
  - title: "Set-CsTeamsCallingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy"
    kind: "learn"
  - title: "Manage participant agreement for recording and transcription"
    url: "https://learn.microsoft.com/microsoftteams/participant-agreement-recording-transcription"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
videos: []
related: ["microsoft-teams-automatic-recording-indicator-for-call-queue-calls-on-mobile"]
controls:
  - governs: "Whether participants must agree to recording and transcription in 1:1 calls, including PSTN"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Edit > Require participant agreement for recording and transcription"
      docs: "https://learn.microsoft.com/microsoftteams/teams-calling-policy"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity <policy name> -ExplicitRecordingConsent <string>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy"
    note: "Existing setting; default Disabled. Per calling policy. The cmdlet reference marks the parameter as not yet released; see notes."
  - governs: "A PSTN-only or keypad-only consent switch"
    scope: "other"
    ui: null
    api: null
    note: "Microsoft's notice says no new admin policy setting is introduced."
  - governs: "Whether users can record 1:1 and PSTN calls at all"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Cloud recording for calling"
      docs: "https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity Global -AllowCloudRecordingForCalls $true"
      docs: "https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions"
    note: "Existing control over recording; it does not manage consent."
  - governs: "Whether users can transcribe 1:1 and PSTN calls at all"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity Global -AllowTranscriptionForCalling $true"
      docs: "https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions"
    note: "Existing control over transcription; it does not manage consent."
  - governs: "Reviewing call consent data in the audit log"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search > Activities - friendly names"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <start date> -EndDate <end date> -Operations CallParticipantDetail"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "The call-recording page directs admins to Added information about call participants, but the audit activities reference says calls that are recorded or transcribed are included in MeetingParticipantDetail."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-17"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, based on roadmap item 577543 and Message Center post MC1530950."
  - date: "2026-11-16"
    note: "Corrected the consent setting's admin path (adds Edit), noted the cmdlet reference's not-yet-released banner, removed unsupported claims and added a consent audit row."
  - date: "2026-11-17"
    note: "Corrected the audit-log control: added the Purview Audit > Search path and the Search-UnifiedAuditLog call with the CallParticipantDetail operation, and dropped the unrelated policy-assignment checklist step."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 51 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the default state to on (automatic extension of the existing consent policy), shortened the audit-search path, and noted that the audit activities reference places recorded or transcribed calls under MeetingParticipantDetail."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 52 statements confirmed"
  - date: "2026-11-17"
    note: "Roadmap now lists GCC, GCC High and DoD alongside Worldwide; the notice's rollout schedule still names only Worldwide, so scope and open questions say so. Controls and guidance re-checked against Learn."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 55 statements not yet confirmed"
version: 5
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 55
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "394cd52356c9b29f41ca2292e4349be4"
---

## What's changing

Teams will let a person on the public switched telephone network (PSTN) consent to recording or transcription by keypad in a one-to-one Teams call. The roadmap item says that when explicit consent is required, the PSTN participant hears an audio prompt as recording or transcription starts and can consent or decline. Participants who decline can stay in the call but remain muted.

Microsoft's notice MC1530950 adds detail: the participant presses 1 to consent or 2 to decline, and the PSTN participant's audio is not included in the recording or transcript before consent is given. The capability uses the existing explicit consent setting in Teams calling policies and, according to the notice, introduces no new admin policy setting. The notice says that setting is disabled by default, and that compliance recording and the consent experience for meetings and group calls do not change.

The roadmap item is In development, targeted for December CY2026, for General Availability. It lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with Android, iOS and Mobile as platforms. The notice's rollout schedule lists General Availability (Worldwide) beginning in early December 2026, gives 30 June 2027 as Microsoft's end date and sets no act-by date.

Microsoft Learn does not describe the keypad prompt for one-to-one calls at the time of writing (November 2026). The Learn page on call recording describes a Yes or No prompt in the Teams client for call participants, and says the `-ExplicitRecordingConsent` parameter manages recording consent for Teams 1:1 VoIP and PSTN calls. The Learn page on meeting consent lists "PSTN endpoints in 1:1 calls" among endpoints that are auto consented, so the keypad behaviour above is the roadmap's and the notice's description of a planned change.

## Why it matters

If your calling policies already require participant agreement, external people on ordinary phones will start hearing a consent prompt on one-to-one calls, and those who decline stay muted. Expect questions from staff whose recordings or transcripts lack the other party's words, and from callers who do not know what to press.

If the setting is off, which the notice says is its default, nothing is described as changing for you. The wiki's view: use the rollout window to decide deliberately whether one-to-one PSTN calls in your organisation should require consent, because the calling policy setting is the only lever Microsoft documents and it is not specific to PSTN.

## Risk assessment

**Data exposure**

- The notice says the PSTN participant's audio is not included in the recording or transcript before consent is given. Where consent is required and a caller declines, expect the recording or transcript to hold only the Teams user's side, which matters for records you must keep.
- Learn says the consent choice for each participant is visible to the admin and included in the Purview audit log for the call. It does not say whether the PSTN keypad choice is logged the same way.

**Security & identity**

- The notice describes participants responding from their phone keypad and describes no sign-in step.
- The Set-CsTeamsCallingPolicy reference says the Disabled value means users are not required to obtain explicit consent before recording starts, so tenants that leave the setting off get no consent prompt from this change.

**Autonomy & actions**

- No autonomous behaviour is described. Learn states that explicit consent is not supported for call queue calls; it does not say whether that limit applies to this capability.

**Change & support**

- A declining caller stays in the call but muted, so the call can continue with the caller unable to speak. Brief help desks and users before rollout begins in early December 2026.
- Tenants whose calling policies mix consent on and off will see different behaviour by user. Check which policies are assigned to staff who take external phone calls.

## Cost and licensing

No licence, meter or charge is named for this capability by the roadmap item or by MC1530950, and Microsoft has not published licensing for it at the time of writing (November 2026). Treat licensing as not yet published rather than as included.

The notice describes the feature as using the existing explicit consent setting in Teams calling policies. The Learn page on calling policies describes that setting and names no licence for it. Indirect cost is admin time to review calling policies and the time to brief users and the help desk.

## Scope

Applies to one-to-one Teams calls with a PSTN participant where the calling policy requires explicit consent. The notice states it does not change compliance recording or the existing consent experience for meetings and group calls; Learn says group calls and Audio Conferencing are managed by the Teams meeting policy instead.

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the platforms Android, iOS and Mobile. The notice's rollout schedule names only General Availability (Worldwide), beginning in early December 2026, so the date for the other clouds is not stated. The notice says the existing setting is disabled by default, so tenants that never enabled it are not described as seeing a prompt.

## Governance guidance

### Before rollout

- Review every Teams calling policy in the Teams admin center under Voice > Calling policies and note which have Require participant agreement for recording and transcription turned on.
- Decide whether one-to-one PSTN calls for your staff should require consent, and enable the setting only in the policies that need it.
- Draft guidance for users and the help desk: PSTN callers press 1 to consent or 2 to decline, and declining callers stay muted.

### At rollout

- Watch Message center for changes to MC1530950, which describes rollout as beginning in early December 2026.
- Send the guidance to staff in policies where consent is already on.

### After rollout

- Place test calls from an external phone and confirm that the prompt plays and that a declining caller stays muted.
- Review consent data in the Microsoft Purview portal: go to Audit > Search, set a date range, select Added information about call participants under Activities - friendly names, then select Search. Check whether keypad choices appear. The call-recording page directs admins to Added information about call participants, but the audit activities reference says calls that are recorded or transcribed are included in MeetingParticipantDetail (https://learn.microsoft.com/purview/audit-log-activities).
- Revisit the policy settings if declined consent leaves gaps in records you need.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether participants must agree to recording and transcription in 1:1 calls, including PSTN</strong><br><small>User</small><br><small class="controls__note">Existing setting; default Disabled. Per calling policy. The cmdlet reference marks the parameter as not yet released; see notes.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Edit › Require participant agreement for recording and transcription <a href="https://learn.microsoft.com/microsoftteams/teams-calling-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity &lt;policy name&gt; -ExplicitRecordingConsent &lt;string&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A PSTN-only or keypad-only consent switch</strong><br><small class="controls__note">Microsoft's notice says no new admin policy setting is introduced.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can record 1:1 and PSTN calls at all</strong><br><small>User</small><br><small class="controls__note">Existing control over recording; it does not manage consent.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Cloud recording for calling <a href="https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity Global -AllowCloudRecordingForCalls $true</code> <a href="https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can transcribe 1:1 and PSTN calls at all</strong><br><small>User</small><br><small class="controls__note">Existing control over transcription; it does not manage consent.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity Global -AllowTranscriptionForCalling $true</code> <a href="https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Reviewing call consent data in the audit log</strong><br><small>Tenant</small><br><small class="controls__note">The call-recording page directs admins to Added information about call participants, but the audit activities reference says calls that are recorded or transcribed are included in MeetingParticipantDetail.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search › Activities - friendly names <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;start date&gt; -EndDate &lt;end date&gt; -Operations CallParticipantDetail</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The notice says no new policy setting is introduced, so the only switch is the existing one in the calling policy. It applies to the whole policy, and Microsoft documents no PSTN-only or keypad-only switch. Learn says the parameter covers both 1:1 VoIP and PSTN calls, so turning it on also affects VoIP calls.

The Set-CsTeamsCallingPolicy reference marks -ExplicitRecordingConsent with the note "This feature has not been released yet and will have no changes if it is enabled or disabled" at the time of writing (November 2026), while the call recording page and MC1530950 describe it as an existing setting. Check the reference again after rollout.

Cloud recording for calling and Transcription are separate existing settings. They decide whether a user can record or transcribe at all; they do not control consent. Consent data can be searched in the Purview audit log under the Added information about call participants activity (operation CallParticipantDetail), in the Microsoft Purview portal or with Search-UnifiedAuditLog in Exchange Online PowerShell. Whether PSTN keypad choices are logged under that activity is not stated. The call-recording page directs admins to Added information about call participants, but the audit activities reference says calls that are recorded or transcribed are included in MeetingParticipantDetail (https://learn.microsoft.com/purview/audit-log-activities).

## Open questions

- Which Teams admin roles can edit the calling policy setting? Watch the Learn page Configure call recording, transcription, and captions in Teams.
- Does the keypad prompt behave the same on every Teams client, given that the roadmap lists Android, iOS and Mobile? Watch the roadmap item and Message center.
- When will the change reach GCC, GCC High and DoD, which the roadmap record lists while the notice's rollout schedule names only Worldwide? Watch the roadmap item and Message center.
- Is the PSTN keypad consent choice recorded in the Purview audit log under the same filter as other call consent data?
- Does the call queue limitation on explicit consent apply to this capability?
- Will any licence apply? Watch Message center and the Teams Phone licensing pages.

<!-- rationale
risk: Low. The existing explicit consent setting is disabled by default and Microsoft's notice says no new setting is added, so only tenants that already require consent see different behaviour on one-to-one PSTN calls.
cost: Low. The only cost the sources show is admin and communication time; no licence or meter is named for this capability and its licensing is not yet published.
impact: Low. Only PSTN participants in one-to-one calls, and the Teams users who call them, in tenants whose calling policy already requires explicit consent, notice the change.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary / behaviour: Teams will ask PSTN participants in one-to-one calls to press 1 or 2 before including them in recording or transcription. | Found: PSTN participants in applicable one-to-one Teams calls where explicit consent for recording or transcription is required | Fix: Replace the summary with: "Where explicit consent is required, PSTN callers in one-to-one Teams calls will press 1 or 2 before recording or transcription includes them. No new setting; prepare users."
-->
