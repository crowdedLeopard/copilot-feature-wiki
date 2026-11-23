---
title: "OneDrive: pay-as-you-go storage beyond licensed quotas"
slug: "m365-pay-as-you-go-storage-for-onedrive"
roadmapId: 562352
topic: "modern-work"
products: ["OneDrive"]
summary: "A new metered service, Microsoft 365 OneDrive Storage, lets administrators raise selected users' OneDrive limits above their licence and pay for the overage. Nothing changes until an administrator sets up billing."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Pay-as-you-go: only usage above each account's licensed entitlement is billed, at $0.20/GB/month on Microsoft's pricing page. Requires an Azure subscription and resource group, and at least one SharePoint licence in the tenant."
audiences: ["m365-admin","finops","service-owner"]
tags: ["onedrive","pay-as-you-go","usage-based-billing","cost-management","finops","m365-admin-center","licensing","powershell"]
sources:
  - title: "Microsoft 365 Roadmap 562352"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562352"
    kind: "roadmap"
  - title: "Add more OneDrive and SharePoint storage to your Microsoft 365 subscription"
    url: "https://learn.microsoft.com/microsoft-365/commerce/add-storage-space"
    kind: "learn"
  - title: "Set up and manage pay-as-you-go billing in the Billing node of the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    kind: "learn"
  - title: "Create a budget for pay-as-you-go billing in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-budget"
    kind: "learn"
  - title: "Pay-as-you-go pricing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-pay-as-you-go-services"
    kind: "learn"
  - title: "Change a specific user's OneDrive storage space"
    url: "https://learn.microsoft.com/sharepoint/change-user-storage"
    kind: "learn"
  - title: "Set the default storage space for OneDrive users"
    url: "https://learn.microsoft.com/onedrive/set-default-storage-space"
    kind: "learn"
  - title: "MC1477185: (Updated) Microsoft OneDrive: New pay-as-you-go storage billing option"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1477185"
    kind: "message-center"
videos: []
related: []
controls:
  - governs: "Whether pay-as-you-go OneDrive storage is connected and billed"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > Services > Connect a policy"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    api: null
    note: "Disconnect by turning off the Connection status toggle for the service. Roles and Azure prerequisites in Scope."
  - governs: "Which users may exceed their licensed OneDrive quota"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > OneDrive > Storage used > Edit"
      docs: "https://learn.microsoft.com/sharepoint/change-user-storage"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <OneDrive site URL> -StorageQuota <MB> -StorageQuotaWarningLevel <MB>"
      docs: "https://learn.microsoft.com/sharepoint/change-user-storage"
    note: "Learn says this applies if the tenant has Microsoft 365 OneDrive Storage enabled. The user's limit is set via the Maximum storage for this user option."
  - governs: "Spending alerts for the billing policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > policy > Budget > Settings"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    api: null
    note: "Budget applies per billing policy only and does not stop billing. Spending is on the same Budget tab."
  - governs: "Default OneDrive storage limit for all users (existing control)"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Settings > Storage limit"
      docs: "https://learn.microsoft.com/onedrive/set-default-storage-space"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -OneDriveStorageQuota <quota>"
      docs: "https://learn.microsoft.com/onedrive/set-default-storage-space"
    note: "General control: Microsoft has not confirmed how it interacts with OneDrive Storage. Values above a user's licence are rounded down."
confidence: "high"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: documents the OneDrive Storage pay-as-you-go service, its set-up path, meter, budget behaviour and per-user limit controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 73 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 72
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "4081fab66548405b5aba3aafaaff045a"
---

## What's changing

Microsoft is adding Microsoft 365 OneDrive Storage, a pay-as-you-go service that lets an organisation use and pay for OneDrive storage above each account's licensed quota. The roadmap item describes it as a consumption-based meter that controls which OneDrive accounts can grow beyond their licensed limits and gives selected users more space.

On Learn, the service works through a billing policy in the Microsoft 365 admin center. After the policy is connected to the service, an administrator raises the individual user's OneDrive storage limit above the licensed quota. Learn says the maximum value remains 25,600 GB and that only usage above the licensed quota is billed. If an administrator later disconnects the service while accounts are over their quota, enforcement of the quota resumes.

