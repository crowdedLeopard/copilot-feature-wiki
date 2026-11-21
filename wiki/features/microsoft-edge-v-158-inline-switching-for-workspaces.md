---
title: "Microsoft Edge: switch between Workspaces inside one window"
slug: "microsoft-edge-v-158-inline-switching-for-workspaces"
roadmapId: 568786
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge 158 lets users switch between Workspaces within their current window instead of opening one window each. The roadmap lists it as Launched; Microsoft names no separate switching policy or feature-specific licence, so plan communication."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The Edge release notes and the EdgeWorkspacesEnabled policy page state no licence for in-window switching."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["microsoft-edge","edge-workspaces","user-experience","policy"]
sources:
  - title: "Microsoft 365 Roadmap 568786"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568786"
    kind: "roadmap"
  - title: "Microsoft Edge release notes for Stable and Extended Stable Channels"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-stable-channel"
    kind: "learn"
  - title: "Release notes for Microsoft Edge Beta Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-beta-channel"
    kind: "learn"
  - title: "Microsoft Edge Workspaces"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-workspaces"
    kind: "learn"
  - title: "EdgeWorkspacesEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeworkspacesenabled"
    kind: "learn"
  - title: "SyncDisabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/syncdisabled"
    kind: "learn"
  - title: "Getting started with Microsoft Edge Workspaces"
    url: "https://support.microsoft.com/en-us/edge/getting-started-with-microsoft-edge-workspaces"
    kind: "docs"
