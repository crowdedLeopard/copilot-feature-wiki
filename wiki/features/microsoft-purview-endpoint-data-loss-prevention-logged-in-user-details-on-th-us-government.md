---
title: "Microsoft Purview Endpoint DLP: logged-in user email on the Windows device onboarding page (GCC, GCC High, DoD)"
slug: "microsoft-purview-endpoint-data-loss-prevention-logged-in-user-details-on-th-us-government"
roadmapId: 559028
topic: "governance"
products: ["Microsoft Purview"]
summary: "The Purview device onboarding page shows the signed-in user's email for Windows devices, as for macOS. This roadmap item covers GCC, GCC High and DoD and is Launched. Admin-only visibility; check the client prerequisite."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Endpoint DLP is included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and the other plans listed in the Microsoft Purview service description. Microsoft has not published a licence statement specific to this display."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","device-onboarding","privacy","advanced-hunting","entra-id","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 559028"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559028"
    kind: "roadmap"
  - title: "Onboard Windows devices into Microsoft 365 overview"
    url: "https://learn.microsoft.com/purview/device-onboarding-overview"
    kind: "learn"
  - title: "Troubleshooting endpoint data loss prevention configuration and policy sync"
    url: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
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
  - title: "Assign Microsoft Entra roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-logged-in-user-details-on-the-purview-devi","endpoint-dlp","microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with","microsoft-purview-endpoint-data-loss-prevention-device-health-reporting-dashboard"]
controls:
  - governs: "Where admins read each onboarded device's status and attributes, including the new user detail"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices"
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    api:
      kind: "other"
      call: "DeviceInfo | where DlpInfo != \"\""
      docs: "https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync"
    note: "Read routes, not a switch. The query runs in Advanced hunting in the Microsoft Defender portal; DlpUpn there is the UPN associated with the device."
  - governs: "Who holds the Entra roles that can view device management settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Roles & admins > role > Add assignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    note: "Needs at least Privileged Role Administrator. The request body sets principalId and roleDefinitionId. Learn says device management supports Entra roles only."
  - governs: "Switch to show or hide the logged-in user detail"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-01T23:15:29"
changes:
  - date: "2026-11-27"
    note: "First briefing for roadmap item 559028: logged-in user email on the Windows device onboarding page for GCC, GCC High and DoD (Launched)."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 56 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 55
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "10645b4c1fe9e21752714d006bade1c1"
---

## What's changing

