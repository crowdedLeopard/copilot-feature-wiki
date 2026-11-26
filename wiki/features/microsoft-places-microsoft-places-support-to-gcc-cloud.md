---
title: "Microsoft Places: availability in the GCC cloud"
slug: "microsoft-places-microsoft-places-support-to-gcc-cloud"
roadmapId: 495465
topic: "modern-work"
products: ["Microsoft 365 app"]
summary: "Microsoft plans to bring Microsoft Places (work plans, workplace presence, room and desk booking, space analytics) to GCC tenants, targeted for March CY2027. GCC admins should decide which Places settings to turn on or off before it arrives."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC"]
platforms: ["Desktop","Web"]
targetDate: "March CY2027"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Learn lists the commercial, education and frontline user plans that include Places core features; desk booking (Teams Premium bought before 1 April 2026 keeps it until renewal), autorelease and occupancy reports need Teams Room or Teams Shared Space licences; AI room booking needs a Microsoft Copilot licence. No US Government plan is named."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["microsoft-places","powershell","licensing","exchange","teams","outlook","admin-controls","gcc"]
sources:
  - title: "Microsoft 365 Roadmap item 495465"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=495465"
    kind: "roadmap"
  - title: "License requirements"
    url: "https://learn.microsoft.com/microsoft-365/places/what-is-places/license-requirements"
    kind: "learn"
  - title: "Set-PlacesSettings"
    url: "https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings"
    kind: "learn"
  - title: "Get-PlacesSettings"
    url: "https://learn.microsoft.com/microsoft-365/places/powershell/get-placessettings"
    kind: "learn"
  - title: "How to turn off Microsoft Places"
    url: "https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places"
    kind: "learn"
  - title: "Enable others as Places administrators"
    url: "https://learn.microsoft.com/microsoft-365/places/day-to-day-admin/enable-others-as-places-admins"
    kind: "learn"
  - title: "Frequently Asked Questions"
    url: "https://learn.microsoft.com/microsoft-365/places/frequently-asked-questions"
    kind: "learn"
  - title: "Enable Places analytics"
    url: "https://learn.microsoft.com/microsoft-365/places/enable-places-analytics/enable-places-analytics"
    kind: "learn"
  - title: "Configuring Places"
    url: "https://learn.microsoft.com/microsoft-365/places/configuring-places/buildings-floors-sections"
    kind: "learn"
  - title: "What is Microsoft Places?"
    url: "https://learn.microsoft.com/microsoft-365/places/what-is-places/what-is-places"
    kind: "learn"
  - title: "Places Administration Web App"
    url: "https://learn.microsoft.com/microsoft-365/places/what-is-places/admin-web-app"
    kind: "learn"
  - title: "Buy and set up Microsoft Teams Shared Space licenses for desks"
    url: "https://learn.microsoft.com/microsoft-365/places/what-is-places/buy-set-up-teams-shared-space-licenses-desks"
    kind: "learn"
  - title: "Microsoft Teams Shared Space licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/teams-shared-device-license"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether users can access the Places app on the web, in Outlook, Teams and the Microsoft 365 app"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlacesSettings -EnablePlacesWebApp 'Default:false'"
      docs: "https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places"
    note: "On by default for all users. Needs the Exchange MailRecipients and Places TenantPlacesManagement roles. Up to 12 hours to take effect."
  - governs: "Whether users see buildings in work plans, workplace presence and Places finder"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlacesSettings -EnableBuildings 'Default:false'"
      docs: "https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings"
    note: "Not automatically enabled for newly onboarded tenants; has effect only once buildings and floors are configured."
  - governs: "Which users can use Places finder and book individual desks"
    scope: "group"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlacesSettings -PlacesFinderEnabled 'Default:false,OID:[OID]@[TID]:true'"
      docs: "https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings"
    note: "Scope with a mail-enabled security group; at most 20 OIDs. Desk booking also needs a space licence per desk; Teams Premium bought before 1 April 2026 keeps it until renewal."
  - governs: "Whether users can see Places occupancy analytics"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlacesSettings -SpaceAnalyticsEnabled 'Default:false'"
      docs: "https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings"
    note: "Off by default for all users. Buildings are enabled for analytics separately."
  - governs: "Whether a user has the Places Enhanced service plan"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and apps > Apps > Places Enhanced"
      docs: "https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses $addLicenses -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places"
    note: "Part of Microsoft's turn-off procedure; $addLicenses lists service plan f8566154-2a62-48cb-a0ab-d4d25be26e51 under DisabledPlans. Re-added when Teams Premium is assigned."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-25T00:10:31"
