---
title: "Microsoft Purview: protect data sent to unmanaged cloud apps through the Island Enterprise Browser"
slug: "microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-558437"
roadmapId: 558437
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview network data security is adding an Island Enterprise Browser integration so collection and DLP policies can cover browser traffic to unmanaged cloud apps. Off until an admin enables it; needs pay-as-you-go. GA targeted June 2027."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2027"
previewDate: "March CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn lists Purview E5 (or equivalent) per-seat licences and Purview pay-as-you-go billing for network data security with non-Microsoft secure browser solutions; MC1249424 repeats the pay-as-you-go requirement. A licence or charge specific to the Island integration is not yet published."
audiences: ["security","compliance","finops","m365-admin"]
tags: ["purview","dlp","dspm","pay-as-you-go","sensitivity-labels","sensitive-information-types","network-data-security","insider-risk-management","island-enterprise-browser"]
sources:
  - title: "Microsoft 365 Roadmap 558437"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558437"
    kind: "roadmap"
  - title: "MC1249424: (Updated) Microsoft Purview DLP: Unmanaged cloud app protection with Microsoft Purview and the Island Enterprise Browser"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1249424"
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
  - title: "Enable Microsoft Purview pay-as-you-go features for new customers"
    url: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    kind: "learn"
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
  - title: "New-FeatureConfiguration"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration"
    kind: "learn"
  - title: "Export-ActivityExplorerData"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/export-activityexplorerdata"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-with-m","microsoft-purview-data-loss-prevention-extend-purview-data-security-to-the-network-layer-v","microsoft-purview-data-loss-prevention-data-security-for-non-microsoft-connected-apps","sensitivity-labels","microsoft-purview-dspm-copilot-readiness-and-data-explorer"]
controls:
  - governs: "Whether the Island integration is enabled for network data security"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Security Store > Get solution"
      docs: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    api: null
    note: "General Security Store steps from Learn; MC1249424 says the integration is enabled from the Security Store. Island-specific steps follow Island's documentation."
  - governs: "Network DLP policies that audit or block data sent to unmanaged cloud apps"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > Choose where to enforce the policy > Network and non-Microsoft secure browsers"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <String> -EnforcementPlanes <MultiValuedProperty>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Security & Compliance PowerShell; creates the policy container, not its rules or Audit only/Block. The reference read lists no value for network policies. Some features in the Learn scenario are in preview."
  - governs: "What network activity is collected for discovery, without enforcement"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Classifiers > Collection policies > + Create policy > + Add condition > Content contains > Classifiers > Edit > + Add activities > + Add data source > Unmanaged cloud apps > Network and non-Microsoft secure browsers"
      docs: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    api:
      kind: "powershell"
      call: "New-FeatureConfiguration -Name <String> -FeatureScenario KnowYourData -Mode Enable -ScenarioConfig <JSON>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration"
    note: "The cmdlet is in Public Preview and not available in all organisations; its Learn example uses the CopilotExperiences and Browser planes, so a network example is not shown. Learn lists the DLP Compliance Management role."
  - governs: "Pay-as-you-go billing that the integration requires"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Account details"
      docs: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    api: null
    note: "Only a Global Administrator can enable pay-as-you-go; the page marks the feature as in preview. It can also be started from the rocket icon, then Get Started."
  - governs: "Where Island-sourced network matches are viewed and exported"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Explorers > Activity explorer > + Add filter > Enforcement plane > Network"
      docs: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    api:
      kind: "powershell"
      call: "Export-ActivityExplorerData -StartTime <DateTime> -EndTime <DateTime> -OutputFormat <String>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/export-activityexplorerdata"
    note: "Reporting, not enforcement. The cmdlet reference says Activity explorer reports on up to 30 days of data."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-09-21T23:04:49"
changes:
  - date: "2026-11-19"
    note: "New briefing for the Island integration; MC1249424 (updated 18 September 2026) moved general availability to June 2027, and the integration is off by default and needs pay-as-you-go."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 70
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "821ec9ed5aebcbca445aceccdafcebfa"
---

## What's changing

Microsoft Purview network data security is adding an integration with Island. The roadmap item says new and existing Island customers will be able to configure Purview collection policies (which discover sensitive data) and data loss prevention (DLP) policies (which protect it) for data shared with unmanaged cloud apps through the Island Enterprise Browser, the Island Extension and browser add-ins, over HTTP and HTTPS. The policies use the same classifiers, sensitive information types and sensitivity labels as other Purview policies. The roadmap adds that Island provides visibility and control at the presentation layer, including typed and pasted input, file transfers and extension activity, and that the integration also enriches Data Security Posture Management (DSPM), the Insider Risk Management (IRM) risk score and data security for AI interactions.

