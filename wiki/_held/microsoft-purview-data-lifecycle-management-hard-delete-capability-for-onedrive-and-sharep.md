---
title: "Microsoft Purview: permanently delete OneDrive and SharePoint files with Priority cleanup (Worldwide)"
slug: "microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep"
roadmapId: 558343
topic: "governance"
products: ["Microsoft Purview"]
summary: "Priority cleanup in Purview Data Lifecycle Management gains a Delete data permanently option for OneDrive and SharePoint files, bypassing recycle bins and holds after approval. Worldwide item; admin opt-in, no action required."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "August CY2026"
risk: "low"
cost: "medium"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "The Microsoft Purview service description lists licences that give user rights to the Priority cleanup policy (including Microsoft 365 E5/A5/G5 and an Information Protection and Governance add-on). A price or licence rule specific to permanent deletion is not yet published."
audiences: ["compliance","m365-admin","security","service-owner"]
tags: ["purview","data-lifecycle-management","retention","ediscovery","onedrive","sharepoint","auditing","priority-cleanup"]
sources:
  - title: "Microsoft 365 Roadmap 558343"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558343"
    kind: "roadmap"
  - title: "Permanently delete files with Microsoft Purview Priority Cleanup"
    url: "https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion"
    kind: "learn"
  - title: "Override holds to clean up files for Copilot and reclaim storage"
    url: "https://learn.microsoft.com/purview/priority-cleanup-onedrive-sharepoint"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Security A5 addon plans"
    url: "https://learn.microsoft.com/microsoft-365/education/guide/4-advanced/security/advanced-security-compliance-a5-addons"
    kind: "learn"
  - title: "New-ComplianceTag"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-compliancetag"
    kind: "learn"
  - title: "Set-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-retentioncompliancepolicy"
    kind: "learn"
  - title: "New-RetentionComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
  - title: "MC1261587: Microsoft Purview | Data Lifecycle Management - Hard delete OneDrive and SharePoint files with priority cleanup workflow"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1261587"
    kind: "message-center"
videos: []
related: ["microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedr-us-government","purview-retention-last-accessed-sharepoint-onedrive","microsoft-purview-ediscovery-in-product-diagnostics-to-troubleshoot-common-challenges","microsoft-purview-adaptive-scope-evaluation-control-with-recipient-and-site-owner-lifecycl"]
controls:
  - governs: "Creating a Priority cleanup policy with the permanent deletion option"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Priority cleanup > + Create a priority cleanup > Choose the type of priority cleanup > Static > Policy for SharePoint/OneDrive > Choose what to do with the content > Delete data permanently"
      docs: "https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion"
    api: null
    note: "Needs the Priority Cleanup Admin role. The cmdlet reference lists the PriorityCleanup parameter set but does not say it creates a permanent-deletion policy."
  - governs: "Whether Priority cleanup policies can be created in the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Priority cleanup settings > Configuration > control for priority cleanup"
      docs: "https://learn.microsoft.com/purview/priority-cleanup-onedrive-sharepoint"
    api: null
    note: "Turning the control off also applies to Exchange. Existing policies keep running and cannot be modified. Microsoft Learn documents no PowerShell or API for this switch at the time of writing (November 2026)."
  - governs: "Approval of items before permanent deletion"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Lifecycle Management > Priority cleanup > Pending cleanups > cleanup > Approve disposal"
      docs: "https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion"
    api: null
    note: "Each approver sees only items assigned to them. Microsoft Learn documents no PowerShell or API for approving items at the time of writing (November 2026)."
  - governs: "Monitoring permanent deletions by cleanup ID"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Lifecycle Management > Priority cleanup > policy details"
      docs: "https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <start> -EndDate <end> -Operations PriorityCleanupFileDeleted -FreeText <cleanup ID>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "Copy the cleanup ID from the policy details, search the audit log with it, and check for the PriorityCleanupFileDeleted operation. Auditing must be enabled at least one day beforehand."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-24"
