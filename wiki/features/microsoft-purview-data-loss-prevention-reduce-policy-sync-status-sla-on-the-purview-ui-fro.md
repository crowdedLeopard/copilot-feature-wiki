---
title: "Microsoft Purview DLP: policy sync status within 30 minutes (Worldwide)"
slug: "microsoft-purview-data-loss-prevention-reduce-policy-sync-status-sla-on-the-purview-ui-fro"
roadmapId: 558682
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to cut the Purview DLP policy sync SLA from up to 2 hours to 30 minutes in the Worldwide cloud. It is on by default and needs no action; tell security teams that policy changes will take effect sooner."
status: "rolling-out"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Endpoint DLP is included in Microsoft 365 E5, among other eligible plans listed in the Microsoft Purview service description. A licence statement specific to the faster sync change is not yet published."
audiences: ["security","compliance","m365-admin"]
tags: ["dlp","endpoint-dlp","purview","device-onboarding"]
sources:
  - title: "Microsoft 365 Roadmap 558682"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558682"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap 562994"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562994"
    kind: "roadmap"
  - title: "MC1317834: (Updated) Microsoft Purview | Data Loss Prevention: Faster policy sync (2 hours to 30 minutes)"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1317834"
    kind: "message-center"
  - title: "Troubleshooting endpoint data loss prevention configuration and policy sync"
    url: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    kind: "learn"
  - title: "Onboard Windows devices into Microsoft 365 overview"
    url: "https://learn.microsoft.com/purview/device-onboarding-overview"
    kind: "learn"
  - title: "Learn about Endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-learn-about"
    kind: "learn"
  - title: "Get started with endpoint data loss prevention"
    url: "https://learn.microsoft.com/purview/endpoint-dlp-getting-started"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Test data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-test-dlp-policies"
    kind: "learn"
  - title: "security: runHuntingQuery"
    url: "https://learn.microsoft.com/graph/api/security-security-runhuntingquery"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i","microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i"]
controls:
  - governs: "Per-device policy sync status for Endpoint DLP"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api:
      kind: "graph"
      call: "POST /v1.0/security/runHuntingQuery"
      docs: "https://learn.microsoft.com/graph/api/security-security-runhuntingquery"
    note: "Read-only. The request body sets Query; the troubleshooting page says the DeviceInfo table's DlpInfo column holds the same status. Roles apply."
  - governs: "Switch to opt out of the faster policy sync"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1317834 says the improvement is enabled by default; Microsoft Learn documents no setting for it at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-26"
roadmapModified: "2026-11-26T00:16:54"
changes:
  - date: "2026-11-19"
    note: "New briefing: Microsoft plans to cut the DLP policy sync SLA from 2 hours to 30 minutes in the Worldwide cloud; on by default."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Status now Rolling out; licensing set to included, citing the Microsoft Purview service description for Endpoint DLP; added sources for roadmap item 562994, Endpoint DLP getting started and DLP policy testing."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 62 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 61
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "3a804529db51678a664890fb61264123"
---

## What's changing

Microsoft plans to shorten the time it takes for Data Loss Prevention (DLP) policy changes to sync and to show as synced in the Microsoft Purview portal, from up to 2 hours to 30 minutes. The roadmap item describes it as: "Admin should be able to see the Endpoint DLP policy sync status on the Purview portal within 30 mins."

Microsoft's notice MC1317834 (published 2026-05-21, last updated 2026-08-12) describes the same change more broadly: DLP policy updates will sync within 30 minutes instead of up to 2 hours, policy enforcement across supported services will occur more quickly, the improvement is enabled by default and no changes to existing admin workflows are required. The notice states that the change improves the timing of enforcement but does not change policy behaviour, data processing or data storage.

The roadmap item is Rolling out. It lists a preview target of October CY2026 and a general availability target of November CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web. MC1317834 gives the rollout window: public preview from late October 2026, completing by mid-November 2026, and general availability (Worldwide) from late November 2026 (previously end of August), completing by late December 2026. Microsoft lists the same feature under a separate roadmap item, 562994, for GCC, GCC High and DoD, with a December CY2026 target; this page covers item 558682 only.

Microsoft Learn does not yet describe the 30-minute target. Today, the Endpoint DLP troubleshooting page says that a device's policy sync status in the devices list can take up to 2 hours to update, and the Endpoint DLP overview says that updates generally take about an hour to synchronise across the service. Both pages are quoted as they read at the time of writing (November 2026).

## Why it matters

For a service owner this is a timing change, not a new control. If you do nothing, Microsoft's notice says the improvement is enabled by default and applied automatically as it rolls out, so policy changes and the sync status that confirms them should arrive sooner, once the release reaches your tenant.

The practical effect is on change handling: a tightened Endpoint DLP policy is planned to take effect, and show as synced, sooner than the current wait of up to 2 hours. Plan for security and compliance teams to expect faster enforcement and to update change windows, runbooks and any support guidance that tells users to wait 2 hours.

## Risk assessment

**Data exposure**
- No new data access: Microsoft's notice says the change does not alter policy behaviour, data processing or data storage.
- A policy edit that is too broad would be enforced sooner than before. Test rule changes in simulation or audit mode in a pilot scope first, because the delay that used to absorb a mistake is planned to shrink.

**Security & identity**
- The sync status in Settings > Device onboarding > Devices (Policy sync status: Updated, Not updated or Not available) is the evidence that a device holds the latest policy. A faster SLA does not change what the three values mean.
- The Learn page says devices must be online for the policy update to happen, so offline devices stay unsynced whatever the SLA.