Microsoft's notice MC1249424 says the integration will appear in the Purview DLP Security Store as the feature rolls out, is not enabled by default and must be explicitly enabled by an administrator before it can be used in policies. It also says existing network data security collection and DLP policies will apply automatically if the integration is enabled.

Learn describes the general mechanism: the integrated solution monitors traffic and sends it to Purview for classification and policy evaluation, in real time when DLP policies protect the traffic and asynchronously when only collection policies are used. Learn tells administrators to find non-Microsoft SASE and secure browser solutions in the Security Store. At the time of writing (November 2026) Microsoft Learn has no page for the Island integration, so what follows about Island itself is the roadmap's and the notice's description.

The roadmap record lists the item as In development, with a preview date of March CY2026 and a target date of June CY2027, for Worldwide (Standard Multi-Tenant) and the Web platform. MC1249424 (updated 18 September 2026) says public preview rollout begins in late March 2026 and is expected to complete by late April 2026, and that general availability now begins in June 2027 (previously late June 2026) and completes in June 2027 (previously late July 2026). Microsoft lists a separate roadmap item, 558939, for the equivalent Palo Alto Prisma Access integration (see [that page](/features/microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-with-m/)); this page covers the Island item only.

## Why it matters

If your organisation uses the Island Enterprise Browser, this is a route to apply the Purview classifiers and labels you already maintain to what users type, paste or upload to unmanaged AI, storage, webmail and social apps, and to feed that signal into DSPM and Insider Risk Management, without rebuilding the rules in a second tool.

If nobody acts, MC1249424 says there is no impact on users, because the integration is not enabled by default. The decisions fall to the Purview, security and billing owners: whether to enable it, whether to audit or block, and who owns the per-request pay-as-you-go charges. With general availability targeted for June 2027, the practical task now is to settle billing ownership and policy design, not to react to an imminent change.

## Risk assessment

**Data exposure**

- Once enabled, Island-managed browser activity is evaluated by Purview policies. MC1249424's compliance table says browser-based activity metadata and inspection results may be processed as part of Purview network data security. Learn says that if a collection policy configures content capture, the full conversation between the user and an AI app is captured and sent to Purview, so leave content capture off unless you need it.
- Learn says Purview evaluates up to 4 MB of content for uploadText and downloadText, and files up to 3 MB for uploadFile and downloadFile, so do not assume coverage of larger content.
- Learn says a policy targeting an unmanaged app can capture both consumer and enterprise versions of an app when the app's URL is shared across instances, so check scoping before blocking.

**Security & identity**

- Learn says that if you integrate with non-Microsoft partners, they can access and possibly store some policy configuration, including user identifiers, under their own terms, conditions and privacy policy. Review Island's terms before enabling.
- Learn says Purview network data security policies do not apply to B2B guest users, so guest activity is outside these policies.

**Autonomy & actions**

- Learn says network data security supports Audit only and Block actions, and that the activities and actions supported may differ by integrated solution. Confirm with Island which it supports, and start with Audit only before using Block, because a block interrupts what users are typing, pasting or uploading.

**Change & support**

- Learn says to allow up to 24 hours for policies to reach the integrated solution and for the first data to show up, so a test policy may not show results immediately.
- Pay-as-you-go billing is a prerequisite per MC1249424, so enabling the integration is a billing decision as well as a Purview setting.

## Cost and licensing

Learn's network data security page says network data security with non-Microsoft SASE and secure browser solutions requires Purview E5 (or equivalent) per-seat licences and the Microsoft Purview pay-as-you-go billing model, and that pay-as-you-go must be configured for the Microsoft 365 tenant. MC1249424 asks administrators to confirm that Purview pay-as-you-go is enabled and configured, as it is required to use this integration.

The meter is the request. Learn defines a request as each network call made from a device or browser to a website or API, not counting the responses, and the billing models page says network data security only counts requests that are outbound from the device. Learn says an Azure bill is generated at the end of the month for the total pay-as-you-go charges across all Microsoft solutions, and that the Purview portal has a Usage center for usage. Enabling pay-as-you-go needs a Global Administrator and an active Azure subscription and resource group, and the enablement page is marked as in preview.

