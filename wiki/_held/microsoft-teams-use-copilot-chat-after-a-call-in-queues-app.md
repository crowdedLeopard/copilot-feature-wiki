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
  notes: "Queues app users need a Teams Phone licence and a Teams Premium licence (Manage Queues app page). The release notes tie Copilot in the Recap tab to 'Copilot availability for the user' and name no licence; no price or meter for this feature is published."
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
videos: []
related: ["microsoft-teams-copilot-in-the-queues-app-on-mobile","microsoft-teams-automatic-recording-and-transcription-for-teams-call-queues","microsoft-teams-shared-call-history-in-the-queues-app-on-mobile","microsoft-teams-intelligent-call-recap-for-call-queue-calls-on-mobile"]
controls:
  - governs: "Whether call queue calls are recorded and transcribed, and whether representatives can access the recordings"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Templates and resources > Templates > Automatic Recording"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    api:
      kind: "powershell"
      call: "New-CsAutoRecordingTemplate -RecordingEnabled $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate?view=teams-ps"
    note: "Applies to Automatic Recording for Call Queue. The template is then assigned to a call queue. The agent-access choice cannot be modified once the template is created. Needs SharePoint site admin rights."
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
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 55
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "cf5fdf7fb5467e0948cd43897306241a"
---

## What's changing

Microsoft is adding Copilot Chat to the Recap tab of recorded call queue calls in the Queues app. After a recorded call ends, a user opens the call record from the unified call history in the Queues app, selects the Recap tab, launches the Copilot Chat sidecar and asks Copilot to generate a summary or answer questions about specific details of the call.

The roadmap record gives the status as Launched, with a target of September CY2026, release phases General Availability and Targeted Release, the Worldwide (Standard Multi-Tenant) cloud, and the Desktop and Mac platforms. The Microsoft 365 Copilot release notes describe the same change: 'Copilot is now available in the Recap tab for recorded call queue calls that appear in the Queues app.' They add that 'Access to Copilot is tied to recorded calls and requires Copilot availability for the user.' Microsoft Learn has no page of its own for this feature at the time of writing (November 2026), so what follows about its behaviour is limited to those two sources.

The recordings come from the call queue's recording setup. Automatic Recording for Call Queue is an admin-configured template that records inbound call queue calls once a representative answers and stores the recordings in SharePoint. Shared Call History must also be enabled on the call queue so that authorised users and representatives can open those recordings in the Queues app.

## Why it matters

This puts an AI question-and-answer tool on top of recorded customer conversations that are already stored in SharePoint and opened in the Queues app. Leads and agents can ask about a call instead of listening back, so the practical change for a service owner is that the existing decisions about who records, who can open recordings and who holds Copilot now also decide who can interrogate call content.

Microsoft has not stated what happens on arrival for tenants that do nothing, or whether an administrator can switch the Copilot option off for the Recap tab. Plan on the basis that no source says existing behaviour changes for users without Copilot, and that licensed users with access to recorded calls may see the option. Check this in a pilot before leads rely on it.

## Risk assessment

**Data exposure**

- Customer call content is the data in play. Recordings and transcripts sit in SharePoint, and the automatic recording template decides which recordings representatives can access ('Authorized users have access by default'). Expect the people who can open a recorded call in the Queues app to be the people who can ask Copilot about it, and confirm this in a pilot: Learn does not describe how Copilot is scoped to a call.

**Security & identity**

- Access to Copilot here depends on 'Copilot availability for the user' per the release notes, which name no licence. Licence assignment is therefore the first gate, and which licence counts needs confirming.
- The Teams calling policy has a Copilot setting, but its Learn page covers 1:1 Teams calls and PSTN calls. Microsoft Learn does not say whether it governs Copilot on queue calls in the Queues app, so do not treat it as a control over this feature until it is confirmed.

**Autonomy & actions**

- No change documented: the release notes describe Copilot generating a summary and answering questions about the call, and describe no actions taken on the user's behalf.

**Change & support**

- The Queues app is enabled by default for voice-enabled users with Teams Phone and Teams Premium licences, so users who already have the app will find the option inside a screen they use. Expect questions from agents about which calls show a Recap tab: Copilot is tied to recorded calls.
- The Queues app is not supported on web clients, and the roadmap record lists Desktop and Mac for this feature.

## Cost and licensing

**Licence.** Queues app users must have a Teams Phone licence and a Teams Premium licence ('Users must have a Teams Phone and a Teams Premium license to use Queues app'), per the Manage Queues app page; the voice applications licensing page repeats that all Queues app users require a Teams Premium licence. The release notes say Copilot access 'requires Copilot availability for the user'. Microsoft's Queues app licensing pages list no Copilot licence for this feature, and the release notes name none.

**Meter and price.** No Copilot meter, credit rate or price for this feature appears on the pages that give the Queues app licensing. Treat spend as the cost of the licences above until Microsoft publishes more.

