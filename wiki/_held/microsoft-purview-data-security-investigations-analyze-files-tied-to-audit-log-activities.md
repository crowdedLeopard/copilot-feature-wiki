---
title: "Microsoft Purview Data Security Investigations: pull files into an investigation from audit log activity"
slug: "microsoft-purview-data-security-investigations-analyze-files-tied-to-audit-log-activities"
roadmapId: 558548
topic: "governance"
products: ["Microsoft Purview"]
summary: "Investigators can query the unified audit log from inside a Data Security Investigations case and add the files and emails tied to matching activities to its scope. Nothing to switch on, but each item added is billed storage."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's billing page says Data Security Investigations is billed on a storage meter and AI capacity (compute units), not on a dedicated enterprise plan or licence. No rate specific to audit search is published; storage pricing is on the Azure Purview pricing page."
audiences: ["security","compliance","finops"]
tags: ["data-security-investigations","purview","auditing","role-groups","pay-as-you-go","sharepoint","onedrive","exchange"]
sources:
  - title: "Microsoft 365 Roadmap 558548"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558548"
    kind: "roadmap"
  - title: "Search, review, and refine results in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-search"
    kind: "learn"
  - title: "Learn about Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations"
    kind: "learn"
  - title: "Billing in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    kind: "learn"
  - title: "Assign permissions in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    kind: "learn"
  - title: "Get started with auditing solutions"
    url: "https://learn.microsoft.com/purview/audit-get-started"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "Who administers Data Security Investigations and can create audit searches in any investigation (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Who can search the audit log, which audit search in DSI requires (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Searching audit records of DSI activity, including content added to investigations (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
videos: []
related: ["auditing","role-groups","microsoft-purview-data-security-investigations-analyze-files-tied-to-endpoint-dlp-alerts","microsoft-purview-data-security-investigations-notification-and-improved-search-capabiliti","ediscovery"]
controls:
  - governs: "Who administers Data Security Investigations and can create audit searches in any investigation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > Data Security Investigations Admins > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The Data Security Investigations Investigators role group can also create searches and add items to its assigned investigations; assign it on the same Role groups page."
  - governs: "Who can search the audit log, which audit search in DSI requires"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api: null
    note: "Audit Reader grants View-Only Audit Logs; Audit Manager grants both audit roles. Needs the Role management role."
  - governs: "Whether the unified audit log records activity for the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "Exchange Online PowerShell; requires the Audit Logs role in Exchange Online."
  - governs: "Storage and compute unit spend per investigation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Usage dashboard"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Monitoring only. Only the Data Security Investigations Admin role can open it; data can lag up to 48 hours."
  - governs: "Searching audit records of DSI activity, including content added to investigations"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Look for the operation DSIPurviewSearchAddToEvidenceSetJobSubmitted. Exchange Online PowerShell."
  - governs: "Separate switch to turn off audit search within Data Security Investigations"
    scope: "tenant"
    ui: null
    api: null
    note: "Access is governed through the role groups above."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-04T23:00:45"
changes:
  - date: "2026-11-28"
    note: "New briefing: audit search in Data Security Investigations, its role requirements, limits and storage billing."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 103 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 103
  confirmed: 98
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "9235cc1de1c803500646ccfdbaa5a4c7"
---

## What's changing

Data Security Investigations (DSI, the Microsoft Purview solution that uses generative AI to analyse content involved in a data security incident) gains an **Audit** search option that finds content through the unified audit log rather than by searching the content itself. An investigator picks a time range, activities, users, a file, folder or site location and keywords, and DSI queries the unified audit log and pulls the files and emails tied to matching records into the investigation scope.

The Learn page for the feature describes it as a tab inside an existing investigation: **Summary > Search > Audit**. It supports a fixed list of content-linked activities: accessed, copied, deleted, downloaded, moved, renamed and uploaded files in SharePoint or OneDrive, changed or removed sensitivity labels on files, and **Sent email** from Exchange Online. Activities with no content item, such as signing in, are not supported. Results cannot be estimated or saved first; the page points investigators to the Audit solution to test a query before adding results. After **Add to scope**, DSI runs one audit search job and several add-to-scope jobs, then automatically vectorises the items for AI analysis.

