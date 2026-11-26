---
title: "Microsoft Purview: sensitivity label protection policies for Microsoft Fabric items"
slug: "microsoft-purview-compliance-portal-information-protection-sensitivity-labels-prote-420331"
roadmapId: 420331
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview protection policies restrict access to labelled Fabric items using an allowed list, with exceptions for label issuers and, for automatically labelled native Fabric items with no issuer, item creators. Nothing is restricted until an admin acts."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2025"
previewDate: "October CY2024"
risk: "low"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "The Fabric pages require a Microsoft 365 E3/E5 licence for sensitivity labels. Microsoft Purview's protection policies page asks for Microsoft 365 E5 and pay-as-you-go billing, and the billing models page meters Fabric items per asset in scope of a protection policy per day."
audiences: ["security","compliance","service-owner","finops"]
tags: ["purview","sensitivity-labels","microsoft-fabric","information-protection","protection-policies","pay-as-you-go","power-bi","role-groups"]
sources:
  - title: "Protection policies in Microsoft Fabric"
    url: "https://learn.microsoft.com/fabric/governance/protection-policies-overview"
    kind: "learn"
  - title: "Create and manage protection policies for Fabric"
    url: "https://learn.microsoft.com/fabric/governance/protection-policies-create"
    kind: "learn"
  - title: "Get started with protection policies (preview)"
    url: "https://learn.microsoft.com/purview/data-gov-protection-policy"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "Enable sensitivity labels in Fabric and Power BI"
    url: "https://learn.microsoft.com/fabric/enterprise/powerbi/service-security-enable-data-sensitivity-labels"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 420331"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=420331"
    kind: "roadmap"
  - title: "Whether sensitivity labels can be applied and enforced on Fabric items, and by whom (REST API)"
    url: "https://learn.microsoft.com/rest/api/fabric/admin/tenants/update-tenant-setting"
    kind: "learn"
  - title: "Who holds the Information Protection Admin role needed to create protection policies (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Who holds the Information Protection Admin role needed to create protection policies (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-information-protection-sensitivity-labels-protection-p","sensitivity-labels","microsoft-purview-compliance-portal-data-loss-prevention-restrict-access-action-support-fo","microsoft-purview-compliance-portal-insider-risk-management-microsoft-fabric-risk-indicato"]
controls:
  - governs: "Which users and groups keep access to Fabric items carrying a policy's label"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Information Protection > Policies > Protection policies > + New protection policy > + Add sensitivity label > Choose data sources to apply the policy > Microsoft Fabric > Define access control settings > Add users and groups"
      docs: "https://learn.microsoft.com/fabric/governance/protection-policies-create"
    api: null
    note: "Preview. Needs at least Information Protection Admin. The next wizard page sets whether the policy is on; Edit policy changes it later."
  - governs: "Whether sensitivity labels can be applied and enforced on Fabric items, and by whom"
    scope: "tenant"
    ui:
      surface: "Fabric admin portal"
      path: "Tenant settings > Information protection > Allow users to apply sensitivity labels for content"
      docs: "https://learn.microsoft.com/fabric/enterprise/powerbi/service-security-enable-data-sensitivity-labels"
    api:
      kind: "rest"
      call: "POST https://api.fabric.microsoft.com/v1/admin/tenantsettings/{tenantSettingName}/update"
      docs: "https://learn.microsoft.com/rest/api/fabric/admin/tenants/update-tenant-setting"
    note: "Required for protection policy enforcement in Fabric. The request body sets enabled and enabledSecurityGroups. Caller must be a Fabric administrator or a service principal."
  - governs: "Who holds the Information Protection Admin role needed to create protection policies"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Information Protection Admin is assigned by default under the Compliance Administrator role group."
  - governs: "Pay-as-you-go usage of the Information Protection meter, and pausing it"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Usage center > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/purview-billing-usage"
    api: null
    note: "Usage center is in preview. Needs Global Reader, Security Reader or Global Admin. Information Protection is listed as pausable."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-26"
