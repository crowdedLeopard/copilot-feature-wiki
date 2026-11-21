---
title: "Copilot Notebooks: audio overview gains topic episodes, Critique and Debate formats and label support"
slug: "m365-copilot-audio-overview-updates-in-copilot-notebooks"
roadmapId: 570966
topic: "m365-copilot"
products: ["Microsoft 365","OneNote","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans new audio overview features in Copilot Notebooks, including topic episodes, Critique and Debate formats and sensitivity label support. Default and rollout controls are not stated; review the Notebooks policy."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "October CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn's requirements page says Copilot Notebooks users \"need the Microsoft Copilot or Copilot Chat license\". No licence or price specific to the audio overview updates is published."
audiences: ["m365-admin","compliance","security"]
tags: ["copilot-notebooks","m365-copilot","onenote","sensitivity-labels","cloud-policy","information-protection"]
sources:
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
  - title: "Requirements for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements"
    kind: "learn"
  - title: "Summary of governance, lifecycle, and compliance capabilities for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 570966"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570966"
    kind: "roadmap"
videos: []
related: ["onenote-suggested-artifact-creation-in-copilot-notebooks","m365-copilot-csv-and-tsv-references-in-copilot-notebooks","m365-copilot-jpg-and-png-references-in-copilot-notebooks","sensitivity-labels","onenote-multimodal-capture-in-copilot-notebooks-windows"]
controls:
  - governs: "Whether users can create and view Copilot Notebooks, and so use their audio overview"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api: null
    note: "Cloud Policy; scope to all users or a group. Covers Notebooks as a whole, not audio overview alone. Applies to Copilot Pages too."
  - governs: "Separate switch for audio overview in Copilot Notebooks"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-08T23:04:12"
changes:
  - date: "2026-11-21"
    note: "New briefing: roadmap-only description of audio overview updates in Copilot Notebooks, with the existing Cloud Policy control and open questions on labels."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 54
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "9a6de2161cdb25684f8068b267a2861c"
---

## What's changing

Microsoft plans four updates to audio overview in Copilot Notebooks, according to the roadmap item. Audio overview becomes easier to navigate for longer content through topic-based episodes. New audio formats, such as Critique and Debate, are added. Sensitivity labels are supported, which the roadmap describes as support for enterprise information protection. Audio overview context expands to more content types.

Microsoft Learn does not describe these updates yet, so what follows about behaviour is the roadmap's description. The roadmap does not say which content types are added, how labels affect an audio overview, or whether users or admins turn anything on.

The roadmap record lists the status as In development, with a preview date and target date of October CY2026, release phases General Availability and Preview, platforms Desktop and Web, and the Worldwide (Standard Multi-Tenant) cloud. Those are targets. At the time of writing (November 2026) the status has not moved from In development, so treat availability in your tenant as unconfirmed.

## Why it matters

The label support is the part administrators should watch. Audio overview turns notebook content into a spoken summary, and a notebook can hold files that carry sensitivity labels. The roadmap promises label support, but Learn's compliance summary says sensitivity labels are available for Copilot Pages and that Copilot Notebooks don't have container sensitivity labels. How a label on a source file affects the audio overview is not documented, so confirm it in a test tenant before relying on it.

Microsoft has not stated what happens on arrival, so base planning on the fact that no source says existing Notebooks behaviour changes, and do not assume users must opt in. The practical effect is a decision for you: whether to leave Copilot Notebooks available as they are, or restrict them with the existing Cloud Policy setting until the label behaviour is documented.

## Risk assessment

**Data exposure**

- Audio overview draws on the content of a notebook, and the roadmap says the context will expand to more content types. Learn does not list those types, so you cannot yet say which files will be summarised aloud.
- Learn says Copilot Notebooks have no container sensitivity labels because they share a container with all Copilot Pages. Audio overview support for labels, per the roadmap, is not yet described, so a labelled source file's treatment in an audio summary is unconfirmed.

**Security & identity**

- Learn says Conditional Access applies at the app level only, to the entire Microsoft Copilot app, and that Information Barriers are not supported for Copilot Pages and Copilot Notebooks. Neither gives a way to restrict audio overview alone.

**Autonomy & actions**

- No change documented: the roadmap describes generated audio from notebook content and mentions no actions in other systems.

**Change & support**

- New formats such as Critique and Debate produce opinionated-sounding output from your own content. Tell users they are AI-generated summaries to check against the sources, and expect questions about format names and episode splitting.
- Learn says no end-user recycle bin exists for Copilot Notebooks, so brief support staff before users delete notebooks that hold generated audio.

## Cost and licensing

Learn's requirements page says Copilot Pages need a OneDrive licence and an active OneDrive site, and that Copilot Notebooks users "need the Microsoft Copilot or Copilot Chat license" (https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements). That is the licence statement for Notebooks, and the audio overview updates are part of Notebooks on the roadmap.

A price or meter specific to the audio overview updates is not yet published. Learn says Notebook storage counts toward the organisation's overall SharePoint quota, so stored output is an indirect cost. Admin time to test label behaviour and brief users is the other cost the sources show.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud, the Desktop and Web platforms, and the products Microsoft 365, OneNote and Microsoft Copilot (Microsoft 365). Release phases are General Availability and Preview, and the record does not say which update falls in which phase.

Learn says Copilot Notebooks are stored in a user-owned SharePoint Embedded container shared with Loop My workspace, and that users with an Exchange on-premises mailbox have limited capabilities for some features. No US Government cloud appears in the roadmap record; the record does not say they are excluded.

## Governance guidance

### Before rollout

- Check whether Copilot Notebooks are currently enabled for your users in Cloud Policy (the **Create and view Copilot Pages and Copilot Notebooks** setting, whose default is Enabled).
- Inventory the labelled files your users are likely to add to notebooks, so you know what a label-aware audio overview would draw on.
- Brief the compliance team that Learn says Copilot Notebooks have no container sensitivity labels, and ask them to record the expected behaviour of labelled sources once Microsoft documents it.

### At rollout

- Test an audio overview in a pilot tenant or with a pilot group that holds labelled source files, and record what the output and any labelling does.
- Scope the Cloud Policy setting to a pilot group, using the two-group pattern the Learn page describes, if you need to hold the feature back.

### After rollout

- Watch Message center and the Microsoft 365 Copilot release notes for the final description of the formats, episodes and label behaviour.
- Review Purview audit search for Notebook activity, noting that Learn says Copilot Notebooks create and update .pod files.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Notebooks, and so use their audio overview</strong><br><small>Tenant</small><br><small class="controls__note">Cloud Policy; scope to all users or a group. Covers Notebooks as a whole, not audio overview alone. Applies to Copilot Pages too.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Separate switch for audio overview in Copilot Notebooks</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only documented control that reaches Copilot Notebooks is the Cloud Policy setting. It decides whether users can create and view Notebooks as a whole. Learn says that when creation is disabled the Notebooks module is hidden in the Microsoft Copilot app and sharing links to Notebooks don't work, while existing items are not deleted. It does not separate audio overview from the rest of Notebooks.

Learn says a new or changed policy configuration takes up to 90 minutes to be reflected when other configurations existed, and up to 24 hours when none did. Sensitivity labels, DLP and retention behaviour for audio overview output are not described.

## Open questions

- How will sensitivity labels on notebook sources, or on the notebook, affect audio overview output? Watch the Copilot Notebooks pages on Learn and the roadmap item.
- Is the audio overview update on by default, and is there a tenant setting for it? Watch Message center and the Cloud Policy page.
- Which additional content types will audio overview draw on, and do they respect the same permissions as the notebook's other content?
- Are Critique and Debate formats or topic episodes part of the Preview phase, and does either need a licence beyond the Notebooks licence?

<!-- rationale
risk: Medium. The roadmap says audio overview will support sensitivity labels and draw on more content types, but Learn says Copilot Notebooks have no container sensitivity labels and documents no audio-specific switch.
cost: Low. Learn says Copilot Notebooks need a Microsoft Copilot or Copilot Chat licence; no separate audio overview price or meter is published, so the known cost is admin time.
impact: Medium. Users who build notebooks and listen to audio overviews will notice new formats and episodes; the roadmap lists Desktop and Web, and admins notice only through label and governance questions.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls: table / absence: No API or automation is documented for the Copilot Pages and Copilot Notebooks creation control. | Found: Allows or prevents creating and viewing Copilot Pages and Copilot Notebooks ... 0 disables the setting; 1 enables the setting. | Fix: Set controls[0].api to kind 'graph', call 'POST /beta/admin/configurationManagement/configurationMonitors', docs 'https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta'. Add to the note: 'Preview TCM automation uses mode applyOnce and baseline.resources with resourceType microsoft.copilot.copilotpagesnotebooks, resourceVersion 1 and properties.value set to the string 0 (disable) or 1 (enable). TCM supports tenant-level policies only and fails if this setting is configured in a group-level policy. The signed-in user requires AI Administrator; the calling app requires delegated ConfigurationMonitoring.ReadWrite.All and the TCM service principal requires delegated CopilotPolicySettings.ReadWrite.' Cite https://learn.microsoft.com/graph/utcm-copilot-resources alongside the endpoint reference. | Source: https://learn.microsoft.com/graph/utcm-copilot-resources#copilotpagesnotebooks-resource-type
- [contradicted, blocker] Why it matters; Risk assessment: Data exposure / absence: Microsoft has not documented how a sensitivity label on a source file affects its treatment in an audio summary. | Found: If the labels apply encryption from Microsoft Purview Information Protection, Copilot and agents check the usage rights for the user. Then, Copilot and agents return data from an item only if the user is granted permissions to copy (the EXTRACT usage right) from that item. | Fix: Replace the source-file-treatment absence in Why it matters and Risk assessment with: 'Microsoft documents that Copilot checks users' usage rights for source items encrypted by sensitivity labels and returns their data only when the user has the EXTRACT right. Audio overview output label inheritance for these updates is not yet documented.' Cite https://learn.microsoft.com/purview/sensitivity-labels. Keep the narrower question about labels on the generated audio, rather than implying that no source-protection rule is known. | Source: https://learn.microsoft.com/purview/sensitivity-labels#sensitivity-labels-for-microsoft-365-copilot-and-microsoft-365-copilot-chat
- [contradicted, blocker] Governance controls: first paragraph / absence: Cloud Policy is the only documented control that reaches Copilot Notebooks. | Found: Conditional Access applies to the entire app at m365.cloud.microsoft. ... Retention policies ... configured for all SharePoint sites are enforced for all Copilot Pages and Copilot Notebooks. | Fix: Replace 'The only documented control that reaches Copilot Notebooks is the Cloud Policy setting' with 'The Cloud Policy setting controls creation and integration of Copilot Notebooks as a whole.' This removes the false exclusivity without adding control rows. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary
- [contradicted, blocker] Governance controls: second paragraph / absence: Retention behaviour for audio overview output is not described. | Found: All files stored in SharePoint (and SharePoint Embedded) or OneDrive sites can be retained by applying a retention policy or retention label. | Fix: Remove retention from the blanket absence sentence and replace that part with: 'Audio overviews saved to OneDrive fall within Microsoft's documented retention scope: all files stored in SharePoint, SharePoint Embedded or OneDrive sites can be retained by applying a retention policy or retention label.' Cite https://learn.microsoft.com/purview/retention-policies-sharepoint and https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#september-3,-2025, whose release note documents saving Notebook audio overviews to OneDrive. | Source: https://learn.microsoft.com/purview/retention-policies-sharepoint#what's-included-for-retention-and-deletion
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: Learn's requirements page says Copilot Notebooks users need the Microsoft Copilot or Copilot Chat licence. | Found: Users need the Microsoft Copilot or Copilot Chat license. | Fix: Retain the attributed requirements-page statement, but add: 'The preview TCM reference instead says Copilot Notebooks also require a Microsoft 365 Copilot license.' Cite https://learn.microsoft.com/graph/utcm-copilot-resources#copilotpagesnotebooks-resource-type for that conflicting statement. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements
- [supported, minor] Why it matters; Risk assessment: Data exposure and Change & support / behaviour: Audio overview generates a spoken summary from the content and files in a notebook. | Found: Turn the files in your notebook into a dynamic audio overview for an engaging listening experience. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes to sources for the existing audio overview behaviour. Its November 25, 2025 section also calls the output 'audio summaries'. | Source: https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#july-22,-2025
- [supported, minor] Risk assessment: Change & support / behaviour: Learn's compliance summary says no end-user recycle bin exists for Copilot Notebooks. | Found: Recycle bin: No end-user recycle bin exists. Limitation: Neither administrators nor end users can recover individually deleted Copilot Notebooks. | Fix: Replace the recycle-bin bullet's factual premise with: 'Learn's compliance summary says no end-user recycle bin exists, but its storage page says deleted Pages and Notebooks stored in OneDrive can be found in the OneDrive recycle bin; the storage page distinguishes legacy items created before November 2025.' Cite https://learn.microsoft.com/microsoft-365/loop/cpcn-storage and retain the support-staff advice. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary
- [supported, minor] Cost and licensing / cost: Learn says Notebook storage counts toward the organisation's overall SharePoint quota. | Found: Storage counts toward your organization's overall SharePoint quota. | Fix: Replace the storage-cost sentence with: 'The admin policies page says storage counts toward the organisation's SharePoint quota, while the storage page says current Pages and Notebooks count against the user's OneDrive storage limit and reserves the SharePoint-quota statement for legacy items created before November 2025.' Cite https://learn.microsoft.com/microsoft-365/loop/cpcn-storage. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [supported, minor] Scope / behaviour: Learn's compliance summary says Copilot Notebooks are stored in a user-owned SharePoint Embedded container shared with Copilot Pages and Loop My workspace. | Found: Copilot Pages and Copilot Notebooks are stored together in a single user-owned SharePoint Embedded container, which is also shared by Loop My workspace. | Fix: Replace the storage-location clause with: 'Learn's compliance summary says Notebooks share a user-owned SharePoint Embedded container with Copilot Pages and Loop My workspace, but the storage page says current Pages and Notebooks are stored in OneDrive for Business; items created before November 2025 remain in the legacy container.' Cite https://learn.microsoft.com/microsoft-365/loop/cpcn-storage. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-compliance-summary
- [contradicted, minor] Governance guidance: After rollout; Governance controls: table / consistency: The checklist tells readers to review Purview audit search, but the controls table has no audit-search row. | Found: Review Purview audit search for Notebook activity ... The controls table lists only Notebooks creation and a separate audio overview switch. | Fix: Remove the 'Review Purview audit search' checklist instruction, retaining the supported factual statement that Copilot Notebooks create and update .pod files. This resolves the checklist/table mismatch without adding a control row.
-->
