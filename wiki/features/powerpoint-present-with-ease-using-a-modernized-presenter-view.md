---
title: "PowerPoint for Mac: modernised Presenter View with a single control bar"
slug: "powerpoint-present-with-ease-using-a-modernized-presenter-view"
roadmapId: 577179
topic: "modern-work"
products: ["PowerPoint"]
summary: "PowerPoint for Mac is getting a redesigned Presenter View with one control bar and collapsible panes. Roadmap target is November CY2026. No admin setting is documented, so the work is communication to presenters."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's Office for Mac overview says Microsoft 365 plan users receive new or improved features through monthly updates. No separate licence, price or meter for this feature is published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["powerpoint","macos","microsoft-365-apps","adoption"]
sources:
  - title: "Microsoft 365 Roadmap item 577179"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577179"
    kind: "roadmap"
  - title: "Overview of Office for Mac (for admins and IT Pros)"
    url: "https://learn.microsoft.com/microsoft-365-apps/mac/overview"
    kind: "learn"
  - title: "Release notes for Office for Mac"
    url: "https://learn.microsoft.com/officeupdates/release-notes-office-for-mac"
    kind: "learn"
  - title: "Set per-app preference for Office for Mac"
    url: "https://learn.microsoft.com/microsoft-365-apps/mac/set-preference-per-app"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Switch for the modernised Presenter View in PowerPoint for Mac"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no admin setting or API for this feature at the time of writing (November 2026). Update timing through Microsoft AutoUpdate or your deployment tools is the lever Learn describes for Office for Mac updates."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-20"
    note: "New briefing for the Mac listing of the modernised Presenter View; no admin control or default is documented yet."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 45 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 50 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 49
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "8ba07d31468fda02740a7f6c9424b0e1"
---

## What's changing

The roadmap item describes a redesigned Presenter View in PowerPoint for Mac. Presenter tools, slide navigation and the timer are placed together in one control bar, with updated icons and slide thumbnails. Presenters can also collapse the thumbnail pane and the Next Slide and Notes pane.

Microsoft lists the same feature under two roadmap ids. This page covers item 577179, which lists the Mac platform. The other item, 577178, lists the Desktop platform. Both are in the Worldwide (Standard Multi-Tenant) cloud, at General Availability, and both are In development with a target of November CY2026. The target is Microsoft's plan, not a confirmed release date.

Microsoft Learn has no page that describes this feature, and the Office for Mac release notes for 4, 10 and 17 November 2026 list no Presenter View change for PowerPoint. What this page says about behaviour is therefore the roadmap's description. Microsoft has not stated whether the new design is on by default or whether presenters can switch back to the previous layout.

## Why it matters

Presenter View is the screen presenters rely on during a live session, so a changed layout is noticed the first time someone presents after the update. Microsoft has not stated the default, so plan on the new design reaching presenters through normal Office for Mac updates and prepare people for it rather than assuming nothing changes.

The exposure is a support and adoption one: a presenter who cannot find the timer or the notes pane mid-presentation is the likely help-desk call. Short guidance and a rehearsal before important events cover most of it.

## Risk assessment

**Data exposure**
- No change stated: the roadmap describes layout, icons, thumbnails and collapsible panes, and names no new data source or sharing path.

**Security & identity**
- No change stated: the roadmap describes no new sign-in, permission or external connection.

**Autonomy & actions**
- No change stated: the roadmap describes no automated or agent behaviour; presenters operate the controls themselves.

**Change & support**
- The control bar groups presenter tools, slide navigation and the timer in one place, so muscle memory from the previous layout may not carry over. Brief frequent presenters and the help desk before the update reaches them.
    - Collapsing the thumbnail pane and the Next Slide and Notes pane is a presenter choice; check on a test Mac how each pane behaves before telling presenters what to expect.
- Microsoft's release notes say features are often rolled out over a period of time, so two Macs on the same build may not show the new Presenter View at the same moment.

## Cost and licensing

Microsoft's Office for Mac overview says that Office for Mac is updated approximately once a month, and that for users with a Microsoft 365 plan these updates can include new or improved features. It also says Office LTSC for Mac 2024 and Office LTSC for Mac 2021 do not receive new features. The roadmap item does not name a licence for this feature.

No price, meter or separate licence for this feature is published at the time of writing (November 2026). The indirect cost is admin and help-desk time for communication and, if you test updates before release, for testing.

