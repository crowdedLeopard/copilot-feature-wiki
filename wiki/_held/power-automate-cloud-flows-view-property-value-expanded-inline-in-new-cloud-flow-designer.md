---
title: "Power Automate: view property values inline on cards in the new cloud flow designer"
slug: "power-automate-cloud-flows-view-property-value-expanded-inline-in-new-cloud-flow-designer"
roadmapId: 577803
topic: "power-platform"
products: ["Power Automate"]
summary: "Makers can show property and output values directly on cards in the new cloud flow designer, instead of one at a time in the side pane. The side pane stays the default; no admin action is needed."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. The Learn page that describes the cloud flows designer lists no licence for it, and the roadmap item names none."
audiences: ["maker","power-platform-admin","change-adoption"]
tags: ["power-automate","user-experience","debugging"]
sources:
  - title: "Microsoft 365 Roadmap 577803"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577803"
    kind: "roadmap"
  - title: "Explore the cloud flows designer"
    url: "https://learn.microsoft.com/power-automate/flows-designer"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which layout a maker uses for action properties in the designer"
    scope: "maker"
    ui:
      surface: "Power Automate (maker)"
      path: "Cloud flow designer > Layout"
      docs: "https://learn.microsoft.com/power-automate/flows-designer"
    api: null
    note: "Maker-side. The Learn page does not say this is the control for the roadmap's property-value view; confirm."
  - governs: "Tenant or environment switch for the inline property value view"
    scope: "tenant"
    ui: null
    api: null
    note: "No administrator setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-22T23:45:28"
changes:
  - date: "2026-11-17"
    note: "New briefing for the inline property value view in the new cloud flow designer, launched per the roadmap."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 40 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 33
  unconfirmed: 4
  contradicted: 3
  attempts: 1
  hash: "c7ded27f5e7bfad1046dde7039efaf94"
---

## What's changing

The new cloud flow designer in Power Automate can show property values, and output values at runtime, directly on the action cards, so a maker can compare several steps at once. The roadmap item describes this as an inline view that avoids selecting each card to read its value in the side pane, which shows one step's value at a time.

The roadmap states that the current side pane experience remains the default and that a maker can switch to the inline view and back at any time. It lists the feature as "Enabled for admins/makers/marketers automatically", which the wiki reads as availability to makers rather than a setting an administrator turns on.

The Learn page on the cloud flows designer describes a **Layout** button that switches between inline and panel layouts: the inline layout shows an action's properties in an expanded card, and the panel layout shows them in the configuration pane and keeps cards compact. That page does not mention property values or run outputs on cards, so it is background for this feature, not a description of it.

The roadmap record gives the status as Launched, with a target of June CY2026, for Worldwide (Standard Multi-Tenant), General Availability, on the web.

## Why it matters

This is an authoring and debugging convenience for makers. It does not change what data a flow reads, who can open a flow or what a flow does, so most administrators need only know it exists when makers ask about it.

If nobody acts, the roadmap says the side pane experience remains the default, so nothing changes for a maker until they switch. The one point worth a view is that run output values, which may include business data, can appear on the canvas of several cards at once. That affects screen sharing and screenshots, not access.

## Risk assessment

**Data exposure**
- Output values from a run can be shown on the cards themselves, so several steps' values may be visible at once in a screenshot or screen share. The roadmap describes the view as showing values at runtime; the sources do not say how it treats actions that have secure outputs turned on, so confirm this before relying on it.

**Security & identity**
- No change is described: the roadmap item gives no new permission, connection or identity, and the view is part of the designer a maker already uses.

**Autonomy & actions**
- No change: the feature displays values and does not run or alter flows.

**Change & support**
- Makers who switch views may ask where values went; the roadmap says they can switch back at any time. Expect questions from makers who find the Layout button and expect it to behave as the roadmap describes.

## Cost and licensing

No licence or meter is stated for this feature. The roadmap record names none, and the Learn page on the cloud flows designer lists none for it, so the licensing is not yet published for this specific view.

The indirect cost is maker time to learn the view. Cost is rated low on that basis only.

## Scope

Makers and others who author flows in the new cloud flow designer on the web. The roadmap record lists Worldwide (Standard Multi-Tenant), General Availability and the Web platform, and does not list GCC, GCC High or DoD; the record does not say whether those clouds are excluded.

The roadmap item refers to the new cloud flow designer and gives no prerequisite beyond that. Whether the classic designer offers the view is not stated.

## Governance guidance

### Before rollout
- Tell makers that the side pane remains the default and that they can switch to an inline view in the new designer.
- Find out which makers still use the classic designer, since the roadmap item refers to the new designer.

### At rollout
- Confirm in a test tenant that the inline view appears for a maker and that the side pane experience is unchanged until they switch.
- Test an action with secure outputs turned on and note whether its value appears on the card, before telling makers it is safe to share screenshots.

