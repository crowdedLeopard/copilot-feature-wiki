---
title: "Power Pages: performance and usage metrics in the Power Platform admin center monitor hub"
slug: "power-pages-track-power-pages-performance-and-usage-with-monitor-hub"
roadmapId: 577859
topic: "power-platform"
products: ["Power Pages"]
summary: "Power Pages joins the monitor hub with session count, session duration, page load time and error rate, plus trends and downloadable reports."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "October CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published."
audiences: ["power-platform-admin","service-owner","maker"]
tags: ["power-pages","monitor-hub","telemetry","performance","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 577859"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577859"
    kind: "roadmap"
  - title: "Manage website security from the Power Platform admin center"
    url: "https://learn.microsoft.com/power-pages/admin/admin-center-security"
    kind: "learn"
  - title: "Monitor traffic to your websites"
    url: "https://learn.microsoft.com/power-pages/admin/admin-center-analytics"
    kind: "learn"
  - title: "View website error logs"
    url: "https://learn.microsoft.com/power-pages/admin/view-portal-error-log#enable-diagnostic-logging"
    kind: "learn"
  - title: "Monitor the health of your resources"
    url: "https://learn.microsoft.com/power-platform/admin/monitoring/monitoring-overview"
    kind: "learn"
  - title: "Tenant-level analytics"
    url: "https://learn.microsoft.com/power-platform/admin/tenant-level-analytics"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Site traffic analytics"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Products > Power Pages > Analytics (preview)"
      docs: "https://learn.microsoft.com/power-pages/admin/admin-center-analytics"
    api: null
    note: "Dynamics 365 admin, Power Platform admin, or System Administrator for their environments. Public sites only."
  - governs: "Diagnostic logs for a site"
    scope: "site"
    ui:
      surface: "Power Platform admin center"
      path: "Resources > Power Pages sites > site > Site Actions > Enable diagnostics logs"
      docs: "https://learn.microsoft.com/power-pages/admin/view-portal-error-log#enable-diagnostic-logging"
    api: null
  - governs: "Power Pages-specific enablement or scoping switch in Monitor"
    scope: "tenant"
    ui: null
    api: null
    note: "No Power Pages-specific switch is documented. Monitor generally requires tenant-level analytics to be enabled."
confidence: "low"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577859; roadmap text only."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected after the check: removed the assumption that the feature is included in existing licences, replaced the read-only and no-visitor-effect claims and the claim about where data sits today with what the roadmap and Learn state, used 'targeted' for dates, and set action to review."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 41 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-16"
    note: "Corrected after the check: added Monitor's documented admin roles, seven-day log and 28-day metric retention, and the tenant-level analytics prerequisite."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 45 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-16"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 45
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "6ef83980384099ac8975bbb3276230cb"
---

## What's changing

Power Pages is being integrated into the monitor hub in the Power Platform admin center. Site owners, makers and administrators can see performance and usage insights for their sites in one place.

The roadmap lists four metrics: session count, average session duration, page load time (P75) and error rate, defined as the share of requests where pages become unresponsive or return component-level errors. Trend visualisation and downloadable detailed reports are also listed.

The roadmap shows a preview targeted for October CY2026 and general availability targeted for January CY2027, for Worldwide only. I found no Learn page for this capability yet.

## Why it matters

Existing Learn guidance documents site traffic analytics in the admin center and website error logs sent to Azure Blob storage. A single view helps service owners spot degraded sites and judge whether capacity or design changes are needed.

Reporting on error rate and load time can also support service-level conversations with business owners.

## Risk assessment

**Data exposure**
- Telemetry covers aggregate usage and performance. Which identifiers appear in downloadable reports is not yet published.

**Security & identity**
- Monitor documentation gives tenant-wide admin access to Power Platform service and Dynamics 365 admins. Viewing resource names requires the environment system administrator role. Any additional Power Pages-specific role requirements are not yet published.

**Autonomy & actions**
- The roadmap describes metrics, trends and report downloads; it does not describe autonomous site actions.

**Change & support**
- Metric definitions may differ from existing Application Insights figures, so expect questions from owners.

## Cost and licensing

No licence or meter is published. Licensing for this integration is not yet published; do not assume it is included. The cost is admin time. Monitor documentation states that event logs are available for up to seven days and metrics for up to 28 days; any Power Pages-specific differences are not yet published. Not yet published: any paid export options.

## Scope

Site owners, makers and Power Platform administrators. Roadmap cloud: Worldwide (Standard Multi-Tenant) only; government clouds are not listed.

## Governance guidance

### Before rollout
- Decide which roles should see site metrics and how long to retain downloaded reports.
- List the sites that need service-level targets.

### At rollout
- Review the monitor hub once the preview appears in your tenant.
- Compare the figures with any existing Application Insights data.

### After rollout
- Set a regular review of error rate and page load time.
- Feed findings into site backlog and capacity planning.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Site traffic analytics</strong><br><small>Tenant</small><br><small class="controls__note">Dynamics 365 admin, Power Platform admin, or System Administrator for their environments. Public sites only.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Products › Power Pages › Analytics (preview) <a href="https://learn.microsoft.com/power-pages/admin/admin-center-analytics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Diagnostic logs for a site</strong><br><small>Site</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Resources › Power Pages sites › site › Site Actions › Enable diagnostics logs <a href="https://learn.microsoft.com/power-pages/admin/view-portal-error-log#enable-diagnostic-logging" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Power Pages-specific enablement or scoping switch in Monitor</strong><br><small>Tenant</small><br><small class="controls__note">No Power Pages-specific switch is documented. Monitor generally requires tenant-level analytics to be enabled.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No Power Pages-specific switch is documented. [Monitor](https://learn.microsoft.com/power-platform/admin/monitoring/monitoring-overview) generally requires tenant-level analytics to be enabled; the documented general path is Power Platform admin center > Manage > Tenant settings > Analytics > Tenant-level analytics > Enable > Save, on the [tenant-level analytics](https://learn.microsoft.com/power-platform/admin/tenant-level-analytics) page.

The monitor hub is the [Monitor area](https://learn.microsoft.com/power-platform/admin/monitoring/monitoring-overview) of the Power Platform admin center, which aggregates runtime logs into health metrics for admins and makers; it is a reporting surface, so the governance question is who holds the admin roles that can open it. Traffic analytics exclude private sites. Capacity and licensing views sit under [capacity management](https://learn.microsoft.com/power-pages/admin/capacity-management).

## Open questions

- Which additional Power Pages-specific role requirements, beyond those in the Monitor documentation, apply to the metrics?
- Do any Power Pages-specific differences apply to the seven-day event log and 28-day metric retention in Monitor, and what do the downloadable reports contain?
- Will the metrics reach GCC, GCC High and DoD?

<!-- rationale
risk: Low. The roadmap describes metrics, trends and report downloads for existing sites in the admin center; it does not describe autonomous site actions.
cost: Low. Licensing is not yet published; the only known cost is admin time to review the metrics. Confirm any storage or data export costs when details appear.
impact: Low. The roadmap describes an admin-center reporting capability for site owners, makers and administrators.
-->

<!-- verifier-findings (2026-11-16, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing; Open questions / behaviour: General Monitor documentation states that metrics are available for up to 28 days. | Found: Metrics are available for only up to 28 days. | Fix: After the retention sentence, add: 'Microsoft's draft export documentation instead describes a 30-day window; its API contract still requires final release validation (https://learn.microsoft.com/power-platform/admin/monitoring/monitor-data-export).' | Source: https://learn.microsoft.com/power-platform/admin/monitoring/monitoring-overview
-->
