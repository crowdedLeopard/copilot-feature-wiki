---
kind: "concept"
title: "Work IQ: how agents reach Microsoft 365 and business data, and what an admin can switch off"
slug: "work-iq"
summary: "Work IQ is Microsoft's workplace intelligence layer that lets agents and apps read and act on Microsoft 365 and business data as the signed-in user. Admins use it to decide who can call it, what it may do and what it costs."
created: "2026-11-16"
updated: "2026-11-16"
version: 1
tags: ["work-iq","mcp","mcp-server","a2a","agents","copilot-credits","admin-controls","licensing"]
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
  - title: "Manage AI experience access to Business Applications in Work IQ (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    kind: "learn"
  - title: "Manage participation in Business Applications in Work IQ (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/use-work-iq"
    kind: "learn"
  - title: "Connect agents to Microsoft 365 with Work IQ (preview)"
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq"
    kind: "learn"
  - title: "Work IQ A2A quickstart"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart"
    kind: "learn"
related: ["copilot-credits","agent-identity","managed-environments","work-iq-agent-policy-governance","microsoft-dataverse-enable-ai-powered-business-workflows-in-work-iq-with-dataverse-build-d","work-iq-real-time-transcripts"]
controls:
  - governs: "Work IQ API enablement for the organisation (service principal creation)"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/servicePrincipals with body { \"appId\": \"fdcc1f02-fc51-4226-8753-f668596af7f7\" }"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    note: "One-time, Global Administrator. Learn also gives az ad sp create --id fdcc1f02-fc51-4226-8753-f668596af7f7. Its admin-centre tab uses Graph Explorer."
  - governs: "Work IQ MCP policy on or off for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "Policy tab appears 'when it's available'. Changes can take up to 24 hours."
  - governs: "Whether the Work IQ MCP server is available at all"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Block"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    api: null
    note: "Applies to the whole server. Learn labels this page preview. AI Administrator role."
  - governs: "Admin consent for an app to ask Work IQ (WorkIQAgent.Ask)"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > App registrations > app > API permissions > Grant admin consent / Revoke admin consent"
      docs: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq"
    api: null
    note: "Documented on the Foundry page (preview). Revocation stops new tokens; existing tokens remain valid until they expire."
  - governs: "Which users can use business applications data in Work IQ through Microsoft 365 Copilot"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Business Applications data in Work IQ available to Copilot"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    api: null
    note: "Options: All users (default), Specific groups, No users. Preview feature."
  - governs: "Work IQ features and data participation for a Dataverse environment"
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
      path: "Security > Identity & access > App Access Control > environment > Enable > Save"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    api: null
    note: "Power Platform Administrator role. After enabling, return to the environment and select the applications to block."
  - governs: "Which Microsoft 365 workloads a Copilot Studio agent's Work IQ tool uses"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Build > Tools > Work IQ > Edit tool > Sources"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/use-work-iq"
    api: null
    note: "Maker-side only. Whole workloads only; does not override organisational permissions or policies."
confidence: "medium"
dependents: 10
changes:
  - date: "2026-11-16"
    note: "First concept page on Work IQ: what it is, how it is billed, and where its tenant, environment and agent controls are."
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 91
  confirmed: 86
  unconfirmed: 0
  contradicted: 5
  attempts: 1
---

## What it is

Work IQ is a workplace intelligence layer: a Microsoft service that lets agents and applications read and act on organisational data, mainly Microsoft 365 and, in preview, business data from Dynamics 365 and Power Platform, without building their own retrieval pipelines. Every request runs as a specific signed-in user.

It is reached through three protocols: A2A (agent-to-agent), MCP (Model Context Protocol, a standard way for AI clients to call tools) and REST. Microsoft describes four parts:

| Part | What it does |
| --- | --- |
| Chat | Conversational answers over A2A and REST |
| Context | Assembles grounded context so agents need no retrieval pipeline of their own |
| Tools | The Work IQ MCP server: ten generic tools with verbs such as fetch, create and update; the resource path says what is being worked on |
| Workspaces | SharePoint Embedded working storage inside the tenant boundary for intermediate data and outputs |

**What it can reach.** The API overview lists email, meetings and calendar, OneDrive and SharePoint documents, Teams messages, people, Planner plans and enterprise search results. Business Applications in Work IQ (preview) adds Power Apps and Dynamics 365 data.

**How access is decided.** Work IQ uses Microsoft Entra ID delegated authentication; application-only authentication is not supported. A Rego-based policy engine (Open Policy Agent's policy language) then evaluates each MCP request. Policy does not replace Entra authentication, OAuth permissions or the user's own Microsoft 365 permissions, and it cannot grant access the user lacks.

In Copilot Studio, Work IQ is added by default to every new agent that uses the Microsoft Copilot harness. It is not a relabelled set of the older workload-specific tools such as Mail or Teams, which use different runtime and billing. See [Dataverse and Work IQ](/features/microsoft-dataverse-enable-ai-powered-business-workflows-in-work-iq-with-dataverse-build-d/) for one example.

## Why it matters

One service now sits behind Copilot Studio agents, coding agents, Foundry apps and Microsoft 365 Copilot experiences, so a few tenant settings decide what many agents can retrieve and do. Because requests are user-scoped, an agent sees what its user can already see: existing oversharing in SharePoint or mailboxes becomes retrievable by agents, and Work IQ does not narrow it.

Defaults are worth confirming rather than assuming. Copilot Studio states that write operations are on by default, subject to organisational permissions and policies, while the Work IQ MCP policy page states that mutation operations, such as sending email, are not allowed by default. The pages describe different surfaces and do not reconcile the two, so test a write request in your own tenant.

## Cost and licensing

Work IQ API access is independent of Microsoft 365 Copilot licensing and is available through usage-based billing that consumes Copilot Credits, shared with other eligible services. Enabling it requires a usage-based billing plan in Copilot Studio with an Azure subscription and resource group assigned. See [Copilot Credits](/concepts/copilot-credits/) for the meter itself.

- Microsoft 365 Copilot licensed users: Work IQ is available in all Microsoft 365 Copilot experiences and agents, and is subject to usage-based billing for custom and third-party agents.
- Users without a Microsoft 365 Copilot licence are billed on usage.
- Cost is variable and can be managed in the Microsoft 365 admin center. Copilot Studio states that a separate spending policy is not required for Work IQ.

The Work IQ pages read do not state a per-request credit rate. Business Applications in Work IQ may also use extra storage for search indexes.

## Risks and limits

- **Policy is tenant-wide only.** Per-user, per-app, per-agent and scenario-specific policy templates are not part of the initial control surface, so you cannot allow one agent and block another through Work IQ MCP policy.
- **Policy changes are not instant.** After saving, a change can take up to 24 hours to apply across the tenant.
- **A policy denial looks like a failure.** A request can fail on tenant policy even when the user is authenticated and the app holds the OAuth permission, so test agents against the policy before blaming the app.
- **Participation settings do not block agents.** The Power Platform admin center Work IQ settings do not prevent agentic access to environment data; App Access Control does that.
- **Workload scoping is coarse.** In Copilot Studio you choose whole workloads; you cannot choose individual sites or mailboxes.
- **Business Applications in Work IQ is preview and not for government clouds.** It is not currently available in DoD, GCC or GCC High, and Microsoft warns that enabling it may move data out of a FedRAMP-accredited environment's authorization boundary.
- **Multitenant organisations can fail to authenticate.** The token issuer must match the user's home tenant, not the tenant where the app is registered, otherwise requests fail with a 400 AuthenticationError.
- **Revoking consent is not immediate.** Existing tokens stay valid until they expire.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ API enablement for the organisation (service principal creation)</strong><br><small>Tenant</small><br><small class="controls__note">One-time, Global Administrator. Learn also gives az ad sp create --id fdcc1f02-fc51-4226-8753-f668596af7f7. Its admin-centre tab uses Graph Explorer.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/servicePrincipals with body { &quot;appId&quot;: &quot;fdcc1f02-fc51-4226-8753-f668596af7f7&quot; }</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Policy tab appears 'when it's available'. Changes can take up to 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Work IQ MCP server is available at all</strong><br><small>Tenant</small><br><small class="controls__note">Applies to the whole server. Learn labels this page preview. AI Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Admin consent for an app to ask Work IQ (WorkIQAgent.Ask)</strong><br><small>App</small><br><small class="controls__note">Documented on the Foundry page (preview). Revocation stops new tokens; existing tokens remain valid until they expire.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations › app › API permissions › Grant admin consent / Revoke admin consent <a href="https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can use business applications data in Work IQ through Microsoft 365 Copilot</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (default), Specific groups, No users. Preview feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Business Applications data in Work IQ available to Copilot <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ features and data participation for a Dataverse environment</strong><br><small>Environment</small><br><small class="controls__note">Preview. Does not prevent agentic access to environment data; use App Access Control for that.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which applications may access data in an environment (App Access Control)</strong><br><small>Environment</small><br><small class="controls__note">Power Platform Administrator role. After enabling, return to the environment and select the applications to block.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Identity &amp; access › App Access Control › environment › Enable › Save <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Microsoft 365 workloads a Copilot Studio agent's Work IQ tool uses</strong><br><small>Agent</small><br><small class="controls__note">Maker-side only. Whole workloads only; does not override organisational permissions or policies.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Build › Tools › Work IQ › Edit tool › Sources <a href="https://learn.microsoft.com/microsoft-copilot-studio/use-work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

**Roles.** Microsoft documents a Global Administrator for the one-time enablement, the AI Administrator role for Microsoft 365 admin center settings, the Power Platform Administrator role for App Access Control and environment settings, and Environment Maker or System Customizer for application-level participation.

**How they interact.** For business data, three levels cascade: the tenant audience setting, the environment Work IQ setting, and each app's maker setting. Turning off the tenant setting stops sharing between Microsoft 365 Copilot Chat and Dataverse even if an app is configured to share. The Work IQ MCP server Block applies to the whole server, separately from those audience settings and App Access.

**What is not enforced.** Environment participation settings do not stop agentic access to environment data. Microsoft's pages label the tenant audience setting differently in places, so match it by the path in the table. A Learn page notes that allowing or disallowing MCP servers in the Microsoft 365 admin center might not yet be available in every region. Third-party applications never have preauthorised access to Dataverse data. Microsoft states that every tool invocation is logged; no audit event name or report path is documented on the pages read.

## What to check

- Confirm the Work IQ service principal exists in your tenant and who holds the Global Administrator role that created it.
- Open Agents > Tools > Work IQ MCP and record whether Policy is on and whether the server is blocked.
- Test a write request, such as sending mail, through an agent to see which default applies in your tenant.
- Review which apps hold admin consent for WorkIQAgent.Ask and revoke any you do not recognise.
- Check the Work IQ setting in each Power Platform environment and the tenant audience setting for Business Applications data.
- Review App Access Control for environments holding sensitive Dataverse data.
- Open each Copilot Studio agent's Work IQ sources and clear workloads it does not need.
- Confirm a usage-based billing plan exists and who watches Copilot Credits consumption.

## Open questions

- Which default governs write operations through Work IQ MCP: on, as Copilot Studio states, or off, as the policy page states?
- What is the credit rate per Work IQ request, and how can spend be capped without a spending policy?
- Is there a PowerShell, Graph or Power Platform API for the Work IQ MCP policy and Block settings? None is documented at the time of writing (November 2026).
- Where do Work IQ tool invocations appear in the Microsoft Purview audit log, and under which event names?
- Will policy gain per-user, per-app or per-agent scope after the initial release?

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] What it is: Tools row / behaviour: The Work IQ MCP server exposes ten generic tools. | Found: The Work IQ MCP collapses hundreds of operations into just 10 generic tools | Fix: Remove the fixed count or report the documentation discrepancy: the cited overview says ten, but https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview lists seven entity tools, three Copilot tools and two schema tools. Use the live tools/list result for availability. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/
- [contradicted, blocker] Why it matters: oversharing paragraph / behaviour: Work IQ does not narrow the existing data access that an agent inherits from its user. | Found: For example, a tenant policy can allow read access to common productivity data while blocking high-risk paths, write operations, or large collection traversal. | Fix: Replace 'Work IQ does not narrow it' with 'Work IQ does not repair underlying oversharing; retrieval is still subject to Work IQ policy and the agent's workload selection.' The policy page documents path restrictions, and the cited Copilot Studio page documents removing workloads. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [supported, minor] Cost and licensing: spending policy sentence; Open questions / cost: Copilot Studio states that a separate spending policy is not required for Work IQ. | Found: Work IQ uses consumption billing. A separate spending policy isn't required for Work IQ. | Fix: Keep the attribution to Copilot Studio, but also report that the cited Foundry article requires a spending policy including Work IQ API for retrieve. https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/retrieve likewise requires assigning calling users to such a policy. Do not frame all Work IQ spend controls as operating without a spending policy. | Source: https://learn.microsoft.com/microsoft-copilot-studio/use-work-iq
- [contradicted, blocker] controls[3].ui / admin-path: Both Grant admin consent and Revoke admin consent follow directly from the app's API permissions page. | Found: Revoke consent: On the same API permissions page, select the WorkIQAgent.Ask permission and select Revoke admin consent. | Fix: Separate the branches: 'Entra ID > App registrations > app > API permissions > Grant admin consent for [your tenant]' for granting, and 'Entra ID > App registrations > app > API permissions > WorkIQAgent.Ask > Revoke admin consent' for revoking. The existing path omits selecting the permission before revocation. | Source: https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq
- [contradicted, blocker] controls[3].api / absence: Automation for granting WorkIQAgent.Ask admin consent is not documented. | Found: Add the WorkIQAgent.Ask delegated permission and grant consent.
az ad app permission admin-consent --id $APP_ID | Fix: Replace null with an azure-cli entry 'az ad app permission admin-consent --id <app-id>' and docs https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart. Note that this grants the app's configured permissions, not only WorkIQAgent.Ask. The CLI reference confirms Global Administrator is required. Graph delegated-permission grants also support automation. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart
- [contradicted, blocker] controls[5].governs / applicability: The environment Work IQ feature toggle governs both feature enablement and environment data participation. | Found: Enabling these features in an environment is a separate decision from allowing Work IQ to reason over that environment's data. | Fix: Rename this row to 'Work IQ feature enablement for a Dataverse environment'. Explain separately that environment data participation is a distinct decision; the cited participation page does not give a separate path or automation call for that decision. Do not imply this feature-toggle path configures both. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation
- [supported, minor] controls[6].ui and note / admin-path: App Access is enabled at Security > Identity & access > App Access Control > environment > Enable > Save, followed by selecting applications to block. | Found: Select Security > Identity & access.
3. Select App Access Control.
4. Select the environment in which you want to enable app access.
5. Select Enable, and then select Save.
6. Return to the environment and select the applications you want to block | Fix: Preserve the preview page's procedure but flag the fuller App Access reference at https://learn.microsoft.com/power-platform/admin/control-app-access-environment: it requires a Managed Environment and gives 'Set up app access control > Access control > Enabled', then application Allow/Block and Save. State that these Microsoft procedures differ rather than silently presenting one universal path. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access
- [contradicted, minor] What to check: billing-plan bullet; Governance controls table / consistency: Every control that What to check asks the reader to review has a row in the controls table. | Found: Confirm a usage-based billing plan exists and who watches Copilot Credits consumption. The eight controls rows cover enablement, policy, Block, consent, audience, environment features, App Access and workloads, but not billing or consumption monitoring. | Fix: Add a row for the Work IQ billing-plan and consumption-management control, with its documented path or call researched from the billing guidance linked by enable-work-iq; alternatively remove the billing-control instruction from What to check. Do not substitute unresearched nulls.
-->
