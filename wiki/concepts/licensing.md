---
kind: "concept"
title: "Licensing and licence assignment: which users get which Microsoft 365 product?"
slug: "licensing"
summary: "A licence is the per-user right to use a Microsoft cloud product and the service plans inside it. Administrators assign licences directly or by group to decide who gets a product, and its features, and how many licences are used."
created: "2026-11-28"
updated: "2026-11-28"
version: 1
tags: ["licensing","m365-admin-center","admin-controls","powershell","microsoft-graph","cost-management","entra-id"]
covers: []
sources:
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Assign or unassign licenses to a group in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/manage-group-licenses"
    kind: "learn"
  - title: "user: assignLicense"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense"
    kind: "learn"
  - title: "group: assignLicense"
    url: "https://learn.microsoft.com/graph/api/group-assignlicense"
    kind: "learn"
  - title: "Manage self-service purchases and trials (for admins)"
    url: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins"
    kind: "learn"
  - title: "Block unauthorized self-service sign-ups and purchases"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-block-viral-signups"
    kind: "learn"
related: ["copilot-credits","teams-premium","usage-reports","m365-copilot-agent-mode-in-excel","m365-copilot-copilot-chat-agent-mode-in-excel","planner-task-hierarchy-for-unified-plans"]
controls:
  - governs: "Which users hold a licence for a product (direct assignment)"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "At least License Administrator or User Administrator."
  - governs: "Which groups' members receive a licence (group-based licensing)"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/manage-group-licenses"
    api:
      kind: "graph"
      call: "POST /v1.0/groups/{id}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/group-assignlicense"
    note: "Groups Administrator, License Administrator or User Administrator. Nested groups are not supported."
  - governs: "Which apps and services (service plans) within a licence are turned on"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses > Turn apps and services on or off"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "graph"
      call: "POST /v1.0/users/{id | userPrincipalName}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense"
    note: "The request body sets disabledPlans on each assignedLicense in addLicenses."
  - governs: "Usage location an account needs before a licence can be assigned"
    scope: "user"
    ui:
      surface: "Azure portal"
      path: "Active Directory > Users > user account > Profile > Contact info > Country or region"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    api:
      kind: "powershell"
      call: "Update-MgUser -UserId $userUPN -UsageLocation $userLoc"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "An ISO 3166-1 alpha-2 country code. Under group-based licensing, users without one inherit the tenant location."
  - governs: "Whether users can buy or start a trial of a product themselves (self-service purchase)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Self-service trials and purchases > product > Allow, Allow for trials only or Do not allow"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins"
    api:
      kind: "powershell"
      call: "Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId <ProductId> -Enabled $False"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-block-viral-signups"
    note: "Set per product. Global Administrator in the admin centre. Changes can take up to 72 hours."
confidence: "high"
dependents: 112
changes:
  - date: "2026-11-28"
    note: "New page: how licences, service plans and direct or group-based assignment decide who gets a Microsoft 365 product, with the controls for each."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 71 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 70
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "2e283ea9df1654bc10b61af720e1db26"
---

## What it is

A **licence** is the per-user right to use a Microsoft cloud product. Microsoft states that users can't use any Microsoft 365 services until their account has been assigned a licence from a licensing plan, so whether a person gets a product, and the features that come with it, follows from the licences their account holds.

An organisation buys a **subscription** to a product (Microsoft 365 E5, for example) with a number of licences, and an administrator assigns those licences to people. Each licence carries **service plans**: the individual apps and services inside the product, which can be turned on or off for each assignment. Some services, such as Sway, are assigned to users automatically. The many briefings in this wiki that say a feature needs a particular licence all point back to this mechanism.

### Two ways to assign

| Route | How it works | When errors show |
|---|---|---|
| Direct | The licence is assigned to the user account | Immediately |
| Group-based | The licence is assigned to a security group, mail-enabled group or Microsoft 365 group, and its members receive it | Later: the failure is recorded on the user object and surfaced in the admin portal |

A user can hold licences by both routes at once. Before a licence can be assigned, the account needs a **usage location** (a country or region code), because some Microsoft 365 services aren't available in every country or region.

Users can also get licences outside central assignment, through **self-service purchases and trials** of products they buy themselves.

## Why it matters

Licence assignment is where an organisation decides who gets a product and, with it, the features Microsoft adds to that product. Several briefings in this wiki find no separate switch for a licensed feature, which leaves the list of licence holders as the audience control they can document. Turning off a service plan narrows what one licence delivers without removing the licence.

It is also where spend is decided. When a licensed group has more members than there are available licences, the members over the count are listed with a "Not enough licenses" error until licences are bought or freed. Self-service purchase is a second route that bypasses central assignment: Microsoft states that by default all new products are set to allow users to make a self-service purchase.

