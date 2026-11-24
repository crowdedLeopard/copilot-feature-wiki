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
    note: "Global Administrator only. The enablement page is marked as preview. The page also offers a rocket icon and Get Started route."
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
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 57
  unconfirmed: 3
  contradicted: 2
  attempts: 1
  hash: "58d51f3c171c59de3d6f19497be0797d"
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
- The indicator raises risk scores and alerts for analysts; Learn does not describe it blocking users. The change here is to billing, not to what the indicator does.

**Change & support**
- Without a linked Azure subscription, Microsoft's roadmap says continued use of the indicators is conditional. Expect the indicator to be unavailable or prompting for billing setup, and confirm which in your tenant, as Learn only says a notification might prompt you to configure pay-as-you-go billing.
- The per-app deselection (Choose apps to monitor) is documented for Microsoft Copilot experiences and Enterprise AI apps only, so Other AI apps has no documented per-app way to limit what is processed.

## Cost and licensing

Pay-as-you-go is a consumption model: you associate the tenant with an active Azure subscription and receive an Azure bill at the end of the month for all pay-as-you-go charges across Microsoft solutions ([billing models](https://learn.microsoft.com/purview/purview-billing-models)). It builds on the per-user licensing model; the two are complementary.

For Insider Risk Management, the billing page lists the unit as a data security processing unit, measured daily, for cloud and generative AI policy indicators on non-Microsoft 365 locations, and explains that a processing unit represents the compute to process 10,000 user activities. Rates are on the Microsoft pay-as-you-go pricing page that the billing page links to. Which of those activities the Other AI apps indicator counts is not stated in terms specific to this indicator.

Indirect costs are the Global Administrator's time to link the subscription, and analyst time spent on the extra alerts. Pay-as-you-go usage is reviewed in the Usage center, which Global Reader, Security Reader and Global Admin can open.

## Scope

The roadmap record lists GCC, GCC High and DoD, with the Web platform, General Availability, and a March CY2027 target. It lists Microsoft Purview as the product. The Worldwide equivalent is a separate roadmap item (557548).

To enable pay-as-you-go, Learn lists an Azure subscription and resource group in the same tenant as Microsoft Purview, and either the MIP_S_Exchange or the EXCHANGE_S_FOUNDATION service plan. Only an account in the Global Administrator role can enable it. That enablement page is marked as preview. Whether it, and the Usage center, apply in the three government clouds is not stated on the pages read.

## Governance guidance

### Before rollout
- Identify whether any Insider Risk Management policy in your tenant uses the Other AI apps indicator, under Insider Risk Management > Settings > Policy indicators > Generative AI apps indicators.
- Agree with finance who owns the Azure subscription and resource group that will carry the pay-as-you-go charges, and confirm they are in the same tenant as Microsoft Purview.
- Check that the tenant holds the MIP_S_Exchange or EXCHANGE_S_FOUNDATION service plan, which Learn lists as a prerequisite.
- Ask your Microsoft account team whether pay-as-you-go billing is available in your government cloud, as the pages read do not say.

### At rollout
- Ask a Global Administrator to link the Azure subscription in the Microsoft Purview portal if you decide to keep the indicator in use.
- Review the policy indicators page for any notification prompting you to configure pay-as-you-go billing.

### After rollout
- Review Insider Risk Management usage in the Usage center each month and compare it with the Azure bill.
- Tune policies if the processed activity volume is higher than planned, since Learn says the pay-as-you-go report is for identifying cost-saving opportunities.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Other AI apps generative AI indicator is used in Insider Risk Management policies</strong><br><small>Tenant</small><br><small class="controls__note">Choose apps to monitor is documented for Microsoft Copilot experiences and Enterprise AI apps only. Role: Insider Risk Management Admins or similar.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators › Generative AI apps indicators <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Linking an Azure subscription so pay-as-you-go billing can be enabled</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator only. The enablement page is marked as preview. The page also offers a rocket icon and Get Started route.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Account details <a href="https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Viewing pay-as-you-go usage by feature, including Insider Risk Management</strong><br><small>Tenant</small><br><small class="controls__note">Global Reader, Security Reader or Global Admin. Usage center is in preview; Insider Risk Management is listed as not pausable.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Linking the Azure subscription needs the Global Administrator role, while configuring Insider Risk Management policies and settings needs a role such as the Insider Risk Management Admins role group, so two different people may be involved. Usage center access is limited to Global Reader, Security Reader and Global Admin.

No row here caps spend. The Usage center's pause toggle is not available for Insider Risk Management, and the Choose apps to monitor option is documented for other indicator groups, not Other AI apps.

## Open questions

- Is pay-as-you-go billing, and the Azure subscription enablement flow, available in GCC, GCC High and DoD tenants? Watch the Purview billing models page and the roadmap item.
- What happens on arrival in March CY2027 to a tenant that uses the Other AI apps indicator without a linked Azure subscription: does the indicator stop, or only prompt? Watch Message center.
- What does the Other AI apps indicator count as a billable activity, and what is its rate? Watch the Microsoft Purview pay-as-you-go pricing page.
- Does the roadmap's statement that Copilot experiences indicators stay free agree with Learn's pay-as-you-go requirement for non-Microsoft 365 AI data?

<!-- rationale
risk: Medium. The indicator reads no new data, but the roadmap item says continued use needs a linked Azure subscription, and the indicator's spend is metered with no per-app switch documented for Other AI apps.
cost: Variable. Insider Risk Management's generative AI indicators for non-Microsoft 365 locations are metered in data security processing units on an Azure bill; a rate for this indicator is not on the Learn pages read.
impact: Low. Insider Risk Management administrators and the finance owner of the Azure subscription notice; end users see no change, as the indicator is configured in the Microsoft Purview portal.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope; controls[1].note; Governance guidance: Before rollout and At rollout / applicability: The subscription-based enablement procedure and its prerequisites are presented as the pay-as-you-go setup procedure without a customer-category restriction. | Found: Applies to: Existing Azure Purview customers who are using the classic data governance pricing model. Microsoft Purview customers using Data Security pay-as-you-go features in free public preview. ... Settings > Account overview ... Select Review Consent | Fix: Qualify the Scope prerequisites, controls[1].note and subscription-linking checklist instructions with: 'This subscription-based procedure applies to organisations that are not current Azure Purview customers using the classic data governance pricing model.' For existing classic Azure Purview customers or customers using Data Security pay-as-you-go features in free public preview, replace the linking instruction with: 'Use Microsoft Purview portal > Settings > Account overview > Review Consent to consent to the pay-as-you-go model.' Cite https://learn.microsoft.com/purview/purview-payg-consent-based-enablement and retain the Global Administrator and preview qualifications. Do not present either flow as confirmed for the government-cloud rollout. | Source: https://learn.microsoft.com/purview/purview-payg-consent-based-enablement
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The transition changes billing but not what the indicator does. | Found: Searched: 'Microsoft Purview Other AI apps indicator blocking users billing change end users unchanged'. Read roadmap, policy-indicators and ai-other-apps excerpts. These describe billing and detection, but do not state that this rollout leaves indicator behaviour unchanged. | Fix: Replace 'The change here is to billing, not to what the indicator does' with 'The roadmap describes this as a billing change'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance guidance: Before rollout; Governance controls table / admin-path: Microsoft Purview portal > Insider Risk Management > Settings > Policy indicators > Generative AI apps indicators reaches the indicator configuration section. | Found: In the Microsoft Purview portal, go to Insider Risk Management > Settings > Policy indicators. Expand Generative AI apps indicators. | Fix: Extend the path to 'Insider Risk Management > Settings > Policy indicators > Generative AI apps indicators > Other AI apps', using the final group named in the roadmap record, and retain the cited Learn URL. The printed path currently stops at the containing section. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Microsoft Purview portal > Settings > Account details reaches the documented subscription-linking flow. | Found: Select Get Started in the ribbon menu to start the process. This can also be done from Settings > Account details. Select your active Azure subscription from the list. Select the resource group. | Fix: Keep the path and append to the note: 'Select your active Azure subscription, then the resource group.' These are the remaining selections given at https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement. | Source: https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement
- [supported, minor] controls[1].note; Risk assessment: Security & identity; Scope; Governance controls / role: Only a Global Administrator can enable the documented Purview pay-as-you-go model. | Found: Only an account in the Global Administrator role can enable the pay-as-you-go model | Fix: Keep the Learn requirement, but add: 'The Microsoft Purview pricing FAQ separately lists Global Administrator and Purview Administrator as roles that can provide consent.' Cite https://azure.microsoft.com/pricing/details/purview/; this disagrees with Learn's Global Administrator-only consent requirement. | Source: https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement
- [unsupported, minor] rationale: risk / behaviour: The indicator reads no new data as a result of this change. | Found: Searched: 'Microsoft Purview Other AI apps indicator blocking users billing change end users unchanged'. Read roadmap, policy-indicators and ai-other-apps excerpts. They describe billing and existing interaction analysis, but do not explicitly promise unchanged data access for this rollout. | Fix: Replace 'The indicator reads no new data' with 'The roadmap describes a billing change and does not describe a new data source'.
- [unsupported, minor] rationale: impact / behaviour: End users see no change from the billing transition. | Found: Searched: 'Microsoft Purview Other AI apps indicator blocking users billing change end users unchanged'. Read roadmap, policy-indicators and ai-other-apps excerpts; no passage guarantees unchanged user-facing behaviour for this government-cloud billing transition. | Fix: Replace 'end users see no change, as the indicator is configured in the Microsoft Purview portal' with 'the roadmap describes a change to indicator billing'.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist asks administrators to tune policies, but the controls table has no policy-tuning row. | Found: Tune policies if the processed activity volume is higher than planned ... Table rows: whether the indicator is used; linking an Azure subscription; viewing pay-as-you-go usage. | Fix: Remove the 'Tune policies if the processed activity volume is higher than planned' checklist bullet. The indicator-selection row does not document policy tuning; do not add a new control row as part of this correction.
-->
