---
title: "Microsoft 365 Copilot: Work IQ APIs billed pay-as-you-go in Copilot Credits"
slug: "m365-copilot-work-iq-apis-pay-as-you-go-usage"
roadmapId: 559017
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Developers can call Work IQ APIs without a Microsoft 365 Copilot licence, billed by use in Copilot Credits. Administrators fund and govern the spend through spending policies in the Microsoft 365 admin center."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","DoD"]
platforms: ["Desktop","Linux","Mac","Web"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft says you pay for Work IQ API use through a usage-based model that uses Copilot Credits, independent of Microsoft 365 Copilot licensing. Users without a Microsoft 365 Copilot licence are billed on usage. Chat and Context rates are variable."
audiences: ["m365-admin","finops","service-owner","security"]
tags: ["work-iq","m365-copilot","copilot-credits","pay-as-you-go","spending-policies","cost-management","extensibility","mcp","a2a","dod"]
sources:
  - title: "Microsoft 365 Roadmap 559017"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559017"
    kind: "roadmap"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/plugins/cost-considerations"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Microsoft Work IQ general availability: release details and features"
    url: "https://www.microsoft.com/en-us/licensing/news/work-iq-general-availability"
    kind: "docs"
  - title: "Whether a spending policy covers Work IQ API for custom apps and agents (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-update"
    kind: "learn"
  - title: "Monthly policy limit and per-user limit for Copilot Credits (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Where Copilot Credit consumption by service and user is reviewed (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list"
    kind: "learn"
videos: []
related: ["work-iq","spending-policies","copilot-credits","m365-copilot-work-iq-apis-unified-rest-endpoint-for-agents-and-workflows"]
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
    note: "The request body sets state; disabling the last enabled service returns 409 atLeastOneServiceRequired. Delegated only; needs CopilotCostManagement-Policy.ReadWrite.All. Applies per policy."
  - governs: "Monthly policy limit and per-user limit for Copilot Credits"
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
  - governs: "Where Copilot Credit consumption by service and user is reviewed"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management > Consumption"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    api:
      kind: "graph"
      call: "GET /beta/copilot/costManagement/usageReports/serviceUsageRecords"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list"
    note: "Read-only report; it changes no setting. The reference example uses startDate and endDate query parameters."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-21T23:04:49"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: pay-as-you-go Work IQ API billing in Copilot Credits and the spending-policy controls that govern it."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 86 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 86
  confirmed: 80
  unconfirmed: 1
  contradicted: 5
  attempts: 1
  hash: "2d086479c23380f5df93a697a09e4b4d"
---

## What's changing

Work IQ API endpoints can now be used on a metered, pay-as-you-go basis. The roadmap item says developers can invoke agents and capabilities without pre-assigned licences, with usage billed on the agents and models invoked per request.

Microsoft Learn describes Work IQ API as three routes: A2A (agent-to-agent), MCP (Model Context Protocol) and REST. The Work IQ overview says usage is independent of Microsoft 365 Copilot licensing and available through usage-based billing. Microsoft's announcement of 2 June 2026 says Work IQ API reaches general availability on 16 June and is billed in Copilot Credits, with no separate Work IQ API subscription, SKU or per-user licence.

The announcement says you pay Work IQ API charges directly when you build your own agent or app that calls the APIs, or use a third-party agent that grounds in your Microsoft 365 data through them. The Work IQ overview adds that Microsoft 365 Copilot licensed users get Work IQ in Microsoft 365 Copilot experiences and agents, subject to usage-based billing for custom and third-party agents.

The roadmap record lists the item as Launched, with a General Availability release phase and a June CY2026 target, for Worldwide (Standard Multi-Tenant) and DoD. It lists Desktop, Linux, Mac and Web as platforms. No end-user change is described.

## Why it matters

This moves Work IQ API cost from licences to a meter that administrators control. Developers can start calling the endpoints under a billing plan, and the bill lands on the tenant's Copilot Credits, which the Work IQ API shares with other eligible services. Spending policies set access and limits but do not reserve credits, so a busy Work IQ app can compete with Cowork or Copilot Studio for the same pool.

Microsoft has not stated what happens on arrival if nobody acts, and no source says existing behaviour changes. The practical step is to decide, before a team ships against the API, which spending policy covers Work IQ API, what its limits are and who is notified when usage rises.

## Risk assessment

**Data exposure**
- Work IQ reasons over email, meetings and calendar data, OneDrive and SharePoint documents, Teams messages, people context, Planner plans, enterprise search results and data from Copilot Connectors. Learn says access is permission-trimmed and runs as the signed-in user, so each caller sees only what that user can see.
- Existing Microsoft 365 admin center controls that allow or block Copilot Connectors also apply when connectors are accessed through Work IQ APIs, per the Work IQ overview.

**Security & identity**
- Work IQ uses Microsoft Entra ID delegated authentication and does not support application-only authentication. Sensitivity labels and compliance policies are enforced automatically, per the API overview.
- Enabling the tenant needs a Global Administrator for the one-time Work IQ service principal setup, per the enablement page.

**Autonomy & actions**
- The A2A route is described as agent collaboration in which agents operate autonomously. The Work IQ MCP tools give access to mail, calendar, files, people, chat and sites and the ability to act on that data, so review the MCP route separately from read-only grounding.

**Change & support**
- A Work IQ chat request can fail with `QuotaExhausted` even when the tenant has prepaid credits, because a spending policy defines limits and not a reserved allocation. Expect developer tickets when a policy does not select Work IQ API.
- When a user reaches a policy limit, Microsoft says they lose access to agents and services for the rest of the month until credits reset on the first.

## Cost and licensing

**Licence.** Learn says Work IQ API is licensed under your agreement governing use of Microsoft Online Services, including the Microsoft Product Terms. Access is independent of Microsoft 365 Copilot licensing, and users without a Microsoft 365 Copilot licence are billed based on usage. A Microsoft 365 Copilot licence does not replenish the Work IQ API credit balance, per the cost considerations page.

**Meter.** The unit is the Copilot Credit. The announcement lists two charge types: Work IQ Chat API and Context API use is variable by scenario, and Work IQ Tool API calls are 0.1 Copilot Credits per API call. It says its example prices are illustrative and vary with the complexity of the scenario, and points to the Copilot Credit Guide for current rates.

**Billing method.** Credits are billed to the subscription chosen as the billing method. Microsoft says that when prepaid credits for that subscription run out, usage continues on a pay-as-you-go basis. Prepaid capacity packs, a Copilot Credit Pre-purchase plan (P3) and pay-as-you-go can be combined, in that order of use.

**Limits.** A policy can carry a monthly limit and a per-user limit. Microsoft's page asks for at least 2,000 credits per user per month. Limits do not reserve credits, and Work IQ API draws on a shared tenant pool. Charges and consumption appear in the Microsoft 365 admin center under Copilot > Cost management.

A fixed credit rate for a Chat API or Context API request is not part of the announcement, which describes those charges as variable.

## Scope

**Users and licences.** No Work IQ-specific licence is needed. Callers are signed-in users, because application-only authentication is not supported. Users with and without a Microsoft 365 Copilot licence are both covered by usage-based billing.

**Roles.** Global administrator and Billing administrator roles can add, select and change billing methods and set them in policies. AI administrator and License administrator roles can edit spending policies, limits and alerts but cannot create them. Reader roles such as AI Reader and Global Reader can view consumption.

**Prerequisites.** The enablement page lists a usage-based billing plan with an Azure subscription and resource group, the user assigned to that plan, and a Global Administrator for the one-time Work IQ setup, which creates the Work IQ service principal.

**Clouds and platforms.** The record lists Worldwide (Standard Multi-Tenant) and DoD, and Desktop, Linux, Mac and Web. The Work IQ overview and API overview pages say nothing about which clouds the APIs are offered in, so confirm DoD availability with Microsoft before planning a DoD deployment.

## Governance guidance

### Before rollout
- Ask development teams which apps will call the Work IQ A2A, MCP or REST endpoints and which spending policy their users fall under.
- Check that usage-based billing is activated under Copilot > Cost management with a billing method, and note which of the Global Administrator, Billing administrator and AI administrator roles will manage it.
- Review each spending policy's selected services and its Auto-apply new services setting, which Microsoft says is on by default.

### At rollout
- Select Work IQ API in the spending policies whose users should use it, and exclude it from policies whose users should not consume credits through it.
- Set a monthly policy limit and a per-user limit, remembering that Microsoft's page asks for at least 2,000 credits per user per month and that limits do not reserve credits.
- Ask a Global Administrator to complete the one-time Work IQ service principal setup that the enablement page describes.

### After rollout
- Review credit consumption by service and user on the Consumption tab, or through the Cost Management usage report API, and tune limits.
- Investigate `QuotaExhausted` errors by checking the policy's service selection, limits and billing method.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a spending policy covers Work IQ API for custom apps and agents</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets state; disabling the last enabled service returns 409 atLeastOneServiceRequired. Delegated only; needs CopilotCostManagement-Policy.ReadWrite.All. Applies per policy.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Agents and services <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings/{serviceId}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Monthly policy limit and per-user limit for Copilot Credits</strong><br><small>Group</small><br><small class="controls__note">The request body sets periodLimit and perUserLimit. Limits do not reserve credits. Delegated only; needs CopilotCostManagement-Policy.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › spending policy › Spending limits <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Where Copilot Credit consumption by service and user is reviewed</strong><br><small>Tenant</small><br><small class="controls__note">Read-only report; it changes no setting. The reference example uses startDate and endDate query parameters.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management › Consumption <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /beta/copilot/costManagement/usageReports/serviceUsageRecords</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

All three rows are Copilot Credits controls. They decide who may consume Work IQ API credits and how much, and where to read what was spent.

Excluding Work IQ API from one policy does not exclude it from other policies, including the default policy, so review every policy that covers the user. If a user is in several policies for the same service, the policy with the highest per-user limit applies, and settings from other policies are not combined. Learn marks the Graph calls as `/beta`, delegated only, and requiring `CopilotCostManagement-Policy.ReadWrite.All` for writes.

## Open questions

- Does Microsoft offer Work IQ API in the DoD cloud the roadmap record lists, and with which routes (A2A, MCP, REST)? Watch the Work IQ overview and Message center.
- What does a Chat API or Context API request cost for a typical scenario? The announcement gives only variable charges and illustrative examples.
- What does Work IQ API do on arrival in a tenant where usage-based billing has not been activated? Microsoft has not stated the default.

<!-- rationale
risk: Medium. Apps that call Work IQ run as a signed-in user and reach that user's Microsoft 365 data, and every call draws shared Copilot Credits. Spending policies and limits cover the spend, but someone has to set them.
cost: Variable. Work IQ API use is metered in Copilot Credits, with no separate subscription, SKU or per-user licence. Tool API calls are 0.1 credits each; Chat and Context charges vary by scenario.
impact: Low. Developers who build against the endpoints and the billing administrators who fund them notice it. No change for end users is described by the roadmap item or the Learn pages.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters; Open questions / default: Microsoft has not stated Work IQ API's default when billing has not been activated. | Found: Before Work IQ usage can begin at GA on June 16, an administrator must enable consumptive billing. | Fix: Set defaultState to admin-opt-in. Replace the unstated-default sentence with 'Before Work IQ API usage can begin, an administrator must enable consumption-based billing.' Remove the default-state open question and cite https://learn.microsoft.com/partner-center/announcements/2026-june#work-iq-api-and-consumptive-pricing-update. | Source: https://learn.microsoft.com/partner-center/announcements/2026-june#work-iq-api-and-consumptive-pricing-update
- [contradicted, blocker] Why it matters; rationale: impact / absence: No source describes existing behaviour or end-user access changing. | Found: On June 16, administrators can configure service and user access in the Microsoft admin center to continue using Work IQ with third-party solutions. | Fix: Replace 'no source says existing behaviour changes' and the rationale's claim that Learn describes no end-user change with 'Microsoft says customers using Work IQ API through custom or third-party agents need administrators to configure billing and access to continue using those solutions.' Cite https://learn.microsoft.com/partner-center/announcements/2026-june#work-iq-api-and-consumptive-pricing-update. The narrower statement about the roadmap description alone can remain. | Source: https://learn.microsoft.com/partner-center/announcements/2026-june#work-iq-api-and-consumptive-pricing-update
- [unsupported, major] Why it matters / behaviour: This change moves Work IQ API cost from licences to a meter. | Found: Searched: Work IQ API previous licensing preassigned licenses pay as you go. Read the roadmap, API overview, Work IQ overview, licensing announcement and June partner announcement; these establish consumption billing, not a previous licence-based API model. | Fix: Replace the opening sentence with 'Work IQ API use incurs metered Copilot Credit consumption that administrators govern through spending policies.'
- [contradicted, blocker] controls[2].api; controls[2].governs; Governance guidance: After rollout / command: GET /beta/copilot/costManagement/usageReports/serviceUsageRecords reports consumption by both service and user. | Found: Get a list of costManagementServiceUsageRecord objects that report each governed service's share of the tenant's consumption of Copilot Credits for one completed UTC day. | Fix: Keep the endpoint but change controls[2].governs and its rendered label to 'Where Copilot Credit consumption by service is reviewed'. Replace the After rollout bullet with 'Review credit consumption by service and user on the Consumption tab, or by service through the Cost Management service usage report API, and tune limits.' | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list
- [contradicted, blocker] Governance controls: final paragraph / command: All three Graph calls are delegated only. | Found: Application | CopilotCostManagement-Reports.Read.All | CopilotCostManagement.Read.All | Fix: Replace the delegated-only statement with 'The two write operations are delegated only and require CopilotCostManagement-Policy.ReadWrite.All. The service usage report supports delegated and application permissions, with CopilotCostManagement-Reports.Read.All as its least-privileged permission.' | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity; Scope; Governance guidance: At rollout / role: The enablement guide requires a Global Administrator for one-time service principal setup. | Found: A user with Global Administrator role for the one-time Work IQ setup | Fix: Keep the attribution to the enablement guide and add 'The Work IQ MCP overview also says the service principal is created automatically on first use; administrators can provision it beforehand if needed for policy configuration.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq
- [supported, minor] Governance controls: final paragraph; controls[].api / behaviour: All three Cost Management Graph calls use beta APIs. | Found: APIs under the /beta version are subject to change. Use of these APIs in production applications is not supported. | Fix: After identifying the Graph calls as beta, add 'These beta APIs are subject to change and are not supported for production applications.' All three cited API references carry that warning. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update
- [contradicted, minor] Governance guidance: Before rollout; At rollout; controls / consistency: The checklist names billing activation, Auto-apply new services and service principal setup controls that have no corresponding table rows. | Found: Check that usage-based billing is activated ... Review each spending policy's ... Auto-apply new services setting ... Ask a Global Administrator to complete ... setup. The table has only service selection, limits and consumption rows. | Fix: Remove the checklist bullets directing readers to check billing activation and complete service principal setup; retain those requirements in Scope. Narrow the Before rollout policy-review bullet to 'Review each spending policy's selected services.' These checklist controls have no rows; do not add rows in this correction.
-->
