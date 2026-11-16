---
title: "Microsoft 365 Copilot Chat: usage-based billing models in the model selector"
slug: "m365-copilot-chat-usage-based-billing-models-model-selector"
roadmapId: 571400
topic: "m365-copilot"
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
  - title: "Usage-based billing, spending policies, limits and alerts (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
  - title: "Which users may use Anthropic (Claude) models (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    kind: "learn"
  - title: "Pay-as-you-go billing policy for Copilot services (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/copilot-capacity-packs#step-2-set-up-your-billing-configuration"
    kind: "learn"
videos: []
related: ["copilot-studio-cost-management-m365-admin-center","m365-admin-center-agent-level-pay-as-you-go-controls","m365-admin-center-copilot-credits-usage-report","copilot-credits"]
controls:
  - governs: "Usage-based billing, spending policies, limits and alerts"
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
  - governs: "Which users may use Anthropic (Claude) models"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Anthropic > Choose which users"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    api: null
  - governs: "Pay-as-you-go billing policy for Copilot services"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Billing & usage > Pay-as-you-go services"
      docs: "https://learn.microsoft.com/copilot/implement/copilot-capacity-packs#step-2-set-up-your-billing-configuration"
    api: null
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-11-04T23:59:50"
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
  claims: 58
  confirmed: 43
  unconfirmed: 4
  contradicted: 11
  attempts: 1
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

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Usage-based billing, spending policies, limits and alerts</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>/beta/copilot/costManagement (Cost Management API)</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can see the usage-based billing experiences</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › All Settings › Access to usage-based billing experiences <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users may use Anthropic (Claude) models</strong><br><small>User</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Anthropic › Choose which users <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go billing policy for Copilot services</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Billing &amp; usage › Pay-as-you-go services <a href="https://learn.microsoft.com/copilot/implement/copilot-capacity-packs#step-2-set-up-your-billing-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The model selector itself has no switch: which models appear follows the subprocessor opt-in and the billing configuration. Credit requests from users are approved under Copilot > Cost Management > Credit requests, described in [Manage Copilot Credits](https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits). The Anthropic opt-in is portal-only and is also covered in [Copilot and Anthropic apps](https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps#manage-the-setting-in-the-microsoft-365-admin-center). Billed amounts appear in Azure Cost Management.

## Open questions

- Which models will be metered and at what credit rate.
- Whether administrators can hide the metered options from the selector for users without a policy, rather than showing them disabled.
- Whether per-model limits (as opposed to per-user) will be supported.

