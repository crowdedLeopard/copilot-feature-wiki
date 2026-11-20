---
title: "Microsoft Teams Rooms on Windows: Standard and Basic licensed devices in the Pro Management portal"
slug: "microsoft-teams-standard-and-basic-licensed-teams-rooms-on-windows-in-the-pro-management-p"
roadmapId: 482539
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "The Teams Rooms Pro Management portal now supports and enforces licences for Teams Rooms on Windows devices with a Standard or Basic licence. Check each room's licence status; Microsoft has not stated a default or any consequence for unlicensed devices."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Teams and Surface Devices"]
targetDate: "May CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "The roadmap item names no separate licence. Learn says every Teams Rooms device needs a Teams Rooms licence (Basic or Pro, legacy licences also valid); Basic is described as at no additional cost. No price for this feature is stated in the roadmap item."
audiences: ["m365-admin","service-owner","finops"]
tags: ["teams","teams-rooms","pro-management-portal","licensing","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 482539"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=482539"
    kind: "roadmap"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Microsoft Teams Rooms Pro Management"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-management"
    kind: "learn"
  - title: "Manage your resource account and device inventory"
    url: "https://learn.microsoft.com/microsoftteams/rooms/inventory"
    kind: "learn"
  - title: "How to create and configure resource accounts for Teams Rooms and panels"
    url: "https://learn.microsoft.com/microsoftteams/rooms/create-resource-account"
    kind: "learn"
  - title: "user: assignLicense"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense"
    kind: "learn"
  - title: "Manage devices in Teams"
    url: "https://learn.microsoft.com/microsoftteams/devices/device-management"
    kind: "learn"
videos: []
related: ["microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management","microsoft-teams-analytics-for-desk-utilization-on-teams-pro-management-portal","microsoft-teams-building-level-insights-on-the-pro-management-portal-recommended-actions-p"]
controls:
  - governs: "Which Teams Rooms licence a room's resource account holds"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > room account > Licenses and apps"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/create-resource-account"
    api:
      kind: "graph"
      call: "POST /v1.0/users/{id | userPrincipalName}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense"
    note: "The request body carries addLicenses and removeLicenses. On the page, the Microsoft Teams Rooms Pro or Basic box is ticked in Licenses and apps."
  - governs: "Licence status of each device in the Pro Management portal"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Planning > Inventory"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/inventory"
    api: null
    note: "Read-only view: the License Type column shows Pro, Premium, Basic, Standard, Syncing or Unlicensed. It does not assign a licence."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: licence status, the licence-assignment control and the open questions on enforcement and Basic and Standard functionality."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 61 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 59
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "0408f7f31f02d66dc616d0a0453fbff6"
---

## What's changing

The Teams Rooms Pro Management portal now supports, and enforces licences for, devices running Teams Rooms on Windows that hold a Standard or Basic licence. The roadmap item says IT admins get one device management experience in the portal, with the same functionality they find in the Teams admin center for that licence type.

The roadmap item does not list which functions Standard or Basic devices get in the portal, and it does not say what enforcement does to a device that lacks a valid licence. Microsoft's licensing page shows a **License Type** column in the portal's Rooms and Inventory views, with categories Pro, Premium, Basic, Standard, Syncing and Unlicensed. For new devices, licence information appears 24 hours after a room reboot because of syncing.

The roadmap record gives status Launched, release phase General Availability, a target of May CY2025, platform Teams and Surface Devices, and clouds Worldwide (Standard Multi-Tenant), GCC and GCC High. Microsoft's Pro Management overview says the service supports all Microsoft clouds except DoD and Office 365 operated by 21Vianet.

## Why it matters

If you run Teams Rooms on Windows devices on Basic or legacy Standard licences, the portal is now meant to check those licences, so licence housekeeping becomes part of device management. Microsoft has not stated what happens on arrival or if nobody acts, and no source here says that existing behaviour changes, so the practical step is to read the licence status of each room before it surfaces as a problem.

The pages also disagree in places. Microsoft's licensing page lists remote configuration and device analytics as Pro-only and notes that, from October 2, 2023, devices without Pro or Premium licences lose access to Pro Management capabilities. The roadmap item says Standard and Basic devices now get the same functionality as the Teams admin center for that licence type. Treat the licensing page and the roadmap item as two statements to reconcile, not one rule.

## Risk assessment

**Data exposure**
- The roadmap item adds no new data source. Learn says the Pro Management service monitors devices, collects device data and allows Microsoft to remotely access and manage room devices, and that it does not access the live content of a meeting. Learn does not separately describe this for Standard and Basic devices.

**Security & identity**
- Licence checks tie a device's status to the licence on its resource account. Learn warns that changing the account on a device needs a valid licence on the new account, and that the 30-day grace period does not apply when an expired account enrols a new device or replaces the account on an existing one.
- Learn says Microsoft Entra Conditional Access policies for Teams Rooms are available with Teams Rooms Pro and not listed for Basic.

**Autonomy & actions**
- Learn's overview of the Pro Management service describes update orchestration by customer-configurable deployment rings. The roadmap item does not say which actions Standard or Basic devices get, so confirm in the portal before relying on any.

**Change & support**
- A device shown as Unlicensed means it lacks a Pro, Premium, Basic or Standard licence. Learn notes that incorrect Unlicensed status can follow account sign-out or improper sign-in on the device.
- Switching from a legacy licence to Basic or Pro can take up to 48 hours to become active.

## Cost and licensing

The licence a room needs is a Teams Rooms licence. Learn says a shared meeting device requires a Teams Rooms license, and that Teams Rooms devices should only be assigned Teams Rooms Basic or Teams Rooms Pro licences, with legacy licences also valid. Per-user Microsoft 365 suite licences are not authorised for shared meeting devices.

Learn describes Teams Rooms Basic as providing core experiences to organisations that purchase a certified Teams Rooms system at no additional cost, up to 25 Basic licences per organisation; further systems need Pro. Standard and Premium legacy licences can be used until their expiry date and do not transition automatically; on expiry, a Pro (recommended) or Basic licence has to be purchased.

Learn's licence comparison lists the Pro Management service plan under Pro only, and lists Pro Management Portal enrollment and inventory for both Basic and Pro. The roadmap item states no separate price for this change.

## Scope

**Devices and licences:** Teams Rooms on Windows devices with a Standard or Basic licence, per the roadmap item. Learn's licence page describes Standard and Premium as legacy licences.

**Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant), GCC and GCC High, platform Teams and Surface Devices. Learn's licence table lists Basic segment availability as "Commercial, Education, Non-Pro" and Pro as including GCC, GCC-High and DoD, so check Basic availability in a government cloud before assuming it.

