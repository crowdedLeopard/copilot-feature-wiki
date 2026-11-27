---
title: "Microsoft Purview Endpoint DLP: read-only access to device onboarding with View-Only Device Management"
slug: "microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with"
roadmapId: 577187
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans read-only access to the Endpoint DLP Devices page through the View-Only Device Management role. Existing admin roles keep full access; Microsoft has not said whether current role-group members gain access automatically."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this planned access. Microsoft's Purview service description says users with a Purview role assigned for use in the Microsoft Purview portal need a licence, without naming one for this role."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","endpoint-dlp","least-privilege","authorisation","admin-controls","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 577187"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577187"
    kind: "roadmap"
  - title: "Onboard Windows devices into Microsoft 365 overview"
    url: "https://learn.microsoft.com/purview/device-onboarding-overview"
    kind: "learn"
  - title: "Roles and role groups in Microsoft Defender for Office 365 and Microsoft Purview"
    url: "https://learn.microsoft.com/defender-office-365/scc-permissions"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "New-RoleGroup"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-rolegroup"
    kind: "learn"
  - title: "Security & Compliance PowerShell"
    url: "https://learn.microsoft.com/powershell/exchange/scc-powershell"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["microsoft-purview-endpoint-data-loss-prevention-policy-sync-and-device-health-ai-powered-i"]
controls:
  - governs: "Which users hold the View-Only Device Management role, through role group membership"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "New-RoleGroup -Name <name> -Roles <roles> -Members <members>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-rolegroup"
    note: "General role-group control; Learn does not yet confirm it governs the Devices page. Viewing Role groups needs global administrator or Role Management. The cmdlet runs in Security & Compliance PowerShell."
  - governs: "Switch that enables the View-Only Device Management role for the Devices page"
    scope: "tenant"
    ui: null
    api: null
    note: "None documented at the time of writing (November 2026)."
  - governs: "Current access to the Devices page and device onboarding through Entra roles"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Device onboarding > Devices"
      docs: "https://learn.microsoft.com/purview/device-onboarding-overview"
    api: null
    note: "Today's route, not a control over the new role. Learn documents no API for the Devices page at the time of writing."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:51:09"
changes:
  - date: "2026-11-16"
    note: "First briefing for roadmap item 577187: planned read-only View-Only Device Management role for the Endpoint DLP Devices page."
  - date: "2026-11-16"
    note: "Default state now Not stated; removed the claim that nothing changes until an admin assigns the role; added that Learn already lists the role in several role groups, and the Purview licence statement."
  - date: "2026-11-16"
    note: "Corrected the role-group cmdlet note: New-RoleGroup applies to Security & Compliance PowerShell. Added Global Reader to the role groups that already list View-Only Device Management."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 52 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 52
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "38317bd66ab14b797fb944d49162b4d7"
---

## What's changing

Microsoft plans to let organisations give people read-only access to the Devices page in Microsoft Purview with a View-Only Device Management role. The roadmap item says the page sits under Settings → Device Onboarding, and that the role lets users such as auditors or security analysts view device onboarding status, search for devices, review configuration details and export device data, without changing onboarding configuration or other administrative settings.

According to the roadmap item, viewing or managing device onboarding previously needed broad roles such as Compliance Administrator, Global Administrator or Security Administrator, and the new access uses least-privilege Purview role-based access control (RBAC) roles scoped to device operations. The item says existing administrative roles keep full access, so current workflows are unaffected.

Microsoft Learn does not describe this change yet, but two Learn pages bear on it. The device onboarding page says that device management currently only supports Entra roles and that Purview roles are not supported. The Purview roles reference already lists a View-Only Device Management role, described as viewing the configuration and reports for the Device Management feature, and assigns it by default to several role groups. Neither page says how this relates to the planned change.

The roadmap record shows status In development, with a preview target of December CY2026 and a general availability target of January CY2027, for Worldwide, GCC, GCC High and DoD, on the web. These dates are Microsoft's targets, not commitments.

## Why it matters

This would let a service owner show device onboarding status to an auditor or analyst without handing over Compliance Administrator, Security Administrator or Global Administrator. The device onboarding page already lists Compliance data admin and Global reader among the Entra roles that can view device management settings, so the roadmap's wording about broad roles being required is only part of the picture today.

If nobody acts, the roadmap says existing roles keep full access. The decision is whether to move read-only audiences onto the new role once it ships, and whether role groups that already list View-Only Device Management gain Devices page access as a side effect. Microsoft has not said.

## Risk assessment

**Data exposure**
- The role is described as read-only for onboarding status, device search, configuration details and export of device data. Exported device data leaves the portal, so treat the role as access to a device inventory, not harmless metadata.
- Learn does not say which device attributes the export contains for this role.

**Security & identity**
- This adds a narrower option than Security Administrator or Compliance Administrator for people who only read. Leaving it unconfigured keeps today's assignments in place.
- Learn already lists View-Only Device Management among the default roles of the Compliance Administrator, Compliance Data Administrator, Global Reader, Organization Management, Security Administrator, Security Operator and Security Reader role groups. Check whether members of those groups will see the Devices page; Microsoft has not said.

**Autonomy & actions**
- No change: the roadmap describes no automated action, and the role is described as unable to change onboarding configuration.

**Change & support**
- Learn says Purview roles are not supported for device management, which differs from the roadmap's Purview RBAC wording. Expect documentation and portal behaviour to change during the preview, and test with a pilot account before relying on it.
- Existing role assignments stay valid per the roadmap, so help-desk instructions for current admins do not change.

