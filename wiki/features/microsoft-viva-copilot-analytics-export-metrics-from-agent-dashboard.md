---
title: "Viva Insights: export de-identified agent metrics from the Agent Dashboard"
slug: "microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard"
roadmapId: 560538
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to let senior leaders, analysts and admins export de-identified, per-user agent metrics from the Viva Insights Agent Dashboard. It is on by default for eligible users; admins can switch it off in VFAM."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Not yet published as a separate price or licence for the export. Microsoft's notice requires at least 50 Microsoft 365 Copilot licenses; Learn's page for the Agent 365 view also requires an Agent 365 license."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["viva-insights","viva-feature-access-management","data-export","agents","usage-reports","adoption","privacy","copilot-control-system","m365-copilot"]
sources:
  - title: "Microsoft 365 Roadmap 560538"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560538"
    kind: "roadmap"
  - title: "Export data from the Agent Dashboard (preview)"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/export-agent-data"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Connect to the Agent Dashboard (preview)"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard"
    kind: "learn"
  - title: "Identification in Copilot Analytics"
    url: "https://learn.microsoft.com/viva/insights/identification-copilot-analytics"
    kind: "learn"
  - title: "MC1288531: (Updated) Microsoft Viva - Copilot Analytics: Export agent data from the Agent Dashboard"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1288531"
    kind: "message-center"
  - title: "Whether the Agent Metrics Export feature is on, and for whom (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Whether the Agent Metrics Export feature is on, and for whom (PowerShell)"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
videos: []
related: ["copilot-credits","m365-admin-center-copilot-credits-usage-report","m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u"]
controls:
  - governs: "Whether the Agent Metrics Export feature is on, and for whom"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy > app and feature > Access setting > Apply access settings to"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId <featureId> -Name <policyName> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "Choose Viva Insights and Agent Metrics Export. Get the featureId with Get-VivaModuleFeature -ModuleId VivaInsights. Role: Global admin per the feature table; the export page also names AI admins."
  - governs: "Whether the export may include user identifiers (Agent 365 view)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy > app and feature > Access setting > Apply access settings to"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId <featureId> -Name <policyName> -IsFeatureEnabled $true -Everyone"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "IdentifiableExport is documented for the Agent 365 export (preview), off by default. Enabling it is the opt-in; not stated whether it applies to the notice's Copilot agent export."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-17"
    note: "New briefing: agent metrics export from the Viva Insights Agent Dashboard, on by default with a VFAM switch; Learn documents the Agent 365 view only."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 80 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected VFAM policy precedence and the feature ID note, replaced an unsupported claim about controls over downloaded files, noted the Private Preview listing, and removed two checklist items that had no controls-table row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 97 statements not yet confirmed"
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 105 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 105
  confirmed: 105
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "573758ef331655ff4203f9ed7ac5bb03"
---

## What's changing

Microsoft plans to add an export to the Agent Dashboard in the Viva Insights web app. The roadmap item says eligible users can export de-identified, row-level agent metrics and attributes, with personal identifiers removed.

Microsoft's notice MC1288531 says the export covers user-level Copilot agent metrics and agent attributes, aggregated by user and week, for up to the past six months. It lists several data tables: Copilot agent metadata (agent name, creator type and publishing source), usage metrics including the number of responses generated, Copilot agent credit usage and user retention metrics, and people metadata including organisation and function type. The notice names the eligible users as those with full company-level data access: senior leaders as identified in Microsoft Entra ID, admin-assigned company-level users, delegates with company-level access, and global analysts and admins. It says group managers with data access limited to their own teams will not have access, and that the feature is on by default for all eligible users.

Microsoft Learn already has a page, "Export data from the Agent Dashboard (preview)", but it describes the export for the Agent 365 Dashboard view, not the Copilot agent data the notice describes. That page documents a .zip package of .csv files generated on demand, with week-level data for up to six months or day-level data for up to 28 days, and says you can export only from the Agent 365 Dashboard view. Microsoft has not said whether the notice's export and the Learn page's export are the same feature, so treat the Learn page as the closest documentation, not as a description of the roadmap feature.

The roadmap item is In development, with a preview target of May CY2026 and a general availability target of November CY2026, for Worldwide (Standard Multi-Tenant) on the web. MC1288531, updated 20 October 2026, gives public preview rollout from late May 2026 to early June 2026, and general availability rollout from mid-November 2026 (previously late October) to the end of November 2026 (previously early November). These are Microsoft's targets.

## Why it matters

