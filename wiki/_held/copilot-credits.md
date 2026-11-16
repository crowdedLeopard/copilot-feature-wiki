---
kind: "concept"
title: "Copilot Credits: the shared meter for usage-based AI billing"
slug: "copilot-credits"
summary: "Copilot Credits are the common currency Microsoft uses to meter agents, Cowork, Work IQ APIs and other usage-based AI services. Administrators use spending policies and a billing method to decide who may spend, how much, and who is billed."
created: "2026-11-13"
updated: "2026-11-16"
version: 2
tags: ["copilot-credits","usage-based-billing","pay-as-you-go","p3","capacity-packs","cost-management","finops","spending-policies","m365-admin-center"]
covers: ["usage-based-billing","pay-as-you-go","p3","capacity-packs"]
sources:
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Manage Copilot Studio costs in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    kind: "learn"
  - title: "Usage-based billing: What you see in the Microsoft 365 admin center vs. your Azure bill"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views"
    kind: "learn"
  - title: "Understanding the user subscription license (USL) and usage-based billing (UBB)"
    url: "https://learn.microsoft.com/copilot/plan/user-subscription-license-usage-based-billing"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Purchase and manage Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-manage-buy-credits"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Track, manage, and scale Copilot adoption in the Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub"
    kind: "learn"
  - title: "Microsoft Copilot Credits report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    kind: "learn"
  - title: "Create spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    kind: "learn"
  - title: "Update costManagementAlertSetting"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementalertsetting-update"
    kind: "learn"
  - title: "List costManagementServiceUsageRecords"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list"
    kind: "learn"
related: ["work-iq","work-iq-a2a-and-mcp-long-running-tasks","managed-environments","m365-pay-as-you-go-storage-for-onedrive"]
controls:
  - governs: "Who may spend credits, with monthly policy and per-user limits (spending policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies (body: @odata.type, displayName, periodLimit, perUserLimit, serviceSettings)"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    note: "Beta API. Creating a policy needs the Billing Administrator or Global Administrator role; AI administrator and License administrator can edit but not create."
  - governs: "Spending limits for Copilot Studio environments or agents (resource-based policy)"
    scope: "environment"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy > Resources"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    api: null
    note: "Opt-in. Replaces Power Platform capacity allocations and billing plans for the environments it covers."
  - governs: "Billing method for a spending policy (prepaid capacity, P3 or pay-as-you-go)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > spending policy"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies (optional billingMethods property)"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    note: "Global administrator or Billing administrator sets or overrides the billing method."
  - governs: "Policy and per-user spending alerts"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementalertsetting-update"
    note: "Notify-only alerts. Beta API."
  - governs: "Prepaid credit allocation to an environment and overage behaviour"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Manage Capacity"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 (entitlementId MCSMessages, enforcementRules ruleType TenantPool)"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Power Platform Administrator or Global Administrator. A published environment group rule can lock the tenant-capacity setting."
  - governs: "Monthly credit limit and hard stop for a Copilot Studio agent"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Manage Agents"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
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
    note: "Read-only; reader roles suffice. The API takes one completed UTC day per call, is in beta and reports credits, not prices."
confidence: "medium"
dependents: 3
changes:
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected after the independent check: reworded the model-selector, licence-inclusion, spending-distribution, Power Platform navigation and uncovered-scope statements, and added the controls table."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 108 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 108
  confirmed: 103
  unconfirmed: 0
  contradicted: 5
  attempts: 2
  hash: "4369b20eb96107bb9edbdb40ad1dd62d"
---

## What it is

Copilot Credits are the common currency Microsoft uses to meter eligible AI services that have usage-based billing. A task is charged for the work it does rather than a flat per-user fee, and administrators decide who may spend credits (spending policies) and how they are paid for (billing method).

The same currency covers Copilot Cowork, Copilot Studio, Power Platform workloads and Work IQ APIs, agents on the Microsoft Copilot harness, and customer conversations in Microsoft Contact Center Intelligence. Microsoft lists the services governed from Copilot > Cost management in the Microsoft 365 admin center as including Cowork, advanced work in SharePoint and OneDrive, Work IQ API, Copilot Managed Runtime, Teams Phone Agent and Code. What a task consumes varies with the models used, the context retrieved, the runtime and the tools called.

**What consumes credits.** Advanced AI and frontier-model experiences can consume credits and require a user subscription licence (USL). Documented examples: metered Copilot Chat agents used by people without a Copilot licence, agent flows run by autonomous agents, and Cowork. On the Microsoft Copilot harness, billing starts when you start building, so previewing, testing and generating evaluations consume credits before anything is published.

