---
title: "Microsoft Teams: automatic recording indicator for call queue calls on mobile"
slug: "microsoft-teams-automatic-recording-indicator-for-call-queue-calls-on-mobile"
roadmapId: 578867
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams on Android and iOS will tell call queue representatives that an automatically recorded call was recorded and transcribed automatically and cannot be stopped. No admin action is required; brief your representatives."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for the banner change. Microsoft Learn says no extra Teams Phone licensing is required for Automatic Recording for Call Queue, and that Queues App users need a Teams Premium licence."
audiences: ["m365-admin","service-owner","change-adoption","compliance"]
tags: ["teams","mobile","transcripts","privacy","user-experience","admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 578867"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578867"
    kind: "roadmap"
  - title: "MC1552392: Microsoft Teams: Automatic recording indicator for call queue calls on Mobile"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1552392"
    kind: "message-center"
  - title: "Setup - Automatic Recording template for Call Queue"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    kind: "learn"
  - title: "Planning - Recording voice applications calls"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-plan-recording"
    kind: "learn"
  - title: "Reference - Voice applications prerequisites and licensing"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-reference-prerequisites-licensing"
    kind: "learn"
  - title: "Set-CsCallQueue"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue"
    kind: "learn"
  - title: "New-CsAutoRecordingTemplate"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which call queues are recorded and transcribed automatically"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Call queue > (select the call queue) > Templates tab > Automatic recording template"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    api:
      kind: "powershell"
      call: "Set-CsCallQueue -AutoRecordingTemplateId <template ID>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue"
    note: "Existing control, not specific to the banner. The reference page says this parameter works only for Voice Applications private preview customers."
  - governs: "Recording, transcription, announcement and storage of an automatic recording template"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Templates and resources > Templates > Automatic Recording > Add"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    api:
      kind: "powershell"
      call: "New-CsAutoRecordingTemplate -Name <name> -RecordingEnabled <bool> -TranscriptionEnabled <bool>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate"
    note: "Existing control. Governs what is recorded, not the mobile banner wording."
  - governs: "Mobile recording banner wording or a switch for the new banner"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented at the time of writing (November 2026); MC1552392 says no admin action is required."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, based on roadmap record 578867, Message Center post MC1552392 and Microsoft Learn's call queue recording pages."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 66 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 65
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "cf24139bc175e33f77dac329d59e2917"
---

## What's changing

Teams on mobile will show a clearer recording banner on call queue calls that your organisation records automatically. The roadmap item states that Teams on Mobile will indicate that recording and transcription have started automatically and cannot be stopped, matching the desktop experience.

Microsoft's notice MC1552392 (published 2026-11-13) says the change is to the banner text only. The banner will state that recording started automatically and cannot be stopped, and the earlier wording, which implied the user had started the recording, will no longer appear on these calls. Existing consent text, the privacy link and the AI notice in the banner stay the same. Other calls, and recordings that users start manually, are not affected.

The roadmap record lists the item as In development, targeted for December CY2026, for Worldwide (Standard Multi-Tenant) on Android and iOS, as General Availability. The notice gives a rollout window: it begins early December 2026 and is expected to complete by mid-December 2026. The notice names no act-by date and says no admin action is required before rollout.

Microsoft Learn does not describe the mobile banner at the time of writing (November 2026). The Learn pages cover the recording feature it reflects: Automatic Recording for Call Queue, which records inbound call queue calls when a representative answers.

## Why it matters

This is a communication task more than a configuration task. Representatives who answer queue calls on a phone will see wording that tells them recording is controlled by the organisation and that they cannot stop it. If nobody tells them, expect questions to the service desk, or reps trying to stop a recording they cannot control.

It also removes a misleading cue. The notice says the previous wording implied the user started the recording, which could suggest the rep had a choice. Service owners who run contact-centre-style queues on mobile should align the message with their recording and privacy policy before early December 2026.

## Risk assessment

**Data exposure**
- No change: the notice says the feature does not change how recordings are started, stored or accessed. Recordings remain in SharePoint, as Microsoft Learn describes for Automatic Recording for Call Queue.

**Security & identity**
- No change to access. Authorised users and, where granted, representatives still reach recordings through the Queues App; the banner does not alter who can see them.

**Autonomy & actions**
- Recording and transcription start automatically when a representative answers, and the banner now says representatives cannot stop them. The template (Voice > Templates and resources > Templates) is the control over whether recording and transcription are on; the banner only reports it.

**Change & support**
- Representatives on Android and iOS see new wording from early December 2026. Update scripts, onboarding material and any call-handling guidance that told reps they started or could stop a recording on queue calls.
- Where the template has recording or transcription disabled, Microsoft has not said what the mobile banner shows. See Open questions.

## Cost and licensing

The banner change has no published licence or meter: Microsoft's notice and the roadmap record name none, so licensing is Not yet published for this change.

For the recording feature it reflects, the Learn licensing page states under Automatic Recording for Call Queue: "No extra Teams Phone licensing is required." and points to the SharePoint service description. The same page states that all Queues App users require a Teams Premium licence, and the Automatic Recording template page says users require the Queues App to access the features it describes. Recordings and transcripts are stored in SharePoint, so storage in the template's site is an indirect cost; Microsoft Learn does not give a figure for it.

The main direct cost of this change is admin time to tell representatives.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) only, on Android and iOS, as General Availability. It lists no other clouds; that is a record fact, not a statement that other clouds are excluded.

