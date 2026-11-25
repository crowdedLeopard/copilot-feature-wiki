---
title: "Microsoft Teams: Copilot in the Queues app on mobile"
slug: "microsoft-teams-copilot-in-the-queues-app-on-mobile"
roadmapId: 578859
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Copilot will answer questions about recorded call queue calls in the Queues app on Teams for Android and iOS. Needs Teams Premium and Microsoft 365 Copilot licences; Microsoft says no admin action is required."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "low"
defaultState: "on"
action: "act-now"
licensing:
  model: "add-on"
  notes: "Microsoft's notice MC1552391 says users need a Teams Premium licence to use the Queues app and a Microsoft 365 Copilot licence to use Copilot. The Queues app also requires Teams Phone. No separate price or meter is stated for this feature."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","m365-copilot","mobile","licensing","transcripts","auditing","retention"]
sources:
  - title: "Microsoft 365 Roadmap 578859"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578859"
    kind: "roadmap"
  - title: "MC1552391: Microsoft Teams: Copilot in the Queues app on Mobile"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1552391"
    kind: "message-center"
  - title: "Manage Queues app for Microsoft Teams in your organization"
    url: "https://learn.microsoft.com/microsoftteams/manage-queues-app"
    kind: "learn"
  - title: "Manage Microsoft Copilot in Teams calls"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription"
    kind: "learn"
  - title: "Setup - Automatic Recording template for Call Queue"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    kind: "learn"
  - title: "Set-CsCallQueue"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue"
    kind: "learn"
  - title: "Microsoft Teams add-on licenses"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/microsoft-teams-add-on-licensing"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "user: assignLicense"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense"
    kind: "learn"
  - title: "Audit logs for Copilot and AI applications"
    url: "https://learn.microsoft.com/purview/audit-copilot"
    kind: "learn"
  - title: "Learn about retention for Copilot & AI apps"
    url: "https://learn.microsoft.com/purview/retention-policies-copilot"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
videos: []
related: ["microsoft-teams-automatic-recording-indicator-for-call-queue-calls-on-mobile","teams-intelligent-recap-without-saving-transcript"]
controls:
  - governs: "Which users hold the Teams Premium, Teams Phone and Microsoft 365 Copilot licences the feature needs"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "graph"
      call: "POST /v1.0/users/{id | userPrincipalName}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense"
    note: "General licence assignment. Delegated Graph requests need a Microsoft Entra role such as License Administrator or User Administrator, or microsoft.directory/users/assignLicense. Application: LicenseAssignment.ReadWrite.All."
  - governs: "Which call queues record calls, and who can access the recordings"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Call queue > call queue > Templates > Automatic recording template"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic"
    api:
      kind: "powershell"
      call: "Set-CsCallQueue -Identity <Guid> -AutoRecordingTemplateId <String>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue"
    note: "Existing control, not specific to Copilot. Template created under Voice > Templates and resources. The cmdlet page limits the parameter to Voice applications private preview customers; see notes below."
  - governs: "Whether Copilot can be used in Teams calls (documented for one-to-one and group calls)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Calling policies > policy > Copilot"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription"
    api:
      kind: "powershell"
      call: "Set-CsTeamsCallingPolicy -Identity <policy name> -Copilot Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription"
    note: "General control: its page covers 1:1 and PSTN calls; Microsoft has not confirmed it applies to Copilot in the Queues app."
  - governs: "Whether the Queues app is available in the Teams client"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > Microsoft apps"
      docs: "https://learn.microsoft.com/microsoftteams/manage-queues-app"
    api: null
    note: "Set to Off, this also turns off Insights and Tasks. It removes the whole Queues app, not Copilot alone."
  - governs: "A separate switch for Copilot in the Queues app on mobile"
    scope: "tenant"
    ui: null
    api: null
    note: "No such control is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-17"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-16"
    note: "First briefing for roadmap item 578859, using Message Center post MC1552391 and the Queues app, call queue recording and Copilot in Teams calls pages on Microsoft Learn."
  - date: "2026-11-16"
    note: "Corrected the recording PowerShell row (private-preview limit), replaced the audit and retention gaps with Microsoft's general Copilot documentation, added a licence assignment row and moved action to act-now."
  - date: "2026-11-17"
    note: "Corrected the Graph licence-assignment role note (delegated role or custom role; application permission) and reworded the first licensing checklist bullet to separate Microsoft's recommendation to review from the advice to assign."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected four statements: licence wording now refers to entitlements rather than separate add-on purchases, the audit and retention uncertainty is replaced by Microsoft's general Copilot rules, and the recording-access sentence now depends on the Copilot licence."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 74 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 78 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 75 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-25"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 73
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "a81398dd9b88d0cd8e750d77004a7e00"
---

