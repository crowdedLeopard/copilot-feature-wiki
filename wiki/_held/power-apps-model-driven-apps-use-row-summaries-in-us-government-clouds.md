---
title: "Power Apps: row summaries in model-driven apps reach GCC and GCC High"
slug: "power-apps-model-driven-apps-use-row-summaries-in-us-government-clouds"
roadmapId: 576279
topic: "power-platform"
products: ["Power Apps"]
summary: "AI-generated row summaries become available in model-driven apps in GCC and GCC High, in the weekly release channel from version 2611.1."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "Learn: Power Apps premium for model-driven apps; Dynamics 365 enterprise or premium for Dynamics 365 apps. Government terms may differ."
audiences: ["power-platform-admin","compliance","maker","end-user"]
tags: ["power-apps","model-driven-apps","row-summary","copilot","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap item 576279"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576279"
    kind: "roadmap"
  - title: "Use row summaries in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/record-summaries"
    kind: "learn"
  - title: "Configure a row summary for a model-driven app"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary"
    kind: "learn"
  - title: "Row summaries per environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-apps/user/record-summaries#admin-control"
    kind: "learn"
videos: []
related: ["power-apps-form-fill-assistance-using-m365-files-in-model-driven-apps","m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u","managed-environments"]
controls:
  - governs: "Row summaries per environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Summary > Row summaries > environment > Edit setting"
      docs: "https://learn.microsoft.com/power-apps/user/record-summaries#admin-control"
    api: null
  - governs: "Summary prompt and whether a table shows a summary"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Tables > table > Customizations > Row summary"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary"
    api: null
    note: "Maker-side. Show row summary hides the card for a table."
  - governs: "Switch specific to GCC and GCC High"
    scope: "tenant"
    ui: null
    api: null
    note: "Availability follows the cloud; the same environment setting applies."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-23T23:10:38"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576279 with Learn admin control details."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 41
  confirmed: 33
  unconfirmed: 4
  contradicted: 4
  attempts: 1
---

## What's changing

Row summaries give users an AI-generated overview of a record in a model-driven app. The roadmap says the feature already available to commercial customers is expanding to supported US Government clouds, GCC and GCC High, with applicable compliance and data-boundary requirements met.

Per Learn, summaries appear in an Insights bar on main forms and through a Summary action on view pages. Makers write a prompt per table that names the columns to include.

The roadmap lists general availability for November CY2026, weekly channel, version 2611.1. Admins and makers enable and configure the feature.

## Why it matters

Government tenants have often waited for commercial AI features. Once available, users may expect summaries immediately, and makers may configure prompts over sensitive columns.

Service owners should confirm that the compliance boundary Microsoft describes matches their own authorisation and assurance requirements.

## Risk assessment

**Data exposure**
- Prompts decide which columns are summarised. Over-broad prompts can surface sensitive values in a new place.

**Security & identity**
- Summaries respect the user's access to the record. Learn also notes column security limits for form fill; check behaviour for secured columns.

**Autonomy & actions**
- Read-only summarisation. No actions are taken on records.

**Change & support**
- Summaries may be wrong. Provide guidance for users and a feedback path.

## Cost and licensing

Learn states that users need a Power Apps premium licence for model-driven apps, or a Dynamics 365 enterprise or premium licence for Dynamics 365 apps, and that the feature is hidden without one. Usage may be subject to service limits. Government-specific pricing is not yet published.

## Scope

Model-driven apps in GCC and GCC High. DoD is not listed. Weekly release channel, version 2611.1.

## Governance guidance

### Before rollout
- [ ] Confirm the data boundary statement meets your authorisation requirements.
- [ ] Identify tables where summaries would be sensitive.
- [ ] Check that users hold the right licences.

### At rollout
- [ ] Enable Row summaries for a pilot environment under Copilot > Settings > Power Apps > Summary.
- [ ] Review maker prompts before applying them to main forms and views.

### After rollout
- [ ] Review user feedback on accuracy.
- [ ] Revisit prompts when columns or security roles change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Row summaries per environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Summary › Row summaries › environment › Edit setting <a href="https://learn.microsoft.com/power-apps/user/record-summaries#admin-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Summary prompt and whether a table shows a summary</strong><br><small>App</small><br><small class="controls__note">Maker-side. Show row summary hides the card for a table.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Tables › table › Customizations › Row summary <a href="https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch specific to GCC and GCC High</strong><br><small>Tenant</small><br><small class="controls__note">Availability follows the cloud; the same environment setting applies.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The environment setting is the only admin control and it has no API. The older AI insight cards feature flag is being removed, so runbooks that reference it should move to the Copilot settings page. Makers decide the prompt and the tables that show a summary, which is where sensitive tables are excluded. Usage appears in the [Copilot hub](https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub#settings).

## Open questions

- Which government environments will receive the feature first?
- Are the underlying models the same as in commercial clouds?
- Will DoD follow?

<!-- rationale
risk: Medium. It sends record data to a generative AI service in regulated clouds, so data boundary and compliance assessments need an update.
cost: Low. Learn says users need a Power Apps premium or Dynamics 365 licence; the cost for most tenants is review and communication.
impact: Medium. Users of enabled model-driven apps in government environments see summaries on forms and views.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: defaultState; Governance guidance: At rollout / default: The default state is admin-opt-in. | Found: A Power Platform administrator must enable Row summaries for the environment in the Power Platform admin center | Fix: Report the documentation disagreement instead of presenting a settled government default. The cited prerequisite requires administrator enablement, but https://learn.microsoft.com/power-apps/maker/common/faq-record-summaries says the environment setting is on by default and makers must configure table prompts. https://learn.microsoft.com/power-platform/admin/settings-features#ai-insight-cards also lists default On. Set defaultState to unknown pending confirmation for this government rollout and explain both statements. | Source: https://learn.microsoft.com/power-apps/user/record-summaries
- [supported, minor] Cost and licensing / licensing: The feature is hidden from a user without the required licence. | Found: If the user doesn't have the license, the feature is hidden. This license enforcement gradually rolls out following the feature's general availability. | Fix: Append: 'Microsoft says this licence enforcement rolls out gradually following general availability.' Do not imply that hiding is already uniformly enforced during rollout. | Source: https://learn.microsoft.com/power-apps/user/record-summaries
- [contradicted, blocker] controls[1].scope; Governance controls table / applicability: The maker control has app scope. | Found: When you configure the row summary, it applies to all views and main forms for the table. | Fix: Set controls[1].scope to maker, following the schema's maker-side convention, and state in the note that the configuration applies to all main forms and views for the table, not just one app. Update the rendered scope label accordingly. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary
- [supported, minor] controls[1].note; Governance controls table / behaviour: The Show row summary toggle hides the configured summary for a table. | Found: Turning off Show row summary hides the configured summary from all main forms and view pages for the table. The prompt configuration is retained so the summary can be shown again later. | Fix: Clarify the note: 'Maker-side; applies to all main forms and views for the table. Show row summary hides only custom summaries configured through this experience, not Microsoft-provided or other-app summaries.' | Source: https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary
- [unsupported, major] Why it matters / behaviour: Government tenants have often waited for commercial AI features. | Found: Searched: Power Apps row summaries GCC GCC High government pricing licensing switch; row summaries GCC setting. Opened powerapps-us-government and record-summaries; the government page discusses parity exceptions, not this historical frequency claim. | Fix: Remove the broad historical sentence, or replace it with the sourced item-specific statement: 'The roadmap describes bringing the commercial row summary experience to supported government environments.'
- [supported, minor] Risk assessment: Security & identity / applicability: Summaries respect the user's access to record data. | Found: Copilot adheres to existing data permissions and policies, and its responses to you're based only on data that you personally can access. | Fix: Add https://learn.microsoft.com/power-platform/faqs-copilot-data-security-privacy to sources and cite it for the general Power Platform Copilot permissions statement. | Source: https://learn.microsoft.com/power-platform/faqs-copilot-data-security-privacy
- [supported, minor] Risk assessment: Security & identity / behaviour: Learn documents column-security limitations for form fill assistance, not as a confirmed row-summary limitation. | Found: Fields that have column security aren't currently supported. | Fix: Add https://learn.microsoft.com/power-apps/user/form-filling-assistance to sources. Retain the explicit distinction that this limitation concerns form fill assistance and that secured-column behaviour for row summaries needs checking. | Source: https://learn.microsoft.com/power-apps/user/form-filling-assistance
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Summarisation is read-only and takes no actions on records. | Found: Searched: row summaries read-only; Power Apps row summaries record permissions column security read only accuracy. Opened record-summaries, configure-form-row-summary and faq-record-summaries; none states a no-record-actions guarantee. | Fix: Replace the categorical guarantee with the documented description: 'The feature reads record data and generates a natural-language summary.' Cite https://learn.microsoft.com/power-apps/maker/common/faq-record-summaries.
- [contradicted, blocker] Governance controls: paragraph after table / applicability: The environment setting is the only administrator control. | Found: Admins can define who within an environment can use Copilot capabilities in model-driven apps ... This capability is currently in preview and is only for environments activated for managed environments | Fix: Replace 'the only admin control' with 'the primary environment-level availability control'. Describe the additional preview allow/exclude-user control for Managed Environments: the page explicitly lists Power Apps Row summary among adhering features. Cite https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub#settings and do not assume government-cloud preview availability. | Source: https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub
- [unsupported, blocker] Governance controls: paragraph after table / absence: The environment setting has no API. | Found: Searched: EnableFormInsights API; PowerAppsEnableFormInsights Update; row summaries Power Apps environment enable disable API PowerShell AI insight cards settings. Opened the SDK property reference; it documents a writable property, not API nonexistence. | Fix: Replace 'it has no API' with 'Microsoft Learn does not document an equivalent automation call in the row-summary guidance as of November 2026.' Do not claim API nonexistence: https://learn.microsoft.com/dotnet/api/microsoft.powerplatform.management.models.environmentmanagementsetting.powerappsenableforminsights?view=power-platform-latest documents a writable SDK property.
- [contradicted, blocker] Governance controls: paragraph after table / behaviour: The older AI insight cards feature flag is being removed. | Found: The same control is currently also available as AI insight cards in the environment feature settings. ... The AI insight cards location will be removed in a future release. | Fix: Replace with: 'The older AI insight cards settings location will be removed in a future release; it currently exposes the same control. Use the Copilot settings location in runbooks.' Do not say that the underlying feature flag is being removed. | Source: https://learn.microsoft.com/power-apps/user/record-summaries#admin-control
- [contradicted, blocker] Governance controls: paragraph after table / applicability: Maker prompt and table visibility settings are where sensitive tables are excluded from summaries without qualification. | Found: The Show row summary toggle affects only custom row summaries configured from this row summary experience. It doesn't hide summaries provided by Microsoft or summaries configured through another application or experience | Fix: Qualify the exclusion advice: 'Makers can hide custom row summaries configured through this experience for sensitive tables. This does not hide Microsoft-provided summaries or summaries configured through another app; those require their own controls.' Keep this qualification in both the note and explanatory prose. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/configure-form-row-summary
- [unsupported, major] Governance controls: Usage appears in the Copilot hub / behaviour: Row-summary usage appears in the Copilot hub. | Found: Searched: Power Apps row summary usage analytics Copilot hub monitor. Opened copilot-hub: its Power Apps usage section covers data entry and data exploration agents, not row-summary usage. Opened record-summaries; it documents no usage report. | Fix: Remove 'Usage appears in the Copilot hub', or replace it with 'A row-summary-specific usage report is not yet documented as of November 2026.' The cited hub page does not substantiate row-summary reporting.
- [supported, minor] rationale: risk / behaviour: Row summaries send record data to a generative AI service. | Found: The feature reads the data on the current record and generates a short, natural-language summary ... Row summaries rely on AI Builder to execute summary prompts. | Fix: Add https://learn.microsoft.com/power-apps/maker/common/faq-record-summaries and https://learn.microsoft.com/ai-builder/faqs-text-generation to sources. The latter states that prompt execution runs on Azure OpenAI Service; preserve the roadmap attribution for the government's compliance and data-boundary commitments. | Source: https://learn.microsoft.com/power-apps/maker/common/faq-record-summaries
-->
