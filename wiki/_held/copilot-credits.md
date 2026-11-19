---
kind: "concept"
title: "Copilot Credits: the shared meter for usage-based AI billing"
slug: "copilot-credits"
summary: "Copilot Credits are the common currency Microsoft uses to meter agents, Cowork, Work IQ APIs and other usage-based AI services. Administrators use spending policies and a billing method to decide who may spend, how much, and who is billed."
created: "2026-11-13"
updated: "2026-11-16"
version: 3
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
  - title: "costManagementAlertSetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/costmanagementalertsetting"
    kind: "learn"
  - title: "List costManagementServiceUsageRecords"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    kind: "learn"
related: ["work-iq","work-iq-a2a-and-mcp-long-running-tasks","managed-environments","m365-pay-as-you-go-storage-for-onedrive"]
controls:
  - governs: "Who may spend credits, with monthly policy and per-user limits (spending policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies body {\"@odata.type\":\"#microsoft.graph.allUsersSpendingPolicy\",\"displayName\":\"<name>\",\"periodLimit\":<limit>,\"perUserLimit\":<limit>,\"serviceSettings\":<settings>}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    note: "Beta API. This body creates an all-users policy, initially disabled. Needs Billing Administrator or Global Administrator; AI administrator and License administrator can edit but not create."
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
      call: "POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies {\"@odata.type\":\"#microsoft.graph.allUsersSpendingPolicy\",<displayName, periodLimit, perUserLimit, serviceSettings>,\"billingMethods\":\"prepaidCredits\"}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    note: "API: selects a billing method when creating an all-users policy, initially disabled; prepaidCredits is the reference's example, not a way to update an existing policy. UI: Global or Billing administrator."
  - governs: "Policy and per-user spending alerts"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings body {\"isEnabled\":true,\"thresholds\":[{\"@odata.type\":\"#microsoft.graph.percentageCostManagementAlertThreshold\",\"value\":<percent>}]}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementalertsetting-update"
    note: "Notify-only. Beta API. API covers policy-level thresholds only, not per-user ones. Needs If-Match: <parent-policy-ETag>; recipients are managed separately and one must be linked before enabling."
  - governs: "Prepaid credit allocation to an environment and overage behaviour"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Manage Capacity > environment"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 body {\"scope\":{\"environmentId\":\"<id>\"},\"allocatedEntitlements\":[{\"entitlementId\":\"MCSMessages\",\"allocation\":<allocation>,\"enforcementRules\":<rules>}]}"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Power Platform Administrator or Global Administrator. Rule TenantPool enabled=false caps the environment at its allocation, true lets it draw tenant capacity; neither disables a linked pay-as-you-go plan. A published group rule can lock it."
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
      call: "GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/serviceUsageRecords?startDate={startDate}&endDate={endDate} (service-level totals only, no policy, user, group or agent breakdown)"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list"
    note: "Read-only; reader roles suffice. API gives service-level totals only, not the UI's policy, user, group or agent breakdowns. One completed UTC day per call; beta; credits, not prices."
confidence: "medium"
dependents: 3
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
verification:
  status: "held"
  date: "2026-11-19"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 117
  confirmed: 112
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "058568259871918f939ba21b11f5ca8d"
---

## What it is

Copilot Credits are the common currency Microsoft uses to meter eligible AI services that have usage-based billing. A task is charged for the work it does rather than a flat per-user fee, and administrators decide who may spend credits (spending policies) and how they are paid for (billing method).

The same currency covers Copilot Cowork, Copilot Studio, Power Platform workloads and Work IQ APIs, agents on the Microsoft Copilot harness, and customer conversations in Microsoft Contact Center Intelligence. Microsoft lists the services governed from Copilot > Cost management in the Microsoft 365 admin center as including Cowork, advanced work in SharePoint and OneDrive, Work IQ API, Copilot Managed Runtime, Teams Phone Agent and Code. What a task consumes varies with the models used, the context retrieved, the runtime and the tools called.

**What consumes credits.** Advanced AI and frontier-model experiences can consume credits and require a user subscription licence (USL). Documented examples: metered Copilot Chat agents used by people without a Copilot licence, agent flows run by autonomous agents, and Cowork. On the Microsoft Copilot harness, billing starts when you start building, so previewing, testing and generating evaluations consume credits before anything is published.

**What a Copilot licence covers.** Employee-facing use of standard-harness Copilot Studio agents is included in Microsoft 365 channels when the user is licensed and the agent operates using the authenticated licensed user's identity, within fair usage limits. For agent flows, inclusion applies only to runs started by the "When an agent calls the flow" trigger; other triggers consume credits. Computer-Using Agents are excluded. This inclusion is not documented for the Microsoft Copilot harness or Cowork.

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
<tr><td data-label="Control"><strong>Who may spend credits, with monthly policy and per-user limits (spending policy)</strong><br><small>Tenant</small><br><small class="controls__note">Beta API. This body creates an all-users policy, initially disabled. Needs Billing Administrator or Global Administrator; AI administrator and License administrator can edit but not create.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies body {&quot;@odata.type&quot;:&quot;#microsoft.graph.allUsersSpendingPolicy&quot;,&quot;displayName&quot;:&quot;&lt;name&gt;&quot;,&quot;periodLimit&quot;:&lt;limit&gt;,&quot;perUserLimit&quot;:&lt;limit&gt;,&quot;serviceSettings&quot;:&lt;settings&gt;}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Spending limits for Copilot Studio environments or agents (resource-based policy)</strong><br><small>Environment</small><br><small class="controls__note">Opt-in. Replaces Power Platform capacity allocations and billing plans for the environments it covers.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy › Resources <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Billing method for a spending policy (prepaid capacity, P3 or pay-as-you-go)</strong><br><small>Tenant</small><br><small class="controls__note">API: selects a billing method when creating an all-users policy, initially disabled; prepaidCredits is the reference's example, not a way to update an existing policy. UI: Global or Billing administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies {&quot;@odata.type&quot;:&quot;#microsoft.graph.allUsersSpendingPolicy&quot;,&lt;displayName, periodLimit, perUserLimit, serviceSettings&gt;,&quot;billingMethods&quot;:&quot;prepaidCredits&quot;}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Policy and per-user spending alerts</strong><br><small>Tenant</small><br><small class="controls__note">Notify-only. Beta API. API covers policy-level thresholds only, not per-user ones. Needs If-Match: &lt;parent-policy-ETag&gt;; recipients are managed separately and one must be linked before enabling.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings body {&quot;isEnabled&quot;:true,&quot;thresholds&quot;:[{&quot;@odata.type&quot;:&quot;#microsoft.graph.percentageCostManagementAlertThreshold&quot;,&quot;value&quot;:&lt;percent&gt;}]}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementalertsetting-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Prepaid credit allocation to an environment and overage behaviour</strong><br><small>Environment</small><br><small class="controls__note">Power Platform Administrator or Global Administrator. Rule TenantPool enabled=false caps the environment at its allocation, true lets it draw tenant capacity; neither disables a linked pay-as-you-go plan. A published group rule can lock it.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Manage Capacity › environment <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 body {&quot;scope&quot;:{&quot;environmentId&quot;:&quot;&lt;id&gt;&quot;},&quot;allocatedEntitlements&quot;:[{&quot;entitlementId&quot;:&quot;MCSMessages&quot;,&quot;allocation&quot;:&lt;allocation&gt;,&quot;enforcementRules&quot;:&lt;rules&gt;}]}</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly credit limit and hard stop for a Copilot Studio agent</strong><br><small>Agent</small><br><small class="controls__note">Does not stop agent flows the agent calls. Limits are not applied instantly.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Manage Agents <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Credit consumption by policy, user, group, agent and service</strong><br><small>Tenant</small><br><small class="controls__note">Read-only; reader roles suffice. API gives service-level totals only, not the UI's policy, user, group or agent breakdowns. One completed UTC day per call; beta; credits, not prices.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management › Consumption <a href="https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/serviceUsageRecords?startDate={startDate}&amp;endDate={endDate} (service-level totals only, no policy, user, group or agent breakdown)</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
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

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui / admin-path: Copilot > Cost Management > Configuration > Add spending policy is the route to identity-based monthly policy and per-user limits. | Found: Create and name the policy and then choose Identity as the scope. | Fix: Replace the path in front matter and the rendered table with 'Copilot > Cost Management > Configuration > Add spending policy > Identity > Select agents and services > Set limits and alerts'. The cited page requires the Identity choice before the limits workflow. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
- [contradicted, blocker] controls[3].ui / admin-path: Copilot > Cost Management > Configuration > Add spending policy is the route to policy and per-user alerts. | Found: Create and name the policy and then choose Identity as the scope. | Fix: Replace both copies of the path with 'Copilot > Cost Management > Configuration > Add spending policy > Identity > Select agents and services > Set limits and alerts'. Retain the separate policy-level and user-level notification distinction. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
- [contradicted, blocker] controls[5].ui / admin-path: Licensing > Products > Copilot Studio > Summary > Manage Agents is the path to the agent monthly-limit and hard-stop controls. | Found: Select the agent, and then select Set limit. ... Turn on Stop usage if the agent should be turned off when it reaches the limit. | Fix: Extend both copies of the path to 'Licensing > Products > Copilot Studio > Summary > Manage Agents > agent > Set limit > Stop usage'. Point this UI side's docs to https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness, which documents the final control-selection steps. | Source: https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness
- [unsupported, major] Governance controls: Reports / behaviour: The Power Platform user report shows users only for standard-harness agents. | Found: Searched: Copilot user report standard harness only consumption user reports. Read capacity reporting guidance and search excerpts; they say standard-harness agents have user reporting, not that reporting is exclusive to that harness. | Fix: Replace 'the user report shows users only for standard-harness agents' with 'for agents powered by the standard harness, the user report also shows consumption by user', as stated at https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api / command: The beta spendingPolicies POST accepts the printed allUsersSpendingPolicy body with displayName, periodLimit, perUserLimit and serviceSettings. | Found: Required properties are displayName, periodLimit, perUserLimit, and serviceSettings. You can optionally supply billingMethods and billingInstrument. | Fix: Print only 'POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies' in both copies of the call. Name @odata.type, periodLimit, perUserLimit and serviceSettings in the note, retaining the all-users and initially-disabled qualifications. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create
- [supported, minor] controls[1].ui / admin-path: Copilot > Cost Management > Configuration > Add spending policy > Resources opens resource-based policy configuration. | Found: Select Configuration, and then select Add spending policy. ... Enter a name for the policy, then select Resources as its scope. | Fix: Retain the path and add to the note: 'After Resources, choose Specific environments for environments or Specific resources for individual agents; then set the monthly spending limit.' These scope selections are documented on the cited page. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs
- [supported, minor] controls[2].ui / admin-path: An existing spending policy reached through Copilot > Cost Management > Configuration contains the billing-method control. | Found: You can update the billing method for an existing spending policy. Open the spending policy that you want to modify and update its billing method. | Fix: Extend both copies of the path to 'Copilot > Cost Management > Configuration > spending policy > Billing method'. Billing method is the section named in the cited setup page and the already-cited Managing AI experiences page. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup
- [supported, minor] controls[2].api / command: The beta spendingPolicies POST can select prepaidCredits through billingMethods while creating an all-users policy. | Found: You can optionally supply billingMethods and billingInstrument. | Fix: Print only 'POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies' in both copies of the call. In the note say 'Sets billingMethods on creation; prepaidCredits is a documented value.' Retain the all-users, initially-disabled and not-an-update qualifications. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create
- [supported, minor] controls[3].api / command: The printed beta PATCH to emailThresholdSettings configures enabled percentage-based policy alerts. | Found: PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b/emailThresholdSettings | Fix: Print only 'PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings' in both copies of the call. Name isEnabled and thresholds in the note, retaining its existing ETag, recipient and policy-only qualifications. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementalertsetting-update
- [supported, minor] controls[4].ui / admin-path: Power Platform admin center > Licensing > Products > Copilot Studio > Summary > Manage Capacity > environment reaches environment allocation and overage settings. | Found: Select Manage Capacity from the Prepaid capacity card. | Fix: Include the omitted card heading in both paths: 'Licensing > Products > Copilot Studio > Summary > Prepaid capacity > Manage Capacity > environment'. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
- [supported, minor] controls[4].api / command: PUT licensing/allocationsV2 at API version 2024-10-01 accepts scope.environmentId and allocatedEntitlements containing MCSMessages, allocation and enforcementRules. | Found: Copilot Credits are represented by the entitlement ID MCSMessages and are managed through the licensing/allocationsV2 operations of the Power Platform API. | Fix: Print only 'PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01' in both copies of the call. Name scope.environmentId, allocatedEntitlements, entitlementId=MCSMessages, allocation and enforcementRules in the note. The tutorial constructs this URL from variables; the automatic string-match warning is not an endpoint defect. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [supported, minor] controls[6].api / command: The printed beta GET to serviceUsageRecords with startDate and endDate returns service-level tenant credit totals rather than policy, user, group or agent breakdowns. | Found: Get a list of costManagementServiceUsageRecord objects that report each governed service's share of the tenant's consumption of Copilot Credits for one completed UTC day. | Fix: Remove the parenthetical description from both copies of api.call, leaving 'GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/serviceUsageRecords?startDate={startDate}&endDate={endDate}'. Keep the service-only qualification in the existing note. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list
- [supported, minor] controls[0].note; controls[2].note / applicability: The allUsersSpendingPolicy type creates a policy for every user in the tenant. | Found: A spending policy that governs every user in the tenant. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/allusersspendingpolicy for the explicit all-users scope and https://learn.microsoft.com/microsoft-365/commerce/usage-based-billing-faq-microsoft-365-copilot-business for the automatic-setup qualification specified in the billing-policy finding. These are the uncited Microsoft pages relied on for corrections. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/allusersspendingpolicy
- [supported, minor] Why it matters / default: Microsoft states that administrators must set up a billing policy before users can use experiences requiring usage-based billing. | Found: Admins must set up a billing policy before a user can use AI experiences that require usage-based billing. | Fix: Replace the billing-policy sentence with: 'Microsoft's USL/UBB page says administrators must set up a billing policy before use; its Microsoft 365 Copilot Business FAQ also documents that, for eligible new purchases, pay-as-you-go may be configured by default and Microsoft creates the required Azure resources and applies a spending policy.' The second source is https://learn.microsoft.com/microsoft-365/commerce/usage-based-billing-faq-microsoft-365-copilot-business. | Source: https://learn.microsoft.com/copilot/plan/user-subscription-license-usage-based-billing
- [supported, minor] Governance controls: Reports / admin-path: Reports > Usage > Microsoft Copilot > Credits opens the Microsoft Copilot Credits report. | Found: On the Usage page, under Reports, select Microsoft Copilot, and then select Credits. | Fix: Include the omitted heading: 'Reports > Usage > Reports > Microsoft Copilot > Credits'. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits
- [contradicted, minor] What to check: Auto-apply new services / consistency: The checklist's instruction to review Auto-apply new services has a corresponding control in the governance table. | Found: Checklist: 'Review the Auto-apply new services setting on every policy.' The table identifies spending limits, billing methods, alerts, allocations, agent limits and consumption, but not Auto-apply new services. | Fix: Remove the checklist bullet 'Review the Auto-apply new services setting on every policy.' Keep the verified explanatory prose and risk discussion; no additional control row is requested.
-->
