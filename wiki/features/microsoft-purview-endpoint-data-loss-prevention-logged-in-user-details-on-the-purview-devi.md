---
title: "Microsoft Purview Endpoint DLP: logged-in user email on the Windows device onboarding page (Worldwide)"
slug: "microsoft-purview-endpoint-data-loss-prevention-logged-in-user-details-on-the-purview-devi"
roadmapId: 548669
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to show the signed-in user's email on the Purview device onboarding page for Windows devices, as for macOS. Worldwide item; admin-only visibility. Check the client prerequisite; no setting is documented."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: "February CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. The Learn device onboarding overview points to the Microsoft 365 Enterprise Plans and the Microsoft 365 service descriptions for licensing and names no licence for this display."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","device-onboarding","privacy","advanced-hunting"]
sources:
  - title: "Microsoft 365 Roadmap 548669"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=548669"
    kind: "roadmap"
  - title: "Onboard Windows devices into Microsoft 365 overview"
    url: "https://learn.microsoft.com/purview/device-onboarding-overview"
    kind: "learn"
  - title: "Troubleshooting endpoint data loss prevention configuration and policy sync"
    url: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    kind: "learn"
videos: []
related: ["endpoint-dlp","microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with","microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i"]
controls:
  - governs: "Where admins read each onboarded device's status and attributes, including the planned user detail"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices"
      docs: "https://learn.microsoft.com/purview/device-onboarding-overview"
    api:
      kind: "other"
      call: "DeviceInfo | where DlpInfo != \"\""
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    note: "Read routes, not a switch for the new detail. The query runs in Advanced hunting in the Microsoft Defender portal. Learn says device management supports Entra roles only."
  - governs: "Switch to turn the logged-in user detail on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-01-23T00:15:29"
changes:
  - date: "2026-11-24"
    note: "First briefing for roadmap item 548669: planned logged-in user email on the Windows device onboarding page (Worldwide)."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 42 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 41
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "f3acad7a791ebdf7f64e879d4dfa1110"
---

## What's changing