**Autonomy & actions**
- No change: the notice describes no new automated action; only the timing of enforcement.

**Change & support**
- Help desk and runbook text that says to wait up to 2 hours after a policy change becomes out of date once the release reaches your tenant.
- Learn documents a separate 24-hour sync for Authorized Groups changes. Microsoft has not said whether the 30-minute target covers that case, so keep the existing wait for those changes until it does.

## Cost and licensing

Endpoint DLP is included in Microsoft 365 E5, among other eligible plans listed in the Microsoft Purview service description. Microsoft's notice describes no charge, meter or new licence for this change, and asks for no action. The Endpoint DLP getting-started and device onboarding pages direct readers to Microsoft 365 Enterprise Plans and the Microsoft 365 service descriptions for licensing. A licence statement specific to the faster sync change is not yet published.

The indirect cost is admin time to brief security and compliance teams and to update runbooks.

## Scope

MC1317834 says the affected group is Microsoft 365 administrators managing Microsoft Purview DLP policies, across Microsoft Purview and the Microsoft 365 services where DLP policies are enforced. The roadmap record covers the Worldwide (Standard Multi-Tenant) cloud on the web, with General Availability and Preview release phases. GCC, GCC High and DoD are covered by roadmap item 562994.

The device policy sync status appears for onboarded devices on the Device onboarding page. To view device management settings, the Learn onboarding page lists these Entra roles for a custom account: Compliance admin, Compliance data admin, Global reader, Security admin and Global admin; it says Purview roles are not supported for device management.

No prerequisite for the faster sync is published beyond the notice's statement that it is applied automatically.

## Governance guidance

### Before rollout
- Tell security and compliance teams that DLP policy changes are planned to take effect within 30 minutes instead of up to 2 hours, as MC1317834 recommends.
- Check that the people who watch device health hold one of the Entra roles Learn lists for viewing device management settings.
- Find runbooks, change templates and help desk text that tell people to wait 2 hours for a DLP change and mark them for update.

### At rollout
- Watch Message center for MC1317834 updates: the general availability window is late November to late December 2026 and has already moved once.
- Change one Endpoint DLP policy in a pilot scope and note how long Policy sync status takes to show Updated for a test device.

### After rollout
- Review the Policy sync status of onboarded devices at Settings > Device onboarding > Devices and follow the details pane for any device that stays Not updated.
- Update the stated wait time in your runbooks once you have seen the new timing in your own tenant.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Per-device policy sync status for Endpoint DLP</strong><br><small>Tenant</small><br><small class="controls__note">Read-only. The request body sets Query; the troubleshooting page says the DeviceInfo table's DlpInfo column holds the same status. Roles apply.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/security/runHuntingQuery</code> <a href="https://learn.microsoft.com/graph/api/security-security-runhuntingquery" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch to opt out of the faster policy sync</strong><br><small>Tenant</small><br><small class="controls__note">MC1317834 says the improvement is enabled by default; Microsoft Learn documents no setting for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The status control is read-only: it shows whether a device received the latest policy and does not speed up or delay enforcement. The Learn page says the Policy sync status can take up to 2 hours to update; the 30-minute target is Microsoft's plan and is not yet documented on Learn.

The devices list is limited to the Entra roles named under Scope. The advanced hunting route needs the Microsoft Defender portal and, for the Graph call, the permissions that reference lists.

## Open questions

- Does the 30-minute target cover the sync status shown on the Device onboarding page, the policy sync itself, or both? The roadmap item and MC1317834 word it differently. Watch the Endpoint DLP troubleshooting page on Learn.
- Does it apply to Authorized Groups changes, which Learn says need 24 hours to sync?
- Is the Endpoint DLP policy sync the same as the DLP policy sync in Microsoft 365 services such as Exchange and SharePoint that MC1317834 mentions? Watch MC1317834.
- Will the general availability date move again beyond the late November to late December 2026 window? Watch MC1317834.

<!-- rationale
risk: Low. Microsoft's notice says the change affects timing only, not policy behaviour, data processing or storage, so no new data access or exposure is added.
cost: Low. The only cost the sources show is admin time to brief teams; no meter or feature-specific licence is published, and Microsoft's notice asks for no action.
impact: Low. Administrators who watch DLP sync status notice it first; Microsoft's notice says existing admin workflows do not change, though enforcement across supported services is planned to happen sooner.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout / consistency: The checklist instructs the reader to change an Endpoint DLP policy in a pilot scope, but the controls table has no policy-editing control. | Found: Change one Endpoint DLP policy in a pilot scope and note how long Policy sync status takes to show Updated for a test device. Table rows: Per-device policy sync status for Endpoint DLP; Switch to opt out of the faster policy sync. | Fix: Replace the At rollout policy-change bullet with 'Observe Policy sync status for an onboarded test device after a planned policy change and note how long it takes to show Updated.' This keeps the instruction on the documented status row without adding a control.
- [supported, minor] Risk assessment: Data exposure / behaviour: Endpoint DLP supports audit-only testing of policy behaviour. | Found: This scenario shows how to create a Microsoft Purview DLP policy using the U.S. PII Data Enhanced template to monitor sensitive data on endpoint devices. The policy runs in audit-only (simulation) mode | Fix: Add https://learn.microsoft.com/purview/endpoint-dlp-create-policy-audit-activities to sources for the audit-mode advice. | Source: https://learn.microsoft.com/purview/endpoint-dlp-create-policy-audit-activities
-->
