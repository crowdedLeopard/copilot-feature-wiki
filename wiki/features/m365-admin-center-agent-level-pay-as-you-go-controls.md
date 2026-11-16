---
title: "Microsoft 365 admin center: agent-level controls for pay-as-you-go"
slug: "m365-admin-center-agent-level-pay-as-you-go-controls"
roadmapId: 496363
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "Admins can decide which users may use a given agent on a metered basis, which agents are available for consumption billing at all, and which billing policy pays for each agent, starting with declarative agents in Copilot Chat and SharePoint."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Copilot Credits through pay-as-you-go (Azure subscription), Copilot Credit Pre-purchase Plan or prepaid capacity packs. Users with a Microsoft 365 Copilot licence are covered for most agent use; unlicensed users' agent interactions spin the meter."
audiences: ["m365-admin","finops","service-owner","security"]
tags: ["m365-admin-center","pay-as-you-go","copilot-credits","agents","spending-policies","copilot-control-system","sharepoint-agents","declarative-agents"]
sources:
  - title: "Microsoft 365 Roadmap 496363"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=496363"
    kind: "roadmap"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "View costs and billing for Microsoft Copilot pay-as-you-go"
    url: "https://learn.microsoft.com/copilot/manage/view-cost"
    kind: "learn"
  - title: "Pay-as-you-go services available in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-services"
    kind: "learn"
  - title: "Usage-based billing, default, identity-based and resource-based spending policies, alerts (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
  - title: "Billing policies for other pay-as-you-go services (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    kind: "learn"
  - title: "Credits consumption reporting (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    kind: "learn"
  - title: "Monthly credit limit for an individual agent (Power Platform admin center) (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness#set-a-monthly-limit-for-an-agent"
    kind: "learn"
videos: []
related: ["copilot-studio-cost-management-m365-admin-center","m365-admin-center-copilot-credits-usage-report","m365-copilot-chat-usage-based-billing-models-model-selector","copilot-credits"]
controls:
  - governs: "Usage-based billing, default, identity-based and resource-based spending policies, alerts"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    api:
      kind: "graph"
      call: "/beta/copilot/costManagement (Cost Management API)"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
  - governs: "Billing policies for other pay-as-you-go services"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > Billing policies > Add a billing policy"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    api: null
  - governs: "Credits consumption reporting"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Reports > Usage > Microsoft Copilot > Credits"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    api: null
  - governs: "Monthly credit limit for an individual agent (Power Platform admin center)"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Manage Agents > agent > Set limit"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness#set-a-monthly-limit-for-an-agent"
    api: null
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-01-22T00:00:09"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Pay-as-you-go lets people without a Microsoft 365 Copilot licence use agents in Copilot Chat and SharePoint, with each interaction metered in Copilot Credits and billed to an Azure subscription. This roadmap item adds **agent-level** governance to that model in the Microsoft 365 admin center: which users can access a particular agent on a metered basis, which agents are available for consumption billing at all, and which billing policy each agent charges to. The first scope is declarative agents in Microsoft 365 Copilot Chat and SharePoint agents.

The roadmap still shows the item in development with an April 2026 target, but much of the capability has shipped under the **Cost Management** dashboard (**Copilot** > **Cost Management**): identity-based policies control who may consume credits, resource-based policies set limits per agent or environment, each policy names a billing method, and the Consumption tab reports by policy, user, group, agent and service. Treat the roadmap entry as the umbrella for this work rather than a single switch to wait for.

## Why it matters

Pay-as-you-go is attractive because it extends agents to the whole workforce without buying licences for everyone. It is dangerous for the same reason: a popular SharePoint agent used by thousands of unlicensed people is an uncapped bill until someone sets a policy. Agent-level controls let you say yes to the agents that justify metered access and no to the rest, and attribute the cost to the right budget.

Service owners of SharePoint and intranet content are the unexpected stakeholders. Site owners can create agents; if pay-as-you-go is enabled tenant-wide, those agents become billable the moment an unlicensed colleague uses them.

