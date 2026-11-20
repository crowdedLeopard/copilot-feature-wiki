---
title: "Microsoft Purview: audit logs for role and scoped-role permission checks (GCC, GCC High and DoD)"
slug: "microsoft-purview-permissions-audit-log-improvements-us-government"
roadmapId: 573447
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans clearer Purview audit logs for role and scoped-role permission checks in GCC, GCC High and DoD; it is rolling out. No admin action is described and the default is not stated."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published: no page names a licence or price for this feature. Learn says Audit (Standard) and Audit (Premium) need the appropriate organisation subscription and per-user licensing to log and retain audit records."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","auditing","authorisation","monitoring","admin-controls","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 573447"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573447"
    kind: "roadmap"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Get started with auditing solutions"
    url: "https://learn.microsoft.com/purview/audit-get-started"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-permissions-audit-log-improvements","auditing"]
controls:
  - governs: "Searching the audit log for permission-check records"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <start> -EndDate <end> -Operations <operation names>"
      docs: "https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog"
    note: "Operation names go in Activities - operations names. Run the cmdlet in Exchange Online PowerShell. Learn lists no operation names for this feature yet."
  - governs: "Who can search and export the audit log"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity <role group> -Member <user>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Audit Reader and Audit Manager hold the audit roles by default. Viewing role groups needs Global Administrator or the Role Management role."
  - governs: "Whether the tenant records unified audit log activity"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "General audit control, not specific to this feature. The banner appears only if auditing is off. Needs the Audit Logs role in Exchange Online."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-20"
    note: "First briefing for the GCC, GCC High and DoD roadmap item; status Rolling out, with no Learn page yet for the new audit records."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 58
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "40945ce8546fd39e01412631fbd68ad0"
---

## What's changing

Microsoft plans to improve the permission checks that run when users access the Microsoft Purview portal, and to make the audit logs clearer about the outcome. The roadmap item says enhanced audit logs will give visibility into role and scoped-role access decisions, to help administrators troubleshoot access issues and monitor authorisation outcomes.

This page covers roadmap item 573447, which lists GCC, GCC High and DoD, on the web, at General Availability. Microsoft lists the same feature under a separate roadmap item, 569363, for Worldwide (Standard Multi-Tenant), with status Launched and a target of September CY2026. See [the Worldwide briefing](/features/microsoft-purview-permissions-audit-log-improvements/).

Item 573447 has status Rolling out and a target of October CY2026, so the target month has passed. The record was last modified on 3 November 2026. The roadmap text is the only source about this feature: Microsoft Learn does not describe it yet, so what follows about its behaviour is the roadmap's description. The roadmap record does not name the audit operations, fields or default state, and Learn's list of Microsoft Purview permission activities covers changes to role groups and assignments, not access checks (at the time of writing, November 2026).

## Why it matters

If you run Purview in a US Government cloud, this is aimed at one recurring support question: why a person can or cannot reach part of the Purview portal. Better audit records of role and scoped-role decisions should shorten that investigation. This is the wiki's reading of the roadmap's stated purpose.

Microsoft has not stated whether the records are on by default or need setup, so plan on no action being required while you confirm. The practical work is to be sure auditing is on, that the right people can read the audit log, and that any saved searches or reports can take new operation names once Microsoft publishes them.

## Risk assessment

**Data exposure**

- The new records concern authorisation decisions in the Purview portal. Microsoft has not published their fields, so check a sample record before widening who may search the audit log. Searching needs the *Audit Logs* or *View-Only Audit Logs* role in the Microsoft Purview portal.
- Learn says a restricted admin can only search and export user-generated audit logs within their assigned administrative units, while an unrestricted admin has access to all audit logs, including those from non-user and system accounts. Which group sees the new records is not stated.

**Security & identity**

- The roadmap describes better visibility, not new access. When an Entra role and a scoped Microsoft Purview role group assignment overlap, Learn says the Entra role takes precedence at runtime and the user's effective permissions are unscoped, so expect some access decisions to reflect that precedence.

**Autonomy & actions**

- No change described: the roadmap item covers audit logging and permission checks, and names no automated action.

**Change & support**

- Saved audit searches, SIEM filters and runbooks that select operations by name may need new entries once Microsoft publishes the operation names.
- Rollout is still in progress for this item, so an empty search result is not proof that no checks happened.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for this feature (Not yet published). The roadmap item mentions no charge.

