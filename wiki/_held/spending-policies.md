---
kind: "concept"
title: "Spending policies: who and what can consume Copilot Credits, and up to how much"
slug: "spending-policies"
summary: "A spending policy is a rule in the Microsoft 365 admin center that sets which users, groups, agents or environments may consume Copilot Credits, on which services, up to what monthly limit and billed to which method."
created: "2026-11-18"
updated: "2026-11-18"
version: 1
tags: ["spending-policies","copilot-credits","usage-based-billing","cost-management","finops","m365-admin-center","microsoft-graph"]
covers: []
sources:
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Manage Copilot Studio costs in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Monitor Copilot Credit spending"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending"
    kind: "learn"
  - title: "Microsoft 365 Copilot Cost Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
  - title: "Create spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
related: ["copilot-credits","copilot-studio-cost-management-m365-admin-center","m365-copilot-chat-usage-based-billing-models-model-selector","work-iq"]
controls:
  - governs: "Activating the default spending policy for the whole organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Get Started"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    api: null
    note: "Global administrator or Billing administrator signs in to activate. The Graph page does not say that creating an allUsersSpendingPolicy is the same as activating this policy."
  - governs: "Creating identity-based policies for users or groups, with services, limits and billing method"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > + Add spending policy"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies with @odata.type, displayName, periodLimit, perUserLimit and serviceSettings"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    note: "Beta API, delegated permissions only. A new policy is created disabled. Needs the Billing Administrator or Global Administrator role."
  - governs: "Changing a policy's scope, services, billing method, limits and alerts"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > policy > Save changes"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id} with displayName, periodLimit, perUserLimit or billingMethods and an If-Match ETag header"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "AI administrator and License administrator can edit but not create. Beta API."
  - governs: "Alert thresholds on a policy"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > policy"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    note: "UI: alerts are edited in the policy's details fly-out. Alerts notify; they do not stop use. Beta API."
  - governs: "Resource-based policies for Copilot Studio agents and environments, with per-agent limits"
    scope: "environment"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    api: null
    note: "Choose Resources as the scope. Opt-in: covered scopes stop using Power Platform admin center allocations and billing plans."
  - governs: "Removing a policy and its limits"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > More actions (⋮) > Delete"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "DELETE https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    note: "Deleting does not remove, reallocate or reset credits. Beta API."
confidence: "medium"
dependents: 11
changes:
  - date: "2026-11-18"
    note: "New concept page explaining Copilot Credit spending policies: kinds, limits, billing, controls and monitoring."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 80 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 77
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "c402506d4021868efffe9ffe14d4a0c6"
---

## What it is

A spending policy is an administrator-defined rule in the Microsoft 365 admin center that decides who, or which agents and environments, can consume Copilot Credits, on which services, up to what monthly limit and against which billing method. Microsoft describes spending policies as the way to control access and Copilot Credit spending for AI experiences enabled by usage-based billing. They are limit-based controls: they cap spend and do not reserve or allocate credits to anyone.

**Two kinds of policy**

| Kind | Follows | Scope you choose | Per-unit limit |
| --- | --- | --- | --- |
| Identity-based | The person using the service | All users, or specific groups | Per user |
| Resource-based | The agent or environment being used | Specific agents, specific environments or all environments | Per agent |

Identity-based policies suit a group using a service such as Cowork. Resource-based policies are documented for Copilot Studio, where usage follows the agent or environment rather than the person. An identity-based policy cannot be converted into a resource-based one.

**How it works**

- Activating the default spending policy (Copilot > Cost Management > Get Started) targets the whole organisation and all users, and unlocks the experiences that usage-based billing gates. Each further policy has its own independent limit and does not inherit the tenant-level one.
- A policy holds the selected services, a monthly limit for the policy, an optional per-user limit, alert thresholds and a billing method. **Auto-apply new services** is on by default, so newly supported services join the policy automatically.
- A user in several policies for the same service is placed in one: the highest per-user limit wins, then the largest overall limit, then the most recently created policy. Limits are not combined.
- For Copilot Studio, a Microsoft 365 admin center policy takes precedence over the Power Platform admin center controls, and a resource policy over an identity policy.

For the meter itself, see [Copilot Credits](/concepts/copilot-credits/).

## Why it matters

