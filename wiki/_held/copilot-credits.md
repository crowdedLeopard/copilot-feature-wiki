---
title: "Copilot Credits"
slug: "copilot-credits"
summary: "The common meter for usage-based Microsoft AI consumption: what consumes credits, the three ways to pay for them, where limits and reports live, and how the Microsoft 365 and Power Platform admin centers divide the job."
updated: "2026-11-13"
tags: ["copilot-credits","usage-based-billing","pay-as-you-go","p3","capacity-packs","cost-management","finops"]
covers: ["usage-based-billing","pay-as-you-go","p3","capacity-packs"]
sources:
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Usage-based billing: what you see in the Microsoft 365 admin center vs. your Azure bill"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views"
    kind: "learn"
  - title: "Overview of usage-based billing for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Microsoft Copilot Credits report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    kind: "learn"
related: ["copilot-studio-cost-management-m365-admin-center","m365-admin-center-agent-level-pay-as-you-go-controls","m365-copilot-chat-usage-based-billing-models-model-selector","m365-admin-center-copilot-credits-usage-report","copilot-studio-share-autonomous-agents-run-only"]
kind: "concept"
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 51
  unconfirmed: 2
  contradicted: 4
  attempts: 1
changes:
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
---

## What a credit is

A Copilot Credit is the unit Microsoft uses to meter AI work that is not covered by a flat per-user licence. The same currency is used by Copilot Chat agents for unlicensed users, Copilot Studio agents and workflows, Copilot Cowork, Work IQ APIs, metered models in the Copilot Chat model selector and Microsoft Contact Center Intelligence conversations. The number of credits a task consumes depends on the models used, how much context was retrieved, how long the harness ran and which tools were called. Microsoft's licensing guide (aka.ms/CopilotCredits/LicensingGuide) is the authority for rates.

Two facts surprise most service owners. First, on the Microsoft Copilot harness, **building consumes credits**: previewing, testing and generating evaluations bill before anything is published. Second, a **Microsoft 365 Copilot licence covers most agent use by that user**, so credits are mainly spent by unlicensed users and by autonomous or background work.

## Three ways to pay

| Route | Bought where | Behaviour |
| --- | --- | --- |
| Pay-as-you-go | Linked Azure subscription | Usage billed monthly in arrears; no commitment. Also the overflow for the other two. |
| Copilot Credit Pre-purchase Plan (P3) | Azure portal or Microsoft 365 admin center | One-year commitment of credits at a discount; larger commitments, larger discounts; overage continues on pay-as-you-go. Appears as a reservation benefit in Azure Cost Management. |
| Prepaid capacity packs | Microsoft 365 Marketplace as licences | Allocated to environments in the Power Platform admin center; consumption not visible in Azure Cost Management. |

If more than one source exists, prepaid capacity is generally drawn down before pay-as-you-go applies; the exact order depends on which methods are enabled and on remaining balances.

## Where the controls live

- **Microsoft 365 admin center > Copilot > Cost Management**: identity-based spending policies (who can consume), resource-based policies (limits per environment or agent), billing method per policy, policy and per-user limits, alerts, credit request handling and routing, and consumption by policy, user, group, agent, service and funding source. Reader roles (AI Reader, Global Reader, License Administrator) can see consumption without changing anything.
- **Power Platform admin center > Licensing / Billing plan / Copilot hub**: capacity pack allocation to environments, Copilot Studio usage and message consumption, downloadable usage reports by environment, agent and user.
- **Azure portal > Cost Management**: the invoice view. Copilot Studio, Cowork and Work IQ appear under one "Microsoft Copilot Studio" service. Up to 24 hours behind.
- **Microsoft 365 admin center > Reports > Usage > Microsoft Copilot > Credits**: the Copilot Credits report for metered Copilot Chat agent use, 30 days of history during preview.

## Operating model

