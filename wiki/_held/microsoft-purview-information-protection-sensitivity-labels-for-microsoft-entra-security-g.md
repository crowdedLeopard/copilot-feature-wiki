---
title: "Microsoft Entra: sensitivity labels for cloud security groups"
slug: "microsoft-purview-information-protection-sensitivity-labels-for-microsoft-entra-security-g"
roadmapId: 568217
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to let administrators apply Purview sensitivity labels to Microsoft Entra cloud security groups. A tenant setting must be enabled first, and labels cannot be changed once applied."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Learn page requires at least one active Microsoft Entra ID P1 or P2 licence (or Microsoft 365 E3/E5) in the organisation. It names no separate charge or meter for the feature; Microsoft has not published pricing beyond that."
audiences: ["m365-admin","security","compliance"]
tags: ["sensitivity-labels","information-protection","purview","entra-id","guest-access","governance","microsoft-graph","powershell"]
sources:
  - title: "Microsoft 365 Roadmap 568217"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568217"
    kind: "roadmap"
  - title: "Assign sensitivity labels to Microsoft Entra security groups (preview)"
    url: "https://learn.microsoft.com/entra/identity/users/groups-sensitivity-labels"
    kind: "learn"
  - title: "Update group"
    url: "https://learn.microsoft.com/graph/api/group-update"
    kind: "learn"
  - title: "Execute-AzureADLabelSync"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/execute-azureadlabelsync"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Set-Label"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    kind: "learn"
  - title: "MC1508238: (Updated) Microsoft Purview | Information Protection: Sensitivity labels for Microsoft Entra security groups"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1508238"
    kind: "message-center"
videos: []
related: []
controls:
  - governs: "Whether sensitivity labels can be used on cloud security groups in the tenant"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "New-MgBetaDirectorySetting -BodyParameter $params  # templateId d209f6fa-3839-4d70-b83f-60b1c64d0e8f, values: EnableMIPLabels = True"
      docs: "https://learn.microsoft.com/entra/identity/users/groups-sensitivity-labels"
    note: "Uses the Group.Security template, separate from Group.Unified for Microsoft 365 groups. Existing settings are changed with Update-MgBetaDirectorySetting."
  - governs: "Which sensitivity label a cloud security group carries"
    scope: "group"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Microsoft Entra ID > Groups > All groups > group > Properties > Sensitivity label"
      docs: "https://learn.microsoft.com/entra/identity/users/groups-sensitivity-labels"
    api:
      kind: "graph"
      call: "PATCH /v1.0/groups/{id} with assignedLabels set to a label ID"
      docs: "https://learn.microsoft.com/graph/api/group-update"
    note: "Groups Administrator or group owner. For cloud security groups the Graph page names the delegated Group.ManageProtection.All permission; app-only is not supported; immutable once set. New groups use Groups > All groups > New group."
  - governs: "Synchronising published labels to Microsoft Entra ID"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Execute-AzureADLabelSync"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/execute-azureadlabelsync"
    note: "Run in Security & Compliance PowerShell, not the Microsoft Graph PowerShell SDK. Labels can take up to 24 hours to become available."
  - governs: "Which labels are available to groups and the guest and membership policy they carry"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Set-Label -Identity <label> -SiteAndGroupProtectionEnabled <$true|$false>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    note: "Select the Groups & Sites scope when creating or editing a label. General Purview control: Microsoft has not confirmed which Set-Label parameters apply to cloud security groups."
  - governs: "Changing or removing a label once applied to a cloud security group"
    scope: "group"
    ui: null
    api: null
    note: "Learn states that during preview you can't change or remove the label; the workaround is a new labelled group."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-17T00:31:56"
changes:
  - date: "2026-11-17"
    note: "New briefing: labels for cloud security groups, with the separate tenant setting, immutability and preview bypass limits; rollout moved to mid-January 2027."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 67
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "62a84ed8fc40fd5097533c8e9f47d518"
---

