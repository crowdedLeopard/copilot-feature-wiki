---
title: "SharePoint admin center: Data access governance report of sites a group can access"
slug: "sharepoint-admin-center-data-access-governance-permission-report-for-a-given-group"
roadmapId: 561039
topic: "modern-work"
products: ["SharePoint"]
summary: "SharePoint administrators will get a Data access governance report listing every site a given group can access and how far that access goes. Microsoft's notice sets no act-by date; the report is optional to run."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for the group report. Microsoft Learn's reports page points to the SharePoint Advanced Management prerequisites for Data access governance reports; whether they apply to this report is not stated."
audiences: ["m365-admin","security","compliance"]
tags: ["sharepoint","oversharing","data-governance","admin-center","sharepoint-advanced-management","m365-copilot","powershell","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 561039"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561039"
    kind: "roadmap"
  - title: "MC1540348: Microsoft SharePoint: Data access governance report for group permissions"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1540348"
    kind: "message-center"
  - title: "Data access governance reports for SharePoint and OneDrive sites"
    url: "https://learn.microsoft.com/sharepoint/data-access-governance-reports"
    kind: "learn"
  - title: "Discover sites accessible by a given user with the snapshot report"
    url: "https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report"
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
  - title: "Get-SPODataAccessGovernanceInsight"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/get-spodataaccessgovernanceinsight?view=sharepoint-ps"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Running the permission report for a given group"
    scope: "group"
    ui: null
    api: null
    note: "Not yet documented on Microsoft Learn at the time of writing (November 2026). Microsoft's notice says it appears in Data access governance once rolled out."
  - governs: "Access to Data access governance reports in the SharePoint admin center"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Reports > Data access governance"
      docs: "https://learn.microsoft.com/sharepoint/data-access-governance-reports"
    api:
      kind: "powershell"
      call: "Get-SPODataAccessGovernanceInsight -ReportEntity <entity>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/get-spodataaccessgovernanceinsight?view=sharepoint-ps"
    note: "Needs SharePoint administrator credentials. Lists existing reports; does not show the group report is supported."
  - governs: "Today's alternative: sites accessible to named users, directly or through groups"
    scope: "user"
    ui:
      surface: "SharePoint admin center"
      path: "Reports > Data access governance > Site permissions for users > View reports > Create report"
      docs: "https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report"
    api:
      kind: "powershell"
      call: "Start-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport -ReportType Snapshot -Workload SharePoint -Name <name> -UserPrincipalNames <UPNs>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spodataaccessgovernanceinsight?view=sharepoint-ps"
    note: "Existing per-user report, not a group report. The PowerShell guide spells the parameter -UserEmailList; the cmdlet reference lists -UserPrincipalNames."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: documents the roadmap and Message Center description, the SharePoint Advanced Management prerequisites, and that Learn does not yet describe the group report."
  - date: "2026-11-16"
    note: "Corrected after verification: licensing now unknown for the group report, added the Get-SPODataAccessGovernanceInsight command, used the cmdlet reference's -UserPrincipalNames, and removed checklist items without matching controls."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 12 of 78 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 66
  unconfirmed: 0
  contradicted: 12
  attempts: 1
  hash: "36a52f4fd6393821e77fb92531ac469c"
---

## What's changing

Microsoft is adding a report to Data access governance in the SharePoint admin center that identifies every site a given group can access and the extent of that access. The roadmap item gives the reason: a single group with broad membership, or a special group for vendors, can expose sensitive content to unintended recipients.

Microsoft Learn does not describe the group report at the time of writing (November 2026), so what follows about its behaviour is the roadmap item's and Microsoft's notice's description. The Data access governance overview page lists no report for a group. The closest documented relative is the site permissions for users report, which lists all sites a user can access and shows whether access covers the entire site or specific sections, granted directly or indirectly through groups.

The roadmap item is Rolling out, with a target date of November CY2026, General Availability, for Worldwide, GCC, GCC High and DoD, on the web. Microsoft's notice MC1540348 (published 2026-11-05) says rollout will begin in late November 2026 and is expected to complete by early December 2026, which is later than "Rolling out" suggests; expect the report to be absent from some tenants until then. The notice sets no act-by date and gives 2027-01-08 as its end date.

## Why it matters

Broad-membership groups can expose sensitive content to unintended recipients, as the roadmap item and MC1540348 both say. A review that goes site by site does not naturally show that one group holds access to many sites; a report keyed on the group lets a SharePoint administrator ask "what can this group reach?" in one place.

Microsoft's notice says administrators can use the report to investigate potential exposure and to review group permissions before assigning Copilot licences. If nobody acts, nothing changes in the tenant, but vendor and other broad-membership groups stay as unexamined as they are today.

## Risk assessment

**Data exposure**

- The report is meant to name the sites a group can reach, so its output is itself sensitive. For the existing site permissions for users report, Microsoft Learn describes CSV download; the group report's output format is not yet documented.
- Microsoft Learn lists a known issue for Data access governance reports: they might not work if the organisation shows real rather than concealed user, group and site names. Changing the setting needs a Global Administrator.

**Security & identity**

- The report finds exposure; it does not fix it. Microsoft Learn points to Restricted access control, the Change history report and Site access review as follow-up actions for Data access governance findings, and none is part of this report.
- Microsoft Learn names two admin roles for SharePoint Advanced Management: SharePoint Administrator, and SharePoint Advanced Management Administrator for wider governance such as viewing metadata across SharePoint content. Which role the group report needs is not yet documented.

**Autonomy & actions**

- No change: Microsoft's notice describes a report that administrators run. It describes no automatic action on group permissions.

**Change & support**

- Microsoft Learn describes the user report as capturing data from up to 48 hours before generation, with a limit of five reports and a rerun interval of 30 days. Whether the group report shares these limits is not yet documented, so do not promise stakeholders real-time answers.
- Expect questions from site owners once a vendor group's reach is visible; decide in advance who contacts them.

## Cost and licensing

No price or meter is published for the group report, and no Microsoft page names its licence. For Data access governance reports in general, Microsoft Learn's reports page points to the SharePoint Advanced Management prerequisites page. That page says an organisation gets SharePoint Advanced Management capabilities when at least one user has a Microsoft Copilot licence, when a SharePoint K, P1 or P2 subscription is combined with the SharePoint Advanced Management Plan 1 add-on, or when it has Microsoft 365 E7. It also requires a base subscription: Office 365 E3, E5 or A5, Microsoft 365 E1, E3, E5 or A5, or Microsoft 365 GCC, GCC-High or DoD.

Treat this as background, not as a confirmed entitlement for the group report. The reports page adds a qualification: IT administrators with Microsoft 365 E5 licensing can access Data access governance reporting but cannot view or use the other SharePoint Advanced Management features, and the reports do not provide snapshot reports or remedial actions for them. Whether the group report counts as a snapshot report is not yet published.

Indirect cost is administrator time to run the report and work through what it finds.

## Scope

Microsoft's notice names SharePoint administrators responsible for managing and reviewing site permissions as the people affected. Microsoft Learn says Data access governance is opened by signing in to the SharePoint admin center with the SharePoint administrator credentials for your organisation.

The roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the web. Microsoft Learn says the Data access governance reports are currently unavailable for Microsoft 365 operated by 21Vianet, even with the required licences. The notice gives the rollout window as late November to early December 2026.

## Governance guidance

### Before rollout

- Inventory your tenant's existing SharePoint Advanced Management entitlement (Copilot licence, Plan 1 add-on or Microsoft 365 E7), but do not assume it guarantees access to the group report: Microsoft has not yet published the report-specific licensing requirement.
- List the broad-membership and vendor groups that hold access to sites, and name an owner for each, so findings have someone to act on them.
- Tell your SharePoint administrators about the new report, as Microsoft's notice recommends.

### At rollout

- Look for the report on the Data access governance page in the SharePoint admin center during the late November to early December 2026 window.
- Update internal documentation and workflows to include the report, as Microsoft's notice recommends.
- Use the site permissions for users report in the meantime to check named users, keeping in mind that it answers a different question.

### After rollout

- Run the report for each vendor and all-staff style group and record which sites each can reach.
- Review the findings against the sensitivity of the content, and assign each remedial step to a site owner or administrator.
- Review group permissions with the report before assigning Copilot licences, which Microsoft's notice names as a use.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Running the permission report for a given group</strong><br><small>Group</small><br><small class="controls__note">Not yet documented on Microsoft Learn at the time of writing (November 2026). Microsoft's notice says it appears in Data access governance once rolled out.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Access to Data access governance reports in the SharePoint admin center</strong><br><small>Tenant</small><br><small class="controls__note">Needs SharePoint administrator credentials. Lists existing reports; does not show the group report is supported.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Reports › Data access governance <a href="https://learn.microsoft.com/sharepoint/data-access-governance-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-SPODataAccessGovernanceInsight -ReportEntity &lt;entity&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/get-spodataaccessgovernanceinsight?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Today's alternative: sites accessible to named users, directly or through groups</strong><br><small>User</small><br><small class="controls__note">Existing per-user report, not a group report. The PowerShell guide spells the parameter -UserEmailList; the cmdlet reference lists -UserPrincipalNames.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Reports › Data access governance › Site permissions for users › View reports › Create report <a href="https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport -ReportType Snapshot -Workload SharePoint -Name &lt;name&gt; -UserPrincipalNames &lt;UPNs&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spodataaccessgovernanceinsight?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin centre path and no PowerShell parameter for the group report at the time of writing (November 2026). The Start-SPODataAccessGovernanceInsight reference lists PermissionsReport and PermissionedUsers among its ReportEntity values and no group-specific parameter set. The Get-SPODataAccessGovernanceInsight cmdlet lists existing Data access governance reports; it does not show that the new report is supported.

The user report is today's closest alternative. It answers "what can these users reach", not "what can this group reach". Microsoft Learn says to generate the site permissions for your organisation report at least once before it. The two Microsoft pages disagree on the parameter for the users: the PowerShell guide uses -UserEmailList and says it requires user principal names, while the cmdlet reference lists -UserPrincipalNames. The row uses the reference spelling.

The Reports setting in the Microsoft 365 admin center (clear "Display concealed user, group, and site names in all reports") needs a Global Administrator. Remedial options Microsoft Learn names are Restricted access control, the Change history report and Site access review; none is a control over this report.

## Open questions

- What are the report's exact admin centre path and inputs, and can it take Microsoft 365 groups, security groups and SharePoint groups? Watch the Data access governance page on Microsoft Learn.
- Is there a PowerShell equivalent, such as a new ReportEntity value or parameter set on Start-SPODataAccessGovernanceInsight? Watch the cmdlet reference page.
- Which licence and role does the group report need, and does the Microsoft 365 E5 limitation on snapshot reports apply to it? Watch the SharePoint Advanced Management prerequisites page.
- Does the report show access through nested groups and through sharing links as well as direct membership?
- Why does the roadmap show Rolling out while MC1540348 says rollout begins in late November 2026? Watch Message center for an update.

<!-- rationale
risk: Low. This is a reporting control: if nobody runs it, any group oversharing it would reveal stays as it is today. Microsoft's notice describes a report, not a change to site permissions; the default state is not stated.
cost: Low. The only cost the sources show is admin time. Data access governance reports sit under SharePoint Advanced Management licensing, but the licence for the group report itself is not yet published.
impact: Low. Microsoft's notice names SharePoint administrators as the people affected; site owners and group members see no change.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing; controls[0].note; Governance controls / absence: Microsoft Learn does not describe the group report and its overview lists no report for groups. | Found: Site permissions for users or groups report: Lists all sites a specified user or group can access and the extent of that access. Each report contains either users or groups, not both. | Fix: Replace the documentation-absence statements with 'Microsoft Learn now documents the Site permissions for users or groups snapshot report, with separate user and group reports.' Retain the roadmap status and Message Center rollout window as separately attributed plans. | Source: https://learn.microsoft.com/sharepoint/data-access-governance-reports
- [contradicted, blocker] controls[0]; Governance controls; Open questions / absence: Neither the group report's admin UI nor its PowerShell automation is documented. | Found: Retrieve the groups with Get-MgGroup, then pass the returned group objects directly to the TargetGroups parameter. | Fix: Populate the existing row's UI with 'Reports > Data access governance > Site permissions for users or groups > View reports > Create report > Create report for > Groups' using https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report. Populate its API with 'Start-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport -ReportType Snapshot -Workload SharePoint -Name <name> -TargetGroups <groups>' and docs https://learn.microsoft.com/sharepoint/powershell-for-data-access-governance. State in the note that <groups> means group objects returned by Get-MgGroup, and that the guide documents TargetGroups while the cmdlet reference currently omits it. Remove the corresponding documentation-absence prose and open question. | Source: https://learn.microsoft.com/sharepoint/powershell-for-data-access-governance
- [contradicted, blocker] controls[1].note; Governance controls / absence: Microsoft documentation does not show that Get-SPODataAccessGovernanceInsight supports the group report. | Found: Use the following command to check user and group permission reports: Get-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport | Fix: Replace 'does not show the group report is supported' and the matching prose with 'The PowerShell guide documents Get-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport for reviewing user and group permission reports.' Use https://learn.microsoft.com/sharepoint/powershell-for-data-access-governance as the supporting citation. | Source: https://learn.microsoft.com/sharepoint/powershell-for-data-access-governance
- [contradicted, blocker] controls[2].ui; Governance controls / admin-path: The user report path is Reports > Data access governance > Site permissions for users > View reports > Create report. | Found: From the Data access governance landing page, select View reports under Site permissions for users or groups. Select Create report to generate your report. | Fix: Replace the path in front matter and the rendered table with 'Reports > Data access governance > Site permissions for users or groups > View reports > Create report > Create report for > Users'. The renamed report and Users choice are documented at https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report. | Source: https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report
- [contradicted, blocker] Risk assessment: Data exposure / absence: The group report's output format is not documented. | Found: Select Download report for all groups in a group report, or Download detailed report in a user report, to get a ZIP file containing CSV files for all recipients included in the report. | Fix: Replace 'the group report's output format is not yet documented' with 'the group report supports CSV download for a selected group and ZIP download containing CSV files for all included groups', citing https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report. | Source: https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report
- [contradicted, blocker] Risk assessment: Security & identity; Open questions / absence: Which role the group report needs is not documented. | Found: Sign in to the SharePoint admin center with the SharePoint administrator credentials for your organization. | Fix: Replace 'Which role the group report needs is not yet documented' with 'The Data access governance overview, which now includes the group report, directs administrators to sign in with SharePoint administrator credentials.' Remove the role-absence portion of the corresponding open question. Cite https://learn.microsoft.com/sharepoint/data-access-governance-reports. | Source: https://learn.microsoft.com/sharepoint/data-access-governance-reports
- [contradicted, blocker] Risk assessment: Change & support / absence: Whether the group report shares the 48-hour data-age limit is undocumented. | Found: Run the site permissions for users or groups report Important Review these important details before creating your first report: Reports capture data from up to 48 hours before generation. | Fix: Replace the uncertainty about data age with 'The user and group reports capture data from up to 48 hours before generation', citing https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report. | Source: https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report
- [contradicted, blocker] Risk assessment: Change & support / absence: Whether the group report shares the five-report limit is undocumented. | Found: Run the site permissions for users or groups report You can have up to five reports. | Fix: Replace the uncertainty about the report-count limit with 'Microsoft documents a maximum of five reports for the site permissions for users or groups report', citing https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report. | Source: https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report
- [contradicted, blocker] Risk assessment: Change & support / absence: Whether the group report shares the 30-day rerun interval is undocumented. | Found: Run the site permissions for users or groups report You can run reports again every 30 days. | Fix: Replace the uncertainty about reruns with 'The user and group reports can be run again every 30 days', citing https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report. | Source: https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report
- [contradicted, blocker] front matter: licensing; Cost and licensing; Governance guidance; rationale: cost; Open questions / licensing: The group report's licensing model is unknown and no Microsoft page establishes its entitlement. | Found: The Site permissions for users or groups report is one of the Data access governance snapshot reports available with SharePoint Advanced Management. | Fix: Set licensing.model to 'mixed'. Replace the licensing-absence notes, body caveats, checklist caveat and rationale premise with 'The group report is a SharePoint Advanced Management snapshot report. The SAM prerequisites provide entitlement through at least one assigned Microsoft Copilot licence, SharePoint K/P1/P2 plus the SAM Plan 1 add-on, or Microsoft 365 E7, with the listed base subscription. Microsoft 365 E5 alone does not provide snapshot reports.' Cite the already listed report, prerequisites and overview pages. Remove the open question about whether its licence is published; retain the existing exact base-plan list. | Source: https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report
- [contradicted, blocker] Cost and licensing; Open questions / absence: Whether the group report is a snapshot report, and therefore subject to the E5 snapshot exclusion, is unpublished. | Found: The Site permissions for users or groups report is one of the Data access governance snapshot reports available with SharePoint Advanced Management. | Fix: Replace the snapshot-classification uncertainty with 'The group report is a snapshot report, so the overview's Microsoft 365 E5-only reporting entitlement does not include it.' Remove that part of the corresponding open question. Cite https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report and https://learn.microsoft.com/sharepoint/data-access-governance-reports. | Source: https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report
- [contradicted, blocker] Why it matters; Risk assessment: Autonomy & actions; rationale: risk / consistency: The page says nothing changes if nobody acts while also saying the arrival default is unknown. | Found: defaultState: "unknown" If nobody acts, nothing changes in the tenant No change: Microsoft's notice describes a report that administrators run. the default state is not stated. | Fix: Keep defaultState 'unknown'. Replace 'If nobody acts, nothing changes in the tenant' with 'No source says existing site permissions change on arrival'. Replace the Autonomy & actions bullet with 'Microsoft describes a report administrators run; it does not describe automatic changes to group permissions.' In the risk rationale replace the categorical no-action assertion with 'Rate on existing site permissions continuing, because Microsoft has not stated the arrival default.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / absence: The Start cmdlet reference lists no group-specific parameter set. | Found: Searched: SharePoint site permissions for users or groups report group PowerShell GroupId GroupIds ReportEntity licensing default automatic. Read Start-SPODataAccessGovernanceInsight and powershell-for-data-access-governance: only the guide documents TargetGroups. | Fix: Replace the reference-only absence sentence with 'The PowerShell guide documents -TargetGroups, although the Start-SPODataAccessGovernanceInsight reference currently omits it.' Cite https://learn.microsoft.com/sharepoint/powershell-for-data-access-governance alongside the existing cmdlet reference.
-->