Spending policies are how an organisation decides who may use credit-billed AI services and caps what they can spend. Setting up usage-based billing means activating a default policy, and Microsoft's setup page asks administrators to set a per-user limit to prevent runaway spending by one individual. The same page offers an option to not limit monthly spending, which lets the policy use credits against the billing method without restrictions, so a policy left unlimited has no ceiling from the policy itself.

For Copilot Studio the choice is opt-in: until a resource-based policy covers an environment, its existing Power Platform admin center configuration remains in effect. Creating one moves credit management for that scope to the Microsoft 365 admin center, so decide deliberately which of the two admin centres owns each environment.

## Cost and licensing

A spending policy is a limit, not a purchase. The cost is the Copilot Credits consumed under it, billed to the subscription chosen as the policy's billing method; when credits run out for that subscription, usage continues on a pay-as-you-go basis. If a tenant selects both prepaid capacity packs and an Azure subscription with a Copilot Credit Pre-purchase plan (P3), billing is applied to capacity packs first, then P3, then pay-as-you-go. Global administrators and Billing administrators can set a different billing method per policy, which allows departmental billing.

Licences depend on the service a policy covers: Microsoft lists Cowork as requiring a Copilot licence. Credit rates are not on the pages that describe spending policies; see [Copilot Credits](/concepts/copilot-credits/) and Microsoft's Copilot Credits licensing guide. The Consumption tab shows an estimated cost that Microsoft says might not match your bill.

## Risks and limits

- **Hitting a limit blocks use.** When users hit the limit, they lose access to agents and services for the rest of the month until credits reset on the first of the month. They can request more credits, but they do not fall back to another policy.
- **A per-user overrun can go unreported.** A running task that exceeds the per-user limit can complete. Microsoft says the excess does not count toward the policy limit, is not billed (at Microsoft's sole discretion) and does not appear in the Cost Management dashboards, so the dashboards can understate real use.
- **Overlapping policies are not combined.** The chosen policy applies in full. Check which policy a user lands in before assuming a lower limit elsewhere will apply.
- **Auto-apply widens a policy silently.** With the default setting, future supported services and agents inherit the policy. Turn it off where new services need review first.
- **All environments is a tenant-wide switch.** For Copilot Studio it replaces the environments' Power Platform admin center capacity allocations and linked billing plans, and takes up to 12 minutes to apply to a newly linked environment. Removing the environment or deleting the policy hands control back to the Power Platform policy.
- **AI Builder credits are outside resource policies.** Microsoft advises against moving resources that use AI Builder into them.
- **Moving groups does not reset consumption.** A user's prior consumption carries into the new group's policy, but the Consumption tab shows only the current policy at user level.
- **Coverage is by service list.** Policies govern the services Microsoft lists as managed by usage-based billing, which Microsoft says it will extend. Copilot Chat, SharePoint agents and the Retrieval API pay-as-you-go are documented on a separate page.
- **The API is beta.** Microsoft states that beta APIs are subject to change and unsupported in production, and the policy API accepts delegated permissions only.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Activating the default spending policy for the whole organisation</strong><br><small>Tenant</small><br><small class="controls__note">Global administrator or Billing administrator signs in to activate. The Graph page does not say that creating an allUsersSpendingPolicy is the same as activating this policy.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Get Started <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating identity-based policies for users or groups, with services, limits and billing method</strong><br><small>Group</small><br><small class="controls__note">Beta API, delegated permissions only. A new policy is created disabled. Needs the Billing Administrator or Global Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies with @odata.type, displayName, periodLimit, perUserLimit and serviceSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Changing a policy's scope, services, billing method, limits and alerts</strong><br><small>Group</small><br><small class="controls__note">AI administrator and License administrator can edit but not create. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › policy › Save changes <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id} with displayName, periodLimit, perUserLimit or billingMethods and an If-Match ETag header</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Alert thresholds on a policy</strong><br><small>Group</small><br><small class="controls__note">UI: alerts are edited in the policy's details fly-out. Alerts notify; they do not stop use. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}/emailThresholdSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Resource-based policies for Copilot Studio agents and environments, with per-agent limits</strong><br><small>Environment</small><br><small class="controls__note">Choose Resources as the scope. Opt-in: covered scopes stop using Power Platform admin center allocations and billing plans.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Removing a policy and its limits</strong><br><small>Group</small><br><small class="controls__note">Deleting does not remove, reallocate or reset credits. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › More actions (⋮) › Delete <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>DELETE https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Global administrators and Billing administrators can create policies and set billing methods. AI administrators and License administrators can edit policies, limits, alerts and billing methods but cannot create policies. Reader roles (AI Reader, Global Reader and similar) can view consumption but change nothing. The Graph create call also requires the Billing Administrator or Global Administrator role at runtime. For Copilot Studio, Microsoft says an existing Power Platform role does not itself become a Microsoft 365 role.

