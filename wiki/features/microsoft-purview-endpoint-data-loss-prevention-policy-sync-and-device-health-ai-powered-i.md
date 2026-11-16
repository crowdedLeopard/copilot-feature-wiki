---
title: "Microsoft Purview Endpoint DLP: AI-powered investigation of policy sync and device health"
slug: "microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i"
roadmapId: 565374
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans AI-guided diagnosis of Endpoint DLP policy sync failures on devices, for compliance and security admins. Targeted August CY2027; no admin action is documented yet, and Microsoft Learn does not describe it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "August CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this capability. The Endpoint DLP getting-started page refers readers to Microsoft 365 Enterprise Plans and the Microsoft 365 service descriptions for licensing."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","ai","monitoring","endpoint-dlp","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 565374"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565374"
    kind: "roadmap"
  - title: "Troubleshooting endpoint data loss prevention configuration and policy sync"
    url: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    kind: "learn"
  - title: "Monitor device health with the device health reports dashboard"
    url: "https://learn.microsoft.com/purview/device-onboarding-health-reports-dashboard"
    kind: "learn"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Get started with endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-getting-started"
    kind: "learn"
videos: []
related: ["purview-dlp-block-sensitive-data-in-copilot-web-search"]
controls:
  - governs: "Tenant switch for AI-powered device and policy sync investigation"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented at the time of writing (November 2026). No setting to enable, disable or scope the feature has been published."
  - governs: "Per-device configuration status and policy sync status"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api:
      kind: "other"
      call: "Microsoft Defender portal Advanced hunting: DeviceInfo | where DlpInfo != \"\" | project DlpInfo"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    note: "Today's manual route, not a control over the AI feature. Read-only view of status and device attributes."
  - governs: "Device readiness for policy updates and Endpoint DLP features"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Device report"
      docs: "https://learn.microsoft.com/purview/device-onboarding-health-reports-dashboard"
    api: null
    note: "Requires Compliance Administrator, Security Administrator or Global Administrator. Indicators show devices at risk of missing updates, not confirmed failures."
  - governs: "Overall policy sync status across devices"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Overview"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api: null
    note: "The Learn page places the Policy status report in the Microsoft Purview compliance portal on this page."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-16"
    note: "First briefing: roadmap-only description of the agent skill, with the existing Endpoint DLP device health controls recorded as today's alternative."
  - date: "2026-11-16"
    note: "First briefing for roadmap item 565374: roadmap-only description of the AI capability, with today's documented device status and health tools shown as the manual route."
version: 2
verification:
  status: "verified"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 64
  unconfirmed: 0
  contradicted: 0
  attempts: 0
---

## What's changing

Microsoft plans to add AI-powered investigation to Microsoft Purview Endpoint Data Loss Prevention (Endpoint DLP, the Purview feature that monitors and restricts how sensitive items are used and shared on onboarded devices). The roadmap item describes visibility into DLP policy deployment across devices, so admins can track sync progress and understand enforcement coverage.

Per the roadmap description, the capability should identify impacted devices, explain the root causes of sync failures and give recommended actions to diagnose and resolve them. Microsoft Learn does not describe this AI capability yet, so what is written here about its behaviour is the roadmap's description, not documented product behaviour.

What exists today is manual. The Microsoft Purview portal lists each onboarded device with a **Configuration status** and a **Policy sync status**, and a device health reports dashboard summarises device readiness. The roadmap item gives no detail on how the new capability relates to these pages.

The roadmap record lists the item as In development, with a General Availability release phase targeted for August CY2027, for GCC, GCC High and DoD, on the Web platform. The target is Microsoft's plan, not a commitment, and no preview date is given.

## Why it matters

An Endpoint DLP policy only protects a device once the device has received it. Learn states that devices must be online for a policy update to happen, and that a device whose status is **Not updated** has not synced the latest policy updates. Devices in that state keep enforcing an outdated policy, so gaps between what the compliance team believes is enforced and what the endpoint enforces are a real exposure.

If Microsoft delivers what the roadmap describes, the benefit is shorter diagnosis of those gaps. Nothing needs configuring before then, and the sensible position is to build the manual routine now, so any AI guidance can be judged against a known baseline.

## Risk assessment

**Data exposure**
- The roadmap describes diagnostics about policy deployment and device health. It does not say the feature reads file content or new data; Learn's device attributes for the existing views are operational (last seen, OS, Defender versions, last policy sync time).
- The gap it targets is a data exposure in itself: Learn states that policies updated while a device is offline are not pushed to that device, and the outdated policy is still enforced.

**Security & identity**
- Roles are not documented for the new capability. The existing device health reports dashboard requires Compliance Administrator, Security Administrator or Global Administrator. Whether the AI capability uses the same roles is not stated.
- Whether AI-generated explanations are logged, or what data they are generated from, is not stated.

