---
title: "PowerPoint for Windows: modernised Presenter View with one control bar and a slide strip"
slug: "powerpoint-present-with-ease-using-a-modernized-presenter-view-577178"
roadmapId: 577178
topic: "modern-work"
products: ["PowerPoint"]
summary: "The roadmap plans a redesigned Presenter View in PowerPoint for Windows desktop, targeted for November CY2026. It changes the presenter's screen, not data. Tell presenters; no admin control is documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn says Microsoft 365 Apps, which includes PowerPoint, comes with many enterprise and business subscription plans. No licence or price specific to this feature is published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["powerpoint","microsoft-365-apps","user-experience","adoption"]
sources:
  - title: "Plan an upgrade from older versions of Office to Microsoft 365 Apps"
    url: "https://learn.microsoft.com/microsoft-365-apps/end-of-support/plan-upgrade-older-versions-office"
    kind: "learn"
  - title: "About Microsoft 365 Apps in the enterprise"
    url: "https://learn.microsoft.com/microsoft-365-apps/deploy/about-microsoft-365-apps"
    kind: "learn"
  - title: "Release notes for Current Channel"
    url: "https://learn.microsoft.com/officeupdates/current-channel"
    kind: "learn"
  - title: "PowerPoint: Present with ease using a modernized Presenter View"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577178"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Tenant-wide switch for the modernised Presenter View"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026). The roadmap item describes pane collapse and resize as presenter actions."
confidence: "low"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-20"
    note: "New briefing for the Windows desktop roadmap item; Microsoft Learn does not yet describe the feature, so it rests on the roadmap text."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 40 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 50 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 49
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "80e16522307805b0b38149be5ab29532"
---

## What's changing

Microsoft plans a redesigned Presenter View in PowerPoint for Windows. Microsoft Learn does not describe this feature yet, so what follows is the roadmap item's description.

According to the roadmap item, presenter tools, slide navigation and the timer now sit together in one control bar. A new slide thumbnail strip lets the presenter see what is coming and jump to any slide, and panes can be collapsed or resized so the presenter can focus on what matters most.

The roadmap lists item 577178 with the platform Desktop, status In development, release phase General Availability and a target of November CY2026. It lists the Worldwide (Standard Multi-Tenant) cloud. Microsoft lists the same feature under a second roadmap item, 577179, for Mac, with the same status and target; this page covers the Windows desktop item. The target is Microsoft's plan, not a commitment, and Microsoft Learn's Current Channel release notes do not mention the feature at the time of writing (November 2026).

## Why it matters

This is a change to the screen presenters work from during live sessions, so the cost of surprise falls on the presenter and on whoever supports them. Microsoft has not stated how the change arrives or whether anything lets an organisation hold it back, so plan on presenters seeing the new layout when the feature reaches their PowerPoint for Windows.

The practical task is communication: tell frequent presenters, executive assistants and training teams what is changing before it reaches them, so a changed layout does not first appear in front of an audience.

## Risk assessment

**Data exposure**

- No change described: the roadmap item covers layout (control bar, thumbnail strip, panes) and mentions no new data source, sharing or connection.

**Security & identity**

- No change described: the roadmap item mentions no new permission, sign-in or identity use.

**Autonomy & actions**

- No change described: the roadmap item describes tools the presenter operates and mentions no agent or automated action.

**Change & support**

- Presenters who rely on the current layout may lose time finding the tools they use during a live presentation, because the roadmap item says presenter tools, slide navigation and the timer move into one control bar. Expect help-desk questions from the first presentations after the feature arrives.
- The roadmap item says panes can be collapsed or resized. Presenters who collapse a pane may not see content they expect, such as the next slide or speaker notes, so brief them on how to restore the panes.
- Microsoft Learn documents no administrator switch for the redesign at the time of writing (November 2026), so communication and rehearsal are the available mitigations.

## Cost and licensing

