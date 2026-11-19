---
title: "Microsoft Purview: auto-labeling policies will cover legacy .doc, .xls and .ppt files"
slug: "microsoft-purview-information-protection-auto-labeling-for-legacy-office-files"
roadmapId: 574363
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to extend Purview service-side auto-labeling to .doc, .xls and .ppt files in SharePoint and OneDrive. New policies cover them automatically; existing policies need an edit and a rerun."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "November CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn lists service-side auto-labeling as included with Microsoft 365 E5, Microsoft 365 E5 Compliance, Microsoft 365 E5 Information Protection & Governance and Azure Information Protection Premium P2 (standalone). No licence or price specific to legacy formats is published at the time of writing (November 2026)."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","auto-labeling","sensitivity-labels","information-protection","sharepoint","onedrive"]
sources:
  - title: "Microsoft 365 Roadmap 574363"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574363"
    kind: "roadmap"
  - title: "MC1530948: Microsoft Purview | Information Protection: Auto-labeling support for legacy Microsoft Office file formats"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1530948"
    kind: "message-center"
  - title: "Automatically apply a sensitivity label to Microsoft 365 data"
    url: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    kind: "learn"
  - title: "Set-AutoSensitivityLabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
videos: []
related: ["microsoft-purview-information-protection-auto-labeling-per-policy-coverage-report","microsoft-purview-auto-labeling-scalability-policy-management-and-reporting-enhancements","auditing"]
controls:
  - governs: "Whether an auto-labeling policy runs in simulation or enforces labels"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > Turn on policy"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Set-AutoSensitivityLabelPolicy -Identity <AutoLabelingPolicyName> -Mode Enable"
      docs: "https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy"
    note: "TestWithoutNotifications keeps the policy in test mode. Turning on needs Compliance Administrator or Compliance Data Administrator."
  - governs: "Which SharePoint and OneDrive locations an auto-labeling policy covers"
    scope: "site"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > Edit policy > Choose locations where you want to apply the label"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Set-AutoSensitivityLabelPolicy -Identity <AutoLabelingPolicyName> -AddSharePointLocation <SharePointSiteLocation>"
      docs: "https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy"
    note: "Use -AddOneDriveLocation for OneDrive locations. On Choose locations where you want to apply the label, select and specify SharePoint and OneDrive locations."
  - governs: "The edit that the notice says existing policies need before they evaluate legacy files"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > Edit policy"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Set-AutoSensitivityLabelPolicy -Identity <AutoLabelingPolicyName> -Comment <text>"
      docs: "https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy"
    note: "MC1530948 gives a comment edit followed by another policy run as the example. Whether the PowerShell -Comment edit restarts the crawl is not stated."
  - governs: "Whether auditing is on, which the Learn page requires for simulation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "Run in Exchange Online PowerShell. Needs the Audit Logs role in Exchange Online."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: covers the notice's rollout window, the edit-and-rerun step for existing policies, and the controls that govern auto-labeling policies."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: replaced the supported-formats sentence with what Learn lists, removed the encryption-prerequisite doubt, added the Choose locations wizard page to the locations path, and trimmed checklist steps with no control row."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 72 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-19"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 72
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "cfeccbf69a37d7f636610bdb2199575c"
---

## What's changing

Microsoft plans to add the legacy Office formats Word (.doc), Excel (.xls) and PowerPoint (.ppt) to Microsoft Purview service-side auto-labeling, so that auto-labeling policies can evaluate and apply sensitivity labels to these files in SharePoint and OneDrive. Microsoft's notice MC1530948 says the formats will be supported in both simulation and enforcement.

The notice describes two cases. New auto-labeling policies automatically support the formats. Existing policies need a small edit and another policy run to restart the crawl so that legacy files are evaluated; the notice gives the example of adding or removing a policy comment, saving the change and running the policy again. The notice sets no act-by date and shows an end date of 2026-12-27.

