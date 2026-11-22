---
title: "SharePoint: tenant-wide usage statistics for SharePoint agents"
slug: "sharepoint-sharepoint-agent-usage-statistics-across-all-sharepoint-sites"
roadmapId: 480729
topic: "governance"
products: ["Microsoft 365 admin center","SharePoint"]
summary: "Microsoft plans tenant-wide usage statistics for SharePoint agents, aimed at tenant admins. No Learn page describes it yet. It is a reporting feature: no admin action is needed, and the existing Agent Insights report is the nearest control."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer","Web"]
targetDate: "December CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Licensing for this feature is not yet published. For the existing Agent Insights report, Learn says PowerShell use needs the SharePoint Advanced Management add-on SKU or a Microsoft Copilot licence."
audiences: ["m365-admin","service-owner","finops"]
tags: ["sharepoint","sharepoint-agents","sharepoint-advanced-management","usage-reports","m365-admin-center","analytics"]
sources:
  - title: "Microsoft 365 Roadmap item 480729"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=480729"
    kind: "roadmap"
  - title: "Insights report on agents in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents"
    kind: "learn"
  - title: "Monitor agent usage in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/monitor-agent-usage"
    kind: "learn"
  - title: "Use agents with pay-as-you-go billing"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-agents-azure-billing"
    kind: "learn"
videos: []
related: ["m365-admin-center-agents-usage-report","usage-reports","m365-copilot-agent-365-business-analytics-experience","m365-admin-center-agent-level-pay-as-you-go-controls","auditing"]
controls:
  - governs: "Agent Insights report on agents across SharePoint and OneDrive sites"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Reports > Agent Insights"
      docs: "https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents"
    api:
      kind: "powershell"
      call: "Start-SPOCopilotAgentInsightsReport -ReportPeriodInDays 28"
      docs: "https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents"
    note: "Existing report on created agents, not the planned usage statistics. Needs a SharePoint administrator; PowerShell use needs SharePoint Advanced Management or a Microsoft Copilot licence."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-07-29T23:15:56"
changes:
  - date: "2026-11-22"
    note: "First briefing: planned tenant-wide SharePoint agent usage statistics, with the existing Agent Insights report as the nearest control."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 39 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 35
  unconfirmed: 2
  contradicted: 2
  attempts: 1
  hash: "9ce89f381d43dec089c8cbd9acf505e9"
---

## What's changing

The roadmap item states that SharePoint agents' usage statistics would be aggregated across all SharePoint sites and made available to the tenant admin persona. The roadmap lists Microsoft 365 admin center and SharePoint as products, Worldwide (Standard Multi-Tenant) as the cloud, and General Availability as the release phase.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The roadmap does not say where the statistics will appear, which measures they will include or how often they refresh. Learn does say that Microsoft is prioritising richer analytics across the Copilot Analytics dashboard, Microsoft 365 Admin Center, SharePoint Advanced Management and SharePoint Online in the coming months.

The record's status is In development, with a target date of December CY2025. That target is a Microsoft plan, and it is earlier than the date of this briefing (22 November 2026) while the status is still In development, so confirm the current timing in the Microsoft 365 roadmap.

Today, admins have other routes. The Agent Insights report in the SharePoint admin center covers agents created across all SharePoint and OneDrive sites and is built from audit data on file creation and renaming, so it reports where agents exist, not how often they are used.

## Why it matters

Service owners currently piece together agent usage from several tools: the Agent Insights report, the Microsoft Purview audit log and Microsoft Cost Management. A single tenant-wide view of usage would be a planning input for adoption, support and pay-as-you-go budgeting, but Microsoft has not said what it will measure, so do not plan around it yet.

Microsoft has not stated what happens on arrival. No source says existing behaviour changes, so this is a reporting capability to review when Microsoft documents it, not a change to prepare for.

## Risk assessment

- **Data exposure**: The roadmap describes statistics for the tenant admin persona only. Microsoft has not said whether the statistics name users or sites, so check what they expose when Microsoft documents them.
- **Security & identity**: Not yet documented: which admin roles will see the statistics. The existing Agent Insights report is generated by a SharePoint administrator, and Learn says regular site owners cannot run it unless granted explicit roles.
- **Autonomy & actions**: No change described: the roadmap item covers statistics, not new agent actions.
- **Change & support**: The target date in the record has passed while the status is In development, so expect the date to move. Until a Learn page exists, helpdesk answers should point to the Agent Insights report, the Purview audit log and Cost Management.

## Cost and licensing

Licensing for this feature is not yet published, and no meter is documented for it at the time of writing (November 2026).

For the existing Agent Insights report, Learn says that generating and viewing reports in SharePoint Online Management Shell needs the SharePoint Advanced Management add-on SKU or a Microsoft Copilot licence. Without a SharePoint Advanced Management licence, the admin centre asks you to enable data collection first.

Usage itself can be billed: Learn says that SharePoint agent charges under pay-as-you-go appear under the Copilot Studio meter on your invoice, and that Microsoft Cost Management is the documented way to monitor the cost of agent usage at organisation level. Whether the planned statistics show cost is not stated.

