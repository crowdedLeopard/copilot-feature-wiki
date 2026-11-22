---
title: "Microsoft Teams Rooms on Android: new health signals in the Pro Management portal"
slug: "microsoft-teams-additional-health-signals-available-for-teams-rooms-on-android-on-pro-mana"
roadmapId: 566856
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft is adding storage, calendar sync and secondary display health signals for Teams Rooms on Android to the Pro Management portal. Admins gain new incidents to triage and route; Microsoft has not stated whether they are enabled on arrival."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Teams Rooms Pro includes Pro Management. Microsoft documents incident generation in the portal with a Teams Rooms Pro or Teams Shared Device license; Teams Rooms devices use Basic or Pro, and ITSM integration is Pro-only."
audiences: ["m365-admin","service-owner"]
tags: ["teams","teams-rooms","pro-management-portal","monitoring","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 566856"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566856"
    kind: "roadmap"
  - title: "Health signals"
    url: "https://learn.microsoft.com/microsoftteams/rooms/signals"
    kind: "learn"
  - title: "Signal settings"
    url: "https://learn.microsoft.com/microsoftteams/rooms/signal-settings"
    kind: "learn"
  - title: "Microsoft Teams Rooms Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/managed-meeting-rooms-portal"
    kind: "learn"
  - title: "Teams Rooms Pro Management Portal Incident Notification Webhook Integration"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pmp-incident-webhook-integration"
    kind: "learn"
  - title: "Teams Rooms Pro Management Portal Webhook Authentication Guide"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pmp-webhook-auth"
    kind: "learn"
  - title: "ServiceNow Incident Integration for Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/microsoft-teams-rooms-configure-servicenow"
    kind: "learn"
  - title: "Role-based access control in the Microsoft Teams Rooms Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Accessing the Pro Management portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/enrolling-mtrp-managed-service"
    kind: "learn"
videos: []
related: ["microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management","microsoft-teams-standard-and-basic-licensed-teams-rooms-on-windows-in-the-pro-management-p","microsoft-teams-building-level-insights-on-the-pro-management-portal-recommended-actions-p"]
controls:
  - governs: "Which health signals are enabled for all applicable devices"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > Signals > signal > Disable"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/signal-settings"
    api: null
    note: "The same page also offers Enable and Reset to default. Disabling closes active tickets for the signal. The built-in roles table shows View and Modify for Global Administrator and Teams Administrator."
  - governs: "Which incidents are sent to an outside system by webhook"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > Integrations > Create Incident Webhook"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/pmp-incident-webhook-integration"
    api: null
    note: "Roles: Teams Rooms Pro Manager, Teams Administrator, Global Administrator. Max 10 integrations per portal; not in GCC High or DoD. The wizard selects device types, ticket states, severities, room groups and signals."
  - governs: "Whether incidents create ServiceNow tickets"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > ServiceNow > Do you want to enable ServiceNow?"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/microsoft-teams-rooms-configure-servicenow"
    api: null
    note: "Commercial Cloud only. The form needs a passing Test before Submit, then the enable toggle."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-22"
    note: "New briefing: three Android health signals (Calendar sync, Storage health, Secondary display health) are documented in the Pro Management portal; network and Teams meeting app signals are not yet listed for Android."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 78 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Correction: licensing set to included (Teams Rooms Pro) with the published entitlement wording, default-state wording aligned with unknown, health-impact wording narrowed to Learn's descriptions, control paths extended, per-device suppression step removed from the checklist."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 85 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 83
  unconfirmed: 1
  contradicted: 1
  attempts: 2
  hash: "383e80229cc5e84cbddd7473d28fe01a"
---

## What's changing

Microsoft is adding device health signals for Teams Rooms on Android to the Teams Rooms Pro Management portal (PMP). The roadmap item names storage health, the Teams meeting app, calendar sync, secondary display health and network, and says PMP will automatically generate actionable alerts and support ticket creation workflows when it detects an issue.

Microsoft's Health signals page documents three of these for Android at the time of writing (November 2026). **Calendar sync** (Critical severity) and **Storage health** (Important) are listed for both the video bar and the touch console; **Secondary display health** (Warning) is listed for the video bar only. The Android tabs on that page list no network signal and no Teams meeting app signal; a Network signal and meeting app signals appear only on the Windows tab.

When a signal activates, the portal creates an incident with a unique incident ID. Calendar sync is polled every 5 minutes with a 30-minute watching period; Storage health and Secondary display health are polled every 120 minutes with a 30-minute watching period. When the property returns to a healthy state the ticket is marked resolved, and it is closed after 7 consecutive healthy days.

The roadmap record shows the item as Rolling out, General Availability, with a target of November CY2026, for Worldwide (Standard Multi-Tenant) on Android. The date is Microsoft's target, not a commitment. No Message Center post was supplied for this item.

## Why it matters

Calendar sync failures can leave scheduled meetings missing or out of date, and critically low storage can affect device stability or meeting reliability. These signals are meant to surface such faults early. Calendar sync is rated Critical, so a sync failure on an Android room can be expected to raise a high-severity incident; Microsoft's page says Critical and Important incidents affect a device's health status, while Warning incidents do not.

The roadmap says alerts are generated automatically, but Microsoft has not stated whether the new signals are enabled on arrival. Plan where the new incidents will land and who owns them before they appear.

## Risk assessment

**Data exposure**

- Signals are built from properties reported by the agent on the device. Where you route incidents to an outside system, the incident notification webhook sends incident data to an endpoint you choose, and Microsoft says customers host and secure that endpoint. Review the receiving system before subscribing Android devices.

**Security & identity**

- Access to the signal settings follows PMP roles: the built-in roles table shows Settings > Signals with View and Modify for Global Administrator and Teams Administrator. Check who holds those roles before the new signals are enabled or disabled tenant-wide.

**Autonomy & actions**

- Microsoft says some signals support automatic diagnostics or remediation workflows after activation. Confirm whether any of the three Android signals runs one before you rely on a room fixing itself.

**Change & support**

- Expect new incidents on Android rooms that were previously quiet, especially Calendar sync (Critical) and Storage health (Important), which affect device health status. If incidents feed ServiceNow or a webhook, expect new ticket volume there.
- Disabling a signal in Settings > Signals closes its active tickets for all applicable devices and stops further tickets or remediation; Microsoft says tickets closed that way cannot be reactivated.

## Cost and licensing

Microsoft documents portal incident generation with a Teams Rooms Pro or Teams Shared Device license; for Teams Rooms devices, the published Pro Management entitlement is Teams Rooms Pro. Microsoft's Teams Rooms licences page lists "Microsoft Teams Rooms Pro Management" and "ITSM integration" and "Custom health alerts" under Pro only, and "Pro Management Portal enrollment and inventory" under both Basic and Pro. The Health signals page names no licence for the three Android signals, and no price or meter for them is published at the time of writing.

For rooms already licensed with Teams Rooms Pro, plan for admin time to triage incidents and maintain integrations. Pro Management and ITSM integration are included in Pro, not Basic. The ServiceNow and webhook integration pages describe configuration steps and name no charge for the portal side.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant), Android and General Availability. The Health signals page documents Calendar sync and Storage health for Teams Rooms on Android video bars and touch consoles, and Secondary display health for video bars only.

