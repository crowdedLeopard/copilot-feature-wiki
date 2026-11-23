---
title: "Microsoft Purview Endpoint DLP: device health reporting dashboard (GCC, GCC High and DoD)"
slug: "microsoft-purview-endpoint-data-loss-prevention-device-health-reporting-dashboard"
roadmapId: 561033
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft Purview adds a device health dashboard for Endpoint DLP to GCC, GCC High and DoD, showing which onboarded devices may not receive policy updates. Access requires one of three admin roles; Microsoft has not stated its arrival or enablement behaviour."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Purview service description lists Endpoint DLP as Included for Microsoft 365 E5/A5/G5 and the other plans it names. The dashboard page names no licence of its own, and no separate price or meter for the dashboard is published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","device-onboarding","monitoring","diagnostics","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 561033"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561033"
    kind: "roadmap"
  - title: "Monitor device health with the device health reports dashboard"
    url: "https://learn.microsoft.com/purview/device-onboarding-health-reports-dashboard"
    kind: "learn"
  - title: "Troubleshooting endpoint data loss prevention configuration and policy sync"
    url: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Microsoft 365 Roadmap 559267"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559267"
    kind: "roadmap"
videos: []
related: ["endpoint-dlp","microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-healt-us-government","microsoft-purview-data-loss-prevention-reduce-policy-sync-status-sla-on-the-us-government","microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with"]
controls:
  - governs: "Viewing device onboarding and readiness in the device health reporting dashboard"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Device report"
      docs: "https://learn.microsoft.com/purview/device-onboarding-health-reports-dashboard"
    api: null
    note: "Needs Compliance Administrator, Security Administrator or Global Administrator. Devices must be onboarded to Endpoint DLP and reporting telemetry."
  - governs: "Per-device configuration status and policy sync status (today's alternative to the dashboard)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices > device"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api:
      kind: "other"
      call: "DeviceInfo | where DlpInfo != \"\""
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    note: "Advanced hunting query in the Microsoft Defender portal. It reads device data and changes nothing; it is not an API for the dashboard."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-04T22:03:41"
changes:
  - date: "2026-11-23"
    note: "New briefing for the US Government (GCC, GCC High, DoD) roadmap item for the Endpoint DLP device health reporting dashboard."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 60 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: the summary no longer says nothing needs configuring, the View devices behaviour matches Learn, the Devices path now ends at the selected device, and the role-assignment checklist step is removed."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 62 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 62
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c7f0c955bd0e250cd9ed6b707dfb1bfb"
---

## What's changing

Microsoft Purview has a device health reporting dashboard for Endpoint Data Loss Prevention (Endpoint DLP). Microsoft Learn describes it as a centralised view of device readiness that helps administrators find devices that might not be ready to receive or enforce Endpoint DLP policies because of configuration, connectivity or version issues. The roadmap item describes it as a way to view device health across all devices and to quickly identify devices that are not ready.

The Learn page shows four sections. **Device onboarding** gives total onboarded devices, devices running Endpoint DLP and devices with configuration issues. **Device readiness to receive policy updates** flags devices that were offline during the past day, have outdated Microsoft Defender Antivirus versions or have configuration issues. **Last time devices were seen online** groups devices into non-cumulative buckets of 24 hours, 3 days, 7 days and 30 days. **Device readiness for feature** currently covers Just-in-time protection and Paste to supported browsers. Selecting **View devices** in a section opens a side pane with device categories; select a category to open a filtered list of matching devices. The dashboard shows data from devices that reported within the past 30 days.

This roadmap item (561033) covers GCC, GCC High and DoD, on the Web platform, at General Availability. Its status is Launched with a target of July CY2026, and the record was last modified on 2026-09-04. Microsoft lists the same feature under a second roadmap item, 559267, for Worldwide (Standard Multi-Tenant): Launched, target May CY2026, with a preview in April CY2026.

## Why it matters

A service owner running Endpoint DLP needs to know which devices may miss policy updates. The dashboard gathers onboarding status, readiness for policy updates, recent activity and feature readiness in one place, and Learn says it reduces manual troubleshooting across multiple pages. Learn says the readiness indicators do not confirm that a device failed to receive an update; they highlight devices that may be at risk of not receiving future updates.

Microsoft has not stated what happens on arrival if nobody acts, and no source says existing Endpoint DLP behaviour changes. Treat it as an optional monitoring tool: it earns its place when your tenant has onboarded devices and someone owns their remediation, for example before turning on a feature that appears in the Device readiness for feature section.

## Risk assessment

