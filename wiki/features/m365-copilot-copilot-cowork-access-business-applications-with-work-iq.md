---
title: "Copilot Cowork: access Business Applications through Work IQ and use business skills"
slug: "m365-copilot-copilot-cowork-access-business-applications-with-work-iq"
roadmapId: 573293
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Dataverse","Work IQ"]
summary: "Copilot Cowork users can query and act on Dataverse and Dynamics 365 data and follow business skills, once an admin installs the Business apps plugin. Learn lists it as preview, with usage billed as Cowork consumption."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Business context used in Cowork is attributed to Cowork consumption, and Copilot Credits are the unit for usage-based experiences. Learn names no separate licence for this feature and no per-task rate."
audiences: ["m365-admin","power-platform-admin","finops","service-owner"]
tags: ["cowork","work-iq","business-skills","dataverse","model-driven-apps","copilot-credits","m365-copilot","write-actions"]
sources:
  - title: "Microsoft 365 Roadmap 573293"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573293"
    kind: "roadmap"
  - title: "Use the Business Applications in Work IQ plugin in Cowork (preview)"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-work-iq"
    kind: "learn"
  - title: "Use Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-apps/user/use-business-apps-work-iq"
    kind: "learn"
  - title: "Create and use business skills"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills"
    kind: "learn"
  - title: "Understand costs for Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Manage AI experience access to Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    kind: "learn"
  - title: "Manage participation in Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation"
    kind: "learn"
  - title: "Quickstart: Set up Business Applications in Work IQ for a pilot"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/quickstart"
    kind: "learn"
  - title: "Control which apps are allowed in your environment"
    url: "https://learn.microsoft.com/power-platform/admin/control-app-access-environment"
    kind: "learn"
  - title: "Application table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/application"
    kind: "learn"
  - title: "application EntityType"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/application"
    kind: "learn"
  - title: "Business Skill (Skill) table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/skill"
    kind: "learn"
  - title: "Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/business-applications-work-iq"
    kind: "learn"
  - title: "Business Applications in Work IQ administration"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/plugins/cost-considerations"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Cost management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "How much Cowork can consume in Copilot Credits (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits#edit-spending-policy"
    kind: "learn"
videos: []
related: ["work-iq","work-iq-business-skills-to-manage-your-business-processes-in-work-iq-mcp","power-apps-model-driven-applications-in-business-apps-in-work-iq","spending-policies","mcp"]
controls:
  - governs: "Whether the Business apps plugin is installed for Cowork users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Plugins > Business apps (preview) > Install"
      docs: "https://learn.microsoft.com/copilot/cowork/cowork-work-iq"
    api: null
    note: "Install offers All users or Specific users and groups. Installation automation is not yet documented."
  - governs: "Which users can use business applications through Microsoft 365 Copilot"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Business Applications data in Work IQ available to Copilot"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    api: null
    note: "Options: All users (default), Specific groups, No users. The quickstart page words the setting label slightly differently. AI Administrator role."
  - governs: "Which environments have Work IQ turned on"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > environment > Settings > Product > Features > Work IQ"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation"
    api: null
    note: "Power Platform Administrator role. Does not prevent agentic access to environment data."
  - governs: "Which applications, including Copilot Cowork, can access an environment's Dataverse data"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Identity & access > App Access Control > environment > Enable"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    api:
      kind: "rest"
      call: "PATCH https://<organization>/api/data/v9.2/applications(<applicationid>)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/application"
    note: "Power Platform Administrator role. The request body sets access (0 Allowed, 1 Blocked); this changes an app's status, so set environment-level enforcement separately. General App Access docs require a managed environment."
  - governs: "How much Cowork can consume in Copilot Credits"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > policy > Spending limits"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits#edit-spending-policy"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Policies cover selected services and users; per-policy and per-user limits apply. Beta API. The request body sets periodLimit and perUserLimit."
  - governs: "Whether a business skill is active for agents to discover"
    scope: "environment"
    ui:
      surface: "Power Apps (maker)"
      path: "environment > More > Business skills > skill > Deactivate"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills"
    api:
      kind: "rest"
      call: "PATCH /skills(<skillid>)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/skill"
    note: "The request body sets statecode to 1 (Inactive) and statuscode to 2 (Inactive) to deactivate the skill without deleting it. Sharing is set with Share on the same page."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-11T00:53:34"
changes:
  - date: "2026-11-18"
    note: "New briefing: Cowork access to Business Applications through Work IQ is documented as a public preview plugin that an admin installs; roadmap target is December CY2026."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 88 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: added the Dataverse application table call for blocking apps, removed the claim that turning off Work IQ blocks Cowork's data access, and trimmed role-review checklist items and a Copilot Studio availability claim."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 86 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: the spending row now points to the spending policy update call, the skill row to the skill table's PATCH that deactivates without deleting, and the unsupported sharing-review checklist item was removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 89 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: the plugin install row no longer lists the package block call, which blocks usage rather than installing, and the spending row now gives the Configuration tab path to Spending limits."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 95 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 95 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 95
  confirmed: 95
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d73b369315934879d3156714807fc9c5"
---

## What's changing

Copilot Cowork gains a way to reach business application data and processes through Work IQ. The roadmap item states that users can access Business Applications through Work IQ in Copilot Cowork and use Business Skills to complete end-to-end business processes grounded in enterprise data and apps. The roadmap lists Microsoft Copilot (Microsoft 365), Microsoft Dataverse and Work IQ, Worldwide (Standard Multi-Tenant), and the Web platform.

Microsoft Learn already documents this. The Cowork page describes a **Business apps (preview)** plugin that connects Cowork to Dynamics 365 and Power Apps information. Its examples include asking Cowork to create a follow-up task for an account owner, reassign account ownership, or escalate a case. The page says an admin must install the plugin, and that users cannot add it in Cowork until an admin installs it for them. The page for using Business Applications in Work IQ says model-driven apps are available as Business Applications, and that Work IQ uses the app's views, forms and tables to complete the request.

Business skills are process instructions stored in a Dataverse environment. Learn says that once they are created and activated, Copilot Chat, Copilot Cowork and connected agents can discover and use the skills the user has access to.

On status, the roadmap item is In development with a preview date of September CY2026 and a target of December CY2026, listing both Preview and General Availability. Learn states that access through Cowork is in public preview, while access through Work IQ MCP is generally available. Treat December CY2026 as a target.

## Why it matters

This puts write-capable access to business records inside a chat tool that many users already have. The plugin does not work until an admin installs it, so the first decision is yours: which users, and which environments, should be able to reach Dynamics 365 and Power Apps data from Cowork.

The environment and tenant settings are separate from that decision. Learn documents Business Applications in Work IQ as on by default for new public production environments, with exceptions, and the tenant audience setting defaults to all users. Check those settings now, and separately review App Access Control for Cowork, because participation settings do not prevent agentic access to environment data. Spend also needs an owner: Cowork consumption is metered in Copilot Credits, and the usage of one request varies.

## Risk assessment

**Data exposure**
- Cowork returns business records within each user's existing Dataverse permissions. Learn says Work IQ respects those permissions and does not grant extra access, so over-broad security roles become more visible once Cowork can query them in natural language.
- For US tenants that use FedRAMP-accredited environments, Learn warns that enabling Work IQ might send data outside the FedRAMP authorisation boundary. Review that page before turning Work IQ on in those environments.

**Security & identity**
- Users connect the plugin by signing in and approving a number in the Authenticator app, per the Cowork page. Learn documents App Access Control as the way to block applications, including Copilot Cowork, from an environment's data.
- Business skills are user-owned by default and can be shared with everyone in the environment. Sharing by security role needs both the role and the Skill Sharing Role.

**Autonomy & actions**
- The page for using Business Applications in Work IQ says Work IQ can create and update records, and that users review values and explicitly confirm before an operation is submitted. Delete operations also require explicit confirmation.
- Skills can be created and updated from Copilot or a connected agent, and an agent may follow a skill's steps, so a poorly written skill can drive repeated actions. Learn recommends testing skills with repeatable scenarios before sharing them.

**Change & support**
- Preview behaviour can change. Learn lists limits: records cannot be created or updated when the selected form has JavaScript OnLoad, OnChange or OnSave handlers, and custom controls and subgrids are not supported.
- Learn says the Business skills page does not currently show per-skill runtime usage or feedback, so expect to troubleshoot from agent logs and test cases.

## Cost and licensing

Learn's cost page says business context accessed through Cowork contributes to Cowork consumption, and that Work IQ consumption supporting a Cowork task is attributed to Cowork. Copilot Credits are the unit for these usage-based experiences, funded by prepaid capacity packs or pay-as-you-go billing through an Azure subscription. The page says Work IQ API consumption, reported separately, is not a Business Applications-only breakdown.

The cost of a task varies: Learn says one request can involve several tool calls and reasoning steps, so a prompt is not a fixed-price operation. The pages read for this feature state no per-task rate, and Learn names no separate licence for the plugin. The Cowork page says experiences might vary based on an organisation's apps, licences, policies and available services.

To cap spend, Learn's cost guidance says to include Cowork in a spending policy and to set policy and per-user limits (see the spending policy row). The Business Applications page adds that, for consumption-based preview services, underlying application services may continue to incur licence fees during the preview period.

## Scope

- **Users:** Cowork users for whom an admin has installed the plugin (all users, or specific users and groups). Each user needs permission to the Power Platform environment, model-driven app and data involved.
- **Prerequisites:** a Power Platform administrator must enable Work IQ for the environment, and the model-driven app's **Enable M365 Copilot in model-driven apps** setting must be Default or On.
- **Roles:** Learn names the AI Administrator role for Microsoft 365 admin center settings and the Power Platform Administrator role for environment settings.
- **Cloud and platform:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web. Learn says Business Applications in Work IQ is not currently available in sovereign or government cloud environments, including DoD, GCC and GCC High.
- **Default environments:** Learn lists exceptions to default enablement (EU and EFTA environments, government-related environments, and trial, sandbox and developer environments) and says the plan to enable existing environments has been deferred from the previously documented November 2026 schedule.

## Governance guidance

### Before rollout
- Review the tenant audience setting in the Microsoft 365 admin center and decide whether business applications should be available to all users, specific groups or no users.
- Check which environments have **Work IQ** turned on; use App Access Control to block Cowork from environments whose data it should not access.
- Create or confirm a spending policy that covers Cowork, with a per-user limit, before any pilot.

### At rollout
- Install the **Business apps (preview)** plugin for a pilot group only, using **Specific users and groups**.
- Test with named environments and apps, and ask Cowork to list the business skills it can see.
- Block applications you do not want in an environment with App Access Control, where your plan calls for it.

### After rollout
- Watch Cowork consumption against the spending policy and adjust limits.
- Re-check Learn and Message center for the December CY2026 target and any change from preview.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Business apps plugin is installed for Cowork users</strong><br><small>Tenant</small><br><small class="controls__note">Install offers All users or Specific users and groups. Installation automation is not yet documented.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Plugins › Business apps (preview) › Install <a href="https://learn.microsoft.com/copilot/cowork/cowork-work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can use business applications through Microsoft 365 Copilot</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (default), Specific groups, No users. The quickstart page words the setting label slightly differently. AI Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Business Applications data in Work IQ available to Copilot <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which environments have Work IQ turned on</strong><br><small>Environment</small><br><small class="controls__note">Power Platform Administrator role. Does not prevent agentic access to environment data.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which applications, including Copilot Cowork, can access an environment's Dataverse data</strong><br><small>Environment</small><br><small class="controls__note">Power Platform Administrator role. The request body sets access (0 Allowed, 1 Blocked); this changes an app's status, so set environment-level enforcement separately. General App Access docs require a managed environment.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Identity &amp; access › App Access Control › environment › Enable <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH https://&lt;organization&gt;/api/data/v9.2/applications(&lt;applicationid&gt;)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/application" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>How much Cowork can consume in Copilot Credits</strong><br><small>Tenant</small><br><small class="controls__note">Policies cover selected services and users; per-policy and per-user limits apply. Beta API. The request body sets periodLimit and perUserLimit.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › policy › Spending limits <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits#edit-spending-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a business skill is active for agents to discover</strong><br><small>Environment</small><br><small class="controls__note">The request body sets statecode to 1 (Inactive) and statuscode to 2 (Inactive) to deactivate the skill without deleting it. Sharing is set with Share on the same page.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>environment › More › Business skills › skill › Deactivate <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /skills(&lt;skillid&gt;)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/skill" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The plugin install, the tenant audience, the environment setting and App Access Control are separate controls. Learn says the Work IQ participation settings do not prevent agentic access to environment data and points to App Access Control for that. Learn also says enabling an experience does not grant access to business data.

Learn documents a general Package Management API operation that blocks a Copilot package to prevent its usage; it is a beta API and requires a Microsoft Agent 365 licence. It does not install or uninstall a plugin, and Microsoft has not confirmed that the Business apps (preview) plugin appears in it. Learn also documents an availability control for the whole Work IQ MCP server (Agents > Tools > Work IQ MCP > Block); Microsoft has not said whether the Cowork plugin depends on it. Microsoft Learn documents no API for the tenant audience setting or the environment Work IQ setting at the time of writing (November 2026).

## Open questions

- Does the Business apps (preview) plugin go to general availability in December CY2026, as the roadmap target states, and does it stay admin-installed? Watch the roadmap item and the Cowork Learn page.
- What per-task Copilot Credit rate applies to Cowork requests that use business context? Watch the Learn cost pages.
- Does blocking the Work IQ MCP server also stop the Business apps plugin in Cowork? Microsoft has not said.
- Will Business Applications in Work IQ be enabled for existing environments, and when? Learn says the schedule was deferred.

<!-- rationale
risk: Medium. Cowork can create and update business records within each user's Dataverse permissions, but an admin must install the plugin first and tenant, environment, app and plugin controls apply.
cost: Variable. Learn says Work IQ consumption that supports a Cowork task is attributed to Cowork and paid for with Copilot Credits; the pages for this feature state no per-task rate.
impact: Medium. Users who already hold access to model-driven apps or Dataverse tables, and the makers who write business skills, notice it; ordinary Cowork users see nothing until the plugin is installed for them.
-->

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].ui; Governance controls / admin-path: The feature's App Access guide gives Power Platform admin center > Security > Identity & access > App Access Control > environment > Enable. | Found: Select **Security** > **Identity & access**. ... Select **App Access Control**. ... Select the environment in which you want to enable app access. ... Select **Enable**, and then select **Save**. | Fix: Append to controls[3].note and the rendered note: 'The general App Access guide gives a different route after selecting the environment: Set up app access control > Access control > Enabled, then select an application and Block.' The other cited guide is https://learn.microsoft.com/power-platform/admin/control-app-access-environment#turn-on-enabled-mode. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access
-->
