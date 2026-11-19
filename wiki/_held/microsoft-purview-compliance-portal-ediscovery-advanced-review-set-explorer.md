---
title: "Microsoft Purview eDiscovery: Advanced review set explorer for KQL queries"
slug: "microsoft-purview-compliance-portal-ediscovery-advanced-review-set-explorer"
roadmapId: 484086
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a KQL query tab in eDiscovery (Premium) review sets, on by default per MC1221453. Reviewers get it alongside KeyQL; admins need to brief teams and check who holds review access."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "February CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Part of review sets in eDiscovery (Premium). Learn says premium features need an Office 365 or Microsoft 365 E5 licence, or the Microsoft Purview Suite or Microsoft 365 eDiscovery and Audit add-on. No separate explorer price is published."
audiences: ["compliance","security","change-adoption"]
tags: ["ediscovery","purview","auditing","analytics"]
sources:
  - title: "Microsoft 365 Roadmap 484086"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=484086"
    kind: "roadmap"
  - title: "Search content in a review set with the Advanced review set explorer (preview)"
    url: "https://learn.microsoft.com/purview/edisc-review-set-explorer"
    kind: "learn"
  - title: "Assign permissions in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-permissions"
    kind: "learn"
  - title: "Search for eDiscovery activities in the audit log"
    url: "https://learn.microsoft.com/purview/edisc-ref-audit-log"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps"
    kind: "learn"
  - title: "MC1221453: (Updated) Microsoft Purview | eDiscovery – Advanced review set explorer"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1221453"
    kind: "message-center"
videos: []
related: ["auditing","microsoft-purview-ediscovery-in-product-diagnostics-to-troubleshoot-common-challenges","microsoft-purview-permissions-audit-log-improvements"]
controls:
  - governs: "Who can access review sets, and so the explorer, through eDiscovery roles"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Role groups > eDiscovery Manager"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember \"eDiscoveryManager\" -Member <name of security group>"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    note: "The Review role lets users access review sets; the Reviewer role group also holds it. Not an explorer-only switch. The cmdlet takes a mail-enabled security group."
  - governs: "Searching eDiscovery review activity in the audit log"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search > Activities - friendly names > eDiscovery activities"
      docs: "https://learn.microsoft.com/purview/edisc-ref-audit-log"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -Operations <String[]>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps"
    note: "Audit log records review activities in eDiscovery cases; an event specific to explorer queries is not confirmed."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-08-14T21:56:10"
changes:
  - date: "2026-11-19"
    note: "First briefing: Learn documents the explorer as a preview; MC1221453 moved general availability to late December 2026."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 57 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 55
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "81a26f24b67c5e26e4a4f1527dd8b02e"
---

## What's changing

The roadmap item describes the Advanced Review Set Explorer, a query tab for review sets in Microsoft Purview eDiscovery (Premium). Reviewers write Kusto Query Language (KQL) queries to filter, aggregate and extract text from review set items, and can show results as a table or a chart. Microsoft's notice MC1221453 says reviewers can still use KeyQL, the existing query language in review sets, without change, and that no existing queries or workflows are modified.

Microsoft Learn already documents the feature as a preview. It opens from a case, on the **Review sets** tab, then a review set, then the **Advanced review set explorer (preview)** tab. Learn says queries are read-only and run against the review set's indexed items, that results beyond 10,000 are cut to the first 10,000, and that the explorer does not support every Kusto operator or property. Older review sets may lack some properties; Learn says to create a new review set with the **Add to review set** process to regenerate the data.

The roadmap record shows status In development, a preview date of February CY2026 and a target of December CY2026 for general availability, for Worldwide (Standard Multi-Tenant) on the web. MC1221453 (updated 14 August 2026) says public preview rolls out in February 2026 for Worldwide excluding government clouds, and general availability in late December 2026 (previously late August) for Worldwide, GCC, GCC High and DoD. The roadmap record lists only the Worldwide cloud, so the two sources differ on clouds. The notice has no act-by date.

## Why it matters

MC1221453 says the feature is enabled by default and that users with eDiscovery review permissions can run KQL queries. If nobody acts, reviewers will find a new tab in review sets; the notice names no admin setting for it, so the work is communication and access hygiene rather than configuration.

