---
kind: "concept"
title: "Microsoft Purview role groups: who can run which compliance and data governance tasks?"
slug: "role-groups"
summary: "Role groups are the sets of Microsoft Purview roles that administrators assign users and security groups to. They decide who can configure, investigate and view each Purview solution, for how long, and over which administrative units."
created: "2026-11-25"
updated: "2026-11-26"
version: 2
tags: ["role-groups","purview","admin-controls","least-privilege","administrative-units","powershell","insider-risk-management","governance"]
covers: []
sources:
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Administrative units in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/purview-admin-units"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "New-RoleGroup"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-rolegroup"
    kind: "learn"
  - title: "Set-RoleGroup"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-rolegroup"
    kind: "learn"
  - title: "Roles and role groups in Microsoft Defender for Office 365 and Microsoft Purview"
    url: "https://learn.microsoft.com/defender-office-365/scc-permissions"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
related: ["microsoft-purview-compliance-portal-admin-assignment-time-limit","microsoft-purview-role-groups-ui-enhancements","microsoft-purview-compliance-portal-information-protection-admin-unit-scoping-in-content-e","microsoft-purview-compliance-portal-expanding-access-to-diagnostics-to-compliance-administ","insider-risk-management","auditing","ediscovery"]
controls:
  - governs: "Who is a member of a built-in or custom Purview role group"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users or Choose groups"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member <mailbox-user-mail-user-or-mail-enabled-security-group>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Needs Role Management. Portal security groups: Microsoft 365 commercial cloud only. In the cloud, -Member takes mailbox users, mail users and mail-enabled security groups; plain security groups are on-premises Exchange only."
  - governs: "Who can view, create and change role groups (Organization Management, which holds Role Management)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > Organization Management > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Organization Management\" -Member <user>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Global administrators can also view role groups."
  - governs: "Which roles a custom role group holds"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > Create role group > Add roles to the role group > Choose roles"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "New-RoleGroup -Name \"<role-group-name>\" -Roles \"<role>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-rolegroup"
    note: "The Purview portal does not let you change a custom role group's name after creation."
  - governs: "Expiry date on a user's or security group's role group assignment"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > user or group > Edit expiration"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api: null
    note: "One day to two years. Not supported for eDiscovery Administrator or eDiscovery Manager."
  - governs: "Which administrative units limit a role group member's access"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > user or group > Assign admin units"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api: null
    note: "Applies only in solutions that support administrative units. An overlapping Entra role makes access unscoped."
  - governs: "Just-in-time activation for direct user assignments to a role group"
    scope: "user"
    ui: null
    api: null
    note: "Just-in-time access works through security groups under PIM for Groups assigned to the role group."
confidence: "high"
dependents: 11
changes:
  - date: "2026-11-25"
    note: "New concept page explaining Microsoft Purview role groups, their expiry and administrative-unit scoping, and where they are managed."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 70 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: the Add-RoleGroupMember member types, administrative-unit support (now includes audit-log search), the Role Management assignment and custom role group renaming; removed an unsupported claim and two checklist items with no control row."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 89 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 89
  confirmed: 88
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "3e41413554bdcef58dfa42358c34295a"
---

## What it is

A Microsoft Purview role group is a named set of roles; anyone added to the group gets every task those roles allow in the Microsoft Purview portal. A role grants permission for a set of tasks (the *Case Management* role, for example, lets users work with eDiscovery cases), and the portal uses the role-based access control (RBAC) model that most Microsoft 365 services use.

### How it works

