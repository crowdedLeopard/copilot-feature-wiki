---
title: "Power Apps: speech as an input source for form fill assistance in model-driven apps"
slug: "power-apps-form-fill-assistance-using-speech-as-input-in-model-driven-apps"
roadmapId: 576281
topic: "power-platform"
products: ["Power Apps"]
summary: "Microsoft plans to let users in model-driven apps record speech with a microphone icon and use the transcript as a source for form fields. Recordings are transient and not saved."
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
  - title: "Manage model-driven app settings in the app designer"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    kind: "learn"
  - title: "Get or update a setting value using client API"
    url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    kind: "learn"
  - title: "Track, manage, and scale Copilot adoption in the Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub"
    kind: "learn"
  - title: "Form fill assistance (data entry agent) per environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-apps/user/form-filling-assistance#admin-control"
    kind: "learn"
videos: []
related: ["power-apps-use-the-modernized-personal-settings-experience"]
controls:
  - governs: "Form fill assistance (data entry agent) per environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Data entry"
      docs: "https://learn.microsoft.com/power-apps/user/form-filling-assistance#admin-control"
    api: null
    note: "This move is gradually rolling out. Selecting the setting opens a panel to select the environment and Edit setting (Copilot hub page)."
  - governs: "Form fill assist toolbar for an app"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "app designer > Settings > Features > Form fill assist toolbar"
      docs: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    api:
      kind: "other"
      call: "Xrm.Utility.getGlobalContext().saveSettingValue(\"FormFileUploadEnabled\", value, {overrideScope: 2, solutionUniqueName: mySolutionName})"
      docs: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    note: "Save and Publish the app. The designer page shows the toolbar label only; Smart paste is the FormPredictSmartPasteEnabled app setting."
  - governs: "Speech-specific switch"
    scope: "environment"
    ui: null
    api: null
    note: "Microsoft has not yet documented which existing controls govern the speech source."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-19"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576281 with Learn form fill guidance."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-17"
    note: "Corrected after the independent check: removed unsupported claims about transcript storage, speech processing, microphone permissions and shutdown behaviour; fixed the app-level control path and API."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 46 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the app-level control row: it now names only the form fill assist toolbar setting, with Smart paste noted as a separate setting; summary now attributes the speech plan to Microsoft."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 47 statements confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-26"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 46
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "3c87dd84af4395c432fac8a52cfc290c"
---

## What's changing

Form fill assistance in Power Apps will accept speech as a source. Users select the microphone icon and record their content, and the transcript is used as a source for the form entry. The roadmap says recordings are transient and not saved.

Learn describes form fill assistance as AI-suggested field values that users must review and accept before saving. Current sources include files and pasted text.

The roadmap lists general availability for December CY2026 (a target), monthly channel, version 2612.1, with Android among the platforms. Feature scope is users, enabled by default. The roadmap lists Worldwide (Standard Multi-Tenant); other clouds are not listed.

## Why it matters

Because the feature is on by default, users may begin dictating records, including customer or health details, without any announcement. Service owners should decide whether speech input suits their data and workplace settings.

There is also a records angle: the roadmap says recordings are transient and not saved; transcript storage and retention are not yet documented. The values the user accepts are saved.

## Risk assessment

**Data exposure**
- The roadmap says a transcript supplies form entry and that recordings are transient; the speech processing architecture is not yet documented. Confirm region and retention in Learn at release.
- Learn says fields with column security are not supported for suggestions.

**Security & identity**
- Microphone permission requirements for this speech feature are not yet documented.

**Autonomy & actions**
- Suggestions need user acceptance. Nothing saves until the user does so.

**Change & support**
- Transcription errors may enter records. Brief users to check values.

## Cost and licensing

Learn says form fill assistance needs a Power Apps premium licence for model-driven apps or a Dynamics 365 enterprise or premium licence, and is hidden without one. Learn adds that this licence enforcement gradually rolls out following the feature's general availability. No extra speech meter is published. Usage may be subject to service limits.

## Scope