**Recording.** Automatic Recording for Call Queue needs no extra Teams Phone licensing, according to the voice applications licensing page, which points to the SharePoint service description for storage.

**Indirect costs.** Admin time to configure recording templates and Shared Call History, SharePoint storage for recordings and transcripts, and agent and lead training.

## Scope

**Users.** Call queue agents and authorised users (leads and supervisors) who use the Queues app. Queues app users need Teams Phone and Teams Premium licences and must be voice enabled; the release notes add that Copilot must be available to the user.

**Platforms.** The roadmap record lists Desktop and Mac, and the release notes tag the entry for Windows and Mac. The Queues app page says the app is not supported on web clients.

**Clouds.** The roadmap record lists Worldwide (Standard Multi-Tenant) only. The Queues app itself is available in Commercial, GCC, GCC High and DoD environments, according to its management page.

**Rollout.** The record lists General Availability and Targeted Release as release phases and the status as Launched.

**Prerequisites for recorded calls.** A call queue with an automatic recording template, conference mode enabled, representatives assigned through a group or channel, and Shared Call History enabled. Explicit recording consent must be Off for Automatic Recording for Call Queue.

## Governance guidance

### Before rollout

- Identify which Queues app users hold Teams Phone, Teams Premium and Copilot, because the Queues app needs the first two and the release notes tie Copilot here to the user's Copilot availability.
- List the call queues that have an automatic recording template and check who the template lets view recordings (Teams admin center > Voice > Templates and resources > Templates > Automatic Recording).
- Confirm that Shared Call History is enabled on the queues whose recordings leads and agents should open in the Queues app.
- Decide with your compliance owner how recordings and transcripts stored in SharePoint are to be retained.

### At rollout

- Run a pilot with one lead: record a test call, open it from unified call history, select the Recap tab and launch the Copilot Chat sidecar.
- Test whether the Copilot setting in the Teams calling policy changes what the pilot user sees, since Learn does not say whether it applies to queue calls.
- Tell leads and agents that Copilot works on recorded calls and which calls are recorded.

### After rollout

- Review the template's agent-access choice against what leads report, remembering that the choice cannot be changed once the template exists.
- Watch the Microsoft 365 Copilot release notes and the Queues app management page for a Copilot-specific setting or licence statement.
- Ask SharePoint administrators to confirm that the site used for recordings keeps its intended permissions, as changes to site structure or permissions can break access.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether call queue calls are recorded and transcribed, and whether representatives can access the recordings</strong><br><small class="controls__note">Applies to Automatic Recording for Call Queue. The template is then assigned to a call queue. The agent-access choice cannot be modified once the template is created. Needs SharePoint site admin rights.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Templates and resources › Templates › Automatic Recording <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-CsAutoRecordingTemplate -RecordingEnabled $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot is available in Teams calls under a calling policy (documented for 1:1 and PSTN calls)</strong><br><small>User</small><br><small class="controls__note">Adjacent control. The Learn page covers 1:1 Teams calls and PSTN calls; whether it governs Copilot on queue calls in the Queues app is not stated.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Copilot <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity &lt;policy name&gt; -Copilot Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The recording template controls whether calls are recorded and transcribed and whether representatives can open recordings; the Copilot option in the Recap tab depends on recorded calls, so this is the control closest to the feature. According to the known issues, the Teams administrator who assigns the template to a call queue or manages its authorised users must also be a SharePoint site administrator for the site the template uses.

The Teams calling policy Copilot setting is documented for 1:1 Teams calls and PSTN calls. Microsoft Learn does not state whether it applies to Copilot on queue calls in the Queues app, so it is listed as an adjacent control, not a confirmed one.

The Manage Queues app page does not mention Copilot. It documents a blunt option: turning off Microsoft apps org-wide (Teams admin center > Teams apps > Manage apps > Actions > Org-wide app settings > Microsoft apps) also turns off the Queues app and the other Microsoft apps such as Insights and Tasks, so it is not a Copilot-specific control.

## Open questions

- Which licence does 'Copilot availability for the user' mean for Copilot in the Queues app Recap tab, and is any meter or credit charge involved? Watch the Microsoft 365 Copilot release notes and the Queues app licensing pages.
- Does the Copilot setting in the Teams calling policy, documented for 1:1 and PSTN calls, apply to Copilot on queue calls in the Queues app?
- Is there an admin setting that turns off Copilot in the Recap tab alone, and what happens on arrival for licensed users when nobody acts?
- Do calls recorded with Compliance Recording for Call Queue appear in the Queues app with a Recap tab and Copilot, or only calls from Automatic Recording for Call Queue?
- Where are the questions and answers from the Copilot sidecar retained, and can compliance teams search or audit them?

