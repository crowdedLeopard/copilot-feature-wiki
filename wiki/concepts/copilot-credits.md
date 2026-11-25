---
kind: "concept"
title: "Copilot Credits: the shared meter for usage-based AI billing"
slug: "copilot-credits"
summary: "Copilot Credits are the common currency Microsoft uses to meter agents, Cowork, Work IQ APIs and other usage-based AI services. Administrators use spending policies and a billing method to decide who may spend, how much, and who is billed."
created: "2026-11-13"
updated: "2026-11-25"
version: 5
tags: ["copilot-credits","usage-based-billing","pay-as-you-go","p3","capacity-packs","cost-management","finops","spending-policies","m365-admin-center"]
covers: ["usage-based-billing","pay-as-you-go","p3","capacity-packs"]
sources:
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Manage Copilot Studio costs in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    kind: "learn"
  - title: "Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Create spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    kind: "learn"
  - title: "allUsersSpendingPolicy resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/allusersspendingpolicy"
    kind: "learn"
  - title: "Update costManagementAlertSetting"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementalertsetting-update"
    kind: "learn"
  - title: "List costManagementServiceUsageRecords"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list"
    kind: "learn"
  - title: "Microsoft Copilot Credits Report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    kind: "learn"
  - title: "Usage-Based Billing and Cost Management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Understanding the user subscription license (USL) and usage-based billing (UBB)"
    url: "https://learn.microsoft.com/copilot/plan/user-subscription-license-usage-based-billing"
    kind: "learn"
  - title: "Usage-Based Billing FAQ for Microsoft 365 Copilot Business"
    url: "https://learn.microsoft.com/microsoft-365/commerce/usage-based-billing-faq-microsoft-365-copilot-business"
    kind: "learn"
  - title: "View Copilot Credit consumption in the Microsoft 365 admin center and on your Azure bill"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views"
    kind: "learn"
  - title: "Purchase and manage Copilot Credits in usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-manage-buy-credits"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "costManagementAlertSetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/costmanagementalertsetting"
    kind: "learn"
  - title: "Monitor Copilot Credit spending"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending"
    kind: "learn"
related: ["work-iq","managed-environments","spending-policies","m365-pay-as-you-go-storage-for-onedrive"]
controls:
  - governs: "Who may spend credits, with monthly policy and per-user limits (spending policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy > Identity > Select agents and services > Set limits and alerts"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    note: "Beta API. Body sets @odata.type (allUsersSpendingPolicy), displayName, periodLimit, perUserLimit, serviceSettings; creates an all-users policy, initially disabled. Needs Billing Administrator or Global Administrator."
  - governs: "Spending limits for Copilot Studio environments or agents (resource-based policy)"
    scope: "environment"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy > Resources > Specific environments > monthly spending limit"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    api: null
    note: "Opt-in. Replaces Power Platform capacity allocations and billing plans for covered environments. After Resources, choose Specific environments or Specific resources; then set the monthly spending limit."
  - governs: "Billing method for a spending policy (prepaid capacity, P3 or pay-as-you-go)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > spending policy > Billing method"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    note: "API sets billingMethods on creation; prepaidCredits is a documented value. All-users policy, initially disabled; not an update to an existing policy. UI: Global or Billing administrator."
  - governs: "Policy and per-user spending alerts"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy > Identity > Select agents and services > Set limits and alerts"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementalertsetting-update"
    note: "Notify-only. Beta API. Body sets isEnabled and thresholds; policy-level thresholds only, not per-user ones. Needs If-Match: <parent-policy-ETag>; recipients are managed separately and one must be linked before enabling."
  - governs: "Prepaid credit allocation to an environment and overage behaviour"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Prepaid capacity > Manage Capacity > environment > Capacity overages > Draw from the available capacity in my tenant"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Body: scope.environmentId, allocatedEntitlements (entitlementId MCSMessages, allocation, enforcementRules). TenantPool enabled=false caps at the allocation; a linked pay-as-you-go plan still bills. A published group rule can lock it."
  - governs: "Monthly credit limit and hard stop for a Copilot Studio agent"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Manage Agents > agent > Set limit > Stop usage"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    api: null
    note: "Does not stop agent flows the agent calls. Limits are not applied instantly."
  - governs: "Credit consumption by policy, user, group, agent and service"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management > Consumption"
      docs: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/serviceUsageRecords?startDate={startDate}&endDate={endDate}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list"
    note: "Read-only; reader roles suffice. API gives service-level totals only, not the UI's policy, user, group or agent breakdowns. One completed UTC day per call; beta; credits, not prices."
