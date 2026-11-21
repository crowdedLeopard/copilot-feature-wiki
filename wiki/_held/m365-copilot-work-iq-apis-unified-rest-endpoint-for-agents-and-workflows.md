---
title: "Microsoft 365 Copilot: Work IQ REST API for custom apps, billed in Copilot Credits"
slug: "m365-copilot-work-iq-apis-unified-rest-endpoint-for-agents-and-workflows"
roadmapId: 559021
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The Work IQ REST API lets custom apps hold multi-turn conversations with Microsoft 365 Copilot. It is billed in Copilot Credits, so administrators should check spending policies. No end-user change is described."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft says Work IQ API is paid for through a usage-based model that uses Copilot Credits, independent of Microsoft 365 Copilot licensing, with no separate subscription, SKU or per-user licence. A fixed Chat API credit rate is not yet published."
audiences: ["m365-admin","finops","security","service-owner"]
tags: ["work-iq","m365-copilot","extensibility","copilot-credits","usage-based-billing","spending-policies","a2a","mcp"]
sources:
  - title: "Microsoft 365 Roadmap item 559021"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559021"
    kind: "roadmap"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Overview of the Work IQ REST API"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/rest/overview"
    kind: "learn"
  - title: "Work IQ - copilotConversation: chat"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/rest/copilotconversation-chat"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Work IQ MCP overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Migrate agentic retrieval workflows to Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/migrate-retrieval-api"
    kind: "learn"
  - title: "Use Copilot Connectors with Work IQ APIs"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/connectors-in-work-iq-apis"
    kind: "learn"
  - title: "Connect and use Work IQ in Claude"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/claude"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/plugins/cost-considerations"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Microsoft 365 Copilot Cost Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
  - title: "Microsoft Work IQ general availability: release details and features"
    url: "https://www.microsoft.com/en-us/licensing/news/work-iq-general-availability"
    kind: "docs"
  - title: "Update spendingPolicyServiceSetting"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-update"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
videos: []
related: ["work-iq","spending-policies","copilot-credits","mcp"]
controls:
  - governs: "Whether a spending policy covers Work IQ API for custom apps and agents"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > spending policy > Agents and services"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings/{serviceId}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-update"
    note: "The request body sets state; disabled removes a service unless it is the policy's last enabled service (409 atLeastOneServiceRequired). Delegated only; needs CopilotCostManagement-Policy.ReadWrite.All. Applies per policy."
  - governs: "Monthly policy limit and per-user limit for credits"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > spending policy > Spending limits"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "The request body sets periodLimit and perUserLimit. Limits do not reserve credits. Delegated only; needs CopilotCostManagement-Policy.ReadWrite.All."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-21T22:00:23"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: the Work IQ REST API, its Copilot Credits billing and the spending-policy controls that govern it."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: service removal in a spending policy cannot disable the last enabled service; removed the claim that MCP policy controls are undocumented for REST; clarified service principal provisioning; trimmed checklist items without a controls row."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 86 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 86
  confirmed: 84
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "ae60cae8363316ca9e288f37b2dc6946"
---

## What's changing

The roadmap item describes a new Work IQ REST endpoint that serves as a unified entry point for invoking agents and workflows, and as a consistent, scalable alternative to legacy Copilot Chat endpoints. The record lists it as Launched, with a preview target of May CY2026 and a general availability target of June CY2026, for Worldwide (Standard Multi-Tenant) on the Developer platform. The record does not name the legacy endpoints.

Microsoft Learn documents Work IQ API as three routes: A2A (agent-to-agent), MCP (Model Context Protocol) and REST. The REST route is the Work IQ Chat API, which creates and continues multi-turn conversations with Microsoft 365 Copilot, for example `POST https://workiq.svc.cloud.microsoft/rest/conversations/{conversationId}/chat`. The reference has a production version and a `/beta` version, and Learn says `/beta` APIs are not supported in production applications. The REST pages describe conversations grounded in enterprise search and web search; the wording about invoking workflows is the roadmap record's description.

Microsoft's licensing announcement, dated 2 June 2026, says Work IQ API reaches general availability on 16 June. Neither the record nor the pages read describe a change for end users, and no page states whether the endpoint is on or off for a tenant on arrival.

## Why it matters

This is a new way to spend Copilot Credits and a new way for custom code to reach Microsoft 365 data, and both sit with administrators even though developers choose the endpoint. Usage is billed to the tenant's shared Copilot Credits, so a department building an app against the REST API draws on the same pool as other eligible services.

