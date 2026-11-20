---
title: "Microsoft Edge: opt-in for launching Edge when Windows starts on managed devices"
slug: "microsoft-edge-autolaunch-opt-in-experience-for-managed-devices"
roadmapId: 571307
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge will offer users on managed devices an opt-in to launch at Windows start-up. Admins can set the LaunchEdgeOnWindowsStartupEnabled policy to force it on or off; if unset, users see an opt-in banner."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The LaunchEdgeOnWindowsStartupEnabled policy page and the roadmap item name no licence or meter for this feature."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["microsoft-edge","policy","admin-controls","adoption"]
sources:
  - title: "Microsoft 365 Roadmap 571307"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571307"
    kind: "roadmap"
  - title: "LaunchEdgeOnWindowsStartupEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/launchedgeonwindowsstartupenabled"
    kind: "learn"
  - title: "Release notes for Microsoft Edge Stable Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-stable-channel"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether Edge launches automatically when Windows starts"
    scope: "other"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Launch Microsoft Edge on Windows startup"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/launchedgeonwindowsstartupenabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value LaunchEdgeOnWindowsStartupEnabled (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/launchedgeonwindowsstartupenabled"
    note: "Mandatory only; requires a browser restart; Windows only, from Edge 153. Unconfigured leaves the choice with the user."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-30T22:08:34"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: opt-in banner and LaunchEdgeOnWindowsStartupEnabled policy for launching Edge at Windows start."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 43 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 43
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d8ad82b64d8e7f8ef4249b1d9d6aae4f"
---

## What's changing

Microsoft Edge will introduce an opt-in experience that lets users on managed devices choose whether Edge launches automatically when Windows starts. The roadmap item says administrators can also manage the behaviour through the LaunchEdgeOnWindowsStartupEnabled policy, with opt-in, opt-out and user-choice configurations.

The policy's own Learn page describes the three states. If you enable the policy, Edge launches visibly when Windows starts. If you disable it, Edge never launches visibly when Windows starts. If you don't configure it, Edge doesn't launch automatically at Windows start by default, users are periodically shown an opt-in banner to turn it on, and they can enable or disable automatic launch at any time from settings. The page lists support for Windows from Edge version 153 and states that macOS, Android and iOS are not supported.

The roadmap item is In development with a target of November CY2026 and release phase General Availability. The Edge release notes already list this item for the Stable channel in version 156 (22 October 2026) and version 158 (19 November 2026), each marked as a controlled feature rollout: "If you don't see this change, check back as we continue the rollout."

## Why it matters

For service owners this is a user-facing prompt that arrives with Edge updates, and a policy that decides whether the prompt matters. Left unconfigured, the policy page says Edge does not start at Windows start-up by default and users are periodically shown a banner to turn it on, so each user can opt in. If you want a uniform outcome, the policy is the control: enabling it launches Edge visibly at Windows start, and disabling it means Edge never does.

Plan for service desk questions about the banner and decide your stance before the rollout reaches your tenant, because the rollout is described as controlled and is not tied to a date you can schedule around.

## Risk assessment

**Data exposure**
- No change in the sources: the roadmap description and the policy page describe a launch setting, not new data access.

**Security & identity**
- The policy is listed as mandatory and not recommended ("Can be mandatory: Yes", "Can be recommended: No"), so a value you set is applied as a mandatory policy rather than a default users can change.
- Enabling the policy makes Edge launch visibly at Windows start for every device it reaches. Decide that deliberately rather than by default.

**Autonomy & actions**
- With the policy unconfigured, the action is the user's: the opt-in banner and the setting in Edge are the only sources of an auto-launch decision on the policy page.

**Change & support**
- The policy does not refresh dynamically and requires a browser restart, so a change takes effect after Edge restarts.
- The policy supports Windows only, from Edge version 153, so older Windows builds of Edge and other platforms are outside it.
- The rollout is described as controlled, so users on the same Edge version may not see the banner on the same day.

## Cost and licensing

No licence, meter or price for this feature is yet published: the LaunchEdgeOnWindowsStartupEnabled policy page and the roadmap item name none. The only cost the sources show is indirect: admin time to choose a policy value, and communication and service desk time for the opt-in banner.

## Scope

The roadmap item lists Microsoft Edge, the Worldwide (Standard Multi-Tenant) cloud, platform Web and release phase General Availability. It describes the opt-in as for users on managed devices.

The policy page lists Windows from Edge version 153 and not supported on macOS, Android or iOS. It lists the policy as not per profile, and as requiring a browser restart to take effect. The rollout is described in the release notes as controlled, with no fixed date for any given tenant.

## Governance guidance

### Before rollout
- Decide whether to enable, disable or leave unconfigured the LaunchEdgeOnWindowsStartupEnabled policy, using the three behaviours the policy page describes.
- Check which Windows devices run Edge version 153 or later, because the policy page lists support from that version.
- Brief the service desk and champions that users may be shown an opt-in banner and can change the setting themselves while the policy is unconfigured.

### At rollout
- Set the policy through Group Policy or the registry value in the controls table if you want a fixed outcome for a group of devices.
- Restart Edge after changing the policy, because the policy page says it requires a browser restart.

### After rollout
- Review service desk tickets about Edge launching at start-up, and compare them with the policy value you set.
- Re-check the policy page and Edge release notes for changes while the roadmap item is still In development.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Edge launches automatically when Windows starts</strong><br><small class="controls__note">Mandatory only; requires a browser restart; Windows only, from Edge 153. Unconfigured leaves the choice with the user.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Launch Microsoft Edge on Windows startup <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/launchedgeonwindowsstartupenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value LaunchEdgeOnWindowsStartupEnabled (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/launchedgeonwindowsstartupenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The one control documented for this item is the LaunchEdgeOnWindowsStartupEnabled policy, set through Group Policy or the registry. It is a Boolean policy: enabled launches Edge visibly at Windows start, disabled means Edge never does, and not configured leaves the choice with the user, who is periodically shown an opt-in banner. The policy page lists it as mandatory only and as not per profile.

The policy page documents no separate admin-centre switch for this item; set the policy where you manage Edge policies for Windows.

## Open questions

- How often is the opt-in banner shown? The policy page says "periodically" without a frequency. Watch the policy page and Edge release notes.
- When will the controlled rollout reach all tenants? The roadmap target is November CY2026 while the status is still In development; watch the Microsoft 365 roadmap and Message center.
- Will a licence or meter be published for the feature? Watch the policy page and the Edge for Business documentation.

<!-- rationale
risk: Low. With the policy not configured, the policy page says Edge does not launch at Windows start-up by default and users are only shown an opt-in banner, so the exposure is Edge starting at Windows start for users who opt in.
cost: Low. The only cost the sources show is admin time to choose a policy value and brief users; no licence or meter for this feature is yet published.
impact: Medium. Users on managed Windows devices are periodically shown an opt-in banner, so many people may notice it, but Edge's default launch behaviour does not change unless a user or admin enables it.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity / behaviour: A mandatory policy value is enforced rather than being a default that users can override. | Found: Mandatory policies override user preferences and prevent the user from changing the policy settings. Recommended policies provide a default setting that the user can override. | Fix: Add https://learn.microsoft.com/deployedge/configure-microsoft-edge to sources for the explanation that mandatory policies override user preferences. | Source: https://learn.microsoft.com/deployedge/configure-microsoft-edge
-->
