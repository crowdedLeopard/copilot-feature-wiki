---
title: "Microsoft Purview: inline DLP for prompts in Microsoft Foundry apps and agents"
slug: "microsoft-purview-data-loss-prevention-inline-dlp-for-prompts-for-microsoft-foundry-apps-a"
roadmapId: 558565
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans inline Purview DLP policies for prompts sent to Foundry-built apps and agents. Nothing changes until an admin creates a policy, and Purview pay-as-you-go billing is required. Learn documents a PowerShell route today."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's Foundry page says managing policies for Foundry AI interactions requires pay-as-you-go billing. The Purview billing page meters non-Microsoft 365 AI interactions by number of requests or messages. A rate for this feature is not yet published."
audiences: ["security","compliance","finops","service-owner"]
tags: ["microsoft-foundry","dlp","purview","pay-as-you-go","sensitive-information-types","powershell","agents","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap 558565"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558565"
    kind: "roadmap"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft Foundry"
    url: "https://learn.microsoft.com/purview/ai-azure-foundry"
    kind: "learn"
  - title: "Monitor AI governance and compliance in Microsoft Foundry"
    url: "https://learn.microsoft.com/azure/foundry/control-plane/how-to-manage-compliance-security"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    kind: "learn"
  - title: "Tutorial - Use Microsoft Purview APIs to leverage your policies in your apps"
    url: "https://learn.microsoft.com/purview/developer/use-the-api"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Billing concepts for Microsoft Foundry"
    url: "https://learn.microsoft.com/azure/foundry/concepts/billing-concepts"
    kind: "learn"
  - title: "Roles and role groups in Microsoft Defender for Office 365 and Microsoft Purview"
    url: "https://learn.microsoft.com/defender-office-365/scc-permissions"
    kind: "learn"
  - title: "Enable threat protection for AI services"
    url: "https://learn.microsoft.com/azure/defender-for-cloud/ai-onboarding"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "MC1304291: (Updated) Microsoft Purview: Data loss prevention inline controls for prompts in Microsoft Foundry apps and agents"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1304291"
    kind: "message-center"
videos: []
related: ["microsoft-purview-purview-sdk-embedded-in-agent-framework-sdk","sensitive-information-types","auditing","microsoft-purview-data-loss-prevention-data-security-for-non-microsoft-connected-apps"]
controls:
  - governs: "DLP rule that blocks sensitive information types in prompts to a Foundry app"
    scope: "app"
    ui: null
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Policy <policy name> -ContentContainsSensitiveInformation @{Name = \"credit card number\"} -RestrictAccess @(@{setting=\"UploadText\";value=\"Block\"})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    note: "Security & Compliance PowerShell only. For this documented route, the app must integrate with Microsoft Purview APIs and enforce the returned policy actions; enabling Purview and user context alone does not establish prompt blocking."
  - governs: "Whether Microsoft Purview Data Security is enabled for Foundry"
    scope: "other"
    ui:
      surface: "Microsoft Foundry (new) portal"
      path: "Manage > Compliance > Data security and governance > subscription > Powered by Microsoft Purview"
      docs: "https://learn.microsoft.com/azure/foundry/control-plane/how-to-manage-compliance-security"
    api: null
    note: "The tab shows the Powered by Microsoft Purview setting's enabled state. Learn also lists enabling it in Microsoft Defender for Cloud, a method that page says is being deprecated."
  - governs: "Audit records of Foundry AI interactions"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Read-only monitoring. Needs the Audit Logs or View-Only Audit Logs role. Run the cmdlet in Exchange Online PowerShell."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-21"
roadmapModified: "2026-06-17T23:15:06"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: covers MC1304291, the documented PowerShell route, pay-as-you-go billing and the open questions on portal support and agent coverage."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 64 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: the DLP-creating role is now named, the preview rollout is described as planned, the Foundry portal path is extended and the pay-as-you-go linkage check is removed from the checklist."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 65 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: the documented route now states that the app must integrate with Purview APIs and enforce returned policy actions, and the unsupported Foundry Compliance review checklist step is removed."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 68 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 74 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 73
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "d8c94c9f4cee278445f0b9ac75dfd965"
---

## What's changing

The roadmap item says that with Microsoft Purview enabled in Microsoft Foundry, Purview admins can set up inline data loss prevention (DLP) policies for prompts sent to apps and agents built on Foundry. Microsoft's notice MC1304291 (published 2026-05-08, updated 2026-06-17) adds that policies detect and help prevent sensitive information being shared in prompts to large language models, that enforcement is inline as prompts are submitted, and that no change occurs unless admins create or enable DLP policies for this scenario.

The roadmap status is In development, with a preview target of May CY2026 and a general availability target of October CY2026, for Worldwide (Standard Multi-Tenant) on the web platform. MC1304291 says public preview rollout was planned to begin in mid-May 2026 and was expected to finish by early June 2026, and that general availability rollout begins in October 2026 (previously mid-June) and is expected to finish by the end of October 2026. At the time of writing (November 2026) the record still shows In development although its target month has passed, so treat both dates as plans.

Microsoft Learn does not describe this roadmap feature by name. What it documents today, on its Purview page for Microsoft Foundry, is that "Support today is only available for a DLP policy that blocks prompts based on sensitive information types", configured with a PowerShell cmdlet scoped to a specific Entra-registered AI app. Learn also says Purview data security policies for Foundry interactions apply to API calls that use Microsoft Entra ID authentication with a user-context token, or that explicitly include user context. Whether general availability changes either point is not stated.

For this documented route, the app must integrate with Microsoft Purview APIs and enforce the returned policy actions; enabling Purview and supplying user context alone does not establish prompt blocking. Learn's tutorial says the app sends a content activity for policy evaluation and returns policy actions the app must enforce. This API-based route is separate from the inline enforcement the roadmap plans.

## Why it matters

This gives a security or compliance team a way to block sensitive data in prompts at the point of submission, rather than finding it afterwards in audit logs. The default is that nothing is enforced until an admin creates a policy, per MC1304291, so prompts to Foundry apps are as exposed after this ships as they are today until someone acts.

The wiki's view is that the practical work sits with two groups who rarely share a backlog: Purview admins who write the policy, and Foundry owners who enable Purview in Foundry, ensure calls carry user context and, for the documented route, confirm the app integrates with Microsoft Purview APIs and enforces the returned policy actions. Learn says calls without user context appear in Purview Audit and DSPM for AI Activity Explorer only, so a policy that looks complete in Purview can leave some app traffic unevaluated.

## Risk assessment

**Data exposure**
- Learn documents blocking prompts based on sensitive information type matches; data outside the rule's configured types does not match that condition. Review the types against what Foundry apps are likely to receive.
- Learn says policies apply to API calls with a Microsoft Entra ID user-context token or explicit user context. For other authentication, interactions are visible in Audit and DSPM for AI Activity Explorer only, not governed by policy.

**Security & identity**
- The documented policy is scoped to a specific app, so a new Foundry app is not covered until someone adds it. Foundry's Compliance view lists agents without the intended data loss prevention coverage as a prioritised action.
- Learn's Defender for Cloud page says Purview integration does not include data or context from Foundry agents under the configuration method that page describes, which is being deprecated. Confirm agent coverage separately from app coverage.

**Autonomy & actions**
- MC1304291 says prompts may be blocked by DLP policies. A blocked prompt in an app that calls the model in a workflow can surface as a failed step for that app's owner.

**Change & support**
- Enforcement needs pay-as-you-go billing, so a tenant without an Azure-linked subscription cannot expect the policy to work (MC1304291). Expect help-desk questions from app owners whose prompts are blocked.

## Cost and licensing

Microsoft's Foundry page says managing policies for Foundry AI interactions with Purview requires pay-as-you-go billing in your organisation, and MC1304291 says Purview must be enabled with a pay-as-you-go subscription for this feature to work. The Purview billing page describes pay-as-you-go as a consumption model billed through an Azure subscription, with one Azure bill at the end of the month for all pay-as-you-go charges.

That page lists "Data Security for Gen AI Applications" as applying to classification and protection of sensitive content for non-M365 AI interactions (prompts/responses), measured by number of requests or messages. The page does not name Foundry DLP prompt evaluation in that row, and states no rate; it links to Microsoft's pay-as-you-go pricing page. A rate specific to this feature is not yet published.

The Foundry page also says Microsoft Purview Audit includes Foundry data as part of the Microsoft Purview licence. Foundry's own model usage is billed separately under its billing model (see the [Foundry billing concepts page](https://learn.microsoft.com/azure/foundry/concepts/billing-concepts)).

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the web platform, with release phases General Availability and Preview. No other cloud is listed on the record; that is a record fact, not a statement that other clouds are excluded.

MC1304291 names Purview admins, Microsoft Foundry admins, and organisations building or using apps and agents in Foundry as affected. Foundry admins enable Purview by configuring the Purview toggle in Foundry; security admins create the DLP policies. Learn's Foundry page says an account in the Microsoft Entra Compliance Administrator role group is an example of one with appropriate permissions for DSPM for AI, and the New-DlpComplianceRule reference says you must be assigned permissions in Security & Compliance PowerShell. Microsoft documents the Information Protection Admin role as able to create, edit and delete DLP policies.

## Governance guidance

### Before rollout
- List the Foundry apps and agents in your Azure subscriptions and note which authenticate with Microsoft Entra ID user-context tokens, since Learn ties policies to those calls.
- Choose the sensitive information types the first policy will look for, using the existing sensitive information types in Purview.

### At rollout
- Enable Microsoft Purview Data Security in Foundry for the subscription (row 2 of the controls table).
- Create the DLP policy and rule for each Foundry app through the PowerShell route (row 1), after confirming that the app integrates with Purview APIs and enforces returned policy actions, starting with the policy mode MC1304291's simulation advice points to if the cmdlet allows it.
- Tell Foundry app owners which prompts may now be blocked and who to contact.

### After rollout
- Search the unified audit log for Foundry interaction records to see what policies are evaluating (row 3).
- Check the Azure bill for the pay-as-you-go charge once the first month of use completes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>DLP rule that blocks sensitive information types in prompts to a Foundry app</strong><br><small>App</small><br><small class="controls__note">Security &amp; Compliance PowerShell only. For this documented route, the app must integrate with Microsoft Purview APIs and enforce the returned policy actions; enabling Purview and user context alone does not establish prompt blocking.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Policy &lt;policy name&gt; -ContentContainsSensitiveInformation @{Name = &quot;credit card number&quot;} -RestrictAccess @(@{setting=&quot;UploadText&quot;;value=&quot;Block&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Microsoft Purview Data Security is enabled for Foundry</strong><br><small class="controls__note">The tab shows the Powered by Microsoft Purview setting's enabled state. Learn also lists enabling it in Microsoft Defender for Cloud, a method that page says is being deprecated.</small></td><td data-label="Admin UI"><strong>Microsoft Foundry (new) portal</strong><br>Manage › Compliance › Data security and governance › subscription › Powered by Microsoft Purview <a href="https://learn.microsoft.com/azure/foundry/control-plane/how-to-manage-compliance-security" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit records of Foundry AI interactions</strong><br><small>Tenant</small><br><small class="controls__note">Read-only monitoring. Needs the Audit Logs or View-Only Audit Logs role. Run the cmdlet in Exchange Online PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The documented policy route is PowerShell only: Learn's tutorial for Entra-registered apps says the Microsoft Purview portal does not currently support creating DLP policies for such apps, and Learn documents no portal path for Foundry apps at the time of writing (November 2026). Run the cmdlets in Security & Compliance PowerShell.

The Foundry portal's Compliance view reports coverage; Learn says its policy configuration, evaluation and enforcement stay with the underlying services, and that its indicators are visibility measures, not a guarantee that every interaction has active policy protection. The Compliance view also tells readers not to equate audit visibility with data security policy enforcement.

## Open questions

- Will general availability add a Purview portal experience for creating this policy, or does the PowerShell route Learn documents today stay the way in? Watch the Purview Foundry page on Learn and MC1304291.
- Does the policy cover Foundry agents as well as Foundry-built apps? The roadmap says both, but Learn's Defender for Cloud page says its Purview integration does not include data or context from Foundry agents.
- What does a blocked prompt look like to the user and to the app, and which audit events record it? Learn's Foundry page does not say.
- Can the policy run in simulation mode for Foundry prompts? MC1304291 recommends simulation mode, but the cmdlet example Learn gives uses -Mode Enable.
- What is the price per request or message for DLP evaluation of Foundry prompts? Watch the Purview billing models page and Microsoft's pay-as-you-go pricing page.

<!-- rationale
risk: Medium. Nothing is enforced until an admin creates a policy (MC1304291), but Learn documents only a PowerShell route and applies policies to API calls with user context, so coverage gaps are easy to miss.
cost: Variable. Microsoft's Foundry page requires Purview pay-as-you-go billing, an Azure-billed meter; a rate specific to this feature is not yet published.
impact: Low. Purview admins and Foundry app builders set this up; end users notice only if a policy blocks a prompt.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] What's changing: final sentence / behaviour: This API-based route is separate from the inline enforcement the roadmap plans. | Found: Searched: "Microsoft Foundry" "DLP" "General Availability" user context inline APIs separate mechanism. Read ai-azure-foundry, use-the-api and secure-ai-with-purview excerpts. No source establishes separation; use-the-api itself documents evaluateInline. | Fix: Remove the sentence 'This API-based route is separate from the inline enforcement the roadmap plans.' Retain the preceding description of app integration and enforcement.
-->
