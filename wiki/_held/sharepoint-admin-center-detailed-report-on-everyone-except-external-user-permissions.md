---
title: "SharePoint admin center: item-level report on Everyone and Everyone except external users permissions"
slug: "sharepoint-admin-center-detailed-report-on-everyone-except-external-user-permissions"
roadmapId: 561038
topic: "modern-work"
products: ["SharePoint"]
summary: "A SharePoint Advanced Management report lists each item shared with Everyone or Everyone except external users. Administrators run it on demand; it needs a specific admin role and licence condition."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's prerequisites page requires a base subscription plus one of: a Microsoft Copilot licence assigned to at least one user, the SharePoint Advanced Management Plan 1 add-on, or Microsoft 365 E7. No price for this report is stated."
audiences: ["m365-admin","security","compliance"]
tags: ["sharepoint","sharepoint-advanced-management","oversharing","data-governance","m365-copilot","admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 561038"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561038"
    kind: "roadmap"
  - title: "Get item-level permission details for \"Everyone except external users\" and \"Everyone\""
    url: "https://learn.microsoft.com/sharepoint/data-access-governance-detailed-eeeu-everyone-permissions-report"
    kind: "learn"
  - title: "Data access governance reports for SharePoint and OneDrive sites"
    url: "https://learn.microsoft.com/sharepoint/data-access-governance-reports"
    kind: "learn"
  - title: "Prerequisites for SharePoint Advanced Management"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-advanced-management-prerequisites"
    kind: "learn"
  - title: "Manage Data access governance reports by using SharePoint Online PowerShell"
    url: "https://learn.microsoft.com/sharepoint/powershell-for-data-access-governance"
    kind: "learn"
  - title: "Start-SPODataAccessGovernanceInsight"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spodataaccessgovernanceinsight?view=sharepoint-ps"
    kind: "learn"
videos: []
related: ["sharepoint-admin-center-data-access-governance-permission-report-for-a-given-group","restricted-content-discovery"]
controls:
  - governs: "Running the item-level report for Everyone except external users or Everyone"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Reports > Data access governance > Snapshot reports > Sites and files shared via special SharePoint groups > View reports > Content shared with 'Everyone except external users' group > Run report"
      docs: "https://learn.microsoft.com/sharepoint/data-access-governance-detailed-eeeu-everyone-permissions-report"
    api:
      kind: "powershell"
      call: "Start-SPODataAccessGovernanceInsight -ReportEntity EveryoneExceptExternalUsers -ReportType Snapshot"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spodataaccessgovernanceinsight?view=sharepoint-ps"
    note: "Needs the SharePoint Advanced Management Administrator role. Use -ReportEntity Everyone for the Everyone report. Requires module version 16.0.27215.12000 or later."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-01T23:00:02"
changes:
  - date: "2026-11-23"
    note: "New briefing: Launched item-level report for EEEU and Everyone permissions, with its admin path, PowerShell call, role and licence conditions."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 60 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 56
  unconfirmed: 2
  contradicted: 2
  attempts: 1
  hash: "6a36458f05e2757e942bcdc793d85aa5"
---

## What's changing

The SharePoint admin center now has a Data access governance snapshot report, **Sites and files shared via special SharePoint groups**, that gives item-level permission details for the special SharePoint groups **Everyone except external users** (EEEU) and **Everyone**. Microsoft's page describes it as exact item-level permission details for every item where either group is the recipient.

An administrator runs the report on demand and downloads a ZIP file containing a CSV. Each row identifies one item with its hierarchy of identifiers (tenant, site, web, list, item), the permission level granted, the sharing link where one applies and, when access is indirect, the parent group. A `TotalUserCount` column gives the number of users who accessed the item at least once. Each of the two groups has its own report.

The report covers both SharePoint and OneDrive and cannot be scoped to one workload, according to the page. It excludes permissions granted to EEEU or Everyone for system files and system groups, for example the Everyone group inside Style Resource Readers on classic publishing sites.

The roadmap record gives the status as Launched, with a target date of August CY2026, release phase General Availability, cloud Worldwide (Standard Multi-Tenant) and platform Web.

## Why it matters

The existing site permissions report tells you which sites are overshared; this report tells you which items are, and how access was granted. Microsoft's page positions it for cleanup by script rather than by waiting on individual site owners, and says content shared with these groups is visible to every internal user and surfaces directly in Microsoft Copilot search results.

If nobody runs it, nothing changes in your tenant: no source says it runs by itself. The exposure it lists already exists. Expect the first run to produce a large file for tenants that have long used EEEU, and plan who will triage it, because the output is capped at 1 million rows.

## Risk assessment

**Data exposure**
- The CSV lists item URLs and paths for every item reached through EEEU or Everyone, so treat the downloaded file as sensitive. Viewing names, paths and URLs across sites is a capability of the SharePoint Advanced Management Administrator role, which a Global administrator must assign.
- Coverage gaps: permissions for system files and system groups are left out, and the report reflects data up to 48 hours old, so very recent changes may not appear.

**Security & identity**
- Standard SharePoint administrators and Global administrators cannot view file properties across sites they do not own, per the page. Limit the SharePoint Advanced Management Administrator role to the people who will triage findings.
- The report is read-only listing; it does not remove access. Remediation is separate and the Data access governance page names restricted access control, the Change history report and Site access review as options.

**Autonomy & actions**
- No change: running the report starts no automated cleanup. Microsoft's page says you can fix findings through scripting.

**Change & support**
- Reports can be run again every 30 days, so schedule runs deliberately rather than regenerating during a clean-up.
- The site permissions for your organization report must have been generated at least once before the first run.

## Cost and licensing

Microsoft's prerequisites page for SharePoint Advanced Management requires one of these base subscriptions: Office 365 E3, E5 or A5, Microsoft 365 E1, E3, E5 or A5, or Microsoft 365 GCC, GCC-High or DoD. It then gives three routes to SharePoint Advanced Management capabilities: at least one user in the organisation assigned a Microsoft Copilot licence; a subscription that includes SharePoint K, P1 or P2 plus the SharePoint Advanced Management Plan 1 add-on; or Microsoft 365 E7. The Start-SPODataAccessGovernanceInsight reference also says a SharePoint Advanced Management licence is required to run these reports.

The Data access governance page adds that IT administrators with Microsoft 365 E5 licensing can reach Data access governance reporting but cannot view or use snapshot reports or remedial actions. This report is a snapshot report.

The pages read state no separate price or meter for this report. Indirect cost is admin time to assign the role, run the report and work through a file that can reach 1 million rows.

## Scope

- **Who sees it:** administrators holding the SharePoint Advanced Management Administrator role, assigned by a Global administrator. Microsoft's page on the report says you need that role.
- **Content covered:** SharePoint and OneDrive together; the report cannot be limited to one workload.
- **Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Web. The Data access governance page says the reports are currently unavailable for Microsoft 365 operated by 21Vianet, even with the required licences.
- **PowerShell route:** the report needs `Microsoft.Online.SharePoint.PowerShell` version 16.0.27215.12000 or later, published April 30, 2026.
- **Prerequisites:** the site permissions for your organization report generated at least once; licence conditions as in Cost and licensing.

## Governance guidance

### Before rollout
- Ask a Global administrator to assign the SharePoint Advanced Management Administrator role to the named people who will run and triage the report.
- Confirm the tenant meets one of the SharePoint Advanced Management licence conditions on the prerequisites page.
- Generate the site permissions for your organization report once, because the item-level report requires it.
- Decide where the downloaded CSV will be stored and who may open it, since it lists item URLs.

### At rollout
- Run the report for **Everyone except external users** first, then for **Everyone**, from SharePoint admin center > Reports > Data access governance.
- Download the ZIP and check the row count against the 1 million row limit.
- Filter on SiteId or ParentGroupName to separate public-site membership from single files shared directly with the group.

### After rollout
- Remove or narrow the permissions the CSV identifies, using the remedial options on the Data access governance page.
- Schedule a re-run no sooner than 30 days later to confirm the findings have cleared.
- Review the Copilot exposure of the highest-count items first, using TotalUserCount to rank them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Running the item-level report for Everyone except external users or Everyone</strong><br><small>Tenant</small><br><small class="controls__note">Needs the SharePoint Advanced Management Administrator role. Use -ReportEntity Everyone for the Everyone report. Requires module version 16.0.27215.12000 or later.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Reports › Data access governance › Snapshot reports › Sites and files shared via special SharePoint groups › View reports › Content shared with 'Everyone except external users' group › Run report <a href="https://learn.microsoft.com/sharepoint/data-access-governance-detailed-eeeu-everyone-permissions-report" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPODataAccessGovernanceInsight -ReportEntity EveryoneExceptExternalUsers -ReportType Snapshot</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spodataaccessgovernanceinsight?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The report is run by the SharePoint Advanced Management Administrator role, which a Global administrator must assign; the page gives no other switch that turns the report on or off. The UI and PowerShell routes run the same report: the cmdlet's DetailedEEEUParameterSet takes only -ReportEntity and -ReportType, with no workload parameter.

The report does not change permissions. Microsoft's Data access governance page lists restricted access control, the Change history report and Site access review as remedial actions for what the reports find. Those are existing controls for acting on findings, not controls over the report itself.

## Open questions

- Will this report be offered to Microsoft 365 GCC, GCC High and DoD tenants? The roadmap record lists Worldwide (Standard Multi-Tenant) only; watch the roadmap item and Message center.
- What does the file contain when more than 1 million items qualify, given the 1 million row limit on the download? Watch the report's Learn page.
- Does the 30-day rerun interval apply to each report separately (EEEU and Everyone) or to the pair? Watch the report's Learn page.

<!-- rationale
risk: Low. The report only lists where Everyone or Everyone except external users hold access; it changes no permissions. The exposure it reveals already exists, and the CSV it produces contains item URLs.
cost: Low. Microsoft's prerequisites page ties SharePoint Advanced Management to a Copilot licence in the tenant, the Plan 1 add-on or Microsoft 365 E7; the main cost is admin time to run it and act on results.
impact: Low. Only administrators who hold the SharePoint Advanced Management Administrator role see the report; end users are not notified or changed by it.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment; Governance controls; rationale: risk and impact / behaviour: Running the report is read-only, changes no permissions and starts no automated cleanup. | Found: Searched: SharePoint detailed EEEU Everyone snapshot report read only permission changes automatic remediation notifications. Read the report page, DAG overview and PowerShell guidance/reference; none explicitly guarantees no permission writes or automated cleanup. | Fix: Replace the read-only/no-permission-change/no-automated-cleanup assurances in Risk assessment, Governance controls and the rationales with: 'The report captures the permission state of these groups at a specific point in time; Microsoft describes remediation as a subsequent action.' Source: https://learn.microsoft.com/sharepoint/data-access-governance-detailed-eeeu-everyone-permissions-report.
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: An unqualified low-cost rating, meaning indirect costs only, fits all the documented licensing routes. | Found: cost: "low"; licensing.model: "mixed"; 'a subscription that includes SharePoint K, P1 or P2 plus the SharePoint Advanced Management Plan 1 add-on'. The standard defines low as 'indirect cost only: admin time, communications, training'. | Fix: Set cost to 'medium'. Replace the cost rationale with: 'Medium. Tenants without an existing qualifying entitlement may need a Microsoft Copilot licence or the SharePoint Advanced Management Plan 1 add-on. For tenants already entitled, the work is admin time to run the report and act on findings.' Keep the published licensing conditions unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: impact / behaviour: End users are not notified when the report runs. | Found: Searched: "sites and files" "report" "notifications"; SharePoint detailed EEEU Everyone snapshot report read only permission changes automatic remediation notifications. Read the report page, DAG overview and PowerShell guidance; no end-user notification guarantee was stated. | Fix: Remove 'end users are not notified or changed by it' from the impact rationale. Retain 'Low. Only administrators who hold the SharePoint Advanced Management Administrator role see the report.'
- [supported, minor] Governance guidance: At rollout / admin-path: SharePoint admin center > Reports > Data access governance is the starting route for running these reports. | Found: In the SharePoint admin center, in the navigation pane, expand Reports, and then select Data access governance. Under Snapshot reports, in the Sites and files shared via special SharePoint groups section, select View reports. | Fix: Expand the abbreviated route to: 'SharePoint admin center > Reports > Data access governance > Snapshot reports > Sites and files shared via special SharePoint groups > View reports > Content shared with the selected group > Run report'. The full route in controls[0].ui is already correct. | Source: https://learn.microsoft.com/sharepoint/data-access-governance-detailed-eeeu-everyone-permissions-report
- [contradicted, minor] Governance guidance compared with controls / consistency: The controls table covers all the controls the governance checklist asks administrators to set or check. | Found: Checklist: 'Ask a Global administrator to assign ... the role'; 'Generate the site permissions ... report once'; 'using the remedial options'. Table: only 'Running the item-level report for Everyone except external users or Everyone'. | Fix: The role assignment, prerequisite site-permissions report generation and referenced remedial options have no table rows. Do not add rows in this correction; label these checklist steps as prerequisites or follow-up actions documented in the cited Learn pages, rather than controls located by this table.
-->
