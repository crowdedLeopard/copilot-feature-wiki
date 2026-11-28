---
title: "Microsoft Purview DLP: browse and buy partner integrations through the embedded Security Store"
slug: "microsoft-purview-data-loss-prevention-security-store-now-available-within-purview-dlp-to"
roadmapId: 557977
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft Security Store now appears inside Purview data loss prevention, listing partner integrations such as network DLP. Nothing is bought or connected until an admin purchases; decide who may buy and on which Azure subscription."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "mixed"
  notes: "Partner solutions are billed through an Azure subscription at the partner's listed price. Network data security with non-Microsoft SASE and secure browser solutions requires Purview E5 (or equivalent) per-seat licences and the Purview pay-as-you-go billing model, metered per request."
audiences: ["security","compliance","finops"]
tags: ["purview","dlp","network-data-security","pay-as-you-go","global-secure-access","security-store"]
sources:
  - title: "Microsoft 365 Roadmap item 557977"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557977"
    kind: "roadmap"
  - title: "Learn about Microsoft Purview Network Data Security"
    url: "https://learn.microsoft.com/purview/dlp-network-data-security-learn"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "Enable Microsoft Purview pay-as-you-go features for new customers"
    url: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    kind: "learn"
  - title: "What is Microsoft Security Store?"
    url: "https://learn.microsoft.com/security/store/what-is-security-store"
    kind: "learn"
  - title: "Purchase a SaaS solution and deploy a linked solution"
    url: "https://learn.microsoft.com/security/store/customers/how-to-purchase-a-saas-solution-and-deploy-a-linked-solution"
    kind: "learn"
  - title: "How to purchase SaaS solutions (private offers)"
    url: "https://learn.microsoft.com/security/store/customers/how-to-purchase-saas-solutions-private-offers"
    kind: "learn"
  - title: "Strengthening your Security Posture with Microsoft Security Store Innovations at RSAC 2026"
    url: "https://techcommunity.microsoft.com/blog/microsoft-security-blog/strengthening-your-security-posture-with-microsoft-security-store-innovations-at/4504026"
    kind: "blog"
  - title: "Searching audit records of network data security activity (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-extend-purview-data-security-to-the-network-layer-v","microsoft-purview-data-loss-prevention-apply-purview-network-data-security-dlp-policies-to","microsoft-purview-endpoint-data-loss-prevention-extend-purview-data-security-to-the-networ","auditing"]
controls:
  - governs: "Tenant-wide switch to show or hide the Security Store in Purview DLP"
    scope: "tenant"
    ui: null
    api: null
    note: "Purchases still need Owner or Contributor on the Azure subscription that is billed."
  - governs: "Whether Purview pay-as-you-go billing, needed for non-Microsoft network integrations, is turned on"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Account details"
      docs: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    api: null
    note: "Global Administrator only; in preview. Select the Azure subscription and resource group to bill there."
  - governs: "Pay-as-you-go usage for In-transit protection of data at the network layer"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Usage center > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/purview-billing-usage"
    api: null
    note: "Preview. Listed as not pausable. Needs Global Reader, Security Reader or Global Admin."
  - governs: "Searching audit records of network data security activity"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Network data security events can take up to 30 minutes to appear."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-01T21:45:13"
changes:
  - date: "2026-11-28"
    note: "New briefing: Security Store embedded in Purview DLP, with the licence, pay-as-you-go meter and purchase roles for partner network integrations."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 74 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 71
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "79c0a17b3812863fe15768420262a561"
---

## What's changing

Microsoft Security Store, Microsoft's storefront for Microsoft and partner-built security solutions and agents, now sits inside the data loss prevention (DLP) area of the Microsoft Purview portal. The roadmap item states that it gives admins an in-product way to discover a curated set of integrations that extend Purview, including data security for the network, and that purchasing and management are completed through Security Store.

