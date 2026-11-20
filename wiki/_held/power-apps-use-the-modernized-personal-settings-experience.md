---
title: "Power Apps: modernised Personal settings experience in model-driven apps"
slug: "power-apps-use-the-modernized-personal-settings-experience"
roadmapId: 579899
topic: "power-platform"
products: ["Power Apps"]
summary: "Model-driven apps get a redesigned Personal settings panel with clearer navigation, enabled by default for users, with a button back to the classic view. No admin switch is documented; plan user communication."
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
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The Learn page on personal options names no licence requirement, and no licence or charge specific to this feature is published."
audiences: ["power-platform-admin","service-owner","end-user","change-adoption"]
tags: ["power-apps","model-driven-apps","personal-settings","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 579899"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579899"
    kind: "roadmap"
  - title: "Set personal options in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/user/set-personal-options"
    kind: "learn"
  - title: "Appearance settings for model-driven apps (preview)"
    url: "https://learn.microsoft.com/power-apps/user/appearance-settings"
    kind: "learn"
  - title: "Manage privacy and security settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-privacy-security"
    kind: "learn"
  - title: "Organization table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    kind: "learn"
videos: []
related: ["power-apps-control-information-density-in-model-driven-apps","powerapps-building-modern-apps-modernize-model-driven-apps-with-the-header-and-navigation"]
controls:
  - governs: "Admin switch for the modern Personal settings panel and its Switch to classic button"
    scope: "environment"
    ui: null
    api: null
    note: "Users can select Switch to classic from within the panel; Learn documents it as a temporary workaround."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-20"
roadmapModified: "2026-11-19T23:44:17"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 579899."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Correction: licensing set to not yet published, action set to prepare, obsolete New Look row removed, and unsupported parity, autonomy and cost statements narrowed."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 40 statements confirmed"
  - date: "2026-11-20"
    note: "Roadmap version corrected to 2612.1; added the roadmap-versus-Learn difference, Email and Privacy tab detail and the organisation-wide privacy preference; licensing stays not yet published."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 42 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-20"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 40
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "94cfcf3932bca420c2ff1c2a8d2983c9"
---

## What's changing

The Personal settings experience in model-driven apps has been modernised, with clearer organisation, updated navigation and a more consistent design. Users open it from the Settings menu in the upper-right corner of the app, choose Personal settings, then pick a category tab. The roadmap item adds that users can select a button to return to the classic experience.

Microsoft Learn already describes the modern experience as the default and the classic Set Personal Options experience as deprecated, to be removed in a future release. Learn documents a **Switch to classic** option as a temporary workaround for issues in the modern experience. The roadmap status is In development, so the roadmap and Learn differ on whether the modern experience has already arrived.

The Appearance tab is a separate case: its settings are in preview and the tab appears only when the app has the header and navigation refresh (wave 2) turned on. That qualifier is documented for the Appearance tab, not for the whole redesign.

The roadmap item lists a Weekly release channel, version 2612.1, a December CY2026 target and availability in Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. It lists the feature scope as users, enabled by default.

## Why it matters

Personal settings hold per-user choices such as time zone, default currency, email tracking, permission for other users to send email on your behalf, and Outlook synchronisation filters. When those options move or are re-laid out, expect help desk questions and out-of-date screenshots in internal guides.

Because the roadmap lists the feature as enabled by default and Learn marks the classic dialog as deprecated, this change reaches users whether or not anyone acts, and Switch to classic is a temporary workaround, not a long-term plan. Prepare communications and guidance now rather than rely on the classic view.

## Risk assessment

**Data exposure**
- No new data access is described. The options in Personal settings, such as time zone, currency, email tracking and synchronisation filters, are documented on the Learn personal options page and are unchanged in kind by a redesign.

**Security & identity**
- The Email tab holds the option that lets other users send email on your behalf; Learn cautions that if it is selected, other users can send email on your behalf with or without your consent. Check that users can still find and understand it in the new layout.
- The Privacy tab is not available if an administrator sets the privacy preference for the whole organisation; see the controls notes.

**Autonomy & actions**
- No autonomous or agent capability is described in the roadmap item or on the personal options page.

**Change & support**
- Enabled by default for users, so expect questions about moved options and tabs.
- The classic experience is documented as deprecated and to be removed in a future release, so do not build procedures that depend on Switch to classic.

## Cost and licensing

The roadmap item and the Learn page on personal options name no licence, meter or charge for this feature, and the Learn page lists no licence among its content. Licensing specific to this feature is not yet published.

The cost the sources show is indirect: communications, updating internal guides and screenshots, and help desk time.

## Scope

**Users:** the roadmap lists the feature scope as users, enabled by default, and applies it to model-driven apps. **Platform:** web. **Clouds** as the roadmap lists them: Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. **Release:** Weekly channel, version 2612.1, December CY2026 target, status In development.

The Appearance tab needs the header and navigation refresh (wave 2) on the app and is in preview. Microsoft Learn documents the privacy preference that hides the Privacy tab as an organisation-wide setting.

## Governance guidance

### Before rollout
- Identify internal guides, training and screenshots that show the classic Set Personal Options dialog.
- Check whether any process relies on users changing options such as email tracking or synchronisation filters, and note which tabs hold them.
- Decide who tells users where Personal settings is and when the roadmap target, December CY2026, is close.

### At rollout
- Tell users to open Settings > Personal settings and pick a category tab.
- Tell users that Switch to classic is a temporary workaround for issues, and that issues should be reported to Microsoft Support.
- Brief the help desk on the tab layout.

### After rollout
- Review support tickets for options that users cannot find.
- Remove references to the classic dialog from guidance before Microsoft removes it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Admin switch for the modern Personal settings panel and its Switch to classic button</strong><br><small>Environment</small><br><small class="controls__note">Users can select Switch to classic from within the panel; Learn documents it as a temporary workaround.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting that turns the modern panel on or off, or hides Switch to classic, at the time of writing (November 2026), so the table states that gap.

One related control exists but governs only the Privacy tab: Microsoft's privacy and security settings page documents an organisation-wide error-reporting preference for an environment (Power Platform admin center, environment Settings, Product, Privacy + Security), and the personal options page says the Privacy tab is not available when an administrator selects the privacy preference for the entire organisation. Its API surface was not read, so it is not given a row. System Administrator or equivalent permissions are needed on the privacy and security settings page.

## Open questions

- Will administrators get a setting to turn the modern panel off or hide Switch to classic? Learn documents none at the time of writing; watch the Learn page on personal options.
- When will the classic Set Personal Options experience be removed? Learn says only "a future release"; watch Message center.
- Does the roadmap item mean the modern experience reaches all apps in December CY2026, given that Learn already calls it the default? Watch Message center for rollout timing and the roadmap status.

<!-- rationale
risk: Low. A layout and navigation change to per-user preferences, with no new data access described and a documented Switch to classic route back; no admin setting for the panel is documented.
cost: Low. The only cost the sources show is indirect: user communication, help desk briefing and updating guides. Licensing specific to this feature is not yet published.
impact: Medium. The roadmap lists the feature scope as users, enabled by default, so people who change their own time zone, email or other preferences will see a different layout.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: parenthetical privacy-control path / admin-path: The privacy-control route is Power Platform admin center, environment Settings, Product, Privacy + Security. | Found: In the navigation pane, select Manage. ... select Environments. ... select an environment. ... select Settings. ... Expand Product, and then select Privacy + Security. | Fix: Replace the parenthetical route with 'Power Platform admin center > Manage > Environments > environment > Settings > Product > Privacy + Security > Privacy preferences > Default action to take when an error occurs', as documented at https://learn.microsoft.com/power-platform/admin/settings-privacy-security. The current route starts inside an environment and omits the navigation needed to reach it. | Source: https://learn.microsoft.com/power-platform/admin/settings-privacy-security
- [unsupported, major] Risk assessment: Data exposure / behaviour: The Personal settings options are unchanged in kind by the redesign. | Found: Searched: "modern" "personal settings" "unchanged". Read roadmap and personal-options page: the former describes a modernised design and the latter lists current options; neither states that their kinds are unchanged by this redesign. | Fix: Remove 'and are unchanged in kind by a redesign'. Keep the supported statement that the named options are documented on the personal-options page.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and licensing.notes; Cost and licensing; rationale: cost / licensing: The licensing model is unknown because no licensing specific to modern Personal settings is published. | Found: Every user who runs a model-driven app needs a license that provides Power Apps premium use rights. | Fix: Set licensing.model to 'included'. Replace the notes with 'Personal settings is an option inside model-driven apps. Every user who runs a model-driven app needs a license providing Power Apps premium use rights; Power Apps Premium and Power Apps per app plans generally satisfy that requirement, with use rights depending on context. No licence or charge specific to this redesign is published.' Cite https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq. Preserve the narrower feature-specific absence in the body and cost rationale, rather than describing the product entitlement as unknown. | Source: https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq
-->