- **Built-in role groups.** The portal includes default role groups for the tasks and functions of each compliance and governance solution, such as *Insider Risk Management*. Microsoft's general advice is to add individual users to these as needed. The full list of default groups and their roles is on [Roles and role groups in Microsoft Defender for Office 365 and Microsoft Purview](https://learn.microsoft.com/defender-office-365/scc-permissions).
- **Custom role groups.** An administrator can create a role group, choose its roles and members, and later change its description, roles and members. The Purview portal does not let you change a custom role group's name after creation. The [Set-RoleGroup](https://learn.microsoft.com/powershell/module/exchangepowershell/set-rolegroup) reference separately documents a -Name parameter for Security & Compliance PowerShell.
- **Members.** Users or security groups. Security groups are supported only in Microsoft 365 commercial cloud organisations.
- **Assignment options.** Each assignment can carry an expiry date, and can be limited to one or more administrative units (subsets of the directory defined in Microsoft Entra ID).
- **Who manages them.** Viewing, creating and changing role groups needs the *Role Management* role or the Global Administrator role. The permissions overview says Role Management is assigned only to Organization Management; the [roles reference](https://learn.microsoft.com/defender-office-365/scc-permissions) also lists Purview Administrators as a default assignment.

Role groups sit beside Microsoft Entra roles. The **Roles and scopes** area also shows Entra roles such as Compliance Administrator and Security Reader, each mapped to Purview role groups, and they are managed in Microsoft Entra rather than in Purview. Role groups cover only features in the Purview portal: some service-specific permissions, such as Exchange mail flow rules, are still granted in the Exchange admin center.

## Why it matters

Role groups decide who can read alerts, preview content, run investigations and change policies across Purview solutions, so their membership is the access review for most of the data security work described on pages such as [Insider Risk Management](/concepts/insider-risk-management/) and [eDiscovery](/concepts/ediscovery/). Microsoft recommends roles with the fewest permissions, and role groups are how that is done in Purview: a narrow built-in or custom group, scoped to administrative units and given an expiry, in place of a broad Entra role.

The scoping can be undone without anyone noticing. Where a user holds both an Entra role and a role group assignment scoped to an administrative unit, the Entra role takes precedence and the user's effective access is unscoped. Expiry and scoping are optional per-assignment settings, so an assignment made without them is organisation-wide and permanent until someone removes it.

## Cost and licensing

Microsoft publishes no separate charge for creating or assigning role groups. The licensing cost follows the people in them: the Microsoft Purview service description says any user benefiting from the service requires a licence, and lists users with a Purview role assigned for use in the Microsoft Purview portal as an example. The licence each solution needs is on the [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description).

Scoping role groups to administrative units has its own prerequisites: Microsoft Entra ID P1 or P2, and one of Microsoft 365 E5/A5/G5; Microsoft 365 E5/A5/G5/F5 Compliance or F5 Security & Compliance; Microsoft 365 E5/A5/G5/F5 Information Protection & Governance; or Microsoft 365 E5/A5/F5 Insider Risk Management.

## Risks and limits

- **Entra roles override scoping.** A user who also holds an overlapping Entra role, such as Compliance Administrator or Global Reader, gets unscoped access however their role group assignment is scoped.
- **Administrative-unit scoping is partial.** Support is solution-specific; the administrative-units page lists Data lifecycle management, DLP, Communication Compliance, Insider Risk Management, Records management and Sensitivity labeling, and also documents scoped audit-log search access. Microsoft Defender XDR supports administrative units for DLP alerts but not for Insider Risk Management alerts.
- **Expiry does not cover every group.** eDiscovery Administrator and eDiscovery Manager do not support automatic expiry. Expiry ranges from one day to two years.
- **Expiry is silent.** No notification is sent before permissions expire, and no audit record is generated when they do. Work already in progress at expiry is not affected.
- **Overlapping assignments keep access.** An individual and a security group assignment of the same role group each keep their own expiry, and access lasts while either is valid.
- **Direct assignments have no just-in-time activation.** Just-in-time access needs a security group under Privileged Identity Management (PIM) for Groups assigned to the role group.
- **Organization Management is the key group.** Its members hold Role Management and can change every other role group.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who is a member of a built-in or custom Purview role group</strong><br><small>Group</small><br><small class="controls__note">Needs Role Management. Portal security groups: Microsoft 365 commercial cloud only. In the cloud, -Member takes mailbox users, mail users and mail-enabled security groups; plain security groups are on-premises Exchange only.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users or Choose groups <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &lt;mailbox-user-mail-user-or-mail-enabled-security-group&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can view, create and change role groups (Organization Management, which holds Role Management)</strong><br><small>Tenant</small><br><small class="controls__note">Global administrators can also view role groups.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › Organization Management › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Organization Management&quot; -Member &lt;user&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which roles a custom role group holds</strong><br><small>Group</small><br><small class="controls__note">The Purview portal does not let you change a custom role group's name after creation.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › Create role group › Add roles to the role group › Choose roles <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RoleGroup -Name &quot;&lt;role-group-name&gt;&quot; -Roles &quot;&lt;role&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-rolegroup" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Expiry date on a user's or security group's role group assignment</strong><br><small>User</small><br><small class="controls__note">One day to two years. Not supported for eDiscovery Administrator or eDiscovery Manager.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › user or group › Edit expiration <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which administrative units limit a role group member's access</strong><br><small>User</small><br><small class="controls__note">Applies only in solutions that support administrative units. An overlapping Entra role makes access unscoped.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › user or group › Assign admin units <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Just-in-time activation for direct user assignments to a role group</strong><br><small>User</small><br><small class="controls__note">Just-in-time access works through security groups under PIM for Groups assigned to the role group.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Every control in the portal needs the *Role Management* role; in PowerShell, a user who is not in a role group's ManagedBy property needs Organization Management membership or the Role Management role to use `-BypassSecurityGroupManagerCheck`. The cmdlets run in Security & Compliance PowerShell, where the `-WhatIf` switch does not work.

Administrative units themselves are created and populated in Microsoft Entra ID, not in Purview; see the [administrative units page](https://learn.microsoft.com/purview/purview-admin-units). Entra roles shown under **Roles and scopes** are managed in Microsoft Entra.

The unified audit log records role group definitions being created, updated and deleted, user assignments being added and removed, and expiry dates being updated; see [Microsoft Purview Audit](/concepts/auditing/).

## What to check

- Review the members of Organization Management, since it holds Role Management.
- List users who hold both an Entra role and a scoped Purview role group assignment, and decide which access is intended.
- Check that scoped assignments are in solutions that support administrative units.
- Add expiry dates to temporary or project assignments, except in the eDiscovery groups that do not support them.

## Open questions

- Does Microsoft plan a PowerShell or API way to set expiry dates and administrative-unit scoping on role group assignments?
- Will automatic expiry be extended to the eDiscovery Administrator and eDiscovery Manager role groups?
- When security groups will be supported as members outside Microsoft 365 commercial cloud organisations is not published.

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: administrative units are populated in Entra, not Purview / behaviour: Administrative units are populated in Microsoft Entra ID, not in Purview. | Found: Microsoft Purview now supports adding SharePoint sites to administrative units. ... Within Administrative units, select an administrative unit and edit it to associate SharePoint sites to the administrative unit. | Fix: Replace the sentence with: 'Administrative units themselves are created in Microsoft Entra ID, and their user and group membership is managed there rather than in Purview; see the administrative units page.' This preserves the supported directory-resource guidance without incorrectly excluding the documented Purview SharePoint-site association control at https://learn.microsoft.com/purview/purview-admin-units. | Source: https://learn.microsoft.com/purview/purview-admin-units
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui / admin-path: Custom roles are chosen at Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > Create role group > Add roles to the role group > Choose roles. | Found: On Role groups for Microsoft Purview solutions, select Create role group. ... On Name the role group, enter a name for the custom role group in the Name field. ... On Add roles to the role group, select Choose roles. | Fix: Include the intervening wizard page: 'Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > Create role group > Name the role group > Add roles to the role group > Choose roles', as documented at https://learn.microsoft.com/purview/purview-permissions. | Source: https://learn.microsoft.com/purview/purview-permissions
- [supported, minor] controls[0].note / command: The cloud -Member types are mailbox users, mail users and mail-enabled security groups, with plain security groups listed only for on-premises Exchange. | Found: Mailbox users; Mail users; Mail-enabled security groups; Security groups (on-premises Exchange only). | Fix: Keep the reference-based restriction but add: 'Microsoft's PIM walkthrough separately documents Add-RoleGroupMember in Security & Compliance PowerShell with a Microsoft Entra security group, so these Microsoft pages disagree on plain security-group support.' Cite https://learn.microsoft.com/defender-office-365/pim-in-mdo-configure, which documents creating the Entra security group and then Add-RoleGroupMember "<Role Group Name>" -Member "<Azure Security Group>". | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember
-->
