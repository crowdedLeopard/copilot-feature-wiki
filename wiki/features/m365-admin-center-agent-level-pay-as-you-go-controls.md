---
title: "Microsoft 365 admin center: agent-level controls for pay-as-you-go"
slug: "m365-admin-center-agent-level-pay-as-you-go-controls"
roadmapId: 496363
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "The roadmap plans per-agent controls over metered (pay-as-you-go) agent use in Copilot Chat and SharePoint. Today's documented controls work per service and user group, not per agent. Review whether they fit."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Copilot Credits billed through pay-as-you-go to an Azure subscription, or prepaid capacity packs of 25,000 credits per month (Copilot Chat only). Per-credit prices are not quoted on this page."
audiences: ["m365-admin","finops","service-owner"]
tags: ["m365-admin-center","pay-as-you-go","copilot-credits","agents","spending-policies","copilot-control-system","sharepoint-agents","declarative-agents","copilot-chat","usage-based-billing"]
sources:
  - title: "Microsoft 365 Roadmap 496363"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=496363"
    kind: "roadmap"
  - title: "Set up Microsoft Copilot pay-as-you-go services"
    url: "https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go"
    kind: "learn"
  - title: "Set up and manage pay-as-you-go billing in the Copilot node of the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot"
    kind: "learn"
  - title: "Use agents with pay-as-you-go billing"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing"
    kind: "learn"
  - title: "Manage access to agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    kind: "learn"
  - title: "Purchase and manage agents in Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-agents-copilot-chat"
    kind: "learn"
  - title: "Microsoft 365 pay-as-you-go terms of service"
    url: "https://learn.microsoft.com/sharepoint/microsoft-365-pay-as-you-go-terms-of-service"
    kind: "learn"
  - title: "Manage Copilot Studio costs in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    kind: "learn"
  - title: "List spendingPolicies"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-list"
    kind: "learn"
  - title: "Use Copilot Studio capacity packs for Microsoft Copilot Chat and SharePoint agents"
    url: "https://learn.microsoft.com/copilot/implement/copilot-capacity-packs"
    kind: "learn"
  - title: "Microsoft Copilot Credits report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "copilotPackage: unblock"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-unblock"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Tutorial: Create and manage budgets"
    url: "https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets"
    kind: "learn"
  - title: "Quickstart: Create a budget with Bicep"
    url: "https://learn.microsoft.com/azure/cost-management-billing/costs/quick-create-budget-bicep"
    kind: "learn"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "Which users can use metered agents, via a billing policy and its group"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management > Classic Billing & usage > Billing policies > Add a billing policy > Choose users"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot"
    api: null
    note: "Choose users step: All users or one group (Copilot Chat); SharePoint agents use a security group. Roles: Billing, AI or Global Administrator."
  - governs: "Which service (Copilot Chat or SharePoint agents) a billing policy pays for"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Billing & usage > Pay-as-you-go services > service > billing policy"
      docs: "https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go"
    api: null
    note: "Service-level, not per agent. Disconnecting can take up to two hours to take effect."
  - governs: "Whether an agent is available in Copilot Chat (block or unblock)"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot Control System > Agents"
      docs: "https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Tenant admins and AI admins. Availability, not billing. Blocking a SharePoint-created agent affects Copilot Chat only. API: preview, Agent 365 licence, delegated CopilotPackages.ReadWrite.All."
  - governs: "Spending limit and billing method for individual Copilot Studio agents or environments"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy > Resources > Specific resources"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs"
    api: null
    note: "Copilot Studio agents only; not documented for Copilot Chat or SharePoint agents. Select the agents, set the monthly limit and optional per-agent limit, choose the billing method; for environments choose Specific or All environments."
  - governs: "Prepaid Copilot credits for specific user groups in Copilot Chat"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Billing & usage > Pay-as-you-go services > Microsoft Copilot Chat > Copilot credit policies > Create a Copilot credit policy"
      docs: "https://learn.microsoft.com/copilot/implement/copilot-capacity-packs"
    api: null
    note: "Global Administrator to create. Copilot Chat only, not SharePoint agents."
  - governs: "Credits consumed per user, agent and billing policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Reports > Usage > Reports > Microsoft Copilot > Credits"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    api: null
    note: "Documentation mentions preview: 30 days of history; alerts for users above 2,000 credits."
  - governs: "Azure cost analysis and budget alerts for the billing subscription"
    scope: "tenant"
    ui:
      surface: "Azure portal (Microsoft Cost Management)"
      path: "scope > Monitoring > Budgets"
      docs: "https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing"
    api:
      kind: "azure-cli"
      call: "az deployment sub create --name <deployment-name> --location <location> --template-file main.bicep --parameters startDate=<start-date> endDate=<end-date> contactEmails=<contact-emails-array>"
      docs: "https://learn.microsoft.com/azure/cost-management-billing/costs/quick-create-budget-bicep"
    note: "Budgets alert and do not stop usage. Scope: the subscription used for SharePoint agents. Deploy the quickstart No filter Bicep template saved as main.bicep, with start date, end date and contact emails."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-19"
