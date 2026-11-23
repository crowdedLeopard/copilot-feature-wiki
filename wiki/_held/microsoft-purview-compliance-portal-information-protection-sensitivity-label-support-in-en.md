---
title: "Viva Engage: sensitivity labels for communities (Microsoft Purview)"
slug: "microsoft-purview-compliance-portal-information-protection-sensitivity-label-support-in-en"
roadmapId: 491918
topic: "governance"
products: ["Microsoft Purview"]
summary: "Viva Engage communities can carry Microsoft Purview sensitivity labels that set privacy and guest access. Admins must enable labels for containers and publish them before communities can use them."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2025"
previewDate: "June CY2025"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Manual Sensitivity Labeling as Included in the plans it names; the same page says sensitivity labeling, including automatic labeling, requires Microsoft 365 E5 or IPG. Entra ID P1 is needed to configure group labels. The Engage page names no licence."
audiences: ["m365-admin","compliance","security","service-owner"]
tags: ["viva-engage","sensitivity-labels","purview","information-protection","governance"]
sources:
  - title: "Microsoft 365 Roadmap 491918"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=491918"
    kind: "roadmap"
  - title: "Sensitivity labels in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/manage-engage-communities/community-sensitivity-labeling"
    kind: "learn"
  - title: "Use sensitivity labels to protect collaborative workspaces (groups and sites)"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Get started with sensitivity labels"
    url: "https://learn.microsoft.com/purview/get-started-with-sensitivity-labels"
    kind: "learn"
  - title: "Assign sensitivity labels to Microsoft 365 groups in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/users/groups-assign-sensitivity-labels"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "docs"
  - title: "New-Label"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-label"
    kind: "learn"
  - title: "New-LabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-labelpolicy"
    kind: "learn"
videos: []
related: ["sensitivity-labels","microsoft-purview-information-protection-sensitivity-labels-for-microsoft-entra-security-g","microsoft-purview-compliance-portal-information-protection-sensitivity-label-grouping-mode"]
controls:
  - governs: "Whether sensitivity labels can be applied to Microsoft 365 groups and the containers built on them"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Update-MgBetaDirectorySetting -DirectorySettingId $grpUnifiedSetting.Id -BodyParameter $params"
      docs: "https://learn.microsoft.com/entra/identity/users/groups-assign-sensitivity-labels"
    note: "The body sets EnableMIPLabels to True. Needs Entra ID P1. Labels also need Execute-AzureAdLabelSync in Security & Compliance PowerShell."
  - governs: "Privacy and guest access that a label applies to communities (label scope Groups & sites)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "New-Label -Name <name> -DisplayName <display name> -Tooltip <tooltip> -SiteAndGroupProtectionEnabled $true"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-label"
    note: "In the label wizard, select Groups & sites for the label's scope, then set Privacy and External user access. Security & Compliance PowerShell only."
  - governs: "Which users and groups can select the labels, and the default label for new containers"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "New-LabelPolicy -Name <policy name> -Labels <label names>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-labelpolicy"
    note: "The wizard selects the users and groups. Policy settings for groups and sites appear only when the published labels have that scope."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-16T22:57:03"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: Learn documents sensitivity labels for Viva Engage communities; the roadmap status is Launched."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 65
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "a00209db4f9bd77fab272b6298eee3e8"
---

## What's changing

Microsoft's roadmap item says organisations can now manually apply Microsoft Purview Information Protection sensitivity labels in Engage. Admins create labels and configure label publishing policies to decide which users and groups can manually label content in Engage, and end users can apply labels to Engage communities, which classifies and protects them through privacy and external user access controls.

Microsoft Learn documents this on its page for Viva Engage. Labels configured with their policies in the Microsoft Purview portal can be applied to communities. An admin can choose a default label for Engage communities in the label policy settings, and that default takes precedence over the default label for sites, so Engage can start more open than SharePoint. When someone creates a community the default label applies; they can pick another label from the list but cannot create labels. Community admins can change a community's label from its Settings, and the label appears in the community banner.

The label's settings do the protecting. A label with Privacy set to Public or Private sets and locks the community's privacy until the label is removed, and the External user access setting controls whether guests can be added: communities created with a label that doesn’t allow guest access are only available to users in your organisation. Microsoft's container page also says items inside a labelled container do not inherit the label, so content markings and encryption are not applied to them by the container label.

The roadmap record gives the status as Launched, with a preview date of June CY2025 and a target date of September CY2025. It lists the release phases General Availability and Preview, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. For Engage, the Learn page says PowerShell cmdlets don't directly support sensitivity labels, and offers a workaround of labelling the SharePoint site connected to a community.

## Why it matters