## What's changing

Microsoft Purview sensitivity labels can be applied to Microsoft Entra cloud security groups, extending label-based protection that exists today for Microsoft 365 groups and SharePoint sites. The labels you already publish in the Microsoft Purview portal with the Groups & Sites scope are used; the roadmap item says no separate label configuration is required. A label can enforce membership and guest access policy when a group is created or labelled.

Microsoft's notice MC1508238 says labels can be assigned through the Microsoft Entra admin center, the Azure portal, PowerShell or Microsoft Graph, during group creation or afterwards. The notice says no action is required to receive the change, but that cloud security groups need their own setting enabled in the tenant, separate from any existing Microsoft 365 group setting. The Learn page describes that setting as tenant-level directory settings using the `Group.Security` template, which is separate from the `Group.Unified` template used for Microsoft 365 groups.

The Learn page for the feature is marked preview and says behaviour, including whether labels can be changed and how high-privilege roles are treated, might change before general availability. In preview, a label cannot be changed or removed once applied; MC1508238 says support for changing labels will come in a future update, without a date.

The roadmap item is In development with a target of January CY2027 for General Availability (Worldwide Standard Multi-Tenant, Web). MC1508238, updated 14 November 2026, moves rollout to begin in mid-January 2027 (previously mid-November 2026) and complete in mid-January 2027 (previously late November 2026). The notice gives no act-by date.

## Why it matters

Security groups are used directly in access decisions, so a label that blocks guests gives administrators a way to keep guest accounts out of groups that grant access. Learn describes security groups as authorisation primitives that Conditional Access scoping, application access and resource permissions evaluate, which is why enforcement happens in Microsoft Entra ID.

Because the setting is separate from the Microsoft 365 groups setting, nothing reaches your security groups until someone enables it. The risk is in enabling it carelessly: labels are permanent for the group, and validation currently runs only when a group is created or first labelled. Decide which labels, if any, will be used for security groups before turning it on.

## Risk assessment

**Data exposure**
- Guests already in a group stay there when a label's guest policy later tightens. Learn says label policy changes in Microsoft Purview do not alter existing group membership and that guests remain until an owner or admin removes them. It also advises against changing or deleting a label's policy after the label is in use on security groups.
- A label blocking guest access is checked when a group is created or first labelled; Learn states that current validation applies only at those points and that extending it is in progress.

**Security & identity**
- During preview, the listed admin roles (including Global Administrator, User Administrator and Groups Administrator) and apps with `Group.ReadWrite.All`, `Directory.ReadWrite.All`, `Directory.ReadWriteAdvanced.All` or `GroupMember.ReadWrite.All` can bypass label policy when adding members. Learn says this might change before general availability. Review who holds these roles and permissions before relying on a label to keep guests out.
- Labels are not supported on dynamic-membership groups in this release (Learn says there are edge cases where one can be applied but the policy is not enforced), on groups synced from on-premises Active Directory, on Exchange-managed security groups, or on mail-enabled security groups.

**Autonomy & actions**
- No change: the feature applies a label and enforces its membership policy; it adds no autonomous behaviour.

**Change & support**
- A label cannot be changed or removed after it is applied. Learn's workaround is to create a new security group with the correct label and re-add the members. Expect support requests from group owners who pick the wrong label.
- A group that contains nested groups cannot be labelled until they are removed, and child groups need labels at least as restrictive as the parent's. Plan time for restructuring nested groups.
- Assigning labels to security groups is not supported in the Microsoft 365 admin center or the My Groups portal, so owners using those surfaces cannot label.

## Cost and licensing

Licence: the Learn page lists as a prerequisite at least one active Microsoft Entra ID P1 or P2 license (or Microsoft 365 E3/E5) in the organisation. MC1508238 gives the same condition, citing Microsoft 365 E3 or E5, which include Microsoft Entra ID P1.