## What's changing

Microsoft plans to bring Copilot to the Queues app on Teams for Android and iOS. From shared call history, calling reps and supervisor leads can open Copilot on a recorded call, ask questions about it and get information and insights from the conversation without reviewing the whole call.

Microsoft's notice MC1552391 (published 2026-11-13) says Copilot is available for recorded call queue calls, as it is on desktop, and that the feature does not change how call recordings are created, stored or accessed. Microsoft Learn's Microsoft 365 Copilot release notes for October 27, 2026 describe the same flow in the Queues app: open a recorded call from unified call history, select the **Recap** tab and launch the Copilot Chat sidecar. Microsoft Learn has no page for the mobile feature itself at the time of writing (November 2026).

The roadmap record shows status In development, a target of December CY2026, release phase General Availability, Worldwide (Standard Multi-Tenant) only, on Android and iOS. The notice gives the rollout window: Targeted Release begins late November 2026 and completes by early December 2026; General Availability begins early December 2026 and completes by mid December 2026. The notice sets no act-by date and says no admin action is required before rollout.

## Why it matters

This puts an AI assistant in front of customer call content on phones, for the people who handle and supervise those calls. The notice describes the feature as arriving for eligible users without an admin switch, so licensed users start seeing Copilot on recorded calls as the rollout reaches them, and unlicensed users will not. Expect licence requests and support questions.

The work is licensing and recording coverage, and it falls in the weeks before the Targeted Release window opens in late November 2026. Copilot only has a call to work with where the call queue records calls, so the recording setup decides who benefits, and the licence assignments decide who can use it.

## Risk assessment

**Data exposure**

- Copilot answers questions from recorded call queue calls opened from shared call history. Users with the required Copilot licence who can already open a recording there can query it on mobile as rollout reaches them, so check who the automatic recording template lets representatives access (a control row below). That choice cannot be changed once the template is created.
- Microsoft's notice says the feature does not change how recordings are created, stored or accessed. Where the recordings and any transcripts sit is set by the template's SharePoint site.
- Microsoft's general Copilot documentation says prompts and responses can be audited and retained: with auditing enabled, Copilot interactions are logged and searchable under **Audit** in the Microsoft Purview portal, and retention policies cover Microsoft 365 Copilot prompts and responses, stored in a hidden mailbox folder that eDiscovery tools can search. The general Copilot audit rules cover these interactions when auditing is enabled. Microsoft 365 Copilot retention policies cover its prompts and responses, including this experience.

**Security & identity**

- Eligibility is set by licence: the notice names calling reps and supervisor leads, with Teams Premium and Microsoft 365 Copilot assigned. Microsoft Learn does not describe a separate permission for Copilot in the Queues app.

**Autonomy & actions**

- The roadmap and notice describe Copilot answering questions and surfacing insights for a person to act on. Neither describes Copilot taking actions on its own.

**Change & support**

- A new Copilot entry appears on mobile for licensed users, and only for calls that were recorded. Expect questions from agents whose queue does not record, or who lack a licence.
- No tenant switch for Copilot in the Queues app is documented. Turning off the Queues app removes it entirely, along with Insights and Tasks.

## Cost and licensing

Microsoft's notice MC1552391 says users need a Teams Premium licence to use the Queues app and a Microsoft 365 Copilot licence to use Copilot. The Queues app page on Microsoft Learn adds that users must also have a Teams Phone licence (see [Manage Queues app for Microsoft Teams in your organization](https://learn.microsoft.com/microsoftteams/manage-queues-app)). Microsoft's Teams add-on licence page describes Teams Premium as an add-on license to Teams.