The page sets two limits: up to 10 concurrent audit searches per user, and searches returning more than about 3,000 items might not return complete results. Its workaround is to size the query in the Audit solution and run several smaller time slices; DSI deduplicates items across overlapping searches.

The roadmap item is **Launched**, with a preview date of April CY2026 and a general availability target of May CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web.

## Why it matters

This changes how fast content reaches an investigation, not who can see it. When an investigator selects **Add to scope**, the files and emails behind the matching audit records are copied into the investigation, where Investigators and Reviewers can run categorisation, examination and vector search over it. A broad query (a whole department over weeks of **Accessed file** events) can therefore put a large volume of other people's content in front of the investigation team, and on the storage bill, in one step.

For service owners the decisions are who holds the DSI and audit roles, and whether finance knows that each audit search adds metered storage and compute. Microsoft's billing page says both billing models must be configured before Data Security Investigations can be used, so tenants that have not set it up are not affected.

## Risk assessment

**Data exposure**
- Audit search adds copies of the files and emails behind audit records to an investigation scope; investigators then read and analyse those copies with AI tools. Who can do this is set by the DSI role groups: Admins and Investigators can create searches and add items, Reviewers cannot.
- The search page states that Data Security Investigations searches respect compliance boundaries configured with search permissions filters, so organisations that already use them for eDiscovery keep that partition.

**Security & identity**
- Audit search uses the unified audit log's own permissions: an investigator also needs the *View-Only Audit Logs* or *Audit Logs* role, which the Audit Reader and Audit Manager role groups grant.
- Compliance Administrator and Organization Management include the Data Security Investigation Admin role, so their members can run audit searches without being added to a DSI role group. Check those memberships, not only the DSI groups.

**Autonomy & actions**
- No change in autonomy: a person starts each search. After **Add to scope**, DSI vectorises the items without a further step, which is where compute is spent.

**Change & support**
- Searches over about 3,000 items might not return complete results, so an investigator can miss evidence without an error. Train investigators to size queries in the Audit solution and split them by time.
- Audit search returns nothing useful if the unified audit log is off. Microsoft says auditing is not on by default for Business Basic, Business Standard and Business Premium tenants.

## Cost and licensing

**Licence.** Microsoft's billing page says DSI billing is based on stored data and AI compute capacity, and isn't based on a dedicated enterprise plan or licence. The feature page publishes no separate licence for audit search.

**Meters.** The storage meter is pay-as-you-go, charged per GB per month for data in all investigations, through an Azure subscription linked in **Setup tasks > Setup pay-as-you-go-billing for data storage**. Data storage charges start when items are added to an investigation scope, which is what audit search does. The billing page lists **Add to scope** as using storage and compute, including automatic vectorisation, measured in DSI compute units. Rates are on the Azure Microsoft Purview pricing page; Microsoft publishes no rate specific to audit search.

**Watching spend.** The **Usage dashboard** (controls table) shows storage and compute units per investigation and per process; Microsoft says billing data can take up to 48 hours to appear. Microsoft documents that deleting an investigation stops storage charges for its data.

**Indirect costs.** Investigator time to split large queries into time slices, and audit log retention, which follows the organisation's audit retention policies and licences.

## Scope

- **Who uses it:** members of the Data Security Investigations Admins or Investigators role groups (or role groups that include DSI roles), who also hold an audit log search role.
- **Prerequisites:** DSI set up with its storage meter and AI capacity, and the unified audit log turned on for the organisation.
- **Content in reach:** files in SharePoint and OneDrive and email sent from Exchange Online, through the supported activities listed on the Learn page.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) only.
- **Platform:** web, in the Microsoft Purview portal.
- **Status:** Launched; preview April CY2026, general availability target May CY2026.

## Governance guidance

### Before rollout
- Review who is in the Data Security Investigations Admins and Investigators role groups, and in Compliance Administrator and Organization Management, which include the DSI Admin role.
- Confirm that intended investigators hold the View-Only Audit Logs or Audit Logs role through Audit Reader or Audit Manager, and that nobody else in the DSI groups does unless they need audit search.
- Check that the unified audit log is recording activity, especially in tenants on Business plans.
- Agree with finance an owner for the DSI storage meter and a review rhythm for the Usage dashboard.

