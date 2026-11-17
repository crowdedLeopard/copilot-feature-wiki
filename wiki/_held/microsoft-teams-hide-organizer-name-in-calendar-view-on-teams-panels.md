---
title: "Microsoft Teams panels: hide the organiser name in Calendar View"
slug: "microsoft-teams-hide-organizer-name-in-calendar-view-on-teams-panels"
roadmapId: 569423
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "A new Show organizer name setting lets admins hide organiser names in Calendar View on Teams panels. Names stay visible by default, so no action is needed unless room privacy requires hiding them."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Teams and Surface Devices"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "The roadmap item and Microsoft's release notes say the setting is available with Teams Rooms Pro and Teams Shared Space licences. How those licences are bought or priced is not yet published in the pages read."
audiences: ["m365-admin","service-owner"]
tags: ["teams","teams-rooms","privacy","admin-controls","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap item 569423"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569423"
    kind: "roadmap"
  - title: "MC1484010: Microsoft Teams: Hide organizer names in calendar view on Teams Panels"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1484010"
    kind: "message-center"
  - title: "What's new in Microsoft Teams devices"
    url: "https://learn.microsoft.com/microsoftteams/devices/devices-release-notes"
    kind: "learn"
  - title: "Managing settings for Teams devices"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    kind: "learn"
  - title: "Microsoft Teams panels"
    url: "https://learn.microsoft.com/microsoftteams/devices/teams-panels"
    kind: "learn"
  - title: "How to use Microsoft Teams panels"
    url: "https://learn.microsoft.com/microsoftteams/devices/use-teams-panels"
    kind: "learn"
videos: []
related: ["microsoft-teams-building-level-insights-on-the-pro-management-portal-recommended-actions-p","microsoft-teams-analytics-for-desk-utilization-on-teams-pro-management-portal"]
controls:
  - governs: "Whether a panel shows the organiser name in Calendar View"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Rooms/ Phones > device > Settings"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    api: null
    note: "Per-device. Page names the Settings tab but not the category holding Show organizer name. Needs Rooms Management RBAC permissions."
  - governs: "Applying device settings to many panels at once"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > Device Settings > Jobs"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    api: null
    note: "General control: Microsoft has not confirmed that Show organizer name is among the settings a job can apply."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-26T23:15:50"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item: the Show organizer name setting for Teams panels, with portal paths from Microsoft Learn."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 53 statements contradicted, 5 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 46
  unconfirmed: 5
  contradicted: 2
  attempts: 1
  hash: "9685b34c34a7d02b9ad5f11c7cfacc97"
---

## What's changing

Teams panels, the touchscreen devices mounted outside meeting spaces, gain a **Show organizer name** setting. Switched off, the organiser's name no longer appears in Calendar View on the panel. Admins can set it in the Microsoft Teams Rooms Pro Management portal or on the panel device itself.

Microsoft's notice MC1484010 states that organiser names continue to be displayed by default, and that no action is required if you want them to keep appearing. If you want to hide them, the notice asks you to review your room privacy and display requirements and then update the setting in the portal or on individual panels.

The roadmap item is Rolling out, with a target of October CY2026, for Worldwide (Standard Multi-Tenant), on Android and Teams and Surface Devices. MC1484010 gives a general availability rollout beginning in early October 2026 and expected to complete by early October 2026. Microsoft's October 2026 release notes for Teams panels also list the setting.

## Why it matters

Panels sit outside meeting spaces, so what they show is visible to anyone who walks past. Organiser names are personal information that some organisations treat as sensitive, for example for executive or HR meetings. This setting gives admins a documented way to remove that one detail from Calendar View without changing the meeting itself.

If nobody acts, MC1484010 says organiser names continue to be displayed in Calendar View, so existing behaviour does not change. The decision is whether your room privacy requirements justify turning it off, and on which panels.

## Risk assessment

**Data exposure**
- Organiser names remain visible in Calendar View on panels unless an admin turns the setting off; this is the default, per MC1484010. The setting controls Calendar View only. The Learn page on using Teams panels describes the Home screen meeting tile as showing the organiser's name too, and Microsoft has not said whether this setting affects that tile.

**Security & identity**
- The setting adds no new data access or identity behaviour. In the Pro Management portal, changing device settings needs the role-based access control permissions for Rooms Management, so check who holds them.

**Autonomy & actions**
- No autonomous behaviour: the setting is a display toggle that an admin sets per device.

**Change & support**
- A setting changed from the portal is applied as a job. **Apply Now** queues the job and restarts the device as soon as possible; **Schedule Later** uses the nightly maintenance window. Jobs can fail with the reason DEVICE IN MEETING, or if the device is disconnected.
- Settings management from the portal is available only for signed-in devices. A change made on the device is synchronised back to the portal, so two admins can end up editing the same value from different places.

## Cost and licensing

The roadmap item and Microsoft's October 2026 Teams devices release notes say the setting is available with Teams Rooms Pro and Teams Shared Space licences. MC1484010 words it as Teams Rooms Pro and Teams Shared Spaces licences.

No meter, price or separate charge for this setting is stated in the pages read. The cost shown is admin time to decide, set and verify the setting on each panel. How the two licences are bought or priced is not yet published in those pages.

## Scope

The setting applies to Teams panels. The roadmap lists Worldwide (Standard Multi-Tenant) as the cloud, with platforms Android and Teams and Surface Devices. Other clouds are not listed on the roadmap item.

The Learn release notes list the change under October 2026 for Teams app version 1449/1.0.97.2026369007. The setting is available with Teams Rooms Pro and Teams Shared Space licences. MC1484010 notes that the available information does not indicate support for management through Microsoft Entra ID group membership.

## Governance guidance

### Before rollout
- Decide which meeting spaces need organiser names hidden, based on the room privacy and display requirements MC1484010 asks you to review.
- Confirm who holds Rooms Management permissions in the Teams Rooms Pro Management portal, since that role-based access control decides who can change device settings there.
- Check that the panels you want to change are signed in and enrolled in the portal, because portal settings management is available only for signed-in devices.

### At rollout
- Turn **Show organizer name** off on the chosen panels in the Teams Rooms Pro Management portal, or on the panel device.
- Choose **Schedule Later** for panels in busy rooms, as **Apply Now** restarts the device as soon as possible.
- Brief room owners and reception staff that organiser names will no longer appear in Calendar View on those panels.

### After rollout
- Check the Settings Job History under the Activity tab of each room to confirm the change completed.
- Walk past a changed panel and check Calendar View, and the Home screen tile, for the organiser name.
- Revisit the Learn release notes and Message center for any change to where the setting applies.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a panel shows the organiser name in Calendar View</strong><br><small class="controls__note">Per-device. Page names the Settings tab but not the category holding Show organizer name. Needs Rooms Management RBAC permissions.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Rooms/ Phones › device › Settings <a href="https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Applying device settings to many panels at once</strong><br><small class="controls__note">General control: Microsoft has not confirmed that Show organizer name is among the settings a job can apply.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › Device Settings › Jobs <a href="https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both table rows use the Teams Rooms Pro Management portal and need Rooms Management permissions. Microsoft Learn documents no PowerShell, Microsoft Graph or other API for this setting at the time of writing (November 2026).

The release notes and MC1484010 also say the setting can be changed on the panel device, but the Learn pages read do not give the on-device path. The portal's Settings tab groups settings into categories, and which category holds **Show organizer name** is not documented. Whether it can be pushed by bulk jobs or templates is likewise not confirmed.

## Open questions

- Does **Show organizer name** also hide the organiser's name on the Home screen meeting tile, or only in Calendar View? Watch the Teams panels pages on Microsoft Learn.
- Where is the setting in the device Settings tab of the Pro Management portal and on the panel itself, and can it be set through device setting jobs or templates?
- Is there a PowerShell, Graph or other API to set it at scale? Microsoft Learn documents none at the time of writing (November 2026).
- How are Teams Rooms Pro and Teams Shared Space licences priced for this setting? Watch the Teams Rooms licensing pages.

<!-- rationale
risk: Low. The setting only removes a detail from the panel display, and Microsoft's notice MC1484010 says organiser names continue to be displayed by default, so leaving it alone keeps today's behaviour.
cost: Low. The roadmap says the setting is available with Teams Rooms Pro and Teams Shared Space licences; the only cost shown is admin time, and no separate price is published for this setting.
impact: Low. Room admins notice the new setting; people reading a panel notice a change only on devices where an admin turns the setting off.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model / licensing: The licensing model is unknown, meaning Microsoft has not published it. | Found: This feature is available with Teams Rooms Pro and Teams Shared Space licenses. | Fix: Set licensing.model to "included". The feature is available with Teams Rooms Pro and Teams Shared Space licences, which license the panels themselves; unknown pricing does not make that entitlement unknown. Retain the named licences in licensing.notes. | Source: https://learn.microsoft.com/microsoftteams/devices/devices-release-notes
- [unsupported, major] Risk assessment: Data exposure / behaviour: The setting controls Calendar View only. | Found: Searched: Teams panels Show organizer name settings Calendar View Home screen. Opened devices release notes and How to use Microsoft Teams panels; the setting is described for Calendar View, but no text rules out effects on other display elements. | Fix: Replace "The setting controls Calendar View only" with "Microsoft documents the setting's effect on Calendar View." Keep the following uncertainty about the Home screen tile; do not state an exclusive scope that the sources do not establish.
- [unsupported, major] Risk assessment: Security & identity / behaviour: The setting adds no new data access. | Found: Searched: Teams panels organizer data access; Show organizer name Teams panels permissions identity autonomous meeting changes. Opened panels overview and devices release notes; they describe display behaviour, not whether data access changes. | Fix: Remove "The setting adds no new data access or identity behaviour." Retain the documented Rooms Management permissions sentence.
- [unsupported, major] Risk assessment: Security & identity / behaviour: The setting adds no new identity behaviour. | Found: Searched: Show organizer name Teams panels permissions identity autonomous meeting changes. Opened devices release notes, panels overview and Managing settings for Teams devices; no passage states that identity behaviour is unchanged. | Fix: Remove "The setting adds no new data access or identity behaviour." Retain the documented Rooms Management permissions sentence.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature has no autonomous behaviour. | Found: Searched: Show organizer name Teams panels permissions identity autonomous meeting changes. Opened devices release notes and Managing settings for Teams devices; Microsoft describes an administrator-controlled display setting, not a blanket absence of autonomous behaviour. | Fix: Replace "No autonomous behaviour: the setting is a display toggle that an admin sets per device" with "Admins choose whether to display organiser names using the Show organizer name setting in the portal or on a panel device."
- [unsupported, major] Why it matters / behaviour: Hiding the organiser name does not change the meeting itself. | Found: Searched: Show organizer name Teams panels permissions identity autonomous meeting changes. Opened devices release notes and How to use Microsoft Teams panels; Microsoft describes hiding the name in Calendar View but does not state that the meeting itself is unchanged. | Fix: Remove "without changing the meeting itself" from the sentence. Keep the supported statement that the setting removes the organiser's name from Calendar View.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing; Open questions / absence: The pages read for the briefing do not publish how the qualifying licences are bought or priced. | Found: Searched: Teams Rooms Pro Teams Shared Space license purchase pricing panels. Opened all four cited Learn pages: none supplies licence prices or a purchasing procedure. The separate Teams Rooms licenses and Teams Shared Space licensing pages do document purchasing. | Fix: Replace the narrow "in the pages read" purchasing gap in licensing.notes and Cost and licensing with "A separate price for this setting is not published." Remove the licence-pricing open question rather than suggesting that licence purchasing is undocumented. Purchasing guidance exists at https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/teams-shared-device-license and https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing.
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The governance checklist's Settings Job History monitoring step is represented in the controls table. | Found: Check the Settings Job History under the Activity tab of each room to confirm the change completed. The table contains only the organiser-name setting and bulk device settings jobs. | Fix: The After rollout step "Check the Settings Job History under the Activity tab of each room to confirm the change completed" names a monitoring control that has no corresponding row in the controls table.
-->
