---
title: "Dynamics 365 finance and operations: data management framework telemetry in Application Insights"
slug: "microsoft-dataverse-finance-and-operations-cross-application-integration-monitor-data-mana"
roadmapId: 576817
topic: "power-platform"
products: ["Microsoft Dataverse"]
summary: "Import and export job telemetry from finance and operations apps can stream to your own Azure Application Insights resource. An admin has to link the environment first, and the Azure ingestion is billed to you."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "April CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn says Application Insights charges depend mainly on data ingestion and retention (Azure Monitor). No finance and operations licence requirement is stated on the telemetry pages read. A DMF-specific price is not published."
audiences: ["service-owner","finops","m365-admin"]
tags: ["finance-and-operations","dynamics-365","application-insights","telemetry","monitoring","integration","cost-management"]
sources:
  - title: "Microsoft 365 Roadmap 576817"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576817"
    kind: "roadmap"
  - title: "Available telemetry"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/monitoring-telemetry/monitoring-available-telemetry"
    kind: "learn"
  - title: "Get started with telemetry for finance and operations apps"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/monitoring-telemetry/monitoring-getting-started"
    kind: "learn"
  - title: "Monitoring and telemetry overview"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/monitoring-telemetry/monitoring-overview"
    kind: "learn"
  - title: "Understand and control costs"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/monitoring-telemetry/monitoring-understanding-and-controlling-cost"
    kind: "learn"
  - title: "Set daily cap on Log Analytics workspace"
    url: "https://learn.microsoft.com/azure/azure-monitor/logs/daily-cap"
    kind: "learn"
  - title: "Roles, permissions, and security in Azure Monitor"
    url: "https://learn.microsoft.com/azure/azure-monitor/fundamentals/roles-permissions-security"
    kind: "learn"
  - title: "Daily ingestion cap on the Log Analytics workspace behind Application Insights (REST API)"
    url: "https://learn.microsoft.com/rest/api/loganalytics/workspaces/createorupdate"
    kind: "learn"
videos: []
related: ["power-apps-monitor-generative-pages-with-out-of-the-box-application-insights-telemetry","dynamics-365-finance-and-operations-cross-app-migrate-finance-and-operations-environments"]
controls:
  - governs: "Which Application Insights resource each environment sends telemetry to"
    scope: "environment"
    ui:
      surface: "Finance and Supply Chain Management"
      path: "System administration > Monitoring and Telemetry parameters > Monitoring settings > Application Insights Registry"
      docs: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/monitoring-telemetry/monitoring-getting-started"
    api: null
    note: "Link environments on the Environments tab first, then register an instrumentation key or connection string per environment mode."
  - governs: "Which telemetry types are emitted, including DMFJob Start, End and Status"
    scope: "environment"
    ui:
      surface: "Finance and Supply Chain Management"
      path: "System administration > Monitoring and Telemetry parameters > Monitoring settings > Configure"
      docs: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/monitoring-telemetry/monitoring-getting-started"
    api: null
    note: "DMF signals appear here once the two DMF flights are enabled; Learn says to contact Microsoft support if they are not."
  - governs: "Daily ingestion cap on the Log Analytics workspace behind Application Insights"
    scope: "other"
    ui:
      surface: "Azure portal"
      path: "Log Analytics workspaces > workspace > Usage and estimated costs > Daily Cap > ON"
      docs: "https://learn.microsoft.com/azure/azure-monitor/logs/daily-cap"
    api:
      kind: "rest"
      call: "PUT https://management.azure.com/subscriptions/<sub>/resourceGroups/<rg>/providers/Microsoft.OperationalInsights/workspaces/<ws>?api-version=2026-03-01 body {\"location\":\"<region>\",\"properties\":{\"workspaceCapping\":{\"dailyQuotaGb\":<GB>}}}"
      docs: "https://learn.microsoft.com/rest/api/loganalytics/workspaces/createorupdate"
    note: "The workspace daily cap stops collection of billable log data in Analytics and Basic tables, not only DMF signals; Auxiliary tables are exempt."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-16T19:09:27"
changes:
  - date: "2026-11-18"
    note: "New briefing on data management framework telemetry for finance and operations apps in Application Insights, with setup steps and Azure cost controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the daily cap scope (Analytics and Basic tables only) and its REST call, removed the feature-enablement controls row, and trimmed checklist steps that had no controls row."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 72 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 73 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 71
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "3bcb04ea55a7c35e0a12fd9a5ee8c16c"
---

## What's changing

Data management framework (DMF) telemetry for Dynamics 365 finance and operations apps streams information about import and export jobs into the customer's own Azure Application Insights instance. The roadmap item says it lets teams monitor import and export functions with start and end times, job status from source to staging and from staging to target, and failures with error messages at a granular level, and set up alerts and dashboards.

Learn's "Available telemetry" page describes three signals that appear under the **Configure** tab once the flights are enabled: **DMFJob Start**, **DMFJob End** and **DMFJob Status**. DMF errors are logged to the Custom Events table in Application Insights, and exceptions that reach the X++ layer go to the Exceptions table. Learn says the feature is available in finance and operations versions PU71/10.0.47 (build >= 7.0.7858.68), PU70/10.0.46 (build >= 7.0.7778.87) and PU69/10.0.45 (build >= 7.0.7690.137). Two flights, **DMFTelemetryConfigurationFlight** and **DMFEnableAppInsightsLogsAndErrors**, control it and Learn says they are enabled by default.

