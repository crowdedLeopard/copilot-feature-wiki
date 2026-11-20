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
  model: "mixed"
  notes: "The group report is a SharePoint Advanced Management snapshot report. Entitlement comes through at least one assigned Microsoft Copilot licence, SharePoint K/P1/P2 plus the SAM Plan 1 add-on, or Microsoft 365 E7, with a listed base subscription. Microsoft 365 E5 alone does not provide snapshot reports."
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
  - title: "Discover sites accessible by a user or group with the snapshot report"
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
    ui:
      surface: "SharePoint admin center"
      path: "Reports > Data access governance > Site permissions for users or groups > View reports > Create report > Create report for > Groups"
      docs: "https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report"
    api:
      kind: "powershell"
      call: "Start-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport -ReportType Snapshot -Workload SharePoint -Name <name> -TargetGroups <groups>"
      docs: "https://learn.microsoft.com/sharepoint/powershell-for-data-access-governance"
    note: "<groups> means group objects returned by Get-MgGroup. The guide documents TargetGroups; the cmdlet reference currently omits it."
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
    note: "Needs SharePoint administrator credentials. The PowerShell guide documents Get-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport for reviewing user and group permission reports."
  - governs: "Today's alternative: sites accessible to named users, directly or through groups"
    scope: "user"
    ui:
      surface: "SharePoint admin center"
      path: "Reports > Data access governance > Site permissions for users or groups > View reports > Create report > Create report for > Users"
      docs: "https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report"
    api:
      kind: "powershell"
      call: "Start-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport -ReportType Snapshot -Workload SharePoint -Name <name> -UserPrincipalNames <UPNs>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spodataaccessgovernanceinsight?view=sharepoint-ps"
    note: "The same report with Users selected, not the group report. The PowerShell guide spells the parameter -UserEmailList; the cmdlet reference lists -UserPrincipalNames."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-20"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: documents the roadmap and Message Center description, the SharePoint Advanced Management prerequisites, and that Learn does not yet describe the group report."
  - date: "2026-11-16"
    note: "Corrected after verification: licensing now unknown for the group report, added the Get-SPODataAccessGovernanceInsight command, used the cmdlet reference's -UserPrincipalNames, and removed checklist items without matching controls."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 12 of 78 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: Learn now documents the group report, so its admin path, PowerShell call, CSV/ZIP download, limits, role and licensing (SharePoint Advanced Management snapshot report) are stated, and the arrival-default wording now agrees with the unknown default."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 65 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-20"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 63
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "2d28fa7cd802c60803780f7d47877ea5"
---

## What's changing

Microsoft is adding a report to Data access governance in the SharePoint admin center that identifies every site a given group can access and the extent of that access. The roadmap item gives the reason: a single group with broad membership, or a special group for vendors, can expose sensitive content to unintended recipients.

Microsoft Learn now documents the Site permissions for users or groups snapshot report, with separate user and group reports. The Data access governance overview describes it as listing all sites a specified user or group can access and the extent of that access, and says each report contains either users or groups, not both.

The roadmap item is Rolling out, with a target date of November CY2026, General Availability, for Worldwide, GCC, GCC High and DoD, on the web. Microsoft's notice MC1540348 (published 2026-11-05) says rollout will begin in late November 2026 and is expected to complete by early December 2026, which is later than "Rolling out" suggests; expect the report to be absent from some tenants until then. The notice sets no act-by date and gives 2027-01-08 as its end date.

## Why it matters

Broad-membership groups can expose sensitive content to unintended recipients, as the roadmap item and MC1540348 both say. A review that goes site by site does not naturally show that one group holds access to many sites; a report keyed on the group lets a SharePoint administrator ask "what can this group reach?" in one place.

Microsoft's notice says administrators can use the report to investigate potential exposure and to review group permissions before assigning Copilot licences. No source says existing site permissions change on arrival, but vendor and other broad-membership groups stay as unexamined as they are today until someone runs the report.

## Risk assessment

**Data exposure**

- The report is meant to name the sites a group can reach, so its output is itself sensitive. Microsoft Learn says the group report supports CSV download for a selected group and ZIP download containing CSV files for all included groups.
- Microsoft Learn lists a known issue for Data access governance reports: they might not work if the organisation shows real rather than concealed user, group and site names. Changing the setting needs a Global Administrator.

**Security & identity**

- The report finds exposure; it does not fix it. Microsoft Learn points to Restricted access control, the Change history report and Site access review as follow-up actions for Data access governance findings, and none is part of this report.
- The Data access governance overview, which now includes the group report, directs administrators to sign in with SharePoint administrator credentials.

