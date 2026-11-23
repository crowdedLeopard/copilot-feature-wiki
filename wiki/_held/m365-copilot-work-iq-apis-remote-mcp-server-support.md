---
title: "Microsoft 365 Copilot: connect agents to the remote Work IQ MCP server"
slug: "m365-copilot-work-iq-apis-remote-mcp-server-support"
roadmapId: 559020
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Work IQ APIs list remote MCP as a protocol, so agents and coding tools can reach Microsoft 365 through one endpoint. Use needs admin consent and Copilot Credits billing, so administrators decide whether to allow it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Work IQ API is paid for through a usage-based model that uses Copilot Credits; Microsoft's June 2026 announcement says there is no separate Work IQ API subscription, SKU or per-user licence."
audiences: ["m365-admin","security","finops","service-owner"]
tags: ["work-iq","mcp","mcp-server","copilot-credits","usage-based-billing","spending-policies","m365-copilot","agents"]
sources:
  - title: "Microsoft 365 Roadmap item 559020"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559020"
    kind: "roadmap"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Work IQ MCP overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview"
    kind: "learn"
  - title: "Work IQ MCP tool reference"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/tool-reference"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Connect GitHub Copilot CLI to the Work IQ MCP server"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/quickstart/github-copilot-cli"
    kind: "learn"
  - title: "Work IQ API permissions reference"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/permissions"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Manage AI experience access to Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    kind: "learn"
  - title: "Migrate agentic retrieval workflows to Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/migrate-retrieval-api"
    kind: "learn"
  - title: "Use the retrieve tool in Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/retrieve"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/plugins/cost-considerations"
    kind: "learn"
  - title: "June 2026 announcements"
    url: "https://learn.microsoft.com/partner-center/announcements/2026-june"
    kind: "learn"
  - title: "Connect agents to Microsoft 365 with Work IQ (preview)"
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["work-iq","mcp","m365-copilot-work-iq-apis-pay-as-you-go-usage","spending-policies","copilot-credits"]
controls:
  - governs: "Whether the Work IQ MCP server is available to the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Block"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    api: null
    note: "Applies to the entire Work IQ MCP server. The page lists the AI Administrator role for Microsoft 365 admin center settings. Learn does not state that the Graph copilotPackage block call covers this server."
  - governs: "Whether the Work IQ MCP tenant policy is on, which evaluates each tool request"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "Tenant-level on/off in the initial release; changes can take up to 24 hours. The page mentions clients that configure policy settings but names no operation."
  - governs: "Spending limits and billing method of the spending policy that covers Work IQ API"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta API; the request body sets periodLimit, perUserLimit or billingMethods. Delegated permission CopilotCostManagement-Policy.ReadWrite.All."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-06-29T23:02:39"
changes:
  - date: "2026-11-23"
    note: "New briefing: the remote Work IQ MCP server, its admin consent and Copilot Credits billing, and the admin centre controls for blocking it, its tenant policy and spending."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 70
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "09d1a79864f946942fd790fb0d091fe9"
---

## What's changing

The roadmap item (Launched, General Availability, Developer platform, Worldwide (Standard Multi-Tenant), target June CY2026) says Work IQ supports connecting to remote MCP servers through the Work IQ endpoint, so that agents can invoke tools and services beyond the local runtime. The roadmap text does not name the server. Microsoft Learn's Work IQ API overview lists Remote MCP, Local MCP, A2A and REST as the supported protocols and describes remote MCP as exposing Microsoft 365 work context as tools for AI assistants running in developer environments. Learn gives the remote endpoint as `https://workiq.svc.cloud.microsoft/mcp`. This briefing reads the roadmap item as that remote Work IQ MCP server.

The server's tools act on resource paths: entity tools (`fetch`, `create_entity`, `update_entity`, `delete_entity`, `do_action`, `call_function`), Copilot tools (`ask`, `retrieve`, `list_agents`) and schema tools (`get_schema`, `search_paths`). Learn says they cover Microsoft 365 and connected enterprise systems, and that the `retrieve` tool is in public preview. Requests run as the signed-in user, and Learn says application-only authentication isn't supported.

Microsoft's partner announcement of 3 June 2026 says Work IQ API reaches general availability on 16 June 2026 with consumption-based pricing in Copilot Credits. That announcement covers the Work IQ API as a whole, not this roadmap item by itself.

## Why it matters

This is a new route into a tenant's mail, calendar, Teams messages and files for any MCP client an organisation or a developer connects: coding assistants, Copilot Studio agents or Foundry agents. Each call acts as the signed-in user and is metered, so the decisions that matter are who is allowed to consent, what the tenant policy permits and which spending policy pays.

Learn says an administrator must enable consumptive billing before Work IQ usage can begin, and that each Work IQ permission needs admin consent. No source says existing behaviour changes for users who do nothing, so the wiki treats this as an optional capability to review, with the controls set before the first client is approved.