The roadmap item says Microsoft plans to show logged-in user details (the user's email) on the Microsoft Purview device onboarding page for Windows devices, in line with what the page already offers for macOS devices. Admins would then see which user is signed in on a device, which the roadmap says makes it faster to confirm ownership and troubleshoot issues.

This briefing covers roadmap item 548669, which lists Worldwide (Standard Multi-Tenant) and the Web platform. Microsoft lists the same feature under a second roadmap item, 559028, for GCC, GCC High and DoD; the record for that item shows status Launched and a May CY2026 target.

Microsoft Learn's Windows device onboarding overview lists this feature by its roadmap ID in its table of per-feature prerequisites: Anti-malware Client Version 4.18.26030 or newer, with Windows update details linked for each supported Windows version. Learn does not yet describe where or how the user email appears on the page, so what follows about its behaviour is the roadmap's description.

The roadmap record shows status In development, a preview target of February CY2026 and a general availability target of March CY2026. These are Microsoft's targets, and the record was last modified in January 2026. Learn already lists the prerequisite, so check the roadmap item and Message center for the current status before relying on either.

## Why it matters

Service owners who run Endpoint DLP use the Devices page to see whether onboarded devices are configured and in sync. Learn's troubleshooting page already lists a **Valid user** attribute there, which indicates whether the currently logged on user has a corresponding Entra ID account and is in scope of a DLP policy targeted at Devices. The planned detail would add who that user is, which helps a service desk match a device with a person when a policy does not sync.

If nobody acts, Microsoft has not stated what changes on arrival. No source says existing behaviour changes, so the practical decision is small: confirm that devices meet the client prerequisite, and decide who in your organisation should see user emails next to device records.

## Risk assessment

**Data exposure**
- A user's email would appear next to a device record on the Devices page. Learn lists Compliance admin, Compliance data admin, Global reader, Security admin and Global admin as the roles for a custom account that views device management settings. Learn does not say whether each of them would see the new detail.
- Learn describes the `DlpUpn` property in the `DeviceInfo` table as the user principal name associated with the device, and says the table's DLP data matches the onboarding page. Whether the new detail also reaches exports or that table is not stated.

**Security & identity**
- No new permission is described. Learn says device management currently supports Entra roles only and that Purview roles are not supported, so access to the page follows Entra role assignment.
- The roadmap describes the detail as showing the signed-in user. Treat it as a pointer for investigation, not proof of ownership, until Learn says how it is derived.

**Autonomy & actions**
- No change described: the roadmap item describes information shown on a page, not an action taken on devices or users.

**Change & support**
- Windows devices need Anti-malware Client Version 4.18.26030 or newer, which Learn lists as the prerequisite for this feature. Devices below that are outside the prerequisite Learn gives.
- Support staff may start to rely on the page to identify who is using a device, so agree who may look up that detail.

## Cost and licensing

The Learn device onboarding overview refers readers to the Microsoft 365 Enterprise Plans and the Microsoft 365 service descriptions for licensing, and names no licence for this display. A licence statement specific to this feature is not yet published.

No meter is documented for this feature at the time of writing (November 2026). The cost the sources show is indirect: admin time to confirm that Windows devices meet the client prerequisite, and to brief staff who will see user emails.

## Scope

- **Clouds and platform:** this roadmap item lists Worldwide (Standard Multi-Tenant) and Web. GCC, GCC High and DoD are listed under roadmap item 559028.
- **Devices:** Windows devices. Learn says Endpoint DLP and insider risk management require Windows 10 and Windows 11 devices to be onboarded so they can send monitoring data. The listed prerequisite for this feature is Anti-malware Client Version 4.18.26030 or newer.
- **Roles:** Learn says device management currently supports Entra roles only. Which roles see the user detail is not stated.
- **Rollout:** the record shows In development with preview and general availability targets of February and March CY2026. Microsoft has not stated a default state or rollout mechanics.

## Governance guidance

### Before rollout
- Check the Windows anti-malware client version on onboarded devices against the 4.18.26030 prerequisite, using the Defender engine and client version attributes on the Devices page.
- List which Entra role holders can view device management settings, and confirm each still needs to see device records.
- Tell service desk and security staff that a user email may appear next to device records, and agree how it may be used.

### At rollout
- Open the Devices page and compare the new detail against a few devices whose owner you know, before staff rely on it.
- Check whether your exports and any `DeviceInfo` queries now return the detail, and handle those files as personal data if they do.

### After rollout
- Review the Valid user attribute alongside the new detail when a device's policy sync status is Not updated or Not available.
- Re-read the device onboarding overview and the roadmap item for the current status and any change to the prerequisite.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Where admins read each onboarded device's status and attributes, including the planned user detail</strong><br><small>Tenant</small><br><small class="controls__note">Read routes, not a switch for the new detail. The query runs in Advanced hunting in the Microsoft Defender portal. Learn says device management supports Entra roles only.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices <a href="https://learn.microsoft.com/purview/device-onboarding-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>DeviceInfo | where DlpInfo != &quot;&quot;</code> <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch to turn the logged-in user detail on or off</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Viewing is controlled by Entra role assignment, not by a Purview role, so changing who sees the detail means changing Entra role membership. Learn does not document a separate switch for the user detail, which is why the table shows one with no UI or API.

The `DeviceInfo` query is a read route for existing Endpoint DLP device data in the Microsoft Defender portal. It is not a control over the new feature, and Learn does not say that `DlpUpn` is the same value the new page detail shows.

## Open questions

- Where on the Devices page does the user email appear, and do the page's export and the `DeviceInfo` table include it? Watch the device onboarding overview and the Endpoint DLP troubleshooting page.
- Which Entra roles see the email, and can an organisation restrict it? Watch the permissions section of the device onboarding overview.
- What does the page show for devices below Anti-malware Client Version 4.18.26030, or where more than one user has signed in?
- Is the feature already available in Worldwide, given that the roadmap shows In development and Learn lists the prerequisite? Watch the roadmap item and Message center.
- Does this display need a licence beyond the one Endpoint DLP already needs? Watch the Learn licensing links on the device onboarding overview.

<!-- rationale
risk: Low. It adds a user email to a page that only admins open, and no source describes any automated action. Microsoft has not stated what happens on arrival, so this is rated on today's behaviour continuing.
cost: Low. The only cost the sources show is admin time to check device client versions. The device onboarding overview names no licence or meter for this feature, so licensing for it is not yet published.
impact: Low. Admins who use the Devices page notice it; the roadmap item describes no change for end users.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; rationale: cost / licensing: The licensing model is unknown because no licence specific to the new display is published. | Found: | Feature | Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5/G5 Information Protection & Governance | | --- | --- | | Endpoint Data Loss Prevention (DLP) | Included | | Fix: Set licensing.model to included. Replace the licensing notes with: 'Endpoint DLP is included in Microsoft 365 E5, among the eligible plans listed in the Microsoft Purview service description. Microsoft has not published a licence statement specific to this display.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description. In the cost rationale, replace 'licensing for it is not yet published' with 'a licence statement specific to this display is not yet published'. This is the standard's minor understatement where product-level licensing is published. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: Every control the governance checklist asks readers to review has a corresponding controls-table row. | Found: Checklist: 'List which Entra role holders can view device management settings'. Table rows cover device-data read routes and the absent display switch, not Entra role membership. | Fix: Remove the checklist bullet 'List which Entra role holders can view device management settings, and confirm each still needs to see device records.' It names a control without a corresponding row; do not add a new row in this correction.
-->