Microsoft Learn's [network data security page](https://learn.microsoft.com/purview/dlp-network-data-security-learn) points to the Security Store in Microsoft Purview Data Loss Prevention as the place to find non-Microsoft SASE (secure access service edge) and secure browser solutions, which are generally available or in preview depending on the integration. The same page says you configure the integration between Purview and the network security solution using the Security Store, which establishes a two-way channel between them. Microsoft's RSAC 2026 blog names Microsoft Entra Global Secure Access and partners such as Netskope, Island, iBoss and Palo Alto Networks, and says purchases are completed through the Security Store website.

The roadmap item describes the store as already integrated and names no admin step to switch it on. Buying something is a separate, deliberate step: the purchaser picks an Azure billing subscription and resource group, and network protection starts only once a collection or DLP policy is configured for the integration.

The record lists the item as Launched, General Availability, with a target of March CY2026, for Worldwide (Standard Multi-Tenant) on the Web.

## Why it matters

This shortens the route from a DLP gap to a signed partner subscription. The documented prerequisite for completing a purchase is Owner or Contributor on the Azure subscription being billed, and the charge lands on that subscription rather than going through a Microsoft 365 licence order. Once an integration is configured, the partner receives Purview policy configuration including user identifiers, under its own terms, and the non-Microsoft network integrations turn on a per-request Purview meter that the Usage center lists as not pausable.

If nobody acts, nothing is purchased and no traffic is inspected: the store adds a catalogue to the DLP console, and the roadmap describes no change for end users. The work is to decide, before a team member clicks Get solution, who may buy, which subscription pays, and which partners may receive policy and identity data.

## Risk assessment

**Data exposure**
- Once an integration is configured, Purview shares DLP and collection policy configuration with the partner solution, which sends matching network traffic to Purview for classification. Microsoft warns that non-Microsoft partners can access and possibly store some policy configuration, including user identifiers, under their own terms and privacy policy. The decision to buy is the control.
- If a collection policy turns on content capture, the full conversation between the user and the AI app is sent to Purview.

**Security & identity**
- Microsoft's private-offer steps end with activation on the vendor's website, where the buyer completes setup and gives consent for Microsoft Entra apps. Review that consent with whoever approves enterprise applications.
- Network data security policies don't apply to B2B guest users, so guest traffic stays outside these protections.

**Autonomy & actions**
- Network DLP policies support **Audit only** and **Block**. A Block rule lets the partner's inline service stop user uploads and prompts to cloud and AI apps; supported activities and actions differ by integration.

**Change & support**
- Allow up to 24 hours for policies to reach the partner service and for the first data to appear, then up to 30 minutes per event in the audit log and activity explorer.
- Integrations are generally available or in preview depending on the integration, so support status varies by partner.

## Cost and licensing

