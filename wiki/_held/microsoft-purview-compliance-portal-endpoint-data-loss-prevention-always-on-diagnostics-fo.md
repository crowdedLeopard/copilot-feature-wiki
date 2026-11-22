---
title: "Microsoft Purview Endpoint DLP: always-on diagnostics for macOS devices (roadmap phase 1)"
slug: "microsoft-purview-compliance-portal-endpoint-data-loss-prevention-always-on-diagnostics-fo"
roadmapId: 499432
topic: "governance"
products: ["Microsoft 365 admin center","Microsoft Purview"]
summary: "Endpoint DLP is planned to keep trace logs on onboarded Macs so support cases need no reproduction. Admins decide whether to turn it on and whether logs may be uploaded to Microsoft. This is the Mac item; Windows is roadmap 499431."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac"]
targetDate: "November CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Purview service description lists Endpoint Data Loss Prevention (DLP) as Included in Microsoft 365 E5/A5/G5 and the other plans it names. A licence or price specific to Always-on diagnostics is not yet published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","macos","device-onboarding"]
sources:
  - title: "Microsoft 365 Roadmap 499432"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=499432"
    kind: "roadmap"
  - title: "Always-on diagnostics for endpoint DLP"
    url: "https://learn.microsoft.com/purview/dlp-always-on-diagnostics"
    kind: "learn"
  - title: "Diagnose issues with the \"Paste to supported browsers\" activity in Endpoint DLP"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/data-loss-prevention/diagnose-paste-to-supported-browser-issues"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Onboard macOS devices into Microsoft 365 overview"
    url: "https://learn.microsoft.com/purview/device-onboarding-macos-overview"
    kind: "learn"
videos: []
related: ["endpoint-dlp","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i","microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with"]
controls:
  - governs: "Whether Always-on diagnostics is on, the cache storage period and the per-device storage limit"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Data Loss Prevention > Always-on diagnostics (preview)"
      docs: "https://learn.microsoft.com/purview/dlp-always-on-diagnostics"
    api: null
    note: "Page labels the setting preview and says it applies to Windows and macOS devices together. Enabling needs an Entra role such as Compliance Administrator or a tenant-level Purview role."
  - governs: "Whether device logs are uploaded to Microsoft"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Data Loss Prevention > Always-on diagnostics (preview) > Automatically upload device logs > Share diagnostics with Microsoft"
      docs: "https://learn.microsoft.com/purview/dlp-always-on-diagnostics"
    api: null
    note: "Upload is separate from turning the feature on. The page says logs cannot be downloaded by admins."
  - governs: "Requesting the logs of one device for a support case"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices > device > Always-on Diagnostics > Request device log"
      docs: "https://learn.microsoft.com/purview/dlp-always-on-diagnostics"
    api: null
    note: "The page gives two other starting points: Data Loss Prevention > Alerts > Events, and Explorers > Activity explorer. One active request per device."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-07-31T23:15:15"
changes:
  - date: "2026-11-22"
    note: "First briefing for the macOS item of Always-on diagnostics for endpoint DLP; notes that two Learn pages disagree on macOS support and that the macOS default is not stated."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 65
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "56aa88a40f819c20e0d49af90be87dad"
---

## What's changing

Microsoft Purview Endpoint DLP is gaining Always-on diagnostics for onboarded macOS devices. The roadmap item states that comprehensive trace logs are recorded automatically and stored locally on each onboarded Mac, so that nobody has to reproduce a problem before raising an Endpoint DLP investigation with Microsoft, and that traces can be kept for up to 90 days.