The roadmap item is In development, with a preview date of July CY2026 and a General Availability target of November CY2026, for Worldwide (Standard Multi-Tenant) on the web. Microsoft's notice MC1477185 (published 2026-09-22, updated 2026-10-06) says public preview is available to all commercial tenants, and General Availability rollout begins in early November 2026 and is expected to complete by early December 2026. The same post says Microsoft is no longer releasing to gov clouds at this time and will announce that separately. The post sets no act-by date and says no action is required if you do not want to use pay-as-you-go storage.

## Why it matters

This is a way to stop quota enforcement blocking a user without buying capacity packs, at the price of a metered bill. It is optional, so doing nothing keeps today's quotas; but once a billing policy is connected, any account whose limit is raised can generate charges, and Microsoft's own budget control only alerts.

Plan it as a finance decision as much as an admin one. Decide who may approve raised limits, who watches the spend, and which accounts genuinely need more space. Learn also lists OneDrive Extra Storage, sold as capacity packs, as a separate option, so compare the two before committing.

## Risk assessment

**Data exposure**
- No new data access: the service changes how much a user's own OneDrive can hold, not who can read it. Billing setup asks for a Region, which Learn says determines where the tenant ID and usage data are stored.

**Security & identity**
- Setup needs Azure rights and a Microsoft 365 role. Learn lists Owner or Contributor on the Azure subscription and resource group, and SharePoint Administrator or Global Administrator for the admin centre. Keep that role set narrow, since connecting a policy creates a recurring charge.

**Autonomy & actions**
- Nothing grows on its own: Learn describes setting a storage limit above the licensed quota as an administrator action per user. Large uploads, sync clients or ransomware-style file growth in an account with a raised limit would be billed rather than blocked, so raise limits selectively.

**Change & support**
- Budgets are set only at the billing policy level, not for individual users or sites, and reaching 100% does not stop billing; the only way to stop is to disconnect. Alerts can take up to 24 hours to arrive, so plan for overage before the alert.
- Disconnecting while accounts are over their licensed quota resumes quota enforcement, which can surprise users who relied on the extra space.

## Cost and licensing

**Licence.** Microsoft's billing setup page says the tenant must have at least one SharePoint licence, or a licence that includes SharePoint. Learn's OneDrive page lists an Azure subscription, a resource group and the Azure roles above as prerequisites, and no separate OneDrive licence.

**Meter.** Microsoft's pay-as-you-go pricing page counts the gigabytes of data that exceed each account's licensed storage entitlement, and lists $0.20/GB/month (shown on the invoice as $0.00667/GB/day). That page is the pricing source at the time of writing (November 2026); the OneDrive page describes the service as entering public preview in July 2026, and Microsoft has not said whether the price changes at General Availability. Example, built from the published rate: 500 GB above entitlement across all accounts for a month would be 500 x $0.20 = $100.

**Cap.** A budget per billing policy sends alerts, optionally up to four more thresholds between 1% and 99% besides the 100% default. It does not stop billing. Spending can be viewed on the policy's Budget tab, where data can take up to four hours to appear, and in Microsoft Cost Management for Azure.

**Not yet published.** Microsoft has not published a per-account or per-site spending limit.

## Scope

- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant). The OneDrive Learn page says the product is not currently available to education, GCC, or Microsoft 365 operated by 21Vianet in China customers; MC1477185 says gov cloud release is paused.
- **Users:** on the Billing node page, the All users option is applied automatically for services other than Microsoft Copilot ones, so the billing policy itself cannot be limited to a group. Which individual accounts can exceed their licensed quota is controlled by the storage limit set per user.
- **Roles:** the OneDrive Learn page names SharePoint Administrator or Global Administrator for the admin centre; the Billing node page lists SharePoint Administrator, Billing Administrator, AI Administrator and Global Administrator. Both also require Owner or Contributor on the Azure subscription and resource group.
- **Platform and rollout:** web, with GA rollout starting early November 2026 per MC1477185.