A licence or charge specific to the Island integration is not yet published on Microsoft's pages.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. MC1249424 names organisations using Microsoft Purview, customers using or planning to use the Island Enterprise Browser, Island Extension or supported browser add-ins, and the administrators who manage Purview collection and DLP policies.

Learn lists these prerequisites for a non-Microsoft secure browser provider: Purview pay-as-you-go billing configured, and the integration steps in the provider's documentation completed. Policies can be scoped to groups; Learn says they do not apply to B2B guest users. Learn's collection policy page lists the DLP Compliance Management role as an applicable role for collection policies.

## Governance guidance

### Before rollout

- Confirm Purview pay-as-you-go billing is configured for the tenant; a Global Administrator enables it, and the Azure subscription must be active.
- Check that the tenant holds Purview E5 (or equivalent) per-seat licences, which Learn lists for network data security with non-Microsoft secure browser solutions.
- Review your existing collection and DLP policies to find where network-based inspection is appropriate, as MC1249424 asks.
- Ask Island which activities, actions and protocols it supports and what policy configuration it receives, because Learn says these differ by integrated solution.

### At rollout

- Enable the Island integration from the Security Store in the Purview DLP solution only when billing and policy design are settled; MC1249424 says it is off until an administrator enables it.
- Create a collection policy first, with the network option on, to see what Island traffic matches before any enforcement.
- Create the network DLP policy with the Audit only action before switching to Block, and scope it to the groups you intend to cover.

### After rollout

- Filter Activity explorer by the Network enforcement plane to confirm matches appear, allowing up to 24 hours for the first data.
- Export activity records with PowerShell where you need them outside the portal, and compare request volumes against the pay-as-you-go charges on your Azure bill.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Island integration is enabled for network data security</strong><br><small>Tenant</small><br><small class="controls__note">General Security Store steps from Learn; MC1249424 says the integration is enabled from the Security Store. Island-specific steps follow Island's documentation.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Security Store › Get solution <a href="https://learn.microsoft.com/purview/collection-policies-create-deploy-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Network DLP policies that audit or block data sent to unmanaged cloud apps</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell; creates the policy container, not its rules or Audit only/Block. The reference read lists no value for network policies. Some features in the Learn scenario are in preview.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Inline web traffic › Custom › Custom policy › Choose where to enforce the policy › Network and non-Microsoft secure browsers <a href="https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;String&gt; -EnforcementPlanes &lt;MultiValuedProperty&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>What network activity is collected for discovery, without enforcement</strong><br><small>Tenant</small><br><small class="controls__note">The cmdlet is in Public Preview and not available in all organisations; its Learn example uses the CopilotExperiences and Browser planes, so a network example is not shown. Learn lists the DLP Compliance Management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Classifiers › Collection policies › + Create policy › + Add condition › Content contains › Classifiers › Edit › + Add activities › + Add data source › Unmanaged cloud apps › Network and non-Microsoft secure browsers <a href="https://learn.microsoft.com/purview/collection-policies-create-deploy-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-FeatureConfiguration -Name &lt;String&gt; -FeatureScenario KnowYourData -Mode Enable -ScenarioConfig &lt;JSON&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-featureconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go billing that the integration requires</strong><br><small>Tenant</small><br><small class="controls__note">Only a Global Administrator can enable pay-as-you-go; the page marks the feature as in preview. It can also be started from the rocket icon, then Get Started.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Account details <a href="https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Where Island-sourced network matches are viewed and exported</strong><br><small>Tenant</small><br><small class="controls__note">Reporting, not enforcement. The cmdlet reference says Activity explorer reports on up to 30 days of data.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Explorers › Activity explorer › + Add filter › Enforcement plane › Network <a href="https://learn.microsoft.com/purview/collection-policies-create-deploy-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Export-ActivityExplorerData -StartTime &lt;DateTime&gt; -EndTime &lt;DateTime&gt; -OutputFormat &lt;String&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/export-activityexplorerdata" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Island integration is enabled in the Security Store, and the policies it uses are the same collection and DLP policies as other network data security integrations. The paths in the first three rows come from Learn's general network data security scenarios, not from an Island-specific page.

Enabling pay-as-you-go needs a Global Administrator per Learn. For collection policies, Learn lists the DLP Compliance Management role and role groups including Organization Management and Compliance Administrator.

## Open questions

