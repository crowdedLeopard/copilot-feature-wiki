---
title: "Microsoft Purview: sync status for sensitivity label publishing policies"
slug: "microsoft-purview-information-protection-policy-sync-status-for-m365-label-publishing-poli"
roadmapId: 558687
topic: "governance"
products: ["Microsoft Purview"]
summary: "The Label policies page in the Microsoft Purview portal shows whether each sensitivity label publishing policy has finished syncing across Microsoft 365. Admins can use it to check policy distribution."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "March CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "none"
licensing:
  model: "included"
  notes: "Part of Microsoft Purview sensitivity labelling: the service description lists Manual Sensitivity Labeling as Included in plans such as Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium. No licence specific to the sync status is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","sensitivity-labels","information-protection","monitoring","diagnostics","powershell","role-groups"]
sources:
  - title: "Microsoft 365 Roadmap 558687"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558687"
    kind: "roadmap"
  - title: "What's new in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/whats-new"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Sensitivity labels are missing in Outlook, Outlook on the web, and other Office apps"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/sensitivity-labels/sensitivity-labels-missing"
    kind: "learn"
  - title: "Get started with sensitivity labels"
    url: "https://learn.microsoft.com/purview/get-started-with-sensitivity-labels"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Get-LabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-labelpolicy"
    kind: "learn"
  - title: "Set-LabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Who can open and manage sensitivity label policies (Purview role-group membership) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["sensitivity-labels","microsoft-purview-data-loss-prevention-reduce-policy-sync-status-sla-on-the-purview-ui-fro","role-groups","microsoft-purview-information-protection-auto-labeling-per-policy-coverage-report"]
controls:
  - governs: "Checking whether a label publishing policy has synced"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Get-LabelPolicy -Identity \"<policy name>\""
      docs: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/sensitivity-labels/sensitivity-labels-missing"
    note: "Portal sync status is in preview per What's new (May 2026). The cmdlet returns DistributionStatus; Success indicates distribution succeeded."
  - governs: "Retrying failed label publishing policy distribution to Exchange Online locations"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity \"<policy name>\" -RetryDistribution"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    note: "Security & Compliance PowerShell; RetryDistribution is its own parameter set. Locations whose initial distributions succeeded are excluded. Run only if necessary, for one policy at a time; this is not intended for every policy update."
  - governs: "Who can open and manage sensitivity label policies (Purview role-group membership)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Role groups: Information Protection, Information Protection Admins, Analysts, Investigators, Readers. Portal steps need the Role management role."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-07T23:01:01"
changes:
  - date: "2026-11-26"
    note: "New briefing: sync status for sensitivity label publishing policies on the Label policies page, with PowerShell checks and retry."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 44 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: the retry row and guidance now say RetryDistribution targets Exchange Online locations, one policy at a time; removed unsupported read-only and end-user statements."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 49 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 49
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "4b1e38cc2efdebd4a9c743e21f7f223c"
---

## What's changing

Microsoft Purview now shows administrators whether each sensitivity label publishing policy has finished syncing across Microsoft 365. The roadmap item states that admins can see the sync status of label publishing policies directly in the Purview portal, as confirmation that label policy changes have been fully applied across Microsoft 365 workloads.

