---
title: "Microsoft Purview: network DLP for server and VM traffic through Azure Firewall"
slug: "microsoft-purview-endpoint-data-loss-prevention-extend-purview-data-security-to-the-networ"
roadmapId: 577828
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans Purview DLP enforcement in Azure Firewall traffic. It is in preview and needs Azure Firewall Premium with the AI Security add-on, so network and security teams decide whether to adopt it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "November CY2026"
risk: "medium"
cost: "medium"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn lists Azure Firewall Premium with an AI Security add-on licence and a valid Microsoft Purview licence as prerequisites. Azure Firewall pricing is on the Azure pricing page; a Purview licence or meter specific to this integration is not yet published."
audiences: ["security","compliance","m365-admin","finops"]
tags: ["purview","dlp","network-data-security","endpoint-dlp","insider-risk-management","azure-firewall"]
sources:
  - title: "Microsoft 365 Roadmap 577828"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577828"
    kind: "roadmap"
  - title: "Configure network DLP with Azure Firewall and Microsoft Purview (preview)"
    url: "https://learn.microsoft.com/azure/firewall/configure-network-dlp"
    kind: "learn"
  - title: "Azure Firewall AI Security concepts (preview)"
    url: "https://learn.microsoft.com/azure/firewall/ai-security-concepts"
    kind: "learn"
  - title: "Learn about Microsoft Purview Network Data Security"
    url: "https://learn.microsoft.com/purview/dlp-network-data-security-learn"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-extend-purview-data-security-to-the-network-layer-v","microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-with-m","microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-558437","microsoft-purview-data-loss-prevention-data-security-for-non-microsoft-connected-apps","sensitivity-labels"]
controls:
  - governs: "Which destinations, activities and actions the Purview network DLP policy applies"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > + Add cloud apps > Network and non-Microsoft secure browsers"
      docs: "https://learn.microsoft.com/azure/firewall/configure-network-dlp"
    api: null
    note: "The rule's Actions > Restrict browser and network activities (Audit or Block) is set in the same wizard. Requires permissions to manage Purview DLP policies."
  - governs: "Whether the firewall's DLP profile monitors or blocks (Disabled, Alert only, Alert and deny)"
    scope: "other"
    ui:
      surface: "Azure portal"
      path: "firewall policy > Settings > Security Profile Groups (preview) > Create security profile group > Basics > Data loss prevention (preview) > Configure protections > Mode"
      docs: "https://learn.microsoft.com/azure/firewall/configure-network-dlp"
    api: null
    note: "Preview. Learn says Azure PowerShell, Azure CLI, Terraform and the REST API are not supported for this configuration yet. Alert only does not block even when Purview returns a deny."
  - governs: "Which firewall traffic is sent for DLP evaluation (application rule with the security profile group)"
    scope: "other"
    ui:
      surface: "Azure portal"
      path: "firewall policy > Rules > Application rules > rule > security profile group"
      docs: "https://learn.microsoft.com/azure/firewall/configure-network-dlp"
    api: null
    note: "Learn's steps use HTTPS:443 with TLS inspection enabled on the rule. Network rules are processed before application rules."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-20"
    note: "New briefing: Purview network DLP through Azure Firewall, a preview on Learn with a March CY2027 roadmap target; licensing and Insider Risk Management signals are not yet published."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 70 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected the enforcement step (rule On, policy activated, not left in simulation), the Purview policy path and one open question; removed checklist steps without a controls-table row."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 78 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 78
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0efaa223e8e0f6b367a8ed268941f693"
---

## What's changing

Microsoft plans to extend Microsoft Purview data loss prevention (DLP) to the network layer through Azure Firewall, so that sensitive text, files and AI interactions in supported traffic from servers, virtual machines and other endpoints can be detected and, with DLP policies, restricted. The roadmap item also says the integration will give Microsoft Purview Insider Risk Management activity signals, with alerts managed and investigated across Microsoft Purview and Microsoft Defender.

