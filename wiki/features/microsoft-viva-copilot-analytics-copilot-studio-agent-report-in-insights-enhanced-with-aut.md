---
title: "Viva Insights: Copilot Studio agents report adds autonomous agents and time and cost savings"
slug: "microsoft-viva-copilot-analytics-copilot-studio-agent-report-in-insights-enhanced-with-aut"
roadmapId: 499422
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "The Copilot Studio agents report in Viva Insights now covers autonomous agents, with adoption, time-saved and cost-saved estimates. Insights Analysts see it; no admin action is needed if the data feed is already on."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "October CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Copilot plans include a Viva Insights service plan with advanced analysis. The report needs at least 50 Copilot licences and one Copilot Studio licence (standalone, pay-as-you-go or bundled with Copilot) in the tenant. Nothing separate is published for the autonomous agent pages."
audiences: ["m365-admin","power-platform-admin","service-owner","finops"]
tags: ["viva-insights","copilot-studio","autonomous-agents","analytics","adoption","power-platform-admin-center","data-residency"]
sources:
  - title: "Microsoft 365 Roadmap 499422"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=499422"
    kind: "roadmap"
  - title: "Copilot Studio agents report"
    url: "https://learn.microsoft.com/viva/insights/advanced/analyst/templates/copilot-studio-agents"
    kind: "learn"
  - title: "View aggregated analytics in Viva Insights"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/analytics-viva-insights"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "Environment requirements for Viva Insights"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements"
    kind: "learn"
  - title: "Power BI report templates"
    url: "https://learn.microsoft.com/viva/insights/advanced/analyst/templates/introduction-to-templates"
    kind: "learn"
  - title: "Assign roles"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/assign-user-roles"
    kind: "learn"
  - title: "Microsoft Entra built-in roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"
    kind: "learn"
  - title: "Delete Copilot Studio agents data in Viva Insights (preview)"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/delete-copilot-studio-agents-data"
    kind: "learn"
  - title: "Create unifiedRoleAssignment"
    url: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    kind: "learn"
  - title: "Whether Copilot Studio sends agent data from an environment to Viva Insights (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-agent-dashboard","autonomous-agents","microsoft-viva-agent-metrics-for-custom-reporting-in-insights-analyst-workbench"]
controls:
  - governs: "Whether Copilot Studio sends agent data from an environment to Viva Insights"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Sharing Copilot Studio agent data with Viva Insights > Allow Copilot Studio to share data with Viva Insights"
      docs: "https://learn.microsoft.com/power-platform/admin/settings-features"
    api:
      kind: "rest"
      call: "PATCH /organizations(organizationid)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    note: "Dataverse Web API; the request body sets enablecopilotstudiosharedatawithvivainsights. Default On. Needs System Administrator or equivalent."
  - governs: "Whether agent data may cross geo boundaries to the Viva Insights data location"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Sharing Copilot Studio agent data with Viva Insights > Allow cross-geo boundary sharing of aggregated analytics data"
      docs: "https://learn.microsoft.com/power-platform/admin/settings-features"
    api:
      kind: "rest"
      call: "PATCH /organizations(organizationid)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    note: "Dataverse Web API; the request body sets enablecopilotstudiocrossgeosharedatawithvivainsights. Default Off."
  - governs: "Who can run and view the Copilot Studio agents report (Insights Analyst role)"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Viva Insights > Add-on Plan > Insights Analyst > Add users"
      docs: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/assign-user-roles"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    note: "UI: Global Administrator. Graph: roleDefinitionId selects the role; delegated needs Privileged Role Administrator or a custom role; application needs RoleManagement.ReadWrite.Directory."
  - governs: "Deletion of all Copilot Studio agents data held in Viva Insights"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: ".\\CopilotAgentsDelete.ps1 -[ClientId] -[TenantId]"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/delete-copilot-studio-agents-data"
    note: "Preview. Run by the Viva Insights Administrator after registering an app with AdministratorSettings.ReadWrite; irreversible."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-03-12T23:15:41"
changes:
  - date: "2026-11-25"
    note: "New briefing: autonomous agent pages and time and cost savings estimates in the Copilot Studio agents report, with the Power Platform data-sharing controls."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 75 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected the Graph role requirement for assigning Insights Analyst, completed the two Power Platform setting paths, removed an unsupported autonomy claim and two checklist items without table rows, and changed action to prepare."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 75 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 75
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "92e4f3c6b1e5a90edc901907bc04e845"
---

## What's changing

