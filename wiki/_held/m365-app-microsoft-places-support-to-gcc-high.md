---
title: "Microsoft Places: workplace app for hybrid work comes to GCC High"
slug: "m365-app-microsoft-places-support-to-gcc-high"
roadmapId: 497998
topic: "modern-work"
products: ["Microsoft 365"]
summary: "Microsoft plans to bring Microsoft Places (work plans, workplace presence, room and desk booking) to GCC High, targeted December CY2026. Its app setting is documented as on by default, so decide before arrival who gets it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC High"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Core features come with the user plans on Microsoft's Places licence page. Individual desk booking, autorelease and occupancy reports use MTSS or MTSS-SS for individual desks; room autorelease and occupancy reports use MTR, MTSS or MTSS-SS. Active Teams Premium subscriptions keep premium features until renewal. Copilot room booking needs a Microsoft Copilot licence."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["microsoft-places","outlook","teams","exchange","powershell","licensing","privacy","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap item 497998"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=497998"
    kind: "roadmap"
  - title: "What is Microsoft Places?"
    url: "https://learn.microsoft.com/microsoft-365/places/what-is-places/what-is-places"
    kind: "learn"
  - title: "License requirements"
    url: "https://learn.microsoft.com/microsoft-365/places/what-is-places/license-requirements"
    kind: "learn"
  - title: "Frequently Asked Questions"
    url: "https://learn.microsoft.com/microsoft-365/places/frequently-asked-questions"
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
  - title: "Enable Places analytics"
    url: "https://learn.microsoft.com/microsoft-365/places/enable-places-analytics/enable-places-analytics"
    kind: "learn"
  - title: "Get-PlacesSettings"
    url: "https://learn.microsoft.com/microsoft-365/places/powershell/get-placessettings"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Who holds the Places Administrator role that enables and disables Places features (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["auditing"]
controls:
  - governs: "Whether users can open the Places app on the web and inside Outlook, Teams and the Microsoft 365 app"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlacesSettings -EnablePlacesWebApp 'Default:false'"
      docs: "https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings"
    note: "On by default for all users. Needs MailRecipients and TenantPlacesManagement roles; up to 12 hours to take effect."
  - governs: "Whether users see buildings in work plans, workplace presence and Places finder"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlacesSettings -EnableBuildings 'Default:true'"
      docs: "https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings"
    note: "Not automatically enabled for newly onboarded tenants; has effect only once buildings and floors are configured."
  - governs: "Which users can use Places finder and book individual desks"
    scope: "group"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlacesSettings -PlacesFinderEnabled 'Default:false,OID:[OID]@[TID]:true'"
      docs: "https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings"
    note: "The only setting the reference documents for OID scoping; use a mail-enabled security group, up to 20 OIDs."
  - governs: "Which users can see Places analytics occupancy data"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlacesSettings -SpaceAnalyticsEnabled 'Default:false'"
      docs: "https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings"
    note: "Off by default for all users. Buildings are enabled for analytics separately."
  - governs: "Whether a user keeps the Places Enhanced service plan"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and apps > Apps > Places Enhanced"
      docs: "https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses $addLicenses -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places"
    note: "$addLicenses carries DisabledPlans with plan ID f8566154-2a62-48cb-a0ab-d4d25be26e51. Re-apply after each new Teams Premium assignment."
  - governs: "Who holds the Places Administrator role that enables and disables Places features"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Roles > Role assignments > Exchange > Places Administrator > Assigned"
      docs: "https://learn.microsoft.com/microsoft-365/places/day-to-day-admin/enable-others-as-places-admins"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    note: "The request body sets principalId and roleDefinitionId (the Places Administrator role). Global and Exchange Administrators can also manage all of Places."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-24T00:13:11"
changes:
  - date: "2026-11-26"
    note: "New briefing: Microsoft Places for GCC High, with its PowerShell feature switches, admin roles and the April 2026 per-space licensing."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: work-location sharing is each user's choice; added the Teams Premium transition until renewal and the per-space licence split for rooms and desks; PowerShell 7.4.0 minimum; Room finder remains the default; removed the audit-search step."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 93 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 93
  confirmed: 92
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "7771379cacb31e9110b70bbfc831feaf"
---

## What's changing

Microsoft plans to make Microsoft Places available to GCC High tenants. Places is Microsoft's workplace app for flexible work: Microsoft Learn describes its features as "embedded directly in Microsoft Teams and Outlook", and they include work plans (a schedule of when each person plans to be in the office), workplace presence, in-person events, room and workspace booking, Places finder and Places analytics.

Microsoft Learn describes Places as a single product and gives no GCC High–specific behaviour at the time of writing (November 2026), so what follows is the documented behaviour of Places, which the roadmap item says is coming to GCC High. The Set-PlacesSettings reference says the Places app setting (`EnablePlacesWebApp`) "is ON for all users in your tenant" by default, and the page on turning Places off says Places "may be automatically available through your Microsoft 365 subscription". Building experiences and Places finder "are not automatically enabled for newly onboarded tenants", and analytics is off by default. Most features depend on a hierarchy of buildings, floors, rooms, workspaces and desks that an admin has to set up.

The roadmap item is **In development**, release phase General Availability, targeted for **December CY2026**, for the Desktop and Web platforms, and lists GCC High as its only cloud.

## Why it matters

For GCC High tenants this is a new data flow between colleagues: work plans and workplace presence exist so that coworkers can see when someone plans to be in the office and who is in that day, for users who choose to share their work location in Teams and Outlook calendar settings. In organisations handling Controlled Unclassified Information, staff whereabouts can itself be sensitive, so expect security and works-council-style questions before users start setting work plans.

If nobody acts, the documented default means the Places app reaches every user, while building-level features stay dark until someone builds the directory. The controls are not in an admin centre: they are Set-PlacesSettings parameters in the MicrosoftPlaces PowerShell module, and a change can take up to 12 hours to take effect, so decide and script the settings before the December target rather than after users find the app.

## Risk assessment

**Data exposure**
- Users choose whether to share their work location with coworkers in Teams and Outlook calendar settings; when sharing is enabled, coworkers can see manually or automatically set work-location signals ([Places FAQ](https://learn.microsoft.com/microsoft-365/places/frequently-asked-questions)). `EnablePlacesWebApp` and `EnableBuildings` govern the app and building-level locations; Microsoft points to mailbox calendar configuration for whether users can make their work location visible to others.
- Places analytics shows planned versus actual occupancy of buildings, rooms and desk pools. It is off by default (`SpaceAnalyticsEnabled`), and Microsoft recommends enabling it only for users who need occupancy information.

**Security & identity**
- The Places Administrator role can enable and disable Places features and change the whole Places directory; Global Administrator and Exchange Administrator can also manage all aspects of Places. Microsoft recommends the least privileged role.
- Scoping to a group needs a mail-enabled security group; Microsoft warns a standard security group may not work as expected.

**Autonomy & actions**
- Autorelease frees reserved rooms and desks when unoccupied, on spaces with a space licence. Copilot room booking can rebook rooms when meetings change, for users with a Microsoft Copilot licence. Whether Copilot room booking is part of the GCC High release is not yet published.

**Change & support**
- Users with mailboxes on Exchange on-premises cannot use the Places app or Places finder; work location changes they make in Teams are visible only to themselves. Expect help-desk calls in hybrid tenants.
- Microsoft says it is evaluating deprecation of Room finder and recommends adopting Places finder. The Places FAQ also says Room finder remains available and continues to be the default experience in the Outlook and Teams calendar.

## Cost and licensing

**User licence.** Microsoft's [Places licence page](https://learn.microsoft.com/microsoft-365/places/what-is-places/license-requirements) lists Microsoft 365 Business Basic, Standard and Premium; Microsoft 365 or Office 365 E1, E3 and E5; Education A1, A3 and A5; frontline F1 and F3; and Teams Enterprise, Essentials and standalone. Core features (work plans, workplace presence, room and workspace booking, Places finder, Places explorer, analytics with limitations) come with those plans. The page names no government plans, so which GCC High plans carry Places is not yet published.

**Space licences.** As of April 1, 2026, individual desk booking, autorelease and occupancy reports moved to a per-space model: rooms need an MTR, MTSS or MTSS-SS licence, and individual desks an MTSS or MTSS-SS licence. Customers with active Teams Premium subscriptions continue to enjoy premium features until renewal. Microsoft says three free MTSS-SS licences come with each purchased MTSS licence, except where the MTSS licence is used on a common area phone.

**AI features.** Quick book and Copilot room booking need a Microsoft Copilot licence.

**Indirect costs.** Building the buildings-floors-desks hierarchy, floor plans and the PowerShell 7 tooling is admin and facilities time.

## Scope

- **Clouds:** GCC High, per the roadmap item.
- **Platforms:** Desktop and Web per the record. Learn says the Places app is on the web and on desktop and mobile as a connected app inside Outlook, Teams and the Microsoft 365 app; work plans and Places finder also appear in the calendar in new Outlook and Teams.
- **Users:** holders of the plans on the licence page; users need a mailbox in Exchange Online.
- **Admin roles:** Places Administrator (assigned in the Microsoft 365 admin center or Microsoft Entra), Places Building Administrator and Places Desk Administrator (assigned in Exchange Online). Running Set-PlacesSettings needs the Exchange MailRecipients and Places TenantPlacesManagement roles.
- **Prerequisites:** PowerShell 7.4.0 or later and the latest MicrosoftPlaces module; a buildings and floors hierarchy for most features.

## Governance guidance

### Before rollout
- Decide with security and HR whether GCC High users should share work plans and in-office presence, and whether the Places app should be on for everyone or nobody at arrival.
- Assign the Places Administrator role to the facilities or workplace admins who will run Places, instead of using Global Administrator or Exchange Administrator.
- Install PowerShell 7.4.0 or later and the latest MicrosoftPlaces module, and confirm the admin running Set-PlacesSettings holds the MailRecipients and TenantPlacesManagement roles.
- Create mail-enabled security groups for pilot users of Places finder and for analytics viewers.

### At rollout
- Run `Get-PlacesSettings -ReadFromPrimary` to see the settings your tenant actually received.
- Set `EnablePlacesWebApp` to the value you decided; allow up to 12 hours for it to take effect.
- Turn on `EnableBuildings` and `PlacesFinderEnabled` only after the buildings and floors hierarchy is in place, starting with the pilot group.
- Tell users with on-premises mailboxes that Places features will not work for them.

### After rollout
- Limit `SpaceAnalyticsEnabled` to facilities managers who need occupancy data.
- Buy space licences only for rooms and desks that need desk booking, autorelease or occupancy reports.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can open the Places app on the web and inside Outlook, Teams and the Microsoft 365 app</strong><br><small>Tenant</small><br><small class="controls__note">On by default for all users. Needs MailRecipients and TenantPlacesManagement roles; up to 12 hours to take effect.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlacesSettings -EnablePlacesWebApp 'Default:false'</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users see buildings in work plans, workplace presence and Places finder</strong><br><small>Tenant</small><br><small class="controls__note">Not automatically enabled for newly onboarded tenants; has effect only once buildings and floors are configured.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlacesSettings -EnableBuildings 'Default:true'</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can use Places finder and book individual desks</strong><br><small>Group</small><br><small class="controls__note">The only setting the reference documents for OID scoping; use a mail-enabled security group, up to 20 OIDs.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlacesSettings -PlacesFinderEnabled 'Default:false,OID:[OID]@[TID]:true'</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can see Places analytics occupancy data</strong><br><small>Tenant</small><br><small class="controls__note">Off by default for all users. Buildings are enabled for analytics separately.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlacesSettings -SpaceAnalyticsEnabled 'Default:false'</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a user keeps the Places Enhanced service plan</strong><br><small>User</small><br><small class="controls__note">$addLicenses carries DisabledPlans with plan ID f8566154-2a62-48cb-a0ab-d4d25be26e51. Re-apply after each new Teams Premium assignment.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and apps › Apps › Places Enhanced <a href="https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses $addLicenses -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/turn-off-places" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who holds the Places Administrator role that enables and disables Places features</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets principalId and roleDefinitionId (the Places Administrator role). Global and Exchange Administrators can also manage all of Places.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Roles › Role assignments › Exchange › Places Administrator › Assigned <a href="https://learn.microsoft.com/microsoft-365/places/day-to-day-admin/enable-others-as-places-admins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Feature switches are documented only as Set-PlacesSettings parameters; Microsoft Learn documents no admin centre page for them at the time of writing (November 2026). The Set-PlacesSettings reference says OID-based scoping "is currently supported only for the -PlacesFinderEnabled setting", and a maximum of 20 OIDs can be used. Two other Places pages disagree: the turn-off page tells admins to turn off `EnablePlacesWebApp` and `EnableBuildings` for specific users, and the analytics page gives a group-scoped `SpaceAnalyticsEnabled` example. Test group scoping before relying on it.

Turning Places off for the whole organisation takes two steps, per Microsoft: set `EnablePlacesWebApp` and `EnableBuildings` to `Default:false`, then disable the Places Enhanced service plan, which is added automatically whenever Teams Premium is assigned. Whether users can show their work location to others is a separate mailbox calendar setting; see [Set-MailboxCalendarConfiguration](https://learn.microsoft.com/powershell/module/exchange/set-mailboxcalendarconfiguration). Admin changes to the Places directory are recorded in the Microsoft 365 audit log as Places Directory activities ([/concepts/auditing/](/concepts/auditing/)).

## Open questions

- Will the `EnablePlacesWebApp` default be on for GCC High tenants when Places arrives, as Learn documents for Places today? Watch Message center for a GCC High rollout post.
- Which GCC High plans entitle users to Places core features, and are MTR and MTSS space licences available for desk booking in GCC High? Watch the Places licence requirements page.
- Are Places analytics, Copilot room booking and occupancy-sensor connections included in the GCC High release?
- Does group scoping work for `EnablePlacesWebApp` and `EnableBuildings`, given the conflicting Learn pages?

<!-- rationale
risk: Medium. Users who share their work location let colleagues see when they are in the office; the Places app setting is documented as on by default, and the switches that limit it are PowerShell-only settings an admin has to set.
cost: Low. Core Places features come with the Microsoft 365, Office 365 and Teams plans Microsoft lists; desk booking, autorelease and occupancy reports need space licences (active Teams Premium subscriptions keep premium features until renewal), and which GCC High plans carry Places is not yet published.
impact: Medium. Users may see the Places app in Outlook, Teams and the Microsoft 365 app, but buildings, Places finder and analytics are off until an admin configures them, so most of the change is felt by facilities teams and admins.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: cost; rationale: cost; Cost and licensing / consistency: A low cost rating represents the briefing's documented space and Copilot licence costs. | Found: cost: "low" Cost scale: low = indirect cost only: admin time, communications, training. Page: rooms need an MTR, MTSS or MTSS-SS licence, and individual desks an MTSS or MTSS-SS licence. Page: Quick book and Copilot room booking need a Microsoft Copilot licence. | Fix: Set cost to 'medium' and replace its rationale with 'Medium. Core Places features are included in the listed user plans, but individual desk booking, autorelease, occupancy reports and AI features can require additional licences. GCC High entitlement is not yet published.' This keeps the stated mixed licensing and the documented potential direct costs consistent with the assessment scale.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[5].ui / admin-path: Roles > Role assignments > Exchange > Places Administrator > Assigned reaches the Places Administrator assignment list in Microsoft 365 admin center. | Found: Go to Roles > Role assignments. Under the Exchange tab, select Places Administrator, then go to the Assigned tab. Add users to the role. | Fix: Extend controls[5].ui.path and the rendered path to 'Roles > Role assignments > Exchange > Places Administrator > Assigned > Add users'. The present path stops on the correct assignment list before the documented action that changes membership. | Source: https://learn.microsoft.com/microsoft-365/places/day-to-day-admin/enable-others-as-places-admins
- [supported, minor] licensing.notes; Cost and licensing; rationale: cost / licensing: Active Teams Premium subscriptions keep Places premium features until renewal. | Found: To ensure a smooth transition, customers with active Teams Premium subscriptions continue to enjoy premium features until renewal. | Fix: Replace the transition sentence and corresponding licensing notes/rationale with 'Customers who purchased Teams Premium before April 1, 2026 can continue using Places premium capabilities until renewal.' The cited FAQ gives this narrower eligibility condition: https://learn.microsoft.com/microsoft-365/places/frequently-asked-questions. | Source: https://learn.microsoft.com/microsoft-365/places/what-is-places/license-requirements
-->
