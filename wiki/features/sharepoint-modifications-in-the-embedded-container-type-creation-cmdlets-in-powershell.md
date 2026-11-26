---
title: "SharePoint Embedded: container type creation and billing split across two PowerShell cmdlets"
slug: "sharepoint-modifications-in-the-embedded-container-type-creation-cmdlets-in-powershell"
roadmapId: 472920
topic: "modern-work"
products: ["SharePoint"]
summary: "New-SPOContainerType creates a SharePoint Embedded container type; a separate Add-SPOContainerTypeBilling cmdlet attaches its Azure billing profile. Admins who script standard container types need to add the second step."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "January CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "consumption"
  notes: "SharePoint Embedded is a consumption-based, pay-as-you-go offering billed through an Azure subscription, with billing chosen per container type. Microsoft publishes no separate charge for the cmdlets themselves."
audiences: ["m365-admin","service-owner","finops"]
tags: ["sharepoint-embedded","sharepoint","powershell","pay-as-you-go","microsoft-graph"]
sources:
  - title: "Microsoft 365 Roadmap 472920"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=472920"
    kind: "roadmap"
  - title: "New-SPOContainerType"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/new-spocontainertype"
    kind: "learn"
  - title: "Add-SPOContainerTypeBilling"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/add-spocontainertypebilling"
    kind: "learn"
  - title: "Choose a billing model"
    url: "https://learn.microsoft.com/sharepoint/dev/embedded/plan/choose-billing-model"
    kind: "learn"
  - title: "Billing meters"
    url: "https://learn.microsoft.com/sharepoint/dev/embedded/reference/billing-meters"
    kind: "learn"
  - title: "Create apps in SharePoint admin center"
    url: "https://learn.microsoft.com/sharepoint/dev/embedded/admin/create-apps-sharepoint-admin-center"
    kind: "learn"
  - title: "Set up billing in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/sharepoint/dev/embedded/admin/setup-billing-microsoft-365-admin-center"
    kind: "learn"
  - title: "Admin overview"
    url: "https://learn.microsoft.com/sharepoint/dev/embedded/admin/admin-overview"
    kind: "learn"
  - title: "Create fileStorageContainerType"
    url: "https://learn.microsoft.com/graph/api/filestorage-post-containertypes"
    kind: "learn"
  - title: "fileStorageContainerType resource type"
    url: "https://learn.microsoft.com/graph/api/resources/filestoragecontainertype?view=graph-rest-1.0"
    kind: "learn"
  - title: "What is SharePoint Embedded?"
    url: "https://learn.microsoft.com/sharepoint/dev/embedded/overview"
    kind: "learn"
  - title: "Who holds the SharePoint Embedded Administrator role that runs both cmdlets (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments"
    kind: "learn"
