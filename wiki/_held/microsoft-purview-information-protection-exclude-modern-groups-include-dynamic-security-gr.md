---
title: "Microsoft Purview: exclude Microsoft 365 groups and target dynamic and non-mail-enabled security groups in sensitivity label policies"
slug: "microsoft-purview-information-protection-exclude-modern-groups-include-dynamic-security-gr"
roadmapId: 558685
topic: "governance"
products: ["Microsoft Purview"]
summary: "Sensitivity label publishing policies can now exclude Microsoft 365 groups and target dynamic and non-mail-enabled security groups. Optional scoping change for Purview admins; no action unless you want to retarget label policies."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: "April CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Manual Sensitivity Labeling as included in Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium, Office 365 E5/A5/E3/A3 and other plans. No licence specific to this scoping option is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","sensitivity-labels","information-protection","microsoft-365-groups","entra-id","administrative-units","policy"]
sources:
  - title: "Microsoft 365 Roadmap 558685"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558685"
    kind: "roadmap"
  - title: "Learn about sensitivity labels"
    url: "https://learn.microsoft.com/purview/sensitivity-labels"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Get started with sensitivity labels"
    url: "https://learn.microsoft.com/purview/get-started-with-sensitivity-labels"
    kind: "learn"
  - title: "Set-LabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["sensitivity-labels","role-groups","microsoft-purview-information-protection-sensitivity-labels-for-microsoft-entra-security-g","microsoft-purview-compliance-portal-data-loss-prevention-m365-groups-scoping-in-teams-dlp"]
controls:
  - governs: "Which users and groups a sensitivity label policy is published to"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > policy > Edit Policy"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity \"<policy name>\" -AddExchangeLocation \"<mailbox>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    note: "Users and groups are chosen in the Edit Policy wizard. The cmdlet reference covers mailboxes, distribution groups and mail-enabled security groups."
  - governs: "Which Microsoft 365 groups are excluded from a label policy"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > policy > Edit Policy"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api: null
    note: "Exclusions are not supported by Azure Rights Management protection. AddModernGroupLocationException is listed in the reference as reserved for internal Microsoft use."
  - governs: "Which label policy applies when several cover the same user"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > policy > Actions"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity \"<policy name>\" -NextLabelPolicy \"<policy name>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    note: "Under Actions, choose one of the reordering options."
  - governs: "Which administrative units restrict a label policy"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > Publish label > Assign admin units"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity \"<policy name>\" -PolicyRBACScopes \"<administrative unit ObjectID>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    note: "Administrative units need Microsoft Entra ID P1 or P2."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-07T23:01:01"
changes:
  - date: "2026-11-26"
    note: "New briefing: label policy group exclusions and security-group targeting, with the Rights Management caveat and the Set-LabelPolicy parameters."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 57 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 53
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "415f5709a65c595830437981bdf6be0c"
---

## What's changing

Sensitivity label publishing policies (the policies that decide which users see which labels and which label policy settings apply to them) can now exclude Microsoft 365 groups and be scoped to dynamic and non-mail-enabled security groups. The roadmap item states this expands targeting "beyond individual users and mail enabled groups".

Microsoft Learn's overview of label policies says labels "can be published to include or exclude specific users and supported groups", and lists security groups (email-enabled or non-email-enabled), distribution groups and Microsoft 365 groups, which "can also have dynamic membership". The Learn pages name dynamic membership only for Microsoft 365 groups; they do not yet state support for dynamic security groups, which the roadmap item describes. Learn notes that when a user is removed from a group the policy targets, the label policy is automatically removed for that user, and that changes depending on group membership might take 24-48 hours to take effect.

Microsoft has not stated whether anything changes in existing label policies on arrival; no source says existing scopes are altered. The roadmap item lists the change as Launched, with a preview date of April CY2026 and a target of May CY2026, release phases General Availability and Preview, for the Worldwide (Standard Multi-Tenant) cloud on the web.

## Why it matters

Group-based targeting lowers the upkeep of label policies: a dynamic group can keep a policy aligned with directory attributes without manual membership changes, and an exclusion lets a broad policy skip a project's Microsoft 365 group instead of needing a second policy. The flip side is that policy scope now follows group membership rules that may be owned outside the compliance team, so a change to a group can change which labels and label policy settings a user gets.

