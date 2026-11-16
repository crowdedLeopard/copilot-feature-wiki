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
  notes: "Azure Application Insights ingestion is metered by Azure Monitor. Exact charges depend on your workspace configuration."
audiences: ["power-platform-admin","finops","maker","service-owner"]
tags: ["power-apps","generative-pages","application-insights","telemetry","monitoring","data-export","gcc","gcc-high"]
sources:
  - title: "Generate a page using natural language"
    url: "https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/generative-pages"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 576282"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576282"
    kind: "roadmap"
videos: []
related: ["power-apps-use-power-platform-connectors-in-generative-pages","power-pages-administration-and-governance-configure-site-analytics-and-server-logging","power-pages-track-power-pages-performance-and-usage-with-monitor-hub"]
confidence: "high"
created: "2026-11-15"
updated: "2026-11-15"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-15"
    note: "New briefing: out-of-the-box Application Insights telemetry for generative pages, in development."
version: 1
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
- Access to the data follows Azure role-based access on the Application Insights resource.

**Autonomy & actions**
- None. The feature only observes activity.

**Change & support**
- Preview feature; behaviour may differ between environments while rolling out.

## Cost and licensing

No extra Power Apps licence or credit is stated. Application Insights ingestion and retention are charged by Azure Monitor against the subscription that hosts the resource. Estimate volume from page loads and data operations per day. Specific guidance for generative pages is not yet published.

## Scope

Published generative pages in model-driven apps, in environments that meet the Application Insights data export requirements. Worldwide, GCC and GCC High per the roadmap. Release channel is shown as Weekly, version 2608.5.

## Governance guidance

### Before rollout
- [ ] Confirm the environment meets the Application Insights data export requirements.
- [ ] Agree who owns the Application Insights resource and its budget.
- [ ] Set retention and access for the telemetry.

### At rollout
- [ ] Enable data export in the Power Platform admin center for chosen environments.
- [ ] Tell support teams which tables hold generative page data.

### After rollout
- [ ] Review ingestion volume and cost monthly.
- [ ] Build alerts on exceptions for critical pages.

## Admin controls

Configure data export under the Power Platform admin center for the environment (Export data to Application Insights). There is no per-page switch documented; telemetry follows the environment-level export. Learn also describes model-driven app telemetry events and how to query them.

## Open questions

- Can telemetry be disabled for individual pages while environment export stays on?
- What happens in sovereign clouds where Application Insights export differs?
- Will correlation with Dataverse and plug-in traces be added?

<!-- rationale
risk: Low. It is an observability feature that depends on an admin configuring Application Insights export; telemetry contains page and operation metadata.
cost: Variable. Application Insights ingestion and retention are billed through Azure Monitor, so volume depends on page traffic. The generative pages feature itself needs no extra credits.
impact: Low. Admins and developers see the telemetry; end users notice nothing.
-->
