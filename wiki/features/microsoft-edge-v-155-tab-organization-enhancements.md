---
title: "Microsoft Edge: AI tab and Workspace organisation suggestions in version 155"
slug: "microsoft-edge-v-155-tab-organization-enhancements"
roadmapId: 570443
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge 155 suggests groupings, names, visuals and labels for tab groups and Workspaces, sending tab URLs and titles to a Microsoft service by default. Admins decide via the TabServicesEnabled policy."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Not yet published. The policy page, the release notes and the roadmap item name no licence, charge or meter for tab organisation suggestions."
audiences: ["m365-admin","security","compliance","end-user"]
tags: ["microsoft-edge","edge-workspaces","group-policy","privacy","admin-controls","ai"]
sources:
  - title: "Microsoft 365 Roadmap 570443"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570443"
    kind: "roadmap"
  - title: "TabServicesEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/tabservicesenabled"
    kind: "learn"
  - title: "User data and privacy in Microsoft Edge"
    url: "https://learn.microsoft.com/legal/microsoft-edge/privacy"
    kind: "learn"
  - title: "Allow list for Microsoft Edge endpoints"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-security-endpoints"
    kind: "learn"
  - title: "Archived release notes for Microsoft Edge Stable Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel"
    kind: "learn"
  - title: "EdgeWorkspacesEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeworkspacesenabled"
    kind: "learn"
videos: []
related: ["microsoft-edge-v-158-inline-switching-for-workspaces","microsoft-edge-vertical-tabs-update"]
controls:
  - governs: "Whether Edge sends tab data to its tab organization service for grouping and naming suggestions"
    scope: "other"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Enable tab organization suggestions"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/tabservicesenabled"
    api:
      kind: "other"
      call: "Registry value TabServicesEnabled (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/tabservicesenabled"
    note: "Windows and macOS 113 or later; macOS preference key TabServicesEnabled. Mandatory only, per profile, refreshes without restart. Does not apply to Microsoft account profiles."
  - governs: "Whether users can access Edge Workspaces at all"
    scope: "other"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Edge Workspaces settings > Enable Workspaces"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeworkspacesenabled"
    api:
      kind: "other"
      call: "Registry value EdgeWorkspacesEnabled (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeworkspacesenabled"
    note: "Existing control: removes Workspaces entirely, not only the suggestions. Requires browser restart; does not apply to Microsoft account profiles."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-28"
    note: "New briefing: Edge 155 tab and Workspace organisation suggestions, the data they send and the TabServicesEnabled policy."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 53
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "e55b256da7a4bf0bc5ecc2838f347408"
---

## What's changing

Microsoft Edge version 155 extends its AI-assisted tab organisation so that it suggests groupings, names, visuals and labels for tab groups and for Edge Workspaces (shared sets of browser tabs). The roadmap item states that users manage these experiences through a proposed setting, "Let Microsoft Edge help keep your tabs organized", under Privacy, search, and services > Search and connected experiences, and that administrators control them with the TabServicesEnabled policy.

