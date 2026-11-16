---
title: "SharePoint admin center: Data access governance report of sites a group can access"
slug: "sharepoint-admin-center-data-access-governance-permission-report-for-a-given-group"
roadmapId: 561039
topic: "modern-work"
products: ["SharePoint"]
summary: "SharePoint administrators will get a Data access governance report that lists every site a given group can access and how far that access goes. Microsoft's notice asks admins to review site permissions and brief their team."
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
  notes: "Microsoft Learn ties Data access governance reports to SharePoint Advanced Management: one Microsoft Copilot licence in the organisation, the SharePoint Advanced Management Plan 1 add-on, or Microsoft 365 E7. Licensing for the group report itself is not yet published."
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
  - title: "Get item-level permission details for \"Everyone except external users\" and \"Everyone\""
    url: "https://learn.microsoft.com/sharepoint/data-access-governance-detailed-eeeu-everyone-permissions-report"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Running the permission report for a given group"
    scope: "group"
    ui: null
    api: null
    note: "Not yet documented on Microsoft Learn at the time of writing (November 2026). Report appears under Data access governance once rolled out, per Microsoft's notice."
  - governs: "Access to Data access governance reports in the SharePoint admin center"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Reports > Data access governance"
      docs: "https://learn.microsoft.com/sharepoint/data-access-governance-reports"
    api: null
    note: "Sign-in with SharePoint administrator credentials. General page for existing reports; it does not yet list the group report."
  - governs: "Today's alternative: sites accessible to named users, directly or through groups"
    scope: "user"
    ui:
      surface: "SharePoint admin center"
      path: "Reports > Data access governance > Site permissions for users > View reports > Create report"
      docs: "https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report"
    api:
      kind: "powershell"
      call: "Start-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport -ReportType Snapshot -Workload SharePoint -Name <name> -UserEmailList <UPNs>"
      docs: "https://learn.microsoft.com/sharepoint/powershell-for-data-access-governance"
    note: "Existing per-user report, not a group report. Microsoft Learn says to generate the site permissions for your organisation report at least once first."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: documents the roadmap and Message Center description, the SharePoint Advanced Management prerequisites, and that Learn does not yet describe the group report."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 65
  unconfirmed: 2
  contradicted: 3
  attempts: 1
---

## What's changing

Microsoft is adding a report to Data access governance in the SharePoint admin center that identifies every site a given group can access and the extent of that access. The roadmap item gives the reason: a single group with broad membership, or a special group for vendors, can expose sensitive content to unintended recipients.

Microsoft Learn does not yet describe the group report itself, so what follows about its behaviour is the roadmap item's and Microsoft's notice's description. At the time of writing (November 2026) the Data access governance page lists the site permissions for your organisation report, the site permissions for users report and the sensitivity label report as snapshot reports, with no report for a group. The site permissions for users report is the closest documented relative: it lists all sites a user can access and shows whether access covers the entire site or only specific items, granted directly or through groups.

The roadmap item is Rolling out, with a target date of November CY2026, General Availability, for Worldwide, GCC, GCC High and DoD, on the web. Microsoft's notice MC1540348 (published 5 November 2026) says rollout begins in late November 2026 and is expected to complete by early December 2026, which is later than "Rolling out" suggests; expect the report to be absent from some tenants until then. The notice sets no act-by date and lists its end date as 8 January 2027.

## Why it matters

Group-based access is how most oversharing happens quietly: one group added to many sites grants all its members the same reach, and a site-by-site review never shows the pattern. A report keyed on the group lets a SharePoint administrator answer "what can this group reach?" in one place, which the per-site and per-user reports answer only indirectly.

Microsoft's notice says administrators can use the report to investigate potential exposure and to review group permissions before assigning Copilot licences. If nobody acts, nothing changes in the tenant, but vendor and other broad-membership groups stay as unexamined as they are today.

## Risk assessment

**Data exposure**

- The report is meant to surface sites a group can reach, so its output names sites and the extent of access. Treat it as sensitive: Microsoft Learn describes the existing site permissions for users report as downloadable as CSV files, and the group report's output format is not yet documented.
- Reports may not work if the organisation displays real user, group and site names rather than concealed ones. Microsoft Learn lists this as a known issue for Data access governance reports, so a Global Administrator may need to change the Reports setting in the Microsoft 365 admin center.

**Security & identity**

- The report is the investigative step, not a fix. Microsoft Learn points to Restricted access control, the Change history report and Site access review as the follow-up actions for Data access governance findings; none of them is part of this report.
- Microsoft Learn names two admin roles for Data access governance: SharePoint Administrator, and SharePoint Advanced Management Administrator for wider governance capabilities. Which of them the group report requires is not yet documented.

**Autonomy & actions**

No change: Microsoft's notice describes a report that administrators run. It describes no automatic action on group permissions.

**Change & support**

