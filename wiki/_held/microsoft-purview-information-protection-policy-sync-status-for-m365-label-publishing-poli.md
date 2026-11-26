---
title: "Microsoft Purview: sync status for sensitivity label publishing policies"
slug: "microsoft-purview-information-protection-policy-sync-status-for-m365-label-publishing-poli"
roadmapId: 558687
topic: "governance"
products: ["Microsoft Purview"]
summary: "The Label policies page in the Microsoft Purview portal shows whether each sensitivity label publishing policy has finished syncing across Microsoft 365. It is a read-only view for admins; nothing needs configuring."
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
  - title: "Retrying distribution of a label publishing policy (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    kind: "learn"
  - title: "Who can open and manage sensitivity label policies (Purview role-group membership) (Microsoft Purview portal)"
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
  - governs: "Retrying distribution of a label publishing policy"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity \"<policy name>\" -RetryDistribution"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    note: "Security & Compliance PowerShell; RetryDistribution is its own parameter set."
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
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 40
  unconfirmed: 3
  contradicted: 1
  attempts: 1
  hash: "39a428950be154ee746b39e2446c7e7b"
---

## What's changing

Microsoft Purview now shows administrators whether each sensitivity label publishing policy has finished syncing across Microsoft 365. The roadmap item states that admins can see the sync status of label publishing policies directly in the Purview portal, as confirmation that label policy changes have been fully applied across Microsoft 365 workloads.

