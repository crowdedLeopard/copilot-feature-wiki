---
title: "Microsoft Purview: per-policy coverage report for auto-labeling"
slug: "microsoft-purview-information-protection-auto-labeling-per-policy-coverage-report"
roadmapId: 568935
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview adds a View coverage report to auto-labeling policies that shows labeled, pending and failed files against the latest simulation. Microsoft says no action is required, though it suggests updating runbooks."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for the report itself. Microsoft Learn lists service-side auto-labeling (SharePoint, OneDrive, Exchange) with Microsoft 365 E5, E5 Compliance, E5 Information Protection & Governance and Azure Information Protection Premium P2."
audiences: ["compliance","m365-admin","security"]
tags: ["purview","information-protection","sensitivity-labels","auto-labeling","monitoring"]
sources:
  - title: "Microsoft 365 Roadmap 568935"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568935"
    kind: "roadmap"
  - title: "Automatically apply a sensitivity label to Microsoft 365 data"
    url: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    kind: "learn"
  - title: "Get-AutoSensitivityLabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-autosensitivitylabelpolicy"
    kind: "learn"
  - title: "MC1456609"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1456609"
    kind: "message-center"
videos: []
related: ["microsoft-purview-data-loss-prevention-data-security-for-non-microsoft-connected-apps","microsoft-purview-information-protection-sensitivity-labels-for-microsoft-entra-security-g"]
controls:
  - governs: "Opening the per-policy coverage report"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Policies > Auto-labeling policies > policy > Coverage > View coverage"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api: null
    note: "Policy must include SharePoint or OneDrive, have completed simulation and be turned on. Learn lists review-page roles; none stated for coverage alone. Preview label on Learn."
  - governs: "Per-policy labeling activity and progress (today's alternative to coverage)"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > View details"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api:
      kind: "powershell"
      call: "Get-AutoSensitivityLabelPolicy -Identity \"<policy name>\" -IncludeProgressFeedback"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-autosensitivitylabelpolicy"
    note: "Security & Compliance PowerShell only. Shows labeling progress, not the comparison with simulation. Roles: Compliance Administrator, Compliance Data Administrator, Information Protection Admin or Information Protection Analyst."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-18"
    note: "New briefing on the Purview auto-labeling per-policy coverage report (View coverage), covering rollout, the 30-day window and the preview label on Learn."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 66 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: removed unsupported read-only and end-user claims, stated that Learn gives no separate permissions for View coverage, added Solutions to the View details path and dropped the simulation-running checklist step."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "85a3ef2c24a3fec941c6e71047de2016"
---

## What's changing

Microsoft Purview Information Protection gains a per-policy coverage report for auto-labeling policies. After a policy has been turned on following a simulation run, a **View coverage** action appears in the **Coverage** column of the auto-labeling policy list. The report compares what enforcement has done with the latest simulation run.

Microsoft's notice MC1456609 says the report shows files that were labeled, files still being processed and files that need attention, including files deleted or modified after the simulation and files where applying the label failed. Microsoft Learn describes the report's areas as **Observed files**, **Labeled during enforcement**, **Not labeled during enforcement**, **Found in simulation**, **No simulation match found**, **Pending**, **Not yet attempted** and **Failed to apply label**. Selecting a bucket opens a file list with details such as file name, location, workload, label, last activity time, status and failure reason where available.

Microsoft Learn says the report covers SharePoint and OneDrive files, and that **View coverage** can be hidden if the policy is not turned on or simulation completion information is missing. Learn also says an Exchange-only policy is unsupported, and that rerunning such a policy in simulation does not enable file coverage. Coverage is available for 30 days after the latest simulation run; after that a new simulation run is needed.

The roadmap record lists the item as Launched, with a target of October CY2026, a preview date of September CY2026, and release phases General Availability and Preview, for Worldwide (Standard Multi-Tenant) on the web. MC1456609 (updated 28 September 2026) gives Public Preview from early September to mid-September 2026 and General Availability (Worldwide) from early October to the end of October 2026. The Learn page labels **Coverage by simulation context** as preview at the time of writing (November 2026), so the roadmap and Learn differ on whether it is generally available.

## Why it matters

The report compares enforcement with the latest simulation, so it is the page to check when asking whether a policy is doing what the simulation predicted. It is useful for explaining to a data owner why a file is still unlabelled, or why a file turned up that the simulation never saw.

Because Microsoft says no action is required, the report appears on its own. The wiki's view is that the work is operational: tell the people who monitor auto-labeling about the 30-day window, and avoid treating the numbers as an audit total, because Learn says the report is not an all-time policy total and is not intended to be an exact reconciliation between simulation and enforcement.

## Risk assessment

**Data exposure**
- The report lists files by name, location, label and status, so it reveals which files hold labelled or unlabelled content. Learn lists Compliance Administrator, Compliance Data Administrator, Information Protection Admin and Information Protection Analyst for the per-policy review pages but does not separately state the permissions required for View coverage.

**Security & identity**
- Microsoft describes the report as monitoring auto-labeling enforcement outcomes. Learn states that a simulation match does not confirm that a label was applied, so do not use "found in simulation" as evidence of protection.

**Autonomy & actions**
- No change: Microsoft's notice describes the report as monitoring and does not describe it taking action. Labeling continues to come from the policy you turned on.

**Change & support**
- Coverage expires 30 days after the latest simulation run, so a helpdesk question about an older policy may find **View coverage** unavailable until a new simulation runs.
- Counts may not match all-time labeled totals, which can include activity before or after the coverage window. Expect questions from admins comparing the two.