Meter: Learn documents no meter or separate charge for the feature at the time of writing (November 2026), and Microsoft has not published a price for it. Indirect cost is admin time: enabling the setting, publishing and synchronising labels, and restructuring nested groups before labelling.

## Scope

**Who and what is covered.** Cloud security groups with assigned (not dynamic) membership. Learn says security groups synced from on-premises Active Directory, Exchange-managed security groups, mail-enabled security groups and distribution lists are not supported.

**Roles.** Learn says the person assigning a label must be the group owner or at least a Groups Administrator, and must be within the scope of the label's publishing policy.

**Clouds and platforms.** The roadmap lists Worldwide (Standard Multi-Tenant) and Web. Nothing is listed for US Government clouds on the record; that is a record fact, not a statement that the feature is unavailable there.

**Prerequisites.** Per Learn: an active Microsoft Entra ID P1 or P2 licence (or Microsoft 365 E3/E5); `EnableMIPLabels` set to `True` for cloud security groups in the directory settings; labels published in the Microsoft Purview portal with the Groups & Sites scope; and labels synchronised to Microsoft Entra ID with `Execute-AzureADLabelSync`, which can take up to 24 hours to take effect.

**Rollout.** General Availability is targeted for January CY2027 on the roadmap; MC1508238 says rollout begins and completes in mid-January 2027.

## Governance guidance

### Before rollout
- Inventory security groups that contain guests, nested groups, dynamic membership or on-premises sync, since labels cannot be applied cleanly to them (see the nesting and guest conflicts in the Learn troubleshooting section).
- Review the labels published with the Groups & Sites scope and decide which are acceptable for security groups, given that a label cannot be changed once applied.
- Review holders of the roles and application permissions that Learn lists as able to bypass label enforcement during preview.
- Confirm the organisation holds an active Microsoft Entra ID P1 or P2 licence, or Microsoft 365 E3/E5.

### At rollout
- Enable `EnableMIPLabels` for cloud security groups in the `Group.Security` directory settings; do this separately even if Microsoft 365 group labels are already enabled.
- Synchronise labels to Microsoft Entra ID with `Execute-AzureADLabelSync` in Security & Compliance PowerShell and allow up to 24 hours.
- Test labelling on a non-production security group first, including a label that blocks guests and a group with nested groups.
- Tell group owners that a label cannot be changed or removed after it is applied.

### After rollout
- Check labelled groups for guests that were present before a label's guest policy changed, and remove them where the policy requires.
- Avoid editing or deleting the policy of a label that is in use on security groups, as Learn advises.
- Re-read the Learn page when general availability arrives, because behaviour on label changes and high-privilege bypass might change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether sensitivity labels can be used on cloud security groups in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Uses the Group.Security template, separate from Group.Unified for Microsoft 365 groups. Existing settings are changed with Update-MgBetaDirectorySetting.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-MgBetaDirectorySetting -BodyParameter $params  # templateId d209f6fa-3839-4d70-b83f-60b1c64d0e8f, values: EnableMIPLabels = True</code> <a href="https://learn.microsoft.com/entra/identity/users/groups-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which sensitivity label a cloud security group carries</strong><br><small>Group</small><br><small class="controls__note">Groups Administrator or group owner. For cloud security groups the Graph page names the delegated Group.ManageProtection.All permission; app-only is not supported; immutable once set. New groups use Groups &gt; All groups &gt; New group.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Microsoft Entra ID › Groups › All groups › group › Properties › Sensitivity label <a href="https://learn.microsoft.com/entra/identity/users/groups-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/groups/{id} with assignedLabels set to a label ID</code> <a href="https://learn.microsoft.com/graph/api/group-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Synchronising published labels to Microsoft Entra ID</strong><br><small>Tenant</small><br><small class="controls__note">Run in Security &amp; Compliance PowerShell, not the Microsoft Graph PowerShell SDK. Labels can take up to 24 hours to become available.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Execute-AzureADLabelSync</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/execute-azureadlabelsync" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which labels are available to groups and the guest and membership policy they carry</strong><br><small>Tenant</small><br><small class="controls__note">Select the Groups &amp; Sites scope when creating or editing a label. General Purview control: Microsoft has not confirmed which Set-Label parameters apply to cloud security groups.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;label&gt; -SiteAndGroupProtectionEnabled &lt;$true|$false&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Changing or removing a label once applied to a cloud security group</strong><br><small>Group</small><br><small class="controls__note">Learn states that during preview you can't change or remove the label; the workaround is a new labelled group.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents the tenant setting only as PowerShell (Microsoft Graph PowerShell directory settings) at the time of writing (November 2026); no admin centre toggle is documented. The setting for cloud security groups is separate from the Microsoft 365 groups setting.

