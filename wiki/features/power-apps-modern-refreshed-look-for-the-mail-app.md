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
  model: "included"
  notes: "Model-driven app users need a licence providing Power Apps premium use rights, per Learn's Power Apps licensing FAQs. Microsoft names no licence, price or meter specific to this visual refresh."
audiences: ["power-platform-admin","service-owner","change-adoption","end-user"]
tags: ["power-apps","model-driven-apps","user-experience","release-channels","power-platform-admin-center","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 571681"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571681"
    kind: "roadmap"
  - title: "Modern, refreshed look for model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/modern-fluent-design"
    kind: "learn"
  - title: "Power Apps licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq"
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
  - date: "2026-11-18"
    note: "Corrected after verification: licensing now states the Power Apps premium use rights that model-driven apps need, and the unconfirmed New look setting row is removed from the controls table."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 48 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 47 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 61 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 60
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "d16815fbac7d552a366f09de9979ffb4"
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

Model-driven app users need a licence providing Power Apps premium use rights, per Learn's Power Apps licensing FAQs (Model-driven apps: "Every user who runs a model-driven app needs a license that provides Power Apps premium use rights"). Microsoft names no licence, price or meter specific to this visual refresh. The cost this change visibly carries is admin and training time.

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
- Review the New look app setting before telling users that the classic look can be restored, given the conflicting Learn pages.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>When the mail app look arrives: the model-driven app release channel for an environment</strong><br><small>Environment</small><br><small class="controls__note">System Administrator role or equivalent. Semi-annual example body: {&quot;releasechannel&quot;:3}, with Content-Type: application/json and If-Match: *. A configured user channel override takes precedence over app and environment channels.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Behavior <a href="https://learn.microsoft.com/power-platform/admin/settings-behavior" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH [Organization URI]/api/data/v9.2/organizations(&lt;organizationid&gt;)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The release channel controls feature availability, not the database, platform or application versions deployed to the environment. A per-app channel exists in the app designer and a per-user override exists in the Power Platform admin center. A configured user channel override takes precedence over app and environment channels. An explicit app release channel other than Auto takes precedence over the environment channel, per the order of checks on Learn's page on changing release channels. A user must refresh the browser tab twice to see an environment channel change.

The environment setting needs the System Administrator security role or equivalent permissions, per Learn's behaviour settings page. Learn's [User channel override](https://learn.microsoft.com/power-platform/admin/user-channel-override) page documents the per-user override under Users in the environment, and Learn documents the per-user ReleaseChannel column on the UserSettings table.

The New look for model driven apps app setting is not a row in the table. Learn's page on the modern look says admins can turn the New Look off with it, but Learn's page on app settings says the setting is hidden and ignored once the new look becomes mandatory, and Learn's list of important changes says the admin settings for the classic look will be removed. Neither page says whether the setting covers the mail app. Learn documents generic app-setting automation; its effect on the mail app is not confirmed.

## Open questions

- Can an administrator still switch the New Look off, as the modern look page says, or is the setting hidden and ignored, as the app settings page says? Neither says whether it affects the mail app. Watch the Modern, refreshed look for model-driven apps page.
- Which clients does "the mail app" cover? The roadmap lists the platform as Web, while Learn places the mail app under "Modern, refreshed look outside of browser".
- Does the monthly-channel remark that the new look is "on by default" for the mail app mean semi-annual environments have the same default, or does the roadmap's "always enabled" supersede it? Watch the roadmap item and the Learn page.

<!-- rationale
risk: Low. This is a visual change to the mail app: styling, controls and spacing. The roadmap item describes no new data access, permission or automated action.
cost: Low. The only cost specific to this change is admin and training time. Model-driven app users need a licence providing Power Apps premium use rights, and Microsoft names no licence, price or meter specific to this visual refresh.
impact: Medium. Users of the mail app in semi-annual-channel environments see a different look without choosing it; the roadmap lists the feature scope as users, always enabled.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: Every model-driven app user needs a licence providing Power Apps premium use rights, according to the cited licensing FAQ. | Found: Every user who runs a model-driven app needs a license that provides Power Apps premium use rights. | Fix: After the licensing requirement, add: 'Microsoft's pay-as-you-go meters page also says its Power Apps per-app meter provides authenticated users access to model-driven apps without a Power Apps licence.' Cite https://learn.microsoft.com/power-platform/admin/pay-as-you-go-meters#how-do-meters-work alongside the FAQ, to disclose the differing licensing wording. | Source: https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The environment channel is reached through Power Platform admin center > Manage > Environments > environment > Settings > Product > Behavior. | Found: In the command bar, select Settings. 6. Expand Product, and then select Behavior. ## Release channel | Settings | Description | Default value | | Model-driven app release channel | Fix: Set controls[0].ui.path and its rendered table path to 'Manage > Environments > environment > Settings > Product > Behavior > Release channel > Model-driven app release channel', as documented at https://learn.microsoft.com/power-platform/admin/settings-behavior. | Source: https://learn.microsoft.com/power-platform/admin/settings-behavior
- [supported, minor] controls[0].governs; Risk assessment; Governance guidance: Before rollout; Governance controls / applicability: The environment release channel governs feature availability, including when the mail app refresh arrives, subject to app and user settings. | Found: If you set this setting to Semi-annual channel, users in the organization use features from the current semi-annual release | Fix: Append to controls[0].note and its rendered note: 'Learn also says model-driven apps in Power Platform environments use Monthly when the app channel is Auto regardless of the environment channel; check the app channel as well.' Cite https://learn.microsoft.com/power-apps/maker/model-driven-apps/channel-change#keep-semi-annual-release-channel to disclose the conflict with the general environment-channel guidance. | Source: https://learn.microsoft.com/power-platform/admin/settings-behavior
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The governance checklist asks readers to review the New Look app setting although that control has no row in the controls table. | Found: Review the New look app setting before telling users that the classic look can be restored, given the conflicting Learn pages. ... The New look for model driven apps app setting is not a row in the table. | Fix: Remove the After rollout bullet 'Review the New look app setting before telling users that the classic look can be restored, given the conflicting Learn pages.' Keep the explanatory Governance controls prose and Open questions; do not add a row.
-->
