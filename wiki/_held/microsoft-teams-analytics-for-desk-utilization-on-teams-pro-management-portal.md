---
title: "Microsoft Teams: desk utilisation analytics in the Teams Rooms Pro Management portal"
slug: "microsoft-teams-analytics-for-desk-utilization-on-teams-pro-management-portal"
roadmapId: 570648
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans utilisation analytics for bookable desks in the Teams Pro Management portal. Desks need a peripheral and a Shared Space licence to report. No admin switch is documented, but licensing is the decision."
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
  notes: "Per the roadmap item, a desk needs a Microsoft Teams Shared Space or Shared Space - Single Space licence for analytics. The Places licensing page lists $8 per desk per month for the paid licence and $0 for single-space licences."
audiences: ["m365-admin","finops","service-owner"]
tags: ["teams","analytics","usage-reports","licensing","telemetry"]
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
videos: []
related: []
controls:
  - governs: "Which desks are licensed to produce analytics"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > desk account > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/places/what-is-places/buy-set-up-teams-shared-space-licenses-desks"
    api: null
    note: "Licences are bought under Marketplace; a billing account administrator or billing profile contributor is needed. A Graph or PowerShell route for desks is not documented there."
  - governs: "Who can view the portal reports and manage inventory"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > Roles"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac"
    api: null
    note: "Creating or assigning roles needs Global Administrator, Teams Administrator or Teams Rooms Pro Manager. Administrative-unit-scoped Teams admins cannot open the portal."
  - governs: "Which peripherals are linked to each desk"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Planning > Inventory > Devices > Import"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/get-peripheral-information"
    api:
      kind: "powershell"
      call: "Get-TeamsBYODSpaceDevices.ps1 (downloaded script) exports a PERIPHERALS file for import"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/get-peripheral-information"
    note: "Auto-association, for individual desks only, has a signal threshold under Settings > General with a minimum of two unique signals."
  - governs: "Whether Teams clients send peripheral and desk usage data"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsBYODAndDesksPolicy -Identity <name> -DeviceDataCollection Enabled|Disabled; Grant-CsTeamsBYODAndDesksPolicy"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/bookable-desks"
    note: "Needs MicrosoftTeams module 6.5.0 or later. General control: Microsoft has not confirmed it governs the new analytics. Off by default in government clouds."
  - governs: "Tenant-wide switch to turn desk utilisation analytics on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "No such control is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-28T23:04:31"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item: rollout now targeted early December 2026 to mid-January 2027 per MC1490906."
version: 1
---

## What's changing

Microsoft plans to add utilisation analytics for Teams bookable desks to the Teams Pro Management portal, in the same way the portal already reports on meeting rooms. Microsoft's notice MC1490906 says the insights cover desk utilisation, reservations, occupancy and peak usage patterns, with desk-specific filters for location and desk mode. Microsoft Learn calls the portal the Teams Rooms Pro Management portal.

For analytics to be enabled, the roadmap item and MC1490906 both say a desk must have one or more peripheral devices associated and be licensed with a Microsoft Teams Shared Space or Microsoft Teams Shared Space - Single Space licence. The notice asks administrators to meet those two conditions and names no other action.

The roadmap item is In development, targeted for December CY2026, General Availability, Worldwide (Standard Multi-Tenant), Web. MC1490906, updated 28 October 2026, says rollout begins in early December 2026 (previously early November) and is expected to complete by mid-January 2027 (previously mid-December 2026). The notice sets no act-by date.

Microsoft Learn already documents a Desks usage report in the portal and marks it as in preview, so how the planned analytics relate to that report is not stated. Its columns are Utilization, Reservations, Unplanned reservations and Reservation occupancy, and its metrics count only 8:00 AM to 5:00 PM on weekdays.

## Why it matters

This gives workplace and IT teams a measured view of which desks are used, and it ties that view to a licensing decision. Because analytics only work for licensed desks with a peripheral, the desks you licence decide which desks you can see. An unlicensed desk will be a blind spot in the reports.

If nobody acts, the portal feature may arrive between December 2026 and mid-January 2027 and show nothing for desks that lack a licence or an associated peripheral. Decide before then which buildings you want measured and what the licences will cost.

## Risk assessment

**Data exposure**

- The analytics are built from desk reservations and from peripheral signals that the Teams desktop client sends to the service. Microsoft Learn says no personally identifiable data is collected in that discovery and usage collection. The reports are visible to anyone given a role with report access in the portal.

**Security & identity**

- Access to the portal is role-based. Roles with report access include Teams Rooms Pro Manager and Site Lead, and the Microsoft Entra roles Global Administrator, Teams Administrator, Teams Devices Administrator and Global Reader. Review who holds these before analytics appear. A Teams Administrator or Teams Devices Administrator scoped to an administrative unit cannot open the portal.

**Autonomy & actions**

- No action is documented: the roadmap item describes reporting only. Nothing in the sources says the analytics release, reassign or change a desk.

**Change & support**

- Missing data is the likely support issue. A peripheral is not supported if its serial number cannot be collected, is not unique or contains special characters, and individual desks do not appear in the portal unless enableBuildings is enabled for the tenant.
- Disabling the DeviceDataCollection setting for some users stops desk information flowing to the service for them, so desk reports will under-count.

## Cost and licensing

A desk needs a Microsoft Teams Shared Space or Microsoft Teams Shared Space - Single Space licence for analytics, according to the roadmap item and MC1490906. The Microsoft Teams Shared Space licensing page says that since April 2026 individual desk booking is licensed per space, not per user, and that IT admins can view usage analytics for bookable desks in the Teams Rooms Pro Management portal.

