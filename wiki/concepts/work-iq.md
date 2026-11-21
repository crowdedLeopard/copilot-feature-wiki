---
kind: "concept"
title: "Work IQ: how agents reach Microsoft 365 and business data, and what an admin can switch off"
slug: "work-iq"
summary: "Work IQ is Microsoft's workplace intelligence layer that lets agents and apps reason over Microsoft 365 and business data as the signed-in user. Admins use it to decide who can call it, what it may do and what it costs."
created: "2026-11-16"
updated: "2026-11-19"
version: 5
tags: ["work-iq","mcp","a2a","agents","copilot-credits","spending-policies","admin-controls","licensing"]
covers: []
sources:
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Work IQ MCP overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview"
    kind: "learn"
  - title: "Use the retrieve tool in Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/retrieve"
    kind: "learn"
  - title: "Work IQ A2A quickstart"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart"
    kind: "learn"
  - title: "Connect agents to Microsoft 365 with Work IQ (preview)"
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq"
    kind: "learn"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/use-work-iq"
    kind: "learn"
  - title: "Manage AI experience access to Business Applications in Work IQ (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    kind: "learn"
  - title: "Manage participation in Business Applications in Work IQ (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Control which apps are allowed in your environment"
    url: "https://learn.microsoft.com/power-platform/admin/control-app-access-environment"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Microsoft 365 Copilot Cost Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Application table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/application"
    kind: "learn"
  - title: "workIQAdminActivity resource type"
    url: "https://learn.microsoft.com/graph/api/resources/security-workiqadminactivity?view=graph-rest-1.0"
    kind: "learn"
  - title: "auditLogRecordType enum type"
    url: "https://learn.microsoft.com/graph/api/resources/security-auditlogrecordtype?view=graph-rest-1.0"
    kind: "learn"
  - title: "Work IQ GA June 16, 2026"
    url: "https://www.microsoft.com/en-us/licensing/news/work-iq-general-availability"
    kind: "docs"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
related: ["copilot-credits","mcp","managed-environments","agent-identity","work-iq-agent-policy-governance","work-iq-real-time-transcripts"]
controls:
  - governs: "Work IQ API enablement for the organisation (service principal creation)"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/servicePrincipals"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    note: "One-time, Global Administrator. The request body sets appId to fdcc1f02-fc51-4226-8753-f668596af7f7. Learn also gives az ad sp create --id with the same value. Its admin-centre tab uses Graph Explorer."
  - governs: "Work IQ MCP policy on or off for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "The Policy tab appears when it is available. Changes can take up to 24 hours to apply."
  - governs: "Whether the Work IQ MCP server is available at all"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Block"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    api: null
    note: "Applies to the whole server. AI Administrator role."
  - governs: "Admin consent for an app to ask Work IQ (WorkIQAgent.Ask)"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > App registrations > app > API permissions > Grant admin consent for [your tenant]; to revoke: Entra ID > App registrations > app > API permissions > WorkIQAgent.Ask > Revoke admin consent"
      docs: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq"
    api:
      kind: "azure-cli"
      call: "az ad app permission admin-consent --id <app-id>"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart"
    note: "Global Administrator, one-time tenant operation. The Foundry page is preview. Revocation stops new tokens; existing tokens stay valid until they expire."
  - governs: "Spending policy and consumption for Work IQ API"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    note: "Beta API, subject to change and not supported for production. The request body sets periodLimit and perUserLimit. Creating a policy needs Billing Administrator or Global Administrator."
  - governs: "Who can use Business Applications data in Work IQ through Microsoft 365 Copilot"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Business Applications data in Work IQ available to Copilot"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    api: null
    note: "Options: All users (the default), Specific groups, No users. Preview feature."
  - governs: "Work IQ feature enablement for a Dataverse environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > environment > Settings > Product > Features > Work IQ"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation"
    api: null
    note: "Preview. Does not prevent agentic access to environment data; use App Access Control for that."
  - governs: "Which applications may access data in an environment (App Access Control)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Identity and access > App access control > environment > Set up app access control > Access control > Enabled > Dataverse application > Allow or Block > Save"
      docs: "https://learn.microsoft.com/power-platform/admin/control-app-access-environment"
    api:
      kind: "rest"
      call: "PATCH /applications(applicationid)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/application"
    note: "Needs a Managed Environment. The Work IQ preview page gives a shorter procedure (Enable, then Save); the two Microsoft procedures differ. Power Platform Administrator role. The request body sets access to 0 (Allowed) or 1 (Blocked)."
  - governs: "Which Microsoft 365 workloads a Copilot Studio agent's Work IQ tool uses"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "agent > Build > Tools > Work IQ > Edit tool > Sources"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/use-work-iq"
    api: null
    note: "Maker-side only. Whole workloads only; does not override organisational permissions or policies."