**Rollout:** the roadmap status is Launched with a target of May CY2025. The roadmap and the Learn pages read for this briefing state no rollout mechanics or opt-in.

## Governance guidance

### Before rollout
- Open the Pro Management portal inventory (Planning > Inventory) and read the **License Type** column for every Teams Rooms on Windows device; list those shown as Unlicensed or Syncing.
- Check the licence on each room's resource account in the Microsoft 365 admin center (Users > Active users > Licenses and apps).
- Count Basic licences against the limit of 25 that Learn states, and plan Pro for any further systems.

### At rollout
- Assign a Teams Rooms Basic or Pro licence to each resource account that shows as Unlicensed.
- Verify that a new account carries a valid licence before you change the account on a device.
- Allow up to 48 hours for a switch from a legacy licence, and 24 hours after a reboot for a new device's licence to appear.

### After rollout
- Re-read the **License Type** column after those periods and investigate any room still showing Unlicensed, including sign-in state on the device.
- Record the expiry date of each Standard or Premium legacy licence and schedule its replacement with Pro or Basic.
- Compare what the portal offers for Basic and Standard devices with the roadmap statement and Learn's licence comparison, and report the difference to your Microsoft representative.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which Teams Rooms licence a room's resource account holds</strong><br><small>User</small><br><small class="controls__note">The request body carries addLicenses and removeLicenses. On the page, the Microsoft Teams Rooms Pro or Basic box is ticked in Licenses and apps.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › room account › Licenses and apps <a href="https://learn.microsoft.com/microsoftteams/rooms/create-resource-account" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id | userPrincipalName}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Licence status of each device in the Pro Management portal</strong><br><small>Tenant</small><br><small class="controls__note">Read-only view: the License Type column shows Pro, Premium, Basic, Standard, Syncing or Unlicensed. It does not assign a licence.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Planning › Inventory <a href="https://learn.microsoft.com/microsoftteams/rooms/inventory" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Licence assignment and the portal's licence view are on different surfaces: the portal's **License Type** column shows the status, and the Microsoft 365 admin center or the Microsoft Graph call assigns the licence. Learn lists the Licensing role as Global admin or Billing admin for resource accounts; the Graph reference lists Directory Writers, License Administrator and User Administrator among the supported roles for assignLicense.