The export puts per-user agent usage into files that leave the dashboard. Eligible people with company-level access can download them, and the notice says the feature is on by default, so if nobody acts it becomes available to everyone who qualifies as rollout reaches the tenant. Microsoft states no act-by date in the notice, but general availability rollout is due to begin in mid-November 2026, so decisions about who should have this access belong before then.

The notice says user identifiers are removed. Learn describes the de-identified output as replacing direct user identifiers with protected identifiers and including organisation and function type. The wiki's view is that exports containing per-user rows plus organisational attributes still need a data-handling decision from your privacy owners before analysts start sharing the files.

## Risk assessment

**Data exposure**

- The export contains user-level rows by agent and week, with agent name, creator type, publishing source and people metadata such as organisation and function type (MC1288531). Files leave the dashboard once downloaded; agree with your privacy owner how they may be stored and shared.
- Learn says de-identified output replaces direct user identifiers with protected identifiers and that exports honour applicable admin exclusion policies, so excluded agents or users do not appear in the output. Confirm your exclusion list before rollout.
- Learn describes a separate identifiable export, controlled by the "IdentifiableExport" VFAM setting and off by default; that setting is documented for the Agent 365 view and is in preview. Microsoft's identification overview instead lists Agent Dashboard data export identification as Private Preview (https://learn.microsoft.com/viva/insights/identification-copilot-analytics). Keep it off unless you have approved the use.

**Security & identity**

- Access follows Agent Dashboard roles, not a new role. Learn lists senior leaders and their delegates, Global Viva Insights Analysts, Microsoft 365 Global Administrators and Viva Insights AI Administrators for the Agent 365 view, and the notice includes delegates with company-level access. Review who holds those delegations before rollout.

**Autonomy & actions**

- No change documented: the export is generated when a user requests it, and Learn says it can take up to 30 minutes. Nothing in the notice describes agents acting on their own.

**Change & support**

- Expect questions from leaders who find a new Export data icon, and from analysts who compare the export with the dashboard. Learn says week-level exports use completed weeks only, so totals can differ from the dashboard.
- Policy changes take up to 24 hours to appear in the web app, according to Learn, so allow for that when switching the feature off.

## Cost and licensing

No separate price for the export is published. Microsoft's notice says the feature requires at least 50 Microsoft 365 Copilot licenses and applies to the Viva Insights web app. Learn's page for the Agent 365 view lists a tenant needing at least 50 Microsoft Copilot licenses, at least one Agent 365 license and at least one active agent. The Agent Dashboard page lists the same 50-licence requirement for the Copilot Agent Dashboard view.

The notice says the export includes Copilot agent credit usage, so the data may help you track Copilot Credits consumption, but the notice does not say the export itself consumes credits or is metered. The cost known today is indirect: admin time to review who has company-level access, configure Viva Feature Access Management and brief eligible users. Microsoft has not published any other licence or price for the export.

## Scope

**Who can export.** The notice limits the export to Agent Dashboard users with full company-level data access: senior leaders, admin-assigned company-level users, delegates and global analysts and admins. Learn's page for the Agent 365 view adds Viva Insights AI Administrators and says users with non-global access, such as group managers with team-level views, cannot export data.

**Where.** The Viva Insights web app, on the web platform. The roadmap lists Worldwide (Standard Multi-Tenant) only.

**Prerequisites.** At least 50 Microsoft 365 Copilot licenses (the notice). For the Agent 365 view, Learn also lists at least one Agent 365 license and at least one active agent.

**Rollout.** On by default for eligible users. Microsoft targeted public preview rollout from late May 2026 to early June 2026, and general availability rollout is planned from mid-November 2026 to the end of November 2026, per MC1288531.

## Governance guidance

### Before rollout

- Decide whether the export should be on for everyone eligible, for specific groups only, or off, and record who owns the decision.
- Check that the Viva Feature Access Management policy options in the controls table are available to your admins; Learn lists Global admin for Agent Metrics Export, and the Agent 365 export page also names AI admins.
- Agree with your privacy owner how exported files may be stored and shared.

### At rollout

- Create a Viva Feature Access Management policy for Viva Insights, feature Agent Metrics Export, with Access setting Off, for the tenant or for specific groups, if you do not want the feature on by default.
- Confirm the IdentifiableExport setting is off unless you have approved it, once you can see it in your tenant.
- Tell eligible users what the export contains and what it is for, as the notice suggests.

### After rollout

