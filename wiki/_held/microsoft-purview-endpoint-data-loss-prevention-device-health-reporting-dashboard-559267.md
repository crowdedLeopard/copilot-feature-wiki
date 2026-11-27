---
title: "Microsoft Purview Endpoint DLP: device health reporting dashboard (Worldwide)"
slug: "microsoft-purview-endpoint-data-loss-prevention-device-health-reporting-dashboard-559267"
roadmapId: 559267
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft Purview has a device health dashboard for Endpoint DLP in the Worldwide cloud, showing which onboarded devices may not receive policy updates. It needs one of three admin roles; Microsoft has not stated how it arrives."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: "April CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Purview service description lists Endpoint Data Loss Prevention (DLP) as Included for Microsoft 365 E5/A5/G5 and the other plans it names. The dashboard page names no licence of its own, and no separate price or meter for the dashboard is published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","device-onboarding","monitoring","diagnostics","advanced-hunting"]
sources:
  - title: "Monitor device health with the device health reports dashboard"
    url: "https://learn.microsoft.com/purview/device-onboarding-health-reports-dashboard"
    kind: "learn"
  - title: "Troubleshooting endpoint data loss prevention configuration and policy sync"
    url: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "DeviceInfo"
    url: "https://learn.microsoft.com/defender-xdr/advanced-hunting-deviceinfo-table"
    kind: "learn"
  - title: "Microsoft 365 Roadmap 559267"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559267"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-device-health-reporting-dashboard","endpoint-dlp","microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i","microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with"]
controls:
  - governs: "Viewing device onboarding and readiness in the device health reporting dashboard"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Device report"
      docs: "https://learn.microsoft.com/purview/device-onboarding-health-reports-dashboard"
    api: null
    note: "Needs Compliance Administrator, Security Administrator or Global Administrator. Devices must be onboarded to Endpoint DLP and actively reporting telemetry."
  - governs: "Per-device configuration status and policy sync status (today's alternative to the dashboard)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api:
      kind: "other"
      call: "DeviceInfo | where DlpInfo != \"\""
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    note: "Advanced hunting query in the Microsoft Defender portal. It reads device data and changes nothing; it is not an API for the dashboard."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-09T20:46:16"
changes:
  - date: "2026-11-27"
    note: "New briefing for the Worldwide roadmap item for the Endpoint DLP device health reporting dashboard."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 54 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 53
  unconfirmed: 1
  contradicted: 0
  attempts: 1
  hash: "c2b3d69891d3f1940701757417e8fa9b"
---

## What's changing

Microsoft Purview has a device health reporting dashboard for Endpoint Data Loss Prevention (Endpoint DLP, the part of Purview DLP that enforces policies on Windows and macOS devices). Microsoft Learn describes it as a centralised view of device readiness that helps administrators find devices that might not be ready to receive or enforce Endpoint DLP policies because of configuration, connectivity or version issues. The roadmap item describes it as a way to view device health across all devices and to quickly identify devices that are not ready.

The Learn page shows four sections. **Device onboarding** gives total onboarded devices, onboarded devices running Endpoint DLP and onboarded devices with configuration issues. **Device readiness to receive policy updates** flags devices that were offline during the past day, have outdated Microsoft Defender Antivirus versions or have configuration issues. **Last time devices were seen online** groups devices into non-cumulative buckets of 24 hours, 3 days, 7 days and 30 days. **Device readiness for feature** currently covers Just-in-time protection and Paste to supported browsers. Selecting **View devices** in a section opens a side pane with device categories; select a category to open a filtered list of matching devices. The dashboard shows data from devices that reported within the past 30 days and, according to Learn, updates every hour.

This roadmap item (559267) covers Worldwide (Standard Multi-Tenant), on the Web platform, with release phases of Preview and General Availability. Its status is Launched, with a preview date of April CY2026 and a target of May CY2026. Microsoft lists the same feature under a second roadmap item, 561033, for GCC, GCC High and DoD, with a target of July CY2026; that item has its own briefing.

## Why it matters

