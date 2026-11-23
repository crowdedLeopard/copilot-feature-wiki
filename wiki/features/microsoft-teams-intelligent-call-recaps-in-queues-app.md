---
title: "Microsoft Teams: intelligent call recaps for call queue calls in the Queues app"
slug: "microsoft-teams-intelligent-call-recaps-in-queues-app"
roadmapId: 569017
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "The Queues app on desktop and Mac adds a Recap tab with AI-generated notes, key points and follow-up actions for recorded call queue calls. It is rolling out; Microsoft has not stated whether admins must act."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Desktop","Mac"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Queues app users need Teams Phone and Teams Premium (Learn). The intelligent recap admin page asks for Teams Premium or a Microsoft Copilot licence for the call types it lists; which licence covers recap on queue calls is not yet published."
audiences: ["m365-admin","service-owner","compliance"]
tags: ["teams","queues-app","call-queues","intelligent-recap","teams-phone","teams-premium","copilot","transcripts","gcc","gcc-high"]
sources:
  - title: "Manage Queues app for Microsoft Teams in your organization"
    url: "https://learn.microsoft.com/microsoftteams/manage-queues-app"
    kind: "learn"
  - title: "Intelligent recap for Teams calls, meetings, and events"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Setup - Automatic Recording template for Call Queue"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    kind: "learn"
  - title: "Reference - Voice applications prerequisites and licensing"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-reference-prerequisites-licensing"
    kind: "learn"
  - title: "Manage Microsoft Copilot in Teams calls"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription"
    kind: "learn"
  - title: "Microsoft Teams Premium licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 569017"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569017"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap item 578871"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578871"
    kind: "roadmap"
  - title: "Whether call queue calls are recorded and transcribed (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate"
    kind: "learn"
  - title: "Which users hold the Teams Phone and Teams Premium licences the Queues app requires (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Teams Phone and Teams Premium licences the Queues app requires (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["microsoft-teams-intelligent-call-recap-for-call-queue-calls-on-mobile","microsoft-teams-automatic-recording-and-transcription-for-teams-call-queues","microsoft-teams-shared-call-history-in-the-queues-app-on-mobile","microsoft-teams-copilot-in-the-queues-app-on-mobile","teams-intelligent-recap-without-saving-transcript"]
controls:
  - governs: "Whether call queue calls are recorded and transcribed"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Templates and resources > Templates > Automatic Recording > Add > Call recording"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    api:
      kind: "powershell"
      call: "New-CsAutoRecordingTemplate -RecordingEnabled $true -TranscriptionEnabled $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate"
    note: "Template is assigned to a call queue on its Templates tab. Transcription is the next toggle in the same template. Learn does not say the template governs the Recap tab itself."
  - governs: "Which users hold the Teams Phone and Teams Premium licences the Queues app requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Role required: at least License Administrator or User Administrator. Existing licence control for the Queues app; which licence covers Recap on queue calls is not published."
  - governs: "Whether the Queues app is available in the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > Microsoft apps"
      docs: "https://learn.microsoft.com/microsoftteams/manage-queues-app"
    api: null
    note: "Turning off the Queues app this way also turns off other Microsoft apps like Insights and Tasks. Existing control for the whole app, not for the Recap tab."
  - governs: "A separate switch for the Recap tab on call queue calls"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such switch at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-01T23:00:02"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: covers the Queues app Recap tab for recorded call queue calls, the licences the Queues app needs, and the recording template that controls recording."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 58 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected the SharePoint site administrator requirement for recording templates, the impact rationale and the transcription wording; removed two checklist items with no controls row."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 63 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 63
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a84b2bc7bac65fb248284c651bc640c8"
---

## What's changing

The roadmap item says the Queues app now supports intelligent call recaps for recorded call queue calls. A recap includes AI-generated summary notes, key discussion points and follow-up actions. According to the roadmap, users open the call record in the Queues app and select the Recap tab.

A Microsoft 365 Copilot release notes entry dated October 27, 2026 describes a related route: open the Queues app, select a recorded call from unified call history, select the Recap tab, launch the Copilot Chat sidecar and ask Copilot to summarise the call or answer questions about it. The roadmap item and the release notes do not say whether they describe the same capability.

