---
title: "Microsoft Teams: Android device management moves to the Teams Rooms Pro Management portal"
slug: "microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management"
roadmapId: 555235
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft is moving management of Teams Android rooms, phones, panels and SIP phones from the Teams admin center to the Pro Management portal. TAC device administration starts retiring in November 2026; admins need to prepare now."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","Teams and Surface Devices"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Portal access needs one Teams Rooms Pro, Basic or Standard licence, or one Teams Shared Space licence, or at least one device already enrolled in the portal. No price or meter for this transition is published on the pages read."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-rooms","teams-phone","admin-controls","migration","monitoring","licensing","pro-management-portal","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 555235"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=555235"
    kind: "roadmap"
  - title: "MC1227622: (Updated) Transitioning Teams Android Device Management from Teams admin Center to the Teams Rooms Pro Management portal"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1227622"
    kind: "message-center"
  - title: "Transitioning Teams Android Device Management from Teams Admin Center to the Teams Rooms Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/aboutunifieddevicemanagement-pmp1"
    kind: "learn"
  - title: "Manage updates for Teams Android devices in Pro Management Portal (PMP)"
    url: "https://learn.microsoft.com/microsoftteams/rooms/androidupdatemanagementinpmp"
    kind: "learn"
  - title: "Role-based access control in the Microsoft Teams Rooms Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac"
    kind: "learn"
  - title: "Microsoft Teams Rooms Pro Management"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-management"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
videos: []
related: ["microsoft-teams-analytics-for-desk-utilization-on-teams-pro-management-portal","microsoft-teams-building-level-insights-on-the-pro-management-portal-recommended-actions-p"]
controls:
  - governs: "Who can manage devices in the portal (custom roles, device and group scope)"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > Roles > Create role"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac"
    api: null
    note: "Creating a role needs Global Administrator, Teams Administrator or Teams Rooms Pro Manager. Entra roles also grant access."
  - governs: "Tenant-wide pause of automatic Android device updates"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Updates > Update management > Android updates > Pause updates"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/androidupdatemanagementinpmp"
    api: null
    note: "Pauses for 2 weeks, then resumes. Needs Global - Grant all permission. Does not cover Admin Agent updates Microsoft calls not pausable."
  - governs: "Moving Android auto-updates from TAC phases to PMP update rings"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Updates > Ring Configuration > Rings > Provide Confirmation"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/androidupdatemanagementinpmp"
    api: null
    note: "The confirmation is irreversible and triggers a one-time mapping of devices to default PMP rings."
  - governs: "Carrying TAC tags into PMP device groups"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > Groups > Import from Teams admin center"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/aboutunifieddevicemanagement-pmp1"
    api: null
    note: "Each imported tag becomes a Group containing devices signed in with accounts associated with that tag."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-09-02T22:56:59"
changes:
  - date: "2026-11-18"
    note: "New briefing: Teams Android device management moves from the Teams admin center to the Pro Management portal, with TAC retirement dates from mid-November 2026."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 101 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 101
  confirmed: 96
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "5911e4165e9da8a0791b99231a043491"
---

## What's changing

Microsoft is moving management of Teams Android devices from the Teams admin center (TAC) to the Teams Rooms Pro Management portal (PMP). The devices covered are Teams Rooms on Android, Teams phones, Teams panels and SIP devices. Microsoft states that management of Teams Displays will not be migrated, in line with the end of support for the Teams Displays app. Microsoft's notice MC1227622 and its Learn transition guide describe PMP as the primary portal for all Teams device management once the transition is complete.

PMP provides device inventory with metadata and app information, remote actions (restart, log collection, sign-in, sign-out, provisioning and more), update management, device settings and configuration profiles, device health monitoring and SIP device management. Devices enrolled in TAC appear in PMP automatically.

MC1227622 (updated 28 October 2026, end date 2027-03-01, no act-by date) gives the timeline. PMP rollout is complete in the public cloud as of 2 July 2026 and in GCC High and DoD as of 8 October 2026; for GCC, Microsoft expects to start in November 2026 and complete by late November 2026. TAC device administration then retires in phases: SIP, Teams Rooms on Android and panels start by mid-November 2026 and finish by the end of November; phones start by early December and finish by 15 December 2026. For GCC High and DoD, TAC administration retires from early December to 15 December 2026; for GCC, from early January to 30 January 2027; phones in all three government clouds run from early January to 30 January 2027. The post says overlapping TAC capabilities (updates, settings, restart, sign-in/out, log collection, provisioning) will be deprecated by January 2027.

