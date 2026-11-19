---
title: "Work IQ: retrieve tool gives agents Microsoft 365 grounding content"
slug: "work-iq-retrieve"
roadmapId: 570673
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Work IQ's retrieve tool lets agents search email, files, meetings, Teams messages and people that the signed-in user can access. It bills in Copilot Credits; admins govern it through spending policies and Work IQ MCP policy."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's Work IQ overview says API access is independent of Microsoft 365 Copilot licensing and available through usage-based billing, consuming Copilot Credits. A rate for retrieve is not yet published."
audiences: ["m365-admin","finops","security","service-owner"]
tags: ["work-iq","mcp","knowledge-grounding","copilot-credits","usage-based-billing","spending-policies","agents","policy"]
sources:
  - title: "Microsoft 365 Roadmap 570673"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570673"
    kind: "roadmap"
  - title: "Use the retrieve tool in Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/retrieve"
    kind: "learn"
  - title: "Work IQ MCP tool reference"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/tool-reference"
    kind: "learn"
  - title: "Work IQ MCP overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Understand costs for Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs"
    kind: "learn"
videos: []
related: ["work-iq","mcp","copilot-credits","work-iq-agent-policy-governance","work-iq-granular-mcp-policies"]
controls:
  - governs: "Whether Work IQ MCP tools, including retrieve, are allowed in the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "The Policy tab shows 'when it's available'. Tenant-level only; changes can take up to 24 hours to apply."
  - governs: "Who can consume Copilot Credits for Work IQ API, and the monthly limits"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > + Add spending policy"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id} with periodLimit, perUserLimit or billingMethods in the body and an If-Match ETag header"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta API; the permission is CopilotCostManagement-Policy.ReadWrite.All. Work IQ API is the service to include in the policy per the retrieve page."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item, based on Microsoft Learn's documentation of the Work IQ MCP retrieve tool (public preview) and the usage-based billing pages."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 68 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 75 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 74
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "e88f1629ded0817321ceba8b81f6f885"
---

## What's changing

The roadmap item "Work IQ: Retrieve" says it will "enable agents to retrieve relevant Microsoft 365 content and context through Work IQ". The roadmap record has no more-info link, so this briefing reads it as the `retrieve` tool that Microsoft Learn documents for the Work IQ MCP server. That match is the wiki's reading, not something the record states.

According to Microsoft Learn, `retrieve` searches Microsoft 365 data and connected enterprise sources that the signed-in user can access, and returns grounding Markdown with inline citations plus metadata for each cited source. It does not produce a final answer: that is the job of the separate `ask` tool. The default `grounding` strategy searches Microsoft 365 indexed content (SharePoint, OneDrive, Teams, Outlook); the `copilot` strategy also reaches connected enterprise sources available to Copilot. A request can limit its sources with a `capabilities` allow list (People, Meetings, OneDriveAndSharePoint, Email, TeamsMessages, GraphConnectors). Dataverse and Power BI are described as roadmap sources, not supported ones.

The tool is called by an MCP client connected to `https://workiq.svc.cloud.microsoft/mcp`. Microsoft Learn marks `retrieve` as public preview. The roadmap record lists the phases General Availability and Preview, status In development, a preview date of October CY2026 and a target date of November CY2026 (targets, not commitments), for the Worldwide (Standard Multi-Tenant) cloud and the Developer platform.

## Why it matters

This is a way for custom agents and apps to read your tenant's email, files, meetings and chats through a single call, billed in Copilot Credits. It matters to administrators because the data reach is the signed-in user's, so oversharing in SharePoint and mailboxes is exactly what a retrieving agent will surface, and because the spend lands on the shared Copilot Credits pool.

Microsoft Learn lists billing setup, spending-policy coverage and consent as prerequisites, so the wiki rates the default as admin-opt-in and the action as review. Microsoft has not stated whether the Work IQ MCP policy is on or off for a tenant by default, so confirm that in your own admin centre before assuming either.

## Risk assessment

**Data exposure**