The point most likely to be misread is protection. Learn states that Azure Rights Management does not support non-email-enabled security groups or exclusions for protection, so excluding a group from a policy, or scoping it to a non-mail-enabled security group, does not change who can open content a label has encrypted. If nobody acts, Microsoft has not stated that existing policies change.

## Risk assessment

**Data exposure**
- Scoping a policy to a non-mail-enabled security group or excluding a Microsoft 365 group changes who sees and can apply a label, not who can open encrypted content; access remains set by the label's encryption settings.

**Security & identity**
- Whoever can change a targeted group's membership in Microsoft Entra ID, including a dynamic group's membership rule, can move users into or out of a label policy. Check who holds that right before using such groups for policies that set default or mandatory labelling.

**Autonomy & actions**
- No change: the option configures policy targeting and acts on nothing by itself.

**Change & support**
- Learn says changes depending on group membership might take 24-48 hours, and a user removed from a targeted group loses that policy, so expect a delay before users see the new scope.
- Exclusions combined with several policies make it harder to predict which policy a user gets; review the label policy order (controls table).

## Cost and licensing

The Microsoft Purview service description lists **Manual Sensitivity Labeling** as included in Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium, OneDrive for Business (Plan 2), Enterprise Mobility + Security E3/E5, Office 365 E5/A5/E3/A3 and AIP Plan 1 and Plan 2. The same page also states that sensitivity labelling, "including automatic or policy-based labeling", requires a Microsoft 365 E5 licence or Microsoft 365 Information Protection and Governance (IPG), so the page reads two ways; check which statement applies to your plans. It also says the administrator configuring Information Protection features must have the appropriate licences.

Scoping a policy by administrative unit needs Microsoft Entra ID P1 or P2, according to the Set-LabelPolicy reference. The service description publishes no separate licence or charge for group exclusions or security-group targeting. The indirect cost is admin time to redesign scopes and test them.

## Scope

- **Who configures it:** members of the Information Protection role groups, a custom role group holding the Sensitivity Label Administrator role, or the Compliance Data Administrator, Compliance Administrator or Security Administrator role group (Get started with sensitivity labels).
- **Groups supported in label policy scope (Learn):** email-enabled and non-mail-enabled security groups, distribution groups, and Microsoft 365 groups, which can have dynamic membership. Dynamic security groups are named by the roadmap item but not yet by Learn.
- **Clouds:** Worldwide (Standard Multi-Tenant) on the roadmap record.
- **Platform:** web (Microsoft Purview portal).
- **Not covered:** Azure Rights Management protection, which does not support non-email-enabled security groups or exclusions.

## Governance guidance

### Before rollout
- List current label policies and their scopes in the Microsoft Purview portal under Publishing policies, and note which ones exist only to carve groups out of a broader policy.
- Identify which labels in each policy apply encryption, and confirm their encryption settings, not the policy scope, grant access to the right people.
- Confirm who can change the membership of any group you plan to target, including dynamic membership rules, in Microsoft Entra ID.

### At rollout
- Edit one test policy to exclude a pilot Microsoft 365 group or target a non-mail-enabled security group, and check the result for a member and a non-member after 24-48 hours.
- Review the label policy order after adding exclusions so the intended policy applies to users covered by more than one.
- Use Set-LabelPolicy for scripted scope changes to mailboxes and mail-enabled groups, and the portal for exclusions of Microsoft 365 groups.