confidence: "medium"
dependents: 30
changes:
  - date: "2026-11-16"
    note: "First concept page on Work IQ: what it is, how it is billed, and where its tenant, environment and agent controls are."
  - date: "2026-11-16"
    note: "Corrected the Entra consent path and added its Azure CLI command, the Work IQ feature row, the App Access procedure differences, the spending-policy disagreement and a billing row; removed the fixed tool count and the unsupported oversharing claim."
  - date: "2026-11-17"
    note: "Corrected: replaced the oversharing claim with permission-review advice, replaced the blanket 'no audit event name' with the documented WorkIQAdminActivity audit records, added the app-selection step to the App Access path and clarified that the environment row covers features only."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 100 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected: the Work IQ Tool API rate (0.1 Copilot Credits per API call) is now stated, the claim that no environment data-participation path is documented is removed, and the general Features reference defaults are noted."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 108 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 101 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected: removed the unsupported 30 September 2026 start date and the November 2026 enablement for existing environments (Microsoft has deferred it), added the Dataverse Application table call for App Access, and tidied the spending-policy, service-principal and Copilot Studio rows."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 126 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 117 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 117
  confirmed: 117
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f4de22ae06730e4ed38b4b858823e77b"
---

## What it is

Work IQ is a workplace intelligence layer: a Microsoft service that lets agents and applications reason over Microsoft 365 data, and in preview over business data from Dynamics 365 and Power Platform, with permission-aware governance. Every request runs in the context of one signed-in user.

It is reached through A2A (agent-to-agent), a remote [MCP](/concepts/mcp/) server (Model Context Protocol, a standard way for AI clients to call tools) and a REST API. Microsoft describes four parts:

| Part | What it does |
| --- | --- |
| Chat | Conversational answers over A2A and REST |
| Context | Grounded context, so agents need no retrieval pipeline |
| Tools | Generic MCP tools whose verbs (fetch, create, update) act on resource paths |
| Workspaces | SharePoint Embedded working storage for intermediate data and outputs |

**What it can reach.** The API overview lists email, meetings and calendar data, OneDrive and SharePoint documents, Teams messages, people, Planner plans and enterprise search results. Business Applications in Work IQ (preview) adds Power Apps and Dynamics 365 data.

