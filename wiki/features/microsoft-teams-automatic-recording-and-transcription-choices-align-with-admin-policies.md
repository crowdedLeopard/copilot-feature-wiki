---
title: "Microsoft Teams: automatic recording and transcription options follow meeting policies"
slug: "microsoft-teams-automatic-recording-and-transcription-choices-align-with-admin-policies"
roadmapId: 570468
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams organisers will see only the automatic recording and transcription choices their meeting policies allow, plus a new Record only choice. Microsoft says no admin action is required; tell organisers."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item nor MC1508234 names a licence or meter for this change. Separately, Learn says Microsoft 365 Education A1 customers cannot record and transcribe meetings automatically."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["teams","meeting-policy","meeting-transcripts","policy","user-experience","powershell","sensitivity-labels"]
sources:
  - title: "Microsoft 365 Roadmap: item 570468"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570468"
    kind: "roadmap"
  - title: "MC1508234: (Updated) Microsoft Teams: Automatic recording and transcription options align with admin policies"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1508234"
    kind: "message-center"
  - title: "Manage Teams meeting auto recording"
    url: "https://learn.microsoft.com/microsoftteams/manage-teams-auto-recording"
    kind: "learn"
  - title: "Manage Teams recording policies for meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Manage Microsoft Teams meeting recording and transcription options for sensitive meetings"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-recording-options"
    kind: "learn"
videos: []
related: ["teams-intelligent-recap-without-saving-transcript","work-iq-real-time-transcripts","teams-ai-generated-meeting-memory"]
controls:
  - governs: "Whether organisers have the Record and transcribe automatically setting at all"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AutoRecording Enabled | Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/manage-teams-auto-recording"
    note: "Learn says there is no admin policy for the setting and that PowerShell or a meeting template (Teams Premium) is required. Not confirmed to interact with the new options."
  - governs: "Whether users can record meetings, which gates Record only and Record and transcribe"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting recording"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowCloudRecording $true | $false"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    note: "Existing policy. Microsoft has not said this is the policy the notice calls the recording policy."
  - governs: "Whether users can transcribe meetings, which gates Transcribe only and Record and transcribe"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true | $false"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Existing policy. Microsoft has not said this is the policy the notice calls the transcription policy."
  - governs: "Tenant-wide switch to turn off the new options or Record only"
    scope: "tenant"
    ui: null
    api: null
    note: "None documented at the time of writing (November 2026); Microsoft's notice says the feature is enabled automatically."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-12T01:50:56"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, using the roadmap record, MC1508234 (updated 10 November 2026) and the Teams recording, transcription and auto recording pages on Learn."
  - date: "2026-11-16"
    note: "Added the documented Microsoft 365 Education A1 exclusion and the sensitivity label and template enforcement routes for automatic recording; narrowed the licensing question to this change."
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 74
  unconfirmed: 0
  contradicted: 1
  attempts: 0
---

## What's changing

Teams is changing the **Record and transcribe automatically** setting in Meeting options so that organisers see only the automatic choices their assigned Teams meeting policies permit. A new **Record only** choice starts recording automatically without starting transcription. Depending on the policies, the choices can be Record and transcribe, Transcribe only, Record only and Off. When both recording and transcription are disabled by policy, the automatic setting is not shown.

Microsoft's notice MC1508234 gives the combinations. Recording allowed and transcription allowed: Record and transcribe, Transcribe only, Record only, Off. Recording allowed and transcription blocked: Record only, Off. Recording blocked and transcription allowed: Transcribe only, Off. Both blocked: no automatic setting. The notice says policy evaluation respects policies assigned directly to a user, inherited through group assignment, or applied through the global policy. It says the feature is enabled automatically as part of the service update and that no admin action is required.

The roadmap item is Rolling out, with a target of November CY2026, in Targeted Release and General Availability, on Android, Desktop, iOS and Mac. The notice (last updated 10 November 2026) gives the schedule Microsoft sent tenants: Targeted Release from mid-November 2026, expected to complete by end of November 2026, and General Availability (Worldwide) from early December 2026, expected to complete by mid-December 2026. It sets no act-by date; its end date is 2027-01-15. It lists Teams desktop, web and mobile clients that support Meeting options.

