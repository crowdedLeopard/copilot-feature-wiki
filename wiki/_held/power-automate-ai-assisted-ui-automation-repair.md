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
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Learn lists the Copilot in Power Automate admin setting as the prerequisite."
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
  - title: "Copilot in Power Automate for an environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/ai-assisted-ui-automation-repair#how-to-turn-on-and-use-the-feature"
    kind: "learn"
  - title: "Desktop flow repair at runtime (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features#desktop-flow-repair-at-runtime-configuration-preview"
    kind: "learn"
  - title: "Copilot feedback from Power Automate for desktop (API)"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/governance#prevent-users-from-sending-copilot-related-feedback"
    kind: "learn"
videos: []
related: ["power-platform-maker-guidelines-copilot-studio","managed-environments"]
controls:
  - governs: "Copilot in Power Automate for an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Automate > Copilot in Power Automate > On"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/ai-assisted-ui-automation-repair#how-to-turn-on-and-use-the-feature"
    api: null
  - governs: "Desktop flow repair at runtime"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Desktop flow repair at runtime configuration"
      docs: "https://learn.microsoft.com/power-platform/admin/settings-features#desktop-flow-repair-at-runtime-configuration-preview"
    api: null
    note: "Preview. Governs the earlier Repair with Copilot capability."
  - governs: "Copilot feedback from Power Automate for desktop"
    scope: "tenant"
    ui: null
    api:
      kind: "other"
      call: "disableSurveyFeedback governance setting for Power Automate for desktop"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/governance#prevent-users-from-sending-copilot-related-feedback"
  - governs: "Switch specific to AI-assisted repair in the designer debug run"
    scope: "environment"
    ui: null
    api: null
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577869 with Learn guidance on the preview."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 37
  unconfirmed: 5
  contradicted: 2
  attempts: 1
---

## What's changing

Microsoft is adding an agentic debug run to the Power Automate flow designer. The maker chooses **Run with AI-assisted UI Automation Repair**, and a repair interface opens while the flow runs. It validates each selector that the flow uses to locate a UI element.

When a selector does not work, the interface asks the maker to capture the intended element for reference. It then proposes a new selector. Learn describes a step in which the maker reviews, edits and tests the proposal, and can then accept it, recapture the element or skip it.

The roadmap lists a preview from July CY2026 and general availability in March CY2027, for Worldwide (Standard Multi-Tenant) on the web. Learn documents the preview and says it needs Power Automate for desktop version 2.70 or later.

## Why it matters

Broken selectors are a common cause of failed UI automation after an application or web page changes. A guided repair loop at design time can reduce the support effort for maintaining desktop flows.

For service owners the question is data handling and consistency: element hierarchy information is sent to an AI service, and repaired selectors change the behaviour of production flows once saved.

## Risk assessment

**Data exposure**
- UI element details from the target application are used to propose selectors. Confirm which applications and screens makers may capture.

**Security & identity**
- Runs under the maker's own session. No new identity or permission model is described.

**Autonomy & actions**
- The maker must capture the element and accept the proposal. Skipping with no error handling stops the debug run.

**Change & support**
- Accepted selectors alter flow behaviour. Review changes through your normal solution and ALM process.

## Cost and licensing

No separate licence or meter is published. Learn lists enabling Copilot in Power Automate in the Power Platform admin center as the prerequisite. Pricing for general availability is not yet published; watch for changes to Copilot Credits or licence requirements.

## Scope

Makers building UI and browser automation in Power Automate for desktop, version 2.70 or later. Roadmap cloud: Worldwide (Standard Multi-Tenant) only. Platform: web. Learn notes that Copilot in Power Automate for desktop has had regional and account-type limits in earlier preview features, so check current availability.

## Governance guidance

### Before rollout
- [ ] Decide whether makers may use AI-assisted repair, and record the decision.
- [ ] Check the Copilot in Power Automate setting for each environment.
- [ ] Identify desktop flows that touch sensitive applications.