roadmapModified: "2024-10-04T23:15:50"
changes:
  - date: "2026-11-25"
    note: "New briefing: Purview protection policies for Fabric items, with licensing disagreement between pages, the pay-as-you-go meter and four controls."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 68 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected who a policy blocks: label issuers, and creators of automatically labelled native Fabric items with no issuer, keep access; reworded the autonomy bullet and completed the Purview wizard path."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 71 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 70
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "f11cf9e77250cd15fc570515818a458f"
---

## What's changing

Microsoft Purview protection policies let an organisation restrict access to Microsoft Fabric items by sensitivity label. Each policy is tied to one label: users and groups named in the policy keep the permissions they already have on an item carrying that label, and other users are blocked, subject to the label-issuer and native-item creator exceptions described below. The roadmap item describes users labelling Fabric items manually and administrators setting the protection policies that then apply access controls.

Policies are created by an Information Protection Admin in the Microsoft Purview portal and apply to supported item types in all workspaces. Supported items are native Fabric item types (lakehouses, notebooks, pipelines and other core Fabric assets) and Power BI semantic models; Power BI reports and dashboards are not currently supported. The user who last applied the label to an item is not denied access, even if the policy does not name them. A new policy can take up to 24 hours to start protecting labelled items.

The roadmap record lists this item as **In development**, with preview targeted for October CY2024 and general availability for June CY2025, in the Worldwide (Standard Multi-Tenant) cloud on the web. Microsoft Learn already documents the feature, and the Purview portal page is labelled **Protection policies (preview)**, so the documented behaviour is the preview's. The sibling roadmap item 394282 covers protection policies for Azure Storage, not Fabric.

## Why it matters

A protection policy takes access away from people who already have Fabric permissions on a labelled item, unless the policy names them or a documented label-issuer or native-item creator exception applies. For a security team that has labelled Fabric data as Confidential, it turns the label from a marker into an access boundary. Microsoft documents it as something an administrator creates, so a tenant that does nothing sees no change in who can open Fabric items.

The cost and breakage sit with whoever switches it on. Applications that read semantic models through a service principal are denied unless the service principal is in a security group added to the policy, and each labelled item in scope is a billable asset on the Purview pay-as-you-go meter. Plan the allowed list and the Azure billing owner before the first policy is turned on.

## Risk assessment

**Data exposure**
- The policy narrows access but has documented gaps: the user who last applied the label keeps access whether or not the policy names them, and for native Fabric item types, where a label is applied automatically (for example by downstream inheritance) with no label issuer, the item's creator is not restricted.
- Power BI reports and dashboards are not supported item types, so a policy covers the semantic model and not those items.
- Protection policies for Fabric do not support guest or external users; how such users are treated on a labelled item is an open question.

**Security & identity**
- Service principals cannot be added to a policy directly in the Purview portal. Unless they sit in a security group on the allowed list, those that currently have access are denied, which Microsoft warns can break applications.
- Who can apply labels in Fabric is set by the Fabric tenant setting **Allow users to apply sensitivity labels for content**, and labelling is what brings an item under a policy (see the controls table).

**Autonomy & actions**
- The documented protection policy controls access to items carrying its associated sensitivity label. Enforcement can lag a new policy by up to 24 hours.

**Change & support**
- Deployment pipelines and Git integration use only workspace permissions, not the item-level permissions a policy sets, so release processes will not reflect the restriction.
- Limits of 50 policies per tenant and 100 users and groups per policy push organisations towards group-based allowed lists.

## Cost and licensing

**Licence.** The Fabric overview and create pages require a Microsoft 365 E3/E5 licence, as needed for sensitivity labels from Microsoft Purview Information Protection. Microsoft Purview's *Get started with protection policies (preview)* page, which covers Fabric as a data source, lists Microsoft 365 E5 and setup of the pay-as-you-go billing model as prerequisites. The two pages disagree on E3; confirm with your licensing contact.

**Meter.** *Learn about Microsoft Purview billing models* lists Information Protection on pay-as-you-go, with the unit "Number of assets in scope of protection policy/day", and lists Fabric supported item types as assets that protection policies can protect. An asset is counted once however many policies cover it; in Microsoft's protection policy example, only items carrying the policy's label are counted. Charges are billed through an Azure subscription associated with the Microsoft 365 tenant, on a monthly Azure bill. Rates are on Microsoft's Purview pay-as-you-go pricing page, linked from the billing models page.