confidence: "medium"
dependents: 150
changes:
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected after the independent check: reworded the model-selector, licence-inclusion, spending-distribution, Power Platform navigation and uncovered-scope statements, and added the controls table."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 108 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-16"
    note: "Corrected the Graph and Power Platform API calls (request bodies, all-users and initially-disabled qualifiers, policy-level alerts, service-level usage totals) and added the Microsoft 365 channels qualification to licence inclusion."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 115 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 117 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after the independent check: admin paths for spending-policy limits, alerts and agent limits, Graph and Power Platform API calls reduced to the operation, user-report wording, billing-policy default, Credits report path; removed the Auto-apply checklist item."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 125 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 127 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: agent-flow test runs are now excluded from the other-triggers statement, the blocked-requests bullet now notes the 125% enforcement rule, the credits-versus-currency statement reports the Cost field, and two admin paths were extended."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 133 statements confirmed"
verification:
  status: "verified"
  date: "2026-11-25"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 133
  confirmed: 133
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c236d9646cf1045432add787ad904cf8"
---

## What it is

Copilot Credits are the common currency Microsoft uses to meter eligible AI services that have usage-based billing. A task is charged for the work it does rather than a flat per-user fee, and administrators decide who may spend credits (spending policies) and how they are paid for (billing method).

The same currency covers Copilot Cowork, Copilot Studio, Power Platform workloads and Work IQ APIs, agents on the Microsoft Copilot harness, and customer conversations in Microsoft Contact Center Intelligence. Microsoft lists the services governed from Copilot > Cost management in the Microsoft 365 admin center as including Cowork, advanced work in SharePoint and OneDrive, Work IQ API, Copilot Managed Runtime, Teams Phone Agent and Code. What a task consumes varies with the models used, the context retrieved, the runtime and the tools called.

**What consumes credits.** Advanced AI and frontier-model experiences can consume credits and require a user subscription licence (USL). Documented examples: metered Copilot Chat agents used by people without a Copilot licence, agent flows run by autonomous agents, and Cowork. On the Microsoft Copilot harness, billing starts when you start building, so previewing, testing and generating evaluations consume credits before anything is published.

**What a Copilot licence covers.** Employee-facing use of standard-harness Copilot Studio agents is included in Microsoft 365 channels when the user is licensed and the agent operates using the authenticated licensed user's identity, within fair usage limits. For agent flows, inclusion applies only to runs started by the "When an agent calls the flow" trigger; outside test runs, agent flows using other triggers consume credits. Computer-Using Agents are excluded. This inclusion is not documented for the Microsoft Copilot harness or Cowork.

### Three ways to pay

| Route | Bought where | Behaviour |
| --- | --- | --- |
| Pay-as-you-go | Linked Azure subscription | Billed in arrears for usage; no upfront commitment. Also covers usage after the other two run out, when enabled. |
| Copilot Credit Pre-purchase Plan (P3) | Azure portal or Microsoft 365 admin center | One-year commitment of discounted commit units; appears as a reservation benefit in Azure Cost Management. |
| Prepaid capacity packs | Microsoft 365 Marketplace, as licences | Allocated to environments in the Power Platform admin center; not shown in Azure Cost Management. |

