---
title: "Microsoft Edge: simplified energy saver with new defaults and one mode"
slug: "microsoft-edge-simplified-energy-saver"
roadmapId: 573291
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Microsoft plans to simplify Edge energy saver to two triggers, low battery or unplugged, default low battery, and to manage it with BatterySaverModeAvailability. Admins using EfficiencyMode should plan to review their settings."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item and the EfficiencyMode and EfficiencyModeEnabled policy pages name no licence or charge for energy saver."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["microsoft-edge","performance","policy","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Edge: Simplified Energy Saver"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573291"
    kind: "roadmap"
  - title: "EfficiencyMode"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymode"
    kind: "learn"
  - title: "EfficiencyModeEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymodeenabled"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Policy Microsoft says Edge will support and recommend for energy saver (BatterySaverModeAvailability)"
    scope: "other"
    ui: null
    api: null
    note: "Named in the roadmap item. No Microsoft Learn policy page found at the time of writing (November 2026)."
  - governs: "When energy saver becomes active today (EfficiencyMode policy)"
    scope: "other"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Performance > Configure when energy saver (previously named efficiency mode) should become active"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymode"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value EfficiencyMode (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymode"
    note: "Existing policy for today's energy saver, not confirmed to govern the simplified feature. Has no effect if EfficiencyModeEnabled is disabled."
  - governs: "Whether energy saver is available at all today (EfficiencyModeEnabled policy)"
    scope: "other"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Performance > Efficiency mode enabled"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymodeenabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value EfficiencyModeEnabled (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymodeenabled"
    note: "Existing policy for today's energy saver, not confirmed to govern the simplified feature. Disabling it means efficiency mode is never active."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-19T21:32:07"
changes:
  - date: "2026-11-20"
    note: "First briefing for the roadmap item: planned simplified energy saver, with today's EfficiencyMode and EfficiencyModeEnabled policies as the documented controls."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 53 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: EfficiencyMode value availability by Edge version, the platform version sentence in Scope, whether existing policies govern the simplified feature, and the risk rationale wording."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 56 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 54 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 54
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "77cb27a0b02890c044da12af96ebd309"
---

## What's changing

Microsoft plans to simplify energy saver in Microsoft Edge (formerly efficiency mode). According to the roadmap item, energy saver will be enabled under two conditions only: on low battery or when the device is unplugged. The default will be energy saver enabled on low battery, and energy saver will have one mode.

The roadmap item also describes how existing choices carry over: users set to Balanced savings are mapped to energy saver enabled on low battery, and users set to Maximum savings are mapped to energy saver enabled when unplugged. Edge will support and recommend the BatterySaverModeAvailability policy for managing the feature.

Microsoft Learn does not yet describe the simplified feature or the BatterySaverModeAvailability policy, so the behaviour above is the roadmap's description. What Learn documents today is the existing `EfficiencyMode` policy, which sets energy saver to 'BalancedSavings' by default. The EfficiencyMode reference lists BalancedSavings and MaximumSavings for Edge 106 or later; its other four values are listed only for Edge 96-109 on Windows and macOS.

The roadmap item lists the status as In development, with a target of March CY2027 and General Availability as the release phase. These are Microsoft's targets, not commitments.

## Why it matters

Energy saver is on by default for devices with a battery today, so a changed default and changed policy options reach most laptop users in a tenant without any action by them. The EfficiencyMode page documents the current default as 'BalancedSavings'; the roadmap states the new default will be energy saver enabled on low battery.

If you manage energy saver through the `EfficiencyMode` policy, expect Microsoft to steer you to BatterySaverModeAvailability. Microsoft Learn has no page for that policy at the time of writing (November 2026), so plan to review your configuration once the policy is documented and before the March CY2027 target.

## Risk assessment

**Data exposure**

- No change: the roadmap description concerns when Edge saves battery and mentions no new data access.

**Security & identity**

- No change: the roadmap description mentions no identity, sign-in or permission change.

**Autonomy & actions**

- Energy saver acts on the browser on its own when its trigger is met. Under the planned default it would act on low battery; the roadmap does not describe what steps energy saver takes in the single mode.

**Change & support**

- Users who chose Balanced savings or Maximum savings are remapped by the roadmap's rules, so their experience can differ from what they selected. Expect help desk questions about changed battery behaviour in Edge, and tell users where the setting is: edge://settings/system, as the EfficiencyModeEnabled page gives it.
- Policies already deployed for `EfficiencyMode` may not carry over unchanged. Microsoft has published no mapping from its existing deployed values to the new options, so test before assuming a deployed value keeps its effect.

## Cost and licensing

No licence, meter or charge is stated for energy saver on the roadmap item. The EfficiencyMode and EfficiencyModeEnabled policy pages list no licence requirement either. A licence for the simplified feature is not yet published.

The cost the sources show is indirect: admin time to review existing energy saver policy settings and to brief users on the changed default.

## Scope

The roadmap item lists Microsoft Edge, the Worldwide (Standard Multi-Tenant) cloud, the Web platform and General Availability as the release phase. Status is In development with a target of March CY2027.

EfficiencyMode lists Windows and macOS support from Edge 96; EfficiencyModeEnabled lists support from Edge 106. Both mark Android and iOS as not supported. Whether the simplified feature has the same platform coverage is not stated by the roadmap item.

Today, on devices with no battery, energy saver is disabled by default and does not become active, according to the EfficiencyMode page. How the new default treats devices without a battery is not described on the roadmap item.

## Governance guidance

### Before rollout

- Inventory where `EfficiencyMode` and `EfficiencyModeEnabled` are set in Group Policy or the registry, and record the values in use.
- Identify users on devices with batteries who rely on a current energy saver choice such as Balanced savings or Maximum savings, since the roadmap says these are remapped.
- Watch the Edge policy reference and Message center for a BatterySaverModeAvailability policy page before the March CY2027 target.

### At rollout

- Test the new default and the remapped options on a pilot group of laptops before the change reaches all devices.
- Tell users that energy saver may start on low battery by default, and where to see the setting in edge://settings/system.

### After rollout

- Compare the effective energy saver setting on pilot and production devices with what you intended, and adjust policy values once the new policy is documented.
- Retire or replace `EfficiencyMode` settings that the new policy supersedes, if Microsoft documents that they are superseded.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Policy Microsoft says Edge will support and recommend for energy saver (BatterySaverModeAvailability)</strong><br><small class="controls__note">Named in the roadmap item. No Microsoft Learn policy page found at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>When energy saver becomes active today (EfficiencyMode policy)</strong><br><small class="controls__note">Existing policy for today's energy saver, not confirmed to govern the simplified feature. Has no effect if EfficiencyModeEnabled is disabled.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Performance › Configure when energy saver (previously named efficiency mode) should become active <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymode" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value EfficiencyMode (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymode" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether energy saver is available at all today (EfficiencyModeEnabled policy)</strong><br><small class="controls__note">Existing policy for today's energy saver, not confirmed to govern the simplified feature. Disabling it means efficiency mode is never active.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Performance › Efficiency mode enabled <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymodeenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value EfficiencyModeEnabled (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymodeenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

BatterySaverModeAvailability is the policy the roadmap says Edge will recommend, but it has no Learn page at the time of writing, so its path and call are not yet documented. The two existing policies document controls for today's energy saver; Microsoft has not yet documented whether they will govern the simplified feature.

The EfficiencyMode page states that it has no effect if EfficiencyModeEnabled is disabled. Both pages say the policy can be set as mandatory or recommended in Group Policy; recommended values let users override. Microsoft has not said how these policies relate to BatterySaverModeAvailability.

## Open questions

- What are the exact options and registry or Group Policy names of the BatterySaverModeAvailability policy, and when will Learn document it?
- Will existing `EfficiencyMode` and `EfficiencyModeEnabled` settings keep working, be mapped to the new policy, or be ignored?
- What does the single energy saver mode do differently from today's Balanced savings and Maximum savings steps?
- Will the new default apply to devices without a battery, and to macOS as well as Windows?
- Is any licence required for the simplified energy saver? Watch the roadmap item and the Edge policy reference.

<!-- rationale
risk: Low. The change alters when Edge saves battery on laptops and has no new data access described in the roadmap; the exposure is a changed default and changed policy options, not data or identity.
cost: Low. The only cost the sources show is admin time to review existing energy saver policies; the roadmap item names no licence or meter, and no licence is yet published for it.
impact: High. The roadmap item changes the default, so users with battery devices who never touched the setting get different energy saver behaviour, and users on Balanced or Maximum savings are remapped.
-->
