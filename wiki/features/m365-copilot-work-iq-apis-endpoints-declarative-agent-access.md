---
title: "Microsoft 365 Copilot: Work IQ API access to declarative agents"
slug: "m365-copilot-work-iq-apis-endpoints-declarative-agent-access"
roadmapId: 559019
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Apps can call declarative agents through the Work IQ endpoint. Work IQ API use requires admin-approved permissions and configured usage-based billing, and is billed in Copilot Credits through spending policies."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "June CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Work IQ API access is independent of Microsoft 365 Copilot licensing and is available through usage-based billing; use consumes Copilot Credits. The cited Learn pages do not give a fixed credit rate for requests to declarative agents. Microsoft's pricing announcement describes Work IQ Chat and Context consumption as variable."
audiences: ["m365-admin","finops","security","service-owner"]
tags: ["work-iq","m365-copilot","declarative-agents","a2a","mcp","usage-based-billing","spending-policies","copilot-credits","extensibility"]
sources:
  - title: "Microsoft 365 Roadmap 559019"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559019"
    kind: "roadmap"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Use the retrieve tool in Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/retrieve"
    kind: "learn"
  - title: "Work IQ A2A quickstart"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Work IQ API permissions reference"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/permissions"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Work IQ MCP overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/plugins/cost-considerations"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "spendingPolicy resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/spendingpolicy"
    kind: "learn"
  - title: "Declarative agent architecture"
    url: "https://learn.microsoft.com/plugins/declarative-agent-architecture"
    kind: "learn"
  - title: "Declarative agent schema 1.4 for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/declarative-agent-manifest-1.4"
    kind: "learn"
  - title: "Microsoft Work IQ general availability"
    url: "https://www.microsoft.com/en-us/licensing/news/work-iq-general-availability"
    kind: "docs"
videos: []
related: ["work-iq","work-iq-retrieve","spending-policies","mcp","copilot-credits"]
controls:
  - governs: "Whether Work IQ is enabled for the tenant"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "POST /v1.0/servicePrincipals"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    note: "Global Administrator, one-time. The request body sets appId to the Work IQ application ID given on the page. The page also gives an Azure CLI route."
  - governs: "Which apps may call Work IQ (admin consent for WorkIQAgent.Ask)"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > App registrations > app > API permissions > Grant admin consent for [your tenant]"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart"
    api:
      kind: "azure-cli"
      call: "az ad app permission admin-consent --id <APP_ID>"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart"
    note: "Steps are from the A2A quickstart's app registration. The page lists admin consent as required for WorkIQAgent.Ask."
  - governs: "Spending limits and billing methods for an existing Work IQ API spending policy"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta. Updates limits and billing methods; user/group assignments and service access use separate operations. Cost management is the dashboard entry point; use its Configuration experience to configure policies."
  - governs: "Work IQ MCP tool-request policy, including write operations"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "Described for MCP tool requests; changes can take up to 24 hours to apply. On the Policy tab, review the current policy state and turn policy on or off for the tenant as needed; the tab is shown when available."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-19T22:58:06"
changes:
  - date: "2026-11-21"
    note: "First briefing for this roadmap item, covering Work IQ endpoint access to declarative agents, billing and the tenant controls."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 64 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the spending-policy control to limits and billing methods only, removed an unsupported claim about agent choice, and reworded enablement and credit-rate statements to match Microsoft's pages."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 84 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 84
  confirmed: 83
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "39e7ce8473ce816f2994a2e22be1c924"
---

## What's changing

Applications can now reach declarative agents (agents configured with instructions, knowledge and actions rather than a custom conversational engine) through the Work IQ endpoint, so a workflow can hand a domain-specific task to a specialised agent. The roadmap item describes this as programmatic access to first-party and tenant-defined declarative agents via the Work IQ endpoint.

Learn describes Work IQ API endpoints as A2A (agent-to-agent), a remote MCP server and a REST API. Two pages show a caller choosing an agent. In the MCP `retrieve` tool, "By default, retrieval uses the built-in Microsoft 365 Copilot agent" and a caller can pass another available declarative agent's identifier in `agentId`; the tool is documented as public preview. In the A2A quickstart, a caller passes an agent ID to invoke a specific agent. That page also says some Word, Excel and PowerPoint agents don't produce useful responses when invoked headlessly via A2A.

A request that names a nondefault `agentId` can't also carry a nonempty `capabilities` array: the retrieve page says the declarative agent defines its own data scope and Work IQ rejects requests that add a separate capability scope.

The roadmap record gives status Launched, a preview date of April CY2026 and a target of June CY2026, with release phases General Availability and Preview, platform Developer and the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

