---
title: "Power Apps: Card gallery, Persona, Avatar group and Metrics card canvas controls reach general availability"
slug: "power-apps-new-canvas-controls-card-gallery-persona-avatar-group-and-metrics-card"
roadmapId: 580456
topic: "power-platform"
products: ["Power Apps"]
summary: "Four modern canvas controls are targeted for general availability in January CY2027. Makers add them in Power Apps Studio; no admin action is documented, and licensing for the controls is not yet published."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The four control pages on Microsoft Learn name no licence or meter. Apps using premium connectors need an appropriate Power Apps entitlement; the Power Apps per-app pay-as-you-go meter also supports access without a standalone Power Apps licence."
audiences: ["power-platform-admin","maker","change-adoption"]
tags: ["power-apps","user-experience","canvas-apps","modern-controls"]
sources:
  - title: "Microsoft 365 Roadmap 580456"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580456"
    kind: "roadmap"
  - title: "Modern controls and properties in canvas apps"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/controls/modern-controls/modern-controls-reference"
    kind: "learn"
  - title: "Card Gallery modern control in canvas apps (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/controls/modern-controls/modern-control-card-gallery"
    kind: "learn"
  - title: "Persona modern control in canvas apps (Preview)"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/controls/modern-controls/modern-control-persona"
    kind: "learn"
  - title: "Avatar Group modern control in canvas apps (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/controls/modern-controls/modern-control-avatar-group"
    kind: "learn"
  - title: "Metrics Card modern control in canvas apps (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/controls/modern-controls/modern-control-metrics-card"
    kind: "learn"
  - title: "Overview of modern controls and themes in canvas apps"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/controls/modern-controls/overview-modern-controls"
    kind: "learn"
  - title: "Power Apps licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq"
    kind: "learn"
  - title: "Pay-as-you-go meters"
    url: "https://learn.microsoft.com/power-platform/admin/pay-as-you-go-meters"
    kind: "learn"
  - title: "Share resources used by canvas apps"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/share-app-resources"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether an app uses modern controls and themes"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Settings > Updates > New > Modern controls and themes"
      docs: "https://learn.microsoft.com/power-apps/maker/canvas-apps/controls/modern-controls/overview-modern-controls"
    api: null
    note: "Maker-side setting in the canvas app opened for editing. Learn does not say it governs the four controls individually."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-18"
roadmapModified: "2026-11-17T19:05:12"
changes:
  - date: "2026-11-17"
    note: "First briefing for roadmap item 580456: four modern canvas controls targeted for general availability in January CY2027; Learn pages still show preview."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 66 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after the independent check: Persona OnChange removed from the review step, example wording narrowed to Notify, premium-connector licensing reworded, and a rationale sentence aligned to the roadmap text."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "9fdc4511a91ee90cef5b9cd2c336b281"
---

## What's changing

The roadmap item states that four modern controls for canvas apps are reaching general availability: Card gallery, Persona, Avatar group and Metrics card. It describes them as reusable patterns for responsive record cards, individual and grouped identities, and key metrics, with makers supplying data, presence values and metric calculations through properties and Power Fx.

Microsoft Learn already has a page for each control. Card gallery shows records as responsive cards with optional grouping and selection, using a predefined card layout in place of a template of child controls. Persona shows one person's avatar, up to three text lines and an optional presence badge. Avatar group shows several people as avatars with an overflow list. Metrics card shows a formatted value with a title, description and optional comparison.

The roadmap item and Learn differ on status. The roadmap lists the item as In development with a target of January CY2027, release phase General Availability, Worldwide (Standard Multi-Tenant) and Web. At the time of writing (November 2026), the four control pages on Learn each carry a preview notice, and the modern controls reference marks Persona as preview but does not mark the other three. Dates are Microsoft's targets, not commitments.

The controls are used from Power Apps Studio. Learn describes turning on **Modern controls and themes** for an app under **Settings** > **Updates** > **New**.

## Why it matters

For most tenants this is a maker-side change: the controls appear in an app only when a maker has the modern controls setting on and adds them. Microsoft has not stated whether they appear in existing apps on arrival, so plan on no source saying existing apps change, rather than on nothing changing.

The point for a service owner is what makers will build with them. Persona and Avatar group draw people, and the Learn pages say presence is whatever the app supplies, so a badge in an app is not a live Teams or Microsoft Graph status. Card gallery and Metrics card display what the maker's formulas feed them, so accuracy and delegation depend on the app, not the control.

## Risk assessment

**Data exposure**

- Persona's documented defaults are `User().FullName` for Name, `User().Email` for Caption and `User().Image` for Image, so a Persona dropped into an app shows the signed-in user's name, email address and photo until the maker changes those properties.
- Avatar group, Card gallery and Metrics card show whatever table or text the maker's formulas supply, so the data exposure is that of the connector or collection the maker binds to **Items** or **DisplayText**.

**Security & identity**

- Presence is a display value. Learn states that Persona does not retrieve live presence from Microsoft Teams or Microsoft Graph and that Avatar group does not establish a live presence connection, so a badge reflects the maker's formula and can be wrong or stale.

