---
title: "Microsoft Purview: Priority cleanup to permanently delete Exchange mailbox items under holds (Worldwide)"
slug: "microsoft-purview-compliance-portal-data-lifecycle-management-introduction-of-secure-workf"
roadmapId: 392838
topic: "governance"
products: ["Microsoft Purview"]
summary: "Priority cleanup lets approved admins permanently delete Exchange mailbox items despite retention policies and eDiscovery holds. Worldwide item; Learn documents it in preview. Decide who holds the role and whether to switch it off."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "February CY2025"
risk: "medium"
cost: "medium"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "The Microsoft Purview service description lists Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5/G5 Information Protection and Governance and Office 365 E5/A5/G5 as licences that provide user rights for Priority cleanup."
audiences: ["compliance","security","m365-admin","service-owner"]
tags: ["purview","data-lifecycle-management","retention","priority-cleanup","exchange","ediscovery","auditing"]
sources:
  - title: "Expedite the permanent deletion of sensitive information from mailboxes"
    url: "https://learn.microsoft.com/purview/priority-cleanup-exchange"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "docs"
  - title: "New-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 392838"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=392838"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap item 473493"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=473493"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep","ediscovery","auditing"]
controls:
  - governs: "Whether priority cleanup policies can be created in the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Priority cleanup settings > Configuration > control for priority cleanup"
      docs: "https://learn.microsoft.com/purview/priority-cleanup-exchange"
    api: null
    note: "Requires the Priority Cleanup Admin role. Turning it off also affects SharePoint and OneDrive; existing policies keep working."
  - governs: "Creating a priority cleanup policy for Exchange mailboxes"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Priority cleanup > + Create a priority cleanup"
      docs: "https://learn.microsoft.com/purview/priority-cleanup-exchange"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy -PriorityCleanup"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps"
    note: "Security & Compliance PowerShell. Needs the Priority Cleanup Admin role and approvers with the roles Learn lists."
  - governs: "Searching the audit trail for a priority cleanup"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <date> -EndDate <date> -Operations PriorityCleanupDelete"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "Exchange Online PowerShell. Learn names PriorityCleanupTagApplied and PriorityCleanupDelete as the mailbox operations; the portal has no friendly names for them."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-17T18:30:53"
changes:
  - date: "2026-11-20"
    note: "New briefing: Priority cleanup for Exchange mailboxes under holds, with its roles, approvers, tenant switch, licences and audit operations."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 88 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected the licence statement to say any user benefiting from the service needs a licence, added the control label to the tenant switch path, and moved role, adaptive scope and auditing steps into prerequisites."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 88 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 95 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 95
  confirmed: 93
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "7aba76a75c3cd9c6023b77ee04e21b13"
---

## What's changing

Priority cleanup is a Microsoft Purview Data Lifecycle Management feature that permanently deletes sensitive items from Exchange mailboxes even when a retention setting or an eDiscovery hold would otherwise keep them. The roadmap item describes the first release as enabling admins to create a recurring exception to delete items under a broader retention policy and/or legal hold on the Exchange workload, with a separate security role, multiple approvers and a complete audit trail.

Microsoft Learn already documents the feature, and marks it as rolling out in preview and subject to change. An admin creates a priority cleanup policy (adaptive or static scope, a KeyQL query, delete as soon as possible or after a retention period) and names approvers. Learn says items still go through the same deletion process with the same timings, but there is no need to wait for the retention period to expire or the hold to be released. Learn also says that approved items cannot be restored by users, by admins or by Microsoft, and that the process can override Preservation Lock.

Learn lists exceptions: items marked as a record or regulatory record cannot be handled by priority cleanup, and data already copied to an eDiscovery review set is not deleted by it. A mailbox must hold at least 10 MB of data to support priority cleanup, and the same feature also covers SharePoint and OneDrive, which have different rules (see the related briefing linked below).

