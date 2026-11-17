---
title: "Microsoft Purview DLP: discover and protect data sent to unmanaged cloud apps through Palo Alto Prisma Access"
slug: "microsoft-purview-data-loss-prevention-unmanaged-cloud-app-discovery-and-protection-with-m"
roadmapId: 558939
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview network data security gains a Palo Alto Prisma Access integration so collection and DLP policies can cover unmanaged cloud app traffic. Off until an admin enables it; needs pay-as-you-go billing."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2027"
previewDate: "April CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn lists Purview E5 (or equivalent) per-seat licences plus Purview pay-as-you-go billing for network data security with non-Microsoft SASE solutions. The per-request rate is not quoted here."
audiences: ["security","compliance","finops","m365-admin"]
tags: ["purview","dlp","dspm","pay-as-you-go","sensitivity-labels","sensitive-information-types","network-data-security","palo-alto-prisma-access"]
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
  - title: "New-DlpCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    kind: "learn"
videos: []
related: ["microsoft-purview-dspm-copilot-readiness-and-data-explorer","purview-dlp-block-sensitive-data-in-copilot-web-search"]
controls:
  - governs: "Whether the Palo Alto Prisma Access integration is enabled"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Security Store > Get solution"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    api: null
    note: "General Security Store steps from Learn; MC1257999 says the integration is disabled by default and enabled here. Prisma-specific steps follow Palo Alto's documentation."
  - governs: "Which network traffic to unmanaged cloud apps is blocked or audited by DLP"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Inline web traffic"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security"
    api:
      kind: "powershell"
      call: "New-DlpCompliancePolicy -Name <policy name> -EnforcementPlanes @(\"Network\")"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy"
    note: "Security & Compliance PowerShell. The cmdlet page lists Network as an EnforcementPlanes value but shows no network example; confirm other parameters before scripting."
  - governs: "What network data is collected for discovery, without enforcement"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Classifiers > Collection policies > + Create policy"
      docs: "https://learn.microsoft.com/purview/collection-policies-create-deploy-policy"
    api: null
    note: "Learn's example turns on Network and non-Microsoft secure browsers for the policy. Roles include DLP Compliance Management."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-17"
    note: "New briefing. MC1257999 (updated 2 November 2026) moved general availability to June 2027; the integration is off by default and needs pay-as-you-go."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 73 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 72
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "eb4178c82fbe350c9b0af6d8df753674"
---

## What's changing

Microsoft Purview network data security is adding an integration with Palo Alto Prisma Access. According to the roadmap item and Microsoft's notice MC1257999, new and existing Prisma Access customers will be able to use Purview collection policies (for discovery) and data loss prevention (DLP) policies (for protection) to cover sensitive data shared with unmanaged cloud apps over HTTP and HTTPS, using the same classifiers, sensitive information types and sensitivity labels as other Purview policies. The roadmap item adds that the integration feeds Data Security Posture Management (DSPM), Insider Risk Management and data security for AI interactions.

MC1257999 says the integration appears in the Purview DLP Security Store as it rolls out, is not enabled by default, and must be enabled by an administrator before policies can use it. It also says existing network data security collection and DLP policies apply automatically once the integration is enabled.

The Learn page on network data security describes the general mechanism: the integrated solution monitors network traffic and sends it to Purview for classification and policy evaluation, and for DLP protection that exchange is real time. Learn says non-Microsoft SASE integrations are generally available or in preview depending on the integration. At the time of writing (November 2026) the Learn pages read do not name Palo Alto Prisma Access or give Prisma-specific setup steps, so the Prisma behaviour above is the roadmap's and the notice's description.

The roadmap record lists the item as In development, with a preview date of April CY2026 and a target date of June CY2027, for Worldwide (Standard Multi-Tenant) and the Web platform. MC1257999 (updated 2 November 2026) says public preview rollout was due mid-April to mid-May 2026, and moves general availability to June 2027 (previously late October to late November 2026).

## Why it matters

If your organisation already uses Prisma Access, this is a way to apply the Purview classifiers and labels you already maintain to traffic going to unmanaged AI, storage, webmail and social apps, and to feed that signal into DSPM and Insider Risk Management. The same policies and alerts stay in Purview rather than being rebuilt in a second tool.

If nobody acts, MC1257999 says there is no impact on users, because the integration is not enabled by default. The decisions fall to the Purview and security teams: whether to enable it, who gets blocked, and who pays for the per-request billing that pay-as-you-go brings. Because GA has moved to June 2027, the practical task now is to settle billing and policy design ahead of enablement, not to react to an imminent change.

