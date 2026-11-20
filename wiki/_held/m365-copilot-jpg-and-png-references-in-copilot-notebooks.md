---
title: "Copilot Notebooks: JPG and PNG files as knowledge sources"
slug: "m365-copilot-jpg-and-png-references-in-copilot-notebooks"
roadmapId: 569211
topic: "m365-copilot"
products: ["OneNote","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Notebooks now accepts JPG and PNG files as knowledge sources, so Copilot can ground outputs on text and charts in images. Launched; Microsoft says no action or new admin control, but tell your users."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS","Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn says users need the Microsoft Copilot or Copilot Chat licence for Copilot Notebooks. No separate licence, price or meter for JPG and PNG references is documented at the time of writing (November 2026)."
audiences: ["m365-admin","change-adoption","security"]
tags: ["copilot-notebooks","onenote","m365-copilot","knowledge-grounding","cloud-policy","mobile"]
sources:
  - title: "Microsoft 365 Roadmap 569211"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569211"
    kind: "roadmap"
  - title: "MC1519842: Microsoft OneNote: JPG and PNG references in Copilot Notebooks"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1519842"
    kind: "message-center"
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
  - title: "Requirements for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
videos: []
related: ["onenote-multimodal-capture-in-copilot-notebooks-windows","m365-copilot-copilot-chat-in-onenote-can-create-edit-and-refine-content"]
controls:
  - governs: "Whether users can create and use Copilot Pages and Copilot Notebooks"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api: null
    note: "Cloud Policy; applies to All users or a chosen group. Governs Notebooks as a whole, not image references. Existing items aren't deleted when disabled."
  - governs: "Switch for JPG and PNG references in Copilot Notebooks"
    scope: "other"
    ui: null
    api: null
    note: "Microsoft's notice MC1519842 says no new admin controls are introduced with this rollout."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-20"
    note: "First briefing: JPG and PNG files as Copilot Notebooks knowledge sources, launched, with no new admin control."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 44
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "416c807118af5e407d583b8886bc00b0"
---

## What's changing

Copilot Notebooks now supports JPG and PNG files as knowledge sources, so users can add images to a notebook alongside traditional documents. The roadmap item states that Copilot can use the content within these images, including text, charts, diagrams and other visuals, as grounding context for presentations, reports and briefs.

Microsoft's notice MC1519842 (published 2026-10-21) says users with access to Copilot Notebooks can use JPG and PNG files as Copilot grounding sources. It adds that "Organizations that already allow Copilot to reason over JPG and PNG files will receive this capability automatically" and that no new admin controls or configuration changes are introduced with this rollout. The notice states that no action is required and recommends telling users once the feature is available in your organisation.

The roadmap record gives the status as Launched, with a September CY2026 preview date and an October CY2026 target. The notice says the Worldwide public preview rollout has completed, and that general availability began in early October 2026 and is expected to complete by late October 2026. The record lists Worldwide (Standard Multi-Tenant) as the cloud and Android, iOS and Web as platforms.

The Learn pages on Copilot Notebooks administration and requirements do not mention image references at the time of writing (November 2026), so the behaviour described here comes from the roadmap item and the notice.

## Why it matters

Images are a different kind of input from documents: a screenshot, a whiteboard photograph or a chart can carry text and figures that never passed through a file you could label or search. Because Copilot reads that content as grounding context, anything a user adds to a notebook can end up in the presentations, reports and briefs Copilot generates from it.

The notice describes the capability as arriving automatically for organisations that already allow Copilot to reason over JPG and PNG files, with no new admin control. It does not say what happens for organisations that do not allow this. Plan on users adding images from the first day and brief them accordingly; the notice recommends exactly that.

## Risk assessment

**Data exposure**

- A user can add an image that contains text, charts or diagrams, and Copilot uses that content as grounding context for generated outputs (roadmap item). Any sensitive content in a screenshot or photograph can therefore appear in a generated presentation, report or brief, and the user's own sharing of that output decides who sees it.
- Microsoft Learn says files added to Notebooks remain available in OneDrive and SharePoint where they're stored. It does not address image references separately, so confirm where an image added as a reference is held before relying on existing storage and retention rules.

**Security & identity**

- The notice says no compliance considerations were identified and no new admin controls are introduced. The only documented Notebooks control is the creation policy in the controls table, which switches Notebooks on or off and does not target images.

**Autonomy & actions**

- No change: the roadmap item and the notice describe Copilot using images as grounding context for outputs and describe no autonomous action.

**Change & support**

- The notice says organisations that already allow Copilot to reason over JPG and PNG files receive the capability automatically, so expect questions from users on Web, Android and iOS (the platforms on the roadmap record) once it appears.
- The notice recommends informing users. Without that, users may add images without knowing that Copilot reads the text and charts inside them.

## Cost and licensing

Copilot Notebooks needs a licence: the Learn requirements page says "Users need the Microsoft Copilot or Copilot Chat license" for Copilot Notebooks. The roadmap item and Microsoft's notice name no additional licence for JPG and PNG references.

No meter, price or credit rate specific to image references is documented at the time of writing (November 2026). The indirect costs are admin and communication time. How image references count toward storage is not described on the Notebooks storage or requirements pages, so watch Learn for it.

## Scope

The notice says users with access to Copilot Notebooks, in Microsoft OneNote and Copilot Notebooks, can use JPG and PNG files as knowledge sources. The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud, Android, iOS and Web as platforms, and General Availability and Preview as release phases.

The prerequisite documented on Learn is the Microsoft Copilot or Copilot Chat licence. The notice says rollout reaches organisations that already allow Copilot to reason over JPG and PNG files automatically; it does not say what applies to organisations that do not. Rollout of general availability began in early October 2026 and was expected to complete by late October 2026.

## Governance guidance

### Before rollout

- Decide whether your guidance on screenshots and photographs of internal material should cover images added to Copilot Notebooks, and write it before telling users.
- Check the Cloud Policy setting Create and view Copilot Pages and Copilot Notebooks (first row of the controls table) to see which users have Notebooks available.
- Ask your Microsoft 365 administrator group to read MC1519842 in Message center and note that it announces no new admin control.

### At rollout

- Send users the communication Microsoft recommends: JPG and PNG files can now be knowledge sources in Copilot Notebooks.
- Tell users that Copilot reads the text, charts and diagrams inside an added image, so images should meet the same rules as the documents you allow.

### After rollout

- Pilot with a small group on Web, Android and iOS: add one JPG and one PNG and confirm Copilot uses their content in a generated output.
- Watch Message center and the Learn Copilot Pages and Copilot Notebooks admin page for an image-specific control or for storage and retention detail on image references.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and use Copilot Pages and Copilot Notebooks</strong><br><small>Tenant</small><br><small class="controls__note">Cloud Policy; applies to All users or a chosen group. Governs Notebooks as a whole, not image references. Existing items aren't deleted when disabled.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch for JPG and PNG references in Copilot Notebooks</strong><br><small class="controls__note">Microsoft's notice MC1519842 says no new admin controls are introduced with this rollout.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only Notebooks control documented on Learn is a Cloud Policy setting that governs creation of Copilot Pages and Copilot Notebooks. It does not distinguish file types, so it cannot allow documents while excluding images. Policy changes take time to show: the Learn page says up to 90 minutes where policy configurations already existed and up to 24 hours where none did.

When creation is disabled, Learn says existing Pages and Notebooks aren't deleted and users can still view and edit existing items if they have permission, while the Notebooks module is hidden in the Copilot app. Microsoft Learn and the notice document no setting specific to JPG and PNG references; the second row records that gap.

## Open questions

- Which setting controls whether Copilot reasons over JPG and PNG files for your organisation? The notice refers to organisations that "already allow" it without naming the control. Watch Message center and Microsoft Learn.
- What happens on arrival for organisations that do not allow Copilot to reason over JPG and PNG files? The notice does not say.
- Where is an image added as a reference stored, and do retention, eDiscovery and sensitivity label rules apply to it as they do to documents? Watch the Copilot Notebooks storage and admin pages on Learn.
- Will Microsoft add an admin control specific to image references? The notice says none is introduced with this rollout.

<!-- rationale
risk: Medium. Images users add, including screenshots and photographs, become grounding context for generated presentations and reports, and Microsoft's notice says no new admin controls come with the rollout.
cost: Low. Copilot Notebooks needs the Microsoft Copilot or Copilot Chat licence; no separate licence or meter for image references is documented, so the known cost is user communication.
impact: Medium. People who use Copilot Notebooks notice it; Microsoft's notice names users with access to Copilot Notebooks as the affected group.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls table / absence: Microsoft has not documented automation for the Cloud Policy Notebooks creation setting. | Found: These resources also support remediation and applyOnce. ... The 20 Copilot resources are Office Cloud Policy Service (OCPS) settings. ... Controls whether users can create and view Copilot Pages and Copilot Notebooks | Fix: Set controls[0].api to kind graph, call 'POST /beta/admin/configurationManagement/configurationMonitors', docs https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta. Add to the note: 'Preview TCM applyOnce: set mode to applyOnce and baseline.resources resourceType to microsoft.copilot.copilotpagesnotebooks, resourceVersion 1, properties.value to string 0 (disable) or 1 (enable). Tenant-level policies only; any group-level configuration of this setting causes failure. The calling app needs delegated ConfigurationMonitoring.ReadWrite.All, the TCM service principal delegated CopilotPolicySettings.ReadWrite, and the signed-in user AI Administrator. Beta APIs are not supported for production use.' Cite https://learn.microsoft.com/graph/utcm-copilot-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. | Source: https://learn.microsoft.com/graph/utcm-copilot-resources#copilotpagesnotebooks-resource-type
- [contradicted, blocker] Risk assessment: Security & identity; Governance controls / applicability: The creation policy is the only Notebooks control documented on Learn. | Found: Retention policies from Microsoft Purview Data Lifecycle Management configured for all SharePoint sites are enforced for all Copilot Pages and Copilot Notebooks. ... Data Loss Prevention (DLP): Rules enforced with end-user policy tip support. | Fix: Replace both exclusivity statements with: 'The documented Cloud Policy setting governs Copilot Pages and Copilot Notebooks creation and integration.' Do not call it the only documented Notebooks control. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary?view=o365-worldwide
- [contradicted, blocker] Risk assessment: Security & identity; controls[0].note; Governance controls / applicability: The creation policy switches Notebooks on or off as a whole rather than selecting image file types. | Found: When creation is disabled, users are unable to create new Copilot Pages or Notebooks. ... Existing Copilot Pages and Notebooks aren't deleted. Users can still view and edit existing items if they have permission. | Fix: Replace 'switches Notebooks on or off' and 'Governs Notebooks as a whole' with 'governs creation and integration, not all access to existing items'. Retain the documented existing-item access explanation and the separate image-control gap. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing; Scope; rationale: cost / licensing: The Learn requirements page says Copilot Notebooks users need the Microsoft Copilot or Copilot Chat licence. | Found: Users need the Microsoft Copilot or Copilot Chat license. | Fix: Keep the attribution to the requirements page and add: 'The preview Tenant Configuration Management reference instead says Copilot Notebooks require a Microsoft 365 Copilot license.' Cite https://learn.microsoft.com/graph/utcm-copilot-resources#copilotpagesnotebooks-resource-type. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements
-->
