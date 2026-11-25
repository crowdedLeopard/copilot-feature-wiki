---
title: "Microsoft Purview: protect data sent to unmanaged cloud apps through Palo Alto Prisma Access"
slug: "microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-with-m"
roadmapId: 558939
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview network data security is adding a Palo Alto Prisma Access integration so collection and DLP policies can cover its web traffic. Off until an admin enables it; needs pay-as-you-go billing. General availability targeted June 2027."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2027"
previewDate: "April CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn requires Purview E5 (or equivalent) per-seat licences and Purview pay-as-you-go billing for network data security with non-Microsoft SASE and secure browser solutions. MC1257999 repeats the pay-as-you-go requirement. A rate specific to this integration is not yet published."
audiences: ["security","compliance","finops","m365-admin"]
tags: ["purview","dlp","dspm","pay-as-you-go","sensitivity-labels","sensitive-information-types","network-data-security","insider-risk-management","palo-alto-prisma-access"]
sources:
  - title: "Microsoft 365 Roadmap 558939"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558939"
    kind: "roadmap"
  - title: "MC1257999: Microsoft Purview DLP: Unmanaged cloud app discovery and protection with Microsoft Purview and Palo Alto Prisma Access"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1257999"
    kind: "message-center"
  - title: "Learn about Microsoft Purview Network Data Security"
    url: "https://learn.microsoft.com/purview/dlp-network-data-security-learn"
    kind: "learn"
  - title: "Use Network Data Security to help prevent sharing sensitive information with unmanaged AI"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    kind: "learn"
  - title: "Create and deploy collection policies"
    url: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-extend-purview-data-security-to-the-network-layer-v","microsoft-purview-data-loss-prevention-data-security-for-non-microsoft-connected-apps","sensitivity-labels","microsoft-purview-dspm-copilot-readiness-and-data-explorer"]
controls:
  - governs: "Whether the Prisma Access integration is enabled"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Security Store > Get solution"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    api: null
    note: "General Security Store steps from Learn; MC1257999 says the integration is not enabled by default and is enabled here. Prisma Access-specific steps follow the provider's documentation."
  - governs: "Creation of network DLP policies"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > Choose where to enforce the policy > Network and non-Microsoft secure browsers"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <policy name> -EnforcementPlanes @(\"Network\")"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "General network DLP policy creation, not Prisma Access-specific. Security & Compliance PowerShell; creates the policy container, not rules or Audit only/Block. Some features in the cited scenario are in preview."
  - governs: "What network data is collected for discovery, without enforcement"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Classifiers > Collection policies > + Create policy > + Add condition > Content contains > Classifiers > Edit > + Add activities > + Add data source > Unmanaged cloud apps > Network and non-Microsoft secure browsers"
      docs: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    api: null
    note: "Classifier, activity, app and group choices are completed in that wizard. The page lists the DLP Compliance Management role."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-19"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-17"
    note: "New briefing. MC1257999 (updated 2 November 2026) moved general availability to June 2027; the integration is off by default and needs pay-as-you-go."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 73 statements not yet confirmed"
  - date: "2026-11-19"
    note: "New briefing for the Island integration; MC1249424 (updated 18 September 2026) moved general availability to June 2027, and the integration is off by default and needs pay-as-you-go."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 66 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: row 2 now describes New-DlpCompliancePolicy as creating network DLP policies, not setting audit or block rules; the first change note should read 'MC1249424 (updated 18 September 2026) moved general availability to June 2027', not MC1257999."
  - date: "2026-11-19"
    note: "Rewritten for the Palo Alto Prisma Access integration (the previous page described a different roadmap item); MC1257999 (updated 2 November 2026) moved general availability to June 2027, and the integration is off by default and needs pay-as-you-go."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 79 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 81 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 81
  confirmed: 80
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "00b182df9a6b47c4355059363e3378d3"
---

## What's changing

Microsoft Purview network data security is adding an integration with Palo Alto Prisma Access. The roadmap item says new and existing Prisma Access customers will be able to use Purview collection policies (to discover sensitive data) and data loss prevention (DLP) policies (to protect it) for data shared with unmanaged cloud apps over HTTP and HTTPS, with the same classifiers, sensitive information types and sensitivity labels used in other Purview policies. It adds that the integration also feeds Data Security Posture Management (DSPM), Insider Risk Management (IRM) and data security and compliance for AI interactions.