## Cost and licensing

What licensing costs is the licences themselves, bought per product subscription. Microsoft's PowerShell guidance gives the number of available licences in each plan as ActiveUnits - WarningUnits - ConsumedUnits, read with `Get-MgSubscribedSku`. Where there are not enough licences for everyone selected, Microsoft notes that you might have to buy more. Deleting a user account makes its licence immediately available to assign to someone else.

The **Licenses** page can show one total across all subscriptions for the same product, while the **Your products** page shows a row for each subscription. Prices belong to each product, not to this mechanism: see the product's own page, such as [Teams Premium](/concepts/teams-premium/). Usage-based charges, such as agents billed in Copilot Credits, are a separate meter explained at [Copilot Credits](/concepts/copilot-credits/).

Self-service purchases require a payment method at sign-up and automatically renew at the end of the subscription term. The admin centre shows each one's purchase price and assigned users.

## Risks and limits

- **Removing a licence affects data, not only features.** Exchange Online data is held for 30 days after the licence is removed, then deleted and can't be recovered, apart from content that matches retention labels. The mailbox is also no longer searchable with Content Search or eDiscovery (Premium).
- **Nested groups receive nothing.** Group-based licensing doesn't support nested groups; only users in the first-level group are assigned licences.
- **Moving users in the wrong order cuts access.** A user removed from one licensed group before being added to the next is unlicensed until processing finishes, which can take longer in large tenants.
- **One failing product can stop the rest.** If a group has several products and one fails (insufficient licences, conflicts or dependencies), the others in that group might not be assigned either.
- **Add-ons fail without their prerequisite.** Some add-on products require a prerequisite service plan; assigned alone to a group, licensing fails.
- **Conflicting service plans block assignment.** A product received by group can conflict with service plans in a product assigned directly.
- **Usage location defaults to the tenant's.** Under group-based licensing, users without a usage location inherit the tenant's location, which may not be where they work.
- **Large groups are slow.** Assigning or changing licences for a group of around 100,000 users can take a long time under high load.
- **Self-service subscriptions sit outside central control.** Admins can't assign or unassign licences for a subscription a user bought until they take it over. Blocking is per product, with no single tenant-wide command, and can take up to 72 hours.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold a licence for a product (direct assignment)</strong><br><small>User</small><br><small class="controls__note">At least License Administrator or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which groups' members receive a licence (group-based licensing)</strong><br><small>Group</small><br><small class="controls__note">Groups Administrator, License Administrator or User Administrator. Nested groups are not supported.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/manage-group-licenses" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/groups/{id}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/group-assignlicense" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which apps and services (service plans) within a licence are turned on</strong><br><small>User</small><br><small class="controls__note">The request body sets disabledPlans on each assignedLicense in addLicenses.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses › Turn apps and services on or off <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id | userPrincipalName}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Usage location an account needs before a licence can be assigned</strong><br><small>User</small><br><small class="controls__note">An ISO 3166-1 alpha-2 country code. Under group-based licensing, users without one inherit the tenant location.</small></td><td data-label="Admin UI"><strong>Azure portal</strong><br>Active Directory › Users › user account › Profile › Contact info › Country or region <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgUser -UserId $userUPN -UsageLocation $userLoc</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can buy or start a trial of a product themselves (self-service purchase)</strong><br><small>Tenant</small><br><small class="controls__note">Set per product. Global Administrator in the admin centre. Changes can take up to 72 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Self-service trials and purchases › product › Allow, Allow for trials only or Do not allow <a href="https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MSCommerceProductPolicy -PolicyId AllowSelfServicePurchase -ProductId &lt;ProductId&gt; -Enabled $False</code> <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-block-viral-signups" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Assigning licences to users needs at least License Administrator or User Administrator; for groups, Groups Administrator also qualifies. The Microsoft Graph assignLicense operations need the LicenseAssignment.ReadWrite.All permission at least, and in delegated use a role such as License Administrator, User Administrator or Directory Writers. Changing the self-service purchase setting in the admin centre needs Global Administrator.

**How they interact.** The licence decides whether a product reaches a user; settings inside each product, such as Copilot or Teams policies, then decide what the user can do with it, and are covered on those products' pages.

**Watching.** Each product's **Errors & Issues** tab under **Billing > Licenses** lists users who didn't receive a licence and why, and **Reprocess** retries the assignment. Self-service purchases are listed under **Billing > Your products**, filtered to **Self-service**.

## What to check

- Compare available and consumed licences for each product with `Get-MgSubscribedSku` before a licensed feature reaches users.
- Review which users and groups hold each licence a pending feature depends on, under **Billing > Licenses**.
- Open the **Errors & Issues** tab for each group-licensed product and reprocess users once the cause is fixed.
- Find member accounts with no usage location and set one before relying on group-based licensing.
- Check licensed groups for nested groups, whose members are not licensed.
- Review the **Self-service trials and purchases** setting for each product you buy centrally.

