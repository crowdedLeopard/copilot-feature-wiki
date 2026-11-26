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
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Learn lists the commercial, education and frontline user plans that include Places core features; desk booking, autorelease and occupancy reports need Teams Room or Teams Shared Space licences; AI room booking needs a Microsoft Copilot licence. No US Government plan is named."
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
    note: "Scope with a mail-enabled security group; at most 20 OIDs. Desk booking also needs a space licence per desk."
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
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 84
  confirmed: 76
  unconfirmed: 1
  contradicted: 7
  attempts: 1
  hash: "c173bce17fdcf3e4507589dff6ae01b9"
---

## What's changing

Microsoft plans to make Microsoft Places available in the US Government Community Cloud (GCC). The roadmap item states only that "Microsoft Places features will now be available in GCC cloud". Microsoft Learn's Places documentation does not yet describe a GCC release or any GCC differences, so what follows about behaviour is Microsoft's general Places documentation, to be confirmed against Message center when the GCC rollout is announced.

Microsoft Learn describes Places as a workplace app embedded in Teams and Outlook. Its core features include work plans and workplace presence, in-person events and hybrid RSVP, automatic detection of work location, room and desk pool booking, desk assignment, Places explorer, Places finder and Places analytics. The Places app is available on the web, in Teams, in Outlook and in the Microsoft 365 app.

On arrival, the documented defaults are: the Places app setting (`EnablePlacesWebApp`) is on for all users in the tenant; Places finder and building experiences are not automatically enabled for newly onboarded tenants; analytics (`SpaceAnalyticsEnabled`) is off for all users. Room finder remains the default experience in the Outlook and Teams calendar.

The roadmap item is **In development**, targeted for **March CY2027**, release phase General Availability, on Desktop and Web, for the GCC cloud.

## Why it matters

If GCC follows the documented default, users with a supported plan get the Places app without any admin action, and with it work plans and workplace presence: features that tell colleagues when someone plans to be in the office. Agencies with policies on sharing staff location or schedules should decide before March 2027 whether to leave the app on, limit it, or turn it off with `Set-PlacesSettings`.

The richer features (buildings, Places finder, desk booking, analytics) do nothing until an administrator builds the building and floor hierarchy from Exchange room lists and switches them on. That is a facilities project as much as an IT one, and Microsoft's reference notes it is evaluating deprecation of Room finder experiences, so GCC tenants that rely on Room finder should plan the move.

## Risk assessment

**Data exposure**
- Work plans and workplace presence share a user's planned and actual work location with colleagues. `EnablePlacesWebApp` and `EnableBuildings` govern the Places app and building-level locations; a separate mailbox calendar configuration setting governs whether users can make their work location visible to others.
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

**Space licences.** Since 1 April 2026, individual desk booking, autorelease and occupancy reports in Places analytics are licensed per space: rooms need a Microsoft Teams Room, Teams Shared Space or Teams Shared Space – Single Space licence; individual desks need Teams Shared Space or Teams Shared Space – Single Space. Three free Single Space licences come with each purchased Teams Shared Space licence. Prices for GCC are not yet published.

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
- Build the building and floor hierarchy from room lists with `Initialize-Places` before turning on `EnableBuildings` or `PlacesFinderEnabled`.
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
<tr><td data-label="Control"><strong>Which users can use Places finder and book individual desks</strong><br><small>Group</small><br><small class="controls__note">Scope with a mail-enabled security group; at most 20 OIDs. Desk booking also needs a space licence per desk.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlacesSettings -PlacesFinderEnabled 'Default:false,OID:[OID]@[TID]:true'</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can see Places occupancy analytics</strong><br><small>Tenant</small><br><small class="controls__note">Off by default for all users. Buildings are enabled for analytics separately.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlacesSettings -SpaceAnalyticsEnabled 'Default:false'</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a user has the Places Enhanced service plan</strong><br><small>User</small><br><small class="controls__note">Part of Microsoft's turn-off procedure; $addLicenses lists service plan f8566154-2a62-48cb-a0ab-d4d25be26e51 under DisabledPlans. Re-added when Teams Premium is assigned.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and apps › Apps › Places Enhanced <a href="https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses $addLicenses -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

