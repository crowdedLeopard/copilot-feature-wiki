---
title: "Microsoft Purview: delete inactive OneDrives and mailboxes for departed users (GCC, GCC High and DoD)"
slug: "microsoft-purview-data-lifecycle-management-ensure-regulatory-compliance-by-deleting-inact"
roadmapId: 569721
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a Data Lifecycle Management capability to delete the content and containers of departed users at scale, for GCC, GCC High and DoD. Microsoft Learn does not describe it yet, so there is nothing to configure."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "November CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "The Microsoft Purview service description lists the licences that provide user rights for Data Lifecycle Management retention policies and a separate list for priority cleanup. Nothing specific to this feature is published."
audiences: ["compliance","m365-admin","service-owner"]
tags: ["purview","data-lifecycle-management","onedrive","exchange","retention","priority-cleanup","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: item 569721"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569721"
    kind: "roadmap"
  - title: "Override holds to clean up files for Copilot and reclaim storage"
    url: "https://learn.microsoft.com/purview/priority-cleanup-onedrive-sharepoint"
    kind: "learn"
  - title: "Expedite the permanent deletion of sensitive information from mailboxes"
    url: "https://learn.microsoft.com/purview/priority-cleanup-exchange"
    kind: "learn"
  - title: "Delete an inactive mailbox"
    url: "https://learn.microsoft.com/purview/delete-an-inactive-mailbox"
    kind: "learn"
  - title: "Learn about retention for SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/retention-policies-sharepoint"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "New-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
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
    note: "Applies to Exchange as well as SharePoint and OneDrive. Needs the Priority Cleanup Admin role. Not documented for this feature. Exchange priority cleanup is rolling out in preview and is subject to change."
  - governs: "Creating a priority cleanup policy that overrides holds on OneDrive files"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Priority cleanup > + Create a priority cleanup"
      docs: "https://learn.microsoft.com/purview/priority-cleanup-onedrive-sharepoint"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy -Name <policy name> -PriorityCleanup"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    note: "Security & Compliance PowerShell. Learn's priority cleanup page lists SharePoint and OneDrive policies as needing a second admin and a simulation run first."
  - governs: "Deleting an inactive mailbox by removing its retention policy hold"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-Mailbox <identity of inactive mailbox> -ExcludeFromAllOrgHolds"
      docs: "https://learn.microsoft.com/purview/delete-an-inactive-mailbox"
    note: "Exchange Online PowerShell. For policies on the entire location that use older retention locations; other hold types use other commands on the page. Not possible if the policy has Preservation Lock."
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
    note: "Requires the Audit Logs role in Exchange Online. Learn says priority cleanup needs auditing enabled at least one day before the first policy runs."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-01T23:00:07"
changes:
  - date: "2026-11-21"
    note: "First briefing for the US Government (GCC, GCC High and DoD) roadmap item; the Worldwide item 566527 is listed separately."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 66 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Correction: licensing model set to unknown; tenant switch behaviour and the scope sentence corrected to match Learn and the roadmap; minor wording fixes."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 70 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 70
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "db3d56f7599798cde56d6130dad838b0"
---

## What's changing

The roadmap item states that Microsoft Purview Data Lifecycle Management will let administrators "delete both content and containers for departed users at scale", keeping the tenant compliant "without any manual effort". The title names inactive OneDrives and mailboxes. This item covers GCC, GCC High and DoD. Microsoft lists the same feature under roadmap id 566527 for Worldwide (Standard Multi-Tenant), with the same status and target dates.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The roadmap text gives no mechanism, default state, licence or admin path, and does not say whether the feature builds on priority cleanup or on inactive mailbox deletion, both of which Learn documents today (see Governance controls).

The status is In development. The roadmap targets a preview in November CY2026 and general availability in December CY2026, and lists the release phases as General Availability and Preview. These are Microsoft's targets, not shipped behaviour.

## Why it matters

Departed users leave OneDrive accounts and mailboxes that retention policies and holds can keep alive. Learn documents that a user's OneDrive site can't be deleted while items in its Preservation Hold library have an unexpired retention period, and that an inactive mailbox is deleted by removing all holds on it. A capability that clears both at scale would change offboarding for compliance teams, and deletion is where mistakes are expensive.

If nobody acts, Microsoft has not stated what happens on arrival, and no source says existing behaviour changes. Treat this as a capability to evaluate when the preview documentation appears, not as a change that lands on you.

## Risk assessment

**Data exposure**
- Deleting a departed user's OneDrive and mailbox removes data that may be under retention or eDiscovery hold. For priority cleanup, Learn says records and regulatory records can't be deleted, and that data already copied to an eDiscovery review set is out of its reach. Confirm whether this feature has the same exceptions.

**Security & identity**
- Priority cleanup, the closest documented mechanism, needs the Priority Cleanup Admin role and a second person's approval of every deletion. Confirm which roles and approvals this feature uses before delegating it.

**Autonomy & actions**
- The roadmap's "at scale" and "without any manual effort" wording points to automated deletion. Confirm what triggers it and whether a person approves a run. Priority cleanup policies for OneDrive must run in simulation mode first.

**Change & support**
- Today, once the last hold is removed from an inactive mailbox it is permanently deleted after the 30-day soft-deleted retention period and can't be recovered. Expect requests to restore a leaver's data after deletion, and agree a cut-off with legal and HR first.

## Cost and licensing

No licence, meter or price specific to this feature is published at the time of writing (November 2026). The Microsoft Purview service description lists the licences that provide user rights for Data Lifecycle Management retention policies, which include Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium, and a separate list for priority cleanup that begins with Microsoft 365 E5/A5/G5. Which list, if either, covers this feature is not yet published.

The indirect cost is admin and approver time, plus legal and HR review of what may be deleted.

## Scope

The roadmap item lists GCC, GCC High and DoD, on the Web platform. The Worldwide entry is roadmap id 566527. The targets are a November CY2026 preview and a December CY2026 general availability.

The roadmap identifies inactive OneDrives and mailboxes for departing employees, but does not state detailed eligibility criteria, roles, prerequisites or exclusions. For priority cleanup on SharePoint and OneDrive, Learn requires the Priority Cleanup Admin role and enabled auditing at least one day before the first policy runs.

## Governance guidance

### Before rollout
- List leavers whose OneDrive accounts or mailboxes are blocked from deletion by retention policies or holds, using the blockers Learn documents for OneDrive and inactive mailboxes.
- Check that auditing is on (Audit row in the controls table) so deletions can be traced.
- Identify any mailbox retention policy with Preservation Lock, because Learn says you can't remove an inactive mailbox from such a policy.
- Agree with legal and HR which departed users' data may be deleted, and by whom.

### At rollout
- Read the feature's Learn page when it appears, before enabling anything, and confirm its roles, approvals and default.
- Pilot on a small set of leavers; use simulation where the feature offers it.
- Decide whether to prevent creation of new priority cleanup policies at tenant level if your regulations require it; existing policies continue to function when this switch is off.

### After rollout
- Search the audit log for deletions, including the PriorityCleanupFileRecycled operation where priority cleanup is used.
- Reconcile deleted accounts against the HR leavers list.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether priority cleanup policies can be created in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Applies to Exchange as well as SharePoint and OneDrive. Needs the Priority Cleanup Admin role. Not documented for this feature. Exchange priority cleanup is rolling out in preview and is subject to change.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Priority cleanup settings › Configuration › control for priority cleanup <a href="https://learn.microsoft.com/purview/priority-cleanup-onedrive-sharepoint" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating a priority cleanup policy that overrides holds on OneDrive files</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Learn's priority cleanup page lists SharePoint and OneDrive policies as needing a second admin and a simulation run first.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Priority cleanup › + Create a priority cleanup <a href="https://learn.microsoft.com/purview/priority-cleanup-onedrive-sharepoint" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy -Name &lt;policy name&gt; -PriorityCleanup</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Deleting an inactive mailbox by removing its retention policy hold</strong><br><small>User</small><br><small class="controls__note">Exchange Online PowerShell. For policies on the entire location that use older retention locations; other hold types use other commands on the page. Not possible if the policy has Preservation Lock.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Mailbox &lt;identity of inactive mailbox&gt; -ExcludeFromAllOrgHolds</code> <a href="https://learn.microsoft.com/purview/delete-an-inactive-mailbox" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the unified audit log records activity for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Audit Logs role in Exchange Online. Learn says priority cleanup needs auditing enabled at least one day before the first policy runs.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

These rows are today's controls over the nearest documented capabilities, not documented controls for this feature.

Turning off the tenant priority cleanup control prevents creation of new policies for Exchange, SharePoint and OneDrive; existing policies continue to function and can be deleted, but cannot be modified. Learn says the feature is enabled by default at the tenant level. For the static-scope retention-policy exclusions shown here, use the PowerShell command documented for the policy's retention location. Turning auditing on or off needs the Audit Logs role in Exchange Online.

## Open questions

- Which mechanism does the feature use: a new Data Lifecycle Management policy, an extension of priority cleanup, or inactive mailbox and OneDrive deletion, and does it override retention policies, eDiscovery holds and Preservation Lock? Watch Microsoft Learn's Data Lifecycle Management pages.
- What is the default state, and how does preview in November CY2026 reach tenants? Watch Message center.
- Which roles and approvals does it need, and what does it write to the audit log?
- Which licence covers it, and does it follow the retention policy list or the priority cleanup list?

<!-- rationale
risk: Medium. The stated purpose is deleting departed users' content and containers at scale, which is hard to undo; the default state, approvals and safeguards for this feature are not yet published.
cost: Low. The only cost the sources show is admin time; no licence, meter or price specific to this feature is published, and Data Lifecycle Management licensing sits on the Microsoft Purview service description page.
impact: Low. Compliance and Microsoft 365 administrators would use it, and it targets the data of users who have already left; nothing states that end users see a change.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope; front matter: changes / record: The same planned feature is listed separately under roadmap item 566527. | Found: "id": 566527; "description": "Enables admins to delete both content and containers for departed users at scale thereby keeping your tenant compliant without any manual effort." | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=566527 to sources with kind roadmap; it supports the separate Worldwide entry and its status and dates.
-->
