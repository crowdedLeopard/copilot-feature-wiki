---
title: "Dynamics 365 ERP apps plugin for Copilot Cowork: work with finance and operations data in Cowork"
slug: "dynamics-365-finance-and-operations-cross-app-boost-productivity-with-copilot-use-copilot"
roadmapId: 576838
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Finance and Operations cross-app"]
summary: "Copilot Cowork users with Microsoft 365 Copilot and a finance and operations licence can read and change ERP data through a plugin. Admins set up Cowork billing and ERP prerequisites first; usage consumes Copilot Credits."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Each user needs a Microsoft 365 Copilot licence and a qualifying Dynamics 365 finance and operations apps licence. Cowork usage is metered in Copilot Credits; Learn says ERP MCP calls can consume credits under the MCP licensing rules, with exemptions for qualifying premium licences."
audiences: ["m365-admin","service-owner","finops","security"]
tags: ["cowork","dynamics-365","finance-and-operations","m365-copilot","copilot-credits","mcp","plugins","human-in-the-loop","spending-policies","usage-based-billing"]
sources:
  - title: "Microsoft 365 Roadmap 576838"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576838"
    kind: "roadmap"
  - title: "Enable the Dynamics 365 ERP apps plugin for Copilot Cowork"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/enable-copilot-cowork-erp"
    kind: "learn"
  - title: "Use Copilot Cowork with Dynamics 365 ERP"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/fin-ops/copilot/use-copilot-cowork-erp"
    kind: "learn"
  - title: "Use Model Context Protocol for finance and operations apps"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/copilot-mcp"
    kind: "learn"
  - title: "Security for Dynamics 365 ERP MCP"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/mcp/mcp-security"
    kind: "learn"
  - title: "Connect to the Dynamics 365 ERP MCP server with Microsoft Foundry"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/mcp/mcp-foundry"
    kind: "learn"
  - title: "Manage Copilot Cowork for your organization"
    url: "https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-admin-governance"
    kind: "learn"
  - title: "Determine access controls for Copilot Cowork"
    url: "https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-access"
    kind: "learn"
  - title: "Manage plugins for Copilot Cowork"
    url: "https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-manage-plugins"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/plugins/cost-considerations"
    kind: "learn"
  - title: "What is Dataverse intelligence? (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-intelligence"
    kind: "learn"
  - title: "Which users can use Copilot Cowork, and so the ERP apps plugin (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
  - title: "Whether the plugin is available to all users, to specific users or groups, or blocked (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["dynamics-365-finance-and-operations-cross-app-boost-productivity-with-copilot-boost-agent","m365-copilot-copilot-cowork-access-business-applications-with-work-iq","spending-policies","copilot-credits","mcp"]
controls:
  - governs: "Which users can use Copilot Cowork, and so the ERP apps plugin"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > policy > Select agents and services > Cowork"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-admin-governance"
    api:
      kind: "graph"
      call: "POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    note: "Beta API; adds a service to an existing policy and needs the policy's If-Match ETag. A low credit limit does not block access; scope does."
  - governs: "Whether the plugin is available to all users, to specific users or groups, or blocked"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > plugin > Users > Block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-manage-plugins"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Needs a tenant or Copilot administrator. The Users tab also offers Available to all users and Available to specific users or groups. The API needs a Microsoft Agent 365 licence; confirm the plugin's package id."
  - governs: "Whether Dataverse data is available to Microsoft Copilot, which the plugin requires"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > Dataverse data available in Microsoft Copilot"
      docs: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/enable-copilot-cowork-erp"
    api: null
    note: "AI administrator or Global administrator. Changes can take up to one hour to propagate. Another Learn page labels it 'Business Applications data in Work IQ available to Copilot'."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-16T19:09:41"
changes:
  - date: "2026-11-23"
    note: "New briefing: the Dynamics 365 ERP apps plugin for Copilot Cowork, its prerequisites, Copilot Credit billing and the admin controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 90 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 90
  confirmed: 87
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "10c7b7d4b9ed076d9c9c1572ec94c7d9"
---

## What's changing

The Dynamics 365 ERP apps plugin lets users of Microsoft Copilot Cowork read and change finance and operations apps data from a Cowork conversation, alongside email, documents and other Microsoft 365 data. Microsoft's enable page says the plugin connects Cowork to a finance and operations apps environment through the Dynamics 365 ERP MCP server (the Model Context Protocol endpoint that exposes ERP tools to agents), and that users can ask Cowork to retrieve ERP data, perform operations and orchestrate workflows that span ERP, email and documents.

