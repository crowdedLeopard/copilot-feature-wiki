---
title: "Microsoft Purview: audit records for role and scoped-role permission checks"
slug: "microsoft-purview-permissions-audit-log-improvements"
roadmapId: 569363
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft Purview now records role and scoped-role permission checks in the portal as two new audit operations, on by default. Compliance and security admins can use them to troubleshoot access; no action is required."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published: no page names a licence or price for the two new audit operations. The general Audit prerequisites still apply: an appropriate organisation subscription and per-user licensing are required to log and retain audit records."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","auditing","authorisation","monitoring","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 569363"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569363"
    kind: "roadmap"
  - title: "MC1473155: (Updated) Microsoft Purview: permissions audit log improvements"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1473155"
    kind: "message-center"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "Get started with auditing solutions"
    url: "https://learn.microsoft.com/purview/audit-get-started"
    kind: "learn"
  - title: "Learn about auditing solutions in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/audit-solutions-overview"
    kind: "learn"
  - title: "Manage audit log retention policies"
    url: "https://learn.microsoft.com/purview/audit-log-retention-policies"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-ediscovery-in-product-diagnostics-to-troubleshoot-common-challenges"]
controls:
  - governs: "Searching the audit log for the new permission-check operations"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <start> -EndDate <end> -Operations CheckUsersInRoles,CheckUserInRolesWithScopes"
      docs: "https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog"
    note: "Enter the operation names in Activities - operations names. Run the cmdlet in Exchange Online PowerShell. The two names come from MC1473155; Learn does not list them yet."
  - governs: "Who can search and export the audit log"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity <role group name> -Member <user>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Learn names Audit Reader and Audit Manager as the default role groups for the audit roles. Viewing role groups needs Global Administrator or the Role Management role."
  - governs: "Whether the tenant records unified audit log events at all"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "General audit control, not specific to this feature. The banner appears only if auditing is off; Learn documents turning auditing off with Exchange Online PowerShell. Needs the Audit Logs role in Exchange Online."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-12T01:50:56"
changes:
  - date: "2026-11-18"
    note: "First briefing: two new Purview audit operations for role and scoped-role permission checks, on by default, rollout expected to finish by mid-November 2026."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 70 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: retention now states the general Audit rules, the Entra role precedence is qualified, unsupported read-only and no-access claims are removed, and search wording is narrowed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 72 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 72
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "452447727a126f836941a10155ef47d9"
---

## What's changing

Microsoft Purview now writes audit records when the Microsoft Purview portal checks a user's role-based access control (RBAC) permissions. Microsoft's notice MC1473155 says two new audit operations carry these records, **CheckUsersInRoles** and **CheckUserInRolesWithScopes**, and that administrators can review them as part of SecurityComplianceRBAC audit activities. The roadmap item describes the aim as clearer visibility into role and scoped-role access decisions, to help administrators troubleshoot access issues and monitor authorisation outcomes.

The notice says the change is enabled by default and requires no configuration. Records are generated only for access checks that happen after the feature reaches a tenant; no historical or retroactive records are created for earlier checks.

The notice also says supported permission-assignment and role-group change audit records will include a **ClientPortal** field within **PreExecutionMessage**, so administrators can tell whether a change was started from Microsoft Purview ("ClientPortal": "Microsoft Purview") or Microsoft Defender ("ClientPortal": "Microsoft Defender"). It lists granting, updating or removing permission assignments, and creating, updating or deleting role groups, as the supported activities.

The roadmap item is Launched, with a target of September CY2026, General Availability, Worldwide (Standard Multi-Tenant), on the web. MC1473155 was updated on 9 November 2026: rollout began in late September 2026 and is expected to complete by mid-November 2026 (previously late October). It sets no act-by date. At the time of writing (November 2026), the Learn pages on Purview permissions and on audit log activities do not describe the two new operations or the ClientPortal field, so what is known about them comes from the notice.

## Why it matters

An administrator investigating "why can this person not open that Purview area?" now has audit records aimed at how an access evaluation came out, as the roadmap item describes, and not only at who changed a role group.

Nothing has to be switched on. The practical work is communication and procedure: tell the compliance and security teams the operations exist, decide whether access investigations should search for them, and update any reporting that reads Purview RBAC audit data. Because records exist only for checks made after deployment, an investigation into an earlier incident will not find them.

## Risk assessment

**Data exposure**

- The new records describe authorisation decisions in the Purview portal. Learn does not describe the fields of the two operations, so check a sample record for what it carries before widening who may search the audit log. Reading audit records requires the *Audit Logs* or *View-Only Audit Logs* role in the Microsoft Purview portal.
- Restricted administrators (those assigned administrative units) can search and export only user-generated audit logs within their units, while unrestricted administrators see all logs including non-user and system accounts. Learn does not say which group sees the new records, so confirm with a restricted account.

**Security & identity**

- The notice describes adding audit records. It improves the trail for scoped-role questions, which matters because when an Entra role and a scoped Purview role group overlap, the Entra role takes precedence and administrative-unit scoping does not restrict effective permissions for those overlapping capabilities. Expect some access checks to reflect that precedence rather than a scoped assignment.
- The ClientPortal field helps separate changes made from the Purview portal from those made in the Defender portal, for the activities the notice lists.

**Autonomy & actions**

- The notice describes new audit records for permission checks.

**Change & support**

