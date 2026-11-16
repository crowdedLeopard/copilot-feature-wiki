---
title: "Microsoft Purview Endpoint DLP: read-only access to device onboarding with View-Only Device Management"
slug: "microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with"
roadmapId: 577187
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a View-Only Device Management role for the Endpoint DLP Devices page, so auditors can see device onboarding without admin rights. It is a new control: nothing changes until an administrator assigns it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence, and the Learn page on device onboarding links to general Microsoft 365 licensing pages without naming one for this role."
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
videos: []
related: ["purview-dlp-block-sensitive-data-in-copilot-web-search"]
controls:
  - governs: "Which users hold the View-Only Device Management role, through role group membership"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "New-RoleGroup to create a role group"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-rolegroup"
    note: "General control: no Learn page yet confirms it governs the Devices page. Needs the Role Management role or global administrator."
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
    note: "Today's route, not a control over the new role. No Purview or Graph API for the Devices page was found at the time of writing."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:51:09"
changes:
  - date: "2026-11-16"
    note: "First briefing for roadmap item 577187: planned read-only View-Only Device Management role for the Endpoint DLP Devices page."
version: 1
---

## What's changing

Microsoft plans to let organisations give people read-only access to the Devices page in Microsoft Purview, using a new View-Only Device Management role. The roadmap item says the page sits under Settings → Device Onboarding, and that the role lets users such as auditors or security analysts view device onboarding status, search for devices, review configuration details and export device data. It does not let them change onboarding configuration or other administrative settings.

According to the roadmap item, viewing or managing device onboarding previously needed broad roles such as Compliance Administrator, Global Administrator or Security Administrator, and the new access is granted through least-privilege Purview role-based access control (RBAC) roles. The item also says existing administrative roles keep full access, so current workflows are unaffected.

Microsoft Learn does not describe this feature yet, so what the roadmap says about behaviour is the plan. Two Learn facts bear on it. The Learn page on onboarding Windows devices says, at the time of writing (November 2026), that device management currently only supports Entra roles and that Purview roles are not supported. Separately, the Learn page on Purview role groups lists View-Only Device Management among the default roles of the Security Administrator, Security Operator and Security Reader role groups. Neither page says how the two relate to this change.

The roadmap record shows status In development, a preview target of December CY2026 and a general availability target of January CY2027, for Worldwide, GCC, GCC High and DoD, on the web. These dates are Microsoft's targets, not commitments.

## Why it matters

This gives a service owner a way to show device onboarding status to an auditor or analyst without handing over Compliance Administrator, Security Administrator or Global Administrator. On the Learn page today, the roles that can view or manage device onboarding are Entra roles, so a read-only audience has had to be given an Entra role.

If nobody acts, nothing changes: the roadmap says existing roles keep full access. The decision to make is whether to move read-only audiences onto the new role once it ships, and whether any role group you already use gains Devices page access as a side effect.

## Risk assessment

**Data exposure**
- The role is read-only and covers onboarding status, device search, configuration details and export of device data. Exported device data leaves the portal, so treat the role as access to a device inventory, not as harmless metadata.
- Learn does not yet say which device attributes the export contains for this role.

**Security & identity**
- This is a new least-privilege option, so it reduces the need to give broad admin roles to people who only read. Leaving it unconfigured keeps today's broader role assignments in place.
- The View-Only Device Management role already appears in the default roles of the Security Administrator, Security Operator and Security Reader role groups. Check whether members of those groups will see the Devices page once the feature ships; Microsoft has not said.

**Autonomy & actions**
- No change: the roadmap describes no new automated action, and the role cannot change onboarding configuration.

**Change & support**
- Learn currently says Purview roles are not supported for device management, which differs from the roadmap's Purview RBAC wording. Expect documentation and portal behaviour to change during the preview, and test with a pilot account before relying on it.
- Existing Entra role assignments stay valid, so help-desk instructions for current admins do not change.

## Cost and licensing

No licence, meter or price is published for the View-Only Device Management role at the time of writing (November 2026), and the roadmap record names none. The Learn page on onboarding Windows devices links to Microsoft 365 licensing pages for Endpoint DLP rather than stating a licence for this role.

The cost shown by the sources is indirect: admin time to create or edit a role group, assign members and test what they can see.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with the web as the platform. It lists both Preview (December CY2026 target) and General Availability (January CY2027 target).

The audience is whoever you want to give read-only visibility of the Devices page: auditors and security analysts, per the roadmap item. Assigning Purview roles takes a user who is a global administrator or holds the Role Management role, per the Learn page on Purview permissions. Devices must already be onboarded for the page to have anything to show.

## Governance guidance

### Before rollout
- Compare the role group members you have today with the roles Microsoft lists for Security Administrator, Security Operator and Security Reader, which include View-Only Device Management, and decide who should see the Devices page.
- List the auditors and analysts who currently hold Compliance Administrator, Security Administrator or Global Administrator only to read the Devices page, so you can move them when the role ships.
- Ask the Role Management role holders to plan a custom role group for read-only device access, using Settings > Roles and scopes > Role groups.

### At rollout
- Create a custom role group for read-only device visibility and add only the View-Only Device Management role once Learn documents it for this page.
- Test with a pilot account that the user can view, search and export but cannot change onboarding configuration.

### After rollout
- Remove broad role assignments from read-only users once the pilot account confirms the narrower role is enough.
- Review the membership of the role group each quarter, and record who can export device data.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the View-Only Device Management role, through role group membership</strong><br><small>User</small><br><small class="controls__note">General control: no Learn page yet confirms it governs the Devices page. Needs the Role Management role or global administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RoleGroup to create a role group</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-rolegroup" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch that enables the View-Only Device Management role for the Devices page</strong><br><small>Tenant</small><br><small class="controls__note">None documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Current access to the Devices page and device onboarding through Entra roles</strong><br><small>Tenant</small><br><small class="controls__note">Today's route, not a control over the new role. No Purview or Graph API for the Devices page was found at the time of writing.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Device onboarding › Devices <a href="https://learn.microsoft.com/purview/device-onboarding-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Assigning the role is a Purview role-group task, and creating or changing role groups needs the Role Management role or global administrator, per the Learn page on Purview permissions. That page describes role groups in general; no Learn page yet documents this role on the Devices page.

The Entra role route stays the documented way to reach the Devices page today. The Learn page on onboarding Windows devices also says that device management currently only supports Entra roles, which conflicts with the roadmap's Purview RBAC wording, so check the page again when the preview starts.

## Open questions

- Will Purview roles, including View-Only Device Management, be supported for the Devices page, given that the Learn page on device onboarding currently says they are not? Watch the device onboarding Learn page and Message center.
- Do members of the Security Administrator, Security Operator and Security Reader role groups, which already include View-Only Device Management, gain access to the Devices page when the feature ships?
- Which device attributes can the role export, and do they include the logged-in user details shown on the device onboarding page?
- Does the role also open the device health reporting dashboard, or only the Devices page?
- What licence, if any, does Microsoft attach to using the role? Watch the Microsoft Purview service description.

<!-- rationale
risk: Low. The roadmap item describes a read-only role that narrows who needs broad admin roles; existing roles keep full access, so exposure stays as it is until someone assigns the new role.
cost: Low. The only cost the sources show is admin time to assign roles; Microsoft has not published any licence or meter for this role, and the roadmap record names none.
impact: Low. Only administrators, auditors and security analysts who look at the Devices page notice it; end users and onboarded devices are unaffected.
-->