Microsoft Learn already documents a preview of the Azure Firewall side, "Configure network DLP with Azure Firewall and Microsoft Purview (preview)". It says Microsoft Purview classifies content and evaluates DLP policies, while Azure Firewall selects the traffic for inspection and applies the resulting policy decision. The roadmap description is wider than that page in two places: it names background services and automated workloads, and it names browsers, applications and APIs. Learn states that only traffic mapped to Microsoft Entra user IDs is inspected, and it describes HTTPS on port 443 with TLS inspection.

The roadmap record gives the status as In development, a preview date of November CY2026 and a General Availability target of March CY2027, for Worldwide (Standard Multi-Tenant) only. These are Microsoft's targets. Learn describes the preview in three Azure regions: East Asia, UK South and West Central US. During the preview, Learn says configuration is available only in the Azure portal.

## Why it matters

This is a way to apply the DLP policies you already write in Purview to server and VM traffic that leaves through Azure Firewall, not only to user devices and browsers. If your organisation runs workloads that send data to cloud, SaaS and AI destinations, this is the control the roadmap says will cover them.

Microsoft has not stated a default, and no source says existing behaviour changes, so treat this as a capability to evaluate rather than something that arrives and acts. The preview procedure in Learn is built around Alert only mode first, and the limits it lists (a user-mapping file, a 3 MB content size, fail-open on inspection errors) mean it should be piloted before anyone relies on it as a hard block.

## Risk assessment

**Data exposure**

- Learn says that if Microsoft Purview inspection cannot complete, for example when a payload exceeds the supported size or an internal error occurs, traffic is allowed (fail-open). The maximum supported content size is 3 MB for file and text content, so a larger transfer is allowed through this control.
- Learn says only traffic mapped to Microsoft Entra user IDs is inspected. Traffic from a source address with no entry in the mapping file is not inspected by this integration, and the roadmap's wording about background services and automated workloads does not say how such traffic gets a user context.
- Learn says the preview inspects HTTPS on port 443 with TLS inspection enabled on the rule, and that an allowed transfer alone does not show DLP evaluation happened. Validate each activity separately.

**Security & identity**

- The mapping file (source IP or CIDR range to Microsoft Entra user object ID) is read by a managed identity that needs the Storage Blob Data Contributor role on the container or storage account. Whoever can edit that file decides which user's Purview policy applies to a source address.
- Learn says the mapping supplies policy context and is not end-user authentication.
- The Purview tenant GUID and the DLP profile are entered in the firewall policy, so rights over the firewall policy and over the Purview DLP policy are both needed.

**Autonomy & actions**

- Enforcement needs two settings to agree: the Purview rule action set to Block and the DLP profile Mode set to Alert and deny. Learn says that in Alert only mode traffic is monitored without blocking, including when Microsoft Purview returns a deny decision.
- Enabling the add-on on an existing firewall requires downtime, according to Learn.

**Change & support**

- Azure Firewall processes network rules before application rules, so a matching network rule can stop traffic reaching the application rule that carries the DLP profile.
- Insider Risk Management signals and Microsoft Defender alert handling are in the roadmap description only; the Learn pages read do not describe them.

## Cost and licensing

Learn lists these prerequisites for the preview: Azure Firewall Premium with an AI Security add-on licence, with the add-on enabled on all firewalls associated with the policy, and a valid Microsoft Purview licence. Azure Firewall AI Security concepts says AI Security is licensed as an add-on to Azure Firewall Premium and points to the Azure Firewall pricing page for prices. The Learn pages read give no price for the add-on.

The Microsoft Purview network data security page gives licence combinations for Microsoft Entra Global Secure Access and for non-Microsoft SASE and secure browser solutions, and a pay-as-you-go request meter for the latter. It does not list Azure Firewall, so which Purview licence or meter applies to this integration is not yet published.

