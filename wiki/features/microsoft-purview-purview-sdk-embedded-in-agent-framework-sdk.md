---
title: "Microsoft Purview: Purview SDK built into Microsoft Agent Framework for custom agents"
slug: "microsoft-purview-purview-sdk-embedded-in-agent-framework-sdk"
roadmapId: 534609
topic: "governance"
products: ["Microsoft Purview"]
summary: "Developers can add Purview policy checks to custom agents built with Microsoft Agent Framework. Nothing is enabled automatically; admins decide the Purview policies, billing and who reviews the resulting data."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "November CY2025"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "off"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn lists a Microsoft 365 E5 licence plus pay-as-you-go billing as prerequisites for the Agent Framework integration. Rates for the pay-as-you-go meter are not quoted on the pages cited."
audiences: ["security","compliance","finops","service-owner"]
tags: ["purview","agents","agent-framework","dlp","dspm","pay-as-you-go","auditing","microsoft-graph","data-governance"]
sources:
  - title: "Microsoft 365 Roadmap 534609"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=534609"
    kind: "roadmap"
  - title: "Microsoft Purview (Agent Framework)"
    url: "https://learn.microsoft.com/agent-framework/integrations/by-component/middleware/purview"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Entra-registered AI apps"
    url: "https://learn.microsoft.com/purview/ai-entra-registered"
    kind: "learn"
  - title: "Configure Data Security Posture Management (DSPM) for AI for custom AI apps"
    url: "https://learn.microsoft.com/purview/developer/configurepurview"
    kind: "learn"
  - title: "Tutorial - Use Microsoft Purview APIs to leverage your policies in your apps"
    url: "https://learn.microsoft.com/purview/developer/use-the-api"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "New-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    kind: "learn"
  - title: "Set-FeatureConfiguration"
    url: "https://learn.microsoft.com/powershell/module/exchange/set-featureconfiguration"
    kind: "learn"
  - title: "MC1302905"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1302905"
    kind: "message-center"
videos: []
related: ["microsoft-purview-dspm-copilot-readiness-and-data-explorer","microsoft-purview-data-loss-prevention-data-security-for-non-microsoft-connected-apps"]
controls:
  - governs: "Whether DLP blocks sensitive prompts for a custom Entra-registered agent"
    scope: "app"
    ui: null
    api:
      kind: "powershell"
      call: "New-DlpComplianceRule -Name \"<rule>\" -Policy \"<policy>\" -ContentContainsSensitiveInformation @{Name = \"credit card number\"} -RestrictAccess @(@{setting=\"UploadText\";value=\"Block\"})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule"
    note: "Create the policy first using Example 4 in the linked New-DlpComplianceRule reference. Learn says the Purview portal does not currently support this for Entra-registered apps."
  - governs: "Whether prompts and responses from custom agents are captured and stored in Purview"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > DSPM for AI (classic) > Recommendations > Secure interactions from enterprise apps"
      docs: "https://learn.microsoft.com/purview/ai-entra-registered"
    api:
      kind: "powershell"
      call: "Set-FeatureConfiguration \"DSPM for AI - Collection policy for enterprise AI apps\" -ScenarioConfig '{\"Activities\":[\"UploadText\",\"DownloadText\"],\"EnforcementPlanes\":[\"Application\"],\"SensitiveTypeIds\":[\"All\"],\"IsIngestionEnabled\":false}'"
      docs: "https://learn.microsoft.com/purview/developer/configurepurview"
    note: "The call turns ingestion off; New-FeatureConfiguration creates the policy. Learn's example of a suitable account is a member of the Microsoft Entra Compliance Administrator group role."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item; notes that MC1302905 paused rollout on 19 October 2026 while Learn already documents the integration."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the DLP policy-creation note (now points to Example 4), stated the Data Security for Gen AI Applications meter, noted Set-FeatureConfiguration is in Public Preview, and removed the unsupported audit checklist step."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 70 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 69
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "b192fe5c3d7c32c870e001f6c56aff7a"
---

## What's changing

Microsoft is embedding the Microsoft Purview SDK in the Microsoft Agent Framework SDK so that developers can add a Purview policy middleware to a custom agent. According to Microsoft Learn, the middleware intercepts prompts and responses and checks them against the policies set up in Microsoft Purview. Learn documents Python and .NET versions of the integration.

Microsoft Learn describes two outcomes: inline blocking of sensitive content under Data Loss Prevention (DLP) policies, and logging of AI interactions in Purview for Audit, Communication Compliance, Insider Risk Management, eDiscovery and Data Lifecycle Management. Microsoft's notice MC1302905 says the integration is not enabled automatically and needs developer implementation within custom agents, that existing Purview policies and configurations remain unchanged unless the agent uses them, and that user experiences in Microsoft 365 services do not change.

