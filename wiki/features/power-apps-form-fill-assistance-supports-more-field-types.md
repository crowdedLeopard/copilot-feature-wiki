---
title: "Power Apps: form fill assistance adds lookup, rich text and multi-select choice fields"
slug: "power-apps-form-fill-assistance-supports-more-field-types"
roadmapId: 575296
topic: "power-platform"
products: ["Power Apps"]
summary: "The roadmap plans to widen AI form fill suggestions in model-driven apps to lookup, rich text and multi-select choice fields. It is a user-chosen aid; admins should check the existing settings, column property and licence."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "Learn says the user of a Power Apps model-driven app must have a Power Apps premium licence, and that the feature is hidden without the licence. Whether the new field types change this is not yet published."
audiences: ["power-platform-admin","maker","change-adoption"]
tags: ["power-apps","model-driven-apps","form-fill-assistance","ai","dataverse","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 575296"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=575296"
    kind: "roadmap"
  - title: "Use AI form fill assistance feature in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/form-filling-assistance"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "Track, manage, and scale Copilot adoption in the Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub"
    kind: "learn"
  - title: "Manage model-driven app settings in the app designer"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    kind: "learn"
  - title: "Get or update a setting value using client API"
    url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    kind: "learn"
  - title: "Create and edit columns in Dataverse using Power Apps"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-field-portal"
    kind: "learn"
videos: []
related: ["power-apps-form-fill-assistance-using-m365-files-in-model-driven-apps","power-apps-form-fill-assistance-using-speech-as-input-in-model-driven-apps","managed-environments"]
controls:
  - governs: "Whether form fill assistance is available in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Data entry"
      docs: "https://learn.microsoft.com/power-apps/user/form-filling-assistance"
    api: null
    note: "Learn says this control is moving here and is rolling out gradually. The older Environment > Settings > Product > Features location is described as removed."
  - governs: "Form fill assist toolbar for one model-driven app"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Settings > Features > Form fill assist toolbar"
      docs: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    api:
      kind: "other"
      call: "Xrm.Utility.getGlobalContext().saveSettingValue(settingName, value, saveSettingOptions)"
      docs: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    note: "Maker-side, per app. Learn names the settings FormPredictSmartPasteEnabled and FormFileUploadEnabled; the API row is the general client API for setting values."
  - governs: "Which Dataverse columns can receive suggestions"
    scope: "maker"
    ui:
      surface: "Power Apps (maker)"
      path: "Tables > table > Columns > column > Allow form fill assistance (preview)"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-field-portal"
    api: null
    note: "Maker-side. The column page marks this property as preview and does not say it covers the new field types."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-18"
    note: "New briefing: planned support for lookup, rich text and multi-select choice fields in form fill assistance, with the documented settings, column property and licence."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "3b643af97fe4e6d49ea86210d0cda1d3"
---

## What's changing

The roadmap item says Microsoft is expanding form fill assistance in model-driven apps in Power Apps to support lookup, rich text and multi-select choice fields, so that users complete more of a form with AI-powered suggestions and less manual entry. The item lists the Monthly release channel and the Worldwide (Standard Multi-Tenant) cloud, and platforms Android, iOS and Web.

Form fill assistance itself is documented on Microsoft Learn. It suggests values for blank fields from the user's usage of the app, what is already on the form and their frequently used data, and, through Smart paste and Files, from copied text or uploaded files. Learn says users must review and accept suggestions before they are saved. Learn also says the supported field types inside apps are currently text, numeric, choice and date, and that lookup is listed only for Microsoft Copilot Chat. Learn does not yet describe lookup, rich text or multi-select choice support in apps, so what follows about the new types is the roadmap's description.

The roadmap status is In development, with a target of December CY2026 and release phase General Availability. Those are Microsoft's targets, not commitments. Learn marks the feature as production ready preview in Power Apps and generally available in Dynamics 365 apps, which differs from the roadmap's General Availability phase; the roadmap record gives no preview date. Learn also says form fill assistance is available for apps on the web where the modern, refreshed look is turned on, while the roadmap lists Android and iOS as well.

## Why it matters

Wider field coverage means suggestions can reach the fields where a wrong value costs most: lookups point at other tables, and rich text fields hold longer free-form content. Learn says every suggestion needs the user's explicit acceptance, so the practical exposure is accepted-but-wrong data and the review effort that implies, not silent writes.

Microsoft has not stated what happens on arrival for the new field types. The documented Default setting for Power Apps model-driven apps is off, but Learn does not say whether the new types follow the same setting, so plan on today's settings continuing to apply and check them rather than assuming nothing changes. The licence statement also matters for budgeting, because Learn says users without the required licence do not see the feature.

## Risk assessment

**Data exposure**

- Suggestions come from the user's usage of the app, data already on the form, pasted text and uploaded files. Learn says files classified with sensitivity labels are not supported. Where the new field types draw suggestions from is not yet documented.
- A maker can disable the Allow form fill assistance column property for columns that might hold sensitive information. Learn gives email address as its example, and the column row in the controls table covers it.

**Security & identity**

- Learn says fields that have column security are not currently supported. Whether that remains true for lookup, rich text and multi-select choice fields is not stated.
- Learn lists form fill assistance among the Copilot capabilities that a preview control can limit to chosen users in environments activated for Managed Environments. See the notes under the controls table.

**Autonomy & actions**

- Learn says suggestions are not saved until the user accepts them, and that a user who navigates away is asked whether to discard unsaved suggestions. Accepting all suggestions on a tab is one action, which makes a careless accept of a wrong lookup or rich text value easier.

**Change & support**

- Help-desk questions are likely to be about why a field shows no suggestion. Learn lists several conditions: a modern-look app on the web, at least one AI form fill assistance setting enabled, the column property enabled, and no column security.
- Learn says usage might be subject to service limits or throttling, and that the feature might be intermittently unavailable because of demand.

## Cost and licensing

Licence: Learn's form fill assistance page says the user of a Power Apps model-driven app must have a Power Apps premium licence, and the user of a Dynamics 365 model-driven app a Dynamics 365 enterprise or premium licence. It says the feature is hidden for users without the licence and that this enforcement rolls out gradually after general availability.

Meter: that page names no Copilot Credits or other meter for form fill assistance, and the roadmap item names none. Whether the new field types are metered is not yet published. It says usage might be subject to service limits or throttling and that Microsoft reserves the right to update the limits; no figures are given.

Indirect cost: admin time to review settings, maker time to review columns, and user training on checking suggestions before accepting them.

## Scope

Users: people who use model-driven apps in Power Apps with form fill assistance enabled and the licence described above. Learn says suggestions appear only in main forms and quick create forms inside apps.

Platforms and cloud: the roadmap item lists Android, iOS and Web and the Worldwide (Standard Multi-Tenant) cloud. Learn describes availability for apps on the web where the modern, refreshed look is turned on. Other clouds are not listed on the roadmap item.

Rollout: the roadmap item gives the Monthly release channel. Prerequisites on Learn: at least one AI form fill assistance setting enabled, and the Allow form fill assistance column property enabled for the column.

## Governance guidance

### Before rollout

- Check the current form fill assistance setting for each environment at Copilot > Settings > Power Apps > Data entry in the Power Platform admin center, and record where it is on. Learn says this control is moving there and is rolling out gradually.
- List the tables with lookup, rich text and multi-select choice columns that makers use in main and quick create forms, and decide which should keep Allow form fill assistance switched on.
- Confirm that users of the affected model-driven apps hold a Power Apps premium licence, because Learn says the feature is hidden without one.
- Tell makers and users that suggestions must be reviewed before they are accepted, particularly for lookup and rich text fields.

### At rollout

- Test one main form and one quick create form in a non-production environment once Microsoft Learn lists the new field types, and note which fields receive suggestions.
- Check the form fill assist toolbar setting for the apps that need an override, in the app designer under Settings > Features.

### After rollout

- Re-read the Learn form fill assistance page for changes to the supported field types and limitations.
- Ask makers to review columns for Allow form fill assistance when they add lookup, rich text or multi-select choice columns to forms.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether form fill assistance is available in an environment</strong><br><small>Environment</small><br><small class="controls__note">Learn says this control is moving here and is rolling out gradually. The older Environment &gt; Settings &gt; Product &gt; Features location is described as removed.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Data entry <a href="https://learn.microsoft.com/power-apps/user/form-filling-assistance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Form fill assist toolbar for one model-driven app</strong><br><small>App</small><br><small class="controls__note">Maker-side, per app. Learn names the settings FormPredictSmartPasteEnabled and FormFileUploadEnabled; the API row is the general client API for setting values.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Settings › Features › Form fill assist toolbar <a href="https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Xrm.Utility.getGlobalContext().saveSettingValue(settingName, value, saveSettingOptions)</code> <a href="https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Dataverse columns can receive suggestions</strong><br><small>Maker</small><br><small class="controls__note">Maker-side. The column page marks this property as preview and does not say it covers the new field types.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Tables › table › Columns › column › Allow form fill assistance (preview) <a href="https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-field-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Data entry control is described on Learn as moving to the Power Platform admin center and as rolling out gradually, so it may not yet appear in every tenant. Learn's feature settings page says the new controls add support for environment groups and Entra groups. Microsoft Learn documents no API for the Data entry setting or the column property at the time of writing (November 2026).

The Copilot settings page separately describes a preview control for who within an environment can use Copilot capabilities in model-driven apps, with form fill assistance in its list of capabilities. Learn says it applies only to environments activated for Managed Environments (see /concepts/managed-environments/). Its exact path is not read here; start from the Copilot hub page cited below.

Learn's feature settings page says that, with the Default option, form fill assistance is turned off for Power Apps model-driven app users and turned on for Dynamics 365 model-driven app users. The Allow form fill assistance column property is itself marked as a preview feature on its Learn page.

## Open questions

- Do lookup, rich text and multi-select choice fields in apps follow the existing Automatic suggestions, Smart paste and Files settings, or will they have their own switch? Watch the Learn form fill assistance page and Message center.
- Will the Allow form fill assistance column property apply to the new field types, and will column security continue to exclude fields from suggestions?
- What licence and limits apply to the new field types once the item is Launched, given that Learn marks the feature as preview in Power Apps and the roadmap says General Availability?
- Which data does a lookup suggestion draw on, and is it limited to rows the user can already read? Learn does not say.

<!-- rationale
risk: Low. Suggestions are optional and saved only when a user accepts them, and existing environment, app and column settings govern the feature; how the new field types behave is not yet documented.
cost: Medium. Learn says Power Apps model-driven app users need a Power Apps premium licence for form fill assistance; no separate meter or price for the new field types is published.
impact: Medium. Users of model-driven apps where form fill assistance is switched on would see suggestions on more kinds of field; Learn says the default for Power Apps users is off.
-->

<!-- verifier-findings (2026-11-18, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: Rich text fields hold free-form text content. | Found: It lets you create, paste, and edit formatted text in your model-driven apps. | Fix: Replace 'rich text fields hold longer free-form content' with 'rich text fields allow formatted text' and cite https://learn.microsoft.com/power-apps/maker/model-driven-apps/rich-text-editor-control. The source supports formatted text, not a comparative claim about length. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/rich-text-editor-control
-->