Microsoft Learn says Microsoft 365 Apps "is the version of Office that comes with many of those enterprise and business subscription plans" and that it includes PowerPoint ([Plan an upgrade from older versions of Office to Microsoft 365 Apps](https://learn.microsoft.com/microsoft-365-apps/end-of-support/plan-upgrade-older-versions-office)). That page covers the product the feature belongs to; it does not say which plans include this redesign.

The roadmap item names no licence, add-on or meter for the feature, and no price or meter specific to it is published at the time of writing (November 2026). The indirect cost is admin and communication time, plus any rehearsal time presenters need.

## Scope

The roadmap item covers PowerPoint on the Desktop platform and describes it as Presenter View in PowerPoint for Windows, in the Worldwide (Standard Multi-Tenant) cloud, at General Availability release phase. No US Government cloud (GCC, GCC High or DoD) is listed on the item.

The Mac version is a separate roadmap item, 577179, with the same status and target; its behaviour is not described here. The roadmap item names no prerequisite, licence, administrator role or rollout channel, and Microsoft has not stated which PowerPoint build brings the feature.

## Governance guidance

### Before rollout

- Identify the groups who present most from PowerPoint for Windows, such as executives, sales, training and events teams, and who supports them.
- Draft a short note for those groups describing the roadmap's planned changes: one control bar for tools, navigation and timer, a slide thumbnail strip, and collapsible, resizable panes.
- Add the redesign to the Windows desktop PowerPoint section of your internal change calendar against the November CY2026 target, and re-check the roadmap item for status changes.

### At rollout

- Ask a few presenters to run a rehearsal with Presenter View on a second screen as soon as the feature reaches their device, and collect what confuses them.
- Tell the help desk what the new layout is expected to look like, so it can recognise questions that come from the redesign.

### After rollout

- Share a short how-to for restoring collapsed panes and finding the timer and slide strip, based on what rehearsal showed.
- Review the roadmap item and Microsoft Learn for documentation of the feature, and update the note and the help-desk guidance when Microsoft publishes it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for the modernised Presenter View</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026). The roadmap item describes pane collapse and resize as presenter actions.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No administrator control for the modernised Presenter View is documented at the time of writing (November 2026), in the admin UI or through an API. The table records that gap so it is not mistaken for an omission.

The roadmap item says users can collapse or resize panes while presenting. That is a presenter-side layout choice described in the roadmap text, not an organisation-level setting.

## Open questions

- Does the redesign arrive on by default for everyone with PowerPoint for Windows, or can a user or administrator choose when it applies? Watch the roadmap item and Message center.
- Will Microsoft document an administrator setting or policy to delay or turn off the new Presenter View? Watch the Microsoft 365 Apps policy and release-notes pages on Microsoft Learn.
- Which Microsoft 365 Apps build and update channel bring the feature to Windows, and does it need a particular licence beyond Microsoft 365 Apps?
- Does the Mac version, roadmap item 577179, arrive with the same layout and on the same date as the Windows version?

<!-- rationale
risk: Low. The roadmap describes a redesign of the presenter's screen layout, with no new data access, connection or autonomous action.
cost: Low. The only cost the sources show is admin and communication time; no licence or meter specific to this feature is published.
impact: Medium. People who present from PowerPoint for Windows with Presenter View will see a changed layout; the audience and other users do not.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] summary / behaviour: The redesign changes the presenter's screen, not data. | Found: Searched: "PowerPoint" "modernized Presenter View" data access sharing storage security; read roadmap, About Microsoft 365 Apps, Current Channel and Presenter View support. None states data handling is unchanged; the roadmap describes layout changes. | Fix: Replace 'It changes the presenter's screen, not data.' with 'The roadmap describes layout changes and mentions no new data source, sharing or connection.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope; Open questions / record: The Mac redesign is tracked separately as roadmap item 577179. | Found: "id": 577179; "description": "When you present with Presenter View, the controls you need should be easy to find at a glance. Presenter View in PowerPoint for Mac has a refreshed design | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=577179 to sources for the Mac comparison in What's changing, Scope and Open questions.
- [supported, minor] Why it matters; rationale: impact / behaviour: Presenter View is the presenter's working screen, distinct from the slide-only screen shown to the audience. | Found: Using Presenter view is a great way to view your presentation with speaker notes on one computer (your laptop, for example), while only the slides themselves appear on the screen that your audience sees | Fix: Add https://support.microsoft.com/en-us/office/start-the-presentation-and-see-your-notes-in-presenter-view-4de90e28-487e-435c-9401-eb49a3801257 to sources for the presenter-versus-audience distinction and the speaker-notes and next-slide pane background. | Source: https://support.microsoft.com/en-us/office/start-the-presentation-and-see-your-notes-in-presenter-view-4de90e28-487e-435c-9401-eb49a3801257
-->
