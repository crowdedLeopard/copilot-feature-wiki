---
title: "Microsoft Purview: Priority cleanup to permanently delete Exchange mailbox items under holds (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-data-lifecycle-management-introduction-o-us-government"
roadmapId: 473493
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans Priority cleanup for Exchange in GCC, GCC High and DoD: a role-gated, multi-approver, audited way to permanently delete mailbox items despite retention policies and holds. Compliance and security owners should review it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's Purview service description lists Microsoft 365 E5/A5/G5, the Microsoft Purview Suite, Microsoft 365 E5/A5/F5/G5 Information Protection and Governance and Office 365 E5/A5/G5 as giving user rights to Priority cleanup. No price or meter is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","data-lifecycle-management","priority-cleanup","retention","exchange","ediscovery","auditing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 473493"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=473493"
    kind: "roadmap"
  - title: "Expedite the permanent deletion of sensitive information from mailboxes"
    url: "https://learn.microsoft.com/purview/priority-cleanup-exchange"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "New-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-data-lifecycle-management-introduction-of-secure-workf","microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedr-us-government","ediscovery","auditing"]
controls:
  - governs: "Whether priority cleanup policies can be created in the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Priority cleanup settings > Configuration > control for priority cleanup"
      docs: "https://learn.microsoft.com/purview/priority-cleanup-exchange"
    api: null
    note: "Needs the Priority Cleanup Admin role. Also turns it off for SharePoint and OneDrive; existing policies keep running and can be deleted but not modified."
  - governs: "Creating a priority cleanup policy for Exchange mailboxes"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Priority cleanup > + Create a priority cleanup"
      docs: "https://learn.microsoft.com/purview/priority-cleanup-exchange"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy -Name <policy name> -PriorityCleanup"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    note: "Security & Compliance PowerShell. The cmdlet page says the switch creates a Priority cleanup policy; it does not describe the Exchange approver steps."
  - governs: "Who holds the Priority Cleanup Admin and approver roles"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Priority Cleanup Admin is added automatically to Organization Management only. Security groups are supported only in commercial cloud organisations, so add individual users."
  - governs: "Whether the unified audit log records activity"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "The portal banner appears only when auditing is off. Learn requires auditing on at least one day before the first priority cleanup policy."
  - governs: "Searching the audit trail of a priority cleanup"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Search by Cleanup ID or the PriorityCleanupTagApplied and PriorityCleanupDelete operations. Needs the Audit Logs or View-Only Audit Logs role."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-18T23:00:06"
changes:
  - date: "2026-11-24"
    note: "New briefing for the GCC, GCC High and DoD roadmap item; covers the Exchange Priority cleanup roles, approvers, licences and audit controls."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 91 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected: approver role requirements for all three stages and the licence statement now follow Learn; removed a checklist step with no controls row and an answered open question."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 80
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "2981d7f097be024ee63aff32a8902db9"
---

## What's changing

Microsoft plans a Priority cleanup feature for Exchange in Data Lifecycle Management that lets an administrator create a recurring exception to delete mailbox items that sit under a broader retention policy or legal hold. The roadmap item says creating one needs a separate security role, multiple approvers and gives a complete audit trail. The roadmap lists the clouds as GCC, GCC High and DoD, on the web, with status In development and a target of November CY2026.

Microsoft Learn already documents Priority cleanup for Exchange mailboxes, under a note that it is "rolling out in preview and subject to change". The roadmap item lists General Availability as its release phase and In development as its status, and the Learn page does not name which clouds it describes, so what follows about behaviour is the Learn page's description, not a confirmed description for GCC, GCC High or DoD.

According to Learn, an administrator builds a policy with a search query (Keyword Query Language) over mailboxes, chooses to delete as soon as possible or after a retention period, and names approvers. Items still go through the same deletion process and timings as normal retention, but there is no need to wait for a retention period to end or a hold to be released. Learn also describes a simulation mode, and says simulation is not required for Exchange but is recommended. Learn says items that are records or regulatory records cannot be cleaned up this way, and that data already copied to an eDiscovery review set is out of reach of Priority cleanup.

Microsoft lists this feature under a second roadmap item, 392838, for Worldwide (Standard Multi-Tenant), with a target of January CY2027 and a preview date of February CY2025. This page covers item 473493 only. See also [the Worldwide briefing](/features/microsoft-purview-compliance-portal-data-lifecycle-management-introduction-of-secure-workf/).

## Why it matters