### At rollout
- [ ] Enable the setting for a pilot group of makers first.
- [ ] Brief makers to review every proposed selector before accepting it.

### After rollout
- [ ] Review saved selector changes in solution history.
- [ ] Collect maker feedback on repair accuracy before wider use.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Copilot in Power Automate for an environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Automate › Copilot in Power Automate › On <a href="https://learn.microsoft.com/power-automate/desktop-flows/ai-assisted-ui-automation-repair#how-to-turn-on-and-use-the-feature" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Desktop flow repair at runtime</strong><br><small>Environment</small><br><small class="controls__note">Preview. Governs the earlier Repair with Copilot capability.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Desktop flow repair at runtime configuration <a href="https://learn.microsoft.com/power-platform/admin/settings-features#desktop-flow-repair-at-runtime-configuration-preview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Copilot feedback from Power Automate for desktop</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>API</strong><br><code>disableSurveyFeedback governance setting for Power Automate for desktop</code> <a href="https://learn.microsoft.com/power-automate/desktop-flows/governance#prevent-users-from-sending-copilot-related-feedback" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch specific to AI-assisted repair in the designer debug run</strong><br><small>Environment</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Copilot setting is per environment and portal-only; turning it off removes every Copilot feature in Power Automate for that environment, not just repair. Runtime repair has its own flag and a separate [self-healing](https://learn.microsoft.com/power-automate/desktop-flows/self-healing#how-to-turn-on-the-feature) setting. In regions without local GPU capacity, Copilot depends on the cross-geo data movement toggle described in the [Copilot overview](https://learn.microsoft.com/power-automate/copilot-overview#enable-or-disable-copilot-in-power-automate).

## Open questions

- Will general availability need a separate licence or consume Copilot Credits?
- Which regions and languages will be supported at general availability?
- Is a dedicated admin control planned beyond the Copilot in Power Automate setting?