videos: []
related: []
controls:
  - governs: "Whether users can access Edge Workspaces"
    scope: "user"
    ui:
      surface: "Group Policy (ADMX)"
      path: "Administrative Templates > Microsoft Edge > Edge Workspaces settings > Enable Workspaces"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeworkspacesenabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value EdgeWorkspacesEnabled (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeworkspacesenabled"
    note: "Governs Workspaces as a whole; no separate in-window switching policy is documented. Per profile; needs a browser restart."
  - governs: "Whether Edge syncs data, including saved Workspaces"
    scope: "user"
    ui:
      surface: "Group Policy (ADMX)"
      path: "Administrative Templates > Microsoft Edge > Disable synchronization of data using Microsoft sync services"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/syncdisabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value SyncDisabled (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/syncdisabled"
    note: "Existing alternative for sync only; does not switch off in-window switching. Microsoft says new V2 Workspaces stay local where Sync is disabled by policy."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-11-20T23:20:27"
changes:
  - date: "2026-11-21"
    note: "First briefing: in-window Workspaces switching shipped in Edge Stable 158 on 19 November 2026; no separate admin switch or licence is documented."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the pilot step and an open question so they no longer say tab behaviour is undocumented, and narrowed the summary to 'no separate switching policy or feature-specific licence'."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 58
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "62684a5488a5cbb58735998b78af4fc2"
---

## What's changing

Edge 158 lets users switch between Workspaces within their current browser window instead of opening a separate window for each Workspace. The roadmap item says that selecting a Workspace swaps in its tabs, theme and context, with an easy return to the default space.

Microsoft's Stable channel release notes for version 158.0.4370.33 (19 November 2026) list "In-window workspace switching" in the main release, with two companion changes: users can pin frequently used Workspaces, and can assign an emoji to a pinned Workspace. The Beta channel notes for 158.0.4370.1 (4 November 2026) listed the switching change first.

The roadmap record gives the status as Launched, the target as November CY2026, the release phase as General Availability, the cloud as Worldwide (Standard Multi-Tenant) and the platform as Web. The roadmap item has no more-info link, and Microsoft Learn has no page for this feature alone, so detail beyond the release notes is the roadmap's description.

The same Beta notes say that Workspaces V1 will be disabled by default in Edge 158 and fully removed in Edge 159. Earlier release notes say Workspaces data is moving from OneDrive/SharePoint to the Edge Sync service and the collaboration and sharing function is being removed.

## Why it matters

For most tenants this is a user-experience change, not a data or spend change. Users who keep Workspaces for different projects will move between them in one window, so expect questions about where the tabs of the other Workspaces went and how to get back to the default space.

Microsoft has not stated whether in-window switching is on by default on arrival or whether it can be turned off on its own. No source says existing behaviour changes for people who do not use Workspaces, so the advice is to brief help desks and Workspaces users, and to decide whether the existing Workspaces policy is the control you want.

## Risk assessment

**Data exposure**
- Microsoft's notes describe a change in how users move between Workspaces, not new data access. Saved Workspaces data is moving from OneDrive/SharePoint to the Edge Sync service, and the `SyncDisabled` policy is the control for sync: for organisations that have disabled Sync through policy, new V2 Workspaces stay local to each device.

**Security & identity**
- No change documented. The `EdgeWorkspacesEnabled` policy is per profile, so a profile that is signed in is the unit it applies to; Microsoft has not described how identity is handled when Workspaces are swapped in one window, so confirm this in a pilot before relying on separation.

**Autonomy & actions**
- No change: the release note describes a user-initiated switch and describes no automated action.

**Change & support**
- Users who relied on one window per Workspace will see a different window layout; the same release adds pinned Workspaces and emoji labels, which add to what help desks may be asked about.
- Workspaces V1 is being removed in Edge 159, so users who have not migrated lose access to V1 Workspaces; this is a separate change that arrives in the same release cycle.

## Cost and licensing

Microsoft's release notes and the `EdgeWorkspacesEnabled` policy page name no licence, meter or charge for in-window switching, and a licence for this feature is not yet published. The only cost the sources show is admin time and communication.

The Learn Workspaces page lists, among its prerequisites, "Users must have access to a OneDrive for Business license to create an Edge Workspace." That page describes the earlier OneDrive-based design, and the release notes say the data is moving to the Edge Sync service, so whether that prerequisite still applies is not stated.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the only cloud, General Availability as the release phase and Web as the platform. It lists no US Government cloud; that is a record fact, not a statement that the feature is unavailable there.

The feature shipped in the Edge Stable channel version 158.0.4370.33 on 19 November 2026. It is aimed at users of Edge Workspaces; the Learn Workspaces page says Workspaces are enabled for users signed in with a Microsoft Entra account, and the `EdgeWorkspacesEnabled` policy page lists Windows and macOS as supported and Android and iOS as not supported.

## Governance guidance

### Before rollout
- Identify which users already use Edge Workspaces, and ask the help desk to expect questions about switching, pinned Workspaces and returning to the default space.
- Check whether `EdgeWorkspacesEnabled` or `SyncDisabled` is already set in your Edge policy baseline, because both affect what users can do with Workspaces.
- Update user guidance to say Workspaces now open in the current window instead of a new window.

### At rollout
- Confirm the Edge version users run: in-window switching is listed in Stable 158.0.4370.33.
- Pilot with a few Workspaces users to confirm sign-in state when they switch, since Microsoft has not described identity handling specifically for in-window switching.

### After rollout
- Collect help-desk questions about Workspaces and V1 removal in Edge 159.
- Review the Edge release notes for Stable 158 and later for changes to Workspaces behaviour or policies.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can access Edge Workspaces</strong><br><small>User</small><br><small class="controls__note">Governs Workspaces as a whole; no separate in-window switching policy is documented. Per profile; needs a browser restart.</small></td><td data-label="Admin UI"><strong>Group Policy (ADMX)</strong><br>Administrative Templates › Microsoft Edge › Edge Workspaces settings › Enable Workspaces <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeworkspacesenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value EdgeWorkspacesEnabled (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeworkspacesenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Edge syncs data, including saved Workspaces</strong><br><small>User</small><br><small class="controls__note">Existing alternative for sync only; does not switch off in-window switching. Microsoft says new V2 Workspaces stay local where Sync is disabled by policy.</small></td><td data-label="Admin UI"><strong>Group Policy (ADMX)</strong><br>Administrative Templates › Microsoft Edge › Disable synchronization of data using Microsoft sync services <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/syncdisabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value SyncDisabled (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/syncdisabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

`EdgeWorkspacesEnabled` is the policy page's control for access to Workspaces as a whole: if you disable it, users won't be able to access the Microsoft Edge Workspaces feature. Microsoft Learn documents no separate policy for in-window switching at the time of writing (November 2026). The policy requires a browser restart and is per profile.

`SyncDisabled` governs cloud synchronisation of Edge data. It does not turn off in-window switching; it matters because Microsoft says new V2 Workspaces stay local to each device where Sync is disabled by policy.

## Open questions

- Is in-window switching on by default for everyone who uses Workspaces, and does anything change for users who do not? Watch the Edge release notes and the Message center.
- Is there a policy that controls in-window switching on its own, or does `EdgeWorkspacesEnabled` remain the only switch?
- Which licence, if any, does in-window switching need, and does the OneDrive for Business prerequisite still apply now that Workspaces data is moving to the Edge Sync service?
- How is sign-in context kept apart when users swap Workspaces in one window?

<!-- rationale
risk: Low. It changes how users move between Workspaces they already have; Microsoft's notes describe no new data access, and the existing EdgeWorkspacesEnabled policy governs access to Workspaces.
cost: Low. The only cost the sources show is admin time and user communication; a licence or meter specific to in-window switching is not yet published.
impact: Medium. Users who work in Edge Workspaces will see the window behave differently; people who do not use Workspaces are not the audience the release note describes.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; summary; Governance guidance: Before rollout / behaviour: Users can now switch Workspaces in their current browser window instead of opening a separate window for each Workspace. | Found: Users can now switch between workspaces directly within their current browser window instead of opening a separate window for each workspace. | Fix: After the Stable release-note paragraph, add: "The linked Microsoft Support page still calls these updates 'coming soon' and says some users may encounter them; it also documents an 'Open in a new window' option." Source: https://support.microsoft.com/en-us/edge/getting-started-with-microsoft-edge-workspaces. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-relnote-stable-channel
-->
