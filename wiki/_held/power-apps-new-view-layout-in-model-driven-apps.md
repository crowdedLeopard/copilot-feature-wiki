---
title: "Power Apps: calendar and card layouts for views in model-driven apps"
slug: "power-apps-new-view-layout-in-model-driven-apps"
roadmapId: 575294
topic: "power-platform"
products: ["Power Apps"]
summary: "The roadmap plans calendar and card layouts, configured by makers in the model-driven app designer, as alternatives to the default grid. Not yet available."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "December CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap nor Microsoft Learn states a licence or meter for the new layouts."
audiences: ["maker","power-platform-admin","end-user"]
tags: ["power-apps","model-driven-apps","views","app-designer"]
sources:
  - title: "Microsoft 365 Roadmap 575294"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=575294"
    kind: "roadmap"
  - title: "Understand model-driven app views"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/create-edit-views"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "pac env"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/env#pac-env-update-settings"
    kind: "learn"
  - title: "Organization table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization#writable-columns-attributes"
    kind: "learn"
  - title: "Share a model-driven app"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/share-model-driven-app"
    kind: "learn"
  - title: "Column-level security to control access"
    url: "https://learn.microsoft.com/power-platform/admin/field-level-security"
    kind: "learn"
  - title: "Grid and view behaviour settings for an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features#grids-and-views"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Grid and view behaviour settings for an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Grids and views"
      docs: "https://learn.microsoft.com/power-platform/admin/settings-features#grids-and-views"
    api:
      kind: "pac-cli"
      call: "pac env update-settings --name advancedcolumneditorenabled --value <true|false>"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/env#pac-env-update-settings"
    note: "The API side is one writable organization column for view column options; it is not documented as controlling the new layouts."
  - governs: "Tenant or environment switch for the calendar and card layouts"
    scope: "environment"
    ui: null
    api: null
    note: "The roadmap says makers configure the layouts in the model-driven app designer."
confidence: "low"
created: "2026-11-14"
updated: "2026-11-17"
roadmapModified: "2026-11-11T00:51:09"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 575294."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-17"
    note: "Correction: default state set to user-opt-in, licensing to unknown and cost to low; behaviour claims narrowed to the roadmap; API side added to the first control row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 28 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 32 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-19"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 32
  confirmed: 31
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "4c63c2ae16686205665499242ee4c21a"
---

## What's changing

The roadmap plans calendar and card layouts that makers configure in the model-driven app designer. Makers would be able to display data as a calendar or a stack of cards instead of the default grid layout, giving users other ways to visualise and work with their data.

The roadmap lists a Weekly channel, version 2612.2, a February 2027 target, Worldwide availability and a scope of users, enabled by admins or makers.

No Microsoft Learn page for these layouts was found at the time of review, so detail rests on the roadmap text.

## Why it matters

Layouts could change how users scan records, which can affect training and accessibility checks. The roadmap describes a presentation choice; detailed data-editing behaviour is not yet documented, so the main effort is likely to be app design review.

## Risk assessment

**Data exposure**
- The roadmap describes alternative presentation of model-driven app data, so we expect limited data-boundary change; detailed behaviour is not yet documented.

**Security & identity**
- Existing table and column security still applies.

**Autonomy & actions**
- The roadmap describes no autonomous capability; available record actions are not yet documented.

**Change & support**
- Different layouts may show fewer columns, so users may miss information shown in the grid.

## Cost and licensing

Not yet published. No additional licence or consumption is described in the roadmap entry.

## Scope

Model-driven apps in Worldwide (Standard Multi-Tenant). The roadmap lists the feature scope as users, enabled by admins or makers, and says makers configure the layouts in the model-driven app designer.

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

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Grid and view behaviour settings for an environment</strong><br><small>Environment</small><br><small class="controls__note">The API side is one writable organization column for view column options; it is not documented as controlling the new layouts.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Grids and views <a href="https://learn.microsoft.com/power-platform/admin/settings-features#grids-and-views" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac env update-settings --name advancedcolumneditorenabled --value &lt;true|false&gt;</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/env#pac-env-update-settings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment switch for the calendar and card layouts</strong><br><small>Environment</small><br><small class="controls__note">The roadmap says makers configure the layouts in the model-driven app designer.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No separate tenant or environment switch for the new layouts was found in Microsoft documentation as of November 2026. The Grids and views environment settings govern related grid behaviour and are the nearest admin lever. `pac env update-settings` changes columns of the organization table; the first row's API side uses the documented `advancedcolumneditorenabled` column (display column options on a view), which Learn does not tie to the new layouts.

## Open questions

- Which tables and column types are supported.
- Whether admins can restrict the layouts.
- At what level (app, view or table) makers configure the layouts.
- Any Learn documentation on configuration.

<!-- rationale
risk: Low. The roadmap describes a presentation choice that makers configure; detailed behaviour is not yet documented, so we expect limited change to data boundaries.
cost: Low. The only cost the sources show is app review, accessibility checking and communication effort; licensing for the new layouts is not yet published.
impact: Low. Affects makers and the users of apps where makers choose the layouts.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: Licensing is unknown because neither the roadmap nor Microsoft Learn states a licence for the new layouts. | Found: Model-driven apps use Dataverse and are premium apps by default. Every user who runs a model-driven app needs a license that provides Power Apps premium use rights. | Fix: Set licensing.model to "included". Replace the licensing notes and the opening "Not yet published" in Cost and licensing with: "Model-driven apps require a licence providing Power Apps premium use rights. Microsoft lists Power Apps Premium, Power Apps per app plans and the Power Apps per app pay-as-you-go meter as general entitlement options; qualifying Dynamics 365 rights depend on context. Requirements specific to the new layouts are not yet published." Cite https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq. In the cost rationale, replace "licensing for the new layouts is not yet published" with "requirements specific to the new layouts are not yet published". Keep cost low: the briefing rates the change, not the existing app entitlement. | Source: https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq#model-driven-apps
-->