## Governance guidance

### Before rollout
- Identify OneDrive accounts approaching or exceeding their licensed quota, as MC1477185 recommends, using Active users > OneDrive > Storage used in the Microsoft 365 admin center.
- Decide who owns the Azure subscription and resource group that will carry the charge, and confirm they hold Owner or Contributor on both.
- Agree a monthly budget and alert recipients with finance before creating the billing policy, since the budget cannot stop spend.
- Compare against OneDrive Extra Storage capacity packs for the few users who need more space.

### At rollout
- Create the billing policy at Billing > Pay-as-you-go and choose the Microsoft 365 OneDrive Storage service in Step 4.
- Set the budget and add alert thresholds below 100% so recipients are warned early.
- Raise the storage limit only for named users, per the Active users or Set-SPOSite controls below.

### After rollout
- Review the Spending view on the policy's Budget tab each month against the users whose limits you raised.
- Lower or reset limits for accounts that no longer need the space, and note that a user over the new limit may be affected once the limit is below their usage.
- Disconnect the service if you stop using it, and check the bill afterwards to confirm charges end.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether pay-as-you-go OneDrive storage is connected and billed</strong><br><small>Tenant</small><br><small class="controls__note">Disconnect by turning off the Connection status toggle for the service. Roles and Azure prerequisites in Scope.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › Services › Connect a policy <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users may exceed their licensed OneDrive quota</strong><br><small>User</small><br><small class="controls__note">Learn says this applies if the tenant has Microsoft 365 OneDrive Storage enabled. The user's limit is set via the Maximum storage for this user option.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › OneDrive › Storage used › Edit <a href="https://learn.microsoft.com/sharepoint/change-user-storage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;OneDrive site URL&gt; -StorageQuota &lt;MB&gt; -StorageQuotaWarningLevel &lt;MB&gt;</code> <a href="https://learn.microsoft.com/sharepoint/change-user-storage" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Spending alerts for the billing policy</strong><br><small>Tenant</small><br><small class="controls__note">Budget applies per billing policy only and does not stop billing. Spending is on the same Budget tab.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › policy › Budget › Settings <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Default OneDrive storage limit for all users (existing control)</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed how it interacts with OneDrive Storage. Values above a user's licence are rounded down.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Settings › Storage limit <a href="https://learn.microsoft.com/onedrive/set-default-storage-space" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -OneDriveStorageQuota &lt;quota&gt;</code> <a href="https://learn.microsoft.com/onedrive/set-default-storage-space" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The per-user storage limit is the only documented switch for which accounts can grow beyond their licence; budgets exist only at billing policy level, and they alert rather than block. At the time of writing (November 2026) Microsoft Learn documents no API for creating billing policies or budgets for this service.

The default storage limit (Set-SPOTenant) is an existing control: its page says a value above a user's licence is rounded down to the licence maximum. That page does not say whether this changes when OneDrive Storage is enabled, so use the per-user limit for pay-as-you-go accounts.

The budget page gives the path Copilot > Billing & usage, while the Billing node page gives Billing > Pay-as-you-go; the table follows the latter, which is the page for this service.

## Open questions

- Does the $0.20/GB/month rate on the pricing page apply unchanged at General Availability, and is the preview billed? Watch the pay-as-you-go pricing page and Message center.
- Does Set-SPOTenant -OneDriveStorageQuota still round down to the licence maximum when OneDrive Storage is connected, or can a tenant-wide default exceed licences?
- Is there a PowerShell, Graph or other API to create billing policies, set budgets or report OneDrive pay-as-you-go spend by user?
- When will Microsoft release this to gov clouds, and will education tenants be supported? MC1477185 says a separate post will follow.