## Risk assessment

**Data exposure**
- None from the control. Agents' data access is governed elsewhere (permissions, DLP, sensitivity labels).

**Security & identity**
- Billing policies commit an Azure subscription; the roles that can create them (Global Administrator, Billing Administrator) should be tightly held. AI and License Administrators can edit limits and alerts.
- Groups used in identity-based policies become cost-bearing; govern their membership.

**Autonomy & actions**
- Not applicable to the control. Agents covered may themselves take actions.

**Change & support**
- Enabling pay-as-you-go without agent-level policies exposes every eligible agent to metered use. Default spending policy settings should be reviewed before enabling.
- Users without a licence who are excluded from a policy see agents they cannot use; expect questions.

## Cost and licensing

- **Variable.** Metered Copilot Credits for unlicensed users' interactions. Microsoft's Copilot Credits report documents example rates (for example 10 credits for tenant-graph grounding plus 2 for generative answers on a single prompt) and alerts for users exceeding 2,000 credits.
- Billing methods: pay-as-you-go to an Azure subscription, Copilot Credit Pre-purchase Plan (P3), prepaid capacity packs. Microsoft 365 Copilot-licensed users are covered for most agent use and do not spin the meter.
- Indirect: FinOps time to design policies per agent; chargeback mapping.

## Scope

- Declarative agents in Copilot Chat and SharePoint agents first; Copilot Studio agents are governed through the companion Cost Management work and the Power Platform admin center.
- Users without a Microsoft 365 Copilot licence in tenants with pay-as-you-go enabled.
- Worldwide (standard multi-tenant). Government cloud dates not published.

## Governance guidance

**Before rollout**
- Inventory agents in the Microsoft 365 admin center and decide which should be available on a metered basis to unlicensed users.
- Agree budget owners per agent or business unit so billing policies map to someone accountable.
- Set the Azure subscription or P3 plan and budget alerts before enabling any policy.

**At rollout**
- Create identity-based policies for the user populations allowed to consume credits, with per-user limits.
- Create resource-based policies with limits for the agents you approve for metered access; leave the rest uncovered so they are not billable.
- Enable alerts to administrators and threshold notifications to users.

**After rollout**
- Review the Consumption tab and the Copilot Credits usage report monthly; compare credits per agent with the value the agent delivers.
- Re-run the agent inventory quarterly for new SharePoint agents created by site owners.
- Reconcile admin center totals with Azure Cost Management for finance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Usage-based billing, default, identity-based and resource-based spending policies, alerts</strong><br><small>Agent</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>/beta/copilot/costManagement (Cost Management API)</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Billing policies for other pay-as-you-go services</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › Billing policies › Add a billing policy <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Credits consumption reporting</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Reports › Usage › Microsoft Copilot › Credits <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Monthly credit limit for an individual agent (Power Platform admin center)</strong><br><small>Agent</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Manage Agents › agent › Set limit <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness#set-a-monthly-limit-for-an-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Agent-level policies sit in the same Configuration page as the tenant default; the Cost Management API (beta) is the one programmatic route and covers policies and consumption. Azure Cost Management shows billed amounts but offers no control over Copilot credit policies. The Power Platform admin center limit applies to agents on the Microsoft Copilot harness and is separate from the Microsoft 365 admin center spending policy, so a tenant may need both. See [Manage Copilot Credits](https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits) for the consumption views.

## Open questions

- Whether the roadmap item will be marked launched or superseded by the Cost Management dashboard documentation.
- Government cloud availability of pay-as-you-go for agents.
- Whether agent-level policies will extend to Agent Builder agents shared by individuals.

<!-- rationale
risk: Medium. A spend-governance control; the hazard is enabling pay-as-you-go without agent-level policies and the privileged billing roles involved.
cost: Variable. Metered credits for unlicensed users.
impact: Medium. Admin and finance teams, plus unlicensed users who gain or lose agent access.
-->