The roadmap record shows the item as Launched, General Availability, with a June CY2026 target, for Worldwide, GCC, GCC High and DoD on Android, desktop and Teams and Surface devices. Two details differ: the post still describes GCC as rolling out in November 2026, and Microsoft's general Teams Rooms Pro Management page lists supported clouds as all Microsoft clouds except DoD, while the transition guide lists a DoD portal address.

## Why it matters

This is a move of the day-to-day management surface for a fleet of shared devices, with fixed retirement dates for TAC. After those dates, admins cannot update these devices from TAC and may need the OEM portal to put a required Admin Agent version on a device before PMP can manage it again. A device left on an old Admin Agent version, powered off, or signed out is the realistic failure case.

Expect the change to land through help desks and device owners, not end users. Roles, groups, update rings and settings templates all have to exist in PMP, and a TAC administrator who is scoped to an Entra administrative unit cannot open the portal at all. The default state is on: Microsoft says existing devices appear in PMP automatically, so planning the retirement dates matters more than deciding whether to adopt it.

## Risk assessment

**Data exposure**

- Microsoft's general Teams Rooms Pro Management page says the service monitors devices, collects device data and allows Microsoft to remotely access and manage room devices, and that the data is specific to a room account, not an individual user. Confirm with Microsoft that the same applies to phones, panels and SIP devices moving from TAC.
- Portal access follows Microsoft Entra roles or PMP roles, so review who holds Global Reader or custom PMP roles before inventory and health data is widened to a new audience (Settings > Roles).

**Security & identity**

- Access comes from an Entra role (Global Administrator, Teams Administrator, Teams Device Administrator, Global Reader), a PMP built-in role (Teams Rooms Pro Manager, Site Lead, Site Technician) or a PMP custom role scoped to devices and device groups. Custom roles let you limit what a site technician can manage, but they have to be built in PMP.
- Administrators scoped to an Entra administrative unit cannot open PMP; a fully privileged administrator has to create custom roles for them.
- Conditional access policies assigned to Teams resource accounts that Microsoft lists as unsupported can prevent authentication, leaving a device not manageable in PMP.

**Autonomy & actions**

- Microsoft says it will accelerate the minimum Admin Agent version to Android devices at a faster cadence than your update rings, will force-update devices where auto updates were disabled permanently, and that these Admin Agent updates are not pausable. Plan for device restarts and version changes that your own rings do not schedule.
- PMP applies updates in a nightly window of 12 AM to 5 AM device local time; Microsoft says admins cannot set a different maintenance window in PMP yet.
- If you confirm PMP update rings, the confirmation is irreversible. Microsoft warns that the default mapping rolls updates out faster than TAC phases did.

**Change & support**

- Some TAC settings do not migrate: non-disruptive updates (PMP is non-disruptive by default) and the maintenance window, which Microsoft says TAC did not honour. Configuration profiles import as Settings Templates and TAC tags import as PMP Groups.
- Devices that show Device is not connected to IoT Hub may need network URLs allowed, the minimum Admin Agent version, or a supported conditional access setup. Devices offline for a long time, signed out, or on Admin Agent versions earlier than 794 need manual steps. End-of-life devices get the latest Admin Agent, but Microsoft says manageability has not been tested.

## Cost and licensing

The transition guide sets licence conditions for PMP access: the organisation needs at least one Teams Rooms Pro, Teams Rooms Basic or Teams Rooms Standard licence, or at least one Teams Shared Space licence (formerly Shared devices), or at least one Teams device already enrolled in PMP. The last route is described as mainly for customers who manage only Teams phones and hold none of the other licences. Existing phones enrolled in TAC enrol automatically after updating to Admin Agent AA 830 or later; new customers must sign in to at least one Teams phone so the tenant is provisioned into PMP.

The pages read name no price, meter, credit rate or usage charge for the transition, and no separate PMP licence beyond those conditions; whether any PMP feature needs a particular licence tier for Android devices is not stated on the transition page. Microsoft's licence page says Teams Rooms Basic is provided at no additional cost, and its comparison table lists Teams Rooms Pro Management as part of Teams Rooms Pro, not Basic. Confirm what each licence tier unlocks for Android devices before you quote it in a budget request.

Indirect costs are admin time: building roles and device groups, importing profiles and tags, adopting update rings, updating documentation, and manual firmware updates through the OEM portal for devices that cannot self-update.

## Scope

**Devices:** Teams Rooms on Android, Teams phones, Teams panels and SIP devices. Teams Displays are not migrated. The roadmap record lists Android, desktop and Teams and Surface devices.

**Clouds:** The roadmap record lists Worldwide, GCC, GCC High and DoD. The transition guide gives portal addresses of portal.rooms.microsoft.com for public and GCC, devices.gov.teams.microsoft.us for GCC High and devices.dod.teams.microsoft.us for DoD. Its feature table shows SIP device features as NA for DoD.