The Copilot Studio agents report, a Power BI template in Viva Insights advanced analysis, now reports on autonomous agents as well as conversational ones. The Viva Insights page describes an **Autonomous Agent Impact** page covering sessions over time, successful and unsuccessful outcomes, average completion time, sessions per trigger and per action, and an estimated agent assisted impact. It defines autonomous agents as "agents built in Copilot Studio with defined event triggers". The Microsoft 365 Copilot release notes (February 24, 2026) say the report "now includes autonomous agents with generative orchestration" and adds metrics for adoption, time saved and cost benefits.

Time and cost savings come from two routes. **Maker-led inputs** set in Copilot Studio are passed to Viva Insights and are not editable there. Otherwise Viva Insights infers **Agent assisted hours** from knowledge source references (six minutes each by default), actions performed, and a generic multiplier of about 2.8 minutes for successful sessions without independent actions. Cost is estimated by multiplying those hours by an hourly rate that defaults to $72; analysts can change the multiplier and rate per agent.

The sources disagree. The Copilot Studio page *View aggregated analytics in Viva Insights* still says the report "isn't available for agents using generative orchestration, including autonomous agents or agents that extend Microsoft Copilot", while the Viva Insights report page and the release notes describe autonomous agent coverage.

The roadmap item is **Launched** (General Availability), with a target of October CY2025, for Worldwide (Standard Multi-Tenant) on Desktop, Mac and Web.

## Why it matters

The report now puts a time and money figure on autonomous agents, and those figures will reach budget and ROI discussions. The defaults are estimates: a $72 hourly rate from US labour statistics and research-based time multipliers. Expect finance and leadership to quote them unless analysts replace them with local values or makers supply their own inputs.

Microsoft's Viva Insights page says Copilot Studio data flows to Viva Insights by default, so in an eligible tenant autonomous agent metrics are available to Insights Analysts without an administrator doing anything. Power Platform admins who have not looked at the **Allow Copilot Studio to share data with Viva Insights** setting should know it is on unless someone turned it off.

## Risk assessment

**Data exposure**
- Copilot Studio sends Viva Insights, daily, each agent's name, mode (classic or generative), image, type, category and usage: session counts, outcomes, CSAT score, duration, aggregated knowledge source usage and topic names. Topic and agent names can reveal business purpose. The environment setting in the controls table stops the flow.
- Where Viva Insights sits in a different geography from the environment, data crosses geo boundaries only if **Allow cross-geo boundary sharing** is turned on; it is off by default.

**Security & identity**
- Running the query requires the Insights Analyst role in Viva Insights. Review who holds it before the ROI pages circulate.

**Autonomy & actions**
- The report shows agent adoption and impact metrics.

**Change & support**
- The Copilot Studio documentation still says autonomous and generative agents are excluded, so makers and analysts may get conflicting answers.
- Default time and cost multipliers can overstate or understate value; the calculator changes them for that particular agent, and maker-led values cannot be edited in Viva Insights.

## Cost and licensing

- **Licence.** The Viva Insights environment requirements page states that Microsoft Copilot plans include a Viva Insights service plan with personal insights and manager, leader and advanced analysis for all employees with a Copilot licence. The report page makes the tenant eligible only with at least 50 Copilot licences and at least one Copilot Studio licence (standalone, pay-as-you-go, or bundled with Copilot), with at least one agent published in a Production and default environment that has usage.
- **Analysts.** The Power BI templates page says an employee needs only the Insights Analyst role to use analyst features, and that Power BI Desktop needs no licence.
- **Meter.** Microsoft publishes no charge or meter for the report itself.
- **Indirect cost.** Analyst time to replace default multipliers and hourly rates with local figures.
- Nothing specific to the autonomous agent pages is published beyond the report's own prerequisites.

## Scope

- **Who sees it:** users with the Insights Analyst role, in the Viva Insights analyst experience under **Create analysis** > **Power BI templates** > **Copilot Studio agents report**.
- **Agents covered:** Copilot Studio agents deployed to channels including websites, Teams and Microsoft Copilot, mobile apps and Azure bot service channels. Declarative agents built in Copilot Studio, Agent Builder agents and agents built outside Copilot Studio are not covered.
- **Prerequisites:** advanced insights turned on; the Microsoft 365 services setting and **Allow Copilot Studio to share data with Viva Insights** on in Power Platform; at least four weeks of agent usage data before the query runs.
- **Clouds and platforms:** Worldwide (Standard Multi-Tenant); Desktop, Mac and Web, per the roadmap record.

