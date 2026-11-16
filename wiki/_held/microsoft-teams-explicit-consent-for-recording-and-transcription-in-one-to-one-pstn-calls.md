---
title: "Microsoft Teams: keypad consent for recording and transcription in one-to-one PSTN calls"
slug: "microsoft-teams-explicit-consent-for-recording-and-transcription-in-one-to-one-pstn-calls"
roadmapId: 577543
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams will ask phone (PSTN) participants in one-to-one calls to press 1 or 2 before recording or transcription includes them, using the existing calling policy setting. No new setting; communicate to users."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS","Mobile"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for this capability. Microsoft's notice names no licence or meter. Learn lists the licences that bring Teams PSTN calls into the recording policy scope (see Cost and licensing)."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["teams","policy","privacy","transcripts","auditing","powershell","mobile"]
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
  - title: "Introduction to Teams recording"
    url: "https://learn.microsoft.com/microsoftteams/teams-recording-policy"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether participants must agree to recording and transcription in 1:1 calls, including PSTN"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Require participant agreement for recording and transcription"
      docs: "https://learn.microsoft.com/microsoftteams/teams-calling-policy"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity <policy name> -ExplicitRecordingConsent <string>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy"
    note: "Existing setting; default Disabled. Applies per calling policy. Group calls and Audio Conferencing are managed by the Teams meeting policy."
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
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, based on roadmap item 577543 and Message Center post MC1530950."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 49
  unconfirmed: 3
  contradicted: 2
  attempts: 1
---

## What's changing

Teams will let a person who is on the phone network (PSTN) consent to recording or transcription by keypad in a one-to-one Teams call. When explicit consent is required, the PSTN participant hears an audio prompt as recording or transcription starts and can consent or decline. Participants who decline can stay in the call but remain muted.

Microsoft's notice MC1530950 adds detail: the participant presses 1 to consent or 2 to decline, and the PSTN participant's audio is not included in the recording or transcript before consent is given. The capability uses the existing explicit consent setting in Teams calling policies and, according to the notice, introduces no new admin policy setting. That setting is disabled by default. The notice says compliance recording and the consent experience for meetings and group calls do not change.

The roadmap item is In development, targeted for December CY2026, for General Availability in Worldwide (Standard Multi-Tenant), with Android, iOS and Mobile listed as platforms. The notice says rollout begins in early December 2026, lists 30 June 2027 as Microsoft's end date and sets no act-by date.

Microsoft Learn already says that the `-ExplicitRecordingConsent` parameter manages recording consent for Teams 1:1 VoIP and PSTN calls, and describes a Yes or No prompt in the Teams client. It does not describe the keypad prompt, so the keypad behaviour above is Microsoft's description in the roadmap item and notice.

## Why it matters

If your calling policies already require participant agreement, external people on ordinary phones will start hearing a consent prompt on one-to-one calls, and those who decline or do not answer stay muted. Expect questions from staff whose recordings or transcripts lack the other party's words, and from callers who do not know what to press.

If the setting is off, which is its default, nothing changes for you. The page's view: use the rollout window to decide deliberately whether one-to-one PSTN calls in your organisation should require consent, because the setting is the only lever Microsoft documents and it is not specific to PSTN.

## Risk assessment

**Data exposure**
- Before consent, the PSTN participant's audio is not included in the recording or transcript, per the notice. Where the setting is on, recordings of declined calls will contain only the Teams user's side, which matters for records you must keep.
- Consent choices are visible to admins and are in the Purview audit log for calls, per Learn. Learn does not say whether the PSTN keypad choice is recorded the same way.

**Security & identity**
- No new identity or permission is involved: the prompt is answered from a phone keypad and the notice describes no sign-in step.
- Where the setting is off, external PSTN participants are not asked and are included in recordings and transcripts that a Teams user starts.

**Autonomy & actions**
- No autonomous behaviour is described. Learn states that explicit consent is not supported for call queue calls; whether that limit also applies to this PSTN capability is not stated.

**Change & support**
- A declining caller stays in the call but muted, so the call can continue without the caller being able to speak. Brief help desks and users before December 2026.
- Tenants whose calling policies mix consent on and off will see different behaviour by user. Check which policies are assigned to staff who take external phone calls.

