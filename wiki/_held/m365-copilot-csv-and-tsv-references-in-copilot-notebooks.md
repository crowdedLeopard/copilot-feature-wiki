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
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn's requirements page says Copilot Notebooks users need the Microsoft Copilot or Copilot Chat licence. No licence or price specific to CSV and TSV references is published at the time of writing (November 2026)."
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
videos: []
related: ["m365-copilot-copilot-chat-in-onenote-can-create-edit-and-refine-content","onenote-multimodal-capture-in-copilot-notebooks-windows"]
controls:
  - governs: "Whether users can create and use Copilot Pages and Copilot Notebooks"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api: null
    note: "Governs Notebooks as a whole, not CSV or TSV files. Default Enabled. Scope to all users or a group; changes take up to 90 minutes, or 24 hours with no earlier configuration."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: CSV and TSV files as knowledge sources in Copilot Notebooks, launched in October 2026 under MC1519841."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 49
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "81fd96aca5d6e8ab1c75f43f29dbd6ef"
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
- Expect questions from users who work with lists and tables, on desktop, web, Android and iOS, as the feature reaches them through late October 2026 under the notice's rollout.
- The Cloud Policy settings Learn documents for Notebooks govern creation of Copilot Pages and Copilot Notebooks as a whole; neither listed setting refers to CSV or TSV. Turning Notebooks off to hold back CSV and TSV references also removes the Notebooks module for the users in scope.

## Cost and licensing

Copilot Notebooks requires the Microsoft Copilot or Copilot Chat licence, according to Learn's requirements page for Copilot Pages and Copilot Notebooks (the same page lists Copilot Pages as needing a OneDrive licence). MC1519841 describes the affected organisations as those with Microsoft 365 Copilot and access to Copilot Notebooks in OneNote.

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
- Confirm with a pilot group on desktop and on a mobile device that a CSV and a TSV file can be added to a notebook, as general availability reaches the tenant by late October 2026.
- Brief the service desk on the new file types and on the Notebooks policy, which governs creation as a whole.

### After rollout
- Ask pilot users which files they added and what Copilot produced from them, and feed that into guidance on handling exported tables.
- Re-check Message center and Microsoft Learn for a page on CSV and TSV references in Copilot Notebooks and for the setting the notice refers to.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and use Copilot Pages and Copilot Notebooks</strong><br><small>Tenant</small><br><small class="controls__note">Governs Notebooks as a whole, not CSV or TSV files. Default Enabled. Scope to all users or a group; changes take up to 90 minutes, or 24 hours with no earlier configuration.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The one control Learn documents for Notebooks is the Cloud Policy setting Create and view Copilot Pages and Copilot Notebooks. It governs creation and integration of Copilot Pages and Copilot Notebooks, not individual file types. When it is disabled, the Notebooks module is hidden in the Microsoft Copilot app and existing items are not deleted; sharing links to Copilot Notebooks do not work. A change takes up to 90 minutes where policy configurations already exist, and up to 24 hours where none did. It can be scoped to all users or to a group.

MC1519841 refers to tenants that already allow Copilot to reason over CSV and TSV files but does not name the control. It is not a row in the table because its path has not been read; confirm it before you document it as your control for this feature. Microsoft Learn documents no API for the Cloud Policy settings at the time of writing (November 2026).

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

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls table and prose / absence: Microsoft Learn documents no API for the Cloud Policy setting that controls Copilot Pages and Notebooks creation. | Found: These resources also support remediation and applyOnce. The 20 Copilot resources are Office Cloud Policy Service (OCPS) settings. TCM supports these settings only in tenant-level policies in the Microsoft 365 Apps admin center. | Fix: Replace controls[0].api with kind 'graph', call 'POST /beta/admin/configurationManagement/configurationMonitors', docs 'https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta', and update the rendered API cell. Add to the row note: 'Preview automation uses mode=applyOnce and an inline baseline resource with resourceType=microsoft.copilot.copilotpagesnotebooks, resourceVersion=1 and properties.value="0" to disable or "1" to enable. Global service only; tenant-level policies only, and the target setting must not be configured in any group-level policy. The calling app needs delegated ConfigurationMonitoring.ReadWrite.All, the TCM service principal needs delegated CopilotPolicySettings.ReadWrite, and the signed-in user needs AI Administrator. Microsoft Graph beta APIs are not supported for production applications.' Replace the final sentence of Governance controls with 'Microsoft documents preview Microsoft Graph TCM automation for the tenant-level Copilot Pages and Notebooks policy, subject to the restrictions in the table.' Cite the operation page, https://learn.microsoft.com/graph/utcm-copilot-resources#copilotpagesnotebooks-r… | Source: https://learn.microsoft.com/graph/utcm-copilot-resources
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Change & support; Scope; Governance guidance: At rollout / date: Microsoft expected general availability rollout to complete by late October 2026. | Found: Rollout began in mid-October 2026 and is expected to complete by late October 2026. | Fix: Keep the notice's qualification everywhere. Replace 'as general availability reaches the tenant by late October 2026' with 'under the notice's rollout, which was expected to complete by late October 2026'. Replace 'as the feature reaches them through late October 2026 under the notice's rollout' with 'under the notice's rollout, which was expected to complete by late October 2026'.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The control is in Microsoft 365 Apps admin center under Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks. | Found: Select Customization from the left pane. Select Policy Management. Create a new policy configuration or edit an existing one. From the Choose the scope dropdown list, choose either All users or select the group | Fix: Keep the path. Add https://learn.microsoft.com/deployoffice/admincenter/overview-cloud-policy to sources: it explicitly identifies config.office.com as the Microsoft 365 Apps admin center; the cited control page supplies the remaining steps and setting. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [supported, minor] front matter: licensing.notes; Cost and licensing; Scope; rationale: cost / licensing: Learn's requirements page says Copilot Notebooks users need the Microsoft Copilot or Copilot Chat licence. | Found: Users need the Microsoft Copilot or Copilot Chat license. | Fix: Keep the attribution to the requirements page. Add: 'Microsoft's preview TCM resource reference instead says Copilot Notebooks also require a Microsoft 365 Copilot license.' Cite https://learn.microsoft.com/graph/utcm-copilot-resources#copilotpagesnotebooks-resource-type so readers can see the conflicting licensing wording. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-requirements
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Users ask Copilot questions within a Notebook and Copilot uses its referenced context in responses. | Found: Add related chats, references, and generated content to the Notebook. Ask Copilot questions within the Notebook to use its accumulated context. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/release-notes#october-27,-2026 to sources for the statement about users asking Copilot to use Notebook context. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes#october-27,-2026
- [contradicted, minor] front matter: action / consistency: The action rating prepare fits a launched, automatically enabled change rated medium risk with a documented availability control. | Found: action: "prepare"; risk: "medium"; status: "launched". The notice says the feature is enabled automatically, and the page documents the Notebooks creation control. | Fix: Set action to 'act-now': the assessment scale includes launched changes that reach users automatically and have medium risk plus a control or governance decision. Keep the notice's separate statement that Microsoft requires no action.
-->