<!-- rationale
risk: Medium. Nothing is billed until an administrator connects a billing policy, but once connected, a budget only sends alerts: Microsoft states that reaching 100% of the budget does not stop the service or billing.
cost: Variable. Metered per GB per month of OneDrive data above each account's licensed entitlement; Microsoft's pricing page lists $0.20/GB/month, billed through an Azure subscription.
impact: Low. Administrators set it up, and only the users whose storage limit is raised see more space; users who stay within their licensed quota notice nothing.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: The service introduces no new data access and does not change who can read a user's OneDrive content. | Found: Searched: "OneDrive Storage" "permissions" "pay-as-you-go". Read add-storage-space, Billing-node setup and pay-as-you-go-services; Graph OneDrive search excerpts discuss general sharing but do not state this service leaves permissions unchanged. | Fix: Replace 'No new data access: the service changes how much a user's own OneDrive can hold, not who can read it' with 'Microsoft documents additional storage above licensed quotas; the cited setup documentation does not discuss changes to content-access permissions.' Keep the billing-region sentence.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: connection row / admin-path: The service can be connected at Microsoft 365 admin center > Billing > Pay-as-you-go > Services > Connect a policy. | Found: go to Billing > Pay-as-you-go. On the Pay-as-you-go page, select the Services tab. For the service that you want to connect, in the Billing policy column, select Connect a policy. | Fix: Extend controls[0].ui.path and the matching table path to 'Billing > Pay-as-you-go > Services > Connect a policy > policy > Connection status'. The cited page says to find the policy in the side panel and set its Connection status toggle to Connected. | Source: https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node
- [supported, minor] controls[1].ui; Governance controls: per-user row / admin-path: The per-user control is at Microsoft 365 admin center > Users > Active users > user > OneDrive > Storage used > Edit. | Found: expand Users and select Active users. Select the user whose storage you want to change. Go to the OneDrive tab. Under Storage used, select Edit. Choose the Maximum storage for this user option and set the storage limit. | Fix: Extend controls[1].ui.path and the matching table path to 'Users > Active users > user > OneDrive > Storage used > Edit > Maximum storage for this user'. The existing path reaches the correct pane but stops before the option already named in the note. | Source: https://learn.microsoft.com/sharepoint/change-user-storage
- [supported, minor] controls[2].ui; Governance controls: budget row / admin-path: Budget preferences are at Microsoft 365 admin center > Billing > Pay-as-you-go > policy > Budget > Settings. | Found: go to Billing > Pay-as-you-go. On the Pay-as-you-go page, select the policy that you want to manage. In the policy panel, select the Budget tab. To configure your budget and alert preferences, select Settings. | Fix: Extend controls[2].ui.path and the matching table path to 'Billing > Pay-as-you-go > policy > Budget > Settings > Send email alerts > Add more' for the spending-alert threshold control. The cited page places additional alert thresholds under Send email alerts. | Source: https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node
- [supported, minor] controls[3].ui; Governance controls: default storage row / admin-path: The existing tenant default OneDrive storage setting is at SharePoint admin center > Settings > Storage limit. | Found: Go to Settings in the new SharePoint admin center... Select the OneDrive Storage limit setting. In the Default storage limit box, enter the default storage amount (in GB), and then select Save. | Fix: Extend controls[3].ui.path and the matching table path to 'Settings > Storage limit > Default storage limit'. The existing path reaches the pane that contains the control. | Source: https://learn.microsoft.com/onedrive/set-default-storage-space
- [supported, minor] Governance guidance: Before rollout / admin-path: The Active users > OneDrive > Storage used view in the Microsoft 365 admin center lets administrators inspect users' storage. | Found: In the left pane, select Users, and then select Active users. Select the user. Select the OneDrive tab. Next to "Storage used," look at the max value | Fix: Replace the abbreviated checklist path with 'Users > Active users > user > OneDrive > Storage used'. The table already supplies the user-selection step. | Source: https://learn.microsoft.com/onedrive/set-default-storage-space
- [supported, minor] Governance guidance: At rollout / admin-path: Billing policies are created at Billing > Pay-as-you-go. | Found: Sign in to the Microsoft 365 admin center, and then go to Billing > Pay-as-you-go. On the Billing policies tab, select Add a billing policy. | Fix: Expand the policy-creation path in the checklist to 'Billing > Pay-as-you-go > Billing policies > Add a billing policy'. The existing abbreviated path stops on the page listing the policies. | Source: https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node
-->
