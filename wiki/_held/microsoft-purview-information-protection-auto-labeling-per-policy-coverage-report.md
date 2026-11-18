---
title: "Microsoft Purview: per-policy coverage report for auto-labeling"
slug: "microsoft-purview-information-protection-auto-labeling-per-policy-coverage-report"
roadmapId: 568935
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview adds a View coverage report to auto-labeling policies that shows labeled, pending and failed files against the latest simulation. Read-only; Microsoft says no action is required, though it suggests updating runbooks."
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
      path: "Information Protection > Policies > Auto-labeling policies > policy > View details"
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
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 61
  unconfirmed: 3
  contradicted: 2
  attempts: 1
  hash: "883782229907fa211cdd63bf1fff3813"
---

## What's changing

Microsoft Purview Information Protection gains a per-policy coverage report for auto-labeling policies. After a policy has been turned on following a simulation run, a **View coverage** action appears in the **Coverage** column of the auto-labeling policy list. The report compares what enforcement has done with the latest simulation run.

Microsoft's notice MC1456609 says the report shows files that were labeled, files still being processed and files that need attention, including files deleted or modified after the simulation and files where applying the label failed. Microsoft Learn describes the report's areas as **Observed files**, **Labeled during enforcement**, **Not labeled during enforcement**, **Found in simulation**, **No simulation match found**, **Pending**, **Not yet attempted** and **Failed to apply label**. Selecting a bucket opens a file list with details such as file name, location, workload, label, last activity time, status and failure reason where available.

Microsoft Learn says the report covers SharePoint and OneDrive files, and that **View coverage** can be hidden if the policy is not turned on or simulation completion information is missing. Learn also says an Exchange-only policy is unsupported, and that rerunning such a policy in simulation does not enable file coverage. Coverage is available for 30 days after the latest simulation run; after that a new simulation run is needed.

The roadmap record lists the item as Launched, with a target of October CY2026, a preview date of September CY2026, and release phases General Availability and Preview, for Worldwide (Standard Multi-Tenant) on the web. MC1456609 (updated 28 September 2026) gives Public Preview from early September to mid-September 2026 and General Availability (Worldwide) from early October to the end of October 2026. The Learn page labels **Coverage by simulation context** as preview at the time of writing (November 2026), so the roadmap and Learn differ on whether it is generally available.

## Why it matters

The report compares enforcement with the latest simulation, so it is the page to check when asking whether a policy is doing what the simulation predicted. It is useful for explaining to a data owner why a file is still unlabelled, or why a file turned up that the simulation never saw.

Because Microsoft says no action is required, the report appears on its own and nothing in the tenant changes for end users. The wiki's view is that the work is operational: tell the people who monitor auto-labeling about the 30-day window, and avoid treating the numbers as an audit total, because Learn says the report is not an all-time policy total and is not intended to be an exact reconciliation between simulation and enforcement.

## Risk assessment

**Data exposure**
- The report lists files by name, location, label and status, so it reveals which files hold labelled or unlabelled content. Access follows the roles Learn lists for the per-policy review pages; Learn says viewing matched text inside a file also needs the Data Classification Content Viewer role, which global admins do not have by default.

**Security & identity**
- The report only reads; it applies no labels itself. Learn states that a simulation match does not confirm that a label was applied, so do not use "found in simulation" as evidence of protection.

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
- Run a simulation on any policy that has not had one, as Microsoft's notice recommends.

### At rollout
- Open **View coverage** on one policy that is turned on and compare its buckets with the policy's **Labeled items** and **Labeling failures** tabs.
- Brief administrators that the report is not an exact reconciliation between simulation and enforcement.
- Update internal operating notes for staff who monitor auto-labeling effectiveness, as MC1456609 recommends.