The plugin uses the dynamic Dynamics 365 ERP MCP server, which offers data tools (create, read, update and delete through data entities), form tools (operations available on application pages) and action tools (business logic that developers expose). A user installs the plugin from Discover in Cowork, configures the **Finance & Operations** connector and completes a sign-in or consent flow. An administrator can instead deploy the plugin to selected users or groups from the Microsoft 365 admin center; each user still configures and signs in to the connector.

The roadmap item (576838) is Launched, with a target date and preview date of June CY2026 and release phases General Availability and Preview, for Worldwide (Standard Multi-Tenant) on Web. Its description says the preview scope is an initial set of finance and supply chain scenarios, with limited action coverage for transactional workflows, for selected preview customers. The Learn enable and use pages carry no preview label and no selected-customer restriction. Learn says the plugin works on Cowork's web, Outlook and Teams, desktop and mobile surfaces, and that the connector is set up in the Cowork web experience.

## Why it matters

This adds a chat route from Microsoft 365 into ERP records, and it is governed in two places: the Microsoft 365 admin center (Cowork access, billing, plugin availability) and the finance and operations environment (security roles, allowed MCP clients). Microsoft states that operations run under the authenticated user's identity and that the MCP server does not elevate privilege, so the ERP security roles you already assigned now decide what a Cowork prompt can do. Over-broad roles that rarely mattered for occasional client users matter more once an agent can work through forms and data entities for them.

The default state is admin-opt-in: Learn lists Cowork enablement, usage-based billing and the Dataverse setting as prerequisites, and the roadmap says the item is enabled by admins for end users. Once those are in place, licensed users can install the plugin themselves unless it is blocked or scoped, so decide who should be allowed to before you switch Cowork on for a wide group.

## Risk assessment

**Data exposure**
- ERP data returned by the plugin is combined with email, documents and spreadsheets in one Cowork conversation. Microsoft says the MCP server does not store customer data, but any data movement or retention outside the finance and operations environment depends on the agent client's retention policies, so review Cowork's own handling. Microsoft's Cowork admin page points to Microsoft Purview for securing and governing Cowork.
- Cowork can use Anthropic models as a subprocessor for some capabilities. Learn says that capability is off by default in the EU, EFTA and UK, where administrators must enable it for their users.

**Security & identity**
- Each request runs as the signed-in user, and the user sees only what their ERP roles, duties and privileges allow. A wide ERP role is therefore a wide Cowork reach. Learn lists system administration forms (security, user setup, Feature Management) as not reachable through the MCP server.
- Learn gives conflicting statements on the Cowork client: the enable page tells you to add Cowork's client ID to Allowed MCP Clients, while the security page lists Microsoft Cowork among the platforms allowed by default. Check the page on each environment.

**Autonomy & actions**
- Data and form tools can create, update and delete ERP records. ERP business logic still applies: a transaction the client would reject is also rejected through the MCP server.
- Cowork asks for approval before acting, and users can choose Always allow to skip later prompts for similar actions in that conversation. Train finance users to read the proposed ERP change before approving.

**Change & support**
- The plugin needs a supported environment (minimum version, Tier 2 or above, not CHE or on-premises). Learn's troubleshooting table covers 'Your admin has disabled this plugin', 'No compatible Dynamics environment found' and 'Unable to connect'.
- The MCP server is unavailable during environment downtime, such as servicing windows, so requests fail then.

## Cost and licensing

Each user needs an active Microsoft 365 Copilot licence and a qualifying Dynamics 365 licence for finance and operations apps; Finance and Supply Chain Management are among the qualifying licences. Environment, sandbox, storage or capacity add-ons and licences for other Dynamics 365 products do not qualify (enable page). Administrator deployment does not bypass any of these requirements.

Cowork is billed by usage in Copilot Credits: model responses, tool and skill calls and other activities count towards consumption (Cowork admin page). The use page says calls to the ERP MCP server can consume Copilot Credits under the current MCP licensing rules, with exemptions for qualifying premium licences. The MCP licensing section gives 0.1 Copilot Credits per tool call for agents on clients other than Copilot Studio and exempts Dynamics 365 Finance Premium and Supply Chain Management Premium users for those clients; that section does not name Cowork, so confirm how it applies before budgeting.

