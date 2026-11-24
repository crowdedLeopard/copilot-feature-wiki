---
title: "Power Apps: modern, refreshed look reaches embedded model-driven apps on the semiannual channel"
slug: "power-apps-modern-refreshed-look-for-embedded-model-driven-apps"
roadmapId: 571682
topic: "power-platform"
products: ["Power Apps"]
summary: "The modern, Fluent-based look now extends to embedded model-driven app content on the semiannual channel (2609.3). It is always enabled for users, so administrators mainly need to warn users and check release channels."
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
  notes: "Learn's Power Apps licensing FAQs say every user who runs a model-driven app needs a licence that provides Power Apps premium use rights. Microsoft names no licence, price or meter specific to this visual refresh."
audiences: ["power-platform-admin","service-owner","change-adoption","end-user"]
tags: ["power-apps","model-driven-apps","user-experience","release-channels","power-platform-admin-center","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 571682"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571682"
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
  - title: "Manage model-driven app settings in the app designer"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/app-properties"
    kind: "learn"
  - title: "Organization table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    kind: "learn"
  - title: "Power Apps licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq"
    kind: "learn"
videos: []
related: ["power-apps-modern-refreshed-look-for-the-mail-app","powerapps-building-modern-apps-modernize-model-driven-apps-with-the-header-and-navigation","power-apps-control-information-density-in-model-driven-apps"]
controls:
  - governs: "When the look arrives: the model-driven app release channel for an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Behavior > Release channel > Model-driven app release channel"
      docs: "https://learn.microsoft.com/power-platform/admin/settings-behavior"
    api:
      kind: "rest"
      call: "PATCH /organizations(<organizationid>)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    note: "System Administrator role or equivalent. The request body sets releasechannel (3 = Semi-annual channel). App and user channel settings are checked first; see the notes below the table."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: the modern, refreshed look reaches embedded model-driven app content on the semiannual channel, with the release channel as the control."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 45 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 48 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 53
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "9113072283be91a5602ea54e67254d4b"
---

## What's changing

The roadmap item extends the modern, refreshed look to embedded app experiences, so model-driven app content keeps consistent Fluent styling and interaction patterns when it appears inside another host. The roadmap says this was previously enabled for the monthly channel with the 2602.1 release and is now being enabled for the semiannual channel with the 2609.3 release.

The roadmap lists the audience as model-driven apps, the release channel as Semiannual, the version as 2609.3 and the feature scope as Users (always enabled). The release phase is General Availability, the platform is Web, and the clouds are Worldwide (Standard Multi-Tenant), GCC and GCC High. The status is Launched, with a target date of October CY2026.

Learn's page on the modern look says the New Look (wave 1) became mandatory for all users with the April 2026 semiannual release, and that makers can no longer switch a model-driven app to the classic look. Its closest statement about use outside the main app says the mail app "will be enabled on the semi-annual channel with the October 2026 update"; see [the mail app briefing](/features/power-apps-modern-refreshed-look-for-the-mail-app/). Microsoft Learn does not describe an embedded experience under that name at the time of writing (November 2026), so what follows about how it behaves is the roadmap's description.

## Why it matters

Users who see model-driven app content inside another host, in environments on the semiannual channel, get a changed look without choosing it. Nothing in the roadmap record describes a change to data, permissions or spend, so the effect is on user familiarity and support: expect questions about where things moved, not security incidents.

Microsoft's release channel page recommends the semi-annual channel for users who need more training and testing before new end-user-impacting features arrive. That makes it the channel where this change is most likely to be a surprise. Treat it as a communication task: tell those users what is coming and let helpdesk staff see the look first in a monthly-channel environment, where the roadmap says it has been enabled since 2602.1.

## Risk assessment

**Data exposure**
- No change described: the roadmap description covers styling and interaction patterns, and names no new data access.

**Security & identity**
- No change described: the roadmap description mentions no permission, role or sign-in change.

**Autonomy & actions**
- No change described: the roadmap description mentions no automated action.

**Change & support**
- The look is always enabled for users per the roadmap's feature scope, so leaving a setting alone does not hold semiannual-channel users on the old appearance. Plan communication, not a rollback.
- Learn lists limitations of the modern look for model-driven apps: classic theme customisations are no longer honoured, and only SVG icons are supported in navigation. Test customised apps in the host where they are embedded.
- Training material, screenshots and helpdesk scripts for the embedded content will show the old look in semiannual environments until the build arrives.

## Cost and licensing

Learn's Power Apps licensing FAQs say that model-driven apps are premium apps by default and that every user who runs a model-driven app needs a licence that provides Power Apps premium use rights. Microsoft names no licence, price or meter specific to this visual refresh.

The cost this change visibly carries is admin and training time. The FAQ page is the source for the licence statement; the full list of qualifying licences is in the Microsoft Power Platform Licensing Guide that it links.

## Scope

**Users:** the roadmap lists the feature scope as Users (always enabled). **Apps:** model-driven apps shown as embedded app experiences. **Channel and version:** Semiannual, 2609.3, following 2602.1 for the monthly channel. **Clouds:** Worldwide (Standard Multi-Tenant), GCC and GCC High, as the roadmap lists them. **Platform:** Web, as the roadmap lists it.

Learn says the semi-annual channel turns on GA-ready features in April and October, following a gradual weekly rollout, so an environment gets the build on its own schedule within that rollout. Learn also lists an order of checks for which channel applies: URL override, user channel override, an app release channel other than Auto, then an environment release channel other than Auto.

## Governance guidance

### Before rollout
- Identify which environments use the semi-annual model-driven app release channel (row 1), because the roadmap targets this enablement at the semiannual channel.
- Check whether any app or user in those environments overrides the environment channel; see the note under the table for the order Learn gives.
- Tell makers and users of apps shown inside another host that the Fluent look and interaction patterns will change, using the roadmap's description.
- Open an affected app in a monthly-channel environment, where the roadmap says the look is already enabled, and test customised themes and icons against Learn's known limitations.

### At rollout
- Expect the look to arrive per environment during the gradual weekly rollout Learn describes for the semi-annual channel, not on one date for all.
- Send helpdesk the Learn page on the modern, refreshed look as the reference for what the New Look changes.

### After rollout
- Collect user feedback on the embedded experiences from semiannual-channel environments and record it against this change.
- Re-check the Learn page on the modern look for any added detail on embedded hosts.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>When the look arrives: the model-driven app release channel for an environment</strong><br><small>Environment</small><br><small class="controls__note">System Administrator role or equivalent. The request body sets releasechannel (3 = Semi-annual channel). App and user channel settings are checked first; see the notes below the table.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Behavior › Release channel › Model-driven app release channel <a href="https://learn.microsoft.com/power-platform/admin/settings-behavior" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /organizations(&lt;organizationid&gt;)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn's behaviour settings page requires the System Administrator security role or equivalent permissions to change the environment setting. The release channel changes when features arrive; it is not a setting specific to this look.

Learn's page on changing release channels adds three qualifications. A user channel override and an app release channel other than Auto are checked before the environment channel. It also says model-driven apps in Power Platform environments use Monthly when the app release channel is Auto, regardless of the environment channel, so check the app channel as well. Makers set the app channel in the app designer or the Solutions area.

Learn's modern look page says admins can turn the New Look off with the New look for model driven apps app setting, while Learn's app settings page says that setting is hidden and ignored once the New Look is mandatory. Neither page says whether the setting covers embedded app experiences, so do not promise users a rollback.

## Open questions

- Which embedded experiences does the roadmap item cover, and in which host apps does model-driven content appear? Watch the Learn page on the modern, refreshed look and the roadmap item.
- Can an administrator still switch the New Look off, as one Learn page says, or is that setting hidden and ignored, as another says, and does it affect embedded content? Watch the Learn page on the modern look and the app settings page.
- Do the documented modern-look limitations (classic theme customisations, SVG-only icons) apply in the embedded host? Watch the Learn page on the modern look.
- Does the roadmap's "always enabled" scope apply to every environment on the semiannual channel regardless of app or user channel overrides? Watch the roadmap item and the Learn page on release channels.

<!-- rationale
risk: Low. The roadmap item describes styling and interaction patterns only, and Learn says the modern look changes presentation, not data or permissions, so the exposure is user confusion, not data.
cost: Low. Model-driven app users already need a licence with Power Apps premium use rights; Microsoft names no licence, price or meter specific to this refresh, so the visible cost is admin and training time.
impact: Medium. Users of model-driven app content shown inside another host on the semiannual channel see a different look without choosing it; the roadmap lists the feature scope as Users (always enabled).
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] rationale: risk / behaviour: Learn says the modern-look change does not affect data. | Found: There is no impact on app logic, data, or permissions. | Fix: Add https://learn.microsoft.com/power-platform/important-changes-coming#deprecation-of-the-classic-look-for-model-driven-apps to sources for the risk rationale's statement that Learn says the modern look does not change data or permissions. | Source: https://learn.microsoft.com/power-platform/important-changes-coming#deprecation-of-the-classic-look-for-model-driven-apps
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: Every control the governance checklist asks readers to inspect appears in the controls table. | Found: Check whether any app or user in those environments overrides the environment channel; see the note under the table for the order Learn gives. The controls table contains only the environment release channel. | Fix: Remove the Before rollout bullet beginning 'Check whether any app or user in those environments overrides the environment channel'; the app and user override checks have no corresponding controls-table rows. Retain the explanatory qualifications below the table.
-->
