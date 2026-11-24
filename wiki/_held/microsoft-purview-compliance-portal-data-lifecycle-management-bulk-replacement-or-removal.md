---
title: "Microsoft Purview: bulk replacement or removal of retention labels (Worldwide)"
slug: "microsoft-purview-compliance-portal-data-lifecycle-management-bulk-replacement-or-removal"
roadmapId: 392456
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a Purview portal action to replace or remove retention labels in bulk, tenant-wide or by KQL and scope. Worldwide target December CY2026; Learn has no page yet, so review rather than act."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists licences for retention label creation, such as Microsoft 365 E5/A5/G5/E3/A3/G3/F3/F1/Business Premium. A licence or price specific to bulk replacement is not yet published."
audiences: ["compliance","m365-admin"]
tags: ["purview","data-lifecycle-management","retention","records-management","adaptive-scopes"]
sources:
  - title: "Microsoft 365 Roadmap item 392456"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=392456"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap item 392457"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=392457"
    kind: "roadmap"
  - title: "Learn about retention policies and retention labels"
    url: "https://learn.microsoft.com/purview/retention"
    kind: "learn"
  - title: "Learn about records management"
    url: "https://learn.microsoft.com/purview/records-management"
    kind: "learn"
  - title: "Get started with data lifecycle management"
    url: "https://learn.microsoft.com/purview/get-started-with-data-lifecycle-management"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "driveItem: removeRetentionLabel"
    url: "https://learn.microsoft.com/graph/api/driveitem-removeretentionlabel?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep","microsoft-purview-compliance-portal-data-lifecycle-management-introduction-of-secure-workf"]
controls:
  - governs: "Tenant-level switch for bulk replacement or removal of retention labels"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented on either surface at the time of writing (November 2026)."
  - governs: "Who holds the roles that manage retention labels"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Needs the Role Management role. Learn names Compliance Administrator or a Retention Management role group for retention labels; roles for this feature are not yet published."
  - governs: "Searching the audit log for retention label changes"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Needs the Audit Logs or View-Only Audit Logs role. Learn documents the activity for a single label change; whether the bulk action uses it is not yet published."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-04-03T22:15:57"
changes:
  - date: "2026-11-24"
    note: "First briefing for this roadmap item: Worldwide scope, roadmap status and target, and the existing retention label and role controls that apply."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 57 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Correction: record-label wording now says the record must be locked in SharePoint and OneDrive, background framing reworded, one unmatched checklist step removed, and item 392457 added as a source."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 67 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 65
  unconfirmed: 2
  contradicted: 0
  attempts: 2
  hash: "f78ad552ad81b33957dc1a3a892b46de"
---

## What's changing

Microsoft plans to let administrators replace or remove a retention label in bulk from the Microsoft Purview portal. The roadmap description says admins can do this across the entire tenant, or target specific content using KQL (Keyword Query Language) and static or adaptive scopes.

Microsoft Learn does not describe this feature yet at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description. For background, Learn documents existing label behaviour: admins and end users can manually change or remove a standard retention label, and an existing label is not automatically replaced by another except in the cases the retention page lists. For existing manual operations, only container admins can change or remove a record label; in SharePoint and OneDrive the record must be locked. A regulatory record label cannot be changed or removed manually. Whether bulk replacement follows those rules is not documented.

The roadmap record for item 392456 gives the status as In development, with a target of December CY2026, for Worldwide (Standard Multi-Tenant) on the web. The release phase lists General Availability and Preview, and the record has no preview date. Microsoft lists the same feature under a second roadmap item, 392457, for GCC, GCC High and DoD, also In development with a December CY2026 target and listing General Availability only. This page covers 392456 alone.

Microsoft has not stated what happens on arrival, so the default state is shown as Not stated.

## Why it matters

Retention labels decide how long content is kept or when it is deleted, so a tool that changes them across a tenant is a high-leverage compliance control. For a compliance team it could replace per-item or per-site clean-up when a label is retired or renamed in policy. For the same reason a mis-scoped KQL query or an over-broad scope would change retention on more content than intended.

No source says existing behaviour changes when this arrives, and Microsoft has not stated whether it is on or off by default. Treat it as a capability to review before it lands: decide who may run it and how a run is checked, and plan to read the Learn page once Microsoft publishes it.

## Risk assessment

**Data exposure**
- A label carries the retention settings applied to an item. Microsoft's Graph reference says that removing a label from a single SharePoint or OneDrive item clears the label and all associated retention settings on that item, so confirm whether bulk removal has the same effect before running it tenant-wide.
- Which locations the bulk action reaches (SharePoint, OneDrive, Exchange) is not stated on the roadmap record beyond "entire tenant" or targeted content.

**Security & identity**
- The role needed to run the action is not yet published. Learn names the Compliance Administrator role group, or a custom role group with the Retention Management role, for creating and managing retention policies and labels in general; confirm whether that covers this action.
- For existing manual operations, only container admins can change or remove a record label; in SharePoint and OneDrive the record must be locked. Regulatory record labels cannot be changed manually. Confirm how a bulk run treats both before relying on it.

**Autonomy & actions**
- The roadmap describes an action that admins perform. No source describes scheduling, approval steps or an undo, so confirm whether a run can be previewed or reversed.

**Change & support**
- Retention labels show in Microsoft 365 apps, so a help desk may be asked why a label changed. Brief it before the first run.
- Confirm whether an auto-apply retention label policy or default label can put a removed label back after a bulk run.

## Cost and licensing