The practical effect is on the people who run investigations. KQL lets a reviewer slice the same review set data in ways the condition builder and KeyQL do not, so expect questions about training, saved approaches and how results are quoted in legal work. Plan for who is allowed to hold review access before the general availability target in December CY2026.

## Risk assessment

**Data exposure**
- The explorer queries items already in a review set and Learn says queries are read-only and do not modify content, so it adds no new data source. It does make pattern extraction easier: Learn's own example lists external recipient addresses per item, so reviewers with access can build derived views of review set content. Access to review sets is the control (see the controls table).

**Security & identity**
- Access follows eDiscovery permissions: the Learn page asks for an account assigned eDiscovery permissions, and MC1221453 says users with eDiscovery review permissions can run KQL queries and that existing admin policies and permissions are unchanged. The Review role lets users access review sets, so anyone with that role in a case can use the explorer.

**Autonomy & actions**
- No change: Learn says queries do not modify review set content, and nothing in the page describes the explorer acting on its own.

**Change & support**
- The tab is on by default per MC1221453, and the Learn page is marked preview. Expect support questions from reviewers new to KQL: Learn lists common syntax errors, a column-not-found error on older review sets, and the 10,000-result cut-off.
- Results change if more data is added to the review set, so a saved number from an earlier run may not match a later one.

## Cost and licensing

The explorer sits in review sets, which are an eDiscovery (Premium) feature. The Learn page on eDiscovery permissions says that to analyse a user's data when premium eDiscovery features are enabled, the user must be assigned an Office 365 or Microsoft 365 E5 licence, or an Office 365 E1, Office 365 or Microsoft 365 E3 user can be assigned the Microsoft Purview Suite or Microsoft 365 eDiscovery and Audit add-on. It also says administrators, compliance officers or legal personnel who are assigned to cases as members and use premium features to collect, view and analyse data do not need an E5 licence.

The explorer's own Learn page names no separate licence and no meter at the time of writing (November 2026), and MC1221453 names none. A price or licence specific to the explorer is not yet published. The cost Microsoft's notice points to is time: it suggests KQL training or reference material and updating internal documentation.

## Scope

MC1221453 says the change affects organisations using Microsoft Purview eDiscovery (Premium). Users with eDiscovery review permissions can run KQL queries; the **Review** role is the one Learn describes as letting users access review sets, and it is held by the eDiscovery Manager and eDiscovery Administrator role groups and the Reviewer role group.

Platform is web (the Microsoft Purview portal). The roadmap record lists Worldwide (Standard Multi-Tenant); MC1221453 also names GCC, GCC High and DoD for general availability, and excludes government clouds from the public preview. Rollout: February 2026 for preview and late December 2026 for general availability, per the notice. Learn marks the explorer as preview.

## Governance guidance

### Before rollout
- Review who holds the **Review** role, through the eDiscovery Manager and Reviewer role groups, and remove access that is no longer needed (first controls row).
- Tell eDiscovery teams that KeyQL and KQL are both supported and that they choose per query, as MC1221453 asks.
- Prepare KQL reference material for reviewers, starting from the explorer's **Getting started** tab and **Sample queries** that Learn describes.

### At rollout
- Open the explorer on a test review set (case > **Review sets** > review set > **Advanced review set explorer (preview)**) and run the sample queries to see what your reviewers will see.
- Brief reviewers on the 10,000-result cut-off and the unsupported-operator limits that Learn documents.

### After rollout
- Search the audit log for eDiscovery activities to see what review activity is recorded for your cases (second controls row).
- Recreate any older review set that returns column-not-found errors, using **Add to review set** as Learn describes.
- Recheck the Learn page and MC1221453 for changes to the general availability date and the preview label.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can access review sets, and so the explorer, through eDiscovery roles</strong><br><small>User</small><br><small class="controls__note">The Review role lets users access review sets; the Reviewer role group also holds it. Not an explorer-only switch. The cmdlet takes a mail-enabled security group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Role groups › eDiscovery Manager <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember &quot;eDiscoveryManager&quot; -Member &lt;name of security group&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Searching eDiscovery review activity in the audit log</strong><br><small>Tenant</small><br><small class="controls__note">Audit log records review activities in eDiscovery cases; an event specific to explorer queries is not confirmed.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search › Activities - friendly names › eDiscovery activities <a href="https://learn.microsoft.com/purview/edisc-ref-audit-log" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -Operations &lt;String[]&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows govern review set access and review activity in general. Neither is specific to the explorer: MC1221453 names no explorer-only setting, and Learn describes the explorer as available to accounts with eDiscovery permissions. The first row is the way to change who can use it.

