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
  model: "included"
  notes: "Power Automate Premium includes the full set of cloud automation capabilities. No separate licence or meter for this inline view is stated in the reviewed documentation."
audiences: ["maker","power-platform-admin","change-adoption"]
tags: ["power-automate","user-experience","debugging"]
sources:
  - title: "Microsoft 365 Roadmap 577803"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577803"
    kind: "roadmap"
  - title: "Explore the cloud flows designer"
    url: "https://learn.microsoft.com/power-automate/flows-designer"
    kind: "learn"
  - title: "Use data operations"
    url: "https://learn.microsoft.com/power-automate/data-operations"
    kind: "learn"
  - title: "View property value expanded inline in the new cloud flow designer"
    url: "https://learn.microsoft.com/power-platform/release-plan/2025wave2/power-automate/view-property-value-expanded-inline-new-cloud-designer"
    kind: "learn"
  - title: "Types of Power Automate licenses"
    url: "https://learn.microsoft.com/power-platform/admin/power-automate-licensing/types"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which layout a maker uses for action properties in the designer"
    scope: "maker"
    ui:
      surface: "Power Automate (maker)"
      path: "My flows > Cloud flows > flow > Edit > New designer (on) > Collapse (configuration pane) > Layout"
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
updated: "2026-11-24"
roadmapModified: "2026-10-22T23:45:28"
changes:
  - date: "2026-11-17"
    note: "New briefing for the inline property value view in the new cloud flow designer, launched per the roadmap."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 40 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the Layout button path, the licensing model (Power Automate Premium includes cloud automation capabilities) and removed unsupported statements about access, flow behaviour and secure outputs testing."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 32 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 32 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected the Layout control's path to start at My flows and added the archived release plan's differing default and February 2026 target."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 40 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 38 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 36
  unconfirmed: 2
  contradicted: 0
  attempts: 1
  hash: "d756f4e6d813de0fbff8f85a2a50467e"
---

## What's changing

The new cloud flow designer in Power Automate can show property values, and output values at runtime, directly on the action cards, so a maker can compare several steps at once. The roadmap item describes this as an inline view that avoids selecting each card to read its value in the side pane, which shows one step's value at a time.

The roadmap states that the current side pane experience remains the default and that a maker can switch to the inline view and back at any time. It lists the feature as "Enabled for admins/makers/marketers automatically", which the wiki reads as availability to makers rather than a setting an administrator turns on.

An archived release-plan excerpt indexed by Microsoft Learn describes inline display as the default and gives February 2026 as its general-availability target; this briefing follows the current roadmap record's side-pane default and June CY2026 target. The excerpt is at [View property value expanded inline in the new cloud flow designer](https://learn.microsoft.com/power-platform/release-plan/2025wave2/power-automate/view-property-value-expanded-inline-new-cloud-designer).

The Learn page on the cloud flows designer describes a **Layout** button that switches between inline and panel layouts: the inline layout shows an action's properties in an expanded card, and the panel layout shows them in the configuration pane and keeps cards compact. That page does not mention property values or run outputs on cards, so it is background for this feature, not a description of it.

The roadmap record gives the status as Launched, with a target of June CY2026, for Worldwide (Standard Multi-Tenant), General Availability, on the web.

## Why it matters

This is an authoring and debugging convenience for makers, so most administrators need only know it exists when makers ask about it.

If nobody acts, the roadmap says the side pane experience remains the default, so nothing changes for a maker until they switch. The one point worth a view is that run output values, which may include business data, can appear on the canvas of several cards at once. Consider screen sharing and screenshots when several cards display values.

## Risk assessment

**Data exposure**
- Output values from a run can be shown on the cards themselves, so several steps' values may be visible at once in a screenshot or screen share. The roadmap describes the view as showing values at runtime; the sources do not say how it treats actions that have secure outputs turned on, so confirm this before relying on it.

**Security & identity**
- No change is described: the roadmap item gives no new permission, connection or identity, and the view is part of the designer a maker already uses.

**Autonomy & actions**
- The roadmap describes displaying property and runtime output values on cards.

**Change & support**
- Makers who switch views may ask where values went; the roadmap says they can switch back at any time. Expect questions from makers who find the Layout button and expect it to behave as the roadmap describes.

## Cost and licensing

Power Automate Premium includes the full set of cloud automation capabilities. No separate licence or meter for this inline view is stated in the reviewed documentation.

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

### After rollout
- Ask makers whether the inline view helped debugging, and collect questions on where to find the switch.
- Watch the Learn page on the cloud flows designer for a page that describes this view and any admin setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which layout a maker uses for action properties in the designer</strong><br><small>Maker</small><br><small class="controls__note">Maker-side. The Learn page does not say this is the control for the roadmap's property-value view; confirm.</small></td><td data-label="Admin UI"><strong>Power Automate (maker)</strong><br>My flows › Cloud flows › flow › Edit › New designer (on) › Collapse (configuration pane) › Layout <a href="https://learn.microsoft.com/power-automate/flows-designer" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
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

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] What's changing: archived release-plan paragraph / default: An archived release-plan excerpt indexed by Microsoft Learn describes inline display as the default. | Found: Searched: exact feature title, feature URL, and 'inline view default Power Automate'; opened original and previous-versions feature URLs. Both redirect to the archived planned-features summary, which omits this feature; no supporting indexed excerpt was returned. | Fix: Remove the third paragraph of What's changing, beginning 'An archived release-plan excerpt', including its excerpt-link sentence. The current linked summary does not state an inline default for this feature, and no supporting excerpt was found in this run.
- [unsupported, blocker] What's changing: archived release-plan paragraph / date: The archived release-plan excerpt gives February 2026 as this feature's general-availability target. | Found: Searched: 'Power Automate inline property values February 2026 release' and the full feature title with 'February 2026'; opened original and previous-versions feature URLs. Both redirect to planned-features, which omits this feature and its target. | Fix: Remove the third paragraph of What's changing, beginning 'An archived release-plan excerpt', including its excerpt-link sentence. Retain the supported June CY2026 roadmap target in the final paragraph; no February 2026 target could be verified.
-->
