---
title: "Power Apps: speech as an input source for form fill assistance in model-driven apps"
slug: "power-apps-form-fill-assistance-using-speech-as-input-in-model-driven-apps"
roadmapId: 576281
topic: "power-platform"
products: ["Power Apps"]
summary: "Users in model-driven apps can record speech with a microphone icon and have the transcript fill form fields. Recordings are transient and not saved."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "per-user"
  notes: "Learn: Power Apps premium or Dynamics 365 enterprise or premium licence for form fill assistance."
audiences: ["power-platform-admin","compliance","change-adoption","end-user"]
tags: ["power-apps","model-driven-apps","form-fill-assistance","speech","copilot","mobile"]
sources:
  - title: "Microsoft 365 Roadmap item 576281"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576281"
    kind: "roadmap"
  - title: "Use AI form fill assistance feature in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/form-filling-assistance"
    kind: "learn"
  - title: "Form fill assistance (data entry agent) per environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-apps/user/form-filling-assistance#admin-control"
    kind: "learn"
  - title: "Smart paste and the form fill toolbar for an app (Power Apps (maker))"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    kind: "learn"
videos: []
related: ["power-apps-form-fill-assistance-using-m365-files-in-model-driven-apps","power-apps-use-the-modernized-personal-settings-experience"]
controls:
  - governs: "Form fill assistance (data entry agent) per environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Data entry"
      docs: "https://learn.microsoft.com/power-apps/user/form-filling-assistance#admin-control"
    api: null
  - governs: "Smart paste and the form fill toolbar for an app"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Model-driven app designer > Settings (app properties)"
      docs: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    api: null
  - governs: "Speech-specific switch"
    scope: "environment"
    ui: null
    api: null
    note: "Speech input follows the form fill assistance setting; no separate control is documented."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576281 with Learn form fill guidance."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 35
  unconfirmed: 7
  contradicted: 3
  attempts: 1
---

## What's changing

Form fill assistance in Power Apps will accept speech as a source. Users select the microphone icon and record their content, and the transcript is used as a source for the form entry. The roadmap says recordings are transient and not saved.

Learn describes form fill assistance as AI-suggested field values that users must review and accept before saving. Current sources include files and pasted text.

The roadmap lists general availability for December CY2026, monthly channel, version 2612.1, Worldwide only, with Android among the platforms. Feature scope is users, enabled by default.

## Why it matters

Because the feature is on by default, users may begin dictating records, including customer or health details, without any announcement. Service owners should decide whether speech input suits their data and workplace settings.

There is also a records angle: the transcript is not stored, but the values the user accepts are.

## Risk assessment

**Data exposure**
- Speech is transcribed and sent for processing. Transient handling is stated by the roadmap; confirm region and retention in Learn at release.
- Learn says fields with column security are not supported for suggestions.

**Security & identity**
- Microphone access follows device and browser permissions.

**Autonomy & actions**
- Suggestions need user acceptance. Nothing saves until the user does so.

**Change & support**
- Transcription errors may enter records. Brief users to check values.

## Cost and licensing

Learn says form fill assistance needs a Power Apps premium licence for model-driven apps or a Dynamics 365 enterprise or premium licence, and is hidden without one. No extra speech meter is published. Usage may be subject to service limits.

## Scope

Users of model-driven apps with form fill assistance on, including mobile platforms per the roadmap. Worldwide only. Fields must allow form fill assistance, and supported types are text, numeric, choice and date.

## Governance guidance

### Before rollout
- [ ] Decide whether speech input is acceptable for each app and data class.
- [ ] Review the form fill assistance settings per environment.
- [ ] Draft user guidance on dictation in shared spaces.

### At rollout
- [ ] Check the Data entry setting under Copilot > Settings > Power Apps before the December release.
- [ ] Switch off the Allow form fill assistance column property for sensitive columns.