roadmapModified: "2026-01-22T00:00:09"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: default is now Not stated and action is review; removed claims that the Cost Management policies already deliver this item; reworked controls and roles from the pay-as-you-go setup pages."
  - date: "2026-11-17"
    note: "Corrected after verification: added the documented Graph beta block and unblock calls for agents, fixed the credit-policy admin path, narrowed the Copilot Chat blocking scope and removed an unsupported billing claim."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 77 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 84 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: completed the billing-policy, spending-policy, Credits report and Azure budget paths, removed the read-only spending-policy API, replaced the Bicep technique with an az deployment call, and removed an unmatched budget step from the checklist."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 89 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 97 statements not yet confirmed"
version: 5
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 97
  confirmed: 96
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "ba9e1eeb254e5b7cae80a275f98c3266"
---

## What's changing

The roadmap item describes admin controls for managing AI agents on a consumption basis in Microsoft 365 Copilot. It says administrators will be able to specify which users can access particular agents through pay-as-you-go, control which agents are available for metered consumption, and establish billing policy for each agent, starting with declarative agents in Microsoft 365 Copilot Chat and SharePoint. These are the roadmap's plans: Microsoft Learn does not describe a feature by this name at the time of writing (November 2026).

What Learn documents today is service-level. A pay-as-you-go billing policy is created in the Microsoft 365 admin center and connected to a service, Microsoft Copilot Chat or SharePoint agents. For SharePoint agents, Microsoft states that only users in the security group assigned to the billing policy have access to agents. For Copilot Chat, a policy covers All users or a single group. Agents grounded only in instructions and public websites are included with Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) and (Premium); agents that access shared tenant data are billed by metered consumption for Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) users.

Per-agent spend limits exist separately for Copilot Studio agents, through resource-based spending policies under **Copilot** > **Cost Management**. Microsoft's Copilot Studio page does not extend those policies to Copilot Chat declarative agents or SharePoint agents.

The record shows the item as In development, with a General Availability release phase, a preview date and a target date of April CY2026, for Worldwide (Standard Multi-Tenant) on the web. The record was last modified on 22 January 2026 and the target month has passed without a status change. Treat the date as a target, not a commitment.

## Why it matters

Metered agents let people without a Microsoft Copilot licence use agents, and the cost follows usage. A policy that covers a whole group bills every metered agent that group uses, so a popular agent can generate spend that nobody budgeted for. Per-agent eligibility, which the roadmap plans, is the control that would separate agents worth paying for from the rest. Until it is documented, the practical levers are who is in the policy's group, which agents are blocked in Copilot Chat, and the budget alerts.

If nobody acts, nothing is billed: Microsoft states that pay-as-you-go billing is disabled by default. The risk starts when someone connects a billing policy for a pilot and the group later grows.

## Risk assessment

**Data exposure**
- No new data access is described. For SharePoint agents, Microsoft states that responses depend on each user's permissions to the agent's data sources, so billing eligibility does not widen what an agent can read.
- To keep selected files away from agents, Microsoft points to sensitivity labels with Microsoft Purview Data Loss Prevention conditions. That is a content control and is separate from billing.

**Security & identity**
- Setting up billing needs Billing Administrator, AI Administrator or Global Administrator, plus an Azure Owner or Contributor role on the subscription and resource group. SharePoint agents also need a SharePoint administrator. Keep the Azure role assignment short-lived: Microsoft says it is only needed during setup.
- Security-group membership decides who can use metered SharePoint agents, so the group's owners effectively control spend. Review who can edit that group.

**Autonomy & actions**
- Agents can act on the user's behalf. Microsoft's SharePoint billing table shows autonomous use billed at the same message counts, with no included allowance.

**Change & support**
- A billing policy budget sends email alerts but is not enforced; Microsoft states usage can continue after the budget is passed. Pair it with an Azure budget alert and a monthly check of the Credits report.
- Turning pay-as-you-go off is not instant: Microsoft says it can take up to two hours for users to stop being able to use the agents.
- Expect questions from users who see an agent but are not in the billing group; tell them what eligibility depends on.

## Cost and licensing

**Licence.** Users with a Microsoft Copilot licence use SharePoint agents interactively at no extra cost, per the footnote to Microsoft's SharePoint billing-rates table. Declarative agents grounded in instructions and public websites are included with Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) and (Premium) (Learn: Purchase and manage agents in Copilot Chat).

