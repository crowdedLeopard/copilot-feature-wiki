---
title: "PowerPoint: clearer on-screen presenting controls for single-screen Slide Show"
slug: "powerpoint-present-with-confidence-on-a-single-screen-in-slide-show"
roadmapId: 573151
topic: "modern-work"
products: ["PowerPoint"]
summary: "PowerPoint plans easier-to-find on-screen controls when presenting in Slide Show on one display. Microsoft has published no admin controls or licence terms for it, so the action is to brief users and watch for updates."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "PowerPoint is one of the apps in Microsoft 365 Apps, and its web version is included with all Office 365 (and Microsoft 365) plans, per Microsoft Learn. A licence requirement specific to this feature is not yet published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["powerpoint","microsoft-365-apps","user-experience","adoption"]
sources:
  - title: "Microsoft 365 Roadmap: PowerPoint: Present with confidence on a single screen in Slide Show"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573151"
    kind: "roadmap"
  - title: "About Microsoft 365 Apps in the enterprise"
    url: "https://learn.microsoft.com/microsoft-365-apps/deploy/about-microsoft-365-apps"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
videos: []
related: ["powerpoint-present-with-ease-using-a-modernized-presenter-view-577178","powerpoint-present-with-ease-using-a-modernized-presenter-view"]
controls:
  - governs: "Tenant-wide switch for the single-screen Slide Show controls"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin setting for this feature is documented at the time of writing. Cloud Policy service for Microsoft 365 is the general route for Microsoft 365 Apps policy settings."
confidence: "low"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-20"
    note: "First briefing: roadmap-only description, no Learn page or admin control yet; target November CY2026."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 34 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 42 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 41
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "769caca014554808fd2b3af84ada3161"
---

## What's changing

PowerPoint is changing the on-screen controls that appear when someone presents in Slide Show on a single display. The roadmap item says the controls for moving through slides and staying in command of the presentation are being made more discoverable and useful, for people presenting without a second monitor and without Presenter View.

The roadmap item lists Desktop and Web as platforms and General Availability as the release phase. Its only cloud is Worldwide (Standard Multi-Tenant). Microsoft Learn has no page for this feature at the time of writing (November 2026), so what follows about behaviour is the roadmap's description: it does not say which controls change, where they appear, or whether they can be hidden.

The roadmap status is In development, with a target of November CY2026. That is a target, not a launch: the status has not moved to Rolling out or Launched. The roadmap item carries no more-info link, and no Message center post was supplied for it.

## Why it matters

This is a user-facing change to something people use in front of an audience, so the realistic effect for a tenant is support questions and presenter habits, not data or spend. People who present from a laptop in a meeting room, or who share one screen, will see different controls from the ones they know.

Microsoft has not stated what happens on arrival, so base planning on the roadmap's description that the controls are being changed, not on an assumption that nothing changes. A short note to frequent presenters before the target month ends costs little and avoids 'where did the controls go' tickets.

## Risk assessment

**Data exposure**
- No new data access is described. The roadmap text covers on-screen navigation controls during Slide Show and does not mention files, sharing or content leaving the device.

**Security & identity**
- No identity or permission change is described. The roadmap does not say the controls act on anyone's behalf or need a sign-in.

**Autonomy & actions**
- No autonomous behaviour is described. The controls are for the presenter to move through slides and stay in command, so a person triggers each action.

**Change & support**
- Presenters on a single display will see a changed Slide Show screen, and trainers or help desks may field questions about where a control went. Microsoft has not documented the new layout, so screenshots in internal guides may date once it lands.
- Microsoft has not stated whether the change is on by default or can be turned off, so plan for it arriving for presenters in the target month rather than for an opt-in.

## Cost and licensing

No licence or meter is published for this feature. The roadmap item names none, and Microsoft Learn has no page for the feature itself.