## Cost and licensing

The notice names no licence, meter or charge for this capability, and none is documented at the time of writing (November 2026). Treat licensing as not yet published.

For context, Learn's recording page says call recording policy scope includes Teams PSTN calls if the user has Microsoft 365 E5, Office 365 E5, or Microsoft/Office 365 E3 with the Teams Phone add-on licence. That describes recording of PSTN calls generally, not this capability.

Indirect cost is admin time to review calling policies and the time to brief users and the help desk.

## Scope

Applies to one-to-one Teams calls with a PSTN participant where explicit consent is required by the calling policy. The notice states it does not change compliance recording or the existing consent experience for meetings and group calls.

The roadmap record lists Worldwide (Standard Multi-Tenant) and platforms Android, iOS and Mobile. Other clouds are not listed on the record, which is not a statement that they are excluded. Rollout starts in early December 2026 according to the notice. The existing setting is disabled by default, so tenants that never enabled it see no prompt.

## Governance guidance

### Before rollout
- Review every Teams calling policy in the Teams admin center under Voice > Calling policies and note which have Require participant agreement for recording and transcription turned on.
- Decide whether one-to-one PSTN calls for your staff should require consent; enable the setting only in the policies that need it.
- Check that policies are assigned to the intended users, especially staff who take external phone calls.
- Draft guidance for users and the help desk: PSTN callers press 1 to consent or 2 to decline, and declining callers stay muted.

### At rollout
- Watch Message center for changes to MC1530950, as the rollout is described as beginning in early December 2026.
- Send the guidance to staff in policies where consent is already on.

### After rollout
- Sample calls with an external phone and confirm that the prompt plays and that declined callers stay muted.
- Use the Added information about call participants filter in the Teams calling audit logs in Purview to review consent data.
- Revisit the policy settings if declined consent leaves gaps in records you need.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether participants must agree to recording and transcription in 1:1 calls, including PSTN</strong><br><small>User</small><br><small class="controls__note">Existing setting; default Disabled. Applies per calling policy. Group calls and Audio Conferencing are managed by the Teams meeting policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Require participant agreement for recording and transcription <a href="https://learn.microsoft.com/microsoftteams/teams-calling-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity &lt;policy name&gt; -ExplicitRecordingConsent &lt;string&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A PSTN-only or keypad-only consent switch</strong><br><small class="controls__note">Microsoft's notice says no new admin policy setting is introduced.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can record 1:1 and PSTN calls at all</strong><br><small>User</small><br><small class="controls__note">Existing control over recording; it does not manage consent.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Cloud recording for calling <a href="https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity Global -AllowCloudRecordingForCalls $true</code> <a href="https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can transcribe 1:1 and PSTN calls at all</strong><br><small>User</small><br><small class="controls__note">Existing control over transcription; it does not manage consent.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity Global -AllowTranscriptionForCalling $true</code> <a href="https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The notice says no new policy setting is introduced, so the only switch is the existing one in the calling policy. It applies to the whole policy and Microsoft documents no PSTN-only or keypad-only switch. Learn says the parameter covers both 1:1 VoIP and PSTN calls, so turning it on also affects VoIP calls.

Cloud recording for calling and Transcription are separate existing settings. They decide whether a user can start recording or transcription at all; they do not control consent. Consent data for calls is viewed in the Teams calling audit logs in Purview, where Learn does not give the full path.

## Open questions

- Which Teams admin roles can edit the calling policy setting? Watch the Learn page Configure call recording, transcription, and captions in Teams.
- Does the keypad prompt behave the same on every Teams client, given that the roadmap lists Android, iOS and Mobile? Watch the roadmap item and Message center.
- Is the PSTN keypad consent choice recorded in the Purview audit log with the same filter as other call consent data?
- Does the call queue limitation on explicit consent apply to this capability?
- Will any licence apply? Watch Message center and the Teams Phone licensing pages.