- Which activities (text sent, file uploaded, text received, file downloaded), actions (Audit only, Block) and protocols does the Island integration support? Learn says to check with the solution provider; watch the Security Store listing and the Learn network data security page.
- Is the preview available to tenants? The roadmap item still reads In development, while MC1249424 describes public preview rollout from late March 2026.
- Is there a licence or charge specific to the Island integration, and which users must hold Purview E5 or equivalent? Watch the Learn network data security page and the Purview service description.
- Which policy configuration, including user identifiers, does Island receive, and where is it stored? Learn says the partner's own terms govern it.

<!-- rationale
risk: Low. Microsoft's notice MC1249424 says the integration is not enabled by default and has no end-user impact until an administrator enables it and configures network data security policies.
cost: Variable. Learn says network data security with non-Microsoft secure browser solutions needs Purview E5 (or equivalent) per-seat licences plus Purview pay-as-you-go, which meters requests.
impact: Low. Purview, security and billing administrators decide whether to enable it; users are affected only where a policy is configured to audit or block their browser activity.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api; Governance controls table / command: New-DlpCompliancePolicy -Name <String> -EnforcementPlanes <MultiValuedProperty> is the automation for network DLP policies that audit or block data. | Found: Use the New-DlpCompliancePolicy cmdlet to create data loss prevention (DLP) policies in the Microsoft Purview compliance portal. DLP policies contain DLP rules that identify, monitor, and protect sensitive information. | Fix: Narrow this existing row's governs to 'Network enforcement plane for a new DLP policy', and use 'New-DlpCompliancePolicy -Name <String> -EnforcementPlanes Network'. Retain the qualification that this creates only the policy container, not its Audit only/Block rules. The Network value is documented at https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy
- [contradicted, blocker] controls[1].note; Governance controls table / absence: The New-DlpCompliancePolicy reference lists no value for network policies. | Found: The EnforcementPlanes parameter defines the layer where policy actions are run. ... Valid values are: ... Network | Fix: Replace 'The reference read lists no value for network policies' with 'The EnforcementPlanes parameter accepts Network', citing https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: separate Palo Alto item / record: Roadmap item 558939 covers the equivalent Palo Alto Prisma Access integration. | Found: "id": 558939; "title": "Microsoft Purview: Data Loss Prevention - Unmanaged cloud app discovery and protection with Microsoft Purview and Palo Alto Prisma Access" | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=558939 to sources as the roadmap evidence for this sentence; the linked wiki briefing is not evidence.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The DLP UI route runs through Data loss prevention, Policies, Create policy, Inline web traffic, Custom and Custom policy to the Network and non-Microsoft secure browsers enforcement option. | Found: Select + Add cloud apps. Select the Adaptive app scopes tab, then choose All unmanaged AI apps and select Add (1). Select Edit scope on All unmanaged AI apps. | Fix: Replace the path with 'Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > + Add cloud apps > Adaptive app scopes > All unmanaged AI apps > Edit scope > Include only specific > + Add inclusions > Specific users and groups > group > Choose where to enforce the policy > Network and non-Microsoft secure browsers'. State that this is the cited unmanaged-AI scenario, with the administrator choosing the target group. Source: https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security. | Source: https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The collection-policy UI route uses the documented collection-policy, classifier, activity and unmanaged-cloud-app steps to reach Network and non-Microsoft secure browsers. | Found: Select Edit scope on the Unmanaged cloud apps row. Select the Include only specific option ... Leave the default option of Don't capture content and select Next. Ensure Network and non-Microsoft secure browsers is enabled | Fix: Shorten controls[2].ui.path to 'Data loss prevention > Classifiers > Collection policies', the documented page listing these policies, rather than printing an incomplete wizard route. Add to its note: 'This path opens the collection-policy list; the cited network scenario gives the subsequent activity, app scope, content capture and network-enablement choices.' Keep https://learn.microsoft.com/purview/collection-policies-create-deploy-policy as docs. | Source: https://learn.microsoft.com/purview/collection-policies-create-deploy-policy
- [supported, minor] controls[3].ui; Governance controls table / admin-path: Settings > Account details in the Purview portal is the entry point for pay-as-you-go enablement. | Found: This can also be done from Settings > Account details. Select your active Azure subscription from the list. ... Select the resource group. | Fix: The path reaches the correct starting page but stops before the billing association is configured. Extend it to 'Settings > Account details > subscription > resource group', using the selections documented at https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement. | Source: https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement
-->