**Meter.** For Copilot Chat (Basic) and Microsoft 365 (Basic) users, agents that access shared tenant data, such as SharePoint or Graph connector content, are billed on metered consumption. For SharePoint agents, Microsoft's example is 12 messages per complex prompt: 10 for tenant graph grounding and 2 for generative answers. SharePoint agent charges appear under the Copilot Studio meter on the Azure invoice. The Credits report gives the same 12-credit example for an agent grounded in a tenant graph, and its documentation notes preview qualifications.

**Caps.** A billing policy budget sends alerts at set percentages of the budget and does not stop usage. A Copilot credit policy that uses prepaid capacity only (no pay-as-you-go) is a hard stop: when prepaid credits run out, Copilot Chat is unavailable to the covered users until the next monthly period. That option is for Copilot Chat only, not SharePoint agents.

**Not published here.** Per-credit prices are not quoted on this page, and no pricing specific to agent-level controls is documented. Indirect cost is admin and finance time to set up groups, budgets and reviews.

## Scope

- **Users.** Billing policies apply to users without a Microsoft Copilot licence who use agents. In the Copilot Chat setup, a policy covers All users or a single specific group; SharePoint agents use a security group per policy.
- **Agents.** The roadmap names declarative agents in Copilot Chat and SharePoint. Learn documents SharePoint agents and Copilot Chat as the two services you connect to a billing policy.
- **Roles and prerequisites.** Billing Administrator, AI Administrator or Global Administrator, and an Azure subscription with a resource group in the same tenant. The tenant needs at least one SharePoint licence, or a licence that includes SharePoint.
- **Clouds.** The record lists Worldwide (Standard Multi-Tenant) only. Separately, Microsoft's terms page states that Microsoft 365 pay-as-you-go is not available for Office 365 government plans or Office 365 operated by 21Vianet to and for PRC-located users.
- **Platform and phase.** Web, General Availability, with the status and dates given above.

## Governance guidance

### Before rollout
- Decide which agents your unlicensed users need, and list those that access shared tenant data, because only those are metered.
- Create a security group per business unit that will use metered agents, and name an owner who answers for its membership.
- Confirm the Azure subscription, resource group and who holds the Owner or Contributor role during setup.
- Check the Agents section of the Copilot Control System for agents you would block.

### At rollout
- Create the billing policy and choose its group.
- Connect the policy to Microsoft Copilot Chat or SharePoint agents on the Pay-as-you-go services tab, one service at a time.
- Block any agent you do not want available in Copilot Chat, remembering that blocking an agent created in SharePoint affects only its availability in Copilot Chat.
- Create an Azure budget on the same subscription, since the Microsoft 365 budget does not stop usage.

### After rollout
- Review the Credits report weekly at first for users or agents crossing the alert thresholds.
- Compare credits per agent with the group that uses it, and remove users who no longer need metered access.
- Re-check Message center and the roadmap item for the agent-level controls the item describes, and re-assess then.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can use metered agents, via a billing policy and its group</strong><br><small>Group</small><br><small class="controls__note">Choose users step: All users or one group (Copilot Chat); SharePoint agents use a security group. Roles: Billing, AI or Global Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management › Classic Billing &amp; usage › Billing policies › Add a billing policy › Choose users <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which service (Copilot Chat or SharePoint agents) a billing policy pays for</strong><br><small>Tenant</small><br><small class="controls__note">Service-level, not per agent. Disconnecting can take up to two hours to take effect.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Billing &amp; usage › Pay-as-you-go services › service › billing policy <a href="https://learn.microsoft.com/copilot/implement/setup-pay-as-you-go" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an agent is available in Copilot Chat (block or unblock)</strong><br><small>Agent</small><br><small class="controls__note">Tenant admins and AI admins. Availability, not billing. Blocking a SharePoint-created agent affects Copilot Chat only. API: preview, Agent 365 licence, delegated CopilotPackages.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot Control System › Agents <a href="https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Spending limit and billing method for individual Copilot Studio agents or environments</strong><br><small>Agent</small><br><small class="controls__note">Copilot Studio agents only; not documented for Copilot Chat or SharePoint agents. Select the agents, set the monthly limit and optional per-agent limit, choose the billing method; for environments choose Specific or All environments.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy › Resources › Specific resources <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Prepaid Copilot credits for specific user groups in Copilot Chat</strong><br><small>Group</small><br><small class="controls__note">Global Administrator to create. Copilot Chat only, not SharePoint agents.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Billing &amp; usage › Pay-as-you-go services › Microsoft Copilot Chat › Copilot credit policies › Create a Copilot credit policy <a href="https://learn.microsoft.com/copilot/implement/copilot-capacity-packs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Credits consumed per user, agent and billing policy</strong><br><small>Tenant</small><br><small class="controls__note">Documentation mentions preview: 30 days of history; alerts for users above 2,000 credits.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Reports › Usage › Reports › Microsoft Copilot › Credits <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Azure cost analysis and budget alerts for the billing subscription</strong><br><small>Tenant</small><br><small class="controls__note">Budgets alert and do not stop usage. Scope: the subscription used for SharePoint agents. Deploy the quickstart No filter Bicep template saved as main.bicep, with start date, end date and contact emails.</small></td><td data-label="Admin UI"><strong>Azure portal (Microsoft Cost Management)</strong><br>scope › Monitoring › Budgets <a href="https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az deployment sub create --name &lt;deployment-name&gt; --location &lt;location&gt; --template-file main.bicep --parameters startDate=&lt;start-date&gt; endDate=&lt;end-date&gt; contactEmails=&lt;contact-emails-array&gt;</code> <a href="https://learn.microsoft.com/azure/cost-management-billing/costs/quick-create-budget-bicep" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The rows are the nearest existing controls.