changes:
  - date: "2026-11-26"
    note: "New briefing on Microsoft Places reaching GCC, with the documented defaults, licensing and Set-PlacesSettings controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 84 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected after review: default state now Not stated for the GCC release; noted autorelease already supported in GCC; added Teams Premium transition and free Single Space licence conditions; removed unsupported GCC pricing statement."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 98 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected after review: cost raised to medium for per-space licensing; noted Teams Shared Space and Teams Rooms Pro are sold to GCC; narrowed the Teams Premium transition to purchases before 1 April 2026."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 121 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 121
  confirmed: 121
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d7c0a47f6d608cb796178075ad77dbfc"
---

## What's changing

Microsoft plans to make Microsoft Places available in the US Government Community Cloud (GCC). The roadmap item states only that "Microsoft Places features will now be available in GCC cloud". The roadmap targets broader Places availability in GCC for March CY2027; the Places FAQ already states that autorelease is supported in GCC. The general Places documentation below does not establish the defaults or complete feature scope of that planned release, so what follows about behaviour is to be confirmed against Message center when the GCC rollout is announced.

Microsoft Learn describes Places as a workplace app embedded in Teams and Outlook. Its core features include work plans and workplace presence, in-person events and hybrid RSVP, automatic detection of work location, room and desk pool booking, desk assignment, Places explorer, Places finder and Places analytics. The Places app is available on the web, in Teams, in Outlook and in the Microsoft 365 app.

The general Places documentation gives the following settings defaults; Microsoft has not stated whether the planned GCC release will use them: the Places app setting (`EnablePlacesWebApp`) is on for all users in the tenant; Places finder and building experiences are not automatically enabled for newly onboarded tenants; analytics (`SpaceAnalyticsEnabled`) is off for all users. Room finder remains the default experience in the Outlook and Teams calendar.

The roadmap item is **In development**, targeted for **March CY2027**, release phase General Availability, on Desktop and Web, for the GCC cloud.

## Why it matters

If GCC follows the documented default, users with a supported plan get the Places app without any admin action, and with it work plans and workplace presence: features that tell colleagues when someone plans to be in the office. Agencies with policies on sharing staff location or schedules should decide before March 2027 whether to leave the app on, limit it, or turn it off with `Set-PlacesSettings`.

Building experiences, Places finder and analytics require a configured hierarchy and explicit enablement. Initialize-Places can generate the hierarchy from Exchange room lists; Microsoft also documents manual setup. That is a facilities project as much as an IT one, and Microsoft's reference notes it is evaluating deprecation of Room finder experiences, so GCC tenants that rely on Room finder should plan the move.

## Risk assessment

**Data exposure**
- When users choose to share their work location, work plans and workplace presence show colleagues their planned and actual work location. `EnablePlacesWebApp` and `EnableBuildings` govern the Places app and building-level locations; a separate mailbox calendar configuration setting governs whether users can make their work location visible to others.
- Places analytics shows occupancy for buildings, rooms and desk pools. It is off by default and Microsoft recommends enabling it only for users who need occupancy information.

**Security & identity**
- Managing Places needs specific roles: running `Set-PlacesSettings` requires both the Exchange MailRecipients role and the Places TenantPlacesManagement role. Global Administrator and Exchange Administrator can manage all of Places; Microsoft recommends the least privileged Places role instead.

**Autonomy & actions**
- Copilot room booking recommends rooms and rebooks them when meetings change or conflicts arise. It needs a Microsoft Copilot licence, so it reaches only Copilot-licensed users.

**Change & support**
- Users with on-premises Exchange mailboxes in hybrid tenants cannot use the Places app, Places finder or work plans, and work location changes they make in Teams are visible only to themselves. Expect support questions from hybrid GCC tenants.
- Settings changes can take up to 12 hours to take effect, so plan changes ahead of the rollout.

## Cost and licensing

