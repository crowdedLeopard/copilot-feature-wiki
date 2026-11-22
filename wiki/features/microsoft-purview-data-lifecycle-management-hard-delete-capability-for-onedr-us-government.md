---
title: "Microsoft Purview: permanently delete OneDrive and SharePoint files with Priority cleanup (GCC, GCC High, DoD)"
slug: "microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedr-us-government"
roadmapId: 561034
topic: "governance"
products: ["Microsoft Purview"]
summary: "Priority cleanup gains a permanent-deletion option for OneDrive and SharePoint files that skips the Recycle Bins. This page covers the GCC, GCC High and DoD roadmap item. Nothing is deleted until an admin creates and approves a policy."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "The Microsoft Purview service description says the listed licences, including Microsoft 365 E5/A5/G5 and Microsoft Purview Suite/EDU/GOV/FLW, provide user rights for Priority cleanup policies. A statement specific to permanent deletion is not yet published."
audiences: ["compliance","m365-admin","security","service-owner"]
tags: ["purview","data-lifecycle-management","priority-cleanup","retention","ediscovery","onedrive","sharepoint","auditing","gcc","gcc-high","dod"]
sources:
  - title: "Permanently delete files with Microsoft Purview Priority Cleanup"
    url: "https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion"
    kind: "learn"
  - title: "Override holds to clean up files for Copilot and reclaim storage"
    url: "https://learn.microsoft.com/purview/priority-cleanup-onedrive-sharepoint"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "New-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 561034"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561034"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep","microsoft-purview-compliance-portal-data-lifecycle-management-introduction-of-secure-workf","ediscovery","auditing"]
controls:
  - governs: "Whether priority cleanup policies can be created in the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Priority cleanup settings > Configuration > control for priority cleanup"
      docs: "https://learn.microsoft.com/purview/priority-cleanup-onedrive-sharepoint"
    api: null
    note: "Requires the Priority Cleanup Admin role. Also applies to Exchange. Existing policies keep working but cannot be modified."
  - governs: "Creating a priority cleanup policy for SharePoint and OneDrive locations"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Priority cleanup > + Create a priority cleanup"
      docs: "https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy -Name <policy name> -PriorityCleanup"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    note: "Security & Compliance PowerShell. The reference does not say whether this call selects permanent deletion."
  - governs: "Whether a policy deletes content permanently, skipping the recycle bins"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Priority cleanup > + Create a priority cleanup > Choose the type of priority cleanup > Static > Policy for SharePoint/OneDrive > Choose what to do with the content > Delete data permanently"
      docs: "https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion"
    api: null
    note: "Static-scope route. Public preview rollout begins on August 24, 2026 per the Learn page. A second Priority Cleanup admin must turn the policy on."
  - governs: "Monitoring permanent deletion by cleanup ID in the audit log"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Use the cleanup ID as the keyword and look for PriorityCleanupFileDeleted. Needs the Audit Logs or View-Only Audit Logs role."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-19T22:58:06"
changes:
  - date: "2026-11-22"
    note: "New briefing for the GCC, GCC High and DoD roadmap item for permanent deletion in Priority cleanup for OneDrive and SharePoint."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 86 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: the permanent-deletion row now gives the static-scope route, the PowerShell note names the module for each cmdlet, and the impact rationale no longer says end users see 'only' a label."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 106 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 106
  confirmed: 105
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "777270f20581d5c92c87b310d74102d7"
---

## What's changing

Microsoft is adding permanent deletion as an option on Priority cleanup policies for OneDrive and SharePoint. Microsoft Learn says this option bypasses the SharePoint and OneDrive recycle bins, and that after deletion the content is no longer discoverable in SharePoint search, Microsoft 365 Copilot or eDiscovery. The standard Priority cleanup workflow instead moves identified items to the second-stage Recycle Bin.

According to the Learn page, an administrator with the Priority Cleanup Admin role creates the policy, chooses an adaptive or static scope and the SharePoint or OneDrive locations, writes a query for the files, and selects **Delete data permanently**. The policy must run in simulation mode, and a second Priority Cleanup admin reviews the results and turns it on. Required approvers then approve disposal of the identified items, and only after all required approvals do the items skip the recycle bins and get deleted. Records and regulatory records cannot be targeted, and items already copied to an eDiscovery review set are not deleted by Priority cleanup.

This page covers roadmap item 561034, which lists GCC, GCC High and DoD, the Web platform and the General Availability phase. The roadmap status is In development with a target of November CY2026, and the record gives no preview date. The Learn page for permanent deletion names no cloud and says public preview rollout begins on August 24, 2026. Microsoft lists the feature under two other roadmap items: 557188 (Worldwide (Standard Multi-Tenant), Launched, April CY2026) and 558343 (Worldwide (Standard Multi-Tenant), In development, target November CY2026, preview August CY2026), which has its own briefing at [/features/microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep/](/features/microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep/).

## Why it matters