- Retrieval returns content from email, files, meetings, Teams messages and people that the signed-in user can access, and, with the `copilot` strategy, connected enterprise sources. Learn says retrieval "doesn't grant access to content that the user can't otherwise access", so existing oversharing becomes retrievable by any agent acting for that user.
- Results carry source metadata including sensitivity labels and a `contentProtection` value. Learn tells developers not to treat a missing, failed, blocked or unrecognised value as an allow decision, so how a given agent handles labels depends on its developer.

**Security & identity**

- Work IQ uses delegated authentication, and the retrieve prerequisites include registering a client app and granting the delegated `WorkIQAgent.Ask` permission. Review who can grant that consent in your tenant.
- The Work IQ service principal is created in the tenant on first use, or by a Global Administrator following Learn's one-time setup steps.

**Autonomy & actions**

- `retrieve` is a read-style tool: it returns grounding content rather than changing data. The Work IQ MCP policy page says create, update, delete and action requests are blocked by default, and that administrators can enable supported mutation scenarios through tenant policy. That page does not tie this to `retrieve` specifically.

**Change & support**

- Learn describes `retrieve` as public preview, and says tool availability and schemas can evolve. Expect schema changes and treat the roadmap's General Availability phase as a plan.
- Learn says a policy change can take up to 24 hours to apply across the tenant, which matters when you block Work IQ MCP in response to an incident.

## Cost and licensing

Work IQ API access is independent of Microsoft 365 Copilot licensing and is available through usage-based billing (Work IQ overview, "Access and pricing"). Usage consumes Copilot Credits shared with other eligible services, so Work IQ calls draw on the same prepaid or pay-as-you-go pool as Cowork and other services managed in the Microsoft 365 admin center. See [Copilot Credits](/concepts/copilot-credits/).

The retrieve page's prerequisites say to set up usage-based billing for Copilot Credits and assign the calling users to a spending policy that includes Work IQ API. Spending policies are limit-based controls: they don't reserve or allocate credits. The **Auto-apply new services** setting is on by default for spending policies, so check whether existing policies already cover Work IQ API.

Microsoft's billing page says Work IQ consumption through a custom integration appears under Work IQ API, and that one request can involve several tool calls and reasoning steps, so cost per task varies. No credit rate specific to `retrieve` is documented at the time of writing (November 2026): rate not yet published.

## Scope

- **Who calls it:** applications and agents that connect an MCP client to the Work IQ MCP endpoint, acting as a signed-in user. Application-only authentication is not supported for the Work IQ API.
- **Whose data:** whatever the calling user can access in Microsoft 365, plus connected sources when the `copilot` strategy is used.
- **Prerequisites listed on Learn:** the tenant enabled for Work IQ, usage-based billing and a spending policy that includes Work IQ API for the calling users, a client app with the delegated `WorkIQAgent.Ask` permission, and, where the organisation uses Work IQ MCP policy, Work IQ MCP enabled.
- **Roles:** the one-time Work IQ setup needs a user with the Global Administrator role. Roles for the other steps are not covered here.
- **Cloud and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the Developer platform. It lists no US Government cloud; Microsoft Learn is not read here as saying whether those clouds are excluded.

## Governance guidance

### Before rollout

- Check which spending policies already include Work IQ API, and whether **Auto-apply new services** is on for them, so that developers' calls are not covered by a policy you did not intend.
- Set a monthly policy limit and, if wanted, a per-user limit on the policy that covers the people building agents. Learn says users who reach their limit lose access to agents and services until credits reset.
- Review oversharing in the SharePoint sites and mailboxes that the pilot users can reach, because retrieval returns whatever the user can access.
- Decide who may grant the delegated `WorkIQAgent.Ask` permission for client apps.

### At rollout

- Open the Work IQ MCP policy in the Microsoft 365 admin center and record whether it is on, so you know what a tenant-level block would do.
- Ask developers to confirm `retrieve` appears in `tools/list` and to scope requests with the `capabilities` allow list.
- Ask developers to surface policy-denied responses instead of retrying them.

### After rollout