Users of model-driven apps with form fill assistance on, including mobile platforms per the roadmap. The roadmap lists Worldwide (Standard Multi-Tenant); other clouds are not listed. Fields must allow form fill assistance. Learn gives the current form fill assistance limits as text, numeric, choice and date field types, and marks the underlying feature as production ready preview in Power Apps, so these are not final speech-release specifications.

## Governance guidance

### Before rollout
- Decide whether speech input is acceptable for each app and data class.
- Review the form fill assistance settings per environment.
- Draft user guidance on dictation in shared spaces.

### At rollout
- Check the Data entry setting under Copilot > Settings > Power Apps before the roadmap target of December CY2026.

### After rollout
- Sample records for transcription errors.
- Gather user feedback and adjust settings.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Form fill assistance (data entry agent) per environment</strong><br><small>Environment</small><br><small class="controls__note">This move is gradually rolling out. Selecting the setting opens a panel to select the environment and Edit setting (Copilot hub page).</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Data entry <a href="https://learn.microsoft.com/power-apps/user/form-filling-assistance#admin-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Form fill assist toolbar for an app</strong><br><small>App</small><br><small class="controls__note">Save and Publish the app. The designer page shows the toolbar label only; Smart paste is the FormPredictSmartPasteEnabled app setting.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>app designer › Settings › Features › Form fill assist toolbar <a href="https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Xrm.Utility.getGlobalContext().saveSettingValue(&quot;FormFileUploadEnabled&quot;, value, {overrideScope: 2, solutionUniqueName: mySolutionName})</code> <a href="https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Speech-specific switch</strong><br><small>Environment</small><br><small class="controls__note">Microsoft has not yet documented which existing controls govern the speech source.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft has not yet documented which existing controls govern the speech source. A separate speech-source control is not yet documented as of November 2026, so the rows above are the general form fill controls, not confirmed speech-specific governance.

The legacy environment feature flag is listed in the [feature settings reference](https://learn.microsoft.com/power-platform/admin/settings-features#ai-form-fill-assistance) and is being retired. Allow form fill assistance is a documented column-level control for current form fill suggestions; Microsoft has not yet confirmed its behaviour for speech input. Microsoft Learn documents no API for the Data entry control at the time of writing (November 2026).

## Open questions

- Is there a separate switch for speech input?
- Where is audio processed, and for how long?
- Which languages are supported?

<!-- rationale
risk: Medium. It is enabled by default for users and processes spoken content, which may include personal or sensitive information.
cost: Low. Learn says form fill assistance needs a Power Apps premium or Dynamics 365 licence; no additional charge for speech is published.
impact: High. The roadmap lists users as enabled by default, so many users of enabled apps may see the microphone.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The maker-portal route to the app toolbar control is app designer > Settings > Features > Form fill assist toolbar. | Found: Open the solution that contains the model-driven app. ... Select the model-driven app and select the Edit split menu to open it by using the modern app designer. ... Open Settings and switch to Features. | Fix: Replace controls[1].ui.path and the rendered table path with 'Solutions > solution > app > Edit > Settings > Features > Form fill assist toolbar'. Cite https://learn.microsoft.com/power-apps/maker/model-driven-apps/create-model-driven-app for Solutions and https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/send-in-app-notifications for opening the existing app with Edit. Keep app-properties as the control's docs link; it documents Settings, Features and the toolbar setting. | Source: https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/send-in-app-notifications
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance: At rollout / admin-path: The environment-level form fill assistance control is at Power Platform admin center > Copilot > Settings > Power Apps > Data entry. | Found: The primary admin control for form fill assistance is moving to the Power Platform admin center under Copilot > Settings > Power Apps > Data entry. | Fix: Extend controls[0].ui.path and the rendered table path to 'Copilot > Settings > Power Apps > Data entry > environment > Edit setting'. The cited control page gives the first steps; https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub gives environment selection and Edit setting. | Source: https://learn.microsoft.com/power-apps/user/form-filling-assistance#admin-control
-->
