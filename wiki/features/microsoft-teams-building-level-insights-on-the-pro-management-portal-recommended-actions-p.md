---
title: "Microsoft Teams: building-level insights on the Teams Rooms Pro Management recommended actions page"
slug: "microsoft-teams-building-level-insights-on-the-pro-management-portal-recommended-actions-p"
roadmapId: 553591
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "The Recommended Actions page in the Teams Rooms Pro Management portal gains building-level insights on buildings with high Teams Rooms use and remaining BYOD rooms. On by default for eligible tenants; Microsoft says no action is required."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Teams and Surface Devices","Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn says at least one Teams Rooms Pro or Teams Shared Devices licence is required to access the Recommended Actions page. The roadmap says 'Teams Rooms Pro or Shared Space license'. No separate price or meter is stated."
audiences: ["m365-admin","service-owner"]
tags: ["teams","teams-rooms","analytics","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 553591"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=553591"
    kind: "roadmap"
  - title: "MC1257308: (Updated) Microsoft Teams: Building-level insights on the Teams Rooms Pro Management portal recommended actions page"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1257308"
    kind: "message-center"
  - title: "Recommended Actions"
    url: "https://learn.microsoft.com/microsoftteams/rooms/recommended-actions"
    kind: "learn"
  - title: "Manage your resource account and device inventory"
    url: "https://learn.microsoft.com/microsoftteams/rooms/inventory"
    kind: "learn"
  - title: "Set-Place"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-place"
    kind: "learn"
videos: []
related: ["microsoft-teams-analytics-for-desk-utilization-on-teams-pro-management-portal"]
controls:
  - governs: "Use of room, device and usage data for meeting space optimization recommendations"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > General > Meeting space optimization recommendations"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/recommended-actions"
    api: null
    note: "Off by default. Learn does not say it governs building-level insights. Roles: Teams Rooms Pro Manager, Global Administrator, Teams Administrator."
  - governs: "Building name on each room, which the page's location hierarchy reads"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Planning > Inventory > room > General"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/inventory"
    api:
      kind: "powershell"
      call: "Set-Place -Identity <room mailbox> -Building <building name>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-place"
    note: "Existing control for data quality, not a switch for the feature. Learn: Exchange Admin or Global Admin role to create, edit or remove resource accounts."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-17"
    note: "New briefing: building-level insights on the Teams Rooms Pro Management Recommended Actions page, Launched, with controls for the optimisation setting and room building data."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 52 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 52
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ab28aaae950e87b41b1026969c9f0662"
---

## What's changing

Microsoft is adding building-level insights to the Recommended Actions page in the Teams Rooms Pro Management portal. The roadmap item says the feature identifies buildings with high Microsoft Teams Rooms utilisation, so that IT can prioritise upgrades of bring-your-own-device (BYOD) meeting spaces. Microsoft's notice MC1257308 describes the view as highlighting buildings with high Teams Rooms usage that still contain BYOD rooms, which gives users an uneven experience from room to room.

Microsoft Learn's Recommended Actions page covers the page, its location filters and the Device upgrades tiles for BYOD rooms, but it does not yet describe a building-level view or how a building counts as high utilisation. What this briefing says about the building-level behaviour is therefore the roadmap's and the notice's description. Learn does state that the page's location hierarchy includes a building name taken from the Places room resource, and that rooms hidden from the address book are not included.

The roadmap record shows the item as Launched, General Availability, Worldwide (Standard Multi-Tenant), with a target of June CY2026. MC1257308, last updated 22 September 2026, says rollout would begin mid-June 2026 (previously early June) and complete by end of October 2026 (previously mid-September), and gives an end date of 30 November 2026. The notice says no changes will occur to existing configurations, policies or settings, that the feature will be enabled by default for tenants with eligible licences, and that no action is required.

## Why it matters

This arrives without an admin choosing it, and it lands on a page that feeds room-upgrade and budget decisions. Expect room-technology and facilities teams to ask about the buildings it names, so decide who owns the answer before they ask.

The insight depends on how your rooms are described. Learn says the building name on this page's location hierarchy comes from the room resource's building property, so rooms with no building name set are a likely gap. Microsoft has not said how the building-level view treats such rooms, so check your room data rather than assume.

## Risk assessment

**Data exposure**

- The notice describes a new view over room and usage data already in the portal and does not mention new data collection. Learn says the Recommended Actions page displays only rooms the signed-in user is authorised to view; it does not say how building-level figures behave for a user scoped to some rooms in a building.
- Learn documents a separate tenant setting, Meeting space optimization recommendations, that lets Microsoft use room, device and usage data for upgrade recommendations and is turned off by default. Learn does not say whether the building-level insights rely on it (see the controls table).

**Security & identity**

- No change documented: no new permission, role or sign-in is mentioned in the roadmap item or the notice. Portal roles continue to scope what a user sees on the page.

**Autonomy & actions**

- No change: the roadmap and notice describe insights to help IT prioritise upgrades, and the notice says no existing configurations, policies or settings change. Nothing in these sources says the page changes a room or device.

**Change & support**

- Tenants are reached in a window that Microsoft's notice put at mid-June to end of October 2026, so different admins may see the view at different times.
- Poor or missing building data on room records can make the insight misleading; the portal's inventory lets an admin edit the building on a room (see the controls table).

## Cost and licensing

The Recommended Actions Learn page states: at least one Teams Rooms Pro or Teams Shared Devices licence is required to access the page. The roadmap item says the feature is available with a Teams Rooms Pro or Shared Space licence, and the notice says organisations using the portal with Teams Rooms Pro or Shared Device licences are affected. Microsoft uses three names for the shared-device licence across these sources; Learn's name is Teams Shared Devices.

The roadmap item, the notice and the Learn page state no separate price, meter or add-on for this feature. Indirect cost is admin time to review room location data and to act on the buildings the page names; any hardware purchase that follows is outside what Microsoft has described.

## Scope

- **Who sees it:** tenants using the Teams Rooms Pro Management portal with Teams Rooms Pro or Teams Shared Devices licences, per the notice and Learn.
- **Cloud and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant); platforms are Teams and Surface Devices, and Web.
- **Roles:** Learn says the page follows portal role-based access control and shows rooms the user is authorised to view. The roles Learn names for changing the Meeting space optimization recommendations setting are Teams Rooms Pro Manager, Global Administrator and Teams Administrator.
- **Room eligibility:** Learn says rooms hidden from the address book are not included in Shared Spaces Insights and Recommended Actions; HiddenFromAddressListsEnabled must be false on the room's resource account mailbox. It also says only tiles relevant to your tenant are shown.
- **Rollout:** per the notice, mid-June 2026 to end of October 2026; the roadmap status is Launched.

