---
title: "Microsoft Purview eDiscovery (Premium): hold reports for all cases"
slug: "microsoft-purview-compliance-portal-ediscovery-premium-hold-reports"
roadmapId: 93268
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a built-in report of every eDiscovery legal hold, with sort, filter and download. Learn already documents a public preview. Affects eDiscovery administrators and managers; no admin switch is described."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "December CY2023"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says the organisation needs a subscription that supports premium eDiscovery features, which its eDiscovery overview ties to Office 365 E5 or Microsoft 365 E5 or related E5 add-ons. No price or meter for the report is published."
audiences: ["compliance","m365-admin","security"]
tags: ["ediscovery","purview","monitoring","data-export","governance"]
sources:
  - title: "Microsoft 365 Roadmap 93268"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=93268"
    kind: "roadmap"
  - title: "Use the hold report (preview) in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-hold-report"
    kind: "learn"
  - title: "Use a script to create a hold report in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-hold-report-script"
    kind: "learn"
  - title: "Assign permissions in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-permissions"
    kind: "learn"
  - title: "Get-CaseHoldPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-caseholdpolicy"
    kind: "learn"
  - title: "Learn about eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc"
    kind: "learn"
videos: []
related: ["ediscovery","microsoft-purview-ediscovery-in-product-diagnostics-to-troubleshoot-common-challenges","microsoft-purview-compliance-portal-cloud-attachments-preservation-for-users-on-hold"]
controls:
  - governs: "Who can view the hold report (eDiscovery Administrator and eDiscovery Manager role groups)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Role groups > Role groups for Microsoft Purview solutions > eDiscovery Manager > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember \"eDiscoveryManager\" -Member <name of security group>"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    note: "Needs Organization Management membership or the Role Management role. A mail-enabled security group cannot join the eDiscovery Administrators subgroup. General eDiscovery permission control."
  - governs: "Viewing and downloading the hold report (portal view and scripted alternative)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Dashboards > Hold report (preview)"
      docs: "https://learn.microsoft.com/purview/edisc-hold-report"
    api:
      kind: "powershell"
      call: "Get-CaseHoldPolicy -Case <case name> -DistributionDetail"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-caseholdpolicy"
    note: "Path is from the public preview page. The cmdlet reads hold status, as Learn's sample script uses it; it does not switch the report on or off."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-17T22:52:47"
changes:
  - date: "2026-11-22"
    note: "New briefing: planned eDiscovery (Premium) hold reports, roadmap target January CY2027, with Learn's public preview page as the nearest description."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 73 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 73
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "85b26d2e432845bcc2bcd8473f53711e"
---

## What's changing

Microsoft plans out-of-the-box hold reports for eDiscovery (Premium) in the Microsoft Purview portal. The roadmap item describes reports with information about all legal holds associated with eDiscovery cases, which you can sort and filter and download as aggregated information for further analysis.

Microsoft Learn already documents a page, "Use the hold report (preview) in eDiscovery", which describes a built-in report available to users with eDiscovery Administrator or eDiscovery Manager (preview) permissions. Learn marks it as public preview and says it shows the data locations and reports on all hold policies within the tenant, listing every location in those policies whether enabled or disabled. Learn's route to it is eDiscovery > Dashboards > Hold report (preview), where you can sort, filter, group by, customise columns and download the report to a .csv file. The whole report downloads regardless of any filtering or grouping applied.

The page also says the report syncs policy and location status no more than once every seven days, so it might not show recent changes. For the current status of one hold, Learn points to the hold policy details page in the eDiscovery case. The default columns include case name, hold name, last modified, location, location error, location type and policy status; further columns include case type, case status, policy created by, hold ID, case ID and rule query.

The roadmap record gives the status In development, a target of January CY2027, a preview date of December CY2023 and the release phases General Availability and Preview, for Worldwide (Standard Multi-Tenant) on the Web platform. The record says the status and release month were updated to reflect the current state. Treat January CY2027 as a target. The roadmap's status and Learn's preview page do not line up, and Learn does not say whether the general availability design differs from the preview.