This is a control that deliberately defeats other controls. Learn says the deletion is irreversible and can override existing holds and even Preservation Lock, and that once all required approvals are complete, items cannot be restored by users, by admins or by Microsoft. For a compliance owner in a regulated US Government tenant, that is a new way for content under a litigation or eDiscovery hold to disappear, which has to be weighed against the stated uses: data spillage and privacy requests.

Microsoft has not stated what the default is in these clouds. The Learn page says the feature is enabled by default at the tenant level, but it does not name its clouds. No source says existing retention behaviour changes on arrival, so the practical decision is whether to leave the tenant control on, who holds the role, and who may approve.

## Risk assessment

**Data exposure**

- Approved items are permanently deleted, including items under retention policies, litigation holds and eDiscovery holds. Learn says they cannot be restored by users, admins or Microsoft, so a wrong query or a careless approval is not recoverable.
- Learn says deleting a policy after its approval process is complete may still leave items to be permanently deleted. Deleting the policy is not an undo.
- Learn says items already copied to an eDiscovery review set cannot be deleted by Priority cleanup, so a spillage clean-up leaves a copy until the eDiscovery case is deleted.

**Security & identity**

- Learn requires the Priority Cleanup Admin role to create policies, turn the feature on or off and give first-stage approval. The first-stage approver needs Priority Cleanup Admin, Data Classification Content Viewer, Data Classification List Viewer and Disposition Management, assigned before policy creation. The Priority Cleanup Admin role is added automatically to the Organization Management role group, so anyone in that group can reach it without further assignment.
- Learn requires three approvals for every item: a priority cleanup admin, a retention manager and an eDiscovery admin. It says the first-stage admin should be a different person from the policy creator but that this is not enforced, so separation of duties is a procedure to set.
- Learn says approvers must be individual users and mail-enabled security groups are not supported.

**Autonomy & actions**

- Once a policy is on, Learn says it can take up to seven days to apply the policy to items and trigger the approval process, and approved items need up to seven days to be permanently deleted.
- Learn lists Exchange policy use as "Rare", while the roadmap describes a recurring exception. Confirm which pattern Microsoft intends for these clouds.

**Change & support**

- Learn says users see a Retention message bar in Outlook on items a policy identifies, with the policy name and "(-1 days)", and the policy name is visible to end users. Name policies neutrally.
- Learn says the PriorityCleanupTagApplied and PriorityCleanupDelete audit events have no friendly names in the portal, so audit searches need the operation names or the cleanup ID.

## Cost and licensing

Microsoft's Purview service description says that to use the Priority cleanup policy to apply labels that bypass existing retention or eDiscovery holds, the following licences provide user rights: Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5/G5 Information Protection and Governance, and Office 365 E5/A5/G5. Any user benefiting from the service requires a licence, including users with a Purview role assigned for portal use and the users associated with Exchange user mailboxes where a Purview policy or feature is used.

No meter, price or storage charge for Priority cleanup is documented on the feature page or in the service description at the time of writing (November 2026). The indirect cost is people's time: Learn requires three approver stages, each with its own set of roles, and the policy creation fails if an approver lacks them.

