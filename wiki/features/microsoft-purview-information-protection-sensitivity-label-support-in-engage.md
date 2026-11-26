---
title: "Viva Engage: apply Microsoft Purview sensitivity labels to communities"
slug: "microsoft-purview-information-protection-sensitivity-label-support-in-engage"
roadmapId: 558684
topic: "governance"
products: ["Microsoft Purview"]
summary: "Engage community creators and community admins can apply Purview sensitivity labels that set a community's privacy and guest access. Admins choose which labels are published and can turn label selection off for public or private communities."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: "March CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Manual Sensitivity Labeling as included in Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium, Office 365 E5/A5/E3/A3 and other plans, but the same section says labelling requires Microsoft 365 E5 or IPG. Container labels need one Entra ID P1 licence."
audiences: ["m365-admin","compliance","service-owner","change-adoption"]
tags: ["sensitivity-labels","viva-engage","purview","information-protection","guest-access","microsoft-365-groups","privacy"]
sources:
  - title: "Microsoft Purview: Information Protection - Sensitivity label support in Engage"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558684"
    kind: "roadmap"
  - title: "Sensitivity labels in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/manage-engage-communities/community-sensitivity-labeling"
    kind: "learn"
  - title: "Enforce Microsoft 365 identity for Viva Engage users"
    url: "https://learn.microsoft.com/viva/engage/configure-your-viva-engage-network/enforce-office-365-identity"
    kind: "learn"
  - title: "Use sensitivity labels to protect collaborative workspaces (groups and sites)"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Learn about sensitivity labels"
    url: "https://learn.microsoft.com/purview/sensitivity-labels"
    kind: "learn"
  - title: "Assign sensitivity labels to Microsoft 365 groups in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/users/groups-assign-sensitivity-labels"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Which sensitivity labels a label policy publishes to its users and groups (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    kind: "learn"
  - title: "Privacy (public or private) a label sets and locks on a community (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-information-protection-sensitivity-label-support-in-en","sensitivity-labels","guest-access","microsoft-purview-information-protection-sensitivity-labels-for-microsoft-entra-security-g"]
controls:
  - governs: "Whether sensitivity labels are used when creating public or private Engage communities"
    scope: "tenant"
    ui:
      surface: "Viva Engage admin center"
      path: "Tenant settings > Sensitivity label management > Edit > Disable sensitivity labels for communities > Public or Private (or both)"
      docs: "https://learn.microsoft.com/viva/engage/configure-your-viva-engage-network/enforce-office-365-identity"
    api: null
    note: "Global Administrator or Yammer Administrator (Viva Engage admin). Choose Public, Private or both. Disabling doesn't remove labels already applied to communities."
  - governs: "Whether sensitivity labels can be applied to Microsoft 365 groups and other containers (tenant prerequisite)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Update-MgBetaDirectorySetting -DirectorySettingId $grpUnifiedSetting.Id -BodyParameter $params"
      docs: "https://learn.microsoft.com/entra/identity/users/groups-assign-sensitivity-labels"
    note: "$params sets EnableMIPLabels to True. Then run Execute-AzureAdLabelSync in Security & Compliance PowerShell. Needs at least one active Microsoft Entra ID P1 licence."
  - governs: "Which sensitivity labels a label policy publishes to its users and groups"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > Publish label > Choose sensitivity labels to publish"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity \"<policy name>\" -AddLabels \"<label>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    note: "Users and groups, and policy settings such as Apply this label by default to groups and sites, are chosen in the same Create policy configuration."
  - governs: "Privacy (public or private) a label sets and locks on a community"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > + Create > Label > Define the scope for this label > Groups & sites > Define protection settings for groups and sites > Privacy and external user access settings > Privacy"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites"
    api:
      kind: "powershell"
      call: "Set-Label -Identity \"<label>\" -SiteAndGroupProtectionPrivacy Private"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    note: "Valid values Public or Private. Path is the modern label scheme. Changes to a label in use take at least 24 hours to replicate."
  - governs: "Whether guests can be added to a community carrying the label"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > + Create > Label > Define the scope for this label > Groups & sites > Define protection settings for groups and sites > Privacy and external user access settings"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites"
    api:
      kind: "powershell"
      call: "Set-Label -Identity \"<label>\" -SiteAndGroupProtectionAllowAccessToGuestUsers $false"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    note: "The External users access setting. A change applies to new users, not existing guests."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-07T23:01:01"