## Cost and licensing

No licence, meter or price is published for this planned access at the time of writing (November 2026), and the roadmap record names none. The device onboarding page's licensing section points to general Microsoft 365 licensing pages rather than naming a licence for this role.

Microsoft's Purview service description says any user benefiting from the service requires a licence, and lists users with a Purview role assigned for use in the Microsoft Purview portal as an example. Read-only auditors given this role may therefore need a licence; which one is not yet published.

The other cost is admin time to create or edit a role group, assign members and test what they can see.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with the web as the platform. It lists both Preview (December CY2026 target) and General Availability (January CY2027 target).

The audience is whoever you want to give read-only visibility of the Devices page: auditors and security analysts, per the roadmap item. Viewing Role groups in the Purview portal needs global administrator or the Role Management role, per the Learn page on Purview permissions. Devices must already be onboarded for the page to list anything.

## Governance guidance

### Before rollout
- Compare the members of the Compliance Administrator, Compliance Data Administrator, Global Reader, Security Administrator, Security Operator and Security Reader role groups with the people you want on the Devices page, since Learn lists View-Only Device Management in each.
- List the auditors and analysts who hold Compliance Administrator, Security Administrator or Global Administrator only to read the Devices page, so you can move them when the role ships.
- Ask a Role Management holder to plan a custom role group for read-only device access under Settings > Roles and scopes > Role groups.

### At rollout
- Create a custom role group containing only View-Only Device Management once Learn documents it for the Devices page.
- Test with a pilot account that the user can view, search and export but cannot change onboarding configuration.

### After rollout
- Remove broad role assignments from read-only users once the pilot confirms the narrower role is enough.
- Review the role group's membership each quarter and record who can export device data.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the View-Only Device Management role, through role group membership</strong><br><small>User</small><br><small class="controls__note">General role-group control; Learn does not yet confirm it governs the Devices page. Viewing Role groups needs global administrator or Role Management. The cmdlet runs in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RoleGroup -Name &lt;name&gt; -Roles &lt;roles&gt; -Members &lt;members&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-rolegroup" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch that enables the View-Only Device Management role for the Devices page</strong><br><small>Tenant</small><br><small class="controls__note">None documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Current access to the Devices page and device onboarding through Entra roles</strong><br><small>Tenant</small><br><small class="controls__note">Today's route, not a control over the new role. Learn documents no API for the Devices page at the time of writing.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices <a href="https://learn.microsoft.com/purview/device-onboarding-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Assigning the role is a Purview role-group task, and viewing Role groups needs global administrator or the Role Management role. Learn describes role groups in general; no Learn page yet documents this role on the Devices page.

No Purview, Graph or PowerShell interface for the Devices page itself is documented at the time of writing (November 2026). The Entra role route stays the documented way to reach the page today, and the onboarding page says Purview roles are not supported for device management, so recheck it when the preview starts.

## Open questions

- Will Purview roles, including View-Only Device Management, be supported for the Devices page, given that the device onboarding Learn page currently says they are not? Watch that page and Message center.
- Do members of role groups that already include View-Only Device Management gain Devices page access when the feature ships, or does it need a new assignment?
- Which device attributes can the role export, and do they include user details shown on the Devices page?
- Does the role also open the device health reports dashboard, or only the Devices page?
- What licence, if any, does Microsoft attach to read-only use of this access? Watch the Microsoft Purview service description.

<!-- rationale
risk: Low. The role is described as read-only and existing roles keep full access, so today's exposure continues. The unknown is whether role groups that already list View-Only Device Management gain Devices page access.
cost: Low. The only cost the sources show is admin time. No licence for this access is published; Microsoft's Purview service description says users with a Purview role assigned for the portal need a licence.
impact: Low. Only administrators, auditors and security analysts who use the Devices page notice it; end users and onboarded devices are unaffected.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing; Cost and licensing; Open questions; rationale: cost / licensing: Licensing specific to this planned read-only access is unpublished, so the page uses licensing.model unknown. | Found: | Feature | Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5/G5 Information Protection & Governance | | --- | --- | | Endpoint Data Loss Prevention (DLP) | Included | | Fix: Set licensing.model to 'included'. Set licensing.notes to 'Endpoint DLP is included in Microsoft 365 E5/A5/G5 and the other plans listed in the Microsoft Purview service description. Users assigned a Purview role for the portal require a licence; a licence specific to this planned read-only access is not yet published.' Add the sentence 'Endpoint DLP is included in Microsoft 365 E5/A5/G5 and the other plans listed in the Microsoft Purview service description.' before the existing role-specific licensing gap in Cost and licensing. Keep the narrower role-specific question and the low incremental cost rating. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance: Before rollout / admin-path: Microsoft Purview portal > Settings > Roles and scopes > Role groups reaches role-group membership management. | Found: Go to **Settings** > **Roles and scopes** ... Select **Role groups**. ... select a Microsoft Purview role group ... Select **Edit** ... On **Edit members of the role group**, select **Choose users** or **Choose groups**. | Fix: The printed path reaches the correct list but stops before membership selection. Extend controls[0].ui.path and the corresponding rendered path to 'Settings > Roles and scopes > Role groups > role group > Edit > Edit members of the role group > Choose users', using the built-in role-group membership route at https://learn.microsoft.com/purview/purview-permissions#manage-role-groups. | Source: https://learn.microsoft.com/purview/purview-permissions
-->