No price, meter or Copilot Credits charge is stated for this feature in the roadmap record, the notice or the Learn pages at the time of writing (November 2026). Budget for any missing Teams Premium and Microsoft 365 Copilot entitlements per user plus admin time to assign them and to confirm recording is on. Once a user is licensed for Teams Premium, the Queues app page says it can take up to 48 hours for the Queues app to appear in the Teams client.

## Scope

**Users:** calling reps and supervisor leads in call queues, per Microsoft's notice, who hold Teams Premium and Microsoft 365 Copilot licences. The Queues app is enabled by default for Teams users with both a Teams Premium and a Teams Phone licence who are voice enabled.

**Platforms and cloud:** Android and iOS; Worldwide (Standard Multi-Tenant) as the roadmap record lists it. The Queues app page lists iOS and Android mobile clients among the supported clients.

**Prerequisites:** the call must be recorded, and the notice recommends automatic recording on the call queues where users should use Copilot. The automatic recording setup page lists Shared Call History enabled on the call queue as a prerequisite and says explicit recording consent must be Off. Copilot in the Queues app is already available on desktop, per the notice.

## Governance guidance

### Before rollout

- Review Microsoft 365 Copilot and Teams Premium licence assignments for intended users, as Microsoft's notice recommends. Assign missing licences where appropriate and confirm users also hold Teams Phone (licence assignment row).
- Confirm that automatic recording is turned on for the call queues where users should use Copilot, as the notice recommends (Teams admin center > Voice > Call queue; automatic recording row).
- Review who the automatic recording template lets representatives access, because that choice cannot be modified once the template is created.
- Tell queue teams that Copilot works only on recorded calls.

### At rollout

- Test with a licensed agent and a lead on Android and iOS: open a recorded call in shared call history and ask Copilot a question.
- Watch Message center for updates to MC1552391, since Targeted Release comes before General Availability.

### After rollout

- Handle licence requests from users who see the Queues app but not Copilot.
- Re-check Microsoft Learn for a setting specific to Copilot in the Queues app, as none is documented at the time of writing (November 2026).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Teams Premium, Teams Phone and Microsoft 365 Copilot licences the feature needs</strong><br><small>User</small><br><small class="controls__note">General licence assignment. Delegated Graph requests need a Microsoft Entra role such as License Administrator or User Administrator, or microsoft.directory/users/assignLicense. Application: LicenseAssignment.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id | userPrincipalName}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which call queues record calls, and who can access the recordings</strong><br><small class="controls__note">Existing control, not specific to Copilot. Template created under Voice &gt; Templates and resources. The cmdlet page limits the parameter to Voice applications private preview customers; see notes below.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Call queue › call queue › Templates › Automatic recording template <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsCallQueue -Identity &lt;Guid&gt; -AutoRecordingTemplateId &lt;String&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot can be used in Teams calls (documented for one-to-one and group calls)</strong><br><small>User</small><br><small class="controls__note">General control: its page covers 1:1 and PSTN calls; Microsoft has not confirmed it applies to Copilot in the Queues app.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Calling policies › policy › Copilot <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsCallingPolicy -Identity &lt;policy name&gt; -Copilot Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Queues app is available in the Teams client</strong><br><small>Tenant</small><br><small class="controls__note">Set to Off, this also turns off Insights and Tasks. It removes the whole Queues app, not Copilot alone.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › Microsoft apps <a href="https://learn.microsoft.com/microsoftteams/manage-queues-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A separate switch for Copilot in the Queues app on mobile</strong><br><small>Tenant</small><br><small class="controls__note">No such control is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The recording template decides which calls exist for Copilot to use; it does not switch Copilot on or off. Its PowerShell parameter is restricted: the Set-CsCallQueue reference says -AutoRecordingTemplateId is for Voice applications private preview customers only and that saving a call queue through Teams admin center removes the setting, while the call queue setup page says automatic recording can be configured via PowerShell (August 13, 2026). Treat the Teams admin center path as the documented route until Microsoft reconciles the two.

