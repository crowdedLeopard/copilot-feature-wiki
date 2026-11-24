---
title: "Microsoft Purview Insider Risk Management: pay-as-you-go billing for Other AI apps indicators (GCC, GCC High and DoD)"
slug: "microsoft-purview-insider-risk-management-pay-as-you-go-model-for-other-generative-ai-apps"
roadmapId: 558288
topic: "governance"
products: ["Microsoft Purview"]
summary: "The Other AI apps indicator in Insider Risk Management moves to pay-as-you-go billing for GCC, GCC High and DoD, targeted March CY2027. Administrators who use it need an Azure subscription linked to Purview."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Microsoft Learn describes pay-as-you-go as a consumption model billed through an Azure subscription, and says it builds on per-user licensing. A rate for the Other AI apps indicator is not stated on the Learn pages read."
audiences: ["security","compliance","finops","m365-admin"]
tags: ["insider-risk-management","pay-as-you-go","purview","cost-management","licensing","gcc","gcc-high","dod"]
sources:
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Enable Microsoft Purview pay-as-you-go features for new customers"
    url: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    kind: "learn"
  - title: "Consent to use use pay-as-you-go capabilities"
    url: "https://learn.microsoft.com/purview/purview-payg-consent-based-enablement"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Use reports in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-reports"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 558288"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558288"
    kind: "roadmap"
videos: []
related: ["insider-risk-management","microsoft-purview-data-lifecycle-management-dlm-meter-change","microsoft-purview-insider-risk-management-priority-content-support-for-risky-ai-usage","microsoft-purview-insider-risk-management-insider-risk-management-for-agents"]
controls:
  - governs: "Whether the Other AI apps generative AI indicator is used in Insider Risk Management policies"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Settings > Policy indicators > Generative AI apps indicators"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    api: null
    note: "Choose apps to monitor is documented for Microsoft Copilot experiences and Enterprise AI apps only. Role: Insider Risk Management Admins or similar."
  - governs: "Linking an Azure subscription so pay-as-you-go billing can be enabled"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Account details"
      docs: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    api: null
    note: "For organisations that are not current Azure Purview customers on the classic data governance pricing model. Global Administrator only. Preview. Rocket icon and Get Started is another route."
  - governs: "Viewing pay-as-you-go usage by feature, including Insider Risk Management"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Usage center > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/purview-billing-usage"
    api: null
    note: "Global Reader, Security Reader or Global Admin. Usage center is in preview; Insider Risk Management is listed as not pausable."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-05-11T23:15:11"
changes:
  - date: "2026-11-24"
    note: "New briefing: Other AI apps indicators move to pay-as-you-go for GCC, GCC High and DoD, targeted March CY2027."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 62 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected: the subscription-linking steps now apply only to organisations that are not classic Azure Purview customers, the consent route is added for those that are, and unsupported wording on billing-only behaviour was narrowed."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 70 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 69
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "fab0f050884efaee17bc4a0203db21a7"
---

## What's changing

Microsoft plans to move the Insider Risk Management indicator "Entering risky prompt in Other AI apps" to pay-as-you-go pricing. The roadmap item says to continue using the Other AI apps indicators, an administrator should link an Azure subscription to Microsoft Purview so that billing can be enabled. It places the indicator under Policy indicators > Generative AI apps > Other AI apps.

This roadmap item covers GCC, GCC High and DoD, and is listed as In development with a target of March CY2027 (General Availability, Web). Microsoft lists the same feature under a second roadmap item, 557548, for Worldwide (Standard Multi-Tenant), which the record shows as Launched with a target of April CY2026. The two records differ in cloud, status and date.

The roadmap states that "Microsoft Copilot experiences indicators can still be used for free even without subscription". Microsoft Learn is narrower: it says there are no pay-as-you-go billing requirements or charges for Microsoft 365 Copilot data, but that the Microsoft Copilot experiences indicator for non-Microsoft 365 AI data needs pay-as-you-go billing. The same Learn page already says that the Other AI applications indicator, which covers AI applications users discover from their browser activity, needs pay-as-you-go billing. It does not say which clouds that applies to.

## Why it matters

This is a billing change that attaches usage-based spend to an Insider Risk Management indicator, and in these three clouds it is targeted for March CY2027. Microsoft has not stated what happens on arrival to a tenant that uses the indicator without a linked Azure subscription, so plan on the indicator needing one and settle who owns that subscription before the target date.

The spend lands on an Azure bill, not in the Microsoft 365 licence budget, so finance and the Purview administrator need to agree an owner. The Usage center lists Insider Risk Management as a feature that cannot be paused, so the levers are whether the indicator is used and how the policies are tuned.

