---
title: "Dynamics 365 Sales: sales skills in Microsoft 365 Copilot Cowork"
slug: "dynamics-365-sales-copilot-and-ai-innovation-use-dynamics-365-sales-skills-in-m365-copilot"
roadmapId: 576850
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Sales"]
summary: "Dynamics 365 Sales skills are in Copilot Cowork, on by default for eligible users and billed by usage. Admins should check the Sales plugin, Dataverse MCP server and Cowork spending policy settings."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "The Sales plugin needs a Sales Enterprise or Sales Premium licence plus an appropriate licence for Microsoft Copilot. Cowork is also billed on usage, and charges are not part of a fixed licence plan."
audiences: ["m365-admin","power-platform-admin","finops","service-owner"]
tags: ["cowork","dynamics-365","m365-copilot","plugins","skills","dataverse-mcp","spending-policies","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 576850"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576850"
    kind: "roadmap"
  - title: "Use sales skills in Copilot Cowork"
    url: "https://learn.microsoft.com/dynamics365/sales/use-copilot-cowork-sales-skills"
    kind: "learn"
  - title: "Manage access to Sales agent and Dynamics 365 Sales plugins across Microsoft apps"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps"
    kind: "learn"
  - title: "Manage Copilot Cowork for your organization"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    kind: "learn"
  - title: "Manage plugins for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins"
    kind: "learn"
  - title: "Determine access controls for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-access"
    kind: "learn"
  - title: "Understand your Copilot Credit usage across usage-based billing features"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-cost"
    kind: "learn"
  - title: "Configure the Dataverse MCP server for an environment"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    kind: "learn"
  - title: "Who can use Cowork at all, through a spending policy that selects Cowork (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create"
    kind: "learn"
  - title: "Credit limits for Cowork usage in a spending policy (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Credit limits for Cowork usage in a spending policy (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Whether the Sales plugin is available to users in Cowork (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-cowork-access-business-applications-with-work-iq","spending-policies","copilot-credits","m365-copilot-use-dataverse-business-skills-in-sales-agent","mcp"]
controls:
  - governs: "Who can use Cowork at all, through a spending policy that selects Cowork"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy > Select agents and services > Cowork"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    api:
      kind: "graph"
      call: "POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create"
    note: "Adds a service to an existing policy; the page's example uses another serviceId and does not give the Cowork value. Beta API."
  - governs: "Credit limits for Cowork usage in a spending policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy > Set limits and alerts"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "The request body sets periodLimit or perUserLimit. Learn says a low limit does not prevent access until the limit is reached. Beta API."
  - governs: "Whether the Sales plugin is available to users in Cowork"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > plugin > Users > Block"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Needs tenant administrator or Copilot administrator role. The Graph page needs a Microsoft Agent 365 licence and does not say it covers the Sales plugin. Beta API."
  - governs: "Which users or groups can access Dynamics 365 Sales plugins in Cowork"
    scope: "group"
    ui:
      surface: "Sales agent administrator settings"
      path: "Tenant > Access settings > Allow access to Dynamics 365 Sales plugins"
      docs: "https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps"
    api: null
    note: "Global Administrator, Exchange Administrator or Power Platform Administrator role. Controls access only; does not assign licences or grant CRM data access."
  - governs: "Whether the Dataverse MCP server the Sales plugin uses is on for an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol > Allow MCP clients to interact with Dataverse MCP server"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    api: null
    note: "Power Platform administrator role. Disabling it stops all tools and agents that rely on the server in that environment."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-16T19:09:47"
changes:
  - date: "2026-11-23"
    note: "New briefing: Dynamics 365 Sales skills in Copilot Cowork, launched per the roadmap, with the plugin, access, spending policy and Dataverse MCP controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 80 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 76
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "24f044383472b7c17d74a58a2f502472"
---

## What's changing

Sellers can now use Dynamics 365 Sales skills inside Microsoft 365 Copilot Cowork. The skills pull Dynamics 365 Sales data together with emails, meetings and collaboration activity, so a seller can ask for deal catch-ups, pipeline and forecast reviews, meeting preparation, outreach drafts or competitive strategy in one request. Learn lists 18 skills across two plugins: **Sales**, which needs a Dynamics 365 Sales licence, and **Sales for Cowork**, a CRM-agnostic plugin that also works with uploaded data.