**Partner solutions.** Each listing shows its price on the **Plans and Pricing** tab, and purchases are billed to the Azure billing subscription and resource group chosen at checkout, using existing Microsoft billing options and Microsoft Azure Consumption Commitment (MACC), via public or private offers ([What is Microsoft Security Store?](https://learn.microsoft.com/security/store/what-is-security-store)). Microsoft publishes no separate charge for the Security Store entry point in Purview itself.

**Purview licence and meter.** Per the [network data security page](https://learn.microsoft.com/purview/dlp-network-data-security-learn), non-Microsoft SASE and secure browser integrations need Purview E5 (or equivalent) per-seat licences and the Purview pay-as-you-go billing model, with the request as the unit of measure; only requests outbound from the device are counted, and the charge arrives on a monthly Azure bill ([billing models](https://learn.microsoft.com/purview/purview-billing-models)). Rates are on Microsoft's Purview pay-as-you-go pricing page. Microsoft Entra Global Secure Access instead needs Microsoft 365 E7, or Purview E5 plus Entra Internet Access (or equivalent), and no pay-as-you-go setup.

**Spending limits.** The [Usage center](https://learn.microsoft.com/purview/purview-billing-usage) lists **In-transit protection of data at the network layer** as not pausable, and Microsoft Learn documents no spending cap for these requests at the time of writing (November 2026). Partner charges are billed separately, to the Azure subscription chosen at checkout.

**Indirect costs.** Admin time to compare partners, review their data terms and tune DLP policies.

## Scope

- **Who sees it:** administrators working in Purview DLP, Worldwide (Standard Multi-Tenant) only per the roadmap record, on the Web.
- **Who can buy:** a person with the Azure Subscription Contributor or Azure Subscription Owner role on the subscription that will be billed.
- **Pay-as-you-go:** only an account in the Global Administrator role can enable Purview pay-as-you-go, which is in preview and requires an Azure subscription and resource group in the same tenant.
- **Who is protected:** users in scope of the network DLP or collection policy; B2B guest users are excluded.

## Governance guidance

### Before rollout
- Decide who in the security and compliance team may buy from the store, and agree with the Azure subscription owner which billing subscription and resource group purchases may use.
- Check under **Settings > Account details** whether Purview pay-as-you-go is already linked to an Azure subscription, since non-Microsoft network integrations need it.
- Read each shortlisted partner's terms and privacy policy with your privacy lead, focusing on the policy configuration and user identifiers it will receive.
- Compare Microsoft Entra Global Secure Access, which needs no pay-as-you-go setup, with partner options before committing.

### At rollout
- Start network DLP rules on **Audit only** for a pilot group before switching any to **Block**.
- Confirm with the partner which activities and actions its integration supports before writing rules that rely on them.
- Allow 24 hours after configuring the integration before judging whether policies are working.

### After rollout
- Review requests for **In-transit protection of data at the network layer** in **Usage center > Pay-as-you-go** each month, since it is listed there as not pausable.
- Search the audit log in **Audit > Search** for network data security events to confirm the integration is sending data.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch to show or hide the Security Store in Purview DLP</strong><br><small>Tenant</small><br><small class="controls__note">Purchases still need Owner or Contributor on the Azure subscription that is billed.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Purview pay-as-you-go billing, needed for non-Microsoft network integrations, is turned on</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator only; in preview. Select the Azure subscription and resource group to bill there.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Account details <a href="https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go usage for In-transit protection of data at the network layer</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Listed as not pausable. Needs Global Reader, Security Reader or Global Admin.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Searching audit records of network data security activity</strong><br><small>Tenant</small><br><small class="controls__note">Network data security events can take up to 30 minutes to appear.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that hides or turns off the Security Store inside Purview DLP at the time of writing (November 2026); the practical gate on purchases is who holds Owner or Contributor on an Azure subscription. Purchased solutions can be viewed, moved to another billing subscription or resource group, or cancelled in Security Store under **Management > My solutions**. The Usage center is in preview and needs Global Reader, Security Reader or Global Admin. Whether Azure Marketplace purchase policies apply to Security Store purchases is not stated (see Open questions).

## Open questions

- Do Private Microsoft Marketplace rules and Enterprise Agreement Marketplace purchase settings stop purchases started from the Security Store in Purview DLP? Watch the Security Store documentation.
- Which Purview role is needed to open the Security Store page in DLP, and will Microsoft add a setting to hide it? Watch the Purview DLP permissions page.
- Will Microsoft add a pause or cap for In-transit protection of data at the network layer in the Usage center?
- Which of the listed partner integrations are generally available and which are in preview, and who supports each? Watch the network data security page.

<!-- rationale
risk: Low. The store is a catalogue and purchase route: nothing reaches users, data or spend until someone with Owner or Contributor on an Azure subscription buys and then configures an integration.
cost: Variable. Partner solutions are billed to an Azure subscription at the partner's price, and non-Microsoft network integrations also need Purview E5 and the Purview pay-as-you-go meter, charged per outbound request.
impact: Low. The store is aimed at Purview DLP administrators; end users are affected only after an integration is bought and a network DLP policy is applied to them.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] summary; Why it matters; Risk assessment: Data exposure; rationales: risk and impact / applicability: Nothing can be connected, inspect traffic or affect users and data until someone buys a solution through the store; buying is the data-exposure control. | Found: Searched: Microsoft Security Store Purview DLP no traffic inspected until purchase integration existing subscription trial. Opened Security Store overview, SaaS purchase instructions, network-data-security-learn and dlp-create-policy-ai-network-data-security; none states a universal purchase gate. | Fix: Replace the summary's second sentence with 'Purchasing requires a deliberate checkout; decide who may buy and on which Azure subscription.' Replace the no-traffic-until-purchase assertion and the rationales' purchase prerequisite with 'Network discovery and protection require a configured integration and collection or DLP policy.' Replace 'The decision to buy is the control' with 'Review the integration and policy configuration before sharing data.' Cite https://learn.microsoft.com/purview/dlp-network-data-security-learn.
- [contradicted, blocker] Governance controls; Open questions / absence: Whether Marketplace purchase policies, including private Marketplace and EA settings, apply to Security Store purchases is not stated. | Found: Your billing account policy must be enabled for Microsoft Marketplace purchases ... If the private Marketplace is enabled for the tenant associated with your private offer's billing account, ensure that the private offer's plans are added to the collection and approved for purchase. | Fix: Replace the final Governance controls sentence with 'Security Store private-offer purchases must follow Microsoft Marketplace eligibility checks: the billing account must allow Marketplace purchases, and an enabled private Marketplace must approve the offer plans.' Remove the first Open questions bullet. Cite https://learn.microsoft.com/marketplace/private-offers-pre-check alongside the already-cited https://learn.microsoft.com/security/store/customers/how-to-purchase-saas-solutions-private-offers, which explicitly directs buyers to those checks. | Source: https://learn.microsoft.com/marketplace/private-offers-pre-check
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Autonomy & actions / applicability: A network Block rule can restrict uploaded files and text prompts sent to cloud and AI apps. | Found: Select + Add an action and choose Restrict browser and network activities. Select Text sent to or shared with cloud or AI apps and File uploaded to or shared with cloud or AI apps. Select Block for both. | Fix: Add https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security to sources and cite it for the sentence about blocking uploads and prompts. | Source: https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security
- [supported, minor] controls[1].ui; Governance guidance: Before rollout / admin-path: Purview portal > Settings > Account details is the route to pay-as-you-go enablement. | Found: This can also be done from Settings > Account details. Select your active Azure subscription from the list. ... Select the resource group. | Fix: The path correctly reaches the enablement page. Set controls[1].ui.path to 'Settings > Account details > Azure subscription > resource group' to carry the documented route through the billing selections, retaining the existing preview and role note. | Source: https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement
- [supported, minor] Governance controls / admin-path: Security Store > Management > My solutions is where purchased solutions can be viewed, moved or cancelled. | Found: Find your purchased SaaS solution and select View details. Select the resource name. This redirects you to the SaaS tool in the Azure portal | Fix: Replace the sentence with 'View purchased solutions in Security Store > Management > My solutions. To change the billing subscription or resource group, or cancel a purchase, select the solution > View details > resource name; this opens the SaaS tool in the Azure portal.' Keep the existing private-offer source. | Source: https://learn.microsoft.com/security/store/customers/how-to-purchase-saas-solutions-private-offers
- [contradicted, minor] Governance guidance: At rollout / consistency: The checklist tells readers to set network DLP rules to Audit only and then Block, but that control has no table row. | Found: Start network DLP rules on Audit only for a pilot group before switching any to Block. | Table rows: store visibility; pay-as-you-go enablement; pay-as-you-go usage; audit search. | Fix: Remove the checklist bullet 'Start network DLP rules on Audit only for a pilot group before switching any to Block.' It directs readers to set a control missing from the table; do not add a row as part of this correction.
-->