Microsoft Learn already documents the feature, including for Macs. The [Always-on diagnostics for endpoint DLP](https://learn.microsoft.com/purview/dlp-always-on-diagnostics) page says it is supported on onboarded macOS devices running any of the three latest released versions, needs build 101.26042.xxxx or later, and supports x64 and M1, M2 and M3 (ARM64) processors. An administrator turns it on in the Microsoft Purview portal; the page says that enables it on all onboarded Windows and macOS devices. The same setting page lets the administrator choose a cache storage period (90 days is recommended) and a maximum storage per device (500 to 1,500 MB), and a separate option, **Share diagnostics with Microsoft**, enables log upload. The page labels the setting "preview", although the roadmap item lists General Availability as its release phase.

Two Microsoft pages disagree about macOS. A Microsoft Learn troubleshooting page for Endpoint DLP says Always-on diagnostics is supported only on Windows 10, Windows 11 and Windows Server, and tells macOS administrators to use the Microsoft Defender for Endpoint Client Analyzer instead. This briefing reports both and does not pick one.

The roadmap record shows status In development, a target of November CY2025 (a date that has passed) and the Worldwide (Standard Multi-Tenant) cloud, on Desktop and Mac. Microsoft lists the Windows endpoint version separately as roadmap item 499431 (Phase 2, Launched, target March CY2026). This page covers item 499432 only.

## Why it matters

For a service owner, this changes how an Endpoint DLP fault on a Mac is handled. If the feature works as the roadmap describes, support can ask for a log that already exists instead of asking a user to reproduce the problem, which shortens cases about policies that do not fire or fire wrongly on Macs.

The decisions it creates are yours: whether the setting is on, how much storage it may use, and whether device logs may be uploaded to Microsoft. Microsoft has not stated what happens on arrival for macOS devices if nobody acts, so check the setting rather than assume it is off or on. Another Learn page says Always-on diagnostics has been on by default for onboarded Windows devices since mid-April 2026; do not carry that over to Macs.

## Risk assessment

**Data exposure**

- Trace logs are written on each onboarded Mac and, once an administrator selects **Share diagnostics with Microsoft** and requests a device log, uploaded to Microsoft-managed Azure Blob Storage. Learn describes the logs for Windows as including policy-evaluation logs, classification results, enforcement actions and error states; it does not describe the macOS contents. The upload option and the log request are the controls.
- The Learn page says uploaded data stays within the tenant's data residency region and is retained for 180 days unless manually deleted earlier, and that administrators cannot download the logs.

**Security & identity**

- The page says access to uploaded logs is restricted to Microsoft personnel in designated access groups and is audited. Inside the tenant, turning the feature on needs an Entra role such as Compliance Administrator, Security Administrator or Global Administrator, or a tenant-level Purview role; the page says scoped admins are not supported for the Purview roles.
- The page says the feature is only for authorised Endpoint DLP troubleshooting and must not be used for investigative or non-support purposes. Brief the people who hold these roles on that limit.

**Autonomy & actions**

- Recording is continuous once enabled, but the page describes collection as administrator-driven: Microsoft Support requests logs, and the customer administrator collects them from the affected device. The page says only one active collection request is supported per device.

**Change & support**

- Each Mac carries a per-device storage allowance of 500 to 1,500 MB under the setting, so check free disk space on small-disk Macs before choosing a value.
- Uploads need the Mac to reach *.blob.core.windows.net over HTTPS without interception; the page says collection requests may remain pending if the device is offline, wiped, reimaged or reassigned.
- Macs below build 101.26042.xxxx are outside the documented support. With the conflicting troubleshooting page, support may still ask for the Client Analyzer on a Mac.

## Cost and licensing

Licence: Microsoft's [Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) lists Endpoint Data Loss Prevention (DLP) as Included for Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. The [macOS onboarding page](https://learn.microsoft.com/purview/device-onboarding-macos-overview) points to Microsoft's information protection licensing guidance for Endpoint DLP on Macs.

Meter: the Always-on diagnostics page lists device onboarding, connectivity and MDM onboarding as prerequisites and names no licence or meter. A licence, price or meter specific to Always-on diagnostics is not yet published.

Indirect costs: administrator time to set the storage values and handle collection requests, local storage on each Mac within the 500 to 1,500 MB range, and any proxy or firewall change needed for the upload endpoints.

## Scope

Users and devices: Macs onboarded to Microsoft Purview through Intune, JAMF Pro or another MDM solution, running one of the three latest released macOS versions and build 101.26042.xxxx or later. The page says enabling the feature applies it to all onboarded macOS devices, and that the setting covers Windows and macOS devices together.

Roles: the Learn page lists Entra roles (Compliance Administrator, Security Administrator, Global Administrator) and tenant-level Purview roles for enabling it, and a wider set of roles for viewing and creating log collection requests.

Clouds and platforms: the roadmap item lists Worldwide (Standard Multi-Tenant), on Desktop and Mac. Other clouds are not listed on this item. Rollout mechanics and the macOS default are not stated.

## Governance guidance

### Before rollout

- Identify which Macs are onboarded through Intune, JAMF Pro or another MDM solution, and confirm each runs Endpoint DLP build 101.26042.xxxx or later on one of the three latest macOS versions.
- Ask the network team to allow outbound HTTPS from Macs to *.blob.core.windows.net without interception, since the page names these as upload endpoints.
- Decide with your privacy and compliance leads whether **Share diagnostics with Microsoft** may be enabled, given that logs go to Microsoft-managed storage in the tenant's data residency region and the log contents on Macs are not described.
- List who holds the Entra and Purview roles that can enable the feature and request logs, and remove any that are not needed.

### At rollout

- Open the Always-on diagnostics setting in the Microsoft Purview portal and record whether it is On or Off, because the macOS default is not stated.
- Set the cache storage period (Learn recommends 90 days) and the per-device maximum storage (500 to 1,500 MB) to what your Mac fleet can spare.
- Turn on the upload option only once the privacy decision is made, and record who made it.

### After rollout

- Request a device log for one test Mac and follow it to a completed status, to prove that the upload path and the roles work before a real incident.
- Monitor collection requests, retrying any that fail; the page makes administrators responsible for this and allows one active request per device.
- Re-read the Learn pages when the roadmap status changes, because Microsoft's pages disagree today on whether Always-on diagnostics supports macOS.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Always-on diagnostics is on, the cache storage period and the per-device storage limit</strong><br><small>Tenant</small><br><small class="controls__note">Page labels the setting preview and says it applies to Windows and macOS devices together. Enabling needs an Entra role such as Compliance Administrator or a tenant-level Purview role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Data Loss Prevention › Always-on diagnostics (preview) <a href="https://learn.microsoft.com/purview/dlp-always-on-diagnostics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether device logs are uploaded to Microsoft</strong><br><small>Tenant</small><br><small class="controls__note">Upload is separate from turning the feature on. The page says logs cannot be downloaded by admins.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Data Loss Prevention › Always-on diagnostics (preview) › Automatically upload device logs › Share diagnostics with Microsoft <a href="https://learn.microsoft.com/purview/dlp-always-on-diagnostics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Requesting the logs of one device for a support case</strong><br><small class="controls__note">The page gives two other starting points: Data Loss Prevention &gt; Alerts &gt; Events, and Explorers &gt; Activity explorer. One active request per device.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices › device › Always-on Diagnostics › Request device log <a href="https://learn.microsoft.com/purview/dlp-always-on-diagnostics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both settings and the log request are portal-only at the time of writing (November 2026): the Learn pages read give no PowerShell, Graph or REST operation for them. Learn describes the on/off setting, cache period and storage limit as one setting for Windows and macOS together, so a Mac-specific value is not documented.

Roles differ by task: the enabling roles and the log-request roles are separate lists on the Learn page, and the Purview roles in both must be assigned at tenant level. Device onboarding is the prerequisite for everything else here; the Devices list under Device onboarding is also one of three places where a log request can start.

## Open questions

- Is Always-on diagnostics on or off by default for macOS devices? Watch the Learn page and Message center; Learn states a Windows default only.
- Does Always-on diagnostics support macOS, as the feature page says, or only Windows, as the troubleshooting page says? Watch both Learn pages for a correction.
- What do the macOS trace logs contain, and does the upload option send them without a per-request admin action? Watch the Always-on diagnostics page.
- When will roadmap item 499432 move from In development, given that its November CY2025 target has passed and Learn already documents the feature?
- Will a licence, price or meter specific to Always-on diagnostics be published? Watch the Purview service description.

<!-- rationale
risk: Medium. Learn describes a setting that lets admins upload device trace logs to Microsoft, and the contents of those logs and the macOS default are not stated, so the upload choice needs a decision.
cost: Low. Microsoft's Purview service description lists Endpoint DLP as included in the plans it names, and no meter is published for this feature; the known cost is admin time and device storage.
impact: Low. Administrators configure it and Microsoft Support uses it; the roadmap describes background logging on Macs, and no end-user prompt or workflow change is described.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[2].note; Governance controls table / admin-path: Explorers > Activity explorer is another starting point for requesting logs. | Found: From Data Loss Prevention > Explorers > Activity explorer, select an alert from the list. | Fix: Replace 'Explorers > Activity explorer' in controls[2].note and its rendered table note with 'Data Loss Prevention > Explorers > Activity explorer', as documented at https://learn.microsoft.com/purview/dlp-always-on-diagnostics. | Source: https://learn.microsoft.com/purview/dlp-always-on-diagnostics
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What's changing / record: The separate Windows endpoint item is roadmap 499431. | Found: 499431: Microsoft Purview compliance portal: Endpoint Data Loss Prevention -- Always-on diagnostics for Windows Endpoints (Phase 2) | Fix: Add Microsoft 365 Roadmap 499431 to sources at https://www.microsoft.com/microsoft-365/roadmap?id=499431; its record supports the Windows comparison.
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance: At rollout / admin-path: Microsoft Purview portal > Settings > Data Loss Prevention > Always-on diagnostics (preview) reaches the on/off, cache and storage settings. | Found: Navigate to Settings > Data Loss Prevention > Always-on diagnostics (preview). 3. Select On. 4. Set the cache storage period. | Fix: Keep the shared route and append ' > On' to controls[0].ui.path for enabling the feature; retain the note that the same page sets the cache storage period and maximum storage per device. | Source: https://learn.microsoft.com/purview/dlp-always-on-diagnostics
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist names device-onboarding inventory, firewall/proxy rules and role assignments without corresponding control rows. | Found: Identify which Macs are onboarded ... allow outbound HTTPS ... List who holds the Entra and Purview roles ... Table rows cover diagnostics settings, upload consent and requesting a device log. | Fix: The Before rollout steps to inventory onboarding, change firewall/proxy rules and review role assignments have no corresponding table rows. Remove those three checklist bullets; retain the verified prerequisites and roles in Scope and Risk assessment. Do not add control rows in this correction.
-->