Microsoft's notice MC1257999 says the integration appears in the Purview DLP Security Store as the feature rolls out, is not enabled by default and must be enabled by an administrator before policies can use it. It also says existing network data security collection and DLP policies apply automatically once the integration is enabled.

Learn describes the general mechanism: the integrated solution monitors network traffic and sends it to Purview for classification and policy evaluation, in real time when DLP policies protect the traffic and asynchronously when only collection policies are used. At the time of writing (November 2026) the Learn pages for network data security refer to non-Microsoft SASE and secure browser solutions and to the Security Store for the list of integrations, without a page of their own for Prisma Access. What follows about Prisma Access specifically is therefore the roadmap's and the notice's description.

The roadmap record lists the item as In development, with a preview date of April CY2026 and a target date of June CY2027, for Worldwide (Standard Multi-Tenant) and the Web platform. MC1257999 (updated 2 November 2026) says public preview rollout began in mid-April 2026 with completion expected by mid-May 2026, and moved general availability to begin and complete in June 2027 (previously late October 2026 and late November 2026).

## Why it matters

If your organisation runs Palo Alto Prisma Access, this is a route to apply the Purview classifiers and labels you already maintain to what users send to unmanaged AI, storage, webmail and social apps, and to feed that signal into DSPM and Insider Risk Management, without rebuilding the rules in a second tool.

If nobody acts, MC1257999 says there is no impact on users, because the integration is not enabled by default. The decisions fall to the Purview and security teams: whether to enable it, whether to audit or block, and who owns the per-request pay-as-you-go charges. With general availability targeted for June 2027, the practical task now is to settle billing ownership and policy design, not to react to an imminent change.

## Risk assessment

**Data exposure**

- Once enabled, traffic that Prisma Access handles can be evaluated by Purview policies; MC1257999 says network traffic inspected by Palo Alto Prisma Access can be evaluated by Purview DLP policies after an administrator enables the integration. Scope policies to the groups and apps you intend to inspect.
- Learn says Purview evaluates up to 4 MB of content for uploadText and downloadText, and files up to 3 MB for uploadFile and downloadFile, so do not assume full coverage of larger content.

**Security & identity**

- Learn says that if you integrate with non-Microsoft partners, they can access and possibly store some policy configuration, including user identifiers, under their own terms, conditions and privacy policy. Review Palo Alto Networks' terms before enabling.
- Learn says Purview network data security policies do not apply to B2B guest users, so guest traffic is outside these policies.
- Learn says a policy that targets an unmanaged app can capture both the consumer and enterprise versions of an app when the app's URL is shared across instances.

**Autonomy & actions**

- Learn says network data security supports Audit only and Block actions, and that supported activities and actions may differ by integrated solution. Confirm with Palo Alto Networks which each supports, and start with Audit only before using Block.

**Change & support**

- Learn says to allow up to 24 hours for policies to be distributed to the integrated solution and for the first data to show up, so a test policy may not show results immediately.
- Pay-as-you-go billing is a prerequisite per MC1257999, so enabling the integration is a billing decision as well as a Purview setting.

## Cost and licensing

Learn's network data security page says that network data security with non-Microsoft SASE and secure browser solutions requires Purview E5 (or equivalent) per-seat licences and the Microsoft Purview pay-as-you-go billing model, and that pay-as-you-go must be configured for the Microsoft 365 tenant. MC1257999 states the same pay-as-you-go requirement for this integration.

The meter is the request. Learn defines a request as each network call made from a device or browser to a website or API, not counting responses, and the Purview billing models page says network data security counts requests outbound from the device. That page also says pay-as-you-go is Azure based, so the tenant must be associated with an active Azure subscription, and that an Azure bill is generated at the end of the month. Request volume follows how much Prisma Access traffic your policies send to Purview; the billing models page links to Microsoft's pay-as-you-go pricing for the rate, which is not quoted here.