**What a Copilot licence covers.** Employee-facing use of standard-harness Copilot Studio agents is included when the user is licensed and the agent operates using the authenticated licensed user's identity, within fair usage limits. For agent flows, inclusion applies only to runs started by the "When an agent calls the flow" trigger; other triggers consume credits. Computer-Using Agents are excluded. This inclusion is not documented for the Microsoft Copilot harness or Cowork.

### Three ways to pay

| Route | Bought where | Behaviour |
| --- | --- | --- |
| Pay-as-you-go | Linked Azure subscription | Billed in arrears for usage; no upfront commitment. Also covers usage after the other two run out, when enabled. |
| Copilot Credit Pre-purchase Plan (P3) | Azure portal or Microsoft 365 admin center | One-year commitment of discounted commit units; appears as a reservation benefit in Azure Cost Management. |
| Prepaid capacity packs | Microsoft 365 Marketplace, as licences | Allocated to environments in the Power Platform admin center; not shown in Azure Cost Management. |

With several sources, usage can draw on prepaid capacity before pay-as-you-go applies; the outcome depends on which methods are enabled and the balances left.

## Why it matters

Credits let an organisation decide who may spend, how much, and who is billed. Microsoft states that admins must set up a billing policy before a user can use AI experiences that require usage-based billing. Activating the default spending policy targets the whole organisation and all users, and its **Auto-apply new services** setting is on by default, so future supported services and agents join the policy unless you turn it off.

The per-user limit is optional at setup, but Microsoft advises setting one to stop a single person spending the available credits. Copilot Studio is a separate opt-in: until a Microsoft 365 resource-based spending policy covers an environment, existing Power Platform admin center controls stay in effect.

## Cost and licensing

This page gives no price per credit: Microsoft points to its Copilot Credits Guide for licensing details and publishes rates per product, such as [Billing rates and management](https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management) for Copilot Studio. Link to the product's own page for a rate.

**Licence.** Advanced AI experiences such as Cowork and Code consume credits and require a USL for access. Copilot Studio inclusion for licensed users is set out under What it is.

**Where it is charged.** Pay-as-you-go and P3 are billed to the linked Azure subscription. Cowork, Copilot Studio and Work IQ API usage appear under one service, **Microsoft Copilot Studio**, on the Azure bill, and usage can take up to 24 hours to appear in Azure Cost Management. The Microsoft 365 admin center shows credits, not currency, and its Cost Management API reports credits without pricing or invoices. Non-Copilot services such as SharePoint storage use Billing > Pay-as-you-go instead; see [OneDrive pay-as-you-go storage](/features/m365-pay-as-you-go-storage-for-onedrive/).

## Risks and limits

- **Switching Copilot Studio environments changes who controls them.** A resource-based policy replaces that environment's Power Platform capacity allocation and linked billing plan; **All environments** does this for every environment. Start with specific environments.
- **Policy precedence is not intuitive.** Microsoft 365 admin center policies override Power Platform ones, resource-based override identity-based, and overlapping limits are not combined. An agent that reaches its limit does not fall back to the user's identity-based policy.
- **Auto-apply new services widens coverage.** A policy with it on adds future services without a review.
- **Resource-based policies skip AI Builder.** Do not move resources that use AI Builder to them; their credits are not covered.
- **Agent limits are soft at the edges.** An agent can keep responding for some time after reaching its limit, and its limit does not stop the agent flows it calls. New flow runs stop only when the environment has no credits.
- **Capacity allocations shrink the shared pool.** Credits allocated to environments in the Power Platform admin center reduce what Microsoft 365 admin center services can use.
- **No credit source means blocked requests.** If no prepaid credits remain and pay-as-you-go is not enabled, requests are blocked.
- **Dashboards are not the invoice.** The admin centre can include non-billable usage; reconcile with the monthly billing record.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who may spend credits, with monthly policy and per-user limits (spending policy)</strong><br><small>Tenant</small><br><small class="controls__note">Beta API. Creating a policy needs the Billing Administrator or Global Administrator role; AI administrator and License administrator can edit but not create.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies (body: @odata.type, displayName, periodLimit, perUserLimit, serviceSettings)</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Spending limits for Copilot Studio environments or agents (resource-based policy)</strong><br><small>Environment</small><br><small class="controls__note">Opt-in. Replaces Power Platform capacity allocations and billing plans for the environments it covers.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy › Resources <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Billing method for a spending policy (prepaid capacity, P3 or pay-as-you-go)</strong><br><small>Tenant</small><br><small class="controls__note">Global administrator or Billing administrator sets or overrides the billing method.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies (optional billingMethods property)</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Policy and per-user spending alerts</strong><br><small>Tenant</small><br><small class="controls__note">Notify-only alerts. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementalertsetting-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Prepaid credit allocation to an environment and overage behaviour</strong><br><small>Environment</small><br><small class="controls__note">Power Platform Administrator or Global Administrator. A published environment group rule can lock the tenant-capacity setting.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Manage Capacity <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 (entitlementId MCSMessages, enforcementRules ruleType TenantPool)</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly credit limit and hard stop for a Copilot Studio agent</strong><br><small>Agent</small><br><small class="controls__note">Does not stop agent flows the agent calls. Limits are not applied instantly.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Manage Agents <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Credit consumption by policy, user, group, agent and service</strong><br><small>Tenant</small><br><small class="controls__note">Read-only; reader roles suffice. The API takes one completed UTC day per call, is in beta and reports credits, not prices.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management › Consumption <a href="https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/serviceUsageRecords?startDate={startDate}&amp;endDate={endDate}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Global administrator and Billing administrator can add and change billing methods. AI administrator and License administrator can edit policies, limits and alerts, but cannot create policies. AI Reader, Global Reader and License Administrator can view consumption without changing anything. For Copilot Studio resource-based policies, Microsoft recommends AI Administrator for Power Platform or Dynamics 365 administrators. Allocating capacity programmatically needs the Power Platform Administrator or Global Administrator role, or an equivalent.

