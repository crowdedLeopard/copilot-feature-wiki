---
title: "Microsoft Purview: send Microsoft Foundry prompts and responses to Purview per Azure subscription"
slug: "microsoft-purview-azure-ai-foundry-integration-with-microsoft-purview-for-ai"
roadmapId: 537271
topic: "governance"
products: ["Microsoft Purview"]
summary: "Foundry admins can switch on Microsoft Purview for an Azure subscription so its AI prompts and responses reach Purview audit, DSPM, retention and eDiscovery. Off until enabled; policy features bill pay-as-you-go."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: "December CY2025"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Requires a Microsoft Purview licence, which the Defender for AI Services plan does not include. Purview Audit covers Foundry data under the Purview licence; managing policies for Foundry interactions requires Purview pay-as-you-go billing through an Azure subscription."
audiences: ["compliance","security","service-owner","finops"]
tags: ["purview","microsoft-foundry","dspm","auditing","pay-as-you-go","collection-policies","defender-for-cloud","retention","ediscovery","ai"]
sources:
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft Foundry"
    url: "https://learn.microsoft.com/purview/ai-azure-foundry"
    kind: "learn"
  - title: "Monitor AI governance and compliance in Microsoft Foundry"
    url: "https://learn.microsoft.com/azure/ai-foundry/control-plane/how-to-manage-compliance-security"
    kind: "learn"
  - title: "Enable threat protection for AI services"
    url: "https://learn.microsoft.com/azure/defender-for-cloud/ai-onboarding"
    kind: "learn"
  - title: "Elevated-role tasks in Microsoft Foundry"
    url: "https://learn.microsoft.com/azure/foundry/concepts/administrator-guide"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "Audit logs for Copilot and AI applications"
    url: "https://learn.microsoft.com/purview/audit-copilot"
    kind: "learn"
  - title: "Integrate Microsoft Foundry with your applications (Microsoft or third-party services)"
    url: "https://learn.microsoft.com/azure/foundry/how-to/integrate-with-other-apps"
    kind: "learn"
  - title: "Collection policy reference"
    url: "https://learn.microsoft.com/purview/collection-policies-policy-reference"
    kind: "learn"
  - title: "Microsoft 365 Roadmap: Azure AI Foundry integration with Microsoft Purview for AI"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=537271"
    kind: "roadmap"
  - title: "Whether Purview captures prompts and responses from enterprise AI apps (collection policy) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration"
    kind: "learn"
  - title: "Searching audit records of Foundry interactions (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-inline-dlp-for-prompts-for-microsoft-foundry-apps-a","microsoft-purview-compliance-manager-purview-compliance-manager-integration-with-microsoft","auditing","microsoft-purview-compliance-portal-collection-policies-support-in-irm","microsoft-purview-information-protection-azure-ai-search-honors-purview-labels-and-policie"]
controls:
  - governs: "Whether Foundry interactions in a subscription reach Microsoft Purview (Foundry setting)"
    scope: "other"
    ui:
      surface: "Microsoft Foundry portal"
      path: "Manage > Compliance > Data security and governance > subscription > Powered by Microsoft Purview"
      docs: "https://learn.microsoft.com/azure/ai-foundry/control-plane/how-to-manage-compliance-security"
    api: null
    note: "Per Azure subscription. The page says this setting shows the integration's enabled state. Foundry (new) portal only. Foundry Account Owner is the minimum role to configure Purview."
  - governs: "Whether Foundry interactions in a subscription reach Microsoft Purview (Defender for Cloud route)"
    scope: "other"
    ui:
      surface: "Azure portal"
      path: "Microsoft Defender for Cloud > Environment settings > subscription > AI services > Settings > Enable data security for AI interactions"
      docs: "https://learn.microsoft.com/azure/defender-for-cloud/ai-onboarding"
    api: null
    note: "Being deprecated in favour of the Foundry method. Needs the Defender for AI Services plan, which needs Owner or Contributor to enable."
  - governs: "Whether Purview captures prompts and responses from enterprise AI apps (collection policy)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > DSPM for AI (classic) > Recommendations > Secure interactions from enterprise apps"
      docs: "https://learn.microsoft.com/purview/ai-azure-foundry"
    api:
      kind: "powershell"
      call: "New-FeatureConfiguration -Name <String> -FeatureScenario KnowYourData -Mode Enable -ScenarioConfig <String> -Locations <String>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration"
    note: "Creates the one-click policy DSPM for AI - Capture interactions for enterprise AI apps. The cmdlet is in public preview in Security & Compliance PowerShell."
  - governs: "Whether each Purview pay-as-you-go feature, such as Audit or Data lifecycle management, is paused or active"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Usage center > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/purview-billing-usage"
    api: null
    note: "Usage center is in preview. Opening the page needs Global Reader, Security Reader or Global Admin. Insider Risk Management is listed as not pausable."
  - governs: "Searching audit records of Foundry interactions"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Prompts and responses are captured in the unified audit log, including for apps whose calls carry no user context."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-26T22:01:51"