- Review searches that explicitly filter operation names and add the two new operations where relevant. Saved queries, SIEM filters and runbooks that select SecurityComplianceRBAC activity need a review.
- Rollout was still expected to complete by mid-November 2026, so some tenants may not have records yet; do not treat an empty result as proof that no checks happened.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for the two new audit operations (Not yet published). MC1473155 describes the change as enabled by default with no configuration and does not mention a charge. The general Audit prerequisites still apply: Learn says Audit licensing requires an appropriate organisation subscription and the per-user licensing needed to log and retain audit records ([Get started with auditing solutions](https://learn.microsoft.com/purview/audit-get-started)).

The Learn audit search page says how long an audit record is retained and searchable depends on the Office 365 or Microsoft 365 Enterprise subscription and the licence assigned to specific users. General Audit retention rules apply: Audit (Standard) retains records for 180 days; Audit (Premium) retains activities outside Entra ID, Exchange, OneDrive and SharePoint for 180 days by default, subject to applicable retention policies. Records generated by non-user entities have a separate fixed one-year retention rule. Confirm the new records' workload and generating identity before assigning a duration. See [Learn about auditing solutions in Microsoft Purview](https://learn.microsoft.com/purview/audit-solutions-overview) and [Manage audit log retention policies](https://learn.microsoft.com/purview/audit-log-retention-policies).

The indirect cost is admin time: updating audit searches, reports and documentation, which MC1473155 recommends.

## Scope

- **Who is affected:** per MC1473155, Microsoft Purview administrators and compliance administrators who review audit logs for access investigations and troubleshooting.
- **Surfaces:** the Microsoft Purview portal and Microsoft Purview Audit.
- **Cloud and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Web. Other clouds are not listed on the record.
- **Rollout:** late September 2026 to an expected mid-November 2026 completion (MC1473155, updated 9 November 2026).
- **Prerequisite:** audit logging must be on. Learn says it is on by default for Microsoft 365 organisations but not for Small and Medium Business licences such as Business Basic, Standard and Premium, where it must be enabled manually. If auditing is off, searches in Microsoft Purview return no results.

## Governance guidance

### Before rollout

- Confirm auditing is on in your tenant by running `Get-AdminAuditLogConfig | Format-List UnifiedAuditLogIngestionEnabled` in Exchange Online PowerShell (see the auditing row in the controls table); this matters most for Business Basic, Standard and Premium tenants.
- Check who holds the *Audit Logs* or *View-Only Audit Logs* roles, through the Audit Reader and Audit Manager role groups, so only intended people can read the new records.
- Tell the compliance and security teams that the CheckUsersInRoles and CheckUserInRolesWithScopes operations exist, as MC1473155 recommends.

### At rollout

- Search the audit log for both operation names from the Audit page, and open a sample record to see which fields it carries.
- Test with a restricted administrator account to see whether administrative-unit scoping hides the records, since Learn does not say.
- Add the ClientPortal values to any report that separates Purview and Defender changes, once records carrying it appear.

### After rollout

- Update investigation procedures, saved searches and reporting that reference Purview RBAC audit data, per MC1473155.
- Watch the Audit log activities page for the operations to be documented, and Message center for further updates to MC1473155.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Searching the audit log for the new permission-check operations</strong><br><small>Tenant</small><br><small class="controls__note">Enter the operation names in Activities - operations names. Run the cmdlet in Exchange Online PowerShell. The two names come from MC1473155; Learn does not list them yet.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;start&gt; -EndDate &lt;end&gt; -Operations CheckUsersInRoles,CheckUserInRolesWithScopes</code> <a href="https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can search and export the audit log</strong><br><small>User</small><br><small class="controls__note">Learn names Audit Reader and Audit Manager as the default role groups for the audit roles. Viewing role groups needs Global Administrator or the Role Management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &lt;role group name&gt; -Member &lt;user&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the tenant records unified audit log events at all</strong><br><small>Tenant</small><br><small class="controls__note">General audit control, not specific to this feature. The banner appears only if auditing is off; Learn documents turning auditing off with Exchange Online PowerShell. Needs the Audit Logs role in Exchange Online.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's notice says the new records need no configuration, and Learn documents no setting specific to these two operations at the time of writing (November 2026). The rows above are the existing audit controls an administrator uses to read the records and to decide who may read them.

Searching the audit log needs the *Audit Logs* or *View-Only Audit Logs* role. Turning auditing on or off needs the *Audit Logs* role in Exchange Online, which Learn says the *Compliance Management* and *Organization Management* role groups hold by default. Viewing role groups in the portal needs the Global Administrator role or the *Role Management* role. Turning auditing off stops all audit searches returning results, so it is not a way to limit these two operations alone.

## Open questions

- Which fields do CheckUsersInRoles and CheckUserInRolesWithScopes records carry, and when will Learn list them on the Audit log activities page?
- Which workload and generating identity do the new records carry, and so which retention rule applies? General Audit retention rules apply: Audit (Standard) retains records for 180 days; Audit (Premium) retains activities outside Entra ID, Exchange, OneDrive and SharePoint for 180 days by default, subject to applicable retention policies, and non-user-entity records have a separate fixed one-year retention rule.
- Do restricted administrators, scoped to administrative units, see the new records, or only unrestricted administrators?
- Has rollout finished everywhere? MC1473155 expected completion by mid-November 2026; watch Message center for a further update.

<!-- rationale
risk: Low. The change adds audit records for permission checks: Microsoft's notice MC1473155 says it is on by default, needs no configuration and records only checks made after deployment.
cost: Low. The only cost the sources show is admin time to update investigation and reporting procedures; Microsoft has not published a licence or meter for the two new operations.
impact: Low. Microsoft's notice names Purview administrators and compliance administrators who review audit logs as the people affected; ordinary users see no change.
-->
