---
title: "Copilot Studio: cost controls in the Microsoft 365 admin center"
slug: "copilot-studio-cost-management-m365-admin-center"
roadmapId: 577834
topic: "copilot-studio"
products: ["Microsoft 365","Microsoft 365 admin center","Microsoft Copilot Studio","Microsoft Power Platform governance and administration"]
summary: "Copilot Studio environments and agents can be put under Microsoft 365 admin center spending policies for Copilot Credits. It is opt-in, but a covered scope stops using its Power Platform allocations and billing plans."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Copilot Credits are billed to the Azure subscription in the policy's billing method (pay-as-you-go, optionally with P3) or drawn from prepaid capacity packs. No separate licence or price for the control is stated."
audiences: ["m365-admin","power-platform-admin","finops","service-owner"]
tags: ["copilot-credits","cost-management","spending-policies","pay-as-you-go","copilot-studio","agent-registry","usage-based-billing","m365-admin-center","power-platform-admin-center","finops"]
sources:
  - title: "Microsoft 365 Roadmap 577834"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577834"
    kind: "roadmap"
  - title: "Manage Copilot Studio costs in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Microsoft 365 Copilot Cost Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Set up pay-as-you-go"
    url: "https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up"
    kind: "learn"
  - title: "pac licensing"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/licensing"
    kind: "learn"
  - title: "Agent registry integration for Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-agent-365/builder/agent-registry"
    kind: "learn"
videos: []
related: ["copilot-credits","m365-admin-center-agent-level-pay-as-you-go-controls","m365-admin-center-copilot-credits-usage-report","m365-copilot-chat-usage-based-billing-models-model-selector"]
controls:
  - governs: "Resource-based spending policies for Copilot Studio environments and agents (scope, limits, alerts, billing method)"
    scope: "environment"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    api: null
    note: "AI administrator and License administrator can edit but not create policies (setup page). Learn documents no Graph call for resource-based policies."
  - governs: "Environment capacity allocation and overage source for Copilot Credits"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Summary > Manage Copilot Credits"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api:
      kind: "pac-cli"
      call: "pac licensing update-allocations-by-environment"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/licensing"
    note: "Preview CLI. Does not apply to an environment while a Microsoft 365 resource-based policy covers it."
  - governs: "Monthly Copilot Credit limit for an individual agent"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Summary > Manage Agents"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api: null
    note: "Limits are not applied instantly. Learn documents notifications and a hard stop here; it does not say whether they apply to an agent covered by a Microsoft 365 policy."
  - governs: "Pay-as-you-go billing plan linking environments to an Azure subscription"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Pay-as-you-go plans > New billing plan > Azure subscription"
      docs: "https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up"
    api:
      kind: "pac-cli"
      call: "pac licensing create-billing-policy; pac licensing add-billing-policy-environment --billing-policy-id <id> --environment-ids <JSON array>"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/licensing"
    note: "Preview CLI. Environment admin, Power Platform admin, Global admin or Dynamics 365 admin; plus Azure permissions. Does not apply to environments covered by a Microsoft 365 policy."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-10-29T23:01:00"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected against Learn: opt-in resource-based policies now replace Power Platform allocations for covered scope, AI Builder is excluded, and control paths, CLI commands and roles were re-read; Copilot Chat and 'free' claims removed."
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 75
  unconfirmed: 0
  contradicted: 2
  attempts: 2
---

## What's changing

The roadmap item says Microsoft is expanding cost management for Copilot Studio into the Microsoft 365 admin center, so administrators can bring supported Copilot Studio environments and agents under Cost Management spending policies while Copilot Studio cost management is retained in the Power Platform admin center. Resource-based policies for environments and agents are the first planned scopes; user and group policy support is planned for a later phase. The item also says cost data will be introduced into cost management and the agent registry for agents built on Microsoft platforms, such as Cowork and Copilot Studio agents.

Microsoft Learn already documents the experience in [Manage Copilot Studio costs in the Microsoft 365 admin center](https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs). Opting in means creating a resource-based spending policy; until then the existing Power Platform admin center configuration remains in effect and no separate migration step is needed. A policy's scope is either a **Specific resource** (individual agents) or a **Resource collection** (all supported usage in the chosen environments, including apps and workflows deployed there). Each policy sets a monthly limit or no limit, an optional per-agent limit, alert thresholds and recipients, and a billing method.

For covered resources, Learn says Copilot Credit management moves to the Microsoft 365 admin center and replaces their Power Platform admin center capacity allocations and linked billing plans. Removing an environment from a policy, or deleting the policy, makes the applicable Power Platform policy resume automatically. After you link an environment, Learn says to allow up to 12 minutes for the policy to apply.

The roadmap record lists the item as In development, with a General Availability target of October CY2026, for Worldwide (Standard Multi-Tenant) on the web. That target month has passed at the time of writing (16 November 2026) and the status has not moved, while Learn already describes policy creation. Microsoft has not said when or whether the experience reaches every tenant. The planned cost data in the agent registry is roadmap-only: Learn's agent registry page lists no cost field among the metadata it shows administrators (November 2026).

