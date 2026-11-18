---
title: "Power Apps: consolidated AI settings for model-driven apps in Maker Studio and Copilot hub"
slug: "power-apps-manage-model-driven-app-ai-features-from-consolidated-settings"
roadmapId: 574104
topic: "power-platform"
products: ["Power Apps"]
summary: "Microsoft plans to gather model-driven app AI settings in Copilot hub in the Power Platform admin center and a new Copilot and AI tab in Maker Studio, retiring the old Environment > Settings switches. Admins should plan for the move."
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
  notes: "No separate licence is documented for the consolidation. Learn says form fill assistance, row summaries and natural language search need a Power Apps premium licence, or a Dynamics 365 enterprise or premium licence, per user."
audiences: ["power-platform-admin","maker","service-owner","change-adoption"]
tags: ["power-apps","model-driven-apps","power-platform-admin-center","maker-studio","form-fill-assistance","row-summary","generative-pages","admin-controls","governance","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap item 574104: Power Apps: Manage model-driven app AI features from consolidated settings"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574104"
    kind: "roadmap"
  - title: "Track, manage, and scale Copilot adoption in the Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
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
  - title: "Manage model-driven app settings in the app designer"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    kind: "learn"
  - title: "Use settings to provide customized app experiences"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-configure-settings"
    kind: "learn"
  - title: "SaveSettingValue Action"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue"
    kind: "docs"
  - title: "Add Copilot for app users in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-ai-copilot"
    kind: "learn"
videos: []
related: ["power-apps-form-fill-assistance-using-m365-files-in-model-driven-apps","power-apps-model-driven-apps-use-row-summaries-in-us-government-clouds","managed-environments","power-apps-form-fill-assistance-using-speech-as-input-in-model-driven-apps","power-apps-expand-model-access-and-maker-studio-availability-for-generative-pages-via-gith"]
controls:
  - governs: "Row summaries in model-driven apps (environment level)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Summary > Row summaries > environment > Edit setting"
      docs: "https://learn.microsoft.com/power-apps/user/record-summaries"
    api: null
    note: "Learn calls this the preferred location; it covers main forms and view pages. Same capability as AI insight cards under Environment > Settings > Features, which Learn says will be removed in a future release."
  - governs: "Form fill assistance in model-driven apps (environment level)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Data entry"
      docs: "https://learn.microsoft.com/power-apps/user/form-filling-assistance"
    api: null
    note: "Learn says this control is gradually rolling out and that form fill assistance is in production ready preview in Power Apps."
  - governs: "Natural language search and filtering of views"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Data exploration"
      docs: "https://learn.microsoft.com/power-apps/user/find-data-with-ai"
    api: null
    note: "Learn says this is gradually rolling out; the roadmap calls the group Data analysis."
  - governs: "AI-generated charts that visualise a view"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Data exploration > Chart Visualization"
      docs: "https://learn.microsoft.com/power-apps/user/visualize-data-in-copilot"
    api: null
    note: "Learn says this change is gradually rolling out. The feature settings page labels the chart setting as preview."
  - governs: "Legacy environment-level AI switches being moved or retired"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features"
      docs: "https://learn.microsoft.com/power-platform/admin/settings-features"
    api: null
    note: "Existing control, not the new one. Needs System Administrator or equivalent. Covers the AI form fill assistance, Natural language grid and view search and AI insight cards sections."
  - governs: "App-level override of AI skill settings for one model-driven app"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Settings > Features"
      docs: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    api:
      kind: "rest"
      call: "POST SaveSettingValue {\"AppUniqueName\": \"<app unique name>\", \"SettingName\": \"<setting definition unique name>\", \"Value\": \"<value>\"}"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue"
    note: "Maker-side. Save and publish the app for a change to take effect. Learn lists the form fill assist toolbar on the Features tab; it does not yet describe a Copilot and AI tab."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-18"
    note: "New briefing: Copilot hub and the Maker Studio Copilot and AI tab replace the old model-driven app AI switches; Learn already documents the Copilot hub paths as rolling out."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 96 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 96
  confirmed: 89
  unconfirmed: 1
  contradicted: 6
  attempts: 1
  hash: "00033cb52506940fcc0fa2837ff6e7fe"
---

## What's changing

The roadmap item says Microsoft will gather the AI settings for model-driven apps into two places. In Maker Studio, the **Settings** dialog in the model app form designer gets a new top-level **Copilot and AI** tab, so makers can see and adjust the app's AI options together. In the Power Platform admin center, the model-driven app AI settings move from **Environment > Settings** into **Copilot Hub > Power Apps**, alongside settings such as Generative pages, Copilot in apps and the in-app AI skills. The old switches under **Environment > Settings** are to be retired and removed.

The roadmap groups the in-app skills as Data entry (form fill assistance), Summary (row summaries) and Data analysis (AI-generated charts, and natural-language search and filtering). Labels and descriptions are to match across Maker Studio and Copilot hub. Microsoft Learn already documents the admin side under slightly different names: **Copilot > Settings > Power Apps**, with groups called **Data entry**, **Summary** and **Data exploration**, and says these controls are gradually rolling out. Learn's app designer settings article describes a **Features** tab and an **Upcoming** tab and does not yet describe a **Copilot and AI** tab (November 2026).

The roadmap item is In development with a target of October CY2026, General Availability, for Worldwide (Standard Multi-Tenant), GCC and GCC High, on the Web platform. Its availability table lists the Weekly release channel, version 2610.3 and feature scope Admins or makers. That target month has passed and the record still says In development. The record states no default and no Message Center post was supplied.

## Why it matters

Anyone who administers model-driven app AI features from **Environment > Settings > Product > Features** is being moved to a different place, and Learn says some of those settings are already being removed from that page. Runbooks, screenshots, environment build checklists and training notes that point at the old switches will go stale, and any control that exists only on the old page stops being reachable once it is removed.

Microsoft has not stated what happens to existing values or what the default state is on arrival. The sensible view is to treat the move as a change that arrives whether or not anyone acts: record today's values per environment, then confirm the same values after the new settings appear. Learn says the new controls add environment group and Microsoft Entra group support, which is a reason to review how you want to scope each skill rather than copy the old per-environment pattern.

## Risk assessment

**Data exposure**

- Form fill assistance suggests values from the user's usage of the app and the data already on the form, from text the user copies through Smart paste, and from files the user supplies. Row summaries summarise records. The settings in this item decide which of these skills run in an environment, so a value that does not carry over can switch record or file content into, or out of, an AI skill. Rows 1 to 4 of the table cover the settings.

**Security & identity**

- Learn documents a user-level allow or exclusion list for Copilot capabilities in model-driven apps, covering form fill assistance, Smart paste, row summary, Visualize with Copilot and natural language search and filtering. It is in preview and documented only for Managed Environments, so unmanaged environments are limited to the environment-level and app-level settings.
- Form fill assistance and row summaries are hidden for users without the licence Learn names. Treat that as licence enforcement, not as an access control.

**Autonomy & actions**

- Form fill suggestions are optional and are not saved in the app until the user accepts them, so the write step stays with the user. No autonomous action is described for the skills in this item.

**Change & support**

- The old **Default** option on the form fill settings turns the feature on for Dynamics 365 model-driven apps and off for Power Apps model-driven apps. Microsoft has not said how a setting left at **Default** maps to the new Copilot hub setting, so check each environment after the new settings appear.
- Learn says an app-level value overrides the environment value for settings in its settings framework. It does not say whether the Copilot hub settings follow that rule, so a maker's per-app setting could differ from what the admin sees in Copilot hub.
- Learn warns that users might need to clear the cache and refresh the browser twice for a form fill setting change to take effect. Expect support questions straight after a change.

## Cost and licensing

No licence, price or meter is published for the consolidation itself. The roadmap record and the Learn pages read name none.

The skills it governs have their own licence rules. For form fill assistance, row summaries and natural language search, Learn says a Power Apps model-driven app user must have a Power Apps premium licence, and a Dynamics 365 model-driven app user must have a Dynamics 365 enterprise or premium licence. Learn also says the feature is hidden for a user without the licence, and that usage might be subject to service limits or throttling. For natural language search, the feature settings page says users in the environment must have a Dynamics 365 licence and that other Copilot licences are required in production if the environment has only Power Apps-licensed users. That differs from the premium-licence wording on the natural language search article; the two pages are both Microsoft's and neither is picked here.

The Learn pages for these skills name no meter such as Copilot Credits. Whether any of them draws on a meter is Not yet published. The indirect cost is admin time: recording and re-checking settings in every environment, and updating runbooks.

## Scope

**Who and what.** The roadmap item applies to model-driven apps, with feature scope Admins or makers. Admin-side settings are in the Power Platform admin center; maker-side settings are in the Maker Studio **Settings** dialog. Learn says tenant admins and environment admins can use the Copilot area, and that tenant users with environment access can view Copilot settings. Learn says the **Features** page needs the System Administrator security role or equivalent permissions.

**Clouds, platform and rollout.** The roadmap lists Worldwide (Standard Multi-Tenant), GCC and GCC High, platform Web, Weekly release channel and version 2610.3. Learn says the Copilot hub controls are gradually rolling out, so what you see can differ between environments during the rollout.

**Prerequisites.** Learn lists a modern, refreshed look and an AI form fill assistance setting enabled among form fill assistance prerequisites, and a table configured to show summaries for row summaries. The user-level allow list is in preview and documented only for Managed Environments.

## Governance guidance

### Before rollout

- Record the current value of each legacy switch per environment at **Environment > Settings > Product > Features** (the **AI form fill assistance**, **Natural language grid and view search** and **AI insight cards** sections), so you can compare after the move. This is table row 5.
- Have the Power Platform admin or environment admin list which environments are Managed Environments, since Learn documents the user-level allow list only for them (see [Managed Environments](/concepts/managed-environments/)).
- Ask makers to list model-driven apps that set their own app-level values in the app designer **Features** tab, because those overrides may differ from the environment value (table row 6).
- Update runbooks and training notes that cite the old paths.

### At rollout

- Open **Copilot > Settings > Power Apps** in each environment once it appears and compare **Data entry**, **Summary** and **Data exploration** with your recorded values (rows 1 to 4).
- Set each value explicitly rather than leaving it at **Default**, where the old Default depended on the licence type.
- Use environment groups for the settings Learn says can be configured through environment groups and rules, once you have confirmed a given setting supports them.
- Tell makers when the **Copilot and AI** tab reaches Maker Studio, and what an app-level value overrides.

### After rollout

- Confirm the legacy switches no longer appear, or are unchanged, and that no environment lost a setting you relied on.
- Review the **Power Apps** page in the Copilot area, which shows usage analytics for the data entry agent and the data exploration agent, to see whether the skills you allowed are used.
- Re-check this item's status on the roadmap and the Learn pages cited here, since the roadmap target (October CY2026) has passed without a Launched status.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Row summaries in model-driven apps (environment level)</strong><br><small>Environment</small><br><small class="controls__note">Learn calls this the preferred location; it covers main forms and view pages. Same capability as AI insight cards under Environment &gt; Settings &gt; Features, which Learn says will be removed in a future release.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Summary › Row summaries › environment › Edit setting <a href="https://learn.microsoft.com/power-apps/user/record-summaries" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Form fill assistance in model-driven apps (environment level)</strong><br><small>Environment</small><br><small class="controls__note">Learn says this control is gradually rolling out and that form fill assistance is in production ready preview in Power Apps.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Data entry <a href="https://learn.microsoft.com/power-apps/user/form-filling-assistance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Natural language search and filtering of views</strong><br><small>Environment</small><br><small class="controls__note">Learn says this is gradually rolling out; the roadmap calls the group Data analysis.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Data exploration <a href="https://learn.microsoft.com/power-apps/user/find-data-with-ai" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>AI-generated charts that visualise a view</strong><br><small>Environment</small><br><small class="controls__note">Learn says this change is gradually rolling out. The feature settings page labels the chart setting as preview.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Data exploration › Chart Visualization <a href="https://learn.microsoft.com/power-apps/user/visualize-data-in-copilot" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Legacy environment-level AI switches being moved or retired</strong><br><small>Environment</small><br><small class="controls__note">Existing control, not the new one. Needs System Administrator or equivalent. Covers the AI form fill assistance, Natural language grid and view search and AI insight cards sections.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features <a href="https://learn.microsoft.com/power-platform/admin/settings-features" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>App-level override of AI skill settings for one model-driven app</strong><br><small>App</small><br><small class="controls__note">Maker-side. Save and publish the app for a change to take effect. Learn lists the form fill assist toolbar on the Features tab; it does not yet describe a Copilot and AI tab.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Settings › Features <a href="https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST SaveSettingValue {&quot;AppUniqueName&quot;: &quot;&lt;app unique name&gt;&quot;, &quot;SettingName&quot;: &quot;&lt;setting definition unique name&gt;&quot;, &quot;Value&quot;: &quot;&lt;value&gt;&quot;}</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents the Copilot > Settings > Power Apps controls on the page for each skill, so rows 1 to 4 each read from their own article. Settings there are configured per environment, with most also available through environment groups and rules; Learn says the panel for each setting lets you pick an environment or group and select **Edit setting**.

Microsoft Learn documents no API for the Copilot hub settings or the legacy Features-page switches at the time of writing (November 2026), so those rows show no automation. The app-level row has one: the Dataverse SaveSettingValue action creates or updates an app or organisation level override of a setting definition. Learn names settings such as FormPredictSmartPasteEnabled, FormFileUploadEnabled, NLGridSearchSetting and NLChartDataVisualizationSetting as app-level settings.

The roadmap also names Generative pages and Copilot in apps among the consolidated settings. Learn documents an environment switch for Copilot chat in model-driven apps under **Environment > Settings > Product > Features** (Default, On or Off) and says chat is not enabled by default and administrators must enable it. Microsoft has not said whether that switch is the roadmap's Copilot in apps setting, so it has no row here.

The user-level allow or exclusion list is in preview and documented only for Managed Environments. It is a separate control from the environment settings in the table and its path is not given on the Learn page, so it has no row.

## Open questions

- Will existing values of the legacy environment switches, including those left at **Default**, carry over to the Copilot hub settings, and what is the default on arrival? Watch the Copilot hub article and Message center.
- What are the setting names, defaults and environment group support for **Generative pages** and **Copilot in apps** in Copilot hub, and is Copilot in apps the Copilot chat switch Learn documents under Environment > Settings > Product > Features?
- When an app-level value set in the app designer or by SaveSettingValue differs from the Copilot hub value, which wins? Learn states the override order for its settings framework but does not say the Copilot hub settings use it.
- Will the Maker Studio **Copilot and AI** tab be documented on the app designer settings article, and will it expose the same controls as Copilot hub for makers, or only read the admin value?
- Does the roadmap name **Data analysis** while Learn says **Data exploration**: which label will shipped Copilot hub use, and will an API be documented for the Copilot hub settings?

<!-- rationale
risk: Medium. The old environment switches are to be retired and removed, and Microsoft has not said how existing values carry over, so an AI skill could end up on or off differently from today.
cost: Low. The only cost the sources show for the consolidation itself is admin time; the skills it governs carry their own user licence requirements, and no price or meter for the consolidation is published.
impact: Medium. Power Platform admins and makers see the new locations; end users notice only if a skill's availability changes, which Microsoft has not said will happen.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[5].api / command: POST SaveSettingValue with AppUniqueName, SettingName and Value is a complete REST call for an app-level override. | Found: Searched: "SaveSettingValue" "POST". Read SaveSettingValue Action and Use Web API actions. The action and three parameters exist, but the printed call omits the Dataverse service path and API version; the action reference supplies no standalone relative POST example. | Fix: Replace the call with POST <organization URI>/api/data/v9.2/SaveSettingValue {"AppUniqueName":"<app unique name>","SettingName":"<setting definition unique name>","Value":"<value>"}. Retain the action reference and cite https://learn.microsoft.com/power-apps/developer/data-platform/webapi/use-web-api-actions for the POST and versioned service-root syntax. The pre-check's missing literal POST does not mean the action is fictitious.
- [contradicted, blocker] Risk assessment: Security & identity / applicability: Unmanaged environments are limited to environment-level and app-level settings. | Found: The Allow form fill assistance column property enabled for the column where form fill assistance occurs. | Fix: Replace 'so unmanaged environments are limited to the environment-level and app-level settings' with 'so this user-level allow or exclusion list is not documented for unmanaged environments'. Do not imply that table- or column-level controls do not exist. | Source: https://learn.microsoft.com/power-apps/user/form-filling-assistance
- [contradicted, blocker] Risk assessment: Change & support; Governance guidance: At rollout / default: The old Default option on form-fill settings turns the feature on for Dynamics 365 apps and off for Power Apps apps. | Found: Form fill assist toolbar ... In the monthly channel, if you select the Default option, the feature is turned on for users of all model-driven apps. | Fix: Narrow the sentence to 'For the legacy Automatic suggestions setting, Default turns the feature on for Dynamics 365 model-driven app users and off for Power Apps model-driven app users.' In the rollout checklist, replace 'where the old Default depended on the licence type' with 'after checking what Default means for that particular setting'. The toolbar has a different default, and Smart paste and file suggestions has a monthly-channel qualification. | Source: https://learn.microsoft.com/power-platform/admin/settings-features
- [contradicted, blocker] Cost and licensing / absence: Whether any governed skill draws on a meter is Not yet published. | Found: In Power Apps and Power Automate, prompt and model capabilities consume Copilot Credits in the following scenarios: - When there are no AI Builder credits available. - When AI Builder credits computed consumption is in overage compared to initial capacity. | Fix: Replace 'Whether any of them draws on a meter is Not yet published' with 'Microsoft says row summaries rely on AI Builder to execute summary prompts. AI Builder prompt and model capabilities in Power Apps consume Copilot Credits when AI Builder credits are unavailable or exceeded.' Cite https://learn.microsoft.com/power-apps/maker/common/faq-record-summaries and https://learn.microsoft.com/ai-builder/message-management. Do not infer a feature-specific rate or change the consolidation's cost rating. | Source: https://learn.microsoft.com/ai-builder/message-management
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity; Cost and licensing / licensing: The governed features are hidden for users without the required licence. | Found: If the user doesn't have the license, the feature is hidden. This license enforcement gradually rolls out following the feature's general availability. | Fix: Add 'Microsoft says this licence enforcement rolls out gradually following general availability' to the hiding statement. The row-summary and natural-language search articles carry the same qualification. | Source: https://learn.microsoft.com/power-apps/user/form-filling-assistance
- [supported, minor] Governance controls / default: Copilot chat is not enabled by default and administrators must enable it. | Found: Copilot chat for app users in model-driven apps isn't enabled by default. Administrators must manually enable this feature for their environments | Fix: Report the same article's qualification immediately after this statement: 'The same article says the Default option disables Copilot chat for Power Apps-licensed environments and enables it for Dynamics 365-licensed environments.' This preserves both statements instead of silently choosing one. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-ai-copilot
- [contradicted, minor] Governance controls: Copilot chat paragraph / consistency: The paragraph presents the neighbouring Copilot chat control without its Power Apps preview qualification. | Found: This feature is generally available in Dynamics 365 apps, but remains a preview feature in Power Apps. | Fix: Add '(generally available in Dynamics 365 apps, preview in Power Apps)' after 'Copilot chat in model-driven apps'. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-ai-copilot
- [contradicted, minor] front matter: action; Governance guidance / consistency: The prepare action rating fits a medium-risk mandatory change whose controls are already rolling out and whose target month has passed. | Found: action: "prepare"; risk: "medium"; 'The old switches ... are to be retired and removed'; 'these controls are gradually rolling out'. | Fix: Set action to 'act-now': the page describes a rolling-out mandatory replacement, medium risk and settings decisions to take before it lands. This is a rating-definition correction, not a new rollout date.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: Every checklist monitoring control is represented in the table, including Power Apps usage analytics. | Found: 'Review the Power Apps page in the Copilot area, which shows usage analytics'; the six table rows cover skill settings, legacy switches and app overrides, not usage analytics. | Fix: Remove the usage-analytics checklist bullet, whose monitoring control has no row. Do not add a new control row as part of this correction.
-->