- Microsoft Learn describes Data access governance reports as snapshots taken from data up to 48 hours before generation, with limits on how often the user report can be rerun. Whether the group report has the same limits is not yet documented, so do not promise stakeholders real-time answers.
- Expect questions from site owners once a vendor group's reach is visible; plan who contacts them.

## Cost and licensing

No separate price or meter is published for the group report. Microsoft Learn's prerequisites page for SharePoint Advanced Management, which the Data access governance page points to, says an organisation gets SharePoint Advanced Management capabilities when at least one user has a Microsoft Copilot licence, or when it has a SharePoint K, P1 or P2 subscription and buys the SharePoint Advanced Management Plan 1 add-on, or has Microsoft 365 E7. The base subscription must be Office 365 E3, E5 or A5, Microsoft 365 E1, E3, E5 or A5, or Microsoft 365 GCC, GCC-High or DoD.

The Data access governance page adds a qualification: IT administrators with Microsoft 365 E5 licensing can access Data access governance reporting but cannot use the other SharePoint Advanced Management features, and for them the reports do not provide snapshot reports or remedial actions. Whether the group report counts as a snapshot report for this purpose is not yet published.

Indirect cost is administrator time to run the report and to work through what it finds.

## Scope

Microsoft's notice names SharePoint administrators responsible for managing and reviewing site permissions as the people affected. Microsoft Learn says Data access governance is opened by signing in to the SharePoint admin center with SharePoint administrator credentials.

The roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the web. Microsoft Learn says the Data access governance reports are currently unavailable for Microsoft 365 operated by 21Vianet, even with the required licences. The notice gives the rollout window as late November to early December 2026.

## Governance guidance

### Before rollout

- Confirm which SharePoint Advanced Management route your tenant is on (Copilot licence, Plan 1 add-on or Microsoft 365 E7) so you know whether the report will appear.
- List the broad-membership and vendor groups that hold access to sites, and name an owner for each, so findings have someone to act on them.
- Check the Reports setting in the Microsoft 365 admin center, because Microsoft Learn says reports might not work when concealed names are not displayed; this needs a Global Administrator.
- Tell your SharePoint administrators about the new report, as Microsoft's notice recommends.

### At rollout

- Look for the report on the Data access governance page in the SharePoint admin center during the late November to early December 2026 window.
- Run the site permissions for your organisation report first if it has never been generated; Microsoft Learn requires this before the site permissions for users report.
- Update internal documentation and workflows to include the report, as the notice recommends.

### After rollout

- Run the report for each vendor and all-staff style group and record which sites each can reach.
- Review findings against the sensitivity of the content and plan remedial steps such as Restricted access control or Site access review.
- Review group permissions with the report before assigning Copilot licences, which Microsoft's notice names as a use.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Running the permission report for a given group</strong><br><small>Group</small><br><small class="controls__note">Not yet documented on Microsoft Learn at the time of writing (November 2026). Report appears under Data access governance once rolled out, per Microsoft's notice.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Access to Data access governance reports in the SharePoint admin center</strong><br><small>Tenant</small><br><small class="controls__note">Sign-in with SharePoint administrator credentials. General page for existing reports; it does not yet list the group report.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Reports › Data access governance <a href="https://learn.microsoft.com/sharepoint/data-access-governance-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Today's alternative: sites accessible to named users, directly or through groups</strong><br><small>User</small><br><small class="controls__note">Existing per-user report, not a group report. Microsoft Learn says to generate the site permissions for your organisation report at least once first.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Reports › Data access governance › Site permissions for users › View reports › Create report <a href="https://learn.microsoft.com/sharepoint/data-access-governance-site-permissions-users-report" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport -ReportType Snapshot -Workload SharePoint -Name &lt;name&gt; -UserEmailList &lt;UPNs&gt;</code> <a href="https://learn.microsoft.com/sharepoint/powershell-for-data-access-governance" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin centre path and no PowerShell parameter for the group report at the time of writing (November 2026); the Start-SPODataAccessGovernanceInsight ReportEntity values listed on its reference page include PermissionsReport and PermissionedUsers but no group value. The per-user report is shown as today's closest alternative: it answers "what can these users reach", not "what can this group reach", and it is not a substitute for the group report.

Microsoft Learn says the SharePoint Advanced Management Administrator role is needed for wider governance capabilities such as viewing metadata across SharePoint content, and that a Global administrator must assign it for the special groups report. Remedial options Microsoft Learn names for Data access governance findings are Restricted access control, the Change history report and Site access review.

## Open questions

- What are the report's exact admin centre path and inputs, and can it take Microsoft 365 groups, security groups and SharePoint groups? Watch the Data access governance page on Microsoft Learn.
- Is there a PowerShell equivalent, such as a new ReportEntity value on Start-SPODataAccessGovernanceInsight? Watch the cmdlet reference page.
- Which licence and role does the group report need, and does the Microsoft 365 E5 limitation on snapshot reports apply to it? Watch the SharePoint Advanced Management prerequisites page.
- Does the report show access through nested groups and through sharing links as well as direct membership?
- Why does the roadmap show Rolling out while MC1540348 says rollout begins in late November 2026? Watch Message center for an update.