## Why it matters

Copilot Studio spend can now be governed from the same Cost Management dashboard that finance and licensing readers already use for other usage-based Copilot services, instead of only from environment-level settings in the Power Platform admin center. That suits a FinOps team that wants one budget view, but it moves the decision about who controls an environment's credits from Power Platform administrators to whoever holds the Microsoft 365 spending-policy roles.

If nobody acts, nothing changes: Learn says existing Power Platform configuration stays in effect until a policy covers it. The risk comes from acting without a plan. A policy set to All environments replaces the Power Platform spending controls for every environment, and AI Builder usage is not covered at all, so agree ownership and pilot on a few environments before anyone enables it.

## Risk assessment

**Data exposure**
- No new data access is documented: the feature governs spend, not content. Consumption views break usage down by policy, user, group, agent, service and funding source, so per-person usage becomes visible to anyone with a supported reader role. Give AI Reader or Global Reader only to people who need it.

**Security & identity**
- Billing methods are set by Global administrator or Billing administrator; AI administrator and License administrator can edit policies, limits and alerts. A policy's billing method decides which Azure subscription is billed, so review who holds these roles before anyone creates a policy.
- Learn warns that an existing Power Platform role does not itself become a Microsoft 365 role, so Power Platform administrators have no policy rights here until assigned one.

**Autonomy & actions**
- The control does not make agents act. It caps spend, and Learn does not say what happens to a covered agent when a resource-based policy limit is reached. The Power Platform per-agent limit is documented with a hard stop that turns the agent off, but Learn says Microsoft 365 controls take precedence over Power Platform controls for covered usage, so do not assume the hard stop still applies.
- Resource-based policies do not apply to AI Builder features or the credits they consume. Prompts used as tools, in topics or in agent flows run on AI Builder, so that spend stays outside the new policy.

**Change & support**
- Selecting All environments replaces the Power Platform spending controls for every environment in the tenant. Learn advises starting with Specific environments.
- Two admin teams now hold overlapping controls. A resource-based policy beats an identity-based one, and where two policies of the same type overlap, the one with the higher per-agent limit applies; limits are not added together.
- The Power Platform admin center shows a message in Manage capacity and Manage agent when a policy covers the environment or agent, which helps support teams see which experience is in charge.

## Cost and licensing

The control's own prerequisites are roles: Learn's Before you begin section lists Microsoft 365 admin center roles and names no licence or price for the control. At the time of writing (November 2026), no separate licence or charge for the cost controls is stated.

The cost is the governed usage, metered in **Copilot Credits**. Credits are billed to the Azure subscription chosen as the billing method; when credits for that subscription run out, usage continues on a pay-as-you-go basis. A Copilot Credit Pre-purchase Plan (P3) is layered on top of pay-as-you-go and can be bought from Cost Management > Configuration or the Azure portal. If a policy selects both prepaid capacity packs and a P3 subscription, billing runs prepaid capacity packs first, then P3, then pay-as-you-go. Source: [Set up usage-based billing for Copilot Credits](https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup).

Caps are the monthly policy limit and the optional per-agent limit in the policy (the controls table, first row). Prepaid capacity pack credits can support services managed in either admin center, and credits allocated to environments in the Power Platform admin center reduce the credits available to other services in the Microsoft 365 admin center. Indirect cost is admin time to design the policy model and keep two admin centres consistent during the transition.

## Scope

- **Who it covers:** Copilot Studio environments and individual agents, through resource-based policies. User and group policy support for this feature is planned for a later phase, per the roadmap. Apps and workflows cannot be selected individually; cover them by creating a policy for the environment where they are deployed.
- **Out of scope:** AI Builder features and the credits they consume. Learn says not to move resources, agents, workflows or environments that use AI Builder to these policies.
- **Roles:** Microsoft 365 admin center roles. Learn recommends AI Administrator for Power Platform or Dynamics 365 Administrators who manage policies and AI Reader for Environment Administrators who view consumption. Global administrator and Billing administrator set billing methods; Learn's setup page says AI administrator and License administrator can edit but not create policies.
- **Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Web. It lists no government cloud, which is not a statement that none is supported.
- **Rollout:** the roadmap status is In development with an October CY2026 target, while Learn already documents policy creation. Whether a given tenant already has the experience is not stated.

## Governance guidance

### Before rollout
- Decide whether Microsoft 365 administrators, Power Platform administrators or a FinOps group will create and edit resource-based policies, then assign AI Administrator or AI Reader accordingly.
- Record each target environment's current Power Platform setup (capacity allocation, overage option, linked pay-as-you-go billing plan), because these stop applying once a policy covers the environment.
- List environments and agents that use AI Builder prompts and keep them out of the new policies.
- Agree who holds Global administrator or Billing administrator, since they set the billing method.