The notice gives the rollout as Public Preview beginning in early November 2026 and expected to complete by mid-November 2026, then General Availability beginning in late November 2026 and expected to complete by late November 2026. The roadmap record still shows the item as In development, with preview and general availability targeted for November CY2026, for Worldwide (Standard Multi-Tenant) on Web. The dates are Microsoft's targets.

At the time of writing (November 2026), the Learn page on auto-labeling policies lists Word (.docx), PowerPoint (.pptx), Excel (.xlsx) and PDF files as supported for SharePoint and OneDrive and does not mention legacy formats. What follows about this change is therefore the roadmap's and the notice's description.

## Why it matters

This widens what an auto-labeling policy can reach. The Learn page currently lists Word (.docx), PowerPoint (.pptx), Excel (.xlsx) and PDF files as supported for SharePoint and OneDrive. After rollout, new policies include the legacy formats from the start, and existing policies include them once someone edits and reruns them.

If nobody acts, the notice says existing policies need the edit and rerun to evaluate legacy files, so they stay as they are; new policies are the ones that pick the formats up automatically. We recommend treating this as a deliberate decision per policy: choose which existing policies to extend, and run each in simulation first, as the notice advises, because enforcement then labels files that were not previously in scope.

## Risk assessment

**Data exposure**

- Legacy files in the SharePoint and OneDrive locations a policy already covers become evaluable once the policy is new or has been edited and rerun, so labels will follow the policy's rules for a pool of files that was not in scope before. Review the locations in the policy and the simulation results before turning it on (see the controls table).
- Where the label applies encryption, the Learn page requires **Assign permissions now** and **User access to content expires** set to **Never** for SharePoint and OneDrive content.

**Security & identity**

- Turning a policy on after simulation needs the **Compliance Administrator** or **Compliance Data Administrator** role, and viewing file contents in the simulation source view needs the **Data Classification Content Viewer** role. Plan who holds each before the rollout window.

**Autonomy & actions**

- Auto-labeling policies run continuously until they are deleted, so labels are applied without a user acting. The Learn page says new and modified files are included with the current policy settings.
- The Learn page gives an absolute maximum of 500,000 automatically labelled SharePoint and OneDrive files per tenant per day, in aggregate across all auto-labeling policies. Extending coverage to older files widens the pool a policy can label, so watch progress against that ceiling.

**Change & support**

- The notice targets both public preview and general availability for November 2026, and the roadmap still says In development. Expect the Learn page and portal behaviour to change during that period.
- Simulation can take 12 hours to complete according to the Learn page, so schedule the edit-and-rerun step ahead of any change window.

## Cost and licensing

**Licence.** The Learn page on auto-labeling lists service-side auto-labeling (SharePoint, OneDrive, Exchange) as included with the same SKUs as client-side auto-labeling: Microsoft 365 E5, Microsoft 365 E5 Compliance, Microsoft 365 E5 Information Protection & Governance and Azure Information Protection Premium P2 (standalone). It also says auto-labeling of files and emails isn't included with E3 or Business Premium.

**Meter.** Neither the notice nor the Learn page names a meter for legacy formats.

**Indirect cost.** Admin time to review policies, edit each existing policy you want to extend, rerun it and review simulation results. The throughput ceiling of 500,000 automatically labelled SharePoint and OneDrive files per tenant per day applies in aggregate across all policies.

**Not yet published.** A licence, price or meter specific to legacy file formats.

## Scope

**Who and what.** The notice says organisations using Microsoft Purview service-side auto-labeling policies for files stored in SharePoint and OneDrive are affected. It names .doc, .xls and .ppt files; it does not mention Exchange.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform.

**Rollout.** Public Preview from early November 2026 and General Availability from late November 2026, per notice MC1530948. Existing policies need an edit and a rerun; new policies do not.

**Prerequisites.** The Learn page's pre-flight checklist lists auditing turned on (required for simulation) and sensitivity labels enabled for Office files in SharePoint and OneDrive, and says that to label files the label scope must include **Files & other data assets**. It also says auto-labeling isn't available in all regions because of a backend Azure dependency, and that the **Auto-labeling** page isn't visible in the Microsoft Purview portal if the tenant can't support it.

## Governance guidance

### Before rollout