No price or meter specific to this feature is published at the time of writing. The Microsoft Purview service description says that for retention label creation, the licences that provide user rights include Microsoft 365 E5/A5/G5/E3/A3/G3/F3/F1/Business Premium, Microsoft Purview Suite and Office 365 E5/A5/G5/E3/A3/G3/F3/E1/A1/G1. The same page lists using an adaptive policy scope in a retention label policy as a deployment method that needs specific licences, such as Microsoft 365 E5/A5/G5. Whether that requirement extends to targeting an adaptive scope in this feature is not yet published.

The indirect cost is admin time to scope, test and check each run. The Data Lifecycle Management getting-started page says pay-as-you-go billing is needed for retention policies on Copilot and AI app locations; the roadmap does not link this feature to that meter.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the web platform for item 392456. GCC, GCC High and DoD are listed under the separate item 392457; "not listed" here is a record fact, not a statement that the feature is unavailable there.

The roadmap says the action works tenant-wide or on targeted content selected with KQL and static or adaptive scopes. Learn says adaptive and static scopes both support administrative units, and that retention labels themselves do not currently support administrative units. How restricted administrators are treated by this feature is not documented. Roles and licences for the feature are not yet published.

## Governance guidance

### Before rollout
- Identify who holds the Compliance Administrator role group or the Retention Management role, and trim the list to people who should be able to change labels tenant-wide.
- Agree with the compliance owner when a bulk replacement or removal is justified, and who approves the KQL query or scope.

### At rollout
- Watch Message center and the roadmap item for a status change from In development, and read the Learn page when it appears.
- Run the first action on a narrow scope, such as one site or one mailbox group, before any tenant-wide run.
- Tell the help desk which labels may change and when.

### After rollout
- Search the audit log for the "Changed retention label for a file" activity after each run and compare the count with the expected scope.
- Review role group membership again after each run to confirm that only intended admins can change labels.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-level switch for bulk replacement or removal of retention labels</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented on either surface at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who holds the roles that manage retention labels</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Role Management role. Learn names Compliance Administrator or a Retention Management role group for retention labels; roles for this feature are not yet published.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Searching the audit log for retention label changes</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs or View-Only Audit Logs role. Learn documents the activity for a single label change; whether the bulk action uses it is not yet published.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No tenant switch, role or API for bulk replacement is documented yet, so the first row records the gap. The two rows below are existing controls that apply to retention labels in general: they do not confirm that the new action honours them.

One per-item route exists today. The Microsoft Graph operation driveItem: removeRetentionLabel, `DELETE /drives/{drive-id}/items/{item-id}/retentionLabel`, removes the retention label from one SharePoint or OneDrive item; see [the Graph reference](https://learn.microsoft.com/graph/api/driveitem-removeretentionlabel?view=graph-rest-1.0). It is not a bulk action.

Adding members to a Purview role group needs the Role Management role. Searching the audit log needs the Audit Logs or View-Only Audit Logs role. Whether the audit log records the bulk action under the same activity as a single change is not yet published.

## Open questions

- Which role or role group runs a bulk replacement or removal, and does Retention Management cover it? Watch the Learn data lifecycle management pages and Message center.
- Are labels that mark items as records or regulatory records included, and does the action follow the existing rules for who can change them?
- Is there a tenant-level switch, and is the feature on or off when it arrives?
- Does the action carry a licence or meter of its own, including when it targets an adaptive scope?
- Can a run be previewed or undone, and which audit activities does it record?

<!-- rationale
risk: Medium. The roadmap describes admins replacing or removing retention labels across a whole tenant, which changes what retention applies to content; how record labels are treated is not yet documented.
cost: Low. The only cost the sources show is admin time and the Purview licences already needed for retention labels; a licence or price specific to this feature is not yet published.
impact: Low. The roadmap describes an action that admins run from the Purview portal; end users are not asked to do anything, though labels visible in their apps may change.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Governance guidance: After rollout; controls[2].note / applicability: Searching Changed retention label for a file after each bulk run allows its count to be compared with the full expected scope. | Found: Searched: Purview bulk retention label removal scheduling approval preview undo audit Changed retention label for a file restricted administrators. Read retention auditing and audit-search: the event covers SharePoint/OneDrive item changes, not a documented complete count for bulk runs. | Fix: Replace the After rollout bullet with: 'For existing SharePoint and OneDrive item-level label changes, search the audit log for "Changed retention label for a file"; confirm the bulk action's documented audit coverage before using event counts to validate a run.' The existing event is documented at https://learn.microsoft.com/purview/retention#auditing-retention-configuration-and-actions.
- [unsupported, blocker] Governance controls: per-item Graph route / command: DELETE /drives/{drive-id}/items/{item-id}/retentionLabel is a complete Graph call to remove one item's label. | Found: Searched: opened driveitem-removeretentionlabel?view=graph-rest-1.0. The HTTP-request section gives the operation suffix, but its executable example uses https://graph.microsoft.com/v1.0/drives/.../items/.../retentionLabel; the briefing omits the required API version. | Fix: Replace the inline call with 'DELETE /v1.0/drives/{drive-id}/items/{item-id}/retentionLabel', retaining the existing Graph reference and the statement that it removes one item's label, not a bulk action.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: KQL means Keyword Query Language. | Found: Use Keyword Query Language (KQL) to auto-apply the retention labels that you created. KQL is the language used to build search queries. | Fix: Add https://learn.microsoft.com/purview/auto-apply-retention-labels-scenario to sources for the expansion of KQL. | Source: https://learn.microsoft.com/purview/auto-apply-retention-labels-scenario#auto-apply-retention-labels-to-documents
-->