All four tenant settings are set with `Set-PlacesSettings` from the MicrosoftPlaces module in PowerShell 7 after `Connect-MicrosoftPlaces`; the caller needs both the Exchange MailRecipients role and the Places TenantPlacesManagement role. OID-based scoping to groups is supported only for `-PlacesFinderEnabled`, needs a mail-enabled security group and allows at most 20 OIDs; the other settings are tenant-wide. Changes can take up to 12 hours to propagate.

To turn Places off for the whole organisation, Microsoft's procedure turns off `EnablePlacesWebApp` and `EnableBuildings` and then disables the Places Enhanced service plan for every user. The Places Management web app manages the Places directory (buildings, rooms, desks, reservation settings), not these feature settings, and needs `EnablePlacesWebApp` on to be reachable. Whether users can make their work location visible to others is a separate mailbox calendar configuration setting in Exchange Online. The Places Administrator role can enable and disable Places features; Microsoft recommends the least privileged Places role over Global Administrator or Exchange Administrator.

## Open questions

- Which US Government (G) plans will include Places core features in GCC? Watch the License requirements page.
- Will the GCC release keep the commercial defaults, with the Places app on for all users? Watch Message center for the rollout post.
- Will the Teams Shared Space and Teams Room space licences be available and priced for GCC desks and rooms?
- Will Copilot room booking and Quick book be included in the GCC release, or follow later with Microsoft 365 Copilot in GCC?
- Does `Connect-MicrosoftPlaces` need any GCC-specific setting to reach a GCC tenant? Watch the Places PowerShell reference.