**Autonomy & actions**

- Microsoft describes a report administrators run; it does not describe automatic changes to group permissions.

**Change & support**

- The user and group reports capture data from up to 48 hours before generation, so do not promise stakeholders real-time answers.
- Microsoft documents a maximum of five reports for the site permissions for users or groups report. The user and group reports can be run again every 30 days.
- Expect questions from site owners once a vendor group's reach is visible; decide in advance who contacts them.

## Cost and licensing

The group report is a SharePoint Advanced Management snapshot report. The SharePoint Advanced Management prerequisites page gives entitlement through at least one assigned Microsoft Copilot licence, through a SharePoint K, P1 or P2 subscription combined with the SharePoint Advanced Management Plan 1 add-on, or through Microsoft 365 E7. It also requires a base subscription: Office 365 E3, E5 or A5, Microsoft 365 E1, E3, E5 or A5, or Microsoft 365 GCC, GCC-High or DoD.

The Data access governance overview adds a qualification: IT administrators with Microsoft 365 E5 licensing can access Data access governance reporting but cannot view or use the other SharePoint Advanced Management features, and the reports do not provide snapshot reports or remedial actions for them. The group report is a snapshot report, so the overview's Microsoft 365 E5-only reporting entitlement does not include it.

Indirect cost is administrator time to run the report and work through what it finds.

## Scope

Microsoft's notice names SharePoint administrators responsible for managing and reviewing site permissions as the people affected. Microsoft Learn says Data access governance is opened by signing in to the SharePoint admin center with the SharePoint administrator credentials for your organisation.

The roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the web. Microsoft Learn says the Data access governance reports are currently unavailable for Microsoft 365 operated by 21Vianet, even with the required licences. The notice gives the rollout window as late November to early December 2026.

## Governance guidance

### Before rollout

- Inventory your tenant's existing SharePoint Advanced Management entitlement (Copilot licence, Plan 1 add-on or Microsoft 365 E7) and base subscription, and remember that Microsoft 365 E5 alone does not provide snapshot reports.
- List the broad-membership and vendor groups that hold access to sites, and name an owner for each, so findings have someone to act on them.
- Tell your SharePoint administrators about the new report, as Microsoft's notice recommends.

### At rollout

- Look for the report on the Data access governance page in the SharePoint admin center during the late November to early December 2026 window.
- Update internal documentation and workflows to include the report, as Microsoft's notice recommends.
- Use the Site permissions for users or groups report, with Users selected, to check named users if you need an answer before the group option appears in your tenant.

### After rollout

- Run the report for each vendor and all-staff style group and record which sites each can reach.
- Review the findings against the sensitivity of the content, and assign each remedial step to a site owner or administrator.
- Review group permissions with the report before assigning Copilot licences, which Microsoft's notice names as a use.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Running the permission report for a given group</strong><br><small>Group</small><br><small class="controls__note">&lt;groups&gt; means group objects returned by Get-MgGroup. The guide documents TargetGroups; the cmdlet reference currently omits it.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Reports › Data access governance › Site permissions for users or groups › View reports › Create report › Create report for › Groups <a href="https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport -ReportType Snapshot -Workload SharePoint -Name &lt;name&gt; -TargetGroups &lt;groups&gt;</code> <a href="https://learn.microsoft.com/sharepoint/powershell-for-data-access-governance" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Access to Data access governance reports in the SharePoint admin center</strong><br><small>Tenant</small><br><small class="controls__note">Needs SharePoint administrator credentials. The PowerShell guide documents Get-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport for reviewing user and group permission reports.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Reports › Data access governance <a href="https://learn.microsoft.com/sharepoint/data-access-governance-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-SPODataAccessGovernanceInsight -ReportEntity &lt;entity&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/get-spodataaccessgovernanceinsight?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Today's alternative: sites accessible to named users, directly or through groups</strong><br><small>User</small><br><small class="controls__note">The same report with Users selected, not the group report. The PowerShell guide spells the parameter -UserEmailList; the cmdlet reference lists -UserPrincipalNames.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Reports › Data access governance › Site permissions for users or groups › View reports › Create report › Create report for › Users <a href="https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport -ReportType Snapshot -Workload SharePoint -Name &lt;name&gt; -UserPrincipalNames &lt;UPNs&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spodataaccessgovernanceinsight?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents both an admin centre path and a PowerShell call for the group report. In the PowerShell guide, the groups are the group objects returned by Get-MgGroup, passed to -TargetGroups. The guide documents -TargetGroups, although the Start-SPODataAccessGovernanceInsight reference currently omits it.