This gives administrators one setting, the sensitivity label, to decide community privacy and guest access in step with Teams, Microsoft 365 groups and SharePoint sites. Microsoft's Engage page describes Engage as a public-first platform in many organisations, so the choice that matters most is the Engage default label: it is the privacy and guest setting every new community starts with.

If nobody acts, Microsoft's pages say labels are not available to select until they are published, and that container label settings cannot be configured until labels are enabled for containers. On those pages a label reaches Engage communities only after an admin has enabled and published it. Whether a tenant that already published container labels sees them in Engage without further steps is not stated (see Open questions).

## Risk assessment

**Data exposure**
- A label's Privacy and External user access settings decide who can reach a community. Learn says to keep Public if you want anyone in your organisation to access the container, and its Engage example sets a Public label as the Engage default, so choose that default deliberately. The label controls are the rows for labels and the publishing policy in the controls table.
- Labelling a community does not label what is posted in it: Learn says items in these containers do not inherit the labels, so content markings and encryption need item-level labels (see [sensitivity labels](/concepts/sensitivity-labels/)).

**Security & identity**
- Guest access follows the label. If you later clear External user access in a label, Learn says the new setting applies to new users but not to existing users, so guests already in a community keep access.
- Learn warns that some label options, such as external sharing and authentication context settings for SharePoint sites, extend settings that are otherwise restricted to administrators to site owners. That matters only if the same label also sets them.

**Autonomy & actions**
- The default label is applied when a community is created, and the person creating it can choose another label from the list. Community admins can change the label later from the community's Settings.

**Change & support**
- Allow 24 hours for label and policy changes to propagate before troubleshooting. Learn advises against changing a label's site and group settings once it is applied to teams, groups or sites.
- Learn says deleting a label with site and group settings that is still in a label policy can cause creation failures for new teams, groups and sites. Remove it from policies and wait at least one hour first.
- For Engage, Learn says PowerShell cmdlets don't directly support sensitivity labels, so scripted bulk labelling of communities goes through the connected SharePoint site.

## Cost and licensing

A user needs a licence that includes sensitivity labelling. The Microsoft Purview service description lists Manual Sensitivity Labeling as Included for Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium, OneDrive for Business (Plan 2), Enterprise Mobility + Security E3/E5, Office 365 E5/A5/E3/A3, and AIP Plan 1 and Plan 2. The same page says sensitivity labeling, including automatic or policy-based labeling, requires a Microsoft 365 E5 licence or Microsoft 365 Information Protection and Governance (IPG). Check which statement applies to your plans. Admins also need a licence to manage sensitivity labels.

Configuring labels for Microsoft 365 groups needs at least one active Microsoft Entra ID P1 licence in the tenant. The Viva Engage page names no licence. The indirect cost is admin time to design labels, pilot them and brief community admins.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform. Who can pick a label depends on the publishing policy: users assigned a policy that includes the label can select it for sites and groups.

To create and configure labels and policies, admins need Microsoft Purview portal permissions, for example the Compliance Data Administrator, Compliance Administrator or Security Administrator role group, or a custom role group with the Sensitivity Label Administrator role. These permissions are not required to apply labels. Community admins change a community's label from its Settings.

Learn lists these conditions for labelling Microsoft 365 groups: the label's scope includes Groups & sites, the label is published, EnableMIPLabels is True, labels are synchronised to Microsoft Entra ID with Execute-AzureAdLabelSync (up to 24 hours), and the tenant has an active Entra ID P1 licence.

## Governance guidance

### Before rollout
- Check whether sensitivity labels are already enabled for containers in your tenant by reading the EnableMIPLabels setting (first row of the controls table); it is a prerequisite for labelling communities.
- Decide the Privacy and External user access settings for each label that has the Groups & sites scope, and choose which label is the Engage default and which is the SharePoint site default (second row).
- Pilot with a label policy that applies to a few test users, wait for replication, then create a test community with the label. Learn's pilot steps use a team, group or SharePoint site, so adapt them for Engage.

### At rollout
- Publish the label policy to the intended users and groups (third row). Learn recommends groups rather than individual users for lower maintenance.
- Wait 24 hours for propagation before troubleshooting missing labels.
- Tell community admins that a label's Public or Private privacy setting locks the community's privacy until the label is removed.

