---
title: "Microsoft Teams: automatic recording and transcription options follow meeting policies"
slug: "microsoft-teams-automatic-recording-and-transcription-choices-align-with-admin-policies"
roadmapId: 570468
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams organisers will see only the automatic recording and transcription choices their meeting policies allow, plus a new Record only choice. Microsoft says no admin action is required; communicate it to organisers."
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
  notes: "Not yet published. Microsoft's notice MC1508234 and the roadmap item name no licence or meter. Separately, Learn says assigned meeting templates can be used only by organisers with a Teams Premium licence."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["teams","meeting-policy","meeting-transcripts","policy","user-experience","powershell"]
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
videos: []
related: ["teams-intelligent-recap-without-saving-transcript","work-iq-real-time-transcripts","teams-ai-generated-meeting-memory"]
controls:
  - governs: "Whether organisers see the automatic recording setting at all"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AutoRecording Enabled | Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/manage-teams-auto-recording"
    note: "Learn says this setting is managed only by PowerShell or a meeting template; templates need Teams Premium. Not confirmed to interact with the new options."
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
    note: "None documented at the time of writing; Microsoft's notice says the feature is enabled automatically."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-12T01:50:56"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, using the roadmap record, MC1508234 (updated 10 November 2026) and the Teams recording, transcription and auto recording pages on Learn."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 54
  unconfirmed: 0
  contradicted: 1
  attempts: 1
---

## What's changing

Teams is changing the **Record and transcribe automatically** setting in Meeting options so that organisers see only the automatic choices their assigned Teams meeting policies permit. A new **Record only** choice starts recording automatically without starting transcription. Depending on the policies, the choices can be Record and transcribe, Transcribe only, Record only and Off. When both recording and transcription are disabled by policy, the automatic setting is not shown.

Microsoft's notice MC1508234 gives the combinations. Recording allowed and transcription allowed: Record and transcribe, Transcribe only, Record only, Off. Recording allowed and transcription blocked: Record only, Off. Recording blocked and transcription allowed: Transcribe only, Off. Both blocked: no automatic setting. The notice says policy evaluation respects policies assigned directly to a user, inherited through group assignment, or applied through the global policy. It also says the feature is enabled automatically as part of the service update and that no admin action is required.

The roadmap item is Rolling out, with a target of November CY2026, in Targeted Release and General Availability, on Android, Desktop, iOS and Mac. The notice (last updated 10 November 2026) gives a later schedule: Targeted Release from mid-November 2026, expected to complete by end of November 2026, and General Availability (Worldwide) from early December 2026, expected to complete by mid-December 2026. The notice sets no act-by date; its end date is 2027-01-15. It lists desktop, web and mobile clients that support Meeting options.

Microsoft Learn does not yet describe the new behaviour. At the time of writing (November 2026) the auto recording page mentions neither Record only nor Transcribe only, and it states that its setting "doesn't apply to transcripts". What follows about the new behaviour is the roadmap's and the notice's description.

## Why it matters

This moves the decision about what organisers can start automatically onto the meeting policies you already manage. If you block recording or transcription for a group, its organisers should no longer be offered an automatic option that conflicts with that policy. If nobody acts, organisers still get the new menu and Record only, and the first sign of trouble will be a support call asking why a choice has disappeared or why the setting is missing.

Record only is a content decision as much as a menu change: it produces a recording with no transcript file stored beside it. Teams administrators and compliance owners should decide whether that suits their retention and search expectations before organisers start using it.

## Risk assessment

**Data exposure**
- Record only creates a recording without a transcript. Learn says that when recording is on and transcription is off, the recording has no transcript file stored next to it, so anything that relies on transcripts for search or review will not see these meetings.
- Recordings are uploaded to the organiser's OneDrive (private meetings) or SharePoint (channel meetings), as for any recording. The change adds no new storage location in the sources read.

**Security & identity**
- The effective meeting policy now decides which automatic options appear, including policies inherited through groups or the global policy. An organiser assigned conflicting policies sees the result of the effective policy, so check assignments before relying on a block.
- Explicit recording consent is a separate meeting policy setting that Learn says applies to recording or transcribing in meetings organisers with the policy create. Microsoft has not said how it interacts with the new options.

**Autonomy & actions**
- Once an organiser chooses an automatic option, recording or transcription starts without a person in the meeting pressing a button. The new option extends that to recording alone. For meetings, Learn says the setting is Off by default each time an organiser has auto recording turned on.

**Change & support**
- Options disappear for some organisers and the whole setting disappears when both policies block. Brief the service desk and organisers. Microsoft recommends telling organisers about Record only and that their assigned meeting policies now determine the options.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for this change at the time of writing (November 2026). Neither the roadmap item nor MC1508234 names one, and the Learn pages on auto recording and recording policies list no licence for the setting.

One licence statement is documented for an adjacent control: on the auto recording page, Learn says only organisers with a Teams Premium licence can use assigned meeting templates, which are the other way to manage the setting. That is a limit on templates, not on this change.

The cost the sources do show is indirect: communication to organisers and support time. Recording storage in the organiser's OneDrive or SharePoint is existing behaviour; Learn notes that AllowCloudRecording does not configure or validate recording storage, so confirm capacity as you would for any recording.

## Scope

