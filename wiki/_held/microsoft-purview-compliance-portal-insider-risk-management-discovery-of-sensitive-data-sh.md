---
title: "Microsoft Purview Insider Risk Management: discover sensitive data shared to cloud apps and websites via the network layer"
slug: "microsoft-purview-compliance-portal-insider-risk-management-discovery-of-sensitive-data-sh"
roadmapId: 501539
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to let Insider Risk Management discover sensitive files and text sent to cloud apps and websites, including generative AI, through third-party network partners in GCC, GCC High and DoD. Opt-in; pay-as-you-go billing is needed."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says administrators need a supported Microsoft 365 subscription for Insider Risk Management and that the network indicator needs pay-as-you-go billing. For non-Microsoft SASE partners it names Purview E5 (or equivalent) per-seat licences plus pay-as-you-go."
audiences: ["security","compliance","finops","m365-admin"]
tags: ["insider-risk-management","network-data-security","purview","collection-policies","pay-as-you-go","role-groups","licensing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 501539"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501539"
    kind: "roadmap"
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Learn about Microsoft Purview Network Data Security"
    url: "https://learn.microsoft.com/purview/dlp-network-data-security-learn"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Create and deploy collection policies"
    url: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    kind: "learn"
  - title: "Enable Microsoft Purview pay-as-you-go features for new customers"
    url: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    kind: "learn"
  - title: "Manage pay-as-you-go and per-user licensing usage"
    url: "https://learn.microsoft.com/purview/purview-billing-usage"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Use reports in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-reports"
    kind: "learn"
  - title: "New-FeatureConfiguration"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
videos: []
related: ["insider-risk-management","microsoft-purview-data-loss-prevention-extend-purview-data-security-to-the-network-layer-v","microsoft-purview-insider-risk-management-pay-as-you-go-model-for-other-generative-ai-apps","microsoft-purview-compliance-portal-insider-risk-management-collection-policies-impact-on","microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-with-m"]
controls:
  - governs: "Whether IRM collects network indicators"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Settings > Policy indicators > Built-in indicators"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    api: null
    note: "Network indicators are described under built-in indicators. Learn says they need a collection policy and pay-as-you-go billing."
  - governs: "Which network activity a collection policy collects, and whether content is captured"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Classifiers > Collection policies > + Create policy"
      docs: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    api:
      kind: "powershell"
      call: "New-FeatureConfiguration -FeatureScenario KnowYourData -ScenarioConfig <JSON string>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration"
    note: "The cmdlet is in Public Preview, Security & Compliance PowerShell, and creates collection policies in general. Confirm how it expresses the network setting before scripting."
  - governs: "Which network partner is integrated with Purview"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Security Store"
      docs: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    api: null
    note: "Select Get solution for the partner, then follow that partner's steps. Partners can access some policy configuration, including user identifiers."
  - governs: "Whether pay-as-you-go billing is linked to an Azure subscription"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Account details"
      docs: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    api: null
    note: "Only a Global Administrator can enable pay-as-you-go. The enablement page is marked preview."
  - governs: "Pay-as-you-go usage by feature"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Usage center > Pay-as-you-go"
      docs: "https://learn.microsoft.com/purview/purview-billing-usage"
    api: null
    note: "Preview. Access is limited to the roles the page lists. Insider Risk Management is listed as not pausable."
  - governs: "Who can configure IRM policies and settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management\" -Member <user principal name>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The cmdlet adds members to a management role group; Identity takes the role group name. The Insider Risk Management Admins role group also has the configure permission."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-09-08T23:45:21"
changes:
  - date: "2026-11-25"
    note: "New briefing: Insider Risk Management network-layer discovery for GCC, GCC High and DoD, with the documented network indicator prerequisites, pay-as-you-go billing and controls."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 75 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 71
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "cdddf79ad1f4df251596b47d8234afbe"
---

## What's changing

The roadmap item (ID 501539) states that Microsoft Purview Insider Risk Management (IRM) will support the discovery of sensitive files and text shared to any cloud application or website, including generative AI, through the network layer. It says the capability is based on integration with third-party network partners, with the data captured at the network layer. The item adds that IRM correlates signals to identify insider risks such as IP theft, data leakage and security violations, and that users are pseudonymised by default, with role-based access controls and audit logs in place.

Microsoft Learn already describes network indicators in IRM. They "include HTTP and HTTPS network traffic from third party network security solutions", can identify sensitive items shared through those interactions, and need a collection policy (a Purview policy that decides what activity is collected) as a prerequisite. Learn's network data security page adds that the partner's product monitors traffic and sends it to Purview for classification, and that monitoring-only setups through collection policies communicate asynchronously. The Learn page carries no cloud qualification, while the roadmap item lists only GCC, GCC High and DoD, and the pages read do not say whether the documented indicators are available in those clouds. See the open questions.

The roadmap status is In development, the release phase is General Availability, the platform is Web, and the target is January CY2026. That target month has passed at the time of writing (November 2026), and the record shows no change of status; it was last modified on 8 September 2025. Dates are Microsoft's targets, not commitments.

## Why it matters

This puts a third party into the data path for insider risk monitoring. IRM would see what employees send to cloud apps and websites Microsoft 365 does not manage, but only through a network partner you choose and pay for. Expect three consequences: a new data flow to approve with your privacy and legal teams, a pay-as-you-go meter billed to an Azure subscription, and new alert content for IRM analysts.

If nobody acts, Learn's description is that nothing is collected: all global indicators are disabled by default, and network detection needs a collection policy and pay-as-you-go billing. The roadmap item itself does not state its default, so treat this as Learn's description of network indicators rather than a statement about this release in government clouds.

## Risk assessment

**Data exposure**
- Network indicators identify sensitive items shared through HTTP and HTTPS traffic, so IRM gains matches taken from employees' web activity. Learn says that if content capture is configured in a collection policy, the full conversation between the user and an AI app is captured and sent to Purview. Review that option before the collection policy goes live (collection policy row).
- If you integrate a non-Microsoft partner, Learn says it can access and possibly store some policy configuration, including user identifiers, under its own terms and privacy policy. Read those terms before choosing a partner (Security Store row).

**Security & identity**
- Learn lists "Configure policies and settings" as a permission of the Insider Risk Management and Insider Risk Management Admins role groups. Keep those groups small and check who holds them (role groups row).
- Learn says Purview network data security policies do not apply to B2B guest users, so guest traffic is not covered by those policies.

**Autonomy & actions**
- The roadmap item describes discovery. Learn says network data security DLP policies support Audit only and Block actions, which are set in DLP, not in IRM; this briefing does not assume either applies here.

**Change & support**
- Billing is a new dependency: a Global Administrator must link an Azure subscription before pay-as-you-go features work (pay-as-you-go row), and the Usage center lists Insider Risk Management as not pausable.
- Learn says to allow up to 24 hours for policies to reach the partner and for the first data to appear, so a new setup will look empty on day one.

## Cost and licensing

**Licence.** Learn's IRM setup page says administrators must verify that the organisation has a supported subscription and assign the appropriate licences, and points to Microsoft's subscription requirements. For network data security with non-Microsoft SASE (secure access service edge) and secure browser solutions, the network data security page names Purview E5 (or equivalent) per-seat licences and the pay-as-you-go billing model.

**Meter.** Learn says the network indicator needs pay-as-you-go billing enabled. Pay-as-you-go is a consumption model billed through an Azure subscription, with an Azure bill generated at the end of the month. The billing models page gives two published meters nearby: IRM processing units (one unit is the compute to process 10,000 user activities for IRM's non-Microsoft 365 indicators) and, for network data security with non-Microsoft integrations, the request (each network call from a device or browser to a website or API). Which of these bills IRM's network indicator is not yet published.

**Watching spend.** The Purview Usage center (preview) shows pay-as-you-go usage by feature and lists both Insider Risk Management and in-transit protection of data at the network layer as not pausable. IRM's Reports page has pay-as-you-go usage reports by default. Azure's Cost Management + Billing shows consumption. No rate for this item is quoted here; the billing models page points to Microsoft's Azure pricing page.

## Scope

The roadmap item lists the GCC, GCC High and DoD clouds, the Web platform and the General Availability phase. Learn's IRM setup page says IRM is available in tenants hosted in regions and countries supported by Azure service dependencies.

Prerequisites in Learn's description: a network partner integrated through the Security Store in Microsoft Purview Data Loss Prevention, a collection policy for network traffic, pay-as-you-go billing and the network indicator selected in IRM settings. Once the two services communicate, Learn says data about a request can take up to 30 minutes to appear in the audit log and activity explorer. Learn says network data security policies do not apply to B2B guest users.

Roles: Learn lists the Insider Risk Management Admin role group among those applicable to collection policies, and only a Global Administrator can enable pay-as-you-go.

## Governance guidance

### Before rollout
- Confirm in Message center and on the roadmap item that network indicators reach your government cloud, and when, before budgeting for them.
- Ask the privacy and legal teams to review the terms of any non-Microsoft network partner, because Learn says the partner can access some policy configuration, including user identifiers (Security Store row).
- Ask a Global Administrator to enable pay-as-you-go billing against an active Azure subscription and resource group (pay-as-you-go row).
- Check who is in the Insider Risk Management and Insider Risk Management Admins role groups and keep at least one member in the group you use (role groups row).

### At rollout
- Integrate the chosen partner through the Security Store (Security Store row).
- Create the collection policy for network traffic, scope it to the users you intend to monitor, and review its content capture option before turning it on (collection policy row).
- Select the network indicators in IRM's policy indicators settings (policy indicators row).

### After rollout
- Check pay-as-you-go consumption in the Usage center and in IRM's pay-as-you-go usage report during the first billing month (Usage center row).
- Allow up to 24 hours for first data, then review activity before tuning policies.
- Record that B2B guest users fall outside network data security policies, and cover them by other means if they matter to your risk model.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether IRM collects network indicators</strong><br><small>Tenant</small><br><small class="controls__note">Network indicators are described under built-in indicators. Learn says they need a collection policy and pay-as-you-go billing.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators › Built-in indicators <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which network activity a collection policy collects, and whether content is captured</strong><br><small>Tenant</small><br><small class="controls__note">The cmdlet is in Public Preview, Security &amp; Compliance PowerShell, and creates collection policies in general. Confirm how it expresses the network setting before scripting.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Classifiers › Collection policies › + Create policy <a href="https://learn.microsoft.com/purview/collection-policies-create-deploy-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-FeatureConfiguration -FeatureScenario KnowYourData -ScenarioConfig &lt;JSON string&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which network partner is integrated with Purview</strong><br><small>Tenant</small><br><small class="controls__note">Select Get solution for the partner, then follow that partner's steps. Partners can access some policy configuration, including user identifiers.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Security Store <a href="https://learn.microsoft.com/purview/collection-policies-create-deploy-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether pay-as-you-go billing is linked to an Azure subscription</strong><br><small>Tenant</small><br><small class="controls__note">Only a Global Administrator can enable pay-as-you-go. The enablement page is marked preview.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Account details <a href="https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go usage by feature</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Access is limited to the roles the page lists. Insider Risk Management is listed as not pausable.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Usage center › Pay-as-you-go <a href="https://learn.microsoft.com/purview/purview-billing-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can configure IRM policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">The cmdlet adds members to a management role group; Identity takes the role group name. The Insider Risk Management Admins role group also has the configure permission.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &lt;user principal name&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

A network indicator has three prerequisites in Learn: the indicator selected in IRM settings, a collection policy, and pay-as-you-go billing. Selecting the indicator on its own is not described as collecting anything. The IRM role groups that can configure policies and settings are separate from the Global Administrator role that pay-as-you-go enablement needs, and the Usage center is limited to the roles its page lists.

The pay-as-you-go enablement and Usage center pages are marked preview. The `New-FeatureConfiguration` cmdlet is in Public Preview and creates Purview collection policies in general; confirm how it expresses the network setting before scripting. Microsoft Learn documents no API for IRM policy indicators, the Security Store integration, pay-as-you-go enablement or the Usage center at the time of writing (November 2026).

## Open questions

- Do the network indicators described on Learn apply in GCC, GCC High and DoD, and from when? The roadmap target (January CY2026) has passed with the status still In development. Watch the roadmap item and Message center.
- Which meter bills IRM's network indicator: IRM processing units, network data security requests, or both? Watch the billing models page.
- Is pay-as-you-go billing, which the network indicator needs, available to tenants in your government cloud? Watch the billing models and enablement pages.
- Which third-party network partners will be supported in government clouds? Watch the Security Store in Purview Data Loss Prevention.
- Does the network indicator use a collection policy's content capture, and are captured conversations visible to IRM analysts? Watch the policy indicators page.

<!-- rationale
risk: Medium. Opt-in, but once set up it feeds sensitive-content matches from employees' network traffic into Insider Risk Management, and Learn says a non-Microsoft partner can access some policy configuration, including user identifiers.
cost: Variable. Learn says the network indicator needs pay-as-you-go billing, an Azure-billed consumption model, on top of Insider Risk Management's per-user subscription; which meter bills this indicator is not yet published.
impact: Low. It adds signals for compliance administrators and Insider Risk Management analysts; the roadmap item describes no change to what end users see.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Governance guidance: At rollout / behaviour: Configuring content capture in a collection policy captures the full user-AI conversation, without any further configuration qualification. | Found: To capture AI content, you must set the Content contains classifiers condition to All. This capability doesn't include content in files shared with generative AI | Fix: Replace the capture sentence with: 'If content capture is enabled and Content contains classifiers is set to All, detected AI prompts and responses are captured and sent to Purview; this does not include content in files shared with generative AI.' Cite https://learn.microsoft.com/purview/collection-policies-policy-reference. | Source: https://learn.microsoft.com/purview/collection-policies-policy-reference
- [unsupported, major] Risk assessment: Change & support / behaviour: A new network setup will look empty on day one. | Found: Searched: 'Purview network data security first data appear 24 hours minimum delay collection policies'; opened network data security and read timing results. The network page gives an up-to-24-hour allowance, not a mandatory empty first day. | Fix: Replace 'so a new setup will look empty on day one' with 'so first data may take up to 24 hours to appear'.
- [contradicted, blocker] Cost and licensing: Meter; Open questions; rationale: cost / absence: Which meter bills the IRM network indicator is not yet published. | Found: Insider risk management is a pay-as-you-go feature that uses a processing unit based meter. It includes pay-as-you-go indicators. ... Microsoft Purview network data security pay-as-you-go uses requests as its unit of measure. | Fix: Replace the absence with: 'Microsoft documents request-based billing for network data security with non-Microsoft integrations and processing-unit billing for IRM pay-as-you-go indicators. It does not explicitly describe whether network indicators incur additional IRM processing charges on top of network requests.' Use that narrower additional-charge question in Open questions and the cost rationale, retaining the published meter descriptions and citing https://learn.microsoft.com/purview/purview-billing-models and https://learn.microsoft.com/purview/dlp-network-data-security-learn. | Source: https://learn.microsoft.com/purview/purview-billing-models
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The network indicator is reached through Microsoft Purview portal > Insider Risk Management > Settings > Policy indicators > Built-in indicators. | Found: In the Microsoft Purview portal, go to Insider Risk Management > Settings > Policy indicators. Policy indicators are organized into two tabs: Built-in indicators | Fix: Append the documented Network indicators section to the path: 'Insider Risk Management > Settings > Policy indicators > Built-in indicators > Network indicators'. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Collection-policy creation starts at Data loss prevention > Classifiers > Collection policies > + Create policy. | Found: Open the Data loss prevention solution and navigate to Classifiers > Collection policies. Select + Create policy. | Fix: Keep the documented entry path but add to the row note: 'This opens the creation wizard; configure conditions, activities and data sources, choose content capture, enable Network and non-Microsoft secure browsers, then select Turn on.' | Source: https://learn.microsoft.com/purview/collection-policies-create-deploy-policy
- [supported, minor] controls[2].ui; controls[2].note; Governance controls table / admin-path: Network-partner integration is available through Data Loss Prevention > Security Store. | Found: open the Data Loss Prevention solution and choose Security Store in the left navigation bar. Select Get solution for the SASE or non-Microsoft secure browser solution provider you want to integrate with. | Fix: Extend controls[2].ui.path to 'Data Loss Prevention > Security Store > Get solution'. Keep the note that subsequent steps depend on the selected provider. | Source: https://learn.microsoft.com/purview/collection-policies-create-deploy-policy
- [supported, minor] controls[3].ui; Governance controls table / admin-path: Pay-as-you-go enablement is reached through Settings > Account details. | Found: This can also be done from Settings > Account details. Select your active Azure subscription from the list. Select the resource group. | Fix: Extend controls[3].ui.path to 'Settings > Account details > active Azure subscription > resource group', retaining the preview and Global Administrator notes. | Source: https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Network data security DLP supports Audit only and Block actions. | Found: Network data security supports Audit only and Block actions. ... The activities and actions supported may differ depending on integrated solution. | Fix: Add to the DLP-actions sentence: 'Supported activities and actions may differ by integrated solution; check with the solution provider.' Keep the existing statement that these DLP actions are not assumed to apply to this IRM release. | Source: https://learn.microsoft.com/purview/dlp-network-data-security-learn
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist tells readers to check IRM's pay-as-you-go report but points to a row containing only Usage center. | Found: Check pay-as-you-go consumption in the Usage center and in IRM's pay-as-you-go usage report ... (Usage center row). The row's path is Usage center > Pay-as-you-go. | Fix: Remove 'and in IRM's pay-as-you-go usage report' from the After rollout checklist bullet so it directs readers only to the existing Usage center row. Keep the supported report description in Cost and licensing.
-->