## Cost and licensing

Microsoft Learn's auto-labeling page lists service-side auto-labeling (SharePoint, OneDrive, Exchange) as included with Microsoft 365 E5, Microsoft 365 E5 Compliance, Microsoft 365 E5 Information Protection & Governance and Azure Information Protection Premium P2 (standalone). The page says auto-labeling of files and emails is not included with E3 or Business Premium.

The licence and any meter for the coverage report itself are not yet published: neither the roadmap record, MC1456609 nor the Learn page names a separate licence or charge for it. The indirect cost is admin time to review the report and to rerun simulations so that coverage is available again after 30 days.

## Scope

The report is for Microsoft Purview administrators who create and manage Information Protection auto-labeling policies, per MC1456609. The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and the web as the platform.

Prerequisites on the Learn page: run the policy in simulation, then turn it on; select a policy that includes SharePoint or OneDrive. Learn lists Compliance Administrator, Compliance Data Administrator, Information Protection Admin and Information Protection Analyst as the roles for the per-policy review pages; it does not state a role separately for the coverage report. Turning a policy on after simulation needs Compliance Administrator or Compliance Data Administrator. Auto-labeling is not available in every region because of a backend Azure dependency; where unsupported, the **Auto-labeling** page is not visible.

## Governance guidance

### Before rollout
- Confirm which auto-labeling policies include SharePoint or OneDrive; Learn says an Exchange-only policy does not get file coverage.
- Check that the people who will read the report hold one of the roles Learn lists for the review pages (see the controls table).

### At rollout
- Open **View coverage** on one policy that is turned on and compare its buckets with the policy's **Labeled items** and **Labeling failures** tabs.
- Brief administrators that the report is not an exact reconciliation between simulation and enforcement.
- Update internal operating notes for staff who monitor auto-labeling effectiveness, as MC1456609 recommends.

### After rollout
- Review coverage within the 30 days after each simulation run.
- Open the item list under **Failed to apply label** and review the failure reason.
- Check files under **No simulation match found**, which Learn says can be created, changed or classified after the simulation completed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Opening the per-policy coverage report</strong><br><small class="controls__note">Policy must include SharePoint or OneDrive, have completed simulation and be turned on. Learn lists review-page roles; none stated for coverage alone. Preview label on Learn.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Policies › Auto-labeling policies › policy › Coverage › View coverage <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Per-policy labeling activity and progress (today's alternative to coverage)</strong><br><small class="controls__note">Security &amp; Compliance PowerShell only. Shows labeling progress, not the comparison with simulation. Roles: Compliance Administrator, Compliance Data Administrator, Information Protection Admin or Information Protection Analyst.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › View details <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-AutoSensitivityLabelPolicy -Identity &quot;&lt;policy name&gt;&quot; -IncludeProgressFeedback</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents the report as a view inside the policy list; the page describes no separate setting to turn the report on or off. Learn lists the roles in the table note for the per-policy review pages but does not separately state the permissions required for View coverage. Learn says viewing matched text inside a file on the review pages also needs the Data Classification Content Viewer role; it does not say this applies to the coverage report.

The PowerShell row is today's alternative: it reports labeling progress for enabled policies, not the simulation comparison, and does not replace the coverage report.

## Open questions

- Does the coverage report carry any licence or meter beyond the E5-tier licensing listed for auto-labeling? Watch the Learn auto-labeling page and Message center.
- When does Learn drop the preview label on **Coverage by simulation context**, given the roadmap lists General Availability?
- Will Microsoft document a PowerShell or Graph interface for coverage data? None is documented at the time of writing (November 2026).
- Which role, if any, is specific to **View coverage**, as Learn lists roles only for the review pages?

<!-- rationale
risk: Low. Microsoft describes the report as monitoring auto-labeling enforcement outcomes on policies an admin has already turned on, and its notice says no action is required to receive it.
cost: Low. The only cost the sources show is admin time; Microsoft Learn lists no separate meter or licence for the report, and auto-labeling itself is listed with E5 or P2-tier SKUs.
impact: Low. Microsoft's notice identifies Purview administrators who create and manage Information Protection auto-labeling policies as the people affected by the new View coverage action.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: The feature page lists Microsoft 365 E5, E5 Compliance, E5 Information Protection & Governance and Azure Information Protection Premium P2 (standalone) for service-side auto-labeling. | Found: Microsoft 365 E5, Microsoft 365 E5 Compliance, Microsoft 365 E5 Information Protection & Governance, Azure Information Protection Premium P2 (standalone) | Fix: After the SKU list, add: "Microsoft's Purview service description also says that if AIP P2 is assigned to a user, that user must also have AIP P1 assigned." Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description. This preserves the cited feature page's list while acknowledging the other page's qualification. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; Open questions / licensing: Licensing is marked unknown because no entitlement specific to the report is published. | Found: | Service-side auto-labeling (SharePoint, OneDrive, Exchange) | Microsoft Purview portal → **Information Protection** → **Policies** → **Auto-labeling policies** | Same E5 / P2-tier SKUs as above | | Fix: Set licensing.model to "included". Start licensing.notes with "The report is a view inside service-side auto-labeling, whose published entitlement is the E5 / P2-tier licensing listed below; no separate report-specific licence or charge is documented as of November 2026." Keep the existing SKU list and its cited feature page. In Cost and licensing, replace "The licence and any meter for the coverage report itself are not yet published" with "No separate licence or meter for the coverage report is documented as of November 2026". | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
-->
