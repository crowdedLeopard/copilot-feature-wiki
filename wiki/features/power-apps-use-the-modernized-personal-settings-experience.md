---
title: "Power Apps: modernised Personal settings experience in model-driven apps"
slug: "power-apps-use-the-modernized-personal-settings-experience"
roadmapId: 579899
topic: "power-platform"
products: ["Power Apps"]
summary: "Model-driven apps get a redesigned Personal settings panel with clearer organisation and navigation, with a button to return to the classic view."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "review"
licensing:
  model: "included"
  notes: "No separate licence published. Part of model-driven apps in Power Apps."
audiences: ["power-platform-admin","service-owner","end-user","change-adoption"]
tags: ["power-apps","model-driven-apps","personal-settings","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 579899"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579899"
    kind: "roadmap"
  - title: "Set personal options in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/set-personal-options"
    kind: "learn"
  - title: "New look for model-driven apps (app setting) (Power Apps (maker))"
    url: "https://learn.microsoft.com/power-apps/user/modern-fluent-design#revert-to-the-classic-look"
    kind: "learn"
videos: []
related: ["managed-environments"]
controls:
  - governs: "New look for model-driven apps (app setting)"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Solutions > Add existing > More > Setting > New look for model driven apps"
      docs: "https://learn.microsoft.com/power-apps/user/modern-fluent-design#revert-to-the-classic-look"
    api: null
  - governs: "Admin switch for the modern personal settings panel"
    scope: "environment"
    ui: null
    api: null
    note: "Users can switch back to the classic dialog from within the panel."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-11-13T23:01:18"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 579899."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

The Personal settings experience in model-driven apps has been modernised, with clearer organisation, updated navigation and a more consistent design. Users open it from Settings > Personal settings in the app header and choose a category, such as Appearance, General, Email or Languages.

The roadmap states that users can select a button to return to the classic experience. Microsoft Learn already describes the modern experience as the default and the classic Set Personal Options dialog as deprecated, to be removed in a future release. A **Switch to classic** option is documented as a temporary workaround for problems.

The roadmap lists a Weekly release channel, version 2611.4, a December 2026 target and availability in Worldwide, GCC, GCC High and DoD. The feature scope is users, enabled by default.

## Why it matters

Personal settings hold time zone, currency, default pane, email tracking and synchronisation filters. Changes to where these live generate support questions, and the classic experience is on a deprecation path, so internal guidance and training material will need to move to the modern layout.

## Risk assessment

**Data exposure**
- No new data access is described. The same personal options are shown in a new layout.

**Security & identity**
- Privacy and email-on-behalf options remain user-set. Review that users can still find them.

**Autonomy & actions**
- No autonomous behaviour is involved.

**Change & support**
- Enabled by default for users, so expect help desk queries about moved options.
- The classic experience is deprecated, so do not build processes that depend on it.

## Cost and licensing

No licence or consumption change is published. The cost is limited to communications, documentation updates and support time. Not yet published: any further detail beyond the roadmap entry.

## Scope

All users of model-driven apps on the web. Roadmap clouds: Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Platform: web. Applies per user, not per tenant setting.

## Governance guidance

### Before rollout
- Identify internal guides and screenshots that show Set Personal Options.
- Check whether any process relies on users changing options such as email tracking or synchronisation filters.

### At rollout
- Tell users where Personal settings sits and that Switch to classic is a temporary route.
- Brief the help desk on the new tab layout.

### After rollout
- Review support tickets for missing or moved options.
- Remove references to the classic dialog from guidance before it is retired.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>New look for model-driven apps (app setting)</strong><br><small>App</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Solutions › Add existing › More › Setting › New look for model driven apps <a href="https://learn.microsoft.com/power-apps/user/modern-fluent-design#revert-to-the-classic-look" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Admin switch for the modern personal settings panel</strong><br><small>Environment</small><br><small class="controls__note">Users can switch back to the classic dialog from within the panel.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The panel ships with the modern look and has no setting of its own. Organisation defaults set by admins, such as the privacy preference in System Settings, still decide which tabs users see, and the [personal options](https://learn.microsoft.com/power-apps/user/set-personal-options) a user may change are unchanged. Display density defaults are described under [appearance settings](https://learn.microsoft.com/power-apps/user/appearance-settings#display-density).

## Open questions

- Microsoft has not published a date for removal of the classic experience.
- Whether admins will be able to hide the switch-to-classic button is not stated.
- Watch Message center for rollout timing against the December 2026 target.

<!-- rationale
risk: Low. A cosmetic and navigation change to per-user preferences, with no new data access and a way back to the classic experience.
cost: Low. No licence change is published; the cost is support communication and updating internal how-to guides and screenshots.
impact: Medium. Enabled by default for users of model-driven apps, so many people will see a different settings layout, though behaviour is unchanged.
-->
