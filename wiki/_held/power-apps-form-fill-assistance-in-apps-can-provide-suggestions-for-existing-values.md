---
title: "Power Apps: form fill assistance suggests updates to fields that already have values"
slug: "power-apps-form-fill-assistance-in-apps-can-provide-suggestions-for-existing-values"
roadmapId: 575295
topic: "power-platform"
products: ["Power Apps"]
summary: "The roadmap plans to extend AI form fill suggestions in model-driven apps from empty fields to fields that already hold values. Users still choose what to accept; admins should check current settings, columns and licences."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "Learn says the user of a Power Apps model-driven app must have a Power Apps premium licence, and the feature is hidden without it. Whether suggestions for existing values change this is not yet published."
audiences: ["power-platform-admin","maker","change-adoption"]
tags: ["power-apps","model-driven-apps","form-fill-assistance","ai","dataverse","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 575295"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=575295"
    kind: "roadmap"
  - title: "Use AI form fill assistance feature in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/form-filling-assistance"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "Manage model-driven app settings in the app designer"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    kind: "learn"
  - title: "Create and edit columns in Dataverse using Power Apps"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-field-portal"
    kind: "learn"
  - title: "Get or update a setting value using client API"
    url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    kind: "learn"
  - title: "Track, manage, and scale Copilot adoption in the Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub"
    kind: "learn"
videos: []
related: ["power-apps-form-fill-assistance-supports-more-field-types","power-apps-form-fill-assistance-using-m365-files-in-model-driven-apps","power-apps-form-fill-assistance-using-speech-as-input-in-model-driven-apps","managed-environments"]
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
    note: "Maker-side, per app. Learn names the app settings FormPredictSmartPasteEnabled and FormFileUploadEnabled; the API row is the general client API for setting values."
  - governs: "Which Dataverse columns can receive suggestions"
    scope: "maker"
    ui:
      surface: "Power Apps (maker)"
      path: "Tables > table > Columns > column > Allow form fill assistance (preview)"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-field-portal"
    api: null
    note: "Maker-side, preview property. The page does not say whether it covers suggestions on fields that already hold values."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-21T23:02:10"
changes:
  - date: "2026-11-18"
    note: "New briefing: planned form fill suggestions for fields that already hold values, with the documented settings, column property and licence."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 68 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 69
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "3d634a9dacacf93472b60c906f0efcd2"
---

## What's changing

The roadmap item says Microsoft is expanding form fill assistance in model-driven apps in Power Apps to suggest updates to fields that already contain values, not just empty fields, so that users can update existing information using AI-powered skills. The item lists the Worldwide (Standard Multi-Tenant) cloud and the platforms Android, iOS and Web.

Form fill assistance itself is documented on Microsoft Learn. Learn describes it as providing suggestions for blank form fields, drawn from the user's usage of the app, what is already on the form and their frequently used data, and, through Smart paste and Files, from copied text or uploaded files. Suggestions are optional and are not saved until the user accepts them. Learn does not yet describe suggestions for fields that already hold values, so what follows about that behaviour is the roadmap's description.

The roadmap status is In development, with a target of December CY2026 and release phase General Availability. These are Microsoft's targets, not commitments, and the record gives no preview date. Learn says the feature is in production ready preview in Power Apps and generally available in Dynamics 365 apps, which differs from the roadmap's General Availability phase. Learn also describes availability for apps on the web where the modern, refreshed look is turned on, while the roadmap also lists Android and iOS.

## Why it matters

Filling a blank field and replacing a value someone already entered are different risks. The roadmap describes the second: suggestions on fields that already hold data. Learn says the user must explicitly review and accept suggestions before they are saved, so the realistic exposure is a wrong suggestion accepted over a correct value, and the review effort that implies, not silent writes.

Microsoft has not stated what happens on arrival for this behaviour. Learn's documented Default option for Automatic suggestions is off for Power Apps model-driven app users and on for Dynamics 365 model-driven app users, but Learn does not say whether suggestions for existing values follow that setting. Plan on today's settings continuing to apply and check them, rather than assuming nothing changes. The licence statement also matters for budgeting: Learn says users without the required licence do not see the feature.

## Risk assessment

**Data exposure**

- Learn documents suggestion sources as the user's usage of the app, data already on the form, pasted text and uploaded files, and says files classified with sensitivity labels are not supported. Whether suggestions for existing values use further sources is not yet documented.
- A maker can switch off the Allow form fill assistance column property for columns that might contain sensitive information. Learn gives email address as its example. See the column row in the controls table.

**Security & identity**

- Learn says fields that have column security are not currently supported. Whether that still holds when the field already contains a value is not stated.
- Learn lists form fill assistance among the Copilot capabilities that a preview control can limit to chosen users in environments activated for Managed Environments (see /concepts/managed-environments/). Notes under the controls table cover it.

**Autonomy & actions**

- Learn says suggestions are saved only when the user accepts them, and that the user can overwrite a suggestion by typing. Learn also offers Accept all suggestions for the open tab. Whether a suggestion for an existing value is accepted by that button is not documented; confirm it in a test environment before telling users.

**Change & support**

- Expect help-desk questions about why a field that already has a value is, or is not, offered a suggestion. Learn's prerequisites are a modern-look app on the web, at least one AI form fill assistance setting enabled, and the column property enabled.
- Learn says usage might be subject to service limits or throttling, and that the feature might be unavailable intermittently because of high demand.

## Cost and licensing

Licence: Learn's form fill assistance page says the user of a Power Apps model-driven app must have a Power Apps premium licence, and the user of a Dynamics 365 model-driven app a Dynamics 365 enterprise or premium licence. It says the feature is hidden for a user without the licence and that this enforcement rolls out gradually following general availability.

Meter: that page names no meter such as Copilot Credits for form fill assistance, and the roadmap item names none. Whether suggestions for existing values are metered is not yet published. The page says usage might be subject to service limits or throttling and that Microsoft reserves the right to update the limits; it gives no figures.

Indirect cost: admin time to review settings, maker time to review columns, and user time to check suggestions before accepting them.

## Scope

Users: people who use model-driven apps in Power Apps with form fill assistance enabled and the licence described above. Learn says suggestions inside apps are provided for fields only in main forms and quick create forms, and lists the supported field types in apps as text, numeric, choice and date.

Platforms and cloud: the roadmap item lists Android, iOS and Web and the Worldwide (Standard Multi-Tenant) cloud. Learn describes availability for apps on the web where the modern, refreshed look is turned on. Other clouds are not listed on the roadmap item.

Rollout: the roadmap target is December CY2026. Learn's prerequisites are at least one AI form fill assistance environment setting enabled and the Allow form fill assistance column property enabled for the column.

## Governance guidance

### Before rollout

- Check the form fill assistance setting for each environment at Copilot > Settings > Power Apps > Data entry in the Power Platform admin center, and record where Automatic suggestions is on. Learn says this control is moving there and is rolling out gradually.
- Confirm that users of the affected model-driven apps hold a Power Apps premium licence, because Learn says the feature is hidden without one.
- List the columns that hold sensitive or regulated values and decide, with makers, which should have Allow form fill assistance switched off.
- Tell users that suggestions must be reviewed before they are accepted, and that a suggestion may now be offered on a field that already has a value, once Microsoft confirms it.

### At rollout

- Test one main form and one quick create form with filled-in records in a non-production environment once Microsoft Learn describes suggestions for existing values, and note what Accept all suggestions does with them.
- Review the form fill assist toolbar setting for apps that need an override, in the app designer under Settings > Features.

### After rollout

- Re-read the Learn form fill assistance page for changes to the supported field types, limitations and licensing.
- Ask makers to review the column property whenever they add columns to forms where users edit existing records.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether form fill assistance is available in an environment</strong><br><small>Environment</small><br><small class="controls__note">Learn says this control is moving here and is rolling out gradually. The older Environment &gt; Settings &gt; Product &gt; Features location is described as removed.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Data entry <a href="https://learn.microsoft.com/power-apps/user/form-filling-assistance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Form fill assist toolbar for one model-driven app</strong><br><small>App</small><br><small class="controls__note">Maker-side, per app. Learn names the app settings FormPredictSmartPasteEnabled and FormFileUploadEnabled; the API row is the general client API for setting values.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Settings › Features › Form fill assist toolbar <a href="https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Xrm.Utility.getGlobalContext().saveSettingValue(settingName, value, saveSettingOptions)</code> <a href="https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Dataverse columns can receive suggestions</strong><br><small>Maker</small><br><small class="controls__note">Maker-side, preview property. The page does not say whether it covers suggestions on fields that already hold values.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Tables › table › Columns › column › Allow form fill assistance (preview) <a href="https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-field-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Data entry control is described on Learn as moving to the Power Platform admin center and rolling out gradually, so it may not yet appear in every tenant. Learn's feature settings page says the new controls add support for environment groups and Entra group support. The same page gives the System Administrator security role or equivalent as the requirement for the older environment Features settings. Microsoft Learn documents no API for the Data entry setting or the column property at the time of writing (November 2026).

Microsoft Learn documents no setting specific to suggestions on existing values at the time of writing. Whether the existing settings and the column property govern the new behaviour is not confirmed; they gate form fill assistance today. The toolbar setting governs the toolbar that gives access to form fill assistance features such as smart paste and files, not suggestions as such.

The Copilot hub page separately describes a preview control for who within an environment can use Copilot capabilities in model-driven apps, listing Form fill assistance among them. It applies to environments activated for Managed Environments. Its exact path is not given here; start from the Copilot hub page cited below.

Learn marks the Allow form fill assistance column property as a preview feature.

## Open questions

- Will suggestions for existing values follow the Automatic suggestions setting at Copilot > Settings > Power Apps > Data entry, or get their own switch? Watch the Learn form fill assistance page and Message center.
- Does Accept all suggestions apply to suggestions for existing values, and can a user review what would be replaced before accepting? Learn does not say.
- Will the Allow form fill assistance column property and column security exclusions apply to fields that already hold values?
- What licence and limits apply once the item is Launched, given that Learn marks the feature as preview in Power Apps and the roadmap says General Availability?

<!-- rationale
risk: Medium. Suggestions would target data users have already entered, so an accepted wrong suggestion replaces a value; Learn says nothing is saved until the user accepts, but does not yet describe this behaviour.
cost: Medium. Learn says users of a Power Apps model-driven app need a Power Apps premium licence for form fill assistance; no separate meter or price is published for suggestions on existing values.
impact: Medium. People who use model-driven apps where form fill assistance is switched on would see suggestions on fields they have already filled; Learn gives the default for Power Apps users as off.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance controls / admin-path: The maker-portal route to the per-app toolbar control is Settings > Features > Form fill assist toolbar. | Found: In the app designer select Settings on the command bar. | Fix: Replace controls[1].ui.path and the matching table path with 'Solutions > solution > app > Edit > Settings > Features > Form fill assist toolbar'. The existing path starts inside the designer, not at the Power Apps maker navigation. Add https://learn.microsoft.com/power-apps/maker/model-driven-apps/use-command-designer to sources: its 'Open an existing model-driven app using app designer' steps give Solutions, the solution, the app and Edit. Keep app-properties as the control's docs link. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties
-->