Microsoft Learn says that Microsoft 365 Apps includes PowerPoint and that the web versions of the Office applications are included with all Office 365 (and Microsoft 365) plans ([About Microsoft 365 Apps in the enterprise](https://learn.microsoft.com/microsoft-365-apps/deploy/about-microsoft-365-apps)). That page covers the product, not this feature, so a licence requirement specific to the feature is not yet published.

The indirect cost is time: briefing presenters and updating any internal how-to material.

## Scope

The roadmap item lists the Desktop and Web platforms and the Worldwide (Standard Multi-Tenant) cloud. It describes the change for people presenting in Slide Show on one display with no Presenter View.

The roadmap item does not list the operating systems or app versions for Desktop, nor the roles or licences involved, and Microsoft has not stated the rollout mechanics. Not being listed for another cloud on the roadmap is a record fact, not a statement that the change is unavailable there.

PowerPoint's separate Presenter View redesigns are covered in their own briefings: [PowerPoint for Windows](/features/powerpoint-present-with-ease-using-a-modernized-presenter-view-577178/) and [PowerPoint for Mac](/features/powerpoint-present-with-ease-using-a-modernized-presenter-view/).

## Governance guidance

### Before rollout
- Identify frequent presenters, such as sales, training and executive-briefing teams, who present from a laptop on a single display, and tell them the Slide Show controls are planned to change.
- Check the roadmap item and Message center for status changes, since the item is In development with a November CY2026 target.
- Decide whether your help desk needs a short answer for 'where are the Slide Show controls' questions.

### At rollout
- Test a representative presentation in Slide Show on a single display on both Desktop and Web once the change reaches a pilot device.
- Capture current screenshots of the new controls for internal guides, since Microsoft has not documented them.

### After rollout
- Collect presenter feedback during the first weeks and route any request to hide or change the controls to Microsoft support, as no tenant setting is documented.
- Update training material and meeting-room guidance that mentions the old controls.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for the single-screen Slide Show controls</strong><br><small>Tenant</small><br><small class="controls__note">No admin setting for this feature is documented at the time of writing. Cloud Policy service for Microsoft 365 is the general route for Microsoft 365 Apps policy settings.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting for these Slide Show controls at the time of writing (November 2026), so the first row records that gap. No audit event or usage report for them is described either.

Cloud Policy service for Microsoft 365 lets administrators enforce policy settings for Microsoft 365 Apps for enterprise. It is mentioned here as the general route for Office app policies, not as a confirmed control for this feature; Microsoft Learn names no policy for it.

## Open questions

- Is the change on by default for all presenters, and can an administrator or user turn it off? Watch the roadmap item and Message center for a default state.
- Which controls change and where do they appear on Desktop and on the web? Watch for a Microsoft Support or Learn page for the feature.
- Which Desktop operating systems and app versions or update channels get it, and when will the November CY2026 target move to Rolling out?
- Does the feature need anything beyond an existing Microsoft 365 Apps licence? Watch for a licensing statement from Microsoft.

<!-- rationale
risk: Low. The roadmap describes only the on-screen controls shown during single-screen Slide Show and mentions no new data access, sharing or automation; its default state is not stated.
cost: Low. The only cost the sources show is admin and support time to brief presenters; no licence or meter for this feature is published, and PowerPoint itself is part of Microsoft 365 Apps.
impact: Medium. Anyone who presents on a single display, such as a laptop without a second monitor, will see different Slide Show controls; presenters who use Presenter View on two screens are not the audience in the description.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: A person triggers each action. | Found: Searched: "PowerPoint" "single-screen" "Slide Show" controls automatic actions. Read roadmap and https://learn.microsoft.com/office/vba/api/powerpoint.slideshowsettings excerpt; neither establishes that every action of the new controls is person-triggered. | Fix: Remove ', so a person triggers each action'. Retain the narrower statements that no autonomous behaviour is described and that the controls help the presenter move through slides and stay in command.
-->
