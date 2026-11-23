---
title: "OneNote for Android: multimodal capture in Copilot Notebooks"
slug: "onenote-multimodal-capture-in-copilot-notebooks-android"
roadmapId: 567895
topic: "m365-copilot"
products: ["OneNote","Microsoft Copilot (Microsoft 365)"]
summary: "OneNote for Android can combine audio transcription, photos and typed notes in one capture, saved as a Copilot Page in a chosen Copilot Notebook. No default or capture-specific admin setting is stated; plan recording-consent guidance."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android"]
targetDate: "September CY2026"
previewDate: "August CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn's requirements page says Copilot Notebooks need the Microsoft Copilot or Copilot Chat license. It says nothing specific to capture, and no price or meter for capture is published."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["onenote","copilot-notebooks","copilot-pages","m365-copilot","mobile","cloud-policy","transcripts","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 567895"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567895"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
  - title: "Requirements for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements"
    kind: "learn"
  - title: "Overview of Copilot Pages and Copilot Notebooks storage"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-storage"
    kind: "learn"
  - title: "Summary of governance, lifecycle, and compliance capabilities for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
videos: []
related: ["onenote-multimodal-capture-in-copilot-notebooks-windows","cloud-policy","m365-copilot-copilot-chat-in-onenote-can-create-edit-and-refine-content","onenote-summary-and-q-and-a-in-onenote-mobile-with-copilot-android","onenote-suggested-artifact-creation-in-copilot-notebooks"]
controls:
  - governs: "Whether users can create and view Copilot Pages and Copilot Notebooks"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview beta API: mode applyOnce, resourceType microsoft.copilot.copilotpagesnotebooks, value 0 disables; tenant-level policies only. Learn does not say the setting governs capture."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-28T22:58:08"
changes:
  - date: "2026-11-23"
    note: "New briefing: multimodal capture in Copilot Notebooks on OneNote for Android, with the Cloud Policy setting as the nearest documented control and the open questions on default and licensing."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 55
  unconfirmed: 0
  contradicted: 6
  attempts: 1
  hash: "b8054cce85f8058238bd9f13b4fbb7d3"
---

## What's changing

OneNote for Android now offers multimodal capture in Copilot Notebooks. A user can transcribe audio, take images and type notes in a single session, and Copilot then creates a structured Copilot Page with insights and the user's captured content, saved to a Copilot Notebook the user selects. The roadmap item describes it as a way to capture offline work moments, including in-person conversations, whiteboard sessions and personal notes, and says the capability is already generally available on OneNote for iPhone and iPad.

Microsoft 365 Copilot release notes on Microsoft Learn list the feature under 27 October 2026 (updates released between 13 and 27 October 2026) as now available for Android. The steps given there are: open OneNote on your Android device and select a Copilot Notebook, use the multimodal capture feature to record audio, take pictures and type notes, then review the structured Copilot Page created from your inputs.

The roadmap record shows the item as Launched, with a target of September CY2026 and a preview date of August CY2026. It lists the Android platform, the Worldwide (Standard Multi-Tenant) cloud and two release phases, General Availability and Preview, without saying which applies to which users. The release notes place the entry in late October 2026, after the roadmap's September target. The Learn pages on Copilot Pages and Copilot Notebooks administration do not mention OneNote capture at the time of writing (November 2026), so the behaviour described here is the roadmap's and the release notes' own description.

## Why it matters

This gives staff with a Copilot Notebook a quick way to turn a spoken conversation and a photo of a whiteboard into a structured page on a phone. The service-owner questions are consent and where the content lands, not a new connector: captured audio, images and notes end up in a notebook the user chooses, so recording rules for in-person conversations and the retention and labelling that apply to Copilot Notebooks matter more than any new setting.

Microsoft has not stated what happens on arrival or whether an administrator must act, so this briefing treats it as a capability users choose to start and plans communication and a check of the existing Cloud Policy setting, not a deadline. Learn documents no setting specific to capture, so the controls table records the nearest documented control and says what its page does and does not cover.

## Risk assessment

**Data exposure**

- Capture creates new content from conversations: transcribed audio, photographs and typed notes combined into a Copilot Page with insights. Recorded colleagues, customers or visitors may not expect that, so recording and consent rules need to cover it. No capture-specific control is documented; the nearest is the Cloud Policy setting in the controls table.
- Learn's storage page says Copilot Notebooks are stored in OneDrive for Business, and that those created before November 2025 remain in a SharePoint Embedded container. Confirm which applies to the notebooks your users capture into, because quota and recycle-bin behaviour differ between the two.
- Learn's compliance summary says Purview retention policies configured for all SharePoint sites are enforced for Copilot Pages and Copilot Notebooks, and that DLP rules are enforced. It also says Copilot Notebooks have no container sensitivity labels. Check your labelling expectations against that.

**Security & identity**

- Learn says Copilot Notebooks need the Microsoft Copilot or Copilot Chat license, and that people for whom OneDrive creation is disabled cannot create Copilot Pages or Copilot Notebooks whatever the Cloud Policy setting says. Check that group before assuming everyone can capture.

**Autonomy & actions**

- Copilot generates the structured page and saves it to the selected notebook. The release notes describe no actions taken in other systems, so the exposure is the content created, not a change elsewhere.

**Change & support**

- Android users get a capability that iPhone and iPad users already have, so expect how-to and consent questions from mixed-device teams. A separate briefing covers the Windows version at /features/onenote-multimodal-capture-in-copilot-notebooks-windows/.
- A Cloud Policy change takes up to 90 minutes to show where policy configurations already existed, and up to 24 hours where none did.

## Cost and licensing

Licence: Learn's requirements page for Copilot Pages and Copilot Notebooks says users need the Microsoft Copilot or Copilot Chat license for Copilot Notebooks. That page does not mention capture, and no price, meter or credit rate specific to capture is published at the time of writing (November 2026).

Storage is the indirect cost. Learn's storage page says Copilot Notebooks count against the user's OneDrive storage limit, and that legacy notebooks created before November 2025 count against the organisation's SharePoint storage quota. Captured pages and any images saved with them add to that storage; admin time for communication and policy review is the other known cost.

## Scope

Users: those who can use Copilot Notebooks in OneNote for Android. Learn's requirements page names the Microsoft Copilot or Copilot Chat license for Copilot Notebooks and an Exchange Online mailbox for full functionality including @mentions.

The roadmap record lists the Android platform and the Worldwide (Standard Multi-Tenant) cloud, with General Availability and Preview as release phases. It lists no other cloud. The record shows the status as Launched, with a September CY2026 target. The release notes list the Android entry under 27 October 2026. The iPhone and iPad versions are described as already generally available.

## Governance guidance

### Before rollout

- Open the Cloud Policy setting Create and view Copilot Pages and Copilot Notebooks in the Microsoft 365 Apps admin center and record whether each policy configuration sets it to Enabled, Disabled or Not configured. Learn says Not configured leaves creation and integration available.
- Decide with legal and compliance whether audio from in-person conversations may be recorded and transcribed on staff phones, and write the consent rule users follow.
- Ask compliance to confirm where captured pages are stored, using Learn's storage page, and which Purview retention, DLP and labelling rules its compliance summary says apply.

### At rollout

- Tell Android users where capture is and that the resulting page is saved to the Copilot Notebook they select, using the steps in the release notes.
- Pilot with a few Copilot-licensed Android users: capture a short session and check the generated page, where it is saved and who can open it.
- Allow for Cloud Policy delay if you change the setting: up to 90 minutes where configurations already exist, up to 24 hours where none did.

### After rollout

- Watch the Microsoft 365 Copilot release notes and Message center for an admin article or policy setting specific to capture.
- Review OneDrive storage growth for heavy capture users, since Learn says Copilot Notebooks count against the user's OneDrive storage limit.
- Test whether the Cloud Policy setting stops capture on Android once Microsoft documents it, before relying on it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Pages and Copilot Notebooks</strong><br><small>Tenant</small><br><small class="controls__note">Preview beta API: mode applyOnce, resourceType microsoft.copilot.copilotpagesnotebooks, value 0 disables; tenant-level policies only. Learn does not say the setting governs capture.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn's admin page says that when the Cloud Policy setting is Disabled, users cannot create new Copilot Pages or Notebooks, the Notebooks module is hidden in the Microsoft Copilot app, and existing items are not deleted. It does not mention OneNote or capture, so whether the setting stops capture in OneNote for Android is not confirmed. Learn documents no capture-specific setting at the time of writing (November 2026).

The Graph route is a preview Tenant Configuration Management API in beta. Learn says these settings are supported only in tenant-level policies in the Microsoft 365 Apps admin center, and that the request fails for that resource if the setting is configured in any group-level policy. The Cloud Policy setting itself can be scoped to groups in the admin centre.

## Open questions

- Does the Cloud Policy setting Create and view Copilot Pages and Copilot Notebooks also stop capture in OneNote for Android, or will Microsoft add a separate setting? Watch the Copilot Pages and Copilot Notebooks admin page on Learn.
- What is the default on arrival, and does Microsoft expect administrators to do anything? Watch the Microsoft 365 Copilot release notes and Message center.
- Does capture need the same licence as Copilot Notebooks in general (Microsoft Copilot or Copilot Chat), and will any meter apply to audio transcription?
- Is the recorded audio kept after transcription, and where are captured images and pages stored, given the OneDrive and legacy SharePoint Embedded locations on the storage page?
- Which Android users are in General Availability and which in Preview, given the roadmap lists both phases?

<!-- rationale
risk: Medium. Capture turns recorded in-person conversations and photographed whiteboards into new notebook content, and Learn documents no capture-specific admin setting, though Purview retention and DLP rules are documented as applying to Copilot Notebooks.
cost: Low. Learn says Copilot Notebooks need the Microsoft Copilot or Copilot Chat license and no price or meter specific to capture is published; the known costs are admin time and OneDrive storage.
impact: Medium. Users of Copilot Notebooks in OneNote for Android are the ones who notice, and the people they record in meetings are affected by what is captured and where it is saved.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary; Why it matters; Risk assessment; Governance controls; Open questions; rationale: risk / absence: Microsoft has not documented a capture-specific administrative setting. | Found: If you're the IT admin for your organization, you can use **Capture in Copilot Notebooks for mobile devices** Cloud Policy to manage this feature. | Fix: Replace the capture-specific-control absence statements with: 'Microsoft documents the Cloud Policy setting Capture in Copilot Notebooks for mobile devices to manage Capture; its support article does not give an Android-specific enforcement description.' Cite https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks. Remove the advice to wait for a capture-specific policy or admin article. | Source: https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks
- [contradicted, blocker] Why it matters: captured audio / behaviour: Captured audio ends up in the selected notebook. | Found: Audio data processed during a Capture session is deleted immediately after transcription and therefore can't be used for any other purpose. | Fix: Change 'captured audio, images and notes end up in a notebook the user chooses' to 'the transcript, images and notes are saved in the notebook the user chooses'. Cite https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks. | Source: https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing; Scope; Open questions / absence: Microsoft publishes nothing specific to capture licensing or eligibility, leaving whether the general Notebook licence suffices open. | Found: A Microsoft Copilot license is required to use Copilot Notebooks, and an active SharePoint or OneDrive license is required to create notebooks. | Fix: Replace the capture-licensing absence and open question with: 'Microsoft's Capture support article requires a Microsoft Copilot license for Copilot Notebooks and an active SharePoint or OneDrive license to create notebooks. Capture is available only to commercial Microsoft 365 users with work or school (Entra ID) accounts.' Cite https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks. Retain only the separate question about a capture-specific transcription meter. | Source: https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks
- [contradicted, blocker] Governance controls: first paragraph / absence: The cited admin page does not mention OneNote. | Found: To share Copilot Pages as interactive components (instead of just hyperlinks) in Teams, Outlook, Whiteboard, OneNote, or the Loop application, Loop components must be enabled. | Fix: Replace 'It does not mention OneNote or capture' with 'It does not describe OneNote capture'. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [contradicted, blocker] Open questions: recorded audio retention / absence: Whether recorded audio is kept after transcription remains undocumented. | Found: The audio is handled transiently to generate the corresponding transcription and isn't retained after transcription is complete. | Fix: Replace 'Is the recorded audio kept after transcription' with the statement 'Microsoft states that Capture audio is deleted immediately after transcription', and retain only the separate storage-location question. Cite https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks. | Source: https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Change & support; Scope / record: The roadmap describes the iPhone and iPad capability as already generally available. | Found: This capability is already generally available on OneNote for iPhone and iPad. | Fix: Keep the roadmap attribution and add: 'Microsoft's Capture support article, updated November 2026, instead describes phased availability beginning on iPhone and iPad.' Cite https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks.
- [supported, minor] What's changing; Scope; Governance guidance: At rollout / availability: The release notes say multimodal capture is now available in OneNote Copilot Notebooks for Android. | Found: Multimodal capture is now available in OneNote Copilot Notebooks for Android, matching the existing capability on iPhone and iPad. | Fix: Add: 'The November 2026 Capture support article still describes phased availability beginning on iPhone and iPad and gives no Android instructions, unlike the Android release-note entry.' Cite https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
- [supported, minor] Risk assessment: Data exposure; Cost and licensing; Open questions / behaviour: The storage page places current Copilot Notebooks in OneDrive for Business. | Found: Pages and Notebooks are stored in OneDrive for Business: the same visible file system where Word, Excel, and PowerPoint files live. | Fix: Add: 'The storage page distinguishes current OneDrive storage from legacy SharePoint Embedded storage, but the cited admin, requirements and compliance pages still describe Pages and Notebooks generally as stored in SharePoint Embedded.' These conflicting pages are https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration, https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements and https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-storage
- [supported, minor] front matter: licensing.notes; Risk assessment; Cost and licensing; Scope; rationale: cost / licensing: The requirements page says Copilot Notebooks need the Microsoft Copilot or Copilot Chat license. | Found: Users need the Microsoft Copilot or Copilot Chat license. | Fix: Add: 'The requirements page's at-a-glance table instead names Microsoft Copilot license, and the Capture support article requires a Microsoft Copilot license plus an active SharePoint or OneDrive license to create notebooks.' Cite https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks alongside the existing requirements source; retain the differing requirements-page wording as an attributed statement, not a sufficient Capture eligibility test. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements
- [supported, minor] controls[0].note; Governance controls table; Governance controls / applicability: The correctly documented general Pages and Notebooks control is described as not confirmed to govern capture. | Found: When creation is disabled, users are unable to create new Copilot Pages or Notebooks. | Fix: Replace 'Learn does not say the setting governs capture' with 'The general policy prevents creation of new Copilot Pages and Notebooks; Android Capture enforcement is not described.' The source is https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration. Keep the narrower uncertainty about the Android capture UI separate from the now-documented capture-specific mobile policy. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The governance checklist asks readers to check Purview retention, DLP and labelling rules, but those controls have no table rows. | Found: Ask compliance to confirm ... which Purview retention, DLP and labelling rules its compliance summary says apply. The controls table contains only Whether users can create and view Copilot Pages and Copilot Notebooks. | Fix: The Before rollout checklist step covering Purview retention, DLP and labelling has no corresponding controls-table rows. Remove that control-checking step from the checklist; retain the sourced compliance facts in Risk assessment.
-->
