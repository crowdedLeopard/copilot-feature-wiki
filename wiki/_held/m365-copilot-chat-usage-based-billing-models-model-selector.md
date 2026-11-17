---
title: "Microsoft 365 Copilot Chat: usage-based billing models in the model selector"
slug: "m365-copilot-chat-usage-based-billing-models-model-selector"
roadmapId: 571400
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Licensed users will be able to pick Copilot Credit-billed models in the Copilot Chat model selector. Admins must enable usage-based billing, provide credits and set spending limits; in-product credit requests are planned for later."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: "November CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Needs a Microsoft 365 Copilot user subscription licence (USL) plus usage-based billing enabled and credits provided. Credits come from pay-as-you-go, a Copilot Credit Pre-purchase Plan (P3) or prepaid capacity packs; spending policies set limits. Per-model credit rates not yet published."
audiences: ["m365-admin","finops","service-owner","end-user","change-adoption"]
tags: ["m365-copilot","copilot-chat","model-selector","usage-based-billing","copilot-credits","spending-policies","credit-requests","frontier-models"]
sources:
  - title: "Microsoft 365 Roadmap 571400"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571400"
    kind: "roadmap"
  - title: "MC1519122"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1519122"
    kind: "message-center"
  - title: "Understanding the user subscription license (USL) and usage-based billing (UBB)"
    url: "https://learn.microsoft.com/copilot/plan/user-subscription-license-usage-based-billing"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Monitor Copilot Credit spending"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending"
    kind: "learn"
  - title: "Usage-based billing: What you see in the Microsoft 365 admin center vs. your Azure bill"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views"
    kind: "learn"
  - title: "Access requests to usage-based billing experiences"
    url: "https://learn.microsoft.com/copilot/implement/request-access-usage-based-billing-experiences"
    kind: "learn"
  - title: "Discovery setting for AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/discovery-setting-ai-experiences"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "List spendingPolicies"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-list"
    kind: "learn"
  - title: "Which users may use Anthropic (Claude) models (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    kind: "learn"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "Usage-based billing, spending policies, limits and alerts"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "GET /beta/copilot/costManagement/spendingPolicies"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-list"
    note: "The Graph call lists policies; it does not set limits or alerts. Beta APIs can change and are unsupported in production."
  - governs: "Who can request access to usage-based billing experiences"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > All Settings > Access to usage-based billing experiences"
      docs: "https://learn.microsoft.com/copilot/implement/request-access-usage-based-billing-experiences"
    api: null
    note: "Needs the Global administrator role. Changes can take up to 24 hours to apply. It does not complete usage-based billing setup by itself."
  - governs: "Which users may use Anthropic (Claude) models"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Anthropic > Choose which users"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    api: null
    note: "Needs the AI Administrator or Global Administrator role. Applies to Anthropic models, not to GPT-6 Astra."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-17"
roadmapModified: "2026-11-04T23:59:50"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-17"
    note: "Corrected after verification: separated access from planned credit requests, added the USL requirement, replaced allocation wording with spending limits, qualified model data terms, named the announced models, fixed control paths and the Graph call, and dropped the pay-as-you-go row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 87 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 87
  confirmed: 83
  unconfirmed: 0
  contradicted: 4
  attempts: 3
  hash: "ba81034fcb43380ccd4f3ab09581eafe"
---

## What's changing

Copilot Chat's model selector will offer models that bill in **Copilot Credits** under usage-based billing (UBB). Microsoft describes UBB as covering advanced AI and frontier models, extending beyond the everyday AI included in the Microsoft 365 Copilot user subscription licence (USL). The roadmap item says tenant admins will need to provide credits so that users can interact with these models. Notice MC1519122 names **GPT-6 Astra** and **Claude Fable 5.1** as generally available UBB models with this rollout, says the previously communicated eligibility requirements for these models apply, and says users will not have access to UBB models unless UBB is enabled. The notice also covers Copilot in Word, Excel and PowerPoint, and says users will be able to set the reasoning effort level when using a UBB model in Chat.