**Interaction.** A published environment group rule on **Draw from the available capacity in my tenant** blocks per-environment changes in the admin centre and API alike. Setup also offers request-routing policies for credit requests and, for Cowork only, model templates; their paths are not read here.

**Reports.** Power Platform admin center downloads show consumption by environment and agent; the user report shows users only for standard-harness agents. Reports > Usage > Microsoft Copilot > Credits covers metered Copilot Chat agent use, with a maximum of 30 days of history during preview. Azure Cost Management is the billing view.

## What to check

- Confirm each spending policy's billing method and that pay-as-you-go is enabled if usage must continue after prepaid credits run out.
- Review each policy's monthly limit, per-user limit and alert thresholds and recipients.
- Check which Copilot Studio environments a Microsoft 365 resource-based policy covers, and which still use Power Platform allocations.
- Review the **Auto-apply new services** setting on every policy.
- Compare each environment's credit allocation and its **Draw from the available capacity in my tenant** setting.
- Review per-agent monthly limits on **Manage Agents** and whether the hard stop is wanted.
- Reconcile the Consumption view with Azure Cost Management monthly, using the billing record.

## Open questions

- Microsoft documents no API for creating resource-based spending policies or setting per-agent limits at the time of writing (November 2026). Is one planned?
- The Copilot Cost Management Graph API is in beta. When will it be supported for production use?
- Will Azure bills show a separate line for Cowork? Microsoft says not currently.
- Microsoft's setup pages name request routing for credit requests and Cowork model templates but this page gives no path or API for either. Where are they scripted?

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api / command: The printed POST spendingPolicies call with a body consisting of property names is sufficient to create a spending policy. | Found: Because spendingPolicy is abstract, the request body must set a concrete @odata.type, either #microsoft.graph.allUsersSpendingPolicy or #microsoft.graph.selectedGroupsSpendingPolicy. | Fix: Keep POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies and replace the parenthetical with this body, substituting the placeholders: {"@odata.type":"#microsoft.graph.allUsersSpendingPolicy","displayName":"<policy-name>","periodLimit":{"@odata.type":"#microsoft.graph.limitedCostManagementQuantity","value":<policy-credit-limit>,"unit":"copilotCredit"},"perUserLimit":{"@odata.type":"#microsoft.graph.limitedCostManagementQuantity","value":<user-credit-limit>,"unit":"copilotCredit"},"serviceSettings":[{"serviceId":"<service-id>","state":"enabled"}]}. Use Authorization: Bearer <token> and Content-Type: application/json. Qualify this as creation of an all-users policy, initially disabled; preserve the beta warning. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create
- [contradicted, blocker] controls[2].api / command: POST spendingPolicies with only an optional billingMethods property is a usable automation equivalent for setting a spending policy's billing method. | Found: Required properties are displayName, periodLimit, perUserLimit, and serviceSettings. You can optionally supply billingMethods. | Fix: Restrict the API-side description to 'Select a billing method when creating an all-users policy, initially disabled'. Keep POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies with Authorization: Bearer <token>, Content-Type: application/json and body {"@odata.type":"#microsoft.graph.allUsersSpendingPolicy","displayName":"<policy-name>","periodLimit":{"@odata.type":"#microsoft.graph.limitedCostManagementQuantity","value":<policy-credit-limit>,"unit":"copilotCredit"},"perUserLimit":{"@odata.type":"#microsoft.graph.limitedCostManagementQuantity","value":<user-credit-limit>,"unit":"copilotCredit"},"billingMethods":"prepaidCredits","serviceSettings":[{"serviceId":"<service-id>","state":"enabled"}]}. Label prepaidCredits as the example billing method from the reference, not a way to update an existing policy. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create
- [contradicted, blocker] controls[3].api / command: PATCH emailThresholdSettings configures both policy and per-user spending alerts. | Found: Notify-only alert configuration for a spending policy, addressed as the policy's emailThresholdSettings. Each policy has at most one, retrieved from its own URL beneath the policy. | Fix: Narrow the API-side description to 'Policy-level threshold alerts only; this call does not configure per-user notification thresholds'. Keep PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings with Authorization: Bearer <token>, Content-Type: application/json, If-Match: <parent-policy-ETag> and body {"isEnabled":true,"thresholds":[{"@odata.type":"#microsoft.graph.percentageCostManagementAlertThreshold","value":<threshold-percentage>}]}. State that recipients are managed separately and at least one must already be linked before enabling alerts. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/costmanagementalertsetting
- [contradicted, blocker] controls[4].api / command: The printed allocationsV2 PUT, specifying MCSMessages and ruleType TenantPool alone, configures allocation and overage behaviour. | Found: scope = @{ environmentId = $environmentId } allocatedEntitlements = @( @{ entitlementId    = "MCSMessages" allocation       = @{ quantity = 5000 } | Fix: The pre-check's literal-URL miss is not an endpoint error: the tutorial constructs this URL from apiBaseUrl and apiVersion. Keep PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 with Authorization: Bearer <token> and Content-Type: application/json. Replace the parenthetical with body {"scope":{"environmentId":"<environment-id>"},"allocatedEntitlements":[{"entitlementId":"MCSMessages","allocation":{"quantity":<credit-quantity>},"enforcementRules":[{"ruleType":"TenantPool","enabled":<true-or-false>}]}]}. Explain that enabled=false prevents tenant-pool draw and enabled=true permits it; these settings do not disable a separate pay-as-you-go source. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [contradicted, blocker] controls[6].api / command: GET serviceUsageRecords is an API equivalent for consumption by policy, user, group, agent and service. | Found: Get a list of costManagementServiceUsageRecord objects that report each governed service's share of the tenant's consumption of Copilot Credits for one completed UTC day. | Fix: Keep the endpoint and query parameters, but add an explicit API-side qualifier: 'Service-level totals only; this call does not provide the UI's policy, user, group or agent breakdowns.' Make the qualifier visible in both the structured control note and rendered API cell; do not describe the call as equivalent to all UI dimensions. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[4].ui / admin-path: Environment credit allocation and overage settings are reached through Licensing > Products > Copilot Studio > Summary > Manage Capacity. | Found: Select Manage Capacity from the Prepaid capacity card. In the allocation panel, select an environment and specify the number of Copilot Credits to allocate in the Copilot Credits textbox. | Fix: Append the omitted environment selection: 'Licensing > Products > Copilot Studio > Summary > Manage Capacity > environment'. Apply the same change to the rendered table. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
- [supported, minor] What it is: What a Copilot licence covers / licensing: Employee-facing standard-harness agent usage is included when the user has a Copilot licence and the agent uses that authenticated licensed user's identity. | Found: Employee-facing usage scenarios (Business to Employee) of Copilot Studio agents and Copilot Studio tools and features that these agents invoke are included in the Microsoft Copilot USL when the user of the agent is licensed with Microsoft Copilot | Fix: The cited billing page supports the sentence, but https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness qualifies standard-harness inclusion as 'Yes, in Microsoft 365 channels' and says use outside Microsoft 365 is billed. Add 'in Microsoft 365 channels' to the inclusion sentence and cite that qualification rather than leaving the two pages' scopes unresolved. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management
- [supported, minor] sources; controls[0].ui; controls[3].ui; What it is: licence inclusion / behaviour: Identity-policy user limits and alerts, and the channel qualification for licence inclusion, rely on Microsoft pages missing from the sources. | Found: User-level notifications alert users as they approach their spending limit. The user-level notifications are separate from notifications sent to administrators or stakeholders about overall policy consumption. | Fix: Add https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits and https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness to sources. Point controls[0].ui.docs and controls[3].ui.docs, and their rendered Learn links, to the former: the currently linked resource-policy page documents per-agent rather than per-user limits and notifications. Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/costmanagementalertsetting when citing the policy-only API qualification. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
-->