- Test with an eligible account and a group manager account to confirm the group manager cannot export, as the notice states.
- Compare an export with the dashboard before analysts rely on it, because Learn says week-level exports and the dashboard can cover different time ranges.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Agent Metrics Export feature is on, and for whom</strong><br><small>Tenant</small><br><small class="controls__note">Choose Viva Insights and Agent Metrics Export. Get the featureId with Get-VivaModuleFeature -ModuleId VivaInsights. Role: Global admin per the feature table; the export page also names AI admins.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy › app and feature › Access setting › Apply access settings to <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &lt;featureId&gt; -Name &lt;policyName&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the export may include user identifiers (Agent 365 view)</strong><br><small>Tenant</small><br><small class="controls__note">IdentifiableExport is documented for the Agent 365 export (preview), off by default. Enabling it is the opt-in; not stated whether it applies to the notice's Copilot agent export.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy › app and feature › Access setting › Apply access settings to <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &lt;featureId&gt; -Name &lt;policyName&gt; -IsFeatureEnabled $true -Everyone</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows use Viva Feature Access Management (VFAM). Learn says policy changes can take up to 24 hours to take effect, that a tenant can have up to 10 policies per feature assigned to users and groups with up to 20 users or groups each, and that user or group policies take precedence over the tenant policy, with the most restrictive enablement policy applying within the same scope level.

The notice says admins can manage or disable the feature at tenant or group level. Learn's Agent 365 export page says global admins and AI admins can enable or disable export for the tenant, groups or individual users, while the VFAM feature table lists Global admin for Agent Metrics Export; the two pages differ on the role, so confirm in your tenant. The IdentifiableExport setting is documented on the Agent 365 export page only. The export page names the VFAM control AgentMetricsExport; confirm the feature ID returned in your tenant with Get-VivaModuleFeature -ModuleId VivaInsights before running the cmdlet.

The VFAM change logs in Microsoft Purview record policy creation, updates and deletions; they are a record of policy changes, not of export downloads.

## Open questions

- Is the export in MC1288531 (Copilot agent data, by user and week) the same feature as the Agent 365 export on Learn, and does the Copilot agent export need an Agent 365 license? Watch MC1288531 and the Learn page "Export data from the Agent Dashboard".
- Which role manages Agent Metrics Export: Global admin only, as the VFAM feature table lists, or Global admins and AI admins, as the export page says?
- Does Microsoft record who generates or downloads an export in an audit log? Learn's VFAM page points to change logs for policy changes only.
- Will the Copilot agent export offer the identifiable option that Learn documents for the Agent 365 view, and what is its default?
- Will Microsoft publish a separate licence or price for the export, and does the credit usage it contains mean anything for billing?

<!-- rationale
risk: Medium. The export is on by default for eligible users and gives them row-level, per-user agent data; Microsoft says identifiers are removed, and Viva Feature Access Management can disable it.
cost: Low. No separate price for the export is published; the notice requires at least 50 Microsoft 365 Copilot licenses, so the cost known today is admin time to review access and brief users.
impact: Low. Only users with full company-level Agent Dashboard access can export; Microsoft says group managers limited to their own teams will not have access.
-->

<!-- verifier-findings (2026-11-18, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: Learn export description / behaviour: Learn documents week-level data for up to six months. | Found: Up to the past six months, subject to Agent 365 data availability | Fix: Qualify only the Learn export description as 'week-level data for up to six months, subject to Agent 365 data availability'. Keep the separately attributed notice's six-month statement unchanged. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/export-agent-data
- [supported, minor] What's changing: Learn export description / behaviour: Learn documents day-level data for up to 28 days. | Found: Up to the past 28 days of data, subject to Agent 365 data availability | Fix: Qualify the Learn export description as 'day-level data for up to 28 days, subject to Agent 365 data availability'. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/export-agent-data
- [supported, minor] controls[1].ui; Governance controls: second row / admin-path: The identification row uses the generic documented Viva > Settings > Manage feature access > Create a policy > app and feature > Access setting > Apply access settings to route. | Found: select Viva from the settings menu. ... Select the Settings tab and select Manage feature access. ... Select Create a policy. ... select the app and feature ... Select the Access setting ... under Apply access settings to. | Fix: Add to controls[1].note: 'Microsoft's identification overview gives alternative navigation: Settings > Viva > Feature access management; its methods table instead gives Settings > Org settings > Viva feature access (https://learn.microsoft.com/viva/insights/identification-copilot-analytics).' Keep the route supported by the cited generic policy guide. | Source: https://learn.microsoft.com/viva/control-access-admin-center
-->
