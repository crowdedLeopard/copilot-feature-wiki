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
  notes: "The Sales plugin needs a Sales Enterprise or Sales Premium licence plus an appropriate licence for Microsoft Copilot. The Cowork plugin administration page also says users of Cowork plugins must have Microsoft 365 Copilot licences assigned. Cowork is also billed on usage, and charges are not part of a fixed licence plan."
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
  - title: "Administrator settings for Sales agent"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/administrator-settings-sales-app"
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
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Configure the Dataverse MCP server for an environment"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    kind: "learn"
  - title: "Create spendingPolicyServiceSetting"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create"
    kind: "learn"
  - title: "spendingPolicyServiceSetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/resources/spendingpolicyservicesetting"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Block a Copilot package"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "copilotPackage resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/resources/copilotpackage"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-cowork-access-business-applications-with-work-iq","spending-policies","copilot-credits","m365-copilot-use-dataverse-business-skills-in-sales-agent","mcp"]
controls:
  - governs: "Who can use Cowork at all, through a spending policy that selects Cowork"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy > Identity > Select agents and services > Cowork"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    api:
      kind: "graph"
      call: "POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create"
    note: "Adds Cowork to an existing policy through request-body serviceId: cowork and state: enabled. A service setting has no effect while the parent policy is disabled or provisioning. Beta API."
  - governs: "Credit limits for Cowork usage in a spending policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > Add spending policy > Identity > Select agents and services > Cowork > Set limits and alerts"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Body sets periodLimit or perUserLimit. A low limit does not prevent access; enforcement is asynchronous, so users might start more tasks after reaching it. Use policy scope to control access. Beta API."
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
    note: "Tenant administrator or Copilot administrator role. Needs a Microsoft Agent 365 licence. Blocks the identified Copilot package; packages include tools with AgentConnectors and AgentSkills element types. Beta API."
  - governs: "Which users or groups can access Dynamics 365 Sales plugins in Cowork"
    scope: "group"
    ui:
      surface: "Outlook or Teams (Sales personal app)"
      path: "Sales > Settings > Tenant > Access settings > Allow access to Dynamics 365 Sales plugins > Who can use this feature? > Set access restrictions > Allow access or Restrict access"
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
  - date: "2026-11-23"
    note: "Corrected the spending-policy and Sales plugin access admin paths, and added Cowork plugin licence, environment-selection, automated-task approval and credit-limit enforcement details; removed two checklist items with no controls row."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 94 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 97 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 97
  confirmed: 97
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "9b50d1feac7beeb485881836e6c0ae24"
---

## What's changing

Sellers can now use Dynamics 365 Sales skills inside Microsoft 365 Copilot Cowork. The skills pull Dynamics 365 Sales data together with emails, meetings and collaboration activity, so a seller can ask for deal catch-ups, pipeline and forecast reviews, meeting preparation, outreach drafts or competitive strategy in one request. Learn lists 18 skills across two plugins: **Sales**, which needs a Dynamics 365 Sales licence, and **Sales for Cowork**, a CRM-agnostic plugin that also works with uploaded data.

The roadmap item states that the Dynamics 365 Sales plugin is installed by default in Copilot Cowork and available to all users who have access to Cowork, and that the feature is enabled for end users automatically. Learn's Sales page is narrower: the Sales plugin needs a Sales Enterprise or Sales Premium licence, and it tells users to turn on the **Sales** toggle under **Customize** in Cowork, adding that without the plugin installed there is no **Sales** option in the plugin list. Microsoft's Cowork plugin page says Dynamics 365 Customer Service and Sales integrations are enabled by default.

The Sales plugin reaches Sales data through the Dataverse MCP server. On a user's first sales prompt, Cowork asks which Dynamics 365 environment to use and remembers the choice. The Cowork plugin administration page says Cowork selects the environment automatically if only one is available, and prompts when multiple environments are available. Learn says Cowork does not take consequential actions autonomously and asks for confirmation before updating records, sending emails or creating tasks. The Cowork administration page says automated tasks use the same governance as interactive conversations; approval is requested by default before emailing, posting messages or changing a shared system, but users can pre-authorise actions when creating a task.

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
- Learn says Cowork asks you to confirm before updating records, sending emails or creating tasks. The Cowork administration page says automated tasks use the same governance as interactive conversations; approval is requested by default before emailing, posting messages or changing a shared system, but users can pre-authorise actions when creating a task.

**Change & support**
- Access to Cowork is granted through a spending policy, not through the Cowork agent entry, so a seller who cannot see the Sales plugin may be blocked at the plugin, the Sales access setting, the Dataverse MCP server or the licence. Learn's Sales page lists each of these as a prerequisite.
- Disabling the Dataverse MCP server stops all tools and agents that rely on it in that environment, so switching it off to restrict Cowork also affects other users of the server.

## Cost and licensing