The roadmap item states that the Dynamics 365 Sales plugin is installed by default in Copilot Cowork and available to all users who have access to Cowork, and that the feature is enabled for end users automatically. Learn's Sales page is narrower: the Sales plugin needs a Sales Enterprise or Sales Premium licence, and it tells users to turn on the **Sales** toggle under **Customize** in Cowork, adding that without the plugin installed there is no **Sales** option in the plugin list. Microsoft's Cowork plugin page says Dynamics 365 Customer Service and Sales integrations are enabled by default.

The Sales plugin reaches Sales data through the Dataverse MCP server. On a user's first sales prompt, Cowork asks which Dynamics 365 environment to use and remembers the choice. Learn says Cowork does not take consequential actions autonomously and asks for confirmation before updating records, sending emails or creating tasks.

The roadmap record gives the status as Launched, with a General Availability target of June CY2026 and a Preview date of May CY2026, for Worldwide (Standard Multi-Tenant) on the web.

## Why it matters

This is a feature that arrives for eligible users without an admin choosing it, and it combines two billing and access models: a Dynamics 365 Sales licence for the plugin and usage-based billing for Cowork. Administrators who do nothing leave the Sales plugin on for every eligible user, because Learn states that by default all eligible users have access unless access restrictions are configured.

The practical decisions are who gets the plugin, whether the Dataverse MCP server is on in the environments sellers use, and whether the Cowork spending policy sets limits that match the expected use. Sales and finance owners should agree these before sellers start running pipeline analyses across CRM and Microsoft 365 data.

## Risk assessment

**Data exposure**
- The Sales plugin reads Dynamics 365 Sales data through the Dataverse MCP server and combines it with email, meetings, calendars and collaboration activity. Learn says identity and access controls determine what users can discover and use. Restrict who holds the plugin with the Sales plugin access row in the controls table.
- Tenant access settings do not grant access to CRM data and do not override licensing, environment or security requirements, so a seller's Dynamics 365 security roles still decide which records the skills can use.

**Security & identity**
- Dynamics 365 plugins use Microsoft Entra ID authentication, and each user selects the Dynamics 365 environment to connect to. Check which environments sellers can reach before rollout.
- Learn says Cowork activity is auditable end to end. Microsoft's plugin page says Microsoft Purview audit logs record Copilot activities, including interactions with Cowork and its plugins.

**Autonomy & actions**
- Learn says Cowork asks you to confirm before updating records, sending emails or creating tasks. Cowork also supports automated tasks that run without a person present; Microsoft's Cowork administration page describes approval controls for them, which this briefing has not checked against the Sales plugin.

**Change & support**
- Access to Cowork is granted through a spending policy, not through the Cowork agent entry, so a seller who cannot see the Sales plugin may be blocked at the plugin, the Sales access setting, the Dataverse MCP server or the licence. Learn's Sales page lists each of these as a prerequisite.
- Disabling the Dataverse MCP server stops all tools and agents that rely on it in that environment, so switching it off to restrict Cowork also affects other users of the server.

## Cost and licensing

The Sales plugin needs a Sales Enterprise or Sales Premium licence, plus an appropriate licence to access Microsoft Copilot. The CRM-agnostic **Sales for Cowork** plugin needs an appropriate licence to access Microsoft Copilot (Learn: Use sales skills in Copilot Cowork).

Cowork is billed on usage. Learn says charges are not part of a fixed licence plan and vary with token usage, which depends on factors such as the prompt, task duration and underlying model. Usage is measured in credits, and Microsoft's usage page says the organisation manages the monthly credit limits that apply. Learn states that a spending policy that selects Cowork grants access to Cowork, and that a very low credit limit does not prevent access until the limit is reached.

A credit rate specific to the Sales skills is not stated on the pages read for this briefing. Plan for admin time to set up the plugin, access groups and spending policy, and for the Dataverse MCP server to be enabled in each environment sellers use.

## Scope

**Users and licences.** Sellers need a Sales Enterprise or Sales Premium licence for the Sales plugin and an appropriate licence to access Microsoft Copilot. Users without a CRM licence can use the CRM-agnostic Sales for Cowork plugin.

