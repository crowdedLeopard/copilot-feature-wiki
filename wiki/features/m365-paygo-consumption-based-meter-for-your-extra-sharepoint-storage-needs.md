---
title: "Microsoft 365: pay-as-you-go meter for SharePoint storage above the tenant quota"
slug: "m365-paygo-consumption-based-meter-for-your-extra-sharepoint-storage-needs"
roadmapId: 506743
topic: "modern-work"
products: ["Microsoft 365"]
summary: "An opt-in, Azure-billed meter charges per GB for SharePoint storage above the tenant quota instead of Extra File Storage packs. Nothing changes until an admin connects it; the budget only alerts."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "June CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Billed as Microsoft 365 SharePoint Storage through an Azure subscription; Learn's pricing page lists $0.20/GB/month for data above the SharePoint tenant quota. The tenant needs at least one SharePoint licence or a licence that includes SharePoint."
audiences: ["m365-admin","finops","service-owner"]
tags: ["sharepoint","pay-as-you-go","usage-based-billing","licensing","m365-admin-center","cost-management","finops","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 506743"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=506743"
    kind: "roadmap"
  - title: "MC1330893: (Updated) Pay-as-you-go consumption-based meter for your extra SharePoint storage needs"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1330893"
    kind: "message-center"
  - title: "Add more OneDrive and SharePoint storage to your Microsoft 365 subscription"
    url: "https://learn.microsoft.com/microsoft-365/commerce/add-storage-space"
    kind: "learn"
  - title: "Set up and manage pay-as-you-go billing in the Billing node of the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    kind: "learn"
  - title: "Pay-as-you-go pricing for document processing for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/documentprocessing/syntex-pay-as-you-go-services"
    kind: "learn"
  - title: "reportRoot: getSharePointSiteUsageStorage"
    url: "https://learn.microsoft.com/graph/api/reportroot-getsharepointsiteusagestorage?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["m365-pay-as-you-go-storage-for-onedrive"]
controls:
  - governs: "Whether SharePoint storage above the tenant quota is billed"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > Services > Connect a policy > Connection status"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    api: null
    note: "Select Microsoft 365 SharePoint Storage as the service. Roles: SharePoint, Billing, AI or Global Administrator. Disconnect with the same toggle."
  - governs: "Which Azure subscription, resource group and region receive the charges"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > Billing policies > Add a billing policy"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    api: null
    note: "A subscription or resource group cannot be edited once associated with a billing policy. Owner or Contributor rights on both are required."
  - governs: "Spending budget and alert thresholds for the billing policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > Billing policies > policy > Budget > Settings"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    api: null
    note: "Set at billing policy level only. Alerts only: reaching 100% of the budget does not stop the service or billing."
  - governs: "Hard spending cap that stops SharePoint storage billing"
    scope: "tenant"
    ui: null
    api: null
    note: "No such control is documented; disconnect the service to stop this meter. The budget does not stop billing."
  - governs: "Storage used against the tenant quota"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Active sites"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/add-storage-space"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/v1.0/reports/getSharePointSiteUsageStorage(period='D7')"
      docs: "https://learn.microsoft.com/graph/api/reportroot-getsharepointsiteusagestorage?view=graph-rest-1.0"
    note: "Active sites excludes changes from the last 24-48 hours. The Graph report gives storage trends and needs Reports.Read.All; it is not a live PAYGO billing balance."
  - governs: "Prepaid extra storage as an alternative to the meter"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Add more products > Office 365 > Office 365 Extra File Storage > Details"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/add-storage-space"
    api: null
    note: "Existing add-on, not a control over the new meter. Path is for Simplified view with an MCA billing account; the MOSA path differs."
confidence: "high"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item; reflects Microsoft's 9 November 2026 notice moving General Availability to January 2027 and the pricing and billing steps documented on Learn."
  - date: "2026-11-16"
    note: "Correction: removed the unsupported 'no new data access' claim, added the documented Graph storage usage report to the storage row, and replaced the exclusive 'only way to stop billing' wording."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 74 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 78 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 78
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "68a591b85b536e9a435ecd1ea834b2f1"
---

## What's changing

Microsoft is adding a pay-as-you-go meter for SharePoint storage. Once an administrator connects it, storage above the tenant quota is billed by consumption to an Azure subscription, instead of being capped by the quota or covered by prepaid Office 365 Extra File Storage packs. The roadmap item says it also integrates with Microsoft 365 Archive.

Microsoft's notice MC1330893 says the feature is opt-in and off by default, that administrators enable it in the Microsoft 365 admin center, and that storage used above the included tenant quota is then billed automatically. It says there is no impact to users and that the Office 365 Extra File Storage add-on remains available. Learn calls the service Microsoft 365 SharePoint Storage and says that while a tenant is enrolled it does not receive quota-related email or banner notifications in the SharePoint admin center, because the tenant is considered within quota. For a multi-geo tenant, billing is based on the tenant's storage quota, not each geo's quota, and starts when total usage across all geos exceeds the tenant quota.

The roadmap item is In development, with a preview date of June CY2026 and a General Availability target of January CY2027; it lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform. MC1330893, updated 9 November 2026, says Public Preview rollout completed in June 2026 and that General Availability is expected to begin in early January 2027 (previously early November) and complete by late January 2027 (previously end of November). Learn states that, as of June 2026, the service is in public preview for all commercial tenants. Microsoft's notice sets no act-by date.

## Why it matters

This moves SharePoint storage overage from a purchase decision to a metered charge. An administrator can stop a tenant hitting its quota without buying capacity in advance, but the quota stops working as an early-warning signal and the spend has no hard ceiling, so the choice is one for finance as much as for SharePoint owners.

Nothing happens if nobody acts: the meter stays off and the existing quota behaviour continues. The decision for a service owner is whether a consumption model suits the tenant better than Extra File Storage packs, and who owns the Azure subscription that receives the charges.

## Risk assessment

**Data exposure**
- The meter bills on storage volume. When the billing policy is created, the Region chosen determines where the tenant ID and usage data are stored, so pick it with data residency in mind.

**Security & identity**
- Setup needs one of the SharePoint Administrator, Billing Administrator, AI Administrator or Global Administrator roles, plus Owner or Contributor rights on the Azure subscription and resource group. Limit who holds both, because connecting the service commits the organisation to Azure charges.

**Autonomy & actions**
- Once the service is connected, overage is billed automatically with no further approval. The budget on the billing policy only sends alerts: reaching 100% of the budget does not stop the service or billing. Disconnect the service to stop this meter; if the tenant is then over quota, quota enforcement resumes immediately.

**Change & support**
- While enrolled, quota emails and SharePoint admin center banners stop because the tenant counts as within quota, so storage growth will not announce itself. Use the budget alerts, the Active sites page and Azure Cost Management instead.
- Expect questions from finance when the Azure invoice shows a new line, and decide in advance whether the existing Extra File Storage add-on stays alongside it.

## Cost and licensing

**Licence.** Learn's prerequisites for this service list admin roles, Azure rights and one SharePoint licence (or a licence that includes SharePoint); they name no separate user licence for the meter.

**Meter.** Microsoft 365 SharePoint Storage counts the gigabytes of data that exceed the SharePoint tenant quota. Learn's pricing page lists $0.20/GB/month, shown on the invoice as $0.00667/GB/day, and says the Azure consumption discount (ACD) applies to storage services while the Microsoft Azure Consumption Commitment (MACC) does not. That page does not separate preview from General Availability pricing. Charges appear on the linked Azure subscription and can be monitored in Microsoft Cost Management.

**Caps.** The budget is set at billing policy level, not per user, agent or site, and only alerts. No hard cap is documented at the time of writing (November 2026).

**Alternative.** Office 365 Extra File Storage adds storage in 1-GB increments through the Microsoft 365 admin center; if you bought through Volume Licensing or a Cloud Solution Provider (CSP), you cannot buy it directly from Microsoft.

## Scope

- **Tenants:** commercial tenants. The roadmap item lists Worldwide (Standard Multi-Tenant) only. Learn says the product is not currently available to education, GCC or Microsoft 365 operated by 21Vianet in China customers; Microsoft's notice names education tenants.
- **Users:** no end-user impact according to Microsoft's notice; the billing policy covers all users for this service.
- **Roles:** SharePoint Administrator, Billing Administrator, AI Administrator or Global Administrator in the Microsoft 365 admin center; creating a new Azure subscription from the admin center needs Billing Account Owner or Billing Account Contributor.
- **Prerequisites:** an Azure subscription and resource group in the same tenant (they can be created during policy setup), Owner or Contributor rights on both, and at least one SharePoint licence.
- **Platform:** Web, per the roadmap record.

## Governance guidance

### Before rollout
- Compare current storage with the tenant quota in the SharePoint admin center, on the Active sites page, to estimate how much would be billed.
- Decide with finance whether pay-as-you-go or the Office 365 Extra File Storage add-on suits the tenant, and who owns the Azure subscription.
- Confirm that someone holds a qualifying admin role and Owner or Contributor on the Azure subscription and resource group.
- Agree the budget amount, reset period and mail-enabled alert recipients before creating the billing policy.

### At rollout
- Create the billing policy under Billing > Pay-as-you-go, choosing the Azure subscription, resource group and region.
- Set the budget and alert thresholds when creating the policy, and add recipients.
- Connect Microsoft 365 SharePoint Storage to the policy only when you are ready for overage to be billed.

### After rollout
- Review spending on the policy's Budget tab and in Microsoft Cost Management; consumption data can take up to four hours to appear.
- Check the Active sites page regularly, since quota emails and banners are suppressed while the tenant is enrolled.
- Disconnect the service if overage should stop being billed, remembering that quota enforcement then resumes immediately.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether SharePoint storage above the tenant quota is billed</strong><br><small>Tenant</small><br><small class="controls__note">Select Microsoft 365 SharePoint Storage as the service. Roles: SharePoint, Billing, AI or Global Administrator. Disconnect with the same toggle.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › Services › Connect a policy › Connection status <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Azure subscription, resource group and region receive the charges</strong><br><small>Tenant</small><br><small class="controls__note">A subscription or resource group cannot be edited once associated with a billing policy. Owner or Contributor rights on both are required.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › Billing policies › Add a billing policy <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Spending budget and alert thresholds for the billing policy</strong><br><small>Tenant</small><br><small class="controls__note">Set at billing policy level only. Alerts only: reaching 100% of the budget does not stop the service or billing.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › Billing policies › policy › Budget › Settings <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Hard spending cap that stops SharePoint storage billing</strong><br><small>Tenant</small><br><small class="controls__note">No such control is documented; disconnect the service to stop this meter. The budget does not stop billing.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Storage used against the tenant quota</strong><br><small>Tenant</small><br><small class="controls__note">Active sites excludes changes from the last 24-48 hours. The Graph report gives storage trends and needs Reports.Read.All; it is not a live PAYGO billing balance.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Active sites <a href="https://learn.microsoft.com/microsoft-365/commerce/add-storage-space" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/v1.0/reports/getSharePointSiteUsageStorage(period='D7')</code> <a href="https://learn.microsoft.com/graph/api/reportroot-getsharepointsiteusagestorage?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Prepaid extra storage as an alternative to the meter</strong><br><small>Tenant</small><br><small class="controls__note">Existing add-on, not a control over the new meter. Path is for Simplified view with an MCA billing account; the MOSA path differs.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Add more products › Office 365 › Office 365 Extra File Storage › Details <a href="https://learn.microsoft.com/microsoft-365/commerce/add-storage-space" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Connect the service to start billing and disconnect it to stop this meter; the budget does not enforce. Budget alert emails can take up to 24 hours to reach recipients, so a fast-growing tenant can overshoot a threshold before anyone is told. Learn documents the admin center for setup and does not document a PowerShell, Microsoft Graph or REST call for creating the billing policy or connecting this service at the time of writing (November 2026). Extra File Storage is an alternative, not a control over the new meter: it raises the quota by purchase instead of billing overage.

## Open questions

- Will the $0.20/GB/month rate on Learn's pricing page apply unchanged at General Availability? Watch the pricing page and Message center.
- Is any hard spending cap or automatic stop planned, given that reaching 100% of a budget does not stop billing?
- Which other quota-based behaviours change while a tenant is enrolled and counted as within quota, beyond the suppressed emails and banners?
- How exactly does the meter work with Microsoft 365 Archive, which the roadmap item says it integrates with? Watch the Learn page Add more OneDrive and SharePoint storage to your Microsoft 365 subscription.
- Will education, GCC and Microsoft 365 operated by 21Vianet tenants be supported, and will any scripted setup be documented?

<!-- rationale
risk: Low. Microsoft's notice says the meter is opt-in and off by default, so nothing is billed until an administrator connects a billing policy; once connected, the budget raises alerts but does not stop billing.
cost: Variable. This is a metered pay-as-you-go service billed through an Azure subscription on the gigabytes of SharePoint data above the tenant quota; Learn's pricing page lists $0.20/GB/month.
impact: Low. Administrators, finance and procurement notice it; Microsoft's notice MC1330893 says there is no impact to users.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Risk assessment: Security & identity; Scope: Roles / role: The billing article permits SharePoint Administrator, Billing Administrator, AI Administrator or Global Administrator for setup. | Found: You must have one of the following roles to complete the tasks in this article: SharePoint Administrator; Billing Administrator; AI Administrator; Global Administrator | Fix: Retain the billing article's role list and add in Scope: "The storage-specific prerequisites page instead lists SharePoint Administrator or Global Administrator; its SharePoint section refers to the shared OneDrive prerequisites: https://learn.microsoft.com/microsoft-365/commerce/add-storage-space#prerequisites-for-adding-microsoft-365-onedrive-storage." | Source: https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node
- [supported, minor] controls[1].ui; Governance controls table; Governance guidance: At rollout / admin-path: Microsoft 365 admin center > Billing > Pay-as-you-go > Billing policies > Add a billing policy leads to Azure billing details. | Found: go to Billing > Pay-as-you-go. On the Billing policies tab, select Add a billing policy. On the Billing details page, enter a name for the billing policy. | Fix: Extend controls[1].ui.path to "Billing > Pay-as-you-go > Billing policies > Add a billing policy > Billing details". Retain the note explaining that the subscription, resource group and region are selected there, as documented at https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node. | Source: https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Microsoft 365 admin center > Billing > Pay-as-you-go > Billing policies > policy > Budget > Settings opens budget configuration. | Found: On the Billing policies tab, select a billing policy. In the billing policy side panel, select the Budget tab. To configure your budget and alert preferences, select Settings. Select the Set a budget for this policy checkbox. | Fix: Extend controls[2].ui.path to "Billing > Pay-as-you-go > Billing policies > policy > Budget > Settings > Set a budget for this policy". The cited billing-node article documents this checkbox and the budget and alert fields that follow. | Source: https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node
- [supported, minor] controls[5].ui; Governance controls table / admin-path: Microsoft 365 admin center > Billing > Add more products > Office 365 > Office 365 Extra File Storage > Details reaches the add-on purchase page. | Found: If you're using the Simplified view, select Billing, and then select Add more products. Under View by category, select Office 365. Find Office 365 Extra File Storage, and then select Details. | Fix: Restore the omitted heading: set controls[5].ui.path to "Billing > Add more products > View by category > Office 365 > Office 365 Extra File Storage > Details". Keep the existing Simplified view/MCA qualification. | Source: https://learn.microsoft.com/microsoft-365/commerce/add-storage-space
-->