With several sources, usage can draw on prepaid capacity before pay-as-you-go applies; the outcome depends on which methods are enabled and the balances left.

## Why it matters

Credits let an organisation decide who may spend, how much, and who is billed. Microsoft's USL/UBB page says administrators must set up a billing policy before use; its Microsoft 365 Copilot Business FAQ also documents that, for eligible new purchases, pay-as-you-go may be configured by default and Microsoft creates the required Azure resources and applies a spending policy. Activating the default spending policy targets the whole organisation and all users, and its **Auto-apply new services** setting is on by default, so future supported services and agents join the policy unless you turn it off.

The per-user limit is optional at setup, but Microsoft advises setting one to stop a single person spending the available credits. Copilot Studio is a separate opt-in: until a Microsoft 365 resource-based spending policy covers an environment, existing Power Platform admin center controls stay in effect.

## Cost and licensing

This page gives no price per credit: Microsoft points to its Copilot Credits Guide for licensing details and publishes rates per product, such as [Billing rates and management](https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management) for Copilot Studio. Link to the product's own page for a rate.

**Licence.** Advanced AI experiences such as Cowork and Code consume credits and require a USL for access. Copilot Studio inclusion for licensed users is set out under What it is.

**Where it is charged.** Pay-as-you-go and P3 are billed to the linked Azure subscription. Cowork, Copilot Studio and Work IQ API usage appear under one service, **Microsoft Copilot Studio**, on the Azure bill, and usage can take up to 24 hours to appear in Azure Cost Management. The dashboard-comparison page says the Microsoft 365 admin center view uses credits rather than currency. Monitor Copilot Credit spending also documents a Cost field showing the estimated cost of AI usage in local currency, including negotiated rates; that estimate may not match the bill. The Cost Management API reports credits without pricing or invoices. Non-Copilot services such as SharePoint storage use Billing > Pay-as-you-go instead; see [OneDrive pay-as-you-go storage](/features/m365-pay-as-you-go-storage-for-onedrive/).

## Risks and limits