**Interaction.** Limits stop use; alerts only notify. Alert emails begin at the threshold and repeat daily until the month resets or the policy changes. A policy defines access and limits only: deleting one does not remove, reallocate or reset credits, and the users it covered fall under any other policy they belong to.

**Watching.** Cost Management > Overview refreshes every 4 hours and Consumption every 2 hours; Consumption reports by policy, user, group, agent and service, including limit utilisation. Users who reach a limit can submit credit requests, which administrators review under Credit requests. Microsoft documents no PowerShell cmdlet for spending policies in the pages read, and no Graph call for resource-based policies.

## What to check

- Open Copilot > Cost Management > Configuration and list every spending policy, its scope and its limits.
- Check that the default policy has a per-user limit rather than relying on the policy limit alone.
- Review **Auto-apply new services** on each policy and turn it off where new services need review.
- Identify users who sit in more than one policy and confirm the policy the ordering rules select for them.
- Confirm which Copilot Studio environments a resource-based policy covers before choosing **All environments**.
- Confirm alert thresholds and recipients, so a policy approaching its limit reaches a person.
- Use the Consumption tab's limit utilisation to find policies close to their limit before users are blocked.

## Open questions

- Does Microsoft plan a Graph API or PowerShell equivalent for resource-based (Copilot Studio) spending policies? None is documented in the pages read.
- Which credit rate applies to each service a policy covers? The spending policy pages do not state rates.
- When is excess per-user usage billed, given Microsoft's "sole discretion" wording?
- How soon does a limit change take effect for identity-based policies? The 12-minute figure is stated only for resource-based policies.

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[2].governs; Governance controls: third table row / applicability: The policy PATCH shown in the third row performs the same scope, service and alert changes as the UI. | Found: The following properties can be updated: `displayName`, `periodLimit`, `perUserLimit`, and `billingMethods`. | Fix: Keep the endpoint, but append to controls[2].note and the rendered row: 'The Graph call shown updates only the name, limits and billing method; it does not update scope, services or alerts.' | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update
- [contradicted, blocker] What it is: How it works, overlap bullet; What to check / behaviour: Overlapping policies are selected by highest per-user limit, then overall limit, then creation date, without specifying how an unset per-user limit is compared. | Found: If a policy doesn't have a per-user limit set, the system uses its overall policy limit as the per-user value for this comparison. | Fix: After the ordering rule, add: 'If a policy has no per-user limit, its overall policy limit is used as the per-user value for this comparison.' | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].note; Governance controls: Roles / role: AI administrators and License administrators can edit policies, limits, alerts and billing methods but cannot create policies. | Found: AI administrator and License administrator roles can edit spending policies, manage limits and alerts, and billing methods. However, they can't create spending policies. | Fix: Add after the Roles paragraph: 'Microsoft's setup page is inconsistent about License Administrator: it also lists that role among roles with read-only consumption access and no policy-editing permissions.' | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup
- [supported, minor] What it is: How it works; Risks and limits: Auto-apply widens a policy silently / behaviour: Auto-apply automatically widens the policy to newly supported services and agents. | Found: When the setting is on, newly supported Microsoft Copilot services and agents are automatically added to the policy. | Fix: Change the risk heading from 'Auto-apply widens a policy silently' to 'Auto-apply widens a policy automatically'. Automatic inclusion does not establish absence of notice; the cited billing overview says Microsoft will provide notifications as services become available. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
- [contradicted, minor] What to check: Consumption tab limit utilisation / consistency: The Consumption monitoring control recommended by the checklist has no controls-table row. | Found: Use the Consumption tab's limit utilisation to find policies close to their limit before users are blocked. The controls table covers activation, creation, editing, alerts, resource policies and deletion, but not Consumption monitoring. | Fix: Remove the final What to check bullet beginning 'Use the Consumption tab'. Keep the supported monitoring description under Governance controls: Watching.
-->