<!-- rationale
risk: Medium. The Places app is documented as on by default for all users, and work plans and workplace presence show colleagues when and where people plan to be in the office; tenant settings in the MicrosoftPlaces PowerShell module cover each feature.
cost: Low. Core Places features come with the user plans Microsoft lists; individual desk booking, autorelease and occupancy reports need Teams space licences. Which GCC plans carry Places is not yet published.
impact: Medium. Users can open the Places app once it reaches the tenant, but Room finder stays the default calendar experience and building features need admin setup, so facilities teams and office-goers notice most.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: first paragraph / absence: Microsoft Learn's Places documentation does not describe a GCC release or any GCC differences. | Found: Is this feature supported in any of the special cloud environments? Autorelease is currently supported in the Government Community Cloud (GCC). | Fix: Replace with: 'The roadmap targets broader Places availability in GCC for March CY2027; the Places FAQ already states that autorelease is supported in GCC. The general Places documentation below does not establish the defaults or complete feature scope of that planned release.' | Source: https://learn.microsoft.com/microsoft-365/places/frequently-asked-questions
- [unsupported, blocker] front matter: defaultState; What's changing: On arrival / default: The planned GCC change has defaultState on. | Found: Searched: Microsoft Places GCC government cloud release rollout licensing pricing defaults; "Microsoft Places" "GCC"; Microsoft Places GCC rollout release date default. Opened Set-PlacesSettings, Places FAQ and licensing page; none states the planned GCC release default. | Fix: Set defaultState to 'unknown'. Replace 'On arrival, the documented defaults are' with 'The general Places documentation gives the following settings defaults; Microsoft has not stated whether the planned GCC release will use them.' Retain the conditional 'If GCC follows the documented default' wording.
- [contradicted, blocker] Why it matters: second paragraph / behaviour: Buildings, Places finder, desk booking and analytics do nothing until an administrator builds a hierarchy from Exchange room lists and switches them on. | Found: Manual setup for the floor can be done in two ways: Using Places management portal; Using PowerShell | Fix: Replace with: 'Building experiences, Places finder and analytics require a configured hierarchy and explicit enablement. Initialize-Places can generate the hierarchy from Exchange room lists; Microsoft also documents manual setup.' | Source: https://learn.microsoft.com/microsoft-365/places/configuring-places/buildings-floors-sections
- [contradicted, blocker] licensing.notes; controls[2].note; Cost and licensing; rationale: cost / licensing: Individual desk booking requires a per-space licence, with no transition exception stated. | Found: Individual desk booking shifts from a per-user to a per-space licensing model. To ensure a smooth transition, customers with active Teams Premium subscriptions continue to enjoy premium features until renewal. | Fix: Add to the space-licensing paragraph: 'Customers with active Teams Premium subscriptions continue to enjoy premium features until renewal.' Qualify the desk-booking licence statements in licensing.notes, controls[2].note and the cost rationale with 'subject to the Teams Premium transition exception until renewal'. | Source: https://learn.microsoft.com/microsoft-365/places/what-is-places/license-requirements
- [contradicted, blocker] Cost and licensing: Space licences / licensing: Three free Single Space licences come with every purchased Teams Shared Space licence without a qualifying-use restriction. | Found: If you use an MTSS license for a Teams common area phone, you can’t use the 3 free MTSS-SS licenses for rooms or desks. If you use an MTSS license for a BYOD room or an individual desk, you can use the 3 free MTSS-SS licenses for 3 more rooms or desks. | Fix: Replace with: 'For each Teams Shared Space licence used for a BYOD room or individual desk, you can acquire three free Single Space licences for three more rooms or desks; licences used for common area phones do not provide that entitlement. The free licences must be acquired separately, not automatically provisioned.' | Source: https://learn.microsoft.com/microsoft-365/places/what-is-places/license-requirements
- [contradicted, blocker] Cost and licensing: Space licences / absence: Prices for GCC space licences are not yet published. | Found: Microsoft Teams Shared Space – Single Space (Governmental Community Cloud Pricing) ... What's not changing: Pricing ... The updated name will appear in Partner Center pricing, billing and customer workspaces. | Fix: Replace 'Prices for GCC are not yet published' with 'The cited Places purchasing page does not give a GCC-specific desk rate; obtain pricing through your purchasing channel.' Cite https://learn.microsoft.com/partner-center/announcements/2026-february and https://learn.microsoft.com/partner-center/pricing/pricing-and-offers, which identify government pricing and the license-based price lists. | Source: https://learn.microsoft.com/partner-center/announcements/2026-february#sku-naming-update-microsoft-teams-shared-devices-%E2%86%92-microsoft-teams-shared-space-%E2%80%93-single-space
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure; rationale: risk / behaviour: Work plans and workplace presence share planned and actual work location with colleagues. | Found: Users choose whether to share their work location with coworkers in Teams and Outlook calendar settings. When sharing is enabled, coworkers can see work-location signals | Fix: Change to: 'When users choose to share their work location, work plans and workplace presence show colleagues their planned and actual work location.' Carry the same qualification into the risk rationale. | Source: https://learn.microsoft.com/microsoft-365/places/frequently-asked-questions
- [supported, minor] Governance controls: first paragraph / behaviour: OID-based scoping is supported only for PlacesFinderEnabled, and the other settings are tenant-wide. | Found: OID-based scoping is currently supported only for the -PlacesFinderEnabled setting. | Fix: Replace with: 'The Set-PlacesSettings reference says OID-based scoping is supported only for PlacesFinderEnabled. The Enable Places analytics page nevertheless gives a SpaceAnalyticsEnabled OID-scoping example, and the turn-off page describes group scoping for core settings; these pages disagree.' Keep the existing citations to all three pages. | Source: https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings
- [supported, minor] Governance guidance: At rollout / command: Get-PlacesSettings shows the tenant's configured Places feature settings. | Found: You can use Get-PlacesSettings to view all Microsoft Places features settings configured on your tenant. | Fix: Add https://learn.microsoft.com/microsoft-365/places/powershell/get-placessettings to sources. | Source: https://learn.microsoft.com/microsoft-365/places/powershell/get-placessettings
- [contradicted, minor] rationale: risk / consistency: Tenant settings in the MicrosoftPlaces PowerShell module cover each Places feature. | Found: rationale: 'tenant settings in the MicrosoftPlaces PowerShell module cover each feature'; Governance controls: 'Whether users can make their work location visible to others is a separate mailbox calendar configuration setting in Exchange Online.' | Fix: Replace the rationale's final clause with: 'the documented tenant settings control app access, building visibility, Places finder and analytics.'
- [contradicted, minor] Governance guidance: At rollout, hierarchy setup / consistency: The checklist tells administrators to configure the building and floor hierarchy, but that control has no table row. | Found: Checklist: 'Build the building and floor hierarchy from room lists with Initialize-Places'; controls table covers app access, building visibility, finder access, analytics access and Places Enhanced, not hierarchy creation. | Fix: The hierarchy-configuration checklist step has no corresponding controls-table row; remove that checklist bullet. Keep the existing prerequisite explanation in Scope.
-->