The Places licence page lists the paid Microsoft Teams Shared Space licence at $8 per desk per month, excluding taxes, with three Single Space licences at $0 for each paid licence, an effective rate of about $2 per desk per month. The three free licences are not provisioned automatically: you acquire them yourself, and the Single Space licence is only available with a Microsoft Customer Agreement billing account. Each desk needs exactly one licence, and Single Space licences are for desks, not Teams devices.

Microsoft Learn's bookable desks page says the desk usage reports are currently in preview and do not require a licence to access. That statement and the roadmap's licensing condition are both Microsoft's, and Microsoft has not reconciled them. No separate meter or capacity charge for the analytics is documented at the time of writing (November 2026). Indirect costs are admin time to collect peripheral data and assign licences, and procurement lead time.

## Scope

The roadmap item lists Microsoft Teams, Worldwide (Standard Multi-Tenant) and the Web platform, General Availability. No other clouds are listed on the record. The rollout window in MC1490906 is early December 2026 to mid-January 2027.

Analytics apply to desks, which Learn describes as individual desks and desk pools. Learn recommends individual desks over desk pools for more detailed utilisation analytics. Prerequisites for a desk to report are an associated peripheral, which Learn says must report a unique serial number, and a Shared Space or Shared Space - Single Space licence. Auto-association of peripherals is supported for individual desks only.

Portal access depends on the roles in the controls table. Billing account administrator or billing profile contributor permissions are needed to buy licences.

## Governance guidance

### Before rollout

- Decide which buildings and desks you want measured, and count the desks against the one-paid-to-three-free licence ratio before ordering.
- Confirm that a billing administrator holds a Microsoft Customer Agreement billing account if you need the Single Space licence.
- Check that individual desks are visible in the Teams Rooms Pro Management portal, and that enableBuildings is enabled for the tenant.
- Review who holds Teams Rooms Pro Manager, Site Lead and the Entra roles with report access in the portal.

### At rollout

- Assign a Shared Space or Shared Space - Single Space licence to each desk account in the Microsoft 365 admin center.
- Associate a peripheral with each desk, by importing the PERIPHERALS file or by waiting for auto-association.
- Confirm which users the DeviceDataCollection setting applies to, because it feeds desk discovery and usage data.

### After rollout

- Check the Desks usage report for desks with no data and work back to a missing licence or peripheral association.
- Compare the portal figures with Places or Teams bookings for a sample of desks, since the 8:00 AM to 5:00 PM weekday window affects utilisation.
- Reconcile assigned licences against desks that report, and release licences from desks you retire.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which desks are licensed to produce analytics</strong><br><small class="controls__note">Licences are bought under Marketplace; a billing account administrator or billing profile contributor is needed. A Graph or PowerShell route for desks is not documented there.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › desk account › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/places/what-is-places/buy-set-up-teams-shared-space-licenses-desks" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can view the portal reports and manage inventory</strong><br><small>Tenant</small><br><small class="controls__note">Creating or assigning roles needs Global Administrator, Teams Administrator or Teams Rooms Pro Manager. Administrative-unit-scoped Teams admins cannot open the portal.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › Roles <a href="https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which peripherals are linked to each desk</strong><br><small class="controls__note">Auto-association, for individual desks only, has a signal threshold under Settings &gt; General with a minimum of two unique signals.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Planning › Inventory › Devices › Import <a href="https://learn.microsoft.com/microsoftteams/rooms/get-peripheral-information" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-TeamsBYODSpaceDevices.ps1 (downloaded script) exports a PERIPHERALS file for import</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/get-peripheral-information" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Teams clients send peripheral and desk usage data</strong><br><small>User</small><br><small class="controls__note">Needs MicrosoftTeams module 6.5.0 or later. General control: Microsoft has not confirmed it governs the new analytics. Off by default in government clouds.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsBYODAndDesksPolicy -Identity &lt;name&gt; -DeviceDataCollection Enabled|Disabled; Grant-CsTeamsBYODAndDesksPolicy</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/bookable-desks" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to turn desk utilisation analytics on or off</strong><br><small>Tenant</small><br><small class="controls__note">No such control is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No tenant-wide switch for the new desk analytics is documented, so the practical levers are licensing, peripheral association and the device data policy. Licence assignment needs Microsoft 365 admin center access, and buying licences needs billing account administrator or billing profile contributor permissions.

To create, edit or assign portal roles, an account needs Global Administrator or Teams Administrator in Microsoft Entra ID, or the Teams Rooms Pro Manager role in the portal. Microsoft recommends roles with the fewest permissions.

The DeviceDataCollection policy is described on the bookable desks page as governing automatic peripheral discovery and usage data collection from the Teams client. Microsoft has not said it also governs the new analytics, and the page notes that the policy is off by default for government clouds.

## Open questions

- Is the new analytics view the same as the Desks usage report that Learn marks as in preview, or a separate release? Watch MC1490906 and the bookable desks page on Learn.
- Do administrators need a licence to view the reports, as the Learn FAQ says they do not, or only the desks need one, as the roadmap item says?
- Will desks without a licence or peripheral show as unused or be omitted from the analytics, and will the Desk mode and Location filters be documented on Learn?
- Is there a tenant setting or API for the desk analytics, or an export beyond the CSV that Learn describes for the Desks usage report?
- What default state applies on arrival, and will the planned release reach all Worldwide tenants in the stated window?

<!-- rationale
risk: Low. This adds admin-facing reports on desk use, with no documented action taken on desks or users; the exposure that matters is the existing device data collection that feeds bookable desks.
cost: Medium. The roadmap says each desk needs a Microsoft Teams Shared Space or Shared Space - Single Space licence; the Places page lists the paid licence at $8 per desk per month, with three $0 single-space licences per paid licence.
impact: Low. Administrators and portal role holders see the analytics; people who book desks see no change documented in the roadmap item or Microsoft's notice.
-->