Cowork, Copilot Studio agents and Work IQ API can draw on a shared tenant credit pool, so ERP-driven usage competes with them. Spending limits are set in the spending policy (see the controls table); the Cowork access page calls credit limits a spending safeguard rather than a real-time access gate, and says limit enforcement is evaluated asynchronously.

## Scope

**Who gets it:** users who hold Microsoft 365 Copilot and a qualifying finance and operations apps licence and who have Cowork access through a spending policy that selects Cowork. Each user needs ERP security roles in the environment. Administrators who manage plugins need to be a tenant administrator or have the Copilot administrator role; the Dataverse setting needs the AI administrator or Global administrator role.

**Environments:** version 10.0.47, 10.0.46 PQU-2 or 10.0.45 PQU-7 or later; Tier 2 or above, or a Unified Developer Environment; the Dynamics 365 ERP Model Context Protocol server feature enabled in Feature Management (enabled by default in supported environments).

**Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web. Learn says Anthropic models are not available in government or sovereign clouds, and that the plugin is available in regions where Copilot Cowork is deployed.

**Rollout:** the roadmap shows June CY2026 as the target and preview date with status Launched; the pages read give no rollout wave or release channel.

## Governance guidance

### Before rollout
- Identify which users hold both a Microsoft 365 Copilot licence and a qualifying finance and operations apps licence, and which environments meet the version and tier requirements.
- Decide who receives Cowork by scoping the spending policy that selects Cowork, and set per-user limits there (access and spend controls are the first row of the table).
- Review the ERP security roles, duties and privileges of the pilot group, because the plugin exposes only what those roles permit.
- Check that the Dataverse data setting is enabled for the pilot users, and allow up to one hour for it to propagate; in EU countries with Works Council requirements Learn says Dataverse might be disabled by default.

### At rollout
- Deploy the plugin to a pilot security group from the Microsoft 365 admin center, or leave it in the store for users to acquire, and block it where it is not wanted.
- Confirm in each pilot environment that the Cowork client ID 6ab48b67-cd74-4ad4-81af-5932984589be is allowed on the Allowed MCP clients page.
- Ask each pilot user to configure the Finance & Operations connector and sign in, since administrators cannot sign in for them.
- Brief finance approvers to read each proposed ERP change before approving and to treat Always allow with care.

### After rollout
- Review Copilot Credit consumption and the Cowork usage dashboard against the spending policy's limits.
- Search the Microsoft Purview audit log under Copilot activities for plugin interactions.
- Revisit ERP role assignments for pilot users whose Cowork use shows access they do not need.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can use Copilot Cowork, and so the ERP apps plugin</strong><br><small>Group</small><br><small class="controls__note">Beta API; adds a service to an existing policy and needs the policy's If-Match ETag. A low credit limit does not block access; scope does.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › policy › Select agents and services › Cowork <a href="https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-admin-governance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the plugin is available to all users, to specific users or groups, or blocked</strong><br><small>Tenant</small><br><small class="controls__note">Needs a tenant or Copilot administrator. The Users tab also offers Available to all users and Available to specific users or groups. The API needs a Microsoft Agent 365 licence; confirm the plugin's package id.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › plugin › Users › Block <a href="https://learn.microsoft.com/microsoft-365/copilot/cowork/cowork-manage-plugins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Dataverse data is available to Microsoft Copilot, which the plugin requires</strong><br><small>Tenant</small><br><small class="controls__note">AI administrator or Global administrator. Changes can take up to one hour to propagate. Another Learn page labels it 'Business Applications data in Work IQ available to Copilot'.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Dataverse data available in Microsoft Copilot <a href="https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/enable-copilot-cowork-erp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first two rows are Microsoft 365 admin center controls; Cowork access is granted only by a spending policy, and the Cowork entry under Agents > All agents no longer controls access. Blocking the plugin applies to new conversations; conversations in progress continue until they end. Deploying the plugin to chosen users is done under Agents > Tools > plugin > Installed for, by selecting All users or Specific users/groups.

The Dataverse setting is labelled 'Dataverse data available in Microsoft Copilot' on the plugin's enable page and 'Business Applications data in Work IQ available to Copilot' on the Dataverse intelligence page, which also lets you pick All users or specific Entra security groups. Learn says the Dataverse setting controls whether the plugin is offered and eligible, not how it accesses ERP data.