- **Switching Copilot Studio environments changes who controls them.** A resource-based policy replaces that environment's Power Platform capacity allocation and linked billing plan; **All environments** does this for every environment. Start with specific environments.
- **Policy precedence is not intuitive.** Microsoft 365 admin center policies override Power Platform ones, resource-based override identity-based, and overlapping limits are not combined. An agent that reaches its limit does not fall back to the user's identity-based policy.
- **Auto-apply new services widens coverage.** A policy with it on adds future services without a review.
- **Resource-based policies skip AI Builder.** Do not move resources that use AI Builder to them; their credits are not covered.
- **Agent limits are soft at the edges.** An agent can keep responding for some time after reaching its limit, and its limit does not stop the agent flows it calls. New flow runs stop only when the environment has no credits.
- **Capacity allocations shrink the shared pool.** Credits allocated to environments in the Power Platform admin center reduce what Microsoft 365 admin center services can use.
- **No credit source can mean blocked requests, and the rule differs by product.** The dashboard-comparison page says requests are blocked when limits or available credit sources are exhausted and pay-as-you-go is not enabled. For standard-harness prepaid custom agents, [Billing rates and management](https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management#overage-enforcement) instead documents an overage grace period and enforcement at 125% of tenant prepaid capacity.
- **Dashboards are not the invoice.** The admin centre can include non-billable usage; reconcile with the monthly billing record.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who may spend credits, with monthly policy and per-user limits (spending policy)</strong><br><small>Tenant</small><br><small class="controls__note">Beta API. Body sets @odata.type (allUsersSpendingPolicy), displayName, periodLimit, perUserLimit, serviceSettings; creates an all-users policy, initially disabled. Needs Billing Administrator or Global Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy › Identity › Select agents and services › Set limits and alerts <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Spending limits for Copilot Studio environments or agents (resource-based policy)</strong><br><small>Environment</small><br><small class="controls__note">Opt-in. Replaces Power Platform capacity allocations and billing plans for covered environments. After Resources, choose Specific environments or Specific resources; then set the monthly spending limit.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy › Resources › Specific environments › monthly spending limit <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Billing method for a spending policy (prepaid capacity, P3 or pay-as-you-go)</strong><br><small>Tenant</small><br><small class="controls__note">API sets billingMethods on creation; prepaidCredits is a documented value. All-users policy, initially disabled; not an update to an existing policy. UI: Global or Billing administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Billing method <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Policy and per-user spending alerts</strong><br><small>Tenant</small><br><small class="controls__note">Notify-only. Beta API. Body sets isEnabled and thresholds; policy-level thresholds only, not per-user ones. Needs If-Match: &lt;parent-policy-ETag&gt;; recipients are managed separately and one must be linked before enabling.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy › Identity › Select agents and services › Set limits and alerts <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementalertsetting-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Prepaid credit allocation to an environment and overage behaviour</strong><br><small>Environment</small><br><small class="controls__note">Body: scope.environmentId, allocatedEntitlements (entitlementId MCSMessages, allocation, enforcementRules). TenantPool enabled=false caps at the allocation; a linked pay-as-you-go plan still bills. A published group rule can lock it.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Prepaid capacity › Manage Capacity › environment › Capacity overages › Draw from the available capacity in my tenant <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly credit limit and hard stop for a Copilot Studio agent</strong><br><small>Agent</small><br><small class="controls__note">Does not stop agent flows the agent calls. Limits are not applied instantly.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Manage Agents › agent › Set limit › Stop usage <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Credit consumption by policy, user, group, agent and service</strong><br><small>Tenant</small><br><small class="controls__note">Read-only; reader roles suffice. API gives service-level totals only, not the UI's policy, user, group or agent breakdowns. One completed UTC day per call; beta; credits, not prices.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management › Consumption <a href="https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/serviceUsageRecords?startDate={startDate}&amp;endDate={endDate}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Global administrator and Billing administrator can add and change billing methods. AI administrator and License administrator can edit policies, limits and alerts, but cannot create policies. AI Reader, Global Reader and License Administrator can view consumption without changing anything. For Copilot Studio resource-based policies, Microsoft recommends AI Administrator for Power Platform or Dynamics 365 administrators. Allocating capacity programmatically needs the Power Platform Administrator or Global Administrator role, or an equivalent.

**Interaction.** A published environment group rule on **Draw from the available capacity in my tenant** blocks per-environment changes in the admin centre and API alike. Setup also offers request-routing policies for credit requests and, for Cowork only, model templates; their paths are not read here.

**Reports.** Power Platform admin center downloads show consumption by environment and agent; for agents powered by the standard harness, the user report also shows consumption by user. Reports > Usage > Reports > Microsoft Copilot > Credits covers metered Copilot Chat agent use, with a maximum of 30 days of history during preview. Azure Cost Management is the billing view.

## What to check

- Confirm each spending policy's billing method and that pay-as-you-go is enabled if usage must continue after prepaid credits run out.
- Review each policy's monthly limit, per-user limit and alert thresholds and recipients.
- Check which Copilot Studio environments a Microsoft 365 resource-based policy covers, and which still use Power Platform allocations.
- Compare each environment's credit allocation and its **Draw from the available capacity in my tenant** setting.
- Review per-agent monthly limits on **Manage Agents** and whether the hard stop is wanted.
- Reconcile the Consumption view with Azure Cost Management monthly, using the billing record.

## Open questions

- Microsoft documents no API for creating resource-based spending policies or setting per-agent limits at the time of writing (November 2026). Is one planned?
- The Copilot Cost Management Graph API is in beta. When will it be supported for production use?
- Will Azure bills show a separate line for Cowork? Microsoft says not currently.
- Microsoft's setup pages name request routing for credit requests and Cowork model templates but this page gives no path or API for either. Where are they scripted?