<!-- rationale
risk: Low. The existing explicit consent setting is disabled by default and the change adds no new setting, so only tenants that already require consent see different behaviour on one-to-one PSTN calls.
cost: Low. The only cost the sources show is admin and communication time; the licence for this capability is not yet published, and no new meter is mentioned in Microsoft's notice.
impact: Low. Only PSTN participants in one-to-one calls, and the Teams users who call them, in tenants whose calling policy already requires explicit consent.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The cited consent-setting path is Teams admin center > Voice > Calling policies > policy > Require participant agreement for recording and transcription. | Found: Select the policy or policies that you want to modify, and then select Edit. | Fix: Insert Edit after policy in controls[0].ui.path and the rendered row: Voice > Calling policies > policy > Edit > Require participant agreement for recording and transcription. The cited page explicitly requires Edit after selecting the policy. | Source: https://learn.microsoft.com/microsoftteams/teams-calling-policy
- [supported, minor] controls[0].api; Governance controls table / command: The MicrosoftTeams module provides Set-CsTeamsCallingPolicy -Identity <policy name> -ExplicitRecordingConsent <string> to modify calling-policy consent. | Found: [-Identity] <string> [...] [-ExplicitRecordingConsent <string>]. This feature has not been released yet and will have no changes if it is enabled or disabled. | Fix: Keep the command, but add that the cmdlet reference currently marks ExplicitRecordingConsent unreleased and ineffective, while the call-configuration guide and MC1530950 describe the existing policy. Report this documentation discrepancy rather than silently presenting the reference as unqualified confirmation. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamscallingpolicy
- [supported, minor] What's changing; Governance controls / applicability: The call-configuration guide says ExplicitRecordingConsent manages consent for both one-to-one VoIP and PSTN calls. | Found: This parameter manages recording consent for Teams 1:1 VoIP and PSTN calls. | Fix: Keep the attributed statement, but cite https://learn.microsoft.com/microsoftteams/participant-agreement-recording-transcription and note that its endpoint list still places PSTN endpoints in 1:1 calls under auto consent, with consent data logged as 'not applicable' or 'auto consent'. Distinguish that existing documentation from the planned keypad update. | Source: https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions
- [unsupported, major] Risk assessment: Security & identity / behaviour: No new identity is involved in the capability. | Found: Searched: Teams one-to-one PSTN keypad recording consent no new identity permissions sign-in; read MC1530950 and call-recording-transcription-captions. Neither states the blanket no-new-identity claim. | Fix: Remove 'No new identity ... is involved'. Retain the documented narrower statement that participants respond using the phone keypad and that the notice describes no sign-in step.
- [unsupported, major] Risk assessment: Security & identity / behaviour: No new permission is involved in the capability. | Found: Searched: Teams one-to-one PSTN keypad recording consent no new identity permissions sign-in; read MC1530950 and call-recording-transcription-captions. Neither states that no new permission is involved. | Fix: Remove the assertion that no new permission is involved. Replace the whole opening clause with 'The notice describes participants responding from their phone keypad, without describing a sign-in step.'
- [unsupported, major] Risk assessment: Security & identity / behaviour: When the calling-policy consent setting is off, external PSTN participants are included in recordings and transcripts that a Teams user starts. | Found: Searched: Teams 1:1 PSTN calls ExplicitRecordingConsent Disabled participants included recordings transcripts no consent; read the calling-policy reference and call guide. The explicit all-participants inclusion wording found applies to meetings. | Fix: Replace this sentence with 'The calling-policy reference says Disabled does not require users to obtain explicit consent before recording starts.' Do not extend the meeting-policy statement about inclusion in recordings and transcripts to PSTN calls without a stating source.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist tells admins to review consent audit data, but the controls table has no consent-audit row. | Found: Use the Added information about call participants filter in the Teams calling audit logs in Purview to review consent data. [The table contains only consent, a PSTN-only switch, recording and transcription rows.] | Fix: Add a governance-controls row for reviewing call-consent audit data, naming the documented 'Added information about call participants' filter and citing https://learn.microsoft.com/microsoftteams/call-recording-transcription-captions. Preserve the caveat that keypad-specific audit behaviour is unconfirmed; do not invent navigation or an API.
-->