A service owner running Endpoint DLP needs to know which devices may miss policy updates before relying on a new or changed policy. The dashboard gathers onboarding status, readiness for policy updates, recent activity and feature readiness in one place, and Learn says it reduces manual troubleshooting across multiple pages. Learn also says the readiness indicators do not confirm that a device failed to receive an update; they highlight devices that may be at risk of not receiving future updates. A device that is not flagged is therefore not proof that it holds the latest policy.

Microsoft has not stated what happens on arrival if nobody acts, and no source says existing Endpoint DLP behaviour changes. Treat it as an optional monitoring tool: it earns its place when your tenant has onboarded devices and someone owns their remediation, for example before turning on Just-in-time protection or Paste to supported browsers.

## Risk assessment

**Data exposure**
- The dashboard lists devices from the past 30 days of reporting and drills into filtered device lists. Learn names three roles that can open it and says the Compliance Administrator or Security Administrator role is sufficient for most organisations, so keep the Global Administrator role off day-to-day monitoring.
- The per-device attributes behind the Devices page include a Valid user value, and the DeviceInfo table's DlpInfo column carries a DlpUpn property, so device data pulled through advanced hunting names users.

**Security & identity**
- Learn's best practices say outdated Microsoft Defender Antivirus versions can prevent devices from receiving Endpoint DLP policies. The readiness section is where to find those devices before a policy change.
- Learn says devices offline for extended periods may miss critical policy updates; the Last time devices were seen online section shows which ones.

**Autonomy & actions**
- No change: Learn describes the dashboard as a place to monitor device posture and investigate individual devices.

**Change & support**
- The readiness indicators flag risk, not failure. Use the Policy sync status on the Devices page to confirm whether a given device received the latest policy version.
- A device silent for more than 30 days falls outside the dashboard's data window, so find it through the Devices list or a DeviceInfo query instead.

## Cost and licensing

Microsoft's Purview service description lists Endpoint Data Loss Prevention (DLP) as **Included** for Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. The dashboard's Learn page lists admin roles and device requirements under Before you begin and names no licence. No separate price or meter for the dashboard is published at the time of writing (November 2026).

The indirect cost is administrator time to review the dashboard and fix flagged devices. Querying the same device data in advanced hunting relies on the DeviceInfo table, which Learn says returns no results if the organisation has not deployed the relevant service in Microsoft Defender.

## Scope

**Who can use it.** The Learn page says you must have the Compliance Administrator, Security Administrator or Global Administrator role to access the dashboard.

**Which devices.** Devices must be onboarded to Endpoint DLP and actively reporting device telemetry. The dashboard shows devices that reported within the past 30 days.

**Clouds, platform and rollout.** The roadmap record lists Worldwide (Standard Multi-Tenant), the Web platform, and Preview and General Availability phases. Status is Launched, with a preview date of April CY2026 and a target of May CY2026. The US Government clouds are covered by the separate item 561033.

**Out of scope.** The Device readiness for feature section currently reports only Just-in-time protection and Paste to supported browsers; Learn says additional Endpoint DLP features will be added in future releases.

## Governance guidance

### Before rollout
- Check that the devices you expect to monitor are onboarded to Endpoint DLP and reporting telemetry, because the dashboard only shows devices that reported in the past 30 days.
- Decide who owns remediation of flagged devices, since the dashboard points to root causes such as outdated versions, connectivity issues or invalid configurations.

### At rollout
- Open the dashboard (Microsoft Purview portal > Settings > Device onboarding > Device report) and record a baseline of onboarded devices, devices with configuration issues and devices at risk of missing policy updates.
- Review the Device readiness for feature section before enabling Just-in-time protection or Paste to supported browsers.