## Scope

The roadmap record lists Microsoft 365 admin center and SharePoint as products, Worldwide (Standard Multi-Tenant) as the cloud, and Developer and Web as platforms. It lists no US Government clouds, which is a record fact and not a statement that the feature is unavailable there.

The audience is the tenant admin persona. Roles, licences and rollout mechanics for the planned statistics are not yet published. For the existing Agent Insights report, Learn names the SharePoint administrator role.

## Governance guidance

### Before rollout

- Inventory your current agent monitoring: identify who generates the Agent Insights report in the SharePoint admin center and whether data collection is enabled.
- Confirm with finance owners whether SharePoint agents use pay-as-you-go billing, and who watches the Cost Management budget.

### At rollout

- Watch the Microsoft 365 roadmap item and Message center for the location, roles and licence of the new statistics.
- Compare the first statistics with the Agent Insights report before relying on either for reporting.

### After rollout

- Check which admin roles can see the statistics and whether they show user or site names.
- Update support guidance so that agent usage questions go to one documented source.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Agent Insights report on agents across SharePoint and OneDrive sites</strong><br><small>Tenant</small><br><small class="controls__note">Existing report on created agents, not the planned usage statistics. Needs a SharePoint administrator; PowerShell use needs SharePoint Advanced Management or a Microsoft Copilot licence.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Reports › Agent Insights <a href="https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPOCopilotAgentInsightsReport -ReportPeriodInDays 28</code> <a href="https://learn.microsoft.com/sharepoint/insights-on-sharepoint-agents" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting for the planned statistics is documented at the time of writing (November 2026), so the table lists the nearest existing control: the Agent Insights report. It reports on agents created across SharePoint and OneDrive sites, and the roadmap item does not say it is the planned feature.

The report page names the SharePoint administrator role for generating reports in the admin centre and in SharePoint Online Management Shell. Learn adds that regular site owners cannot run the reports unless granted explicit roles.

## Open questions

- Where will the tenant-wide agent usage statistics appear (Microsoft 365 admin center, SharePoint admin center or both), and which measures will they include? Watch the roadmap item and the Learn page for monitoring agent usage in SharePoint.
- Which licence or meter will cover the statistics, and will they depend on SharePoint Advanced Management?
- Is the December CY2025 target still current, given the status is In development?
- Will the statistics show user, group or site names, and can an admin conceal them?

<!-- rationale
risk: Low. The roadmap describes statistics for admins only, with no stated new data access or agent behaviour; the exposure that remains is today's, since no setting for this feature is documented.
cost: Low. The only cost the sources show is admin time; licensing for this feature is not yet published. The existing Agent Insights report needs SharePoint Advanced Management or a Microsoft Copilot licence for PowerShell use.
impact: Low. The roadmap names the tenant admin persona as the audience, so admins notice it and end users do not.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] summary; front matter: defaultState; Why it matters / default: No admin action is needed for the reporting feature. | Found: Searched: 'SharePoint agent usage statistics no action' and 'SharePoint tenant statistics agent rollout'; opened Monitor agent usage, Insights report on agents, Monitor agent access, and Microsoft Copilot Agents usage report. None states this for the roadmap item. | Fix: Replace 'no admin action is needed' with 'Microsoft has not stated what happens on arrival'. This also resolves the internal conflict with defaultState: unknown and the same statement in Why it matters. Do not infer automatic availability or an absence of setup requirements.
- [unsupported, major] summary; What's changing; Risk assessment / absence: No Microsoft Learn page describes the tenant-wide SharePoint agent usage statistics feature yet. | Found: Searched: 'SharePoint agent usage report statistics', 'SharePoint usage statistics agents licensing', and 'SharePoint 480729'; opened Monitor agent access and Microsoft Copilot Agents usage report. Both document relevant analytics, but neither identifies this roadmap item. | Fix: Replace the blanket documentation-gap statement and 'Until a Learn page exists' with 'Microsoft documents agent access across SharePoint and OneDrive sites and SharePoint agent usage in Copilot, but the sources checked do not explicitly identify either report as roadmap item 480729.' Cite https://learn.microsoft.com/sharepoint/insights-on-agent-access and https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-agents-new?view=o365-worldwide. Do not assert that either report implements this item.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist's instruction to check data collection has a corresponding controls row. | Found: Checklist: 'whether data collection is enabled'. The sole row governs 'Agent Insights report on agents across SharePoint and OneDrive sites' and scripts report generation, not data collection. | Fix: Remove 'and whether data collection is enabled' from the first Before rollout bullet; the data-collection control has no row. Do not add a row as part of this correction.
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist's instruction to take stock of pay-as-you-go billing and the Cost Management budget has corresponding controls rows. | Found: Checklist: 'Confirm with finance owners whether SharePoint agents use pay-as-you-go billing, and who watches the Cost Management budget.' The controls table contains only the Agent Insights report. | Fix: Remove the second Before rollout bullet; neither pay-as-you-go billing nor the Cost Management budget has a controls row. Do not add rows as part of this correction.
-->
