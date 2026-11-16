---
title: "Power Apps: calendar and card layouts for views in model-driven apps"
slug: "power-apps-new-view-layout-in-model-driven-apps"
roadmapId: 575294
topic: "power-platform"
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
    api: null
  - governs: "Tenant or environment switch for the calendar and card layouts"
    scope: "environment"
    ui: null
    api: null
    note: "Layouts are chosen by makers per view in the app designer."
confidence: "low"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:51:09"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 575294."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 36
  confirmed: 25
  unconfirmed: 7
  contradicted: 4
  attempts: 1
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

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Grid and view behaviour settings for an environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Grids and views <a href="https://learn.microsoft.com/power-platform/admin/settings-features#grids-and-views" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment switch for the calendar and card layouts</strong><br><small>Environment</small><br><small class="controls__note">Layouts are chosen by makers per view in the app designer.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

There is no admin control for the new layouts themselves; they arrive with the model-driven app runtime and makers opt views into them. The Grids and views environment settings govern related grid behaviour and are the nearest admin lever. `pac env update-settings` can set documented organization settings, but Learn names no setting for this feature.

## Open questions

- Which tables and column types are supported.
- Whether admins can restrict the layouts.
- Any Learn documentation on configuration.

<!-- rationale
risk: Low. A presentation option for existing data, configured by makers within current security.
cost: None published. No licence or consumption change is described for the new layouts.
impact: Low. Affects makers and the users of apps where makers choose the layouts.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] summary; What's changing / record: Makers can choose a calendar layout for their data. | Found: Makers can now choose to display their data as a calendar or a stack of cards instead of the default grid layout. | Fix: Attribute the planned capability to the roadmap in the summary and first paragraph: 'The roadmap plans calendar and card layouts that makers configure in the model-driven app designer.' Do not imply current availability while the item is In development.
- [contradicted, blocker] front matter: defaultState / default: The default state is admin-opt-in. | Found: Makers can configure these layouts directly in the model driven app designer | Fix: Set defaultState to user-opt-in: the standard includes maker-chosen designer capabilities in that value, and targeted searches found no documented separate admin gate for this new feature.
- [unsupported, blocker] front matter: licensing.model / licensing: The layouts are included in an existing licence. | Found: Searched: Power Apps new view layouts calendar stack cards model-driven app designer admin enable setting license; model-driven calendar layouts license. Read create-edit-views and model-driven app licensing excerpts; none establishes inclusion. | Fix: Set licensing.model to unknown and retain 'Not yet published' in Cost and licensing; neither the roadmap nor the Microsoft documentation found establishes inclusion.
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The cost rating is none despite licensing being unpublished. | Found: cost: "none"; Cost and licensing: "Not yet published."; rationale: "None published. No licence or consumption change is described for the new layouts." | Fix: Set cost to low for the app review, accessibility checking and communication effort identified by the page. Start the rationale 'Low.' and explicitly state that licensing is not yet published; the standard reserves none for documented inclusion.
- [contradicted, blocker] controls[0].api; Governance controls table / absence: Automation for the general environment grid and view settings is not documented. | Found: AdvancedColumnEditorEnabled ... Flag to indicate if the display column options on a view in model-driven apps is enabled ... LogicalName ... advancedcolumneditorenabled | Fix: Replace the broad API absence with documented automation for the relevant individual organization setting, or remove this general-control row. The writable advancedcolumneditorenabled setting and pac env update-settings are documented; cite this reference and https://learn.microsoft.com/power-platform/developer/cli/reference/env#pac-env-update-settings. Do not describe that setting as controlling the new layouts. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization#writable-columns-attributes
- [unsupported, major] controls[1].note; Scope; Governance controls prose / behaviour: The new layouts can be enabled independently per view. | Found: Searched: Power Apps new view layout; model-driven calendar card admin layout. Read create-edit-views and add-calendar-control excerpts. The roadmap specifies the app designer, not per-view granularity. | Fix: Replace 'per app or view', 'per view' and 'makers opt views into them' with 'configured by makers in the model-driven app designer, according to the roadmap'; add configuration granularity to Open questions.
- [unsupported, major] Why it matters / behaviour: The new layouts leave data unchanged. | Found: Searched: Power Apps model driven views calendar card layout security table column permissions. Read create-edit-views and model-driven app security documentation. None states that these new layouts leave data unchanged or describes their editing behaviour. | Fix: Remove 'Data ... unchanged' as a guarantee. Say 'The roadmap describes a presentation choice; detailed data-editing behaviour is not yet documented.'
- [unsupported, major] Why it matters; Risk assessment: Data exposure; rationale: risk / behaviour: The layouts introduce no new data access and only display existing view data. | Found: Searched: Power Apps model driven views calendar card layout security table column permissions. Read create-edit-views and share-model-driven-app; neither states a feature-specific no-new-access guarantee. | Fix: Frame this as analysis: 'The roadmap describes alternative presentation of model-driven app data, so we expect limited data-boundary change; detailed behaviour is not yet documented.' Remove the unconditional 'No new data access'.
- [supported, minor] Why it matters; Risk assessment: Security & identity; rationale: risk / applicability: Model-driven app table security continues to govern access to records. | Found: a security role contains privileges that define a set of actions that can be performed on tables within the app | Fix: Cite https://learn.microsoft.com/power-apps/maker/model-driven-apps/share-model-driven-app for the general model-driven app table-security statement; do not imply that this documents all new-layout behaviour. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/share-model-driven-app
- [supported, minor] Risk assessment: Security & identity / applicability: Existing column security applies to data accessed in the layouts. | Found: Column-level security configurations are organization-wide and apply to all data access requests. | Fix: Add https://learn.microsoft.com/power-platform/admin/field-level-security to sources for the general column-security statement. | Source: https://learn.microsoft.com/power-platform/admin/field-level-security
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The layouts introduce no autonomy or actions. | Found: Searched: Power Apps new view layout; Power Apps model driven views calendar card layout security table column permissions. Read create-edit-views and older calendar-control excerpts; none specifies the new layouts' action capabilities. | Fix: Replace 'None' with 'The roadmap describes no autonomous capability; available record actions are not yet documented.'
- [unsupported, major] Governance controls prose / behaviour: The layouts arrive with the model-driven app runtime. | Found: Searched: Power Apps new view layout; Power Apps new view layouts calendar stack cards model-driven app designer admin enable setting license. Read create-edit-views and settings-features; neither documents this new feature's runtime delivery mechanism. | Fix: Remove 'they arrive with the model-driven app runtime'; retain only the roadmap's documented maker configuration in the app designer.
- [unsupported, blocker] Governance controls prose / absence: There is no admin control for the new layouts themselves. | Found: Searched: model-driven calendar card admin layout; Power Apps new view layouts calendar stack cards model-driven app designer admin enable setting license. Read settings-features and create-edit-views. No source states there is no admin control; absence of documentation is narrower. | Fix: Replace 'There is no admin control for the new layouts themselves' with 'No separate tenant or environment switch for the new layouts was found in Microsoft documentation as of November 2026.'
- [supported, minor] Governance controls prose / command: pac env update-settings can update documented organization settings. | Found: The pac env list-settings command returns all the columns from the first and only row of the organization entity type. Use pac env update-settings to change those settings. | Fix: Add https://learn.microsoft.com/power-platform/developer/cli/reference/env#pac-env-update-settings to sources and retain the qualification that this does not establish a setting for the new layouts. | Source: https://learn.microsoft.com/power-platform/developer/cli/reference/env#pac-env-update-settings
- [contradicted, minor] front matter: action; Governance guidance / consistency: Action none is assigned although this optional maker capability requires a fit decision. | Found: action: "none"; 'Review which views would suit a calendar or card layout.'; 'Enable layouts for a pilot app first.' | Fix: Set action to review: the standard assigns review to optional capabilities that change nothing until an admin or maker chooses them, while none means nothing to configure or decide.
-->
