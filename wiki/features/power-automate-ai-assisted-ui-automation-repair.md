---
title: "Power Automate: AI-assisted UI automation repair in the desktop flow designer"
slug: "power-automate-ai-assisted-ui-automation-repair"
roadmapId: 577869
topic: "power-platform"
products: ["Power Automate","Microsoft Copilot (Microsoft 365)"]
summary: "A debug run in Power Automate for desktop validates each UI selector and proposes a replacement when one fails, after the maker captures the element."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "July CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Preview: Learn states it is available for organization premium accounts at no extra cost, and usage might be subject to service limits or changes. Licensing at general availability is not yet published."
audiences: ["power-platform-admin","maker","service-owner"]
tags: ["power-automate","desktop-flows","ui-automation","selectors","copilot-in-power-automate","debugging"]
sources:
  - title: "Microsoft 365 Roadmap item 577869"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577869"
    kind: "roadmap"
  - title: "AI-assisted UI automation repair (preview)"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/ai-assisted-ui-automation-repair"
    kind: "learn"
  - title: "Repair flow automation errors (preview)"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/repair-at-runtime"
    kind: "learn"
  - title: "Get started with Copilot in Power Automate for desktop"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/copilot-in-power-automate-for-desktop"
    kind: "learn"
  - title: "Tenant settings"
    url: "https://learn.microsoft.com/power-platform/admin/tenant-settings"
    kind: "learn"
  - title: "Track, manage, and scale Copilot adoption in the Power Platform"
    url: "https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub#settings"
    kind: "learn"
  - title: "Copilot in Power Automate"
    url: "https://learn.microsoft.com/power-automate/copilot-overview#enable-or-disable-copilot-in-power-automate"
    kind: "learn"
  - title: "Governance in Power Automate for desktop"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/governance#prevent-users-from-sending-copilot-related-feedback"
    kind: "learn"
  - title: "Copilot in Power Automate for an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/ai-assisted-ui-automation-repair#how-to-turn-on-and-use-the-feature"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Copilot in Power Automate for an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Automate > Copilot in Power Automate > On"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/ai-assisted-ui-automation-repair#how-to-turn-on-and-use-the-feature"
    api: null
  - governs: "Switch specific to AI-assisted repair in the designer debug run"
    scope: "environment"
    ui: null
    api: null
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-17"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577869 with Learn guidance on the preview."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Correction: licensing now reflects the preview's documented no-extra-cost availability; default state set to unknown; feedback tenant setting added; unsupported claims about hierarchy data, session identity and portal-only control removed."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 51 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: saved-selector wording narrowed to what Learn states, pilot and review guidance reworded, and the feedback control row removed from the table (its prose is kept)."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: Why it matters and the risk rationale now cite the Copilot in Power Automate overview for the initial state, and the Desktop flow repair at runtime row is removed from the controls table."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 53 statements confirmed"
version: 5
verification:
  status: "verified"
  date: "2026-11-17"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 53
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "51416a32b9051eabeb127b2f2aee8aa6"
---

## What's changing

Microsoft is adding an agentic debug run to the Power Automate flow designer. The maker chooses **Run with AI-assisted UI Automation Repair**, and a repair interface opens while the flow runs. It validates each selector that the flow uses to locate a UI element.

When a selector does not work, the interface asks the maker to capture the intended element for reference. It then proposes a new selector. Learn describes a step in which the maker reviews, edits and tests the proposal, and can then accept it, recapture the element or skip it.

The roadmap lists a preview from July CY2026 and general availability in March CY2027, for Worldwide (Standard Multi-Tenant) on the web. Learn documents the preview and says it needs Power Automate for desktop version 2.70 or later.

## Why it matters

Broken selectors are a common cause of failed UI automation after an application or web page changes. A guided repair loop at design time can reduce the support effort for maintaining desktop flows.

For service owners the question is data handling and consistency: the feature analyses the failing selector and a newly captured selector, so confirm the data-handling implications before allowing sensitive captures. Selector changes are permanently saved when the maker saves the flow. The repair article does not specify the initial state of its required setting; the broader Copilot in Power Automate overview says Copilot is on by default, but describes tenant-level rather than environment-level controls.