Indirect costs from the prerequisites: a storage location and managed identity for the mapping file, working TLS inspection with a trusted certificate authority, and downtime to enable the add-on on an existing firewall.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the only cloud and Web as the platform; the release phases are Preview and General Availability, with a preview date of November CY2026 and a target of March CY2027.

Learn's preview page describes: Azure Firewall Premium with the AI Security add-on in East Asia, UK South and West Central US; configuration in the Azure portal only; a mapping file of up to 50,000 rows; at most one profile of each type in a security profile group; and inspection of HTTPS on port 443 with TLS inspection. The mapped users must be in the intended Purview policy scope, and Learn says Purview needs permissions to manage the relevant DLP policies and access to configure the Azure Firewall policy and its application rules.

Learn's network data security page says Purview network data security policies do not apply to B2B guest users. That page describes the Purview feature in general and does not say this limit applies to the Azure Firewall integration specifically.

## Governance guidance

### Before rollout

- Confirm with the Azure network team which firewalls are Premium, which are in East Asia, UK South or West Central US, and which policies would carry the DLP profile.
- Decide who owns the source-IP-to-user mapping file, its storage location and the managed identity that reads it.
- Ask Microsoft account contacts for the Purview licence and meter that apply to this integration, and for the add-on price on the Azure Firewall pricing page, before budgeting.

### At rollout

- Create the Purview DLP policy with the Network and non-Microsoft secure browsers location and start with the Audit action and simulation, as Learn's procedure does.
- Create the security profile group with the DLP profile in Alert only mode and attach it to one application rule scoped to test traffic.
- Test each required activity with synthetic content and a benign control; Learn says one successful test does not establish coverage for all text and file transfers.

### After rollout

- Move to enforcement only after review: set the Purview rule action to Block, keep the rule On, activate the policy rather than leaving it in simulation or audit, and set the firewall profile Mode to Alert and deny, then repeat the tests.
- Re-test after any change to network rules, the mapping file or the Purview policy scope.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which destinations, activities and actions the Purview network DLP policy applies</strong><br><small>Tenant</small><br><small class="controls__note">The rule's Actions &gt; Restrict browser and network activities (Audit or Block) is set in the same wizard. Requires permissions to manage Purview DLP policies.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Inline web traffic › Custom › Custom policy › + Add cloud apps › Network and non-Microsoft secure browsers <a href="https://learn.microsoft.com/azure/firewall/configure-network-dlp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the firewall's DLP profile monitors or blocks (Disabled, Alert only, Alert and deny)</strong><br><small class="controls__note">Preview. Learn says Azure PowerShell, Azure CLI, Terraform and the REST API are not supported for this configuration yet. Alert only does not block even when Purview returns a deny.</small></td><td data-label="Admin UI"><strong>Azure portal</strong><br>firewall policy › Settings › Security Profile Groups (preview) › Create security profile group › Basics › Data loss prevention (preview) › Configure protections › Mode <a href="https://learn.microsoft.com/azure/firewall/configure-network-dlp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which firewall traffic is sent for DLP evaluation (application rule with the security profile group)</strong><br><small class="controls__note">Learn's steps use HTTPS:443 with TLS inspection enabled on the rule. Network rules are processed before application rules.</small></td><td data-label="Admin UI"><strong>Azure portal</strong><br>firewall policy › Rules › Application rules › rule › security profile group <a href="https://learn.microsoft.com/azure/firewall/configure-network-dlp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Enforcement depends on two controls in two admin portals, the Purview rule action and the firewall profile Mode, and Learn says both must be set for a transfer to be restricted. The application rule decides which traffic reaches the profile at all.

During the preview Learn says configuration is available only in the Azure portal, and that Azure PowerShell, Azure CLI, Terraform and the REST API are not supported for the AI Security configuration yet. The Purview policy side is a different platform: the New-DlpCompliancePolicy reference documents a -Locations string parameter, but no example or parameter named for this location, so no call is listed for the Purview row.