The Teams calling policy **Copilot** setting is documented for one-to-one and group calls. Microsoft has not confirmed that it governs Copilot on call queue calls in the Queues app, so do not rely on it as a switch for this feature. Turning off the Queues app at org level is blunt and also turns off Insights and Tasks. Licence assignment is the one documented way to decide who gets Copilot there.

## Open questions

- Does the Teams calling policy **Copilot** setting, or any other policy, turn off Copilot on call queue calls in the Queues app? Watch the Learn page on managing Copilot in Teams calls and MC1552391.
- Is a Copilot Credits meter or any other charge involved beyond the two licences? Watch the Microsoft 365 Copilot and Teams Premium licensing pages.
- Will the mobile feature match desktop for queue types and call types? Watch Message center and the Teams Phone Copilot pages.

<!-- rationale
risk: Low. Copilot works on call recordings that users can already open in shared call history, and Microsoft's notice says recording creation, storage and access do not change.
cost: Medium. Users need a Teams Premium licence for the Queues app and a Microsoft 365 Copilot licence for Copilot, so each agent or supervisor who wants the feature needs both entitlements.
impact: Low. Only calling reps and supervisor leads in call queues, with the right licences and recorded calls, will see it; most Teams users are unaffected.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance controls; Governance guidance: Before rollout / admin-path: Administrators can assign the recording template through Voice > Call queue > call queue > Templates > Automatic recording template, with no SharePoint administrator qualification stated. | Found: To assign an automatic recording template to a call queue or manage its authorized users list, the Teams administrator must also be a SharePoint site administrator for the site used by the template. | Fix: Keep the path. Add to controls[1].note and its rendered counterpart: 'To assign an automatic recording template to a call queue or manage its authorized users list, the Teams administrator must also be a SharePoint site administrator for the site used by the template.' Add that qualification to the Before rollout automatic-recording instruction. Source: https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic. | Source: https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic
- [unsupported, blocker] Governance controls: final paragraph / applicability: Licence assignment is the one documented way to decide who gets Copilot in the Queues app. | Found: Searched: Teams Queues Copilot permissions recorded call history license; Copilot Queues app disable. Read manage-queues-app, copilot-teams-calling-transcription, voice applications policies and MC1552391; none states licence assignment is the sole control. | Fix: Replace 'Licence assignment is the one documented way to decide who gets Copilot there' with 'Users need a Microsoft 365 Copilot licence to use Copilot there, according to MC1552391.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / record: Targeted Release completes by early December 2026. | Found: expect to complete by early December 2026. | Fix: Replace 'completes by early December 2026' with 'is expected to complete by early December 2026'.
- [supported, minor] What's changing / record: General Availability completes by mid December 2026. | Found: expect to complete by mid December 2026. | Fix: Replace 'completes by mid December 2026' with 'is expected to complete by mid December 2026'.
- [supported, minor] controls[0].api; Governance controls / command: POST /v1.0/users/{id | userPrincipalName}/assignLicense assigns or removes user licences. | Found: POST /users/{id | userPrincipalName}/assignLicense addLicenses: objects that specify the licenses to add. removeLicenses: A collection of skuIds that identify the licenses to remove. Required. Can be an empty collection. | Fix: Keep the call and add to controls[0].note and its rendered counterpart: 'The request body uses addLicenses to add licences and removeLicenses to remove licence skuIds; removeLicenses is required and can be empty.' | Source: https://learn.microsoft.com/graph/api/user-assignlicense
- [supported, minor] controls[1].note; Governance controls / admin-path: The automatic recording template is created under Voice > Templates and resources. | Found: go to Voice > Templates and resources. Select Templates. Select Automatic Recording as the template type. Select Add to create a new Automatic Recording template. | Fix: Replace 'Template created under Voice > Templates and resources' with 'Template created under Voice > Templates and resources > Templates > Automatic Recording > Add' in the note and rendered table. | Source: https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-recording-automatic
-->