## Risk assessment

**Data exposure**

- Once enabled, Prisma Access network traffic can be evaluated by Purview DLP policies (MC1257999). Learn's important note says non-Microsoft partners can access and possibly store some policy configuration, including user identifiers, under their own terms and privacy policy. Review Palo Alto's terms before enabling.
- Learn lists size limits for inline evaluation: up to 4 MB for uploadText and downloadText and up to 3 MB for uploadFile and downloadFile. Larger content is outside those figures, so do not assume full coverage.

**Security & identity**

- Learn says network data security policies do not apply to B2B guest users, so guest traffic is not covered by these policies.
- Learn warns that some unmanaged AI apps can send content in encoded form or through dynamically generated endpoints, which can affect enforcement, and that a policy for an unmanaged app can capture both consumer and enterprise versions when they share a URL.

**Autonomy & actions**

- DLP policies for network data security support Audit only and Block actions on Learn. A Block rule can stop users uploading files or sending text to an app, so test with Audit only first. Whether Prisma Access supports every activity and action is something Learn says to check with the provider.

**Change & support**

- Learn says to allow up to 24 hours for policies to reach the network security solution and for first data to appear, so a test policy will not show results immediately.
- Pay-as-you-go billing is a prerequisite per MC1257999; enabling it is a billing decision, not only a Purview setting.

## Cost and licensing

Learn's network data security page says that, for non-Microsoft SASE and secure browser solutions, you need Purview E5 (or equivalent) per-seat licences and the Microsoft Purview pay-as-you-go billing model, and that pay-as-you-go must be configured for the tenant. MC1257999 states the same requirement for this integration: confirm Purview pay-as-you-go is enabled and configured.

The meter is the request: Learn says network data security uses the request as the unit of measure for pay-as-you-go billing with non-Microsoft SASE and secure browser integrations, and defines a request as each network call from a device or browser to a website or API, not counting responses. Request volume therefore follows how much traffic Prisma Access sends to Purview under your policies. Check the current per-request rate on the Purview billing models page that the network data security page links to; no rate is quoted here.

A collection policy needs no licence of its own, but the Purview service description says that one that uses network data protection needs the tenant linked to an Azure subscription because network-based enforcement is a pay-as-you-go feature. Licensing and subscription terms for Palo Alto Prisma Access itself are Palo Alto's and are not described on the Microsoft pages read.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) and the Web platform. It is aimed at organisations using Microsoft Purview that use, or plan to use, Palo Alto Prisma Access, and at administrators who manage Purview collection and DLP policies (MC1257999).

Prerequisites on Learn for a non-Microsoft SASE provider are pay-as-you-go billing and completion of the integration steps in the provider's documentation. Policies are scoped in Purview by unmanaged cloud apps or adaptive app scopes (for example all unmanaged AI apps) and by users and groups. Learn lists the supported activities as text sent, file uploaded, text received and file downloaded, over HTTP and HTTPS, and says supported activities and WebSocket support may differ by integrated solution. B2B guest users are not covered.

## Governance guidance

### Before rollout

- Confirm Purview pay-as-you-go billing is configured for the tenant and agree who owns the per-request spend, as MC1257999 requires it.
- Review existing collection and DLP policies for where network inspection fits, using the Purview portal rows in the controls table.
- Read Palo Alto's documentation and terms for the integration, because Learn says partners can access some policy configuration, including user identifiers.
- Tell the data security and compliance admins who will see network alerts and activity explorer data.

### At rollout

- Enable the Prisma Access integration from the Purview DLP Security Store only when you are ready to use it, as MC1257999 describes.
- Start with a collection policy or an Audit only DLP rule scoped to a pilot group before using Block.
- Select Network and non-Microsoft secure browsers as an enforcement location on the policy, as the Learn scenario does.

### After rollout