<!-- rationale
risk: Low. This is a new reporting control: if nobody runs it, any group oversharing it would reveal stays as it is today. Microsoft's notice describes a report, not a change to site permissions; its default state is not stated.
cost: Low. The only cost the sources show is admin time. Whether the group report needs a licence beyond the SharePoint Advanced Management prerequisites that govern Data access governance reports is not yet published.
impact: Low. Microsoft's notice names SharePoint administrators as the people affected; site users and group members see no change.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] controls[1].api / absence: An automation counterpart for accessing the existing Data access governance reports is not documented. | Found: Lists various 'Data Access Governance' (DAG) reports in SharePoint admin center.

This cmdlet fetches details of various DAG reports available in SharePoint admin center. | Fix: Replace this generic reporting row's null API with Get-SPODataAccessGovernanceInsight -ReportEntity <entity>, linking its reference page. Note that it lists existing reports and does not establish support for the new arbitrary-group report; alternatively remove this redundant generic row. | Source: https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/get-spodataaccessgovernanceinsight?view=sharepoint-ps
- [supported, minor] controls[2].api / command: The cited PowerShell guide documents Start-SPODataAccessGovernanceInsight with PermissionsReport, Snapshot, SharePoint, Name and UserEmailList for the user report. | Found: Start-SPODataAccessGovernanceInsight -ReportEntity PermissionsReport -ReportType Snapshot -Workload SharePoint -Name "UserSharePointReport" -UserEmailList "a@contoso.com","b@contoso.com" | Fix: Explicitly report the documentation disagreement: the cited guide uses -UserEmailList, but https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spodataaccessgovernanceinsight?view=sharepoint-ps lists -UserPrincipalNames as mandatory in UserPermissionsParameterSet and does not list -UserEmailList. Prefer the reference spelling in the copyable command and cite both pages; do not imply the guide's spelling is independently confirmed by the reference. | Source: https://learn.microsoft.com/sharepoint/powershell-for-data-access-governance
- [contradicted, blocker] front matter: licensing.model / consistency: The briefing assigns the group report a confirmed mixed licensing model. | Found: model: "mixed"; notes: "Licensing for the group report itself is not yet published."; Open questions: "Which licence and role does the group report need" | Fix: Set licensing.model to "unknown". Retain the documented SAM routes as explicitly labelled background in licensing.notes and Cost and licensing, without treating them as a confirmed entitlement for the new group report.
- [unsupported, blocker] Governance guidance: Before rollout, first bullet / applicability: Confirming a Copilot, Plan 1 or Microsoft 365 E7 SAM route establishes whether this group report will appear. | Found: Searched: SharePoint data access governance group permissions report licensing price meter default enabled role; "SharePoint" "given group" "report". Opened SAM prerequisites and DAG overview; these give general entitlements but do not confirm this report's eligibility. | Fix: Replace the bullet with: "Inventory your tenant's existing SharePoint Advanced Management entitlement (Copilot licence, Plan 1 add-on or Microsoft 365 E7), but do not assume it guarantees access to the group report: Microsoft has not yet published the report-specific licensing requirement."
- [unsupported, major] Why it matters: opening sentence / behaviour: Group-based access accounts for most oversharing. | Found: Searched: SharePoint oversharing most group based access site permissions groups. Read DAG overview and returned excerpts for organisation permissions, special groups and modern sharing permissions; none says group-based access accounts for most oversharing. | Fix: Replace "Group-based access is how most oversharing happens quietly" with "Broad-membership groups can expose sensitive content to unintended recipients", which the roadmap and MC1540348 state. Present the site-by-site comparison as analysis rather than an absolute claim about what reviews can never show.
- [supported, minor] Why it matters: group membership and access / behaviour: Granting a SharePoint group permissions grants those group permissions to its members. | Found: All the users in a group automatically have the permission level of the group. | Fix: Add https://learn.microsoft.com/sharepoint/default-sharepoint-groups to sources for the group-permission inheritance premise. | Source: https://learn.microsoft.com/sharepoint/default-sharepoint-groups#permission-levels-for-default-sharepoint-groups
- [contradicted, minor] Governance guidance versus controls / consistency: The checklist names controls that are missing from the controls table. | Found: Checklist: "Check the Reports setting"; "Run the site permissions for your organisation report first"; "Restricted access control or Site access review". Table rows cover only the group report, general DAG access and the user report. | Fix: Add rows for the Microsoft 365 Reports concealment setting, the organisation-wide permissions baseline, Restricted access control and Site access review, reading their exact paths and automation before filling them. Alternatively remove optional remediation instructions from the checklist and keep them as background notes.
-->