The roadmap description explains the trade-off: retention policies and labels keep deleted ODSP content in Recycle Bins for 93 days to prevent inadvertent data loss, and Microsoft describes hard delete as costly because a misconfigured policy could cause data loss. This option gives compliance teams a route to remove specific files for data spillage or changing legal requirements without waiting for those holds and recycle bins, so the people who hold the approver roles are now accountable for deletions that cannot be recovered from the Recycle Bins.

The roadmap description does not say that existing behaviour changes on arrival. Learn says permanent deletion is an additional option that an administrator explicitly selects in a policy, and that Priority cleanup itself is enabled by default at the tenant level. The wiki's view: the decision to make now is whether Priority cleanup should stay switched on in your tenant, and who is allowed to hold the Priority Cleanup Admin role.

## Risk assessment

**Data exposure**
- Items deleted this way skip the Recycle Bins, which the roadmap describes as the 93-day safety net for ODSP. The query is KeyQL run against the same search index as eDiscovery content search, so a loose query can identify more files than intended. Simulation, which is required for SharePoint and OneDrive, and approver review of each item are the checks.
- Permanent deletion can override retention settings and eDiscovery holds. Copies already in an eDiscovery review set are not deleted by Priority cleanup, so sensitive data can remain there until the case is deleted.

**Security & identity**
- The Priority Cleanup Admin role is added automatically to the Organization Management role group. Review who is in that group before the option reaches your tenant.
- Learn requires approval from at least one person other than the policy creator, an eDiscovery admin approval where items are under eDiscovery holds, and says the last person to edit a policy cannot also turn it on. Approvers must be individual users, not mail-enabled security groups.

**Autonomy & actions**
- Items are deleted only after the required approvals are complete. Once approvals are complete, deleting the policy does not necessarily stop deletion: Learn says items might still be deleted.
- If an approver does not agree to delete an item, they must assign an existing retention label to it.

**Change & support**
- Files identified by a Priority cleanup policy show to users as a retention label with the policy's name, and the policy name is visible to end users. Avoid names that disclose why files are targeted.
- The eDiscovery approver must hold specific roles before policy creation, or creation fails with an error.

## Cost and licensing

The Microsoft Purview service description says that, to use the Priority cleanup policy to apply labels that bypass existing retention or eDiscovery holds, these licences provide user rights: Microsoft 365 E5/A5/G5; Microsoft Purview Suite/EDU/GOV/FLW; Microsoft Defender + Purview Suite FLW; Microsoft 365 E5/A5/F5/G5 Information Protection and Governance; and Office 365 E5/A5/G5. That statement is about Priority cleanup policies generally. A licence statement specific to the permanent deletion option is not yet published.

Indirect costs are admin time for the two Priority Cleanup admins, approver time on the Pending cleanups page, and turning on auditing at least one day before the first policy runs. Learn presents Priority cleanup for SharePoint and OneDrive as a way to reclaim storage, for example from stale Teams meeting recordings and transcripts.

## Scope

The roadmap item lists GCC, GCC High and DoD on the Web platform. Learn describes Priority cleanup for OneDrive and SharePoint locations, with adaptive or static scopes, and the permanent deletion Learn page lists the Priority Cleanup Admin role, approver roles assigned before policy creation, and auditing enabled at least one day before the first policy as prerequisites.

Learn says you cannot create one cleanup policy covering Exchange, SharePoint and OneDrive together. Records and regulatory records cannot be targeted. The permanent deletion page asks administrators to confirm the option is available in their tenant and gives a public preview rollout start of August 24, 2026 without naming a cloud.

## Governance guidance

### Before rollout
- Check whether the Priority cleanup control is on in your tenant, and decide whether to leave it on or turn it off; the switch applies to Exchange as well as SharePoint and OneDrive.
- Review membership of the Organization Management role group, which receives the Priority Cleanup Admin role automatically, and add the role to other role groups only on purpose.
- Turn on auditing at least one day before the first policy, and confirm audit search works for the people who will monitor it.
- Assign approver roles before creating the policy: Priority Cleanup admins need Priority Cleanup Admin, Data Classification Content Viewer, Data Classification List Viewer and Retention Management; eDiscovery admins need Search And Purge, Hold, Review, Data Classification Content Viewer, Data Classification List Viewer and Disposition Management.
- Confirm the permanent deletion option appears in your tenant, as the Learn page asks.

### At rollout
- Create the policy, select the SharePoint or OneDrive locations, write the KeyQL query narrowly, and select **Delete data permanently** on the Choose what to do with the content page.
- Run simulation and have the second Priority Cleanup admin review the returned samples before turning the policy on.
- Limit policy edits to one admin, because the last person to edit a policy cannot also turn it on.
- Tell approvers which existing retention labels are suitable when an item should not be deleted.