roadmapModified: "2026-11-24T00:13:11"
changes:
  - date: "2026-11-17"
    note: "New briefing: Priority cleanup gains a permanent deletion option for OneDrive and SharePoint, with approval, roles and audit controls."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 75 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: removed the unsupported New-ComplianceTag call from the policy-creation row, added -Operations and -FreeText to the audit search call, and corrected two attributions."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 86 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 90 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected the policy-creation, tenant-switch and approval admin paths, lowered the risk rating to low, and removed three checklist items that have no controls-table row."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 90 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Dates updated: target moved to December CY2026 and MC1261587 (updated 23 November 2026) now gives early December 2026 for preview completion and GA start; added sibling roadmap items and the A5 add-on source."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 92 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-24"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 92
  confirmed: 91
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "536635155eedfd87bd787b2af35b0d61"
---

## What's changing

Microsoft Purview Data Lifecycle Management is adding a **Delete data permanently** option to Priority cleanup policies for OneDrive and SharePoint. Priority cleanup already lets administrators override retention settings and eDiscovery holds to delete targeted files; the standard workflow documented on Learn moves identified items to the second-stage Recycle Bin. The new option bypasses the SharePoint and OneDrive recycle bins, and after deletion the content is no longer discoverable in SharePoint search, Microsoft 365 Copilot or eDiscovery.

An administrator creates the policy in the Microsoft Purview portal, chooses an adaptive or static scope, writes a query for the targeted files, and chooses whether to delete matched items as soon as possible or after a set time. Required approvers are assigned, the policy runs in simulation mode, and a second Priority Cleanup admin reviews the samples and turns it on. Approvers then approve disposal under Pending cleanups. Learn lists two limits: items already copied to an eDiscovery review set are not deleted by Priority cleanup, and priority cleanup cannot be used on items marked as a record or regulatory record.

The roadmap record gives status In development, a preview date of August CY2026 and a target of December CY2026, for Worldwide (Standard Multi-Tenant) on the web. Microsoft's notice MC1261587 (updated 23 November 2026) says public preview rollout begins mid-August 2026 (previously mid-July) and is expected to complete by early December 2026 (previously end of November), and that General Availability rollout begins early December 2026 (previously end of November) and is expected to complete by mid-January 2027 (previously early January). The Learn page for the option says public preview rollout begins on August 24, 2026. The notice sets no act-by date. These are Microsoft's targets, not commitments.

Microsoft lists the feature under three roadmap ids. This page covers 558343. Item 557188 is also Worldwide (Standard Multi-Tenant) on the web and is listed as Launched with a target of April CY2026. Item 561034 covers GCC, GCC High and DoD, is In development and has a target of January CY2027; it has its own briefing at /features/microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedr-us-government/.

## Why it matters

This adds a deletion path that can override the controls a compliance team normally relies on: retention policies, eDiscovery holds and the recycle bin safety net. The roadmap description says retention policies and labels keep deleted SharePoint and OneDrive content in recycle bins for 93 days; this option skips that stage. Microsoft's notice positions it for reducing data exposure from fast-growing Copilot-related content such as Teams transcripts. The roadmap description also identifies data spillage as a use case.

If nobody acts, Microsoft's notice says the capability is not enabled by default and user workflows do not change. The tenant-level Priority cleanup control is on by default, though, so the decision for a service owner is who may create and approve policies, and whether to leave the feature available at all.

## Risk assessment

**Data exposure**
- Deleted files bypass the recycle bins and are no longer discoverable in SharePoint search, Microsoft 365 Copilot or eDiscovery, so a query that matches too broadly cannot be undone from the recycle bin. Simulation mode, which must be run at least once for SharePoint and OneDrive, is the check on the query.
- Files already copied to an eDiscovery review set are not deleted by Priority cleanup. Learn says this data is deleted automatically when an eDiscovery admin deletes the whole case.

