---
title: "Microsoft 365 Copilot: invoke the Researcher agent through the Work IQ API"
slug: "m365-copilot-work-iq-apis-researcher-agent-access"
roadmapId: 559018
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap plans developer access to the Researcher agent through the Work IQ endpoint. Work IQ API use is billed in Copilot Credits; Researcher-specific behaviour, default and rate are not yet documented. Review before developers build on it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "July CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn states that Work IQ API use is paid for through a usage-based model that uses Copilot Credits, independent of Microsoft 365 Copilot licensing. A rate or licence statement specific to Researcher access is not yet published."
audiences: ["m365-admin","finops","security","service-owner"]
tags: ["work-iq","a2a","m365-copilot","agents","researcher","copilot-credits","usage-based-billing","spending-policies","extensibility"]
sources:
  - title: "Microsoft 365 Roadmap item 559018"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559018"
    kind: "roadmap"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Work IQ A2A quickstart"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart"
    kind: "learn"
  - title: "Work IQ API permissions reference"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/permissions"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Get started with Researcher agent in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/researcher-agent"
    kind: "learn"
videos: []
related: ["work-iq","copilot-credits","spending-policies","m365-copilot-work-iq-apis-endpoints-declarative-agent-access"]
controls:
  - governs: "Who can use Work IQ API and how much it can spend"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Applies to Work IQ API as a whole, not to Researcher alone. Graph operation is beta, delegated only; the request body sets periodLimit, perUserLimit or billingMethods."
  - governs: "Whether Work IQ is enabled in the tenant"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "POST /v1.0/servicePrincipals"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    note: "One-time setup by a Global Administrator. The request body sets appId to the Work IQ application ID given on the page. Creates the Work IQ service principal; it is not a switch to turn Work IQ off."
  - governs: "Which apps may call Work IQ agents on a user's behalf"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > App registrations > app > API permissions > Grant admin consent for [your tenant]"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart"
    api:
      kind: "azure-cli"
      call: "az ad app permission admin-consent --id <APP_ID>"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart"
    note: "Admin consent for the delegated WorkIQAgent.Ask permission, per app registration. The page documents this for the A2A quickstart app, not for Researcher specifically."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-05-18T22:30:51"
changes:
  - date: "2026-11-22"
    note: "New briefing: roadmap plans Researcher access through the Work IQ endpoint; Learn documents the Work IQ API, its Copilot Credits billing and its setup, but not Researcher itself."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 73 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 69
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "9b9f89ffc400c027a1522913d339c4e0"
---

## What's changing

The roadmap item states that developers will be able to invoke the Researcher agent through the Work IQ endpoint, to perform multi-step analysis, deep reasoning and synthesis across enterprise content as part of agentic workflows. Microsoft Learn does not yet describe Researcher access through Work IQ, so what follows about this feature's behaviour is the roadmap's description.

What Learn does document is the Work IQ API that this access would sit on. It offers three protocols: Agent-to-Agent (A2A), Model Context Protocol (MCP) and REST. The A2A endpoint is `https://workiq.svc.cloud.microsoft/a2a/`, and the quickstart shows a caller passing an agent ID to invoke a specific agent. Authentication is Microsoft Entra ID delegated: requests run in the context of the signed-in user, and application-only authentication is not supported. Learn names Word, Excel and PowerPoint agents as ones that do not give useful responses when invoked headlessly through A2A; it does not name Researcher either way.

For comparison, Learn describes Researcher in Microsoft Copilot as an agent built for complex, multi-step research tasks that draws on both the web and the work content a user can access. Whether a Researcher call through Work IQ behaves the same way, including any web use, is not documented.

The record lists status In development, with a preview target of June CY2026 and a general availability target of July CY2026, for the Developer platform in Worldwide (Standard Multi-Tenant). Both target months are earlier than today (22 November 2026) and the record was last modified on 18 May 2026, so treat the dates as unconfirmed targets.

## Why it matters

This adds a way for developer-built apps and agents to run Microsoft's deepest research agent over the same mail, files, meetings and chats that a user can reach, and to be billed for it in Copilot Credits. For a service owner the questions are who may build such workflows, which users' consumption pays for them, and what the app is allowed to read on a user's behalf.

Microsoft has not stated what happens on arrival for Researcher access, and no source says existing behaviour changes. The controls that exist today are Work IQ-level: tenant enablement, admin consent for the Work IQ permissions, and spending policies. Set those up deliberately now, so that a Researcher capability arriving later lands in a tenant where billing and consent already have an owner.

## Risk assessment

**Data exposure**

