---
title: "Microsoft Teams: desk utilisation analytics in the Teams Rooms Pro Management portal"
slug: "microsoft-teams-analytics-for-desk-utilization-on-teams-pro-management-portal"
roadmapId: 570648
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans utilisation analytics for bookable desks in the Teams Pro Management portal. A desk needs an associated peripheral and a Shared Space licence to report. The default state is not stated."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "add-on"
  notes: "Per the roadmap item and MC1490906, a desk needs a Microsoft Teams Shared Space or Shared Space - Single Space licence for analytics. Microsoft Learn lists $8 per desk per month for the paid licence and $0 for single-space licences."
audiences: ["m365-admin","finops","service-owner"]
tags: ["teams","analytics","usage-reports","licensing","telemetry","powershell"]
sources:
  - title: "Microsoft 365 Roadmap 570648"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570648"
    kind: "roadmap"
  - title: "MC1490906: (Updated) Microsoft Teams: Analytics for desk utilization in Teams Pro Management portal"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1490906"
    kind: "message-center"
  - title: "Setting up Bookable Desks in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/rooms/bookable-desks"
    kind: "learn"
  - title: "Microsoft Teams Shared Space licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/teams-shared-device-license"
    kind: "learn"
  - title: "Buy and set up Microsoft Teams Shared Space licenses for desks"
    url: "https://learn.microsoft.com/microsoft-365/places/what-is-places/buy-set-up-teams-shared-space-licenses-desks"
    kind: "learn"
  - title: "Role-based access control in the Microsoft Teams Rooms Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac"
    kind: "learn"
  - title: "Add peripherals to inventory"
    url: "https://learn.microsoft.com/microsoftteams/rooms/get-peripheral-information"
    kind: "learn"
  - title: "Bring Your Own Device Rooms in Teams Pro Management portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/bring-your-own-device"
    kind: "learn"
  - title: "Assign Teams add-on licenses to users"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/assign-teams-add-on-licenses"
    kind: "learn"
  - title: "Set-PlacesSettings"
    url: "https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings"
    kind: "learn"
  - title: "Get-PlacesSettings"
    url: "https://learn.microsoft.com/microsoft-365/places/powershell/get-placessettings"
    kind: "learn"
  - title: "Configure buildings and floors"
    url: "https://learn.microsoft.com/microsoft-365/places/get-started/quick-setup-buildings-floors"
    kind: "learn"
  - title: "user: assignLicense"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which desks are licensed to produce analytics"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > desk account > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/places/what-is-places/buy-set-up-teams-shared-space-licenses-desks"
    api:
      kind: "powershell"
      call: "Connect-Graph -Scopes User.ReadWrite.All, Organization.Read.All; Set-MgUserLicense -UserId $user -AddLicenses $addLicenses -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/assign-teams-add-on-licenses"
    note: "MCA: buy under Marketplace (billing account administrator or billing profile contributor). EA: Volume Licensing Center. The PowerShell page covers Teams add-on licences generally and does not name Shared Space."
  - governs: "Whether peripheral data is ingested for BYOD rooms and desks"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > General > BYOD Rooms and Desk management"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/bring-your-own-device"
    api: null
    note: "Enabled by default per Learn. The portal setting controls peripheral-data ingestion; Microsoft says disabling it stops any BYOD room or desk reports and hides inventory devices. General control, not a dedicated analytics switch."
  - governs: "Who can view portal reports and manage inventory"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > Roles"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac"
    api: null
    note: "Create or edit roles: Global Administrator, Teams Administrator or Teams Rooms Pro Manager. Assign roles: those, or a custom role with role management permissions. Administrative-unit-scoped Teams admins cannot open the portal."
  - governs: "Which peripherals are linked to each desk"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Planning > Inventory > Devices > Import"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/get-peripheral-information"
    api: null
    note: "Run the downloaded Get-TeamsBYODSpaceDevices.ps1 script from its directory to collect peripheral information, then import the prepared file through the portal to update desk associations."
  - governs: "Whether Teams clients send peripheral and desk usage data"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CSTeamsBYODAndDesksPolicy -Identity <name> -DeviceDataCollection Enabled; Grant-CSTeamsBYODAndDesksPolicy -PolicyName <name> -Identity <user>"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/bookable-desks"
    note: "Needs MicrosoftTeams 6.5.0 or later. Controls the peripheral-data feed Microsoft says is required to generate Bookable Desks reports. General collection control, not a dedicated analytics switch. Off by default in government clouds."
  - governs: "Whether individual desks appear in the portal (enableBuildings)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlacesSettings -EnableBuildings 'Default:true'"
      docs: "https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings"
    note: "Set needs the Exchange MailRecipients and Places TenantPlacesManagement roles. Read-only check: Get-PlacesSettings -ReadFromPrimary. By default, buildings are not visible across Microsoft Places experiences."
  - governs: "Dedicated switch to turn the new desk analytics on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "No such control is documented at the time of writing (November 2026); the rows above are the nearest existing controls."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-24"