The roadmap record for item 392838 gives the status In development, a target of January CY2027, a preview date of February CY2025, release phases General Availability and Preview, and the Worldwide (Standard Multi-Tenant) cloud on the Web platform. Microsoft lists the feature under a second roadmap item, [473493](https://www.microsoft.com/microsoft-365/roadmap?id=473493), whose record covers GCC, GCC High and DoD; this page covers 392838 only.

## Why it matters

This feature gives a small group of administrators a route to irreversible deletion that sits outside the retention and hold rules a compliance team normally relies on. Learn says the capability is enabled by default at the tenant level and that the Priority Cleanup Admin role is added automatically to the Organization Management role group, so a tenant should decide who is expected to hold the role before anyone creates a policy.

What Learn describes as safeguards (separate role, named approvers, audit events) only work if the right people are in those roles. Regulated organisations that use Preservation Lock get a specific recommendation from Microsoft: consider turning the capability off at tenant level. If nobody acts, the ability to create policies stays on; no mailbox content is deleted until a Priority Cleanup Admin creates a policy and the approvers approve it.

## Risk assessment

**Data exposure**

- Approved deletions are permanent. Learn says deleted items cannot be restored by users, admins or Microsoft, and that a policy can override eDiscovery holds and Preservation Lock, so a wrong KeyQL query is a data-loss risk. Simulation mode is optional for Exchange (recommended, not required), so check samples before turning a policy on.
- eDiscovery review sets keep their own copy: Learn says data already copied to a review set cannot be deleted by priority cleanup and is deleted only when an eDiscovery admin deletes the case.

**Security & identity**

- Learn says the first-stage approver should be a different person from the policy creator, but that this is not enforced. Check who holds the Priority Cleanup Admin role before relying on the two-person rule.
- Approvers must be individual users; mail-enabled security groups are not currently supported. Approvers need specific roles assigned before the policy is created, otherwise policy creation fails with an error.

**Autonomy & actions**

- Once the policy is on and all required approvals are given, items are deleted without further action; Learn says to allow up to seven days. An approver who disagrees must relabel the item with an existing retention label, so approvers need to know which labels suit that purpose.
- Deleting a policy does not stop deletion once its approval process is complete: Learn says items might still be permanently deleted.

**Change & support**

- Items identified by a policy show a Retention message bar in Outlook with the policy name; the policy name is visible to end users, so avoid revealing detail in it. Learn says that after the final approval the item silently disappears from Outlook.
- The two audit operations for mailboxes, PriorityCleanupTagApplied and PriorityCleanupDelete, have no friendly names in the Microsoft Purview portal at the time of writing, so help-desk and compliance staff need the operation names to search for them.

## Cost and licensing

The Microsoft Purview service description says that, to use the Priority cleanup policy to apply labels that bypass existing retention or eDiscovery holds, these licences provide user rights: Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5/G5 Information Protection and Governance, and Office 365 E5/A5/G5. Microsoft 365 E3 is not on that list.

The Learn page for the Exchange feature lists permissions and approvers as its prerequisites, and names no licence or meter. Any user benefiting from the service requires a licence, including users assigned a Purview role and the users associated with Exchange mailboxes where the feature is used. A price for any add-on is not yet published on those pages.

Indirect costs are admin and approver time: each policy needs approvers with several roles assigned beforehand, and Learn says approvals are reviewed on the Pending cleanups page.

## Scope

Roadmap record: Microsoft Purview, Worldwide (Standard Multi-Tenant) cloud, Web platform, release phases General Availability and Preview, status In development, target January CY2027. Learn describes the feature as rolling out in preview, so the roadmap status and Learn's preview note differ in wording and both are reported here.

Who can use it: Learn says users must have the Priority Cleanup Admin role to create and manage policies, enable or disable the feature and approve in the first stage. The Priority Cleanup Viewer role shows policies and settings without changes. Content Explorer List Viewer and Content Explorer Content Viewer are needed to view item content in simulation and approval stages.

This page covers Exchange mailboxes. Group mailboxes are supported through adaptive scopes only, and a policy cannot cover Exchange and SharePoint/OneDrive locations together. Turning priority cleanup off at tenant level also turns it off for SharePoint and OneDrive. Items marked as a record or regulatory record are out of scope.

Prerequisites: Learn says the Priority Cleanup Admin role is added automatically to the Organization Management role group, so role-group membership decides who can create policies. Approvers are individual users who need the roles Learn lists for each approval stage assigned before the policy is created. If the policy will be adaptive, the adaptive scopes must exist before the policy is created. Auditing must be turned on at least one day before the first policy, as Learn requires; it is described in /concepts/auditing/.

## Governance guidance

### Before rollout

- Decide whether to turn off Priority cleanup at tenant level, especially if you use Preservation Lock, using the Priority cleanup settings page (first control row).

### At rollout

- Create the first policy in simulation mode and review the sample matches, even though Exchange does not require simulation.
- Assign a priority cleanup admin approver who is a different person from the creator, because Learn says this is not enforced.
- Brief approvers on the Pending cleanups page, on the Relabel option and on which existing retention labels they should choose when they do not agree to deletion.

### After rollout

- Search the audit log for the policy's cleanup ID and for the PriorityCleanupTagApplied and PriorityCleanupDelete operations.
- Review each policy's status on the Priority cleanup page and delete policies that are no longer needed, remembering that Learn says items might still be deleted once approval is complete.
- Check the Microsoft Learn page and the roadmap item for the move out of preview.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether priority cleanup policies can be created in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Priority Cleanup Admin role. Turning it off also affects SharePoint and OneDrive; existing policies keep working.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Priority cleanup settings › Configuration › control for priority cleanup <a href="https://learn.microsoft.com/purview/priority-cleanup-exchange" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating a priority cleanup policy for Exchange mailboxes</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Needs the Priority Cleanup Admin role and approvers with the roles Learn lists.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Priority cleanup › + Create a priority cleanup <a href="https://learn.microsoft.com/purview/priority-cleanup-exchange" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy -PriorityCleanup</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Searching the audit trail for a priority cleanup</strong><br><small>Tenant</small><br><small class="controls__note">Exchange Online PowerShell. Learn names PriorityCleanupTagApplied and PriorityCleanupDelete as the mailbox operations; the portal has no friendly names for them.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;date&gt; -EndDate &lt;date&gt; -Operations PriorityCleanupDelete</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn says turning the tenant control off blocks new policies only: existing policies continue to function and can be deleted but cannot be modified. The switch covers SharePoint and OneDrive as well as Exchange.

The Priority Cleanup Admin and Priority Cleanup Viewer roles, and the approver role requirements, are set through Microsoft Purview role groups; Learn links to the Permissions in the Microsoft Purview portal page for how to add users to roles or create role groups. Auditing is a prerequisite and is described in /concepts/auditing/. eDiscovery holds and approvals interact with this feature through /concepts/ediscovery/.

## Open questions

- Will the roadmap's recurring-exception wording change how policies behave compared with the rare use Learn describes for Exchange? Watch the Learn page and roadmap item 392838.
- Learn states that three approvals are always required, yet its approval-process section describes the retention and eDiscovery stages as applying only when items have those settings. Which applies?
- Is an add-on price published for the licences that provide user rights for Priority cleanup?
- Is there an automation route for the tenant-level on/off switch? Microsoft Learn documents none at the time of writing (November 2026).
- When will the feature leave preview, and does the roadmap target of January CY2027 apply to this item's General Availability phase?

<!-- rationale
risk: Medium. Approved deletions are irreversible and can override eDiscovery holds and Preservation Lock, but Microsoft Learn documents a dedicated role, multiple approvers and audit events as safeguards.
cost: Medium. The Microsoft Purview service description lists the licences that provide user rights for Priority cleanup (Microsoft 365 E5/A5/G5 and Purview suites, among others); Microsoft 365 E3 is not on that list. No separate meter is listed.
impact: Low. Mainly Priority Cleanup Admins and approvers notice it; users of a mailbox only see a Retention message bar in Outlook on items a policy has identified.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Review-set data is deleted only when its eDiscovery case is deleted. | Found: You can't delete items from a review set, and you can't delete review sets from a case. To delete a review set and its data, you must delete the eDiscovery case that contains the review set. | Fix: Add https://learn.microsoft.com/purview/edisc-review-set-manage to sources for the statement that review-set data can be deleted only by deleting its case. | Source: https://learn.microsoft.com/purview/edisc-review-set-manage
- [contradicted, minor] front matter: action; Why it matters / consistency: The prepare action fits the standard for this optional, medium-risk capability. | Found: action: "prepare"; risk: "medium". Body: "no mailbox content is deleted until a Priority Cleanup Admin creates a policy and the approvers approve it." | Fix: Set action to "review": the standard assigns review to optional capabilities that change nothing until an administrator chooses them, and the high-risk new-control exception does not apply to this medium-risk page.
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist's instruction concerning Relabel has a corresponding controls-table row. | Found: Checklist: "Brief approvers on the Pending cleanups page, on the Relabel option and on which existing retention labels they should choose". Table rows cover the tenant switch, policy creation and audit search, not Relabel. | Fix: Replace the At rollout bullet beginning "Brief approvers" with "Brief approvers on the Pending cleanups page." Keep the supported factual description of relabeling in Risk assessment.
-->
