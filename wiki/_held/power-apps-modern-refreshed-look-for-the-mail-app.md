---
title: "Power Apps: modern, refreshed look reaches the mail app on the semi-annual channel"
slug: "power-apps-modern-refreshed-look-for-the-mail-app"
roadmapId: 571681
topic: "power-platform"
products: ["Power Apps"]
summary: "The Fluent-based modern look for model-driven apps now extends to the mail app for environments on the semi-annual channel. It is always enabled for users; administrators need only warn users and check their release channel."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The Microsoft Learn page for the modern, refreshed look names no licence, meter or price for it, and the roadmap item names none either."
audiences: ["power-platform-admin","service-owner","change-adoption","end-user"]
tags: ["power-apps","model-driven-apps","user-experience","release-channels","power-platform-admin-center","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 571681"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571681"
    kind: "roadmap"
  - title: "Modern, refreshed look for model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/modern-fluent-design"
    kind: "learn"
  - title: "Release channels for your model-driven app"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/channel-overview"
    kind: "learn"
  - title: "Change release channels for model-driven apps"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/channel-change"
    kind: "learn"
  - title: "Manage behavior settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-behavior"
    kind: "learn"
  - title: "User channel override"
    url: "https://learn.microsoft.com/power-platform/admin/user-channel-override"
    kind: "learn"
  - title: "Manage model-driven app settings in the app designer"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    kind: "learn"
  - title: "Important changes (deprecations) coming in Power Platform"
    url: "https://learn.microsoft.com/power-platform/important-changes-coming"
    kind: "learn"
  - title: "Organization table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    kind: "learn"
  - title: "Update and delete table rows by using the Web API"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/update-delete-entities-using-web-api"
    kind: "learn"
  - title: "Get or update a setting value using client API"
    url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    kind: "learn"
videos: []
related: ["power-apps-control-information-density-in-model-driven-apps","power-apps-new-view-layout-in-model-driven-apps","power-apps-use-the-modernized-personal-settings-experience"]
controls:
  - governs: "When the mail app look arrives: the model-driven app release channel for an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Behavior"
      docs: "https://learn.microsoft.com/power-platform/admin/settings-behavior"
    api:
      kind: "rest"
      call: "PATCH [Organization URI]/api/data/v9.2/organizations(<organizationid>)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    note: "System Administrator role or equivalent. Semi-annual example body: {\"releasechannel\":3}, with Content-Type: application/json and If-Match: *. A configured user channel override takes precedence over app and environment channels."
  - governs: "Whether an app uses the New Look (the New look for model driven apps setting)"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Solutions > solution > Add Existing > More > Setting > New look for model driven apps"
      docs: "https://learn.microsoft.com/power-apps/user/modern-fluent-design"
    api:
      kind: "other"
      call: "Xrm.Utility.getGlobalContext().saveSettingValue(\"<setting-unique-name>\", false, {overrideScope: 2}).then(successCallback, errorCallback)"
      docs: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    note: "Learn pages conflict on whether this setting still works; no source says it covers the mail app. The call is generic app-setting automation; its effect on the mail app is not confirmed."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: the modern, refreshed look reaches the mail app on the semi-annual channel, with the release channel and New look setting as controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 46 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: release channel wording, precedence of channel settings, the Update call for the environment channel, the New look setting's API and the spend-control statement."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 45 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 43
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "21360c1e0c8e81f6c3c74b41a942c9c5"
---

## What's changing

The roadmap item extends the Fluent-based modern, refreshed look for model-driven apps to the mail app. Microsoft describes the result as consistent controls, spacing, colours and visual treatment when users work in that app. The roadmap says the look was previously enabled for the monthly channel with the 2602.1 release and is now being enabled for the semiannual channel with the 2609.3 release.

The roadmap lists the feature scope as "Users (always enabled)", the audience as model-driven apps, the release phase as General Availability and the platform as Web. Microsoft Learn says the same in its own words: the mail app "is on by default for environments on the monthly channel as part of the February 2026 release, and will be enabled on the semi-annual channel with the October 2026 update". Microsoft's release-channel page lists the October semi-annual production build as `YY09.3`, for example `2609.3`, which matches the roadmap version.

The roadmap status is Launched with a target date of October CY2026. Microsoft's channel page says each semi-annual release follows a gradual weekly rollout across region groups, so an environment receives the build on its own region group's weekend, not on one date for everyone.

## Why it matters

Users of the mail app in semi-annual-channel environments get a new look without choosing it. Nothing in the roadmap record or Learn describes a change to data, permissions or spend, so the effect is on user familiarity and support: expect "where did that button go" questions, not security incidents.

The semi-annual channel is the one Microsoft recommends for users who need more training and testing before new user-facing features arrive, which makes it the channel where this change is a surprise. Treat it as a communication task: tell mail app users what is coming, and have helpdesk staff see the new look before users do.

## Risk assessment

**Data exposure**
- No change described: the roadmap item and the Learn page describe styling only, and name no new data access.

**Security & identity**
- No change described: neither source mentions permissions, roles or sign-in for this change.

**Autonomy & actions**
- No change described: the item does not describe any automated action in the mail app.

**Change & support**
- The look is always enabled for users, per the roadmap's feature scope, so a semi-annual-channel environment cannot hold users on the old appearance by leaving a setting alone. The release channel controls feature availability, not the database, platform or application versions deployed to the environment.
- Microsoft's Learn pages differ on whether an administrator can still turn the New Look off. See the controls note and Open questions before promising users a rollback.
- Training material, screenshots and helpdesk scripts for the mail app will show the old look in semi-annual environments until the build arrives.

## Cost and licensing

No licence, meter or price for the modern, refreshed look is named on the roadmap item or on its Learn page (Modern, refreshed look for model-driven apps) at the time of writing (November 2026), so the licence position is not yet published. The cost this change visibly carries is admin and training time.

No spend control specific to this visual refresh is documented at the time of writing (November 2026), and no row in the controls table concerns cost.

## Scope

**Users:** the roadmap lists the feature scope as users, always enabled. **Apps:** model-driven apps, specifically the mail app. **Channel and version:** semiannual channel, version 2609.3. **Clouds:** Worldwide (Standard Multi-Tenant), GCC and GCC High, as the roadmap lists them. **Platform:** Web, as the roadmap lists it; Learn's known-limitations section places the mail app under "Modern, refreshed look outside of browser".

Environments on the monthly channel already had the mail app look from the February 2026 release, per Learn. Which channel an environment uses depends on the environment, app and user settings; where the app and environment channels are both Auto, Power Apps and Dynamics 365 environments use the Monthly channel. A user channel override takes precedence over the environment and app channels.

## Governance guidance

### Before rollout
- Check the model-driven app release channel of each environment where users work in the mail app, to identify which will receive the look with the semi-annual release (row 1).
- Tell mail app users in those environments what will change, using the roadmap's description: new controls, spacing, colours and visual treatment.
- Have helpdesk staff and trainers open the mail app in a monthly-channel environment, where the look is already on, so they see it first.

### At rollout
- Expect the look to arrive on each environment's own weekend, because the semi-annual release rolls out to region groups in turn.
- Send helpdesk the Learn page for the modern, refreshed look as the reference for what the New Look changes.

### After rollout
- Collect user feedback on the mail app from semi-annual-channel environments and record it against this change.
- Review the New look app setting (row 2) before telling users that the classic look can be restored, given the conflicting Learn pages.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>When the mail app look arrives: the model-driven app release channel for an environment</strong><br><small>Environment</small><br><small class="controls__note">System Administrator role or equivalent. Semi-annual example body: {&quot;releasechannel&quot;:3}, with Content-Type: application/json and If-Match: *. A configured user channel override takes precedence over app and environment channels.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Behavior <a href="https://learn.microsoft.com/power-platform/admin/settings-behavior" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH [Organization URI]/api/data/v9.2/organizations(&lt;organizationid&gt;)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an app uses the New Look (the New look for model driven apps setting)</strong><br><small>App</small><br><small class="controls__note">Learn pages conflict on whether this setting still works; no source says it covers the mail app. The call is generic app-setting automation; its effect on the mail app is not confirmed.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Solutions › solution › Add Existing › More › Setting › New look for model driven apps <a href="https://learn.microsoft.com/power-apps/user/modern-fluent-design" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Xrm.Utility.getGlobalContext().saveSettingValue(&quot;&lt;setting-unique-name&gt;&quot;, false, {overrideScope: 2}).then(successCallback, errorCallback)</code> <a href="https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The release channel controls feature availability, not the database, platform or application versions deployed to the environment. A per-app channel exists in the app designer and a per-user override exists in the Power Platform admin center. A configured user channel override takes precedence over app and environment channels. An explicit app release channel other than Auto takes precedence over the environment channel, per the order of checks on Learn's page on changing release channels. A user must refresh the browser tab twice to see an environment channel change.

The environment setting needs the System Administrator security role or equivalent permissions, per Learn's behaviour settings page. Learn's [User channel override](https://learn.microsoft.com/power-platform/admin/user-channel-override) page documents the per-user override under Users in the environment, and Learn documents the per-user ReleaseChannel column on the UserSettings table.

Row 2 is the New look setting. Learn's page on the modern look says admins can turn the New Look off with it, but Learn's page on app settings says the setting is hidden and ignored once the new look becomes mandatory, and Learn's list of important changes says the admin settings for the classic look will be removed. Neither page says whether the setting covers the mail app. Learn documents generic app-setting automation; its effect on the mail app is not confirmed.

## Open questions

- Can an administrator still switch the New Look off, as the modern look page says, or is the setting hidden and ignored, as the app settings page says? Neither says whether it affects the mail app. Watch the Modern, refreshed look for model-driven apps page.
- Which clients does "the mail app" cover? The roadmap lists the platform as Web, while Learn places the mail app under "Modern, refreshed look outside of browser".
- What licence does the mail app require, and does this change alter it? Microsoft has not published a licence for the look.
- Does the monthly-channel remark that the new look is "on by default" for the mail app mean semi-annual environments have the same default, or does the roadmap's "always enabled" supersede it? Watch the roadmap item and the Learn page.

<!-- rationale
risk: Low. This is a visual change to the mail app: styling, controls and spacing. The roadmap item describes no new data access, permission or automated action.
cost: Low. The only cost the sources show is admin and training time. Microsoft Learn's page for the look names no licence or meter, and the licence position is not yet published.
impact: Medium. Users of the mail app in semi-annual-channel environments see a different look without choosing it; the roadmap lists the feature scope as users, always enabled.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model; Cost and licensing; Open questions; rationale: cost / licensing: The licensing model is unknown because Microsoft has not published the licence position for the look. | Found: Model-driven apps use Dataverse and are premium apps by default. Every user who runs a model-driven app needs a license that provides Power Apps premium use rights. | Fix: Set licensing.model to included. Replace the broad unpublished-licensing statements in the notes, body, open question and cost rationale with: 'Model-driven app users need a licence providing Power Apps premium use rights. Microsoft names no licence, price or meter specific to this visual refresh.' Cite https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq. Keep cost low for the refresh's indirect communication and training cost. | Source: https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq
- [contradicted, blocker] controls[1].ui; Governance controls: second row / admin-path: Solutions > solution > Add Existing > More > Setting > New look for model driven apps reaches the app's editable New Look control. | Found: 6. Select Add to add it to the solution. 7. Select New look for model driven apps from the solution explorer. 8. Update Setting Environment Value to No. 9. Add the apps to the solution for which you want to turn off new look. 10. Update the value of the apps to No. | Fix: Remove the second control row and its rendered table row, and remove '(row 2)' from the checklist. The printed path reaches the setting picker, not an editable app value; the same cited page also says makers can no longer switch to the classic look. Retain the existing prose about conflicting documentation and unconfirmed applicability to the mail app rather than presenting this incomplete route as an operational control. | Source: https://learn.microsoft.com/power-apps/user/modern-fluent-design
-->
