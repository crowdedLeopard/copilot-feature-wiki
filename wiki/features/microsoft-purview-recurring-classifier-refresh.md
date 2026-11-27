---
title: "Microsoft Purview: recurring classifier refresh for existing content"
slug: "microsoft-purview-recurring-classifier-refresh"
roadmapId: 579194
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to turn on-demand classification into recurring refreshes of existing content. Learn does not describe the refresh yet; admins who run scans today should plan for policy actions and pay-as-you-go cost."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2027"
previewDate: "February CY2027"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "For today's on-demand classification, Learn says billing is pay-as-you-go, per-user licensing or both, and the billing models page meters it by asset classified per scan. Nothing specific to recurring refreshes is yet published."
audiences: ["compliance","security","finops","m365-admin"]
tags: ["purview","classifiers","sensitive-information-types","information-protection","pay-as-you-go","usage-based-billing"]
sources:
  - title: "Microsoft Purview: recurring classifier refresh"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579194"
    kind: "roadmap"
  - title: "Create and analyze an on-demand classification scan"
    url: "https://learn.microsoft.com/purview/on-demand-classification"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "FAQ and reference for endpoint scans"
    url: "https://learn.microsoft.com/purview/endpoints-faq-reference"
    kind: "learn"
  - title: "Best practices for on-demand classification on endpoints and billing"
    url: "https://learn.microsoft.com/purview/endpoints-best-practices"
    kind: "learn"
  - title: "New-SensitiveInformationScan"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-sensitiveinformationscan"
    kind: "learn"
  - title: "Set-SensitiveInformationScan"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-sensitiveinformationscan"
    kind: "learn"
videos: []
related: ["microsoft-purview-unified-classification-management-experience","sensitivity-labels","microsoft-purview-auto-labeling-scalability-policy-management-and-reporting-enhancements"]
controls:
  - governs: "Creating an on-demand classification scan, its scope, classifiers and file filters"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Classifiers > On-demand classification > New scan"
      docs: "https://learn.microsoft.com/purview/on-demand-classification"
    api:
      kind: "powershell"
      call: "New-SensitiveInformationScan -Name <name> -SharePointLocation All"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-sensitiveinformationscan"
    note: "Security & Compliance PowerShell. Needs the Compliance Administrator role group. Governs today's on-demand scans, not a documented recurring refresh."
  - governs: "A schedule or recurrence setting for classification refreshes"
    scope: "tenant"
    ui: null
    api: null
    note: "The on-demand scan wizard and New-SensitiveInformationScan document no schedule or recurrence setting at the time of writing (November 2026)."
  - governs: "Whether On-Demand Classification usage is paused or active for pay-as-you-go billing"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Usage center > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/purview-billing-usage"
    api: null
    note: "Usage center is in preview. Learn lists On-Demand Classification as pausable; it does not say what pausing does to a scan in progress."
  - governs: "Stopping an on-demand scan that is in progress"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Classifiers > On-demand classification > scan > View estimation > Estimation overview > Cancel Scan"
      docs: "https://learn.microsoft.com/purview/on-demand-classification"
    api:
      kind: "powershell"
      call: "Set-SensitiveInformationScan -Identity <scan> -CancelScan $true"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-sensitiveinformationscan"
    note: "Security & Compliance PowerShell. Applies to today's scans."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-17T19:05:12"
changes:
  - date: "2026-11-20"
    note: "First briefing: roadmap plan for recurring refreshes, with today's on-demand classification scan, billing and controls as background."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 63 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: Content Explorer timing limited to SharePoint and OneDrive, endpoint no-rebilling conditions added, scan cmdlet wording fixed, and the pilot-scope step now says to confirm support."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 73 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 78 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 77
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "2ef22853fdb3ac48527bc31cdddbb6e3"
---

## What's changing

Microsoft plans to evolve On-Demand Classification into recurring classification refreshes. The roadmap item describes them as helping "keep existing content classification current as data and context change". It is In development for Worldwide (Standard Multi-Tenant) on the Web, with release phases listed as General Availability and Preview, a preview target of February CY2027 and a target date of April CY2027. These are Microsoft's targets, not commitments.