- Filter activity explorer by Enforcement plane set to Network to review matches, and check DSPM reports.
- Check DLP alerts and billing usage after the first 24 hours, when Learn says policy distribution and first data can take up to that long.
- Re-check the Learn pages and Message center for Prisma-specific guidance and the GA date.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Palo Alto Prisma Access integration is enabled</strong><br><small>Tenant</small><br><small class="controls__note">General Security Store steps from Learn; MC1257999 says the integration is disabled by default and enabled here. Prisma-specific steps follow Palo Alto's documentation.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Security Store › Get solution <a href="https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which network traffic to unmanaged cloud apps is blocked or audited by DLP</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. The cmdlet page lists Network as an EnforcementPlanes value but shows no network example; confirm other parameters before scripting.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Inline web traffic <a href="https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpCompliancePolicy -Name &lt;policy name&gt; -EnforcementPlanes @(&quot;Network&quot;)</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>What network data is collected for discovery, without enforcement</strong><br><small>Tenant</small><br><small class="controls__note">Learn's example turns on Network and non-Microsoft secure browsers for the policy. Roles include DLP Compliance Management.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Classifiers › Collection policies › + Create policy <a href="https://learn.microsoft.com/purview/collection-policies-create-deploy-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn says you configure the integration in the Security Store and then create a collection policy or DLP policy that defines the conditions, activities and cloud apps. The collection policy page lists the DLP Compliance Management role and the Organization Management, Compliance Administrator, Insider Risk Management Admin and Information Protection Admins role groups, with Data Security Viewers for read-only support.

The table rows are Learn's general network data security controls. No Prisma Access-specific control page was found on Microsoft Learn at the time of writing (November 2026), so confirm the Security Store entry and the provider side once the integration is available. MC1257999 says the integration is disabled by default and enabled in the Security Store; no separate tenant switch is described. The Learn pages read describe policy creation in the portal, and the Exchange PowerShell reference for the DLP cmdlet does not show a network example.

## Open questions

- When will the Prisma Access integration reach general availability? MC1257999 moves it to June 2027 and the roadmap target is June CY2027; watch Message center and the roadmap item.
- Which Prisma Access activities, actions and protocols are supported? Learn says activities and WebSocket support differ by solution and tells admins to check with the provider.
- What is the per-request pay-as-you-go cost at expected Prisma Access traffic volumes, and are there controls to cap spend? Check the Purview billing models page.
- Is there a documented PowerShell, Graph or other automation for enabling the Security Store integration or creating network collection policies? None was found on Learn at the time of writing.
- What Prisma Access subscription or licence does Palo Alto require for the Purview integration? The Microsoft pages read do not say.

<!-- rationale
risk: Medium. Once enabled, Prisma Access traffic is evaluated by Purview and DLP can block it, and Learn says non-Microsoft partners can access some policy configuration, including user identifiers.
cost: Variable. Microsoft's notice MC1257999 says Purview pay-as-you-go is required, and Learn bills network data security per request on top of Purview E5 (or equivalent) per-seat licences.
impact: Low. Per MC1257999 users are not affected unless an administrator enables the integration and configures network data security policies; the people who notice first are Purview and security admins.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / licensing: Collection policies need no licence of their own, distinct from the workload licensing described above. | Found: There are no licensing requirements to apply collection policies. Instead, you must be licensed for the workload for which you're creating the policy. | Fix: Add the Microsoft Purview service description to sources: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description. It supports both collection-policy licensing statements in this paragraph. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [supported, minor] Risk assessment: Change & support; Governance guidance: After rollout / behaviour: Initial policy distribution and first data can take up to 24 hours, described as meaning results will not appear immediately. | Found: allow up to 24 hours for your policies to be distributed to the network security solution and for the first data to show up. | Fix: Replace 'so a test policy will not show results immediately' with 'so a test policy might not show results immediately'. The source gives an upper allowance, not a guaranteed delay. | Source: https://learn.microsoft.com/purview/dlp-network-data-security-learn
- [supported, minor] controls[1].ui / admin-path: The DLP creation entry point is Microsoft Purview portal > Data loss prevention > Policies > + Create policy > Inline web traffic. | Found: Select Data loss prevention > Policies > + Create policy. Select Inline web traffic. | Fix: Add to controls[1].note: 'The cited Learn scenario notes that some features used are in preview.' Preserve the existing statement that these are general network data security controls. | Source: https://learn.microsoft.com/purview/dlp-create-policy-ai-network-data-security
- [contradicted, minor] Governance guidance: Before rollout and After rollout; controls / consistency: The checklist tells administrators to check billing configuration and usage, activity explorer, DSPM reports and DLP alerts without corresponding control rows. | Found: Checklist: 'Confirm Purview pay-as-you-go billing is configured'; 'Filter activity explorer'; 'check DSPM reports'; 'Check DLP alerts and billing usage'. Table rows cover only integration enablement, DLP policy creation and collection policy creation. | Fix: The billing configuration/usage, activity explorer filter, DSPM reporting and DLP alert checks have no rows. Remove those checklist instructions to meet the table/checklist rule without adding unverified controls; retain their factual explanations elsewhere.
-->
