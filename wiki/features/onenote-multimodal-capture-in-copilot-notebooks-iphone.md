---
title: "OneNote on iPhone: multimodal capture in Copilot Notebooks"
slug: "onenote-multimodal-capture-in-copilot-notebooks-iphone"
roadmapId: 559095
topic: "m365-copilot"
products: ["OneNote","Microsoft Copilot (Microsoft 365)"]
summary: "OneNote for iPhone and iPad lets users transcribe audio, take photos and type notes in one Capture session, saved as a Copilot Page in a Copilot Notebook. Microsoft documents a Cloud Policy setting to manage Capture on mobile."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["iOS"]
targetDate: "May CY2026"
previewDate: "March CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Capture article says a Microsoft Copilot license is required to use Copilot Notebooks and an active SharePoint or OneDrive license to create notebooks, and that Capture is only for commercial users with work or school (Entra ID) accounts. No price or meter for Capture is published."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["onenote","copilot-notebooks","copilot-pages","m365-copilot","ios","mobile","cloud-policy","transcripts","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 559095"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559095"
    kind: "roadmap"
  - title: "Capture conversations and ideas on the go in Microsoft Copilot Notebooks"
    url: "https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks"
    kind: "docs"
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
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Whether users can create and view Copilot Pages and Copilot Notebooks (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
videos: []
related: ["onenote-multimodal-capture-in-copilot-notebooks-android","onenote-multimodal-capture-in-copilot-notebooks-windows","copilot-notebooks","cloud-policy","m365-copilot-capture-voice-notes-in-the-m365-copilot-mobile-app"]
controls:
  - governs: "Whether Capture in Copilot Notebooks is available on mobile devices"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Capture in Copilot Notebooks for mobile devices"
      docs: "https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks"
    api: null
    note: "Setting named in Microsoft's Capture article; values and default not documented. Can be scoped to groups. Office Apps Administrator recommended."
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
    note: "Default Enabled. Learn does not say this setting governs Capture. Preview API: mode applyOnce, resource microsoft.copilot.copilotpagesnotebooks, value 0 disables; tenant-level policies only."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-06-04T23:15:54"
changes:
  - date: "2026-11-28"
    note: "New briefing: Capture in Copilot Notebooks on OneNote for iPhone, with the mobile Capture Cloud Policy setting, licence terms and consent rules."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 68 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 68
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "b4009853f6314e2b91724e71e0c0d907"
---

## What's changing

OneNote for iPhone gains Capture in Copilot Notebooks: in one session a user can transcribe audio, take photos and type notes, and Copilot then creates a structured Copilot Page with insights and the captured content, saved to a Copilot Notebook the user picks. The roadmap item describes it as a way to record offline work moments such as in-person conversations, whiteboard sessions and personal notes.

Microsoft's support article *Capture conversations and ideas on the go in Microsoft Copilot Notebooks* (last updated November 2026) gives the steps on iPhone and iPad: open OneNote, go to **Copilot Notebooks**, tap **Capture** on the notebook list page, capture the session, tap **End**, then choose the notebook. It says Capture is rolling out in phases and will first be available in OneNote for iPhone and iPad, and that users who do not see it may not have it yet. The Microsoft 365 Copilot release notes list the iPhone feature under July 01, 2026.

The roadmap record shows the item as Launched, with a target of May CY2026 and a preview date of March CY2026, on iOS in the Worldwide (Standard Multi-Tenant) cloud. It lists two release phases, General Availability and Preview, without saying which applies to whom. Microsoft has not stated whether Capture is switched on for users on arrival.

## Why it matters

Capture puts a transcription tool in staff pockets for conversations that are not Teams meetings, so the questions for a service owner are consent and where the result lands. Microsoft's article makes the user responsible for obtaining consent from everyone before transcribing, and says that by starting a session the user agrees they have it. Organisations with rules on recording customers, patients or works councils need those rules to reach this button.

Microsoft has not stated what happens on arrival, and no source says existing behaviour changes without a user choosing to start a Capture session. The decision is whether to leave Capture available, manage it with the **Capture in Copilot Notebooks for mobile devices** Cloud Policy setting, and tell users what consent they must get first.

## Risk assessment

**Data exposure**

- Transcripts, photos and notes become a Copilot Page in the chosen notebook. Microsoft's storage page says Pages and Notebooks are stored in OneDrive for Business and count against the user's OneDrive storage limit, with those created before November 2025 left in a user-owned SharePoint Embedded container; its admin and requirements pages still describe the SharePoint Embedded container and the organisation's SharePoint quota. These Microsoft pages disagree.
- Learn's compliance summary says retention policies configured for all SharePoint sites are enforced for all Copilot Pages and Copilot Notebooks, DLP rules are enforced with policy tips, and sensitivity labels are available for Copilot Pages only; Copilot Notebooks have no container sensitivity labels.
- Microsoft's Capture article says audio processed during a Capture session is deleted immediately after transcription. The transcript itself is kept in the page.

**Security & identity**

- Capture is limited to commercial Microsoft 365 users with work or school (Entra ID) accounts, per the Capture article. Learn's compliance summary lists Conditional Access for Copilot Pages and Copilot Notebooks as app-level only (entire Microsoft Copilot app) and Information Barriers as not supported.

**Autonomy & actions**

- Copilot writes the page and saves it to the notebook the user selects. Microsoft describes no action taken in other systems.

**Change & support**

- Expect questions on consent and on where captures are saved. Windows and Android versions are covered in /features/onenote-multimodal-capture-in-copilot-notebooks-windows/ and /features/onenote-multimodal-capture-in-copilot-notebooks-android/.

## Cost and licensing

**Licence.** Microsoft's Capture article says a Microsoft Copilot license is required to use Copilot Notebooks and an active SharePoint or OneDrive license is required to create notebooks. It adds that Copilot Notebooks is also available to Microsoft 365 Personal, Family and Premium subscribers, but Capture is available only to commercial Microsoft 365 users with work or school (Entra ID) accounts. Learn's requirements page names the Microsoft Copilot license in its at-a-glance table and the Microsoft Copilot or Copilot Chat license in its text.

**Meter.** The Capture article names licences only; no price, meter or credit rate for Capture transcription is published at the time of writing (November 2026).

**Indirect costs.** Captured pages and photos add to storage: OneDrive storage per Learn's storage page, or the organisation's SharePoint quota per its admin page. Admin time goes on the Cloud Policy decision and consent guidance.

## Scope

- **Users:** commercial Microsoft 365 users with work or school (Entra ID) accounts who can use Copilot Notebooks, per the licence terms above. People for whom OneDrive creation is disabled cannot create Copilot Pages or Copilot Notebooks, whatever the Cloud Policy setting says (Learn's admin page).
- **Platforms:** the roadmap record lists iOS; the Capture article gives steps for OneNote on iPhone and iPad.
- **Clouds:** the record lists Worldwide (Standard Multi-Tenant) only.
- **Rollout:** status Launched; the Capture article says it is rolling out in phases.
- **Roles:** Learn's Cloud Policy overview recommends the Office Apps Administrator role for managing policy settings.

## Governance guidance

### Before rollout

- Open the Microsoft 365 Apps admin center and check how your policy configurations set **Capture in Copilot Notebooks for mobile devices** and **Create and view Copilot Pages and Copilot Notebooks**.
- Agree with legal and works council representatives what consent users must get before transcribing a conversation, and publish it.
- Decide which groups should have Capture, and scope a policy configuration to them if not everyone.

### At rollout

- Tell iPhone and iPad users where **Capture** is and that the page is saved to the notebook they choose.
- Allow for Cloud Policy delay after a change: up to 90 minutes where policy configurations already existed, up to 24 hours where none did.
- Pilot with a few licensed users and check that the mobile Capture setting behaves as expected before relying on it.

### After rollout

- Watch OneDrive storage for heavy Capture users.
- Re-check the Capture support article for changes to the mobile policy setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Capture in Copilot Notebooks is available on mobile devices</strong><br><small>Tenant</small><br><small class="controls__note">Setting named in Microsoft's Capture article; values and default not documented. Can be scoped to groups. Office Apps Administrator recommended.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Capture in Copilot Notebooks for mobile devices <a href="https://support.microsoft.com/Microsoft-365-Copilot/capture-conversations-copilot-notebooks" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Pages and Copilot Notebooks</strong><br><small>Tenant</small><br><small class="controls__note">Default Enabled. Learn does not say this setting governs Capture. Preview API: mode applyOnce, resource microsoft.copilot.copilotpagesnotebooks, value 0 disables; tenant-level policies only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's Capture article names **Capture in Copilot Notebooks for mobile devices** as the Cloud Policy setting to manage Capture, and says Windows policy controls will be available as the feature reaches broader availability. It does not give the setting's values or default. Learn's Cloud Policy overview says not all policy settings are available for all operating systems, and that Cloud Policy supports Microsoft Entra groups for targeting, with priority deciding conflicts.

The **Create and view Copilot Pages and Copilot Notebooks** setting defaults to Enabled. Learn's admin page says that when it is disabled, users cannot create new Copilot Pages or Notebooks and existing items are not deleted; the page does not mention Capture.

The Graph route is the preview Tenant Configuration Management API in beta, using `applyOnce` mode with resource `microsoft.copilot.copilotpagesnotebooks`. Learn says it supports these settings only in tenant-level policies and fails if the setting is configured in any group-level policy; AI Administrator is the least-privileged role for the signed-in user.

## Open questions

- Is Capture available to licensed iPhone users by default, and what does the mobile Capture Cloud Policy setting do when set to Disabled? Watch the Capture support article.
- Does disabling **Create and view Copilot Pages and Copilot Notebooks** also remove Capture from OneNote on iPhone?
- Which users are in Preview and which in General Availability, given the roadmap lists both phases?
- Will Microsoft publish a Graph resource for the mobile Capture setting in Tenant Configuration Management?
- Where are new captures stored, given Microsoft's storage and admin pages disagree?

<!-- rationale
risk: Medium. Capture turns in-person conversations and whiteboard photos into new notebook content on staff phones; Microsoft documents a Cloud Policy setting for Capture on mobile, and Purview retention and DLP rules apply to Copilot Notebooks.
cost: Low. Microsoft's Capture article requires a Microsoft Copilot license for Copilot Notebooks and an active SharePoint or OneDrive license to create notebooks; no meter for Capture is published, so the known costs are storage and admin time.
impact: Medium. Copilot Notebooks users on OneNote for iPhone and iPad notice it, and so do the colleagues and visitors whose conversations they transcribe.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note; Governance controls; Open questions / applicability: Learn does not explicitly say the general Pages and Notebooks policy governs Capture. | Found: Copilot Pages and Copilot Notebooks check the following Cloud Policy settings: Create and view Copilot Pages and Copilot Notebooks | Fix: Replace 'Learn does not say this setting governs Capture' in controls[1].note and its rendered counterpart with 'Copilot Pages and Copilot Notebooks check this Cloud Policy setting.' The admin page documents that general reach; keep the narrower question about whether disabling it removes the OneNote Capture button. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
-->
