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
  - title: "Microsoft Viva - Compliance"
    url: "https://learn.microsoft.com/viva/viva-compliance"
    kind: "learn"
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
      call: "New-Label -Name <name> -ContentType \"Site, UnifiedGroup\" -SiteAndGroupProtectionEnabled $true -SiteAndGroupProtectionPrivacy <Public or Private> -SiteAndGroupProtectionAllowAccessToGuestUsers <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-label"
    note: "In the label wizard, select Groups & sites for the label's scope, then set Privacy and External user access. Security & Compliance PowerShell only."
  - governs: "Labels included in a publishing policy"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    api:
      kind: "powershell"
      call: "New-LabelPolicy -Name <policy name> -Labels <label names>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-labelpolicy"
    note: "The call creates a policy containing the named labels; it does not select recipients or a container default. In the UI wizard, select users and groups; policy settings match the scope of the selected labels."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-16T22:57:03"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: Learn documents sensitivity labels for Viva Engage communities; the roadmap status is Launched."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected the New-Label call and the publishing-policy row, which no longer claims a container default; noted that container labels are a one-time enablement and that the Viva compliance overview disagrees."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected the label-deletion guidance to include confirming the label is no longer visible before deleting it, and removed a default-label pointer to the publishing-policy row."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-23"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 76
  confirmed: 74
  unconfirmed: 0
  contradicted: 2
  attempts: 3
  hash: "fb36703e12ed21bb6028444a397856a8"
---

## What's changing

Microsoft's roadmap item says organisations can now manually apply Microsoft Purview Information Protection sensitivity labels in Engage. Admins create labels and configure label publishing policies to decide which users and groups can manually label content in Engage, and end users can apply labels to Engage communities, which classifies and protects them through privacy and external user access controls.

Microsoft Learn documents this on its page for Viva Engage. Labels configured with their policies in the Microsoft Purview portal can be applied to communities. An admin can choose a default label for Engage communities in the label policy settings, and that default takes precedence over the default label for sites, so Engage can start more open than SharePoint. When someone creates a community the default label applies; they can pick another label from the list but cannot create labels. Community admins can change a community's label from its Settings, and the label appears in the community banner.

The label's settings do the protecting. A label with Privacy set to Public or Private sets and locks the community's privacy until the label is removed, and the External user access setting controls whether guests can be added: communities created with a label that doesn’t allow guest access are only available to users in your organisation. Microsoft's container page also says items inside a labelled container do not inherit the label, so content markings and encryption are not applied to them by the container label.

The roadmap record gives the status as Launched, with a preview date of June CY2025 and a target date of September CY2025. It lists the release phases General Availability and Preview, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. For Engage, the Learn page says PowerShell cmdlets don't directly support sensitivity labels, and offers a workaround of labelling the SharePoint site connected to a community. The Viva Engage sensitivity labels page documents community labelling, although the Microsoft Viva compliance overview still says sensitivity labels are not supported in Viva Engage.

## Why it matters

This gives administrators one setting, the sensitivity label, to decide community privacy and guest access in step with Teams, Microsoft 365 groups and SharePoint sites. Microsoft's Engage page describes Engage as a public-first platform in many organisations, so the choice that matters most is the Engage default label: it is the privacy and guest setting every new community starts with.

If nobody acts, Microsoft's pages say labels are not available to select until they are published, and that container label settings cannot be configured until labels are enabled for containers. On those pages a label reaches Engage communities only after an admin has enabled and published it. Container label enablement is a one-time procedure; after enablement and configuration, users can apply labels to supported containers, including Viva Engage communities.

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
- Allow 24 hours for label and policy changes to propagate before troubleshooting. Learn advises against changing a label's site and group settings once it is applied to teams, groups or sites. The Entra group-label documentation differs: it says changes to published group settings are not automatically applied to labelled groups and require manually reapplying updates.
- Learn says deleting a label with site and group settings that is still in a label policy can cause creation failures for new teams, groups and sites. Remove the label from every label policy, wait at least one hour, then try creating a team, group, or site and confirm that the label is no longer visible. Delete the label only if it is no longer visible.
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
- Decide the Privacy and External user access settings for each label that has the Groups & sites scope, and choose which label is the Engage default and which is the SharePoint site default (label settings: second row).
- Pilot with a label policy that applies to a few test users, wait for replication, then create a test community with the label. Learn's pilot steps use a team, group or SharePoint site, so adapt them for Engage.

### At rollout
- Publish the label policy to the intended users and groups (third row). Learn recommends groups rather than individual users for lower maintenance.
- Wait 24 hours for propagation before troubleshooting missing labels.
- Tell community admins that a label's Public or Private privacy setting locks the community's privacy until the label is removed.

