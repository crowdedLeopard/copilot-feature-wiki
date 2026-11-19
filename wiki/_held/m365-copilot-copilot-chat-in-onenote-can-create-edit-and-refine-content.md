---
title: "OneNote: Copilot Chat can create, edit and refine notebook content"
slug: "m365-copilot-copilot-chat-in-onenote-can-create-edit-and-refine-content"
roadmapId: 573446
topic: "m365-copilot"
products: ["OneNote","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Chat in OneNote gains an edit mode that can create, rename and delete pages, sections and notebooks. Frontier began November 2026; general availability is expected January 2027. Microsoft says no admin action is required."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "high"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Learn says Microsoft Copilot needs a Microsoft Copilot licence plus a qualifying prerequisite licence, and that Copilot Chat is available with an eligible Microsoft 365 subscription. Which of these covers OneNote edit mode is not yet published."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["onenote","copilot-chat","m365-copilot","frontier-program","work-iq","write-actions","document-generation"]
sources:
  - title: "Microsoft 365 Roadmap 573446"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573446"
    kind: "roadmap"
  - title: "MC1559641: New Copilot experience in OneNote"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1559641"
    kind: "message-center"
  - title: "Get started with the Microsoft Frontier Program"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
videos: []
related: ["onenote-multimodal-capture-in-copilot-notebooks-windows","onenote-summary-and-q-and-a-in-onenote-mobile-with-copilot-iphone","work-iq"]
controls:
  - governs: "Which users get Frontier preview features, including the Frontier phase of OneNote edit mode"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Copilot Frontier"
      docs: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview API: applyOnce mode with resource microsoft.copilot.frontier. That resource is described as covering web apps; coverage of desktop OneNote is unconfirmed. Needs AI Administrator."
  - governs: "Tenant-wide switch for Copilot edit mode in OneNote"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents no OneNote-specific setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-11T00:51:09"
changes:
  - date: "2026-11-19"
    note: "First briefing for this item: OneNote Copilot edit mode, Frontier began November 2026, general availability expected January 2027."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 59 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 54
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "2bb4d974ff60efa2438bead71d3e9091"
---

## What's changing

Copilot Chat in OneNote is getting an edit mode. The roadmap item states that in this mode users can create, rename and delete pages, sections or notebooks, and add or edit content in pages. It also states that Copilot can bring in content from across Work IQ and complete actions in other workflows, such as creating Word, Excel and PowerPoint files.

Microsoft's notice MC1559641 (published 18 November 2026) calls it a refreshed Copilot experience with expanded edit and reasoning capabilities across notebook content, including ink, annotations and embedded files. It says eligible users get the broader capabilities on supported app versions of OneNote on Windows and iPad. OneNote on Mac, iPhone, Android and web is not in this rollout and will receive the update later. The roadmap record lists the platform as Desktop and the cloud as Worldwide (Standard Multi-Tenant).

The notice gives the schedule: Frontier Public began in November 2026, and general availability (Worldwide) is expected to begin in January 2027. The roadmap item is In development, with a preview target of November CY2026 and a general availability target of January CY2027. The notice sets no act-by date and says no immediate admin action is required; it recommends informing affected users and updating internal OneNote and Copilot guidance and training.

Microsoft Learn does not describe OneNote edit mode at the time of writing (November 2026). What this page says about behaviour is the roadmap's and the notice's description.

## Why it matters

This moves Copilot in OneNote from drafting text to changing the notebook structure itself. Anything the roadmap lists, including deleting a page, section or notebook, becomes something a user can ask Copilot to do. Plan for support questions about unexpected changes and for guidance on checking Copilot's edits.

Microsoft's notice describes general availability as a rollout to eligible users with no admin action required. Learn documents no setting specific to OneNote edit mode, so the main lever before general availability is who is enrolled in Frontier. Settle your communications, training and expectations for reviewing Copilot's edits before January 2027.

## Risk assessment

**Data exposure**

- The roadmap states Copilot can bring content from across Work IQ into OneNote, and the notice says edit and reasoning extend across ink, annotations and embedded files. Which data an edit run can read, and under whose permissions, is not described: confirm it before rollout. See [Work IQ](/concepts/work-iq/) for the shared mechanism.
- The roadmap states Copilot can create Word, Excel and PowerPoint files. Where those files are saved is not described.

**Security & identity**

- Frontier features are preview. Learn says Frontier experiences may be modified, suspended or discontinued, may not be covered by standard support commitments, and that HIPAA Business Associate Agreement coverage is not included for them.
- No identity or permission model for edit mode is described, so treat notebook sharing and access as unchanged until Microsoft says otherwise.

**Autonomy & actions**

- The roadmap states edit mode can create, rename and delete pages, sections or notebooks and add or edit page content. These are write actions on user notebooks. Whether Copilot asks for approval before each change is not described.
- Learn documents no OneNote-specific switch to turn edit mode off. The Frontier setting (first row of the controls table) is the documented gate while the feature is in the Frontier phase.

**Change & support**

- Behaviour differs by platform: the notice covers Windows and iPad now, and Mac, iPhone, Android and web later. Expect users on different devices to see different Copilot behaviour.
- The notice recommends updating internal OneNote and Copilot guidance and training materials.

## Cost and licensing

Learn's requirements page says users of Microsoft Copilot need a Microsoft Copilot licence and a qualifying prerequisite licence, and that Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription ([Microsoft Copilot requirements](https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements)). The roadmap record and Microsoft's notice say only "eligible users". Which of these two entitlements covers OneNote edit mode is not yet published.

For the Frontier phase, Learn says certain Frontier experiences may only be available on a paid basis and points to the Microsoft Copilot Credits Guide for credit consumption requirements ([Get started with the Microsoft Frontier Program](https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier)). A credit rate or separate charge for this feature is not yet published. Indirect cost is admin and communication time, and the support load of new edit behaviour.

## Scope

**Users and licences:** eligible users, as the notice puts it. Frontier enrolment is by tenant: Learn says an admin can enrol all users or specific users and groups, and that Copilot-related Frontier features are shown only to users with a Microsoft Copilot licence or a licence that includes access to Copilot.

**Platforms:** the roadmap record lists Desktop. The notice names OneNote on Windows and iPad, on supported app versions, and says Mac, iPhone, Android and web are not included in this rollout.

**Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) only.