The Sales plugin needs a Sales Enterprise or Sales Premium licence, plus an appropriate licence to access Microsoft Copilot. The CRM-agnostic **Sales for Cowork** plugin needs an appropriate licence to access Microsoft Copilot (Learn: Use sales skills in Copilot Cowork). The Cowork plugin administration page also says users of Cowork plugins must have Microsoft 365 Copilot licences assigned.

Cowork is billed on usage. Learn says charges are not part of a fixed licence plan and vary with token usage, which depends on factors such as the prompt, task duration and underlying model. Usage is measured in credits, and Microsoft's usage page says the organisation manages the monthly credit limits that apply. Learn states that a spending policy that selects Cowork grants access to Cowork, and that a very low credit limit does not prevent access until the limit is reached. Credit consumption and limit enforcement are evaluated asynchronously, so users might start additional tasks after reaching their limit before enforcement takes effect; policy scope is what controls access.

A credit rate specific to the Sales skills is not stated on the pages read for this briefing. Plan for admin time to set up the plugin, access groups and spending policy, and for the Dataverse MCP server to be enabled in each environment sellers use.

## Scope

**Users and licences.** Sellers need a Sales Enterprise or Sales Premium licence for the Sales plugin and an appropriate licence to access Microsoft Copilot; the Cowork plugin administration page also says Microsoft 365 Copilot licences must be assigned to users of Cowork plugins. Users without a CRM licence can use the CRM-agnostic Sales for Cowork plugin.

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
- Tell sellers that Cowork asks them to choose a Dynamics 365 environment on the first sales prompt (Cowork selects it automatically when only one is available), and to confirm actions before records are updated or emails are sent.
- Review the access setting 15 minutes after saving, as Learn says changes can take up to 15 minutes to take effect.

### After rollout
- Recheck the Sales plugin and access settings when the Learn page changes, since the roadmap item and Learn describe the default install differently.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can use Cowork at all, through a spending policy that selects Cowork</strong><br><small>Tenant</small><br><small class="controls__note">Adds Cowork to an existing policy through request-body serviceId: cowork and state: enabled. A service setting has no effect while the parent policy is disabled or provisioning. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy › Identity › Select agents and services › Cowork <a href="https://learn.microsoft.com/copilot/cowork/cowork-admin-governance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/costManagement/spendingPolicies/{id}/serviceSettings</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicyservicesetting-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Credit limits for Cowork usage in a spending policy</strong><br><small>Tenant</small><br><small class="controls__note">Body sets periodLimit or perUserLimit. A low limit does not prevent access; enforcement is asynchronous, so users might start more tasks after reaching it. Use policy scope to control access. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › Add spending policy › Identity › Select agents and services › Cowork › Set limits and alerts <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Sales plugin is available to users in Cowork</strong><br><small>Tenant</small><br><small class="controls__note">Tenant administrator or Copilot administrator role. Needs a Microsoft Agent 365 licence. Blocks the identified Copilot package; packages include tools with AgentConnectors and AgentSkills element types. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › plugin › Users › Block <a href="https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access Dynamics 365 Sales plugins in Cowork</strong><br><small>Group</small><br><small class="controls__note">Global Administrator, Exchange Administrator or Power Platform Administrator role. Controls access only; does not assign licences or grant CRM data access.</small></td><td data-label="Admin UI"><strong>Outlook or Teams (Sales personal app)</strong><br>Sales › Settings › Tenant › Access settings › Allow access to Dynamics 365 Sales plugins › Who can use this feature? › Set access restrictions › Allow access or Restrict access <a href="https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Dataverse MCP server the Sales plugin uses is on for an environment</strong><br><small>Environment</small><br><small class="controls__note">Power Platform administrator role. Disabling it stops all tools and agents that rely on the server in that environment.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol › Allow MCP clients to interact with Dataverse MCP server <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Cowork access and the Sales plugin are separate controls. A spending policy that selects Cowork decides who can use Cowork at all; Learn says the **Cowork** agent entry under Agents > All Agents no longer controls access. The Sales plugin access setting and the Agents > Tools block then decide who sees the Sales plugin inside Cowork.

The Sales plugin access setting controls access only. Learn says it does not install apps, assign licences, connect to a CRM environment or grant access to CRM data. Microsoft Learn documents no API for the Sales plugin access setting or the Dataverse MCP environment setting at the time of writing (November 2026). The Graph block call is the Package Management API, which Learn says needs a Microsoft Agent 365 licence; it blocks the identified Copilot package, and the package resource includes tools with AgentConnectors and AgentSkills element types.

## Open questions

- The Sales page says the Sales app, which includes the Sales plugin, is automatically installed for eligible organisations and users based on their licence; it separately instructs users to enable **Sales** under **Customize**. Is the Sales plugin enabled for your sellers without them acting? Confirm the user-facing enabled state in your tenant, and watch the Learn page and Message center.
- What credit rate applies to Sales skills in Cowork? Watch Microsoft's Cowork credit usage and licensing guide pages.
- Which package in the tenant catalog is the Sales plugin? Identify it before using the Package Management API block call.
- Have sellers pre-authorised actions in their automated Cowork tasks? Confirm this before relying on the default approval prompts.

