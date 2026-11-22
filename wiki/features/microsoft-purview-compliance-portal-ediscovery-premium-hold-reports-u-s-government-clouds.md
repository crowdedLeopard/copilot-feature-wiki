---
title: "Microsoft Purview eDiscovery (Premium): hold reports for GCC, GCC High and DoD"
slug: "microsoft-purview-compliance-portal-ediscovery-premium-hold-reports-u-s-government-clouds"
roadmapId: 93269
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a built-in report of all eDiscovery legal holds, with sort, filter and download, for GCC, GCC High and DoD. Nothing changes until it ships; eDiscovery administrators and managers are the people affected."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description includes eDiscovery (premium) in Microsoft 365 G5 and Office 365 G5, among other listed plans. A separate licensing statement specific to the Government hold report is not yet published. The hold report page requires a subscription that supports premium eDiscovery features."
audiences: ["compliance","m365-admin","security"]
tags: ["ediscovery","monitoring","data-export","governance","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 93269"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=93269"
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
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-deployments"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions - DoD deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-dod-deployments"
    kind: "learn"
videos: []
related: ["ediscovery","microsoft-purview-ediscovery-in-product-diagnostics-to-troubleshoot-common-challenges","microsoft-purview-compliance-portal-cloud-attachments-preservation-for-users-on-hold"]
controls:
  - governs: "Who can view the hold report (eDiscovery Administrator and eDiscovery Manager role groups)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Role groups > eDiscovery Manager > Edit > Manage eDiscovery Manager > Choose users"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember \"eDiscoveryManager\" -Member <name of security group>"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    note: "Documented for eDiscovery in the Purview portal; Government pages list hold reports as In development. This first Choose users assigns Managers; -Member takes a mail-enabled security group (Managers subgroup, not Administrators)."
  - governs: "Viewing and downloading the hold report (preview path; scripted alternative)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Dashboards > Hold report (preview)"
      docs: "https://learn.microsoft.com/purview/edisc-hold-report"
    api:
      kind: "powershell"
      call: "Get-CaseHoldPolicy <hold policy name> -Case <case ID> -DistributionDetail"
      docs: "https://learn.microsoft.com/purview/edisc-hold-report-script"
    note: "Path from the cloud-unspecified preview page; the Government path is not stated. The cmdlet is taken from Learn's sample script and reads hold status; it is not a switch for the report."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-17T22:52:47"
changes:
  - date: "2026-11-22"
    note: "New briefing: planned eDiscovery (Premium) hold reports for GCC, GCC High and DoD, targeted February CY2027."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Correction: Government plan pages now cited as also listing hold reports as In development, seven-day sync wording matched to Learn, licensing set to included per the service description, and role-assignment path refined."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "17482094ed7ca0e463b922880cf113d6"
---

## What's changing

Microsoft plans to add out-of-the-box hold reports for eDiscovery (Premium) in the Microsoft Purview portal for GCC, GCC High and DoD. The roadmap item describes reports with information about all legal holds associated with eDiscovery cases, which you can sort and filter and download as aggregated information for further analysis.

The roadmap supplies the Government release target; Microsoft's Government deployment pages also list hold reports as In development. Microsoft's Plan for Microsoft Purview pages for GCC, GCC High and DoD list "Hold reports" under eDiscovery (Premium) with the status "In development". Microsoft Learn also has a page, "Use the hold report (preview) in eDiscovery", that does not say which clouds it covers. It is the nearest description of how the report behaves, and it is a preview page, so read it as the preview design and not as the final Government design.

According to that page, the hold report is a built-in report on all hold policies in the tenant. It lists every location in those policies, whether enabled or disabled, with columns such as case name, hold name, location, location error and policy status. You can sort, filter, group and customise columns, and download the whole report to a .csv file. The page also notes that the report syncs policy and location status no more than once every seven days.

The roadmap record gives a target of February CY2027, the status In development and the release phase General Availability. Treat the date as a target, not a commitment.

## Why it matters

For legal and compliance teams in Government clouds, a tenant-wide view of holds answers questions that otherwise mean opening each case: which locations are on hold, which holds failed and who last changed a policy. Learn's preview page describes a Policy status column with values such as Applied partially and Policy failed, and a Location error column, which point at holds that are not protecting what the team thinks they are.

Nothing happens to your tenant until Microsoft ships the report, and Microsoft has not stated whether it will appear automatically or need enabling in these clouds. The preview page warns that policy and location status sync no more than once every seven days and might not reflect recent hold changes, so plan to check a specific hold in its case before relying on the report in a legal matter.

## Risk assessment

**Data exposure**
- The report lists case names, hold names, mailbox and SharePoint site locations, rule queries and the users who created or changed each policy (columns described on the cloud-unspecified preview page). Anyone who can open it sees which custodial locations are under hold, so keep the eDiscovery Administrator role group small.
- The page says the entire report is downloaded to .csv regardless of any filtering or grouping applied, so a downloaded file holds more than the filtered view on screen.

**Security & identity**
- Learn's preview page says the report needs eDiscovery Administrator or eDiscovery Manager (preview) permissions, and that eDiscovery Managers can only view hold reports for cases they are a member of. Microsoft documents these permissions for eDiscovery capabilities and features in the Microsoft Purview portal; the Government deployment pages still list hold reports as In development.

**Autonomy & actions**
- No change: the page describes a report with viewing and download only, and does not describe it changing holds. The Policy failed status on the preview page points administrators to create a rule and resync the policy, which is an action taken outside the report.

**Change & support**
- The preview page says the report syncs status no more than once every seven days, so a recent hold or release may not show yet. Use the hold policy details page in the case for the current status of one hold.
- If the same location sits under several hold policies, it appears several times and adds to the item count each time, so the count is locations in policies, not unique locations.

## Cost and licensing

Learn's hold report page lists one prerequisite for subscription: an organisation subscription that supports premium eDiscovery features, plus the eDiscovery Administrator or eDiscovery Manager (preview) role for the person viewing. It names no meter, price or add-on for the report itself.

The Microsoft Purview service description includes eDiscovery (premium) in Microsoft 365 G5 and Office 365 G5, among other listed plans. A separate licensing statement specific to the Government hold report is not yet published. Indirect cost is admin time to review the report and, for downloaded files, wherever your organisation stores them.

## Scope

The roadmap lists GCC, GCC High and DoD, the Web platform and the release phase General Availability, with a February CY2027 target. The record applies to the Microsoft Purview portal and eDiscovery (Premium).

Per Learn's cloud-unspecified preview page, the report covers all hold policies in the tenant, including holds from cases without premium features, and shows Exchange mailbox and SharePoint site locations. eDiscovery Administrators see all cases; eDiscovery Managers see only cases they belong to. Rollout mechanics and prerequisites specific to Government clouds are not stated.

## Governance guidance

### Before rollout
- Review who holds the eDiscovery Administrator and eDiscovery Manager role groups in the Microsoft Purview portal, because those are the roles the cloud-unspecified preview page names for the hold report.
- Decide where downloaded hold report files will be stored and who may open them, since the download is the full report.
- Plan to confirm with your account team or Message center whether the report reaches your cloud automatically.

### At rollout
- Check which of your eDiscovery Administrators and Managers can see the Hold report tab once it appears, against the roles above.
- Compare the first report with the scripted hold report from Learn, which runs in Security & Compliance PowerShell, to confirm the locations and policy statuses match.

### After rollout
- Review rows with Applied partially, Released partially or Policy failed status.
- Remember the report syncs status no more than once every seven days when comparing it with a recent hold change.
- Re-read the Government plan pages for Microsoft Purview each quarter, since the hold report listing there moves from In development to a later status.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can view the hold report (eDiscovery Administrator and eDiscovery Manager role groups)</strong><br><small>Tenant</small><br><small class="controls__note">Documented for eDiscovery in the Purview portal; Government pages list hold reports as In development. This first Choose users assigns Managers; -Member takes a mail-enabled security group (Managers subgroup, not Administrators).</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Role groups › eDiscovery Manager › Edit › Manage eDiscovery Manager › Choose users <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember &quot;eDiscoveryManager&quot; -Member &lt;name of security group&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Viewing and downloading the hold report (preview path; scripted alternative)</strong><br><small>Tenant</small><br><small class="controls__note">Path from the cloud-unspecified preview page; the Government path is not stated. The cmdlet is taken from Learn's sample script and reads hold status; it is not a switch for the report.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Dashboards › Hold report (preview) <a href="https://learn.microsoft.com/purview/edisc-hold-report" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-CaseHoldPolicy &lt;hold policy name&gt; -Case &lt;case ID&gt; -DistributionDetail</code> <a href="https://learn.microsoft.com/purview/edisc-hold-report-script" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The hold report is viewed through the roles in the first row. Learn says the person viewing needs eDiscovery Administrator or eDiscovery Manager (preview) permissions, and that an eDiscovery Manager sees only cases they are a member of. Learn also says you need to be a member of the Organization Management role group or be assigned the Role Management role to assign eDiscovery permissions.

The path and script in the second row come from Microsoft's preview documentation. Whether the same menu path and the Security & Compliance PowerShell script apply in GCC, GCC High and DoD is not stated in those pages. The script page notes the sample script is not supported under any Microsoft standard support programme.

## Open questions

- Will the hold report in GCC, GCC High and DoD match the preview behaviour on Learn, including the seven-day sync limit and the columns? Watch the eDiscovery hold report page on Learn and the Message center.
- Is the report switched on automatically in Government clouds or does an administrator enable it? Microsoft has not stated a default.
- Which licence or subscription covers the hold report in Government clouds? Watch the Microsoft Purview service description.
- Will the Hold report tab sit under eDiscovery > Dashboards in Government clouds as on the preview page?

<!-- rationale
risk: Low. The report is a read-only view of existing hold policies, and Learn's preview hold report page limits access to eDiscovery Administrators and eDiscovery Managers; Microsoft has not stated a default for Government clouds.
cost: Low. Learn names no meter or price for the hold report; the only cost shown is admin time and the premium eDiscovery subscription the preview page requires. Government licensing specific to this report is not yet published.
impact: Low. The preview documentation names eDiscovery Administrator and eDiscovery Manager permissions for viewing the report, so the people who notice it are eDiscovery administrators and managers, not other users.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Managers are assigned at Microsoft Purview portal > Settings > Role groups > eDiscovery Manager > Edit > Manage eDiscovery Manager > Choose users. | Found: Go to Settings > Role groups. ... On Role groups for Microsoft Purview solutions, select eDiscovery Manager. ... Select Edit. ... On Manage eDiscovery Manager, select Choose users or Choose groups. | Fix: Include the omitted page heading: Settings > Role groups > Role groups for Microsoft Purview solutions > eDiscovery Manager > Edit > Manage eDiscovery Manager > Choose users. Keep the note that this assigns Managers, not Administrators. | Source: https://learn.microsoft.com/purview/edisc-permissions
-->