**Rollout:** Frontier Public began in November 2026; general availability (Worldwide) is expected from January 2027 per the notice. Learn lists the Office Feature Updates task, which must run on its regular schedule and reach its network resources, as a requirement for core Copilot experiences in apps including OneNote.

**Roles:** to enrol users in Frontier you need the AI Administrator, Security Administrator or Office Apps Administrator role.

## Governance guidance

### Before rollout

- Decide who should get Frontier access now, and set it in the Frontier row of the controls table (Microsoft 365 admin center), using the AI Administrator, Security Administrator or Office Apps Administrator role.
- Identify which users use OneNote on Windows or iPad with Copilot, and tell them what edit mode is described as doing, including deleting pages, sections and notebooks.
- Confirm with Microsoft, through the Message center and the roadmap item, how edit mode handles approval, file output locations and Work IQ data access before general availability.

### At rollout

- Pilot with a small group in Frontier before widening access, and ask them to report any unintended edits or deletions.
- Publish guidance to users on checking Copilot's changes in a notebook, as the notice recommends updating internal OneNote and Copilot guidance and training.
- Review the privacy controls for connected experiences, which Learn says can affect the availability of Copilot features ([Microsoft Copilot requirements](https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements)).

### After rollout

- Collect support tickets about changed or removed OneNote content and compare them with the platforms and users in scope.
- Re-read the roadmap item and Message center when general availability starts in January 2027 for changes to platforms, licensing or controls.
- Check Learn for a page covering OneNote edit mode and for any OneNote-specific setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users get Frontier preview features, including the Frontier phase of OneNote edit mode</strong><br><small>Tenant</small><br><small class="controls__note">Preview API: applyOnce mode with resource microsoft.copilot.frontier. That resource is described as covering web apps; coverage of desktop OneNote is unconfirmed. Needs AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Copilot Frontier <a href="https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for Copilot edit mode in OneNote</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents no OneNote-specific setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Frontier setting is the documented control over who gets preview features, so it governs this feature while the roadmap's preview phase lasts. Microsoft's notice describes general availability as a rollout to eligible users, and Learn describes Frontier as access before general availability, so expect that gate to stop mattering once general availability starts.

Learn also describes a unified release preferences experience (Settings > Org settings > Release preferences) for Frontier that is rolling out gradually from mid-November 2026. The Tenant Configuration Management call is a preview API, and the resource it would set is described on Learn as governing Frontier features in Microsoft 365 web apps, so confirm it covers OneNote on Windows before relying on it.

Microsoft Learn documents no setting specific to OneNote edit mode at the time of writing, hence the second row.

## Open questions

- Does edit mode ask the user to approve each create, rename or delete before it is applied, and can a change be undone? Watch the Microsoft 365 Roadmap item and Message center.
- Which licence covers edit mode: a Microsoft Copilot licence, or Copilot Chat with an eligible Microsoft 365 subscription? Is any credit rate or other charge attached?
- Which data does Copilot read when it brings in content from across Work IQ, and under whose permissions?
- Where are the Word, Excel and PowerPoint files that Copilot creates from OneNote saved?
- Will an admin setting for OneNote edit mode be documented before general availability in January 2027?