Microsoft has not stated what happens on arrival, so base planning on the fact that no source says existing behaviour changes. The practical step is to decide which spending policy, if any, covers Work IQ API, before a team starts calling it.

## Risk assessment

**Data exposure**
- The REST API uses enterprise search grounding and web search grounding by default, and can take OneDrive and SharePoint files as context. Learn says Microsoft 365 permissions mean individuals get results only from content they are allowed to access. Switching web grounding off is a single-turn action, repeated for each chat message.
- Copilot Connectors sources are reachable through Work IQ APIs, and Learn says the existing Microsoft 365 admin center controls that allow or block Copilot Connectors also apply there.

**Security & identity**
- Work IQ uses Microsoft Entra ID delegated authentication and does not support application-only authentication, so every call runs as a signed-in user. The Chat API lists `WorkIQAgent.Ask` as its delegated permission.
- Learn's Claude walkthrough describes `WorkIQAgent.Ask` as including read and write access to Microsoft 365 resources accessible to the user, while the REST overview says the REST API does not support actions such as sending emails. Treat the permission as broader than read-only until Microsoft reconciles the two pages.

**Autonomy & actions**
- The REST overview lists no support for action or content generation skills such as creating files, sending emails or scheduling meetings, and says responses are text only. The A2A route is described as agent collaboration where agents operate autonomously, so review that route separately from REST.

**Change & support**
- A Work IQ chat request can fail with `QuotaExhausted` even when the tenant has prepaid credits, because a spending policy defines limits and not a reserved allocation. Expect help-desk questions from developers when a policy lacks the Work IQ API service.
- The record calls this an alternative to legacy Copilot Chat endpoints without naming them. Inventory which internal apps call Copilot Chat endpoints before assuming any migration is needed.

## Cost and licensing

Work IQ API has no separate subscription: Microsoft's licensing announcement says there is no separate Work IQ API subscription, SKU or per-user licence. The Work IQ API overview page says you pay for use through a usage-based model that uses Copilot Credits, under the agreement governing Microsoft Online Services.

The Work IQ overview says access is independent of Microsoft 365 Copilot licensing. Users with a Microsoft 365 Copilot licence get Work IQ in Microsoft 365 Copilot experiences and agents, subject to usage-based billing for custom and third-party agents, and users without that licence are billed on usage. Learn also says a Microsoft 365 Copilot licence does not replenish the Work IQ API credit balance.

The announcement gives two charge types: Chat API and Context API use is variable by scenario, and Tool API calls are 0.1 Copilot Credits per call. Its example prices are described as illustrative. A fixed credit rate for a Chat API request is not yet published.

Charges and consumption appear in the Microsoft 365 admin center under Copilot > Cost management. Spending policies set access and limits; they do not reserve credits, and Work IQ API draws on a shared tenant pool. Learn says users who reach a policy limit lose access to agents and services until credits reset on the first of the month. Creating a spending policy needs the Billing Administrator or Global Administrator role, and the policy page asks for at least 2,000 credits per user per month as the monthly user limit.

## Scope

The record lists Worldwide (Standard Multi-Tenant) only and the Developer platform, with General Availability and Preview as release phases. It lists no US Government clouds; that is a record fact, not a statement that the API is unavailable there.

Callers sign in as a user: Learn says application-only authentication is not supported. The enablement page documents one-time manual provisioning of the Work IQ service principal. The MCP overview also says that this principal is created automatically on first use and manual provisioning can be needed before that. The enablement page lists a usage-based billing plan with an Azure subscription and resource group as a prerequisite.

Who can spend depends on spending policy scope. Learn's Claude walkthrough lists an identity-based spending policy covering the users and the Work IQ API service as a prerequisite for that integration.

## Governance guidance

### Before rollout
- Ask development teams which apps will call the Work IQ REST, A2A or MCP endpoints, and who owns each app registration.
- Review each existing spending policy under Copilot > Cost Management > Configuration and note whether Work IQ API for custom apps and agents is selected; Learn says Auto-apply new services is enabled by default.

### At rollout
- Create or edit an identity-based spending policy to select the Work IQ API service, and exclude the service from policies whose users should not consume credits through it. The API refuses to disable a policy's last enabled service.
- Set the policy and per-user limits, remembering that Learn's policy page asks for at least 2,000 credits per user per month and that limits do not reserve credits.

