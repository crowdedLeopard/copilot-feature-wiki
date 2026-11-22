---
title: "Microsoft 365 admin center: pay for Copilot Chat from prepaid capacity packs alone"
slug: "m365-admin-center-copilot-billing-and-usage-standalone-consumption-of-prepaid-capacity-pac"
roadmapId: 557175
topic: "governance"
products: ["Microsoft 365 admin center","Microsoft Copilot (Microsoft 365)"]
summary: "Admins can scope prepaid Copilot Credits from capacity packs to user groups with no pay-as-you-go billing. Optional; nothing changes until a Global Administrator creates a policy. Copilot Chat stops for covered users if credits run out."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Capacity packs are a prepaid tenant licence of 25,000 Copilot Credits per month per pack, bought in the Microsoft 365 admin center Marketplace; users need no individual licences. A standalone Copilot credit policy needs no Azure subscription."
audiences: ["m365-admin","finops"]
tags: ["capacity-packs","copilot-credits","copilot-chat","pay-as-you-go","usage-based-billing","cost-management","m365-admin-center","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 557175"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557175"
    kind: "roadmap"
  - title: "Use Copilot Studio capacity packs for Microsoft Copilot Chat and SharePoint agents"
    url: "https://learn.microsoft.com/copilot/implement/copilot-capacity-packs"
    kind: "learn"
  - title: "What's new with pay-as-you-go services in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-whats-new"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Microsoft 365 Copilot Cost Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
videos: []
related: ["copilot-credits","spending-policies","m365-admin-center-agent-level-pay-as-you-go-controls","m365-copilot-chat-usage-based-billing-models-model-selector","m365-admin-center-copilot-credits-usage-report"]
controls:
  - governs: "Which users draw only on prepaid capacity pack credits (Copilot credit policy)"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Billing & usage > Pay-as-you-go services > Microsoft Copilot Chat > Copilot credit policies > Create a Copilot credit policy"
      docs: "https://learn.microsoft.com/copilot/implement/copilot-capacity-packs"
    api: null
    note: "Global Administrator required. Scope is security groups, distribution groups or the tenant; up to 10 policies per tenant. Copilot Chat only."
  - governs: "Whether a pay-as-you-go billing policy is connected to Copilot Chat as overage billing"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Billing & usage > Pay-as-you-go services > Microsoft Copilot Chat > billing policy > Connection status"
      docs: "https://learn.microsoft.com/copilot/implement/copilot-capacity-packs"
    api: null
    note: "Billing or AI administrators can set up pay-as-you-go billing but cannot activate a capacity pack."
  - governs: "Whether an environment keeps drawing tenant capacity after its prepaid allocation is used"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Summary > Capacity summary > Prepaid Capacity > Manage capacity > environment > Capacity overages > Draw from the available capacity in my tenant"
      docs: "https://learn.microsoft.com/copilot/implement/copilot-capacity-packs"
    api:
      kind: "power-platform-api"
      call: "PUT /licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "The request body sets the TenantPool enforcement rule for entitlement MCSMessages. The same pane has a separate Bill to my pay-as-you-go billing plan option."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-02-19T00:15:25"
changes:
  - date: "2026-11-22"
    note: "First briefing: Learn documents standalone Copilot credit policies for Copilot Chat while the roadmap item still shows In development."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 62 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: Global Administrator is now stated only for creating a policy and enabling capacity packs, and cost is rated variable."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 74 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 72
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "76ef05555f91dd42c01bb7db58b8b7f6"
---

## What's changing

The roadmap item describes using a prepaid capacity pack as the sole billing method for supported Copilot experiences, so that usage by the users in a billing policy is deducted only from prepaid capacity credits, with no pay-as-you-go charges. The roadmap record lists the item as In development with a target of April CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web.

Microsoft Learn already documents a matching capability under a different name. It calls them Copilot credit policies: a policy connects Prepaid Capacity pack credits to a set of users, and "users covered by the credit policy consume credits only from the prepaid credit pool". A standalone policy needs neither a pay-as-you-go billing policy nor an Azure subscription. Learn's what's-new page lists "Copilot capacity pack without pay-as-you-go" under April 2026. The match with the roadmap item is this wiki's reading of the two descriptions; the roadmap item does not use the term.

Scope is narrower than the roadmap wording. Learn says Copilot credit policies are currently only available for Microsoft Copilot Chat, and that SharePoint agents continue to use pay-as-you-go billing. A policy can be scoped to security groups, distribution groups or the entire tenant, and a tenant can have up to 10. Where a user is covered by more than one policy, the system uses the most specific policy.

The record still shows In development while Learn describes the capability as available. Both are reported here; the roadmap's date is a target, not a commitment.

## Why it matters

This gives finance and service owners a way to cap Copilot Chat spend at a purchased amount per team or department, without connecting an Azure subscription. Because the policy is described as optional and existing configurations continue to work, nothing changes for a tenant that does nothing.

The trade-off is availability: with a standalone policy, Copilot Chat is unavailable for covered users once the prepaid credits are exhausted, until credits replenish at the start of the next monthly billing period. Decide which groups can tolerate that before choosing standalone over pairing with a pay-as-you-go billing policy.

## Risk assessment

**Data exposure**
- Not applicable: a Copilot credit policy decides which funding pool pays for Copilot Chat usage, and Learn does not describe it as granting access to any data.

**Security & identity**
- Creating a Copilot credit policy needs the Global Administrator role. Billing administrators and AI administrators can set up pay-as-you-go billing but cannot activate a capacity pack, per the Learn page.
- A policy's scope (security groups, distribution groups or the entire tenant) decides whose usage draws on the pool. Changes to group membership change who spends the credits, so treat the groups as part of the billing control.

**Autonomy & actions**
- Learn says the credits a Copilot Chat agent consumes depend on its design, how often people use it and the features it uses. A heavily used agent can use up a shared pool for everyone the policy covers.

**Change & support**
- Saving a policy provisions a Microsoft Copilot Chat environment in the Power Platform admin center if none exists, and capacity must then be allocated to it there. Expect support questions if that second step is missed or if the pool runs out mid-month.
- Prepaid Capacity pack consumption can only be monitored in the Power Platform admin center, so finance and help desk need access to that view.

## Cost and licensing

**Licence.** A Microsoft Copilot Studio capacity pack is a prepaid subscription. Each pack is a tenant licence of 25,000 Copilot Credits per month, and users do not need individual licences ([capacity packs page](https://learn.microsoft.com/copilot/implement/copilot-capacity-packs)). Global Administrators or Billing Administrators can buy packs; only a Global Administrator can enable capacity pack usage.

**Meter.** Copilot Credits are the unit of consumption. With a standalone Copilot credit policy, covered users consume credits only from the prepaid pool and no Azure subscription is required. The pack's 25,000 credits are replenished at the start of each monthly billing period.

**What happens at the limit.** Learn says Copilot Chat is unavailable for covered users when the prepaid credits are exhausted, until the next monthly period. The page names three ways to avoid that: buy more packs, add a pay-as-you-go billing policy for overage, or monitor usage and set capacity notifications in the Power Platform admin center.

**Indirect cost.** The credits consumed by an agent depend on its design and use; the credit rates are on the Copilot Studio billing rates page that the capacity packs page links to. Admin time is needed for the two-step setup across the Microsoft 365 admin center and the Power Platform admin center.

## Scope

- **Experiences:** Copilot Chat only at the time of writing (November 2026). The roadmap says supported Copilot experiences; Learn says SharePoint agents continue to use pay-as-you-go billing.
- **Users:** those in the security groups, distribution groups or tenant scope chosen for each policy; up to 10 policies per tenant.
- **Roles:** Global Administrator to create a policy and to enable capacity pack usage; Global Administrator or Billing Administrator to buy packs.
- **Cloud and platform:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web.
- **Prerequisite:** a purchased capacity pack, and capacity allocated to the Copilot Chat environment in the Power Platform admin center.
- **Rollout:** the roadmap record is In development with a target of April CY2026; Learn's what's-new page lists the capability under April 2026.

## Governance guidance

### Before rollout
- Confirm that Copilot Chat is the only experience you need to cover, since SharePoint agents continue on pay-as-you-go billing.
- Choose the security or distribution groups for each policy, and keep within the limit of 10 policies per tenant.
- Decide whether standalone use is acceptable for each group, knowing Copilot Chat stops for them once credits run out until the next monthly period.
- Ask a Global Administrator to buy the capacity packs, then check the available credit against expected demand.

### At rollout
- Create each Copilot credit policy and set its scope (row 1 of the controls table).
- Allocate capacity to the Copilot Chat environment in the Power Platform admin center, and review the Capacity overages options there (row 3).
- Check the Connection status toggle on the Pay-as-you-go services tab, since pairing with pay-as-you-go is done by connecting a billing policy there (row 2).

### After rollout
- Monitor credits consumed and remaining on the Summary tab of the Copilot Studio licensing page in the Power Platform admin center.
- Set the Overage notification so owners are told when allocated capacity is nearing use.
- Review each policy's group scope when teams change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users draw only on prepaid capacity pack credits (Copilot credit policy)</strong><br><small>Group</small><br><small class="controls__note">Global Administrator required. Scope is security groups, distribution groups or the tenant; up to 10 policies per tenant. Copilot Chat only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Billing &amp; usage › Pay-as-you-go services › Microsoft Copilot Chat › Copilot credit policies › Create a Copilot credit policy <a href="https://learn.microsoft.com/copilot/implement/copilot-capacity-packs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a pay-as-you-go billing policy is connected to Copilot Chat as overage billing</strong><br><small>Tenant</small><br><small class="controls__note">Billing or AI administrators can set up pay-as-you-go billing but cannot activate a capacity pack.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Billing &amp; usage › Pay-as-you-go services › Microsoft Copilot Chat › billing policy › Connection status <a href="https://learn.microsoft.com/copilot/implement/copilot-capacity-packs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an environment keeps drawing tenant capacity after its prepaid allocation is used</strong><br><small>Environment</small><br><small class="controls__note">The request body sets the TenantPool enforcement rule for entitlement MCSMessages. The same pane has a separate Bill to my pay-as-you-go billing plan option.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Summary › Capacity summary › Prepaid Capacity › Manage capacity › environment › Capacity overages › Draw from the available capacity in my tenant <a href="https://learn.microsoft.com/copilot/implement/copilot-capacity-packs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT /licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

A standalone policy and the Power Platform admin center allocation work together: the Microsoft 365 admin center policy links users to the prepaid pool, and the allocation to the Copilot Chat environment is made separately in the Power Platform admin center. The Capacity overages pane there offers Draw from the available capacity in my tenant and Bill to my pay-as-you-go billing plan, and Learn says you can choose one or both. How those choices interact with a standalone credit policy is not described (see Open questions).

The Power Platform API tutorial maps Draw from the available capacity in my tenant to the TenantPool enforcement rule; when it is disabled the environment is capped at its allocation. If a published environment group rule governs that setting, updates for an individual environment are rejected with the TenantPoolLockedByPolicy error. That tutorial covers the tenant-capacity option only, not the pay-as-you-go option in the same pane.

Global Administrator is required to create a Copilot credit policy. Microsoft recommends roles with the fewest permissions, and describes Global Administrator as a role to limit to emergency scenarios where an existing role cannot be used.

## Open questions

- Is the roadmap's billing policy with prepaid capacity the same thing as the Copilot credit policy on Learn, and will supported Copilot experiences grow beyond Copilot Chat? Watch the roadmap item and the capacity packs page.
- If a standalone credit policy covers a user and the environment's Bill to my pay-as-you-go billing plan option is selected in the Power Platform admin center, can pay-as-you-go charges still occur? Learn does not say.
- How do Copilot credit policies relate to spending policies in Copilot cost management, where Learn says prepaid capacity packs can be set as the billing method and a pay-as-you-go meter is recommended to keep services running once they are exhausted?
- Does Microsoft document an API for creating or editing Copilot credit policies? None is documented at the time of writing (November 2026).
- Will the roadmap status move from In development to match the April 2026 entry on Learn's what's-new page? Watch the roadmap item.

<!-- rationale
risk: Low. Learn describes the policy as optional, so nothing changes until a Global Administrator creates one; the exposure is that covered users lose Copilot Chat when the prepaid credits are used up.
cost: Variable. Copilot Credits meter usage against prepaid capacity packs of 25,000 credits per month per pack; a standalone policy draws only on that prepaid pool.
impact: Low. Administrators configure it, and only users in a policy's scope notice, and only if the prepaid credits run out.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: first paragraph; Open questions: environment pay-as-you-go / absence: Microsoft does not describe whether the environment's pay-as-you-go overage option can permit continued billed usage in this Copilot Chat capacity setup. | Found: PPAC provides a unified capacity management experience across all Copilot Studio harnesses, including Copilot Chat, Standard, and GitHub Copilot. ... Select Bill to my pay-as-you-go billing plan to let the environment continue usage through the selected billing plan. | Fix: Replace 'How those choices interact with a standalone credit policy is not described (see Open questions)' with 'For environments managed in Power Platform admin center, including Copilot Chat, Draw from the available capacity in my tenant permits use of unallocated tenant prepaid credits, and Bill to my pay-as-you-go billing plan permits continued usage through the selected billing plan. If no overage source is enabled, the environment can consume only its allocated prepaid credits.' Cite https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity. Remove the corresponding Open questions bullet; do not describe this documented overage route as unconfirmed. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support / behaviour: Prepaid Capacity pack consumption can only be monitored in Power Platform admin center. | Found: You can only monitor Prepaid Capacity pack consumption in the Power Platform admin center. | Fix: Replace the sentence with 'The capacity packs page directs administrators to Power Platform admin center to monitor consumption; the Cost Management monitoring page also documents Prepaid Capacity pack consumption by Microsoft 365 and Power Platform services in Microsoft 365 admin center.' Cite https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending alongside the existing source to disclose the disagreement. | Source: https://learn.microsoft.com/copilot/implement/copilot-capacity-packs
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Microsoft 365 admin center route is Copilot > Billing & usage > Pay-as-you-go services > Microsoft Copilot Chat > Copilot credit policies > Create a Copilot credit policy. | Found: go to Copilot > Billing & usage. Select the Pay-as-you-go services tab, and then select Microsoft Copilot Chat. In the Copilot credit policies section, select Create a Copilot credit policy. | Fix: The printed route reaches the right creation screen but stops before the user-scoping control. Extend controls[0].ui.path and the rendered table to 'Copilot > Billing & usage > Pay-as-you-go services > Microsoft Copilot Chat > Copilot credit policies > Create a Copilot credit policy > Scope', as documented at https://learn.microsoft.com/copilot/implement/copilot-capacity-packs. | Source: https://learn.microsoft.com/copilot/implement/copilot-capacity-packs
- [supported, minor] controls[1].ui; Governance controls table; Governance guidance: At rollout / admin-path: The overage billing connection is found at Copilot > Billing & usage > Pay-as-you-go services > Microsoft Copilot Chat > billing policy > Connection status. | Found: On the Pay-as-you-go services tab for Microsoft Copilot Chat, find the billing policy name to bill for any overage, then switch the Connection status toggle to Connected. | Fix: Keep the capacity-packs route but add: 'The commerce setup page gives a different entry point: Copilot > Cost management > Classic Billing & usage; the Connection status toggle is in the Manage billing policy connections panel.' Cite https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot. This reports the alternative navigation instead of silently choosing between Microsoft pages. | Source: https://learn.microsoft.com/copilot/implement/copilot-capacity-packs
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The tenant-capacity overage setting is at Licensing > Copilot Studio > Summary > Capacity summary > Prepaid Capacity > Manage capacity > environment > Capacity overages > Draw from the available capacity in my tenant. | Found: On the Summary tab, under Capacity summary, find the Prepaid Capacity card. In the License type column, select Manage capacity. ... Under Capacity overages ... Draw from the available capacity in my tenant. | Fix: Add the omitted column heading: 'Licensing > Copilot Studio > Summary > Capacity summary > Prepaid Capacity > License type > Manage capacity > environment > Capacity overages > Draw from the available capacity in my tenant' in controls[2].ui.path and the rendered table, following https://learn.microsoft.com/copilot/implement/copilot-capacity-packs. | Source: https://learn.microsoft.com/copilot/implement/copilot-capacity-packs
- [supported, minor] Governance controls: API tutorial paragraph / behaviour: The tutorial says disabling TenantPool caps the environment at its allocation. | Found: when it's disabled, the environment is capped at its allocation. | Fix: Replace the clause with 'The tutorial says disabling TenantPool caps the environment at its allocation; the capacity management page qualifies this: the environment can consume only its allocation if no overage source is enabled, while Bill to my pay-as-you-go billing plan permits continued usage through that plan.' Cite https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity alongside the tutorial. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations
- [supported, minor] Cost and licensing: Indirect cost / cost: The Copilot Studio Billing rates and management page linked by the capacity packs page publishes credit rates. | Found: This article describes the rates for the different features and capabilities used in agents that Copilot Studio bills through the pay-as-you-go meter or Copilot Credit packs. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management to sources and link 'Copilot Studio billing rates page' directly to it. No numerical rate needs to be added. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management
- [contradicted, minor] Governance guidance: At rollout and After rollout; Governance controls table / consistency: The governance checklist's allocation, monitoring and notification controls are all represented by matching table rows. | Found: Allocate capacity ... (row 3). ... Monitor credits consumed and remaining ... Set the Overage notification ... Row 3 governs 'Whether an environment keeps drawing tenant capacity after its prepaid allocation is used'; no row governs allocation amount, monitoring or notifications. | Fix: The checklist names allocation amount, consumed/remaining-credit monitoring and Overage notification without corresponding control rows; row 3 governs tenant-capacity overage draw, not those controls. Remove the incorrect '(row 3)' reference from the allocation instruction and state that those checklist controls are described in the cited capacity-packs documentation rather than mapped in this table. Do not add rows.
-->