changes:
  - date: "2026-11-27"
    note: "New briefing: the Foundry and Defender for Cloud switches that send Foundry prompts and responses to Purview, the pay-as-you-go meters, and the conflicting statements on agent coverage."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 78 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected: data security policies apply to Entra ID user-context calls or calls that include user context; Foundry apps are in Audit Standard, so Audit is no longer listed as a Foundry meter; removed unsupported end-user and actions statements."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 75 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 75
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ea8a6b2788202d66bf9810cf0e39accc"
---

## What's changing

Administrators of Microsoft Foundry (Microsoft's Azure platform for building AI apps and agents) can switch on Microsoft Purview for an Azure subscription, so that AI interactions from that subscription flow into Purview for compliance, governance and data security posture management. The roadmap item describes this as interaction data "from all apps and agents".

Microsoft's Purview page for Foundry says that before Purview can manage these interactions an administrator must do one of two things: enable Microsoft Purview Data Security in Foundry governance (the Foundry Control Plane) in the [Microsoft Foundry portal](https://learn.microsoft.com/azure/ai-foundry/control-plane/how-to-manage-compliance-security), or enable it for Foundry in Microsoft Defender for Cloud in the Azure portal. The Defender for Cloud page says that route is being deprecated and points to the new Foundry method. Once on, Purview can "access, process, and store prompt and response data—including associated metadata—from Microsoft Foundry" for sensitive information type classification, DSPM for AI reporting, Insider Risk Management, Communication Compliance, Audit, Data Lifecycle Management and eDiscovery.

Sources disagree on agents. The roadmap item says data from all apps and agents flows into Purview; the Defender for Cloud page states that the Purview integration does not include data or context from Foundry agents. The Foundry Compliance view, for its part, shows agent counts among its Purview coverage indicators.

The roadmap item is **Launched**, listed under General Availability and Preview, with a preview date of December CY2025 and a target of May CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web.

## Why it matters

This is the switch that brings Foundry-built apps inside the same Purview controls already used for Microsoft 365 Copilot: audit, retention, eDiscovery, Insider Risk Management and DSPM for AI. Until an administrator enables it, Microsoft's page says Purview cannot manage these interactions, so a tenant with Foundry apps in production may have AI prompts and responses that compliance teams cannot search or retain.

The catch is in two details. First, enabling it creates a new copy of prompt and response content inside Purview, which needs the same access and retention decisions as Copilot data. Second, Microsoft's page says data security policies apply to API calls using Microsoft Entra ID with a user-context token, or calls that explicitly include user context; for all other authentication scenarios, interactions appear only in Audit and DSPM for AI Activity Explorer. Expect audit visibility without policy enforcement for calls that meet neither user-context condition.

## Risk assessment

**Data exposure**
- Purview stores Foundry prompts and responses with their metadata once enabled. The Purview Foundry page says prompts and responses for AI apps are stored in a user's mailbox, which brings them into eDiscovery and retention scope. Viewing prompt and response text in DSPM for AI activity explorer requires the Content Explorer Content Viewer role group, so check who holds it.
- Insider Risk Management, Communication Compliance, eDiscovery and Data Lifecycle Management each need a collection policy for Foundry prompts and responses, such as **DSPM for AI - Detect sensitive info shared with AI via network**.

**Security & identity**
- Data security policies apply to API calls that use Microsoft Entra ID authentication with a user-context token, or explicitly include user context. Other authentication scenarios appear only in Audit and DSPM for AI Activity Explorer. The Purview Foundry page says DLP support today covers only a policy that blocks prompts based on sensitive information types, scoped to an Entra-registered AI app.

**Autonomy & actions**
- The integration captures and classifies interactions.

**Change & support**
- Two enabling routes exist and the Defender for Cloud one is being deprecated. Tenants that used it should confirm the setting in the Foundry Compliance view. Microsoft's Foundry page warns not to equate audit visibility with data security policy enforcement.

## Cost and licensing

**Licence.** The Defender for Cloud page says the feature requires a Microsoft Purview licence, which is not included in the Defender for AI Services plan, and calls data security for AI interactions "a paid Purview feature". The [Purview Foundry page](https://learn.microsoft.com/purview/ai-azure-foundry) says Purview Audit includes Foundry data as part of the Purview licence.

**Meter.** The same page says managing policies for Foundry interactions requires [pay-as-you-go billing](https://learn.microsoft.com/purview/purview-billing-models). That model is billed through an Azure subscription associated with the Microsoft 365 tenant, with an Azure bill at month end. The billing models page lists meters for non-Microsoft 365 AI interactions: Data Lifecycle Management per interaction under a retention policy, Communication Compliance per text record scanned, and data security for generative AI apps per request or message. The Audit consumption meter applies to non-Microsoft AI applications; custom applications built using Microsoft Foundry are included in Audit Standard ([Audit logs for Copilot and AI applications](https://learn.microsoft.com/purview/audit-copilot)). Rates are on the Microsoft Purview pricing page that the billing models page links to; a rate specific to Foundry is not yet published.

**Spend control.** The Purview **Usage center** (preview) shows pay-as-you-go use by feature and lets an administrator toggle Audit, Data lifecycle management, Communication compliance and other listed features between paused and active (see the controls table).

**Indirect costs.** Admin time to set up collection and retention policies, and developer time to pass user context from Foundry apps.

## Scope

- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap item lists. Platform: web.
- **Unit of enablement:** an Azure subscription; the roadmap item and the Defender for Cloud route both work per subscription.
- **Roles:** Foundry's administrator guide lists Foundry Account Owner, on the Foundry resource, as the minimum role to configure Microsoft Purview. Enabling the Defender for AI Services plan needs Owner or Contributor. DSPM for AI gives Microsoft Entra Compliance Administrator as an example of an account with appropriate permissions.
- **Portal:** the Foundry Compliance view is available only in the Foundry (new) portal.
- **Prerequisites:** a Purview licence and Purview pay-as-you-go billing for policy features. Data security policies apply to API calls that use Microsoft Entra ID authentication with a user-context token, or explicitly include user context. Other authentication scenarios appear only in Audit and DSPM for AI Activity Explorer.
- **Agents:** the roadmap item includes agents; the Defender for Cloud page excludes Foundry agent data (see What's changing).

## Governance guidance

### Before rollout
- Decide with the compliance team which Azure subscriptions hosting Foundry apps should send prompts and responses to Purview.
- Agree who watches the Usage center.
- Ask Foundry developers whether their apps' API calls use Microsoft Entra ID authentication with a user-context token, or explicitly include user context. Data security policies apply to those calls; other authentication scenarios appear only in Audit and DSPM for AI Activity Explorer.

### At rollout
- Have a Foundry Account Owner check the **Powered by Microsoft Purview** setting in the Foundry portal Compliance view for each chosen subscription.
- Create the enterprise AI apps capture policy from DSPM for AI (classic) recommendations, or with `New-FeatureConfiguration` in Security & Compliance PowerShell.
- Check that subscriptions enabled through Defender for Cloud still show as enabled, as that route is being deprecated.

### After rollout
- Search the audit log for Foundry interactions after a day to confirm capture.
- Review pay-as-you-go use by feature in the Usage center each month, and pause features that should not be billing.
- Recheck agent coverage on the Purview Foundry page, given the conflicting statements about Foundry agents.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Foundry interactions in a subscription reach Microsoft Purview (Foundry setting)</strong><br><small class="controls__note">Per Azure subscription. The page says this setting shows the integration's enabled state. Foundry (new) portal only. Foundry Account Owner is the minimum role to configure Purview.</small></td><td data-label="Admin UI"><strong>Microsoft Foundry portal</strong><br>Manage › Compliance › Data security and governance › subscription › Powered by Microsoft Purview <a href="https://learn.microsoft.com/azure/ai-foundry/control-plane/how-to-manage-compliance-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Foundry interactions in a subscription reach Microsoft Purview (Defender for Cloud route)</strong><br><small class="controls__note">Being deprecated in favour of the Foundry method. Needs the Defender for AI Services plan, which needs Owner or Contributor to enable.</small></td><td data-label="Admin UI"><strong>Azure portal</strong><br>Microsoft Defender for Cloud › Environment settings › subscription › AI services › Settings › Enable data security for AI interactions <a href="https://learn.microsoft.com/azure/defender-for-cloud/ai-onboarding" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Purview captures prompts and responses from enterprise AI apps (collection policy)</strong><br><small>Tenant</small><br><small class="controls__note">Creates the one-click policy DSPM for AI - Capture interactions for enterprise AI apps. The cmdlet is in public preview in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › DSPM for AI (classic) › Recommendations › Secure interactions from enterprise apps <a href="https://learn.microsoft.com/purview/ai-azure-foundry" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-FeatureConfiguration -Name &lt;String&gt; -FeatureScenario KnowYourData -Mode Enable -ScenarioConfig &lt;String&gt; -Locations &lt;String&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether each Purview pay-as-you-go feature, such as Audit or Data lifecycle management, is paused or active</strong><br><small>Tenant</small><br><small class="controls__note">Usage center is in preview. Opening the page needs Global Reader, Security Reader or Global Admin. Insider Risk Management is listed as not pausable.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Searching audit records of Foundry interactions</strong><br><small>Tenant</small><br><small class="controls__note">Prompts and responses are captured in the unified audit log, including for apps whose calls carry no user context.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Foundry and Defender for Cloud switches decide whether a subscription's interactions reach Purview at all; the collection policy decides which Purview solutions receive prompt and response content. Neither enables data security policies for apps that call models without user context. The Foundry Compliance page describes **Powered by Microsoft Purview** as showing the integration's enabled state and does not set out the steps to change it; configuring Purview needs the Foundry Account Owner role. `New-FeatureConfiguration` is in public preview, and its reference does not give the location value for Foundry. Microsoft Learn documents no Azure REST or CLI operation for either enabling switch at the time of writing (November 2026).

## Open questions

- Does the integration now include Foundry agents, as the roadmap item says, or still exclude them, as the Defender for Cloud page states? Watch the [Defender for Cloud AI onboarding page](https://learn.microsoft.com/azure/defender-for-cloud/ai-onboarding).
- When will the Defender for Cloud enabling route stop working, and do subscriptions enabled there carry over to the Foundry setting?
- Is there a published Purview pay-as-you-go rate specific to Foundry interactions?
- What does pausing Audit or Data lifecycle management in the Usage center do to Foundry interactions already being captured?
- Which location value does `New-FeatureConfiguration` take to scope a collection policy to Foundry?

<!-- rationale
risk: Medium. Turning it on lets Purview access, process and store prompt and response data from Foundry, and left off, Foundry interactions stay outside Purview; data security policies only apply to calls that carry user context.
cost: Variable. Managing policies for Foundry interactions requires Purview pay-as-you-go billing through an Azure subscription. Audit of Foundry applications is included in Audit Standard.
impact: Low. Compliance and Foundry administrators notice it; developers may need to pass user context for policies to apply.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters: same controls as Microsoft 365 Copilot / applicability: Audit, retention, eDiscovery, Insider Risk Management and DSPM for AI are also Purview controls used for Microsoft 365 Copilot. | Found: | DSPM and DSPM for AI (classic) | **✓** | | Auditing | **✓** | ... | Insider Risk Management | **✓** | ... | eDiscovery | **✓** | | Data Lifecycle Management | **✓** | | Fix: Add https://learn.microsoft.com/purview/ai-m365-copilot to sources for the comparison with Microsoft 365 Copilot. Its capabilities sections cover these controls; audit is also supported by the already cited audit-copilot page. | Source: https://learn.microsoft.com/purview/ai-m365-copilot
- [supported, minor] Why it matters: until enabled; Governance controls: at all; rationale: risk / applicability: Until an administrator enables one of these switches, Foundry interactions stay outside Purview. | Found: Before Microsoft Purview can manage these AI interactions, ensure you perform either of the following configuration steps: | Fix: Narrow this to the native integration. Replace the Why it matters sentence with 'The native subscription integration requires administrator enablement.' Replace 'decide whether a subscription's interactions reach Purview at all' with 'enable the native subscription-level integration' and the rationale clause 'left off, Foundry interactions stay outside Purview' with 'left off, this native integration does not send Foundry interactions to Purview'. The cited page supports the enablement requirement, but https://learn.microsoft.com/purview/developer/secure-ai-with-purview also documents Microsoft Graph APIs and Agent Framework as alternative integration routes. | Source: https://learn.microsoft.com/purview/ai-azure-foundry
-->