## Why it matters

A tenant-wide view of holds answers questions that otherwise mean opening each case: which locations are on hold, which holds are only partly applied and who last changed a policy. Learn describes Policy status values such as Applied Partially, Released partially and Policy failed, and a Location error column, which point at holds that may not protect what the legal team expects.

Microsoft has not stated what happens on arrival in a tenant, so treat nothing as certain beyond the roadmap's description. No source says existing hold behaviour changes; the report reads holds and does not change them. Because the report can be up to seven days behind, the wiki's view is to confirm a specific hold in its case before relying on the report in a legal matter.

## Risk assessment

**Data exposure**
- The report lists case names, hold names, mailbox and SharePoint site locations, the users who created or modified each policy and any content match query on the policy (columns Learn describes). Anyone allowed to open it sees which custodians' locations are under hold, so keep the eDiscovery Administrator and eDiscovery Manager role groups small.
- Learn says the entire report is downloaded to .csv regardless of filtering or grouping, so a downloaded file holds more than the view on screen. Decide where those files are stored.

**Security & identity**
- Learn says all eDiscovery Administrators and eDiscovery Managers in the organisation can view the hold report, and that eDiscovery Managers can only view hold reports for cases they are a member of. Role membership is the control that decides who sees it (see the controls table).

**Autonomy & actions**
- No change: the page describes viewing, sorting, filtering and downloading, and describes no action on a hold from the report. For a Policy failed status, Learn says to create a rule and resync the policy, which is done outside the report.

**Change & support**
- Learn says the report syncs policy and location status no more than once every seven days, so a recent hold or release may not show yet; use the hold policy details page in the case for current status.
- If the same location is on hold under several policies, it appears once per policy and adds to the item count each time, so the count is locations in policies, not unique locations.

## Cost and licensing

Learn's hold report page says your organisation must have a subscription that supports premium eDiscovery features to generate and access the report, and that users need the eDiscovery Administrator or eDiscovery Manager (preview) role. Learn's eDiscovery overview says that with an Office 365 E5 or Microsoft 365 E5 subscription, or related E5 add-on subscriptions, you can use premium eDiscovery features. Learn's permissions page adds that, to analyse a user's data with premium features, the user needs an Office 365 E5 or Microsoft 365 E5 licence, or, for Office 365 E1 or E3 users, a Microsoft Purview Suite or Microsoft 365 eDiscovery and Audit add-on licence.

The hold report page names no price, meter or add-on for the report itself. Indirect cost is admin time to review the report and wherever the downloaded .csv files are stored. A price or licence statement specific to the final report is not yet published.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) only, the Web platform and the release phases General Availability and Preview, with a January CY2027 target. Government clouds are not listed on this item.

Per Learn's preview page, the report covers all hold policies in the tenant and shows Exchange mailbox and SharePoint site locations. eDiscovery Administrators and eDiscovery Managers can view it, and Managers only for cases they belong to. Learn says you need to be in the Organization Management role group or be assigned the Role Management role to assign eDiscovery permissions. Rollout mechanics for the general availability release are not stated.

## Governance guidance

### Before rollout
- Review who is in the eDiscovery Manager role group, including the eDiscovery Administrators subgroup, in the Microsoft Purview portal, because those roles are the ones Learn names for viewing the report.
- Decide where downloaded hold report .csv files will be stored and who may open them, since the download is the full report.
- Compare the Learn preview page with the roadmap item and note that the status In development and the target of January CY2027 are the roadmap's, while Learn documents a public preview.

### At rollout
- Open eDiscovery > Dashboards > Hold report (preview) with an eDiscovery Administrator account and confirm that the locations match what you expect from your cases.
- Test an eDiscovery Manager account to confirm it sees only the cases it is a member of, as Learn describes.
- Run Learn's sample hold report script in Security & Compliance PowerShell and compare its output with the portal report; Learn says the script is not supported under any Microsoft standard support programme.