changes:
  - date: "2026-11-26"
    note: "New briefing for roadmap item 558684: Purview sensitivity labels on Viva Engage communities, with the Engage, Entra and Purview controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected label testing waits (24 hours for a new label with Teams shared channel controls), completed the community label route and two admin paths, and removed the default-label checklist step."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 75 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 74
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "5cbfc4aa651ec13ca9157563196dfedb"
---

## What's changing

Viva Engage communities can carry a Microsoft Purview sensitivity label, chosen by hand when a community is created or later by a community admin. The label brings the privacy (public or private) and external user access settings configured in it, so classifying a community also decides who can reach it and whether people outside the organisation can be added.

Microsoft's [Engage page](https://learn.microsoft.com/viva/engage/manage-engage-communities/community-sensitivity-labeling) says that once labels and their policies are configured in the Microsoft Purview portal, they can be applied to communities. When a user creates a community, the default label applies automatically; the user can pick a different label from the list available to them but can't create labels. Community admins can change a community's label, and with it the privacy setting: open the community, select **More** > **Settings**, then choose a label from the available dropdown choices. The label then appears in the community banner. Admins can set a default label for Engage communities in the label policy, which the page says takes precedence over the default label for sites.

The roadmap item is **Launched**, with a preview date of March CY2026 and a general availability target of May CY2026. It lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform, and both Preview and General Availability as release phases.

## Why it matters

A community's label becomes a governance decision, not just a tag. Under Purview's rules for containers, a label set to **Public** or **Private** sets and locks the privacy of the container it is applied to until the label is removed, and Engage communities created with a label that doesn't allow guest access are only available to users in the organisation. Tenants that already use container labels for Teams and SharePoint should expect those labels in Engage: Purview lists Viva Engage communities among the containers where users can see and apply labels once labels for containers are enabled and configured.

In a tenant that has not enabled labels for containers, nothing reaches Engage users until an administrator enables label support for Microsoft 365 groups, synchronises labels to Microsoft Entra ID and publishes a label with the **Groups & sites** scope. The Engage page describes a more permissive Engage default label alongside a more restrictive default for SharePoint sites, so check which default your label policies give new communities before people start creating them.

## Risk assessment

**Data exposure**
- Purview describes a label with **Public** privacy as letting anyone in the organisation access the container it is applied to. A community holding sensitive discussion that gets such a label is open to the whole organisation. Control: the label's **Privacy** setting and the label policies that publish it.
- Purview states that items in labelled containers don't inherit the label, so content markings and encryption are not applied to content through the community's label.

**Security & identity**
- A label that doesn't allow guest access keeps people outside the organisation out of communities created with it. If **External users access** is changed on a label already in use, Purview says the new setting applies to new users but not existing users, so guests already added keep access.
- Label support for containers is a tenant-wide Microsoft Entra group setting (`EnableMIPLabels`); turning it on also makes labels available on team sites, Microsoft 365 groups, SharePoint sites and Loop workspaces.

**Autonomy & actions**
- Labels are applied by people. The one automatic step Microsoft describes is the default label applying when a community is created.

**Change & support**
- Community creators get a label choice, and community admins who change a label change the community's privacy. Expect questions when a label locks a privacy setting an owner wants to change.
- Before testing, Purview advises waiting at least one hour for a new label, or at least 24 hours if its configured settings include Teams shared channel controls, and at least 24 hours for an existing label.

## Cost and licensing

**Licence.** The [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) lists **Manual Sensitivity Labeling** as included in Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium, OneDrive for Business (Plan 2), Enterprise Mobility + Security E3/E5, Office 365 E5/A5/E3/A3 and AIP Plan 1 and Plan 2. The same section also states that sensitivity labelling, including automatic or policy-based labelling, requires a Microsoft 365 E5 licence or Microsoft 365 Information Protection and Governance (IPG). The two statements sit on one page; neither names Engage communities, and the service description publishes no Engage-specific licensing for this feature at the time of writing (November 2026).