## Scope

- **Platform:** the roadmap item for this page lists Mac. A separate roadmap item, 577178, lists Desktop.
- **Cloud:** Worldwide (Standard Multi-Tenant) is the only cloud the roadmap record lists. Other clouds are not listed for this item.
- **Release phase and timing:** General Availability, status In development, target November CY2026.
- **Users and licences:** Microsoft has not published which licences or which versions of Office for Mac receive it. Learn says Office LTSC for Mac 2024 and 2021 do not receive new features.
- **Prerequisites:** Microsoft's release notes say a minimum of macOS 14 (Sonoma) is required to receive updates to Microsoft 365 and Office apps.
- **Rollout:** the release notes say Microsoft often rolls out features over a period of time. A rollout mechanism for this feature is not stated.

## Governance guidance

### Before rollout
- Identify which teams present from PowerPoint for Mac with Presenter View, such as sales, training and executive support, and tell them the layout is planned to change.
- Confirm how your Macs receive Office updates (Microsoft AutoUpdate or your own deployment tools) so you know when the change can reach them.
- Brief the help desk on the planned layout: one control bar for presenter tools, slide navigation and the timer, and collapsible thumbnail and Next Slide and Notes panes.

### At rollout
- Open Presenter View on a test Mac after the update that carries the change and check where the timer, slide navigation and notes pane appear.
- Ask presenters with important events to rehearse once on the new layout before presenting live.
- Watch the Office for Mac release notes and Message center for a notice that names the build or date for this feature.

### After rollout
- Collect help-desk tickets that mention Presenter View and add the answers to your presenter guidance.
- Check whether Microsoft has published a setting, preference or policy for Presenter View and, if it has, add it to your governance notes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Switch for the modernised Presenter View in PowerPoint for Mac</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no admin setting or API for this feature at the time of writing (November 2026). Update timing through Microsoft AutoUpdate or your deployment tools is the lever Learn describes for Office for Mac updates.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

At the time of writing (November 2026) the per-app preference page for Office for Mac lists one PowerPoint key, CustomerLoggingEnabled, which is for verbose logging and does not govern Presenter View. Microsoft Learn documents no admin setting or API for the Presenter View redesign, so the table records that gap. Update timing is the lever available today: the release notes say updates are available from Microsoft AutoUpdate, and that admins can deploy the update packages with their existing software deployment tools. Delaying an update also delays the other changes it carries.

## Open questions

- Is the new Presenter View on by default on arrival, and can presenters return to the previous layout? Watch the roadmap item and the Office for Mac release notes.
- Which Office for Mac build first carries the redesign, and when does it reach Microsoft 365 plan users given the November CY2026 target?
- Does the redesign reach Office LTSC for Mac 2024 or 2021, given that Microsoft Learn says those versions do not receive new features?
- Will Microsoft publish an admin preference or policy for Presenter View? Watch Learn's Office for Mac preference pages.

<!-- rationale
risk: Low. The roadmap describes a redesign of how Presenter View looks and is laid out; it names no new data access, sharing or automation.
cost: Low. No separate licence or meter is published for this feature; the cost that is known is admin time to brief presenters and the help desk.
impact: Medium. People who present with Presenter View in PowerPoint for Mac will see presenter tools, slide navigation and the timer in a new place, and Microsoft has not stated whether they can keep the old layout.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / behaviour: Delaying an Office for Mac app update also delays the other changes it carries. | Found: Individual security updates or other updates can't be downloaded and installed. Instead, Microsoft provides a new app bundle of an app, such as Word, that includes all the updates. | Fix: Add https://learn.microsoft.com/microsoft-365-apps/mac/deploy-updates-for-office-for-mac to sources, titled 'Deploy updates for Office for Mac', to support the sentence 'Delaying an update also delays the other changes it carries.' | Source: https://learn.microsoft.com/microsoft-365-apps/mac/deploy-updates-for-office-for-mac
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist asks readers to take stock of Office update delivery, but that control has no row in the controls table. | Found: Confirm how your Macs receive Office updates (Microsoft AutoUpdate or your own deployment tools). Table's sole control: Switch for the modernised Presenter View in PowerPoint for Mac. | Fix: Remove the Before rollout bullet beginning 'Confirm how your Macs receive Office updates': it asks readers to take stock of update delivery, which has no controls-table row. Do not add a row as part of this correction.
-->
