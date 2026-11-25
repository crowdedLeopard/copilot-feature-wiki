---
title: "PowerPoint for Mac: customise the Presenter view layout"
slug: "powerpoint-customize-your-presenter-view-layout"
roadmapId: 579892
topic: "modern-work"
products: ["PowerPoint"]
summary: "PowerPoint for Mac presenters will be able to move and resize speaker notes and set their text size. The existing layout stays the default. No admin setting or licence is documented, so the work is communication."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Office for Mac overview says updates for users with a Microsoft 365 plan can include new or improved features. No separate licence, price or meter for this feature is published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["powerpoint","macos","microsoft-365-apps"]
sources:
  - title: "Microsoft 365 Roadmap item 579892"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579892"
    kind: "roadmap"
  - title: "Overview of Office for Mac (for admins and IT Pros)"
    url: "https://learn.microsoft.com/microsoft-365-apps/mac/overview"
    kind: "learn"
  - title: "Release notes for Office for Mac"
    url: "https://learn.microsoft.com/officeupdates/release-notes-office-for-mac"
    kind: "learn"
  - title: "Set suite-wide preferences for Office for Mac"
    url: "https://learn.microsoft.com/microsoft-365-apps/mac/preferences-office"
    kind: "learn"
  - title: "Set per-app preference for Office for Mac"
    url: "https://learn.microsoft.com/microsoft-365-apps/mac/set-preference-per-app"
    kind: "learn"
videos: []
related: ["powerpoint-present-with-ease-using-a-modernized-presenter-view","powerpoint-present-with-ease-using-a-modernized-presenter-view-577178"]
controls:
  - governs: "Switch for Presenter view layout customisation in PowerPoint for Mac"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin setting or API is documented at the time of writing (November 2026). Update timing through Microsoft AutoUpdate or your deployment tools is the only lever Learn describes for when Office for Mac updates arrive."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-11-24T00:13:11"
changes:
  - date: "2026-11-24"
    note: "New briefing: Mac Presenter view layout controls; no admin setting, licence or default beyond the roadmap is documented yet."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 41 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 41 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 41
  confirmed: 41
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "371cf5bb489bfb4cb79460618a4e7827"
---

## What's changing

PowerPoint for Mac is getting controls that let a presenter reposition and resize the speaker notes in Presenter view, set the notes to a specific text size, and arrange slides and notes into a layout of their choice. This is the roadmap item's description.

The roadmap item states that the existing layout remains the default unless the user changes it. Microsoft Learn has no page that describes this feature, so what this page says about behaviour is the roadmap's description. The November 2026 Office for Mac release notes (4, 10 and 17 November) list no Presenter view change.

The roadmap record lists the item as In development, targeted for January CY2027, in the Worldwide (Standard Multi-Tenant) cloud, on the Mac platform, at General Availability. The target is Microsoft's plan, not a confirmed release date. A separate briefing covers the [modernised Presenter View for PowerPoint for Mac](/features/powerpoint-present-with-ease-using-a-modernized-presenter-view/).

## Why it matters

This is a presenter-side change to how notes and slides are arranged. Because the roadmap says the current layout stays the default, a Mac presenter who does nothing keeps the layout they have today, and the people who notice are those who choose to customise it.

For a service owner the effect is on support and training rather than on data or spend: presenters who rearrange their own view may describe a layout to the help desk that differs from a colleague's. Microsoft has not said how the new layout is stored or whether it carries between devices, so confirm that before you promise presenters it will follow them.

## Risk assessment

**Data exposure**
- No change is described: the roadmap item covers where notes and slides sit on the presenter's screen and names no new data access. Speaker notes remain part of the presentation file.

**Security & identity**
- No change is described: the roadmap item mentions no new permission, sign-in or sharing behaviour.

**Autonomy & actions**
- No change is described: the controls are for the presenter to use, and nothing in the roadmap item says the app acts on its own.

**Change & support**
- Presenters can make the notes larger or smaller and move them, so screenshots in your internal training may no longer match what a presenter sees. The roadmap says the existing layout is the default, so expect questions only from those who customise.
- The feature is Mac only on this roadmap item. Windows presenters are not covered by it, so mixed teams may see different Presenter view options.

## Cost and licensing

Microsoft's Office for Mac overview says that for users with a Microsoft 365 plan, monthly updates can also include new or improved features. It also says Office LTSC for Mac 2024 and 2021 don't receive new features. The roadmap item names no add-on licence.