The banner applies to call queue calls that your organisation records automatically, as seen by representatives answering in Teams on Mobile. Desktop already behaves this way per the notice. Manually started recordings and other calls are unchanged.

Prerequisites for the underlying recording feature, as Microsoft Learn lists them: conference mode enabled on the call queue, call answering by a group or channel (Users and Shifts are not supported), Shared Call History enabled, and Explicit recording consent set to Off.

## Governance guidance

### Before rollout
- List the call queues that have an Automatic recording template assigned (Voice > Call queue > queue > Templates tab) so you know which representatives will see the banner.
- Draft a short note for those representatives, covering Android and iOS, that recording and transcription start automatically and cannot be stopped by them.
- Check that your recording announcement and privacy guidance match the banner wording, including the template's caller announcement, whose default is "This call will be recorded."

### At rollout
- Send the note in the first week of December 2026, ahead of the notice's early December start; Microsoft expects rollout to finish by mid-December 2026.
- Brief the service desk on the new banner so mobile reps' questions are answered consistently.

### After rollout
- Ask a mobile representative on a recorded queue to confirm the banner wording, since Microsoft Learn does not yet describe it.
- Watch Message center for changes to MC1552392 and the roadmap item for status changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which call queues are recorded and transcribed automatically</strong><br><small class="controls__note">Existing control, not specific to the banner. The reference page says this parameter works only for Voice Applications private preview customers.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Call queue › (select the call queue) › Templates tab › Automatic recording template <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsCallQueue -AutoRecordingTemplateId &lt;template ID&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Recording, transcription, announcement and storage of an automatic recording template</strong><br><small class="controls__note">Existing control. Governs what is recorded, not the mobile banner wording.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Templates and resources › Templates › Automatic Recording › Add <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-CsAutoRecordingTemplate -Name &lt;name&gt; -RecordingEnabled &lt;bool&gt; -TranscriptionEnabled &lt;bool&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Mobile recording banner wording or a switch for the new banner</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented at the time of writing (November 2026); MC1552392 says no admin action is required.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting for the banner itself is documented, so the controls that matter are those that decide whether a queue is recorded. Assigning a template to a queue requires the Teams administrator to also be a SharePoint site administrator for the site the template uses, per the Learn known issues.

The template's recording and transcription toggles are on by default when you create one, per the Learn page; the template's SharePoint host and site settings cannot be changed after creation. The PowerShell reference page says the AutoRecordingTemplateId parameter works only for customers in the Voice Applications private preview, while the Automatic Recording page lists PowerShell configuration as available from August 13, 2026; check the reference before scripting.

## Open questions

- What does the mobile banner say when the template has recording or transcription turned off? Watch the Automatic Recording template page on Microsoft Learn.
- Will Microsoft Learn document the mobile banner wording and screenshots, and will it publish any licence statement for this change? Watch Message center and the roadmap item.
- Is the AutoRecordingTemplateId parameter generally available in PowerShell, given the reference page still describes a private preview?
- Does the banner apply to calls answered on mobile by representatives who are on tenants without the Queues App licence?