Assigning labels needs the group owner or at least a Groups Administrator, within the scope of the label's publishing policy. During preview, the roles and application permissions Learn lists can bypass label enforcement when adding members, so the label policy is not an absolute barrier for them.

Learn documents no way to change or remove a label after it is applied during preview, which is why that gap is in the table. The Set-Label row is the Purview-side cmdlet for modifying labels; Microsoft has not confirmed in the page read which of its parameters apply to cloud security groups, so treat the portal as the documented route.

## Open questions

- Will labels be changeable or removable at general availability, and when? MC1508238 says support comes in a future update without a date; watch Message center and the Learn page.
- Will the high-privilege bypass roles and apps still bypass label enforcement at general availability? Learn says this might change.
- Will validation extend beyond group creation and first labelling, for example to guests already in a group when a label's policy changes? Learn says this is in progress.
- Is there an admin centre toggle for the tenant setting, or will it stay PowerShell-only? Watch the Learn page for the feature.
- Will audit events for label assignment on security groups be documented? Watch the Learn page and Message center.

<!-- rationale
risk: Medium. Nothing changes until an administrator enables it, but once on, a label cannot be changed or removed from a group and certain admin roles can bypass label enforcement during preview.
cost: Low. Learn names an active Microsoft Entra ID P1 or P2 licence (or Microsoft 365 E3/E5) as a prerequisite and documents no meter; the known cost is admin time to enable and test.
impact: Low. Administrators and group owners who create or label security groups notice it; users are affected only where a label blocks guest members.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: first paragraph / absence: Microsoft Learn documents the tenant setting only as PowerShell. | Found: Example 2: Enable sensitivity labels for all cloud security groups in the tenant PATCH https://graph.microsoft.com/beta/settings/{directorySettingId} "name": "EnableMIPLabels", "value": "true" | Fix: Replace the first sentence under the table with: 'The cited feature page documents the tenant setting using Microsoft Graph PowerShell directory settings; no admin centre toggle is documented at the time of writing (November 2026).' This removes the incorrect claim that Learn documents no other automation surface without adding another control. | Source: https://learn.microsoft.com/graph/api/directorysetting-update?view=graph-rest-beta
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] front matter: risk; rationale: risk / consistency: Medium risk is justified by what could happen after an administrator enables this optional new control. | Found: risk: "medium" Nothing changes until an administrator enables it, but once on, a label cannot be changed or removed from a group and certain admin roles can bypass label enforcement during preview. | Fix: Set risk to 'low' and replace the risk rationale with: 'Low. This optional control changes nothing until an administrator enables it; leaving it unconfigured preserves existing security-group behaviour.' The scale rates a new control's default exposure, not its post-enablement configuration risk.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every control the checklist tells administrators to review is represented in the controls table. | Found: Review holders of the roles and application permissions that Learn lists as able to bypass label enforcement during preview. | Fix: The Before rollout step about reviewing holders of bypass roles and application permissions has no corresponding control row. Remove that checklist bullet; retain the documented bypass warning in Risk assessment and Governance controls. Do not add a control row as part of this correction.
-->