The roadmap item says the Microsoft Purview device onboarding page now shows logged-in user details (the user's email) for Windows devices, in line with the experience for macOS devices. Admins can see which user is signed in on a device, which the roadmap says makes it faster to confirm ownership and troubleshoot issues.

This briefing covers roadmap item 559028, which lists GCC, GCC High and DoD and the Web platform. Microsoft lists the same feature under roadmap item 548669 for Worldwide (Standard Multi-Tenant), which shows status In development with a March CY2026 target; see [the Worldwide briefing](/features/microsoft-purview-endpoint-data-loss-prevention-logged-in-user-details-on-the-purview-devi/).

Microsoft Learn's Windows device onboarding overview lists the feature, under roadmap ID 548669, in its table of per-feature prerequisites: Anti-malware Client Version 4.18.26030 or newer, with Windows update details linked for Windows 10 and Windows 11 22H2, 23H2 and 24H2. Learn does not yet describe where or how the user email appears on the page, so what follows about its behaviour is the roadmap's description.

The roadmap record for this item shows status Launched, release phase General Availability and a target of May CY2026.

## Why it matters

Service owners who run Endpoint DLP use the Devices page to check whether onboarded devices are configured and in sync. Learn's troubleshooting page already lists a **Valid user** attribute there, which indicates whether the currently logged on user has a corresponding Entra ID account and is in scope of a DLP policy targeted at Devices. The new detail adds who that user is, which helps a service desk match a device with a person when a policy does not sync.

Microsoft has not stated whether the detail needs anything switched on. No source says existing behaviour changes beyond the extra detail, so the practical work is small: confirm that Windows devices meet the client prerequisite, and check who in your organisation holds the Entra roles that can view device records and will now see user emails beside them.

## Risk assessment

**Data exposure**
- A user's email appears next to a device record on the Devices page. Learn lists Compliance admin, Compliance data admin, Global reader, Security admin and Global admin as the roles a custom account needs to view the device management settings. Learn does not say whether the new detail is shown to each of them.
- Learn describes the `DlpUpn` property in the `DeviceInfo` table's `DlpInfo` column as the user principal name associated with the device, and says these values correspond to the device information on the DLP device onboarding page. Whether that property is the same value as the new page detail is not stated.

**Security & identity**
- No new permission is described. Learn says device management currently supports only Entra roles and not Purview roles, so access to the page follows Entra role assignment (see the controls table).
- Treat the detail as a pointer for investigation, not proof of ownership, until Learn says how it is derived.

**Autonomy & actions**
- No change: the roadmap item describes information shown on a page, not an action taken on devices or users.

**Change & support**
- Learn lists Anti-malware Client Version 4.18.26030 or newer as this feature's prerequisite. Devices on older clients are outside the prerequisite Learn gives.
- Service desk staff may come to rely on the page to identify who uses a device, so agree how the detail may be used.

## Cost and licensing

The Microsoft Purview service description lists Endpoint Data Loss Prevention (DLP) as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, and Microsoft 365 E5/A5/F5/G5 Information Protection & Governance. The device onboarding overview refers readers to the Microsoft 365 Enterprise Plans and the service descriptions for licensing and names no licence for this display. A licence statement specific to this display is not yet published.

No meter is documented for this feature at the time of writing (November 2026). The indirect cost is admin time to confirm that Windows devices meet the client prerequisite, and to brief staff who will see user emails.

## Scope

- **Clouds and platform:** this roadmap item lists GCC, GCC High and DoD, on the Web platform. Microsoft's Purview planning pages for GCC, GCC High and DoD deployments each list Endpoint data loss prevention as Available. Worldwide is listed under roadmap item 548669.
- **Devices:** Windows devices onboarded to Endpoint DLP; the roadmap says macOS devices already have this experience. The listed prerequisite is Anti-malware Client Version 4.18.26030 or newer.
- **Roles:** Learn says device management currently supports only Entra roles. Which of the roles that can view device management settings see the user detail is not stated.
- **Rollout:** the record shows Launched, General Availability, target May CY2026. Microsoft has not stated a default state or rollout mechanics.

## Governance guidance

### Before rollout
- Check the Defender engine and client versions on the Devices page against the Anti-malware Client Version 4.18.26030 prerequisite.
- List who holds Compliance admin, Compliance data admin, Global reader, Security admin and Global admin in Microsoft Entra, and remove assignments that no longer need to see device records.
- Tell service desk and security staff that a user email may appear next to device records, and agree how it may be used.

### At rollout
- Open Settings > Device onboarding > Devices in the Microsoft Purview portal and compare the new detail with a few devices whose user you know.
- Run the `DeviceInfo` query in Advanced hunting and compare `DlpUpn` with the page detail before relying on either in reports.

### After rollout
- Read the Valid user attribute alongside the new detail when a device's policy sync status is Not updated or Not available.
- Re-read the device onboarding overview for changes to this feature's prerequisite.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Where admins read each onboarded device's status and attributes, including the new user detail</strong><br><small>Tenant</small><br><small class="controls__note">Read routes, not a switch. The query runs in Advanced hunting in the Microsoft Defender portal; DlpUpn there is the UPN associated with the device.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>DeviceInfo | where DlpInfo != &quot;&quot;</code> <a href="https://learn.microsoft.com/purview/dlp-edlp-tshoot-sync" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who holds the Entra roles that can view device management settings</strong><br><small>Tenant</small><br><small class="controls__note">Needs at least Privileged Role Administrator. The request body sets principalId and roleDefinitionId. Learn says device management supports Entra roles only.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Roles &amp; admins › role › Add assignments <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch to show or hide the logged-in user detail</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Viewing the Devices page is governed by Entra role assignment, not by a Purview role group, so narrowing who sees user emails means changing Entra role membership. Assigning Entra roles needs at least the Privileged Role Administrator role.

Microsoft Learn documents no switch for the user detail itself at the time of writing (November 2026), and the Set-PolicyConfig syntax, which holds the organisation's endpoint DLP settings, lists no parameter for it. The `DeviceInfo` query is a read route to existing Endpoint DLP device data in the Microsoft Defender portal, not a control over the new detail.

## Open questions

- Does the device list's export include the user email, and is `DlpUpn` in `DeviceInfo` the same value? Watch the device onboarding overview and the Endpoint DLP troubleshooting page.
- Which of the Entra roles that can view device management settings see the email, and can an organisation hide it? Watch the permissions section of the device onboarding overview.
- What does the page show for Windows devices below Anti-malware Client Version 4.18.26030, or where more than one user has signed in?
- Does the user detail stay on the record of a device that has gone offline, given that Learn says onboarded devices continue to appear for 180 days after going offline?

<!-- rationale
risk: Low. It adds a user email to an admin page that Learn says only certain Entra roles can view, and no source describes any automated action. Microsoft has not stated what happens on arrival, so this is rated on today's behaviour continuing.
cost: Low. Endpoint DLP is included in Microsoft 365 E5/A5/G5 and the other plans the Purview service description lists; no meter is documented for this display. The cost the sources show is admin time to check device client versions.
impact: Low. Administrators who open the Devices page notice it; the roadmap item describes no change for end users.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity; Scope; controls[1].note; Governance controls / applicability: Device management access is governed by Entra role assignments rather than Purview roles. | Found: Device management currently only supports Entra roles. Purview roles are not supported. | Fix: Retain the attribution to the onboarding overview, and add: 'Microsoft's roles reference also lists the Purview View-Only Device Management role as allowing viewing of Device Management configuration and reports; the pages do not agree on role support.' Cite https://learn.microsoft.com/defender-office-365/scc-permissions#roles-in-microsoft-defender-for-office-365-and-microsoft-purview. | Source: https://learn.microsoft.com/purview/device-onboarding-overview
- [supported, minor] Governance controls / command: Set-PolicyConfig modifies organization-wide endpoint restrictions. | Found: Use the Set-PolicyConfig cmdlet to modify the endpoint restrictions that are configured in the organization. | Fix: Add https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig to sources, titled 'Set-PolicyConfig'; the briefing relies on this reference but does not cite it. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig
- [contradicted, minor] front matter: action / consistency: The review action rating treats this existing-page enhancement as an optional capability. | Found: action: "review"; summary: "The Purview device onboarding page shows the signed-in user's email for Windows devices"; Why it matters: "the practical work is small: confirm that Windows devices meet the client prerequisite" | Fix: Set action to 'prepare': the standard assigns prepare to enhancements of an existing experience that arrive anyway and need low-risk checks or communication, including when the default state is unknown.
-->
