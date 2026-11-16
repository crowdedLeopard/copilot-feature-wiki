---
title: "Copilot Studio cost controls move into the Microsoft 365 admin center"
slug: "copilot-studio-cost-management-m365-admin-center"
roadmapId: 577834
topic: "copilot-studio"
products: ["Microsoft 365","Microsoft 365 admin center","Microsoft Copilot Studio","Microsoft Power Platform governance and administration"]
summary: "Copilot Studio environments and agents can be brought under Cost Management spending policies in the Microsoft 365 admin center, so Copilot Credit spend across agents, Cowork and Copilot Chat is governed in one place."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Copilot Credits billed through pay-as-you-go, a Copilot Credit Pre-purchase Plan (P3) or prepaid capacity packs. Spending policies are opt-in; existing Power Platform admin center controls continue to apply until a policy covers the scope."
audiences: ["m365-admin","power-platform-admin","finops","service-owner"]
tags: ["copilot-credits","cost-management","pay-as-you-go","spending-policies","copilot-studio","agent-registry"]
sources:
  - title: "Microsoft 365 Roadmap 577834"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577834"
    kind: "roadmap"
  - title: "Manage Copilot Studio costs in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Usage-based billing: what you see in the Microsoft 365 admin center vs. your Azure bill"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views"
    kind: "learn"
  - title: "Usage-based billing, billing method, spending policies, limits and alerts (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
  - title: "Monthly credit limit for an individual agent (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness#set-a-monthly-limit-for-an-agent"
    kind: "learn"
  - title: "Pay-as-you-go billing plan for an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up"
    kind: "learn"
videos: []
related: ["m365-admin-center-agent-level-pay-as-you-go-controls","m365-copilot-chat-usage-based-billing-models-model-selector","copilot-studio-share-autonomous-agents-run-only","copilot-credits"]
controls:
  - governs: "Usage-based billing, billing method, spending policies, limits and alerts"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    api:
      kind: "graph"
      call: "/beta/copilot/costManagement (Cost Management API)"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
  - governs: "Who can see the usage-based billing experiences"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > All Settings > Access to usage-based billing experiences"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    api: null
  - governs: "Monthly credit limit for an individual agent"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Manage Agents > agent > Set limit"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness#set-a-monthly-limit-for-an-agent"
    api: null
  - governs: "Pay-as-you-go billing plan for an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Billing > Billing plans > Set up pay-as-you-go"
      docs: "https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up"
    api: null
    note: "Environment admin or Power Platform admin."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-10-29T23:01:00"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Microsoft is extending the **Cost Management** dashboard in the Microsoft 365 admin center (**Copilot** > **Cost Management**) so that it can govern Copilot Studio spend as well as Copilot Chat, Cowork and other usage-based AI experiences. Until now Copilot Studio credit caps, capacity allocation and usage reporting lived only in the Power Platform admin center.

With this change administrators can bring supported Copilot Studio environments and agents under **resource-based spending policies**. A resource-based policy sets a Copilot Credit limit for an environment or an individual agent and names the billing method that pays for it. Environments and agents are the first planned scopes; Microsoft says user and group policies for Copilot Studio will follow in a later phase. Identity-based policies, which control which people can consume credits, already exist for Copilot Chat and Cowork.

The same update feeds cost data into the **agent registry** so that agents built on Microsoft platforms (Copilot Studio agents, Cowork and others) show what they cost alongside ownership and usage. The Power Platform admin center keeps its existing cost management features, so this is additive rather than a migration.

The roadmap lists General Availability for October CY2026 and the item is still marked "In development" as of this briefing, so expect the rollout to be staggered.

## Why it matters

Copilot Credits are now the common meter behind most Microsoft AI consumption. Agents built with the Microsoft Copilot harness bill credits from the moment a maker starts building, not only after publish, and autonomous agents shared to end users bill through the hosting environment. Without a spending policy covering that scope, the only guard rails are the Power Platform admin center allocations, and finance teams see the result on an Azure invoice weeks later.

Having one place to set limits, receive alerts and read consumption by policy, user, agent and service makes it possible to run Copilot Studio as a budgeted service. It also means two admin teams (Microsoft 365 and Power Platform) can collide: a policy in the Microsoft 365 admin center may take precedence over an allocation a Power Platform admin made, so the two teams need an agreed operating model before the feature lands.

## Risk assessment

**Data exposure**
- None directly. The feature governs spend, not data. Consumption reports do expose per-user and per-agent usage, which is personal data in some jurisdictions; restrict reader roles accordingly.

**Security & identity**
- Spending policies are configured by Global Administrator and Billing Administrator (billing methods) and AI Administrator or License Administrator (edit limits and alerts). Review who holds these roles before the feature arrives; a policy can switch an agent from a capacity pack to pay-as-you-go against an Azure subscription.