The roadmap item is In development with a target of March CY2027 (release phases General Availability and Preview; preview date November CY2025; Worldwide only). The Learn page for the integration is already published, so the documentation and the roadmap status do not line up. MC1302905 was updated on 19 October 2026 to say Microsoft has paused rollout and will announce in Message center when it is ready to proceed; the post sets no act-by date.

## Why it matters

This is the route by which agents your developers write in code can be brought under the Purview policies you already run. Because Microsoft says the integration is not enabled automatically and needs developer implementation, which agents are covered is decided agent by agent in code. Microsoft Learn describes no tenant setting for it at the time of writing (November 2026).

The decisions land on security, compliance and FinOps teams: which DLP and collection policies apply to custom agents, who may read captured prompts, and who pays for the pay-as-you-go meter. Learn's Entra-registered app guidance requires pay-as-you-go billing for managing these AI interactions with Purview, so the cost conversation needs to happen before developers ship the middleware, not after.

## Risk assessment

**Data exposure**
- Where the middleware is attached, prompts and responses are sent to Purview for evaluation. Captured interactions can be read in DSPM for AI (classic) activity explorer by members of the Microsoft Purview Content Explorer Content Viewer role group; keep that role group small.
- Microsoft's notice says the integration needs developer implementation, so a custom agent whose developers do not add it is not using this integration. Confirm coverage with each development team.

**Security & identity**
- The Python documentation says policy evaluation fails closed when the middleware cannot resolve a user ID, tenant or application location, and warns that the ignore_exceptions setting bypasses enforcement for every error. Ask developers whether it is set.
- The Python documentation advises deriving identity from a validated server-side token, not from caller-controlled message fields.

**Autonomy & actions**
- Agent middleware evaluates the caller's input and final response once per run and does not evaluate a model tool call before the tool runs; the chat middleware does. Agents that call tools therefore need the chat middleware if policy must cover the full model request.
- Both Python middleware types buffer a streamed response in full before releasing it, so agents with streaming user interfaces lose incremental output.

**Change & support**
- Rollout is paused per MC1302905 and the roadmap target is March CY2027, while Learn documentation is already live. Expect developers to ask for the integration before Microsoft confirms availability.
- DLP policies for these agents are created with PowerShell, not in the Microsoft Purview portal, which raises the skill needed from the compliance team.

## Cost and licensing

Licence: the Agent Framework page lists a Microsoft 365 subscription with an E5 licence and pay-as-you-go billing as prerequisites, along with an Azure subscription with Microsoft Purview configured. The Learn page for Entra-registered AI apps also says managing these interactions with Purview requires pay-as-you-go billing.

Meter: the Purview billing models page says pay-as-you-go charges appear on an Azure bill generated at the end of the month. Its table lists "Data Security for Gen AI Applications" with a unit of requests or messages for non-Microsoft 365 AI interactions (prompts or responses). Classification and protection of non-Microsoft 365 custom-agent interactions fall under Data Security for Gen AI Applications, measured in requests or messages. The billing page points to Azure pricing pages for rates and none is quoted here.

Indirect costs: developer time to add and test the middleware, and compliance time to write DLP policies in PowerShell. The pages cited state no spending cap for this integration.

## Scope

Affected: organisations building custom agents with Microsoft Agent Framework, plus the security, compliance and governance teams behind them. MC1302905 also lists tenants with Microsoft Purview licences that enable SDK usage.

Roadmap record: Microsoft Purview, Worldwide (Standard Multi-Tenant) only, platform Web, targeted for March CY2027, release phases General Availability and Preview. No other clouds are listed on the roadmap item. Rollout is paused as of MC1302905's 19 October 2026 update.

Prerequisites on Learn: an Azure subscription with Purview configured, a Microsoft 365 E5 licence with pay-as-you-go billing, and the Agent Framework SDK (pip install agent-framework for Python, NuGet for .NET).

## Governance guidance

### Before rollout
- Ask development teams which custom agents use Microsoft Agent Framework and whether they plan to add the Purview middleware; MC1302905 says the integration needs developer implementation.
- Confirm pay-as-you-go billing is set up and budgeted against an Azure subscription before the middleware is deployed.
- Draft the DLP rule for the agent's Entra app registration in PowerShell (see the DLP row in the controls table), because the portal does not currently support this.
- Decide whether prompts and responses should be stored in Purview, using the collection policy row.