**Who can open the portal:** an Entra role (Global Administrator, Teams Administrator, Teams Device Administrator, Global Reader), a PMP built-in role or a PMP custom role. Administrative-unit-scoped administrators cannot access it.

**Prerequisites:** a qualifying licence or an enrolled device (see Cost and licensing), network access to the URLs on the Teams Devices network security page, no unsupported conditional access policies on the resource accounts, and the minimum Admin Agent version: AA 830 (1.0.0.202606082157.product) or higher. For government clouds Microsoft says devices will soon be auto-updated to AA 856.

**Rollout:** PMP GA and the TAC retirement dates are in What's changing.

## Governance guidance

### Before rollout

- Inventory your Teams Android devices and check each one against the minimum Admin Agent version AA 830; list the devices that are offline, signed out, end of life or earlier than version 794, since those need manual steps.
- Confirm that you hold a qualifying licence or an already enrolled device so that your administrators can open PMP, and that no administrator who needs access is scoped to an administrative unit.
- Create the PMP roles you need (Settings > Roles) so that site leads and technicians do not need Global Administrator.
- Check network allow lists for the URLs on the Teams Devices network security page and review conditional access policies assigned to Teams resource accounts.
- Update help desk runbooks and documentation to point to PMP, as Microsoft's notice asks.

### At rollout

- Import TAC tags as PMP Groups (Settings > Groups > Import from Teams admin center) and import TAC configuration profiles as Settings Templates.
- Decide when to confirm PMP update rings, knowing the confirmation is irreversible, and review the default ring durations first because PMP rolls out faster than TAC phases.
- Use the tenant-level pause in PMP (Updates > Update management > Android updates) if you need to hold automatic updates, and remember it lasts 2 weeks and does not stop the minimum Admin Agent updates Microsoft describes as not pausable.

### After rollout

- Check each device group in PMP for devices showing Device is not connected to IoT Hub and fix the network, Admin Agent version or conditional access cause.
- Review PMP audit logs for update pauses (recorded as TenantUpdatesPaused) and for who changed roles.
- Re-check this page and the Learn transition guide against the TAC retirement dates for your cloud and device type.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can manage devices in the portal (custom roles, device and group scope)</strong><br><small>Tenant</small><br><small class="controls__note">Creating a role needs Global Administrator, Teams Administrator or Teams Rooms Pro Manager. Entra roles also grant access.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › Roles › Create role <a href="https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide pause of automatic Android device updates</strong><br><small>Tenant</small><br><small class="controls__note">Pauses for 2 weeks, then resumes. Needs Global - Grant all permission. Does not cover Admin Agent updates Microsoft calls not pausable.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Updates › Update management › Android updates › Pause updates <a href="https://learn.microsoft.com/microsoftteams/rooms/androidupdatemanagementinpmp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Moving Android auto-updates from TAC phases to PMP update rings</strong><br><small>Tenant</small><br><small class="controls__note">The confirmation is irreversible and triggers a one-time mapping of devices to default PMP rings.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Updates › Ring Configuration › Rings › Provide Confirmation <a href="https://learn.microsoft.com/microsoftteams/rooms/androidupdatemanagementinpmp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Carrying TAC tags into PMP device groups</strong><br><small>Tenant</small><br><small class="controls__note">Each imported tag becomes a Group containing devices signed in with accounts associated with that tag.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › Groups › Import from Teams admin center <a href="https://learn.microsoft.com/microsoftteams/rooms/aboutunifieddevicemanagement-pmp1" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

None of the controls below has a documented API on the pages read: a search of Microsoft Learn for Pro Management portal APIs, Microsoft Graph and Teams PowerShell found no operation for these settings at the time of writing (November 2026).

Creating or assigning custom PMP roles needs Global Administrator, Teams Administrator or the Teams Rooms Pro Manager role. The tenant-level pause needs a role with the Global - Grant all permission, which Global Administrator and Teams Administrator have by default. Until TAC device administration is retired for your device type, TAC remains the older surface; Microsoft says tenant-level pause actions configured in TAC will no longer affect automatic updates managed through PMP update rings.

## Open questions

- Does the licence condition for PMP access apply unchanged to every Android device type and every cloud, and does any PMP feature for Android devices need Teams Rooms Pro specifically? Watch the Learn transition guide.
- Which TAC retirement dates apply to a GCC tenant now that the post says the GCC rollout runs to late November 2026, while the Android update guide still refers to TAC deprecation starting in September? Watch MC1227622.
- Is Teams Rooms Pro Management available in DoD for every device type, given that the general Pro Management page excludes DoD, the transition guide lists a DoD portal address and SIP features show NA for DoD?
- Will Microsoft publish an API or PowerShell route for PMP roles, groups, update rings and the tenant-level pause?
- Will a configurable maintenance window be added to PMP, which Microsoft says is not available yet?