### After rollout
- Avoid changing the site and group settings of a label once communities carry it; if you must, wait at least 24 hours and check a labelled community.
- Review guest membership of existing communities directly after tightening External user access, because the new setting does not remove existing guests.
- Remove a label from every policy and wait at least one hour before deleting it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether sensitivity labels can be applied to Microsoft 365 groups and the containers built on them</strong><br><small>Tenant</small><br><small class="controls__note">The body sets EnableMIPLabels to True. Needs Entra ID P1. Labels also need Execute-AzureAdLabelSync in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgBetaDirectorySetting -DirectorySettingId $grpUnifiedSetting.Id -BodyParameter $params</code> <a href="https://learn.microsoft.com/entra/identity/users/groups-assign-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Privacy and guest access that a label applies to communities (label scope Groups &amp; sites)</strong><br><small>Tenant</small><br><small class="controls__note">In the label wizard, select Groups &amp; sites for the label's scope, then set Privacy and External user access. Security &amp; Compliance PowerShell only.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-Label -Name &lt;name&gt; -DisplayName &lt;display name&gt; -Tooltip &lt;tooltip&gt; -SiteAndGroupProtectionEnabled $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups can select the labels, and the default label for new containers</strong><br><small>Group</small><br><small class="controls__note">The wizard selects the users and groups. Policy settings for groups and sites appear only when the published labels have that scope.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-LabelPolicy -Name &lt;policy name&gt; -Labels &lt;label names&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-labelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The first row is a tenant prerequisite, the second sets what a label enforces (privacy and guest access), and the third decides who can select the label and which label is the default. The Learn page for labels in groups and sites says container settings can be seen but not configured until labels are enabled for containers.

Community admins change a community's label inside the community: open it, select the More menu (...), then choose Settings. For Engage, Learn says PowerShell cmdlets don't directly support sensitivity labels; the cmdlets in the table create labels and policies and do not label communities.

## Open questions

- Does a tenant that has already enabled labels for containers and published labels with the Groups & sites scope see them in Engage without further steps? Watch the Viva Engage sensitivity labels page and Message center.
- Which label policy setting names the Engage default label, and how does it relate to the Apply this label by default to groups and sites setting? Watch the Viva Engage page and the label policy documentation.
- What happens to existing Engage communities that have no label when a policy with an Engage default is published? Watch the Viva Engage page.
- Which audit events record a label being applied to or changed on an Engage community? Watch the audit log activities reference.
- Is any licence specific to labelling Engage communities published beyond the Purview service description's general table? Watch the service description.

