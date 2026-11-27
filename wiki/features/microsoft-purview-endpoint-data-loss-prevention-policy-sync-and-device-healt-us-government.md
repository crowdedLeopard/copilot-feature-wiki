---
title: "Microsoft Purview Endpoint DLP: AI investigation of policy sync and device health (GCC, GCC High and DoD)"
slug: "microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-healt-us-government"
roadmapId: 565374
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans AI-assisted diagnosis of Endpoint DLP policy sync failures and device health for GCC, GCC High and DoD, targeted August CY2027. Administrators who run Endpoint DLP are affected; no action is needed yet."
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
  notes: "Not yet published. The roadmap record names no licence for this capability, and the Learn page for Endpoint DLP lists none."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","ai","monitoring","device-onboarding","gcc","gcc-high","dod"]
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
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-deployments"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions - DoD deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-dod-deployments"
    kind: "learn"
  - title: "Microsoft Security Copilot Data and Compliance Frequently Asked Questions"
    url: "https://learn.microsoft.com/copilot/security/faq-data-compliance"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i","microsoft-purview-data-loss-prevention-reduce-policy-sync-status-sla-on-the-purview-ui-fro","microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with"]
controls:
  - governs: "Tenant switch for the AI-powered policy sync and device health investigation"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting to enable, disable or scope the capability is documented at the time of writing (November 2026)."
  - governs: "Per-device configuration status and policy sync status"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api:
      kind: "other"
      call: "DeviceInfo | where DlpInfo != \"\""
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    note: "Today's manual route, not a control over the AI capability. Read-only. The query runs in the Microsoft Defender portal under Investigation & response > Hunting > Advanced hunting."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-20"
    note: "First briefing for roadmap item 565374, the GCC, GCC High and DoD entry for this feature, targeted August CY2027."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 72 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 71
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "ff434b5d2a5139307457aa7898bbe1af"
---

## What's changing

Microsoft plans to add AI-powered investigation to Endpoint Data Loss Prevention (Endpoint DLP, the Microsoft Purview feature that monitors and restricts how sensitive items are used on onboarded devices). The roadmap item says it will give visibility into DLP policy deployment across devices, so that administrators can track sync progress and understand enforcement coverage. It also says the capability will identify impacted devices, explain root causes of sync failures and recommend actions to diagnose and resolve them.

Microsoft Learn does not describe this capability yet, so what is written here about its behaviour is the roadmap's description, not documented product behaviour. The roadmap record gives no more detail on how the capability appears or how it is switched on.

This page covers roadmap item 565374, which lists GCC, GCC High and DoD on the Web platform. Microsoft lists the same feature under a second roadmap id, 562016, for Worldwide (Standard Multi-Tenant), with a preview targeted for June CY2027 and general availability targeted for July CY2027; that item has its own page at [/features/microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i/](/features/microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i/). Item 565374 is In development, with general availability targeted for August CY2027 and no preview date. These are Microsoft's targets, not commitments.

Today's manual route is documented. Learn describes a per-device **Configuration status** and **Policy sync status**, each with the values Updated, Not updated or Not available, and says a device that is not synced shows Not updated. It also says devices must be online for the policy update to happen and that the status in the devices list might take up to 2 hours to update.

## Why it matters

A policy that has not reached a device is not enforced there, so sync failures are an enforcement gap that administrators currently chase by hand through the Devices list and Learn's troubleshooting workflow. If the AI capability does what the roadmap describes, it could shorten that work for tenants with many onboarded devices. Treat that as a plan until Microsoft documents it.

Microsoft has not stated what happens on arrival if nobody acts, and no source says existing Endpoint DLP behaviour changes. Because Microsoft has not published a licence or meter either, a service owner in GCC, GCC High or DoD should watch the roadmap item and the Worldwide item's progress before committing resources.

## Risk assessment

**Data exposure**
- Microsoft has not said which data the capability reads. The device attributes Learn lists for troubleshooting (Last seen, OS, Defender engine version, MDATP device ID and Valid user) are visible to administrators today in the Devices list; whether the AI capability uses them is not stated.
- Whether the capability's prompts, responses or analysis stay inside the government cloud tenant is not stated for this feature.

**Security & identity**
- The roles needed to use the capability are not stated. Learn's device health reports dashboard, today's closest tool, needs Compliance Administrator, Security Administrator or Global Administrator.
- Which identity the capability runs under is not stated.

**Autonomy & actions**
- The roadmap describes explanations and recommended actions for administrators to follow. It does not say that the capability changes devices or policies itself.

**Change & support**
- Compare any AI-generated root cause with Learn's troubleshooting workflow and the remediation steps in the device details pane before changing a device. Learn says a device that is offline will not receive a policy update, which an AI explanation could confuse with a real sync fault.
- Support tickets today use the OS, Defender engine version, Defender client version, MDATP device ID and Valid user values from **Device details**, so keep recording them.

## Cost and licensing

A licence for this capability is not yet published. The roadmap record names none, and the Learn page for Endpoint DLP lists no licence. No meter or consumption rate for this capability is published either.

The Learn planning pages for Microsoft Purview in GCC, GCC High and DoD list Endpoint data loss prevention as Available in each cloud. That statement is about Endpoint DLP itself and not about this capability.