### After rollout
- Investigate any `QuotaExhausted` error by checking the policy's service selection, limits, billing method and prepaid capacity.
- Re-read the Work IQ REST reference when Microsoft moves the `/beta` operations to production.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a spending policy covers Work IQ API for custom apps and agents</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets state; disabled removes a service unless it is the policy's last enabled service (409 atLeastOneServiceRequired). Delegated only; needs CopilotCostManagement-Policy.ReadWrite.All. Applies per policy.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Agents and services <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings/{serviceId}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly policy limit and per-user limit for credits</strong><br><small>Group</small><br><small class="controls__note">The request body sets periodLimit and perUserLimit. Limits do not reserve credits. Delegated only; needs CopilotCostManagement-Policy.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Spending limits <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are spending-policy controls. They decide who may consume Work IQ API credits and how much; they are not a switch that blocks the endpoint itself. Learn's cost page notes that excluding a service from one policy does not exclude it from other policies, including the default policy.

The Graph calls are `/beta`, delegated only and need the `CopilotCostManagement-Policy.ReadWrite.All` permission. The enablement page documents one-time manual provisioning of the Work IQ service principal, and the MCP overview says the principal is created automatically on first use.

The Work IQ MCP policy and block controls in the Microsoft 365 admin center are documented for the MCP server. Separately, Learn's connectors page says administrators can explicitly enable or disable connector participation in Work IQ paths through tenant-level policies.

## Open questions

- Which legacy Copilot Chat endpoints does the roadmap mean, and will Microsoft publish retirement dates in Message center or the Work IQ API overview?
- Does Microsoft document a tenant control that blocks the Work IQ REST API itself, as opposed to limiting who can spend credits on it?
- What credit rate applies to a typical Work IQ Chat API request? The announcement lists it as variable by scenario.
- What is the state on arrival for a tenant that has not configured billing?
- Which operations does the REST API offer for invoking agents and workflows, beyond the multi-turn chat the reference documents?

<!-- rationale
risk: Medium. An app holding the delegated WorkIQAgent.Ask permission can query a signed-in user's Microsoft 365 data, and Learn describes that permission in one walkthrough as including write access. Nothing starts until an app is built and granted the permission.
cost: Variable. Work IQ API use is billed in Copilot Credits with no separate subscription, SKU or per-user licence, and Microsoft has not published a fixed credit rate for the Chat API.
impact: Low. The people who notice are developers who build against the endpoint and the administrators who fund it; no change for end users is described.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; What's changing; Why it matters; Open questions / default: The default state is unknown because Microsoft has not stated what happens on arrival, including for a tenant without billing configured. | Found: Before Work IQ usage can begin at GA on June 16, an administrator must enable consumptive billing. | Fix: Set defaultState to admin-opt-in. Replace the last clause of What's changing about no stated tenant on/off state, and the first sentence of Why it matters' second paragraph, with: 'Microsoft says an administrator must enable consumption billing before Work IQ API usage can begin.' Replace the Open questions bullet about a tenant without billing with: 'A tenant without consumption billing configured cannot begin Work IQ API usage; an administrator must enable billing first.' Cite https://learn.microsoft.com/partner-center/announcements/2026-june#work-iq-api-and-consumptive-pricing-update. | Source: https://learn.microsoft.com/partner-center/announcements/2026-june#work-iq-api-and-consumptive-pricing-update
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Copilot Connector sources are reachable through Work IQ APIs. | Found: Copilot Connectors, both synced and federated, participate in Work IQ APIs when they're available to the signed-in user and connected by that user as data sources in Microsoft 365 Copilot Chat. | Fix: Replace 'Copilot Connectors sources are reachable through Work IQ APIs' with 'Work IQ APIs can reach Copilot Connector sources that are available to the signed-in user and connected by that user in Microsoft 365 Copilot Chat; not every configured connector is available through Work IQ.' The qualifications are at https://learn.microsoft.com/microsoft-365/copilot/connectors/connectors-in-work-iq-apis. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/connectors-in-work-iq-apis
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist asks readers to check billing method and prepaid capacity, but neither has a controls-table row. | Found: Investigate any `QuotaExhausted` error by checking the policy's service selection, limits, billing method and prepaid capacity. The table contains only service coverage and policy/per-user limits. | Fix: Replace the After rollout bullet with: 'Investigate any `QuotaExhausted` error by checking the policy's service selection and limits.' Do not add controls-table rows as part of this correction.
-->