The suggestions come from a Microsoft web service. The [TabServicesEnabled policy page](https://learn.microsoft.com/deployedge/microsoft-edge-policies/tabservicesenabled) says that if the policy is enabled or not configured, Edge sends tab data, including URLs, page titles and existing group information, to its tab organization service when a user creates a tab group or uses certain "Group Similar Tabs" features. Microsoft's [Edge privacy statement](https://learn.microsoft.com/legal/microsoft-edge/privacy) says the Tab organization behaviour is turned on by default. The [Edge endpoint allow list](https://learn.microsoft.com/deployedge/microsoft-edge-security-endpoints) names three endpoints for the service, which it says support auto-naming tab groups and Workspaces on creation, auto-assigning Workspace emojis and auto-grouping tabs.

The user setting is named differently in two places: the roadmap item gives the proposed label "Let Microsoft Edge help keep your tabs organized", while the privacy statement tells users to turn off the **Organize your tabs** toggle under Search and connected experiences.

The roadmap item lists the change as Launched, General Availability, targeted October CY2026, for Worldwide (Standard Multi-Tenant) on Web. The Edge Stable Channel release notes list Tab organization enhancements in version 155.0.4283.45, dated October 08, 2026.

## Why it matters

Tab URLs and page titles leave the device for a Microsoft service unless TabServicesEnabled is disabled. In most organisations those include intranet addresses, document names and customer or case names in page titles. The underlying service is not new: the Edge 116 release notes (August 2023) describe tab group naming and "Group Similar Tabs" under the same policy. What version 155 changes is how many experiences use it, now including Workspaces.

If nobody acts, the suggestions reach users of Edge 155 on profiles where the policy is not configured, because the policy page says Edge then sends tab data to the service. Tenants that already disable TabServicesEnabled are covered for what the roadmap item ties to that policy. Tenants that never set it should decide now, because version 155 has shipped to the Stable channel.

## Risk assessment

**Data exposure**
- When a user creates a tab group or uses certain "Group Similar Tabs" features, Edge sends URLs, page titles and existing group information to its tab organization service; the privacy statement adds which tab opened another and when each tab was opened. Disabling TabServicesEnabled means no data is sent, per the policy page.
- The privacy statement says tab information sent to Microsoft is deleted immediately after processing and that no data is stored. Microsoft has not documented separately what Workspace naming and emoji suggestions send at the time of writing (November 2026).

**Security & identity**
- The policy page says TabServicesEnabled does not apply to a profile signed in with a Microsoft account, so personal profiles on managed devices fall outside it.

**Autonomy & actions**
- The endpoint page describes names applied to tab groups and Workspaces on creation; the privacy statement describes grouping all tabs as something the user starts from the **Organize tabs** dialog and confirms with **Group tabs**.

**Change & support**
- Users see new suggested names, groupings and visuals; the differing setting labels ("Organize your tabs" against the proposed "Let Microsoft Edge help keep your tabs organized") may confuse helpdesk instructions.
- The endpoint allow list names three endpoints under edge.microsoft.com/taggrouptitlegeneration for the service; check proxy rules if users report suggestions not appearing.

## Cost and licensing

Microsoft has not published licensing specific to this feature: the [TabServicesEnabled policy page](https://learn.microsoft.com/deployedge/microsoft-edge-policies/tabservicesenabled), the Edge 155 release notes and the roadmap item name no licence, charge or meter for tab organisation suggestions at the time of writing (November 2026). The known cost is administrator time to decide on and deploy the policy and to brief users.

## Scope

- **Platforms:** the policy page lists Windows and macOS version 113 or later, with Android and iOS not supported. The roadmap item lists Web.
- **Clouds:** Worldwide (Standard Multi-Tenant), per the roadmap item.
- **Profiles:** the policy applies per profile and not to profiles signed in with a Microsoft account.
- **Version:** the Stable Channel release notes list the enhancements in version 155.0.4283.45.
- **Workspaces:** the Workspace suggestions apply where users can use Edge Workspaces, which the EdgeWorkspacesEnabled policy governs.

## Governance guidance

### Before rollout
- Decide with your privacy or data protection lead whether URLs and page titles from users' tabs may be sent to the Edge tab organization service.
- Check whether Enable tab organization suggestions (TabServicesEnabled) is already set for your managed Edge profiles.
- Allow the three taggrouptitlegeneration endpoints on proxies if you keep the feature on.

### At rollout
- Set Enable tab organization suggestions (TabServicesEnabled) to Disabled through Group Policy, the registry or the macOS preference key if the data flow is not acceptable.
- Set Enable Workspaces (EdgeWorkspacesEnabled) to Disabled only if you want to remove Edge Workspaces altogether; it is not a switch for the suggestions alone.
- Tell users where the user toggle sits (Privacy, search, and services > Search and connected experiences) if you leave the policy unconfigured.

### After rollout
- Confirm on sample devices that the policy has applied; the policy page says it refreshes without a browser restart.
- Watch the TabServicesEnabled policy page and Edge release notes for any change to what the policy covers.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Edge sends tab data to its tab organization service for grouping and naming suggestions</strong><br><small class="controls__note">Windows and macOS 113 or later; macOS preference key TabServicesEnabled. Mandatory only, per profile, refreshes without restart. Does not apply to Microsoft account profiles.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Enable tab organization suggestions <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/tabservicesenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value TabServicesEnabled (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/tabservicesenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can access Edge Workspaces at all</strong><br><small class="controls__note">Existing control: removes Workspaces entirely, not only the suggestions. Requires browser restart; does not apply to Microsoft account profiles.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Edge Workspaces settings › Enable Workspaces <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeworkspacesenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value EdgeWorkspacesEnabled (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeworkspacesenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

TabServicesEnabled can be set only as a mandatory policy; the policy page says it cannot be recommended, so it cannot be offered as a default that users change. Leaving it unconfigured leaves the decision to each user's **Organize your tabs** toggle. EdgeWorkspacesEnabled removes Workspaces entirely and needs a browser restart; it is listed as today's broader alternative, not as a control over the suggestions. Neither policy applies to profiles signed in with a Microsoft account.

## Open questions

- Does disabling TabServicesEnabled also stop Workspace naming, emoji and label suggestions, as the roadmap item states, given that the policy page describes only tab groups? Watch the policy page.
- What data does Edge send for Workspace naming and emoji suggestions, and is it the same as for tab groups? Watch the Edge privacy statement.
- Will the user setting be labelled "Let Microsoft Edge help keep your tabs organized" or "Organize your tabs"? Watch the Edge release notes.
- Where is tab data processed, and is it inside the EU Data Boundary for EU tenants? Watch the Edge privacy statement.

<!-- rationale
risk: Medium. Unless TabServicesEnabled is disabled, Edge sends tab URLs, page titles and group information to a Microsoft service; one existing policy stops it.
cost: Low. The only known cost is admin time to decide on and deploy the policy; Microsoft has not published licensing specific to this feature.
impact: Medium. Edge users who create tab groups or Workspaces notice new suggested names, groupings and visuals.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing / licensing: Licensing is unknown because no suggestion-specific licence has been published. | Found: Users must have access to a OneDrive for Business license to create an Edge Workspace. | Fix: For the Workspace portion, record licensing.model as included and qualify licensing.notes: 'Creating enterprise Edge Workspaces requires access to a OneDrive for Business license. Licensing specific to tab organization suggestions is not yet published (November 2026).' Add https://learn.microsoft.com/deployedge/microsoft-edge-workspaces to sources and give the same qualification in Cost and licensing; do not imply the Workspace prerequisite applies to ordinary tab groups. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-workspaces
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist directs readers to the user toggle, but that control has no row in the controls table. | Found: Tell users where the user toggle sits (Privacy, search, and services > Search and connected experiences) if you leave the policy unconfigured. The controls table lists only TabServicesEnabled and EdgeWorkspacesEnabled. | Fix: Remove the At rollout checklist bullet beginning 'Tell users where the user toggle sits'; its supported user-setting information already appears in What's changing and Governance controls.
-->