This change gives your developers a route to your tenant's agents from outside Microsoft 365 apps. The agent receives the signed-in user's context, and spend lands on a meter your finance team may not have set up. Work IQ requests run as the signed-in user, and the permissions page describes WorkIQAgent.Ask as covering read and write access to resources that Work IQ agents can reach.

No source says Work IQ is on for your tenant by default. Work IQ API use requires admin-approved permissions and configured usage-based billing, so the decision is whether to enable it, who may use it and what to spend. Once enabled, anyone assigned to a spending policy that includes Work IQ API can generate cost.

## Risk assessment

**Data exposure**
- Retrieval and chat run as the signed-in user and, per the retrieve page, don't grant access to content that the user can't otherwise access. A declarative agent chosen through `agentId` defines its own data scope, so check what each agent you expose is grounded on.
- The retrieve tool returns source content with sensitivity-label metadata when available; the page tells developers not to treat a missing or unrecognised `contentProtection` value as an allow decision. That duty sits with the calling app.

**Security & identity**
- Work IQ uses Microsoft Entra delegated authentication; application-only authentication isn't supported. Admin consent for the delegated WorkIQAgent.Ask permission is required, so the consent grant is your main gate on which apps can call it.
- The one-time enablement needs a Global Administrator, and it creates the Work IQ service principal for the whole organisation.

**Autonomy & actions**
- WorkIQAgent.Ask is described as covering read and write access to Microsoft 365 resources accessible to Work IQ agents. For Work IQ MCP, the policy page states that mutation operations are not allowed by default and that admins can enable supported mutation scenarios through tenant policy.
- Whether that MCP policy also applies to A2A or REST calls to a declarative agent is not stated.

**Change & support**
- The retrieve tool is in public preview and its schema can change, so developers are told to read `tools/list` instead of hard-coding it.
- A 403 can come from a user not being in a usage-based billing plan or from missing admin consent; the troubleshooting tables name both.

## Cost and licensing

Work IQ API access is independent of Microsoft 365 Copilot licensing and is available through usage-based billing, per the Work IQ overview. Users without a Microsoft 365 Copilot licence are billed based on usage. For licensed users, Work IQ is available in all Microsoft 365 Copilot experiences and agents, and is subject to usage-based billing for custom and third-party agents. A Microsoft 365 Copilot licence does not replenish the Work IQ API credit balance.

The meter is Copilot Credits, shared with other eligible services. Setup needs a usage-based billing plan with an Azure subscription and resource group, and users assigned to a spending policy that includes Work IQ API. Spending policies set access and limits; the plan-and-cost page says they don't reserve credits, and that pay-as-you-go can be configured so usage continues when prepaid credits run out. Excluding Work IQ API from one policy does not exclude it from other policies, so review every policy that covers a user.

The cited Learn pages do not give a fixed credit rate for requests to declarative agents at the time of writing (November 2026). Microsoft's [pricing announcement](https://www.microsoft.com/en-us/licensing/news/work-iq-general-availability) describes Work IQ Chat and Context consumption as variable. Indirect cost is admin time for enablement, consent and policy review.

## Scope

**Who and where.** The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Developer platform.

**Prerequisites.** A Global Administrator performs the one-time enablement. A usage-based billing plan must exist and the calling user must be assigned to a spending policy covering Work IQ API. The calling app needs a Microsoft Entra registration with admin consent for the delegated WorkIQAgent.Ask permission.

**Rollout.** Work IQ API use requires admin-approved permissions and configured usage-based billing. The permissions and setup pages require tenant enablement, while the MCP overview says the service principal is created automatically on first use and manual provisioning is needed in some corner cases.

## Governance guidance

### Before rollout
- Confirm with developers which apps will call declarative agents through Work IQ, and which agent IDs they will use.
- Review the spending policies that would cover those users, including their per-user and policy limits, billing method and whether Work IQ API is selected.
- Decide whether pay-as-you-go should be a billing method, remembering that it lets usage continue after prepaid credits run out.

### At rollout
- Enable Work IQ with a Global Administrator account only once billing and policy are ready.
- Grant admin consent for WorkIQAgent.Ask on each approved app registration and review the permission wording before consenting.
- Assign pilot users to a spending policy that includes Work IQ API.

