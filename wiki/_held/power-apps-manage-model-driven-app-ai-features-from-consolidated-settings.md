---
title: "Power Apps: model-driven app AI settings consolidated in Copilot hub and Maker Studio"
slug: "power-apps-manage-model-driven-app-ai-features-from-consolidated-settings"
roadmapId: 574104
topic: "power-platform"
products: ["Power Apps"]
summary: "Model-driven app AI switches move from Environment > Settings to Copilot hub > Power Apps, with a matching Copilot and AI tab for makers. Admins and makers need to find the new locations before the old switches are removed."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for the consolidation itself. Microsoft Learn states per-user licences for the individual AI features: a Power Apps premium licence, or a Dynamics 365 enterprise or premium licence, depending on the app."
audiences: ["power-platform-admin","maker","service-owner"]
tags: ["power-apps","model-driven-apps","power-platform-admin-center","admin-controls","maker-studio","form-fill-assistance","row-summary","generative-pages","ai","governance","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap item 574104"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574104"
    kind: "roadmap"
  - title: "Track, manage, and scale Copilot adoption in the Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub"
    kind: "learn"
  - title: "Use row summaries in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/record-summaries"
    kind: "learn"
  - title: "Use AI form fill assistance feature in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/form-filling-assistance"
    kind: "learn"
  - title: "Find data in a view with AI"
    url: "https://learn.microsoft.com/power-apps/user/find-data-with-ai"
    kind: "learn"
  - title: "Visualize data in a view with AI"
    url: "https://learn.microsoft.com/power-apps/user/visualize-data-in-copilot"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "Manage model-driven app settings in the app designer"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    kind: "learn"
  - title: "Use settings to provide customized app experiences"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-configure-settings"
    kind: "learn"
  - title: "Get or update a setting value using client API"
    url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    kind: "learn"
  - title: "pac admin"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/admin"
    kind: "learn"
videos: []
related: ["managed-environments","power-apps-model-driven-apps-use-row-summaries-in-us-government-clouds","power-apps-form-fill-assistance-using-m365-files-in-model-driven-apps","power-apps-expand-model-access-and-maker-studio-availability-for-generative-pages-via-gith"]
controls:
  - governs: "Whether row summaries are available in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Summary > Row summaries > environment > Edit setting"
      docs: "https://learn.microsoft.com/power-apps/user/record-summaries"
    api: null
    note: "Controls summaries on main forms and view pages. A Power Platform administrator enables it."
  - governs: "Whether form fill assistance is available in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Data entry"
      docs: "https://learn.microsoft.com/power-apps/user/form-filling-assistance"
    api: null
    note: "Learn says this primary admin control is moving here and is gradually rolling out."
  - governs: "Whether natural-language grid and view search and AI-generated charts are available"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Data exploration"
      docs: "https://learn.microsoft.com/power-apps/user/find-data-with-ai"
    api: null
    note: "The chart setting is named Chart Visualization under Data exploration on the visualize-data page. Both are described as moving and gradually rolling out."
  - governs: "AI settings for a single model-driven app"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Settings > Features"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-configure-settings"
    api:
      kind: "other"
      call: "Xrm.Utility.getGlobalContext().saveSettingValue(settingName, value, { overrideScope: 2, solutionUniqueName: mySolutionName })"
      docs: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    note: "General app-settings mechanism. Learn names it for the form fill and natural-language search settings; app must be saved and published."
  - governs: "Legacy environment AI switches that the roadmap says will be retired"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features"
      docs: "https://learn.microsoft.com/power-platform/admin/settings-features"
    api: null
    note: "Existing control used today. Requires the System Administrator security role or equivalent permissions. Learn says AI insight cards will be removed in a future release."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-18"
    note: "New briefing: Copilot hub and the Maker Studio Copilot and AI tab replace the old model-driven app AI switches; Learn already documents the Copilot hub paths as rolling out."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 96 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: SaveSettingValue call now gives the versioned POST path; narrowed the Default and unmanaged-environment statements; added the AI Builder and Copilot Credits meter for row summaries and Copilot chat qualifications; removed the usage-analytics bullet."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 105 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: removed the claim that no API is documented for row summaries and the legacy switches; the Power Platform environment-management settings API is now cited, and those two paths moved from table rows into the notes under the table."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 108 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: removed three table rows whose automation was wrongly shown as not documented, kept their paths in the notes and cited the environment-management settings API; noted the differing Copilot chat Default wording; app-level path now starts in the app designer."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 121 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "First briefing for this item: AI settings for model-driven apps move to Copilot hub and a new Maker Studio tab, and the old Environment > Settings switches are to be retired."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 90 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 5
verification:
  status: "held"
  date: "2026-11-18"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 90
  confirmed: 81
  unconfirmed: 2
  contradicted: 7
  attempts: 5
  hash: "3d58f51b2054ade6ff8275cc62d95959"
---

## What's changing

Microsoft plans to gather the AI settings for model-driven apps in two places. In Maker Studio, the **Settings** dialog of the model app form designer gets a new top-level **Copilot and AI** tab, so makers can see and adjust the AI options for an app in one place. In the Power Platform admin center, the settings move from **Environment > Settings** to **Copilot Hub > Power Apps**, covering Generative pages, Copilot in apps and the in-app AI skills. The roadmap item says the old model-driven app AI switches under **Environment > Settings** will be retired and removed.

The in-app skills are grouped as **Data entry** (form fill assistance), **Summary** (row summaries) and **Data analysis** (AI-generated charts and natural-language search and filtering). The roadmap item says labels and descriptions are aligned across Maker Studio and Copilot hub.

Microsoft Learn already describes part of the admin-centre move. The pages for form fill assistance, row summaries, natural-language search and chart visualisation each say the primary admin control is moving to **Copilot** > **Settings** > **Power Apps**, and describe the rollout as gradual. Learn does not yet describe the **Copilot and AI** tab in Maker Studio: the app designer settings page lists General, Advanced settings, Features, Navigation and Upcoming. Treat the tab, and the retirement of the old switches, as the roadmap's description.

The roadmap item is In development with a target of October CY2026, in the Weekly release channel at version 2610.3, for Worldwide (Standard Multi-Tenant), GCC and GCC High, on the web. The target month has passed and the record still shows In development, so treat the dates as targets and watch Learn and Message center for the actual rollout.

## Why it matters

Anyone who keeps a runbook, checklist or support article that points at **Environment > Settings > Product > Features** for AI switches will find those paths going stale. Learn already says the **AI insight cards** setting for row summaries "remains available on this page for now but will be removed in a future release", and says the form fill assistance settings are being removed from that page. Plan for the old paths to disappear.

Microsoft has not stated what happens on arrival: whether the existing values of the old switches are carried into **Copilot hub**, or whether the new settings start from their own defaults. Until that is stated, expect to verify each AI setting per environment after the change lands, and do not assume that today's configuration is preserved.

## Risk assessment

**Data exposure**

- No new data access is described. The roadmap item covers where settings live, not what the AI skills read. Whether a setting is on after the move decides whether form fill assistance, row summaries and natural-language search are available to users in an environment, so check each after the change (rows 1 to 3 of the table).

**Security & identity**

- Learn documents that tenant users with environment access can view Copilot settings, while changing them is done by choosing an environment or group and selecting **Edit setting**. Confirm which roles in your tenant can edit the new settings before delegating them.
- A preview control for who can use AI features in model-driven apps applies only to environments activated for Managed Environments, per the Copilot hub page.

**Autonomy & actions**

- Learn describes form fill assistance suggestions as optional and not saved until the user accepts them. No autonomous action is described for this consolidation.

**Change & support**

- Settings exist at several levels after the change: the Copilot hub (environment, and mostly environment groups and rules), and app-level values that Learn says can be set in the app designer. Agree with makers who owns which level so support can tell where a value was set.
- Whether the value on an old switch is migrated is not stated, so a user may report a feature appearing or disappearing without a documented cause.

## Cost and licensing

No licence or meter is stated for the consolidation itself, and the roadmap item names none. Licensing for the consolidation is not yet published.

The AI features the settings control carry their own licence statements on Learn. For form fill assistance, row summaries and natural-language grid and view search, the pages say that a Power Apps model-driven app user must have a Power Apps premium licence and a Dynamics 365 model-driven app user a Dynamics 365 enterprise or premium licence, that the feature is hidden if the user does not have the licence, and that usage might be subject to service limits or throttling. Learn names no other meter on those pages.

The indirect cost is admin and maker time to update runbooks and to re-check settings in each environment.

## Scope

The roadmap item lists the Power Apps product, model-driven apps, the web platform, and the Worldwide (Standard Multi-Tenant), GCC and GCC High clouds. Its feature scope is "Admins or makers".

The Copilot hub **Settings** page lets admins configure most settings at environment level, and through environment groups and rules. Learn describes the move of the admin controls as gradually rolling out, so the new settings may not yet appear in every tenant.

The row summaries page says a Power Platform administrator enables the setting. The legacy **Manage feature settings** page says the System Administrator security role or equivalent permissions are needed to update those environment settings. Which roles can edit the new Copilot hub settings is not stated on the pages read.

## Governance guidance

### Before rollout

- Inventory which environments currently have the AI switches under **Environment > Settings > Product > Features** turned on, off or left at default, and record the values (row 5).
- List the model-driven apps where makers have set app-level AI values in the app designer (row 4), so app-level and environment-level choices are not confused later.
- Update admin runbooks and training material so that Row summaries, Form fill assistance, Natural Language Grid and View Search and chart visualisation point to **Copilot** > **Settings** > **Power Apps** (rows 1 to 3).
- Tell makers that the roadmap item adds a **Copilot and AI** tab to the app designer **Settings** dialog, once Microsoft's rollout confirms it.

### At rollout

- Open **Copilot** > **Settings** > **Power Apps** in each environment and compare each value with your inventory before changing anything (rows 1 to 3).
- Check that the legacy switches are still present or removed, and note the date, as the roadmap item says they will be retired.
- Test with a licensed user in a pilot environment that form fill assistance, row summaries and natural-language search appear as expected.

### After rollout

- Review the **Power Apps** page in the **Copilot** area, which Learn says shows usage analytics for the data entry agent and the data exploration agent.
- Remove references to the retired switches from runbooks once the old paths are gone (row 5).
- Re-check the settings after each release, because Learn calls the move a gradual rollout.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether row summaries are available in an environment</strong><br><small>Environment</small><br><small class="controls__note">Controls summaries on main forms and view pages. A Power Platform administrator enables it.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Summary › Row summaries › environment › Edit setting <a href="https://learn.microsoft.com/power-apps/user/record-summaries" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether form fill assistance is available in an environment</strong><br><small>Environment</small><br><small class="controls__note">Learn says this primary admin control is moving here and is gradually rolling out.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Data entry <a href="https://learn.microsoft.com/power-apps/user/form-filling-assistance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether natural-language grid and view search and AI-generated charts are available</strong><br><small>Environment</small><br><small class="controls__note">The chart setting is named Chart Visualization under Data exploration on the visualize-data page. Both are described as moving and gradually rolling out.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Data exploration <a href="https://learn.microsoft.com/power-apps/user/find-data-with-ai" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>AI settings for a single model-driven app</strong><br><small>App</small><br><small class="controls__note">General app-settings mechanism. Learn names it for the form fill and natural-language search settings; app must be saved and published.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Settings › Features <a href="https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-configure-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Xrm.Utility.getGlobalContext().saveSettingValue(settingName, value, { overrideScope: 2, solutionUniqueName: mySolutionName })</code> <a href="https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Legacy environment AI switches that the roadmap says will be retired</strong><br><small>Environment</small><br><small class="controls__note">Existing control used today. Requires the System Administrator security role or equivalent permissions. Learn says AI insight cards will be removed in a future release.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features <a href="https://learn.microsoft.com/power-platform/admin/settings-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first three rows are the environment-level Copilot hub settings that Learn names for each skill. Learn describes each as a primary admin control that is moving, and as gradually rolling out, so the path may not yet be visible in every tenant. Generative pages and Copilot in apps are named in the roadmap item as part of the consolidation, but no path for them was read on the pages used here.

Row 4 is the app-level route: Learn says the form fill, natural-language search and chart settings can be configured per app in the app designer or as a setting definition. App-level values are a separate level from the environment setting. How the two interact for the new Copilot hub settings is not stated.

Row 5 is the legacy location. Learn says the **AI insight cards** setting remains available there for now and will be removed in a future release, and that the form fill assistance settings are being removed from that page. The roadmap item says the old switches will be retired.

Microsoft Learn documents no API for the Copilot hub Power Apps settings at the time of writing (November 2026): the Power Platform CLI `pac admin` command list has no command for them.

Separately, the Copilot hub page documents a preview control for who can use AI features in model-driven apps, limited to environments activated for Managed Environments. See [Managed Environments](/concepts/managed-environments/).

## Open questions

- Are the values currently set on the old **Environment > Settings** AI switches carried over to the matching **Copilot** > **Settings** > **Power Apps** settings, or do the new settings start from their own defaults? Watch the Copilot hub page and Message center.
- When will the old switches be removed, and is there a deprecation notice with a date? The roadmap item gives a target of October CY2026 and still shows In development.
- Which admin roles can edit the new Copilot hub settings, and does the environment-group setting override an app-level value?
- What does the **Copilot and AI** tab in Maker Studio let makers change, and does it write the same app-level values Learn describes?
- Will Microsoft document an API or PowerShell route for the Copilot hub Power Apps settings?

<!-- rationale
risk: Low. The roadmap item describes existing AI switches being relocated and old ones retired, not new data access; what remains open is whether current values carry over to the new settings.
cost: Low. The only cost the sources show is admin and maker time to learn the new locations; the roadmap item names no licence or meter for the consolidation itself.
impact: Medium. Power Platform admins and makers of model-driven apps are the people who see the new settings locations; the roadmap item does not describe any change for app users.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls row 1 / absence: Automation for the environment row-summaries control is not yet documented. | Found: GET https://api.powerplatform.com/environmentmanagement/environments/{environmentId}/settings?api-version=2024-10-01 powerApps_EnableFormInsights | boolean | Fix: Remove this table row, retaining its verified UI path in the notes. Replace the automation absence with: 'The Environment Management Settings API documents powerApps_EnableFormInsights; Microsoft identifies AI insight cards and Row summaries as the same control.' Cite this reference and https://learn.microsoft.com/power-platform/admin/settings-features#ai-insight-cards. | Source: https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/list-environment-management-settings
- [contradicted, blocker] controls[1].api; Governance controls row 2 / absence: Automation for environment form fill assistance controls is not yet documented. | Found: EnvironmentManagementSetting powerApps_FormPredictAutomatic | boolean powerApps_FormPredictSmartPaste | boolean | Fix: Remove this table row, keeping the verified UI path in the notes. State instead: 'The Environment Management Settings API lists powerApps_FormPredictAutomatic and powerApps_FormPredictSmartPaste.' Cite this reference; do not describe the whole automation surface as undocumented. | Source: https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/list-environment-management-settings
- [unsupported, blocker] controls[2].ui; Governance controls row 3 / admin-path: The find-data-with-ai reference documents the displayed Data exploration path for both natural-language search and AI-generated charts. | Found: Searched: Power Apps form fill assistance natural language grid search chart settings PowerShell Power Platform API Dataverse SaveSettingValue. Opened https://learn.microsoft.com/power-apps/user/find-data-with-ai and https://learn.microsoft.com/power-apps/user/visualize-data-in-copilot. | Fix: Narrow this row's governs text to 'Whether natural-language grid and view search is available', retaining its existing UI reference. Keep charts in the notes with the separately verified path 'Copilot > Settings > Power Apps > Data exploration > Chart Visualization' and https://learn.microsoft.com/power-apps/user/visualize-data-in-copilot. Do not add a row.
- [contradicted, blocker] controls[2].api; Governance controls row 3 / absence: Automation for the environment search and chart controls is not yet documented. | Found: EnvironmentManagementSetting powerApps_ChartVisualization | boolean powerApps_NLSearch | boolean | Fix: Remove this table row and retain the verified UI paths in the notes. Replace its automation absence with: 'The Environment Management Settings API lists powerApps_NLSearch and powerApps_ChartVisualization.' Cite this reference. | Source: https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/list-environment-management-settings
- [contradicted, blocker] controls[4].api; Governance controls row 5 / absence: Automation for the legacy environment AI switches is not yet documented. | Found: powerApps_CopilotChat | boolean powerApps_EnableFormInsights | boolean powerApps_FormPredictAutomatic | boolean powerApps_FormPredictSmartPaste | boolean | Fix: Remove this table row and retain its verified legacy UI path and role in the notes. State: 'The Environment Management Settings API lists environment AI properties including powerApps_CopilotChat, powerApps_EnableFormInsights, powerApps_FormPredictAutomatic and powerApps_FormPredictSmartPaste.' Cite this reference instead of claiming no automation exists. | Source: https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/list-environment-management-settings
- [contradicted, blocker] Governance controls: automation paragraph; Open questions / absence: Microsoft Learn documents no API for the Copilot hub Power Apps settings as of November 2026. | Found: powerApps_ChartVisualization | boolean powerApps_CopilotChat | boolean powerApps_EnableFormInsights | boolean powerApps_FormPredictAutomatic | boolean powerApps_FormPredictSmartPaste | boolean powerApps_NLSearch | boolean | Fix: Replace the no-API paragraph with: 'The Environment Management Settings API documents environment-level Power Apps AI properties, including powerApps_ChartVisualization, powerApps_EnableFormInsights, powerApps_FormPredictAutomatic, powerApps_FormPredictSmartPaste and powerApps_NLSearch.' Cite this reference and https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/update-environment-management-settings. Remove the open question asking whether any API will be documented. | Source: https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/list-environment-management-settings
- [unsupported, major] What's changing; Governance controls: first paragraph / behaviour: The row summaries page itself says its primary admin control is moving and gradually rolling out. | Found: Searched: Power Platform Copilot hub Power Apps settings row summaries AI insight cards API environment settings aisummary. Opened https://learn.microsoft.com/power-apps/user/record-summaries; it documents the preferred control, not a gradual control rollout. | Fix: Replace the four-page attribution with: 'Learn documents the preferred Copilot settings path for row summaries. The form fill assistance, natural-language search and chart pages describe their admin-control moves as gradually rolling out.' Apply the same narrowing to the notes beneath the table.
- [contradicted, blocker] Scope; Risk assessment; Open questions / absence: The pages read do not state which roles can edit the new Copilot hub settings. | Found: A Power Platform administrator must enable Row summaries for the environment in the Power Platform admin center under Copilot > Settings > Power Apps > Summary. | Fix: Replace the blanket absence with: 'Learn names a Power Platform administrator for Row summaries, but the pages read do not give a complete role matrix for the remaining new Copilot hub controls.' Narrow the corresponding open question to the remaining controls. | Source: https://learn.microsoft.com/power-apps/user/record-summaries
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].ui; Governance controls row 4 / admin-path: App-level settings can be edited through Settings > Features in the maker experience. | Found: Open the app you want to add the setting app value for in the app designer. On the command bar, select Settings. In the Settings dialog, select the Features or Upcoming tab. | Fix: Expand the path to 'app in app designer > Settings > Features' and qualify the note: 'Features contains generally available settings; Upcoming contains preview settings.' The omitted app-selection context and release-level qualification should be explicit. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-configure-settings
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Form fill assistance suggestions are not saved until the user accepts them. | Found: Suggestions are entirely optional and aren't saved in the app until you accept them. ... This feature is in production ready preview in Power Apps. | Fix: Add to the form fill description: 'Form fill assistance is generally available in Dynamics 365 apps and in production-ready preview in Power Apps.' This preserves the source's release-status qualification. | Source: https://learn.microsoft.com/power-apps/user/form-filling-assistance
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: The natural-language search page requires a Power Apps premium licence for Power Apps model-driven app users. | Found: Power Apps model-driven app: The user must have a Power Apps premium license. | Fix: Add: 'The legacy Manage feature settings page instead says environments containing only Power Apps-licensed users require other Copilot licences for natural-language search in production.' Cite https://learn.microsoft.com/power-platform/admin/settings-features#natural-language-grid-and-view-search to expose the disagreement rather than silently selecting one rule. | Source: https://learn.microsoft.com/power-apps/user/find-data-with-ai
- [supported, minor] Cost and licensing / licensing: Form fill assistance is hidden when a user lacks the required licence. | Found: If the user doesn't have the license, the feature is hidden. This license enforcement gradually rolls out following the feature's general availability. | Fix: Qualify the hiding statement with: 'This licence enforcement gradually rolls out following the feature's general availability.' | Source: https://learn.microsoft.com/power-apps/user/form-filling-assistance
- [supported, minor] Cost and licensing / licensing: Row summaries are hidden when a user lacks the required licence. | Found: If the user doesn't have the license, the feature is hidden. This license enforcement gradually rolls out following the feature's general availability. | Fix: Qualify the hiding statement with: 'This licence enforcement gradually rolls out following the feature's general availability.' | Source: https://learn.microsoft.com/power-apps/user/record-summaries
- [supported, minor] Cost and licensing / licensing: Natural-language search is hidden when a user lacks the required licence. | Found: If the user doesn't have the license, the feature is hidden. This license enforcement will gradually rollout following the feature's general availability. | Fix: Qualify the hiding statement with: 'This licence enforcement gradually rolls out following the feature's general availability.' | Source: https://learn.microsoft.com/power-apps/user/find-data-with-ai
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist's instruction to review usage analytics has a corresponding controls-table row. | Found: Checklist: 'Review the Power Apps page in the Copilot area'. The table covers row summaries, form fill assistance, search/charts, app settings and legacy switches, but has no usage-analytics row. | Fix: Remove the usage-analytics checklist bullet; the current table has no corresponding row. Do not add a control row as part of this correction.
- [supported, minor] front matter: cost; rationale: cost / cost: Low rates the consolidation's known indirect administration and maker cost rather than the underlying AI features. | Found: Searched: "consolidated" "AI settings" "licensing". Read roadmap and Copilot hub; neither assigns a charge to the relocation. SCHEMA permits low for known admin time when licensing is unpublished, but requires that qualification in the rationale. | Fix: Append 'Licensing for the consolidation itself is not yet published.' to the cost rationale, as required by the cost scale; leave the low rating unchanged.
-->
