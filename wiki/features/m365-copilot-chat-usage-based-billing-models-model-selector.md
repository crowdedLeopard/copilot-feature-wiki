---
title: "Microsoft 365 Copilot Chat: usage-based billing models in the model selector"
slug: "m365-copilot-chat-usage-based-billing-models-model-selector"
roadmapId: 571400
desk: "copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Users will be able to pick models that bill in Copilot Credits from the model selector in Copilot Chat. Admins must allocate credits through spending policies first, and users can request more when they run out."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: "November CY2026"
risk: "medium"
cost: "variable"
impact: "high"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Copilot Credits via pay-as-you-go, Copilot Credit Pre-purchase Plan (P3) or prepaid capacity packs, governed by identity-based spending policies in the Microsoft 365 admin center. Credit rates per model not yet published."
audiences: ["m365-admin","finops","service-owner","end-user","change-adoption"]
tags: ["m365-copilot","copilot-chat","model-selector","usage-based-billing","copilot-credits","spending-policies","credit-requests","frontier-models"]
sources:
  - title: "Microsoft 365 Roadmap 571400"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571400"
    kind: "roadmap"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Usage-based billing: what you see in the Microsoft 365 admin center vs. your Azure bill"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views"
    kind: "learn"
videos: []
related: ["copilot-studio-cost-management-m365-admin-center","m365-admin-center-agent-level-pay-as-you-go-controls","m365-admin-center-copilot-credits-usage-report","copilot-credits"]
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-11-04T23:59:50"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
---

## What's changing

Copilot Chat's model selector will offer models that are not covered by the per-user Copilot licence and instead bill in **Copilot Credits** under usage-based billing (UBB). Users can only see and use these models if a tenant administrator has allocated credits to them through a spending policy. When a user exhausts their allocation they can submit a **credit request** to their administrators from within the experience; administrators handle requests in the Cost Management dashboard and can route them with request-routing policies.

Public preview is listed for November 2026 and General Availability for December 2026. The roadmap does not name the models or their credit rates.

The admin side already exists: **Copilot** > **Cost Management** in the Microsoft 365 admin center provides identity-based spending policies (which users and groups can consume credits, with policy and per-user limits and alerts), a choice of billing method (pay-as-you-go to an Azure subscription, a Copilot Credit Pre-purchase Plan, or existing prepaid capacity packs) and consumption reporting by policy, user, group, agent and service. This feature adds a new consumer of those policies.

## Why it matters

Until now a Microsoft 365 Copilot licence was a fixed cost and the model behind it was Microsoft's choice. Metered models in the selector introduce a per-interaction cost that depends on which model a user picks and how heavily they use it. The experience is designed so nothing is spent without an admin-created policy, which is the right default, but once a policy exists the cost signal is largely in the hands of users choosing a dropdown.

Service owners should treat this as a budget feature first: decide who gets credits, how many, and what happens when they ask for more, before the preview reaches your tenant. It is also a communication task, because the model selector will show options that most users cannot use until a policy covers them.

## Risk assessment

**Data exposure**
- Model choice does not change the Microsoft 365 data boundary; prompts and Graph data remain under the Copilot commitments. Confirm in the updated Learn documentation whether any metered model has different data residency or processing terms.

**Security & identity**
- Spending policies are identity-based; group membership drives who can spend. Groups used for credit allocation become cost-bearing and need membership governance.

**Autonomy & actions**
- Not applicable.

**Change & support**
- Credit requests create a new queue for administrators. Without routing policies they land on the default admin audience.
- Users may interpret a greyed-out model as a fault. Expect help desk contacts during preview.
- Dashboard totals are point-in-time and expressed in credits, not currency; finance needs a translation to spend.

## Cost and licensing

- **Variable.** Each interaction with a UBB model consumes Copilot Credits at a rate Microsoft has not yet published for this feature.
- Credits are paid through **pay-as-you-go** (Azure subscription), a **Copilot Credit Pre-purchase Plan (P3)** (annual commitment, discounted, overage to pay-as-you-go) or **prepaid capacity packs**.
- Policy-level and user-level limits cap exposure; alerts warn before limits are hit.
- Indirect: FinOps time to design allocations, handle requests and reconcile the admin center view with Azure Cost Management.

## Scope

- Copilot Chat users (desktop and web) in tenants that have enabled usage-based billing and created spending policies covering them.
- Worldwide (standard multi-tenant). Government cloud dates not published.
- Roles: Global Administrator and Billing Administrator for billing methods; AI Administrator and License Administrator for policy limits and alerts; reader roles for consumption.

## Governance guidance

**Before rollout**
- Decide the allocation model: pilot group with a modest per-user limit, or no policy (which hides the models) until value is demonstrated.
- Choose the billing method and set up the Azure subscription or P3 plan in Cost Management.
- Design credit request routing so requests reach a team that can judge them.

**At rollout**
- Create an identity-based spending policy for the pilot group with per-user limits and alerts; enable the policy to apply automatically to future supported services only if you want that default.
- Tell pilot users which models are metered, what a credit is, and how to request more.

**After rollout**
- Review the Consumption tab weekly during preview; identify high-intensity users and whether the model choice correlates with output quality.
- Set a decision date for widening or withdrawing the allocation.
- Watch Message center for published credit rates per model and for government cloud availability.

## Admin controls

- Microsoft 365 admin center > **Copilot** > **Cost Management** > **Configuration**: enable usage-based billing, billing method, spending policies, limits, alerts, request routing.
- Microsoft 365 admin center > **Copilot** > **Cost Management** > **Overview** and **Consumption**: credit usage by policy, user, group, service.
- Microsoft 365 admin center > **Copilot** > **Cost Management** > **Credit requests**: approve or deny user requests for access or higher limits.
- Azure portal > **Cost Management**: billed amounts for pay-as-you-go and P3.

## Open questions

- Which models will be metered and at what credit rate.
- Whether administrators can hide the metered options from the selector for users without a policy, rather than showing them disabled.
- Whether per-model limits (as opposed to per-user) will be supported.

<!-- rationale
risk: Medium. No new data boundary, but a new user-driven spend path and a request queue; exposure depends on policy design.
cost: Variable. Copilot Credits per interaction; rates unpublished.
impact: High. Visible to every Copilot Chat user through the model selector once rolled out.
-->
