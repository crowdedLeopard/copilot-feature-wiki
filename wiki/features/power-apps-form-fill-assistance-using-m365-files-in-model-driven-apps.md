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
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "Per Learn, Power Apps premium or Dynamics 365 enterprise or premium licence; unlicensed users do not see the feature. Learn says this licence enforcement gradually rolls out following the feature's general availability."
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
  - title: "Create and edit columns in Dataverse using Power Apps"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-field-portal"
    kind: "learn"
  - title: "Manage model-driven app settings in the app designer"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    kind: "learn"
  - title: "Get or update a setting value using client API"
    url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "Form fill assistance (data entry agent) per environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-apps/user/form-filling-assistance#admin-control"
    kind: "learn"
  - title: "Legacy environment switch for form fill assistance (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features#ai-form-fill-assistance"
    kind: "learn"
videos: []
related: []
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
  - governs: "Form fill assist toolbar for an app"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "App designer > Settings > Features > Form fill assist toolbar"
      docs: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    api:
      kind: "other"
      call: "Xrm.Utility.getGlobalContext().saveSettingValue(\"FormFileUploadEnabled\", true, { overrideScope: 2, solutionUniqueName: \"<solution>\" })"
      docs: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    note: "Save and Publish the app after changing the setting in the designer."
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
  - date: "2026-11-16"
    note: "Correction: default state set to unknown, cost lowered to low, file-access claim replaced, toolbar control row corrected with its client API, and API-absence statement narrowed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 48 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 46
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "a54111ca20796518e7e7aafbec609ac5"
---

## What's changing

Form fill assistance in Power Apps is being extended to use Microsoft 365 files as a source, so users can turn existing content into form entries with less manual effort. The roadmap lists a Monthly channel, version 2701.1, January 2027 and Worldwide.

The feature scope field lists several values, including admins or makers, users enabled by admins or makers, enabled by default and always enabled, so the roadmap does not settle the default. Microsoft has not stated what happens on arrival.

Learn describes form fill assistance as generally available in Dynamics 365 apps and in production-ready preview in Power Apps. Its current sources are app usage, smart paste and uploaded files (txt, docx, csv, pdf and images). Files with sensitivity labels are not supported today. Those current limits are not confirmed as the design of the Microsoft 365 files extension.

## Why it matters

Pulling content from Microsoft 365 files into forms touches data governance: which files a user can reach, whether sensitivity labels are respected and whether suggestions are accurate before they enter business records.

## Risk assessment

**Data exposure**
- The roadmap says Microsoft 365 files become a source; Microsoft has not yet documented the extension's file-access boundaries.

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
<tr><td data-label="Control"><strong>Form fill assist toolbar for an app</strong><br><small>App</small><br><small class="controls__note">Save and Publish the app after changing the setting in the designer.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>App designer › Settings › Features › Form fill assist toolbar <a href="https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Xrm.Utility.getGlobalContext().saveSettingValue(&quot;FormFileUploadEnabled&quot;, true, { overrideScope: 2, solutionUniqueName: &quot;&lt;solution&gt;&quot; })</code> <a href="https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch specific to Microsoft 365 files as a source</strong><br><small>Environment</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft has not documented an API for the Copilot Data entry control as of November 2026. The app-level toolbar setting is separate and does have documented automation, shown in the table. Makers can also set Allow form fill assistance (preview) per column, which is the finest-grained control and the one to use for sensitive fields. Usage appears in the Power Platform admin center's [Copilot hub](https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub#settings) under the data entry agent.

## Open questions

- Which Microsoft 365 file locations are supported.
- Whether sensitivity labels are honoured.
- Whether the feature will be on by default.

<!-- rationale
risk: Medium. AI suggestions drawn from files could surface or mis-enter data; users must accept suggestions, which limits impact.
cost: Low. The known cost is review and training effort; any licensing or charge specific to the Microsoft 365 files source is not yet published.
impact: Medium. Affects users of model-driven apps with form fill assistance enabled.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Governance controls prose / behaviour: The per-column property is the finest-grained control. | Found: Searched: "form fill assistance" "column" "granular". Opened create-edit-field-portal, form-filling-assistance and copilot-hub; these document column, app and environment controls but do not state the comparative claim. | Fix: Replace the sentence with: 'Makers can also set Allow form fill assistance (preview) per column and disable it for columns that might contain sensitive information.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist directs readers to review column properties, but the controls table has no column-property row. | Found: Review environment form fill settings and column properties. ... Table rows: Form fill assistance (data entry agent) per environment; Legacy environment switch; Form fill assist toolbar for an app; Switch specific to Microsoft 365 files as a source. | Fix: The 'Review environment form fill settings and column properties' checklist step has no row for column properties. Remove 'and column properties' from that step; do not add a control row as part of this correction.
-->