Sources: [Expedite the permanent deletion of sensitive information from mailboxes](https://learn.microsoft.com/purview/priority-cleanup-exchange) and the [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description).

## Scope

The roadmap item covers the Exchange workload in GCC, GCC High and DoD, on the web, in the Microsoft Purview portal. Roadmap status is In development with a target of November CY2026.

Learn says Priority cleanup for Exchange needs the Priority Cleanup Admin role, auditing turned on at least one day before the first policy, and a mailbox with at least 10 MB of data. Group mailboxes are supported through adaptive scopes only.

Learn says the tenant-level control covers SharePoint and OneDrive as well as Exchange, and that one policy cannot cover all three locations. The role-group page says security groups are supported only in Microsoft 365 commercial cloud organisations, so in these clouds assign roles to individual users.

## Governance guidance

### Before rollout

- Decide whether your organisation wants the capability, and if you use Preservation Lock, whether to turn off the tenant-level priority cleanup control, as Learn suggests for highly regulated organisations.
- Name the individuals for the three approver stages and give them the roles Learn lists for each stage before any policy is created, because creation fails otherwise.
- Confirm unified audit logging is on at least one day ahead of the first policy.
- Ask Microsoft, through Message center and the Learn page, whether Priority cleanup is available to your GCC, GCC High or DoD tenant and in what form.

### At rollout

- Check which role groups hold the Priority Cleanup Admin role; remember it arrives with Organization Management.
- Create the first policy in simulation mode and review the returned samples before turning it on, although Learn does not require simulation for Exchange.
- Record the Cleanup ID that the portal shows after creation, to track the policy in audit search.

### After rollout

- Search the audit log for the PriorityCleanupTagApplied and PriorityCleanupDelete operations and the Cleanup ID.
- Re-read the Learn page when the roadmap status changes, because it is marked as preview.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether priority cleanup policies can be created in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Priority Cleanup Admin role. Also turns it off for SharePoint and OneDrive; existing policies keep running and can be deleted but not modified.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Priority cleanup settings › Configuration › control for priority cleanup <a href="https://learn.microsoft.com/purview/priority-cleanup-exchange" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating a priority cleanup policy for Exchange mailboxes</strong><br><small class="controls__note">Security &amp; Compliance PowerShell. The cmdlet page says the switch creates a Priority cleanup policy; it does not describe the Exchange approver steps.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Priority cleanup › + Create a priority cleanup <a href="https://learn.microsoft.com/purview/priority-cleanup-exchange" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy -Name &lt;policy name&gt; -PriorityCleanup</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who holds the Priority Cleanup Admin and approver roles</strong><br><small>User</small><br><small class="controls__note">Priority Cleanup Admin is added automatically to Organization Management only. Security groups are supported only in commercial cloud organisations, so add individual users.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the unified audit log records activity</strong><br><small>Tenant</small><br><small class="controls__note">The portal banner appears only when auditing is off. Learn requires auditing on at least one day before the first priority cleanup policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Searching the audit trail of a priority cleanup</strong><br><small>Tenant</small><br><small class="controls__note">Search by Cleanup ID or the PriorityCleanupTagApplied and PriorityCleanupDelete operations. Needs the Audit Logs or View-Only Audit Logs role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The tenant-level control is the only documented switch that stops new policies. It leaves existing policies running and deletable, but not modifiable, per Learn. It is shared with SharePoint and OneDrive.

Roles are the main safeguard. The first-stage approver needs Priority Cleanup Admin, Data Classification Content Viewer, Data Classification List Viewer and Disposition Management, assigned before policy creation. Retention approvers need Retention Management, Data Classification Content Viewer, Data Classification List Viewer and Disposition Management, assigned before policy creation. The policy wizard names eDiscovery Administrator, while Learn's detailed approver requirements list Search And Purge, Hold, Review, Data Classification Content Viewer, Data Classification List Viewer and Disposition Management; assign the listed requirements before policy creation. Learn does not enforce a different person for the creator and the first-stage approver. The portal route for audit search is the one Learn points to for monitoring. Microsoft Learn documents no API or PowerShell setting for the tenant switch at the time of writing (November 2026).

## Open questions

- Is Priority cleanup for Exchange available in GCC, GCC High and DoD on the date the roadmap targets (November CY2026), and does the Learn page's preview note apply there? Watch Message center and the Learn page.
- Is the tenant-level control on or off on arrival in these clouds? The Learn page says enabled by default, without naming clouds.
- Why does the roadmap describe a recurring exception while Learn lists Exchange use as rare? Confirm whether policies in these clouds can recur.
- How does the feature in these clouds differ from the Worldwide roadmap item 392838, which targets January CY2027?

<!-- rationale
risk: Medium. Approved deletions are permanent and can override holds and Preservation Lock, but they need a dedicated role, three approver stages and auditing; the default for these clouds is not stated.
cost: Medium. Microsoft's service description lists Microsoft 365 E5/A5/G5 and several Purview licences as providing the user rights; no separate meter or price is documented. Approvers' time is a further cost.
impact: Low. Priority cleanup admins and approvers handle it; end users see a Retention message bar in Outlook on items that a policy identifies.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / record: Roadmap item 392838 describes the same Exchange Priority cleanup feature for Worldwide (Standard Multi-Tenant). | Found: 392838: "clouds": ["Worldwide (Standard Multi-Tenant)"]; "The first release of Priority cleanup enables admins to create a recurring exception ... on Exchange workload." | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=392838 to sources as kind roadmap, titled Microsoft 365 Roadmap 392838; it supports the Worldwide item, target and preview date.
- [supported, minor] Risk assessment: Security & identity; Cost and licensing; rationale: risk / role: Learn requires three approvals for every item: a priority cleanup admin, a retention manager and an eDiscovery admin. | Found: Three approvals are always required, irrespective of which type of hold is applied to the item: One priority cleanup admin approval. One retention manager approval. One eDiscovery admin approval. | Fix: After this statement add: 'The same Learn page's approval-process section instead describes retention-manager approval as conditional on retention settings and eDiscovery-admin approval as conditional on an eDiscovery hold; confirm the actual workflow before use.' | Source: https://learn.microsoft.com/purview/priority-cleanup-exchange
-->
