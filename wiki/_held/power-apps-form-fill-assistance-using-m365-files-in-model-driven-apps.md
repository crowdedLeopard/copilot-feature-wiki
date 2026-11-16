---
title: "Power Apps: form fill assistance using Microsoft 365 files in model-driven apps"
slug: "power-apps-form-fill-assistance-using-m365-files-in-model-driven-apps"
roadmapId: 576280
topic: "power-platform"
products: ["Power Apps"]
summary: "Form fill assistance in model-driven apps will use Microsoft 365 files as a source for suggested form entries."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS","Web"]
targetDate: "January CY2027"
previewDate: "October CY2026"
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "review"
licensing:
  model: "per-user"
  notes: "Per Learn, Power Apps premium or Dynamics 365 enterprise or premium licence; unlicensed users do not see the feature."
audiences: ["power-platform-admin","maker","security","end-user"]
tags: ["power-apps","form-fill-assistance","model-driven-apps","microsoft-365-files","ai"]
sources:
  - title: "Microsoft 365 Roadmap item 576280"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576280"
    kind: "roadmap"
  - title: "Use AI form fill assistance feature in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/form-filling-assistance"
    kind: "learn"
  - title: "FAQ about form fill assistance"
    url: "https://learn.microsoft.com/power-apps/maker/common/faq-from-filling-assistance"
    kind: "learn"
  - title: "Form fill assistance (data entry agent) per environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-apps/user/form-filling-assistance#admin-control"
    kind: "learn"
  - title: "Legacy environment switch for form fill assistance (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features#ai-form-fill-assistance"
    kind: "learn"
  - title: "Smart paste and the form fill toolbar for an app (Power Apps (maker))"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    kind: "learn"
videos: []
related: ["copilot-studio-purview-information-protection-labelled-files","managed-environments"]
controls:
  - governs: "Form fill assistance (data entry agent) per environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Data entry"
      docs: "https://learn.microsoft.com/power-apps/user/form-filling-assistance#admin-control"
    api: null
  - governs: "Legacy environment switch for form fill assistance"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > AI form fill assistance"
      docs: "https://learn.microsoft.com/power-platform/admin/settings-features#ai-form-fill-assistance"
    api: null
    note: "Being removed in favour of the Copilot settings page."
  - governs: "Smart paste and the form fill toolbar for an app"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Model-driven app designer > Settings (app properties)"
      docs: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    api: null
  - governs: "Switch specific to Microsoft 365 files as a source"
    scope: "environment"
    ui: null
    api: null
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576280."
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
  claims: 45
  confirmed: 38
  unconfirmed: 2
  contradicted: 5
  attempts: 1
---

## What's changing

Form fill assistance in Power Apps is being extended to use Microsoft 365 files as a source, so users can turn existing content into form entries with less manual effort. The roadmap lists a Monthly channel, version 2701.1, January 2027 and Worldwide.

The feature scope field lists several values, including admins or makers, users enabled by admins or makers, enabled by default and always enabled, so the effective default is unclear.

Learn documents current sources: app usage, smart paste and uploaded files (txt, docx, csv, pdf and images). Files with sensitivity labels are not supported today.

## Why it matters

Pulling content from Microsoft 365 files into forms touches data governance: which files a user can reach, whether sensitivity labels are respected and whether suggestions are accurate before they enter business records.

## Risk assessment

**Data exposure**
- Suggestions may draw on file content the user can access; citations show the source.

**Security & identity**
- Labelled files are unsupported today; confirm behaviour for Microsoft 365 files.

**Autonomy & actions**
- Suggestions are not saved until accepted.

**Change & support**
- AI suggestions can be wrong; users must review them. Fields with column security are not supported.

## Cost and licensing

Learn: Power Apps model-driven apps need a Power Apps premium licence; Dynamics 365 apps need an enterprise or premium licence. Usage may be throttled. Any additional charge for the Microsoft 365 files source is not yet published.

## Scope

Model-driven apps on the web with the modern look, Worldwide (Standard Multi-Tenant). Per-column Allow form fill assistance property must be enabled.

## Governance guidance

### Before rollout
- Review environment form fill settings and column properties.
- Confirm treatment of sensitivity-labelled files.

### At rollout
- Enable for a pilot app and tables first.
- Train users to check suggestions and citations.

### After rollout
- Sample accepted suggestions for accuracy.
- Review licensing against actual use.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Form fill assistance (data entry agent) per environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Data entry <a href="https://learn.microsoft.com/power-apps/user/form-filling-assistance#admin-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Legacy environment switch for form fill assistance</strong><br><small>Environment</small><br><small class="controls__note">Being removed in favour of the Copilot settings page.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › AI form fill assistance <a href="https://learn.microsoft.com/power-platform/admin/settings-features#ai-form-fill-assistance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Smart paste and the form fill toolbar for an app</strong><br><small>App</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Model-driven app designer › Settings (app properties) <a href="https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch specific to Microsoft 365 files as a source</strong><br><small>Environment</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

There is no API for the Copilot settings page. Makers can also set Allow form fill assistance per column, which is the finest-grained control and the one to use for sensitive fields. Usage appears in the Power Platform admin center's [Copilot hub](https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub#settings) under the data entry agent.

## Open questions

- Which Microsoft 365 file locations are supported.
- Whether sensitivity labels are honoured.
- Whether the feature will be on by default.