Microsoft Learn's admin page for intelligent recap lists PSTN (telephone network), 1:1 and group peer-to-peer calls as the supported call types and does not yet describe recap for call queue calls. What follows about behaviour beyond the roadmap description is therefore not documented.

The roadmap record gives the status as Rolling out, the target as September CY2026, the release phases as General Availability and Targeted Release, the platforms as Desktop and Mac, and the clouds as Worldwide (Standard Multi-Tenant), GCC and GCC High. Dates are Microsoft's targets.

## Why it matters

Recorded call queue calls already hold customer detail. A recap adds a second, condensed version of each call as summary notes and follow-up actions, so the question for a service owner is who may read that version and whether it should be treated like the recording and transcript.

Microsoft has not stated whether the Recap tab appears without an administrator step, and no source says existing recording or access settings change. Review the recording and access settings on your call queues now, so that the answer to "who can open a recorded call" is one you chose.

## Risk assessment

**Data exposure**
- The recap condenses recorded customer calls into notes, key points and follow-up actions (roadmap). Recordings and transcripts from an automatic recording template are stored in SharePoint, and the template sets which recordings call queue agents can access, with authorised users having access by default (Learn). Whether recaps follow that same access setting is not documented; confirm it on a pilot queue.

**Security & identity**
- The Queues app is enabled by default for voice-enabled users who hold both Teams Premium and Teams Phone licences (Learn), so licence assignment decides who can reach the app that hosts the Recap tab. Which roles see recaps is not documented.

**Autonomy & actions**
- The roadmap describes the recap as notes, discussion points and follow-up actions to read. It describes no action the feature carries out itself.

**Change & support**
- Recap text is AI-generated, so tell agents and supervisors to check a recap against the recording before acting on its follow-up actions.
- The roadmap says recaps are for recorded call queue calls. Learn lists Shared Call History enabled and explicit recording consent set to Off as conditions for automatic recording on a queue, so check queues against them before telling users to expect recaps.

## Cost and licensing

**Licence.** Learn states that users must have a Teams Phone and a Teams Premium licence to use the Queues app (Manage Queues app for Microsoft Teams in your organization). The voice applications licensing page states that all Queues app users require a Teams Premium licence.

The intelligent recap admin page asks for a Teams Premium licence or a Microsoft Copilot licence for the call types it lists, and a Teams Phone licence plus a calling plan for PSTN calls. That page does not list call queue calls, so which of those licences covers recap on queue calls is not yet published. The roadmap lists Microsoft Teams and Microsoft Copilot (Microsoft 365) as the products.

**Meter and price.** No price or meter specific to the Recap tab is published at the time of writing (November 2026).

**Indirect cost.** Automatic recording for call queues states that no extra Teams Phone licensing is required and points to the SharePoint service description, because recordings and transcripts are stored in SharePoint. Admin time goes on reviewing queue templates and on briefing supervisors.

## Scope

**Users.** Teams users who hold Teams Phone and Teams Premium licences, are voice enabled and are in at least one call queue (Learn). The roadmap does not say which users see the Recap tab beyond that.

**Clouds and platforms.** The roadmap lists Worldwide (Standard Multi-Tenant), GCC and GCC High, and the platforms Desktop and Mac. Learn says the Queues app is supported on Teams desktop, Mac, Virtualized Desktop Infrastructure, Teams phones (touch devices only), iOS and Android, and not on web clients, and that it is available in Commercial, GCC, GCC High and DoD environments. Recap for call queue calls on mobile is a separate roadmap item: see /features/microsoft-teams-intelligent-call-recap-for-call-queue-calls-on-mobile/.

**Prerequisites for recorded queue calls.** Learn's automatic recording template for call queues requires conference mode on the call queue, Shared Call History enabled and explicit recording consent set to Off. Recording needs a template assigned to the queue; see /features/microsoft-teams-automatic-recording-and-transcription-for-teams-call-queues/.

**Rollout.** Status Rolling out with a target of September CY2026, through General Availability and Targeted Release (roadmap).

## Governance guidance

### Before rollout
- Check which queue agents and supervisors hold Teams Phone and Teams Premium licences in the Microsoft 365 admin center, because those licences gate the Queues app.
- Review the Automatic Recording template assigned to each call queue: whether call recording and transcription are on.
- Ask Microsoft through Message center or your account team whether Recap on queue calls is on by default, and which licence covers it.