The roadmap record gives the status as Launched, with a preview target of April CY2026 and a general availability target of June CY2026, for Worldwide (Standard Multi-Tenant) on the web. The roadmap's more-info link points to an anchor named for a preview; the Learn section read for this briefing is titled "DMF telemetry" and the text read does not label it as preview.

## Why it matters

This gives integration owners a way to see why a scheduled import or export failed without opening each job in the application, and to alert on failures. It also creates a new data flow to an Azure resource: the telemetry lands in a resource you own, so the spend, retention and read access sit with your Azure subscription rather than with Dynamics 365.

Microsoft Learn's getting-started page lists the steps to link an environment to Application Insights; the roadmap says admins enable it. Based on that, nothing is sent until someone completes them, so there is no deadline, but teams that already run Application Insights for batch or form telemetry should decide whether DMF signals belong in the same resource and budget.

## Risk assessment

**Data exposure**

- DMF errors are written to the Custom Events table, and X++ exceptions to the Exceptions table, in Application Insights. Confirm what the error messages from your import and export jobs contain before you decide who may query that resource; Learn's pages read do not describe the field contents.
- Learn says Microsoft does not collect the emitted telemetry for support or other operational reporting, and that the data is customer-owned and customer-driven.

**Security & identity**

- Read access to the telemetry follows the Azure resource you link, not a finance and operations security role. Check who holds access to the Application Insights resource and its workspace.
- The instrumentation key or connection string is stored on the **Application Insights Registry** tab; Learn says the key is ignored if a connection string is also given. Treat the connection string as configuration to protect.

**Autonomy & actions**

- The signals are read-only reporting of job start, end and status. The roadmap describes alerts and dashboards as something customers set up; nothing in the sources read says the feature changes jobs.

**Change & support**

- Learn says that if the flights are not enabled in your environments, you contact Microsoft support. Plan for that route if the signals do not appear under the **Configure** tab.
- Telemetry cost grows with ingestion. A daily cap stops collection for the rest of the period once reached, so alerts and dashboards go quiet when it is hit.

## Cost and licensing

The Learn pages read on finance and operations telemetry name no licence for DMF telemetry. The cost shown there is Azure: Learn's "Understand and control costs" page says sending data to Azure Application Insights incurs charges, and that ingestion and retention are the main drivers of Azure Monitor cost.

The cost page suggests collecting only essential telemetry in production, sampling, adjusting retention, using Microsoft Cost Management to alert on unusual spending, and considering daily caps (it warns data loss may occur once a cap is reached). Azure Monitor's daily cap page says data collected above the cap is still billed, and that for workspace-based Application Insights resources the effective cap is the minimum of the Application Insights and Log Analytics settings.

Not yet published: the data volume or cost that DMF telemetry adds for a given number of jobs.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the web platform, and describes it as enabled by admins, makers or marketers for end users. Learn limits availability to finance and operations versions PU69/10.0.45, PU70/10.0.46 and PU71/10.0.47 at the builds quoted above.

Prerequisites from Learn's getting-started page: an Application Insights resource in Azure, the **Monitoring and Telemetry** feature enabled in the **Feature management** workspace, environments linked to the right Application Insights resources, and the telemetry types turned on. Learn's pages read do not name a licence or an admin role for these steps. The roadmap record does not list a GCC, GCC High or DoD cloud; this briefing does not treat that as a statement of unavailability.

## Governance guidance

### Before rollout

- Create or choose the Azure Application Insights resource for each environment mode (development, test, production) and name its owner.
- Set a daily cap on that resource, using the daily-cap row in the controls table, and decide who is told when it is reached.
- Check the finance and operations environment build against the PU69, PU70 and PU71 builds above.

### At rollout

- Enable the **Monitoring and Telemetry** feature in the **Feature management** workspace.
- Link each environment and each environment mode to its Application Insights resource, then turn on the DMF telemetry types on the **Configure** tab.
- Raise a Microsoft support request if the DMF flights are not enabled in your environments.

### After rollout