### After rollout
- Review coverage within the 30 days after each simulation run, and rerun the simulation when you need coverage again.
- Open the item list under **Failed to apply label** and review the failure reason.
- Check files under **No simulation match found**, which Learn says can be created, changed or classified after the simulation completed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Opening the per-policy coverage report</strong><br><small class="controls__note">Policy must include SharePoint or OneDrive, have completed simulation and be turned on. Learn lists review-page roles; none stated for coverage alone. Preview label on Learn.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Policies › Auto-labeling policies › policy › Coverage › View coverage <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Per-policy labeling activity and progress (today's alternative to coverage)</strong><br><small class="controls__note">Security &amp; Compliance PowerShell only. Shows labeling progress, not the comparison with simulation. Roles: Compliance Administrator, Compliance Data Administrator, Information Protection Admin or Information Protection Analyst.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Policies › Auto-labeling policies › policy › View details <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-AutoSensitivityLabelPolicy -Identity &quot;&lt;policy name&gt;&quot; -IncludeProgressFeedback</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents the report as a view inside the policy list; the page describes no separate setting to turn the report on or off. Access to it follows the Purview roles listed in the table note, and the file-content preview needs the Data Classification Content Viewer role in addition.

The PowerShell row is today's alternative: it reports labeling progress for enabled policies, not the simulation comparison, and does not replace the coverage report.

## Open questions

- Does the coverage report carry any licence or meter beyond the E5-tier licensing listed for auto-labeling? Watch the Learn auto-labeling page and Message center.
- When does Learn drop the preview label on **Coverage by simulation context**, given the roadmap lists General Availability?
- Will Microsoft document a PowerShell or Graph interface for coverage data? None is documented at the time of writing (November 2026).
- Which role, if any, is specific to **View coverage**, as Learn lists roles only for the review pages?

<!-- rationale
risk: Low. It is a read-only report on policies an admin has already turned on; Microsoft's notice describes it as monitoring and says no action is required to receive it.
cost: Low. The only cost the sources show is admin time; Microsoft Learn lists no separate meter or licence for the report, and auto-labeling itself is listed with E5 or P2-tier SKUs.
impact: Low. Only Purview administrators who manage Information Protection auto-labeling policies see the new View coverage action; end users notice nothing.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] summary; Risk assessment: Security & identity; rationale: risk / behaviour: The report is strictly read-only and applies no labels itself. | Found: Searched: Purview auto-labeling per-policy coverage report read-only no labels end users. Read MC1456609, apply-sensitivity-label-automatically (coverage and monitoring), and troubleshooting search excerpts; they describe reporting, not an explicit read-only guarantee. | Fix: Replace 'Read-only', 'The report only reads; it applies no labels itself' and the read-only premise in the risk rationale with 'Microsoft describes the report as monitoring auto-labeling enforcement outcomes.' Keep the separate advice about simulation matches.
- [unsupported, major] Why it matters; rationale: impact / behaviour: Nothing changes for end users and end users notice nothing. | Found: Searched: Purview auto-labeling per-policy coverage report read-only no labels end users. Read MC1456609 and the Learn monitoring and coverage sections; Microsoft identifies administrators as affected but does not state that no end user can notice any change. | Fix: Remove 'and nothing in the tenant changes for end users' from Why it matters and 'end users notice nothing' from the impact rationale. Retain the documented administrator audience.
- [unsupported, blocker] Risk assessment: Data exposure; Governance controls / applicability: Access to the coverage report follows the four roles documented for the per-policy review pages. | Found: Searched: Purview "coverage by simulation context" "role"; "View coverage" permissions roles enable disable license pricing. Read the cited Learn coverage and policy-review sections and Purview permissions excerpts; no passage extends those review-page roles explicitly to coverage. | Fix: Replace both assertions that coverage access follows the review-page roles with 'Learn lists these roles for the per-policy review pages but does not separately state the permissions required for View coverage.' In Governance controls, qualify the content-preview statement as applying to matched content in the review pages, not an established coverage-report preview.
- [contradicted, blocker] controls[1].ui / admin-path: Policy review pages open through Information Protection > Policies > Auto-labeling policies > policy > View details. | Found: To open the newer review pages, go to **Solutions** > **Information Protection** > **Policies** > **Auto-labeling policies**. Select a policy, then select **View details** in the policy details panel. | Fix: Replace controls[1].ui.path and its rendered-table path with 'Solutions > Information Protection > Policies > Auto-labeling policies > policy > View details'. The cited page explicitly includes Solutions for this review-page route. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls / consistency: The checklist instructs administrators to run or rerun simulation, but neither controls-table row describes the simulation control. | Found: Run a simulation on any policy that has not had one; rerun the simulation when you need coverage again. Table rows: Opening the per-policy coverage report; Per-policy labeling activity and progress (today's alternative to coverage). | Fix: The simulation-running steps have no controls-table row. Remove the standalone 'Run a simulation on any policy that has not had one, as Microsoft's notice recommends' checklist bullet and shorten the After rollout bullet to 'Review coverage within the 30 days after each simulation run.' Keep the supported simulation prerequisite and expiry explanation in the body.
-->