### After rollout
- Ask makers whether the inline view helped debugging, and collect questions on where to find the switch.
- Watch the Learn page on the cloud flows designer for a page that describes this view and any admin setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which layout a maker uses for action properties in the designer</strong><br><small>Maker</small><br><small class="controls__note">Maker-side. The Learn page does not say this is the control for the roadmap's property-value view; confirm.</small></td><td data-label="Admin UI"><strong>Power Automate (maker)</strong><br>Cloud flow designer › Layout <a href="https://learn.microsoft.com/power-automate/flows-designer" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment switch for the inline property value view</strong><br><small>Tenant</small><br><small class="controls__note">No administrator setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Learn page documents a Layout button in the designer that switches between inline and panel layouts. It does not state that this is the control for the roadmap's property-value view, so confirm that before telling makers to use it.

Microsoft Learn documents no administrator setting or API for this view at the time of writing (November 2026), so the second row records that gap. Makers choose the view themselves.

## Open questions

- Does the inline property and output view use the same **Layout** control that the Learn designer page describes, or a separate switch? Watch the cloud flows designer page on Microsoft Learn.
- Does the inline view show values from actions with **Secure outputs** turned on? Watch the designer page and the Power Automate release notes.
- Will Microsoft add an administrator setting for the designer layout? Watch Message center and the Learn page.
- Is the feature available in GCC, GCC High or DoD? The roadmap lists only Worldwide (Standard Multi-Tenant).

<!-- rationale
risk: Low. It changes how makers view values they can already open in the designer; the roadmap says the side pane stays the default and makers choose when to switch.
cost: Low. The only cost the sources show is maker time to learn the view; no licence or meter is stated for this feature, and the roadmap record states none.
impact: Low. Only makers who author or debug cloud flows in the new designer will notice it, and only if they switch the view on.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The documented maker path is Cloud flow designer > Layout. | Found: The buttons appear at the bottom-left corner of the canvas when the configuration pane is closed. | Fix: Replace the path in controls[0].ui and its rendered row with 'Cloud flows designer > Collapse (configuration pane) > Layout'. The cited article labels Collapse as the button that hides the pane; Layout appears at the bottom-left when that pane is closed. 'Cloud flow designer' itself is a descriptive location, not evidence of an invented menu. | Source: https://learn.microsoft.com/power-automate/flows-designer
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing / licensing: The licensing model is unknown because licensing for this designer capability has not been published. | Found: With a Power Automate Premium user license, users gain the full set of capabilities for cloud and desktop automation | Fix: Set licensing.model to 'included' and replace the licensing notes and the sentence concluding that licensing is unpublished with: 'Power Automate Premium includes the full set of cloud automation capabilities. No separate licence or meter for this inline view is stated in the reviewed documentation.' Cite https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types. This does not assert that Premium is the minimum required licence. | Source: https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types
- [unsupported, major] Why it matters / behaviour: The feature does not change what data a flow reads. | Found: Searched: '"Power Automate" "inline" "view" permissions access flows' and '"Power Automate" "inline view" "does not"'. Read flows-designer and the roadmap; neither explicitly establishes unchanged flow data reads. | Fix: Remove 'It does not change what data a flow reads' from Why it matters; retain the sourced description of displaying values.
- [unsupported, major] Why it matters / behaviour: The feature does not change who can open a flow or affect access. | Found: Searched: '"Power Automate" "inline" "view" permissions access flows'. Read flows-designer and sharing-permissions search excerpts; they describe existing permissions, not whether this feature changes them. | Fix: Remove 'who can open a flow' and replace 'That affects screen sharing and screenshots, not access' with 'Consider screen sharing and screenshots when several cards display values.'
- [unsupported, major] Why it matters; Risk assessment: Autonomy & actions / behaviour: The feature does not change what a flow does or alter flows. | Found: Searched: '"Power Automate" "inline view" "does not"'. Read the roadmap and flows-designer; they describe displaying and configuring properties, without an explicit assurance that this feature cannot alter flows. | Fix: Remove 'or what a flow does' from Why it matters. Replace the Autonomy & actions bullet with 'The roadmap describes displaying property and runtime output values on cards.'
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature does not run flows. | Found: Searched: '"Power Automate" "inline view" "does not"'. Read the roadmap and flows-designer, including Test button; neither states that switching to or using the inline property-value view cannot run a flow. | Fix: Remove 'does not run' as part of replacing the Autonomy & actions bullet with 'The roadmap describes displaying property and runtime output values on cards.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: Every control the governance checklist asks readers to test appears in the controls table. | Found: Test an action with secure outputs turned on ... | Table rows: Which layout a maker uses for action properties in the designer; Tenant or environment switch for the inline property value view. | Fix: Remove the checklist bullet 'Test an action with secure outputs turned on and note whether its value appears on the card, before telling makers it is safe to share screenshots.' The Secure outputs control it asks readers to test has no table row; retain the existing Open question rather than adding a row.
-->
