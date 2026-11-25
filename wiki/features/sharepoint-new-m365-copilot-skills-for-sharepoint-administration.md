---
title: "SharePoint admin center: Copilot skills for step-by-step guidance and multi-criteria site search"
slug: "sharepoint-new-m365-copilot-skills-for-sharepoint-administration"
roadmapId: 501455
topic: "modern-work"
products: ["SharePoint"]
summary: "Copilot in the SharePoint admin center gives licensed SharePoint administrators step-by-step task guidance and multi-condition site search. Microsoft says it is on automatically; no action is required."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2025"
previewDate: null
risk: "low"
cost: "medium"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's page says the feature is included with a Microsoft Copilot licence and that administrators who hold one can use it. The page lists a Microsoft 365 subscription that includes SharePoint as a prerequisite."
audiences: ["m365-admin","security","service-owner"]
tags: ["sharepoint","m365-copilot","admin-center","oversharing","sharepoint-advanced-management","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 501455"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501455"
    kind: "roadmap"
  - title: "Copilot skills in the SharePoint admin center"
    url: "https://learn.microsoft.com/sharepoint/copilot-skills-sharepoint-admin-centers"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Data access governance reports for SharePoint and OneDrive sites"
    url: "https://learn.microsoft.com/sharepoint/data-access-governance-reports"
    kind: "learn"
  - title: "Which administrators can use Copilot in the SharePoint admin center (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/fundamentals/how-to-manage-groups"
    kind: "learn"
  - title: "Which administrators can use Copilot in the SharePoint admin center (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/group-post-members"
    kind: "learn"
  - title: "Data access governance reports used in the over-permissioned-sites guidance (today's alternative) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spodataaccessgovernanceinsight?view=sharepoint-ps"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-in-sharepoint","sharepoint-admin-center-data-access-governance-permission-report-for-a-given-group","auditing"]
controls:
  - governs: "Which administrators can use Copilot in the SharePoint admin center"
    scope: "user"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Groups > All groups > group > Members > + Add"
      docs: "https://learn.microsoft.com/entra/fundamentals/how-to-manage-groups"
    api:
      kind: "graph"
      call: "POST /v1.0/groups/{group-id}/members/$ref"
      docs: "https://learn.microsoft.com/graph/api/group-post-members"
    note: "Group must be a custom security group named CopilotForM365AdminExclude. Group steps come from the Entra groups page; Groups Administrator or User Administrator role."
  - governs: "Data access governance reports used in the over-permissioned-sites guidance (today's alternative)"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Reports > Data access governance"
      docs: "https://learn.microsoft.com/sharepoint/data-access-governance-reports"
    api:
      kind: "powershell"
      call: "Start-SPODataAccessGovernanceInsight -ReportEntity PermissionedUsers -Workload SharePoint -ReportType Snapshot -Name <name> -CountOfUsersMoreThan <count>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spodataaccessgovernanceinsight?view=sharepoint-ps"
    note: "Generates a report; it does not restrict Copilot. Needs the SharePoint administrator role and a SharePoint Advanced Management licence."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-18"
    note: "New briefing: Copilot step-by-step guidance and multi-criteria site search in the SharePoint admin center, with licence, exclusion group and related report controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 44 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 44 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 42
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "2c42f6f95ad36f14b6fa9d945bcbe2ad"
---

## What's changing

Copilot in the SharePoint admin center now offers two skills named on the roadmap item: step-by-step task guidance and multi-criteria site search. Administrators open it by selecting the **Copilot** button in the upper right shell of the SharePoint admin center.

Step-by-step guidance walks an administrator through a common task. Microsoft's example question is "How can I find sites that are potentially over-permissioned?" Microsoft's page says Copilot "first runs the site permissions report for your organization, then runs activity-based reports, and finally initiates site access reviews for site owners to review and remediate their sites." Multi-criteria site search takes several conditions in one request and returns a filtered list of sites. The roadmap example is sites inactive for more than 60 days and shared externally; the Learn page's example is sites created in the last month that are shared externally.

The same Learn page also documents two things the roadmap description does not mention: asking for details about one named site (including its external sharing status and sensitivity labels) and voice input, where the browser asks for microphone permission the first time. Microsoft's page states that Copilot does not make any configuration changes on the administrator's behalf.

The roadmap item is Launched, General Availability, Worldwide (Standard Multi-Tenant), Web, with a target of October CY2025.

## Why it matters

This is an assistant for the people who run SharePoint, not a feature for end users. Its practical value is that it points administrators at the existing oversharing tooling (site permissions and activity reports, site access reviews) and lets them filter the site list in plain language, which can shorten oversharing clean-ups ahead of or alongside Microsoft Copilot rollouts.

Microsoft's page says Copilot is automatically enabled for customers whose subscriptions include SharePoint and Microsoft Copilot, so a licensed administrator may already be using it. The decisions for a service owner are which administrators should have it, whether the reports it steers them to are licensed, and whether prompts in this pane are covered by your audit and retention approach.

## Risk assessment

**Data exposure**
- Copilot returns details such as site name, URL, creator, external sharing status, sensitivity labels and storage status for a site the administrator asks about. Microsoft's page says it respects role-based access controls and shows only information and controls the user has access to, so treat output as admin-visible data and avoid pasting it into tickets or chats.

**Security & identity**
- Availability follows the administrator's licence and role: the page says the feature is available to SharePoint administrators and requires a Microsoft Copilot licence. Excluding an administrator uses a security group named CopilotForM365AdminExclude (first row of the controls table).
- Voice input asks the browser for microphone permission on first use, so browser or device policy on admin workstations can affect it.

**Autonomy & actions**
- Microsoft's page says Copilot does not make any configuration changes on the administrator's behalf. The same page describes the over-permissioned-sites guidance as one that "initiates site access reviews for site owners"; confirm in your tenant whether that step is performed by Copilot or only recommended (see Open questions).

**Change & support**
- Microsoft's page says the experience is enabled automatically for eligible tenants, so administrators may start using it without a rollout decision. Brief helpdesk and SharePoint admins that answers are generated and should be checked against the report or site list before action is taken.

## Cost and licensing

Microsoft's Learn page states: "This feature is included with a Microsoft Copilot license." Administrators who hold a Copilot licence can use Copilot in the SharePoint admin center once licences are purchased and assigned. The page lists a Microsoft 365 subscription that includes SharePoint, plus a Microsoft Copilot licence, as prerequisites. Microsoft's requirements page says a Microsoft Copilot licence also needs a qualifying prerequisite licence.

The indirect cost is licensing the administrators who will use it. A tenant with no Microsoft Copilot licences would need to buy at least those for its SharePoint administrators.

The reports Copilot's guidance leads to are separate: the Start-SPODataAccessGovernanceInsight reference says a SharePoint Advanced Management licence is required to run Data access governance reports, and Microsoft's requirements page says SharePoint Advanced Management is available as part of Microsoft 365 Copilot or as an add-on.

## Scope

**Who:** administrators with a Microsoft Copilot licence. Microsoft's page says the feature is available to SharePoint administrators and shows only what the user has access to.

**Where:** the SharePoint admin center, through the **Copilot** button in the upper right shell. The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform; it lists no other cloud.

**Rollout:** Microsoft's page says Copilot is automatically enabled for customers whose subscriptions include SharePoint and Microsoft Copilot. The roadmap status is Launched with a target of October CY2025.

## Governance guidance

### Before rollout
- Identify which SharePoint administrators hold a Microsoft Copilot licence, since only they can use the pane.
- Decide who should be excluded and create the CopilotForM365AdminExclude security group if you need it (controls table, first row).
- Confirm whether your tenant holds a SharePoint Advanced Management licence before relying on the Data access governance reports the guidance points to (controls table, second row).

### At rollout
- Add the administrators you do not want to have the experience to the CopilotForM365AdminExclude group.
- Tell SharePoint administrators that Copilot makes no configuration changes and that answers should be checked against the SharePoint admin center.

### After rollout
- Test the over-permissioned-sites guidance with a SharePoint administrator and record whether site access reviews are started by Copilot or by the administrator.
- Check in Microsoft Purview Audit which records appear for Copilot in the SharePoint admin center and compare them with your compliance expectations.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which administrators can use Copilot in the SharePoint admin center</strong><br><small>User</small><br><small class="controls__note">Group must be a custom security group named CopilotForM365AdminExclude. Group steps come from the Entra groups page; Groups Administrator or User Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Groups › All groups › group › Members › + Add <a href="https://learn.microsoft.com/entra/fundamentals/how-to-manage-groups" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/groups/{group-id}/members/$ref</code> <a href="https://learn.microsoft.com/graph/api/group-post-members" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Data access governance reports used in the over-permissioned-sites guidance (today's alternative)</strong><br><small>Tenant</small><br><small class="controls__note">Generates a report; it does not restrict Copilot. Needs the SharePoint administrator role and a SharePoint Advanced Management licence.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Reports › Data access governance <a href="https://learn.microsoft.com/sharepoint/data-access-governance-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPODataAccessGovernanceInsight -ReportEntity PermissionedUsers -Workload SharePoint -ReportType Snapshot -Name &lt;name&gt; -CountOfUsersMoreThan &lt;count&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spodataaccessgovernanceinsight?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's page names only one way to turn the experience off: the CopilotForM365AdminExclude security group, which removes it for the administrators in the group. The page does not describe a tenant-wide switch in the SharePoint admin center.

The Data access governance row is today's alternative, not a control over Copilot: it is the existing report that the guidance describes running. Creating those reports needs the SharePoint administrator role and the licence described above.

## Open questions

- When Copilot guides an administrator through finding over-permissioned sites, does it run the reports and start site access reviews itself, or only tell the administrator to? Watch the Learn page for Copilot skills in the SharePoint admin center.
- Which audit events does Copilot in the SharePoint admin center record, and where do they appear in Microsoft Purview Audit?
- Is a SharePoint Advanced Management licence needed for the reports Copilot runs, or only for running them directly?
- Will Microsoft add an admin-center switch to turn the experience off for all administrators?

<!-- rationale
risk: Low. Microsoft's page says Copilot makes no configuration changes on the administrator's behalf and shows only what that administrator can already access.
cost: Medium. Microsoft's page says the feature is included with a Microsoft Copilot licence, which only a subset of administrators in most tenants will hold; no separate meter is stated on that page.
impact: Low. Microsoft's page says the feature is available to SharePoint administrators, so only a small admin group notices it; end users see no change.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] rationale: cost / behaviour: Only a subset of administrators in most tenants hold a Microsoft Copilot licence. | Found: Searched: "Copilot" "SharePoint administrators" "most" "license". Read the feature page's licensing FAQ and Microsoft Copilot requirements; neither states the prevalence of administrator licensing across tenants. | Fix: Remove 'which only a subset of administrators in most tenants will hold' from the cost rationale.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing; controls[1].note; Governance guidance; Governance controls / licensing: The cmdlet reference requires SharePoint Advanced Management for Data access governance reports. | Found: SharePoint Advanced Management (SAM) license is required to run these reports. | Fix: Retain the cmdlet-reference attribution. Qualify the reporting requirement in the note, prose and checklist: 'The snapshot report shown here requires SharePoint Advanced Management. The Data access governance overview also documents limited activity reporting with Microsoft 365 E5, without snapshot reports or remedial actions.' The overview is https://learn.microsoft.com/sharepoint/data-access-governance-reports. | Source: https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/start-spodataaccessgovernanceinsight?view=sharepoint-ps
- [supported, minor] controls[0].api; Governance controls: first row / command: POST /v1.0/groups/{group-id}/members/$ref adds a member to the exclusion security group. | Found: POST https://graph.microsoft.com/v1.0/groups/{group-id}/members/$ref | Fix: Keep the endpoint unchanged. Append to controls[0].note and the rendered note: 'The request body sets @odata.id to the reference for the administrator being added.' | Source: https://learn.microsoft.com/graph/api/group-post-members
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The governance checklist asks readers to check Microsoft Purview Audit, but that monitoring surface has no controls-table row. | Found: Checklist: 'Check in Microsoft Purview Audit which records appear for Copilot in the SharePoint admin center'. Table: 'Which administrators can use Copilot in the SharePoint admin center'; 'Data access governance reports'. | Fix: Remove the checklist bullet beginning 'Check in Microsoft Purview Audit'. Retain the audit-event question in Open questions; do not add a control row.
-->