The PowerShell guide documents Get-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport for reviewing user and group permission reports. Microsoft Learn says to generate the site permissions for your organisation report at least once before running the users or groups report.

The two Microsoft pages disagree on the parameter for the users: the PowerShell guide uses -UserEmailList and says it requires user principal names, while the cmdlet reference lists -UserPrincipalNames. The user row uses the reference spelling.

The Reports setting in the Microsoft 365 admin center (clear "Display concealed user, group, and site names in all reports") needs a Global Administrator. Remedial options Microsoft Learn names are Restricted access control, the Change history report and Site access review; none is a control over this report.

## Open questions

- Does the Start-SPODataAccessGovernanceInsight reference page add -TargetGroups, which only the PowerShell guide documents at the time of writing? Watch the cmdlet reference page.
- Why does the roadmap show Rolling out while MC1540348 says rollout begins in late November 2026, when Microsoft Learn already documents the group report? Watch Message center for an update.
- Does the SharePoint Advanced Management Administrator role change what an administrator sees in the group report compared with the SharePoint administrator role? Watch the SharePoint Advanced Management prerequisites page.

<!-- rationale
risk: Low. This is a reporting control, and Microsoft's notice describes a report, not a change to site permissions. Rate on existing site permissions continuing, because Microsoft has not stated the arrival default.
cost: Low. The only cost the sources show is admin time. The group report is a SharePoint Advanced Management snapshot report, so it depends on the SharePoint Advanced Management entitlement the prerequisites page describes.
impact: Low. Microsoft's notice names SharePoint administrators as the people affected; site owners and group members see no change.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary; What's changing; Why it matters / behaviour: The group report lists every site a given group can access, without qualifying the group types or nested-group access. | Found: Group reports don't expand nested-group permissions. If a security group is a member of another group, access granted to the parent group isn't included in the nested group's report. | Fix: Replace the summary's first sentence with 'SharePoint administrators will get a report of site access for Microsoft 365 and Microsoft Entra security groups, excluding access inherited through nested groups.' Add to the Learn description in What's changing: 'SharePoint groups and distribution lists are not supported inputs, and group reports exclude access inherited through nested-group membership.' These qualifications are stated at https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report. Qualify the other unqualified descriptions of the report's reach the same way. | Source: https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report
- [contradicted, blocker] front matter: cost; rationale: cost; Cost and licensing / consistency: Cost is low because administrator time is the only cost the sources show, despite the page's documented paid entitlement routes. | Found: cost: Low. The only cost the sources show is admin time. / Cost and licensing: ... a SharePoint K, P1 or P2 subscription combined with the SharePoint Advanced Management Plan 1 add-on ... | Fix: Set cost to 'medium' under the standard's add-on licensing category. Replace the cost rationale with 'Medium. Tenants without an existing qualifying entitlement may need a Microsoft Copilot licence or the SharePoint Advanced Management Plan 1 add-on; tenants already entitled mainly incur administrator time.' The entitlement routes are documented at https://learn.microsoft.com/sharepoint/sharepoint-advanced-management-prerequisites. Keep the existing licensing paragraph.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: The group report is reached through SharePoint admin center > Reports > Data access governance > Site permissions for users or groups > View reports > Create report > Create report for > Groups. | Found: From the Data access governance landing page, select View reports under Site permissions for users or groups. ... Select Create report ... Under Create report for, select Users or Groups, then select Next. | Fix: The printed labels are in the documented order, and the navigation prefix is documented at the cited overview. To finish the route to running a report, use 'Reports > Data access governance > Site permissions for users or groups > View reports > Create report > Create report for > Groups > Create and run'. In the row note add 'Before Create and run, choose the groups, specify Scope and provide Report name.' The intermediate selections and final button are documented at https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report. | Source: https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report
- [supported, minor] controls[2].ui / admin-path: The user report is reached through SharePoint admin center > Reports > Data access governance > Site permissions for users or groups > View reports > Create report > Create report for > Users. | Found: From the Data access governance landing page, select View reports under Site permissions for users or groups. ... Select Create report ... Under Create report for, select Users or Groups, then select Next. | Fix: To finish the route to running the report, use 'Reports > Data access governance > Site permissions for users or groups > View reports > Create report > Create report for > Users > Create and run'. In the row note add 'Before Create and run, choose the users, specify Scope and provide Report name.' These steps are documented at https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report. | Source: https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report
-->
