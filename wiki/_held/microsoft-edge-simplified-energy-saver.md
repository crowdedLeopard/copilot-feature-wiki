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
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 48
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "9cff16bb8e3dc23f772f23372a9ab790"
---

## What's changing

Microsoft plans to simplify energy saver in Microsoft Edge (formerly efficiency mode). According to the roadmap item, energy saver will be enabled under two conditions only: on low battery or when the device is unplugged. The default will be energy saver enabled on low battery, and energy saver will have one mode.

The roadmap item also describes how existing choices carry over: users set to Balanced savings are mapped to energy saver enabled on low battery, and users set to Maximum savings are mapped to energy saver enabled when unplugged. Edge will support and recommend the BatterySaverModeAvailability policy for managing the feature.

Microsoft Learn does not yet describe the simplified feature or the BatterySaverModeAvailability policy, so the behaviour above is the roadmap's description. What Learn documents today is the existing `EfficiencyMode` policy, which sets energy saver to 'BalancedSavings' by default and offers six values from AlwaysActive to MaximumSavings.

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
- Policies already deployed for `EfficiencyMode` may not carry over unchanged. Microsoft has published no mapping from its current values (such as ActiveWhenUnpluggedBatteryLow) to the new options, so test before assuming a deployed value keeps its effect.

## Cost and licensing

No licence, meter or charge is stated for energy saver on the roadmap item. The EfficiencyMode and EfficiencyModeEnabled policy pages list no licence requirement either. A licence for the simplified feature is not yet published.

The cost the sources show is indirect: admin time to review existing energy saver policy settings and to brief users on the changed default.

## Scope

The roadmap item lists Microsoft Edge, the Worldwide (Standard Multi-Tenant) cloud, the Web platform and General Availability as the release phase. Status is In development with a target of March CY2027.

The current policy pages list energy saver policies for Windows (version 96 or later) and macOS (version 96 or later) and mark Android and iOS as not supported. Whether the simplified feature has the same platform coverage is not stated by the roadmap item.

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

BatterySaverModeAvailability is the policy the roadmap says Edge will recommend, but it has no Learn page at the time of writing, so its path and call are not yet documented. Until then, the two existing policies are the documented controls and govern today's energy saver, not the simplified one.

The EfficiencyMode page states that it has no effect if EfficiencyModeEnabled is disabled. Both pages say the policy can be set as mandatory or recommended in Group Policy; recommended values let users override. Microsoft has not said how these policies relate to BatterySaverModeAvailability.

## Open questions

- What are the exact options and registry or Group Policy names of the BatterySaverModeAvailability policy, and when will Learn document it?
- Will existing `EfficiencyMode` and `EfficiencyModeEnabled` settings keep working, be mapped to the new policy, or be ignored?
- What does the single energy saver mode do differently from today's Balanced savings and Maximum savings steps?
- Will the new default apply to devices without a battery, and to macOS as well as Windows?
- Is any licence required for the simplified energy saver? Watch the roadmap item and the Edge policy reference.

<!-- rationale
risk: Low. The change alters when Edge saves battery on laptops and touches no organisational data; the exposure is a changed default and changed policy options, not data or identity.
cost: Low. The only cost the sources show is admin time to review existing energy saver policies; the roadmap item names no licence or meter, and no licence is yet published for it.
impact: High. The roadmap item changes the default, so users with battery devices who never touched the setting get different energy saver behaviour, and users on Balanced or Maximum savings are remapped.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing; Risk assessment: Change & support / behaviour: Today's EfficiencyMode policy offers six current values from AlwaysActive to MaximumSavings. | Found: ActiveWhenUnpluggedBatteryLow (3) = Energy saver is active when the device is unplugged and the battery is low - Windows: 96-109 - macOS: 96-109 | Fix: Replace the six-current-values statement with: 'The EfficiencyMode reference lists BalancedSavings and MaximumSavings for Edge 106 or later; its other four values are listed only for Edge 96-109 on Windows and macOS.' Replace 'its current values (such as ActiveWhenUnpluggedBatteryLow)' with 'its existing deployed values'. Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymode. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymode
- [contradicted, blocker] Scope / availability: Both current energy saver policy pages list Windows support from version 96. | Found: Supported versions - Windows: ≥ 106 | Fix: Replace the platform sentence with: 'EfficiencyMode lists Windows and macOS support from Edge 96; EfficiencyModeEnabled lists support from Edge 106. Both mark Android and iOS as not supported.' Sources: https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymode and https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymodeenabled. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymodeenabled
- [contradicted, blocker] Scope / availability: Both current energy saver policy pages list macOS support from version 96. | Found: macOS: ≥ 106 | Fix: Use the corrected Scope sentence: 'EfficiencyMode lists Windows and macOS support from Edge 96; EfficiencyModeEnabled lists support from Edge 106. Both mark Android and iOS as not supported.' Sources: https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymode and https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymodeenabled. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/efficiencymodeenabled
- [unsupported, blocker] Governance controls: first paragraph / applicability: The two existing policies govern today's energy saver, not the simplified one. | Found: Searched: 'BatterySaverModeAvailability Edge simplified energy saver policy registry mapping EfficiencyMode' and 'Microsoft Edge simplified energy saver EfficiencyMode mapping'; read both existing policy pages. No passage says the existing policies cannot govern the simplified feature. | Fix: Replace 'Until then, the two existing policies are the documented controls and govern today's energy saver, not the simplified one.' with 'The two existing policies document controls for today's energy saver; Microsoft has not yet documented whether they will govern the simplified feature.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: risk / behaviour: The change touches no organisational data. | Found: Searched: 'Microsoft Edge simplified energy saver EfficiencyMode mapping' and 'BatterySaverModeAvailability'; read the roadmap and both cited policy pages. The roadmap mentions no new data access, but no source states that the change touches no organisational data. | Fix: Replace 'touches no organisational data' with 'has no new data access described in the roadmap'.
-->
