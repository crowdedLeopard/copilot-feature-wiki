---
title: "Viva Insights: agent query for custom agent adoption reporting in the analyst workbench"
slug: "microsoft-viva-agent-metrics-for-custom-reporting-in-insights-analyst-workbench"
roadmapId: 562412
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "Insights global and partitioned analysts can build custom queries on agent usage metrics with agent and HR attributes and export them. Learn lists tenant prerequisites. Admins should confirm analyst access, partitions and privacy settings."
status: "rolling-out"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "The agent query page requires at least 50 Microsoft 365 Copilot licences and at least 1 Agent 365 licence in the tenant. A price or meter specific to the query is not yet published."
audiences: ["m365-admin","compliance","service-owner","change-adoption"]
tags: ["viva-insights","agents","agent-365","analytics","data-export","adoption","viva-feature-access-management","m365-copilot","power-bi"]
sources:
  - title: "Microsoft 365 Roadmap 562412"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562412"
    kind: "roadmap"
  - title: "Create a custom agent query"
    url: "https://learn.microsoft.com/viva/insights/advanced/analyst/agent-query"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Enable or disable advanced analysis with PowerShell"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/control-analysis-powershell"
    kind: "learn"
  - title: "Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Control access to features in Microsoft 365 using PowerShell"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
  - title: "Roles in Viva Insights"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/user-roles"
    kind: "learn"
  - title: "Customize Viva Insights privacy settings"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/privacy-settings"
    kind: "learn"
  - title: "Export data from the Agent Dashboard (preview)"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/export-agent-data"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard","microsoft-viva-copilot-analytics-agent-dashboard","m365-copilot-agent-365-business-analytics-experience","microsoft-viva-ability-for-leaders-to-publish-power-bi-reports"]
controls:
  - governs: "Whether analysts can use advanced analysis, where the agent query sits (tenant-wide)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AdvancedInsights -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/control-analysis-powershell"
    note: "Create a policy and pick the app and feature there. The control page says disabling blocks analysts from the Advanced analysis tab; the agent query page does not name this control."
  - governs: "A switch for the agent query alone"
    scope: "tenant"
    ui: null
    api: null
    note: "The feature access management table lists no entry for the agent query at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-21"
    note: "New briefing: Insights analysts get an agent query for custom agent adoption reports, with the tenant prerequisites and the nearest documented access control."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 60
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "4854fa8ea199ef4a09281ddd3643a514"
---

## What's changing

Insights analysts get an **Agent query**, a custom query template in the Viva Insights web app that returns agent activity and adoption data at agent-and-person level. Learn describes it as extracting "the same metrics that power the Agent 365 Dashboard" and delivering them through the standard query outputs: .csv download, Power BI connection or Azure Data Lake. Both global and partitioned analysts can use it.

An analyst picks a time period and a grouping (days, weeks or months), then adds up to three metrics: Returning agent user (most recent and prior 7 days), Returning agent user (most recent and prior 28 days) and Conversational Agent Sessions. Filters apply to agent attributes (agent name, creator type, publishing source) and to HR attributes such as Organization, Function or Level. The output is a set of .csv files: agent metadata, a person-agent-date activity file and a people metadata file whose columns follow the HR attributes selected.

The roadmap item (Rolling out, General Availability and Preview phases, Web, Worldwide) targets September CY2026, with a preview date of July CY2026. It speaks of Copilot agent adoption; the Learn page describes the query's scope as agents that Agent 365 manages in the organisation, including agents built in Azure AI Foundry, active and inactive, and a reporting history that starts after the organisation accepted the Agent 365 licensing terms of use.

## Why it matters

This gives analysts a self-serve route to agent usage data by team, level or function without waiting for a predefined dashboard, and it moves agent adoption reporting from aggregated views into row-level files keyed to a person identifier. For a service owner, the questions are who holds the Insights Analyst role, which partitions they sit in, and where exported files end up.

Microsoft has not stated what happens on arrival, so base planning on no source saying existing behaviour changes. If nobody acts, analysts who already hold the role may be able to run the query once it reaches the tenant.

## Risk assessment