Devices can also be managed in the Teams admin center under Teams Devices > Teams Rooms on Windows. Learn's device management page says monitoring, managing and updating Teams devices is moving to the Pro Management Portal. Neither of these is shown as a control over licence enforcement.

## Open questions

- What does licence enforcement do to a Standard or Basic device that is unlicensed or whose licence has expired, and does the 30-day grace period Learn describes apply? Watch Message center and the Teams Rooms licences page.
- Which Pro Management portal functions do Basic and Standard devices get, given that Learn's comparison lists remote configuration and device analytics as Pro-only and the roadmap says the same functionality as the Teams admin center for that licence type?
- Is Basic available to GCC and GCC High tenants, given that the roadmap lists both clouds and Learn's segment availability for Basic lists Commercial, Education and Non-Pro?
- Is there a setting to defer or scope enforcement? Microsoft has not stated a default state for this change.

<!-- rationale
risk: Medium. The roadmap says the portal now enforces licences for these devices, and Learn lists an Unlicensed status for devices without a licence, so an unlicensed or mislicensed room can show up as a management problem.
cost: Low. The roadmap item states no price; Learn describes Teams Rooms Basic as at no additional cost and legacy licences as valid until expiry, so the known cost is admin time to check and fix licences.
impact: Low. Room administrators see licence status in the portal; people using the rooms are not named in the roadmap item as affected.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary / absence: Microsoft has not stated any consequence for unlicensed devices. | Found: Starting October 2, 2023 all devices without Pro or Premium licenses assigned to them will lose access to the pro management capabilities until valid licenses are assigned to them. | Fix: Replace the summary's second sentence with: "Check each room's licence status; Microsoft has not stated a default for this change." The body's existing description of the published access-loss warning and its disagreement with the roadmap can remain. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing
- [unsupported, major] Risk assessment: Data exposure / behaviour: The change adds no new data source. | Found: Searched: "Teams Rooms" "Basic" "Standard" "data collection". Read roadmap, rooms-pro-management Data collection and rooms-licensing. They do not establish that this change adds no new data source; the roadmap simply does not describe data sources. | Fix: Replace "The roadmap item adds no new data source" with "The roadmap item does not describe data sources".
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance guidance: Before rollout; Governance controls / admin-path: A room's licence is assigned in Microsoft 365 admin center under Users > Active users > room account > Licenses and apps. | Found: Go to Users > Active users, and select the room you created to open the properties panel. In the panel, select Licenses and apps. Check the box next to Microsoft Teams Rooms Pro or Microsoft Teams Rooms Basic | Fix: Complete the control path as "Users > Active users > room account > Licenses and apps > Microsoft Teams Rooms Pro or Microsoft Teams Rooms Basic". The existing path reaches the correct page but stops before the licence checkbox; "room account" is a valid selection placeholder, not an invented label. | Source: https://learn.microsoft.com/microsoftteams/rooms/create-resource-account
- [supported, minor] Governance controls / behaviour: Microsoft says monitoring, managing and updating Teams devices is moving to the Pro Management Portal. | Found: Monitoring, managing, and updating Teams devices is moving to the Pro Management Portal. | Fix: Cite https://learn.microsoft.com/microsoftteams/rooms/rooms-manage for this sentence and add it to sources. The cited device-management URL now redirects to the inventory article; the management article's search excerpt explicitly states the transition. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-manage
-->