**User licence.** The [License requirements](https://learn.microsoft.com/microsoft-365/places/what-is-places/license-requirements) page lists Microsoft 365 Business Basic, Standard and Premium; Microsoft 365 or Office 365 E1, E3 and E5; Education A1, A3 and A5; frontline F1 and F3; and Teams Enterprise, Essentials and standalone as the plans whose users can access Places, with core features available to all of them. The list names no US Government (G) plan at the time of writing (November 2026), so which GCC plans will include Places is not yet published.

**Space licences.** Since 1 April 2026, individual desk booking, autorelease and occupancy reports in Places analytics are licensed per space: rooms need a Microsoft Teams Room, Teams Shared Space or Teams Shared Space – Single Space licence; individual desks need Teams Shared Space or Teams Shared Space – Single Space. Customers who purchased Teams Premium before 1 April 2026 can continue using Places premium capabilities until renewal. For each Teams Shared Space licence used for a BYOD room or individual desk, you can acquire three free Single Space licences for three more rooms or desks; licences used for common area phones do not provide that entitlement.

**AI features.** Copilot room booking and Quick book need a Microsoft Copilot licence.

**Indirect costs.** Building the building, floor and room hierarchy, floorplans and room metadata, and running the PowerShell configuration.

## Scope

- **Cloud:** GCC, per the roadmap item. Platforms: Desktop and Web.
- **Users:** those with a supported plan and a mailbox in Exchange Online; in Exchange hybrid environments, users with on-premises mailboxes cannot use Places features.
- **Admin roles:** Places Administrator (assigned in the Microsoft 365 admin center, Microsoft Entra admin center or Microsoft Graph API), Places Building Administrator and Places Desk Administrator (assigned with Exchange Online PowerShell).
- **Prerequisites:** most Places features depend on a hierarchy of buildings, floors, sections, rooms, workspaces and desks; the `Initialize-Places` cmdlet can build it from Exchange room lists.
- **Rollout:** target March CY2027; Microsoft has not published a GCC rollout window.

## Governance guidance

### Before rollout
- Decide whether the Places app and work plans should be on for all GCC users, and record the decision with your privacy or records officer.
- Prepare `Set-PlacesSettings -EnablePlacesWebApp 'Default:false'` if the app must stay off until you are ready, and run it as soon as the module works against your tenant, allowing 12 hours to apply.
- Check which GCC user plans and space licences cover Places once Microsoft publishes them, before budgeting for desk booking.

### At rollout
- Confirm with `Get-PlacesSettings` which features are on in the tenant.
- Pilot Places finder with a mail-enabled security group by OID scoping, not a standard security group.

### After rollout
- Enable `SpaceAnalyticsEnabled` only for facilities and real estate staff who need occupancy data.
- Review users with the Places Enhanced service plan if you have turned Places off, since assigning Teams Premium adds it again.
- Plan the move from Room finder to Places finder, given Microsoft is evaluating deprecation of Room finder experiences.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can access the Places app on the web, in Outlook, Teams and the Microsoft 365 app</strong><br><small>Tenant</small><br><small class="controls__note">On by default for all users. Needs the Exchange MailRecipients and Places TenantPlacesManagement roles. Up to 12 hours to take effect.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlacesSettings -EnablePlacesWebApp 'Default:false'</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users see buildings in work plans, workplace presence and Places finder</strong><br><small>Tenant</small><br><small class="controls__note">Not automatically enabled for newly onboarded tenants; has effect only once buildings and floors are configured.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlacesSettings -EnableBuildings 'Default:false'</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can use Places finder and book individual desks</strong><br><small>Group</small><br><small class="controls__note">Scope with a mail-enabled security group; at most 20 OIDs. Desk booking also needs a space licence per desk; Teams Premium bought before 1 April 2026 keeps it until renewal.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlacesSettings -PlacesFinderEnabled 'Default:false,OID:[OID]@[TID]:true'</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can see Places occupancy analytics</strong><br><small>Tenant</small><br><small class="controls__note">Off by default for all users. Buildings are enabled for analytics separately.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlacesSettings -SpaceAnalyticsEnabled 'Default:false'</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a user has the Places Enhanced service plan</strong><br><small>User</small><br><small class="controls__note">Part of Microsoft's turn-off procedure; $addLicenses lists service plan f8566154-2a62-48cb-a0ab-d4d25be26e51 under DisabledPlans. Re-added when Teams Premium is assigned.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and apps › Apps › Places Enhanced <a href="https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses $addLicenses -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

All four tenant settings are set with `Set-PlacesSettings` from the MicrosoftPlaces module in PowerShell 7 after `Connect-MicrosoftPlaces`; the caller needs both the Exchange MailRecipients role and the Places TenantPlacesManagement role. The Set-PlacesSettings reference states that OID-based scoping is currently supported only for `-PlacesFinderEnabled`; it needs a mail-enabled security group and allows at most 20 OIDs. Changes can take up to 12 hours to propagate.

To turn Places off for the whole organisation, Microsoft's procedure turns off `EnablePlacesWebApp` and `EnableBuildings` and then disables the Places Enhanced service plan for every user. The Places Management web app manages the Places directory (buildings, rooms, desks, reservation settings), not these feature settings, and needs `EnablePlacesWebApp` on to be reachable. Whether users can make their work location visible to others is a separate mailbox calendar configuration setting in Exchange Online. The Places Administrator role can enable and disable Places features; Microsoft recommends the least privileged Places role over Global Administrator or Exchange Administrator.

## Open questions

- Which US Government (G) plans will include Places core features in GCC? Watch the License requirements page.
- Will the GCC release keep the commercial defaults, with the Places app on for all users? Watch Message center for the rollout post.
- Teams Shared Space is available to purchase in GCC, and Teams Rooms Pro lists GCC in its segment availability: what is the tenant's actual purchase price, and which space-licensed capabilities are included in the planned Places GCC release?
- Will Copilot room booking and Quick book be included in the GCC release, or follow later with Microsoft 365 Copilot in GCC?
- Does `Connect-MicrosoftPlaces` need any GCC-specific setting to reach a GCC tenant? Watch the Places PowerShell reference.

<!-- rationale
risk: Medium. The Places app is documented as on by default for all users, and when users choose to share their work location, work plans and workplace presence show colleagues their planned and actual work location; the documented tenant settings control app access, building visibility, Places finder and analytics.
cost: Medium. Individual desk booking, autorelease and occupancy reports use per-space licensing, with a transition until renewal for Teams Premium purchased before 1 April 2026. Microsoft publishes paid Teams Shared Space licensing available in GCC; government user-plan coverage for the planned Places core release is not yet published.
impact: Medium. Users can open the Places app once it reaches the tenant, but Room finder stays the default calendar experience and building features need admin setup, so facilities teams and office-goers notice most.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: Space licences / licensing: Room autorelease and occupancy reports can use Microsoft Teams Room, Teams Shared Space or Teams Shared Space - Single Space licences. | Found: Room | Autorelease, Occupancy reports | MTR, MTSS or MTSS-SS MTSS-SS licenses can be used with BYOD rooms or individual desks, but not with common area phones. | Fix: Add after the room licence sentence: "The License requirements page permits Single Space licences for BYOD rooms, but the desk purchasing guide describes them as 'Assignable only to desks'; confirm this documentation discrepancy before assigning them to rooms." The disagreeing cited guide is https://learn.microsoft.com/microsoft-365/places/what-is-places/buy-set-up-teams-shared-space-licenses-desks. This qualification also applies to the later 'three more rooms or desks' sentence. | Source: https://learn.microsoft.com/microsoft-365/places/what-is-places/license-requirements
- [supported, minor] Governance controls: OID-based scoping / applicability: The Set-PlacesSettings reference states that OID-based scoping is currently supported only for PlacesFinderEnabled. | Found: OID-based scoping is currently supported only for the -PlacesFinderEnabled setting. | Fix: Add after this sentence: "Microsoft's other guides are inconsistent with that restriction: Enable Places analytics shows an OID-scoped SpaceAnalyticsEnabled example, and How to turn off Microsoft Places describes scoping EnablePlacesWebApp and EnableBuildings to specific users; confirm support before using those other scoped settings." The disagreeing pages are https://learn.microsoft.com/microsoft-365/places/enable-places-analytics/enable-places-analytics and https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places; both are already cited. | Source: https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings
-->
