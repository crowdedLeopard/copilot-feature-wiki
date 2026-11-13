---
title: "Copilot Credits"
slug: "copilot-credits"
summary: "The common meter for usage-based Microsoft AI consumption: what consumes credits, the three ways to pay for them, where limits and reports live, and how the Microsoft 365 and Power Platform admin centers divide the job."
updated: "2026-11-13"
tags: ["copilot-credits","usage-based-billing","pay-as-you-go","p3","capacity-packs","cost-management","finops"]
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