videos: []
related: ["microsoft-purview-ediscovery-select-user-owned-sharepoint-embedded-container-as-a-data-sou","m365-paygo-consumption-based-meter-for-your-extra-sharepoint-storage-needs"]
controls:
  - governs: "Which billing model (standard or pass-through) a new container type uses"
    scope: "app"
    ui:
      surface: "SharePoint admin center"
      path: "SharePoint Embedded > Apps > + Create app > Billing type"
      docs: "https://learn.microsoft.com/sharepoint/dev/embedded/admin/create-apps-sharepoint-admin-center"
    api:
      kind: "powershell"
      call: "New-SPOContainerType -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId> -IsPassThroughBilling"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/new-spocontainertype"
    note: "SharePoint Embedded Administrator or Global Administrator. In the admin centre, User org is pass-through and Owner org is standard. The billing model can't be changed after creation."
  - governs: "Which Azure subscription, resource group and region a standard container type bills to"
    scope: "app"
    ui:
      surface: "SharePoint admin center"
      path: "SharePoint Embedded > Apps > + Create app > Billing type > Owner org > Billing subscription setup > Setup now"
      docs: "https://learn.microsoft.com/sharepoint/dev/embedded/admin/create-apps-sharepoint-admin-center"
    api:
      kind: "powershell"
      call: "Add-SPOContainerTypeBilling -ContainerTypeId <ContainerTypeId> -AzureSubscriptionId <AzureSubscriptionId> -ResourceGroup <ResourceGroup> -Region <Region>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/add-spocontainertypebilling"
    note: "SharePoint Embedded Administrator plus owner or contributor on the Azure subscription, with active time-bound permission on billing, and on the resource group. Setup later attaches billing from the Installed apps tab."
  - governs: "Pay-as-you-go billing for pass-through SharePoint Embedded apps in a consuming tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Setup > Files and Content > Automate Content with Microsoft Syntex > Go to Syntex settings > Syntex services for > Apps > SharePoint Embedded"
      docs: "https://learn.microsoft.com/sharepoint/dev/embedded/admin/setup-billing-microsoft-365-admin-center"
    api: null
    note: "Billing Administrator or Global Administrator, also requiring Owner or Contributor access to the billing Azure subscription. No user can access a pass-through app until billing is valid."
  - governs: "Who holds the SharePoint Embedded Administrator role that runs both cmdlets"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Roles > Manage roles > SharePoint Embedded Administrator"
      docs: "https://learn.microsoft.com/sharepoint/dev/embedded/admin/admin-overview"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments"
    note: "Assigned by a Global Administrator. The request body sets principalId, roleDefinitionId and directoryScopeId."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-26"
roadmapModified: "2025-01-04T00:00:04"
changes:
  - date: "2026-11-25"
    note: "New briefing: the container type creation and billing steps for SharePoint Embedded, with the admin centre and PowerShell routes for each billing model."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 66 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected the Azure permission prerequisites for Add-SPOContainerTypeBilling, container type owners and pass-through billing setup; narrowed the data exposure statement; added the Billing type step to the standard billing path."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 76 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 76
  confirmed: 74
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "13f03c1bd06c8776333b4c4ac895f1e0"
---

## What's changing

Creating a billed SharePoint Embedded container type in PowerShell becomes two steps. The roadmap item states that `New-SPOContainerType` will only create the container type, and that a new cmdlet, `Add-SPOContainerTypeBilling`, adds the billing profile to it. A container type is the definition a SharePoint Embedded app uses for its file containers; it carries the app's billing.

The SharePoint Online Management Shell reference already describes this behaviour. `New-SPOContainerType` creates a standard or trial container type, and for regular (standard) billing "the next step after creation is the addition of a billing profile using the Add-SPOContainerTypeBilling cmdlet". `Add-SPOContainerTypeBilling` attaches an Azure subscription ID, resource group and region to the container type ID. Two cases need no second step: `-IsPassThroughBilling` creates a container type billed to each consuming tenant, and `-TrialContainerType` creates a trial container type valid for 30 days with no billing profile.

The roadmap record lists the item as In development, targeted for January CY2025, for General Availability on Worldwide (Standard Multi-Tenant). Microsoft Learn documents the two-step process as current, so the record and Learn disagree on status. Microsoft has not stated from which version of the SharePoint Online Management Shell the split applies.

## Why it matters

Any script or deployment pipeline that creates standard container types with `New-SPOContainerType` alone produces a container type with no Azure billing profile. Microsoft's SharePoint admin center guidance treats an app whose billing status is Inactive as not ready for production use, so the visible symptom is an app that developers cannot put into service until someone runs the billing step.

The split also separates two permissions. Creating the container type needs the SharePoint Embedded Administrator role; attaching billing also needs owner or contributor permissions on the Azure subscription, with active time-bound permission on billing, and on the resource group. In many organisations those sit with different people, so plan who runs the second step. Microsoft has not stated what happens on arrival to scripts written for earlier module versions.

## Risk assessment

**Data exposure**
- The documented operations create a container type and attach its billing profile.