The rows for the firewall list the controls Learn describes; the path begins at the firewall policy because Learn's steps start with "Open the firewall policy in the Azure portal".

## Open questions

- What is the default state at general availability, and does any existing firewall or Purview policy start inspecting traffic without an administrator configuring it? Watch the roadmap item and the Azure Firewall AI Security Learn pages.
- Which Microsoft Purview licence or meter applies to Azure Firewall integration, given that the network data security page covers Global Secure Access and non-Microsoft SASE solutions but does not mention Azure Firewall?
- How will traffic from background services and automated workloads be given the Microsoft Entra user context that Learn says is needed for inspection?
- Which Insider Risk Management signals will the integration provide, and where will alerts appear in Microsoft Purview and Microsoft Defender? The Learn pages read describe neither.
- Will the preview limits (three regions, Azure portal only, HTTPS on port 443, 3 MB content size, fail-open) change by the roadmap's March CY2027 General Availability target?

<!-- rationale
risk: Medium. Learn describes a preview where traffic is inspected only if mapped to a Microsoft Entra user and TLS inspection works, and where inspection that cannot complete lets traffic through (fail-open). No source states what happens by default.
cost: Medium. Learn lists Azure Firewall Premium with the AI Security add-on plus a Microsoft Purview licence as prerequisites; the add-on's price is not given on the Learn pages and no Purview meter for this integration is stated.
impact: Low. Learn describes configuration by administrators in the Azure portal and Microsoft Purview portal; people notice only if a DLP rule set to Block and a firewall profile set to Alert and deny restrict a transfer.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Purview path reaches the Network and non-Microsoft secure browsers location in the policy wizard. | Found: Select + Add cloud apps and scope the destination applications. ... Enable the Network and non-Microsoft secure browsers enforcement location. ... Select Create or customize advanced DLP rules > + Create rule | Fix: The route is correct but stops before the activities and actions named by the row. Extend controls[0].ui.path and its rendered counterpart to 'Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > + Add cloud apps > Network and non-Microsoft secure browsers > Create or customize advanced DLP rules > + Create rule > Actions > Restrict browser and network activities', as documented at https://learn.microsoft.com/azure/firewall/configure-network-dlp. | Source: https://learn.microsoft.com/azure/firewall/configure-network-dlp
- [supported, minor] controls[1].ui; Governance controls table and closing prose / admin-path: The printed Azure portal path reaches the DLP profile Mode control after opening a firewall policy. | Found: Open the firewall policy in the Azure portal. ... Select Settings > Security Profile Groups (preview) > Create security profile group. ... On the Basics tab ... select Data loss prevention (preview). ... On the Configure protections tab ... For Mode, select Alert only. | Fix: Add the navigation to the policy list: set controls[1].ui.path and its rendered counterpart to 'Network security > Firewall Manager > Azure Firewall Policies > firewall policy > Settings > Security Profile Groups (preview) > Create security profile group > Basics > Data loss prevention (preview) > Configure protections > Mode'. Cite https://learn.microsoft.com/azure/firewall-manager/configure-ddos for the initial navigation alongside the existing source, and update the closing explanation that currently defends starting at the policy. | Source: https://learn.microsoft.com/azure/firewall/configure-network-dlp
- [supported, minor] controls[2].ui; Governance controls table and closing prose / admin-path: The printed Azure portal path reaches the security profile group selection on a firewall policy application rule. | Found: Select Rules > Application rules and edit the target rule. ... Select the security profile group that contains the DLP profile. | Fix: Add the navigation to the policy list: set controls[2].ui.path and its rendered counterpart to 'Network security > Firewall Manager > Azure Firewall Policies > firewall policy > Rules > Application rules > rule > security profile group'. Cite https://learn.microsoft.com/azure/firewall-manager/configure-ddos for the initial navigation alongside the existing source, and update the closing explanation that currently defends starting at the policy. | Source: https://learn.microsoft.com/azure/firewall/configure-network-dlp
-->
