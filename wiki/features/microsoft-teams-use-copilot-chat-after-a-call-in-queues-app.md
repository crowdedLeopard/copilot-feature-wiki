---
title: "Microsoft Teams: Copilot Chat in the Queues app Recap tab for recorded call queue calls"
slug: "microsoft-teams-use-copilot-chat-after-a-call-in-queues-app"
roadmapId: 568933
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "Users with Copilot can open a recorded call queue call in the Queues app, launch Copilot Chat from the Recap tab and ask for a summary or call details. Learn documents no Copilot-specific admin switch for it."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Queues app users need a Teams Phone licence and a Teams Premium licence (Manage Queues app page). The release notes tie Copilot in the Recap tab to 'Copilot availability for the user' and name no separate licence; Microsoft's general Teams Phone requirements name a Microsoft Copilot licence for Copilot in VoIP and PSTN calls. No feature-specific meter is published."
audiences: ["m365-admin","service-owner","compliance"]
tags: ["teams","queues-app","call-queues","copilot","intelligent-recap","shared-call-history","transcripts","teams-premium","teams-phone"]
sources:
  - title: "Microsoft 365 Roadmap 568933"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568933"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Manage Queues app for Microsoft Teams in your organization"
    url: "https://learn.microsoft.com/microsoftteams/manage-queues-app"
    kind: "learn"
  - title: "Planning - Recording voice applications calls"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-plan-recording"
    kind: "learn"
  - title: "Reference - Voice applications prerequisites and licensing"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-reference-prerequisites-licensing"
    kind: "learn"
  - title: "Setup - Automatic Recording template for Call Queue"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    kind: "learn"
  - title: "Manage Microsoft Copilot in Teams calls"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription"
    kind: "learn"
  - title: "New-CsAutoRecordingTemplate"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate?view=teams-ps"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Microsoft Copilot service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
videos: []
related: ["microsoft-teams-copilot-in-the-queues-app-on-mobile","microsoft-teams-automatic-recording-and-transcription-for-teams-call-queues","microsoft-teams-shared-call-history-in-the-queues-app-on-mobile","microsoft-teams-intelligent-call-recap-for-call-queue-calls-on-mobile"]
controls:
  - governs: "Whether call queue calls are recorded and transcribed, and whether representatives can access the recordings"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Templates and resources > Templates > Automatic Recording > Add > Call recording"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    api:
      kind: "powershell"
      call: "New-CsAutoRecordingTemplate -RecordingEnabled $true -TranscriptionEnabled $true -AgentViewPermission <None or All>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate?view=teams-ps"
    note: "Recording, transcription and agent access are set on the new-template page; agent access can't be changed after creation. Assigning the template or managing authorised users needs SharePoint site admin rights for its site."
  - governs: "Whether Copilot is available in Teams calls under a calling policy (documented for 1:1 and PSTN calls)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Copilot"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity <policy name> -Copilot Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription"
    note: "Adjacent control. The Learn page covers 1:1 Teams calls and PSTN calls; whether it governs Copilot on queue calls in the Queues app is not stated."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-30T23:31:03"
changes:
  - date: "2026-11-23"
    note: "New briefing: Copilot Chat in the Queues app Recap tab for recorded call queue calls, with recording and licensing prerequisites."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected licensing: Microsoft's general Teams Phone requirements name a Microsoft Copilot licence for Copilot in calls; fixed the recording template cmdlet parameters, path and role note; removed checklist steps without control rows."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected: Copilot access requires a recorded call and Copilot availability for the user; removed the open question on retention, search and audit of Copilot interactions."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 64 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected: removed the claim that recording-access settings govern who can query calls with Copilot, fixed the first Before rollout step, and extended the recording template path."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 64 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-23"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 64
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "10c87583b7a55adc680a26f24dbdd981"
---

## What's changing

Microsoft is adding Copilot Chat to the Recap tab of recorded call queue calls in the Queues app. After a recorded call ends, a user opens the call record from the unified call history in the Queues app, selects the Recap tab, launches the Copilot Chat sidecar and asks Copilot to generate a summary or answer questions about specific details of the call.