roadmapModified: "2026-10-28T23:04:31"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item: rollout now targeted early December 2026 to mid-January 2027 per MC1490906."
  - date: "2026-11-16"
    note: "Corrected licence purchase routes (MCA and EA) and portal role requirements, added the portal's BYOD Rooms and Desk management setting and the enableBuildings check, and added a PowerShell route for licence assignment. Rollout dates are unchanged."
  - date: "2026-11-17"
    note: "Corrected two command lines in the controls table: the licence assignment call now includes -RemoveLicenses @(), and the enableBuildings change now uses -EnableBuildings 'Default:true'."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 80 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the peripheral script and Get-PlacesSettings commands in the controls table, and replaced the claim that Microsoft has not said whether the portal cloud-data setting and DeviceDataCollection affect desk reports with what the BYOD Learn page states."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 94 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 111 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected the portal path for BYOD Rooms and Desk management, removed the peripheral script as an automation call, switched the enableBuildings call to Set-PlacesSettings and replaced the unsupported onboarding-date default with Learn's wording."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 103 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 5
verification:
  status: "held"
  date: "2026-11-24"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 103
  confirmed: 100
  unconfirmed: 0
  contradicted: 3
  attempts: 2
  hash: "82022ca296224d16a4e780f0a41239e3"
---

## What's changing

Microsoft plans to add utilisation analytics for Teams bookable desks to the Teams Pro Management portal, in the same way the portal already reports on meeting rooms. Microsoft's notice MC1490906 says the insights cover desk utilisation, reservations, occupancy and peak usage patterns, with desk-specific filters including location and desk mode. Microsoft Learn calls the portal the Teams Rooms Pro Management portal.

For analytics to be enabled, the roadmap item and MC1490906 both say a desk must have one or more peripheral devices associated and be licensed with a Microsoft Teams Shared Space or Microsoft Teams Shared Space - Single Space licence. The notice's action section asks for those two conditions and names nothing else. It sets no act-by date.

The roadmap item is In development, targeted for December CY2026, General Availability, Worldwide (Standard Multi-Tenant), Web. MC1490906, updated 28 October 2026, says rollout begins in early December 2026 (previously early November) and is expected to complete by mid-January 2027 (previously mid-December 2026).

Microsoft Learn already documents a Desks usage report in the portal and describes the desk usage reports as currently in preview. Microsoft has not said how the planned analytics relate to that report. Its metrics count only 8:00 AM to 5:00 PM on weekdays.

## Why it matters

This gives workplace and IT teams a measured view of which desks are used, and ties that view to a licensing decision. Because analytics need a licensed desk with an associated peripheral, the desks you licence and instrument decide which desks you can see. Expect an unlicensed or uninstrumented desk to be a blind spot in the reports.

If nobody acts, the feature may arrive between December 2026 and mid-January 2027 and show nothing for those desks. Decide before then which buildings you want measured and what the licences will cost, and confirm that the existing device data collection is not switched off for the users who sit at those desks.

## Risk assessment

**Data exposure**

- The reports draw on desk reservations and on peripheral signals the Teams desktop client sends to the service. The bookable desks page says no personally identifiable data is collected. Anyone with a portal role that includes reports can see the results; the roles are a row in the controls table.

**Security & identity**

- Portal access is role-based. Site Lead has access to reports, and the Microsoft Entra roles Global Administrator, Teams Administrator, Teams Devices Administrator and Global Reader are listed with portal access. A Teams Administrator or Teams Devices Administrator scoped to an administrative unit cannot open the portal.

**Autonomy & actions**

- No action is documented: the roadmap item describes reporting only, and nothing in the sources says the analytics release, reassign or change a desk.

**Change & support**

- Missing data is the likely support issue. A peripheral is not supported if its serial number cannot be collected, is not unique or contains special characters, and individual desks do not appear in the portal if enableBuildings is off for the tenant.
- Microsoft says disabling the BYOD Rooms and Desk management setting stops any BYOD room or desk reports. It also says DeviceDataCollection controls the peripheral-data feed that is required to generate Bookable Desks reports, and that disabling it for some users stops BYOD and desk information flowing to the service. Both are general controls, not dedicated analytics switches, so check reports after any change.

## Cost and licensing

A desk needs a Microsoft Teams Shared Space or Microsoft Teams Shared Space - Single Space licence for analytics, according to the roadmap item and MC1490906. The Places licensing page says each desk needs exactly one licence to unlock reservation, auto-release/check-in and analytics.

