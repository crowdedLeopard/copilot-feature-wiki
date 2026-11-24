---
title: "Microsoft Purview: bulk replacement or removal of retention labels (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-data-lifecycle-management-bulk-replaceme-us-government"
roadmapId: 392457
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a Purview portal action to replace or remove retention labels in bulk, tenant-wide or by KQL and scope. This item covers GCC, GCC High and DoD, target December CY2026. Learn has no page yet; review, no action needed now."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
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
  notes: "The Microsoft Purview service description lists licences that provide user rights for retention label creation, including Microsoft 365 E5/A5/G5/E3/A3/G3/F3/F1/Business Premium. A licence or price specific to bulk replacement is not yet published."
audiences: ["compliance","m365-admin"]
tags: ["purview","data-lifecycle-management","retention","records-management","adaptive-scopes","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 392457"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=392457"
    kind: "roadmap"
  - title: "Learn about retention policies and retention labels"
    url: "https://learn.microsoft.com/purview/retention"
    kind: "learn"
  - title: "Automatically apply a retention label to retain or delete content"
    url: "https://learn.microsoft.com/purview/apply-retention-labels-automatically"
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
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Declare records by using retention labels"
    url: "https://learn.microsoft.com/purview/declare-records"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-data-lifecycle-management-bulk-replacement-or-removal","microsoft-purview-data-lifecycle-management-power-automate-integration-with-records-manage"]
controls:
  - governs: "Tenant-wide bulk replacement or removal of retention labels"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents neither a setting nor an API for this feature at the time of writing (November 2026)."
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
    note: "Needs the Role management role. Learn names Compliance Administrator or a Retention Management role group for retention labels; the role for this feature is not yet published."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-03-04T00:15:19"
changes:
  - date: "2026-11-24"
    note: "First briefing for roadmap item 392457: GCC, GCC High and DoD scope, In development with a December CY2026 target; no Learn page for the feature yet."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 55
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "8d8a6411a10676358a70b24481c9b802"
---

## What's changing

Microsoft plans to let administrators replace or remove a retention label in bulk from the Microsoft Purview portal. The roadmap description says admins can do this across the entire tenant, or target specific content using KQL (Keyword Query Language) and static or adaptive scopes.

Microsoft Learn does not describe this feature yet at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description. For background, Learn documents how existing labels are replaced today: an auto-apply retention label policy will never replace an existing retention label, and a label that is configured to mark items as a regulatory record cannot be changed by the end-of-retention relabelling methods. Whether bulk replacement follows those rules is not documented.

The roadmap record for item 392457 gives the status as In development, with a target of December CY2026, for GCC, GCC High and DoD on the web, with General Availability as the release phase and no preview date. Microsoft lists the same feature under a second roadmap item, 392456, for Worldwide (Standard Multi-Tenant), also In development with a December CY2026 target; that item lists General Availability and Preview. This page covers 392457 alone: see [the Worldwide page](/features/microsoft-purview-compliance-portal-data-lifecycle-management-bulk-replacement-or-removal/).

Microsoft has not stated what happens on arrival, so the default state is shown as Not stated.

## Why it matters

Retention labels decide how long content is kept or when it is deleted, so an action that changes them across a tenant is a high-leverage compliance control. For a compliance team it could replace item-by-item or site-by-site clean-up when a label is retired or renamed. The same reach means a mis-scoped KQL query or an over-broad scope would change retention on more content than intended.

No source says existing behaviour changes when this arrives, and Microsoft has not stated whether it is on or off by default. Treat it as a capability to review before it lands: decide who may run it and how a run is checked, and plan to read the Learn page once Microsoft publishes it.

## Risk assessment

**Data exposure**
- A label carries the retention settings applied to an item, so replacing or removing it changes how long that item is kept or when it is deleted. Which locations the bulk action reaches (SharePoint, OneDrive, Exchange) is not stated on the roadmap record beyond "entire tenant" or targeted content.

**Security & identity**
- The role needed to run the action is not yet published. Learn recommends the Compliance Administrator role group, or a custom role group with the Retention Management role, for creating and managing retention policies and labels in general; confirm whether that covers this action.
- Learn's table shows that manual and automated methods treat record labels and regulatory record labels differently. Confirm how a bulk run treats both before relying on it.

**Autonomy & actions**
- The roadmap describes an action that admins perform. No source describes scheduling, approval steps, preview or an undo, so confirm whether a run can be previewed or reversed before a tenant-wide run.

**Change & support**
- Retention labels show in Microsoft 365 apps, so a help desk may be asked why a label changed. Brief it before the first run.
- Confirm whether an auto-apply retention label policy can put a removed label back after a bulk run; Learn says an auto-apply policy will never replace an existing label, but says nothing about reapplying after removal.

## Cost and licensing

No price or meter specific to this feature is published at the time of writing. The Microsoft Purview service description says that for retention label creation, the licences that provide user rights include Microsoft 365 E5/A5/G5/E3/A3/G3/F3/F1/Business Premium, Microsoft Purview Suite/EDU/GOV/FLW and Office 365 E5/A5/G5/E3/A3/G3/F3/E1/A1/G1. It also lists retention label settings, such as automatically changing the retention label after the retention period, that need specific licences, such as Microsoft 365 E5/A5/G5. Whether bulk replacement carries a requirement of its own is not yet published.

The indirect cost is admin time to write the KQL query or scope, test it and check each run.

## Scope

The roadmap record lists GCC, GCC High and DoD, and the web platform, for item 392457, with General Availability as the release phase. The Worldwide cloud is listed under the separate item 392456; "not listed" here is a record fact, not a statement that the feature is unavailable in either place.

The roadmap says the action works tenant-wide or on targeted content selected with KQL and static or adaptive scopes. Roles, licences and prerequisites for the feature are not yet published. For role management in the Purview portal, Learn says an admin account needs the Role management role to add users to a role group, and that security groups are supported in Microsoft 365 commercial cloud organizations only, which matters for the US Government clouds this item lists.

## Governance guidance

### Before rollout
- Identify who holds the Compliance Administrator role group or the Retention Management role, and trim the list to people who should be able to change labels tenant-wide.
- Agree with the compliance owner when a bulk replacement or removal is justified, and who approves the KQL query or scope.
- Inventory which labels mark items as records or regulatory records, since Learn treats them differently from standard labels.

### At rollout
- Watch Message center and the roadmap item for a status change from In development, and read the Learn page when it appears.
- Run the first action on a narrow scope before any tenant-wide run, once the feature exists in your cloud.
- Tell the help desk which labels may change and when.

### After rollout
- Review role group membership after each run to confirm that only intended admins can change labels.
- Check a sample of affected items to confirm the new label, or the absence of one, matches what the query and scope should have selected.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide bulk replacement or removal of retention labels</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents neither a setting nor an API for this feature at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who holds the roles that manage retention labels</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Role management role. Learn names Compliance Administrator or a Retention Management role group for retention labels; the role for this feature is not yet published.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No tenant switch, role or API specific to bulk replacement is documented yet, so the first row records the gap. The second row is an existing control for retention label administration in general; it does not confirm that the new action honours it.

Adding members to a Purview role group needs the Role management role. Learn recommends the Compliance Administrator role group, or a role group with the Retention Management role, for creating and managing retention labels; which role runs a bulk action is not yet published. Security groups in role groups are supported in Microsoft 365 commercial cloud organizations only, so in GCC, GCC High and DoD add individual users.

## Open questions

- Which role or role group runs a bulk replacement or removal, and does Retention Management cover it? Watch the Learn data lifecycle management pages and Message center.
- Are labels that mark items as records or regulatory records included, and does the action follow the existing rules for who can change them?
- Is there a tenant-level switch, and is the feature on or off when it arrives in GCC, GCC High and DoD?
- Does the action carry a licence of its own, including when it targets an adaptive scope?
- Can a run be previewed or undone, and which audit activities does it record?

<!-- rationale
risk: Medium. The roadmap describes admins replacing or removing retention labels across a whole tenant, which changes what retention applies to content; how record labels are treated is not yet documented. Default state is not stated.
cost: Low. The only cost the sources show is admin time plus the Purview licences already listed for retention labels; a licence or price specific to bulk replacement is not yet published.
impact: Low. The roadmap describes an action that admins run from the Purview portal, so compliance admins notice first; end users are not asked to do anything, though labels visible in their apps may change.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: Replacing or removing a retention label changes how long that item is kept or when it is deleted. | Found: These two actions are calculated independently from each other, from all the retention settings applied to an item. ... you can also use retention labels without turning on any retention or other actions. | Fix: Replace the sentence with: 'Replacing or removing a retention label can change the item's retention or deletion outcome, depending on the label's actions and other retention settings applied to the item.' Retain the citation to https://learn.microsoft.com/purview/retention. | Source: https://learn.microsoft.com/purview/retention
-->