### At rollout
- Create the collection policy from the DSPM for AI (classic) recommendation so that captured interactions reach Audit, Communication Compliance, Insider Risk Management and eDiscovery.
- Require developers to say which Purview middleware type they attached and whether ignore_exceptions is set.
- Test a blocked prompt end to end in a non-production tenant, and check the policy returns the block the agent must enforce.

### After rollout
- Review DSPM for AI (classic) reports for the Enterprise AI apps category, and allow at least a day for data to appear.
- Watch Message center for the announcement that ends the rollout pause.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether DLP blocks sensitive prompts for a custom Entra-registered agent</strong><br><small>App</small><br><small class="controls__note">Create the policy first using Example 4 in the linked New-DlpComplianceRule reference. Learn says the Purview portal does not currently support this for Entra-registered apps.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpComplianceRule -Name &quot;&lt;rule&gt;&quot; -Policy &quot;&lt;policy&gt;&quot; -ContentContainsSensitiveInformation @{Name = &quot;credit card number&quot;} -RestrictAccess @(@{setting=&quot;UploadText&quot;;value=&quot;Block&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether prompts and responses from custom agents are captured and stored in Purview</strong><br><small>Tenant</small><br><small class="controls__note">The call turns ingestion off; New-FeatureConfiguration creates the policy. Learn's example of a suitable account is a member of the Microsoft Entra Compliance Administrator group role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › DSPM for AI (classic) › Recommendations › Secure interactions from enterprise apps <a href="https://learn.microsoft.com/purview/ai-entra-registered" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-FeatureConfiguration &quot;DSPM for AI - Collection policy for enterprise AI apps&quot; -ScenarioConfig '{&quot;Activities&quot;:[&quot;UploadText&quot;,&quot;DownloadText&quot;],&quot;EnforcementPlanes&quot;:[&quot;Application&quot;],&quot;SensitiveTypeIds&quot;:[&quot;All&quot;],&quot;IsIngestionEnabled&quot;:false}'</code> <a href="https://learn.microsoft.com/purview/developer/configurepurview" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The two rows cover the policy that blocks content and the policy that captures interactions. Microsoft Learn says the Microsoft Purview portal does not currently support creating DLP policies for Entra-registered applications, which is why the DLP row has no portal path. Learn gives that DLP support as a policy that blocks prompts based on sensitive information types.

The PowerShell example for the collection policy uses the name "DSPM for AI - Collection policy for enterprise AI apps", while the one-click recommendation in the portal is named "DSPM for AI - Capture interactions for enterprise AI apps"; check the actual name before running Set-FeatureConfiguration. Set-FeatureConfiguration is in Public Preview, is not available in all organisations, and is subject to change.

The interactions can also be retained: Learn says to go to Data Lifecycle Management > Policies > Retention Policies and select the location Enterprise AI apps. The controls table does not list this because its automation was not read. Both policy types are tenant-level Purview settings; the middleware choice itself sits in agent code, not in an admin centre.

## Open questions

- When will Microsoft end the rollout pause announced in MC1302905, and does the March CY2027 roadmap target still stand? Watch Message center and the roadmap item.
- What rate applies to Data Security for Gen AI Applications for our custom-agent usage? Check the Azure pricing page linked from the Purview billing models page.
- Is there a tenant-level way to see or require which custom agents use the Purview middleware? None is described in the Learn pages cited; watch the Agent Framework and Purview developer documentation.
- What Microsoft Graph permissions and Entra app registration settings does the middleware need in production, and who consents to them? The Learn page shows a client ID but does not describe the permissions.

<!-- rationale
risk: Medium. Prompts and responses from custom agents flow to Purview only where a developer adds the middleware, so the exposure that remains is agents built without it, and the DLP controls for this case are PowerShell-only.
cost: Variable. Microsoft Learn lists a Microsoft 365 E5 licence and pay-as-you-go billing as prerequisites; the pay-as-you-go meter is billed through an Azure subscription, and no rate for this integration is quoted here.
impact: Low. Developers and the security and compliance teams notice it; the Message Center post says there is no change to user experiences in Microsoft 365 services.
-->

<!-- verifier-findings (2026-11-18, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: Every control the governance checklist asks readers to check has a corresponding controls-table row. | Found: Checklist: "Confirm pay-as-you-go billing is set up and budgeted against an Azure subscription before the middleware is deployed." The table contains only a DLP rule and a collection policy, with no billing-enablement row. | Fix: Replace that Before rollout bullet with: "Review expected pay-as-you-go consumption with FinOps before the middleware is deployed." This retains the budgeting advice without directing readers to check an unlisted configuration control.
-->