## Risk assessment

**Data exposure**
- No new data source is described: the indicator analyses prompts entered into AI applications that users discover from browser activity, as Learn already documents. Confirm the browser-signal settings you already use before relying on it.

**Security & identity**
- Enabling pay-as-you-go needs the Global Administrator role. Plan that access as a one-off task, and keep Insider Risk Management role membership separate, as the Insider Risk Management Admins role group configures policies and settings.

**Autonomy & actions**
- The indicator raises risk scores and alerts for analysts; Learn does not describe it blocking users. The roadmap describes this as a billing change.

**Change & support**
- Without a linked Azure subscription, Microsoft's roadmap says continued use of the indicators is conditional. Expect the indicator to be unavailable or prompting for billing setup, and confirm which in your tenant, as Learn only says a notification might prompt you to configure pay-as-you-go billing.
- The per-app deselection (Choose apps to monitor) is documented for Microsoft Copilot experiences and Enterprise AI apps only, so Other AI apps has no documented per-app way to limit what is processed.

## Cost and licensing

Pay-as-you-go is a consumption model: you associate the tenant with an active Azure subscription and receive an Azure bill at the end of the month for all pay-as-you-go charges across Microsoft solutions ([billing models](https://learn.microsoft.com/purview/purview-billing-models)). It builds on the per-user licensing model; the two are complementary.

For Insider Risk Management, the billing page lists the unit as a data security processing unit, measured daily, for cloud and generative AI policy indicators on non-Microsoft 365 locations, and explains that a processing unit represents the compute to process 10,000 user activities. Rates are on the Microsoft pay-as-you-go pricing page that the billing page links to. Which of those activities the Other AI apps indicator counts is not stated in terms specific to this indicator.

Indirect costs are the Global Administrator's time to link the subscription, and analyst time spent on the extra alerts. Pay-as-you-go usage is reviewed in the Usage center, which Global Reader, Security Reader and Global Admin can open.

## Scope

The roadmap record lists GCC, GCC High and DoD, with the Web platform, General Availability, and a March CY2027 target. It lists Microsoft Purview as the product. The Worldwide equivalent is a separate roadmap item (557548).

The subscription-based enablement procedure applies to organisations that are not current Azure Purview customers using the classic data governance pricing model ([Learn](https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement)). For it, Learn lists an Azure subscription and resource group in the same tenant as Microsoft Purview, and either the MIP_S_Exchange or the EXCHANGE_S_FOUNDATION service plan. Only an account in the Global Administrator role can enable it. That enablement page is marked as preview.

Existing Azure Purview customers using the classic data governance pricing model, and customers using Data Security pay-as-you-go features in free public preview, use a different procedure: Learn says they consent to the pay-as-you-go model in the Microsoft Purview portal under Settings > Account overview > Review Consent, that only a Global Administrator can give that consent, and that the page is marked as preview ([Learn](https://learn.microsoft.com/purview/purview-payg-consent-based-enablement)). Whether either procedure, and the Usage center, apply in the three government clouds is not stated on the pages read.

## Governance guidance

### Before rollout
- Identify whether any Insider Risk Management policy in your tenant uses the Other AI apps indicator, under Insider Risk Management > Settings > Policy indicators > Generative AI apps indicators.
- Agree with finance who owns the Azure subscription and resource group that will carry the pay-as-you-go charges, and confirm they are in the same tenant as Microsoft Purview.
- Check which Learn procedure applies to your organisation: the subscription-based procedure is for organisations that are not current Azure Purview customers using the classic data governance pricing model. For that procedure, check that the tenant holds the MIP_S_Exchange or EXCHANGE_S_FOUNDATION service plan, which Learn lists as a prerequisite.
- Ask your Microsoft account team whether pay-as-you-go billing is available in your government cloud, as the pages read do not say.

### At rollout
- If your organisation is not a current Azure Purview customer using the classic data governance pricing model, ask a Global Administrator to link the Azure subscription in the Microsoft Purview portal under Settings > Account details, if you decide to keep the indicator in use.
- If your organisation is an existing Azure Purview customer using the classic data governance pricing model, or uses Data Security pay-as-you-go features in free public preview, ask a Global Administrator to use Microsoft Purview portal > Settings > Account overview > Review Consent to consent to the pay-as-you-go model.
- Review the policy indicators page for any notification prompting you to configure pay-as-you-go billing.

### After rollout
- Review Insider Risk Management usage in the Usage center each month and compare it with the Azure bill.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Other AI apps generative AI indicator is used in Insider Risk Management policies</strong><br><small>Tenant</small><br><small class="controls__note">Choose apps to monitor is documented for Microsoft Copilot experiences and Enterprise AI apps only. Role: Insider Risk Management Admins or similar.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators › Generative AI apps indicators <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Linking an Azure subscription so pay-as-you-go billing can be enabled</strong><br><small>Tenant</small><br><small class="controls__note">For organisations that are not current Azure Purview customers on the classic data governance pricing model. Global Administrator only. Preview. Rocket icon and Get Started is another route.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Account details <a href="https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Viewing pay-as-you-go usage by feature, including Insider Risk Management</strong><br><small>Tenant</small><br><small class="controls__note">Global Reader, Security Reader or Global Admin. Usage center is in preview; Insider Risk Management is listed as not pausable.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Linking the Azure subscription needs the Global Administrator role, while configuring Insider Risk Management policies and settings needs a role such as the Insider Risk Management Admins role group, so two different people may be involved. Usage center access is limited to Global Reader, Security Reader and Global Admin.

The linking row covers the subscription-based procedure. Existing Azure Purview customers using the classic data governance pricing model, and customers using Data Security pay-as-you-go features in free public preview, consent under Settings > Account overview > Review Consent instead (Global Administrator only; preview). Neither flow is confirmed for the government-cloud rollout.

No row here caps spend. The Usage center's pause toggle is not available for Insider Risk Management, and the Choose apps to monitor option is documented for other indicator groups, not Other AI apps.

## Open questions

- Is pay-as-you-go billing, and the Azure subscription enablement flow, available in GCC, GCC High and DoD tenants? Watch the Purview billing models page and the roadmap item.
- What happens on arrival in March CY2027 to a tenant that uses the Other AI apps indicator without a linked Azure subscription: does the indicator stop, or only prompt? Watch Message center.
- What does the Other AI apps indicator count as a billable activity, and what is its rate? Watch the Microsoft Purview pay-as-you-go pricing page.
- Does the roadmap's statement that Copilot experiences indicators stay free agree with Learn's pay-as-you-go requirement for non-Microsoft 365 AI data?

<!-- rationale
risk: Medium. The roadmap describes a billing change and does not describe a new data source, but it says continued use needs a linked Azure subscription, and the indicator's spend is metered with no per-app switch documented for Other AI apps.
cost: Variable. Insider Risk Management's generative AI indicators for non-Microsoft 365 locations are metered in data security processing units on an Azure bill; a rate for this indicator is not on the Learn pages read.
impact: Low. Insider Risk Management administrators and the finance owner of the Azure subscription notice; the roadmap describes a change to indicator billing.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope / record: Roadmap item 557548 describes the same Other AI apps billing transition. | Found: Record 557548: Other AI apps will move to pay-as-you-go model. Insider Risk Management indicators transitioning to a pay-as-you-go pricing model: “Entering risky prompt in Other AI apps”. | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=557548 to sources for the comparison with the Worldwide record.
- [supported, minor] controls[1].ui; Governance guidance: At rollout; Governance controls table / admin-path: The subscription-linking procedure can start at Microsoft Purview portal > Settings > Account details. | Found: This can also be done from Settings > Account details. 3. Select your active Azure subscription from the list. 4. Select the resource group. | Fix: Keep 'Settings > Account details' as the entry path and add to controls[1].note: 'Then select your active Azure subscription and resource group.' Apply the same completion to the At rollout instruction, as documented at https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement. | Source: https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement
- [supported, minor] Scope; Governance guidance: At rollout; Governance controls / role: The consent Learn page says only a Global Administrator can provide consent. | Found: Only an account in the Global Administrator role can provide consent to switch to the pay-as-you-go model. | Fix: Retain the Learn-based Global Administrator instruction and add: 'The Azure pricing FAQ instead lists Global Administrator or Purview Administrator as able to consent.' Cite https://azure.microsoft.com/pricing/details/purview/ for that conflicting statement. | Source: https://learn.microsoft.com/purview/purview-payg-consent-based-enablement
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist tells existing customers to use Review Consent, but that control has no table row. | Found: At rollout: use Microsoft Purview portal > Settings > Account overview > Review Consent. Table rows cover indicator settings, subscription linking and usage viewing; the prose says the linking row covers the subscription-based procedure. | Fix: Add to the existing Governance controls explanation: 'The At rollout consent step has no row in this table.' Do not add a control row as part of this correction.
-->