<!-- rationale
risk: Low. Microsoft's notice says only the banner wording changes on automatically recorded call queue calls; how recordings are started, stored and accessed does not change.
cost: Low. The only cost the sources show is admin time to brief representatives; no licence or meter is published for the banner change itself.
impact: Medium. Calling reps who answer automatically recorded call queue calls in Teams on Android or iOS will see new banner wording; other users and other calls are not affected.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Transcription starts at the moment a representative answers the call queue call. | Found: Searched: "call queue" "transcription" "starts" "answers"; opened recording planning/setup and relevant search excerpts. Planning specifies recording starts when the representative answers; the roadmap and notice say transcription starts automatically but do not specify its start time. | Fix: Replace 'Recording and transcription start automatically when a representative answers' with 'Recording starts automatically when a representative answers'. The following banner statement can retain the separately supported fact that recording and transcription start automatically and cannot be stopped.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Change & support; Governance guidance / date: The notice gives early December 2026 as the rollout start, while the risk section says representatives see the wording from then. | Found: General Availability (Worldwide): We will begin rolling out on early December 2026 and expect to complete by mid-December 2026. | Fix: Replace 'Representatives on Android and iOS see new wording from early December 2026.' with 'Microsoft's notice says rollout on Android and iOS begins early December 2026 and is expected to complete by mid-December 2026.' This is a rollout window, not a guaranteed date for every representative.
- [supported, minor] front matter: licensing.model / licensing: The licensing model for the banner-only change is unknown. | Found: At least one Teams Phone license to enable Teams Phone Agent, Auto Attendant, and Call Queue services. Automatic Recording for Call Queue: No extra Teams Phone licensing is required. | Fix: Set licensing.model to 'included'. Replace the first sentence of licensing.notes with 'This is a banner-only update within the existing Call Queue service, whose base licensing requires at least one Teams Phone license and a Microsoft Teams Phone Resource Account license for each resource account; no banner-specific licence is published.' Cite https://learn.microsoft.com/microsoftteams/aa-cq-reference-prerequisites-licensing and retain the existing recording and Queues App licensing notes. | Source: https://learn.microsoft.com/microsoftteams/aa-cq-reference-prerequisites-licensing
- [supported, minor] Scope: Prerequisites / behaviour: The setup page requires call answering by a group or channel. | Found: Call answering must use a group or channel. | Fix: Replace 'call answering by a group or channel' with 'the template setup page requires call answering by a group or channel, while the Automatic Recording for Call Queue prerequisites at https://learn.microsoft.com/microsoftteams/aa-cq-reference-prerequisites-licensing say to use Microsoft 365 security groups to assign representatives'. Report both descriptions rather than silently choosing one. | Source: https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic
- [supported, minor] controls[0].api; Governance controls table / command: The MicrosoftTeams cmdlet Set-CsCallQueue -AutoRecordingTemplateId <template ID> assigns an automatic recording template to a queue. | Found: Voice applications private preview customers only. Saving a call queue configuration through Teams admin center will remove this setting. The AutoRecordingTemplateId parameter indicates the Auto Recording template to apply to the call queue. | Fix: Append to controls[0].note and its rendered table note: 'The PowerShell reference also warns that saving a call queue through Teams admin center removes this setting, whereas the setup page documents template assignment through that UI.' Retain the existing private-preview warning; the two cited pages disagree on the UI's handling of this setting. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue
- [supported, minor] Governance controls: closing prose / default: Recording is enabled by default when creating an automatic recording template. | Found: Call recording is enabled by default. Disable call recording if required. | Fix: Replace the recording-default clause with 'In Teams admin center, the recording toggle is on by default when creating a template.' Add 'The New-CsAutoRecordingTemplate reference lists RecordingEnabled's default as False' and cite https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate. | Source: https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic
- [supported, minor] Governance controls: closing prose / default: Transcription is enabled by default when creating an automatic recording template. | Found: Transcription is enabled by default. Disable transcription if required. | Fix: Replace the transcription-default clause with 'In Teams admin center, the transcription toggle is on by default when creating a template.' Add 'The New-CsAutoRecordingTemplate reference lists TranscriptionEnabled's default as False' and cite https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate. | Source: https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic
-->