**Tenant prerequisite.** Microsoft Entra ID's page on labelling Microsoft 365 groups says at least one active Microsoft Entra ID P1 licence must exist in the organisation to configure the feature.

**Indirect costs.** Admin time to design Groups & sites labels, run the Microsoft Graph PowerShell and Security & Compliance PowerShell steps, test with a pilot policy, and brief community admins.

## Scope

- **Who applies labels:** users creating communities (the default label, or another label available to them) and community admins, who can change a community's label. A label policy's scope decides which users can see and apply each label.
- **Who configures:** tenant admins create and publish labels in the Microsoft Purview portal. The Engage switch that disables labels for public or private communities can be changed by a Global Administrator or Yammer Administrator (Viva Engage admin).
- **Prerequisites:** label support enabled for Microsoft 365 groups (`EnableMIPLabels` set to `True`), labels synchronised to Microsoft Entra ID with `Execute-AzureAdLabelSync`, and labels created with the **Groups & sites** scope.
- **Clouds and platforms:** the roadmap item lists Worldwide (Standard Multi-Tenant) and Web.
- **Scripting:** the Engage page says PowerShell cmdlets don't directly support sensitivity labels for Engage communities, and gives labelling the SharePoint site connected to the community as the workaround, which updates the community's label.

## Governance guidance

### Before rollout
- Check whether `EnableMIPLabels` is already `True` in the tenant's Microsoft Entra group settings; if it is, the Groups & sites labels you publish today can be offered in Engage.
- Review the **Privacy** and **External users access** settings of every label with the **Groups & sites** scope, since on a community they set its privacy and whether guests can be added.
- Agree with the Viva Engage admin whether to use **Disable sensitivity labels for communities** for public communities, private communities or both while labels are designed.

### At rollout
- Publish new Groups & sites labels first in a label policy that covers a few test users, and create a test community with each. Wait at least one hour for a new label, or at least 24 hours if its configured settings include Teams shared channel controls; wait at least 24 hours for an existing label.
- Run `Execute-AzureAdLabelSync` in Security & Compliance PowerShell after enabling label support so labels reach Microsoft Entra ID.
- Tell community admins that changing a community's label changes its privacy, and that to set it they open the community, select **More** > **Settings**, then choose a label from the available dropdown choices.

### After rollout
- Avoid changing the group and site settings of a label already applied to communities; if guest access is tightened, remove existing guests separately, because the change does not apply to existing users.
- Remove a Groups & sites label from every label policy and wait at least one hour before deleting it; Purview warns that deleting a published label still in a policy can cause creation failures for new teams, groups and sites.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether sensitivity labels are used when creating public or private Engage communities</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator or Yammer Administrator (Viva Engage admin). Choose Public, Private or both. Disabling doesn't remove labels already applied to communities.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Tenant settings › Sensitivity label management › Edit › Disable sensitivity labels for communities › Public or Private (or both) <a href="https://learn.microsoft.com/viva/engage/configure-your-viva-engage-network/enforce-office-365-identity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether sensitivity labels can be applied to Microsoft 365 groups and other containers (tenant prerequisite)</strong><br><small>Tenant</small><br><small class="controls__note">$params sets EnableMIPLabels to True. Then run Execute-AzureAdLabelSync in Security &amp; Compliance PowerShell. Needs at least one active Microsoft Entra ID P1 licence.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgBetaDirectorySetting -DirectorySettingId $grpUnifiedSetting.Id -BodyParameter $params</code> <a href="https://learn.microsoft.com/entra/identity/users/groups-assign-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which sensitivity labels a label policy publishes to its users and groups</strong><br><small>Group</small><br><small class="controls__note">Users and groups, and policy settings such as Apply this label by default to groups and sites, are chosen in the same Create policy configuration.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › Publish label › Choose sensitivity labels to publish <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity &quot;&lt;policy name&gt;&quot; -AddLabels &quot;&lt;label&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Privacy (public or private) a label sets and locks on a community</strong><br><small class="controls__note">Valid values Public or Private. Path is the modern label scheme. Changes to a label in use take at least 24 hours to replicate.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › + Create › Label › Define the scope for this label › Groups &amp; sites › Define protection settings for groups and sites › Privacy and external user access settings › Privacy <a href="https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &quot;&lt;label&gt;&quot; -SiteAndGroupProtectionPrivacy Private</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether guests can be added to a community carrying the label</strong><br><small class="controls__note">The External users access setting. A change applies to new users, not existing guests.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › + Create › Label › Define the scope for this label › Groups &amp; sites › Define protection settings for groups and sites › Privacy and external user access settings <a href="https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &quot;&lt;label&gt;&quot; -SiteAndGroupProtectionAllowAccessToGuestUsers $false</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Three layers decide what happens in Engage. The Microsoft Entra group setting `EnableMIPLabels` turns label support on for containers across the tenant, not only Engage. Purview labels with the **Groups & sites** scope carry the privacy and guest settings. Label policies decide who sees which labels and the defaults, including a default label for Engage communities that the Engage page says takes precedence over the default for sites. The Engage **Disable sensitivity labels for communities** switch sits on top: Microsoft says that with labels disabled users can create communities without selecting a label, and that disabling doesn't remove labels already applied.

