---
title: "Microsoft Purview: per-policy coverage report for auto-labeling (GCC, GCC High, DoD)"
slug: "microsoft-purview-information-protection-auto-labeling-per-policy-coverage-r-us-government"
roadmapId: 572677
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview plans a per-policy report comparing enforced auto-labeling with the latest simulation, for GCC, GCC High and DoD. It is a new view for admins who run auto-labeling; the roadmap names no required action."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The report is a view inside service-side auto-labeling, whose published entitlement is the E5 / P2-tier licensing on the Learn page; no separate report-specific licence or charge is documented as of November 2026. Government-cloud entitlements sit on a separate licensing guidance page."
audiences: ["compliance","m365-admin","security"]
tags: ["purview","information-protection","sensitivity-labels","auto-labeling","monitoring","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 572677"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=572677"
    kind: "roadmap"
  - title: "Automatically apply a sensitivity label to Microsoft 365 data"
    url: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    kind: "learn"
  - title: "Get-AutoSensitivityLabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-autosensitivitylabelpolicy"
    kind: "learn"
videos: []
related: ["microsoft-purview-information-protection-auto-labeling-per-policy-coverage-report","microsoft-purview-auto-labeling-scalability-policy-management-and-reporting-enhancements","sensitivity-labels"]
controls:
  - governs: "Opening the per-policy coverage report"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Policies > Auto-labeling policies > policy > Coverage > View coverage"
      docs: "https://learn.microsoft.com/purview/apply-sensitivity-label-automatically"
    api: null
    note: "Policy must include SharePoint or OneDrive, have completed simulation and be turned on. Learn labels the report preview and states no role for it alone."
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
    note: "Security & Compliance PowerShell only. Shows labeling progress, not the comparison with simulation. Review-page roles: Compliance Administrator, Compliance Data Administrator, Information Protection Admin, Information Protection Analyst."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-23T22:59:12"
changes:
  - date: "2026-11-21"
    note: "New briefing on the per-policy auto-labeling coverage report for GCC, GCC High and DoD, which Learn already documents as a preview report."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 59
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ffddf8ca413962683efc6e21f0dc90fa"
---

## What's changing

Microsoft plans a per-policy coverage report for enforced Microsoft Purview auto-labeling policies in the GCC, GCC High and DoD clouds. For each enforced policy, the roadmap item says admins can see how files processed during enforcement relate to the latest simulation run: how many files are labelled or not yet labelled, and whether each was included in the last simulation snapshot. It also identifies files that were processed during enforcement but were not found in the simulation snapshot.

Microsoft Learn already documents the report as **Coverage by simulation context**, and labels it preview at the time of writing (November 2026). Learn says it reports on SharePoint and OneDrive files, and that you run the policy in simulation, then turn it on, before reviewing coverage. To open it, select an auto-labeling policy that includes SharePoint or OneDrive, has completed simulation and is turned on, then select **View coverage** in the **Coverage** column. The Learn page does not name any cloud for the report, so whether its description applies unchanged to GCC, GCC High and DoD is not stated.

Learn groups files into **Observed files**, **Labeled during enforcement**, **Not labeled during enforcement**, **Found in simulation**, **No simulation match found**, **Pending**, **Not yet attempted** and **Failed to apply label**. Selecting a bucket opens a file list. Learn says coverage is based on labeling activity after the latest simulation run and is available for 30 days; after that **View coverage** is unavailable until the policy is run in simulation again. Learn also says the report is not an all-time policy total and not an exact reconciliation between simulation and enforcement.

The roadmap record lists this item as In development, with a target of November CY2026, release phase General Availability, for GCC, GCC High and DoD on the web. Microsoft lists the same feature under a second roadmap item, 568935, for Worldwide (Standard Multi-Tenant), which the roadmap shows as Launched with a target of October CY2026. The two items are separate records; this page covers the government-cloud item.

## Why it matters

The report answers a question that policy-level labeling progress does not: is enforcement doing what the simulation predicted? For a government-cloud tenant that relies on auto-labeling to reach CUI-style or other sensitive data, the **No simulation match found** and **Failed to apply label** buckets show where enforcement departed from the data state captured in simulation, or failed outright.

Microsoft has not stated what happens on arrival, including whether the report appears without any admin action, so treat the default as not stated. The wiki's view is that it is a monitoring aid to try once it reaches your tenant, and that its numbers should not be quoted as audit totals: Learn says they are not an exact reconciliation and cover a 30-day window.

## Risk assessment

**Data exposure**
- Learn says item lists for a bucket can show file name, location, workload, label, last activity time, status and failure reason, so the report reveals which files sit in which labelling state. Learn lists Compliance Administrator, Compliance Data Administrator, Information Protection Admin and Information Protection Analyst for the per-policy review pages; it states no role specific to **View coverage**.

**Security & identity**
- Learn states that a simulation match does not confirm that a label was applied. Do not read **Found in simulation** as evidence of protection; check **Labeled during enforcement** and **Failed to apply label** instead.

**Autonomy & actions**
- No change: the roadmap description and Learn describe a report that shows outcomes, not an action. Labels continue to come from the policy that was turned on.

**Change & support**
- Coverage is available for 30 days after the latest simulation run, so a question about an older policy can find **View coverage** unavailable until the policy is run in simulation again.
- Counts can differ from all-time labelled totals, which Learn says can include activity before or after the coverage window. Expect questions when administrators compare the two.

## Cost and licensing

Learn's auto-labeling page lists service-side auto-labeling (SharePoint, OneDrive, Exchange) as included with Microsoft 365 E5, Microsoft 365 E5 Compliance, Microsoft 365 E5 Information Protection & Governance and Azure Information Protection Premium P2 (standalone). The same page says auto-labeling of files and emails is not included at the E3 or Business Premium level.

The coverage report is a view inside that auto-labeling surface. No separate licence or meter for the coverage report is documented as of November 2026. The indirect cost is admin time to review the report and to rerun simulation so that coverage is available again after 30 days.

For entitlements in Government clouds, the Learn page points to Microsoft's per-SKU licensing guidance for security and compliance. A government-cloud entitlement specific to this report is not yet published.

## Scope

The roadmap item lists GCC, GCC High and DoD, for the web, with release phase General Availability and a target of November CY2026. Status is In development, so the dates are targets.

Prerequisites on the Learn page: the policy includes SharePoint or OneDrive, has completed simulation and is turned on. An Exchange-only policy gets no file coverage, and rerunning it in simulation does not enable it. Learn says turning a policy from **Ready to turn on** to **On** needs Compliance Administrator or Compliance Data Administrator. For the per-policy review pages, Learn lists Compliance Administrator, Compliance Data Administrator, Information Protection Admin or Information Protection Analyst. No role is stated for the coverage report alone.

## Governance guidance

### Before rollout
- Inventory which auto-labeling policies include SharePoint or OneDrive; an Exchange-only policy does not get file coverage.
- Confirm that the people who will read the report hold one of the roles Learn lists for the per-policy review pages.
- Check that policies you want to review have completed simulation and are turned on, because **View coverage** can be hidden otherwise.

### At rollout
- Open **View coverage** on one policy and compare its buckets with the **Labeled items** and **Labeling failures** tabs under **View details**.
- Tell administrators that the report is not an all-time total or an exact reconciliation between simulation and enforcement.
- Confirm in your own tenant whether the report is present, since Microsoft has not stated the default state or the government-cloud rollout window.

### After rollout
- Review coverage within 30 days of each simulation run, before **View coverage** becomes unavailable for that run.
- Open the **Failed to apply label** list and read the failure reason where one is shown.
- Investigate files under **No simulation match found**, which Learn says can be created, changed or classified after the latest simulation run completed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Opening the per-policy coverage report</strong><br><small class="controls__note">Policy must include SharePoint or OneDrive, have completed simulation and be turned on. Learn labels the report preview and states no role for it alone.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › Coverage › View coverage <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Per-policy labeling activity and progress (today's alternative to coverage)</strong><br><small class="controls__note">Security &amp; Compliance PowerShell only. Shows labeling progress, not the comparison with simulation. Review-page roles: Compliance Administrator, Compliance Data Administrator, Information Protection Admin, Information Protection Analyst.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Policies › Auto-labeling policies › policy › View details <a href="https://learn.microsoft.com/purview/apply-sensitivity-label-automatically" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-AutoSensitivityLabelPolicy -Identity &quot;&lt;policy name&gt;&quot; -IncludeProgressFeedback</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-autosensitivitylabelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn describes the coverage report as a view reached from the auto-labeling policy list. It gives no separate setting for turning the report on or off, and Microsoft Learn documents no PowerShell or API for coverage data at the time of writing (November 2026).

The second row is today's alternative: it reports labeling progress for enabled SharePoint and OneDrive policies, not the comparison with simulation, and does not replace the coverage report.

## Open questions

- When will the report reach GCC, GCC High and DoD, and does it behave as the Learn page describes? Watch the roadmap item 572677 and Message center.
- Is the report switched on automatically once it arrives, or does an administrator have to do something? Microsoft has not stated a default.
- Which role, if any, is specific to **View coverage**? Learn lists roles for the per-policy review pages only.
- Will Microsoft document a PowerShell or Graph interface for coverage data? Watch the Learn auto-labeling page.

<!-- rationale
risk: Low. The report is a view of labeling outcomes for policies already turned on, and the roadmap description says nothing about it labelling, moving or deleting files itself.
cost: Low. Learn lists service-side auto-labeling with E5 and Azure Information Protection Premium P2 tier licences and documents no separate charge for the report; the cost to plan for is admin time.
impact: Low. Only administrators and analysts who monitor auto-labeling policies see the report; end users are not mentioned in the roadmap description.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing; front matter: licensing.notes; rationale: cost / licensing: The cited auto-labeling page includes service-side auto-labeling with Microsoft 365 E5, E5 Compliance, E5 Information Protection & Governance and Azure Information Protection Premium P2 (standalone). | Found: Microsoft 365 E5, Microsoft 365 E5 Compliance, Microsoft 365 E5 Information Protection & Governance, Azure Information Protection Premium P2 (standalone) | Fix: Keep the attributed list, but add: 'The Microsoft Purview service description additionally says that AIP P1 must be assigned alongside AIP P2 for sensitivity labeling to be available.' Cite https://learn.microsoft.com/en-us/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-purview-information-protection-sensitivity-labeling and add that page to sources. | Source: https://learn.microsoft.com/purview/apply-sensitivity-label-automatically
- [supported, minor] What's changing / record: Roadmap item 568935 is a separate record for the same per-policy coverage report. | Found: 568935: "title": "Microsoft Purview: Information Protection-Auto-labeling per-policy coverage report"; its description matches the government-cloud item's report description. | Fix: Add the source 'Microsoft 365 Roadmap 568935' with URL https://www.microsoft.com/microsoft-365/roadmap?id=568935 to sources, and link that URL on the mention of item 568935 in What's changing.
-->