**Roles.** Managing the Sales plugin access setting needs the Global Administrator, Exchange Administrator or Power Platform Administrator Microsoft Entra role. Managing Cowork plugins in the Microsoft 365 admin center needs tenant administrator access or the Copilot administrator role. The Dataverse MCP environment settings need the Power Platform administrator role.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the web platform.

**Rollout.** The record gives the status as Launched, with a General Availability target of June CY2026 and a Preview date of May CY2026. The roadmap item says the plugin is installed by default and enabled for end users automatically.

**Prerequisites.** Learn lists these for administrators: the Dataverse MCP server enabled for the environment, the Sales app installed, the Sales plugin and Dynamics 365 Sales MCP component not blocked under Agents > Tools, and the Copilot Cowork, Copilot Code, and Microsoft Scout toggle enabled in Sales agent administrator settings.

## Governance guidance

### Before rollout
- Decide which sellers should have the Sales plugin, and put them in Microsoft Entra security groups for the Sales plugin access row in the controls table.
- Check the Cowork spending policy row: confirm a policy that selects Cowork covers the intended users, and review its credit limits.
- Confirm the Dataverse MCP server is on in each Dynamics 365 environment sellers will use.
- Check that the Sales plugin and the Dynamics 365 Sales MCP component are not blocked under Agents > Tools.

### At rollout
- Set the **Allow access to Dynamics 365 Sales plugins** option to the intended groups, using Allow access or Restrict access lists.
- Tell sellers that Cowork asks them to choose a Dynamics 365 environment on the first sales prompt, and to confirm actions before records are updated or emails are sent.
- Review the access setting 15 minutes after saving, as Learn says changes can take up to 15 minutes to take effect.

### After rollout
- Review credit use against the spending policy limits, using the usage views Microsoft's Cowork administration page describes in the Microsoft 365 admin center.
- Search the Microsoft Purview audit log for Copilot activities to see how sellers use Cowork and its plugins.
- Recheck the Sales plugin and access settings when the Learn page changes, since the roadmap item and Learn describe the default install differently.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can use Cowork at all, through a spending policy that selects Cowork</strong><br><small>Tenant</small><br><small class="controls__note">Adds a service to an existing policy; the page's example uses another serviceId and does not give the Cowork value. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy › Select agents and services › Cowork <a href="https://learn.microsoft.com/copilot/cowork/cowork-admin-governance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Credit limits for Cowork usage in a spending policy</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets periodLimit or perUserLimit. Learn says a low limit does not prevent access until the limit is reached. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy › Set limits and alerts <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Sales plugin is available to users in Cowork</strong><br><small>Tenant</small><br><small class="controls__note">Needs tenant administrator or Copilot administrator role. The Graph page needs a Microsoft Agent 365 licence and does not say it covers the Sales plugin. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › plugin › Users › Block <a href="https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access Dynamics 365 Sales plugins in Cowork</strong><br><small>Group</small><br><small class="controls__note">Global Administrator, Exchange Administrator or Power Platform Administrator role. Controls access only; does not assign licences or grant CRM data access.</small></td><td data-label="Admin UI"><strong>Sales agent administrator settings</strong><br>Tenant › Access settings › Allow access to Dynamics 365 Sales plugins <a href="https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Dataverse MCP server the Sales plugin uses is on for an environment</strong><br><small>Environment</small><br><small class="controls__note">Power Platform administrator role. Disabling it stops all tools and agents that rely on the server in that environment.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol › Allow MCP clients to interact with Dataverse MCP server <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Cowork access and the Sales plugin are separate controls. A spending policy that selects Cowork decides who can use Cowork at all; Learn says the **Cowork** agent entry under Agents > All Agents no longer controls access. The Sales plugin access setting and the Agents > Tools block then decide who sees the Sales plugin inside Cowork.

The Sales plugin access setting controls access only. Learn says it does not install apps, assign licences, connect to a CRM environment or grant access to CRM data. Microsoft Learn documents no API for the Sales plugin access setting or the Dataverse MCP environment setting at the time of writing (November 2026). The Graph block call is the Package Management API, which Learn says needs a Microsoft Agent 365 licence; the page does not say whether it covers the Sales plugin.

## Open questions