### After rollout
- Recheck policy scope whenever a targeted group's membership rule changes, since users removed from the group lose that policy.
- Consolidate label policies that exclusions have made redundant.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups a sensitivity label policy is published to</strong><br><small>Group</small><br><small class="controls__note">Users and groups are chosen in the Edit Policy wizard. The cmdlet reference covers mailboxes, distribution groups and mail-enabled security groups.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › policy › Edit Policy <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity &quot;&lt;policy name&gt;&quot; -AddExchangeLocation &quot;&lt;mailbox&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Microsoft 365 groups are excluded from a label policy</strong><br><small>Group</small><br><small class="controls__note">Exclusions are not supported by Azure Rights Management protection. AddModernGroupLocationException is listed in the reference as reserved for internal Microsoft use.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › policy › Edit Policy <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which label policy applies when several cover the same user</strong><br><small>Tenant</small><br><small class="controls__note">Under Actions, choose one of the reordering options.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › policy › Actions <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity &quot;&lt;policy name&gt;&quot; -NextLabelPolicy &quot;&lt;policy name&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which administrative units restrict a label policy</strong><br><small>Group</small><br><small class="controls__note">Administrative units need Microsoft Entra ID P1 or P2.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › Publish label › Assign admin units <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity &quot;&lt;policy name&gt;&quot; -PolicyRBACScopes &quot;&lt;administrative unit ObjectID&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn's publishing steps say "Follow the prompts" after the admin units page, so the wizard page where users, groups and exclusions are chosen is not named there; open the policy with Edit Policy and continue through the wizard.

The Set-LabelPolicy reference lists an AddModernGroupLocationException parameter but describes it as reserved for internal Microsoft use, so it is not shown as the automation for excluding Microsoft 365 groups. The reference describes Exchange location values as mailboxes, distribution groups and mail-enabled security groups, and at the time of writing (November 2026) names no value for non-mail-enabled or dynamic security groups. The cmdlet runs in Security & Compliance PowerShell.

## Open questions

- Are dynamic security groups, which the roadmap item names, supported in label policy scope, given that Learn names dynamic membership only for Microsoft 365 groups? Watch the Create and configure sensitivity labels page.
- Will Set-LabelPolicy document a supported parameter for excluding Microsoft 365 groups and for targeting non-mail-enabled security groups?
- Which part of this change is still in preview, given the roadmap lists both General Availability and Preview?
- Which licensing statement in the Purview service description governs label policy scoping: the table that includes manual labelling in E3, or the sentence requiring E5 or IPG?