### After rollout
- Copy the cleanup ID from the policy details and search the audit log with it as the keyword; check for the PriorityCleanupFileDeleted operation.
- Check whether copies of deleted files remain in eDiscovery review sets, which Priority cleanup does not delete.
- Review the policy list, and remember that deleting a policy after its approvals are complete may not stop deletion.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether priority cleanup policies can be created in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Priority Cleanup Admin role. Also applies to Exchange. Existing policies keep working but cannot be modified.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Priority cleanup settings › Configuration › control for priority cleanup <a href="https://learn.microsoft.com/purview/priority-cleanup-onedrive-sharepoint" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating a priority cleanup policy for SharePoint and OneDrive locations</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. The reference does not say whether this call selects permanent deletion.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Priority cleanup › + Create a priority cleanup <a href="https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy -Name &lt;policy name&gt; -PriorityCleanup</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a policy deletes content permanently, skipping the recycle bins</strong><br><small>Tenant</small><br><small class="controls__note">Static-scope route. Public preview rollout begins on August 24, 2026 per the Learn page. A second Priority Cleanup admin must turn the policy on.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Priority cleanup › + Create a priority cleanup › Choose the type of priority cleanup › Static › Policy for SharePoint/OneDrive › Choose what to do with the content › Delete data permanently <a href="https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Monitoring permanent deletion by cleanup ID in the audit log</strong><br><small>Tenant</small><br><small class="controls__note">Use the cleanup ID as the keyword and look for PriorityCleanupFileDeleted. Needs the Audit Logs or View-Only Audit Logs role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Roles decide most of the control: the Priority Cleanup Admin role creates and manages policies and enables or disables the feature, and the Priority Cleanup Viewer role gives visibility without changes. Approval is per item and sits with individual users.

Turning the tenant switch off stops new policies being created; existing policies continue to function, can be deleted and cannot be modified. The PowerShell reference describes -PriorityCleanup as creating a Priority cleanup policy and does not say how to select permanent deletion. New-RetentionCompliancePolicy runs in Security & Compliance PowerShell; Search-UnifiedAuditLog runs in Exchange Online PowerShell.

## Open questions

- When will the permanent deletion option reach GCC, GCC High and DoD tenants? The Learn page names no cloud, so watch roadmap item 561034 and the Priority cleanup Learn pages.
- Is there a scripted way to select permanent deletion? The New-RetentionCompliancePolicy reference documents only the -PriorityCleanup switch at the time of writing (November 2026).
- Does a licence statement apply specifically to permanent deletion? The service description covers Priority cleanup policies generally.
- How long after final approval does permanent deletion complete? The permanent deletion page gives no timing, while the standard workflow page says to allow up to seven days.

<!-- rationale
risk: Medium. Permanent deletion skips the Recycle Bins and can override retention settings and eDiscovery holds, but a policy needs the Priority Cleanup Admin role, a simulation run, a second admin and approver sign-off before items are deleted.
cost: Medium. Microsoft's service description lists Microsoft 365 E5/A5/G5, Microsoft Purview Suite and similar licences as providing user rights for Priority cleanup policies. Admin and approver time is the other cost.
impact: Low. Priority Cleanup admins and approvers work with it. End users see a retention label named after the policy on files it identifies.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: other roadmap items / record: Roadmap item 557188 describes hard deletion for OneDrive and SharePoint through Priority cleanup. | Found: Admins will be able to select hard delete configuration while setting up a priority cleanup policy for OneDrive and SharePoint content and skip recycle bins. | Fix: Add the two roadmap citations used in this paragraph to sources: https://www.microsoft.com/microsoft-365/roadmap?id=557188 and https://www.microsoft.com/microsoft-365/roadmap?id=558343.
- [supported, minor] controls[2].ui / admin-path: The static route reaches Delete data permanently through Choose the type of priority cleanup > Static > Policy for SharePoint/OneDrive > Choose what to do with the content. | Found: On the Choose what to do with the content page, select Delete data permanently. | Fix: The cited permanent-deletion page supplies the last steps; the already-cited priority-cleanup-onedrive-sharepoint page supplies the static route. Expand controls[2].ui.path to 'Solutions > Data Lifecycle Management > Priority cleanup > + Create a priority cleanup > Choose the type of priority cleanup > Static > Policy for SharePoint/OneDrive > locations > Tell us what you're looking for > Choose what to do with the content > Delete data permanently'. The omitted location selection and query-entry page are non-branching steps, not a wrong route. | Source: https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion
- [contradicted, minor] Governance guidance: Before rollout versus Governance controls table / consistency: The checklist names role-group membership, approver-role assignment and enabling auditing without corresponding controls-table rows. | Found: Review membership of the Organization Management role group ... Turn on auditing at least one day before the first policy ... Assign approver roles before creating the policy. The table covers the tenant switch, policy creation, permanent deletion and audit searching. | Fix: The Before rollout steps for Organization Management membership, approver-role assignment and enabling auditing have no corresponding table row. Keep them as prerequisite checks rather than claiming the table supplies their configuration routes; do not add control rows in this correction.
-->
