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
      call: "PATCH /organizations(<organizationid>) with the ReleaseChannel column set to the channel value"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    note: "System Administrator role or equivalent. Per-app and per-user channel settings take precedence over the environment channel."
  - governs: "Whether an app uses the New Look (the New look for model driven apps setting)"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Solutions > solution > Add Existing > More > Setting > New look for model driven apps"
      docs: "https://learn.microsoft.com/power-apps/user/modern-fluent-design"
    api: null
    note: "Learn pages conflict on whether this setting still works; no source says it covers the mail app. It does not control release timing."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: the modern, refreshed look reaches the mail app on the semi-annual channel, with the release channel and New look setting as controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 46 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 39
  unconfirmed: 2
  contradicted: 5
  attempts: 1
  hash: "478ca8ebf7bdead5854d98066e3371e1"
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
- The look is always enabled for users, per the roadmap's feature scope, so a semi-annual-channel environment cannot hold users on the old appearance by leaving a setting alone. The release channel controls when a build arrives, not whether the look is applied once it does.
- Microsoft's Learn pages differ on whether an administrator can still turn the New Look off. See the controls note and Open questions before promising users a rollback.
- Training material, screenshots and helpdesk scripts for the mail app will show the old look in semi-annual environments until the build arrives.

## Cost and licensing

No licence, meter or price for the modern, refreshed look is named on the roadmap item or on its Learn page (Modern, refreshed look for model-driven apps) at the time of writing (November 2026), so the licence position is not yet published. The cost this change visibly carries is admin and training time.

No spend control applies, and no row in the controls table concerns cost.

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
<tr><td data-label="Control"><strong>When the mail app look arrives: the model-driven app release channel for an environment</strong><br><small>Environment</small><br><small class="controls__note">System Administrator role or equivalent. Per-app and per-user channel settings take precedence over the environment channel.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Behavior <a href="https://learn.microsoft.com/power-platform/admin/settings-behavior" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /organizations(&lt;organizationid&gt;) with the ReleaseChannel column set to the channel value</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an app uses the New Look (the New look for model driven apps setting)</strong><br><small>App</small><br><small class="controls__note">Learn pages conflict on whether this setting still works; no source says it covers the mail app. It does not control release timing.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Solutions › solution › Add Existing › More › Setting › New look for model driven apps <a href="https://learn.microsoft.com/power-apps/user/modern-fluent-design" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The release channel decides when this look arrives, not whether it applies. A per-app channel exists in the app designer and a per-user override exists in the Power Platform admin center; both take precedence over the environment channel, per the order of checks on Learn's page on changing release channels. A user must refresh the browser tab twice to see an environment channel change.

The environment setting needs the System Administrator security role or equivalent permissions, per Learn's behaviour settings page. The same page documents the per-user override under Users in the environment, and Learn documents the per-user ReleaseChannel column on the UserSettings table.

