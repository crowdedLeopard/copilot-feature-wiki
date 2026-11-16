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
  - title: "Desktop flow repair at runtime (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features#desktop-flow-repair-at-runtime-configuration-preview"
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
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Tenant settings"
      docs: "https://learn.microsoft.com/power-platform/admin/tenant-settings"
    api:
      kind: "other"
      call: "disableSurveyFeedback governance setting for Power Automate for desktop"
      docs: "https://learn.microsoft.com/power-automate/desktop-flows/governance#prevent-users-from-sending-copilot-related-feedback"
    note: "The desktop Copilot page names a \"Copilot feedback\" tenant setting; the tenant settings page lists Additional Copilot feedback for Copilot in Power Apps. Confirm which applies to desktop flows."
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
  - date: "2026-11-16"
    note: "Correction: licensing now reflects the preview's documented no-extra-cost availability; default state set to unknown; feedback tenant setting added; unsupported claims about hierarchy data, session identity and portal-only control removed."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 51 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 47
  unconfirmed: 2
  contradicted: 2
  attempts: 2
  hash: "a79907803e146abf4dbb8bc2e20d1cde"
---

## What's changing

Microsoft is adding an agentic debug run to the Power Automate flow designer. The maker chooses **Run with AI-assisted UI Automation Repair**, and a repair interface opens while the flow runs. It validates each selector that the flow uses to locate a UI element.

When a selector does not work, the interface asks the maker to capture the intended element for reference. It then proposes a new selector. Learn describes a step in which the maker reviews, edits and tests the proposal, and can then accept it, recapture the element or skip it.

The roadmap lists a preview from July CY2026 and general availability in March CY2027, for Worldwide (Standard Multi-Tenant) on the web. Learn documents the preview and says it needs Power Automate for desktop version 2.70 or later.

## Why it matters

Broken selectors are a common cause of failed UI automation after an application or web page changes. A guided repair loop at design time can reduce the support effort for maintaining desktop flows.

For service owners the question is data handling and consistency: the feature analyses the failing selector and a newly captured selector, so confirm the data-handling implications before allowing sensitive captures. Repaired selectors change the behaviour of production flows once saved. Microsoft has not stated what happens on arrival for the shared Copilot in Power Automate setting that the feature requires.

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
- Enable the setting for a pilot group of makers first.
- Brief makers to review every proposed selector before accepting it.

### After rollout
- Review saved selector changes in solution history.
- Collect maker feedback on repair accuracy before wider use.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Copilot in Power Automate for an environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Automate › Copilot in Power Automate › On <a href="https://learn.microsoft.com/power-automate/desktop-flows/ai-assisted-ui-automation-repair#how-to-turn-on-and-use-the-feature" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Desktop flow repair at runtime</strong><br><small>Environment</small><br><small class="controls__note">Preview. Governs the earlier Repair with Copilot capability.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Desktop flow repair at runtime configuration <a href="https://learn.microsoft.com/power-platform/admin/settings-features#desktop-flow-repair-at-runtime-configuration-preview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Copilot feedback from Power Automate for desktop</strong><br><small>Tenant</small><br><small class="controls__note">The desktop Copilot page names a &quot;Copilot feedback&quot; tenant setting; the tenant settings page lists Additional Copilot feedback for Copilot in Power Apps. Confirm which applies to desktop flows.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Tenant settings <a href="https://learn.microsoft.com/power-platform/admin/tenant-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>disableSurveyFeedback governance setting for Power Automate for desktop</code> <a href="https://learn.microsoft.com/power-automate/desktop-flows/governance#prevent-users-from-sending-copilot-related-feedback" rel="noopener" class="controls__docs">Learn</a></td></tr>
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
risk: Low. The repair runs in the maker's design session, needs a person to capture and accept each selector, and needs the shared Copilot in Power Automate setting; Microsoft documents no initial state for it.
cost: Low. The preview is documented as available for organization premium accounts at no extra cost, so the known cost is maker time. Pricing for general availability is not yet published.
impact: Low. It affects makers who build UI and browser automation in desktop flows, not end users or flow consumers.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters / behaviour: Repaired selectors change production-flow behavior once saved. | Found: Save draft: Save your latest changes without releasing them as the official version. ... Publish: Set a version as official so it runs from the console or cloud. | Fix: Replace 'Repaired selectors change the behaviour of production flows once saved.' with 'Selector changes are permanently saved when the maker saves the flow.' The repair article supports persistence, not the claim that saving alone updates production execution in environments with version control. | Source: https://learn.microsoft.com/power-automate/desktop-flows/version-control
- [unsupported, blocker] controls[2].api; Governance controls table / command: The API column supplies 'disableSurveyFeedback governance setting for Power Automate for desktop' as the automation call. | Found: Searched: "disableSurveyFeedback" "Set-TenantSettings". Opened desktop governance, Set-TenantSettings and List tenant settings. disableSurveyFeedback exists, contrary to the pre-check lead, but this phrase specifies no executable operation, parameters or value. | Fix: Remove the feedback control row from the controls array and rendered table, retaining the existing prose about the documented disableSurveyFeedback tenant setting. The supplied phrase is not a call under the schema's runnable-call requirement; do not replace it with a claim that no automation exists, since governance links to Set-TenantSettings.
- [unsupported, blocker] Governance guidance: At rollout / applicability: The shared Copilot setting can be enabled specifically for a pilot group of makers. | Found: Searched: "Copilot in Power Automate" setting specific users security group. Opened the repair article and Copilot hub. Configuration is described for environments or environment groups, not a maker-group audience for this setting. | Fix: Replace 'Enable the setting for a pilot group of makers first.' with 'Pilot use with a small group of makers; the documented Copilot setting is environment-scoped, not a documented maker-group switch.'
- [contradicted, blocker] Governance guidance: After rollout / admin-path: Saved selector changes can be reviewed in solution history. | Found: An operation can be a solution import, export, or uninstall. The solution history displays information such as solution version, solution publisher, type of operation, operation start and end time, and operation status. | Fix: Replace 'Review saved selector changes in solution history.' with 'Review saved selector changes before wider use.' Solution history records solution operations; it is not the desktop-flow version comparison surface. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/solution-history
-->