The Places licensing page lists the paid Shared Space licence at $8 per desk per month, with three Single Space licences at $0 per paid licence, an effective desk rate of about $2 per desk per month. Costs shown exclude taxes, fees and other charges. The single-space licences are not provisioned automatically: you acquire them yourself, and they are for desks, not Teams devices.

How you buy depends on your agreement. For a Microsoft Customer Agreement (MCA), the Places page documents Marketplace in the Microsoft 365 admin center and needs billing account administrator or billing profile contributor permissions. For an Enterprise Agreement (EA), it says to use the Volume Licensing Center instead. The Teams Shared Space licensing page separately says the Single Space licence is only available for purchase with an MCA billing account, so confirm the route with your reseller.

Microsoft Learn's bookable desks page says the desk usage reports are currently in preview and do not require a licence to access. That statement and the roadmap item's licensing condition are both Microsoft's, and Microsoft has not reconciled them. No separate meter for the analytics is documented at the time of writing (November 2026). Indirect costs are admin time for peripheral collection and licence assignment, and procurement lead time.

## Scope

The roadmap item lists Microsoft Teams, Worldwide (Standard Multi-Tenant), the Web platform and General Availability. MC1490906 gives a rollout window of early December 2026 to mid-January 2027.

The analytics apply to desks. Microsoft Learn describes individual desks and desk pools, and recommends individual desks for more detailed utilisation analytics. Auto-association of peripherals is supported for individual desks only. Individual desks also need enableBuildings enabled for the tenant to appear in the portal.

Portal roles and licence purchase need the permissions listed in the controls table.

## Governance guidance

### Before rollout

- Decide which buildings and desks you want measured, and count them against the one-paid-to-three-single-space licence ratio before ordering.
- Confirm which agreement (MCA or EA) your organisation buys on, and who holds the billing permissions the matching purchase route needs.
- Check that enableBuildings is on for the tenant, because individual desks do not appear in the portal otherwise.
- Review who holds Teams Rooms Pro Manager, Site Lead and the Entra roles with portal access, and add portal roles through Settings > Roles where needed.

### At rollout

- Assign a Shared Space or Shared Space - Single Space licence to each desk account in the Microsoft 365 admin center.
- Associate a peripheral with each desk by importing a PERIPHERALS file or by letting the portal auto-associate it, and verify the peripheral reports a unique serial number.
- Confirm that BYOD Rooms and Desk management is enabled in the portal and that DeviceDataCollection is not disabled for the users who sit at measured desks.

### After rollout

- Check the Desks usage report for desks with no data and work back to a missing licence, peripheral association or disabled data collection.
- Compare portal figures with Places or Teams bookings for a sample of desks, since the report window is 8:00 AM to 5:00 PM on weekdays.
- Reconcile assigned licences against desks that report, and release licences from desks you retire.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which desks are licensed to produce analytics</strong><br><small class="controls__note">MCA: buy under Marketplace (billing account administrator or billing profile contributor). EA: Volume Licensing Center. The PowerShell page covers Teams add-on licences generally and does not name Shared Space.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › desk account › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/places/what-is-places/buy-set-up-teams-shared-space-licenses-desks" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Connect-Graph -Scopes User.ReadWrite.All, Organization.Read.All; Set-MgUserLicense -UserId $user -AddLicenses $addLicenses -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/assign-teams-add-on-licenses" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether peripheral data is ingested for BYOD rooms and desks</strong><br><small>Tenant</small><br><small class="controls__note">Enabled by default per Learn. The portal setting controls peripheral-data ingestion; Microsoft says disabling it stops any BYOD room or desk reports and hides inventory devices. General control, not a dedicated analytics switch.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › General › BYOD Rooms and Desk management <a href="https://learn.microsoft.com/microsoftteams/rooms/bring-your-own-device" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can view portal reports and manage inventory</strong><br><small>Tenant</small><br><small class="controls__note">Create or edit roles: Global Administrator, Teams Administrator or Teams Rooms Pro Manager. Assign roles: those, or a custom role with role management permissions. Administrative-unit-scoped Teams admins cannot open the portal.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › Roles <a href="https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which peripherals are linked to each desk</strong><br><small class="controls__note">Run the downloaded Get-TeamsBYODSpaceDevices.ps1 script from its directory to collect peripheral information, then import the prepared file through the portal to update desk associations.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Planning › Inventory › Devices › Import <a href="https://learn.microsoft.com/microsoftteams/rooms/get-peripheral-information" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Teams clients send peripheral and desk usage data</strong><br><small>User</small><br><small class="controls__note">Needs MicrosoftTeams 6.5.0 or later. Controls the peripheral-data feed Microsoft says is required to generate Bookable Desks reports. General collection control, not a dedicated analytics switch. Off by default in government clouds.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CSTeamsBYODAndDesksPolicy -Identity &lt;name&gt; -DeviceDataCollection Enabled; Grant-CSTeamsBYODAndDesksPolicy -PolicyName &lt;name&gt; -Identity &lt;user&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/bookable-desks" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether individual desks appear in the portal (enableBuildings)</strong><br><small>Tenant</small><br><small class="controls__note">Set needs the Exchange MailRecipients and Places TenantPlacesManagement roles. Read-only check: Get-PlacesSettings -ReadFromPrimary. By default, buildings are not visible across Microsoft Places experiences.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlacesSettings -EnableBuildings 'Default:true'</code> <a href="https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Dedicated switch to turn the new desk analytics on or off</strong><br><small>Tenant</small><br><small class="controls__note">No such control is documented at the time of writing (November 2026); the rows above are the nearest existing controls.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No dedicated switch for the new desk analytics is documented at the time of writing (November 2026), so the practical levers are licensing, peripheral association, the portal's cloud data setting and the Teams client policy. The portal setting controls peripheral-data ingestion, and Microsoft says disabling it stops any BYOD room or desk reports. DeviceDataCollection controls the peripheral-data feed that Microsoft says is required to generate Bookable Desks reports. Both are general controls, not dedicated analytics switches.