The roadmap record gives the status as Launched, with a target of September CY2026, release phases General Availability and Targeted Release, the Worldwide (Standard Multi-Tenant) cloud, and the Desktop and Mac platforms. The Microsoft 365 Copilot release notes describe the same change: 'Copilot is now available in the Recap tab for recorded call queue calls that appear in the Queues app.' They add that 'Access to Copilot is tied to recorded calls and requires Copilot availability for the user.' Microsoft Learn has no page of its own for this feature at the time of writing (November 2026), so what follows about its behaviour is limited to those two sources.

The recordings come from the call queue's recording setup. Automatic Recording for Call Queue is an admin-configured template that records inbound call queue calls once a representative answers and stores the recordings in SharePoint. Shared Call History must also be enabled on the call queue so that authorised users and representatives can open those recordings in the Queues app.

## Why it matters

This puts an AI question-and-answer tool on top of recorded customer conversations that are already stored in SharePoint and opened in the Queues app. Review recording access and Copilot entitlement before piloting the feature.

Microsoft has not stated what happens on arrival for tenants that do nothing, or whether an administrator can switch the Copilot option off for the Recap tab. Plan on the basis that no source says existing behaviour changes for users without Copilot, and that licensed users with access to recorded calls may see the option. Check this in a pilot before leads rely on it.

## Risk assessment

**Data exposure**

- Customer call content is the data in play. Recordings and transcripts sit in SharePoint, and the automatic recording template decides which recordings representatives can access ('Authorized users have access by default'). Expect the people who can open a recorded call in the Queues app to be the people who can ask Copilot about it, and confirm this in a pilot: Learn does not describe how Copilot is scoped to a call.

**Security & identity**

- Access to Copilot here depends on 'Copilot availability for the user' per the release notes, which name no separate licence specific to this Recap option. Microsoft's general Teams Phone requirements name a Microsoft Copilot licence for Copilot in VoIP and PSTN calls, so licence assignment is the first gate.
- The Teams calling policy has a Copilot setting, but its Learn page covers 1:1 Teams calls and PSTN calls. Microsoft Learn does not say whether it governs Copilot on queue calls in the Queues app, so do not treat it as a control over this feature until it is confirmed.

**Autonomy & actions**

- No change documented: the release notes describe Copilot generating a summary and answering questions about the call, and describe no actions taken on the user's behalf.

**Change & support**

- The Queues app is enabled by default for voice-enabled users with Teams Phone and Teams Premium licences; Copilot access additionally requires a recorded call and Copilot availability for the user. Expect questions from agents about which calls show a Recap tab: Copilot is tied to recorded calls.
- The Queues app is not supported on web clients, and the roadmap record lists Desktop and Mac for this feature.

## Cost and licensing

**Licence.** Queues app users must have a Teams Phone licence and a Teams Premium licence ('Users must have a Teams Phone and a Teams Premium license to use Queues app'), per the Manage Queues app page; the voice applications licensing page repeats that all Queues app users require a Teams Premium licence. The release notes say Copilot access 'requires Copilot availability for the user' and name no separate licence for this Recap option. Microsoft's general Teams Phone requirements name a Microsoft Copilot licence for Copilot in VoIP and PSTN calls ([Microsoft Copilot requirements](https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements)).

**Meter and price.** No Copilot meter, credit rate or price for this feature appears on the pages that give the Queues app licensing. Budget for the Queues app's Teams Phone and Teams Premium requirements and the Microsoft Copilot entitlement named by Microsoft's general Teams Phone requirements; the [Copilot service description](https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot) describes Microsoft 365 Copilot as an add-on plan. No price for this feature is published.

**Recording.** Automatic Recording for Call Queue needs no extra Teams Phone licensing, according to the voice applications licensing page, which points to the SharePoint service description for storage.

**Indirect costs.** Admin time to configure recording templates and Shared Call History, SharePoint storage for recordings and transcripts, and agent and lead training.

## Scope

**Users.** Call queue agents and authorised users (leads and supervisors) who use the Queues app. Queues app users need Teams Phone and Teams Premium licences and must be voice enabled; the release notes add that Copilot must be available to the user.

**Platforms.** The roadmap record lists Desktop and Mac, and the release notes tag the entry for Windows and Mac. The Queues app page says the app is not supported on web clients.

**Clouds.** The roadmap record lists Worldwide (Standard Multi-Tenant) only. The Queues app itself is available in Commercial, GCC, GCC High and DoD environments, according to its management page.