## Governance guidance

### Before rollout

- Confirm the tenant holds at least one Teams Rooms Pro or Teams Shared Devices licence, which Learn lists as the requirement for the Recommended Actions page.
- Check that rooms carry a building name in the portal inventory (see the controls table), since the page's location hierarchy reads that property.
- Tell the owners of room technology and facilities that a building-level view is arriving; the notice suggests sharing the update with them.

### At rollout

- Open the Recommended Actions page and look for the building-level view; Learn does not yet describe it, so note what it shows.
- Review your current Teams Rooms and BYOD room distribution in the portal, as the notice suggests.
- Check the Meeting space optimization recommendations setting (see the controls table), which Learn documents as off by default, and decide whether to enable it once Microsoft confirms whether the building-level insights depend on it.

### After rollout

- Compare the buildings the page names with your own list of BYOD rooms and correct building data where they disagree.
- Update planning guidance for meeting-room technology if the insights change upgrade priorities, as the notice suggests.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Use of room, device and usage data for meeting space optimization recommendations</strong><br><small>Tenant</small><br><small class="controls__note">Off by default. Learn does not say it governs building-level insights. Roles: Teams Rooms Pro Manager, Global Administrator, Teams Administrator.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › General › Meeting space optimization recommendations <a href="https://learn.microsoft.com/microsoftteams/rooms/recommended-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Building name on each room, which the page's location hierarchy reads</strong><br><small class="controls__note">Existing control for data quality, not a switch for the feature. Learn: Exchange Admin or Global Admin role to create, edit or remove resource accounts.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Planning › Inventory › room › General <a href="https://learn.microsoft.com/microsoftteams/rooms/inventory" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Place -Identity &lt;room mailbox&gt; -Building &lt;building name&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-place" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents no tenant switch for the building-level insights themselves; the notice says the feature is enabled by default for eligible tenants and does not name a setting to turn it off. The first row is the one documented setting for upgrade recommendations in this portal, and Learn does not say that it governs this feature. At the time of writing (November 2026), Microsoft Learn documents no API for that setting.

Learn says Teams Rooms Pro Manager, Global Administrator and Teams Administrator can change that setting and can check when it was enabled or disabled under Settings > General > Log history. Learn says end-of-support and end-of-certification recommendations do not need the setting.

The second row edits the room property the page's location hierarchy reads. Learn says creating, editing or removing resource accounts needs the Exchange Admin or Global Admin role.

## Open questions

- Do the building-level insights depend on the Meeting space optimization recommendations setting, which Learn documents as off by default, given that the notice says the feature is enabled by default for eligible tenants? Watch the Recommended Actions Learn page and MC1257308.
- How does Microsoft decide that a building has high Teams Rooms utilisation, and over what period? Not yet documented.
- How does the view treat rooms with no building name, or rooms hidden from the address book, and does a user scoped to some rooms in a building see partial figures?
- Can an admin turn off the building-level insights, and is there an API for the settings around them? Not yet documented.
- Which licence names apply: the roadmap says Shared Space, the notice says Shared Device, and Learn says Teams Shared Devices.

<!-- rationale
risk: Low. It is a new view in an existing admin portal, and Microsoft's notice says no existing configurations, policies or settings change. It is recommendation-only.
cost: Low. It needs a Teams Rooms Pro or Teams Shared Devices licence already required for the page; no separate charge or meter is stated. The cost is admin time to check room data.
impact: Low. Admins and room-technology planners who use the Teams Rooms Pro Management portal notice it; end users see no change.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing; Open questions / licensing: The cited sources use Shared Space, Shared Device and Teams Shared Devices names, leaving the naming difference unresolved in the briefing. | Found: At least one Teams Rooms Pro or Teams Shared Devices license is required to access the Recommended Actions page. | Fix: After the source-name comparison add: 'Microsoft's licensing page says Microsoft Teams Shared Devices was renamed Microsoft Teams Shared Space in April 2026.' Cite https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/teams-shared-device-license, which states 'Prior to April 2026, this license was called Microsoft Teams Shared Devices license.' Remove the final Open questions bullet about which licence names apply. | Source: https://learn.microsoft.com/microsoftteams/rooms/recommended-actions
-->