### At rollout
- Brief investigators on the supported activities, the 10-concurrent-search limit and the roughly 3,000-item ceiling, and on testing queries in the Audit solution first.
- Set a team rule for narrowing audit searches by user, location and time before selecting Add to scope.

### After rollout
- Search the audit log for the Submitted DSI search add to evidence set job operation to see who added content to investigations and when.
- Review the Usage dashboard for investigations whose Add to scope storage or compute grows unexpectedly.
- Delete closed investigations after exporting what must be kept, since storage is billed until the investigation is deleted.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who administers Data Security Investigations and can create audit searches in any investigation</strong><br><small>Tenant</small><br><small class="controls__note">The Data Security Investigations Investigators role group can also create searches and add items to its assigned investigations; assign it on the same Role groups page.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › Data Security Investigations Admins › Edit › Choose users <a href="https://learn.microsoft.com/purview/data-security-investigations-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can search the audit log, which audit search in DSI requires</strong><br><small>User</small><br><small class="controls__note">Audit Reader grants View-Only Audit Logs; Audit Manager grants both audit roles. Needs the Role management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the unified audit log records activity for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Exchange Online PowerShell; requires the Audit Logs role in Exchange Online.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Storage and compute unit spend per investigation</strong><br><small>Tenant</small><br><small class="controls__note">Monitoring only. Only the Data Security Investigations Admin role can open it; data can lag up to 48 hours.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Usage dashboard <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Searching audit records of DSI activity, including content added to investigations</strong><br><small>Tenant</small><br><small class="controls__note">Look for the operation DSIPurviewSearchAddToEvidenceSetJobSubmitted. Exchange Online PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch to turn off audit search within Data Security Investigations</strong><br><small>Tenant</small><br><small class="controls__note">Access is governed through the role groups above.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Audit search has no switch of its own: who can use it follows from two sets of role groups, and both must be granted. DSI roles decide who can create searches and add items (Admins and Investigators; not Reviewers), and the audit roles decide who can query the unified audit log. Data Security Investigation Contributor, included in Data Security Management and Insider Risk Management, can create and manage investigations a user owns or belongs to, but does not include data storage or AI job execution.

The Usage dashboard shows spend; it does not stop it. Microsoft documents stopping storage billing by deleting all investigations, which is irreversible. Role group changes can take up to 30 minutes to apply. The audit cmdlets run in Exchange Online PowerShell: Microsoft says the Audit Logs and View-Only Audit Logs roles in the Exchange admin center grant access to them, and turning auditing on or off needs Audit Logs.

## Open questions

- Will Microsoft add a setting to turn audit search off inside Data Security Investigations while keeping the query builder? Watch the DSI search page on Microsoft Learn.
- Will the roughly 3,000-item ceiling for audit search rise, or will searches warn when results are incomplete? Watch the DSI limits page.
- Will the supported activity list grow beyond SharePoint, OneDrive and Sent email, for example to Teams messages? Watch the audit search section of the DSI search page and Message center.
- When will audit search reach the US Government clouds, which the roadmap item does not list? Watch the Microsoft 365 roadmap.