### After rollout
- Review Cost management consumption by user and service to see what Work IQ API use costs.
- Check the Work IQ MCP policy state if apps use the MCP endpoint, and expect up to 24 hours for a change to apply.
- Tell developers to surface policy-denied and quota errors, not retry them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ is enabled for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator, one-time. The request body sets appId to the Work IQ application ID given on the page. The page also gives an Azure CLI route.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/servicePrincipals</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which apps may call Work IQ (admin consent for WorkIQAgent.Ask)</strong><br><small>App</small><br><small class="controls__note">Steps are from the A2A quickstart's app registration. The page lists admin consent as required for WorkIQAgent.Ask.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations › app › API permissions › Grant admin consent for [your tenant] <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az ad app permission admin-consent --id &lt;APP_ID&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Spending limits and billing methods for an existing Work IQ API spending policy</strong><br><small>Group</small><br><small class="controls__note">Beta. Updates limits and billing methods; user/group assignments and service access use separate operations. Cost management is the dashboard entry point; use its Configuration experience to configure policies.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP tool-request policy, including write operations</strong><br><small>Tenant</small><br><small class="controls__note">Described for MCP tool requests; changes can take up to 24 hours to apply. On the Policy tab, review the current policy state and turn policy on or off for the tenant as needed; the tab is shown when available.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No row here is specific to declarative agents: the controls below govern the Work IQ endpoint as a whole. Microsoft Learn describes no setting that limits which declarative agents the Work IQ endpoint can reach at the time of writing (November 2026). The retrieve page says a declarative agent defines its own data scope.

The MCP policy page says the policy layer can apply across Work IQ experiences but describes only MCP tool requests, and its initial release is tenant-level only. Enablement is a Global Administrator task. Spending policies set limits, not reserved credits.

## Open questions

- Which admin controls decide which declarative agents the Work IQ endpoint can reach? Learn names none today; watch the Work IQ overview and agent management pages.
- Does the Work IQ MCP policy apply to A2A and REST calls that target a declarative agent? Watch the policy governance page.
- What credit rate applies to requests that go to a declarative agent? The cited Learn pages give no fixed rate and Microsoft's pricing announcement describes Work IQ Chat and Context consumption as variable. Watch the usage-based billing overview and the Copilot Credits licensing guide.
- Which parts of this roadmap item are still preview? The record lists both General Availability and Preview, and the retrieve tool is marked public preview.

<!-- rationale
risk: Medium. The WorkIQAgent.Ask permission is documented as giving read and write access to Microsoft 365 resources scoped to the signed-in user, and Work IQ API use requires admin-approved permissions and configured usage-based billing.
cost: Variable. Work IQ API use is billed through usage-based billing in Copilot Credits, independent of Microsoft 365 Copilot licensing; the cited Learn pages give no fixed credit rate for requests to declarative agents.
impact: Low. Admins and developers who register apps and set billing notice it first; end users are affected only when a custom app or agent built on the endpoint reaches them.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; controls[2].note; Governance controls: spending row / admin-path: Copilot > Cost management in the Microsoft 365 admin center is the entry point for spending-policy limits and billing methods. | Found: In the Microsoft admin center, **Copilot > Cost management**, admins can monitor Copilot Credit consumption and manage spending associated with the supported services such as **Cowork**, running apps hosted on the **Copilot Managed Runtime**, and **Work IQ API**. | Fix: Extend controls[2].ui.path and its rendered counterpart to 'Copilot > Cost Management > Configuration > policy'. Add https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits#edit-spending-policy to sources: it documents selecting Configuration, selecting the policy, and editing Spending limits and Billing method in the details fly-out. The present path stops early on the correct dashboard. | Source: https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits
- [supported, minor] controls[2].api; controls[2].note; Governance controls: spending row / command: PATCH /beta/copilot/costManagement/spendingPolicies/{id} updates an existing spending policy's limits and billing methods. | Found: The following properties can be updated: `displayName`, `periodLimit`, `perUserLimit`, and `billingMethods`. PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/3f9e2c1a-0000-0000-0000-00000000c21b | Fix: Keep the call unchanged. Add to controls[2].note and its rendered counterpart: 'The request body uses periodLimit and perUserLimit for limits, and billingMethods for funding.' These are the deciding properties documented at https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update
- [contradicted, minor] Governance guidance: Before rollout and At rollout; Governance controls / consistency: The governance checklist's user-assignment and service-selection controls are represented in the controls table. | Found: Checklist: "whether Work IQ API is selected"; "Assign pilot users to a spending policy that includes Work IQ API." Table note: "user/group assignments and service access use separate operations." The spending row covers only limits and billing methods. | Fix: Remove the checklist bullet 'Assign pilot users to a spending policy that includes Work IQ API.' Replace the Before rollout spending-policy bullet with 'Review the spending policies that would cover those users, including their per-user and policy limits and billing method.' These checklist controls have no corresponding row; do not add rows as part of this correction.
-->