### After rollout
- [ ] Sample records for transcription errors.
- [ ] Gather user feedback and adjust settings.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Form fill assistance (data entry agent) per environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Data entry <a href="https://learn.microsoft.com/power-apps/user/form-filling-assistance#admin-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Smart paste and the form fill toolbar for an app</strong><br><small>App</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Model-driven app designer › Settings (app properties) <a href="https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Speech-specific switch</strong><br><small>Environment</small><br><small class="controls__note">Speech input follows the form fill assistance setting; no separate control is documented.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Turning form fill assistance off removes speech input with it; there is no way to allow text and file sources while blocking the microphone. The legacy environment feature flag is listed in the [feature settings reference](https://learn.microsoft.com/power-platform/admin/settings-features#ai-form-fill-assistance) and is being retired. Column-level Allow form fill assistance remains the finest control. No API is documented.

## Open questions

- Is there a separate switch for speech input?
- Where is audio processed, and for how long?
- Which languages are supported?

<!-- rationale
risk: Medium. It is enabled by default for users and processes spoken content, which may include personal or sensitive information.
cost: Low. Learn says form fill assistance needs a Power Apps premium or Dynamics 365 licence; no additional charge for speech is published.
impact: High. The roadmap lists users as enabled by default, so many users of enabled apps may see the microphone.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: targetDate; What's changing; Governance guidance: At rollout / record: The roadmap lists December CY2026 for release, called the December release in the checklist. | Found: "targetDate": "December CY2026"; "status": "In development" | Fix: Call December CY2026 a target explicitly, including changing 'before the December release' to 'before the roadmap target of December CY2026'.
- [unsupported, blocker] Why it matters / behaviour: The transcript is not stored. | Found: Searched: "form fill assistance" "transcript" "stored"; "form fill" "speech" "transcript". Read form-filling-assistance and faq-from-filling-assistance; neither states transcript retention. The roadmap only says recordings are not saved. | Fix: Replace 'the transcript is not stored' with 'the roadmap says recordings are transient and not saved; transcript storage and retention are not yet documented'. Do not extend the audio-recording statement to transcripts.
- [unsupported, major] Risk assessment: Data exposure / behaviour: Speech is sent for processing. | Found: Searched: Power Apps form fill assistance speech microphone disable speech control transcript stored browser permissions. Read form-filling-assistance and its responsible AI FAQ; neither describes speech processing or transmission. | Fix: Replace this processing assertion with 'The roadmap says a transcript supplies form entry; the speech processing architecture is not yet documented.'
- [unsupported, blocker] Risk assessment: Security & identity / applicability: Device and browser permissions govern microphone access for this feature. | Found: Searched: "form fill assistance" "microphone" "permissions". Read form-filling-assistance and its FAQ. Results document Windows speech APIs, Edge Web Speech and canvas microphone controls, not this model-driven-app speech feature. | Fix: Replace with 'Microphone permission requirements for this speech feature are not yet documented.' Do not imply that documentation for canvas controls or a particular browser establishes this feature's controls.
- [supported, minor] Cost and licensing / licensing: The feature is hidden from users without the required license. | Found: If the user doesn't have the license, the feature is hidden. This license enforcement gradually rolls out following the feature's general availability. | Fix: Add the qualification that license enforcement is gradually rolling out following general availability. | Source: https://learn.microsoft.com/power-apps/user/form-filling-assistance
- [supported, minor] Scope / behaviour: Supported field types are text, numeric, choice and date. | Found: The currently supported field types inside apps are text, numeric, choice, and date. ... This feature is in production ready preview in Power Apps. | Fix: Identify these as current form fill assistance limits, noting that Learn marks the underlying Power Apps feature production-ready preview. Do not present current preview limits and licensing as final speech-release specifications. | Source: https://learn.microsoft.com/power-apps/user/form-filling-assistance
- [supported, minor] controls[0].ui; Governance guidance: At rollout; Governance controls / admin-path: The environment form fill assistance control is in Power Platform admin center under Copilot > Settings > Power Apps > Data entry. | Found: The primary admin control for form fill assistance is moving to the Power Platform admin center under Copilot > Settings > Power Apps > Data entry. ... This change is gradually rolling out. | Fix: Keep the path, but add a control note that this move is gradually rolling out. Explain that selecting the setting opens a panel to select the environment and Edit setting, as described at https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub. | Source: https://learn.microsoft.com/power-apps/user/form-filling-assistance#admin-control
- [contradicted, blocker] controls[1].ui; Governance controls: app row / admin-path: Smart paste and the form fill toolbar are configured at Model-driven app designer > Settings (app properties). | Found: When you select Settings from the command bar, select Features to enable or disable model-driven app features for the app. ... Form fill assist toolbar. | Fix: The descriptive name 'Model-driven app designer' is not the problem; the missing Features step is. Replace the path with 'app designer > Settings > Features > Form fill assist toolbar' for the documented toolbar control, and state that app changes require Save and Publish. Document Smart paste separately using its setting definition if its designer label is not shown. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties
- [contradicted, blocker] controls[1].api; Governance controls: app row and closing 'No API is documented' / absence: No API is documented for the Smart paste and form fill toolbar app settings. | Found: saveSettingValue: Adds or updates the setting app value for the current app or the setting environment value for the current environment. | Fix: Replace this absence claim: the cited form fill article identifies FormPredictSmartPasteEnabled and FormFileUploadEnabled as app settings and links to the settings mechanism; its developer reference documents saveSettingValue with overrideScope 2 for app values and also links SaveSettingValue Web API. Populate the app API side using that documented mechanism, and restrict any remaining API absence statement to the new Data entry control. | Source: https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code
- [unsupported, blocker] controls[2].note; Governance controls: closing paragraph / applicability: Speech input follows the existing form fill assistance setting, so turning that setting off removes speech input. | Found: Searched: "form fill assistance" "speech" "admin" "setting"; "form fill assistance" "speech" "disable". Read form-filling-assistance, settings-features and copilot-hub; none connects the planned speech source to a specific existing setting. | Fix: Replace the speech-row note and the definitive shutdown statement with 'Microsoft has not yet documented which existing controls govern the speech source.' Keep the general form fill controls clearly distinguished from confirmed speech-specific governance.
- [unsupported, blocker] Governance controls: closing paragraph / applicability: There is no way to allow text and file sources while blocking the microphone. | Found: Searched: "form fill assistance" "speech" "disable"; "form fill assistance" "speech" "admin" "setting". Read form-filling-assistance, app-properties and copilot-hub; none states that independent blocking is impossible. | Fix: Replace with 'A separate speech-source control is not yet documented as of November 2026.' Documentation silence does not establish that selective blocking is impossible.
- [unsupported, blocker] Governance controls: closing paragraph / applicability: Column-level Allow form fill assistance is the finest control for this speech change. | Found: Searched: "form fill assistance" "column" "control" "granular"; speech admin setting queries. Read form-filling-assistance and copilot-hub, plus create-edit-field-portal search excerpt; column control exists, but speech applicability and finest granularity are not stated. | Fix: Replace with 'Allow form fill assistance is a documented column-level control for current form fill suggestions; Microsoft has not yet confirmed its behavior for speech input.' Remove the unsupported superlative.
- [unsupported, blocker] What's changing; Scope / availability: The speech feature is available in Worldwide only. | Found: Searched: "Power Apps" "form fill assistance" "speech" "Worldwide". Read roadmap record and form-filling-assistance; Worldwide is listed, but no exclusion of other clouds is stated. | Fix: Replace both instances of 'Worldwide only' with 'The roadmap lists Worldwide (Standard Multi-Tenant); other clouds are not listed.'
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist directs readers to disable Allow form fill assistance for sensitive columns, but the controls table has no column-property row. | Found: Checklist: 'Switch off the Allow form fill assistance column property for sensitive columns.' Controls table: environment data entry, app smart paste/toolbar, and speech-specific switch only. | Fix: Add a row for the existing column-level Allow form fill assistance property, citing https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-field-portal#create-a-column. The documentation permits disabling it for sensitive columns and labels it preview; make clear speech-specific applicability is not yet confirmed.
-->