**Spend control.** The Purview **Usage center** shows pay-as-you-go units by feature and lists Information Protection as pausable (preview). The page does not say what pausing does to protection policy enforcement.

**Indirect costs.** Time to build security groups for allowed lists and service principals, and support calls from users who lose access.

## Scope

- **Items:** native Fabric item types and Power BI semantic models, in all workspaces; not Power BI reports or dashboards.
- **Labels:** a label scoped to **Files & other data assets** with protection settings that include **Control access**; one label per policy.
- **Who configures:** at least the Information Protection Admin role, assigned by default under the Compliance Administrator role group.
- **Prerequisite in Fabric:** the tenant setting **Allow users to apply sensitivity labels for content** must be enabled for enforcement.
- **Limits:** up to 50 policies; up to 100 users and groups per policy; no guest or external users.
- **Clouds and platforms:** the record lists Worldwide (Standard Multi-Tenant) and Web.
- **Status:** In development on the roadmap (preview October CY2024, general availability June CY2025); documented as preview on Learn.

## Governance guidance

### Before rollout
- Choose the label each policy will enforce, confirming it is scoped to Files & other data assets and includes Control access; each policy takes one label.
- Confirm the Fabric tenant setting Allow users to apply sensitivity labels for content is enabled, and limit it to specific security groups if labelling should stay with data owners.
- List the service principals that read Fabric items or semantic models and place them in a security group to add to the policy.
- Assign the Information Protection Admin role through a Purview role group to the people who will own protection policies.
- Agree with finance which Azure subscription carries Purview pay-as-you-go charges before the first policy is turned on.

### At rollout
- Create the policy with the option to keep it off, review the allowed users and groups, then turn it on.
- Add groups, not individuals, under Add users and groups, to stay inside the 100-entry limit.
- Select Allow users to retain full control only where owners must keep full control of labelled items.
- Wait up to 24 hours before testing access with an account that is not on the allowed list.

### After rollout
- Check Usage center > Pay-as-you-go for Information Protection units after the first days of enforcement.
- Test applications that use service principals against labelled semantic models.
- Review who can apply the label in Fabric, since the user who last applied it keeps access.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups keep access to Fabric items carrying a policy's label</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Needs at least Information Protection Admin. The next wizard page sets whether the policy is on; Edit policy changes it later.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Information Protection › Policies › Protection policies › + New protection policy › + Add sensitivity label › Choose data sources to apply the policy › Microsoft Fabric › Define access control settings › Add users and groups <a href="https://learn.microsoft.com/fabric/governance/protection-policies-create" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether sensitivity labels can be applied and enforced on Fabric items, and by whom</strong><br><small>Tenant</small><br><small class="controls__note">Required for protection policy enforcement in Fabric. The request body sets enabled and enabledSecurityGroups. Caller must be a Fabric administrator or a service principal.</small></td><td data-label="Admin UI"><strong>Fabric admin portal</strong><br>Tenant settings › Information protection › Allow users to apply sensitivity labels for content <a href="https://learn.microsoft.com/fabric/enterprise/powerbi/service-security-enable-data-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST https://api.fabric.microsoft.com/v1/admin/tenantsettings/{tenantSettingName}/update</code> <a href="https://learn.microsoft.com/rest/api/fabric/admin/tenants/update-tenant-setting" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who holds the Information Protection Admin role needed to create protection policies</strong><br><small>Tenant</small><br><small class="controls__note">Information Protection Admin is assigned by default under the Compliance Administrator role group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go usage of the Information Protection meter, and pausing it</strong><br><small>Tenant</small><br><small class="controls__note">Usage center is in preview. Needs Global Reader, Security Reader or Global Admin. Information Protection is listed as pausable.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Purview protection policy decides who keeps access; the Fabric tenant setting decides who can apply labels and must be on for any label enforcement in Fabric. Together they mean that anyone allowed to label an item and able to edit it can bring it under a policy, and keeps access themselves as label issuer. Users who apply or change labels also need Create and Edit permissions on the item.

Microsoft Learn documents no PowerShell cmdlet or API for creating or editing protection policies at the time of writing (November 2026). Workspace Admins and Members can see which users a policy restricts on the **Permissions** tab of an item in the OneLake catalog. The Usage center pages need Global Reader, Security Reader or Global Admin.

