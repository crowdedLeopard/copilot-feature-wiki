---
title: "Microsoft Teams: intelligent call recap for call queue calls in the Queues app on mobile"
slug: "microsoft-teams-intelligent-call-recap-for-call-queue-calls-on-mobile"
roadmapId: 578871
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams plans to show AI notes, key points and follow-up tasks for recorded call queue calls in the Queues app on Android and iOS from December 2026. No admin action is required; check recording and licences."
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
  model: "included"
  notes: "Queues app users need a Teams Phone and a Teams Premium licence. Learn says intelligent recap for calls needs a Teams Premium or Microsoft Copilot licence; a recap requirement specific to call queue calls is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","call-queues","queues-app","intelligent-recap","mobile","teams-phone","transcripts"]
sources:
  - title: "Microsoft 365 Roadmap item 578871"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578871"
    kind: "roadmap"
  - title: "MC1558032: Microsoft Teams: Intelligent call recap for call queues in the Queues app on mobile"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1558032"
    kind: "message-center"
  - title: "Intelligent recap for Teams calls, meetings, and events"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings"
    kind: "learn"
  - title: "Manage Queues app for Microsoft Teams in your organization"
    url: "https://learn.microsoft.com/microsoftteams/manage-queues-app"
    kind: "learn"
  - title: "Setup - Automatic Recording template for Call Queue"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    kind: "learn"
  - title: "Reference - Voice applications prerequisites and licensing"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-reference-prerequisites-licensing"
    kind: "learn"
  - title: "Microsoft Teams Premium - Overview for admins"
    url: "https://learn.microsoft.com/microsoftteams/enhanced-teams-experience"
    kind: "learn"
  - title: "New-CsAutoRecordingTemplate"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate?view=teams-ps"
    kind: "learn"
  - title: "Set-CsCallQueue"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue?view=teams-ps"
    kind: "learn"
videos: []
related: ["microsoft-teams-copilot-in-the-queues-app-on-mobile","microsoft-teams-automatic-recording-and-transcription-for-teams-call-queues","microsoft-teams-automatic-recording-indicator-for-call-queue-calls-on-mobile","microsoft-teams-real-time-queue-metrics-in-the-queues-app-on-mobile"]
controls:
  - governs: "Whether call queue calls are recorded and transcribed (the calls recap depends on)"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Templates and resources > Templates > Automatic Recording > Add > Call recording > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    api:
      kind: "powershell"
      call: "New-CsAutoRecordingTemplate -Name <template name> -RecordingEnabled $true -TranscriptionEnabled $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate?view=teams-ps"
    note: "Creates the template; a template applies only to queues it is assigned to. Learn does not say recap reads this template's settings; the notice says recap needs recorded and transcribed calls."
  - governs: "Which call queue uses an automatic recording template"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Call queue > call queue > Templates > Automatic recording template"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    api:
      kind: "powershell"
      call: "Set-CsCallQueue -AutoRecordingTemplateId <template ID>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue?view=teams-ps"
    note: "The Set-CsCallQueue reference says this parameter is for Voice Applications private preview customers only, and that saving a queue in Teams admin center removes it; the admin centre page describes assignment as generally available."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-19"
    note: "New briefing on intelligent call recap for call queue calls in the Queues app on mobile, covering MC1558032 and the recording template controls."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: licensing model set to included, rollout bullet now states Microsoft's plan and expected completion, recording template path extended to the settings, and three checklist items without control rows removed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 77 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-19"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 77
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "5f2ea19cdae2cf74d71d6eaa5b059327"
---

## What's changing

Microsoft plans to add intelligent call recap to the Queues app on Microsoft Teams mobile for call queue calls. The roadmap item describes AI-generated notes, key discussion points and recommended follow-up tasks that calling representatives and supervisor leads can read after a call, without replaying the recording or reading the full transcript.

Microsoft's notice MC1558032 (published 17 November 2026) says the update extends an experience already available on desktop. After rollout, a user opens a recorded call from shared call history and selects **View recap**. The notice says recap is available only for recorded and transcribed call queue calls and only to users who already have access to the recording, and that the feature does not change how call recordings are created, stored or accessed.

The roadmap record lists the item as In development, for Android and iOS, in Worldwide (Standard Multi-Tenant), with a General Availability target of December CY2026. MC1558032 gives a rollout window of early December 2026, expected to complete by mid-December 2026, and says no admin action is required before rollout. Microsoft Learn's intelligent recap page lists the supported call types as PSTN, 1:1 and group peer-to-peer calls and does not name call queue calls, so the behaviour above comes from the roadmap item and the notice.

## Why it matters

This puts an AI summary of customer calls in front of representatives and supervisors on their phones. Microsoft's notice says no admin action is required and describes the feature as arriving after rollout, so plan for users to see it in December 2026 rather than waiting for an opt-in.

What decides whether anyone sees recap is already in your hands: whether the queue records and transcribes calls, and whether users hold the licences. The notice recommends confirming recording and transcription on the queues where you want recap, and reviewing licence assignments. Tell queue teams what the new option shows before it appears, because recaps will be generated from customer conversations.

## Risk assessment

**Data exposure**