Microsoft Learn does not yet describe the new behaviour. At the time of writing (November 2026) the auto recording page does not mention Record only or Transcribe only, and it states that its setting "doesn't apply to transcripts". What follows about the new behaviour is the roadmap's and the notice's description.

## Why it matters

This moves the decision about what organisers can start automatically onto the meeting policies you already manage. If you block recording or transcription for a group, its organisers should no longer be offered an automatic choice that conflicts with that policy. If nobody acts, organisers still get the new menu and Record only, and the first sign of trouble will be a support call asking why a choice has gone or why the setting is missing.

Record only is a content decision as well as a menu change. Learn says that when recording is on and transcription is off, the recording has no transcript file stored next to it, so any search or review that relies on transcripts will not see those meetings. Teams administrators and compliance owners should decide whether that suits their retention expectations before organisers start using it.

## Risk assessment

**Data exposure**
- Record only produces a recording without a transcript. Learn says that when recording is turned on but transcription is turned off, the recording has no transcript file stored next to it, and captions cannot be turned on in Stream playback.
- Recordings go to the organiser's OneDrive (private meetings) or the channel's SharePoint site (channel meetings), as for any recording. The sources add no new storage location for this change.

**Security & identity**
- The effective meeting policy now decides which automatic options appear, including policies inherited through groups or the global policy. An organiser with several assignments sees the result of the effective policy, so check assignments before relying on a block.
- Explicit recording consent is a separate meeting policy setting (`-ExplicitRecordingConsent`) that Learn says applies to recording or transcribing in meetings that organisers with the policy create. Microsoft has not said how it interacts with the new options.

**Autonomy & actions**
- Once an organiser chooses an automatic option, recording or transcription starts without anyone in the meeting pressing a button. Record only extends that to recording alone. Learn says that when the auto recording policy is on, the meeting option is Off by default and organisers must turn it on for each meeting, and that for webinars and town halls it is On by default.

**Change & support**
- Options disappear for some organisers, and the whole setting disappears when both policies block. Brief the service desk and organisers. Microsoft recommends telling organisers about Record only and that their assigned meeting policies now determine the options.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for this change at the time of writing (November 2026). Neither the roadmap item nor MC1508234 names one, and the Learn pages on auto recording and recording policies name no licence for the setting.

Two documented limits sit beside it, and both predate this change. On the auto recording page, Learn says only organisers with a Teams Premium licence can use assigned meeting templates, which are one way to manage the setting. On the page about recording options for sensitive meetings, Learn says customers with a Microsoft 365 Education A1 subscription don't have the option to record and transcribe meetings automatically. Whether either limit applies to Record only or to the aligned menu is not stated.

The cost the sources show is indirect: communication to organisers and support time. Learn notes that `-AllowCloudRecording` doesn't configure or validate recording storage, so confirm OneDrive and SharePoint capacity as you would for any recording.

## Scope

Affected: Teams administrators who manage recording and transcription policies, and meeting organisers who set automatic recording or transcription in Meeting options (MC1508234). Cloud on the roadmap item: Worldwide (Standard Multi-Tenant); no other cloud is listed. Platforms on the roadmap item: Android, Desktop, iOS, Mac; the notice lists desktop, web and mobile clients that support Meeting options.

Rollout is Targeted Release then General Availability, with the dates in What's changing. Learn says the **Record and transcribe automatically** setting is available for meetings, webinars and town halls; whether the new alignment and Record only apply to webinars and town halls is Not yet documented. The notice names no prerequisite or role. Learn says transcription is checked for the organiser and for the user who starts it.

## Governance guidance

### Before rollout
- Inventory the meeting policies in the Teams admin center (Meetings > Meeting policies) and note which have **Meeting recording** or **Transcription** switched off, because those are the existing settings most likely to decide which options organisers see.
- Check which policies set `-AutoRecording Disabled`, since Learn says organisers with that setting do not see **Record and transcribe automatically** at all.
- Review policy assignments to users and groups so the effective policy for each organiser group is the one you intend.
- Draft a short notice for organisers covering the new Record only option and the fact that the options now follow their policies.