**Autonomy & actions**
- The roadmap describes recommended actions that guide admins. It does not say the feature changes devices or policies itself, and no autonomous remediation is described.

**Change & support**
- AI-generated root causes could differ from the remediation steps in the device details pane and the Learn workflow diagram. Treat them as a second opinion until Microsoft documents how they are produced.
- Support evidence stays the same as today: Learn lists OS, Defender engine version, Defender client version, MDATP device ID and Valid user as the values to record for a support ticket.

## Cost and licensing

No licence, meter or price for this capability is published yet. Microsoft Learn's Endpoint DLP getting-started page lists "SKU/subscriptions licensing" and points to Microsoft 365 Enterprise Plans and the Microsoft 365 service descriptions, without naming a licence for this item.

The roadmap description does not say whether the AI-powered investigation uses Microsoft Security Copilot or any other metered service, so budget for no new spend yet but do not treat that as confirmed. The cost known today is admin time to work through device lists and remediation steps.

## Scope

The roadmap lists Microsoft Purview as the product, with GCC, GCC High and DoD as the clouds and Web as the platform. Worldwide availability is not listed on the record. That is a record fact, not a statement that the feature is unavailable elsewhere.

The devices in scope are those onboarded to Endpoint DLP. Learn says Endpoint DLP monitors onboarded Windows 10, Windows 11 and macOS devices running any of the three latest released versions, and the device health dashboard requires devices to be onboarded and actively reporting device telemetry. Which roles can use the AI capability is not stated.

## Governance guidance

### Before rollout
- Record how many onboarded devices show **Not updated** or **Not available** for Policy sync status in Settings > Device onboarding > Devices in the Microsoft Purview portal, so there is a baseline to compare against.
- Assign the Compliance Administrator or Security Administrator role to the people who will triage device health; Learn names these as the least-privileged roles for the device health reports dashboard.
- Agree who owns remediation of Microsoft Defender Antivirus settings on devices, because Learn says configuration status includes Defender Antivirus always-on protection and behaviour monitoring.

### At rollout
- Check the roadmap item and Message center for a preview date or confirmation of GCC, GCC High and DoD availability before planning pilots.
- Compare any AI-generated root cause against the device details pane and the Learn troubleshooting workflow before acting on it.

### After rollout
- Review the device health reports dashboard regularly for devices that are offline, on outdated Defender versions or misconfigured, as Learn recommends.
- Query the DlpInfo column of the DeviceInfo table in Advanced hunting to report on configuration validity and policy modification times across the estate.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant switch for AI-powered device and policy sync investigation</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented at the time of writing (November 2026). No setting to enable, disable or scope the feature has been published.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Per-device configuration status and policy sync status</strong><br><small class="controls__note">Today's manual route, not a control over the AI feature. Read-only view of status and device attributes.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Microsoft Defender portal Advanced hunting: DeviceInfo | where DlpInfo != &quot;&quot; | project DlpInfo</code> <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Device readiness for policy updates and Endpoint DLP features</strong><br><small class="controls__note">Requires Compliance Administrator, Security Administrator or Global Administrator. Indicators show devices at risk of missing updates, not confirmed failures.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Device report <a href="https://learn.microsoft.com/purview/device-onboarding-health-reports-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Overall policy sync status across devices</strong><br><small class="controls__note">The Learn page places the Policy status report in the Microsoft Purview compliance portal on this page.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Overview <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No tenant switch, role or API for the AI-powered investigation is documented, so the first row of the table states that gap. The remaining rows are today's manual tools for the same problem. They do not govern the new capability and Microsoft has not said how it will relate to them.

Reaching the device health reports dashboard needs Compliance Administrator, Security Administrator or Global Administrator. Learn says status in the devices list can take up to 2 hours to update, so a freshly fixed device may still show as Not updated.

## Open questions

- Does the AI-powered investigation use Microsoft Security Copilot, and if so does it consume security compute units? Watch the Purview documentation and the roadmap item.
- Which licence is needed to use it, and is it included with Endpoint DLP licensing? Watch the Microsoft 365 service descriptions.
- Can admins turn the capability off, or limit it to certain roles? No setting is documented yet.
- What data are root-cause explanations built from, and is the activity audited?
- Will it cover macOS devices as well as Windows devices, and when will GCC, GCC High and DoD tenants receive it relative to the August CY2027 target?

<!-- rationale
risk: Low. The roadmap describes a diagnostic view of DLP policy deployment, not a change to enforcement; no source says it changes what Endpoint DLP blocks or what data it reads. The default state is not stated.
cost: Low. The only cost the sources show is admin time. No licence, meter or price for this capability is published yet, and Endpoint DLP itself points to Microsoft 365 licensing guidance.
impact: Low. The roadmap describes the feature for admins who track DLP policy deployment; end users are not described as noticing it.
-->