<!-- rationale
risk: Medium. The Sales plugin reads Dynamics 365 Sales data through the Dataverse MCP server and combines it with Microsoft 365 context, and it is on by default for eligible users. Learn says Cowork asks for confirmation before actions such as updating records.
cost: Variable. Cowork is billed on usage, varying with token usage, and the Sales plugin also needs a Sales Enterprise or Sales Premium licence. A credit rate specific to the Sales skills is not stated on the pages read.
impact: Medium. The Sales plugin needs a Sales Enterprise or Sales Premium licence, so licensed sellers notice it first; admins notice it through plugin, access and usage settings.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: defaultState; summary; Why it matters; rationale: risk / default: The feature is on by default for eligible users without administrator action. | Found: By default, all eligible users have access unless you configure access restrictions. | Fix: Keep defaultState: on for default administrative availability. Replace 'Administrators who do nothing leave the Sales plugin on for every eligible user' with 'Administrators who do nothing leave Sales plugin access available to eligible users.' Add to Open questions: 'The installation page says the Cowork Sales plugin is visible but turned off by default and users can turn it on, whereas the Cowork plugin administration page says Sales integrations are enabled by default.' Cite https://learn.microsoft.com/microsoft-sales-copilot/install-sales-app, whose Cowork row states 'The Sales plugin is visible after installation but is turned off by default.' | Source: https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Cowork access uses Microsoft 365 admin center > Copilot > Cost Management > Configuration > Add spending policy > Identity > Select agents and services > Cowork. | Found: go to Copilot > Cost Management > Configuration and select + Add spending policy. ... On the Scope user and group step, choose Specific groups ... On the Select agents and services step, select Cowork. | Fix: Replace the path with 'Copilot > Cost Management > Configuration > Add spending policy > Identity > Scope user and group > Specific groups > group > Select agents and services > Cowork'. The omitted target-selection step is documented on the cited Cowork page; Identity is documented by the already-cited https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits. | Source: https://learn.microsoft.com/copilot/cowork/cowork-admin-governance
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Cowork credit limits use Microsoft 365 admin center > Copilot > Cost Management > Configuration > Add spending policy > Identity > Select agents and services > Cowork > Set limits and alerts. | Found: Create and name the policy and then choose Identity as the scope. ... Select agents and services ... Set limits and alerts ... Limited monthly budget | Fix: For the policy-level limit, replace the path with 'Copilot > Cost Management > Configuration > Add spending policy > Identity > Scope user and group > Specific groups > group > Select agents and services > Cowork > Set limits and alerts > Limited monthly budget'. The cited page supplies the budget control; the already-cited https://learn.microsoft.com/copilot/cowork/cowork-admin-governance supplies Scope user and group. The printed path reaches the limits page but omits target selection and stops early. | Source: https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits
- [supported, minor] controls[3].ui; Governance controls table; Governance guidance: At rollout / admin-path: Sales plugin access groups use Outlook or Teams Sales > Settings > Tenant > Access settings > Allow access to Dynamics 365 Sales plugins > Who can use this feature? > Set access restrictions > Allow access or Restrict access. | Found: Under Tenant, select Access settings. ... Select Allow access to Dynamics 365 Sales plugins. ... In the Dynamics 365 Sales plugins pane ... Who can use this feature? ... Set access restrictions ... Allow access ... Restrict access | Fix: Replace the path with 'Sales > Settings > Tenant > Access settings > Allow access to Dynamics 365 Sales plugins > Dynamics 365 Sales plugins > Who can use this feature? > Set access restrictions > Allow access or Restrict access'. The omitted pane heading is documented on the cited page. The already-cited https://learn.microsoft.com/microsoft-sales-copilot/administrator-settings-sales-app supports the Sales personal app and Sales > Settings entry. | Source: https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps
- [supported, minor] Scope: Prerequisites / admin-path: Learn's Sales skills page requires the Copilot Cowork, Copilot Code, and Microsoft Scout toggle enabled in Sales agent administrator settings. | Found: Ensure that the Copilot Cowork, Copilot Code, and Microsoft Scout toggle is enabled in Sales agent administrator settings. | Fix: Add immediately after the prerequisite: 'The linked access-settings page instead describes this as the toggle in the Dynamics 365 Sales plugins pane under Tenant > Access settings > Allow access to Dynamics 365 Sales plugins.' The differing description is at the already-cited https://learn.microsoft.com/microsoft-sales-copilot/access-settings-apps. | Source: https://learn.microsoft.com/dynamics365/sales/use-copilot-cowork-sales-skills
-->
