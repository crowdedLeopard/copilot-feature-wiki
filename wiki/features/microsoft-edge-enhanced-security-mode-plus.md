---
title: "Microsoft Edge: Enhanced Security Mode Plus adds admin-set restrictions on top of Enhanced Security Mode"
slug: "microsoft-edge-enhanced-security-mode-plus"
roadmapId: 566871
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Microsoft plans optional, admin-configurable Edge restrictions (network protocols, hardware-access web APIs, WebGL, external protocol launches) for Enhanced Security Mode. Targeted December CY2026; no admin action documented yet."
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
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for Enhanced Security Mode Plus. Microsoft Learn's Enhanced Security Mode page names no licence at the time of writing (November 2026)."
audiences: ["m365-admin","security"]
tags: ["microsoft-edge","enhanced-security-mode","policy","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 566871"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566871"
    kind: "roadmap"
  - title: "Browse more safely with Microsoft Edge"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-security-browse-safer"
    kind: "learn"
  - title: "EnhanceSecurityMode"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/enhancesecuritymode"
    kind: "learn"
  - title: "Disable3DAPIs"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/disable3dapis"
    kind: "learn"
  - title: "Microsoft Edge - Policies"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Enhanced Security Mode Plus preset or custom modes"
    scope: "other"
    ui: null
    api: null
    note: "The roadmap describes admin-configurable preset and custom modes; Microsoft Learn documents no setting or policy for them at the time of writing (November 2026). The scope of the Plus control is not yet documented."
  - governs: "Whether Enhanced Security Mode is on, and in which mode"
    scope: "other"
    ui:
      surface: "Group Policy (ADMX)"
      path: "Administrative Templates > Microsoft Edge > Enhance the security state in Microsoft Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/enhancesecuritymode"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value EnhanceSecurityMode (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/enhancesecuritymode"
    note: "Existing ESM policy: 0 = StandardMode (off), 1 = BalancedMode, 2 = StrictMode. Roadmap says Plus applies when ESM is enabled. This existing policy is per profile."
  - governs: "WebGL access for web pages (existing alternative to a Plus WebGL restriction)"
    scope: "other"
    ui:
      surface: "Group Policy (ADMX)"
      path: "Administrative Templates > Microsoft Edge > Disable support for 3D graphics APIs"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/disable3dapis"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value Disable3DAPIs (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/disable3dapis"
    note: "Existing policy, not a Plus setting. Covers WebGL and the Pepper 3D API only. This existing policy is per profile and does not apply to a profile signed in with a Microsoft account."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-07T21:45:15"
changes:
  - date: "2026-11-21"
    note: "New briefing: Plus is known only from the roadmap; the existing ESM and WebGL policies are listed as today's controls."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 63 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: the unconfigured-Plus bullet now says Microsoft has not stated the behaviour, and the three controls rows carry scope Other, with the per-profile notes from Learn."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 66 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 66
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "8cb3ffc33bc2ee6c235295da6a510e9f"
---

## What's changing

Enhanced Security Mode Plus is a planned addition to Microsoft Edge's Enhanced Security Mode (ESM). The roadmap item says it adds optional, admin-configurable protections on top of ESM. Admins can configure preset or custom modes to restrict selected network protocols and compression behaviour, hardware-access web APIs, WebGL and external protocol launches when ESM is enabled. The roadmap does not name the protocols or APIs, or say what each preset contains.

Microsoft Learn does not describe Plus yet, so the paragraph above is the roadmap's description and nothing more is stated here about how Plus behaves. Learn does document ESM itself: it disables just-in-time (JIT) JavaScript compilation and enables additional operating system protections. Learn's ESM page describes a user setting, **Enhance your security on the web**, with Off (default), Balanced and Strict choices, and notes that some users might see ESM turned on by default because of ongoing development and testing.

The roadmap lists the item as In development, with a target of December CY2026, release phase General Availability, for Worldwide (Standard Multi-Tenant) on the Web platform. These dates are Microsoft's targets, not commitments.

## Why it matters

Plus, as the roadmap describes it, would let administrators narrow more of the browser's attack surface than ESM's JIT restriction does. Restrictions on WebGL, hardware-access web APIs and external protocol launches are the kind that can change how line-of-business sites behave, so expect compatibility testing to be the main work once the settings are documented.

Microsoft has not stated what happens on arrival, and no source says existing ESM settings change. Nothing in the sources requires action before the settings are published, but a security team that already runs ESM should plan a pilot.

## Risk assessment

**Data exposure**

- No change documented: the roadmap description covers restrictions on browser capabilities and names no new data that Edge reads or sends.

**Security & identity**

- On the roadmap's wording, Plus applies when ESM is enabled. A tenant that leaves the EnhanceSecurityMode policy at StandardMode, which Learn says turns the enhanced mode off, would not be covered by Plus.
- Microsoft has not stated what happens if Plus is left unconfigured. For this risk assessment, assume today's behaviour continues.

**Autonomy & actions**

- No change: the roadmap description involves no agent or automated action.

**Change & support**

- Restricting WebGL, hardware-access web APIs or external protocol launches can break sites that depend on them. Learn already warns that Strict ESM means users "may report some challenges accomplishing their usual tasks".
- The presets' contents and the policy names are not published, so help-desk guidance and scripted deployment cannot be prepared yet.

## Cost and licensing

Not yet published: no licence, price or meter for Enhanced Security Mode Plus is published at the time of writing (November 2026), and Learn's ESM page names no licence. The roadmap record lists no licence either.

The cost the sources show is indirect: admin time to choose a preset or custom mode, test business sites and brief the help desk. Learn's Enhanced Security Mode pages document no meter or spending control.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform, with release phase General Availability. No other cloud is listed on the item.

The roadmap says the protections apply when ESM is enabled, so ESM is the stated prerequisite. Learn lists the existing EnhanceSecurityMode policy for Windows and macOS from version 98 and marks Android and iOS as not supported; whether Plus has the same limits is not stated. The role needed to configure Plus is not stated.

## Governance guidance

### Before rollout

- Record where the EnhanceSecurityMode policy is set today and to which value, because the roadmap ties Plus to ESM being enabled.
- List the business sites that use WebGL, hardware-access web APIs or external protocol launches, so they can be tested as soon as Plus settings are documented.
- Watch the Microsoft Edge policy reference and the roadmap item for the Plus settings; none is documented at the time of writing.

### At rollout

- Pilot with a small group that already runs ESM, using a preset before building a custom mode.
- Use the existing Disable3DAPIs policy only if WebGL must be blocked now; it is a separate policy and not a Plus setting.

### After rollout

- Review help-desk reports of broken sites against the pilot's test list before widening the group.
- Update the ratings and the controls table here once Microsoft documents the Plus settings.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Enhanced Security Mode Plus preset or custom modes</strong><br><small class="controls__note">The roadmap describes admin-configurable preset and custom modes; Microsoft Learn documents no setting or policy for them at the time of writing (November 2026). The scope of the Plus control is not yet documented.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Enhanced Security Mode is on, and in which mode</strong><br><small class="controls__note">Existing ESM policy: 0 = StandardMode (off), 1 = BalancedMode, 2 = StrictMode. Roadmap says Plus applies when ESM is enabled. This existing policy is per profile.</small></td><td data-label="Admin UI"><strong>Group Policy (ADMX)</strong><br>Administrative Templates › Microsoft Edge › Enhance the security state in Microsoft Edge <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/enhancesecuritymode" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value EnhanceSecurityMode (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/enhancesecuritymode" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>WebGL access for web pages (existing alternative to a Plus WebGL restriction)</strong><br><small class="controls__note">Existing policy, not a Plus setting. Covers WebGL and the Pepper 3D API only. This existing policy is per profile and does not apply to a profile signed in with a Microsoft account.</small></td><td data-label="Admin UI"><strong>Group Policy (ADMX)</strong><br>Administrative Templates › Microsoft Edge › Disable support for 3D graphics APIs <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/disable3dapis" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value Disable3DAPIs (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/disable3dapis" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No Plus setting is documented, so the first row is empty. The EnhanceSecurityMode policy is the existing ESM control that the roadmap names as the condition for Plus; Learn's policy page does not mention Plus. Disable3DAPIs is an existing, separate policy listed as today's alternative for WebGL only: it does not cover network protocols, hardware-access web APIs or external protocol launches. The role required to set these policies is not stated on the pages cited.

## Open questions

- Which Edge policy or setting configures the Plus preset and custom modes, and when will it appear in the Edge policy reference?
- Which network protocols, compression behaviours and hardware-access web APIs does each preset restrict?
- Does Plus apply under both Balanced and Strict ESM, and do ESM's exception lists apply to it?
- Will Plus need a licence, which Edge versions and platforms will support it, and what is its default state? Watch the Edge policy reference and Message center.

<!-- rationale
risk: Low. The roadmap describes the protections as optional and admin-configurable, and no source says existing behaviour changes on arrival, so the exposure left at default is today's behaviour.
cost: Low. The only cost the sources show is admin time to pilot and communicate; a licence for Plus is not yet published.
impact: Low. Admins configure it, so users notice only where restrictions on WebGL, hardware-access web APIs or external protocol launches are enabled.
-->