Inside the finance and operations environment, the Allowed MCP clients page (System administration > Setup > Allowed MCP clients, as the Foundry connection page gives it) decides which agent clients can connect, and ERP security roles decide what a connected user can reach. Changes to allowed clients can take up to one minute to apply. Those two controls are described on the MCP security page and not repeated as table rows.

## Open questions

- What Copilot Credit rate applies to Dynamics 365 ERP MCP tool calls made through Cowork: does the 0.1 credit per tool call that the MCP licensing section gives for clients other than Copilot Studio apply, and are Finance Premium and Supply Chain Management Premium users exempt in Cowork? Watch the MCP licensing section and the Cowork billing pages.
- Is the Cowork client already allowed by default on each environment, as the security page says, or must administrators add it as the enable page says? Watch both pages for alignment.
- The roadmap lists Preview alongside General Availability and limits the preview to selected customers; does the plugin carry any preview limits for action coverage that Learn does not yet describe? Watch the roadmap item and the enable page.
- Which label will the tenant setting carry, 'Dataverse data available in Microsoft Copilot' or 'Business Applications data in Work IQ available to Copilot'? Check the Microsoft 365 admin center Copilot settings in your tenant.

<!-- rationale
risk: Medium. The plugin can create, update and delete ERP records for licensed users, bounded by their ERP security roles and by Cowork's approval prompts.
cost: Variable. Cowork usage is metered in Copilot Credits, on top of a Microsoft 365 Copilot licence and a qualifying Dynamics 365 finance and operations apps licence for each user.
impact: Medium. Only users who hold both licences and are given Cowork access notice it, mainly finance and supply chain staff; administrators carry the setup.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing; Open questions: first bullet / applicability: Whether the published other-client MCP execution rate and premium exemptions apply in Cowork remains unresolved. | Found: Calls to the Dynamics 365 ERP MCP server can consume Copilot Credits according to the current MCP licensing rules, with applicable exemptions for qualifying premium licenses. Learn more in Licensing. | Fix: Remove the first Open questions bullet. Replace the final sentence of the MCP billing paragraph with: 'The Cowork ERP use page applies these MCP licensing rules: ERP MCP tool execution on clients other than Copilot Studio costs 0.1 Copilot Credits per tool call, with Dynamics 365 Finance Premium and Dynamics 365 Supply Chain Management Premium users exempt from tool execution billing; Cowork orchestration consumption is separate.' Cite https://learn.microsoft.com/dynamics365/fin-ops-core/fin-ops/copilot/use-copilot-cowork-erp and https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/copilot-mcp#licensing. | Source: https://learn.microsoft.com/dynamics365/fin-ops-core/fin-ops/copilot/use-copilot-cowork-erp
- [contradicted, blocker] Risk assessment: Change & support / availability: The plugin needs a Tier 2 or above environment, without the Unified Developer Environment exception given later in Scope. | Found: The environment must be Tier 2 or above, or a Unified Developer Environment. Cloud Hosted Environments (CHE) and on-premises environments aren't supported. | Fix: Replace the first sentence of the Change & support bullet with: 'The plugin needs a supported environment meeting the minimum version requirement: Tier 2 or above, or a Unified Developer Environment; CHE and on-premises environments are not supported.' | Source: https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/enable-copilot-cowork-erp
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api / command: POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings adds Cowork as a governed service to an existing policy. | Found: Create a new spendingPolicyServiceSetting object to add a service to an existing spending policy. ... Required properties are serviceId and state. | Fix: Keep the call. Add to controls[0].note: 'The request body sets serviceId to cowork and state to enabled.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create and https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/spendingpolicyservicesetting. The existing overview documents the operation, but these additional references supply its request contract and Cowork service category. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create
- [contradicted, minor] Governance guidance; Governance controls / consistency: The governance checklist directs readers to review controls that are absent from the controls table. | Found: Review the ERP security roles, duties and privileges of the pilot group ... Confirm ... Allowed MCP clients ... Review ... Cowork usage dashboard ... Search the Microsoft Purview audit log. The table contains only Cowork access, plugin availability and the Dataverse setting. | Fix: The ERP security-role review, Allowed MCP clients check, Cowork usage-dashboard review and Purview audit search have no controls-table rows. Remove those checklist bullets, including the later ERP role reassessment bullet, to satisfy the checklist/table rule without adding unverified rows; retain the existing explanatory prose.
-->