**Rollout.** The record lists General Availability and Targeted Release as release phases and the status as Launched.

**Prerequisites for recorded calls.** A call queue with an automatic recording template, conference mode enabled, representatives assigned through a group or channel according to the recording-template setup page (the voice applications prerequisites page instead says to use Microsoft 365 security groups), and Shared Call History enabled. Explicit recording consent must be Off for Automatic Recording for Call Queue.

## Governance guidance

### Before rollout

- Review automatic recording templates and their agent-access choices (Teams admin center > Voice > Templates and resources > Templates > Automatic Recording).
- Decide with your compliance owner how recordings and transcripts stored in SharePoint are to be retained.

### At rollout

- Run a pilot with one lead: record a test call, open it from unified call history, select the Recap tab and launch the Copilot Chat sidecar.
- Test whether the Copilot setting in the Teams calling policy changes what the pilot user sees, since Learn does not say whether it applies to queue calls.
- Tell leads and agents that Copilot works on recorded calls and which calls are recorded.

### After rollout

- Review the template's agent-access choice against what leads report, remembering that the choice cannot be changed once the template exists.
- Watch the Microsoft 365 Copilot release notes and the Queues app management page for a Copilot-specific setting or licence statement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether call queue calls are recorded and transcribed, and whether representatives can access the recordings</strong><br><small class="controls__note">Recording, transcription and agent access are set on the new-template page; agent access can't be changed after creation. Assigning the template or managing authorised users needs SharePoint site admin rights for its site.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Templates and resources › Templates › Automatic Recording › Add › Call recording <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-CsAutoRecordingTemplate -RecordingEnabled $true -TranscriptionEnabled $true -AgentViewPermission &lt;None or All&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot is available in Teams calls under a calling policy (documented for 1:1 and PSTN calls)</strong><br><small>User</small><br><small class="controls__note">Adjacent control. The Learn page covers 1:1 Teams calls and PSTN calls; whether it governs Copilot on queue calls in the Queues app is not stated.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Copilot <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity &lt;policy name&gt; -Copilot Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The recording template controls whether calls are recorded and transcribed and whether representatives can open recordings; the Copilot option in the Recap tab depends on recorded calls, so this is the control closest to the feature. According to the known issues, the Teams administrator who assigns the template to a call queue or manages its authorised users must also be a SharePoint site administrator for the site the template uses; the Teams administrator who creates the template becomes that site's administrator.

The Teams calling policy Copilot setting is documented for 1:1 Teams calls and PSTN calls. Microsoft Learn does not state whether it applies to Copilot on queue calls in the Queues app, so it is listed as an adjacent control, not a confirmed one.

The Manage Queues app page does not mention Copilot. It documents a blunt option: turning off Microsoft apps org-wide (Teams admin center > Teams apps > Manage apps > Actions > Org-wide app settings > Microsoft apps) also turns off the Queues app and the other Microsoft apps such as Insights and Tasks, so it is not a Copilot-specific control.

## Open questions

- Does Microsoft publish any additional entitlement specific to this Recap option, beyond the Microsoft Copilot licence that its general Teams Phone requirements name for Copilot in VoIP and PSTN calls, and is any meter or credit charge involved? Watch the Microsoft 365 Copilot release notes and the Queues app licensing pages.
- Does the Copilot setting in the Teams calling policy, documented for 1:1 and PSTN calls, apply to Copilot on queue calls in the Queues app?
- Is there an admin setting that turns off Copilot in the Recap tab alone, and what happens on arrival for licensed users when nobody acts?
- Do calls recorded with Compliance Recording for Call Queue appear in the Queues app with a Recap tab and Copilot, or only calls from Automatic Recording for Call Queue?

<!-- rationale
risk: Medium. Copilot Chat answers questions about recorded customer calls; access requires a recorded call and Copilot availability for the user, while Learn documents no switch specific to this feature.
cost: Medium. The Queues app needs Teams Phone and Teams Premium licences, and Microsoft's general Teams Phone requirements name a Microsoft Copilot licence for Copilot in VoIP and PSTN calls; no feature-specific meter is published.
impact: Medium. This targets call queue agents and authorised users who have Copilot available and access to recorded calls in the Queues app on desktop or Mac.
-->
