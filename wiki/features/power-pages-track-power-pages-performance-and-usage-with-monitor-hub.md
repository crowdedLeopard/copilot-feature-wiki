---
title: "Power Pages: performance and usage metrics in the Power Platform admin center monitor hub"
slug: "power-pages-track-power-pages-performance-and-usage-with-monitor-hub"
roadmapId: 577859
desk: "power-platform"
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
videos: []
related: ["managed-environments"]
confidence: "low"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577859; roadmap text only."
version: 1
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

## Admin controls

The monitor hub is in the Power Platform admin center. Controls for enabling or scoping Power Pages metrics are not yet published. Existing site-level controls are under Manage > Power Pages.

## Open questions

- Which admin roles can see the metrics?
- How long is data retained, and what do the downloadable reports contain?
- Will the metrics reach GCC, GCC High and DoD?

<!-- rationale
risk: Low. It adds read-only telemetry for existing sites in the admin center, with no new end-user behaviour.
cost: Low. No licence is published; the main cost is admin time to review the metrics. Confirm any storage or data export costs when details appear.
impact: Low. Site owners, makers and administrators see the insights; site visitors do not.
-->
