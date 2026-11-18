---
title: "Power Apps: consolidated AI settings for model-driven apps in Copilot hub and Maker Studio"
slug: "power-apps-manage-model-driven-app-ai-features-from-consolidated-settings"
roadmapId: 574104
topic: "power-platform"
products: ["Power Apps"]
summary: "Model-driven app AI settings move to Copilot > Settings > Power Apps in the admin centre and a new Copilot and AI tab in Maker Studio; old Environment > Settings switches are retired. Admins should prepare."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "per-user"
  notes: "Learn's pages for form fill assistance, row summaries and natural language search say each needs a Power Apps premium licence or a Dynamics 365 enterprise or premium licence. No licence specific to the consolidation is published."
audiences: ["power-platform-admin","maker","change-adoption"]
tags: ["power-apps","model-driven-apps","power-platform-admin-center","maker-studio","form-fill-assistance","row-summary","generative-pages","admin-controls","ai","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 574104"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574104"
    kind: "roadmap"
  - title: "Track, manage, and scale Copilot adoption in the Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "Use AI form fill assistance feature in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/form-filling-assistance"
    kind: "learn"
  - title: "Use row summaries in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/record-summaries"
    kind: "learn"
  - title: "Find data in a view with AI"
    url: "https://learn.microsoft.com/power-apps/user/find-data-with-ai"
    kind: "learn"
  - title: "Visualize data in a view with AI"
    url: "https://learn.microsoft.com/power-apps/user/visualize-data-in-copilot"
    kind: "learn"
  - title: "Manage model-driven app settings in the app designer"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    kind: "learn"
  - title: "Get or update a setting value using client API"
    url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    kind: "learn"
videos: []
related: ["managed-environments","power-apps-model-driven-apps-use-row-summaries-in-us-government-clouds","power-apps-form-fill-assistance-supports-more-field-types","power-apps-form-fill-assistance-using-m365-files-in-model-driven-apps"]
controls:
  - governs: "Whether form fill assistance is available in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Data entry"
      docs: "https://learn.microsoft.com/power-apps/user/form-filling-assistance"
    api: null
    note: "Learn says this change is gradually rolling out. Select an environment or environment group, then Edit setting."
  - governs: "Whether row summaries are shown on main forms and view pages"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Summary > Row summaries"
      docs: "https://learn.microsoft.com/power-apps/user/record-summaries"
    api: null
    note: "Learn says the AI insight cards environment setting controls the same capability and will be removed in a future release."
  - governs: "Natural language grid and view search, and AI-generated chart visualisation"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Data exploration"
      docs: "https://learn.microsoft.com/power-apps/user/find-data-with-ai"
    api: null
    note: "The roadmap calls this group Data analysis. Learn's chart page gives Data exploration > Chart Visualization for the chart setting."
  - governs: "Form fill assist toolbar for one model-driven app"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "App designer > Settings > Features > Form fill assist toolbar"
      docs: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    api:
      kind: "other"
      call: "Xrm.Utility.getGlobalContext().saveSettingValue(settingName, value, saveSettingOptions)"
      docs: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    note: "Existing maker-side control, not the new Copilot and AI tab. Learn names the app setting FormFileUploadEnabled; overrideScope 2 sets the app value."
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
  - date: "2026-11-18"
    note: "New briefing: AI settings for model-driven apps consolidate into Copilot > Settings > Power Apps and a Maker Studio tab; old Environment > Settings switches are retired."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 8 of 83 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 6
verification:
  status: "held"
  date: "2026-11-18"
  version: 6
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 74
  unconfirmed: 1
  contradicted: 8
  attempts: 6
  hash: "6d318cfc03f61e169b33f6cd4ef4be0b"
---

## What's changing

Roadmap item 574104 says model-driven app AI settings are being gathered into two places. In Maker Studio, the Settings dialog in the model app form designer gets a new top-level **Copilot and AI** tab. In the Power Platform admin center, the settings move from Environment > Settings into Copilot Hub > Power Apps, covering Generative pages, Copilot in apps and the in-app AI skills. The roadmap groups the skills as Data entry (form fill assistance), Summary (row summaries) and Data analysis (AI-generated charts and natural-language search and filtering), and says the old model-driven app AI switches under Environment > Settings will be retired and removed.

Microsoft Learn already points administrators to the new location for three of these skills. The form fill assistance, row summary and natural language search pages each say the primary admin control is moving to Copilot > Settings > Power Apps, under **Data entry**, **Summary** and **Data exploration** respectively. Learn's label is Data exploration, where the roadmap says Data analysis; use Learn's label when following the path. Learn says the change is gradually rolling out, that the form fill settings are removed from the Environment > Settings > Features page, that the natural language search and chart settings will be removed from it, and that the **AI insight cards** switch remains there for now alongside **Row summaries**. At the time of writing (November 2026), Learn does not describe the Copilot and AI tab in Maker Studio or a Generative pages setting in Copilot hub, so those two rest on the roadmap description.

The roadmap record gives the status as In development with a target of October CY2026, the Weekly release channel and version 2610.3. Both the target month and Learn's rollout wording are Microsoft's statements, and they differ: treat the date as a target until the status changes. The record lists Worldwide (Standard Multi-Tenant), GCC and GCC High, on the Web platform, at General Availability.

## Why it matters

The roadmap item says admins and makers will find model-driven app AI options in one place instead of scattered among other settings, and Learn says the new controls add environment group and Entra group support. For a service owner the practical effect is that runbooks, training notes and change records that point to Environment > Settings > Product > Features for these AI switches will go out of date as the old switches are removed.

Microsoft has not stated what the new settings default to on arrival or whether existing values carry across. The sensible view is to record each environment's current values now, so that any difference after the move is visible and can be corrected before users notice.

## Risk assessment

**Data exposure**

- Form fill assistance can suggest values from text or an image a user copies to the clipboard (smart paste) and from files a user uploads. The **Data entry** setting is the environment-level control for it. Row summaries generate a summary of a record on main forms and view pages, controlled by the **Summary** setting.
- Learn says the form fill feature needs the **Allow form fill assistance** column property on each column that receives suggestions, so column choice limits what is filled.

**Security & identity**

- The old Environment > Settings > Features page asks for the System Administrator security role or equivalent. Learn's Copilot hub page says tenant admins and environment admins can access the Copilot area, and that tenant users with environment access can view Copilot settings. Confirm who can edit before delegating.
- Learn's Copilot hub page describes a preview control that limits which users in an environment can use some Copilot features in model-driven apps. It applies only to Managed Environments, and only a subset of features adhere to it.

**Autonomy & actions**

- No new autonomy is described. Learn says form fill suggestions are shown for the user to review and accept before they are saved.

**Change & support**

- During the transition, one capability can have two switches: Learn says **AI insight cards** and **Row summaries** control the same capability. Helpdesk and admins need to know which one to use, and the roadmap says the old one is to be retired.
- The roadmap says Data analysis and Learn says Data exploration, and rollout is gradual, so environments may show different settings for a while.

## Cost and licensing

The roadmap item names no licence or meter for the consolidated settings, and Learn's Copilot hub page publishes none for them.

The AI skills the settings control have licence requirements on their own Learn pages. For form fill assistance, row summaries and natural language grid and view search, Learn says: for a Power Apps model-driven app the user must have a Power Apps premium licence; for a Dynamics 365 model-driven app the user must have a Dynamics 365 enterprise or premium licence. If the user lacks the licence, the feature is hidden. Learn also says usage might be subject to service limits or throttling.

The indirect cost is admin and maker time: auditing current values, updating runbooks and communicating the moved controls. A credit rate or meter specific to these settings is not yet published.

## Scope

**Who and where.** The roadmap lists the scope as admins or makers and the applies-to as model-driven apps, on the Web platform, in Worldwide (Standard Multi-Tenant), GCC and GCC High, at General Availability. Release channel is Weekly and version is 2610.3, per the roadmap description.

**Settings level.** Learn says Copilot hub settings are configured at the environment level, with most also configurable through environment groups and rules, and that the new form fill and natural language search controls add environment group and Entra group support.

**Prerequisites Learn gives for the skills.** Form fill assistance needs at least one of the AI form fill assistance environment settings enabled, and the **Allow form fill assistance** column property on the column. Row summaries need a Power Platform administrator to enable **Row summaries** for the environment.

## Governance guidance

### Before rollout

- Record the current value of each model-driven app AI switch under Environment > Settings > Product > Features (AI form fill assistance, Natural language grid and view search, AI insight cards) for every environment, so the values can be compared later.
- Update runbooks and training notes that send admins to Environment > Settings > Product > Features for these switches so they point to Copilot > Settings > Power Apps.
- Tell makers that the form fill assist toolbar, smart paste and the natural language search and chart settings are configured per app in the app designer or by updating a setting definition, as Learn describes.
- Decide whether to try the preview control that limits which users can use model-driven app AI features, which needs a Managed Environment (see /concepts/managed-environments/).

### At rollout

- Open Copilot > Settings > Power Apps in the Power Platform admin center, select each environment or environment group and compare **Data entry**, **Summary** and **Data exploration** with the values you recorded.
- Confirm who holds the tenant admin or environment admin role that can edit these settings, and that nobody else needs edit access.
- Check the model app form designer's Settings dialog for the **Copilot and AI** tab when it reaches your tenant, and compare its labels with the admin centre.

### After rollout

- Verify that the retired switches under Environment > Settings > Product > Features no longer carry a value that differs from the new setting, and use the new setting where both appear.
- Test with a licensed pilot user in a changed environment that form fill assistance, row summaries, natural language search and AI-generated charts behave as intended.
- Watch Message center and the Copilot hub page for the removal dates of the remaining old switches.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether form fill assistance is available in an environment</strong><br><small>Environment</small><br><small class="controls__note">Learn says this change is gradually rolling out. Select an environment or environment group, then Edit setting.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Data entry <a href="https://learn.microsoft.com/power-apps/user/form-filling-assistance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether row summaries are shown on main forms and view pages</strong><br><small>Environment</small><br><small class="controls__note">Learn says the AI insight cards environment setting controls the same capability and will be removed in a future release.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Summary › Row summaries <a href="https://learn.microsoft.com/power-apps/user/record-summaries" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Natural language grid and view search, and AI-generated chart visualisation</strong><br><small>Environment</small><br><small class="controls__note">The roadmap calls this group Data analysis. Learn's chart page gives Data exploration &gt; Chart Visualization for the chart setting.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Data exploration <a href="https://learn.microsoft.com/power-apps/user/find-data-with-ai" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Form fill assist toolbar for one model-driven app</strong><br><small>App</small><br><small class="controls__note">Existing maker-side control, not the new Copilot and AI tab. Learn names the app setting FormFileUploadEnabled; overrideScope 2 sets the app value.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>App designer › Settings › Features › Form fill assist toolbar <a href="https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Xrm.Utility.getGlobalContext().saveSettingValue(settingName, value, saveSettingOptions)</code> <a href="https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The environment-level skill settings are in Copilot > Settings > Power Apps; select an environment or environment group, then **Edit setting**. The old switches under Environment > Settings > Product > Features are the existing alternative: Learn says the form fill ones are removed, the natural language search and chart ones will be removed, and **AI insight cards** remains for now. They do not cover the Copilot and AI tab or any Generative pages setting, which Learn does not yet describe.

The maker row is the control Learn documents today for one app's form fill assist toolbar; it is not the new Copilot and AI tab. Learn says the smart paste, natural language search and chart settings are also set per app in the app designer or by updating a setting definition.

A preview control in Copilot hub limits which users in an environment can use some model-driven app Copilot features (Managed Environments only, subset of features); the Learn page gives no navigation steps for it, so it has no row.

## Open questions

- Do the values set on the old Environment > Settings switches carry over to Copilot > Settings > Power Apps, and what does each new setting default to on arrival? Watch Message center and the Copilot hub page.
- On what dates are the remaining old switches (natural language search, charts, AI insight cards) removed, and will a Message center post carry an act-by date?
- Which options sit on the Maker Studio **Copilot and AI** tab, and how do they interact with the environment-level values from Copilot hub?
- Where will Microsoft document the Generative pages and Copilot in apps settings under Copilot hub > Power Apps?
- Will Microsoft document an API or CLI for the Copilot hub Power Apps settings?

<!-- rationale
risk: Medium. The old Environment > Settings AI switches are being retired and Microsoft has not said whether their values carry over, so each environment's current values need checking.
cost: Low. The roadmap item names no new licence or meter; the AI features themselves need a Power Apps premium or Dynamics 365 licence per Learn, so the cost here is admin time.
impact: Medium. Power Platform admins and makers who manage model-driven app AI options notice the moved settings; end users are affected where a setting's value changes.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls: first table row / absence: Microsoft has not documented automation for the environment's form fill assistance settings. | Found: | powerApps\_FormPredictAutomatic | boolean |  | | powerApps\_FormPredictSmartPaste | boolean |  | | Fix: Remove the first table row rather than reporting its automation as Not yet documented; retain its existing UI description in the notes. The EnvironmentManagementSetting schema documents powerApps_FormPredictAutomatic and powerApps_FormPredictSmartPaste, and https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/update-environment-management-settings documents PATCH /environmentmanagement/environments/{environmentId}/settings?api-version=2024-10-01 for updating its fields. | Source: https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/list-environment-management-settings
- [contradicted, blocker] controls[1].api; Governance controls: second table row / absence: Microsoft has not documented automation for the environment-level row summaries control. | Found: | powerApps\_EnableFormInsights | boolean |  | | Fix: Remove the row summaries table row instead of declaring its automation undocumented; keep the existing row summaries UI description in the notes. The environment-management settings schema includes powerApps_EnableFormInsights and https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/update-environment-management-settings documents the setting-field update operation. | Source: https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/list-environment-management-settings
- [contradicted, blocker] controls[2].ui; Governance controls: third table row / admin-path: Copilot > Settings > Power Apps > Data exploration and its linked search page document both search and the chart visualisation control. | Found: The primary admin control for visualizing data in a view is moving to the Power Platform admin center under Copilot > Settings > Power Apps > Data exploration > Chart Visualization. | Fix: Narrow controls[2].governs and its rendered row to 'Natural language grid and view search'. Keep its current search docs URL and Data exploration path; the chart control has the additional Chart Visualization step and is documented on https://learn.microsoft.com/power-apps/user/visualize-data-in-copilot, not the row's search reference. | Source: https://learn.microsoft.com/power-apps/user/visualize-data-in-copilot
- [contradicted, blocker] controls[2].api; Open questions: API or CLI / absence: Microsoft has not documented API automation for the environment's natural language search and chart settings. | Found: | powerApps\_ChartVisualization | boolean |  | | powerApps\_NLSearch | boolean |  | | Fix: Remove the combined search/chart table row rather than printing Not yet documented for automation, and remove the API-or-CLI open question. Retain the already written UI paths in the notes. The environment-management settings API documents powerApps_NLSearch and powerApps_ChartVisualization and its update operation is documented at https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/update-environment-management-settings. | Source: https://learn.microsoft.com/rest/api/power-platform/environmentmanagement/environment-management-settings/list-environment-management-settings
- [contradicted, blocker] controls[3].ui; Governance controls: maker table row / admin-path: App designer > Settings > Features > Form fill assist toolbar is the route from the Power Apps maker surface to the toolbar control. | Found: On the left navigation pane, select Solutions. Open the solution containing the existing model-driven app. Select the model-driven app where you want to add a custom page, and then select Edit on the command bar. | Fix: Replace the maker path with 'Solutions > solution > model-driven app > Edit > Settings > Features > Form fill assist toolbar'. Cite https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-page-to-model-app for entry to the designer and retain the existing app-properties docs URL for the final steps. The current path starts inside the designer without saying how to reach it. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-page-to-model-app
- [contradicted, blocker] Governance guidance: Before rollout; Governance controls: legacy paths / admin-path: Environment > Settings > Product > Features is the navigable admin-centre route for inspecting the legacy switches. | Found: In the navigation pane, select Manage. In the Manage pane, select Environments. On the Environments page, select an environment. In the command bar, select Settings. Expand Product, and then select Features. | Fix: For actionable legacy-switch instructions, use 'Manage > Environments > environment > Settings > Product > Features' in the Power Platform admin center. Keep 'Environment > Settings' only where quoting the roadmap or Learn's shorthand description of the move. | Source: https://learn.microsoft.com/power-platform/admin/settings-features
- [unsupported, blocker] Governance guidance: At rollout, edit-access bullet / role: The tenant admin or environment admin role can edit these Power Apps Copilot settings. | Found: Searched: '"Copilot settings" "edit" "environment admins"' and '"Copilot" "settings" "environment admin" edit permissions Power Apps'; read Copilot hub, skill pages and permission-reference excerpt. Hub establishes access, not an edit-permission grant for both roles. | Fix: Replace the bullet with 'Confirm who can edit these settings before delegating, and check that nobody else needs edit access.' Retain the separately supported statements that tenant and environment admins can access the Copilot area and tenant users with environment access can view settings.
- [contradicted, blocker] Governance controls: legacy-alternative paragraph; Governance guidance: Before and After rollout / consistency: The legacy form fill switches remain an existing alternative that administrators can inspect and compare after retirement. | Found: The old switches under Environment > Settings > Product > Features are the existing alternative: Learn says the form fill ones are removed | Fix: Replace that paragraph's legacy-alternative sentence with 'Learn says the old form fill controls are removed; the natural language search and chart controls will be removed, and AI insight cards remains for now.' Change the before-rollout inventory instruction to 'Record values from the new controls and any legacy controls still visible.' Replace the after-rollout legacy-value check with 'Where both locations remain visible, use the new setting and compare the values.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Smart paste uses text or an image copied to the clipboard to suggest form values. | Found: Smart paste is a capability that analyzes the form and the text or image you copy to your clipboard. | Fix: Add the qualification 'Learn marks form fill assistance as production-ready preview in Power Apps and generally available in Dynamics 365 apps.' to the form fill discussion, citing https://learn.microsoft.com/power-apps/user/form-filling-assistance. The roadmap's GA phase is for the consolidation and does not establish GA for every underlying skill. | Source: https://learn.microsoft.com/power-apps/user/form-filling-assistance
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: The natural language search feature page requires a Power Apps premium licence for Power Apps model-driven app users. | Found: Power Apps model-driven app: The user must have a Power Apps premium license. | Fix: Add: 'The feature page lists Power Apps premium; Manage feature settings additionally says that if an environment only has users with Power Apps licensing, other Copilot licences are required to use natural language search in production.' Cite https://learn.microsoft.com/power-platform/admin/settings-features#natural-language-grid-and-view-search for that differing guidance. | Source: https://learn.microsoft.com/power-apps/user/find-data-with-ai
- [supported, minor] Cost and licensing / licensing: The skills are hidden if a user lacks the required licence. | Found: If the user doesn't have the license, the feature is hidden. This license enforcement gradually rolls out following the feature's general availability. | Fix: Append 'This licence enforcement is gradually rolling out following each feature's general availability.' The same qualification appears on the cited form fill, row summary and natural language search pages. | Source: https://learn.microsoft.com/power-apps/user/record-summaries
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every control the governance checklist tells readers to configure or consider is represented in the controls table. | Found: Tell makers that the form fill assist toolbar, smart paste and the natural language search and chart settings are configured per app Decide whether to try the preview control | Fix: The before-rollout checklist names app-level smart paste, natural language search and chart settings and the preview user-restriction control, but those have no corresponding table rows. Remove those two checklist bullets; retain the existing explanatory notes about these controls rather than adding unverified rows.
-->
