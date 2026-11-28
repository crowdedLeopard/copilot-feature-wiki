---
title: "Excel: Excel canvas turns workbook data into a Copilot-generated report that refreshes itself"
slug: "excel-excel-canvas"
roadmapId: 569424
topic: "modern-work"
products: ["Excel"]
summary: "Users with Copilot in Excel on Windows and the web can have Copilot build an interactive report of charts, metrics and insights from a workbook. Rolling out now with no admin action required; tell users and check label and audit settings."
status: "rolling-out"
releasePhase: ["Current Channel","General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Copilot in Excel is available to users without the Microsoft 365 Copilot add-on licence (Microsoft 365 Copilot (Basic)) and in full to users with it (Premium). Microsoft has not published which of these includes Excel canvas."
audiences: ["m365-admin","compliance","change-adoption","end-user"]
tags: ["excel","m365-copilot","microsoft-365-apps","privacy","group-policy","sensitivity-labels","auditing"]
sources:
  - title: "Microsoft 365 Roadmap 569424"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569424"
    kind: "roadmap"
  - title: "MC1485411: Microsoft Excel: Excel canvas"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1485411"
    kind: "message-center"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Use policy settings to manage privacy controls for Microsoft 365 Apps for enterprise"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    kind: "learn"
  - title: "Privacy controls available for Office products"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/products-versions-privacy-controls"
    kind: "learn"
  - title: "Manage sensitivity labels in Office apps"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    kind: "learn"
  - title: "Minimum versions for sensitivity labels in Microsoft 365 Apps"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-versions"
    kind: "learn"
  - title: "Audit logs for Copilot and AI applications"
    url: "https://learn.microsoft.com/purview/audit-copilot"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Microsoft Copilot reporting options for admins"
    url: "https://learn.microsoft.com/copilot/manage/copilot-admin-reports"
    kind: "learn"
  - title: "Microsoft Copilot usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage"
    kind: "learn"
  - title: "Searching audit records of Copilot interactions, including those in Excel (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
videos: []
related: ["m365-copilot-excel-agent","m365-copilot-agent-mode-in-excel","microsoft-purview-use-sensitivity-labels-to-block-all-connected-experiences-that-analyze-c","auditing","cloud-policy"]
controls:
  - governs: "Tenant-wide switch for Excel canvas alone"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft documents no Excel canvas-specific setting at the time of writing (November 2026). Use the Copilot in Excel controls below."
  - governs: "Whether Copilot features, Excel canvas included, are available in Excel on Windows"
    scope: "user"
    ui:
      surface: "Group Policy Management"
      path: "User Configuration > Policies > Administrative Templates > Microsoft Office 2016 > Privacy > Trust Center > Allow the use of connected experiences in Office that analyze content"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    api:
      kind: "other"
      call: "Registry value UserContentDisabled set to 2 (Disabled) under HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\office\\16.0\\common\\privacy"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    note: "When disabled, Microsoft Copilot features are not available in Excel, OneNote, Outlook, PowerPoint and Word. If not configured, these experiences are available."
  - governs: "Whether workbooks with a given sensitivity label are excluded from Copilot in Excel on supported clients"
    scope: "other"
    ui: null
    api:
      kind: "powershell"
      call: "Set-Label -Identity <label GUID> -AdvancedSettings @{BlockContentAnalysisServices=\"True\"}"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    note: "Not in the Microsoft Purview portal. Not available for Excel for the web; on Windows, rolling out to Current Channel and Monthly Enterprise Channel version 2606 and later."
  - governs: "Searching audit records of Copilot interactions, including those in Excel"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Audit > Search > Workloads > Copilot"
      docs: "https://learn.microsoft.com/copilot/manage/copilot-admin-reports"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <date> -EndDate <date> -Operations CopilotInteraction"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "Needs a role that can search audit logs, such as Audit Reader. Records from Excel carry the AppHost value Excel."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-15T22:47:30"
changes:
  - date: "2026-11-28"
    note: "New briefing: Excel canvas rolling out per MC1485411, with the Copilot in Excel privacy, label and audit controls that govern it."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 57 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: the label setting is now qualified as not available for Excel for the web and still rolling out to Windows version 2606 and later; licensing model set to included; minor wording fixes."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 68 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 67
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "8929e5fa3439213981431ebdf6d72d8c"
---

## What's changing

Excel canvas is a new Copilot capability in Excel that builds an interactive report from the data in a workbook. Microsoft's notice MC1485411 describes it as a report that combines key visualisations, metrics and insights in a single view, which refreshes automatically when the underlying workbook data changes. Users can then refine the report by asking Copilot for changes in natural language.

Microsoft Learn does not describe Excel canvas at the time of writing (November 2026), so what follows about its behaviour comes from the roadmap item and MC1485411. Neither says where a canvas is saved, whether it can be shared separately from the workbook, or what happens to it when the workbook is copied.

The roadmap item is **Rolling out**, with a target of September CY2026, for Excel on Desktop and Web in Current Channel, at General Availability, in the Worldwide (Standard Multi-Tenant) cloud. MC1485411 gives a later window: worldwide rollout begins in mid-October 2026 and is expected to complete by the end of October 2026, for Microsoft Excel for Windows and Microsoft Excel Online. The post sets no act-by date and says no action is required to prepare; Microsoft recommends notifying users and updating internal training or adoption materials for Copilot in Excel.

## Why it matters

Excel canvas changes how workbook data leaves the grid: a user who could already ask Copilot to analyse a sheet now gets a polished report that keeps itself current. Expect such reports to be screenshotted, presented and forwarded as if they were checked dashboards. Microsoft's Copilot privacy page warns that generative AI responses aren't guaranteed to be 100% factual, so the insight text on a canvas carries the same caveat as any Copilot answer, but it now arrives in a format that looks finished.

If nobody acts, the capability reaches users who already have Copilot in Excel, according to MC1485411, which describes no admin step. There is no Excel canvas switch of its own documented; the levers are the controls that already govern Copilot in Excel: the connected-experiences privacy policy on Windows, the sensitivity label setting that keeps labelled files away from Copilot in Office apps on supported client versions (it is not available for Excel for the web), and the Copilot audit records.

## Risk assessment

**Data exposure**
- The roadmap describes a canvas built from workbook data. Microsoft's [Copilot privacy page](https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy) states that Copilot only surfaces organisational data to which the user has at least view permissions.
- A label with the BlockContentAnalysisServices advanced setting excludes labelled content from Microsoft 365 Copilot in Word, Excel, PowerPoint and Outlook; the Purview page notes that the same content remains available to Copilot in Teams and Copilot Chat. This setting depends on supported client versions and is not available for Excel for the web. For Windows, preventing all connected experiences that analyse content is rolling out to Current Channel version 2606 and later and Monthly Enterprise Channel version 2606 and later ([minimum versions for sensitivity labels](https://learn.microsoft.com/purview/sensitivity-labels-versions)).
- Where a canvas is stored, and who can see it when the workbook is shared, is not described by Microsoft (see Open questions).

**Security & identity**
- No change described: the roadmap item and MC1485411 present Excel canvas as part of Copilot in Excel, used by the signed-in user on their own workbook.

**Autonomy & actions**
- The report refreshes automatically when workbook data changes, per the roadmap item. A canvas built on a linked or regularly updated workbook can therefore show new figures and new generated insights without the user re-reading them.

**Change & support**
- Users will ask why a report's insights changed after a data update, and whether the report can be trusted for decisions. Plan training content before the questions reach the help desk, as MC1485411 recommends.

## Cost and licensing

**Licence.** Microsoft's Copilot overview page describes two ways to have Copilot in Excel: Microsoft 365 Copilot (Basic), for users who don't have the Microsoft 365 Copilot add-on licence but can use Copilot in Word, Excel, PowerPoint and OneNote, and Microsoft 365 Copilot (Premium), for users who have the add-on licence and get the full experience of Copilot in those apps. Some features in both are subject to fair use limits. MC1485411 says the change affects users with access to Copilot in Microsoft Excel. Which of the two tiers includes Excel canvas is not yet published.

**Meter.** Neither the roadmap item nor MC1485411 mentions a meter or Copilot Credits for Excel canvas.

**Indirect costs.** Admin time to review label settings and audit searches, and adoption time to update Copilot in Excel training, which MC1485411 recommends.

## Scope

- **Users:** users with access to Copilot in Microsoft Excel (MC1485411). Which Copilot tier is needed is not yet published.
- **Platforms:** Desktop and Web on the roadmap item; Microsoft Excel for Windows and Microsoft Excel Online in MC1485411. Mac is not listed in either.
- **Release:** Current Channel, General Availability (roadmap item).
- **Clouds:** Worldwide (Standard Multi-Tenant) on the roadmap item. GCC, GCC High and DoD are not listed.
- **Rollout:** mid-October 2026 to the end of October 2026 (MC1485411); roadmap target September CY2026.
- **Prerequisites:** Copilot features in Excel on Windows depend on the *Allow the use of connected experiences in Office that analyze content* policy setting not being disabled.

## Governance guidance

### Before rollout
- Decide which sensitivity labels should exclude their workbooks from Copilot in Office apps, and set the BlockContentAnalysisServices advanced setting on those labels with Set-Label in Security & Compliance PowerShell. This setting depends on supported client versions and is not available for Excel for the web; for Windows it is rolling out to Current Channel version 2606 and later and Monthly Enterprise Channel version 2606 and later.
- Check whether Group Policy or the registry already disables *Allow the use of connected experiences in Office that analyze content* for any user groups, because that also removes Copilot, and with it Excel canvas, from Excel on Windows.
- Brief the owners of finance and HR workbooks that a canvas refreshes itself when the data changes.

### At rollout
- Notify Copilot in Excel users of the new report capability, as MC1485411 recommends. Tell users to check generated insights before reuse.
- Update internal Copilot in Excel training and adoption material to cover canvases.

### After rollout
- Search the Microsoft Purview audit log for CopilotInteraction records with the Excel AppHost to see Copilot in Excel use.
- Watch Message center and the roadmap item for documentation of where canvases are stored and how they are shared.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for Excel canvas alone</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft documents no Excel canvas-specific setting at the time of writing (November 2026). Use the Copilot in Excel controls below.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot features, Excel canvas included, are available in Excel on Windows</strong><br><small>User</small><br><small class="controls__note">When disabled, Microsoft Copilot features are not available in Excel, OneNote, Outlook, PowerPoint and Word. If not configured, these experiences are available.</small></td><td data-label="Admin UI"><strong>Group Policy Management</strong><br>User Configuration › Policies › Administrative Templates › Microsoft Office 2016 › Privacy › Trust Center › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value UserContentDisabled set to 2 (Disabled) under HKEY_CURRENT_USER\Software\Policies\Microsoft\office\16.0\common\privacy</code> <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether workbooks with a given sensitivity label are excluded from Copilot in Excel on supported clients</strong><br><small class="controls__note">Not in the Microsoft Purview portal. Not available for Excel for the web; on Windows, rolling out to Current Channel and Monthly Enterprise Channel version 2606 and later.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;label GUID&gt; -AdvancedSettings @{BlockContentAnalysisServices=&quot;True&quot;}</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-office-apps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Searching audit records of Copilot interactions, including those in Excel</strong><br><small>Tenant</small><br><small class="controls__note">Needs a role that can search audit logs, such as Audit Reader. Records from Excel carry the AppHost value Excel.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Audit › Search › Workloads › Copilot <a href="https://learn.microsoft.com/copilot/manage/copilot-admin-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;date&gt; -EndDate &lt;date&gt; -Operations CopilotInteraction</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- Microsoft documents no switch specific to Excel canvas at the time of writing (November 2026). Every control in the table governs Copilot in Excel as a whole, so using one affects Copilot features in Excel generally, not only canvases.
- The connected-experiences policy can also be deployed through [Cloud Policy](https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy) instead of Group Policy. Microsoft's Copilot privacy page states its effect on Copilot for Excel on Windows, Mac, iOS and Android when running the most current version of these apps. For Office for the web, Microsoft's product list gives one privacy control, *Allow the use of additional optional connected experiences in Office*, and the analyse-content policy is not among the controls it lists for Excel for the web.
- The label setting has no Microsoft Purview portal option; it is set only in Security & Compliance PowerShell. It is not available for Excel for the web. Labelled content stays available to Copilot in Teams and Copilot Chat.
- Searching the audit log needs a role such as Audit Reader. Copilot in Excel usage also appears in the [Microsoft Copilot usage report](https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage), which counts all Copilot in Excel features.

## Open questions

- Which Copilot tier includes Excel canvas: Microsoft 365 Copilot (Basic), Premium, or both? Watch the Copilot overview page and MC1485411.
- Where is a canvas saved: inside the workbook file or as a separate item, and does it follow the workbook's sharing permissions and sensitivity label?
- Does generating or refreshing a canvas write its own audit record, or only the CopilotInteraction record with the Excel AppHost?
- Which control applies to Copilot in Excel for the web, given that the analyse-content policy is not available for Office for the web?
- Will Excel canvas reach Excel for Mac, which neither the roadmap item nor MC1485411 lists?

<!-- rationale
risk: Medium. Excel canvas presents workbook data as a finished-looking, self-refreshing report written by Copilot. It reaches users without an admin switch of its own, so the existing Copilot privacy, label and audit controls are what govern it.
cost: Low. The known cost is user communication and training. Copilot in Excel comes with or without the Microsoft 365 Copilot add-on licence, and Microsoft has not published which of those includes Excel canvas.
impact: Medium. Microsoft says it affects users with access to Copilot in Excel. Analysts and report owners who build summaries from workbooks are the people most likely to notice it.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Security & identity / behaviour: The roadmap and MC1485411 present canvas as used by the signed-in user on their own workbook. | Found: Searched: Copilot Excel signed-in identity permissions current workbook; Copilot Excel signed in workbook analyze data user. Read roadmap, MC1485411, Copilot privacy and audit-copilot; the records do not specify this identity or workbook-ownership mechanism. | Fix: Replace the Security & identity bullet with: 'No identity change is described in the roadmap item or MC1485411; both present Excel canvas as part of Copilot in Excel.'
-->