- Work IQ can reason over email, meetings and calendar data, OneDrive and SharePoint documents, Teams messages, people and organisational context, Planner plans, enterprise search results and Copilot Connectors data. Learn says access is permission-trimmed, so a Researcher call would see what the signed-in user can see. Any oversharing already present in a user's permissions would therefore appear in synthesised answers returned to the calling app.
- Whether a Researcher call through the API also uses web content, as Researcher in Microsoft Copilot does, is not documented. Ask developers before approving a workflow that sends prompts containing internal detail.

**Security & identity**

- Work IQ uses delegated authentication only. The WorkIQAgent.Ask permission requires admin consent, so an administrator decides which app registrations may call the endpoint (controls table, admin consent row).
- One-time Work IQ enablement needs a Global Administrator (controls table, enablement row).

**Autonomy & actions**

- The WorkIQAgent.Ask permission's description includes read and write access to Microsoft 365 resources that Work IQ agents can reach for the signed-in user. Which of those actions a Researcher call can take is not documented, so assume an app holding this permission can do more than read until Microsoft says otherwise.

**Change & support**

- Learn's troubleshooting table lists a 403 Forbidden for a user who is not a member of a usage-based billing plan. Expect support requests from developers whose test users are not yet covered by a spending policy.
- Both roadmap target months have passed while the status is still In development, so plan for timing to move again.

## Cost and licensing

Learn's Work IQ API overview states that the Work IQ API is licensed under your agreement governing use of Microsoft Online Services, including the Microsoft Product Terms, and that you pay for use through a usage-based model that uses Copilot Credits. The Work IQ overview adds that usage is independent of Microsoft 365 Copilot licensing. For users with a Microsoft 365 Copilot licence, Work IQ is available in all Microsoft 365 Copilot experiences and agents and is subject to usage-based billing for custom and third-party agents; users without that licence are billed based on usage.

The meter is the Copilot Credit, and Work IQ API usage consumes credits shared with other eligible services. Setup needs a usage-based billing plan with an Azure subscription and resource group assigned. Spending is governed in the Microsoft 365 admin center under Copilot > Cost management, where spending policies can control which users and groups can access supported services and set spending limits (controls table, first row). Learn does not say that a limit ends use, so check how each policy's billing methods behave before treating a limit as a hard stop.

A credit rate specific to Researcher invocation, and whether it is billed in the same way as other Work IQ API calls, is not yet published. Indirect costs are administrator time for setup and consent reviews, and developer time.

## Scope

**Users and licences.** Work IQ API requests run as the signed-in user. Learn's troubleshooting table says a user who is not a member of a usage-based billing plan receives a 403 Forbidden. No Microsoft 365 Copilot licence is stated as a requirement for the Work IQ API; Learn says usage is independent of that licensing.

**Roles.** A user with the Global Administrator role does the one-time Work IQ setup. An organisation administrator must enable Work IQ before applications can use its permissions.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Developer platform, with release phases Preview and General Availability. Availability in other clouds is not stated.

**Rollout.** Not stated for Researcher access. In multitenant (parent and child) organisations, Learn says the access token's issuer must match the tenant the signed-in user belongs to, and that the app must be registered as multitenant.

## Governance guidance

### Before rollout

- Set up a usage-based billing plan with an Azure subscription and resource group, and review the spending policies under Copilot > Cost management (first controls row), so you know who pays for Work IQ API use.
- Decide who in the Global Administrator role will run the one-time Work IQ enablement, and record the decision (second controls row).
- Ask developers whether any planned workflow depends on Researcher, and ask them to confirm with you before building, since Learn does not yet document it.

### At rollout

- Grant admin consent for WorkIQAgent.Ask only to app registrations that a named owner has reviewed (third controls row).
- Add test users to a spending policy before they call the endpoint, because a user outside any usage-based billing plan receives a 403 Forbidden (first controls row).

### After rollout

- Review the Consumption view in Cost management by spending policy, user, group, agent or service to see what Work IQ API calls cost (first controls row).
- Check the Researcher and Work IQ pages on Microsoft Learn when the roadmap status changes, and update the consent and spending decisions to match.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can use Work IQ API and how much it can spend</strong><br><small>Tenant</small><br><small class="controls__note">Applies to Work IQ API as a whole, not to Researcher alone. Graph operation is beta, delegated only; the request body sets periodLimit, perUserLimit or billingMethods.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Work IQ is enabled in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">One-time setup by a Global Administrator. The request body sets appId to the Work IQ application ID given on the page. Creates the Work IQ service principal; it is not a switch to turn Work IQ off.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/servicePrincipals</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which apps may call Work IQ agents on a user's behalf</strong><br><small>App</small><br><small class="controls__note">Admin consent for the delegated WorkIQAgent.Ask permission, per app registration. The page documents this for the A2A quickstart app, not for Researcher specifically.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations › app › API permissions › Grant admin consent for [your tenant] <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az ad app permission admin-consent --id &lt;APP_ID&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The first row governs spend and who may use the service. The Cost management dashboard lists identity-based policies for controlling which users and groups can access supported services, and Work IQ API is one of the services named. The Graph spending policy update operation is in beta, supports delegated permissions only, and changes properties such as displayName, periodLimit, perUserLimit and billingMethods; it needs the If-Match header.

