---
title: "Power Apps: display density settings for model-driven apps"
slug: "power-apps-control-information-density-in-model-driven-apps"
roadmapId: 572682
topic: "power-platform"
products: ["Power Apps"]
summary: "Model-driven apps gain Comfortable, Cozy and Compact spacing that admins, makers and users can set. It applies to apps with the header and navigation refresh. Nothing is required, but plan a default and tell users."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Model-driven app use requires Power Apps premium use rights. Power Apps Premium, Power Apps per app plans and the Power Apps per app pay-as-you-go meter generally satisfy that requirement; use rights vary by app context. Additional terms specific to display density are not yet published."
audiences: ["power-platform-admin","maker","end-user","change-adoption"]
tags: ["power-apps","model-driven-apps","user-experience","personal-settings","app-designer","personalisation","solutions","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 572682"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=572682"
    kind: "roadmap"
  - title: "Appearance settings for model-driven apps (preview)"
    url: "https://learn.microsoft.com/power-apps/user/appearance-settings"
    kind: "learn"
  - title: "Modern, refreshed look for model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/modern-fluent-design"
    kind: "learn"
  - title: "Use settings to provide customized app experiences"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-configure-settings"
    kind: "learn"
  - title: "Manage model-driven app settings in the app designer"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    kind: "learn"
  - title: "SaveSettingValue Action"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue"
    kind: "learn"
  - title: "Use Web API actions"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/use-web-api-actions"
    kind: "learn"
  - title: "User Settings (UserSettings) table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/developer/reference/entities/usersettings"
    kind: "learn"
  - title: "Style components with modern theming"
    url: "https://learn.microsoft.com/power-apps/developer/component-framework/fluent-modern-theming"
    kind: "learn"
  - title: "Customize the command bar using command designer"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/use-command-designer"
    kind: "learn"
  - title: "Power Apps licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq"
    kind: "learn"
videos: []
related: ["power-apps-use-the-modernized-personal-settings-experience","power-apps-new-view-layout-in-model-driven-apps"]
controls:
  - governs: "Environment default display density for all model-driven apps"
    scope: "environment"
    ui:
      surface: "Power Apps (maker)"
      path: "Solutions > solution > Display density > Edit setting value > Setting environment value > New value"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-configure-settings"
    api:
      kind: "rest"
      call: "POST <organization URI>/api/data/v9.2/SaveSettingValue"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue"
    note: "Needs Solution preview on in Solutions; if Solution preview off is shown, select it. If Display density is not in the solution, first Add existing > More > Setting. Body sets SettingName and Value; omit AppUniqueName."
  - governs: "App default display density, and whether display density is off for an app"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Solutions > solution > app > Edit > Settings"
      docs: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    api:
      kind: "rest"
      call: "POST <organization URI>/api/data/v9.2/SaveSettingValue"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue"
    note: "Maker-side. Display density is in the Settings dialog in the app designer; Off is enum value 0. Save and publish the app. Body sets AppUniqueName, SettingName (setting definition unique name) and Value."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-24"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item: display density levels, the three layers of defaults and the maker and environment settings, from the preview Learn page."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 57 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: removed unsupported claims on permissions, budget controls and the setting-definition dialog; SaveSettingValue rows now show the POST call; noted the UserSettings description of density."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the environment default control path to the Edit setting value steps in the settings guide; the Add existing step is kept in the note."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected the app-designer route (Solutions > solution > app > Edit > Settings) in the app row and the header refresh prerequisite; licensing now follows the Power Apps licensing FAQ; SaveSettingValue calls show the POST path only."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 66 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-24"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 65
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "f0756a14d519e84aa2c55794d89d3472"
---

## What's changing

Model-driven apps get a **Display density** setting with three levels: **Comfortable**, **Cozy** and **Compact**. Microsoft's Learn page describes density as adjusting only the spacing between elements, and says it does not reduce the size of interactive controls, so every level continues to meet accessibility target-size requirements. The appearance guide describes spacing-only changes; the UserSettings reference instead describes DisplayDensity as affecting spacing, padding and font sizes.

Three layers decide the density a user sees. An admin can set an environment default, a maker can override it for a single app, and a user's own choice in **Personal settings** overrides both. If the user picks **Auto**, the app default is used. The documented default value of the setting is **Comfortable**. The roadmap item describes the feature as enabled by default for apps that have the header and navigation refresh enabled, and says makers can disable it for their apps.

Density needs the header and navigation refresh (wave 2). Learn says that without it the **Appearance** tab is not shown and the app renders at its default appearance. Learn describes wave 2 as generally available from build 2609.1 and opt-in for existing apps, and as applied automatically to apps generated by the Plan designer. Density reaches only controls that use Fluent spacing tokens; other first-party and third-party controls keep their current spacing, and Learn says this is expected.

The roadmap item is In development, with a preview date of September CY2026 and a target of November CY2026, in Worldwide (Standard Multi-Tenant), GCC and GCC High, on the web only. Its availability table lists the Weekly release channel and version 2609.1. These dates are Microsoft's targets. The Learn page on appearance settings is marked as preview documentation and is subject to change, so treat its behaviour as the preview design.

## Why it matters

This is a user-experience setting, so the effect is on how much fits on screen and how many support questions arrive, not on data. Teams doing high-volume data entry, field service or manufacturing work are the people Learn names as likely to choose a denser layout, and a default set at environment level changes what every app in that environment looks like to them.

Because the documented default is Comfortable and a user's own choice wins over admin defaults, doing nothing leaves most users on the standard spacing. The decision for an owner is whether a denser environment or app default suits a user group, and whether to tell users the choice exists. Spacing is also not a guarantee: custom controls that do not use Fluent spacing tokens will look inconsistent beside controls that do.

## Risk assessment

**Data exposure**

- No change documented: display density adjusts spacing only. Microsoft's pages describe no new data access, storage or sharing for it.

**Security & identity**

- The appearance page does not specify the permissions needed to change display density. Which roles can edit the environment or app value is not stated on the appearance page; the settings page describes an environment administrator adding an environment value and an application author adding an app value.

**Autonomy & actions**

- No change: nothing acts on the user's behalf. A user's explicit choice overrides app and environment defaults, so an admin default is a starting point and not an enforced layout. A maker who sets **Display density** to **Off** hides the options and ignores stored user preferences.

**Change & support**

- Mixed spacing is expected: controls that do not yet use Fluent spacing tokens render at their current spacing, so Compact will look uneven where custom or third-party controls sit next to supported ones. Confirm custom components against Learn's guidance on spacing tokens.
- Users who choose Compact see denser screens than other users of the same app, which affects screenshots, training material and support calls. Learn says only the listed spacing tokens (`spacingVerticalS`, `spacingVerticalM`, `spacingVerticalL`, `spacingHorizontalL`) currently receive adjustments.
- The appearance page is preview documentation, so behaviour can change before the roadmap's November CY2026 target.

## Cost and licensing

The Learn page on appearance settings and the roadmap item name no licence, add-on or meter for display density. The page's only stated prerequisite is the header and navigation refresh (wave 2). Additional licensing specific to display density is not yet published.

The Power Apps licensing FAQ says every user who runs a model-driven app needs a licence that provides Power Apps premium use rights. It says Power Apps Premium, Power Apps per app plans and the Power Apps per app pay-as-you-go meter generally satisfy that requirement, and that use rights differ by licence and by the context the app runs in. The cost to plan for beyond that is admin and maker time: choosing a default, setting the environment or app value, and communicating the personal option.

No meter is documented for this feature at the time of writing (November 2026).

## Scope

**Who and where.** The roadmap item lists Worldwide (Standard Multi-Tenant), GCC and GCC High, platform Web, and applies it to model-driven apps. Its feature scope is Users (enabled by default).

**Prerequisite.** The header and navigation refresh (wave 2) must be enabled on the app. For existing apps, a maker opts in through Power Apps (maker): Solutions > solution > app > Edit > Settings > Features > Header and navigation refresh. Apps generated by the Plan designer get the refresh automatically.

**Who configures it.** Learn describes an admin setting an environment default and a maker overriding it for an app. A user sets a personal preference from the **Settings** menu in the app header, then **Personal settings** > **Appearance** > **Display density**; that preference applies across the user's model-driven apps with the refresh enabled.

**Rollout.** The roadmap item gives the Weekly release channel and version 2609.1. Learn says availability of wave 2 might vary by region as build 2609.1 rolls out.

## Governance guidance

### Before rollout

- Decide which environments, if any, should default to Cozy or Compact, and which apps should stay on Comfortable. Use the environment default and app default rows in the table.
- Test custom code components and third-party controls at Cozy and Compact; Learn says controls that do not use Fluent spacing tokens keep their current spacing.

### At rollout

- Add the **Display density** setting to a solution in each environment where you want a non-default value, and set the environment value there.
- Tell makers that setting **Display density** to **Off** for an app hides the options from users and ignores stored user preferences.
- Tell users where the personal option lives (**Personal settings** > **Appearance**) and that **Auto** follows the app default.

### After rollout

- Check help desk tickets and user feedback about spacing and screen fit, and adjust the app default where a group needs a different density.
- Re-read the Learn page on appearance settings when it leaves preview, and check the Message center and roadmap for changes to the November CY2026 target.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Environment default display density for all model-driven apps</strong><br><small>Environment</small><br><small class="controls__note">Needs Solution preview on in Solutions; if Solution preview off is shown, select it. If Display density is not in the solution, first Add existing &gt; More &gt; Setting. Body sets SettingName and Value; omit AppUniqueName.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Solutions › solution › Display density › Edit setting value › Setting environment value › New value <a href="https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-configure-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST &lt;organization URI&gt;/api/data/v9.2/SaveSettingValue</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>App default display density, and whether display density is off for an app</strong><br><small>App</small><br><small class="controls__note">Maker-side. Display density is in the Settings dialog in the app designer; Off is enum value 0. Save and publish the app. Body sets AppUniqueName, SettingName (setting definition unique name) and Value.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Solutions › solution › app › Edit › Settings <a href="https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST &lt;organization URI&gt;/api/data/v9.2/SaveSettingValue</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows rest on the general Power Apps settings mechanism: a setting has a default value, an optional environment value and an optional app value, and an app value overrides the environment value. The appearance page names no API for density specifically; the **SaveSettingValue** action is documented generally for setting app and organisation-level overrides, and the setting's unique name is not given on the pages read.

A user's personal choice overrides both rows unless the maker has set **Display density** to **Off**. Learn does not describe a way to force a density on users who have not chosen **Auto**. The header and navigation refresh that density depends on is enabled by makers in Power Apps (maker), as set out under Scope.

## Open questions

- Which roles can set the environment default and app default values, and are they the same as for other app settings? Watch the Learn page on appearance settings.
- What is the unique name of the Display density setting, so that an environment value can be scripted with SaveSettingValue? Watch the Learn page on appearance settings and the settings reference.
- Will any licence or meter specific to display density apply when it reaches general availability? Watch the Learn page and the roadmap item.
- Will existing apps without the header and navigation refresh get density at all, or does the refresh stay a maker opt-in? Watch the Learn page on the modern, refreshed look.

<!-- rationale
risk: Low. The change adjusts layout density and touches no data; the documented default value is Comfortable, so the exposure is confusion or support questions, not data.
cost: Low. The Learn page and the roadmap item name no licence or meter for display density, so the only known cost is admin and maker time to choose a default and tell users. Additional licensing specific to display density is not yet published.
impact: Low. The documented default is Comfortable, so most users see a difference only if an environment or app default is changed or they pick Cozy or Compact themselves in Personal settings.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls / absence: Learn does not describe a way to force a density on users who have not chosen Auto. | Found: When display density is off: The app uses Comfortable density. The display density options are hidden from users. Any stored display density preference for the user is ignored. | Fix: Remove 'Learn does not describe a way to force a density on users who have not chosen Auto.' The preceding sentence already gives the correct Off exception; the documented Off setting forces Comfortable even when a user has a different stored preference. | Source: https://learn.microsoft.com/power-apps/user/appearance-settings
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui / admin-path: Power Apps (maker) > Solutions > solution > app > Edit > Settings reaches the dialog holding the app density setting. | Found: In the app designer select Settings on the command bar. When you select Settings from the command bar, select Features to enable or disable model-driven app features for the app. | Fix: Keep the route, which correctly reaches Settings. Add to its note: 'In Settings, Features displays generally available settings and Upcoming displays preview settings; select the applicable tab and edit Display density.' This is documented at https://learn.microsoft.com/power-apps/maker/data-platform/create-edit-configure-settings#setting-app-value. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties
-->