- Recap is built from recorded and transcribed call queue calls, so the recording and transcript settings on each queue decide what exists to be summarised. The automatic recording template defines where recordings and transcripts are stored in SharePoint and who can access them.
- MC1558032 says recap is limited to users who already have access to the recording. Where a recap is stored and for how long is not stated in the sources read; see Open questions.

**Security & identity**

- Access follows recording access, per MC1558032. Check the template's setting for which recordings representatives can access, because it cannot be changed after the template is created.

**Autonomy & actions**

- The roadmap item describes recommended follow-up tasks. The sources do not say the feature acts on them; a user reads them. Whether they can be sent to another app or person is not described.

**Change & support**

- Expect questions from representatives who see no **View recap** option. The notice ties it to recorded and transcribed calls and to existing recording access, so a queue without recording and transcription has nothing to recap.
- Compliance: MC1558032 asks organisations to review their recording, transcription and AI-related compliance requirements.

## Cost and licensing

Learn's Queues app page says users must have a Teams Phone and a Teams Premium licence to use the Queues app (https://learn.microsoft.com/microsoftteams/manage-queues-app). Learn's intelligent recap page says to use intelligent recap you assign a Teams Premium licence or a Microsoft Copilot licence, and for PSTN calls a Teams Phone licence and a calling plan (https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings). That page does not name call queue calls, so the licence that applies to recap on call queue calls is not yet published; MC1558032 only recommends reviewing licence assignments.

The Auto Attendant and Call Queue licensing page lists no extra Teams Phone licensing for Automatic Recording for Call Queue and points to the SharePoint service description, which is where recordings are stored. No meter or price for recap on call queue calls is published at the time of writing (November 2026). The indirect cost is admin time to check recording templates and licences.

## Scope

**Who:** calling representatives and supervisors who use the Queues app on Teams mobile and have access to recorded and transcribed call queue calls (MC1558032).

**Platforms and clouds:** the roadmap record lists Android and iOS and Worldwide (Standard Multi-Tenant). Learn says the Queues app is supported on iOS and Android mobile clients.

**Rollout:** early December 2026 to mid-December 2026 per MC1558032; the roadmap target is December CY2026.

**Prerequisites from Learn:** the Queues app needs Teams Phone and Teams Premium licences. The automatic recording template needs conference mode and shared call history enabled on the call queue, and call answering set to a group or channel.

## Governance guidance

### Before rollout

- Confirm which call queues record and transcribe calls, using the automatic recording template (see the controls table); a queue without both has nothing for recap to summarise.
- Brief your compliance owner on MC1558032's request to review recording, transcription and AI-related requirements.

### At rollout

- Tell queue teams that Microsoft plans to begin rollout of the View recap option in shared call history in early December 2026 and expects completion by mid-December 2026.
- Test with a pilot queue on Android and iOS and note which recorded calls show a recap.

### After rollout

- Collect user reports of missing recaps and compare them with the queue's recording and transcription settings.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether call queue calls are recorded and transcribed (the calls recap depends on)</strong><br><small class="controls__note">Creates the template; a template applies only to queues it is assigned to. Learn does not say recap reads this template's settings; the notice says recap needs recorded and transcribed calls.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Templates and resources › Templates › Automatic Recording › Add › Call recording › Transcription <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-CsAutoRecordingTemplate -Name &lt;template name&gt; -RecordingEnabled $true -TranscriptionEnabled $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which call queue uses an automatic recording template</strong><br><small class="controls__note">The Set-CsCallQueue reference says this parameter is for Voice Applications private preview customers only, and that saving a queue in Teams admin center removes it; the admin centre page describes assignment as generally available.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Call queue › call queue › Templates › Automatic recording template <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsCallQueue -AutoRecordingTemplateId &lt;template ID&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The notice describes no switch for recap itself. Recap depends on the queue recording and transcribing calls, so the automatic recording template and its assignment to a call queue are the controls Learn documents for the data recap needs. Learn's Teams Premium overview answers "No, contact support for assistance." to whether admins can turn intelligent call recap on or off for PSTN and 1:1 calls, and does not name call queue calls; whether that applies here is not yet published.

The Queues app can be turned off org-wide in the Teams admin center, but Learn says this also turns off Insights and Tasks (see https://learn.microsoft.com/microsoftteams/manage-queues-app). Creating a template needs a SharePoint host that has been visited before, and Learn says the Teams administrator who assigns a template must also be a SharePoint site administrator for the template's site. Learn says explicit recording consent must be Off for automatic recording for call queues.

## Open questions

- Which licence does recap on call queue calls need: Teams Premium, Microsoft Copilot, or only what the Queues app already requires? Watch the intelligent recap Learn page and MC1558032 updates.
- Where is a call queue recap stored, who can read it, and how long does it last? Watch the intelligent recap and Queues app Learn pages.
- Is there an admin switch for recap on call queue calls separate from recording and transcription? Watch the Queues app Learn page.
- Do recaps appear for calls recorded before rollout? The notice does not say.

<!-- rationale
risk: Low. Microsoft's notice MC1558032 says recap is only for recorded and transcribed calls and for users who already have access to the recording, and that recording creation, storage and access do not change.
cost: Low. The only cost the sources show is admin time to review licences; Queues app users already need Teams Phone and Teams Premium, and a licence specific to recap on call queue calls is not yet published.
impact: Medium. Calling representatives and supervisors who use the Queues app on Teams mobile are the people who see the new View recap option; other users do not.
-->
