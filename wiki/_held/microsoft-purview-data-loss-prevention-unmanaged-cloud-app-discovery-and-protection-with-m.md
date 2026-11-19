---
title: "Microsoft Purview DLP: protect data sent to unmanaged cloud apps through the Island Enterprise Browser"
slug: "microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-with-m"
roadmapId: 558437
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview network data security gains an Island integration so collection and DLP policies can cover Island browser traffic to unmanaged cloud apps. Off until an admin enables it; needs pay-as-you-go billing."
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
  notes: "MC1249424 says Purview pay-as-you-go is required for this integration. Learn lists Purview E5 (or equivalent) per-seat licences plus pay-as-you-go for non-Microsoft secure browser solutions. Island's own licensing is not stated on the Microsoft pages opened."
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
  - title: "Create and deploy a collection policy"
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
  - governs: "Whether the Island integration is enabled"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Security Store > Get solution"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    api: null
    note: "General Security Store steps from Learn; MC1249424 says the integration is not enabled by default and is enabled here. Island-specific steps follow Island's documentation."
  - governs: "Which network traffic to unmanaged cloud apps is audited or blocked by DLP"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Inline web traffic"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <policy name> -EnforcementPlanes @(\"Network\")"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "General network data security controls, not Island-specific. Security & Compliance PowerShell; the cmdlet creates the policy. The cited Learn scenario notes that some features used are in preview."
  - governs: "What network data is collected for discovery, without enforcement"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Classifiers > Collection policies > + Create policy"
      docs: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    api: null
    note: "Learn's example turns on Network and non-Microsoft secure browsers for the policy. The page lists the DLP Compliance Management role."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-19"
roadmapModified: "2026-09-21T23:04:49"
changes:
  - date: "2026-11-17"
    note: "New briefing. MC1257999 (updated 2 November 2026) moved general availability to June 2027; the integration is off by default and needs pay-as-you-go."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 73 statements not yet confirmed"
  - date: "2026-11-19"
    note: "New briefing for the Island integration; MC1249424 (updated 18 September 2026) moved general availability to June 2027, and the integration is off by default and needs pay-as-you-go."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 66 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-19"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 64
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "a03406e5dd91e987649f09f9ebe4b137"
---

## What's changing

Microsoft Purview network data security is adding an integration with Island. Purview collection policies (for discovery) and data loss prevention (DLP) policies (for protection) will be able to cover data shared with unmanaged cloud apps through the Island Enterprise Browser, the Island Extension and browser add-ins, over HTTP and HTTPS. The roadmap item says the policies use the same classifiers, sensitive information types and sensitivity labels as other Purview policies, and that Island provides visibility and control at the presentation layer, including typed and pasted input, file transfers and extension activity.

Microsoft's notice MC1249424 says the integration appears in the Purview DLP Security Store as it rolls out, is not enabled by default and must be enabled by an administrator before policies can use it. It also says existing network data security collection and DLP policies apply automatically once the integration is enabled. The roadmap item adds that the integration feeds Data Security Posture Management (DSPM), the Insider Risk Management (IRM) risk score and data security and compliance for AI interactions.

Learn describes the general mechanism: the integrated solution monitors network traffic and sends it to Purview for classification and policy evaluation. With DLP policies that exchange is in real time; with collection policies alone it is asynchronous. At the time of writing (November 2026) the Learn pages opened refer to non-Microsoft SASE and secure browser solutions without naming Island, so Island-specific behaviour on this page is the roadmap's and the notice's description.

The roadmap record lists the item as In development, with a preview date of March CY2026 and a target date of June CY2027, for Worldwide (Standard Multi-Tenant) and the Web platform. MC1249424 (updated 18 September 2026) says public preview rollout begins in late March 2026 and is expected to complete by late April 2026, and that general availability (Worldwide) begins in June 2027 (previously late June 2026) and is expected to complete in June 2027 (previously late July 2026).

## Why it matters

If your organisation uses, or plans to use, the Island Enterprise Browser, this is a route to apply the Purview classifiers and labels you already maintain to what users type, paste and upload to unmanaged AI, storage, webmail and social apps, and to feed that signal into DSPM and Insider Risk Management. The policies and alerts stay in Purview rather than being rebuilt in a second tool.

If nobody acts, MC1249424 says there is no impact on users, because the integration is not enabled by default. The decisions fall to the Purview and security teams: whether to enable it, which activities to audit or block, and who owns the per-request pay-as-you-go charges. With general availability targeted for June 2027, the practical task now is to settle billing ownership and policy design ahead of enablement, not to react to an imminent change.

## Risk assessment

**Data exposure**

- Once enabled, Island-managed browser activity can be evaluated by Purview collection and DLP policies. MC1249424 says browser-based activity metadata and inspection results may be processed as part of Purview network data security. Scope policies to the groups and apps you intend to inspect.
- Learn says Purview evaluates up to 4 MB of content for uploadText and downloadText and files up to 3 MB for uploadFile and downloadFile. Content beyond those figures is outside what Learn describes as evaluated, so do not assume full coverage.