### After rollout
- Avoid changing the site and group settings of a label once communities carry it; if you must, wait at least 24 hours and check a labelled community.
- Remove the label from every label policy, wait at least one hour, then try creating a team, group, or site and confirm that the label is no longer visible. Delete the label only if it is no longer visible.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether sensitivity labels can be applied to Microsoft 365 groups and the containers built on them</strong><br><small>Tenant</small><br><small class="controls__note">The body sets EnableMIPLabels to True. Needs Entra ID P1. Labels also need Execute-AzureAdLabelSync in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgBetaDirectorySetting -DirectorySettingId $grpUnifiedSetting.Id -BodyParameter $params</code> <a href="https://learn.microsoft.com/entra/identity/users/groups-assign-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Privacy and guest access that a label applies to communities (label scope Groups &amp; sites)</strong><br><small>Tenant</small><br><small class="controls__note">In the label wizard, select Groups &amp; sites for the label's scope, then set Privacy and External user access. Security &amp; Compliance PowerShell only.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-Label -Name &lt;name&gt; -ContentType &quot;Site, UnifiedGroup&quot; -SiteAndGroupProtectionEnabled $true -SiteAndGroupProtectionPrivacy &lt;Public or Private&gt; -SiteAndGroupProtectionAllowAccessToGuestUsers &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Labels included in a publishing policy</strong><br><small>Group</small><br><small class="controls__note">The call creates a policy containing the named labels; it does not select recipients or a container default. In the UI wizard, select users and groups; policy settings match the scope of the selected labels.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-LabelPolicy -Name &lt;policy name&gt; -Labels &lt;label names&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-labelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The first row is a tenant prerequisite, the second sets what a label enforces (privacy and guest access), and the third creates the publishing policy; its UI wizard selects recipients and policy settings. The Learn page for labels in groups and sites says container settings can be seen but not configured until labels are enabled for containers.

Community admins change a community's label inside the community: open it, select the More menu (...), then choose Settings. Then choose the labels in the Engage and site default dropdowns; the available choices depend on the configured policies. For Engage, Learn says PowerShell cmdlets don't directly support sensitivity labels; the cmdlets in the table create labels and policies and do not label communities.

## Open questions

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
- [contradicted, blocker] Cost and licensing: Manual Sensitivity Labeling plan list / licensing: Manual Sensitivity Labeling is included for the listed Microsoft 365, OneDrive, EMS, Office 365 and AIP plans without stating the additional Standard/Plan 1 assignment requirement for Premium/Plan 2. | Found: A standard/Plan 1 license must be assigned in addition to the premium/P2 license for users to have access to sensitivity labeling for Information Protection for Office 365 and AIP, even if the premium licenses/Plan 2 are assigned. | Fix: Keep the plan list, but immediately append: 'For Information Protection for Office 365 and AIP, a Standard/Plan 1 licence must also be assigned alongside a Premium/Plan 2 licence; for example, an AIP P2 user must also have AIP P1 assigned.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui / admin-path: Microsoft Purview portal > Solutions > Information Protection > Sensitivity labels reaches the page for configuring labels. | Found: Sign in to the Microsoft Purview portal > Solutions > Information Protection > Sensitivity labels | Fix: The path is correct but stops on the labels page. For classic labels extend it to 'Solutions > Information Protection > Sensitivity labels > + Create a label > Define the scope for this label > Groups & sites > Define protection settings for groups and sites > Privacy and external user access settings > Privacy and external user access'. For modern labels use '+ Create > Label' instead of '+ Create a label'. These steps are documented by the cited create-sensitivity-labels page and https://learn.microsoft.com/purview/sensitivity-labels-teams-groups-sites; both are already cited. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels
- [supported, minor] controls[2].ui / admin-path: Microsoft Purview portal > Solutions > Information Protection > Publishing policies reaches the page for publishing policies. | Found: Sign in to the Microsoft Purview portal > Solutions > Information Protection > Publishing policies. On the Label policies page, select Publish label to start the Create policy configuration. | Fix: Extend the path to 'Solutions > Information Protection > Publishing policies > Publish label > Choose sensitivity labels to publish > Choose sensitivity labels to publish' to reach the selector for labels included in the policy, as documented at https://learn.microsoft.com/purview/create-sensitivity-labels. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist's instruction to choose Engage and SharePoint default labels is not represented by a matching controls-table row. | Found: Choose which label is the Engage default and which is the SharePoint site default (label settings: second row). ... Second row: Privacy and guest access ... Third row: Labels included in a publishing policy. | Fix: Remove 'and choose which label is the Engage default and which is the SharePoint site default' from the Before rollout checklist item. The existing second row governs label privacy and guest settings, not the policy's default-label selection; do not add a row.
-->