Adding members to the eDiscovery Manager role group is done in the Microsoft Purview portal or with `Add-RoleGroupMember`; Learn says to use a mail-enabled security group for that cmdlet. The audit row lets an eDiscovery-permissioned user search recorded eDiscovery activities; whether the explorer's queries are recorded as a distinct activity is an open question.

## Open questions

- Does the audit log record a distinct activity for KQL queries run in the explorer? Watch the Audit log activities page on Microsoft Learn.
- Is there a tenant or case setting to turn the explorer off, given MC1221453 says it is enabled by default? Watch Message center and the Learn page.
- Will the explorer get a licence or price of its own at general availability? None is published for it yet.
- Will general availability stay at late December 2026, given the notice moved it from late August, and will it reach GCC, GCC High and DoD when the roadmap record lists only Worldwide?

<!-- rationale
risk: Low. Queries are read-only against items already in a review set, and MC1221453 says existing admin policies and permissions are unchanged; the main point is that the tab is on by default.
cost: Low. The explorer page names no licence or meter of its own; eDiscovery (Premium) licensing applies to the review sets it sits in, so the known cost is admin and KQL training time.
impact: Medium. Reviewers and eDiscovery managers get a new query tab in review sets, on by default per MC1221453; users without eDiscovery permissions do not see it.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing; Governance guidance: At rollout / admin-path: The route supplied for opening the explorer begins at case > Review sets > review set > Advanced review set explorer (preview). | Found: Select the **eDiscovery** solution card, and then select **Cases** in the left navigation. | Fix: In both places, give the route from the Microsoft Purview portal as 'eDiscovery > Cases > case > Review sets > review set > Advanced review set explorer (preview)'. The current route starts inside a case without saying how to reach it. Source: https://learn.microsoft.com/purview/edisc-review-set-explorer. | Source: https://learn.microsoft.com/purview/edisc-review-set-explorer
- [unsupported, blocker] rationale: impact; Risk assessment: Security & identity / role: Users without eDiscovery permissions do not see the explorer. | Found: Searched: 'Advanced review set explorer permissions visible'; read edisc-review-set-explorer and edisc-permissions. They document the permissions needed to open review sets and the explorer, not whether an unpermissioned user can see its tab. | Fix: In the impact rationale, replace 'users without eDiscovery permissions do not see it' with 'opening it requires an account assigned eDiscovery permissions', as documented at https://learn.microsoft.com/purview/edisc-review-set-explorer.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: Settings > Role groups > eDiscovery Manager in the Microsoft Purview portal is the route given for managing review access. | Found: Go to **Settings** > **Role groups**. On **Role groups for Microsoft Purview solutions**, select **eDiscovery Manager**. | Fix: Extend controls[0].ui.path and the matching rendered cell to 'Settings > Role groups > eDiscovery Manager > Edit > Manage eDiscovery Manager > Choose users or Choose groups'. The existing route reaches the correct role-group pane but stops before its membership control. Source: https://learn.microsoft.com/purview/edisc-permissions. | Source: https://learn.microsoft.com/purview/edisc-permissions
- [supported, minor] Governance controls: audit-search permissions / role: An eDiscovery-permissioned account can use the audit row to search recorded eDiscovery activities. | Found: Go to the Microsoft Purview portal and sign in with the credentials for a user account assigned eDiscovery permissions. | Fix: Replace the sentence with: 'The eDiscovery audit guide starts with an account assigned eDiscovery permissions, but the general audit-search guide requires the Audit Logs or View-Only Audit Logs role in Microsoft Purview to search, and the corresponding role in Exchange admin center to access audit cmdlets.' Add https://learn.microsoft.com/purview/audit-search to sources. | Source: https://learn.microsoft.com/purview/edisc-ref-audit-log
-->