The indirect cost is administrator time: reviewing the AI output against the device details and the troubleshooting workflow. Re-check this section when Microsoft publishes a Learn page or Message center notice for the capability.

## Scope

The roadmap lists Microsoft Purview as the product, GCC, GCC High and DoD as the clouds, Web as the platform and General Availability as the release phase. The Worldwide cloud has its own roadmap item with earlier targets.

The devices in scope are those onboarded to Endpoint DLP. Learn says Endpoint DLP extends DLP monitoring and protection to Windows 10/11, macOS (the three latest released major versions) devices, and certain Windows server versions. Whether the AI capability covers both Windows and macOS devices is not stated.

The roadmap does not state which roles can use the capability, what prerequisites it has or how it rolls out.

## Governance guidance

### Before rollout
- Count the devices whose **Policy sync status** is Not updated or Not available in the Microsoft Purview portal (Settings > Device onboarding > Devices), so the capability's output can be judged against a baseline.
- Assign Compliance Administrator or Security Administrator to the people who will triage device health; Learn names them as roles for the device health reports dashboard and advises the least-privileged role that meets the need.
- Confirm that onboarded devices are online and reporting, because Learn says devices must be online for the policy update to happen.

### At rollout
- Track roadmap item 565374 for movement from In development, and compare it with the Worldwide item 562016 for the sequence in which clouds receive it.
- Check where the capability appears in the Microsoft Purview portal before telling teams to use it.
- Compare each AI-generated root cause with the device details pane and Learn's workflow diagram before changing a device.

### After rollout
- Query the DlpInfo column of the DeviceInfo table in Advanced hunting to cross-check configuration validity and the last policy modification time reported for devices.
- Allow up to 2 hours for the Devices list to update after fixing a device before judging whether the fix worked.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant switch for the AI-powered policy sync and device health investigation</strong><br><small>Tenant</small><br><small class="controls__note">No setting to enable, disable or scope the capability is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Per-device configuration status and policy sync status</strong><br><small class="controls__note">Today's manual route, not a control over the AI capability. Read-only. The query runs in the Microsoft Defender portal under Investigation &amp; response &gt; Hunting &gt; Advanced hunting.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>DeviceInfo | where DlpInfo != &quot;&quot;</code> <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting to turn this capability on, off or limit it to certain roles at the time of writing (November 2026), and no API for it, so the first row states that gap.

The second row is today's manual route to the same information. It is a read-only view of the status and device attributes and does not govern the AI capability. The device health reports dashboard (Microsoft Purview portal > Settings > Device onboarding > Device report) is a further manual tool; Learn says it needs Compliance Administrator, Security Administrator or Global Administrator, and that its readiness indicators do not confirm whether a device failed to receive a policy update but highlight devices that may be at risk of not receiving future updates.

## Open questions

- Is the capability on or off when it arrives, and can administrators control it? Microsoft has not stated a default; watch the roadmap item and Message center.
- Which licence or meter, if any, applies to this capability in GCC, GCC High and DoD? Watch the Learn Endpoint DLP page and Message center.
- Which AI service powers it? Microsoft's Security Copilot data and compliance FAQ says Security Copilot currently isn't designed for use by customers using US government clouds, so confirm whether this capability depends on it.
- Which data and roles does the capability use, and is its activity audited?
- Will the government clouds follow the Worldwide item's June CY2027 preview and July CY2027 general availability, given that item 565374 shows August CY2027 and no preview date?

<!-- rationale
risk: Low. The roadmap describes diagnosis and recommended actions, not a change to what Endpoint DLP enforces. The default state is not stated, so this rates today's behaviour continuing.
cost: Low. The only cost the sources show is administrator time to review the output. A licence or meter for this capability is not yet published.
impact: Low. The roadmap describes it for administrators who track DLP policy deployment across devices. It does not describe anything that end users see.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope; Governance guidance / record: Roadmap item 562016 lists the same named feature for Worldwide (Standard Multi-Tenant). | Found: "id": 562016; "title": "Microsoft Purview: Endpoint Data Loss Prevention - Policy Sync & Device Health AI-Powered Investigation"; "clouds": ["Worldwide (Standard Multi-Tenant)"] | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=562016 to sources for the Worldwide item's scope and targets.
- [supported, minor] front matter: licensing.model / licensing: Licensing is unknown for the capability. | Found: Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5/G5 Information Protection & Governance | Endpoint Data Loss Prevention (DLP) | Included | Fix: Set licensing.model to included. Replace licensing.notes with 'Endpoint DLP is included in Microsoft 365 E5/A5/G5, among other listed plans. Licensing specific to this planned AI investigation capability is not yet published.' Add the cited Microsoft Purview service description URL to sources. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description#microsoft-data-loss-prevention-endpoint-data-loss-protection-dlp
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist's instruction to assign device-health triage roles has a corresponding controls-table row. | Found: Assign Compliance Administrator or Security Administrator to the people who will triage device health; controls: Tenant switch for the AI-powered policy sync and device health investigation; Per-device configuration status and policy sync status. | Fix: Replace the checklist bullet beginning 'Assign Compliance Administrator or Security Administrator' with 'Plan who will triage device health using the dashboard roles described in Risk assessment.' The role-assignment instruction has no controls-table row; do not add a row as part of this correction.
-->