The enablement and admin consent rows are Work IQ-level controls. Learn documents no control specific to Researcher, so they apply to every Work IQ agent call rather than to Researcher alone. Enablement is a one-time Global Administrator action and does not by itself decide which apps may call; admin consent is per app registration.

## Open questions

- How is Researcher addressed through the Work IQ endpoint, and will it appear in the agent list that the Work IQ CLI returns? Watch the Work IQ A2A quickstart.
- Are Researcher calls billed as Work IQ API usage in Copilot Credits, and at what rate, or are they covered by a Microsoft 365 Copilot licence? Watch the Copilot Credits billing overview.
- Does Researcher called through the API use web content as well as work content, and can a tenant restrict that?
- Do the agent controls in the Microsoft 365 admin center, such as blocking an agent, also stop an API caller from invoking it?
- What is the default state on arrival, and when will the roadmap status move from In development? Watch Message center and the roadmap item.

<!-- rationale
risk: Medium. Developer-built apps would run multi-step research over a signed-in user's mail, files, meetings and chats; Learn says Microsoft 365 permissions and sensitivity labels are enforced, and admin consent is required for the Work IQ permissions.
cost: Variable. Learn says Work IQ API use is paid through a usage-based model that uses Copilot Credits; a rate specific to Researcher invocation is not yet published.
impact: Low. Developers and the administrators who enable Work IQ and billing notice it first; end users meet it only through apps that developers build.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Researcher is Microsoft's deepest research agent. | Found: Searched: "Researcher" "deepest" research agent Microsoft Copilot. Read Researcher agent and excerpts of its FAQ; documentation compares its deeper reasoning with standard Copilot chat, not every Microsoft research agent. | Fix: Replace 'Microsoft's deepest research agent' with 'the Researcher agent'.
- [contradicted, blocker] controls[0].note; Governance controls / command: The description of changing billingMethods omits the required billingInstrument when changing stored non-pay-as-you-go funding to include pay-as-you-go. | Found: When `billingMethods` changes stored funding from non-pay-as-you-go to a value that includes `payAsYouGo` ... also supply a billingInstrument with all three writable coordinates: `billingSubscriptionId`, `billingResourceGroup`, and `billingRegion`. | Fix: Append to controls[0].note: 'When changing stored non-pay-as-you-go funding to include payAsYouGo, also supply a complete billingInstrument with billingSubscriptionId, billingResourceGroup and billingRegion; use a supported billing-geography key for billingRegion.' | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update
- [contradicted, blocker] Cost and licensing / absence: Learn does not say that a spending-policy limit ends use. | Found: When users hit the limit, they lose access to agents and services for the rest of the month until credits reset on the first of the month. | Fix: Remove 'Learn does not say that a limit ends use, so check how each policy's billing methods behave before treating a limit as a hard stop.' The general spending-policy documentation explicitly describes loss of access at the limit; exhaustion of prepaid credits is a different question. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
- [contradicted, blocker] Cost and licensing; Open questions; front matter: licensing.notes / absence: Whether Researcher invoked through the Work IQ API is subject to the Work IQ API billing rule remains unpublished. | Found: You pay for use of the Work IQ API through a usage-based model that uses Copilot Credits. | Fix: Keep the published Work IQ API consumption model. Replace the last licensing paragraph's first sentence with 'A credit rate specific to Researcher invocation is not yet published.' Replace the billing open question with 'What is the credit rate for Researcher invocation through Work IQ? Watch the Copilot Credits billing overview.' Remove 'or licence statement' from licensing.notes. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Roles; Why it matters; controls[1].note / applicability: An administrator must enable Work IQ before applications can use its permissions. | Found: An organization administrator must enable Work IQ in your organization before these permissions can be used by applications. | Fix: After this statement add: 'The Work IQ MCP overview also says the Work IQ service principal is created automatically on first use, with manual provisioning needed in some corner cases.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/permissions
- [supported, minor] controls[0].ui; Cost and licensing; Governance guidance; Governance controls / admin-path: Microsoft 365 admin center > Copilot > Cost management reaches the place that governs Work IQ API access and spending. | Found: In the Microsoft admin center, Copilot > Cost management, admins can monitor Copilot Credit consumption and manage spending associated with ... Work IQ API. | Fix: Complete the existing-policy route as 'Copilot > Cost Management > Configuration > spending policy > Spending limits'. Use https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits#edit-spending-policy for the control's last steps and add it to sources. | Source: https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits
-->