Portal access needs a Microsoft Entra built-in role (Global Administrator, Teams Administrator, Teams Devices Administrator, Global Reader) or a role assigned inside PMP. Microsoft's access page says a Teams Administrator or Teams Devices Administrator assigned to an administrative unit cannot open the portal.

## Governance guidance

### Before rollout

- Identify which Android rooms are video bars and which are touch consoles, because Secondary display health is listed for video bars only.
- Confirm who holds Global Administrator or Teams Administrator, the built-in roles shown with View and Modify on Settings > Signals.
- Decide where Critical and Important incidents should go: the portal, the ServiceNow integration (Settings > ServiceNow) or an incident notification webhook (Settings > Integrations).

### At rollout

- Open Settings > Signals in the Pro Management portal and check whether Calendar sync, Storage health and Secondary display health are listed for Android devices and enabled.
- Test any ServiceNow or webhook route before relying on it; the ServiceNow form requires a passing test before it can be submitted.
- Brief room support on what each signal means, using the descriptions on the Health signals page.

### After rollout

- Review incident volume per signal and disable a signal only if it is not useful, remembering that this closes its active tickets for all applicable devices.
- Check the Health signals page again for the network and Teams meeting app signals the roadmap names.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which health signals are enabled for all applicable devices</strong><br><small>Tenant</small><br><small class="controls__note">The same page also offers Enable and Reset to default. Disabling closes active tickets for the signal. The built-in roles table shows View and Modify for Global Administrator and Teams Administrator.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › Signals › signal › Disable <a href="https://learn.microsoft.com/microsoftteams/rooms/signal-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which incidents are sent to an outside system by webhook</strong><br><small>Tenant</small><br><small class="controls__note">Roles: Teams Rooms Pro Manager, Teams Administrator, Global Administrator. Max 10 integrations per portal; not in GCC High or DoD. The wizard selects device types, ticket states, severities, room groups and signals.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › Integrations › Create Incident Webhook <a href="https://learn.microsoft.com/microsoftteams/rooms/pmp-incident-webhook-integration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether incidents create ServiceNow tickets</strong><br><small>Tenant</small><br><small class="controls__note">Commercial Cloud only. The form needs a passing Test before Submit, then the enable toggle.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › ServiceNow › Do you want to enable ServiceNow? <a href="https://learn.microsoft.com/microsoftteams/rooms/microsoft-teams-rooms-configure-servicenow" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The signal settings page enables or disables a signal for all applicable devices; it is not a per-room control. Microsoft's portal page describes a separate Suppress ticket function in a room's Status tab that silences notifications about one signal on one device. Microsoft Learn documents no API for the signal settings, ServiceNow integration or webhook subscriptions at the time of writing (November 2026), so these are portal-only.

