---
title: "Power Apps: out-of-the-box Application Insights telemetry for generative pages"
slug: "power-apps-monitor-generative-pages-with-out-of-the-box-application-insights-telemetry"
roadmapId: 576282
topic: "power-platform"
products: ["Power Apps"]
summary: "Once an admin enables Application Insights export for an environment, published generative pages automatically send page loads, errors, data operations and navigation without any telemetry code."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Application Insights ingestion and retention are billed through the associated Log Analytics workspace in Azure Monitor. Exact charges depend on your workspace configuration."
audiences: ["power-platform-admin","finops","maker","service-owner"]
tags: ["power-apps","generative-pages","application-insights","telemetry","monitoring","data-export","gcc","gcc-high"]
sources:
  - title: "Generate a page using natural language"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 576282"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576282"
    kind: "roadmap"
  - title: "Export data to Application Insights"
    url: "https://learn.microsoft.com/power-platform/admin/set-up-export-application-insights#create-an-export-package"
    kind: "learn"
  - title: "Create and configure Application Insights resources"
    url: "https://learn.microsoft.com/azure/azure-monitor/app/create-workspace-resource"
    kind: "learn"
  - title: "Azure Monitor Logs cost calculations and options"
    url: "https://learn.microsoft.com/azure/azure-monitor/logs/cost-logs#application-insights-billing"
    kind: "learn"
  - title: "Set daily cap on Log Analytics workspace"
    url: "https://learn.microsoft.com/azure/azure-monitor/logs/daily-cap#application-insights"
    kind: "learn"
  - title: "Analyze model-driven apps and Microsoft Dataverse telemetry with Application Insights"
    url: "https://learn.microsoft.com/power-platform/admin/analyze-telemetry"
    kind: "learn"
videos: []
related: ["power-pages-administration-and-governance-configure-site-analytics-and-server-logging","power-pages-track-power-pages-performance-and-usage-with-monitor-hub"]
controls:
  - governs: "Application Insights data export for an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Data export > App Insights > New data export"
      docs: "https://learn.microsoft.com/power-platform/admin/set-up-export-application-insights#create-an-export-package"
    api: null
    note: "Managed Environments only. Requires Power Platform administrator or Dynamics 365 administrator at tenant level, and environment administrator or system administrator within the Dataverse environment."
  - governs: "Telemetry switch for an individual generative page"
    scope: "app"
    ui: null
    api: null
    note: "Telemetry follows the environment export; Microsoft has not documented a per-page UI or API switch as of November 2026."
confidence: "high"
created: "2026-11-15"
updated: "2026-11-17"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-15"
    note: "New briefing: out-of-the-box Application Insights telemetry for generative pages, in development."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-17"
    note: "Corrected role requirements, billing through the Log Analytics workspace, the per-page switch and automation statements, and the credit statement; added daily-cap and Dataverse licence notes."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 44 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 44 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 41
  unconfirmed: 2
  contradicted: 1
  attempts: 0
  hash: "9a1d11875eeba7433799edc35c0c8527"
---

## What's changing

When an administrator configures Application Insights data export for an environment in the Power Platform admin center, Power Apps automatically exports telemetry for published generative pages. Makers do not add telemetry code, the Application Insights JavaScript SDK or a connection string.

Learn lists four signals: completed page loads (pageViews), unhandled page-rendering errors and promise rejections (exceptions), supported dataApi operations including create, update, delete, retrieve and query (dependencies), and navigation started from a generative page (pageViews).

The roadmap shows a preview from September 2026 and general availability targeted for December 2026, in Worldwide, GCC and GCC High. Learn notes availability may vary by environment while it rolls out.

## Why it matters

Generative pages are AI-written code, so production visibility into errors and slow data calls helps support teams. It gives service owners page-level performance data without asking makers to instrument anything.

It also adds telemetry volume to an existing Azure resource, so cost ownership and data retention need to be agreed.

## Risk assessment

**Data exposure**
- Telemetry records page IDs, names, app, host type, durations and operation results. Learn does not list record content, but confirm in your tenant.

**Security & identity**
- Access to the data follows Azure role-based access. Review permissions on both the Application Insights resource and the associated Log Analytics workspace.

**Autonomy & actions**
- None. The feature only observes activity.

**Change & support**
- Preview feature; behaviour may differ between environments while rolling out.

## Cost and licensing

Microsoft has not published a telemetry-specific Power Apps licence or credit requirement for generative pages as of November 2026. Learn notes that enabling Application Insights is limited to customers with paid/premium Dataverse licences available for the tenant.

Ingestion and retention are billed through the associated Log Analytics workspace; confirm that workspace's subscription and budget owner, as it can differ from the Application Insights resource's subscription. Estimate volume from page loads and data operations per day. Specific guidance for generative pages is not yet published.

## Scope

Published generative pages in model-driven apps, in environments that meet the Application Insights data export requirements. Worldwide, GCC and GCC High per the roadmap. Release channel is shown as Weekly, version 2608.5.

## Governance guidance

### Before rollout
- Confirm the environment meets the Application Insights data export requirements.
- Agree who owns the Application Insights resource and its budget.
- Set retention and access for the telemetry.

### At rollout
- Enable data export in the Power Platform admin center for chosen environments.
- Tell support teams which tables hold generative page data.