### At rollout
- Test with one organiser in each policy combination from the notice (both allowed, recording only, transcription only, both blocked) during Targeted Release, and compare what Meeting options shows.
- Brief the service desk that a missing automatic setting normally means both recording and transcription are blocked for that organiser, or that auto recording is disabled.

### After rollout
- Re-run the policy combinations once General Availability completes and confirm no organiser group is offered an option your policy blocks.
- Decide whether Record only is acceptable for sensitive meetings, given that a recording made without transcription has no transcript file stored beside it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether organisers have the Record and transcribe automatically setting at all</strong><br><small>User</small><br><small class="controls__note">Learn says there is no admin policy for the setting and that PowerShell or a meeting template (Teams Premium) is required. Not confirmed to interact with the new options.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AutoRecording Enabled | Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/manage-teams-auto-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can record meetings, which gates Record only and Record and transcribe</strong><br><small>User</small><br><small class="controls__note">Existing policy. Microsoft has not said this is the policy the notice calls the recording policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting recording <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowCloudRecording $true | $false</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can transcribe meetings, which gates Transcribe only and Record and transcribe</strong><br><small>User</small><br><small class="controls__note">Existing policy. Microsoft has not said this is the policy the notice calls the transcription policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true | $false</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to turn off the new options or Record only</strong><br><small>Tenant</small><br><small class="controls__note">None documented at the time of writing (November 2026); Microsoft's notice says the feature is enabled automatically.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No separate switch for this change is documented: Microsoft's notice says it is enabled automatically. The recording and transcription rows are the existing policies the notice says it follows; Microsoft has not named the policy parameters, so mapping `-AllowCloudRecording` and `-AllowTranscription` to the notice's recording and transcription policies is the wiki's reading of Learn.

Learn says there is no admin policy for **Record and transcribe automatically** itself; the `-AutoRecording` parameter controls only whether organisers have the setting. Learn also says organisers' automatic recording can be enforced with a meeting template (which needs Teams Premium for the organiser) or a sensitivity label. Those enforcement routes are named here and not tabled because their paths were not read, and Microsoft has not said how they interact with the new options. Policies are assigned to users or groups in the Teams admin center.

## Open questions

- Does `-AutoRecording Disabled` still hide the whole automatic setting after this change, or do the recording and transcription policies alone now decide? Watch the Teams auto recording page on Microsoft Learn and MC1508234.
- Which exact policy settings does Microsoft mean by the notice's recording policy and transcription policy: `-AllowCloudRecording` and `-AllowTranscription`, or others?
- Do the new options apply to webinars and town halls as well as meetings?
- Does any licence requirement, beyond the documented Microsoft 365 Education A1 exclusion and the Teams Premium requirement for templates, apply to Record only? Not yet published.
- Will meeting templates or sensitivity labels that enforce automatic recording keep working unchanged alongside the policy-aligned menu?

<!-- rationale
risk: Low. The change narrows the automatic choices organisers see to those their meeting policies allow; the only new choice, Record only, appears only where recording is permitted by policy.
cost: Low. The only cost the sources show is admin and communication time; Microsoft has not published a licence requirement or meter for this change at the time of writing (November 2026).
impact: Medium. Meeting organisers see a changed Record and transcribe automatically menu, and the setting disappears where both policies block it. It arrives without admin action.
-->

<!-- verifier-findings (2026-11-16, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: Every control the governance checklist asks readers to review has a row in the controls table. | Found: Review policy assignments to users and groups so the effective policy for each organiser group is the one you intend. The table covers auto recording visibility, recording permission, transcription permission and a separate tenant switch, but has no policy-assignment row. | Fix: Add a row for assignment of meeting policies to users and groups. Cite https://learn.microsoft.com/microsoftteams/meeting-recording and give Teams admin center > Meetings > Meeting policies > policy > Manage users > Assign users; describe the Group policy assignment route in its note.
-->