## Risk assessment

**Data exposure**
- The tools read by path. Learn's examples include `fetch /me/messages` (read mail), `fetch /me/chats/{id}/messages` (read Teams chat messages) and `call_function /search/query` (semantic search). The `WorkIQAgent.Ask` permission is described as including read and write access to Microsoft 365 resources scoped to the signed-in user, so a client granted it can reach whatever that user can reach.
- The tool reference says the complete list of allowed and blocked paths depends on per-tenant policy configuration, so confirm what your tenant's policy permits before relying on a path.

**Security & identity**
- Authentication is Microsoft Entra delegated sign-in; application-only authentication isn't supported, so a client cannot run without a user. Each Work IQ permission is marked as requiring admin consent, so consent is the point at which a client application gains the capability.
- Learn says policy can't grant access beyond what the signed-in user can already access. It adds a request-time check; it doesn't replace user permissions.

**Autonomy & actions**
- Learn's own examples show `do_action /me/sendMail` sending an email and `create_entity /me/events` creating a calendar event. Learn says mutation operations aren't allowed by default and that administrators can enable supported mutation scenarios through tenant policy. Treat enabling them as a decision for a named client, not a tenant-wide default.

**Change & support**
- Policy changes can take up to 24 hours to apply. Learn notes that configuring Work IQ MCP policy before any MCP use in the tenant can fail because the Work IQ service principal may not exist yet.
- Learn's troubleshooting table lists missing consent, no spending-policy coverage, an exhausted limit, a user access issue or a policy denial as causes of a `403 Forbidden`. Expect support calls to need all five checks.

## Cost and licensing

**Licence.** Learn's Work IQ API overview says Work IQ API is licensed under your agreement governing use of Microsoft Online Services and that you pay for use through a usage-based model that uses Copilot Credits. Microsoft's June 2026 partner announcement says there is no separate Work IQ API subscription, SKU or per-user licence, and that usage by Microsoft 365 Copilot prebuilt agents is covered by licensing without Copilot Credits. The Foundry page says the Work IQ API path through A2A, REST or MCP uses usage-based billing and doesn't use connector licensing; connector-backed Microsoft 365 tools are a separate case that can require a Microsoft 365 Copilot licence for each calling user.

**Meter and controls.** The meter is Copilot Credits. Work IQ API is one of the services managed in Microsoft 365 admin center under Copilot > Cost management, where administrators set spending limits and choose the services a spending policy covers (controls table, row 3). Learn says Work IQ API can draw on a shared tenant pool of credits with Cowork and Copilot Studio agents, and that spending policies control access and limits but don't reserve credits for a workload.

**Not yet published.** The billing overview names Work IQ API as a managed service but states no credit rate per Work IQ MCP call.

## Scope

**Users and licences.** No separate Work IQ API licence is named; use is metered. Users who call the server through an app need to be covered by a spending policy that includes Work IQ API, according to Learn's `retrieve` prerequisites.

**Roles.** Learn lists a Global Administrator for the one-time Work IQ setup and the AI Administrator role for the Microsoft 365 admin center settings on its AI experience access page. The Graph spending-policy update operation needs the delegated permission CopilotCostManagement-Policy.ReadWrite.All.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Developer platform.

**Prerequisites.** Learn's tenant-enablement page lists a usage-based billing plan with an Azure subscription and resource group assigned, and a user assigned to the billing plan. It says the Work IQ service principal can be created with a one-time Global Administrator step, while the MCP overview says it is created automatically when Work IQ is first used.

## Governance guidance

### Before rollout
- Review the Work IQ MCP availability and policy tabs under Agents > Tools in the Microsoft 365 admin center, and decide whether the server stays available until a client owner is named (controls table, rows 1 and 2).
- Set up usage-based billing with Copilot Credits and create or choose a spending policy that includes Work IQ API, with period and per-user limits that match a pilot budget (row 3).
- Agree which Global Administrator completes the one-time Work IQ setup and who may grant admin consent to client applications.

### At rollout
- Grant admin consent only to named client applications, and record that `WorkIQAgent.Ask` includes read and write access scoped to the signed-in user.
- Add pilot users or groups to the spending policy that includes Work IQ API before they connect a client.
- Keep the tenant policy's mutation restriction in place until a client needs create, update, delete or action requests; allow up to 24 hours for a policy change to apply.