The general Audit rules still apply. Learn says licensing for Audit (Standard) and Audit (Premium) requires the appropriate organisation subscription that provides access to the audit log search tool and per-user licensing that is required to log and retain audit records ([Get started with auditing solutions](https://learn.microsoft.com/purview/audit-get-started)). Learn also says how long a record is retained and searchable depends on the Office 365 or Microsoft 365 Enterprise subscription and the licence assigned to specific users ([Search the audit log](https://learn.microsoft.com/purview/audit-search)). Which retention rule applies to the new records is not stated.

The indirect cost is admin time to review audit searches, reports and access-troubleshooting procedures.

## Scope

- **Clouds:** the roadmap record lists GCC, GCC High and DoD for this item. Worldwide (Standard Multi-Tenant) is a separate roadmap item, 569363.
- **Platform and phase:** web; General Availability. Status Rolling out, target October CY2026.
- **Who is affected:** the roadmap names administrators who troubleshoot access issues and monitor authorisation outcomes.
- **Prerequisite:** Learn says audit logging is on by default for Microsoft 365 organisations, and that when auditing is turned off, audit log searches in the Microsoft Purview portal return no results.
- **Roles:** searching needs the *Audit Logs* or *View-Only Audit Logs* role, which Learn says the *Audit Manager* and *Audit Reader* role groups hold by default.

## Governance guidance

### Before rollout

- Confirm auditing is on by running `Get-AdminAuditLogConfig | Format-List UnifiedAuditLogIngestionEnabled` in Exchange Online PowerShell (third row of the controls table).
- Check who holds the *Audit Logs* and *View-Only Audit Logs* roles through the *Audit Manager* and *Audit Reader* role groups, so only intended people can read the new records (second row).
- Identify administrators who hold both an Entra role and a scoped Purview role group assignment, because the Entra role takes precedence and their access decisions will be unscoped.

### At rollout

- Search the audit log from the Audit page over the rollout period and open a sample record to see which operation names and fields appear (first row), since Learn lists none for access checks.
- Test with a restricted administrator account to see whether administrative-unit scoping hides the new records.
- Tell the security and compliance teams that audit visibility of role and scoped-role decisions is rolling out.

### After rollout

- Update saved searches, SIEM filters and runbooks that select audit operations by name, once the operation names are published.
- Watch the Learn page Audit log activities and Message center for the operation names, the default state and any licensing statement.
- Compare against the Worldwide briefing for the same feature, and treat it as a lead for what to check, not as a description of this item.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Searching the audit log for permission-check records</strong><br><small>Tenant</small><br><small class="controls__note">Operation names go in Activities - operations names. Run the cmdlet in Exchange Online PowerShell. Learn lists no operation names for this feature yet.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;start&gt; -EndDate &lt;end&gt; -Operations &lt;operation names&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can search and export the audit log</strong><br><small>User</small><br><small class="controls__note">Audit Reader and Audit Manager hold the audit roles by default. Viewing role groups needs Global Administrator or the Role Management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &lt;role group&gt; -Member &lt;user&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the tenant records unified audit log activity</strong><br><small>Tenant</small><br><small class="controls__note">General audit control, not specific to this feature. The banner appears only if auditing is off. Needs the Audit Logs role in Exchange Online.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents no setting specific to this feature at the time of writing (November 2026), so the rows are the existing audit controls an administrator uses to read the records and to decide who may read them.

Searching the audit log needs the *Audit Logs* or *View-Only Audit Logs* role in the Microsoft Purview portal; the cmdlet route needs the same roles in the Exchange admin center. Turning auditing on or off needs the *Audit Logs* role in Exchange Online. Viewing role groups in the portal needs the Global Administrator role or the *Role Management* role. Turning auditing off makes audit searches return no results, so it is not a way to switch off this feature alone.

## Open questions

- Which operation names, fields and record type will carry the permission-check records, and when will Learn's Audit log activities page list them?
- Are the records on by default in GCC, GCC High and DoD, or do they need configuration? Neither the roadmap nor Learn says.
- Do restricted administrators scoped to administrative units see the new records, or only unrestricted administrators?
- Does this rollout match the Worldwide item 569363 in content and timing, given the roadmap lists a different status and target for each?

<!-- rationale
risk: Low. The roadmap describes better audit visibility of permission decisions in the Purview portal, not a change to who can access what; no source says existing behaviour changes.
cost: Low. The only cost the sources show is admin time; no licence or meter for this feature is published, and the general Audit licensing rules still apply.
impact: Low. The roadmap names administrators who troubleshoot access issues and monitor authorisation outcomes; it does not describe any change for ordinary users.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model / licensing: The licensing model is unknown because no feature-specific licence has been published. | Found: Licensing for Audit (Standard) and Audit (Premium) requires the appropriate organization subscription that provides access to the audit log search tool and per-user licensing that's required to log and retain audit records. | Fix: Set licensing.model to included under the standard's rule for an option inside a licensed product. Replace the notes with: 'The existing Audit (Standard) or Audit (Premium) organisation subscription and per-user licensing requirements apply. A licence requirement specific to this improvement is not yet published.' Keep https://learn.microsoft.com/purview/audit-get-started as the source; do not assert that the new events are Premium-only. | Source: https://learn.microsoft.com/purview/audit-get-started
- [supported, minor] controls[1].ui; Governance controls / admin-path: Settings > Roles and scopes > Role groups reaches the Purview role groups used to manage audit access. | Found: Go to Settings > Roles and scopes ... Select Role groups. ... select a Microsoft Purview role group you want to add users to. Select Edit on the control bar. ... select Choose users or Choose groups. | Fix: Extend controls[1].ui.path and the rendered table path to 'Settings > Roles and scopes > Role groups > role group > Edit > Choose users' for adding individual users, as documented at https://learn.microsoft.com/purview/purview-permissions#add-users-or-groups-to-a-microsoft-purview-built-in-role-group. The current path stops early on the correct listing page. | Source: https://learn.microsoft.com/purview/purview-permissions
- [supported, minor] controls[1].api; Governance controls / command: Add-RoleGroupMember -Identity <role group> -Member <user> grants a user the roles assigned to a Purview role group. | Found: Add-RoleGroupMember [-Identity] <RoleGroupIdParameter> -Member <SecurityPrincipalIdParameter> ... When you add a member to a role group, the member is given the effective permissions provided by the management roles assigned to the role group. | Fix: Add https://learn.microsoft.com/entra/identity/role-based-access-control/m365-workload-docs#microsoft-365 to sources. Its management API reference explicitly documents Add-RoleGroupMember for Purview-specific roles in Security & Compliance PowerShell; the cited command reference supplies the syntax. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember
-->