Row 2 is the New look setting. Learn's page on the modern look says admins can turn the New Look off with it, but Learn's page on app settings says the setting is hidden and ignored once the new look becomes mandatory, and Learn's list of important changes says the admin settings for the classic look will be removed. Neither page says whether the setting covers the mail app. Microsoft Learn documents no API for this setting at the time of writing (November 2026).

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
- [unsupported, blocker] Cost and licensing / cost: No spend control applies. | Found: Searched: Power Apps modern refreshed look mail app licensing price meter spend control; modern, refreshed look spend control. Opened modern-fluent-design and pricing-billing-skus. Neither states that no spend control applies. | Fix: Replace 'No spend control applies' with 'No spend control specific to this visual refresh is documented at the time of writing (November 2026)'. Do not imply that general Power Apps billing controls are inapplicable.
- [contradicted, blocker] controls[0].api; Governance controls table / command: PATCH /organizations(<organizationid>) with the ReleaseChannel column set to the channel value is a runnable channel-setting call. | Found: Update operations use the HTTP PATCH verb. Pass a JSON object containing the properties you want to update to the URI that represents the record. | Fix: The pre-check's missing-endpoint lead is a formatting false positive: the Organization reference documents PATCH /organizations(organizationid), logical name releasechannel and value 3 for Semi-annual. Nevertheless replace the prose pseudo-call with 'PATCH [Organization URI]/api/data/v9.2/organizations(<organizationid>)' and JSON body '{"releasechannel":3}', labelled as the Semi-annual example, with Content-Type: application/json and If-Match: *. Cite the Organization reference and https://learn.microsoft.com/power-apps/developer/data-platform/webapi/update-delete-entities-using-web-api for the request format. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/update-delete-entities-using-web-api
- [contradicted, blocker] controls[0].note; Governance controls / applicability: Per-app channel settings take precedence over the environment channel without qualification. | Found: 3. App release channel value other than Auto (for example, Monthly, Semi-annual). 4. Environment release channel value other than Auto (for example, Monthly, Semi-annual). | Fix: Replace the precedence statement in the note, rendered table and prose with 'A configured user channel override takes precedence over app and environment channels. An explicit app release channel other than Auto takes precedence over the environment channel.' | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/channel-change
- [contradicted, blocker] Risk assessment: Change & support; Governance controls / behaviour: The release channel controls when a build arrives. | Found: The release channel controls feature availability. It doesn't change the environment's database version or the platform and application versions deployed to the environment. | Fix: Replace 'The release channel controls when a build arrives, not whether the look is applied once it does' with 'The release channel controls feature availability, not the database, platform or application versions deployed to the environment.' Preserve the separate, supported statement that builds roll out to region groups on successive weekends. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/channel-overview
- [contradicted, blocker] Governance controls: paragraph beginning The environment setting / admin-path: The behaviour settings page itself documents the per-user channel override under Users. | Found: Select Users > See all. ... Under the Model apps channel field, select Change channel. | Fix: Replace 'The same page documents the per-user override under Users in the environment' with 'Learn's User channel override page documents the per-user override under Users in the environment', linking to https://learn.microsoft.com/power-platform/admin/user-channel-override. The behaviour page documents the environment setting, not a Users path. | Source: https://learn.microsoft.com/power-platform/admin/user-channel-override
- [contradicted, blocker] controls[1].api; Governance controls table and closing paragraph / absence: Microsoft Learn documents no API for the New Look app setting. | Found: Adds or updates the setting app value for the current app or the setting environment value for the current environment. ... You can also use the following Web APIs to get or update a setting value ... SaveSettingValue action | Fix: Replace the null side with kind 'other', call 'Xrm.Utility.getGlobalContext().saveSettingValue("<setting-unique-name>", false, {overrideScope: 2}).then(successCallback, errorCallback)' and docs https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code. Retain the qualification that this is general app-setting automation, not confirmation of a working mail-app rollback. Replace the no-API prose with 'Learn documents generic app-setting automation; its effect on the mail app is not confirmed.' | Source: https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code
- [unsupported, major] controls[1].note; Governance controls table / behaviour: The New Look setting does not control release timing. | Found: Searched: New look for model driven apps release timing; mail app modern New look release channel setting. Opened modern-fluent-design, app-properties and channel-overview; none explicitly states this negative claim about the setting. | Fix: Remove 'It does not control release timing' from the control note and rendered table. The separate, verified description of release channels already explains feature availability.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / behaviour: A user must refresh the browser tab twice after an environment channel change. | Found: When you change the release channel at the environment level, a user must refresh the browser tab twice to update the release channel information. | Fix: Replace the sentence with 'Learn's changing-channels page says to refresh the browser tab twice after an environment channel change; its behaviour settings page says users switch after one to two refreshes.' Both pages are already cited. | Source: https://learn.microsoft.com/power-apps/maker/model-driven-apps/channel-change
-->
