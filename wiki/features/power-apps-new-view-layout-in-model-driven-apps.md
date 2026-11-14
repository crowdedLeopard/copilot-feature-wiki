---
title: "Power Apps: calendar and card layouts for views in model-driven apps"
slug: "power-apps-new-view-layout-in-model-driven-apps"
roadmapId: 575294
desk: "power-platform"
products: ["Power Apps"]
summary: "Makers can show model-driven app data as a calendar or a stack of cards instead of the default grid, configured in the app designer."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "December CY2026"
risk: "low"
cost: "none"
impact: "low"
defaultState: "admin-opt-in"
action: "none"
licensing:
  model: "included"
  notes: "No separate licence published. Part of model-driven apps."
audiences: ["maker","power-platform-admin","end-user"]
tags: ["power-apps","model-driven-apps","views","app-designer"]
sources:
  - title: "Microsoft 365 Roadmap item 575294"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=575294"
    kind: "roadmap"
  - title: "Understand model-driven app views"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/create-edit-views"
    kind: "learn"
videos: []
related: []
confidence: "low"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-11-11T00:51:09"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 575294."
version: 1
---

## What's changing

Makers can choose to display data as a calendar or a stack of cards instead of the default grid layout. Layouts are configured directly in the model-driven app designer, giving users other ways to visualise and work with their data.

The roadmap lists a Weekly channel, version 2612.2, a February 2027 target, Worldwide availability and a scope of users, enabled by admins or makers.

No Microsoft Learn page for these layouts was found at the time of review, so detail rests on the roadmap text.

## Why it matters

Layouts change how users scan and edit records, which can affect training and accessibility checks. Data and permissions are unchanged, so the main effort is app design review.

## Risk assessment

**Data exposure**
- No new data access; layouts display existing view data.

**Security & identity**
- Existing table and column security still applies.

**Autonomy & actions**
- None.

**Change & support**
- Different layouts may show fewer columns, so users may miss information shown in the grid.

## Cost and licensing

Not yet published. No additional licence or consumption is described in the roadmap entry.

## Scope

Model-driven apps in Worldwide (Standard Multi-Tenant). Enabled by makers or admins per app or view.

## Governance guidance

### Before rollout
- Review which views would suit a calendar or card layout.
- Check accessibility of the new layouts.

### At rollout
- Enable layouts for a pilot app first.
- Tell users what changed.

### After rollout
- Collect feedback from users.
- Revisit layout choices after the first release cycle.

## Admin controls

Configured by makers in the model-driven app designer. No tenant-level control is documented yet.

## Open questions

- Which tables and column types are supported.
- Whether admins can restrict the layouts.
- Any Learn documentation on configuration.

<!-- rationale
risk: Low. A presentation option for existing data, configured by makers within current security.
cost: None published. No licence or consumption change is described for the new layouts.
impact: Low. Affects makers and the users of apps where makers choose the layouts.
-->