The roadmap item says users who consume their credits will be able to request more from their tenant admins. MC1519122 says Microsoft plans to roll out that ability after the initial rollout and gives no date. Microsoft Learn already documents a **Credit requests** page for administrators (Microsoft 365 admin center > Copilot > Cost Management > Overview > View requests); whether requests made from the model selector reach it is not stated.

The admin side already exists: **Copilot** > **Cost Management** in the Microsoft 365 admin center provides identity-based spending policies. Microsoft's documentation describes spending policies as limit-based controls that define access and spending limits; they don't reserve or allocate Copilot Credits to users or groups. Credits are billed through the billing method you choose: pay-as-you-go to an Azure subscription, a Copilot Credit Pre-purchase Plan (P3) or existing prepaid capacity packs. Microsoft says admins must set up a billing policy before a user can use AI experiences that require UBB.

The roadmap record lists the item as In development, with preview targeted for November CY2026 and General Availability targeted for December CY2026, for Worldwide (Standard Multi-Tenant), on desktop and web. MC1519122, updated 4 November 2026, gives the rollout windows: Frontier (Public) beginning early November 2026 and expected to complete by mid-November 2026; General Availability (Worldwide) beginning in early December 2026 (previously early November) and expected to complete by mid-December 2026.

## Why it matters

Microsoft describes the USL as the fixed-price foundation for everyday AI and UBB as the way to pay for advanced AI and frontier models. This change adds usage-based frontier models alongside the existing subscription-covered model choices, which introduces a per-interaction cost that varies with usage. Microsoft says admins must set up a billing policy before a user can use AI experiences that require UBB, and MC1519122 says users will not have access to UBB models unless UBB is enabled. Once it is enabled for a group, the cost signal is largely in the hands of users choosing from a dropdown.

Service owners should treat this as a budget feature first: decide who gets UBB and credits, what limits to set, and how users ask for more, before the preview reaches your tenant. It is also a communication task: users without UBB enabled and credits cannot use these models, and how Chat presents the models to them is not established.

## Risk assessment

**Data exposure**
- Terms differ by model. Claude models in Microsoft Copilot are currently excluded from the EU Data Boundary and, when applicable, in-country processing commitments. Where Anthropic acts as a Microsoft subprocessor, Microsoft's Product Terms and Data Protection Addendum apply; models labelled 'Anthropic models with Data Retention' are off by default, need a separate tenant opt-in and fall under Anthropic's own terms. Some Fable-class models may have different terms, so do not assume Claude Fable 5.1 and other Fable-class models share them. Assess the processing terms of each selectable model before enablement, and confirm GPT-6 Astra's terms with your account team, as the Anthropic subprocessor page covers Claude models.

**Security & identity**
- Spending policies are identity-based: they scope by users or groups, and a user who moves between Microsoft Entra ID groups takes on the new group's policy while keeping their consumption history. Groups used in spending policies become cost-bearing and need membership governance.

**Autonomy & actions**
- Not applicable.

**Change & support**
- In-product credit requests are planned for after the initial rollout (MC1519122), so users who hit a limit need an interim route. Microsoft Learn describes requests that do not match a custom request policy as continuing through the Microsoft credit request service, where they can be resolved in the Microsoft 365 admin center.
- Users without UBB enabled and credits cannot use these models, and how the selector presents them is not established. Expect help desk contacts during preview.
- Dashboard totals are point-in-time and expressed in credits, not currency; finance needs a translation to spend.

## Cost and licensing

