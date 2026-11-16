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
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 50
  unconfirmed: 10
  contradicted: 13
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] summary; What's changing / applicability: The same Cost Management spending-policy experience already governs Copilot Chat alongside Cowork. | Found: Searched: "Copilot Chat" "identity-based" "spending policies". Read usage-based-billing-overview-copilot-credits, usage-based-billing-manage-copilot-credits and pay-as-you-go-overview; Chat is referred to a different billing setup. | Fix: Remove Copilot Chat from the description of workloads already governed by this spending-policy experience. Retain Cowork and Work IQ API, which the cited overview explicitly places here; distinguish the Copilot Chat billing-policy experience at https://learn.microsoft.com/copilot/plan/pay-as-you-go-overview.
- [unsupported, major] What's changing / behaviour: Until now Copilot Studio credit caps, capacity allocation and usage reporting lived only in the Power Platform admin center. | Found: Searched: "Copilot Studio" "Until" "cost management" "admin center". Read manage-Copilot-Studio-costs, the billing overview and Power Platform harness guidance; none states this exclusive history. | Fix: Remove 'Until now' and 'only'. Say that existing Power Platform capacity allocations and linked billing plans remain effective until a Microsoft 365 resource-based policy covers the scope.
- [supported, minor] What's changing / applicability: Identity-based policies govern the people who use Cowork. | Found: Use this option when you want a policy to apply to the people who use selected agents and services. For example, a group using Cowork. | Fix: Add https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits to sources. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
- [unsupported, blocker] Scope / applicability: Agents built with Agent Builder in Copilot Chat are already governed through these identity-based spending policies. | Found: Searched: "Agent Builder" "identity-based" "policies" and "Copilot Chat" "identity-based" "spending policies". Read spending-policy guidance and pay-as-you-go-overview; neither places Agent Builder agents under this policy contract. | Fix: Remove the Agent Builder identity-based-policy assertion. If a distinction is needed, link to https://learn.microsoft.com/copilot/plan/pay-as-you-go-overview and describe its documented Copilot Chat billing-policy setup separately.
- [supported, minor] What's changing / behaviour: The agent registry exposes ownership and usage information. | Found: Review observability data (usage, performance, errors) ... Reassign ... Transfer agent ownership to a different user or team | Fix: Cite https://learn.microsoft.com/microsoft-agent-365/builder/agent-registry for the existing registry details; describe planned cost data separately without asserting a particular layout. | Source: https://learn.microsoft.com/microsoft-agent-365/builder/agent-registry#admin-experience-viewing-copilot-studio-agents
- [contradicted, blocker] What's changing; Why it matters; Open questions; rationale: risk / behaviour: The change is additive rather than a migration, leaving overlapping Power Platform spending controls in effect for covered resources. | Found: For resources covered by the spending policy, Copilot Credit management moves to the Microsoft 365 admin center, replacing their Power Platform admin center capacity allocations and linked billing plans. | Fix: Replace 'additive rather than a migration' with 'Opt-in transition: for covered resources, Microsoft 365 policies replace Power Platform capacity allocations and linked billing plans; uncovered environments retain their existing configuration.' Update the overlap rationale accordingly. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs
- [contradicted, minor] What's changing; Governance guidance / consistency: The briefing treats the feature as not yet landed without reporting that its cited Learn article already documents the live setup experience. | Found: Briefing: 'before the feature lands'. Learn: 'Manage Copilot Studio spending in the Microsoft 365 admin center by creating policies for environments or individual agents.' | Fix: State both: the supplied roadmap still says In development with an October CY2026 target, while Learn already documents creating the policies. Do not infer tenant availability or a staggered rollout from the status mismatch. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs
- [unsupported, major] Why it matters / behaviour: Copilot Credits are the common meter behind most Microsoft AI consumption. | Found: Searched: "Copilot Credits" "most" "AI consumption". Read the credit overview and dashboard comparison; both describe eligible services, not most Microsoft AI consumption. | Fix: Replace 'most Microsoft AI consumption' with 'eligible Microsoft AI experiences enabled by usage-based billing', as stated at https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views.
- [contradicted, blocker] Why it matters / applicability: Without a Microsoft 365 spending policy, the only guard rails are Power Platform allocations. | Found: Set an agent-level monthly limit. | You want to prevent one agent from consuming an excessive amount of capacity. | Configure notifications and stop usage when the agent reaches its limit. | Fix: Replace the exclusivity claim with the documented combination of environment allocations, tenant-capacity draw settings, agent limits with Stop usage, and pay-as-you-go billing configuration. The page itself also lists an existing agent-limit control. | Source: https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness
- [unsupported, blocker] Why it matters / date: Finance sees consumption on an Azure invoice weeks later. | Found: Searched: Copilot Studio Azure invoice consumption weeks later billing delay. Read usage-based-billing-compare-dashboard-views; it documents finalized monthly billing and daily cost updates, not a fixed weeks-later invoice delay. | Fix: Remove 'weeks later'. Say 'The Azure bill reflects finalized billable consumption at month close, while Azure Cost Management updates billed amounts daily and usage can take up to 24 hours to appear', citing https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views.
- [unsupported, blocker] Cost and licensing; rationale: cost / licensing: The control is included with Microsoft 365 administration and is free. | Found: Searched: Copilot Studio Cost Management admin center free no additional license cost controls; "Copilot" "Cost Management" "no additional". Read Studio cost-management prerequisites, setup, overview and billing comparison; none states this control is free. | Fix: Remove 'The control is included with Microsoft 365 administration' and 'The control is free'. State that the feature-specific prerequisites name administrative roles but do not state a separate control licence or price; retain the documented workload consumption charges.
- [contradicted, blocker] Scope; Governance guidance: At rollout / applicability: Production Copilot Studio environments and high-traffic agents can be brought under the policies without identifying any excluded workload class. | Found: Resource-based policies created in the Microsoft 365 admin center don't apply to AI Builder features or the credits they consume. ... Don't move resources, agents, workflows or environments that use AI Builder to these policies. | Fix: Add the AI Builder exclusion to Scope and the rollout checklist: do not move resources, agents, workflows or environments that use AI Builder to these policies. Inventory this dependency before creating production policies. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs#choose-what-the-policy-covers
- [unsupported, blocker] Scope / availability: Worldwide standard multi-tenant is the only cloud available at launch. | Found: Searched: "Copilot Studio" "cost management" "GCC". Read the Studio cost article and billing overview; neither states an exclusive launch-cloud restriction. The roadmap only lists Worldwide. | Fix: Replace 'Worldwide (standard multi-tenant) only at launch' with 'The roadmap lists Worldwide (Standard Multi-Tenant); it does not list government clouds.' Do not turn an omitted roadmap cloud into an exclusion.
- [unsupported, blocker] Governance guidance: At rollout / applicability: Administrators should turn on user-level threshold notifications for the resource-based Copilot Studio policies just created. | Found: Searched: Copilot Studio spending policy alerts recipients email shared mailbox supported environments government GCC. Read resource-policy setup and usage-based-billing-manage-copilot-credits: user notifications require a per-user limit in identity-policy guidance. | Fix: For Copilot Studio resource policies, recommend documented policy thresholds and recipients only. If retaining user-level notifications, label them as an identity-policy control requiring a monthly per-user limit, not a verified control for these resource policies.
- [supported, minor] Governance guidance: At rollout / behaviour: The spending-policy experience has an option to automatically include future supported services and agents. | Found: The Auto-apply new services setting is enabled by default for spending policies. Administrators can turn off the setting for policies where future services and agents should be reviewed before they're added. | Fix: Say 'Review Auto-apply new services, which is on by default for documented identity-based spending policies.' Distinguish it from All environments, the resource-policy option that includes future environments, rather than suggesting an unverified resource-policy service toggle. | Source: https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits
- [unsupported, blocker] controls[0].api; Governance controls table / command: /beta/copilot/costManagement (Cost Management API) is an equivalent callable automation control for this row, including resource-based Copilot Studio spending policies. | Found: Searched: "Copilot Cost Management API" "resource" "policy". Read API overview and spendingpolicy-create: the root is a namespace, and concrete policy types are allUsersSpendingPolicy and selectedGroupsSpendingPolicy, not resource policies. | Fix: Do not present the namespace as a call or promise resource-policy equivalence. Move the Graph overview to a qualified general-API note; only list a verified operation with HTTP method and version for its documented scope. Resource-policy automation is not established by this reference.
- [contradicted, blocker] controls[1].ui; controls[1].governs; Governance controls table / admin-path: The cited setup page documents Copilot > Settings > All Settings > Access to usage-based billing experiences as a control over who can see the experiences. | Found: Go to Copilot > Settings > All Settings. ... Select Access to usage-based billing experiences. ... Your selection controls who can request access. It does not complete the usage-based billing setup by itself. | Fix: Keep the path but change docs to https://learn.microsoft.com/copilot/implement/request-access-usage-based-billing-experiences and governs to 'Who can request a spending policy'. Note Global Administrator. The currently cited setup page lacks this path, and the control is not a visibility switch. | Source: https://learn.microsoft.com/copilot/implement/request-access-usage-based-billing-experiences
- [contradicted, blocker] controls[3].ui; Governance controls table / admin-path: The Power Platform environment billing-plan setup path is Billing > Billing plans > Set up pay-as-you-go. | Found: In the navigation pane, select Licensing. ... select Pay-as-you-go plans. The Billing plans page is displayed. ... Select New billing plan. ... Select Azure subscription. | Fix: Replace the front matter and rendered path with 'Licensing > Pay-as-you-go plans > New billing plan > Azure subscription'. 'Set up pay-as-you-go' on this page is a maker-side Power Apps action, not the stated admin-center path. | Source: https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up
- [contradicted, blocker] controls[3].api; Governance controls table / absence: Microsoft has not documented automation for creating a Power Platform billing plan and linking an environment. | Found: pac licensing create-billing-policy | (Preview) Creates the billing policy at tenant level. ... pac licensing add-billing-policy-environment | (Preview) Link billing policy ID with environments. | Fix: Replace null with documented Power Platform CLI billing-policy creation and environment-linking operations from this reference, including their parameters, or split the row into those operations. Mark the CLI surface Preview and cite the licensing reference. | Source: https://learn.microsoft.com/power-platform/developer/cli/reference/licensing
- [contradicted, blocker] controls[3].note; Governance controls table / role: An Environment Administrator or Power Platform Administrator role is sufficient to set up the environment's Azure-linked billing plan. | Found: You need to have permissions to create new resources and register resource providers in the subscription—or have the ability to work with another user who has these permissions. | Fix: Qualify the note: Environment admin or Power Platform admin, plus Azure permissions to create resources and register resource providers, or assistance from someone with those permissions. For Environment admins, editing/linking is limited to policies they created and environments they administer. | Source: https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up
- [contradicted, blocker] Governance controls prose / absence: The Cost Management API is the only programmatic surface and the Power Platform controls have no documented CLI equivalent. | Found: pac licensing update-allocations-by-environment | (Preview) Update currency allocations and enforcement rules for an environment. ... pac licensing create-billing-policy | (Preview) Creates the billing policy at tenant level. | Fix: Remove the exclusivity and blanket no-CLI statements. State that Power Platform documents preview CLI and REST surfaces for billing policies and environment allocations, while Graph's documented policy contract covers user/group audiences rather than verified Copilot Studio resource-policy automation. | Source: https://learn.microsoft.com/power-platform/developer/cli/reference/licensing
- [supported, minor] Governance controls prose / availability: The Microsoft Graph Cost Management API is in beta. | Found: APIs under the /beta version are subject to change. Use of these APIs in production applications is not supported. | Fix: Retain the beta qualification and add that Microsoft does not support production application use. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview
- [contradicted, blocker] Open questions / absence: Microsoft has not published which resource kinds are supported in the first phase. | Found: Apps and workflows don't currently appear in the agent selector, so you can't select an individual app or workflow. To cover them, create a policy for the environment where they're deployed. | Fix: Replace the blanket documentation gap with the published distinction: individual agents are selectable; apps/workflows need environment coverage; AI Builder usage is excluded and Microsoft says not to move workloads using it. Limit any remaining question to environment-type details not stated. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs#choose-what-the-policy-covers
- [contradicted, blocker] Open questions; Why it matters / absence: Precedence between Microsoft 365 spending policies and Power Platform allocations remains unconfirmed. | Found: Microsoft 365 admin center before Power Platform admin center. If a spending policy in the Microsoft 365 admin center covers the environment or agent, its controls take precedence over the Power Platform admin center controls for that usage. | Fix: Remove this open question. Document that Microsoft 365 controls take precedence for covered usage, replacing Power Platform allocations and linked billing plans; removing the covering policy restores the applicable Power Platform policy automatically. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs#understand-policy-hierarchy
- [unsupported, blocker] Governance guidance: After rollout / admin-path: The agent registry has a documented cost column for administrators to review. | Found: Searched: "agent registry" "cost" "ownership". Opened agent-registry-overview and searched its full text for cost/Cost/usage/ownership. The roadmap promises cost data but neither it nor the registry page specifies a cost column. | Fix: Replace 'Review the agent registry cost column quarterly' with 'Review per-agent consumption in Cost Management quarterly; check the registry for the cost data planned by the roadmap as it becomes documented.' Do not invent a column label.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist tells administrators to inventory current environment capacity allocations, but the controls table omits the environment capacity-allocation control. | Found: Checklist: 'Inventory Copilot Studio environments and the billing method each uses today ... (capacity pack, pay-as-you-go, none).' Table: billing policies, request setting, agent limit and billing plan; no capacity-allocation row. | Fix: Add an environment-capacity row sourced to https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness: Licensing > Copilot Studio > Manage Copilot Credits > environment. Note that the covered scope moves to Microsoft 365 policy control.
- [contradicted, minor] front matter: action / consistency: The prepare action fits an opt-in new control that changes nothing until an administrator configures it. | Found: action: prepare. Body: 'Policies are opt-in. If nobody creates one, nothing changes'. The standard assigns review to an optional new control that changes nothing until chosen, except a control closing high-rated exposure. | Fix: Set action to 'review'. The page rates risk medium, not high, and Microsoft confirms unchanged existing configuration until opt-in.
-->