## Open questions

- Does a Fabric protection policy need Microsoft 365 E5, as Purview's protection policies page says, or is E3 enough, as the Fabric pages say? Watch both Learn pages.
- What happens to enforcement on Fabric items when Information Protection is paused in the Usage center?
- How are guest and external users treated on an item whose label has a protection policy, given policies do not support them?
- When will the preview label come off the Protection policies page, given the roadmap's June CY2025 target has passed and the item is still In development? Watch Message center and the roadmap item.
- Will Microsoft publish PowerShell or an API to create and edit protection policies?

<!-- rationale
risk: Low. Access changes only once an administrator creates and turns on a policy; the main hazard after that is service principals and users left off the allowed list losing access to labelled items.
cost: Variable. Microsoft's billing page lists Fabric items under the Information Protection pay-as-you-go meter, charged per asset in scope of a protection policy per day, billed through Azure, on top of per-user licences.
impact: Medium. Fabric users, analysts and service principals that are not on a policy's allowed list lose access to labelled lakehouses, notebooks, pipelines and semantic models once the policy is on, unless a documented label-issuer or native-item creator exception applies.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: first paragraph; Why it matters; controls[0] / behaviour: Users and groups specified in a policy retain the permissions they already have on items carrying its label. | Found: The policy controls access to an item that has the associated label by allowing users and groups specified in the policy to retain permissions they have on the item, while blocking access for everyone else. | Fix: Keep the statement attributed to the Fabric overview, but add: 'The separate SQL database guidance distinguishes retained read access from retained full control: the read-access option removes other item permissions, and users not specified in the full-control option lose the Write item permission.' Cite https://learn.microsoft.com/fabric/database/sql/protect-databases-with-protection-policies. That page says 'Any other permissions the specified users have on the item get removed' for the read-access option, unlike the general overview's wording. | Source: https://learn.microsoft.com/fabric/governance/protection-policies-overview
- [supported, minor] controls[0].ui; Governance controls: first table row / admin-path: The printed Purview path reaches the Fabric protection policy wizard's Add users and groups control. | Found: On the Choose the sensitivity label used to detect sensitive items page, select + Add sensitivity label ... On the Define access control settings page ... Select Add users and groups | Fix: Use 'Information Protection > Policies > Protection policies > + New protection policy > Name and describe your protection policy > Choose the sensitivity label used to detect sensitive items > + Add sensitivity label > label > Choose data sources to apply the policy > Microsoft Fabric > Define access control settings > Add users and groups'. The omitted wizard headings and label selection are non-blocking. The navigation and + New protection policy are also documented at https://learn.microsoft.com/purview/data-gov-protection-policy, which is already cited. | Source: https://learn.microsoft.com/fabric/governance/protection-policies-create
- [supported, minor] controls[3].ui; Governance guidance: After rollout; Governance controls: fourth table row / admin-path: Microsoft Purview portal > Usage center > Pay-as-you-go reaches the page for Information Protection usage and pausing. | Found: The Usage center in the Microsoft Purview portal ... Usage center > Pay-as-you-go ... The pay-as-you-go usage page also lets you toggle the features listed between paused and active states. | Information Protection | Yes | Yes | | Fix: Extend controls[3].ui.path to 'Usage center > Pay-as-you-go > Information Protection'. Keep the note that Information Protection is pausable; the documented control toggles it between paused and active states. The current path stops early on the correct page, not at a wrong location. | Source: https://learn.microsoft.com/purview/purview-billing-usage
- [contradicted, minor] Governance guidance: Before rollout, first bullet / consistency: Every control that the governance checklist asks readers to check has a corresponding controls-table row. | Found: Choose the label each policy will enforce, confirming it is scoped to Files & other data assets and includes Control access; each policy takes one label. The table covers policy access, Fabric labelling enablement, role membership and Usage center, not label scope or protection configuration. | Fix: The instruction to check the label's scope and Control access configuration has no corresponding table row. Replace that checklist bullet with 'Choose the label each policy will enforce; each policy takes one label.' Keep the existing documented label prerequisites in Scope; do not add a new control row.
-->