- **Licence.** Users need a Microsoft 365 Copilot USL: MC1519122 lists users with a USL and UBB enabled as affected, and the Learn page on the USL and UBB says UBB experiences consume Copilot Credits and require a USL for access. Enabled UBB and credits are additional requirements, not an alternative to the USL.
- **Variable.** Each interaction with a UBB model consumes Copilot Credits. Microsoft Learn documents no per-model credit rate for GPT-6 Astra or Claude Fable 5.1 at the time of writing (November 2026).
- Credits are paid through **pay-as-you-go** (Azure subscription), a **Copilot Credit Pre-purchase Plan (P3)** (discounted commit units over a one-year term, with usage beyond them billed as pay-as-you-go if that is enabled) or **prepaid capacity packs**.
- Policy-level and per-user monthly limits cap exposure; alerts warn at the thresholds you set. When users hit the limit they lose access to agents and services for the rest of the month.
- Indirect: FinOps time to design limits, handle requests and reconcile the admin center view with Azure Cost Management.

## Scope

- Users with a Microsoft 365 Copilot USL and UBB enabled (MC1519122), in tenants where an admin has enabled UBB and provided credits. Enabled UBB and credits are additional to the USL, not a replacement. The roadmap lists Chat on desktop and web.
- Worldwide (standard multi-tenant). Government cloud dates not published.
- Roles: Global administrator and Billing administrator add, select and change billing methods. AI administrator and License administrator can edit spending policies and manage limits and alerts, but can't create spending policies. Reader roles view consumption.

## Governance guidance

### Before rollout
- Decide who gets access first: a pilot group with a modest per-user limit, or UBB enabled for nobody until value is demonstrated (users cannot use UBB models unless UBB is enabled).
- Verify that pilot users hold a Microsoft 365 Copilot USL.
- Choose the billing method and set up the Azure subscription or P3 plan in Cost Management.
- Agree an interim process for users to ask for more credits, because in-product requests are planned after the initial rollout.

### At rollout
- Create an identity-based spending policy for the pilot group with per-user limits and alerts; enable the policy to apply automatically to future supported services only if you want that default.
- Tell pilot users which models are metered, what a credit is, and how to request more.

### After rollout
- Review the Consumption tab weekly during preview; identify high-intensity users and whether the model choice correlates with output quality.
- Set a decision date for widening or withdrawing the allocation.
- Watch Message center for published credit rates per model, the date in-product credit requests arrive and government cloud availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Usage-based billing, spending policies, limits and alerts</strong><br><small>Tenant</small><br><small class="controls__note">The Graph call lists policies; it does not set limits or alerts. Beta APIs can change and are unsupported in production.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /beta/copilot/costManagement/spendingPolicies</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can request access to usage-based billing experiences</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Global administrator role. Changes can take up to 24 hours to apply. It does not complete usage-based billing setup by itself.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › All Settings › Access to usage-based billing experiences <a href="https://learn.microsoft.com/copilot/implement/request-access-usage-based-billing-experiences" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users may use Anthropic (Claude) models</strong><br><small>User</small><br><small class="controls__note">Needs the AI Administrator or Global Administrator role. Applies to Anthropic models, not to GPT-6 Astra.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Anthropic › Choose which users <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Spending policies set access and limits; they don't allocate credits, which come from the billing method. Microsoft documents a separate discovery setting, **AI experiences enabled by usage-based billing**, as deprecated: it controlled visibility, while Cost Management controls access and spending. The access-request setting in the second row controls who can request a spending policy and does not complete UBB setup by itself, so choosing **No users** is not a way to hide or block the models.