<!-- rationale
risk: Medium. Copilot Chat answers questions about recorded customer calls, so the existing recording-access settings now also decide who can query call content; Microsoft Learn documents no switch specific to this feature.
cost: Medium. The Queues app needs Teams Phone and Teams Premium licences, and the release notes say Copilot access 'requires Copilot availability for the user' without naming a licence; no meter is published for this feature.
impact: Medium. Call queue agents and authorised users (leads and supervisors) who use the Queues app on desktop or Mac will see it; most Teams users will not.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity; Open questions: licence; rationale: cost / absence: Which licence provides Copilot availability for this capability remains unpublished and needs confirming. | Found: A Microsoft Copilot license is required for Copilot support in VoIP calls. ... A Teams Phone license, calling plan, and Microsoft Copilot license are required for Copilot in PSTN calls. | Fix: Replace the assertion that the Copilot licence is unknown with 'Microsoft's general Teams Phone requirements name a Microsoft Copilot licence for Copilot in VoIP and PSTN calls. The release-notes entry does not name a separate licence specific to this Recap option.' Cite https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements. Replace the licence part of the open question with 'Does Microsoft publish any additional entitlement specific to this Recap option?' Keep the narrower absence of a feature-specific meter. | Source: https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements
- [contradicted, blocker] Cost and licensing: Meter and price / cost: Spend should be treated as the cost of the Teams Phone and Teams Premium licences listed above until Microsoft publishes more. | Found: Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites. | Fix: Replace 'Treat spend as the cost of the licences above until Microsoft publishes more' with 'Budget for the Queues app's Teams Phone and Teams Premium requirements and the Microsoft Copilot entitlement named by Microsoft's general Teams Phone requirements; the Copilot service description describes Microsoft 365 Copilot as an add-on plan.' Cite https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements and https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot. Do not invent a price. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
- [contradicted, blocker] controls[0].api / command: New-CsAutoRecordingTemplate -RecordingEnabled $true is the automation equivalent for the row's recording, transcription and representative-access controls. | Found: -TranscriptionEnabled: Is transcription enabled. Type: Boolean. Default value: False. -AgentViewPermission: Are agents allowed to access the recordings or transcriptions. Supported values: None | All. Default value: None. | Fix: Replace controls[0].api.call with 'New-CsAutoRecordingTemplate -RecordingEnabled $true -TranscriptionEnabled $true -AgentViewPermission <None or All>'. This supplies the deciding parameters for all three controls described by the row; the remaining template-creation parameters can stay in the reference. Keep the current docs URL. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate?view=teams-ps
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls / role: Managing automatic recording templates needs SharePoint site administrator rights. | Found: To assign an automatic recording template to a call queue or manage its authorized users list, the Teams administrator must also be a SharePoint site administrator for the site used by the template. | Fix: Replace 'Needs SharePoint site admin rights' with 'Assigning the template or managing the queue's authorised users requires SharePoint site administrator rights for its site; the Teams administrator creating the template becomes that site's administrator.' The cited page documents both cases. | Source: https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic
- [supported, minor] Scope: Prerequisites for recorded calls / behaviour: Automatic Recording for Call Queue requires representative assignment through a group or channel. | Found: Call answering must use a group or channel. Users and Shifts are not supported | Fix: Replace 'representatives assigned through a group or channel' with 'representatives assigned through a group or channel according to the recording-template setup page; the voice applications prerequisites page instead says to use Microsoft 365 security groups'. Both pages are already cited: https://learn.microsoft.com/microsoftteams/aa-cq-reference-prerequisites-licensing says 'Use Microsoft 365 security groups to assign representatives to the queue.' | Source: https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic
- [supported, minor] controls[0].ui / admin-path: Teams admin center > Voice > Templates and resources > Templates > Automatic Recording leads to the recording-template controls. | Found: go to Voice > Templates and resources. ... Select Templates. ... Select Automatic Recording as the template type. ... Select Add to create a new Automatic Recording template. | Fix: The printed path correctly reaches the template list but stops before opening a template. For the documented creation route, change it to 'Voice > Templates and resources > Templates > Automatic Recording > Add' and note that recording, transcription and representative access are configured on the new-template page. Keep the current docs URL. | Source: https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The checklist asks readers to take stock of licence assignments, check Shared Call History and confirm SharePoint site permissions, but none of those controls has a table row. | Found: Identify which Queues app users hold Teams Phone, Teams Premium and Copilot; Confirm that Shared Call History is enabled; confirm that the site used for recordings keeps its intended permissions. The table contains only automatic recording templates and Copilot calling policy. | Fix: Remove the Before rollout bullets beginning 'Identify which Queues app users hold' and 'Confirm that Shared Call History is enabled', and the After rollout bullet beginning 'Ask SharePoint administrators to confirm'. Their facts remain in Cost and licensing, Scope and the other checked sections; these checklist controls have no rows. Do not add new control rows in this correction.
-->