The webhook route is limited to the roles Teams Rooms Pro Manager, Teams Administrator and Global Administrator, allows 10 integrations per portal and is unavailable in GCC High and DoD; the ServiceNow integration is Commercial Cloud only. The roadmap item lists Worldwide only.

## Open questions

- Will Network and Teams meeting app signals be added to the Android tabs of the Health signals page? The roadmap names them; the page lists neither for Android today.
- Are the new signals enabled by default on arrival, or do admins enable them in Settings > Signals? Microsoft has not stated it.
- Do any of Calendar sync, Storage health or Secondary display health run automatic remediation, and what does it change on the device?
- Will Microsoft document an API for managing signals and incident routing? Watch the Health signals page and Message center.

<!-- rationale
risk: Low. The roadmap describes admin-side health monitoring and alerts in the Pro Management portal, not a change to meeting features or to what participants see.
cost: Low. For rooms already licensed with Teams Rooms Pro, the operational work is incident triage and integration maintenance; no price or meter specific to these signals is published.
impact: Low. Room administrators and IT support see the new signals and incidents; meeting participants are not described as affected.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Governance controls: 'so these are portal-only' / applicability: Signal settings, ServiceNow integration and webhook subscriptions can be managed only through the portal. | Found: Searched: Teams Rooms Pro Management signal settings API Microsoft Graph PowerShell enable disable signals; ServiceNow integration configuration API; incident webhook subscription create manage API. Read those guides and searched Graph beta and MicrosoftTeams references; no exclusivity statement. | Fix: Delete ', so these are portal-only' from the sentence. Retain: 'Microsoft Learn documents no API for the signal settings, ServiceNow integration or webhook subscriptions at the time of writing (November 2026).'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table; Governance guidance / admin-path: Webhook incident routing is reached through Settings > Integrations > Create Incident Webhook. | Found: select Settings then Integrations. ... Select Create Incident Webhook. A wizard is presented ... Event Subscription ... Room group selection ... Signals selection | Fix: Extend the path to 'Settings > Integrations > Create Incident Webhook > General > Endpoint configuration > Event Subscription > Room group selection > Signals selection'. Retain the existing filter note. Add: 'The authentication guide labels the entry button Add incident webhook.' That guide is already cited at https://learn.microsoft.com/microsoftteams/rooms/pmp-webhook-auth; the incident guide uses Create Incident Webhook. | Source: https://learn.microsoft.com/microsoftteams/rooms/pmp-incident-webhook-integration
- [contradicted, minor] Governance guidance: Before rollout, role-membership bullet / consistency: The checklist asks readers to take stock of administrator role membership, but the controls table has no row governing role assignment or access. | Found: Confirm who holds Global Administrator or Teams Administrator ... Controls govern signal enablement, webhook routing and ServiceNow tickets; none governs role membership. | Fix: Remove the Before rollout bullet 'Confirm who holds Global Administrator or Teams Administrator, the built-in roles shown with View and Modify on Settings > Signals.' Keep the verified role facts in the signal-setting note and Scope; do not add a control row.
-->