No licence, price or meter specific to this feature is published at the time of writing (November 2026). The indirect cost is admin time to brief Mac presenters and update training material.

## Scope

The roadmap item lists the Mac platform and the Worldwide (Standard Multi-Tenant) cloud, at General Availability. It lists no other cloud or platform.

Because Microsoft says Office LTSC for Mac 2024 and 2021 don't receive new features, expect the capability only on Microsoft 365 plan builds of PowerPoint for Mac. Microsoft says features can roll out over a period of time, so users on the same version may not see it on the same day. Microsoft has not published the minimum PowerPoint for Mac version.

## Governance guidance

### Before rollout
- Identify which teams present from Macs and whether they use Presenter view with speaker notes.
- Add the roadmap item (579892) to your release-readiness list with its January CY2027 target.
- Watch the Office for Mac release notes for the update that includes it.

### At rollout
- Tell Mac presenters that the existing layout remains the default and that the new controls are theirs to use.
- Update internal training screenshots once a build with the feature reaches your users.

### After rollout
- Collect questions from Mac presenters and note whether the layout carries across their devices.
- Record the build number in which the feature first appears for your tenant.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Switch for Presenter view layout customisation in PowerPoint for Mac</strong><br><small>Tenant</small><br><small class="controls__note">No admin setting or API is documented at the time of writing (November 2026). Update timing through Microsoft AutoUpdate or your deployment tools is the only lever Learn describes for when Office for Mac updates arrive.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No admin switch for this feature is documented, so the table records that gap. The Office for Mac preferences pages and the Cloud Policy service overview list no Presenter view setting at the time of writing (November 2026).

The one lever Microsoft describes for Office for Mac is update timing: updates are available from Microsoft AutoUpdate (MAU), and admins can use their existing software deployment tools. That controls when the feature arrives, not whether presenters can use it.

## Open questions

- Which PowerPoint for Mac build first includes the Presenter view layout controls? Watch the Office for Mac release notes.
- Does a presenter's custom layout follow them across devices, or is it stored per Mac? Microsoft has not said.
- Will any admin preference or policy be offered to set or restrict the layout? None is documented yet; watch the Office for Mac preferences pages and Message center.
- Does the January CY2027 target hold? The item is In development; watch the roadmap item for changes.

<!-- rationale
risk: Low. The roadmap describes layout controls only, and says the existing layout stays the default unless a user changes it; it names no new data access or autonomous action.
cost: Low. No separate licence, price or meter is published for this feature; the only cost the sources show is admin time to tell Mac presenters. Microsoft says Microsoft 365 plan users receive new features in monthly updates.
impact: Low. Only Mac users who present notice it, and the roadmap says the existing layout remains the default unless the presenter changes it.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Speaker notes are part of the presentation file. | Found: The <notes/> element is the root element of the PresentationML Notes Slide part. | Fix: Add https://learn.microsoft.com/office/open-xml/presentation/working-with-notes-slides to sources for the statement that speaker notes are part of the presentation file. | Source: https://learn.microsoft.com/office/open-xml/presentation/working-with-notes-slides
- [supported, minor] Governance controls: preferences and Cloud Policy sentence / absence: The Office for Mac preferences pages and Cloud Policy overview list no Presenter view setting. | Found: Searched: PowerPoint Mac Presenter view layout customization admin policy disable preferences API Cloud Policy. Read preferences-office, set-preference-per-app and admin-center/overview-cloud-policy; none lists a Presenter view setting. | Fix: Add https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy to sources for the existing statement about the Cloud Policy overview.
- [supported, minor] controls[0].note; Governance controls: final paragraph / applicability: Update timing is the documented administrative delivery lever, rather than an independent switch for layout customisation. | Found: you can download and deploy the update packages for each application. ... We often roll out features over a period of time. | Fix: Replace the last sentence of controls[0].note with 'Microsoft documents update delivery through Microsoft AutoUpdate or your deployment tools; Microsoft can also roll out features over a period of time.' Replace the final governance paragraph with 'Microsoft documents Office for Mac update delivery through Microsoft AutoUpdate (MAU) or existing software deployment tools. That controls when an updated app build is installed; Microsoft can also roll out features over a period of time.' | Source: https://learn.microsoft.com/officeupdates/release-notes-office-for-mac
-->
