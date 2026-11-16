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
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 51
  unconfirmed: 3
  contradicted: 9
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] summary; What's changing; Why it matters / record: Administrators can specify which users access particular agents through pay-as-you-go. | Found: Administrators can specify which users can access particular agents through pay-as-you-go | Fix: Attribute this to the plan: 'The roadmap proposes controls over which users may access each agent through pay-as-you-go.' Do not present the roadmap description alone as confirmation of shipped functionality.
- [supported, minor] summary; What's changing; Why it matters / record: Administrators can control which agents are available for metered consumption. | Found: control which agents are available for metered consumption | Fix: Say the roadmap plans agent-level eligibility controls; distinguish that plan from the currently documented service-level billing connections.
- [supported, minor] summary; What's changing; Why it matters / record: Administrators can establish the billing policy for each agent. | Found: establish billing policy for each agent | Fix: Change the current-tense claim to 'The roadmap plans billing-policy assignment per agent' unless a feature-specific implementation source is added.
- [unsupported, blocker] front matter: defaultState / default: The new agent-level control has an admin-opt-in default state. | Found: Searched: '496363 default agent level controls pay as you go'; 'Copilot agent-level pay-as-you-go default'. Opened usage-based billing setup, pay-as-you-go overview and Copilot Studio cost management; these describe billing setup or different controls, not this roadmap control's arrival default. | Fix: Set defaultState to 'unknown'. State that pay-as-you-go billing itself requires administrator setup, but Microsoft has not stated the arrival default of this roadmap item's agent-level controls.
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Prepaid capacity packs can fund agent consumption. | Found: Copilot credit policies are currently only available for Microsoft Copilot Chat. For SharePoint agents, continue using pay-as-you-go billing as described in the existing setup process. | Fix: Cite this feature-specific capacity-pack page alongside the general setup page. Clarify that standalone Copilot credit policies are currently for Copilot Chat, rather than suggesting identical configuration for Chat and SharePoint. | Source: https://learn.microsoft.com/copilot/implement/copilot-capacity-packs
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Microsoft 365 Copilot-licensed users have included agent usage rather than paying the consumption meter for ordinary interactive use. | Found: For users with Microsoft 365 Copilot add-on licenses, no extra charges. | Fix: Cite the licensing-and-cost page and limit the statement to the documented declarative-agent usage. Keep the distinction from the separately listed Microsoft Copilot harness agents, whose usage is not included with that licence. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/cost-considerations#agents-in-copilot
- [contradicted, blocker] front matter: licensing.notes; What's changing; Cost and licensing; rationale: cost / cost: Unlicensed users' agent interactions spin the meter without distinguishing the agent's grounding. | Found: Declarative agents that are grounded in instructions and public websites are included with Copilot Chat (Basic), and Microsoft 365 Copilot (Basic) and (Premium). | Fix: Qualify each broad statement: 'For users without the applicable Copilot add-on licence, agents accessing shared tenant data can consume Copilot Credits; agents grounded only in instructions or public websites are included.' Cite this page. | Source: https://learn.microsoft.com/copilot/manage/manage-agents-copilot-chat
- [unsupported, blocker] controls[0].api; Governance controls table / command: '/beta/copilot/costManagement (Cost Management API)' is an executable API equivalent for the entire listed configuration control. | Found: Searched: 'costManagement resource spendingPolicies Graph agent'. Opened Cost Management API overview and List spendingPolicies. The namespace exists, but no HTTP operation matching the supplied methodless call or its full resource-based-policy scope is documented there. | Fix: Do not call the namespace invented: it is real. Replace the call with a specific documented operation, such as 'GET /beta/copilot/costManagement/spendingPolicies', cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-list, and label it as listing spending policies, not as the full resource-policy configuration equivalent.
- [contradicted, blocker] What's changing: second paragraph; controls[0] applicability; Governance guidance: At rollout; Governance controls prose / applicability: The cited newer Cost Management identity/resource spending policies implement much of the roadmap's agent-level controls for Copilot Chat and SharePoint agents. | Found: For Copilot Chat, SharePoint Agents, or Microsoft Copilot Retrieval API (Preview), see Microsoft Copilot pay-as-you-go service overview. | Fix: Remove the assertion that these documents establish shipment of this roadmap item. Separate the newer dashboard's supported-service and Copilot Studio controls from classic Chat/SharePoint billing. For the latter, cite https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go and https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing; describe agent-level availability as the roadmap plan, not an established equivalence. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
- [supported, minor] What's changing; Governance guidance: At rollout / behaviour: Resource-based spending policies can limit Copilot Studio agents or environments. | Found: Manage Copilot Studio spending in the Microsoft 365 admin center by creating policies for environments or individual agents. | Fix: Add this specific source and explicitly identify the policies here as Copilot Studio resource-based policies, including the warning not to move resources using AI Builder to these policies. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs
- [supported, minor] Why it matters; Governance guidance: After rollout / behaviour: Site owners can create SharePoint agents when the relevant agent access requirements are met. | Found: Members of your organization can build SharePoint agents if they have access to SharePoint and the tenant has been enabled as pay-as-you-go for SharePoint, or they have a Microsoft 365 Copilot license. | Fix: Cite this creation guidance and retain its prerequisite of SharePoint access plus a Copilot licence or enabled SharePoint pay-as-you-go. | Source: https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#create-agents
- [supported, minor] Why it matters / cost: When SharePoint pay-as-you-go is configured, an eligible unlicensed colleague's use of a SharePoint agent draws on the billing resource. | Found: That resource is used whenever a user without a Microsoft Copilot license uses a SharePoint agent. | Fix: Add this feature-specific source and say 'eligible user with access to the agent' so tenant-wide billing is not mistaken for overriding file permissions. | Source: https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing
- [supported, minor] Risk assessment: Data exposure / applicability: DLP and sensitivity labels can govern the content SharePoint agents use. | Found: To prevent selected files from being used by agents, use sensitivity labels along with Microsoft Purview Data Loss Prevention (DLP). | Fix: Cite this page and make the scope explicit: this is content protection for SharePoint agents, not a feature of the billing control or a sensitivity label placed directly on an .agent file. | Source: https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint
- [contradicted, blocker] Risk assessment: Security & identity / role: The roles that can create the relevant billing policies are Global Administrator and Billing Administrator. | Found: You must have one of the following roles to complete the tasks in this article:

    - Billing Administrator
    - AI Administrator
    - Global Administrator | Fix: Separate classic Chat/SharePoint billing-policy roles from newer spending-policy roles. For classic setup, include AI Administrator and the required Owner or Contributor rights to the Azure subscription and resource group, as stated at this URL. | Source: https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go
