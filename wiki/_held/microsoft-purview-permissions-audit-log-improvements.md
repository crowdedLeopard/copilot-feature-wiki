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
  notes: "Not yet published: no page names a licence or price for the two new audit operations. The Learn audit page says how long a record is kept depends on the subscription and the licence assigned to specific users."
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
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 64
  unconfirmed: 2
  contradicted: 4
  attempts: 1
  hash: "bea4c58e94b0d844229ae45f26f32a62"
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

- The change adds records and grants no access. It improves the trail for scoped-role questions, which matters because an Entra role takes precedence over a scoped Microsoft Purview role group assignment, leaving the user's effective permissions unscoped. Expect some access checks to reflect that precedence rather than a scoped assignment.
- The ClientPortal field helps separate changes made from the Purview portal from those made in the Defender portal, for the activities the notice lists.

**Autonomy & actions**

- No change: the notice describes read-only audit records and no automated action.

**Change & support**

- Searches written before the rollout will not include the new operations unless someone adds them. Saved queries, SIEM filters and runbooks that select SecurityComplianceRBAC activity need a review.
- Rollout was still expected to complete by mid-November 2026, so some tenants may not have records yet; do not treat an empty result as proof that no checks happened.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for the two new audit operations (Not yet published). MC1473155 describes the change as enabled by default with no configuration and does not mention a charge.

The Learn audit search page says how long an audit record is retained and searchable depends on the Office 365 or Microsoft 365 Enterprise subscription and the licence assigned to specific users. It states retention periods for Microsoft Entra ID, Exchange and SharePoint activity; it does not say which period applies to these new records.

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
- Review Entra role assignments for users who also hold scoped Purview role groups, because the Entra role takes precedence and makes effective access unscoped.
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
- Does the audit retention period for the new records follow the user's licence, as for Entra ID, Exchange and SharePoint activity, or does it need a retention policy?
- Do restricted administrators, scoped to administrative units, see the new records, or only unrestricted administrators?
- Has rollout finished everywhere? MC1473155 expected completion by mid-November 2026; watch Message center for a further update.

<!-- rationale
risk: Low. The change adds audit records and no new access: Microsoft's notice MC1473155 says it is on by default, needs no configuration and records only checks made after deployment.
cost: Low. The only cost the sources show is admin time to update investigation and reporting procedures; Microsoft has not published a licence or meter for the two new operations.
impact: Low. Microsoft's notice names Purview administrators and compliance administrators who review audit logs as the people affected; ordinary users see no change.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing; Open questions: retention / absence: The applicable retention rules for the new records are unpublished, leaving open whether retention follows licensing or requires a policy. | Found: Audit records for all other activities are retained for 180 days by default, or you can use audit log retention policies to configure longer retention periods. | Fix: Replace the final sentence of the retention paragraph and the retention open question with: 'General Audit retention rules apply: Audit (Standard) retains records for 180 days; Audit (Premium) retains activities outside Entra ID, Exchange, OneDrive and SharePoint for 180 days by default, subject to applicable retention policies. Non-user-entity records have a separate fixed one-year retention rule. Confirm the new records' workload and generating identity before assigning a duration.' Cite https://learn.microsoft.com/purview/audit-solutions-overview, including its non-user-entity qualification, and https://learn.microsoft.com/purview/audit-log-retention-policies. | Source: https://learn.microsoft.com/purview/audit-solutions-overview
- [contradicted, blocker] Risk assessment: Security & identity; Governance guidance: After rollout / role: Holding an Entra role together with a scoped Purview role group makes the user's effective permissions unscoped without qualification. | Found: Entra roles always take precedence, and scoping applied through Administrative Units doesn't restrict the user's effective permissions for overlapping capabilities. | Fix: In both places replace the unqualified precedence explanation with: 'When an Entra role and a scoped Purview role group overlap, the Entra role takes precedence and administrative-unit scoping does not restrict effective permissions for those overlapping capabilities.' Keep the citation to https://learn.microsoft.com/purview/purview-permissions#role-precedence-and-scope-behavior. | Source: https://learn.microsoft.com/purview/purview-permissions
- [unsupported, major] Risk assessment: Security & identity; rationale: risk / behaviour: The change grants no new access. | Found: Searched: Microsoft Purview permissions audit log improvements CheckUsersInRoles grants access read-only automated actions. Read MC1473155 and purview-permissions; neither explicitly guarantees unchanged access grants. | Fix: Replace 'The change adds records and grants no access' with 'The notice describes adding audit records'. In the risk rationale replace 'adds audit records and no new access' with 'adds audit records for permission checks'.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The notice describes the new records as read-only and states there is no automated action. | Found: Searched: Microsoft Purview permissions audit log improvements CheckUsersInRoles grants access read-only automated actions. Read MC1473155 and purview-permissions; neither states this read-only/no-automation guarantee. | Fix: Replace the bullet with: 'The notice describes new audit records for permission checks.'
- [contradicted, blocker] Risk assessment: Change & support / behaviour: Searches written before rollout cannot include the new operations unless someone adds them. | Found: You can search for all events in a specified date range, or you can filter the results based on specific criteria | Fix: Replace the sentence with: 'Review searches that explicitly filter operation names and add the two new operations where relevant.' Unfiltered searches do not require adding operation names. | Source: https://learn.microsoft.com/powershell/module/exchange/search-unifiedauditlog
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing / licensing: The licence requirement specific to the two new operations is not yet published, so the feature-specific licensing model is unknown. | Found: Searched: Purview "CheckUsersInRoles" "CheckUserInRolesWithScopes" audit configuration licensing; "CheckUsersInRoles" licensing price meter. Opened audit-get-started and audit-solutions-overview; no operation-specific licence found. | Fix: Keep the feature-specific unknown, but add: 'The general Audit prerequisites still apply: an appropriate organisation subscription and per-user licensing are required to log and retain audit records.' Cite https://learn.microsoft.com/purview/audit-get-started#step-1-verify-organization-subscription-and-billing.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist instructs readers to review Entra role assignments, but the table has no row for that control. | Found: Review Entra role assignments for users who also hold scoped Purview role groups The table lists only audit searching, audit reader membership, and tenant auditing. | Fix: Remove the 'Review Entra role assignments' checklist bullet; retain the corrected precedence explanation in Risk assessment.
-->