<!-- rationale
risk: Medium. Audit search copies the content behind matching audit records into an investigation, where investigators can read and analyse it; access rests on Data Security Investigations and audit role groups.
cost: Variable. Items added to scope are billed on the Data Security Investigations storage meter (GB per month, pay-as-you-go through Azure), and adding them also uses compute units for automatic vectorisation.
impact: Low. Only investigators and administrators who hold Data Security Investigations roles see or use the Audit search option.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Change & support: without an error; Open questions / behaviour: Incomplete audit searches can omit evidence without displaying an error. | Found: Searched: 'Data Security Investigations' 'audit search' 'incomplete' 'error'; read DSI search and limits pages and Activity history status excerpt. They state results might be incomplete but do not state whether truncation displays an error or warning. | Fix: Remove 'without an error'. Keep 'Searches over about 3,000 items might not return complete results, so an investigator can miss evidence.' Leave warning behaviour as an open question rather than asserting it.
- [contradicted, blocker] Why it matters: each audit search adds metered storage and compute / cost: Each audit search adds metered storage and compute. | Found: To discard the search without adding results, select Cancel. ... Select Add to scope to add the content associated with the search results to your investigation scope. | Fix: Replace 'each audit search adds metered storage and compute' with 'adding audit search results to scope uses metered storage and compute'. The search can be cancelled without adding results; storage charges start at Add to scope, as documented at https://learn.microsoft.com/purview/data-security-investigations-search and https://learn.microsoft.com/purview/data-security-investigations-billing. | Source: https://learn.microsoft.com/purview/data-security-investigations-search
- [contradicted, blocker] controls[1].api / absence: Automation for assigning membership of the audit-search role groups is not documented. | Found: Use the Add-RoleGroupMember cmdlet to add members to a management role group. ... The Identity parameter specifies the role group to add a member to. ... Applicable: ... Security & Compliance | Fix: Set controls[1].api to kind 'powershell', call 'Add-RoleGroupMember -Identity "<role-group>" -Member "<user-UPN>"', docs 'https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember'. Add to its note: 'Run role-group membership commands in Security & Compliance PowerShell; select Audit Reader or Audit Manager as the target role group.' The reference documents management role groups generally, including Security & Compliance, rather than requiring a separate audit-specific cmdlet. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: Summary > Search > Audit / admin-path: Inside an existing investigation, Summary > Search > Audit reaches the audit search option. | Found: Go to Data Security Investigations in the Microsoft Purview portal and open an investigation. ... Select Summary from the navigation options at the top of the page. ... On the Search tab, select Audit. | Fix: Expand the contextual route to 'Microsoft Purview portal > Data Security Investigations > investigation > Summary > Search > Audit', as documented at https://learn.microsoft.com/purview/data-security-investigations-search. | Source: https://learn.microsoft.com/purview/data-security-investigations-search
- [supported, minor] Cost and licensing: Setup tasks > Setup pay-as-you-go-billing for data storage / admin-path: The storage billing setup control is under Setup tasks > Setup pay-as-you-go-billing for data storage. | Found: Go to Data Security Investigations in the Microsoft Purview portal ... Select Setup pay-as-you-go-billing for data storage in the Setup tasks section. | Fix: Give the complete contextual route as 'Microsoft Purview portal > Data Security Investigations > Setup tasks > Setup pay-as-you-go-billing for data storage', as documented at https://learn.microsoft.com/purview/data-security-investigations-billing. | Source: https://learn.microsoft.com/purview/data-security-investigations-billing
- [supported, minor] controls[0].ui / admin-path: Settings > Roles and groups > Role groups > Data Security Investigations Admins > Edit > Choose users manages DSI admin membership. | Found: Select Settings ... select Roles and groups, then select Role groups ... Select the Data Security Investigations Admins role group, then select Edit. ... Select Choose users | Fix: Add to this row's note: 'The DSI permissions article calls this settings area Roles and groups; the general Purview permissions article calls it Roles and scopes.' Both sources are already cited: https://learn.microsoft.com/purview/data-security-investigations-permissions and https://learn.microsoft.com/purview/purview-permissions. | Source: https://learn.microsoft.com/purview/data-security-investigations-permissions
- [contradicted, minor] Governance guidance: After rollout: Delete closed investigations / consistency: The checklist tells administrators to delete investigations to stop storage charges, but the controls table has no investigation-deletion row. | Found: Delete closed investigations after exporting what must be kept ... Controls table: DSI membership; audit membership; audit recording; Usage dashboard; audit search; separate audit-search switch. | Fix: Remove the checklist bullet 'Delete closed investigations after exporting what must be kept, since storage is billed until the investigation is deleted.' Retain the verified explanation of deletion and billing in Cost and licensing and Governance controls; no new control row is requested.
- [unsupported, minor] rationale: impact / behaviour: Only investigators and administrators who hold DSI roles see the Audit search option. | Found: Searched: 'Data Security Investigations' 'Audit' 'tab' 'Reviewers' visibility permissions; read DSI search and permissions and investigation-dashboard excerpt. They document who can create searches, not whether the Audit option is hidden from other roles. | Fix: Replace the impact rationale with 'Low. Audit search is used by investigators and administrators with the required Data Security Investigations and audit permissions.' This preserves the supported access statement without asserting undocumented UI visibility.
-->
