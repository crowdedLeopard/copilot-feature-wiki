---
title: "Microsoft Copilot: CSV and TSV files as knowledge sources in Copilot Notebooks"
slug: "m365-copilot-csv-and-tsv-references-in-copilot-notebooks"
roadmapId: 569210
topic: "m365-copilot"
products: ["OneNote","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Notebooks in OneNote now accept CSV and TSV files as knowledge sources. Microsoft says it is on automatically and needs no action; plan user communication and check the Notebooks creation policy."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft Learn's requirements page says Copilot Notebooks users need the Microsoft Copilot or Copilot Chat licence. Microsoft's preview TCM resource reference instead says Copilot Notebooks also require a Microsoft 365 Copilot license. No licence or price specific to CSV and TSV references is published at the time of writing (November 2026)."
audiences: ["m365-admin","change-adoption","compliance"]
tags: ["onenote","m365-copilot","copilot-notebooks","cloud-policy","file-upload"]
sources:
  - title: "Microsoft 365 Roadmap 569210"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569210"
    kind: "roadmap"
  - title: "MC1519841: Microsoft OneNote: CSV and TSV references in Copilot Notebooks"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1519841"
    kind: "message-center"
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
  - title: "Requirements for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements"
    kind: "learn"
  - title: "Overview of Copilot Pages and Copilot Notebooks storage"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-storage"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/deployoffice/admincenter/overview-cloud-policy"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes#october-27,-2026"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-chat-in-onenote-can-create-edit-and-refine-content","onenote-multimodal-capture-in-copilot-notebooks-windows"]
controls:
  - governs: "Whether users can create and use Copilot Pages and Copilot Notebooks"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Not CSV or TSV specific. Default Enabled. Preview Graph beta: mode=applyOnce, baseline resourceType microsoft.copilot.copilotpagesnotebooks, resourceVersion 1, properties.value 0 disables, 1 enables."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-21"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: CSV and TSV files as knowledge sources in Copilot Notebooks, launched in October 2026 under MC1519841."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: added the preview Microsoft Graph automation for the Notebooks policy, set action to act-now and noted the conflicting licence wording."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: the governance notes no longer call the creation setting the only Cloud Policy setting Learn documents for Notebooks; Learn also lists a code-preview setting."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-21"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "eedd13eb40d0cf36954db411272f6a4a"
---

## What's changing

Copilot Notebooks now accept CSV and TSV files as knowledge sources, so users can bring structured lists and tables into a notebook next to their documents. Copilot then uses that content, together with other referenced content, when it generates presentations, reports, briefs and similar output. The roadmap item covers Microsoft Copilot (Microsoft 365) and OneNote, on Android, Desktop, iOS and Web.

Microsoft's notice MC1519841 (published 2026-10-21) says the feature "will be enabled automatically for tenants that already allow Copilot to reason over CSV and TSV files" and that no additional configuration is required. It gives the rollout as: public preview in Worldwide has completed; general availability in Worldwide began in mid-October 2026 and is expected to complete by late October 2026. The notice sets no act-by date and says no action is required.

The roadmap record lists the item as Launched, with a target date of October CY2026 and a preview date of September CY2026, for Worldwide (Standard Multi-Tenant) only. Microsoft Learn has no page that describes CSV and TSV references in Copilot Notebooks, so what this briefing says about behaviour is the roadmap and notice description; Learn's pages on Copilot Notebooks cover creation policy, requirements and storage.

## Why it matters

This is a default-on widening of what Copilot Notebooks can draw on, and tables are the kind of content that tends to be sensitive: customer lists, finance extracts, headcount exports. Users who add such a file can now ask Copilot to build a presentation or report from it, so the data can end up in generated content that users then circulate. The notice itself recommends that you tell users who work with structured data, which is the main thing to do.

If nobody acts, the notice says the feature arrives on its own in tenants that already allow Copilot to reason over CSV and TSV files. The notice does not name that setting, so confirm which control it refers to before you rely on it as a way to hold the feature back.

## Risk assessment

**Data exposure**
- Copilot uses the data in a CSV or TSV file alongside other referenced content when it generates output (MC1519841), so the contents of an exported table can appear in a generated presentation, report or brief. Review which exports your users keep in OneDrive and SharePoint, because those are the files they are likely to add.
- Existing Notebooks content is not removed when Notebooks creation is disabled: Learn says files added to Notebooks remain available in OneDrive and SharePoint where they are stored.

**Security & identity**
- No change is described to sign-in, roles or connectors: the sources describe two additional file types in an existing feature, not a new connector or agent.

**Autonomy & actions**
- No autonomous behaviour is described. Copilot works from the files a user adds when that user asks it to generate content.

**Change & support**
- Expect questions from users who work with lists and tables, on desktop, web, Android and iOS, under the notice's rollout, which was expected to complete by late October 2026.
- Learn lists two Cloud Policy settings for Copilot Pages and Copilot Notebooks: Create and view Copilot Pages and Copilot Notebooks, which governs creation as a whole, and a code-preview setting. Neither refers to CSV or TSV. Turning Notebooks off to hold back CSV and TSV references also removes the Notebooks module for the users in scope.

## Cost and licensing

Copilot Notebooks requires the Microsoft Copilot or Copilot Chat licence, according to Learn's requirements page for Copilot Pages and Copilot Notebooks (the same page lists Copilot Pages as needing a OneDrive licence). Microsoft's preview Tenant Configuration Management resource reference words this differently: it says Copilot Notebooks also require a Microsoft 365 Copilot license. MC1519841 describes the affected organisations as those with Microsoft 365 Copilot and access to Copilot Notebooks in OneNote.

No separate licence, price or meter for CSV and TSV references is published on that page or in the notice. Indirect costs are user communication and any review of which exported tables users keep. Learn says legacy Copilot Notebooks, created before November 2025, count against the organisation's SharePoint storage quota; that page does not say how CSV or TSV references affect storage.

## Scope

Users: those with access to Copilot Notebooks in OneNote, which MC1519841 describes as organisations with Microsoft 365 Copilot. The roadmap record lists Android, Desktop, iOS and Web as platforms and Worldwide (Standard Multi-Tenant) as the only cloud; Microsoft has not said in these sources whether other clouds will follow.

Rollout: general availability began in mid-October 2026 and is expected to complete by late October 2026 (MC1519841). The notice says the feature is enabled automatically for tenants that already allow Copilot to reason over CSV and TSV files.

Prerequisites: Learn's requirements page lists the Microsoft Copilot or Copilot Chat licence for Copilot Notebooks, and an Exchange Online mailbox for full functionality such as @mentions.

## Governance guidance

### Before rollout
- Tell users who work with structured data that they can reference CSV and TSV files in Copilot Notebooks, as MC1519841 recommends, and ask them to avoid adding exports that hold data they should not put into generated documents.
- Check the Cloud Policy setting Create and view Copilot Pages and Copilot Notebooks in the Microsoft 365 Apps admin center, so you know whether Notebooks is available to each group of users today.
- Ask Microsoft through your support channel which setting the notice means by tenants that "already allow Copilot to reason over CSV and TSV files".

### At rollout
- Confirm with a pilot group on desktop and on a mobile device that a CSV and a TSV file can be added to a notebook, under the notice's rollout, which was expected to complete by late October 2026.
- Brief the service desk on the new file types and on the Notebooks policy, which governs creation as a whole.

### After rollout
- Ask pilot users which files they added and what Copilot produced from them, and feed that into guidance on handling exported tables.
- Re-check Message center and Microsoft Learn for a page on CSV and TSV references in Copilot Notebooks and for the setting the notice refers to.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and use Copilot Pages and Copilot Notebooks</strong><br><small>Tenant</small><br><small class="controls__note">Not CSV or TSV specific. Default Enabled. Preview Graph beta: mode=applyOnce, baseline resourceType microsoft.copilot.copilotpagesnotebooks, resourceVersion 1, properties.value 0 disables, 1 enables.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents the Cloud Policy setting Create and view Copilot Pages and Copilot Notebooks as the creation control. It governs creation and integration of Copilot Pages and Copilot Notebooks, not individual file types. When it is disabled, the Notebooks module is hidden in the Microsoft Copilot app and existing items are not deleted; sharing links to Copilot Notebooks do not work. A change takes up to 90 minutes where policy configurations already exist, and up to 24 hours where none did. It can be scoped to all users or to a group.

MC1519841 refers to tenants that already allow Copilot to reason over CSV and TSV files but does not name the control. It is not a row in the table because its path has not been read; confirm it before you document it as your control for this feature. Microsoft documents preview Microsoft Graph TCM automation for the tenant-level Copilot Pages and Notebooks policy, subject to the restrictions below.

The preview automation works on tenant-level policies in the Microsoft 365 Apps admin center, and the target setting must not be configured in any group-level policy there. The calling app needs delegated ConfigurationMonitoring.ReadWrite.All, the TCM service principal needs delegated CopilotPolicySettings.ReadWrite, and the signed-in user needs the AI Administrator role. Microsoft Graph beta APIs are not supported for production applications.

## Open questions

- Which tenant setting does MC1519841 mean by allowing Copilot to "reason over CSV and TSV files", and where is it in an admin centre? Watch Message center and the Copilot Notebooks pages on Learn.
- How do sensitivity labels and encryption on a CSV or TSV file affect whether Copilot Notebooks can use it? Check the Copilot Notebooks pages on Learn for an update.
- Are there file size, row or column limits for CSV and TSV references, and do they differ by platform? Watch the Learn Copilot Notebooks pages for a limits section.
- Will the feature come to US Government clouds? The roadmap record lists Worldwide only; watch the roadmap item.

<!-- rationale
risk: Medium. Microsoft's notice says the feature is enabled automatically, and CSV and TSV files often hold exported business records that Copilot will now use when generating content.
cost: Low. The requirements page names the Microsoft Copilot or Copilot Chat licence for Copilot Notebooks and no separate licence or meter for CSV or TSV files; the cost is admin and communication time.
impact: Medium. Users who work with structured lists and tables in Copilot Notebooks notice it, on desktop, web, Android and iOS; Microsoft recommends telling those users.
-->