- List your existing auto-labeling policies and the SharePoint and OneDrive locations each covers (Microsoft Purview portal > Solutions > Information Protection > Policies > Auto-labeling policies), and decide which should evaluate legacy files.
- Confirm that auditing is on, because the Learn page requires it for simulation.

### At rollout

- Create any new policy in simulation mode first and review the results before enabling it, as the notice advises.
- For each existing policy you chose to extend, make the small edit the notice describes (for example adding or removing the comment), save it, then run the policy again to restart the crawl.
- Review the **Items to review** results for the legacy files that matched, then use **Turn on policy** only when they match your intent.

### After rollout

- Compare the labelling progress against the 500,000 files per tenant per day ceiling the Learn page gives.
- Re-read the Learn page on auto-labeling and Message center for updates to the supported formats, as the page does not yet describe them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an auto-labeling policy runs in simulation or enforces labels</strong><br><small>Tenant</small><br><small class="controls__note">TestWithoutNotifications keeps the policy in test mode. Turning on needs Compliance Administrator or Compliance Data Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › Turn on policy <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AutoSensitivityLabelPolicy -Identity &lt;AutoLabelingPolicyName&gt; -Mode Enable</code> <a href="https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint and OneDrive locations an auto-labeling policy covers</strong><br><small>Site</small><br><small class="controls__note">Use -AddOneDriveLocation for OneDrive locations. On Choose locations where you want to apply the label, select and specify SharePoint and OneDrive locations.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › Edit policy › Choose locations where you want to apply the label <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AutoSensitivityLabelPolicy -Identity &lt;AutoLabelingPolicyName&gt; -AddSharePointLocation &lt;SharePointSiteLocation&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>The edit that the notice says existing policies need before they evaluate legacy files</strong><br><small>Tenant</small><br><small class="controls__note">MC1530948 gives a comment edit followed by another policy run as the example. Whether the PowerShell -Comment edit restarts the crawl is not stated.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › Edit policy <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AutoSensitivityLabelPolicy -Identity &lt;AutoLabelingPolicyName&gt; -Comment &lt;text&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchange/set-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether auditing is on, which the Learn page requires for simulation</strong><br><small>Tenant</small><br><small class="controls__note">Run in Exchange Online PowerShell. Needs the Audit Logs role in Exchange Online.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

All four controls already exist for auto-labeling policies; they are the controls an administrator uses to govern the legacy-format change, and none is specific to it. The notice describes the edit-and-rerun step in terms of the portal; the PowerShell rows are the cmdlet reference's parameters, and which of them restarts the crawl for legacy files is not stated.

The cmdlet reference states that Set-AutoSensitivityLabelPolicy is available only in Security & Compliance PowerShell. Turning a policy from **Ready to turn on** to **On** needs the **Compliance Administrator** or **Compliance Data Administrator** role; without one of them, the **Turn on policy** button appears greyed out.

## Open questions

- Does editing an existing policy through PowerShell (for example the Set-AutoSensitivityLabelPolicy -Comment parameter) restart the crawl in the same way as the portal edit the notice describes? Watch the Learn auto-labeling page and MC1530948.
- Will Microsoft publish any licence or meter specific to legacy formats, or does the existing Microsoft 365 E5-tier entitlement cover them? Watch the Learn auto-labeling page and Message center.
- Does a policy offer a way to include or exclude individual legacy formats? Watch the Learn auto-labeling page.
- When will the roadmap status move from In development, given that the notice describes preview beginning in early November 2026? Watch the roadmap item.

<!-- rationale
risk: Medium. Once a policy covers legacy files, enforcement can label older files at scale; Microsoft's notice advises running a new or updated policy in simulation and reviewing the results before enabling it.
cost: Low. Learn lists service-side auto-labeling as included with Microsoft 365 E5-tier licences, and no separate licence or meter for legacy formats is published; the known cost is admin time to edit and rerun policies.
impact: Medium. People who own legacy files in the SharePoint sites and OneDrive accounts a policy covers may find them labelled; users outside those locations are not affected by the notice.
-->