- Is the Sales plugin installed for eligible users automatically, as the roadmap item states, or must each user turn on the **Sales** toggle under **Customize**, as Learn's Sales page describes? Watch the Learn page and Message center.
- What credit rate applies to Sales skills in Cowork? Watch Microsoft's Cowork credit usage and licensing guide pages.
- Does the Package Management API block call apply to the Sales plugin? Watch the Microsoft Graph reference for the copilotPackage block page.
- Does an automated Cowork task that uses the Sales plugin pause for approval before it updates Dynamics 365 records? Watch Microsoft's Cowork administration page.

<!-- rationale
risk: Medium. The Sales plugin reads Dynamics 365 Sales data through the Dataverse MCP server and combines it with Microsoft 365 context, and it is on by default for eligible users. Learn says Cowork asks for confirmation before actions such as updating records.
cost: Variable. Cowork is billed on usage, varying with token usage, and the Sales plugin also needs a Sales Enterprise or Sales Premium licence. A credit rate specific to the Sales skills is not stated on the pages read.
impact: Medium. The Sales plugin needs a Sales Enterprise or Sales Premium licence, so licensed sellers notice it first; admins notice it through plugin, access and usage settings.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls: Cowork access row / admin-path: The Cowork access route is Copilot > Cost Management > Configuration > Add spending policy > Select agents and services > Cowork. | Found: Create and name the policy and then choose Identity as the scope. Use this option when you need to manage usage by users or groups for a supported service. | Fix: Replace controls[0].ui.path and its rendered route with 'Copilot > Cost Management > Configuration > Add spending policy > Identity > Select agents and services > Cowork'. The existing Cowork governance citation supports the last steps; also cite https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits#policy-scope for the policy-type choice. | Source: https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits
- [contradicted, blocker] controls[1].ui; Governance controls: credit limits row / admin-path: The Cowork credit-limit route is Copilot > Cost Management > Configuration > Add spending policy > Set limits and alerts. | Found: Create and name the policy and then choose Identity as the scope. Select the agents and services that users and groups in this policy can access. | Fix: Replace controls[1].ui.path and its rendered route with 'Copilot > Cost Management > Configuration > Add spending policy > Identity > Select agents and services > Cowork > Set limits and alerts'. Retain the existing note identifying policy-level and per-user limits; the Cowork selection is documented at https://learn.microsoft.com/copilot/cowork/cowork-admin-governance#migrating-from-frontier-or-preview-access-control. | Source: https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits
- [contradicted, blocker] controls[3].ui; Governance controls: Sales plugin access row / admin-path: The Sales plugin group-access route starts at Sales agent administrator settings > Tenant > Access settings > Allow access to Dynamics 365 Sales plugins. | Found: You can access the administrator settings in the Sales agent in Outlook and Teams. On the left navigation pane, select Sales. Select the Settings tab. | Fix: Set controls[3].ui.surface to 'Outlook or Teams (Sales personal app)' and path to 'Sales > Settings > Tenant > Access settings > Allow access to Dynamics 365 Sales plugins > Who can use this feature? > Set access restrictions > Allow access or Restrict access'. Add https://learn.microsoft.com/microsoft-sales-copilot/administrator-settings-sales-app#access-administrator-settings to sources for opening settings; retain the access-settings-apps docs URL for the control's final steps. | Source: https://learn.microsoft.com/microsoft-sales-copilot/administrator-settings-sales-app
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing; Scope: Users and licences / licensing: Users also need an appropriate licence to access Microsoft Copilot. | Found: An appropriate license to access Microsoft Copilot. | Fix: Keep the Sales page's requirement, and add: 'The Cowork plugin administration page also says users of Cowork plugins must have Microsoft 365 Copilot licences assigned.' Cite https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins#prerequisites. | Source: https://learn.microsoft.com/dynamics365/sales/use-copilot-cowork-sales-skills
- [supported, minor] What's changing; Open questions / admin-path: Learn tells users to enable Sales under Customize in Cowork. | Found: In Microsoft Copilot, select the Cowork tab. Select Customize from the left navigation pane. Turn on the toggle for Sales to enable the plugin for Dynamics 365 Sales. | Fix: Replace the installation-versus-toggle open question with: 'The Sales page says the Sales app, which includes the Sales plugin, is automatically installed for eligible organisations and users based on their licence; it separately instructs users to enable Sales under Customize. Confirm the user-facing enabled state in your tenant.' Installation and user enablement are separate steps, not mutually exclusive accounts. Source: https://learn.microsoft.com/dynamics365/sales/use-copilot-cowork-sales-skills#prerequisites. | Source: https://learn.microsoft.com/dynamics365/sales/use-copilot-cowork-sales-skills
- [supported, minor] What's changing; Risk assessment: Security & identity; Governance guidance: At rollout / behaviour: Cowork prompts the user to select a Dynamics 365 environment on the first sales prompt. | Found: When you enter a sales-specific prompt in Cowork for the first time, it prompts you to select the Dynamics 365 environment from which to pull the data. | Fix: Add: 'The Cowork plugin administration page says Cowork selects the environment automatically if only one is available, and prompts when multiple environments are available.' Cite https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins#dynamics-365-connectors. | Source: https://learn.microsoft.com/dynamics365/sales/use-copilot-cowork-sales-skills
- [supported, minor] What's changing; Risk assessment: Autonomy & actions; Open questions / behaviour: Learn says Cowork does not take consequential actions autonomously, while the briefing leaves automated Sales-task approval open. | Found: Cowork doesn't take any consequential actions autonomously. | Fix: After the Sales page's confirmation statement add: 'The Cowork administration page says automated tasks use the same governance as interactive conversations; approval is requested by default before emailing, posting messages or changing a shared system, but users can pre-authorize actions when creating a task.' Replace the automated-task open question with 'Confirm whether sellers have pre-authorized actions in their automated Cowork tasks.' Cite https://learn.microsoft.com/copilot/cowork/cowork-admin-governance#automated-tasks. | Source: https://learn.microsoft.com/dynamics365/sales/use-copilot-cowork-sales-skills
- [supported, minor] controls[1].note; Cost and licensing / cost: A very low credit limit still permits users to open Cowork and start work until the limit is reached. | Found: Setting a very low credit limit doesn't prevent access. A user can still open Cowork and start work until the limit is reached. | Fix: Add to controls[1].note and the cost paragraph: 'Credit consumption and limit enforcement are asynchronous, so users might start additional tasks after reaching their limit before enforcement takes effect; use policy scope to control access.' Source: https://learn.microsoft.com/copilot/cowork/cowork-access#decide-who-can-access-cowork. | Source: https://learn.microsoft.com/copilot/cowork/cowork-access
- [supported, minor] controls[0].api; controls[0].note; Governance controls: Cowork access row / command: POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings adds a governed service to an existing spending policy. | Found: Create a new spendingPolicyServiceSetting object to add a service to an existing spending policy. Required properties are serviceId and state. POST /copilot/costManagement/spendingPolicies/{id}/serviceSettings | Fix: Keep the beta call. Replace controls[0].note with 'Adds Cowork to an existing policy through request-body serviceId: cowork and state: enabled. A service setting has no effect while the parent policy is disabled or provisioning. Beta API.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/spendingpolicyservicesetting, which documents cowork and state; the create page's example does use another serviceId. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create
- [supported, minor] controls[2].api; controls[2].note; Governance controls; Open questions / command: POST /beta/copilot/admin/catalog/packages/{id}/block blocks a package, with a caveat that the reference does not explicitly name the Sales plugin. | Found: Block a Copilot package to prevent its usage. POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block | Fix: Keep the call and Agent 365 licence qualifier. Replace the applicability caveat with 'Blocks the identified Copilot package; the package resource includes tools with AgentConnectors and AgentSkills element types.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/resources/copilotpackage. Replace the API open question with 'Identify the Sales plugin package in the tenant catalog before using the block call.' | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The governance checklist names monitoring controls that do not have corresponding controls-table rows. | Found: Review credit use ... using the usage views ... Search the Microsoft Purview audit log for Copilot activities. The table contains spending-policy access, credit limits, plugin blocking, Sales access and the MCP switch, but no usage-report or audit-search row. | Fix: Remove the two After rollout checklist bullets about usage views and Purview audit search, which have no controls-table rows. Keep the independently supported monitoring facts in the risk and cost discussion; do not add new control rows during correction.
-->