A rate specific to the Prisma Access integration is not yet published, and the Microsoft pages read name no licence for Prisma Access itself; that licensing is Palo Alto Networks' and is not described here.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) and the Web platform, with release phases General Availability and Preview. MC1257999 says the change affects organisations using Microsoft Purview, customers using or planning to use Palo Alto Prisma Access, and Microsoft 365 administrators who manage Purview collection and DLP policies.

Learn's prerequisites for a non-Microsoft SASE or secure enterprise browser provider are pay-as-you-go billing and completion of the integration steps in the provider's documentation. Learn lists the supported activities as text sent, file uploaded, text received and file downloaded, says all network data security integrations classify HTTP and HTTPS traffic, and says WebSocket support may differ by integrated solution. The collection policy page lists DLP Compliance Management as an applicable role. Purview network data security policies do not apply to B2B guest users.

## Governance guidance

### Before rollout

- Agree who owns the Azure bill for per-request pay-as-you-go charges, because MC1257999 and Learn both say pay-as-you-go is required for this kind of integration.
- Review your existing network data security collection and DLP policies (rows 2 and 3 of the controls table), because MC1257999 says they apply automatically once the integration is enabled.
- Read Palo Alto Networks' documentation and terms, because Learn says non-Microsoft partners can access and possibly store some policy configuration, including user identifiers.
- Tell the data security and compliance administrators who will see network alerts about the Security Store entry MC1257999 says will appear.

### At rollout

- Enable the Prisma Access integration from the Purview DLP Security Store only when you are ready to use it (row 1), as MC1257999 describes.
- Start with a collection policy or an Audit only DLP rule scoped to a pilot group before using Block (rows 2 and 3).
- Turn on Network and non-Microsoft secure browsers as the enforcement location on the policy, as Learn's scenarios do.

### After rollout

- Wait up to 24 hours before judging a test policy, because Learn allows that long for policies to be distributed and for the first data to show up.
- Confirm with Palo Alto Networks which activities and actions the integration supports before moving a rule from Audit only to Block.
- Re-check Message center and the roadmap item for the general availability date, which MC1257999 moved to June 2027.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Prisma Access integration is enabled</strong><br><small>Tenant</small><br><small class="controls__note">General Security Store steps from Learn; MC1257999 says the integration is not enabled by default and is enabled here. Prisma Access-specific steps follow the provider's documentation.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Security Store › Get solution <a href="https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creation of network DLP policies</strong><br><small>Tenant</small><br><small class="controls__note">General network DLP policy creation, not Prisma Access-specific. Security &amp; Compliance PowerShell; creates the policy container, not rules or Audit only/Block. Some features in the cited scenario are in preview.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Inline web traffic › Custom › Custom policy › Choose where to enforce the policy › Network and non-Microsoft secure browsers <a href="https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;policy name&gt; -EnforcementPlanes @(&quot;Network&quot;)</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>What network data is collected for discovery, without enforcement</strong><br><small>Tenant</small><br><small class="controls__note">Classifier, activity, app and group choices are completed in that wizard. The page lists the DLP Compliance Management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Classifiers › Collection policies › + Create policy › + Add condition › Content contains › Classifiers › Edit › + Add activities › + Add data source › Unmanaged cloud apps › Network and non-Microsoft secure browsers <a href="https://learn.microsoft.com/purview/collection-policies-create-deploy-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The rows are Purview's general network data security controls. The Learn pages read give no Prisma Access-specific steps for them; they say to complete the setup steps your integrated provider supplies, so follow Palo Alto Networks' documentation for the provider side. MC1257999 says the integration is enabled from the Security Store.

The collection policy page lists DLP Compliance Management as an applicable role. New-DlpCompliancePolicy creates the DLP policy container; rules and the Audit only or Block choice are set separately. Learn says some features used in the DLP policy scenario are in preview.

## Open questions

- When will the Prisma Access integration reach general availability? MC1257999 and the roadmap target June 2027 (CY2027); watch Message center and the roadmap item.
- Which activities, actions and protocols does Prisma Access support? Learn says supported activities, actions and WebSocket support differ by solution and tells administrators to check with the provider.
- What is the per-request pay-as-you-go cost at your expected Prisma Access traffic volume, and can that spend be capped? Check Microsoft's pay-as-you-go pricing linked from the Purview billing models page.
- Is there documented automation for enabling the Security Store integration or creating network collection policies? Microsoft Learn documents none at the time of writing (November 2026); watch the network data security page.