<!-- rationale
risk: Low. The repair runs in the maker's design session, needs a person to capture and accept each selector, and is governed by the existing Copilot in Power Automate setting.
cost: Low. No separate licence is published; the cost is maker time and the Copilot in Power Automate setting. Pricing is not yet published for general availability.
impact: Low. It affects makers who build UI and browser automation in desktop flows, not end users or flow consumers.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, major] Why it matters / behaviour: This designer repair feature sends element hierarchy information to an AI service. | Found: Searched: "AI-assisted UI automation repair" "hierarchy"; "AI-assisted UI automation repair" "data" "sent". Read feature article and FAQ for Repair with Copilot at runtime; only the separate runtime feature explicitly describes sending the hierarchy tree. | Fix: Replace the hierarchy-transfer assertion with 'The feature analyzes the failing selector and a newly captured selector; confirm the data-handling implications before allowing sensitive captures.' The designer feature article does not specify hierarchy transfer.
- [unsupported, major] Risk assessment: Security & identity / behaviour: The repair runs under the maker's own session. | Found: Searched: "AI-assisted UI automation repair" "session"; "Power Automate" "debugging" "current user" session. Read feature article and search excerpts for Debug a desktop flow and flow designer; none explicitly states the execution-session identity. | Fix: Replace 'Runs under the maker's own session' with the documented statement 'Runs only through the desktop flow designer during debugging.' Do not assert an execution identity without a stating source.
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing; rationale: cost; Scope / licensing: The licensing model is unknown and licensing has not yet been published. | Found: AI-assisted UI automation repair in Power Automate for desktop is currently available for organization premium accounts at no extra cost. Usage might be subject to service limits or changes. | Fix: Set licensing.model to 'included' for the documented preview and name 'organization premium accounts' in the notes. State that the preview is available at no extra cost, subject to service limits or changes; add that account requirement to Scope and the cost rationale. Keep GA licensing explicitly unresolved. | Source: https://learn.microsoft.com/power-automate/desktop-flows/ai-assisted-ui-automation-repair
- [supported, minor] controls[2].api; Governance controls table / command: The disableSurveyFeedback tenant setting governs Copilot feedback from Power Automate for desktop. | Found: As a Power Platform admin you can prevent users from sending feedback to Microsoft by disabling the disableSurveyFeedback tenant setting. | Fix: Retain the documented setting name: the deterministic missing-name lead is not confirmed. Add a note that https://learn.microsoft.com/power-platform/admin/list-tenantsettings describes disableSurveyFeedback as controlling NPS survey prompts, while newer desktop Copilot guidance points to the Copilot feedback tenant setting; do not imply these descriptions are identical. | Source: https://learn.microsoft.com/power-automate/desktop-flows/governance#prevent-users-from-sending-copilot-related-feedback
- [contradicted, blocker] controls[2].ui; Governance controls table / absence: No admin UI is documented for controlling Copilot feedback from Power Automate for desktop. | Found: As a Power Platform admin, you can prevent users from sending Copilot feedback to Microsoft by using the "Copilot feedback" tenant setting. | Fix: Replace the blanket undocumented-UI claim with the documented Copilot feedback tenant-setting reference. Cite this desktop Copilot page and https://learn.microsoft.com/power-platform/admin/tenant-settings for Manage > Tenant settings. Explicitly flag the naming/applicability discrepancy: the current tenant index labels Basic Copilot Feedback as Power Apps, so do not invent an exact final label or equate it silently with disableSurveyFeedback. | Source: https://learn.microsoft.com/power-automate/desktop-flows/copilot-in-power-automate-for-desktop#use-copilot-to-summarize-actions-and-subflows
- [supported, minor] controls[0].scope; Governance controls following paragraph; Governance guidance / applicability: Copilot hub settings can be configured at environment scope. | Found: You can configure settings at the environment level, with most settings also configurable through environment groups and rules. | Fix: Cite the Copilot hub guidance for environment scoping and its environment/group selection step. Also report the disagreement with https://learn.microsoft.com/power-automate/copilot-overview#enable-or-disable-copilot-in-power-automate, which says disabling is tenant-level and environment support is unavailable; do not present the documents as consistent. | Source: https://learn.microsoft.com/power-platform/admin/copilot/copilot-hub#settings
- [unsupported, blocker] Governance controls following paragraph / applicability: The Copilot setting is portal-only. | Found: Searched: "Copilot in Power Automate" environment turn off PowerShell API settings. Read feature prerequisites, Copilot overview, Copilot hub and tenant-settings reference; no text establishes that this setting can only be controlled through the portal. | Fix: Replace 'portal-only' with 'The repair article documents the admin-center path; an API equivalent for this setting is not yet documented.' Absence of a published API is not proof that no other configuration mechanism exists.
- [unsupported, blocker] Governance controls following paragraph / applicability: Turning off the environment Copilot setting removes every Copilot feature in Power Automate for that environment. | Found: Searched: "Copilot in Power Automate" "environment" "setting" "off". Read repair prerequisites, Copilot hub, Copilot overview and desktop governance; none states this environment switch disables every Power Automate Copilot capability. | Fix: Replace the universal assertion with 'AI-assisted repair requires the shared Copilot in Power Automate setting. Assess effects on other capabilities before changing it.' Desktop governance instead directs admins to Microsoft Support to disable all Copilot functionality tenant-wide.
- [unsupported, blocker] front matter: defaultState; rationale: risk / default: The feature's arrival state is admin-opt-in, so nothing happens until an administrator opts in. | Found: Searched: "Copilot in Power Automate" environment turn off PowerShell API settings; "AI-assisted UI automation repair" admin disable setting data hierarchy session licensing. Read feature prerequisites and Copilot overview; neither establishes a feature-specific admin-opt-in arrival state. | Fix: Set defaultState to 'unknown' and state that Microsoft documents the required Copilot setting but not its initial state for this feature. Remove the assumption that a fresh administrator opt-in is always necessary; distinguish the maker's explicit debug-run choice from the shared setting's default.
-->