<!-- rationale
risk: High. The roadmap describes edit mode as able to delete pages, sections and notebooks and to draw on Work IQ. Microsoft's notice says it reaches eligible users without admin action, and Learn documents no OneNote-specific switch at the time of writing (November 2026).
cost: Low. The only cost the sources show is admin and communication time. Which licence covers edit mode, and any credit rate for it, is not yet published, so this rating may move.
impact: Medium. Eligible OneNote users on Windows and iPad get broader Copilot behaviour that can change their notebooks. Mac, iPhone, Android and web are not in this rollout, per Microsoft's notice.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: licensing.model / licensing: OneNote edit mode has a mixed licensing model. | Found: Searched: '"OneNote" "edit mode" Copilot license pricing credits'; opened Microsoft Copilot requirements, License options for Microsoft Copilot, Microsoft Copilot overview and Get started with the Microsoft Frontier Program. None establishes a mixed entitlement for this feature. | Fix: Set licensing.model to 'per-user' for the documented Frontier entitlement, and replace the notes with: 'For Copilot-related Frontier features, users need a Microsoft Copilot license or a license that includes access to Copilot. The general-availability entitlement for OneNote edit mode is not yet published.' Cite https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier.
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing; Open questions; rationale: cost / absence: Which entitlement covers OneNote edit mode is not yet published, without distinguishing Frontier from general availability. | Found: to use Frontier features for Copilot, users need a Microsoft Copilot license or a license that includes access to Copilot. | Fix: Replace the unqualified licensing gap throughout with: 'For Copilot-related Frontier features, users need a Microsoft Copilot license or a license that includes access to Copilot. The general-availability entitlement for OneNote edit mode is not yet published.' Keep the open licensing question limited to general availability. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier
- [contradicted, blocker] Risk assessment: Data exposure; Security & identity; Open questions / absence: Microsoft has not described whose permissions bound edit-mode data access or any applicable identity and permission model. | Found: Microsoft Copilot presents only data that each individual can access using the same underlying controls for data access used in other Microsoft 365 services. Semantic Index honors the user identity-based access boundary | Fix: In Data exposure, replace 'Which data an edit run can read, and under whose permissions, is not described: confirm it before rollout' with 'The edit-mode-specific scope of retrieved data is not described: confirm it before rollout'. Remove the Security & identity bullet beginning 'No identity or permission model'. In Open questions, remove 'and under whose permissions'. These narrower gaps do not deny the published general Copilot permission boundary. | Source: https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy
- [unsupported, blocker] controls[0].api; Governance controls table / applicability: POST /beta/admin/configurationManagement/configurationMonitors with microsoft.copilot.frontier is automation for selecting OneNote Frontier users. | Found: Searched: '"Microsoft Graph" "Frontier" "OneNote" settings'; opened Create configurationMonitor and TCM Copilot resources. The frontier resource controls web apps with value 0 or 1; neither source documents OneNote desktop enrolment or selecting Frontier users/groups. | Fix: Set controls[0].api to null and remove its applyOnce instructions. Keep the existing warning that the documented microsoft.copilot.frontier resource covers Microsoft 365 web apps and that desktop OneNote coverage is unconfirmed; do not present it as equivalent automation for this row. References: https://learn.microsoft.com/graph/utcm-copilot-resources and https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What's changing; Scope: Rollout; Governance guidance: After rollout / record: Worldwide general availability is expected to begin in January 2027. | Found: General Availability (Worldwide): we expect rollout to begin in January 2027. | Fix: In Governance guidance, replace 'when general availability starts in January 2027' with 'when general availability begins, currently expected from January 2027'.
- [supported, minor] Governance controls: unified release preferences paragraph / admin-path: A unified Frontier release preferences experience is rolling out from mid-November 2026 at Settings > Org settings > Release preferences. | Found: The unified release preferences experience is rolling out gradually in mid-November 2026 ... go to Settings > Org settings. Under the Organization profile tab, select Release preferences. | Fix: Expand the path to 'Microsoft 365 admin center > Settings > Org settings > Organization profile > Release preferences'. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist asks administrators to review connected-experience privacy controls, but the controls table has no corresponding row. | Found: Review the privacy controls for connected experiences ... Table rows: Which users get Frontier preview features; Tenant-wide switch for Copilot edit mode in OneNote. | Fix: Remove the checklist bullet beginning 'Review the privacy controls for connected experiences' because it directs a control review not represented in the table; do not add a control row as part of this correction.
-->