### After rollout
- Review ingestion volume and cost monthly.
- Build alerts on exceptions for critical pages.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Application Insights data export for an environment</strong><br><small>Environment</small><br><small class="controls__note">Managed Environments only. Requires Power Platform administrator or Dynamics 365 administrator at tenant level, and environment administrator or system administrator within the Dataverse environment.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Data export › App Insights › New data export <a href="https://learn.microsoft.com/power-platform/admin/set-up-export-application-insights#create-an-export-package" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Telemetry switch for an individual generative page</strong><br><small>App</small><br><small class="controls__note">Telemetry follows the environment export; Microsoft has not documented a per-page UI or API switch as of November 2026.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Once the export exists, published generative pages report page loads, unhandled errors, data API calls and navigation without any code in the page, as described under [common tasks with generative pages](https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages#common-tasks-with-generative-pages). Microsoft documents portal configuration; an equivalent automation interface is not yet documented as of November 2026. Costs are billed through the Log Analytics workspace behind the Application Insights resource. Learn advises configuring the daily cap for both Application Insights and Log Analytics; for workspace-based resources the effective daily cap is the minimum of the two settings.

## Open questions

- Can telemetry be disabled for individual pages while environment export stays on?
- What happens in sovereign clouds where Application Insights export differs?
- Will correlation with Dataverse and plug-in traces be added?

<!-- rationale
risk: Low. It is an observability feature that depends on an admin configuring Application Insights export; telemetry contains page and operation metadata.
cost: Variable. Application Insights ingestion and retention are billed through the associated Log Analytics workspace, so volume depends on page traffic. Microsoft has not published a telemetry-specific Power Apps credit requirement as of November 2026.
impact: Low. Admins and developers see the telemetry; end users notice nothing.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: There are no autonomous actions and the feature only observes activity. | Found: Searched: generative pages Application Insights autonomous performance telemetry. Read generative-pages, analyze-telemetry and returned excerpts; they describe exported signals, not an explicit guarantee that the feature only observes or performs no actions. | Fix: Replace 'None. The feature only observes activity.' with 'The documented capability exports page-load, error, data-operation and navigation telemetry.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What's changing; Governance controls / behaviour: Configuring environment Application Insights export automatically exports telemetry for published generative pages. | Found: When you configure Application Insights data export for the environment in the Power Platform admin center, Power Apps automatically exports telemetry for published generative pages. | Fix: Retain the feature-specific statement, but add: 'The troubleshooting article says exports need manual scheduling, unlike the automatic export described by the generative-pages documentation.' Cite https://learn.microsoft.com/troubleshoot/power-platform/dataverse/import-export-data/data-export-option-not-available-in-application-insights, which says 'Users need to manually schedule exports.' | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/generative-pages
- [supported, minor] controls[0].note; Governance controls / role: Configuration requires Power Platform administrator or Dynamics 365 administrator at tenant level. | Found: This includes being assigned to the Power Platform administrator or Dynamics 365 administrator role at the tenant-level in Microsoft Entra ID | Fix: Keep the cited setup requirements and add: 'The troubleshooting article also lists Microsoft 365 Global administrator.' Cite https://learn.microsoft.com/troubleshoot/power-platform/dataverse/import-export-data/data-export-option-not-available-in-application-insights, whose required-role list includes Microsoft 365 Global administrator. | Source: https://learn.microsoft.com/power-platform/admin/set-up-export-application-insights
- [supported, minor] Risk assessment: Security & identity / applicability: Access to exported telemetry follows Azure role-based access control. | Found: Access to a workspace is managed by using Azure RBAC. | Fix: Add https://learn.microsoft.com/azure/azure-monitor/logs/manage-access to sources for the workspace-access statement. | Source: https://learn.microsoft.com/azure/azure-monitor/logs/manage-access
- [unsupported, minor] rationale: impact / behaviour: End users notice nothing. | Found: Searched: generative pages Application Insights autonomous performance telemetry; generative pages Application Insights telemetry costs volume guidance. Read generative-pages and analyze-telemetry; neither guarantees no user-visible effects from exporting telemetry. | Fix: Remove 'end users notice nothing' from the impact rationale, retaining 'Low. Admins and developers see the telemetry.'
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The checklist's retention, access and exception-alert instructions have corresponding controls-table rows. | Found: Checklist: 'Set retention and access for the telemetry' and 'Build alerts on exceptions for critical pages.' Table: 'Application Insights data export for an environment' and 'Telemetry switch for an individual generative page'. | Fix: Remove the checklist bullets 'Set retention and access for the telemetry' and 'Build alerts on exceptions for critical pages'; these controls have no corresponding table rows.
- [supported, minor] controls[0].ui; Governance controls / admin-path: The environment export path is Power Platform admin center > Manage > Data export > App Insights > New data export. | Found: In the navigation pane, select Manage. In the Manage pane, select Data export. On the Data export page, select the App Insights tab. Then select New data export. | Fix: Keep the documented path, which correctly reaches the export wizard, and add to the note: 'In the wizard, select the data type and filters, select the source environment, select the destination Azure subscription, resource group and Application Insights environment, then review and create the export.' | Source: https://learn.microsoft.com/power-platform/admin/set-up-export-application-insights#create-an-export-package
-->