**Security & identity**

- Learn says that if you integrate with non-Microsoft partners, they can access and possibly store some policy configuration, including user identifiers, under their own terms, conditions and privacy policy. Review Island's terms before enabling.
- Learn says Purview network data security policies do not apply to B2B guest users, so guest traffic is not covered by these policies.
- Learn says a policy that targets an unmanaged app can capture both the consumer and enterprise versions of that app when the app's URL is shared across instances.

**Autonomy & actions**

- Learn says network data security supports Audit only and Block actions, and that supported activities and actions may differ by integrated solution. Whether Island supports each activity and action is something to confirm with Island. Start with Audit only before using Block.

**Change & support**

- Learn says to allow up to 24 hours for policies to reach the integrated solution and for the first data to show up, so a test policy might not show results immediately.
- Pay-as-you-go billing is a prerequisite per MC1249424, so enabling the integration is a billing decision as well as a Purview setting.

## Cost and licensing

Learn's network data security page says that, for non-Microsoft SASE and secure browser solutions, you need Purview E5 (or equivalent) per-seat licences and the Microsoft Purview pay-as-you-go billing model, and that pay-as-you-go must be configured for the tenant. MC1249424 states the same requirement for this integration and asks administrators to confirm that pay-as-you-go is enabled and configured.

The meter is the request. Learn says network data security uses the request as the unit of measure for pay-as-you-go billing with non-Microsoft SASE and secure browser integrations, and defines a request as each network call from a device or browser to a website or API, not counting responses. The Purview billing models page says pay-as-you-go charges appear on an Azure bill at the end of the month, so the tenant must be associated with an active Azure subscription. Request volume follows how much Island traffic your policies send to Purview; the billing models page links to Microsoft's pay-as-you-go pricing for the rate, which is not quoted here.

The Microsoft pages opened name no licence for Island itself. Island's own licensing terms are Island's and are not described here.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) and the Web platform, with release phases General Availability and Preview. MC1249424 says the change affects organisations using Microsoft Purview, customers using or planning to use the Island Enterprise Browser, the Island Extension or supported browser add-ins, and Microsoft 365 administrators who manage Purview collection and DLP policies.

Learn's prerequisites for a non-Microsoft secure browser provider are pay-as-you-go billing and completion of the integration steps in the provider's documentation. Learn lists the supported activities as text sent, file uploaded, text received and file downloaded, and says all network data security integrations classify HTTP and HTTPS traffic while WebSocket support may differ by integrated solution. The collection policy page lists DLP Compliance Management as an applicable role. Purview network data security policies do not apply to B2B guest users.

## Governance guidance

### Before rollout

- Agree who owns the Azure bill for per-request pay-as-you-go charges, because MC1249424 and Learn both say pay-as-you-go is required for this kind of integration.
- Review your existing network data security collection and DLP policies (rows 2 and 3 of the controls table), because MC1249424 says they apply automatically once the integration is enabled.
- Read Island's documentation and terms, because Learn says non-Microsoft partners can access and possibly store some policy configuration, including user identifiers.
- Tell the data security and compliance administrators who will see network alerts about the Security Store entry MC1249424 says will appear.

### At rollout

- Enable the Island integration from the Purview DLP Security Store only when you are ready to use it (row 1), as MC1249424 describes.
- Start with a collection policy or an Audit only DLP rule scoped to a pilot group before using Block (rows 2 and 3).
- Turn on Network and non-Microsoft secure browsers as the enforcement location on the policy, as Learn's scenarios do.

### After rollout

- Wait up to 24 hours before judging a test policy, because Learn allows that long for policies to reach the integrated solution and for the first data to show up.
- Confirm with Island which activities and actions it supports before moving a rule from Audit only to Block.
- Re-check Message center and the roadmap item for the general availability date, which MC1249424 moved to June 2027.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Island integration is enabled</strong><br><small>Tenant</small><br><small class="controls__note">General Security Store steps from Learn; MC1249424 says the integration is not enabled by default and is enabled here. Island-specific steps follow Island's documentation.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Security Store › Get solution <a href="https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which network traffic to unmanaged cloud apps is audited or blocked by DLP</strong><br><small>Tenant</small><br><small class="controls__note">General network data security controls, not Island-specific. Security &amp; Compliance PowerShell; the cmdlet creates the policy. The cited Learn scenario notes that some features used are in preview.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Inline web traffic <a href="https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;policy name&gt; -EnforcementPlanes @(&quot;Network&quot;)</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>What network data is collected for discovery, without enforcement</strong><br><small>Tenant</small><br><small class="controls__note">Learn's example turns on Network and non-Microsoft secure browsers for the policy. The page lists the DLP Compliance Management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Classifiers › Collection policies › + Create policy <a href="https://learn.microsoft.com/purview/collection-policies-create-deploy-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The rows are Purview's general network data security controls. The Learn pages opened give no Island-specific steps for them; they say to complete the setup steps your integrated secure browser provider supplies, so follow Island's documentation for the provider side. MC1249424 says the integration is enabled from the Security Store.