### At rollout
- Create a policy in Copilot > Cost Management > Configuration with scope Resources and Specific environments for a pilot; do not start with All environments.
- Set the monthly limit, an optional per-agent limit, alert thresholds and recipients, and choose the billing method.
- Wait up to 12 minutes, then check Manage capacity and Manage agent in the Power Platform admin center for the message that the policy now covers the environment or agent.
- Create a separate Specific resource policy only for an agent that needs its own limit or billing method, and note that the higher per-agent limit wins where policies overlap.

### After rollout
- Review consumption by environment and agent in Cost Management and compare it with the limits set.
- Remove an environment from a policy, or delete the policy, only when you want its Power Platform configuration to resume.
- Watch Message center and the Learn page for user and group policy scopes and for agent registry cost data.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Resource-based spending policies for Copilot Studio environments and agents (scope, limits, alerts, billing method)</strong><br><small>Environment</small><br><small class="controls__note">AI administrator and License administrator can edit but not create policies (setup page). Learn documents no Graph call for resource-based policies.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Environment capacity allocation and overage source for Copilot Credits</strong><br><small>Environment</small><br><small class="controls__note">Preview CLI. Does not apply to an environment while a Microsoft 365 resource-based policy covers it.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Summary › Manage Copilot Credits <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac licensing update-allocations-by-environment</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/licensing" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly Copilot Credit limit for an individual agent</strong><br><small>Agent</small><br><small class="controls__note">Limits are not applied instantly. Learn documents notifications and a hard stop here; it does not say whether they apply to an agent covered by a Microsoft 365 policy.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Summary › Manage Agents <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go billing plan linking environments to an Azure subscription</strong><br><small>Environment</small><br><small class="controls__note">Preview CLI. Environment admin, Power Platform admin, Global admin or Dynamics 365 admin; plus Azure permissions. Does not apply to environments covered by a Microsoft 365 policy.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Pay-as-you-go plans › New billing plan › Azure subscription <a href="https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac licensing create-billing-policy; pac licensing add-billing-policy-environment --billing-policy-id &lt;id&gt; --environment-ids &lt;JSON array&gt;</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/licensing" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The first row is the real control; the Power Platform rows are what a covered environment or agent stops using, and they stay in force for anything no policy covers. A resource-based policy cannot be created from an identity-based one: you create a new policy.

Learn documents Microsoft Graph Cost Management API (beta) operations only for policies scoped to all users or to selected groups (allUsersSpendingPolicy and selectedGroupsSpendingPolicy), and warns that beta APIs are subject to change and not supported in production. At the time of writing (November 2026) no Graph call for resource-based policies is documented, nor an API for the Power Platform per-agent limit. The Power Platform CLI commands are marked Preview.

Creating a pay-as-you-go billing plan needs permission to create resources and register resource providers in the Azure subscription, or help from someone who has it; Environment admins can edit and link only billing policies they created and environments they administer.

## Open questions

- When a resource-based policy limit is reached, what happens to the covered agent, and does the Power Platform per-agent hard stop still apply? Watch the Learn page for resource-based policies.
- Which role creates resource-based policies? The Copilot Studio page recommends AI Administrator to manage policies, while the setup page says AI administrator can edit but not create them.
- Will the Microsoft Graph Cost Management API gain a resource-based (environment or agent) policy type, and will the Power Platform per-agent limit get an API?
- Where and in what form will cost data appear in the agent registry, which does not list it today?
- When does the October CY2026 target apply to tenants, and will government clouds be added? Watch Message center and the roadmap item.

<!-- rationale
risk: Low. Nothing changes until an administrator creates a resource-based policy, but once one covers an environment it replaces that environment's Power Platform capacity allocations and linked billing plans.
cost: Variable. The governed usage is metered in Copilot Credits, billed through pay-as-you-go, a Copilot Credit Pre-purchase Plan (P3) or prepaid capacity packs; Learn names no separate licence or price for the control itself.
impact: Low. Administrators and finance or licensing readers configure and read the policies; nothing reaches end users unless an administrator creates a policy.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] Governance guidance: Before rollout, first bullet / role: After deciding who will create and edit resource-based policies, assigning AI Administrator or AI Reader accordingly supplies the needed roles. | Found: AI administrator and License administrator roles can edit spending policies, manage limits and alerts, and billing methods. However, they can't create spending policies. | Fix: Replace the bullet with: 'Separate policy creators, editors and consumption readers. The setup page lists Global administrator or Billing administrator for initial policy creation; AI Administrator can edit policies, and AI Reader can only view consumption. Confirm resource-policy creation permissions in your tenant before piloting, because the feature page recommends AI Administrator for management but the setup page explicitly excludes creation.' Keep the existing documentation-disagreement note. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks administrators to assign Microsoft 365 roles, but the controls table has no row for role assignment. | Found: Before rollout: 'then assign AI Administrator or AI Reader accordingly.' The four control rows cover resource policies, capacity allocation, agent limits and pay-as-you-go billing plans, not role assignment. | Fix: Add a controls row for 'Assignment of Microsoft 365 policy-management and consumption-reader roles', with the documented role-assignment UI and automation surface researched separately. Preserve the distinction between policy creators, editors and readers.
-->