**Autonomy & actions**
- Not applicable to the control itself. The controlled workloads (agents, Cowork) are where autonomy risk sits; this feature caps what they can spend.

**Change & support**
- Policies are opt-in. If nobody creates one, nothing changes and Copilot Studio continues to use Power Platform admin center allocations. The risk is governance confusion, not an unplanned change in behaviour.
- Dashboard totals are point-in-time and are not an invoice. Finance should reconcile against Azure Cost Management.

## Cost and licensing

- The control is included with Microsoft 365 administration. The workloads it governs consume **Copilot Credits**.
- Credits can be paid for through **pay-as-you-go** (billed to a linked Azure subscription), a **Copilot Credit Pre-purchase Plan (P3)** bought in the Azure portal or the Microsoft 365 admin center (annual commitment, discounted, overage falls through to pay-as-you-go) or **prepaid capacity packs** bought as licences and allocated in the Power Platform admin center.
- Azure Cost Management shows pay-as-you-go and P3 amortised charges but does not show consumption against prepaid capacity packs; use the Microsoft 365 or Power Platform admin center for that.
- Copilot Studio, Cowork and Work IQ API consumption appear under the single "Microsoft Copilot Studio" service in Azure, so chargeback by workload needs the admin center reports, not the Azure bill.
- Hidden cost: admin time to design a policy model (which environments, which billing method, which alert thresholds) and to reconcile two dashboards monthly.

## Scope

- Tenants with Copilot Studio agents or environments and usage-based billing enabled. Worldwide (standard multi-tenant) only at launch; no GCC, GCC High or DoD dates published.
- Roles: Global Administrator, Billing Administrator, AI Administrator, License Administrator for configuration; AI Reader, Global Reader and other reader roles for consumption dashboards.
- First phase covers environments and agents as resource-based policy scopes. User and group scopes for Copilot Studio are later.
- Agents built with Agent Builder in Copilot Chat are already governed through identity-based policies; this change is about Copilot Studio-hosted agents.

## Governance guidance

**Before rollout**
- Decide which team owns Copilot Credit spending policies: Microsoft 365 admins, Power Platform admins or a FinOps function with both.
- Inventory Copilot Studio environments and the billing method each uses today in the Power Platform admin center (capacity pack, pay-as-you-go, none).
- Agree a default limit and alert thresholds per environment class (sandbox, development, production).
- Assign reader roles to finance and licensing stakeholders so they can see consumption without being able to change policies.

**At rollout**
- Create resource-based policies for production environments first, then high-traffic agents, and record the billing method chosen for each.
- Turn on policy alerts and user-level threshold notifications.
- Enable the option to apply a policy automatically to future supported services and agents where you want a default guard rail.

**After rollout**
- Reconcile the admin center consumption view with Azure Cost Management monthly and document any differences.
- Review the agent registry cost column quarterly; retire or re-scope agents whose cost is not matched by use.
- Watch Message center for the user and group policy phase and for government cloud availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Usage-based billing, billing method, spending policies, limits and alerts</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>/beta/copilot/costManagement (Cost Management API)</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can see the usage-based billing experiences</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › All Settings › Access to usage-based billing experiences <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Monthly credit limit for an individual agent</strong><br><small>Agent</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Manage Agents › agent › Set limit <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness#set-a-monthly-limit-for-an-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go billing plan for an environment</strong><br><small>Environment</small><br><small class="controls__note">Environment admin or Power Platform admin.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Billing › Billing plans › Set up pay-as-you-go <a href="https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Cost Management API is in beta and is the only programmatic surface; the Power Platform admin center controls have no documented cmdlet or CLI equivalent. Billed amounts still appear in Azure Cost Management by meter, which is a read-only view rather than a control. Copilot Studio capacity allocation and usage downloads remain in the Power Platform admin center alongside the new Microsoft 365 admin center experience. See also [Manage Copilot Studio costs](https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs).

## Open questions

- Which Copilot Studio environment types and agent kinds count as "supported" in the first phase is not yet published.
- Precedence rules between a Microsoft 365 spending policy and a Power Platform admin center allocation on the same environment need to be confirmed when the Learn article is updated.
- No government cloud dates.
- Whether policy alerts can be routed to a shared mailbox or only to admin accounts.

<!-- rationale
risk: Medium. Governance control with no new data movement, but it changes who can commit an Azure subscription to agent spend and introduces overlap between two admin centres.
cost: Variable. The control is free; the governed workloads are metered in Copilot Credits with three purchase routes.
impact: Medium. Admin and finance teams see the change; makers only notice when a limit is reached.
-->