**Security & identity**
- `Add-SPOContainerTypeBilling` needs the SharePoint Embedded Administrator role plus owner or contributor permissions on the Azure subscription, with active time-bound permission on billing, and on the resource group. Giving a script account those Azure rights so it can run both steps widens what that account can change in Azure, so decide whether one account or two people run the steps.

**Autonomy & actions**
- No change: both cmdlets run only when an administrator calls them.

**Change & support**
- A standard container type created without the billing step has no billing profile. For apps in the SharePoint admin center, the Owned apps tab shows billing status, and Microsoft's guidance for an Inactive app is to complete billing setup before production use.
- The billing model is fixed at creation: switching between standard and pass-through means deleting and re-creating the container type, so a wrong choice in an updated script is costly to undo.

## Cost and licensing

**Licence.** SharePoint Embedded is a consumption-based, pay-as-you-go offering, billed through an Azure subscription, and billing is selected per container type ([Choose a billing model](https://learn.microsoft.com/sharepoint/dev/embedded/plan/choose-billing-model)). The billing setup requires an existing SharePoint tenant and an Azure subscription with a resource group.

**Meters.** SharePoint Embedded has four generally available meters (storage, archived storage, API transactions, egress) plus a private preview agent message meter, and standard and pass-through container types use the same meters ([Billing meters](https://learn.microsoft.com/sharepoint/dev/embedded/reference/billing-meters)). Charges appear in Azure Cost Management for the linked subscription. With standard billing, the tenant that owns or develops the app is billed; with pass-through billing, the tenant registered to use the app is billed.

**This change.** The billing meters page lists admin actions taken through SharePoint PowerShell among the calls not charged as API transactions, so running these cmdlets is not billed as application usage. The indirect cost is admin time to update creation scripts.

**Caps.** Microsoft documents no spending cap specific to these cmdlets; its billing setup guidance recommends creating budgets and alerts in Azure Cost Management.

## Scope

- **Who it affects:** SharePoint Embedded Administrators and Global Administrators in a developer tenant who create container types with the SharePoint Online Management Shell. A container type owner can also attach standard billing through the SharePoint Embedded Visual Studio Code extension or MCP server without an admin role. The owner also needs Owner or Contributor access to the Azure subscription.
- **Roles:** SharePoint Embedded Administrator to run either cmdlet; owner or contributor permissions on the Azure subscription, with active time-bound permission on billing, and on the resource group for `Add-SPOContainerTypeBilling`.
- **Billing models:** only standard container types need `Add-SPOContainerTypeBilling`. Pass-through container types are billed by the consuming tenant, where a Billing Administrator or Global Administrator, also requiring Owner or Contributor access to the Azure subscription used for billing, sets up billing in the Microsoft 365 admin center. Trial container types have no billing profile.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant). Microsoft's SharePoint Embedded overview states the service is not yet available in GCC High or DoD.
- **Platform:** the roadmap record lists Desktop.

## Governance guidance

### Before rollout
- Find every script and pipeline that calls `New-SPOContainerType` for a standard container type, and add an `Add-SPOContainerTypeBilling` call with the container type ID, Azure subscription ID, resource group and region.
- Decide the billing model for each planned container type (standard, or `-IsPassThroughBilling` when consuming tenants pay) before creating it, because it cannot be changed afterwards.
- Confirm the account that runs the scripts holds the SharePoint Embedded Administrator role and owner or contributor permissions on the billing subscription, with active time-bound permission on billing, and on the resource group.

### At rollout
- Run `Add-SPOContainerTypeBilling` straight after creating each standard container type, or choose **Owner org** and **Setup now** in the SharePoint admin center **Create app** panel.
- Check billing status for each new app under SharePoint Embedded > Apps > Owned apps, and complete billing for any app shown as Inactive.
- Ask each consuming tenant of a pass-through app to have a Billing Administrator or Global Administrator, also requiring Owner or Contributor access to the Azure subscription used for billing, set up SharePoint Embedded billing in the Microsoft 365 admin center.

### After rollout
- Re-test container type creation scripts in a test tenant after each SharePoint Online Management Shell update, since Microsoft has not stated which module version carries the split.
- Review who holds the SharePoint Embedded Administrator role, since it can create container types and attach billing for any standard container type in the tenant.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which billing model (standard or pass-through) a new container type uses</strong><br><small>App</small><br><small class="controls__note">SharePoint Embedded Administrator or Global Administrator. In the admin centre, User org is pass-through and Owner org is standard. The billing model can't be changed after creation.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>SharePoint Embedded › Apps › + Create app › Billing type <a href="https://learn.microsoft.com/sharepoint/dev/embedded/admin/create-apps-sharepoint-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-SPOContainerType -ContainerTypeName &lt;ContainerTypeName&gt; -OwningApplicationId &lt;OwningApplicationId&gt; -IsPassThroughBilling</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/new-spocontainertype" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Azure subscription, resource group and region a standard container type bills to</strong><br><small>App</small><br><small class="controls__note">SharePoint Embedded Administrator plus owner or contributor on the Azure subscription, with active time-bound permission on billing, and on the resource group. Setup later attaches billing from the Installed apps tab.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>SharePoint Embedded › Apps › + Create app › Billing type › Owner org › Billing subscription setup › Setup now <a href="https://learn.microsoft.com/sharepoint/dev/embedded/admin/create-apps-sharepoint-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-SPOContainerTypeBilling -ContainerTypeId &lt;ContainerTypeId&gt; -AzureSubscriptionId &lt;AzureSubscriptionId&gt; -ResourceGroup &lt;ResourceGroup&gt; -Region &lt;Region&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/add-spocontainertypebilling" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go billing for pass-through SharePoint Embedded apps in a consuming tenant</strong><br><small>Tenant</small><br><small class="controls__note">Billing Administrator or Global Administrator, also requiring Owner or Contributor access to the billing Azure subscription. No user can access a pass-through app until billing is valid.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Setup › Files and Content › Automate Content with Microsoft Syntex › Go to Syntex settings › Syntex services for › Apps › SharePoint Embedded <a href="https://learn.microsoft.com/sharepoint/dev/embedded/admin/setup-billing-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who holds the SharePoint Embedded Administrator role that runs both cmdlets</strong><br><small>User</small><br><small class="controls__note">Assigned by a Global Administrator. The request body sets principalId, roleDefinitionId and directoryScopeId.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Roles › Manage roles › SharePoint Embedded Administrator <a href="https://learn.microsoft.com/sharepoint/dev/embedded/admin/admin-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- **Roles.** The SharePoint Embedded Administrator role is dedicated to SharePoint Embedded and does not grant regular SharePoint site management. It does not by itself grant access to pass-through billing setup in the Microsoft 365 admin center, which needs a Billing Administrator or Global Administrator, also requiring Owner or Contributor access to the Azure subscription used for billing.
- **Graph alternative.** Container types can also be created with Microsoft Graph (`POST https://graph.microsoft.com/v1.0/storage/fileStorage/containerTypes`, [Create fileStorageContainerType](https://learn.microsoft.com/graph/api/filestorage-post-containertypes)); its `billingClassification` property takes `standard`, `trial` or `directToCustomer` and defaults to `standard`. It needs the SharePoint Embedded admin or Global admin role.
- **Container type owners.** A non-administrator container type owner can attach standard billing to a container type they own through the Visual Studio Code extension (**Attach billing**) or the MCP server (`billing_setup`), outside the admin controls in the table. The owner also needs Owner or Contributor access to the Azure subscription.
- **Pass-through automation.** Microsoft Learn documents no PowerShell or API for the consuming tenant's SharePoint Embedded billing setup at the time of writing (November 2026).

## Open questions

- From which SharePoint Online Management Shell version does `New-SPOContainerType` stop attaching a billing profile, and do older scripts fail or silently create unbilled container types? Watch the cmdlet reference.
- Why does the roadmap item still show In development with a January CY2025 target when Microsoft Learn documents the two-step process? Watch the roadmap entry and Message center.
- Will Microsoft document a Microsoft Graph or REST operation equivalent to `Add-SPOContainerTypeBilling` for attaching a standard billing profile? Watch the fileStorageContainerType reference.
- Will the consuming tenant's pass-through billing setup gain a scripted route? Watch the SharePoint Embedded admin documentation.

<!-- rationale
risk: Low. The change affects how SharePoint Embedded Administrators script container types; the main failure is a standard container type left without an Azure billing profile because a script skips the new second step.
cost: Low. The change adds no meter: SharePoint Embedded usage is billed pay-as-you-go through Azure either way. The cost is admin time to update creation scripts.
impact: Low. Only administrators and developers who create SharePoint Embedded container types with the SharePoint Online Management Shell notice it.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: There is no change in autonomy, and both cmdlets run only when an administrator calls them. | Found: Searched: New-SPOContainerType Add-SPOContainerTypeBilling automatically administrator. Read both cmdlet references and Choose a billing model; they state required roles and operations, not historical autonomy or an exclusive invocation model. | Fix: Remove the sentence 'No change: both cmdlets run only when an administrator calls them.' The documented operations and required roles are already stated elsewhere.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Clouds / availability: The SharePoint Embedded overview states the service is not yet available in GCC High or DoD. | Found: It is not yet available in Government Community Cloud High (GCC High) or Department of Defense (DoD). | Fix: Keep the attributed overview statement and append: 'The Create fileStorageContainerType reference lists its API as available in US Government L4 and US Government L5 (DOD), so Microsoft's service overview and API availability table disagree.' Cite https://learn.microsoft.com/graph/api/filestorage-post-containertypes. | Source: https://learn.microsoft.com/sharepoint/dev/embedded/overview
- [supported, minor] controls[2].ui / admin-path: Consuming-tenant pass-through billing setup is under Setup > Files and Content > Automate Content with Microsoft Syntex > Go to Syntex settings > Syntex services for > Apps > SharePoint Embedded. | Found: Select Setup. In Files and Content, select Automate Content with Microsoft Syntex. Select Go to Syntex settings. Under Syntex services for, select Apps. Select SharePoint Embedded. | Fix: Keep the cited path and append to controls[2].note: 'The container-type creation guide alternatively gives Setup > Billing and licenses > Activate pay-as-you-go services > Syntex services for > Apps > SharePoint Embedded.' Cite https://learn.microsoft.com/sharepoint/dev/embedded/build/create-container-type#create-a-pass-through-billing-container-type. | Source: https://learn.microsoft.com/sharepoint/dev/embedded/admin/setup-billing-microsoft-365-admin-center
- [supported, minor] controls[2].note / behaviour: No user can access a pass-through app until valid billing is configured. | Found: No user can access a pass-through SharePoint Embedded app before valid billing is configured for the SharePoint Embedded platform in the consuming tenant. | Fix: Replace the last sentence of controls[2].note with: 'The billing setup page says users cannot access a pass-through app before valid billing is configured; the publisher billing guide says invalid billing stops new container creation while existing containers and content remain accessible.' Cite https://learn.microsoft.com/sharepoint/dev/embedded/publish/choose-app-billing-model#pass-through-billing. | Source: https://learn.microsoft.com/sharepoint/dev/embedded/admin/setup-billing-microsoft-365-admin-center
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The governance checklist asks readers to check app billing status, but the controls table has no billing-status inspection row. | Found: Check billing status for each new app under SharePoint Embedded > Apps > Owned apps. Table rows cover billing model, Azure billing attachment, pass-through billing setup and role assignment, not billing-status inspection. | Fix: Remove the standalone 'Check billing status for each new app under SharePoint Embedded > Apps > Owned apps, and complete billing for any app shown as Inactive' checklist bullet; retain the supported billing-status discussion in Risk assessment. Do not add a control row.
-->
