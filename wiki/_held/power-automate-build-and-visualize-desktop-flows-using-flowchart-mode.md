---
title: "Power Automate for desktop: flowchart mode for building and viewing desktop flows"
slug: "power-automate-build-and-visualize-desktop-flows-using-flowchart-mode"
roadmapId: 573292
topic: "power-platform"
products: ["Power Automate"]
summary: "A preview, node-and-edge view of desktop flows that makers choose per flow; sequence mode stays the default. Roadmap targets November CY2026. No admin switch is documented, so the work is briefing makers."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The flowchart mode page names no licence. It is a designer mode inside Power Automate for desktop, so the app's own licensing applies; Premium covers the premium RPA features. No separate price for flowchart mode is yet published."
audiences: ["power-platform-admin","maker","change-adoption"]
tags: ["power-automate","desktop-flows","automation","user-experience","debugging","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 573292"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573292"
    kind: "roadmap"
  - title: "Use flowchart mode in Power Automate for desktop (preview)"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/flowchart-flow-designer"
    kind: "learn"
  - title: "Governance in Power Automate for desktop"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/governance"
    kind: "learn"
  - title: "Premium RPA features"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/premium-features"
    kind: "learn"
  - title: "Power Automate licensing FAQ"
    url: "https://learn.microsoft.com/power-platform/admin/power-automate-licensing/faqs"
    kind: "learn"
  - title: "Work with desktop flows using code"
    url: "https://learn.microsoft.com/power-automate/developer/desktop-flow-public-apis"
    kind: "learn"
videos: []
related: ["power-automate-desktop-flows-debug-flows-using-variable-default-values","power-automate-desktop-flows-configure-notifications-for-desktop-flow-checker-in-admin-por","power-automate-desktop-flow-libraries"]
controls:
  - governs: "Which mode a maker uses to create or view a desktop flow"
    scope: "maker"
    ui:
      surface: "Power Automate for desktop (maker)"
      path: "Console > New flow > Create a flow > Flowchart mode (Preview)"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/flowchart-flow-designer"
    api: null
    note: "Maker-side and preview. Existing flows switch with View > Flowchart mode or View > Sequence mode, and only when the flow has no errors."
  - governs: "Tenant or environment switch that allows or blocks flowchart mode"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026). The Windows registry settings on the governance page do not name flowchart mode."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-18"
    note: "New briefing: a flowchart view for desktop flows, chosen per flow by makers, in preview on Learn; no admin switch documented."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 49 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 62
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "44cee59898699454d30a8f49298961f9"
---

## What's changing

Flowchart mode is a second way to build and read a desktop flow in Power Automate for desktop. Actions appear as nodes on a canvas and the lines between them (edges) show the execution path, which Microsoft says can make branches, loops and other complex logic easier to follow. Sequence mode, the numbered list, is the default and remains.

Makers choose the mode per flow. A new flow can be created in flowchart mode from the **Create a flow** dialog, where the option is labelled **Flowchart mode (Preview)**. An existing flow can be switched with **View** > **Flowchart mode** or **View** > **Sequence mode**, but only when the flow has no errors. Learn says both modes represent the same desktop flow and that changes made in one mode are available in the other.

In flowchart mode, **If** and **Switch** actions open a consolidated properties dialog, and loop actions show a loop-back edge for the loop body. Learn also describes node-level debugging (**Run from here**), a minimap, zoom and keyboard shortcuts.

Status: the roadmap item is In development, with a preview date of October CY2026 and a target of November CY2026, release phases General Availability and Preview, platform Desktop, in Worldwide, GCC, GCC High and DoD. These dates are Microsoft's targets. The Learn page is marked as a preview feature, as prerelease documentation, and says it is being gradually rolled out across regions. The roadmap's In development status and a published preview page do not match exactly; this page reports both.

## Why it matters

This is an authoring change, not a runtime one, so the exposure is small. Its effect is on how your makers read, review and hand over desktop flows: a flowchart makes branching easier to explain, and node indexes in flowchart mode match the action indexes in sequence mode, so reviews can mix both views.

If nobody acts, makers can still use sequence mode, which Learn states is the default. Microsoft has not documented an admin setting that turns flowchart mode on or off, so the decision on whether makers use a preview designer for production flows is a policy and communication one.

## Risk assessment

**Data exposure**
- Learn describes flowchart mode as a different way to display and edit a desktop flow, and says both modes represent the same flow. Treat what a flow reads and writes as set by its actions, not by the mode.

**Security & identity**
- The feature is in preview, and Microsoft says preview features aren't meant for production use and might have restricted functionality. Makers switching production flows to flowchart mode are using a preview feature.

**Autonomy & actions**
- Flowchart mode adds **Run from here**, which runs the flow starting from the selected action. Learn presents this as part of the standard debugging tools, so test flows that write data in a non-production environment.