<!-- rationale
risk: Low. Microsoft's notice MC1257999 says the integration is not enabled by default and has no user impact until an administrator enables it and configures policies; Learn warns that non-Microsoft partners can access some policy configuration once integrated.
cost: Variable. Learn bills network data security per request under Purview pay-as-you-go, on top of Purview E5 (or equivalent) per-seat licences, for non-Microsoft SASE and secure browser solutions; MC1257999 says pay-as-you-go is required for this integration.
impact: Low. Per MC1257999 users are not affected unless administrators enable the integration and configure network data security policies; Purview, security and finance owners are the ones who notice first.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / cost: The Learn request definition excludes responses. | Found: This definition doesn't include the responses to the requests. | Fix: After the request-definition sentence add: 'The Azure Purview pricing FAQ uses a broader definition: it counts an AI prompt and response as two requests; confirm the applicable billing definition when estimating costs.' Cite https://azure.microsoft.com/pricing/details/purview/, whose FAQ says 'a prompt is considered a request, as is a response from the AI app (2 total)'. | Source: https://learn.microsoft.com/purview/dlp-network-data-security-learn
- [supported, minor] controls[1].ui / admin-path: The network DLP policy route uses the documented Inline web traffic and Custom policy choices and reaches Network and non-Microsoft secure browsers. | Found: Select Inline web traffic. Select Custom from the Categories list and then select Custom policy from the Regulations list. ... On the Choose where to enforce the policy page, ensure Network and non-Microsoft secure browsers is On | Fix: Expand controls[1].ui.path and its rendered copy to 'Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > + Add cloud apps > Adaptive app scopes > All unmanaged AI apps > Edit scope > Include only specific > + Add inclusions > Specific users and groups > group > Choose where to enforce the policy > Network and non-Microsoft secure browsers'. The omitted intermediate choices select the apps and users the policy applies to; the printed steps are in the documented order. | Source: https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security
- [supported, minor] controls[2].ui / admin-path: The collection-policy route uses documented labels in order and reaches network detection, while abbreviating classifier and target selections. | Found: Open the Data loss prevention solution and navigate to Classifiers > Collection policies. ... Select Classifiers and then Edit. ... Select + Add activities. ... Select the Unmanaged cloud apps tab. ... Ensure Network and non-Microsoft secure browsers is enabled | Fix: Expand controls[2].ui.path and its rendered copy to 'Data loss prevention > Classifiers > Collection policies > + Create policy > + Add condition > Content contains > Classifiers > Edit > Scope for classifiers > Exclude classifiers > + Exclude classifiers > Choose Classifiers > classifiers > + Add activities > activities > + Add data source > Unmanaged cloud apps > apps > Edit scope > Include only specific > Included > + Add inclusions > group > Don't capture content > Network and non-Microsoft secure browsers'. This spells out the cited scenario's classifier and policy-target selections and default content-capture choice. | Source: https://learn.microsoft.com/purview/collection-policies-create-deploy-policy
- [supported, minor] controls[0].scope; controls[1].scope; controls[2].scope / applicability: The integration and network policies are tenant-level controls, with policy targeting available for selected users. | Found: Administrators can configure collection policies that apply to all or selected users within the tenant. ... Administrators can configure DLP policies that apply to all or selected users within the tenant. | Fix: Add https://learn.microsoft.com/graph/security-datasecurityandgovernance-overview to sources for the tenant-level policy scope. Tenant integration enablement is also supported by the supplied notice's tenant billing prerequisite. | Source: https://learn.microsoft.com/graph/security-datasecurityandgovernance-overview
- [contradicted, minor] Governance guidance: At rollout; controls[1].note / consistency: The Audit only or Block pilot instruction points to rows 2 and 3, although those rows document creation and collection rather than rule-action configuration. | Found: Start with a collection policy or an Audit only DLP rule scoped to a pilot group before using Block (rows 2 and 3). ... creates the policy container, not rules or Audit only/Block. | Fix: Replace '(rows 2 and 3)' in that checklist item with '(row 3 for collection-policy creation; Audit only/Block rule configuration is not shown in this table)'. The rule-action checklist control has no corresponding table row; do not add a new row as part of this correction.
-->