The billing-policy setup paths in this table use the Microsoft 365 admin center; no API for creating or connecting billing policies is documented in the pages searched. Two admin-centre entry points appear in Microsoft's pages: **Copilot** > **Billing & usage**, and **Copilot** > **Cost management** with **Classic Billing & usage** selected from the banner. Blocking an agent changes availability in Copilot Chat, not billing. Microsoft documents a Graph beta call to block a package, `POST /beta/copilot/admin/catalog/packages/{id}/block`, and one to unblock it, `POST /beta/copilot/admin/catalog/packages/{id}/unblock` ([unblock reference](https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-unblock)). Both are preview APIs that need a Microsoft Agent 365 licence and the delegated CopilotPackages.ReadWrite.All permission, and Microsoft states that beta APIs are not supported in production applications. The package overview lists declarative agents among the agent types a package can contain. The Copilot Studio spending-policy row governs Copilot Studio agents only; when such a policy covers an environment or agent, it takes precedence over Power Platform admin center controls for that usage, and it does not apply to AI Builder credits. If a user is in more than one billing policy, the Credits report attributes the usage to the oldest configured policy.

## Open questions

- Will the agent-level controls appear as new settings or as an extension of billing policies and Cost Management spending policies? Watch the roadmap item and Message center.
- Will an agent be billable only if an administrator approves it for metered use, and what is the default for agents not yet reviewed?
- Will per-agent billing policies cover SharePoint agents as well as Copilot Chat declarative agents, given that Copilot credit policies are documented for Copilot Chat only?
- Will the roadmap target of April CY2026 be updated now the month has passed?
- Will Microsoft document an API for billing policies, as it has for spending policies in the Cost Management Graph API (beta)?

<!-- rationale
risk: Medium. The roadmap does not say how these controls arrive. Today a connected billing policy bills usage to Azure, its budget only sends alerts, and no per-agent metered-eligibility switch is documented.
cost: Variable. The meter is Copilot Credits, billed to an Azure subscription for agents that access shared tenant data when the user has no Microsoft Copilot licence.
impact: Medium. Users without a Microsoft Copilot licence, SharePoint and Copilot administrators and the finance owner of the Azure subscription notice it; licensed users are not metered for interactive SharePoint agent use.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance guidance: Before rollout; Governance controls table / admin-path: The cited SharePoint page places agent blocking in the Agents section of the Copilot Control System. | Found: in the Microsoft 365 admin center, under the Agents section of the Copilot Control System ... with the ability to view details and block or unblock any agent | Fix: Add to controls[2].note: "Microsoft also documents the full route Microsoft 365 admin center > Agents > All agents > agent > Block or Unblock at https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions." This already-cited page supplies the current, fuller navigation. | Source: https://learn.microsoft.com/sharepoint/manage-access-agents-in-sharepoint
- [contradicted, minor] Governance guidance: Before rollout; After rollout / consistency: Every checklist control-management instruction has a matching controls-table row. | Found: Create a security group per business unit ... name an owner ... Confirm ... who holds the Owner or Contributor role ... remove users who no longer need metered access. The table covers billing-policy group selection, not group creation, ownership, membership or Azure role assignments. | Fix: Remove the checklist instruction to create a security group and name its owner. Narrow the Azure prerequisite check to 'Confirm the Azure subscription and resource group.' Narrow the after-rollout instruction to 'Compare credits per agent with the group that uses it.' These remove unmatched control-management steps without adding rows.
-->