1. Pick a billing method and an owner for it. A Global or Billing Administrator must link the Azure subscription or P3 plan.
2. Decide which populations may spend (identity-based policies) and which resources have ceilings (resource-based policies). Uncovered scopes simply cannot spend.
3. Set alerts at policy and user level; decide who answers credit requests.
4. Reconcile the Cost Management consumption view with Azure Cost Management monthly, in credits and in currency.
5. Share per-agent consumption with makers, because agent design (grounding, tools, model) drives the rate.

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] What a credit is / cost: Metered models in the Copilot Chat model selector consume Copilot Credits. | Found: Searched: Copilot Chat metered models; Copilot model selector usage-based billing. Opened all five cited pages, Copilot overview search excerpts, and user-subscription-license-usage-based-billing. Found frontier-model billing, not this specific Copilot Chat selector behaviour. | Fix: Replace the selector-specific statement with 'advanced AI and frontier-model experiences can consume Copilot Credits and require a user subscription licence', citing https://learn.microsoft.com/copilot/plan/user-subscription-license-usage-based-billing. Do not imply all model selection is metered.
- [contradicted, blocker] What a credit is, second paragraph / licensing: A Microsoft 365 Copilot licence covers most agent use by that user, without stating the conditions for that inclusion. | Found: For agent flows, the "No charge" inclusion applies only to runs triggered via the "When an agent calls the flow" trigger, where the user interacting with the agent is authenticated with a Microsoft 365 Copilot license. | Fix: State that employee-facing standard-harness Copilot Studio usage is included when the agent operates using the authenticated licensed user's identity, subject to fair-use limits. For agent flows, inclusion requires the 'When an agent calls the flow' trigger; other triggers consume credits. Computer-Using Agents are excluded. Do not extend this inclusion to the separately billed Microsoft Copilot harness or Cowork. Cite https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management
- [unsupported, major] What a credit is, second paragraph / behaviour: Credits are mainly spent by unlicensed users and autonomous or background work. | Found: Searched: Copilot Credits autonomous Microsoft 365 Copilot license. Read requirements-messages-management, usage-based-billing-overview-copilot-credits, and user-subscription-license-usage-based-billing; none establishes this distribution of credit spending. | Fix: Replace the claim about where credits are mainly spent with specific documented examples: metered Copilot Chat agents used by users without a Copilot licence, autonomous agent-flow triggers, and advanced experiences such as Cowork can consume credits. Avoid asserting a predominant spending population.
- [supported, minor] Three ways to pay, Pay-as-you-go row / cost: Pay-as-you-go bills actual usage monthly in arrears. | Found: By using the pay-as-you-go meter, at the end of each month, your organization pays only for the actual number of Copilot Credits its agents use during the month. | Fix: Add the additional Microsoft sources used to substantiate the page's facts: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-manage-buy-credits ; https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management ; https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity ; https://learn.microsoft.com/power-platform/admin/pay-as-you-go-usage-costs ; https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub ; https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs . If the replacement frontier-model statement is retained, also cite https://learn.microsoft.com/copilot/plan/user-subscription-license-usage-based-billing . These uncited-source findings are consolidated here. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-manage-buy-credits
- [contradicted, blocker] Where the controls live, Power Platform admin center bullet / admin-path: The Power Platform navigation locations are labelled Licensing / Billing plan / Copilot hub. | Found: Tenant admins and environment admins can access these resources in one place by selecting Copilot in the navigation pane. | Fix: Replace the slash-separated locator with distinct documented destinations: 'Licensing > Copilot Studio > Summary' for capacity and downloadable reports; the 'Billing plan' page for billing-plan reports; and 'Copilot > Copilot Studio' for agent usage and message consumption. The navigation label is Copilot, not Copilot hub. Cite the capacity, billing-report and Copilot-area pages. | Source: https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub
- [supported, minor] Where the controls live, Power Platform admin center bullet / behaviour: Power Platform consumption reports can be downloaded by environment, agent and user. | Found: The reports show consumption by environment and agent. For agents powered by the standard harness, the user report also shows consumption by user. | Fix: Retain the downloadable environment, agent and user report types, but clarify that the documented per-user consumption breakdown is for agents powered by the standard harness. | Source: https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity
- [contradicted, blocker] Operating model, item 2 / applicability: Scopes not covered by identity-based or resource-based Microsoft 365 spending policies simply cannot spend. | Found: Environments that aren't linked to a Microsoft 365 admin center resource-based spending policy continue under their applicable Power Platform configuration during the opt-in period. | Fix: Replace 'Uncovered scopes simply cannot spend' with 'Copilot Studio environments without a Microsoft 365 resource-based spending policy continue under their applicable Power Platform configuration. When a Microsoft 365 resource-based policy covers an environment, its Power Platform capacity allocation and linked billing plan no longer apply.' Cite https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs and distinguish this opt-in mechanism from access requirements for Microsoft 365 usage-based experiences. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs
- [contradicted, minor] Operating model; missing controls table / consistency: The operating checklist directs administrators to configure and review controls that have no corresponding structured controls rows. | Found: Decide which populations may spend (identity-based policies) and which resources have ceilings (resource-based policies).
Set alerts at policy and user level; decide who answers credit requests.
The page has no controls table. | Fix: Add structured controls rows for billing-method selection, identity-based spending policies, resource-based spending policies, policy and user alerts, credit-request routing, and consumption reporting. Use the documented paths and scope qualifications; research each API side before setting it to null. The legacy headings themselves do not require a finding.
-->