### After rollout
- Review the dashboard on a regular schedule, as Learn's best practices advise, and investigate devices that have not reported recently.
- Prioritise devices with outdated Microsoft Defender Antivirus versions, which Learn says can prevent them receiving Endpoint DLP policies.
- Query the DeviceInfo table in advanced hunting when you need a repeatable report of configuration and policy sync status beyond the portal view.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Viewing device onboarding and readiness in the device health reporting dashboard</strong><br><small>Tenant</small><br><small class="controls__note">Needs Compliance Administrator, Security Administrator or Global Administrator. Devices must be onboarded to Endpoint DLP and actively reporting telemetry.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Device report <a href="https://learn.microsoft.com/purview/device-onboarding-health-reports-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Per-device configuration status and policy sync status (today's alternative to the dashboard)</strong><br><small>Tenant</small><br><small class="controls__note">Advanced hunting query in the Microsoft Defender portal. It reads device data and changes nothing; it is not an API for the dashboard.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>DeviceInfo | where DlpInfo != &quot;&quot;</code> <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The dashboard has one documented way in: the Microsoft Purview portal, with one of three roles. Microsoft Learn documents no API or PowerShell cmdlet for the dashboard itself at the time of writing (November 2026). The second row is today's route to per-device detail and scripted analysis: Learn says the DeviceInfo table's DlpInfo column carries configuration status, policy synchronisation status and Endpoint DLP enablement, and that these values correspond to the device information on the DLP device onboarding page. Learn does not say the dashboard reads from that table. See also [Endpoint DLP](/concepts/endpoint-dlp/).

## Open questions

- What state does the dashboard arrive in for a Worldwide tenant with onboarded devices: is it available to the three roles immediately, or does an administrator switch anything on? Watch the Learn page and Message center.
- Does the dashboard's Learn page still describe preview behaviour, given the roadmap lists both Preview and General Availability for this item? Watch the Learn page.
- Will Microsoft publish an API or export for the dashboard's readiness data, so it can be scripted without querying DeviceInfo?
- Which additional Endpoint DLP features will be added to the Device readiness for feature section, and when?

<!-- rationale
risk: Low. It is a read-only view of device readiness for Compliance, Security or Global Administrators, built on devices already onboarded to Endpoint DLP. Microsoft has not stated a default, so the rating assumes today's behaviour continues.
cost: Low. Microsoft's Purview service description lists Endpoint DLP as included in the E5-level licences it names; the dashboard page names no licence of its own, so the only cost the sources show is administrator time.
impact: Low. Only holders of the Compliance Administrator, Security Administrator or Global Administrator role can open it; end users do not see it.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Risk assessment: Change & support, final bullet / behaviour: A DeviceInfo query can find a device silent for more than 30 days as an alternative to the dashboard. | Found: Searched: DeviceInfo advanced hunting data older than 30 days retention inactive devices Purview Devices; DeviceInfo inactive 30. Read DeviceInfo, sync and advanced-hunting-overview. No passage guarantees retrieval of such devices; hunting retention depends on the tenant and data. | Fix: Remove 'or a DeviceInfo query' from the final Change & support bullet. Neither cited device-data page establishes recovery of devices silent beyond the dashboard window; https://learn.microsoft.com/defender-xdr/advanced-hunting-overview qualifies the available hunting history by retention and supported data.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui / admin-path: Per-device configuration and policy-sync status are reached through Purview portal > Settings > Device onboarding > Devices. | Found: Sign in to the Microsoft Purview portal > Settings (gear icon in the upper right corner) > Device onboarding > Devices. ... Select a device to open the details pane for more information on the policy sync status. | Fix: Complete controls[1].ui.path as 'Settings > Device onboarding > Devices > device'. The existing path reaches the right device-list page but omits selecting the device to inspect its details. | Source: https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync
- [supported, minor] Risk assessment: Change & support, final bullet / behaviour: The Devices list can show devices silent beyond the dashboard's 30-day window. | Found: To view these details, go to Device onboarding > Devices. ... Onboarded devices will continue to appear for 180 days after the device is offline. | Fix: After removing the unsupported DeviceInfo alternative, replace the bullet with 'A device silent for more than 30 days falls outside the dashboard data window. Check the Devices list: Microsoft's onboarding overview says onboarded devices continue to appear for 180 days after going offline.' Cite https://learn.microsoft.com/purview/device-onboarding-overview#check-device-status in sources. | Source: https://learn.microsoft.com/purview/device-onboarding-overview#check-device-status
-->