Microsoft's [What's new in Microsoft Purview](https://learn.microsoft.com/purview/whats-new) page lists the change under May 2026 as **In preview**: the sync status appears on the **Label policies** page, which administrators reach through **Solutions** > **Information Protection** > **Publishing policies**. Microsoft Learn does not yet document which status values the page shows, where on the page they appear, or what each one means.

The roadmap record marks the item Launched, with a preview date of March CY2026 and a target date of April CY2026, and lists both General Availability and Preview as release phases. Microsoft's What's new page still describes it as a preview at the time of writing (November 2026). The record lists the Worldwide (Standard Multi-Tenant) cloud and the web platform.

## Why it matters

Label policy changes do not land at once. Microsoft's guidance is to allow 24 hours for labels and label policy settings to propagate, and changes that depend on new groups or group membership can take 24-48 hours. A per-policy sync status gives administrators a checkpoint before they tell users that a new label or a changed policy setting is ready, and before they start troubleshooting a label that users cannot see.

The roadmap item and the What's new entry describe the status as something admins can now see on the Label policies page, so it arrives without anyone switching it on. The decision for a service owner is whether to build the status view into the label change process.

## Risk assessment

**Data exposure**
- No change: the view reports on policy distribution, and neither the roadmap nor the What's new entry describes it reading or showing labelled content.

**Security & identity**
- Who can open the Label policies page follows the Microsoft Purview role groups for sensitivity labels (Information Protection, Information Protection Admins, Analysts, Investigators and Readers), or a custom role group with **Sensitivity Label Administrator** or **Sensitivity Label Reader**. Membership of those groups is the control (see the role-group row below).

**Autonomy & actions**
- No change: Microsoft describes the feature as visibility into when label policy updates are fully synced; neither source describes it taking any action on a policy.

**Change & support**
- The portal view is a preview on Microsoft Learn and its status values are not yet documented, so treat it as a guide rather than proof. The `DistributionStatus` property returned by `Get-LabelPolicy` is Microsoft's documented check: its troubleshooting article says a value of `Success` indicates the distribution is successful.

## Cost and licensing

**Licence.** The sync status is part of the Label policies page for sensitivity labels. The [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) lists **Manual Sensitivity Labeling** as Included in Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium, among other plans. The same page also states that sensitivity labeling, including automatic or policy-based labeling, requires a Microsoft 365 E5 licence or Microsoft 365 Information Protection and Governance (IPG), and that the administrator creating and managing Information Protection features must have the appropriate licences. The two statements sit side by side on that page; check which applies to your plans.

**Meter.** The service description publishes no separate licence, price or meter for the sync status.

**Indirect cost.** Admin time to check the status after each label policy change.

## Scope

- **Who sees it:** administrators who can open the Label policies page in the Microsoft Purview portal through the sensitivity label role groups.
- **What it covers:** sensitivity label publishing policies, the policies that publish labels and label settings to users and groups.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Platform:** web (Microsoft Purview portal).
- **Status:** Launched on the roadmap (release phases General Availability and Preview); listed as **In preview** on Microsoft's What's new page under May 2026.

## Governance guidance

### Before rollout
- Check which administrators hold the Information Protection role groups or Sensitivity Label Reader in Microsoft Purview portal > Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group, and remove read access nobody needs.
- Record the current `DistributionStatus` of each label publishing policy with `Get-LabelPolicy -Identity "<policy name>"` as a baseline.

### At rollout
- Open Solutions > Information Protection > Publishing policies after each label policy change and check the policy's sync status before announcing the change to users.
- Allow 24 hours, or 24-48 hours where a change depends on new groups or group membership, before treating a missing label as a fault.

### After rollout
- If a distribution retry to Exchange Online locations is necessary, run `Set-LabelPolicy -Identity "<policy name>" -RetryDistribution` for one policy at a time; locations whose initial distributions succeeded are excluded.
- Compare the portal status with `DistributionStatus` when users report missing labels, and note any disagreement in the support case.
- Watch the What's new page for the view moving out of preview and for documented status values.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Checking whether a label publishing policy has synced</strong><br><small>Tenant</small><br><small class="controls__note">Portal sync status is in preview per What's new (May 2026). The cmdlet returns DistributionStatus; Success indicates distribution succeeded.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-LabelPolicy -Identity &quot;&lt;policy name&gt;&quot;</code> <a href="https://learn.microsoft.com/troubleshoot/microsoft-365/purview/sensitivity-labels/sensitivity-labels-missing" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Retrying failed label publishing policy distribution to Exchange Online locations</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell; RetryDistribution is its own parameter set. Locations whose initial distributions succeeded are excluded. Run only if necessary, for one policy at a time; this is not intended for every policy update.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity &quot;&lt;policy name&gt;&quot; -RetryDistribution</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can open and manage sensitivity label policies (Purview role-group membership)</strong><br><small>Tenant</small><br><small class="controls__note">Role groups: Information Protection, Information Protection Admins, Analysts, Investigators, Readers. Portal steps need the Role management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft describes sync status as visibility into when label policy updates are fully synced across Microsoft 365. Roles: managing role-group membership in the portal needs an admin account assigned the **Role management** role. The PowerShell rows run in Security & Compliance PowerShell. The portal view is a preview on Microsoft Learn; `Get-LabelPolicy` and its `DistributionStatus` property are the documented way to check distribution today.

## Open questions

- Which status values does the Label policies page show, and what should an administrator do for each? Watch [Create and configure sensitivity labels and their policies](https://learn.microsoft.com/purview/create-sensitivity-labels).
- Does the portal sync status report the same result as the `DistributionStatus` property from `Get-LabelPolicy`?
- Does the status show each Microsoft 365 workload separately, or one overall value per policy?
- Will the Label policies page offer a way to retry a failed sync, alongside `Set-LabelPolicy -RetryDistribution`?
- When will Microsoft Learn mark the view generally available, given the roadmap already lists the item as Launched?

<!-- rationale
risk: Low. The change adds a status view for label publishing policies; neither the roadmap nor Microsoft Learn describes it reading content or changing any policy.
cost: Low. Microsoft publishes no separate licence or meter for the sync status; it sits on a page already covered by Microsoft Purview sensitivity labelling licences, so the only cost is admin time.
impact: Low. It is an administrator-facing status view for those who manage sensitivity labels in the Microsoft Purview portal.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: Before rollout, first bullet / admin-path: The path ending at Edit members of the role group is the route given for reviewing membership and removing unnecessary read access. | Found: On Edit members of the role group, select the check box for all users or groups you want to remove from the role group. ... Select Remove members, and then select Next. | Fix: For the removal instruction, extend the path to 'Microsoft Purview portal > Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Remove members', after selecting the members to remove, as documented at https://learn.microsoft.com/purview/purview-permissions. | Source: https://learn.microsoft.com/purview/purview-permissions
-->