<!-- rationale
risk: Low. Microsoft's pages say labels cannot be selected until an admin publishes them, so exposure rests on label design: a label sets and locks community privacy and guest access, so a poor Engage default label affects every new community.
cost: Low. The Purview service description lists Manual Sensitivity Labeling as Included in the plans it names, and Microsoft Entra ID P1 is needed to configure group labels; the cost to plan for is admin time. The Engage page names no licence.
impact: Medium. Community admins and anyone creating a Viva Engage community see the label choices and the default label; members see the label in the community banner.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api; Governance controls table / command: New-Label -Name <name> -DisplayName <display name> -Tooltip <tooltip> -SiteAndGroupProtectionEnabled $true sets the privacy and guest access enforced by a label. | Found: The SiteAndGroupProtectionEnabled parameter enables or disables the Site and Group Protection action for the label. [...] The SiteAndGroupProtectionAllowAccessToGuestUsers parameter enables or disables access to guest users. | Fix: Replace controls[1].api.call with 'New-Label -Name <name> -DisplayName <display name> -Tooltip <tooltip> -ContentType "Site, UnifiedGroup" -SiteAndGroupProtectionEnabled $true -SiteAndGroupProtectionPrivacy <Public or Private> -SiteAndGroupProtectionAllowAccessToGuestUsers <Boolean>'. The cited reference documents Site and UnifiedGroup as combinable ContentType values, Public and Private as privacy values, and $true/$false for guest access. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-label
- [contradicted, blocker] controls[2].api; Governance controls table / command: New-LabelPolicy -Name <policy name> -Labels <label names> selects which users and groups can use labels and the default label for new containers. | Found: This example creates the sensitivity label policy named Research and Development that contains sensitivity labels named R and D and R and D Management. [...] The Labels parameter specifies the sensitivity labels that are associated with the policy. | Fix: Keep the call but narrow controls[2].governs to 'Labels included in a publishing policy'. Replace its note with 'The call creates a policy containing the named labels; it does not select recipients or a container default. In the UI wizard, select users and groups; policy settings match the scope of the selected labels.' Replace the prose saying the third row decides recipients and the default with 'The third row creates the publishing policy; its UI wizard selects recipients and policy settings.' The reference documents no container-default setting for this call. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-labelpolicy
- [contradicted, blocker] Why it matters; Open questions: first question / absence: Microsoft does not state whether tenants with already-enabled, published container labels can use them in Engage without further enablement steps. | Found: If you haven't yet enabled sensitivity labels for containers, do the following set of steps as a one-time procedure: [...] After you enable and configure sensitivity labels for containers, users can additionally see and apply sensitivity labels to containers that support them. | Fix: Replace the final sentence of Why it matters with 'Container label enablement is a one-time procedure; after enablement and configuration, users can apply labels to supported containers, including Viva Engage communities.' Remove the first Open questions bullet. The cited container page explicitly includes Viva Engage in this reach; do not present shared container enablement as needing an unconfirmed Engage-specific repeat. | Source: https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Microsoft Purview portal > Solutions > Information Protection > Sensitivity labels leads to the labels used to configure community privacy and guest access. | Found: Sign in to the Microsoft Purview portal > Solutions > Information Protection > Sensitivity labels | Fix: The path stops on the correct labels page. Extend it for classic labels to 'Solutions > Information Protection > Sensitivity labels > + Create a label > Define the scope for this label > Groups & sites > Define protection settings for groups and sites > Privacy and external user access settings > Privacy and external user access'. For the modern scheme, replace '+ Create a label' with '+ Create > Label'. Keep the note identifying Privacy and External user access as the settings, using https://learn.microsoft.com/purview/create-sensitivity-labels and https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Microsoft Purview portal > Solutions > Information Protection > Publishing policies leads to label publishing policies. | Found: Sign in to the Microsoft Purview portal > Solutions > Information Protection > Publishing policies. On the Label policies page, select Publish label to start the Create policy configuration. | Fix: Extend the path to 'Solutions > Information Protection > Publishing policies > Publish label > Choose sensitivity labels to publish > Assign admin units'. Retain the note that subsequent wizard prompts select users and groups and show policy settings matching the selected labels' scope; the cited page does not name every subsequent wizard page. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels
- [supported, minor] What's changing; Why it matters; summary / applicability: Sensitivity labels configured with policies in the Purview portal can be applied to Viva Engage communities. | Found: After you configure sensitivity labels with their associated policies in the Microsoft Purview portal, these labels can be applied to communities in your organization. | Fix: Add a source-disagreement note: 'The Viva Engage sensitivity labels page documents community labelling, although the Microsoft Viva compliance overview still says sensitivity labels are not supported in Viva Engage.' Cite https://learn.microsoft.com/viva/viva-compliance alongside the existing feature page; the overview's Microsoft Purview section says 'sensitivity labels and data loss prevention aren't supported'. | Source: https://learn.microsoft.com/viva/engage/manage-engage-communities/community-sensitivity-labeling
- [supported, minor] Governance controls; What's changing; Risk assessment: Autonomy; Scope / admin-path: Opening a community, selecting More (...) and choosing Settings reaches its sensitivity label settings. | Found: Open the community, select the More menu (...), and choose Settings. | Fix: Keep the route and append 'Then choose the labels in the Engage and site default dropdowns; the available choices depend on the configured policies.' The cited page continues beyond Settings to choosing labels in those two dropdowns. | Source: https://learn.microsoft.com/viva/engage/manage-engage-communities/community-sensitivity-labeling
- [supported, minor] Risk assessment: Change & support; Governance guidance: After rollout / behaviour: Microsoft advises not changing applied labels' site and group settings and, if changed, waiting at least 24 hours for replication. | Found: As a best practice, don't change the site and group settings for a sensitivity label after the label has been applied to teams, groups, or sites. If you do, remember to wait at least 24 hours for the changes to replicate to all containers that have the label applied. | Fix: Append 'The Entra group-label documentation differs: it says changes to published group settings are not automatically applied to labelled groups and require manually reapplying updates.' Cite the already-listed https://learn.microsoft.com/entra/identity/users/groups-assign-sensitivity-labels, whose troubleshooting section says 'those policy changes aren't automatically applied on the labeled groups'. | Source: https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites
- [contradicted, minor] Governance guidance: Before rollout, second bullet / consistency: The second controls row is the place to choose the Engage and SharePoint default labels. | Found: choose which label is the Engage default and which is the SharePoint site default (second row). Third row: Which users and groups can select the labels, and the default label for new containers | Fix: Change the end of that bullet to '(label settings: second row; default labels: the publishing-policy UI in the third row)'.
- [contradicted, minor] Governance guidance: After rollout, guest membership review / consistency: Every checklist control has a corresponding controls-table row. | Found: Review guest membership of existing communities directly after tightening External user access. The table covers container enablement, label settings and publishing policies, not reviewing existing community membership. | Fix: The After rollout step 'Review guest membership of existing communities directly after tightening External user access' names a membership-review control with no corresponding table row. This finding identifies the unmatched checklist step; it does not request an additional row.
-->