<!-- rationale
risk: Medium. AI suggestions drawn from files could surface or mis-enter data; users must accept suggestions, which limits impact.
cost: Medium. Learn states form fill assistance requires Power Apps premium or Dynamics 365 enterprise or premium user licences.
impact: Medium. Affects users of model-driven apps with form fill assistance enabled.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] front matter: defaultState; What's changing; Open questions / consistency: The Microsoft 365 files extension is on by default. | Found: defaultState: "on"; "so the effective default is unclear"; "Whether the feature will be on by default." | Fix: Set defaultState to unknown. Retain the open question: the roadmap lists conflicting scope categories, and the Learn pages describe existing form-fill defaults, not a confirmed default for this extension.
- [supported, minor] What's changing / behaviour: Current form fill assistance can generate suggestions from app usage. | Found: Based on the user's usage of the app, what information is already available in the form, and their frequently used data. | Fix: Introduce the current-feature background with its qualification: Learn describes form fill assistance as generally available in Dynamics 365 apps and in production-ready preview in Power Apps. Do not present current preview limits as the final design of the Microsoft 365 files extension. | Source: https://learn.microsoft.com/power-apps/user/form-filling-assistance
- [unsupported, major] Risk assessment: Data exposure / behaviour: Suggestions from the Microsoft 365 files extension may draw on files the user can access. | Found: Searched: form fill assistance Microsoft 365 files source locations permissions sensitivity labels licensing price admin control; form fill assistance file permissions. Opened Learn form-filling-assistance and its FAQ; they describe user-provided files and a separate Copilot Chat experience. | Fix: Replace the permission implication with: 'The roadmap says Microsoft 365 files become a source; Microsoft has not yet documented the extension's file-access boundaries.' Do not transfer the separate Copilot Chat experience's access description to this roadmap feature.
- [supported, minor] front matter: licensing.notes / licensing: Users without the required licence do not see the feature. | Found: If the user doesn't have the license, the feature is hidden. This license enforcement gradually rolls out following the feature's general availability. | Fix: Append that licence enforcement rolls out gradually following general availability, rather than implying universal enforcement already. | Source: https://learn.microsoft.com/power-apps/user/form-filling-assistance
- [contradicted, blocker] controls[2].ui; Governance controls: third row / admin-path: Model-driven app designer > Settings (app properties) is the complete path to the smart paste and toolbar controls. | Found: When you select Settings from the command bar, select Features to enable or disable model-driven app features for the app. ... Form fill assist toolbar. | Fix: For the toolbar, use 'App designer > Settings > Features > Form fill assist toolbar' and require Save and Publish. The pre-check's missing phrase 'Model-driven app designer' is not itself an error; the missing Features step and actual setting are. Narrow this row to the toolbar unless a separately documented smart-paste path is supplied. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties
- [contradicted, blocker] controls[2].api; Governance controls: third row / absence: No API or automation is documented for the smart paste and form fill toolbar app settings. | Found: saveSettingValue ... Adds or updates the setting app value for the current app or the setting environment value for the current environment. | Fix: Replace the null with documented setting automation. The cited form-fill article identifies FormPredictSmartPasteEnabled and FormFileUploadEnabled as app settings. The client API documents saveSettingValue(settingName, value, saveSettingOptions), with overrideScope 2 for an app. Its Web APIs section also links SaveSettingValue; that action's reference documents SettingName, Value and optional AppUniqueName and SolutionUniqueName. Cite these references rather than saying automation is undocumented. | Source: https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code
- [unsupported, blocker] Governance controls: notes / absence: There is no API for the Copilot settings page. | Found: Searched: Power Apps form fill assistance Copilot settings API PowerShell; Copilot Settings API data entry; power-platform copilot-hub API. Opened copilot-hub and form-filling-assistance. Neither states that no API exists. | Fix: Replace the absolute statement with 'Microsoft has not documented an API for the Copilot Data entry control as of November 2026.' Keep this distinct from the documented app-setting APIs.
- [supported, minor] Governance controls: notes; Governance guidance: Before rollout / applicability: Makers can disable Allow form fill assistance for individual sensitive columns. | Found: Allow form fill assistance (preview) ... You can disable for columns that might contain sensitive information, such as email address. | Fix: Add https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-field-portal to sources and identify the column property as preview. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-field-portal
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The controls table covers every control the governance checklist asks readers to review. | Found: "Review environment form fill settings and column properties." The table contains environment, app and source-switch rows, but no Allow form fill assistance column-property row. | Fix: Add a column-scoped Allow form fill assistance (preview) row. The UI documented at https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-field-portal is Power Apps > Tables > table > Columns > column > Allow form fill assistance (preview). Research its automation separately before setting that side to null.
- [contradicted, blocker] front matter: cost; rationale: cost; Cost and licensing / consistency: The cost rating is medium because the existing feature requires premium user licences. | Found: cost: "medium"; "Medium. Learn states form fill assistance requires Power Apps premium or Dynamics 365 enterprise or premium user licences."; "Any additional charge for the Microsoft 365 files source is not yet published." | Fix: Set cost to low for the known review and training effort, and rewrite its rationale to say that extension-specific additional licensing or charges are not yet published. The schema defines medium as add-on licences or predictable consumption; existing product licence prerequisites alone do not establish either for this change.
-->