### At rollout
- Run a pilot on one recorded call queue: place a call, then open its call record in the Queues app on desktop or Mac and select the Recap tab.
- Compare the recap with the recording and with who can open the call record, and note any user who sees a recap that they cannot open the recording for.
- Tell agents and supervisors that the recap is AI-generated and that follow-up actions need checking against the recording.

### After rollout
- Re-read the Learn pages for the Queues app and for intelligent recap for a section on call queue calls, and update your queue standards when one appears.
- Review who holds the Teams Premium licence on a regular cycle, since it decides who reaches the Queues app.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether call queue calls are recorded and transcribed</strong><br><small class="controls__note">Template is assigned to a call queue on its Templates tab. Transcription is the next toggle in the same template. Learn does not say the template governs the Recap tab itself.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Templates and resources › Templates › Automatic Recording › Add › Call recording <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-CsAutoRecordingTemplate -RecordingEnabled $true -TranscriptionEnabled $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/new-csautorecordingtemplate" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Teams Phone and Teams Premium licences the Queues app requires</strong><br><small>User</small><br><small class="controls__note">Role required: at least License Administrator or User Administrator. Existing licence control for the Queues app; which licence covers Recap on queue calls is not published.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Queues app is available in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Turning off the Queues app this way also turns off other Microsoft apps like Insights and Tasks. Existing control for the whole app, not for the Recap tab.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › Microsoft apps <a href="https://learn.microsoft.com/microsoftteams/manage-queues-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A separate switch for the Recap tab on call queue calls</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such switch at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The table separates what Microsoft documents from what it does not. The automatic recording template controls whether queue calls are recorded and transcribed. The roadmap says recaps are for recorded call queue calls; it does not specify transcription as a prerequisite. Learn does not say the template governs the Recap tab itself. The Teams administrator who creates the automatic recording template becomes the SharePoint site administrator of its associated site. Assigning the template to a call queue or managing its authorized users requires the Teams administrator to also be a SharePoint site administrator for that site (Learn).

The licence row needs at least the License Administrator or User Administrator role (Learn). The org-wide Microsoft apps switch is a blunt tool: Learn says turning off the Queues app this way also turns off Insights and Tasks.

Learn documents Teams calling policies as controlling Copilot in one-to-one and group calls. The pages read do not say those settings govern call queue calls, so they are not listed as controls here.

## Open questions

- Is the Recap tab on call queue calls on by default, and does a tenant step have to be taken first? Watch Message center and the roadmap item.
- Which licence covers recap for queue calls: Teams Premium, a Microsoft Copilot licence or either? Watch the Queues app and intelligent recap pages on Microsoft Learn.
- Does recap follow the automatic recording template's setting for which recordings agents can access, and does it need transcription turned on in the template?
- Is the Copilot Chat sidecar in the October 27, 2026 release notes the same capability as this roadmap item, and does it need a Microsoft Copilot licence?

<!-- rationale
risk: Medium. The Recap tab adds AI-generated summaries and follow-up actions on recorded customer calls; who can see a recap is not documented, and no separate Recap switch is documented.
cost: Medium. Queues app users need Teams Phone and a Teams Premium licence per Learn; no price or meter specific to the Recap tab is published.
impact: Medium. The change concerns recorded call queue calls viewed in the Queues app; Microsoft has not documented which roles can see a recap.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Clouds and platforms / availability: The Queues app management page lists desktop, Mac, VDI, touch Teams phones, iOS and Android support, but not web support. | Found: The Queues app is currently supported on Teams desktop, Mac, and Virtualized Desktop Infrastructure (VDI) clients, Teams phones (touch devices only), and iOS and Android mobile clients. It's not supported on web clients. | Fix: After the Queues app platform sentence, add: 'Microsoft's Teams Premium overview platform table still lists Mobile as No for the Queues app, conflicting with the management page.' Cite https://learn.microsoft.com/microsoftteams/enhanced-teams-experience#platform-support-for-queues-app, whose Queues app row says 'Mobile | No'. | Source: https://learn.microsoft.com/microsoftteams/manage-queues-app
-->