- Review consumption in the Cost management dashboard in the Microsoft 365 admin center, where Work IQ API usage is listed among the supported services.
- Re-read the Learn pages for the retrieve tool when the roadmap status changes from In development, since the preview documentation may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ MCP tools, including retrieve, are allowed in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">The Policy tab shows 'when it's available'. Tenant-level only; changes can take up to 24 hours to apply.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can consume Copilot Credits for Work IQ API, and the monthly limits</strong><br><small>Tenant</small><br><small class="controls__note">Beta API; the permission is CopilotCostManagement-Policy.ReadWrite.All. Work IQ API is the service to include in the policy per the retrieve page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id} with periodLimit, perUserLimit or billingMethods in the body and an If-Match ETag header</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Work IQ MCP policy is described as tenant-level in the initial release; per-user, per-app, per-agent or scenario-specific templates are not part of that control surface. Microsoft Learn documents no API for reading or changing this policy at the time of writing (November 2026), so it is a UI-only control as far as Microsoft's pages show.

Spending policies decide who can consume credits for Work IQ API and within what limits. The retrieve page says calling users must be assigned to a spending policy that includes Work IQ API. The Graph API row is the Copilot Cost Management API, which is in beta; Microsoft's page says it is not supported for production applications. This briefing found no page saying that API's service settings expose Work IQ API specifically.

Source scoping with `capabilities` and the choice of `grounding` or `copilot` strategy are set by the calling application in each request. They are not admin settings, so do not treat them as enforcement.

## Open questions

- Does the roadmap item "Work IQ: Retrieve" refer to the `retrieve` tool in Work IQ MCP, and when will its public preview status change? Watch the roadmap item and the Work IQ MCP overview on Microsoft Learn.
- Is the Work IQ MCP policy on or off by default in a tenant, and does it apply to `retrieve` calls in the same way as other tools?
- What Copilot Credit rate applies to a `retrieve` call, and is it metered differently for the `grounding` and `copilot` strategies?
- Will Microsoft document an API for the Work IQ MCP policy and a way to restrict `retrieve` by source type at tenant level?

<!-- rationale
risk: Medium. Agents can pull content the signed-in user can see (email, files, meetings, Teams messages) into a model, and the admin controls are a tenant-wide Work IQ MCP policy switch and spending policies.
cost: Variable. Work IQ API usage consumes Copilot Credits through usage-based billing, shared with other eligible services; no rate specific to retrieve is documented at the time of writing (November 2026).
impact: Low. The tool is called by developers' agents and apps through the Work IQ MCP endpoint; admins and the people building agents notice first, and end users only through agents that use it.
-->

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].api; Governance controls: second row / command: PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id} updates periodLimit, perUserLimit or billingMethods using an If-Match ETag. | Found: PATCH /copilot/costManagement/spendingPolicies/{id} ... If-Match | The ETag of the spending policy. Required. ... The following properties can be updated: displayName, periodLimit, perUserLimit, and billingMethods. | Fix: Set controls[1].api.call and the rendered call to 'PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}'. Add to its note: 'The request body sets periodLimit or perUserLimit to change spending limits; If-Match supplies the policy ETag.' Leave complete funding-change requirements to the linked reference. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update
- [supported, minor] Governance controls: API service-setting qualification / absence: No page found maps the API's service settings specifically to Work IQ API as an individual billable service. | Found: Searched: "Work IQ" "serviceSettings" "workIQ". Read spendingpolicyservicesetting: serviceId identifies a category such as workIQ, and multiple billable services can share a category; it does not identify Work IQ API individually. | Fix: Replace 'This briefing found no page saying that API's service settings expose Work IQ API specifically.' with 'The API documents a governed-service category named workIQ; multiple billable services can share a category.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/spendingpolicyservicesetting. Do not equate the category with an individual billable service.
- [contradicted, minor] Governance guidance: Before rollout, delegated consent bullet / consistency: The consent-governance decision in the checklist is represented in the controls table. | Found: Decide who may grant the delegated `WorkIQAgent.Ask` permission for client apps. ... Controls table: Whether Work IQ MCP tools ... are allowed in the tenant; Who can consume Copilot Credits ... and the monthly limits. | Fix: Remove the Before rollout bullet 'Decide who may grant the delegated `WorkIQAgent.Ask` permission for client apps.' Keep the permission prerequisite and security discussion unchanged; the consent-governance decision has no corresponding control row.
-->
