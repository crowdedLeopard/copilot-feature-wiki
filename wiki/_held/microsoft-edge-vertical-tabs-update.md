---
title: "Microsoft Edge: vertical tabs update"
slug: "microsoft-edge-vertical-tabs-update"
roadmapId: 569217
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge is reimplementing its vertical tabs; the roadmap says no admin action is required and targets December CY2026. The existing VerticalTabsAllowed policy is the documented control over the vertical layout."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item and the Edge pages read for this briefing name no licence or charge for the vertical tabs update."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["microsoft-edge","user-experience","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 569217"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569217"
    kind: "roadmap"
  - title: "VerticalTabsAllowed"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/verticaltabsallowed"
    kind: "learn"
  - title: "Microsoft Edge for Business"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-for-business"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether users can use the vertical tab layout"
    scope: "user"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Configures availability of a vertical layout for tabs on the side of the browser"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/verticaltabsallowed"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value VerticalTabsAllowed (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/verticaltabsallowed"
    note: "Existing policy for the vertical layout. Microsoft Learn does not describe the update, so whether it governs the updated implementation is unconfirmed. Per profile; needs a browser restart."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-12T22:47:48"
changes:
  - date: "2026-11-23"
    note: "First briefing for roadmap item 569217, based on the roadmap description and the VerticalTabsAllowed policy page."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 49 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 48
  unconfirmed: 1
  contradicted: 0
  attempts: 1
  hash: "6b3c40b0b2df5afc74fc5f75a33e2a4c"
---

## What's changing

Microsoft Edge is rebuilding how vertical tabs work. The roadmap item says Edge is updating its vertical tab implementation and architecture, and reimplementing capabilities across the pane, layout, controls, tab behaviour, visual treatments and embedder customisations. It also says no admin action is required.

Vertical tabs already exist as a layout in which tabs sit down the side of the browser instead of along the top. The VerticalTabsAllowed policy page describes it as an alternative layout, and says that if the policy is enabled or not configured the tab layout remains at the top, but a user has the option to turn on vertical tabs on the side. Microsoft Learn does not describe the update itself at the time of writing (November 2026), so what it changes in practice is not documented beyond the roadmap's description.

The roadmap record lists the status as In development, with a target of December CY2026, for Worldwide (Standard Multi-Tenant) and the Web platform, in the General Availability release phase. The date is a target, not a commitment. The roadmap record does not say whether the update is switched on by default, so the default state is not stated.

## Why it matters

This is a rebuild of a user-facing layout, not a new capability, so the change falls mainly on users who already work with vertical tabs and on the help desk that supports them. Because Microsoft has not described what looks or behaves differently, treat it as a change to communicate rather than one to configure.

If nobody acts, Microsoft has not stated what happens on arrival. The roadmap says no admin action is required, and no source says that existing behaviour is removed. Administrators who disable vertical tabs already have a documented policy for it, and should confirm that setting still holds once the update reaches their Edge channel.

## Risk assessment

**Data exposure**
- No change is described: the roadmap item mentions layout, controls and visual treatments and names no new data the feature reads or sends.

**Security & identity**
- No change is described: the roadmap item names no sign-in, permission or identity change. Edge policies that apply to the browser as a whole are unaffected by a layout rebuild unless Microsoft states otherwise.

**Autonomy & actions**
- No change is described: vertical tabs is a layout the user operates, and the roadmap names no autonomous behaviour.

**Change & support**
- The roadmap says embedder customisations are reimplemented. Confirm whether any customisation your organisation relies on in the browser frame is affected, because Microsoft Learn does not describe what changes.
- Users who already use vertical tabs may see differences in the pane, layout, controls and tab behaviour. Prepare help-desk notes once Microsoft publishes what changes.
- The VerticalTabsAllowed policy needs a browser restart to apply, so a change to it is not picked up by running browsers.

## Cost and licensing

Microsoft has not published a licence or charge for the vertical tabs update. The roadmap item names no licence, and the Microsoft Edge for Business page read for this briefing describes the work browser experience without naming a licence for vertical tabs.

The only cost the sources show is indirect: admin time to check policy settings and communicate with users. No meter or spending control is documented for this feature.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), the Web platform and the General Availability release phase for item 569217; it lists no other cloud. The record does not name the Edge versions or release channels that carry the update.

The VerticalTabsAllowed policy page lists support for Windows and macOS from version 88 and states that Android and iOS are not supported. The policy is per profile and does not apply to a profile that is signed in with a Microsoft account. Whether the update follows the same platform support is not stated.

## Governance guidance

### Before rollout
- Inventory whether VerticalTabsAllowed is set in your Group Policy or registry baselines, and record its current value.
- Identify which groups already use vertical tabs, for example through a short user survey, so you know who to warn.
- Draft a short notice for users and the help desk that says the vertical tabs layout is being updated and that Microsoft has not yet detailed what changes.

### At rollout
- Watch the Microsoft 365 roadmap item and Edge release notes for the release that carries the update and for any stated default.
- Test the update on a pilot ring with vertical tabs on, checking the pane, tab controls and any browser customisations your organisation uses.

### After rollout
- Confirm that VerticalTabsAllowed still behaves as set on pilot devices: with the policy disabled, vertical tabs should not be offered to users.
- Collect help-desk tickets that mention tabs and update the notice with what users actually see.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use the vertical tab layout</strong><br><small>User</small><br><small class="controls__note">Existing policy for the vertical layout. Microsoft Learn does not describe the update, so whether it governs the updated implementation is unconfirmed. Per profile; needs a browser restart.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Configures availability of a vertical layout for tabs on the side of the browser <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/verticaltabsallowed" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value VerticalTabsAllowed (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/verticaltabsallowed" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The VerticalTabsAllowed policy page documents a policy that can be set as mandatory but not recommended, is per profile, and needs a browser restart to take effect. Disabling it removes the vertical tab layout as an option for users; enabling it or leaving it unset leaves tabs at the top and lets the user turn vertical tabs on.

This policy is the documented control over the existing vertical layout. Microsoft Learn does not describe the update at the time of writing, so confirm that the policy governs the updated implementation before relying on it.

## Open questions

- What changes for users in the updated vertical tabs, and where will Microsoft document it (Edge release notes, Message center)?
- Is the update on by default for users who have not used vertical tabs, or only for those who already have it turned on?
- Will VerticalTabsAllowed continue to govern the updated implementation, and will any new policy be added?
- Which Edge version and release channel carry the update, and does it reach Windows and macOS only, as the current policy page lists?
- Which embedder customisations does the roadmap mean, and could any enterprise configuration be affected?

<!-- rationale
risk: Low. The roadmap describes a rebuild of an existing browser layout and states that no admin action is required; it describes no new data access, sign-in or autonomous behaviour.
cost: Low. The only cost the sources show is admin and communication time; Microsoft has not published a licence or charge for this update.
impact: Low. The VerticalTabsAllowed policy page describes vertical tabs as an option a user turns on, so users who have turned it on are the likeliest to notice; the roadmap does not say who is affected.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Risk assessment: Security & identity / applicability: Edge policies that apply to the browser as a whole are unaffected by a layout rebuild unless Microsoft states otherwise. | Found: Searched: Microsoft Edge vertical tabs layout rebuild browser security policies unaffected VerticalTabsAllowed; "Microsoft Edge" "vertical tabs" "policies" "unchanged". Read Edge for Business, VerticalTabsAllowed and policy reference excerpts; none guarantees this continuity. | Fix: Remove the sentence 'Edge policies that apply to the browser as a whole are unaffected by a layout rebuild unless Microsoft states otherwise.' The preceding sentence, that the roadmap names no sign-in, permission or identity change, can remain.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls / applicability: The documented VerticalTabsAllowed control is presented as unconfirmed for the updated vertical layout. | Found: Configures whether a user can access an alternative layout where tabs are vertically aligned on the side of the browser instead of at the top. | Fix: Replace the note's first two sentences with 'VerticalTabsAllowed controls whether users can access the vertical tab layout.' Keep 'Per profile; needs a browser restart.' In the closing Governance controls paragraph, replace the applicability caveat with 'The policy reference describes its scope as access to the vertical tab layout.' The cited reference states that reach without an implementation exception. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/verticaltabsallowed
-->