**How access is decided.** Work IQ uses Microsoft Entra ID delegated authentication; application-only authentication is not supported. A Rego-based policy engine (Open Policy Agent's policy language) evaluates each MCP request. Policy does not replace Entra authentication, OAuth permissions or the user's own Microsoft 365 permissions, and it cannot grant more than the user can already access.

In Copilot Studio, Work IQ is added by default to every new agent that uses the Microsoft Copilot harness. See [Dataverse and Work IQ](/features/microsoft-dataverse-enable-ai-powered-business-workflows-in-work-iq-with-dataverse-build-d/) for business data at work.

## Why it matters

Copilot Studio agents, Microsoft 365 Copilot experiences and MCP clients draw on one service, so a few tenant settings decide what many agents can retrieve and do. Requests are user-scoped, so an agent can reach whatever its user can already reach. Review existing SharePoint and mailbox permissions rather than treating Work IQ policy as a substitute for that review; what you can narrow is the tenant policy (paths, operations, collection reads) and, in Copilot Studio, each agent's workloads.

Confirm defaults rather than assuming them. Copilot Studio states that write operations are on by default, subject to organisational permissions and policies; the Work IQ MCP policy page states that mutation operations, such as sending email, are not allowed by default. The pages describe different surfaces and do not reconcile the two, so test a write request. Business Applications in Work IQ (preview) is also on by default for new public production environments that are not listed as exceptions. Microsoft has deferred the previously documented November 2026 automatic-enablement schedule for existing environments and has not given a replacement date on this page. The general Power Platform Features reference still lists Allow data availability in Microsoft 365 Copilot and Turn on Dataverse intelligence (Work IQ) for agents and AI experiences as Off by default; confirm the effective settings in your environment.

## Cost and licensing

Work IQ API access is independent of Microsoft 365 Copilot licensing and is available through usage-based billing that consumes Copilot Credits, shared with other eligible services. See [Copilot Credits](/concepts/copilot-credits/) for the meter itself.

- **To enable it:** a usage-based billing plan in Copilot Studio with an Azure subscription and resource group assigned, the user assigned to the billing plan, and a Global Administrator for the one-time setup.
- **Microsoft 365 Copilot licensed users:** Work IQ is available in all Microsoft 365 Copilot experiences and agents, and is subject to usage-based billing for custom and third-party agents. Users without a Microsoft 365 Copilot licence are billed on usage.
- **Spending policies:** Microsoft's pages differ. Copilot Studio states that a separate spending policy is not required for Work IQ; the Work IQ MCP `retrieve` page (public preview) requires assigning calling users to a spending policy that includes Work IQ API, and the Foundry page requires the same for `retrieve`.
- **Where spend is watched:** Copilot > Cost management in the Microsoft 365 admin center covers Work IQ API consumption.

Microsoft publishes a Work IQ Tool API rate of 0.1 Copilot Credits per API call; Work IQ Chat API and Context API consumption is variable ([Work IQ GA](https://www.microsoft.com/en-us/licensing/news/work-iq-general-availability)). Business Applications in Work IQ may also use extra storage for search indexes.

## Risks and limits

- **Policy is tenant-wide only.** Per-user, per-app, per-agent and scenario-specific templates are not part of the initial control surface, so Work IQ MCP policy cannot allow one agent and block another.
- **Policy changes are not instant.** After saving, a change can take up to 24 hours to apply.
- **A policy denial looks like a failure.** A request can fail on tenant policy even when the user is authenticated and the app holds the OAuth permission.
- **Participation settings do not block agents.** The environment Work IQ settings do not prevent agentic access to environment data; App Access Control does.
- **Workload scoping is coarse.** Copilot Studio selects whole workloads, not individual sites or mailboxes.
- **Business Applications in Work IQ is preview and not for government clouds.** It is not currently available in DoD, GCC or GCC High, and enabling it might send data outside a FedRAMP-accredited environment's authorization boundary.
- **Multitenant organisations can fail to authenticate.** The token issuer must match the user's home tenant, or requests fail with 400 AuthenticationError.
- **Revoking consent is not immediate.** Existing tokens remain valid until they expire.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ API enablement for the organisation (service principal creation)</strong><br><small>Tenant</small><br><small class="controls__note">One-time, Global Administrator. The request body sets appId to fdcc1f02-fc51-4226-8753-f668596af7f7. Learn also gives az ad sp create --id with the same value. Its admin-centre tab uses Graph Explorer.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/servicePrincipals</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">The Policy tab appears when it is available. Changes can take up to 24 hours to apply.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Work IQ MCP server is available at all</strong><br><small>Tenant</small><br><small class="controls__note">Applies to the whole server. AI Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Admin consent for an app to ask Work IQ (WorkIQAgent.Ask)</strong><br><small>App</small><br><small class="controls__note">Global Administrator, one-time tenant operation. The Foundry page is preview. Revocation stops new tokens; existing tokens stay valid until they expire.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations › app › API permissions › Grant admin consent for [your tenant]; to revoke: Entra ID › App registrations › app › API permissions › WorkIQAgent.Ask › Revoke admin consent <a href="https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az ad app permission admin-consent --id &lt;app-id&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Spending policy and consumption for Work IQ API</strong><br><small>Tenant</small><br><small class="controls__note">Beta API, subject to change and not supported for production. The request body sets periodLimit and perUserLimit. Creating a policy needs Billing Administrator or Global Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can use Business Applications data in Work IQ through Microsoft 365 Copilot</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (the default), Specific groups, No users. Preview feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Business Applications data in Work IQ available to Copilot <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ feature enablement for a Dataverse environment</strong><br><small>Environment</small><br><small class="controls__note">Preview. Does not prevent agentic access to environment data; use App Access Control for that.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which applications may access data in an environment (App Access Control)</strong><br><small>Environment</small><br><small class="controls__note">Needs a Managed Environment. The Work IQ preview page gives a shorter procedure (Enable, then Save); the two Microsoft procedures differ. Power Platform Administrator role. The request body sets access to 0 (Allowed) or 1 (Blocked).</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Identity and access › App access control › environment › Set up app access control › Access control › Enabled › Dataverse application › Allow or Block › Save <a href="https://learn.microsoft.com/power-platform/admin/control-app-access-environment" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /applications(applicationid)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/application" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Microsoft 365 workloads a Copilot Studio agent's Work IQ tool uses</strong><br><small>Agent</small><br><small class="controls__note">Maker-side only. Whole workloads only; does not override organisational permissions or policies.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>agent › Build › Tools › Work IQ › Edit tool › Sources <a href="https://learn.microsoft.com/microsoft-copilot-studio/use-work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

**Roles.** Microsoft documents Global Administrator for the one-time enablement and tenant-wide admin consent, AI Administrator for the Microsoft 365 admin center settings, Power Platform Administrator for App Access and environment settings, and Environment Maker or System Customizer for application-level participation. Creating a spending policy through the Cost Management API also requires Billing Administrator or Global Administrator.

**How they interact.** For business data, three settings cascade: the tenant audience setting, the environment Work IQ setting and each app's maker setting. Turning off the tenant setting stops sharing between Microsoft 365 Copilot Chat and Dataverse even if an app is set to share. The Work IQ MCP Block applies to the whole server, separately from the audience settings and App Access. The environment row above covers the Work IQ features setting only. Microsoft documents environment data participation (which environments Work IQ may reason over and return data from) as a separate decision from enabling features. App Access needs a [Managed Environment](/concepts/managed-environments/).

**Not enforced.** Microsoft says every tool invocation is logged and evaluated. Microsoft Graph documents WorkIQAdminActivity admin audit records. The Work IQ pages do not identify the operation names that capture individual tool invocations. A Learn page notes that allowing or disallowing MCP servers in the Microsoft 365 admin center might not yet be available in every region.

## What to check

- Confirm the Work IQ service principal exists in your tenant.
- Open Agents > Tools > Work IQ MCP and record whether Policy is on and whether the server is blocked.
- Test a write request, such as sending mail, through an agent to see which default applies.
- List the apps that hold admin consent for WorkIQAgent.Ask and revoke any you do not recognise.
- Review the Work IQ setting in each Power Platform environment and the tenant audience setting for Business Applications data.
- Check App Access Control for environments that hold sensitive Dataverse data.
- Clear the workloads each Copilot Studio agent's Work IQ tool does not need.
- Open Copilot > Cost management and confirm which spending policy covers Work IQ API.

## Open questions

- Which default governs write operations through Work IQ MCP: on, as Copilot Studio states, or off, as the policy page states?
- Must every caller be in a spending policy that includes Work IQ API, as the retrieve page says, or not, as Copilot Studio says?
- Is there a PowerShell, Graph or Power Platform API for the Work IQ MCP policy and Block settings, or for the environment Work IQ setting? None is documented at the time of writing (November 2026).
- Under which Microsoft Purview audit event names do Work IQ tool invocations appear?
- Will Work IQ MCP policy gain per-user, per-app or per-agent scope? Microsoft says more granular controls might be added later.

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is; Why it matters; Risks and limits; controls[5].note; controls[6].note / availability: Business Applications in Work IQ is described as preview. | Found: Some workloads, such as Business apps (preview), are available in preview and require you to turn on preview workloads in the agent's settings. | Fix: Qualify the blanket preview wording: 'The Copilot Studio page labels Business apps as preview; the Power Apps user guide says access through Work IQ MCP and Copilot Studio is generally available, while Cowork access is public preview.' Add https://learn.microsoft.com/power-apps/user/use-business-apps-work-iq to sources; it states: 'Access to Business Applications through Work IQ Model Context Protocol (MCP) and Microsoft Copilot Studio is generally available. Access through Cowork is available in public preview.' | Source: https://learn.microsoft.com/microsoft-copilot-studio/use-work-iq
- [supported, minor] Governance controls: Roles / role: The Work IQ participation page documents Power Platform Administrator for managing environment settings. | Found: Power Platform Administrator role to manage settings and assign other roles. | Fix: Append to the environment-role sentence: 'The general Features reference also requires the System Administrator security role or equivalent permissions to update feature settings; confirm the account has those environment permissions.' Cite the already-listed https://learn.microsoft.com/power-platform/admin/settings-features, which states: 'Ensure you have the System Administrator security role or equivalent permissions to update the settings.' | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation
-->