<!-- rationale
risk: Low. It only changes who sees which labels and policy settings; for labels that encrypt, Azure Rights Management does not support non-email-enabled security groups or exclusions, so policy scope does not decide access to protected content.
cost: Low. Manual sensitivity labelling is included in the plans the Microsoft Purview service description lists; the only new cost is admin time to redesign policy scopes. No charge specific to this option is published.
impact: Low. Purview administrators notice it when editing label policies; users only notice if an admin retargets a policy and their available labels or default label change.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] rationale: cost / cost: Admin time to redesign policy scopes is the only new cost. | Found: Using dynamic membership groups requires a Microsoft Entra ID P1 license or an Intune for Education license. | Fix: Replace 'the only new cost is admin time to redesign policy scopes' with 'the known indirect cost is admin time to redesign policy scopes; using dynamic membership groups requires Microsoft Entra ID P1 or Intune for Education'. Cite https://learn.microsoft.com/entra/identity/users/groups-create-rule. Keep cost low as a rating of known indirect effort, not a guarantee of no additional licensing. | Source: https://learn.microsoft.com/entra/identity/users/groups-create-rule
- [contradicted, blocker] controls[2].governs; Governance guidance: At rollout; Risk assessment: Change & support / behaviour: Policy order decides which label policy applies when several policies cover the same user. | Found: You can include a user in multiple label policies, and the user gets all the sensitivity labels and settings from those policies. If there's a conflict in settings from multiple policies, the settings from the policy with the highest priority (highest order number) is applied. | Fix: Replace controls[2].governs with 'Which label policy settings win when assigned policies conflict'. Replace the At rollout ordering bullet with 'Review label policy order after adding exclusions: users receive labels from all assigned policies, and the highest-priority policy wins for each conflicting setting.' Replace 'which policy a user gets' in Risk assessment with 'which policy settings win when assigned policies conflict'. Cite https://learn.microsoft.com/purview/sensitivity-labels#label-policy-priority-order-matters. | Source: https://learn.microsoft.com/purview/sensitivity-labels
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: Dynamic group membership can track directory attributes without manual membership changes. | Found: When an attribute changes for a user or device, all rules for dynamic membership groups in the organization are processed for changes. Users and devices are added or removed if they meet the conditions for a dynamic membership group. | Fix: Add https://learn.microsoft.com/entra/identity/users/groups-create-rule to sources for the dynamic membership mechanism. | Source: https://learn.microsoft.com/entra/identity/users/groups-create-rule
- [supported, minor] Why it matters / behaviour: Group membership can be managed outside the compliance team. | Found: This allows the day-to-day control of group membership to be delegated to team, project, or business owners who understand the business use for the group and can manage its membership. | Fix: Add https://learn.microsoft.com/microsoft-365/enterprise/manage-microsoft-365-groups?view=o365-worldwide to sources for delegated group membership management. | Source: https://learn.microsoft.com/microsoft-365/enterprise/manage-microsoft-365-groups?view=o365-worldwide
- [supported, minor] Why it matters; Risk assessment; Governance guidance; rationale: risk / behaviour: Publishing scope governs label visibility and application, separately from the encryption permissions governing access to protected content. | Found: Authorized users and groups for a label are different from the users assigned to Azure RMS for a protected (encrypted) label. | Fix: Add https://learn.microsoft.com/power-bi/guidance/powerbi-implementation-planning-info-protection to sources for the explicit distinction between publishing scope and encryption permissions. | Source: https://learn.microsoft.com/power-bi/guidance/powerbi-implementation-planning-info-protection
- [supported, minor] controls[1].api; Governance controls; Open questions / absence: No supported automation parameter for Microsoft 365 group exclusions is documented in the cmdlet references. | Found: Searched: 'Set-LabelPolicy New-LabelPolicy exclude Microsoft 365 groups ModernGroupLocationException PowerShell'; opened both references. AddModernGroupLocationException and ModernGroupLocationException are reserved for internal Microsoft use. | Fix: Keep api null, but add to the existing note: 'Create and configure sensitivity labels says all admin-center settings can be scripted, while the Set-LabelPolicy reference reserves this exclusion parameter for internal Microsoft use.' Cite https://learn.microsoft.com/purview/create-sensitivity-labels for the conflicting general statement.
- [supported, minor] controls[2].ui / admin-path: Microsoft Purview portal > Solutions > Information Protection > Publishing policies > policy > Actions reaches the reordering options. | Found: To change the order of a label policy, select ... for Actions, and then select one of the reordering options. | Fix: Extend the path to 'Solutions > Information Protection > Publishing policies > policy > Actions > Move up' and change the note to 'Choose Move up or Move down to reorder the policy.' Both options are named at https://learn.microsoft.com/purview/sensitivity-labels#label-policy-priority-order-matters. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels
- [supported, minor] controls[3].ui / admin-path: Microsoft Purview portal > Solutions > Information Protection > Publishing policies > Publish label > Assign admin units reaches administrative-unit scoping. | Found: On the Label policies page, select Publish label ... On the Choose sensitivity labels to publish page, select the Choose sensitivity labels to publish link. ... For the Assign admin units | Fix: Expand the path to 'Solutions > Information Protection > Publishing policies > Publish label > Choose sensitivity labels to publish > Choose sensitivity labels to publish > Assign admin units'. The omitted selection identifies the labels being published rather than a different policy type. Cite https://learn.microsoft.com/purview/create-sensitivity-labels. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist asks administrators to check label encryption settings and group membership-editing rights, but neither has a controls-table row. | Found: Checklist: 'confirm their encryption settings' and 'Confirm who can change the membership'. Table: publishing scope, group exclusions, policy order and administrative units only. | Fix: Remove the two Before rollout bullets beginning 'Identify which labels' and 'Confirm who can change'. These checklist steps have no corresponding controls-table rows. Do not add control rows.
- [contradicted, minor] rationale: impact / behaviour: Users only notice a change to their labels or default label if an administrator retargets a policy. | Found: However, if a user is removed from a group you specify, the label policy is automatically removed for that user. | Fix: Replace the impact rationale's second sentence with 'Users may notice changes to available labels or policy settings when an admin retargets a policy or a targeted group membership changes.' The group-removal behavior is documented at https://learn.microsoft.com/purview/create-sensitivity-labels. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels
-->