**Autonomy & actions**

- The controls take actions through maker-written **OnSelect** and **OnChange** formulas, such as `Notify` in the Persona and Avatar group Learn examples. Review those formulas in the app, not the control.

**Change & support**

- Card gallery uses fixed card height and a predefined layout, exposes no built-in search or sorting, and Learn warns that virtualisation does not guarantee that a data-source formula delegates or retrieves every record. Expect support questions about missing records on large data sources.
- Metrics card holds its main value as text and does not aggregate records, so a figure on the card is only as correct as the formula behind it.
- Learn pages for all four controls carry preview notices at the time of writing. Confirm status before relying on them in production apps.

## Cost and licensing

Microsoft Learn lists no licence and no meter for Card gallery, Persona, Avatar group or Metrics card. Licensing for the controls themselves is not yet published, and the roadmap item names none.

Apps using premium connectors need an appropriate Power Apps entitlement; the Power Apps per-app pay-as-you-go meter also supports access without a standalone Power Apps licence. If a maker binds a card gallery or metric to such a data source, the app's licensing follows that connector, not the control.

The indirect cost is maker time: rebuilding galleries as Card gallery, supplying presence and metric formulas, and testing fixed card heights and delegation on real data.

## Scope

The roadmap record lists Power Apps, Worldwide (Standard Multi-Tenant), the Web platform and release phase General Availability. It does not list the US Government clouds, and the record does not say they are unavailable.

The users in scope are makers who build canvas apps, and the people who use those apps. Learn describes turning on **Modern controls and themes** for an app under **Settings** > **Updates** > **New** before the modern controls appear in the authoring menu. Persona's page states that Studio offers no upgrade action from another control, so existing apps need manual rework to adopt it.

Microsoft has not stated a rollout mechanism or a required role for the four controls beyond what each Learn page describes.

## Governance guidance

### Before rollout

- Tell canvas app makers that the four controls are targeted for January CY2027 and that Learn pages describe them as preview at the time of writing.
- Ask makers which apps use the **Modern controls and themes** setting, so you know where the controls could appear.
- Decide whether production apps may use controls whose Learn pages still carry a preview notice.

### At rollout

- Check Persona placements in new apps and confirm the maker has replaced the default name, email and image where the signed-in user should not be shown.
- Review **OnSelect** formulas on Avatar group, Card gallery and Persona, and **OnChange** formulas on Avatar group and Card gallery, before apps are shared.
- Test Card gallery against the real data source, since Learn warns that delegation is not guaranteed.

### After rollout

- Watch Message center and the modern controls reference for a change to the preview wording or a licence statement.
- Sample apps that show presence badges and confirm the maker's formula, as the controls do not read live presence.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an app uses modern controls and themes</strong><br><small>App</small><br><small class="controls__note">Maker-side setting in the canvas app opened for editing. Learn does not say it governs the four controls individually.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Settings › Updates › New › Modern controls and themes <a href="https://learn.microsoft.com/power-apps/maker/canvas-apps/controls/modern-controls/overview-modern-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only documented control for these controls is the per-app **Modern controls and themes** setting, which is maker-side: it is switched on in Power Apps Studio for one app at a time. The Learn page documents it as a toggle in the app's settings, not as an administrator policy.

Because the controls draw on whatever data the maker binds, existing governance of the data source, such as who can share the app and which connectors it uses, is what limits exposure. Microsoft has not confirmed any control that targets these four controls specifically.

## Open questions

- Will Microsoft move the four control pages out of preview, and will the modern controls reference be updated when general availability lands? Watch the roadmap item and the modern controls reference on Learn.
- What licence, if any, do the controls need beyond the app's own licensing? Watch the Learn pages for the controls and the Power Platform licensing FAQ.
- Will the controls appear in existing apps that already use modern controls, or only after a maker adds them? Microsoft has not stated this; watch Message center.
- Will Microsoft document an administrator-level setting to restrict these controls, rather than the per-app maker setting? Watch the Power Platform admin center documentation.

<!-- rationale
risk: Low. Makers supply data, presence values and metric calculations through properties and Power Fx. Persona's defaults show the signed-in user's name, email and image. No admin switch is documented.
cost: Low. Microsoft Learn lists no licence or meter for these controls, so the known cost is maker time to build and test apps. Licensing for the controls is not yet published.
impact: Medium. Makers building canvas apps notice first, and end users see the controls only in apps that makers choose to update.
-->

<!-- verifier-findings (2026-11-18, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure; Governance guidance; rationale: risk / behaviour: Persona's default User() formulas refer to the user signed in to the canvas app. | Found: In Power Apps, show the full name, the email address, and the picture that's associated with the user who's signed in to a canvas app. | Fix: Add https://learn.microsoft.com/power-apps/maker/canvas-apps/show-current-user to sources for the explanation of whose details the User() defaults display. | Source: https://learn.microsoft.com/power-apps/maker/canvas-apps/show-current-user
-->