The collection policy page lists the DLP Compliance Management role. The New-DlpCompliancePolicy page lists Network as a valid EnforcementPlanes value and shows no network example, so confirm the other parameters before scripting; it creates the policy, and rules are separate. Learn says some features used in the DLP policy scenario are in preview.

## Open questions

- When will the Island integration reach general availability? MC1249424 and the roadmap target June 2027 (CY2027); watch Message center and the roadmap item.
- Which activities, actions and protocols does Island support? Learn says supported activities and actions, and WebSocket support, differ by solution and tells administrators to check with the provider.
- What is the per-request pay-as-you-go cost at your expected Island traffic volume, and can that spend be capped? Check Microsoft's pay-as-you-go pricing linked from the Purview billing models page.
- Is there documented PowerShell, Graph or other automation for enabling the Security Store integration or creating network collection policies? None was found on Microsoft Learn at the time of writing (November 2026).
- What Island licence does Island require for the Purview integration? The Microsoft pages opened do not say.

<!-- rationale
risk: Low. MC1249424 says the integration is not enabled by default and has no end-user impact until an administrator enables it; once enabled, Learn warns that non-Microsoft partners can access some policy configuration, including user identifiers.
cost: Variable. MC1249424 says Purview pay-as-you-go is required, and Learn bills network data security per request on top of Purview E5 (or equivalent) per-seat licences for non-Microsoft secure browser solutions.
impact: Low. Per MC1249424 users are not affected unless an administrator enables the integration and configures network data security policies; Purview and security administrators notice first.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api; Governance controls table / command: New-DlpCompliancePolicy -Name <policy name> -EnforcementPlanes @("Network") is the automation counterpart for deciding which traffic is audited or blocked. | Found: Use the New-DlpCompliancePolicy cmdlet to create data loss prevention (DLP) policies in the Microsoft Purview compliance portal. DLP policies contain DLP rules that identify, monitor, and protect sensitive information. | Fix: Change controls[1].governs and the matching rendered row label to 'Creation of network DLP policies', and change its note to 'General network data security policy creation, not Island-specific. Security & Compliance PowerShell; this command creates the policy container and does not configure traffic selection or Audit only/Block rules. Some features in the cited Learn scenario are in preview.' Keep the call: its syntax and Network value are documented, but its operation does not set the audit/block control currently claimed. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy
- [unsupported, blocker] front matter: changes[0] / record: MC1257999, updated 2 November 2026, moved this integration's general availability to June 2027. | Found: Searched: "MC1257999" "Island". Read the supplied roadmap and full MC1249424 notice; only MC1249424, updated 18 September 2026, is supplied and substantiates the June 2027 change. No matching notice was returned by Learn search. | Fix: Replace the first change note with 'New briefing. MC1249424 (updated 18 September 2026) moved general availability to June 2027; the integration is off by default and needs pay-as-you-go.' The supplied MC1249424 notice supports this wording.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Data loss prevention > Policies > + Create policy > Inline web traffic reaches the entry to configuring network DLP. | Found: Select Data loss prevention > Policies > + Create policy. Select Inline web traffic. Select Custom from the Categories list and then select Custom policy from the Regulations list. | Fix: The path is a correct entry point but stops before configuration. For the documented blocking scenario, extend it to 'Data loss prevention > Policies > + Create policy > Inline web traffic > Custom > Custom policy > + Add cloud apps > Adaptive app scopes > All unmanaged AI apps > Choose where to enforce the policy > Network and non-Microsoft secure browsers > Define policy settings > Create or customize advanced DLP rules > Customize advanced DLP rules > + Create rule > + Add an action > Restrict browser and network activities > Text sent to or shared with cloud or AI apps > Block'. Note that app/group selection and rule conditions must be completed for the intended policy, as described at https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security. | Source: https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Data loss prevention > Classifiers > Collection policies > + Create policy reaches collection policy creation for network discovery. | Found: Open the Data loss prevention solution and navigate to Classifiers > Collection policies. Select + Create policy. | Fix: The entry path is correct but stops before the collection settings. Extend the documented route to 'Data loss prevention > Classifiers > Collection policies > + Create policy > + Add condition > Content contains > Classifiers > Edit > + Add activities > + Add data source > Unmanaged cloud apps > Network and non-Microsoft secure browsers'. Note that classifier, activity, app and group choices are completed in that wizard, following https://learn.microsoft.com/purview/collection-policies-create-deploy-policy. | Source: https://learn.microsoft.com/purview/collection-policies-create-deploy-policy
-->