The Graph call in the first row lists spending policies only; it does not configure limits or alerts. The `/beta` APIs are subject to change and are unsupported in production. The Anthropic opt-in applies to Claude models and is also covered in [Copilot and Anthropic apps](https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps#manage-the-setting-in-the-microsoft-365-admin-center).

Administrators work through credit requests under Microsoft 365 admin center > Copilot > Cost Management > Overview > View requests, which opens the Credit requests page, described in [Monitor Copilot Credit spending](https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending#viewing-and-managing-credit-requests). MC1519122 says in-product requests are planned for after the initial rollout.

Azure Cost Management shows pay-as-you-go charges and P3 purchase or amortized cost for the linked Azure subscription. It doesn't show consumption against prepaid capacity packs, which is monitored in the Microsoft 365 or Power Platform admin center.

## Open questions

- What credit rate applies to GPT-6 Astra and Claude Fable 5.1? Watch Message center and the Learn pages on usage-based billing.
- When will in-product credit requests arrive, and will they appear on the Credit requests page? MC1519122 gives no date.
- Can administrators hide the metered options from the selector for users without UBB and credits, rather than showing them disabled?
- Whether per-model limits (as opposed to per-user) will be supported.

<!-- rationale
risk: Medium. This adds a user-driven spend path, and the terms differ by model: Claude models are excluded from the EU Data Boundary and some are covered by Anthropic's own terms. Exposure depends on who has usage-based billing enabled.
cost: Variable. The meter is Copilot Credits, consumed per interaction under usage-based billing on top of the Microsoft 365 Copilot user subscription licence. Per-model credit rates are not yet published.
impact: Medium. Licensed users with usage-based billing enabled and credits gain extra model choices. Microsoft says users have no access to these models unless it is enabled; how the selector appears to other users is not established.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary: must set spending limits / cost: Administrators must set spending limits to enable the models. | Found: Don't limit monthly spending - Allows the policy to use credits against the organization's billing method without restrictions. | Fix: Replace the summary's second sentence with: 'Admins must enable usage-based billing and provide credits; they can configure spending limits, and in-product credit requests are planned for later.' The documented setup permits unlimited monthly spending and makes per-user limits optional. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup
- [contradicted, blocker] controls[2].ui; Governance controls: third row / admin-path: The cited Anthropic path ends AI providers operating as Microsoft subprocessors > Anthropic > Choose which users. | Found: under Available subprocessors for your organization, select Anthropic, and Save. / Under Choose who can access Anthropic models for Copilot and generative AI experiences, select your users or groups and Save. | Fix: Replace controls[2].ui.path and the rendered path with 'Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences'. The cited page includes the Available subprocessors section and uses the full final label above, not 'Choose which users'. | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models
- [contradicted, blocker] What's changing: Credit requests path; Governance controls: credit-request path / admin-path: The full Credit requests path is Copilot > Cost Management > Overview > View requests. | Found: From the Top Actions section, you can View requests and Manage spending policies | Fix: Replace both credit-request paths with 'Microsoft 365 admin center > Copilot > Cost Management > Overview > Top Actions > View requests'. The documentation places View requests in the Top Actions section, which the current paths omit. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: access after hitting a limit / behaviour: Users hitting the limit lose access to agents and services for the rest of the month. | Found: When users hit the limit, they lose access to agents and services for the rest of the month until credits reset on the first of the month. | Fix: Keep the cited rule but append: 'The monitoring documentation separately says a running task can complete without interruption after exceeding a per-user limit in a group spending policy.' Cite https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending#consumption-tab, which states: 'If a running task exceeds the per-user limit, it can complete without interruption.' | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
- [supported, minor] Scope: AI administrator and License administrator / role: AI administrator and License administrator can edit policies and manage limits and alerts. | Found: AI administrator and License administrator roles can edit spending policies, manage limits and alerts, and billing methods. | Fix: Append to the role sentence: 'The same Learn page also includes License Administrator among the roles it describes as read-only, so its guidance on that role is inconsistent.' The later paragraph names 'AI Reader, Global Reader, License Administrator' and says these roles do not allow changes to policies, limits or alerts. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup
- [contradicted, minor] Governance guidance: After rollout versus Governance controls / consistency: The checklist tells administrators to review consumption, but no controls row covers consumption monitoring. | Found: Review the Consumption tab weekly during preview / Rows cover spending policies, access requests and Anthropic eligibility, not consumption monitoring. | Fix: The checklist step 'Review the Consumption tab weekly during preview' has no corresponding consumption-monitoring row. Remove this checklist bullet to align it with the existing table without adding rows.
-->