**Data exposure**
- The activity file has one row per PersonID, AgentId and MetricDate, and the people metadata file carries the HR attributes an analyst selects. Combining agent usage with Organization, Function or Level can single out small teams. Review partitions, which limit analysts to certain employee data and attributes.
- Results can be downloaded as .csv, connected to Power BI or sent to Azure Data Lake, so copies can leave the Viva Insights web app. The Learn page does not describe retention or access controls for those destinations.

**Security & identity**
- Access follows the Insights Analyst role, which the Microsoft 365 global admin assigns. A global admin also inherits Insights Administrator privileges, who configure privacy settings and partitions.
- The agent query page does not name a dedicated feature access policy; the nearest documented control is the tenant-level Advanced analysis policy in the controls table.

**Autonomy & actions**
- No change: the query reads usage data and runs when an analyst runs it, or on a schedule when the analyst turns on Auto refresh.

**Change & support**
- Expect questions about why figures differ from the Agent Dashboard or other exports. The Agent Dashboard export FAQ notes that agent IDs in its export do not usually match those in the Microsoft 365 admin center export.
- The roadmap says Copilot agents while Learn says agents Agent 365 manages; confirm which agents appear in a pilot query before analysts report numbers to leaders.

## Cost and licensing

The agent query page states the prerequisite: the tenant must have at least 50 Microsoft 365 Copilot licences and at least 1 Agent 365 licence, and have agent activity. It also says the analysed population includes employees who have had agent activity, regardless of their Copilot licence status.

The page names no separate charge, meter or credit rate for running the query, and a price specific to it is not yet published. Indirect costs are analyst and administrator time, plus storage and licences for whatever destination receives exports, such as Power BI or Azure Data Lake; those are outside this feature's own pages.

## Scope

Users: Insights analysts, global or partitioned. The page says partitioning follows the design used elsewhere in Viva Insights, based on person rows and HR attribute columns. The roles page says users with the Microsoft 365 Global Administrator role inherit Insights Administrator privileges, who create and manage partitions.

Clouds and platform: the roadmap lists Worldwide (Standard Multi-Tenant) and Web. Status and dates are as the roadmap gives them: Rolling out, target September CY2026, preview July CY2026. The feature access management page states that its access controls are not available in GCC High or DoD.

Prerequisites: at least 50 Microsoft 365 Copilot licences, at least 1 Agent 365 licence and agent activity in the tenant.

## Governance guidance

### Before rollout
- Confirm which people hold the Insights Analyst role and which partitions they belong to, so analysts see only the employee data intended.
- Check privacy settings and partitions with the Insights Administrator before analysts combine agent metrics with HR attributes.
- Decide where query results may go (.csv, Power BI, Azure Data Lake) and tell analysts the handling rule.

### At rollout
- Run a pilot agent query with an analyst and compare the agents returned with your Agent 365 inventory.
- Check the Advanced analysis access policy for your tenant (first row in the controls table) so you know whether analysts can reach the workbench.

### After rollout
- Review who still holds analyst access and which queries have Auto refresh on.
- Revisit the Learn page and Message center for a feature-specific access policy, default state or licence statement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether analysts can use advanced analysis, where the agent query sits (tenant-wide)</strong><br><small>Tenant</small><br><small class="controls__note">Create a policy and pick the app and feature there. The control page says disabling blocks analysts from the Advanced analysis tab; the agent query page does not name this control.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AdvancedInsights -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/setup-maint/control-analysis-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch for the agent query alone</strong><br><small>Tenant</small><br><small class="controls__note">The feature access management table lists no entry for the agent query at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Advanced analysis policy is tenant-level only per its page; it does not support user or group policies. The control page is headed "Applies to: AI admin", while the feature access table lists Global admin as who manages it. Policy changes take effect within 24 hours unless noted for a specific feature.

The Agent Metrics Export (Preview) policy governs export from the Agent Dashboard, a different surface, and is not listed here as a control for the agent query. Partitions and role assignment are configured in the Viva Insights web app and Microsoft 365 admin center; see the roles page.

## Open questions