<!-- rationale
risk: Medium. Devices must reach a minimum Admin Agent version, and Microsoft says those updates are not pausable; devices that miss it may stop being manageable once TAC administration is retired.
cost: Low. The transition page ties portal access to Teams Rooms or Teams Shared Space licences, or an already enrolled device, and states no price or meter; the visible cost is admin time to migrate settings and roles.
impact: Medium. Teams device administrators and help desks change portals, while room and phone users are not described as affected; the TAC retirement dates apply whether or not anyone acts.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: licence-tier uncertainty; Open questions: first bullet / absence: Whether any Android PMP capability needs a particular licence tier remains unconfirmed. | Found: Teams Rooms with Teams Rooms Pro licenses can orchestrate their updates through Teams Rooms Pro Management update rings. For Teams Rooms devices that have a Teams Rooms Basic or legacy Teams Rooms license, their updates are managed through the device's nightly maintenance window automatically. | Fix: Replace the tier-uncertainty sentence and narrow the first open question: 'For Teams Rooms on Android, the update-management guide says Teams Rooms Pro licences support PMP update-ring orchestration; Basic or legacy-licensed Teams Rooms receive updates automatically through the device nightly maintenance window. The Android guide describes ring adoption generally, so confirm any remaining licensing differences for phones and panels.' Cite https://learn.microsoft.com/microsoftteams/rooms/update-management. Do not equate tenant portal access with entitlement to every management capability. | Source: https://learn.microsoft.com/microsoftteams/rooms/update-management
- [contradicted, blocker] Scope: Prerequisites; Governance guidance: Before rollout, first bullet / behaviour: AA 830 (1.0.0.202606082157.product) is the minimum against which all scoped Android devices should be checked. | Found: This guidance applies to GCC, GCC-High, and DoD cloud customers. ... Make sure your devices are updated to the minimum Admin Agent version 856 (1.0.0.202607160723) or higher | Fix: Qualify the Scope prerequisite and the first Before rollout checklist bullet: 'Check the minimum Admin Agent version for your cloud: AA 830 (1.0.0.202606082157.product) or higher for public cloud; AA 856 (1.0.0.202607160723) or higher for GCC, GCC High and DoD, whichever is eligible for the device.' Cite the government-cloud guidance at https://learn.microsoft.com/microsoftteams/rooms/androidupdatemanagementinpmp. Retain the statement about planned government-cloud auto-updates, but do not present AA 830 as sufficient for those clouds. | Source: https://learn.microsoft.com/microsoftteams/rooms/androidupdatemanagementinpmp
- [contradicted, blocker] Governance controls: paragraph beginning Creating or assigning / role: Assigning custom PMP roles requires Global Administrator, Teams Administrator or Teams Rooms Pro Manager. | Found: To assign roles, you must be a Global Administrator/ Teams Administrator or Teams Rooms Pro Manager role or have a custom role with role management permissions. | Fix: Replace the sentence with: 'Creating a custom PMP role needs Global Administrator, Teams Administrator or Teams Rooms Pro Manager. Assigning roles also permits a custom role with role management permissions.' Keep https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac as the source. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: After rollout / behaviour: PMP audit logs can identify who changed roles. | Found: activity.category ... User, Assignment, PartnerInvitation, Role ... activity.operation ... Create, Update, Delete ... user.userId | The user who performed the action that resulted in the record being logged. | Fix: Add https://learn.microsoft.com/microsoftteams/rooms/multi-tenant-auditing to sources for the role-change auditing claim. | Source: https://learn.microsoft.com/microsoftteams/rooms/multi-tenant-auditing
- [contradicted, minor] Governance guidance versus Governance controls / consistency: Several checklist controls have no corresponding controls-table row. | Found: Checklist: 'Check network allow lists'; 'review conditional access policies'; 'import TAC configuration profiles as Settings Templates'; 'Review PMP audit logs'. Table: custom roles, tenant update pause, ring adoption and tag import only. | Fix: The network allow-list, Conditional Access, Settings Templates import and audit-log checklist steps have no corresponding table rows. Remove those checklist steps if correcting without adding controls; their existing discussion elsewhere can remain.
- [contradicted, minor] front matter: impact; rationale: impact / consistency: The medium impact rating conflicts with its admins-and-help-desks-only rationale. | Found: impact: medium. Rationale: 'Teams device administrators and help desks change portals, while room and phone users are not described as affected'. The standard defines low as 'admins only' and medium as 'makers, analysts or one business unit'. | Fix: Change impact to low and begin the impact rationale with 'Low.'; the stated administrator/support audience otherwise fits the low definition.
-->