- Confirm that **DMFJob Start**, **DMFJob End** and **DMFJob Status** records arrive in Application Insights, and that a failed test import appears with its error.
- Review ingestion volume against the daily cap after the first full import and export cycle.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which Application Insights resource each environment sends telemetry to</strong><br><small>Environment</small><br><small class="controls__note">Link environments on the Environments tab first, then register an instrumentation key or connection string per environment mode.</small></td><td data-label="Admin UI"><strong>Finance and Supply Chain Management</strong><br>System administration › Monitoring and Telemetry parameters › Monitoring settings › Application Insights Registry <a href="https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/monitoring-telemetry/monitoring-getting-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which telemetry types are emitted, including DMFJob Start, End and Status</strong><br><small>Environment</small><br><small class="controls__note">DMF signals appear here once the two DMF flights are enabled; Learn says to contact Microsoft support if they are not.</small></td><td data-label="Admin UI"><strong>Finance and Supply Chain Management</strong><br>System administration › Monitoring and Telemetry parameters › Monitoring settings › Configure <a href="https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/monitoring-telemetry/monitoring-getting-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Daily ingestion cap on the Log Analytics workspace behind Application Insights</strong><br><small class="controls__note">The workspace daily cap stops collection of billable log data in Analytics and Basic tables, not only DMF signals; Auxiliary tables are exempt.</small></td><td data-label="Admin UI"><strong>Azure portal</strong><br>Log Analytics workspaces › workspace › Usage and estimated costs › Daily Cap › ON <a href="https://learn.microsoft.com/azure/azure-monitor/logs/daily-cap" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PUT https://management.azure.com/subscriptions/&lt;sub&gt;/resourceGroups/&lt;rg&gt;/providers/Microsoft.OperationalInsights/workspaces/&lt;ws&gt;?api-version=2026-03-01 body {&quot;location&quot;:&quot;&lt;region&gt;&quot;,&quot;properties&quot;:{&quot;workspaceCapping&quot;:{&quot;dailyQuotaGb&quot;:&lt;GB&gt;}}}</code> <a href="https://learn.microsoft.com/rest/api/loganalytics/workspaces/createorupdate" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no API or automation for the Monitoring and Telemetry parameters at the time of writing (November 2026), so those rows show the application path only. The telemetry steps are performed inside finance and operations; the cost rows are performed in Azure and need Azure roles. Azure Monitor's daily cap page lists the Log Analytics Contributor role (Microsoft.OperationalInsights/workspaces/write) for workspaces and, for classic Application Insights resources, the Application Insights Component Contributor role.

The daily cap limits cost, not scope: it stops collection of billable log data in Analytics and Basic tables, not only DMF signals; Auxiliary tables are exempt. No control that turns off DMF signals on their own other than the **Configure** tab is documented in the pages read.

## Open questions

- Does DMF telemetry carry any customer data fields, such as entity or file names, in its events or error messages? Watch the "Available telemetry" and "Data management error descriptions" pages on Microsoft Learn.
- Is the roadmap's preview phase still reflected in Learn, given the roadmap link's preview anchor? Watch the roadmap item and the "Available telemetry" page.
- Is there an approximate data volume or cost per DMF job? Not yet published; watch "Understand and control costs".
- Is there an API or script for the Monitoring and Telemetry parameters? Watch the finance and operations monitoring documentation.

<!-- rationale
risk: Low. The telemetry goes to an Application Insights resource the customer owns and, per Learn, Microsoft does not collect it; the exposure is who can read that resource and what the job errors contain.
cost: Variable. Learn says sending telemetry to Azure Application Insights incurs charges, with ingestion and retention as the main drivers; the finance and operations telemetry page names no separate licence.
impact: Low. Administrators, integration owners and support teams who watch data management import and export jobs notice it; end users see no change.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The signals are read-only reporting of job start, end and status. | Found: Searched: finance operations DMF telemetry event fields error messages entity file names modifies jobs; opened Available telemetry and Monitoring and telemetry overview. They document logging and monitoring, but do not explicitly characterize the signals as read-only. | Fix: Replace 'The signals are read-only reporting of job start, end and status.' with 'The signals report job start, end and status.' Available telemetry documents those three reporting functions.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].api / command: The printed PUT workspace operation at api-version=2026-03-01 sets properties.workspaceCapping.dailyQuotaGb with the supplied location. | Found: PUT https://management.azure.com/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}?api-version=2026-03-01 ... properties.workspaceCapping ... dailyQuotaGb ... The workspace daily quota for ingestion. | Fix: Replace controls[2].api.call and its rendered cell with 'PUT https://management.azure.com/subscriptions/<sub>/resourceGroups/<rg>/providers/Microsoft.OperationalInsights/workspaces/<ws>?api-version=2026-03-01'. Append to controls[2].note: 'The request body sets properties.workspaceCapping.dailyQuotaGb.' The endpoint, version and printed body keys are documented; remove the body from the call to follow the standard. | Source: https://learn.microsoft.com/rest/api/loganalytics/workspaces/createorupdate
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist instructs enabling Monitoring and Telemetry, but the controls table has no row for that control. | Found: Checklist: Enable the Monitoring and Telemetry feature in the Feature management workspace. Table: Application Insights resource registry, telemetry types, and workspace daily ingestion cap. | Fix: Remove the At rollout bullet 'Enable the **Monitoring and Telemetry** feature in the **Feature management** workspace.' Keep the documented prerequisite in Scope; do not add a controls row.
- [supported, minor] Why it matters / cost: The emitted telemetry spend is charged through Azure rather than through Dynamics 365. | Found: This article describes the different ways that Azure Monitor charges for usage and how to evaluate charges on your Azure bill. | Fix: Add 'Azure Monitor cost and usage' at https://learn.microsoft.com/azure/azure-monitor/fundamentals/cost-usage to sources to support the statement that the charges appear on the Azure bill. | Source: https://learn.microsoft.com/azure/azure-monitor/fundamentals/cost-usage
-->