- What happens on arrival: is the Agent query on for existing analysts by default, and does a feature access policy turn it off? Watch the Learn page and Message center.
- Does the Advanced analysis policy, the Agent Metrics Export policy or neither govern the agent query?
- Are person identifiers in the query output protected or identifiable, and does that depend on a setting? The agent query page does not say.
- Which agents does the query cover where the roadmap says Copilot agents and Learn says agents Agent 365 manages?
- Will a price or meter specific to the agent query be published?

<!-- rationale
risk: Medium. The query returns one row per person, agent and day, joined to HR attributes the analyst chooses, and can send results to .csv, Power BI or Azure Data Lake. Access rests on the analyst role and partitions.
cost: Low. Learn lists tenant prerequisites (at least 50 Microsoft 365 Copilot licences and at least 1 Agent 365 licence) and documents no separate charge or meter for the query; the main cost is analyst and admin time.
impact: Low. Only Insights analysts, global or partitioned, run the query; other users see no change unless an analyst publishes or shares results.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Open questions: Advanced analysis policy applicability / applicability: Whether the Advanced analysis policy governs the agent query remains unresolved, including the possibility that neither named policy governs it. | Found: To enable or disable access to all advanced analysis features at the tenant level, you can use PowerShell cmdlets or create a policy in the Microsoft 365 admin center | Fix: Replace 'Does the Advanced analysis policy, the Agent Metrics Export policy or neither govern the agent query?' with 'Does the Agent Metrics Export policy additionally govern the agent query? The Advanced analysis policy controls access to all advanced analysis features at tenant level.' Add https://learn.microsoft.com/viva/insights/advanced/privacy/privacy to sources; the cited roles page places custom queries in Advanced analysis and the query page identifies Agent query as a custom query. | Source: https://learn.microsoft.com/viva/insights/advanced/privacy/privacy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft 365 admin center > Settings > Viva > Settings > Manage feature access reaches advanced-analysis policy management. | Found: From the Microsoft 365 admin center, select Viva from the settings menu. ... Select the Settings tab and select Manage feature access. ... Select Create a policy. | Fix: Extend controls[0].ui.path and its rendered copy to 'Settings > Viva > Settings > Manage feature access > Create a policy > app and feature > Access setting > Off > Apply access settings to > Everyone'. The existing route stops on the correct policy management page. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[0].api; Governance controls table / command: Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AdvancedInsights -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone disables advanced analysis tenant-wide. | Found: Add-VivaModuleFeaturePolicy -FeatureId <String> -IsFeatureEnabled <Boolean> -ModuleId <String> -Name <String> ... [-Everyone] ... $false: The feature is not enabled by the policy. | Fix: Add https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy to sources. Keep the command unchanged; the cited advanced-analysis page supplies VivaInsights, AdvancedInsights, DisableFeatureForAll, false and Everyone, and the reference verifies the printed syntax. | Source: https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy
- [supported, minor] controls[0].governs and note; Risk assessment: Security & identity; Governance guidance: At rollout / applicability: The tenant-level Advanced analysis policy controls analyst access to the workbench containing the custom agent query, but is presented only as the nearest documented control. | Found: To enable or disable access to all advanced analysis features at the tenant level, you can use PowerShell cmdlets or create a policy in the Microsoft 365 admin center | Fix: Replace controls[0].note and its rendered copy with 'The Advanced analysis policy controls access to all advanced analysis features at tenant level, including custom queries.' Replace 'the nearest documented control' in Security & identity with 'the documented tenant-level Advanced analysis control'. Add https://learn.microsoft.com/viva/insights/advanced/privacy/privacy to sources. | Source: https://learn.microsoft.com/viva/insights/advanced/privacy/privacy
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist recommends checking analyst roles, partitions and privacy settings, but these controls have no matching table rows. | Found: Confirm which people hold the Insights Analyst role and which partitions they belong to ... Check privacy settings and partitions ... Table: Whether analysts can use advanced analysis; A switch for the agent query alone. | Fix: Record that the Before rollout checklist steps for analyst role assignments, partitions and privacy settings have no matching controls-table rows. Do not add rows as part of this correction.
-->