## Governance guidance

### Before rollout
- Check, per environment, whether **Allow Copilot Studio to share data with Viva Insights** is on in the Power Platform admin center, and turn it off where agent names or topics should not reach Viva Insights.
- Confirm whether **Allow cross-geo boundary sharing** needs to be on for environments outside the Viva Insights data location, and record the decision.
- List who holds the Insights Analyst role in the Microsoft 365 admin center.

### At rollout
- Ask analysts to run the Copilot Studio agents report and compare autonomous agent counts with the agent inventory makers expect.

### After rollout
- Review Insights Analyst role assignments each quarter.
- Recheck the Copilot Studio page on Viva Insights analytics, which still lists autonomous agents as excluded, before relying on gaps in the data.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot Studio sends agent data from an environment to Viva Insights</strong><br><small>Environment</small><br><small class="controls__note">Dataverse Web API; the request body sets enablecopilotstudiosharedatawithvivainsights. Default On. Needs System Administrator or equivalent.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Sharing Copilot Studio agent data with Viva Insights › Allow Copilot Studio to share data with Viva Insights <a href="https://learn.microsoft.com/power-platform/admin/settings-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /organizations(organizationid)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether agent data may cross geo boundaries to the Viva Insights data location</strong><br><small>Environment</small><br><small class="controls__note">Dataverse Web API; the request body sets enablecopilotstudiocrossgeosharedatawithvivainsights. Default Off.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Sharing Copilot Studio agent data with Viva Insights › Allow cross-geo boundary sharing of aggregated analytics data <a href="https://learn.microsoft.com/power-platform/admin/settings-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /organizations(organizationid)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can run and view the Copilot Studio agents report (Insights Analyst role)</strong><br><small>User</small><br><small class="controls__note">UI: Global Administrator. Graph: roleDefinitionId selects the role; delegated needs Privileged Role Administrator or a custom role; application needs RoleManagement.ReadWrite.Directory.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Viva Insights › Add-on Plan › Insights Analyst › Add users <a href="https://learn.microsoft.com/viva/insights/advanced/setup-maint/assign-user-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Deletion of all Copilot Studio agents data held in Viva Insights</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Run by the Viva Insights Administrator after registering an app with AdministratorSettings.ReadWrite; irreversible.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>.\CopilotAgentsDelete.ps1 -[ClientId] -[TenantId]</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/delete-copilot-studio-agents-data" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- The two Power Platform settings are per environment. The Copilot Studio page says both can also be controlled for environment groups. Changing them needs the System Administrator security role or equivalent permissions; the Microsoft 365 services setting must also be on for data to flow.
- Role assignment in the Microsoft 365 admin center is performed by the Global Administrator. For delegated Graph access using work or school accounts, Privileged Role Administrator is the least privileged supported role, or a custom role can grant the required permissions. Application access requires RoleManagement.ReadWrite.Directory application permission.
- Deleting Copilot Studio agents data is a preview script, cannot be undone, removes earlier query results and blocks new queries for one month.
- Microsoft documents no setting that excludes only autonomous agents from the report at the time of writing (November 2026); the data-sharing setting is set per environment.

## Open questions

- Which source is current: does the report now include generative orchestration and autonomous agents, as the Viva Insights page and release notes say, or not, as the Copilot Studio page says? Watch the Copilot Studio Learn page.
- How are the action-specific time savings multipliers (TimeSavings_Action) set for each action type, and can analysts see them?
- Can the default hourly rate and multipliers be set once for the tenant rather than per agent?
- Will declarative agents built in Copilot Studio be added to the report's coverage?

<!-- rationale
risk: Low. Only aggregated agent metadata and usage metrics flow to Viva Insights, through an environment setting Power Platform admins can turn off, and running the report requires the Insights Analyst role.
cost: Low. Microsoft Copilot plans include Viva Insights advanced analysis; the cost is analyst time and the tenant must hold at least 50 Copilot licences and a Copilot Studio licence to be eligible.
impact: Low. Insights Analysts and the agent makers they report to notice; end users see nothing new.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: Maker-led inputs / behaviour: Makers configure savings inputs in Copilot Studio. | Found: In Copilot Studio, you can calculate how much time or money an agent saves compared to other methods. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/analytics-cost-savings to sources for the statement that maker-led savings inputs are set in Copilot Studio. | Source: https://learn.microsoft.com/microsoft-copilot-studio/analytics-cost-savings
-->