<!-- rationale
risk: Medium. No new data boundary, but a new user-driven spend path and a request queue; exposure depends on policy design.
cost: Variable. Copilot Credits per interaction; rates unpublished.
impact: High. Visible to every Copilot Chat user through the model selector once rolled out.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] summary; What's changing; Governance guidance / record: Users can request additional credits within the experience when the model-selector feature initially rolls out. | Found: After the initial rollout, we plan to roll out the ability for users to request additional credits from their tenant admin. | Fix: Separate model access from credit requests: MC1519122 says in-product requests are planned after the initial rollout, without a date. Tell users the organisation's interim request process. Cite MC1519122 and report its Frontier window, early to mid-November 2026, and Worldwide GA window, early to mid-December 2026.
- [supported, minor] What's changing / licensing: Frontier-model usage is charged in Copilot Credits beyond the everyday AI covered by the per-user subscription. | Found: UBB is used for advanced AI and frontier models, extending beyond the everyday AI included in the USL. | Fix: Add https://learn.microsoft.com/copilot/plan/user-subscription-license-usage-based-billing to sources for the USL/UBB distinction and fixed-price licensing discussion. | Source: https://learn.microsoft.com/copilot/plan/user-subscription-license-usage-based-billing
- [contradicted, blocker] Scope; front matter: licensing.notes / licensing: Copilot Chat users need only enabled UBB and a covering spending policy to be in scope. | Found: Users with a Microsoft 365 Copilot user subscription license (USL) with UBB enabled | Fix: Add the Microsoft 365 Copilot user subscription licence prerequisite to Scope and licensing.notes. State that UBB and allocated credits are additional requirements, not a replacement for the USL; cite MC1519122 and https://learn.microsoft.com/copilot/plan/user-subscription-license-usage-based-billing.
- [contradicted, blocker] What's changing; Why it matters; Governance guidance: Before rollout / behaviour: Without a spending policy users cannot see the models, so creating no policy hides them. | Found: In short, this setting controls visibility, while Cost Management under the Copilot node in the Microsoft 365 admin center controls access and spending. | Fix: Replace the visibility guarantee with 'Without enabled UBB and allocated credits, users cannot use these models.' Explain that discovery and access requests are separate controls and that the cited discovery setting is deprecated. Keep the Chat-specific hidden-versus-disabled appearance as an open question. | Source: https://learn.microsoft.com/copilot/implement/discovery-setting-ai-experiences
- [contradicted, blocker] summary; What's changing; front matter: licensing.notes / behaviour: Spending policies allocate or reserve a user's credits. | Found: Spending policies are limit-based controls and don't reserve or allocate Copilot Credits to users or groups. | Fix: Preserve the roadmap's requirement that admins allocate credits, but describe spending policies precisely as access and spending-limit controls, not reserved credit allocations. Replace 'allocate credits through spending policies' with 'enable UBB, provide credits and configure access and limits through spending policies'. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
- [unsupported, blocker] Risk assessment: Change & support / role: Without custom routing policies credit requests land on a default administrator audience. | Found: Searched: Copilot credit requests request routing policies default administrators Credit requests tab; Copilot credit requests default administrators. Opened billing overview, setup, manage credits and monitor spending; none identifies the claimed default recipient audience. | Fix: Replace with the documented narrower statement: 'Requests that do not match a custom request policy continue through the Microsoft credit request service and can be resolved in the Microsoft 365 admin center.' Cite https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending.
- [contradicted, blocker] Why it matters / behaviour: Until this change the model behind Microsoft 365 Copilot was Microsoft's choice rather than the user's. | Found: The model selector in Copilot Chat now includes GPT-5.2. Users can pick Quick Response for immediate answers or Think Deeper for more thorough reasoning. | Fix: Remove the historical assertion that users previously had no model choice. Say 'This change adds usage-based frontier models alongside existing subscription-covered model choices.' | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes#january-27,-2026
- [contradicted, blocker] Risk assessment: Data exposure; rationale: risk / applicability: Model choice does not change the Microsoft 365 data boundary and all prompts and Graph data remain under the same Copilot commitments. | Found: Claude models deployed in Microsoft offerings such as Microsoft Copilot, Researcher, Copilot Studio, Power Platform, and Copilot in Microsoft 365 apps are currently excluded from the EU Data Boundary | Fix: Remove the blanket boundary assurance from the bullet and risk rationale. State that processing boundaries and contractual terms depend on the selected model and tenant eligibility; Claude models are excluded from EU Data Boundary and applicable in-country processing commitments, and separately enabled Data Retention models use different terms. | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor
- [unsupported, blocker] controls[0].api; Governance controls: first row / command: /beta/copilot/costManagement (Cost Management API) is a documented actionable Graph call for spending policies, limits and alerts. | Found: Searched: Copilot pay as you go billing policies Microsoft Graph API PowerShell create billing policy; Copilot billing policy Graph API. Opened Cost Management API overview: it documents /copilot/costManagement as the root, but lists specific child operations, not this methodless call. | Fix: Replace the namespace description with an actual operation, for example 'GET /beta/copilot/costManagement/spendingPolicies', and narrow its description to listing policies. Link the list-spendingPolicies reference from the overview. Add that these beta APIs are subject to change and unsupported in production; do not imply that GET configures limits or alerts.
- [contradicted, blocker] controls[1].ui; Governance controls: second row / admin-path: The cited setup page documents Copilot > Settings > All Settings > Access to usage-based billing experiences. | Found: Go to Copilot > Settings > All Settings. Select Access to usage-based billing experiences. | Fix: The path exists, but not on the cited setup page. Change controls[1].ui.docs, its table link and its source to https://learn.microsoft.com/copilot/implement/request-access-usage-based-billing-experiences. | Source: https://learn.microsoft.com/copilot/implement/request-access-usage-based-billing-experiences
- [contradicted, blocker] controls[1].governs; Governance controls: second row / applicability: Access to usage-based billing experiences controls who can see UBB experiences. | Found: Your selection controls who can request access. It does not complete the usage-based billing setup by itself. | Fix: Rename this control 'Who can request a spending policy for usage-based billing experiences'. State that it governs requests from users without a policy, not model visibility or UBB enablement. | Source: https://learn.microsoft.com/copilot/implement/request-access-usage-based-billing-experiences
- [supported, minor] controls[3].ui; Governance controls: fourth row / admin-path: The capacity-packs page gives Copilot > Billing & usage > Pay-as-you-go services for Copilot billing configuration. | Found: In the Microsoft 365 admin center, go to Copilot > Billing & usage. Select the Pay-as-you-go services tab | Fix: Retain the cited legacy path but note the newer commerce documentation also gives Copilot > Cost management > Classic Billing & usage > Pay-as-you-go. Cite https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-copilot and identify this as the classic billing experience. | Source: https://learn.microsoft.com/copilot/implement/copilot-capacity-packs#step-2-set-up-your-billing-configuration
- [unsupported, blocker] controls[3]; Governance controls: fourth row / applicability: The classic Copilot Chat pay-as-you-go billing-policy connection governs this new UBB model-selector feature. | Found: Searched: Copilot Chat usage based billing model selector GPT-6 Astra Claude Fable 5.1 Copilot Credits rates USL; Copilot Chat model selector hide billing. Opened capacity-packs, USL/UBB and billing overview; none links classic agent billing-policy connections to these models. | Fix: Remove the classic billing row from this feature's direct controls, or add a note: 'General Copilot Chat agent-billing control; Microsoft has not confirmed that this classic billing-policy connection governs UBB model-selector access.' Keep UBB enablement and credit requirements anchored to MC1519122.
- [contradicted, blocker] Governance controls: Credit requests path / admin-path: The linked Manage Copilot Credits page documents approval under Copilot > Cost Management > Credit requests. | Found: From the Top Actions section, you can View requests | Fix: Replace with Copilot > Cost Management > Overview > Top Actions > View requests, which opens Credit requests. Link https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending#viewing-and-managing-credit-requests instead of the manage-credits page, which does not supply this path. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending
- [supported, minor] Governance controls: The model selector itself has no switch / absence: No separate Chat UBB model-selector switch is documented. | Found: Searched: Copilot Chat UBB model selector admin hide models per model limits data boundary model choice history; Copilot Chat model selector hide billing. Opened UBB setup, manage credits, discovery and access-request pages; no separate Chat selector switch found. | Fix: Replace the absolute 'The model selector itself has no switch' with 'Microsoft has not documented a separate Chat UBB model-selector switch at the time of writing (November 2026).' Do not extend Cowork-only model templates to Chat.
- [contradicted, blocker] Open questions: Which models will be metered / record: Which models will be metered in this rollout remains unknown. | Found: GPT-6 Astra and Claude Fable 5.1 will be generally available as UBB models with this rollout. Previously communicated eligibility requirements for these models apply. | Fix: Name GPT-6 Astra and Claude Fable 5.1 as the models announced in MC1519122, preserving the eligibility qualification. Keep only the unpublished credit rates as the open question and cite the notice.
- [contradicted, minor] Governance guidance; Governance controls / consistency: The controls table covers every control the guidance asks administrators to use and every material control gap stated in prose. | Found: Design credit request routing so requests reach a team that can judge them. / Review the Consumption tab weekly during preview / The model selector itself has no switch | Fix: Add rows for credit-request review/routing and consumption monitoring, and a both-null row for the undocumented selector-specific switch. For review/routing and monitoring use https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending; distinguish request review from routing automation.
- [unsupported, minor] rationale: impact / availability: The new model-selector capability is visible to every Copilot Chat user once rolled out. | Found: Searched: Copilot Chat model selector hide billing; Copilot Chat UBB model selector admin hide models per model limits. Read MC1519122 and discovery/access-request documentation: they describe eligibility and general discovery, not visibility to every Chat user. | Fix: Remove 'every Copilot Chat user'. Describe access as limited to eligible Microsoft 365 Copilot USL users with UBB enabled and allocated credits, and do not assert universal model visibility without Chat-specific discovery documentation. Reassess the impact rationale on that qualified scope.
-->
