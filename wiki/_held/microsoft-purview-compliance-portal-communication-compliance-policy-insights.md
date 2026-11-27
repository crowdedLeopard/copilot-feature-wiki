---
title: "Microsoft Purview Communication Compliance: policy insights columns withdrawn from the roadmap"
slug: "microsoft-purview-compliance-portal-communication-compliance-policy-insights"
roadmapId: 172016
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft says this roadmap item for two scanning-progress columns on the Communication Compliance home page is no longer accurate and is being removed. There is nothing to configure; the Policies page documents per-policy daily scan and match counts."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "November CY2025"
previewDate: "July CY2025"
risk: "low"
cost: "none"
impact: "low"
defaultState: "unknown"
action: "none"
licensing:
  model: "included"
  notes: "Communication Compliance is listed as Included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite and Office 365 E5/A5/G5 plans in the Microsoft Purview service description. Nothing specific to this withdrawn item is published."
audiences: ["compliance","service-owner"]
tags: ["communication-compliance","purview","role-groups","monitoring","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 172016"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=172016"
    kind: "roadmap"
  - title: "Investigate and remediate Communication Compliance alerts"
    url: "https://learn.microsoft.com/purview/communication-compliance-investigate-remediate"
    kind: "learn"
  - title: "Assign permissions in Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-permissions"
    kind: "learn"
  - title: "Get started with Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-configure"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Membership of the Communication Compliance role groups, which decides who can open the solution and its Policies page (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["role-groups","microsoft-purview-compliance-portal-communication-compliance-alert-improvements","microsoft-purview-communication-compliance-alert-improvements"]
controls:
  - governs: "Membership of the Communication Compliance role groups, which decides who can open the solution and its Policies page"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > role group > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/communication-compliance-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Role group changes can take up to 30 minutes to apply. Identity and Member are listed as applicable to Security & Compliance in the cmdlet reference."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-23T23:15:39"
changes:
  - date: "2026-11-27"
    note: "New briefing: the roadmap item is being withdrawn although its status reads Launched; points to the Policies page columns Learn documents today."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 44 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 42
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "23696b3651637ec8bb4b00a6490c3485"
---

## What's changing

Microsoft is withdrawing this item. Roadmap item 172016 planned two columns on the Communication Compliance home page in the Microsoft Purview portal: one showing the number of scanned parent items in real time, the other the parent items that meet policy conditions. Its description now ends: "This item is no longer accurate and is being removed from the roadmap." Microsoft has not stated what the planned columns would have done on arrival, and no source says the existing pages change.

What Microsoft Learn documents today is the **Policies** page of Communication Compliance, where each policy has a **Messages scanned today** column (messages the policy scanned on the current day for in-scope users and locations, refreshed automatically once per hour and reset to zero at the end of the UTC day) and a **New pending today** column (policy matches for the current day, updated when the page is opened or **Refresh** is selected). The page also lists **Total pending**, **Total resolved**, **Status**, **Last modified** and **Last policy scan**. Microsoft Learn does not describe the real-time parent-item columns the roadmap item planned at the time of writing (November 2026), so the existing columns should not be read as this item's delivery.

The record and its own text disagree. The record lists the status as Launched, the release phase as General Availability, a preview date of July CY2025 and a target date of November CY2025, for GCC, GCC High and DoD on the Web, while the description says the item is being removed. The record was last modified on 23 June 2026.

## Why it matters

This matters for change tracking more than for the tenant. Anyone who planned to use a real-time count of scanned parent items to confirm that a new policy is working should not wait for it: the documented tool is the **Messages scanned today** column, which refreshes once per hour. Microsoft's own tip is that a 0 or low value there may mean the policy is too strict, for example scoped to one user or a location that user does not use.

The Launched status on a withdrawn item is the trap. A tracker or change board that closes items by status will record a feature that the description says is not coming. Mark it withdrawn in your own records and leave the Policies page guidance as it stands.

## Risk assessment

**Data exposure**
- No change: the item is being withdrawn, and what it described was counts, not message content.

**Security & identity**
- No change. Who can open Communication Compliance, and so its Policies page, is still decided by membership of the roles and role groups on the Communication Compliance permissions page (see the controls table).

**Autonomy & actions**
- No change: the item described read-only counts and takes no action on messages.

**Change & support**
- The record shows Launched while its description says the item is being removed; trackers that rely on status will mislabel it.
- Analysts who expect a real-time scan count will find the **Messages scanned today** column refreshes once per hour and does not update when the page is refreshed.

## Cost and licensing

Communication Compliance needs a supported subscription: the Get started with Communication Compliance page says administrators need to verify that their organisation has a supported subscription and that users have the appropriate licences assigned. The Microsoft Purview service description lists Communication Compliance as Included in Microsoft 365 E5 + Microsoft Copilot, Microsoft 365 Purview Suite + Microsoft Copilot, Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5/G5 Insider Risk Management, and Office 365 E5/A5/G5.

Nothing specific to this withdrawn item is published, and there is nothing to budget for it.

## Scope

- **Who it was for:** administrators and reviewers who open the Communication Compliance solution in the Microsoft Purview portal.
- **Roles:** the permissions page lists Global Administrator, Compliance Administrator (Microsoft Entra ID), the Organization Management and Compliance Administrator role groups, and the Communication Compliance and Communication Compliance Admins role groups as making Communication Compliance available as a menu option.
- **Admin units:** where a role group is scoped by one or more admin units, the Policies page shows only the policies the member is scoped for.
- **Clouds and platforms:** the record lists GCC, GCC High and DoD, on the Web.
- **Status:** Launched in the record; being removed according to its description.

## Governance guidance

### Before rollout
- Mark roadmap item 172016 as withdrawn in your change tracker, noting that the record still shows Launched.
- Tell compliance analysts that the planned real-time parent-item columns are not coming, and point them to the **Messages scanned today** and **New pending today** columns on the Policies page.

### At rollout
- Check who belongs to the Communication Compliance, Communication Compliance Admins, Analysts and Investigators role groups, since membership decides who can open the Policies page and its alerts.

### After rollout
- Review any policy whose **Messages scanned today** value stays at 0 or low, which Microsoft says may mean the policy is too strict.
- Watch the roadmap entry and Message center for the item's removal or a replacement item.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Membership of the Communication Compliance role groups, which decides who can open the solution and its Policies page</strong><br><small>Tenant</small><br><small class="controls__note">Role group changes can take up to 30 minutes to apply. Identity and Member are listed as applicable to Security &amp; Compliance in the cmdlet reference.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/communication-compliance-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Membership of the Communication Compliance role groups is the only control that bears on this item, because the counts appear on a page inside the solution. The permissions page says role group changes can take up to 30 minutes to apply. The Communication Compliance and Communication Compliance Admins role groups configure policies and settings; the Analysts and Investigators role groups access and investigate alerts. Admin units assigned to role-group members limit the Policies page to the policies those members are scoped for (see the Microsoft Purview admin units page linked from the permissions page).

## Open questions

- When will Microsoft remove item 172016 from the roadmap, and why does the record still show Launched? Watch the roadmap entry.
- Will a replacement item bring real-time scanning progress to the Communication Compliance home page? Watch Message center and the Investigate and remediate Communication Compliance alerts page.
- Does **Messages scanned today** count parent messages only, or also attachments and images processed as child items? The Learn page describes it as the total number of messages scanned.

<!-- rationale
risk: Low. The roadmap item is being withdrawn, and what it described was read-only counts on a page that only Communication Compliance role holders open.
cost: None. The item is being withdrawn; the Policies page counts that exist today are part of Communication Compliance, which the Microsoft Purview service description lists as included in plans such as Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5.
impact: Low. Only compliance administrators, analysts and investigators who track the roadmap or use the Communication Compliance Policies page would notice.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance guidance: At rollout; Governance controls / role: Role-group membership decides who can open policy alerts, and Analysts and Investigators can access and investigate alerts without a stated further condition. | Found: To view and act on alerts, assign users the following permissions: - The Communication Compliance Analysts or the Communication Compliance Investigators role group - Reviewer in the policy that is associated with the alert | Fix: Replace the At rollout bullet with "Check membership of the Communication Compliance role groups to review solution access." Replace the alert-access clause in Governance controls with "To view and act on alerts, the investigation page requires the Communication Compliance Analysts or Communication Compliance Investigators role group and reviewer assignment in the policy associated with the alert." The source is https://learn.microsoft.com/purview/communication-compliance-investigate-remediate. | Source: https://learn.microsoft.com/purview/communication-compliance-investigate-remediate
- [contradicted, blocker] Governance controls: opening sentence / applicability: Membership of the Communication Compliance role groups is the only control that bears on the displayed counts. | Found: If your role group is scoped by one or more admin units, you see a message at the top of the page that you can only view and manage the policies that you're scoped for. | Fix: Remove the sentence "Membership of the Communication Compliance role groups is the only control that bears on this item, because the counts appear on a page inside the solution." The existing paragraph already describes administrative-unit scoping, which also restricts policy visibility. | Source: https://learn.microsoft.com/purview/communication-compliance-investigate-remediate
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Roles / role: The permissions page lists the six stated roles and role groups as making Communication Compliance available as a menu option. | Found: To make Communication Compliance available as a menu option in Microsoft Purview portal and to continue with these configuration steps, you must be assigned to one of the following roles or role groups: | Fix: Keep the attributed list, but add: "The Learn overview separately says that, by default, Global Administrators don't have access to Communication Compliance features." Cite https://learn.microsoft.com/purview/communication-compliance#workflow, whose excerpt states that qualification; the two Learn pages disagree. | Source: https://learn.microsoft.com/purview/communication-compliance-permissions
-->