Roles: the Engage switch can be changed by a Global Administrator or Yammer Administrator (Viva Engage admin). The Entra steps connect to Microsoft Graph with the `Directory.ReadWrite.All` scope, and `Set-Label` and `Set-LabelPolicy` run in Security & Compliance PowerShell. Microsoft Learn documents no PowerShell or API for the Engage switch at the time of writing (November 2026).

## Open questions

- Do label changes on Engage communities appear among the audit log's sensitivity label activities, as Purview describes for sites and groups? Watch the Purview audit activities page.
- Will Microsoft document a PowerShell or Graph equivalent for the Engage **Disable sensitivity labels for communities** switch? Watch the Viva Engage admin documentation.
- When a label policy sets no default label for Engage communities, which label do new communities get? Watch the Engage sensitivity labels page.
- Which licence covers labelling Engage communities, given the service description's two statements (manual labelling included in E3-class plans; labelling requiring E5 or IPG)? Watch the Microsoft Purview service description.

<!-- rationale
risk: Medium. A label sets and locks a community's privacy and decides whether guests can be added, so a poorly configured Groups & sites label can open or close communities. The controls exist in Purview, Entra and Engage but need configuring.
cost: Low. Microsoft's Purview service description lists manual sensitivity labelling as included in Microsoft 365 E3 and E5 among other plans, though the same section says labelling requires E5 or IPG; container labels also need one Entra ID P1 licence in the tenant.
impact: Medium. People who create or administer Engage communities get a label choice that sets privacy, and members see the label in the community banner.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].note; Governance guidance: After rollout / date: Changes to a label already applied to containers take at least 24 hours to replicate. | Found: If you do, remember to wait at least 24 hours for the changes to replicate to all containers that have the label applied. | Fix: Add: 'The cited Entra guide gives different guidance for existing Microsoft 365 groups: changes to published label group settings are not automatically applied to labelled groups and require manual reapplication.' Cite https://learn.microsoft.com/entra/identity/users/groups-assign-sensitivity-labels#group-setting-changes-to-published-labels-arent-updated-on-the-groups. | Source: https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites
- [supported, minor] controls[4].ui; Governance controls table / admin-path: The guest-access route follows the modern label wizard to Privacy and external user access settings. | Found: If you selected Privacy and external user access settings, now configure the following settings: ... External user access: Control whether the owner can add guests to the container | Fix: Complete controls[4].ui.path as 'Solutions > Information Protection > Sensitivity labels > + Create > Label > Define the scope for this label > Groups & sites > Define protection settings for groups and sites > Privacy and external user access settings > External user access', using https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites. | Source: https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites
- [contradicted, minor] Governance guidance: At rollout and After rollout; Governance controls / consistency: The checklist names community label assignment and removal of existing guests as controls, but neither has a corresponding table row. | Found: to set it they open the community, select More > Settings ... remove existing guests separately ... Table rows cover label disablement, tenant enablement, publishing, privacy and guest admission, not community assignment or membership removal. | Fix: Remove the community-setting procedure from the At rollout checklist bullet, retaining 'Tell community admins that changing a community's label changes its privacy.' Replace 'if guest access is tightened, remove existing guests separately' with 'tightening guest access does not revoke existing guests' access'. No additional control rows are requested.
-->