- [supported, minor] Risk assessment: Security & identity / role: AI Administrators and License Administrators can edit newer spending-policy limits and alerts. | Found: AI administrator and License administrator roles can edit spending policies, manage limits and alerts, and billing methods. However, they can't create spending policies. | Fix: Identify these as newer spending-policy permissions, not classic agent billing-policy permissions. Note that the same source also lists License Administrator among read-only consumption roles and says those roles cannot change limits or alerts; do not present that role's effective rights as unqualified. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup
- [unsupported, major] Risk assessment: Change & support / behaviour: Users without a licence who are excluded from a policy see agents that they cannot use. | Found: Searched: 'Copilot Chat agents excluded billing policy visible'; 'SharePoint agents see pay-as-you-go not access'. Opened pay-as-you-go overview, SharePoint agent access and Copilot Chat agent management; none states this excluded-user visibility behaviour. | Fix: Remove the assertion that excluded users see the agents. Retain the analysis as 'Explain eligibility and access requirements to users to reduce support questions.'
- [supported, minor] Cost and licensing / cost: The Copilot Credits report gives an example of 10 credits for tenant-graph grounding on a prompt. | Found: 10 credits for tenant graph-grounding | Fix: Keep this explicitly as the report's example and identify the report documentation's preview qualifications rather than implying a final universal per-prompt tariff. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits
- [supported, minor] Cost and licensing / cost: The same worked example adds 2 credits for generative answers. | Found: two credits for generative answers | Fix: Retain the example framing and state that the report documentation includes preview qualifications; do not present this as a universal charge for every interaction. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits
- [supported, minor] Cost and licensing / behaviour: The Copilot Credits report alerts on users exceeding 2,000 credits. | Found: the report includes alerts when users in your organization use more than 2,000 credits. | Fix: Mention that these report alerts are documented with preview qualifications. Distinguish the similar 2,000-3,000-credit alert from the Alerts card documented for more than 3,000 credits in the past 30 days. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits
- [supported, minor] Scope / applicability: Copilot Studio agent spending can be managed through the newer Microsoft 365 Cost Management experience or existing Power Platform controls. | Found: To opt in, create a Microsoft 365 admin center resource-based spending policy. Until then, your existing Power Platform admin center configuration remains in effect. | Fix: Cite this source and explain that coverage by a Microsoft 365 resource policy changes which admin center's spending controls apply. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs
- [contradicted, blocker] Governance guidance: At rollout / applicability: Leaving agents outside resource-based spending policies makes those agents not billable. | Found: Environments that aren't linked to a Microsoft 365 admin center resource-based spending policy continue under their applicable Power Platform configuration during the opt-in period. | Fix: Delete 'leave the rest uncovered so they are not billable'. For Copilot Studio, explain the fallback to existing Power Platform billing and review all applicable policies. For Chat/SharePoint, use documented service billing connections and agent access permissions; do not promise a resource-policy allowlist for this roadmap item. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs
- [supported, minor] Governance guidance: Before rollout; Governance guidance: After rollout / behaviour: Administrators can inventory agents through the Microsoft 365 admin center. | Found: Tenant admins and AI admins can manage actively used agents in SharePoint in the Microsoft 365 admin center, under the Agents section of the Copilot Control System | Fix: Cite this page and qualify the SharePoint view as actively used agents visible through Copilot Chat; it is not proof of a complete inventory of every unused .agent file. | Source: https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint
- [supported, minor] Governance controls prose / behaviour: A tenant may need controls in both Microsoft 365 and Power Platform admin centers. | Found: If a spending policy in the Microsoft 365 admin center covers the environment or agent, its controls take precedence over the Power Platform admin center controls for that usage. | Fix: Cite this page and add the precedence qualification: different scopes may require review in both centers, but Microsoft 365 policies take precedence for covered usage; do not imply two independent additive caps. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs
- [contradicted, blocker] Open questions: Government cloud availability of pay-as-you-go for agents / absence: Government-cloud availability of the underlying pay-as-you-go service is an unpublished question. | Found: Microsoft 365 pay-as-you-go is not available for Office 365 government plans or Office 365 operated by 21Vianet to and for PRC-located users. | Fix: Report this published service restriction, citing the terms page, while keeping future government rollout dates for the new roadmap control as not published. Do not equate an unknown future date with unknown current service availability. | Source: https://learn.microsoft.com/sharepoint/microsoft-365-pay-as-you-go-terms-of-service
- [contradicted, minor] front matter: action; front matter: risk; rationale: risk / consistency: The prepare action fits a new optional control rated medium risk. | Found: action: "prepare"; risk: "medium"; schema: 'review: an optional capability, or a new control, that changes nothing until an admin or maker chooses it.' | Fix: Set action to 'review' for this optional new control. The schema's prepare exception requires an unconfigured control closing an exposure rated high, which is not the page's rating.
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls table / consistency: The controls table includes the agent-inventory control that the checklist tells administrators to review. | Found: 'Inventory agents in the Microsoft 365 admin center'; the table lists spending policies, other-service billing policies, Credits reporting and individual-agent limits, but no agent inventory. | Fix: Add an agent-inventory/access-management row scoped and qualified using https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint, or remove the inventory instruction if the briefing cannot provide its documented control.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The controls table includes the Consumption tab that the checklist tells administrators to review. | Found: 'Review the Consumption tab and the Copilot Credits usage report monthly'; only the separate 'Reports > Usage > Microsoft Copilot > Credits' report has a reporting row. | Fix: If retaining the newer dashboard as clearly separated background, add 'Copilot > Cost Management > Consumption' with https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending. Do not treat the classic Credits report as that tab.
- [contradicted, minor] Governance guidance: Before rollout and After rollout; Governance controls table / consistency: The controls table includes Azure budget alerts and cost analysis used by the checklist. | Found: 'Set the Azure subscription or P3 plan and budget alerts'; 'Reconcile admin center totals with Azure Cost Management'; no Azure cost-analysis or budget-control row appears. | Fix: Add an Azure Cost Management reporting/budget row using https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing#monitor-consumption-in-microsoft-cost-management, which documents Reporting + analytics > Cost analysis and Monitoring > Budgets. Explicitly say budget alerts do not stop usage.
-->