Microsoft Learn does not describe the recurring refresh at the time of writing (November 2026), so everything above about it is the roadmap's description. What Learn does document is today's on-demand classification: an admin-run scan that identifies and classifies sensitive content in historical data in SharePoint, OneDrive and endpoints. Each scan is created in a wizard (name, scope and location, classifiers, file last modified date range, file extensions), gets an estimate, and starts only when an admin selects **Start classification** ([Create and analyze an on-demand classification scan](https://learn.microsoft.com/purview/on-demand-classification)).

The record does not say how often a refresh would run, what triggers it, whether it replaces manual scans, or how it is billed. Treat the on-demand page as background, not as a description of the refresh.

## Why it matters

Learn says on-demand classification updates classification results and that matching policies determine any resulting actions: for SharePoint and OneDrive, updated results can trigger active policies, including policies that apply or remove sensitivity labels. If a recurring refresh behaves the same way, which Microsoft has not confirmed, policy actions on existing files and the pay-as-you-go meter would repeat rather than happen once per admin-started scan. That is why the scan scope, classifier selection and billing controls matter before any schedule exists.

Microsoft has not stated what happens on arrival, and no source says existing on-demand scans will change. Admins who run scans today are the audience; the wiki's view is to use the next few months to learn what a scan costs and which policies would act on its results.

## Risk assessment

**Data exposure**
- Today's scans read the content of files in scope (SharePoint, OneDrive and Windows endpoints) to classify it. For SharePoint and OneDrive scans, Content Explorer updates within seven days of scanning, and viewing results needs the Content Explorer Content Viewer or Content Explorer List Viewer role group. How a refresh would be scoped is not described.

**Security & identity**
- Running a scan today requires membership of the Compliance Administrator role group. Which role would create or change a recurring refresh is not yet documented. For SharePoint scans, Learn describes adaptive scopes and administrative units as ways to bound scan scope and delegate it.

**Autonomy & actions**
- Each scanned file is evaluated against Data Loss Prevention, Information Protection, Data Lifecycle Management and Insider Risk Management policies, and matching policies take their actions. Today an admin reviews the estimate and selects **Start classification**; whether a recurring refresh keeps a review step is not described.

**Change & support**
- Choosing specific classifiers updates results only for those classifiers, so other classifiers' policies may not trigger. For SharePoint and OneDrive, a location in scope of several active scans is processed by only one and marked skipped for the others. Each SharePoint or OneDrive scan can process up to 150,000 locations and 100 million files.
- Tenants using Exact Data Match (EDM) classifiers should expect scans to rescan previously classified files, which Learn says can increase cost.

## Cost and licensing

**Licence.** The on-demand classification page names no single licence. It links to the Microsoft 365 Enterprise plans and the Microsoft 365 service descriptions for licensing, and says the feature "uses pay-as-you-go billing or per-user licensing for Microsoft Purview capabilities or both".

**Meter.** The [Purview billing models](https://learn.microsoft.com/purview/purview-billing-models) page lists on-demand classification as pay-as-you-go, with the unit "Asset, based on the number classified per scan" for data in SharePoint and OneDrive. Billing is Azure-based, so the Microsoft 365 tenant must be associated with an active Azure subscription. Usage appears in the Usage center in the Microsoft Purview portal; the page says the billed amount can be lower than the estimate when items or locations are skipped.

**Control.** The Usage center lists On-Demand Classification as pausable ([Manage pay-as-you-go and per-user licensing usage](https://learn.microsoft.com/purview/purview-billing-usage)); that page does not say what a paused feature does to scans already running. For endpoint scans, Learn says estimation is not billed ([FAQ and reference for endpoint scans](https://learn.microsoft.com/purview/endpoints-faq-reference)). On endpoints, unchanged files with unchanged classifiers are not rescanned or billed when the earlier classification used advanced classification and the device has the latest Windows cumulative updates. Recognition is not retroactive: the first scan after the required update establishes the baseline ([Best practices for on-demand classification on endpoints and billing](https://learn.microsoft.com/purview/endpoints-best-practices)).

**Not yet published.** A billing rule or rate specific to recurring refreshes, including whether unchanged content is billed again on each run.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the only cloud, the Web as the platform, and General Availability and Preview as release phases, with a preview target of February CY2027 and a target date of April CY2027. The status is In development.

Today's on-demand classification covers SharePoint, OneDrive and Windows 10/11 endpoints; running a scan needs the Compliance Administrator role group. Which locations, roles and prerequisites the recurring refresh will have is not yet published.

## Governance guidance

### Before rollout
- Create a small on-demand scan, review **View estimation** for item counts and estimated cost, and keep the figures as a baseline for any recurring refresh.
- List the active DLP, auto-labeling, retention and Insider Risk Management policies that would act on files after reclassification, and decide who signs off on label changes.
- Confirm with finance that the Microsoft 365 tenant is associated with an Azure subscription, and that someone reviews Usage center > Pay-as-you-go for On-Demand Classification.
- Watch Message center and the roadmap item for a Learn page that describes the refresh.

### At rollout
- Confirm whether recurring refresh supports specific SharePoint sites, adaptive scopes and classifier selection before choosing a pilot scope.
- Keep policies you are still testing in simulation, because Learn says other active policies can still act on the scanned files.
- Record which role group members can create scans so changes to recurring runs have a named owner.

### After rollout
- Compare Usage center > Pay-as-you-go units for On-Demand Classification with the estimates each month.
- Review the **Items for review** tab and Content Explorer after runs to see what changed.
- Cancel a running scan from **Estimation overview** or with Set-SensitiveInformationScan if its scope proves wrong.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating an on-demand classification scan, its scope, classifiers and file filters</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Needs the Compliance Administrator role group. Governs today's on-demand scans, not a documented recurring refresh.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Classifiers › On-demand classification › New scan <a href="https://learn.microsoft.com/purview/on-demand-classification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-SensitiveInformationScan -Name &lt;name&gt; -SharePointLocation All</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-sensitiveinformationscan" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A schedule or recurrence setting for classification refreshes</strong><br><small>Tenant</small><br><small class="controls__note">The on-demand scan wizard and New-SensitiveInformationScan document no schedule or recurrence setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether On-Demand Classification usage is paused or active for pay-as-you-go billing</strong><br><small>Tenant</small><br><small class="controls__note">Usage center is in preview. Learn lists On-Demand Classification as pausable; it does not say what pausing does to a scan in progress.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Stopping an on-demand scan that is in progress</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Applies to today's scans.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Classifiers › On-demand classification › scan › View estimation › Estimation overview › Cancel Scan <a href="https://learn.microsoft.com/purview/on-demand-classification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SensitiveInformationScan -Identity &lt;scan&gt; -CancelScan $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-sensitiveinformationscan" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

These rows describe today's on-demand classification; none is documented as a control of the recurring refresh. Creating a scan needs the Compliance Administrator role group; the Usage center pages need Global Reader, Security Reader or Global Admin. The Usage center is in preview.

The scan wizard documents scope, classifiers, date range and file extensions. Neither the wizard nor New-SensitiveInformationScan documents a schedule. Pausing On-Demand Classification in the Usage center is a billing control, and Learn does not say whether it stops scans already running.

## Open questions

- Will recurring refreshes run on a schedule an admin sets, or on triggers such as classifier changes? Watch the Learn page for on-demand classification and the roadmap item.
- Will each refresh be billed as assets classified per scan, and will unchanged content be billed again? Watch the Purview billing models page.
- Does a refresh keep the estimate and manual start step, and which role group can create or edit one?
- Will refreshes reach SharePoint, OneDrive and endpoints alike, and will the clouds beyond Worldwide be added?

<!-- rationale
risk: Medium. On-demand classification today feeds updated results to active DLP, labelling, retention and Insider Risk policies, and Microsoft has not said how recurring refreshes will be scoped or reviewed.
cost: Variable. Today's on-demand classification is metered under pay-as-you-go by assets classified per scan; no rate or billing rule specific to recurring refreshes is yet published.
impact: Low. The people who set it up are compliance administrators; users notice only if policies act on reclassified files, and Microsoft has not described a user-facing change.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Autonomy & actions; rationale: risk / applicability: Scanned files are evaluated against DLP, Information Protection, Data Lifecycle Management and Insider Risk Management policies. | Found: Files are evaluated against DLP, Microsoft Information Protection (MIP), data lifecycle management (DLM), and insider risk management (IRM) policies simultaneously. | Fix: Add https://learn.microsoft.com/purview/on-demand-classification-endpoints to sources and cite it for endpoint policy evaluation. The existing on-demand-classification source supports the same policy-evaluation statement for SharePoint and OneDrive. | Source: https://learn.microsoft.com/purview/on-demand-classification-endpoints
- [supported, minor] Risk assessment: Change & support / behaviour: Choosing specific classifiers updates classification results only for those classifiers. | Found: Applies to SharePoint and OneDrive ... If you select specific classifiers during a scan, only those classifiers have their classification results updated for the scanned files. | Fix: Replace the sentence with: 'For SharePoint and OneDrive, choosing specific classifiers updates results only for those classifiers, so other classifiers' policies may not trigger.' This preserves the workload qualification attached to the source passage. | Source: https://learn.microsoft.com/purview/on-demand-classification
- [contradicted, minor] Governance guidance: Before rollout; At rollout; Governance controls / consistency: Every control the governance checklist asks readers to review or keep configured appears in the controls table. | Found: List the active DLP, auto-labeling, retention and Insider Risk Management policies ... Keep policies you are still testing in simulation ... Record which role group members can create scans. The table covers scan creation, recurrence, billing pause and scan cancellation. | Fix: Remove the checklist bullets beginning 'List the active DLP', 'Keep policies you are still testing in simulation', and 'Record which role group members'. The controls table has no policy-mode or role-membership review control; retain the documented policy and role facts in the explanatory prose.
-->