For portal roles, the RBAC page says creating, editing or assigning roles needs Global Administrator or Teams Administrator in Microsoft Entra ID, or Teams Rooms Pro Manager in the portal. It adds that assigning roles also works with a custom role that has role management permissions.

The DeviceDataCollection policy needs MicrosoftTeams module 6.5.0 or later, and the bookable desks page says it is off by default for government clouds. The enableBuildings check and change use the Places cmdlets, which need the Exchange or Places TenantPlacesManagement roles named in the table.

## Open questions

- Is the new analytics view the same as the Desks usage report that Learn describes as in preview, or a separate release? Watch MC1490906 and the bookable desks page on Learn.
- Do administrators need a licence to view the reports (Learn's FAQ says the preview reports need none), or only the desks (the roadmap item)?
- Will desks without a licence or peripheral show as unused or be omitted, and will the location and desk mode filters be documented on Learn?
- Is there a tenant setting or API specific to desk analytics, or an export beyond the CSV that Learn describes for the Desks usage report?
- Which default state applies on arrival?

<!-- rationale
risk: Low. This adds admin-facing reports on desk use and nothing in the roadmap item or notice says it changes any desk or user; the exposure that matters is the existing Teams client data collection that feeds bookable desks.
cost: Medium. The roadmap item says each desk needs a Microsoft Teams Shared Space or Shared Space - Single Space licence; Microsoft Learn lists the paid licence at $8 per desk per month and gives three $0 single-space licences per paid one.
impact: Low. Administrators and portal role holders see the analytics; the roadmap item and Microsoft's notice describe no change for people who book desks.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[2].api; rendered controls table / absence: No API or automation is documented for controlling who can view portal reports and manage inventory. | Found: Create a role assignment for the directory provider: POST /roleManagement/directory/roleAssignments. Example 1: Create a role assignment with tenant scope: POST https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignments | Fix: Narrow controls[2].governs to 'Portal-specific role assignments' and narrow its automation absence to 'No API for portal-specific role assignments is documented'. The broad existing wording includes Entra roles, which the cited RBAC page says grant portal access and Microsoft Graph can assign; do not describe those assignments as having no automation. | Source: https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0
- [contradicted, blocker] Governance controls: final paragraph, change permissions / role: The Places settings check and change need the Exchange or Places TenantPlacesManagement roles named in the table. | Found: You must have both the Exchange MailRecipients role and the Places TenantPlacesManagement role. | Fix: Replace the final sentence with 'Get-PlacesSettings requires either Exchange Admin or Places TenantPlacesManagement; Set-PlacesSettings requires both Exchange MailRecipients and Places TenantPlacesManagement.' Sources: https://learn.microsoft.com/microsoft-365/places/powershell/get-placessettings and https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings. | Source: https://learn.microsoft.com/microsoft-365/places/powershell/set-placessettings
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; rendered controls table; Governance guidance: Before rollout / admin-path: Settings > Roles reaches the portal role management page. | Found: In the left navigation of the Microsoft Teams Rooms Pro Management portal, expand Settings > Roles. Select the role you want to assign. In the role pane, select Assignments > Add assignment. | Fix: For adding portal assignments, extend the path to 'Settings > Roles > role > Assignments > Add assignment'. Keep the advice limited to portal roles; the cited page directs additional Entra built-in assignments to Microsoft Entra admin center. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist's instruction to check the Desks usage report is represented in the controls table. | Found: After rollout: 'Check the Desks usage report for desks with no data'; the controls table has licensing, ingestion, roles, associations, client collection, enableBuildings and a dedicated-switch absence, but no report row. | Fix: The 'Check the Desks usage report' checklist step has no corresponding controls row. Do not add a row in this correction.
-->