### After rollout
- Review Copilot > Cost management consumption by spending policy, user, group and service to see who drives Work IQ API usage.
- Check consent, spending-policy coverage, limits, user access and policy denials when a client reports `403 Forbidden`.
- Use the spending policy to stop one cohort (remove Work IQ API from its policy or remove the cohort) and the Work IQ MCP Block to stop the server for the tenant, as Learn's rollback steps describe.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Work IQ MCP server is available to the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Applies to the entire Work IQ MCP server. The page lists the AI Administrator role for Microsoft 365 admin center settings. Learn does not state that the Graph copilotPackage block call covers this server.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Work IQ MCP tenant policy is on, which evaluates each tool request</strong><br><small>Tenant</small><br><small class="controls__note">Tenant-level on/off in the initial release; changes can take up to 24 hours. The page mentions clients that configure policy settings but names no operation.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Spending limits and billing method of the spending policy that covers Work IQ API</strong><br><small>Tenant</small><br><small class="controls__note">Beta API; the request body sets periodLimit, perUserLimit or billingMethods. Delegated permission CopilotCostManagement-Policy.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Block and policy are separate controls on the same Work IQ MCP pane. Block applies to the entire Work IQ MCP server, separate from Copilot audience settings and App Access; the tenant policy evaluates each tool request and complements, but doesn't replace, Entra authentication, OAuth permissions and user permissions. Learn describes the initial policy control as tenant-level, and says per-user, per-app and per-agent policy templates aren't part of it.

The spending policy limits are the cost control; Learn's rollback steps remove Work IQ API from a cohort's spending policy to stop that cohort without blocking the server. Admin consent for the Work IQ permissions is a separate step that is not a row here. The Graph call in row 3 is a beta API.

## Open questions

- Does the roadmap's wording, "connecting to remote MCP servers through the Work IQ endpoint", mean only Microsoft's Work IQ MCP server, or also Work IQ calling other remote MCP servers? Learn documents connector tool paths through Work IQ; watch the roadmap item and the Work IQ MCP overview.
- Is the Work IQ MCP policy on when a tenant first uses the server, and which setting allows supported mutation scenarios? The policy page lists an on/off switch and says administrators can enable such scenarios.
- What credit rate applies to a Work IQ MCP tool call? Watch the Copilot Credits licensing guide and the billing overview.
- Is there a Graph or PowerShell operation to block the Work IQ MCP server or to change its tenant policy? Watch the Work IQ MCP policy page and the Graph beta reference.
- Will the remote Work IQ MCP server be offered in US Government clouds? The roadmap record lists Worldwide (Standard Multi-Tenant) only; watch the roadmap item.

<!-- rationale
risk: Medium. The server's tools can read and, if tenant policy allows, change Microsoft 365 data as the signed-in user, but user permissions, a tenant policy and a Block switch bound it.
cost: Variable. Work IQ API use is metered in Copilot Credits and managed through spending policies; Learn's billing overview states no rate per call for Work IQ API.
impact: Low. The roadmap lists the Developer platform, so developers, makers and administrators notice it; end users meet it only through apps that call the server.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure, first bullet / applicability: A client granted WorkIQAgent.Ask can reach whatever the signed-in user can reach. | Found: For developers, these controls mean an MCP request can fail because of tenant policy even when the user is authenticated and the app has the required OAuth permission. | Fix: Remove ', so a client granted it can reach whatever that user can reach'. Keep the permission description but qualify its resources as 'accessible to Work IQ agents and scoped to the signed-in user', as stated at https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/permissions. The following bullet can continue to explain tenant-policy restrictions. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls table; Cost and licensing / admin-path: Microsoft 365 admin center > Copilot > Cost management is the destination for spending-policy limits and billing methods covering Work IQ API. | Found: In the Microsoft admin center, **Copilot > Cost management**, admins can monitor Copilot Credit consumption and manage spending associated with the supported services such as **Cowork**, running apps hosted on the **Copilot Managed Runtime**, and **Work IQ API**. | Fix: The path stops on the right dashboard. Extend controls[2].ui.path to 'Copilot > Cost Management > Configuration > spending policy', with note 'Open Spending limits or Billing method in the policy details fly-out'. Use https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits#edit-spending-policy as docs and add that source. | Source: https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits
- [supported, minor] Governance guidance: After rollout; Governance controls / applicability: Learn's rollback instructions say removing Work IQ API or the cohort from its spending policy stops that cohort without tenant-wide blocking. | Found: To stop Work IQ usage for only the migration cohort, remove Work IQ API from that cohort's spending policy or remove the cohort from the policy. | Fix: Qualify both cohort-stopping statements: 'Review all applicable spending policies, including the default policy: excluding Work IQ API from one policy does not exclude it from other policies.' This qualification is documented at https://learn.microsoft.com/plugins/cost-considerations#manage-shared-copilot-credits, although the cited migration rollback steps omit it. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/migrate-retrieval-api
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The governance checklist tells administrators to grant admin consent, but the controls table does not represent that control. | Found: Grant admin consent only to named client applications Admin consent for the Work IQ permissions is a separate step that is not a row here. | Fix: The 'At rollout' checklist step 'Grant admin consent only to named client applications' has no corresponding controls-table row. This is the checklist/table coverage gap; do not add a control row as part of this correction.
-->