**Security & identity**
- Priority cleanup can override existing holds. Learn's overview says Priority cleanup can override Preservation Lock for delete-only retention settings, but its Limitations section says these items are not in scope outside simulation mode. A compromised or careless Priority Cleanup admin is therefore a data-destruction risk; Learn describes multiple approvals, specific roles and auditing as the safeguards.
- The Priority Cleanup Admin role is added automatically to the Organization Management role group, so existing members of that group can reach the feature without a new assignment.

**Autonomy & actions**
- Learn says the last person to edit a policy cannot also turn it on, and that each item needs at least one other person to approve deletion. Where items are under eDiscovery holds, eDiscovery admin approval is also required.
- Learn recommends leaving a continuous policy running for Teams recordings and transcripts, which means approvals recur rather than being a one-off task; plan approver capacity.

**Change & support**
- Learn says that if an eDiscovery approver lacks the required roles in advance, policy creation fails with an error. Expect support tickets from approvers who cannot see items under Pending cleanups.
- Existing policies keep running if the tenant control is turned off, and cannot then be modified.

## Cost and licensing

The Microsoft Purview service description lists the licences that give user rights to use the Priority cleanup policy to apply labels that bypass existing retention or eDiscovery holds: Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5/G5 Information Protection and Governance, and Office 365 E5/A5/G5. That statement is about Priority cleanup generally; a licence rule specific to the permanent deletion option is not yet published, and the permanent deletion Learn page lists roles, approvers, auditing and simulation as prerequisites and names no licence.

No meter or per-deletion charge is documented for this feature at the time of writing (November 2026). Indirect costs are admin and approver time, and enabling auditing at least one day before the first policy.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform; it lists no US Government clouds. Learn describes the option for SharePoint and OneDrive locations. Priority cleanup policies cannot cover Exchange, SharePoint and OneDrive in the same policy.

**Roles.** Priority Cleanup Admin creates and manages the policy. Approvers must be individual users; mail-enabled security groups are not currently supported. Learn lists extra roles for approvers, including Search And Purge, Hold, Review and Disposition Management for eDiscovery admins.

**Prerequisites.** Auditing enabled at least one day before the first policy, simulation run before the policy is turned on, and confirmation that the option is available in your tenant.

## Governance guidance

### Before rollout
- Decide whether to leave Priority cleanup available or turn it off on the Priority cleanup settings page; the switch also covers Exchange.
- Name individual approvers before creating a policy.

### At rollout
- Confirm in the Purview portal that the Delete data permanently option appears in your tenant before planning around it.
- Create the policy with a narrow query, run simulation, and have a second Priority Cleanup admin review the samples and turn the policy on.
- Agree with legal and records owners which content types are in scope, since records and regulatory records are excluded.

### After rollout
- Copy the cleanup ID and search the audit log for PriorityCleanupFileDeleted to confirm what was deleted.
- Review Pending cleanups regularly so approvals do not stall.
- Update internal governance and compliance documentation to reflect the new deletion capability, as Microsoft's notice MC1261587 asks.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating a Priority cleanup policy with the permanent deletion option</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Priority Cleanup Admin role. The cmdlet reference lists the PriorityCleanup parameter set but does not say it creates a permanent-deletion policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Priority cleanup › + Create a priority cleanup › Choose the type of priority cleanup › Static › Policy for SharePoint/OneDrive › Choose what to do with the content › Delete data permanently <a href="https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Priority cleanup policies can be created in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Turning the control off also applies to Exchange. Existing policies keep running and cannot be modified. Microsoft Learn documents no PowerShell or API for this switch at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Priority cleanup settings › Configuration › control for priority cleanup <a href="https://learn.microsoft.com/purview/priority-cleanup-onedrive-sharepoint" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Approval of items before permanent deletion</strong><br><small>Tenant</small><br><small class="controls__note">Each approver sees only items assigned to them. Microsoft Learn documents no PowerShell or API for approving items at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Lifecycle Management › Priority cleanup › Pending cleanups › cleanup › Approve disposal <a href="https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Monitoring permanent deletions by cleanup ID</strong><br><small>Tenant</small><br><small class="controls__note">Copy the cleanup ID from the policy details, search the audit log with it, and check for the PriorityCleanupFileDeleted operation. Auditing must be enabled at least one day beforehand.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Lifecycle Management › Priority cleanup › policy details <a href="https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;start&gt; -EndDate &lt;end&gt; -Operations PriorityCleanupFileDeleted -FreeText &lt;cleanup ID&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Priority cleanup is managed in the Microsoft Purview portal by users with the Priority Cleanup Admin role; the Priority Cleanup Viewer role gives visibility only. The tenant switch affects creating new policies for Exchange as well as SharePoint and OneDrive, and policies that already exist continue to run but cannot be modified.

