---
title: "Power Apps: row summaries in model-driven apps reach GCC and GCC High"
slug: "power-apps-model-driven-apps-use-row-summaries-in-us-government-clouds"
roadmapId: 576279
topic: "power-platform"
products: ["Power Apps"]
summary: "Microsoft plans AI-generated row summaries for model-driven apps in GCC and GCC High, targeting December CY2026 in the weekly release channel from version 2612.2."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn: Power Apps premium for model-driven apps; Dynamics 365 enterprise or premium for Dynamics 365 apps. Government terms may differ. Row summaries rely on AI Builder to execute summary prompts; AI Builder features in Power Apps consume AI Builder credits or Copilot Credits."
audiences: ["power-platform-admin","compliance","maker","end-user"]
tags: ["power-apps","model-driven-apps","row-summary","copilot","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 576279"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576279"
    kind: "roadmap"
  - title: "Use row summaries in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/record-summaries"
    kind: "learn"
  - title: "Configure a row summary for a model-driven app"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary"
    kind: "learn"
  - title: "FAQ about row summaries in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/maker/common/faq-record-summaries"
    kind: "learn"
  - title: "Track, manage, and scale Copilot adoption in the Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub"
    kind: "learn"
  - title: "FAQ for Copilot data security and privacy for Dynamics 365 and Power Platform"
    url: "https://learn.microsoft.com/power-platform/faqs-copilot-data-security-privacy"
    kind: "learn"
  - title: "Use AI form fill assistance feature in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/form-filling-assistance"
    kind: "learn"
  - title: "FAQ for prompts"
    url: "https://learn.microsoft.com/ai-builder/faqs-text-generation"
    kind: "learn"
  - title: "Overview of licensing (AI Builder)"
    url: "https://learn.microsoft.com/ai-builder/administer-licensing"
    kind: "learn"
  - title: "Power Apps US Government"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-us-government"
    kind: "learn"
  - title: "Environment Management Settings - List Environment Management Settings"
    url: "https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/list-environment-management-settings"
    kind: "docs"
  - title: "Data Grid modern control in canvas apps"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/controls/modern-controls/modern-control-data-grid"
    kind: "learn"
  - title: "Row summaries per environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-apps/user/record-summaries#admin-control"
    kind: "learn"
  - title: "Row summaries per environment (Power Platform API)"
    url: "https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/update-environment-management-settings"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Row summaries per environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Summary > Row summaries > environment > Edit setting"
      docs: "https://learn.microsoft.com/power-apps/user/record-summaries#admin-control"
    api:
      kind: "power-platform-api"
      call: "PATCH /environmentmanagement/environments/{environmentId}/settings?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/update-environment-management-settings"
    note: "The request body sets powerApps_EnableFormInsights, the shared AI insight cards setting."
  - governs: "Summary prompt and whether a table shows a summary"
    scope: "maker"
    ui:
      surface: "Power Apps (maker)"
      path: "Tables > table > Customizations > Row summary > Show row summary"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary"
    api: null
    note: "Maker-side; applies to all main forms and views for the table. Show row summary hides only custom summaries configured through this experience, not Microsoft-provided or other-app summaries."
  - governs: "Switch specific to GCC and GCC High"
    scope: "tenant"
    ui: null
    api: null
    note: "Availability follows the cloud; the same environment setting applies."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-27"
roadmapModified: "2026-11-19T23:44:17"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576279 with Learn admin control details."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-17"
    note: "Corrected after the check: maker control scope and note, Managed Environments allow/exclude control, API and usage-report wording, AI insight cards removal wording, and default state now unknown."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after the check: cost is now variable and licensing mixed, because row summaries run on AI Builder, which consumes AI Builder credits or Copilot Credits."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Corrected after the check: target date and version now follow the roadmap record (December CY2026, 2612.2), the summary says the date is a target, and the table-wide maker scope is qualified by the FAQ."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected after the check: the row summaries environment setting now gives its Power Platform API call (powerApps_EnableFormInsights), the maker path ends at Show row summary, and the rollout step gives the full admin path."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 58 statements confirmed"
version: 6
verification:
  status: "verified"
  date: "2026-11-27"
  version: 6
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 58
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "8ca0d482790ef89b325d443076dcf430"
---

## What's changing

Row summaries give users an AI-generated overview of a record in a model-driven app. The roadmap says the feature already available to commercial customers is expanding to supported US Government clouds, GCC and GCC High, with applicable compliance and data-boundary requirements met.

Per Learn, summaries appear in an Insights bar on main forms and through a Summary action on view pages. Makers write a prompt per table that names the columns to include.

The roadmap targets general availability for December CY2026, weekly channel, version 2612.2. Admins and makers enable and configure the feature.

## Why it matters

The roadmap describes bringing the commercial row summary experience to supported government environments. Once available, users may expect summaries immediately, and makers may configure prompts over sensitive columns.

Service owners should confirm that the compliance boundary Microsoft describes matches their own authorisation and assurance requirements.

## Risk assessment

**Data exposure**
- Prompts decide which columns are summarised. Over-broad prompts can surface sensitive values in a new place.

**Security & identity**
- Microsoft's Power Platform Copilot FAQ says Copilot adheres to existing data permissions and policies, and its responses are based only on data that the user personally can access. Learn documents a column-security limitation for form fill assistance, not for row summaries, so check behaviour for secured columns.

**Autonomy & actions**
- The feature reads record data and generates a natural-language summary.

**Change & support**
- Summaries may be wrong. Provide guidance for users and a feedback path.

## Cost and licensing

Learn states that users need a Power Apps premium licence for model-driven apps, or a Dynamics 365 enterprise or premium licence for Dynamics 365 apps, and that the feature is hidden without one. Microsoft says this licence enforcement rolls out gradually following general availability. Usage may be subject to service limits.

Row summaries rely on AI Builder to execute summary prompts; AI Builder features in Power Apps consume AI Builder credits or Copilot Credits ([FAQ about row summaries](https://learn.microsoft.com/power-apps/maker/common/faq-record-summaries), [AI Builder licensing](https://learn.microsoft.com/ai-builder/administer-licensing)). Government-specific pricing is not yet published.

## Scope

Model-driven apps in GCC and GCC High. DoD is not listed. Weekly release channel, version 2612.2.

The default state is not stated for this government rollout, and Learn's statements differ. The row summaries page says a Power Platform administrator must enable Row summaries for the environment, while the row summaries FAQ says the AI insight cards environment setting that enables row summaries is on by default and that makers still need to configure and turn on summary prompts on individual tables.

## Governance guidance

### Before rollout
- Confirm the data boundary statement meets your authorisation requirements.
- Identify tables where summaries would be sensitive.
- Check that users hold the right licences.

### At rollout
- Enable Row summaries for a pilot environment in Power Platform admin center > Copilot > Settings > Power Apps > Summary > Row summaries > environment > Edit setting.
- Review maker prompts before applying them to main forms and views.

### After rollout
- Review user feedback on accuracy.
- Revisit prompts when columns or security roles change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Row summaries per environment</strong><br><small>Environment</small><br><small class="controls__note">The request body sets powerApps_EnableFormInsights, the shared AI insight cards setting.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Summary › Row summaries › environment › Edit setting <a href="https://learn.microsoft.com/power-apps/user/record-summaries#admin-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PATCH /environmentmanagement/environments/{environmentId}/settings?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/update-environment-management-settings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Summary prompt and whether a table shows a summary</strong><br><small>Maker</small><br><small class="controls__note">Maker-side; applies to all main forms and views for the table. Show row summary hides only custom summaries configured through this experience, not Microsoft-provided or other-app summaries.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Tables › table › Customizations › Row summary › Show row summary <a href="https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch specific to GCC and GCC High</strong><br><small>Tenant</small><br><small class="controls__note">Availability follows the cloud; the same environment setting applies.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The environment setting is the primary environment-level availability control for row summaries. Learn also describes a preview control, only for environments activated for Managed Environments, that lets admins allow specific users or allow all users except an exclusion list. The page lists Power Apps Row summary among the features that adhere to it, and does not say whether it is available in GCC or GCC High.

The older AI insight cards settings location will be removed in a future release; it currently exposes the same control. Use the Copilot settings location in runbooks.

Makers decide the prompt and the tables that show a summary. They can hide custom row summaries configured through this experience for sensitive tables; this does not hide Microsoft-provided summaries or summaries configured through another app, which require their own controls. The configuration guide describes table-wide scope; the row-summary FAQ instead describes configuring and hiding summaries on specific forms (https://learn.microsoft.com/power-apps/maker/common/faq-record-summaries). A row-summary-specific usage report is not yet documented as of November 2026.

## Open questions

- Which government environments will receive the feature first?
- Are the underlying models the same as in commercial clouds?
- Will DoD follow?

<!-- rationale
risk: Medium. It sends record data to a generative AI service in regulated clouds, so data boundary and compliance assessments need an update.
cost: Variable. Row summaries rely on AI Builder to execute prompts; AI Builder features in Power Apps consume AI Builder credits or Copilot Credits.
impact: Medium. Users of enabled model-driven apps in government environments see summaries on forms and views.
-->