**Data exposure**
- The dashboard lists devices from the past 30 days of reporting and drills into filtered device lists. Learn names three roles that can open it (Compliance Administrator, Security Administrator, Global Administrator) and advises the least-privileged role that meets the need, so keep the Global Administrator role off day-to-day monitoring duties.
- The per-device attributes behind the Devices page include a Valid user value, and the DeviceInfo table's DlpInfo column carries a DlpUpn property, so device data pulled that way names users.

**Security & identity**
- A device with an outdated Microsoft Defender Antivirus version may not receive Endpoint DLP policies, according to Learn's best practices. The dashboard's readiness section is the place to find those devices before a policy change.
- Devices that are offline for extended periods may miss critical policy updates, per the same page; the Last time devices were seen online section shows which ones.

**Autonomy & actions**
- No change: Learn describes the dashboard as a place to monitor device posture and investigate individual devices.

**Change & support**
- The readiness indicators are not proof of failure or success: a device not flagged is not confirmed to hold the latest policy. Use the Policy sync status on the Devices page for per-device confirmation.
- A device silent for more than 30 days falls outside the dashboard's data window, so find it through a device list or query rather than the dashboard.

## Cost and licensing

Microsoft's Purview service description lists Endpoint Data Loss Prevention (DLP) as **Included** for Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. The dashboard page lists admin roles and device requirements under Before you begin and names no licence, and no separate price or meter for the dashboard is published at the time of writing (November 2026).

The indirect cost is administrator time to review the dashboard and fix flagged devices.

## Scope

**Who can use it.** The Learn page says you must hold the Compliance Administrator, Security Administrator or Global Administrator role to open the dashboard.

**Which devices.** Devices must be onboarded to Endpoint DLP and actively reporting device telemetry. The dashboard shows devices that reported within the past 30 days.

**Clouds, platform and rollout.** The roadmap record lists GCC, GCC High and DoD, with the Web platform and General Availability. Status is Launched, with a target of July CY2026. The Worldwide item 559267 is a separate record.

**Out of scope.** The Device readiness for feature section currently reports only Just-in-time protection and Paste to supported browsers; Learn says further features will be added in future releases.

## Governance guidance

### Before rollout
- Check that the devices you expect to monitor are onboarded to Endpoint DLP and reporting telemetry, because the dashboard only shows devices that reported in the past 30 days.
- Decide who owns remediation of flagged devices, since the dashboard helps you identify devices and root causes such as outdated versions, connectivity issues or invalid configurations.

### At rollout
- Open the dashboard in the Microsoft Purview portal and record a baseline of onboarded devices, devices with configuration issues and devices at risk of missing policy updates.
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
<tr><td data-label="Control"><strong>Viewing device onboarding and readiness in the device health reporting dashboard</strong><br><small>Tenant</small><br><small class="controls__note">Needs Compliance Administrator, Security Administrator or Global Administrator. Devices must be onboarded to Endpoint DLP and reporting telemetry.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Device report <a href="https://learn.microsoft.com/purview/device-onboarding-health-reports-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Per-device configuration status and policy sync status (today's alternative to the dashboard)</strong><br><small>Tenant</small><br><small class="controls__note">Advanced hunting query in the Microsoft Defender portal. It reads device data and changes nothing; it is not an API for the dashboard.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices › device <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>DeviceInfo | where DlpInfo != &quot;&quot;</code> <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The dashboard has one documented way in: the Microsoft Purview portal, with one of three roles. Microsoft Learn documents no API for the dashboard itself at the time of writing (November 2026). The second row is today's route to scripted analysis of the same kind of data: Learn says the DeviceInfo table exposes Endpoint DLP device data as on the Devices page, with the DlpInfo column carrying configuration status, policy sync and enablement properties. Learn does not say the dashboard reads from that table.

## Open questions

- What state does the dashboard arrive in for a tenant that has onboarded devices: is it available to the three roles immediately, or is anything switched on by an administrator? Watch the Learn page and Message center.
- Are all four dashboard sections, including Device readiness for feature, available in GCC, GCC High and DoD, and do the Worldwide and US Government records (559267 and 561033) differ in behaviour? Watch the roadmap items.
- Will Microsoft publish an API or export for the dashboard's readiness data, so it can be scripted without querying DeviceInfo?
- Which additional Endpoint DLP features will be added to the Device readiness for feature section, and when?

<!-- rationale
risk: Low. It is a reporting view of device readiness for compliance and security administrators, built on devices already onboarded to Endpoint DLP. Microsoft has not stated a default, so the rating rests on today's behaviour continuing.
cost: Low. Microsoft's Purview service description lists Endpoint DLP as included in the E5-level licences it names; the dashboard page names no separate licence, so the only cost the sources show is administrator time.
impact: Low. Only administrators in the Compliance Administrator, Security Administrator or Global Administrator roles can open it; end users do not see it.
-->