### After rollout
- Review rows with Applied Partially, Released partially or Policy failed status, then open the hold policy in its case for current status before acting.
- Allow for the seven-day sync limit when comparing the report with a recent hold or release.
- Check the Learn hold report page again when the roadmap status changes, because the preview label and columns may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can view the hold report (eDiscovery Administrator and eDiscovery Manager role groups)</strong><br><small>Tenant</small><br><small class="controls__note">Needs Organization Management membership or the Role Management role. A mail-enabled security group cannot join the eDiscovery Administrators subgroup. General eDiscovery permission control.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Role groups › Role groups for Microsoft Purview solutions › eDiscovery Manager › Edit › Choose users <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember &quot;eDiscoveryManager&quot; -Member &lt;name of security group&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Viewing and downloading the hold report (portal view and scripted alternative)</strong><br><small>Tenant</small><br><small class="controls__note">Path is from the public preview page. The cmdlet reads hold status, as Learn's sample script uses it; it does not switch the report on or off.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Dashboards › Hold report (preview) <a href="https://learn.microsoft.com/purview/edisc-hold-report" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-CaseHoldPolicy -Case &lt;case name&gt; -DistributionDetail</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-caseholdpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The first row decides who can see the report: Learn says all eDiscovery Administrators and eDiscovery Managers can view it. Learn says a mail-enabled security group can be added to the eDiscovery Managers subgroup with Add-RoleGroupMember in Security & Compliance PowerShell, but cannot be added to the eDiscovery Administrators subgroup, which takes individual users. The Choose users option on the eDiscovery Manager pane is where users are added to either subgroup.

The second row is the way to view the report and its scripted alternative. Get-CaseHoldPolicy with -DistributionDetail reads hold status; it is not a switch for the report. Learn's script page says the script report includes cases an eDiscovery Manager can access, or all cases for an eDiscovery Administrator.

## Open questions

- Does the report reach tenants automatically at general availability, or does an administrator enable it? Microsoft has not stated a default; watch the Learn hold report page and Message center.
- What changes between the public preview Learn documents and the January CY2027 general availability target: columns, the seven-day sync limit or the Dashboards path? Watch the Learn page and the roadmap item.
- Will Microsoft publish a licence or meter specific to the hold report, or does it follow the premium eDiscovery subscription requirement on the Learn page?

<!-- rationale
risk: Low. The report is a view of existing hold policies, limited by Learn to eDiscovery Administrators and eDiscovery Managers; the roadmap does not state a default, so the rating rests on today's behaviour continuing.
cost: Low. Learn's hold report page requires a subscription that supports premium eDiscovery features and names no separate price or meter for the report; the cost shown is admin time.
impact: Low. Only people with eDiscovery Administrator or eDiscovery Manager permissions are described as using the report; other users are not mentioned.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The user-assignment route is Microsoft Purview portal > Settings > Role groups > Role groups for Microsoft Purview solutions > eDiscovery Manager > Edit > Choose users. | Found: Go to Settings > Role groups. On Role groups for Microsoft Purview solutions, select eDiscovery Manager. On the eDiscovery Manager pane ... Select Edit. On Manage eDiscovery Manager, select Choose users or Choose groups. | Fix: Set controls[0].ui.path and its rendered table path to 'Settings > Role groups > Role groups for Microsoft Purview solutions > eDiscovery Manager > Edit > Manage eDiscovery Manager > Choose users'. The cited page places Choose users under Manage eDiscovery Manager. | Source: https://learn.microsoft.com/purview/edisc-permissions
- [supported, minor] summary / absence: No report-specific admin switch is described. | Found: Searched: eDiscovery hold report default enable disable admin switch general availability rollout. Opened learn.microsoft.com/purview/edisc-hold-report and edisc-settings-general; the documented premium toggle sets the licence level of new cases, not the hold report. | Fix: Remove '; no admin switch is described' from the summary. The schema requires a control gap stated in prose to be represented by a both-null controls row; removing this nonessential clause avoids adding an unchecked row.
-->