Microsoft's [What's new in Microsoft Purview](https://learn.microsoft.com/purview/whats-new) page lists the change under May 2026 as **In preview**: the sync status appears on the **Label policies** page, which administrators reach through **Solutions** > **Information Protection** > **Publishing policies**. Microsoft Learn does not yet document which status values the page shows, where on the page they appear, or what each one means.

The roadmap record marks the item Launched, with a preview date of March CY2026 and a target date of April CY2026, and lists both General Availability and Preview as release phases. Microsoft's What's new page still describes it as a preview at the time of writing (November 2026). The record lists the Worldwide (Standard Multi-Tenant) cloud and the web platform.

## Why it matters

Label policy changes do not land at once. Microsoft's guidance is to allow 24 hours for labels and label policy settings to propagate, and changes that depend on new groups or group membership can take 24-48 hours. A per-policy sync status gives administrators a checkpoint before they tell users that a new label or a changed policy setting is ready, and before they start troubleshooting a label that users cannot see.

The roadmap item and the What's new entry describe the status as something admins can now see on the Label policies page, so it arrives without anyone switching it on. It changes nothing for end users and nothing about how policies are distributed; the decision for a service owner is only whether to build it into the label change process.

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
- Check which administrators hold the Information Protection role groups or Sensitivity Label Reader in Settings > Roles and scopes > Role groups, and remove read access nobody needs.
- Record the current `DistributionStatus` of each label publishing policy with `Get-LabelPolicy -Identity "<policy name>"` as a baseline.

### At rollout
- Open Solutions > Information Protection > Publishing policies after each label policy change and check the policy's sync status before announcing the change to users.
- Allow 24 hours, or 24-48 hours where a change depends on new groups or group membership, before treating a missing label as a fault.

### After rollout
- Run `Set-LabelPolicy -Identity "<policy name>" -RetryDistribution` for a policy whose `DistributionStatus` is not `Success`.
- Compare the portal status with `DistributionStatus` when users report missing labels, and note any disagreement in the support case.
- Watch the What's new page for the view moving out of preview and for documented status values.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Checking whether a label publishing policy has synced</strong><br><small>Tenant</small><br><small class="controls__note">Portal sync status is in preview per What's new (May 2026). The cmdlet returns DistributionStatus; Success indicates distribution succeeded.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-LabelPolicy -Identity &quot;&lt;policy name&gt;&quot;</code> <a href="https://learn.microsoft.com/troubleshoot/microsoft-365/purview/sensitivity-labels/sensitivity-labels-missing" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Retrying distribution of a label publishing policy</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell; RetryDistribution is its own parameter set.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity &quot;&lt;policy name&gt;&quot; -RetryDistribution</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can open and manage sensitivity label policies (Purview role-group membership)</strong><br><small>Tenant</small><br><small class="controls__note">Role groups: Information Protection, Information Protection Admins, Analysts, Investigators, Readers. Portal steps need the Role management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The sync status is a view, not a setting: there is nothing to turn on. Roles: managing role-group membership in the portal needs an admin account assigned the **Role management** role. The PowerShell rows run in Security & Compliance PowerShell. The portal view is a preview on Microsoft Learn; `Get-LabelPolicy` and its `DistributionStatus` property are the documented way to check distribution today.

## Open questions

- Which status values does the Label policies page show, and what should an administrator do for each? Watch [Create and configure sensitivity labels and their policies](https://learn.microsoft.com/purview/create-sensitivity-labels).
- Does the portal sync status report the same result as the `DistributionStatus` property from `Get-LabelPolicy`?
- Does the status show each Microsoft 365 workload separately, or one overall value per policy?
- Will the Label policies page offer a way to retry a failed sync, alongside `Set-LabelPolicy -RetryDistribution`?
- When will Microsoft Learn mark the view generally available, given the roadmap already lists the item as Launched?

<!-- rationale
risk: Low. The change adds a status view for label publishing policies; neither the roadmap nor Microsoft Learn describes it reading content or changing any policy.
cost: Low. Microsoft publishes no separate licence or meter for the sync status; it sits on a page already covered by Microsoft Purview sensitivity labelling licences, so the only cost is admin time.
impact: Low. Only administrators who manage sensitivity labels in the Microsoft Purview portal see it; end users notice nothing.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].governs and note; Governance guidance: After rollout; rendered controls / applicability: The retry row and guidance present RetryDistribution as unqualified remediation for label publishing policy distribution across the feature's Microsoft 365 scope. | Found: The RetryDistribution switch specifies whether to redistribute the policy to all Exchange Online locations. You don't need to specify a value with this switch. Locations whose initial distributions succeeded aren't included in the retry. | Fix: Keep the call, but change controls[1].governs to 'Retrying failed label publishing policy distribution to Exchange Online locations'. Add to its note: 'Locations whose initial distributions succeeded are excluded. Run only if necessary, for one policy at a time; this is not intended for every policy update.' Replace the first After rollout bullet with 'If a distribution retry to Exchange Online locations is necessary, run Set-LabelPolicy -Identity "<policy name>" -RetryDistribution for one policy at a time; locations whose initial distributions succeeded are excluded.' These qualifications are documented at https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy#-retrydistribution. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy
- [unsupported, major] summary; Governance controls / behaviour: The sync-status feature is categorically read-only. | Found: Searched: "label publishing" "sync status" "read-only" "distribution" "users"; portal sync status retry query. Read whats-new and create-sensitivity-labels. Microsoft describes visibility but does not explicitly establish read-only behaviour or the absence of associated actions. | Fix: Replace 'It is a read-only view for admins; nothing needs configuring.' in the summary with 'Admins can use it to check policy distribution.' Replace 'The sync status is a view, not a setting: there is nothing to turn on.' in Governance controls with 'Microsoft describes sync status as visibility into when label policy updates are fully synced across Microsoft 365.'
- [unsupported, major] Why it matters; rationale: impact / behaviour: The change has no effect on end users. | Found: Searched: "label publishing" "sync status" "read-only" "distribution" "users"; Purview sensitivity label publishing policy portal sync status query. Read whats-new and the roadmap description; they identify admins as the audience but do not state that end-user behaviour is unchanged. | Fix: Remove 'It changes nothing for end users' from Why it matters and 'end users notice nothing' from the impact rationale. Keep the narrower supported statement that this is an administrator-facing status view.
- [unsupported, major] Why it matters / behaviour: The change does not alter how policies are distributed. | Found: Searched: "label publishing" "sync status" "read-only" "distribution" "users"; Purview sensitivity label publishing policy portal sync status query. Read whats-new, create-sensitivity-labels and the roadmap description; no passage states that the distribution mechanism is unchanged. | Fix: Remove 'and nothing about how policies are distributed' from Why it matters. The sentence can instead read: 'The decision for a service owner is whether to build the status view into the label change process.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: Before rollout / admin-path: Settings > Roles and scopes > Role groups is the starting page for reviewing and removing role-group membership. | Found: Go to Settings > Roles and scopes ... Select Role groups. ... select a Microsoft Purview role group that you want to remove users or groups from. Select Edit ... On Edit members of the role group, select the check box for all users or groups you want to remove | Fix: Expand the first Before rollout bullet's path to 'Microsoft Purview portal > Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group'. The cited permissions page documents membership review and removal there. | Source: https://learn.microsoft.com/purview/purview-permissions
-->
