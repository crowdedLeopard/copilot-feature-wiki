---
title: "OneNote: multimodal capture in Copilot Notebooks on Windows"
slug: "onenote-multimodal-capture-in-copilot-notebooks-windows"
roadmapId: 566322
topic: "m365-copilot"
products: ["OneNote","Microsoft Copilot (Microsoft 365)"]
summary: "OneNote on Windows is due to add capture of audio, images and notes into Copilot Notebooks. Microsoft's notice says it is on by default for eligible users and can be disabled with a policy setting it does not name."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "per-user"
  notes: "Microsoft's notice MC1405506 says the feature requires a Microsoft 365 Copilot license. Learn's requirements page says Copilot Notebooks need the Microsoft Copilot or Copilot Chat license. No price or meter specific to capture is published."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["onenote","copilot-notebooks","m365-copilot","cloud-policy","transcripts","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 566322"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566322"
    kind: "roadmap"
  - title: "MC1405506: (Updated) Microsoft OneNote: Multimodal recording in Copilot Notebooks on Windows"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1405506"
    kind: "message-center"
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration?view=o365-worldwide"
    kind: "learn"
  - title: "Requirements for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements?view=o365-worldwide"
    kind: "learn"
  - title: "Overview of Copilot Pages and Copilot Notebooks storage"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-storage?view=o365-worldwide"
    kind: "learn"
  - title: "Summary of governance, lifecycle, and compliance capabilities for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary?view=o365-worldwide"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Supported resources for remediation and applyOnce (preview)"
    url: "https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether users can create and view Copilot Pages and Copilot Notebooks"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration?view=o365-worldwide"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Learn does not say this setting governs capture. API is preview: applyOnce, resource microsoft.copilot.copilotpagesnotebooks, value 0 disables; tenant-level policies only. Fails if the setting is in any group-level policy."
  - governs: "Policy setting named in MC1405506 to disable multimodal capture"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1405506 says admins can disable the feature using a policy setting but does not name it."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-18"
    note: "New briefing: Windows multimodal capture for Copilot Notebooks, with the rollout moved to end of November 2026 and the unnamed disable policy recorded as an open question."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after the check: added the group-level policy prerequisite for the preview Graph applyOnce route, and reworded the Information Barriers and storage statements to match the Learn compliance and storage pages."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 66 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 66
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f7adf88b9a30080efd9172daded93ae4"
---

## What's changing

Microsoft plans to add multimodal capture to Copilot Notebooks in OneNote on Windows. The roadmap item describes it as capturing audio, images and notes in one experience, then letting Copilot turn them into structured notes with key insights, decisions and action items in a Copilot Notebook the user chooses. The roadmap lists it as In development, for the Desktop platform in the Worldwide (Standard Multi-Tenant) cloud, with a General Availability target of November CY2026.

Microsoft's notice MC1405506 (updated 6 November 2026) gives more detail. Users can capture audio, images and notes directly into Copilot Notebooks. Capture can be suggested or started when a supported browser-based meeting (Zoom, Webex or Google Meet) is detected, and users can also start it manually from the OneNote system tray icon. Copilot then generates a structured Copilot Page with insights, decisions and action items, saved to the selected Copilot Notebook and available across endpoints. The notice says the feature is available by default for eligible users and that no action is required.

The notice moved the rollout to begin at the end of November 2026 (previously the end of October) and to complete at the end of November 2026, with Microsoft's end date shown as 31 December 2026. It sets no act-by date. Learn's release notes already describe multimodal capture as generally available on OneNote for iPhone and iPad, and as available on Android from 27 October 2026; this item covers Windows.

## Why it matters

This is a feature that records and transcribes conversations, and Microsoft's notice says it is on by default for eligible users. Plan for people to start capturing meetings, including meetings run on third-party platforms in a browser, as soon as it reaches their OneNote. The notice itself asks organisations to ensure users follow applicable consent and recording policies before capturing or transcribing conversations, so the main task is communication, not configuration.

The control picture is incomplete. The notice says admins can disable the feature using a policy setting but does not name it, and Learn's Copilot Notebooks policy page documents one Cloud Policy setting for Copilot Pages and Copilot Notebooks. Decide before the end of November 2026 whether that setting is acceptable as your switch and what you tell users.

## Risk assessment

**Data exposure**

- Captured audio, images and notes are new customer data. Microsoft's notice says they are stored in the user's selected Copilot Notebook (SharePoint or OneDrive) and that the content is transcribed and processed by Microsoft 365 Copilot. Control: the Cloud Policy setting in the controls table, whose effect on capture is not confirmed.
- Capture can be suggested or started when Zoom, Webex or Google Meet browser meetings are detected. Recordings of other organisations' meetings can therefore land in your tenant, which is a consent and retention question for compliance owners.

**Security & identity**

- The notice lists Microsoft Entra ID work or school accounts as eligible and says the Microsoft 365 desktop apps must be installed on Windows. It describes no new identity or permission model.
- Learn's compliance summary says Information Barriers are not supported for SharePoint Embedded content and describes Copilot Notebooks as using that storage. However, the storage page says notebooks created before November 2025 remain in SharePoint Embedded while current notebooks use OneDrive for Business. Confirm the storage and applicable compliance boundary for captured content before relying on Information Barriers.

**Autonomy & actions**

- The notice describes Copilot generating a structured Copilot Page of insights, decisions and action items from the captured content, saved to the selected notebook. It describes no actions taken in other systems.

**Change & support**

- The rollout date has already moved once, from the end of October to the end of November 2026. Brief the help desk on how users start capture and where captured content is saved.
- Until Microsoft identifies the policy setting, expect questions about how to turn capture off and about recording consent.

## Cost and licensing

Microsoft's notice MC1405506 says the feature requires a Microsoft 365 Copilot license. Learn's requirements page for Copilot Pages and Copilot Notebooks says users need the Microsoft Copilot or Copilot Chat license for Copilot Notebooks, so the two pages differ on which licence is named. Confirm entitlement with Microsoft before budgeting for users who hold only Copilot Chat.

No price, meter or credit rate specific to capture is published at the time of writing (November 2026). Storage is an indirect cost: the requirements page says Copilot Notebook storage counts against your organization's SharePoint quota, while the storage page says it counts against the user's OneDrive storage limit. Notebooks, audio and images saved by capture add to that storage.

## Scope

Eligible users are those with access to Copilot Notebooks in OneNote, a Microsoft 365 Copilot license and a Microsoft Entra ID work or school account, per the notice. They need the Microsoft 365 desktop apps, including OneNote, installed on Windows. The notice says the feature is available to commercial Microsoft 365 users.

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud, the Desktop platform and General Availability. The notice gives a rollout window beginning at the end of November 2026 and completing at the end of November 2026. The roadmap status is In development as of its last modification on 6 November 2026.

## Governance guidance

### Before rollout

- Ask the Office Apps Administrator or another Cloud Policy administrator to open the Create and view Copilot Pages and Copilot Notebooks setting and record whether it is Enabled, Disabled or Not configured for each group.
- Ask Microsoft through your support channel which policy setting MC1405506 refers to, and whether it is the Cloud Policy setting in the controls table.
- Decide with legal and compliance whether capturing third-party browser meetings (Zoom, Webex, Google Meet) is permitted, and write the consent rule users must follow.
- Ask compliance to assess the documented Copilot Notebook storage limitations before capture content accumulates.

### At rollout

- Send users the consent and recording guidance Microsoft's notice asks organisations to give before capture is used.
- Pilot with a small group of Copilot-licensed users and check where captured pages are saved and who can see them.
- Allow time for any Cloud Policy change to apply: Learn says up to 90 minutes where policy configurations already exist and up to 24 hours where none did.

### After rollout

- Review the Message center for an update to MC1405506 that names the policy setting or moves the date again.
- Track growth in Copilot Notebook storage against the SharePoint quota the requirements page refers to.
- Re-test the policy setting against capture once Microsoft documents it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Pages and Copilot Notebooks</strong><br><small>Tenant</small><br><small class="controls__note">Learn does not say this setting governs capture. API is preview: applyOnce, resource microsoft.copilot.copilotpagesnotebooks, value 0 disables; tenant-level policies only. Fails if the setting is in any group-level policy.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration?view=o365-worldwide" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Policy setting named in MC1405506 to disable multimodal capture</strong><br><small>Tenant</small><br><small class="controls__note">MC1405506 says admins can disable the feature using a policy setting but does not name it.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents one Cloud Policy setting for Copilot Pages and Copilot Notebooks. Its Disabled value is documented as making creation and integration unavailable to users and hiding the Notebooks module in the Microsoft Copilot app; existing items are not deleted. Learn does not say that it switches off multimodal capture in OneNote, and MC1405506 names no setting, so the second row records the setting the notice mentions but does not identify.

The Cloud Policy overview lists Office Apps Administrator as the recommended role. Policies from Cloud Policy are applied only when the Office app is restarted. The Graph row is a preview Tenant Configuration Management route, and Learn says it works only for tenant-level policies in the Microsoft 365 Apps admin center. The target setting must not be configured in any group-level policy in the Microsoft 365 Apps admin center; if it is, applyOnce fails for that resource.

## Open questions

- Which policy setting does MC1405506 mean when it says admins can disable multimodal capture, and where is it documented? Watch the notice in Message center and the OneNote Copilot Notebooks pages on Learn.
- Does the Cloud Policy setting Create and view Copilot Pages and Copilot Notebooks also stop capture in OneNote on Windows?
- Is a Copilot Chat licence enough for capture, as the Learn requirements page says for Copilot Notebooks, or is a Microsoft 365 Copilot license required, as the notice says?
- Will Microsoft publish a meter, price or credit rate for capture or its transcription?

<!-- rationale
risk: Medium. Microsoft's notice says the feature is on by default and transcribes captured audio, including from Zoom, Webex and Google Meet meetings in a browser, but names no capture-specific switch, so governance rests on consent policy and a policy setting that is not yet identified.
cost: Low. The notice says a Microsoft 365 Copilot license is required and publishes no separate price or meter for capture; the indirect costs are admin time, user communication and Copilot Notebook storage counted against a quota.
impact: Medium. Only users who already have access to Copilot Notebooks in OneNote on Windows are affected, but for them it arrives on by default, and capture can be suggested when a supported browser meeting is detected.
-->
