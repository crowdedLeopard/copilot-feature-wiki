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
action: "none"
licensing:
  model: "unknown"
  notes: "Not yet published."
audiences: ["power-platform-admin","service-owner","maker"]
tags: ["power-pages","monitor-hub","telemetry","performance","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap item 577859"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577859"
    kind: "roadmap"
  - title: "Manage website security from the Power Platform admin center"
    url: "https://learn.microsoft.com/power-pages/admin/admin-center-security"
    kind: "learn"
  - title: "Site traffic analytics (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-pages/admin/admin-center-analytics"
    kind: "learn"
  - title: "Diagnostic logs for a site (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-pages/admin/view-portal-error-log#enable-diagnostic-logging"
    kind: "learn"
videos: []
related: ["managed-environments"]
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
  - governs: "Enabling or scoping Power Pages metrics in the monitor hub"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet on Learn."
confidence: "low"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577859; roadmap text only."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 40
  unconfirmed: 4
  contradicted: 1
  attempts: 1
---

## What's changing

Power Pages is being integrated into the monitor hub in the Power Platform admin center. Site owners, makers and administrators can see performance and usage insights for their sites in one place.

The roadmap lists four metrics: session count, average session duration, page load time (P75) and error rate, defined as the share of requests where pages become unresponsive or return component-level errors. Trend visualisation and downloadable detailed reports are also listed.

The roadmap shows a preview from October CY2026 and general availability in January CY2027, for Worldwide only. I found no Learn page for this capability yet.

## Why it matters

Today performance and error data for Power Pages sites is spread across the admin center, Application Insights and diagnostic logs. A single view helps service owners spot degraded sites and judge whether capacity or design changes are needed.

Reporting on error rate and load time can also support service-level conversations with business owners.

## Risk assessment

**Data exposure**
- Telemetry covers aggregate usage and performance. Which identifiers appear in downloadable reports is not yet published.

**Security & identity**
- Access presumably follows admin center roles; the exact role requirements are not published.

**Autonomy & actions**
- None. The feature observes sites and takes no actions.

**Change & support**
- Metric definitions may differ from existing Application Insights figures, so expect questions from owners.

## Cost and licensing

No licence or meter is published. Treat it as included until Microsoft states otherwise. The cost is admin time. Not yet published: any retention limits or paid export options.

## Scope

Site owners, makers and Power Platform administrators. Roadmap cloud: Worldwide (Standard Multi-Tenant) only; government clouds are not listed.

## Governance guidance

### Before rollout
- [ ] Decide which roles should see site metrics and how long to retain downloaded reports.
- [ ] List the sites that need service-level targets.

### At rollout
- [ ] Review the monitor hub once the preview appears in your tenant.
- [ ] Compare the figures with any existing Application Insights data.

### After rollout
- [ ] Set a regular review of error rate and page load time.
- [ ] Feed findings into site backlog and capacity planning.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Site traffic analytics</strong><br><small>Tenant</small><br><small class="controls__note">Dynamics 365 admin, Power Platform admin, or System Administrator for their environments. Public sites only.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Products › Power Pages › Analytics (preview) <a href="https://learn.microsoft.com/power-pages/admin/admin-center-analytics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Diagnostic logs for a site</strong><br><small>Site</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Resources › Power Pages sites › site › Site Actions › Enable diagnostics logs <a href="https://learn.microsoft.com/power-pages/admin/view-portal-error-log#enable-diagnostic-logging" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Enabling or scoping Power Pages metrics in the monitor hub</strong><br><small>Tenant</small><br><small class="controls__note">Not yet on Learn.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The monitor hub is the [Monitor area](https://learn.microsoft.com/power-platform/admin/monitoring/monitoring-overview) of the Power Platform admin center, which aggregates runtime logs into health metrics for admins and makers; it is a reporting surface, so the governance question is who holds the admin roles that can open it. Traffic analytics exclude private sites. Capacity and licensing views sit under [capacity management](https://learn.microsoft.com/power-pages/admin/capacity-management).

## Open questions

- Which admin roles can see the metrics?
- How long is data retained, and what do the downloadable reports contain?
- Will the metrics reach GCC, GCC High and DoD?

<!-- rationale
risk: Low. It adds read-only telemetry for existing sites in the admin center, with no new end-user behaviour.
cost: Low. No licence is published; the main cost is admin time to review the metrics. Confirm any storage or data export costs when details appear.
impact: Low. Site owners, makers and administrators see the insights; site visitors do not.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: targetDate; What's changing / record: The roadmap gives January CY2027 for general availability. | Found: "targetDate": "January CY2027", "status": "In development" | Fix: In What's changing, say 'general availability targeted for January CY2027', rather than 'general availability in January CY2027'.
- [supported, minor] front matter: previewDate; What's changing / record: The roadmap gives October CY2026 for preview. | Found: "previewDate": "October CY2026", "status": "In development" | Fix: Replace 'a preview from October CY2026' with 'a preview targeted for October CY2026'; the record still says In development and does not establish that preview has started.
- [unsupported, blocker] Cost and licensing: Treat it as included until Microsoft states otherwise / licensing: Administrators can treat the monitor hub integration as included until Microsoft states otherwise. | Found: Searched: Power Pages monitor hub tenant analytics enable disable settings API PowerShell licensing price; "Power Pages" "monitor hub" "licensing" "retention". Read monitoring-overview, capacity-management and licensing FAQ excerpts; none establishes inclusion for this feature. | Fix: Remove 'Treat it as included until Microsoft states otherwise.' Replace it with 'Licensing for this integration is not yet published; do not assume it is included.' Keep licensing.model as unknown and the low cost rationale limited to known administrative work.
- [unsupported, major] Risk assessment: Autonomy & actions; rationale: risk / behaviour: The integration is read-only and takes no actions on sites. | Found: Searched: "Power Pages" "monitor hub" "read-only" actions. Opened monitoring-overview and read the roadmap. The roadmap lists reporting capabilities but does not state an absolute read-only or no-actions guarantee for the integration. | Fix: Replace the categorical statement with 'The roadmap describes metrics, trends and report downloads; it does not describe autonomous site actions.' In the risk rationale, describe the planned reporting scope instead of asserting read-only operation.
- [unsupported, major] Why it matters: first paragraph / behaviour: Existing Power Pages performance and error data is spread across the admin center, Application Insights and diagnostic logs. | Found: Searched: Power Pages Application Insights performance telemetry page load error monitoring; "Power Pages" "Application Insights" integration monitoring site performance. Opened overview-integration-application-insights, admin-center-analytics and view-portal-error-log; no source states this topolog | Fix: Replace with 'Existing Learn guidance documents site traffic analytics in the admin center and website error logs sent to Azure Blob storage.' Cite admin-center-analytics and view-portal-error-log. Do not present the general Dataverse Application Insights integration as Power Pages-specific evidence.
- [contradicted, minor] front matter: action; Governance guidance / consistency: The action rating none is consistent with the briefing's recommendation that administrators decide how to use and govern the new reporting capability. | Found: action: "none"; Before rollout: "Decide which roles should see site metrics and how long to retain downloaded reports." The standard defines none as nothing to configure or decide, and review as checking fit for an optional capability or new control. | Fix: Set action to review: this is a new reporting capability whose default is unknown, with no sourced claim that existing behaviour changes, and the checklist asks administrators to make decisions about its use.
- [unsupported, minor] rationale: risk; rationale: impact / behaviour: The integration introduces no new end-user behaviour and site visitors are unaffected. | Found: Searched: "Power Pages" "monitor hub" "read-only" actions; "Power Pages" "monitor hub" "reports" "identifiers". Read the roadmap and monitoring-overview; neither states that collection for this integration has no effects on visitors or end-user behaviour. | Fix: Remove the categorical visitor and end-user assurances. State instead that the roadmap describes an admin-center reporting capability for site owners, makers and administrators, and rate impact on that documented audience.
-->
