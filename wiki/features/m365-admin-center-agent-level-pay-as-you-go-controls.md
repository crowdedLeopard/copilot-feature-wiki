---
title: "Microsoft 365 admin center: agent-level controls for pay-as-you-go"
slug: "m365-admin-center-agent-level-pay-as-you-go-controls"
roadmapId: 496363
desk: "admin-billing"
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
videos: []
related: ["copilot-studio-cost-management-m365-admin-center","m365-admin-center-copilot-credits-usage-report","m365-copilot-chat-usage-based-billing-models-model-selector","copilot-credits"]
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-01-22T00:00:09"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
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

## Admin controls

- Microsoft 365 admin center > **Copilot** > **Cost Management** > **Configuration**: enable usage-based billing, default spending policy, identity-based and resource-based policies, billing methods, alerts, request routing.
- Microsoft 365 admin center > **Billing** > **Pay-as-you-go**: other pay-as-you-go services and billing policies.
- Microsoft 365 admin center > **Reports** > **Usage** > **Microsoft Copilot** > **Credits**: Copilot Credits report.
- Microsoft 365 admin center > **Billing** > **Cost Management** and Azure portal > **Cost Management**: billed amounts.

## Open questions

- Whether the roadmap item will be marked launched or superseded by the Cost Management dashboard documentation.
- Government cloud availability of pay-as-you-go for agents.
- Whether agent-level policies will extend to Agent Builder agents shared by individuals.

<!-- rationale
risk: Medium. A spend-governance control; the hazard is enabling pay-as-you-go without agent-level policies and the privileged billing roles involved.
cost: Variable. Metered credits for unlicensed users.
impact: Medium. Admin and finance teams, plus unlicensed users who gain or lose agent access.
-->