## Risk assessment

**Data exposure**
- UI element details from the target application are used to propose selectors. Confirm which applications and screens makers may capture.

**Security & identity**
- Runs only through the desktop flow designer during debugging. No new identity or permission model is described.

**Autonomy & actions**
- The maker must capture the element and accept the proposal. Skipping with no error handling stops the debug run.

**Change & support**
- Accepted selectors alter flow behaviour. Review changes through your normal solution and ALM process.

## Cost and licensing

Learn states that AI-assisted UI automation repair in Power Automate for desktop is currently available for organization premium accounts at no extra cost, and that usage might be subject to service limits or changes. It lists enabling Copilot in Power Automate in the Power Platform admin center as a prerequisite. Pricing for general availability is not yet published; watch for changes to Copilot Credits or licence requirements.

## Scope

Makers building UI and browser automation in Power Automate for desktop, version 2.70 or later. Learn states the preview is currently available for organization premium accounts. Roadmap cloud: Worldwide (Standard Multi-Tenant) only. Platform: web. Learn notes that Copilot in Power Automate for desktop has had regional and account-type limits in earlier preview features, so check current availability.

## Governance guidance

### Before rollout
- Decide whether makers may use AI-assisted repair, and record the decision.
- Check the Copilot in Power Automate setting for each environment.
- Identify desktop flows that touch sensitive applications.

### At rollout
- Pilot use with a small group of makers; the documented Copilot setting is environment-scoped, not a documented maker-group switch.
- Brief makers to review every proposed selector before accepting it.

### After rollout
- Review saved selector changes before wider use.
- Collect maker feedback on repair accuracy before wider use.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Copilot in Power Automate for an environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Automate › Copilot in Power Automate › On <a href="https://learn.microsoft.com/power-automate/desktop-flows/ai-assisted-ui-automation-repair#how-to-turn-on-and-use-the-feature" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch specific to AI-assisted repair in the designer debug run</strong><br><small>Environment</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The repair article documents the admin-center path for the Copilot in Power Automate setting; an API equivalent for this setting is not yet documented. AI-assisted repair requires this shared setting, so assess the effect on other Power Automate Copilot capabilities before changing it. Microsoft's desktop governance page directs administrators who want to prevent users from using any Copilot capability to contact Microsoft Support.

The pages disagree on scope. The [Copilot hub](https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub#settings) page says settings can be configured at the environment level, with most also configurable through environment groups, while the [Copilot in Power Automate overview](https://learn.microsoft.com/power-automate/copilot-overview#enable-or-disable-copilot-in-power-automate) says disabling Copilot is done at tenant level and environment-level support isn't available. Confirm which applies to your tenant.

Runtime repair has its own flag and a separate [self-healing](https://learn.microsoft.com/power-automate/desktop-flows/self-healing#how-to-turn-on-the-feature) setting. In regions without local GPU capacity, Copilot depends on the cross-geo data movement toggle described in the [Copilot overview](https://learn.microsoft.com/power-automate/copilot-overview#enable-or-disable-copilot-in-power-automate).

For Copilot feedback, the desktop Copilot page names a "Copilot feedback" tenant setting, while the governance page names disableSurveyFeedback. Microsoft does not state that they are the same setting, so confirm before relying on either.

## Open questions

- Will general availability need a separate licence or consume Copilot Credits?
- Which regions and languages will be supported at general availability?
- Is a dedicated admin control planned beyond the Copilot in Power Automate setting?

<!-- rationale
risk: Low. The repair runs in the maker's design session, needs a person to capture and accept each selector, and needs the shared Copilot in Power Automate setting; the repair article does not specify its initial state.
cost: Low. The preview is documented as available for organization premium accounts at no extra cost, so the known cost is maker time. Pricing for general availability is not yet published.
impact: Low. It affects makers who build UI and browser automation in desktop flows, not end users or flow consumers.
-->