## Open questions

- Does group-based licensing carry a Microsoft Entra ID licence prerequisite? The Microsoft 365 admin center page on group licences does not give one.
- When Microsoft adds a feature to an existing product, does it arrive with its own service plan that can be turned off, or inside an existing plan? Microsoft documents no general rule.

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].api / command: POST /v1.0/groups/{id}/assignLicense assigns product licences to a group's members. | Found: POST https://graph.microsoft.com/v1.0/groups/1132b215-826f-42a9-8cfe-1643d19d17fd/assignLicense addLicenses ... objects that specify the licenses to add. | Fix: Keep the endpoint. Append to controls[1].note and its rendered row: 'The request body sets addLicenses to assignedLicense objects containing skuId.' The reference is https://learn.microsoft.com/graph/api/group-assignlicense. | Source: https://learn.microsoft.com/graph/api/group-assignlicense
- [supported, minor] What it is: subscription / licensing: An organisation purchases a subscription with a number of licences and assigns those licences to people. | Found: When you buy a subscription, you specify the number of licenses that you need, based on how many people you have in your organization. After you buy a subscription, you create accounts for people in your organization, and then assign a license to each person. | Fix: Add the additional Microsoft pages supporting the definition, subscription costs, credit meter and product-policy examples to sources: https://learn.microsoft.com/microsoft-365/commerce/licenses/subscriptions-and-licenses; https://learn.microsoft.com/microsoft-365/enterprise/view-licenses-and-services-with-microsoft-365-powershell; https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management; https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration; https://learn.microsoft.com/MicrosoftTeams/teams-policies. Also add the two comparison sources used in the group-guidance corrections: https://learn.microsoft.com/graph/api/resources/groups-overview and https://learn.microsoft.com/microsoft-365/education/deploy/license-users. | Source: https://learn.microsoft.com/microsoft-365/commerce/licenses/subscriptions-and-licenses
- [supported, minor] What it is: Two ways to assign / behaviour: Group-based licensing assigns licences to security groups, mail-enabled groups or Microsoft 365 groups, whose members receive them. | Found: If you have security groups, mail-enabled groups, or Microsoft 365 groups, you can assign or unassign licenses for those groups on the Licenses page in the Microsoft 365 admin center. | Fix: After the assignment table, add: 'Microsoft's admin-center guidance lists security groups, mail-enabled groups and Microsoft 365 groups. Its Graph group overview restricts group-based licensing to security groups and Microsoft 365 groups with securityEnabled set to true.' Cite https://learn.microsoft.com/graph/api/resources/groups-overview, which states that restriction. Preserve both sources rather than silently choosing one. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/manage-group-licenses
- [supported, minor] Governance controls: Watching, self-service / admin-path: Self-service purchases can be viewed under Billing > Your products by filtering to Self-service. | Found: go to the Billing > Your products page. On the Products tab, select the filter icon, then select Self-service. | Fix: Replace the final Watching sentence with: 'Self-service purchases are listed under Billing > Your products > Products, filtered to Self-service.' The omitted Products tab lists the items being inspected; the existing route reaches the correct page. | Source: https://learn.microsoft.com/microsoft-365/commerce/subscriptions/manage-self-service-purchases-admins
- [supported, minor] Open questions: group-based licensing prerequisite / absence: The Microsoft 365 admin-center group-licensing page does not state a Microsoft Entra ID licensing prerequisite. | Found: Searched: group-based licensing Microsoft Entra ID license prerequisites; "group-based licensing" "prerequisites" "license". Read manage-group-licenses and entra/fundamentals/licensing; the admin-center article gives roles but no Entra licensing prerequisite. | Fix: Replace the first Open questions bullet with: 'Which current licensing prerequisite applies to group-based licensing? The Microsoft 365 admin-center group-licensing article gives none, while Microsoft's education deployment guidance lists a paid or trial Microsoft Entra Basic subscription or Office 365 Enterprise E3 or Office 365 A3 and above.' Cite https://learn.microsoft.com/microsoft-365/education/deploy/license-users. This preserves the narrow, true absence while acknowledging the requirement stated on another Microsoft page.
- [contradicted, minor] What to check: Errors & Issues and reprocessing / consistency: The checklist asks the reader to inspect assignment errors and reprocess users, but that control has no row in the controls table. | Found: Open the Errors & Issues tab for each group-licensed product and reprocess users once the cause is fixed. | The table contains direct assignment, group assignment, service plans, usage location and self-service purchase, but no error/reprocessing row. | Fix: Remove the Errors & Issues/reprocessing bullet from What to check. Keep the existing explanation in Watching; do not add a control row.
-->