Affected: Teams administrators who manage recording and transcription policies, and meeting organisers who set automatic recording or transcription in Meeting options (MC1508234). Cloud on the roadmap item: Worldwide (Standard Multi-Tenant); no other cloud is listed. Platforms on the roadmap item: Android, Desktop, iOS, Mac; the notice lists desktop, web and mobile clients that support Meeting options.

Rollout is Targeted Release then General Availability, with the dates in What's changing. Learn says the **Record and transcribe automatically** setting is available for meetings, webinars and town halls; whether the new alignment and Record only apply to webinars and town halls is Not yet documented. The notice names no prerequisite or role.

## Governance guidance

### Before rollout
- Inventory the meeting policies in the Teams admin center (Meetings > Meeting policies) and note which have **Meeting recording** or **Transcription** switched off, because those decide which options organisers will see.
- Check which policies set `-AutoRecording Disabled`, since Learn says organisers with that setting do not see the automatic setting at all.
- Review policy assignments to users and groups so the effective policy for each organiser group is the one you intend.
- Draft a short notice for organisers covering the new Record only option and the fact that the options now follow their policies.

### At rollout
- Test with one organiser in each policy combination from the notice (both allowed, recording only, transcription only, both blocked) in Targeted Release, then compare what Meeting options shows.
- Brief the service desk that a missing automatic setting normally means both recording and transcription are blocked for that organiser.

### After rollout
- Re-run the policy combinations after General Availability completes and check that no organiser group sees an option your policy blocks.
- Decide whether Record only is acceptable for sensitive meetings, given that no transcript file is stored with such a recording.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether organisers see the automatic recording setting at all</strong><br><small>User</small><br><small class="controls__note">Learn says this setting is managed only by PowerShell or a meeting template; templates need Teams Premium. Not confirmed to interact with the new options.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AutoRecording Enabled | Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/manage-teams-auto-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can record meetings, which gates Record only and Record and transcribe</strong><br><small>User</small><br><small class="controls__note">Existing policy. Microsoft has not said this is the policy the notice calls the recording policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting recording <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowCloudRecording $true | $false</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can transcribe meetings, which gates Transcribe only and Record and transcribe</strong><br><small>User</small><br><small class="controls__note">Existing policy. Microsoft has not said this is the policy the notice calls the transcription policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true | $false</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to turn off the new options or Record only</strong><br><small>Tenant</small><br><small class="controls__note">None documented at the time of writing; Microsoft's notice says the feature is enabled automatically.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No separate switch for this change is documented: Microsoft's notice says it is enabled automatically. The controls above are the existing policies the notice says it follows; Microsoft has not named the policy parameters, so the mapping of AllowCloudRecording and AllowTranscription to the notice's recording and transcription policies is the wiki's reading of Learn, and worth confirming.

Learn says the auto recording setting can be managed only with PowerShell or a meeting template, which needs Teams Premium for organisers; the template path was not read for this briefing and is not tabled. Policies can be assigned to users or groups in the Teams admin center. Transcription is also checked for the user who starts it, not only the organiser.

## Open questions

- Does `-AutoRecording Disabled` still hide the whole automatic setting after this change, or do the recording and transcription policies alone now decide? Watch the Teams auto recording page on Microsoft Learn and MC1508234.
- Which exact policy settings does Microsoft mean by the notice's "recording policy" and "transcription policy": AllowCloudRecording and AllowTranscription, or others?
- Do the new options apply to webinars and town halls as well as meetings?
- Is any licence, including Teams Premium, required for the automatic setting or for Record only? Not yet published.
- Will Graph or PowerShell expose the new Record only option for scheduling meetings programmatically?

<!-- rationale
risk: Low. The change narrows the choices organisers see to those their existing Teams meeting policies allow; the only new option, Record only, appears only where recording is already permitted.
cost: Low. The only cost the sources show is admin and communication time; Microsoft has not published a licence requirement or meter for this change at the time of writing (November 2026).
impact: Medium. It changes the Record and transcribe automatically menu for meeting organisers, who are a subset of Teams users, and it arrives without admin action.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] controls[0].note; Governance controls / behaviour: The cited Learn page says this setting must be managed through PowerShell or a meeting template. | Found: You must use PowerShell or a meeting template to manage this setting for organizers. | Fix: Retain the attribution, but note that https://learn.microsoft.com/microsoftteams/manage-meeting-recording-options#record-and-transcribe-automatically also documents sensitivity labels for enforcing automatic recording. Cite that page and distinguish enforcement from the AutoRecording availability policy. | Source: https://learn.microsoft.com/microsoftteams/manage-teams-auto-recording
- [contradicted, blocker] Open questions: licensing; Cost and licensing / licensing: Whether any licence is required for the automatic setting itself is entirely not yet published. | Found: Customers with a Microsoft 365 Education A1 subscription don't have the option to record and transcribe meetings automatically. | Fix: Keep licensing.model unknown for this change, but narrow the licensing question to additional requirements for the new alignment and Record only choice. Add the documented baseline exclusion: Microsoft 365 Education A1 customers cannot record and transcribe meetings automatically. Cite https://learn.microsoft.com/microsoftteams/manage-meeting-recording-options#record-and-transcribe-automatically and distinguish this existing restriction from the unpublished licensing of the update. | Source: https://learn.microsoft.com/microsoftteams/manage-meeting-recording-options#record-and-transcribe-automatically
-->