**Change & support**
- A flow with errors cannot be switched to flowchart mode until the errors are resolved, so support questions will include "why is the option unavailable".
- **If** and **Switch** use consolidated dialogs in flowchart mode, while action-based conditions such as **If process** and **If file exists** keep their standard dialogs. Makers moving between modes will see different screens for the same action.
- Adding an action from an edge inserts it before the properties dialog opens, and closing the dialog does not remove it. **Move** changes only a node's position; **Reorder** changes execution order, and the two have different shortcuts.
- Rollout is gradual across regions, so some makers may not see the option yet.

## Cost and licensing

The flowchart mode page names no licence, meter or price. Flowchart mode is a designer mode inside Power Automate for desktop, so the app's own licensing is the relevant rule. Learn's licensing FAQ says Windows 10 and Windows Server 2016 users can use Power Automate for desktop and have usage rights for it, and that Windows 11 users can try desktop flows in attended RPA for personal productivity in the default environment. The Premium RPA features page says the Power Automate Premium licence provides access to the premium RPA features, except unattended RPA and hosted RPA.

That page's feature list does not include flowchart mode, and a licence, credit rate or price specific to flowchart mode is not yet published. The indirect cost is maker training and review time while a preview designer sits beside sequence mode.

## Scope

**Who:** makers who build desktop flows in Power Automate for desktop. Each maker chooses the mode per flow; nothing in Learn describes a mode being applied to existing flows without that choice.

**Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the Desktop platform. Learn says the feature is being gradually rolled out across regions.

**Status:** In development on the roadmap, with a preview date of October CY2026 and a target of November CY2026. Learn marks the feature as preview.

**Prerequisites:** to switch an existing flow to flowchart mode, the flow must have no errors.

## Governance guidance

### Before rollout
- Decide whether makers may use flowchart mode for flows that run in production, given Microsoft's statement that preview features aren't meant for production use.
- Tell makers that sequence mode is the default and that flowchart mode is chosen per flow (row 1 of the controls table).
- Brief reviewers that the same flow can be read in either mode and that node indexes match the sequence-mode action indexes.

### At rollout
- Pilot with a small group of makers: create a test flow through **New flow** with **Flowchart mode (Preview)** selected, then switch it back to sequence mode.
- Ask pilot makers to try **Run from here** only against test data and a non-production environment.

### After rollout
- Collect maker feedback on the consolidated **If** and **Switch** dialogs and on flows that could not be switched because they had errors.
- Watch the roadmap item and the Learn page for the move from preview to general availability, and re-check this decision when the status changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which mode a maker uses to create or view a desktop flow</strong><br><small>Maker</small><br><small class="controls__note">Maker-side and preview. Existing flows switch with View &gt; Flowchart mode or View &gt; Sequence mode, and only when the flow has no errors.</small></td><td data-label="Admin UI"><strong>Power Automate for desktop (maker)</strong><br>Console › New flow › Create a flow › Flowchart mode (Preview) <a href="https://learn.microsoft.com/power-automate/desktop-flows/flowchart-flow-designer" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment switch that allows or blocks flowchart mode</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026). The Windows registry settings on the governance page do not name flowchart mode.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only controls Microsoft documents for this feature sit in the designer and are chosen by the maker: the mode option in the **Create a flow** dialog and the **View** menu. They decide how a flow is displayed, not who may use the feature.

At the time of writing (November 2026), the Learn page on governance in Power Automate for desktop lists registry settings for sign-in, updates, proxy, logging and copilot capabilities, and none names flowchart mode. The Windows registry settings that page documents are an existing way to restrict Power Automate for desktop as a whole; they do not govern flowchart mode specifically.

## Open questions

- Will Microsoft add an admin or registry setting to turn flowchart mode off for makers? Watch the Learn page on governance in Power Automate for desktop and Message center.
- Does flowchart mode need any licence beyond what Power Automate for desktop already needs, and will any price or meter be published? Watch the licensing FAQ and the roadmap item.
- The roadmap shows In development with a November CY2026 target while Learn documents a preview. Which release will make flowchart mode generally available, and will the default mode change?
- Is flowchart mode available in GCC, GCC High and DoD at the same time as Worldwide, given Learn's note about gradual regional rollout?

<!-- rationale
risk: Low. Flowchart mode is a different view of the same desktop flow: Microsoft's page says both modes represent the same flow, and sequence mode is the default.
cost: Low. The only cost the sources show is admin and maker time; the flowchart mode page names no licence or meter, and no separate price for it is yet published.
impact: Low. Makers who build desktop flows in Power Automate for desktop notice it, and only if they pick it; run-time users and admins see no change described.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: final paragraph / behaviour: The governance page lists Windows registry settings for Copilot capabilities. | Found: To prevent your users from using any copilot capability contact Microsoft Customer Support to disable all copilot functionality in your tenant. | Fix: Remove 'and copilot capabilities' from the list of registry-controlled areas. Replace that sentence with: 'At the time of writing (November 2026), the Learn page on governance in Power Automate for desktop lists registry settings for sign-in, updates, proxy and logging, and none names flowchart mode.' The cited governance page documents Copilot controls through tenant settings or Microsoft Customer Support, not registry entries. | Source: https://learn.microsoft.com/power-automate/desktop-flows/governance
-->