Learn documents no separate tenant switch for the permanent deletion option itself at the time of writing (November 2026). The Security & Compliance PowerShell reference lists a PriorityCleanup parameter on New-ComplianceTag but does not describe it as creating a permanent-deletion policy; confirm before scripting.

## Open questions

- Does the permanent deletion option carry a licence or price different from the Priority cleanup licences listed in the Purview service description? Watch the service description and the Learn page.
- The roadmap record still says In development, while Learn and MC1261587 describe preview rollout from August 2026. When will General Availability reach tenants, given the notice's early December 2026 start and the roadmap's December CY2026 target?
- Can the Priority cleanup tenant switch turn off permanent deletion alone, while leaving the standard recycle-bin workflow available?
- Does the PriorityCleanup parameter on New-ComplianceTag, Set-RetentionCompliancePolicy and New-RetentionComplianceRule support creating permanent-deletion policies?
- Does Microsoft document any recovery route for files after Priority cleanup permanently deletes them?

<!-- rationale
risk: Low. Nothing changes until an admin creates a policy and a second admin turns it on; configured policies can permanently delete files despite retention settings and eDiscovery holds.
cost: Medium. Learn lists licences that give user rights to the Priority cleanup policy, such as Microsoft 365 E5/A5/G5 and Microsoft Purview Suite; no separate price or meter is documented for the permanent deletion option.
impact: Low. Microsoft's notice says user workflows do not change unless an admin configures and applies a priority cleanup policy, so the people who notice are Purview administrators and approvers.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Open questions: final bullet / absence: Whether Microsoft documents any recovery route after Priority cleanup permanent deletion remains an open question. | Found: In an exceptional scenario, customers can submit a support ticket to request recovery. Recovery is subject to Microsoft review and approval and is attempted only on a best-effort basis. Recovery isn't guaranteed. | Fix: Remove the final Open questions bullet: the cited Learn page already answers it. If retaining a replacement statement, use: 'Microsoft documents an exceptional support-ticket recovery request, subject to Microsoft review and approval, attempted only on a best-effort basis and not guaranteed; there is no customer-accessible recovery option.' Cite https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion#understand-permanent-deletion-and-recovery-limitations. | Source: https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: first row / admin-path: The policy-creation path follows Solutions, Data Lifecycle Management, Priority cleanup, creation, Static SharePoint/OneDrive policy and Delete data permanently. | Found: On the Choose what to do with the content page, select Delete data permanently. | Fix: The missing labels flagged by the pre-check are supported by the already-cited https://learn.microsoft.com/purview/priority-cleanup-onedrive-sharepoint. Include its query-page heading in controls[0].ui and the rendered row: 'Solutions > Data Lifecycle Management > Priority cleanup > + Create a priority cleanup > Choose the type of priority cleanup > Static > Policy for SharePoint/OneDrive > Tell us what you're looking for > Choose what to do with the content > Delete data permanently'. | Source: https://learn.microsoft.com/purview/priority-cleanup-permanent-deletion
-->
