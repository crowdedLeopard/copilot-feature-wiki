---
title: "Microsoft Purview: time-limited role group assignments"
slug: "microsoft-purview-compliance-portal-admin-assignment-time-limit"
roadmapId: 566865
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview administrators can give users and security groups temporary role group access that ends automatically. It is optional and set per assignment, so nobody has to act unless they want it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "The Learn page on Purview permissions names no licence for temporary role group assignments. A licence or meter for this feature is Not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","role-groups","least-privilege","authorisation","auditing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 566865"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566865"
    kind: "roadmap"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["auditing","ediscovery"]
controls:
  - governs: "Expiry date on a user's or security group's role group assignment"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > role group > Edit > Choose users > user > Edit expiration"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api: null
    note: "Needs the Role management role. Choose groups follows the same steps for security groups. Not supported for eDiscovery Administrator or eDiscovery Manager."
  - governs: "Audit record of expiry dates being added or updated"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Search for operation UpdatePermission. Needs the Audit Logs or View-Only Audit Logs role. Expiry itself writes no audit record."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-01T23:00:07"
changes:
  - date: "2026-11-22"
    note: "New briefing: optional expiry dates on Microsoft Purview role group assignments, with the portal steps, exclusions and audit operation."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 54
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "99d2a569ddb422e767361df7bb08ce7a"
---

## What's changing

Microsoft Purview lets an administrator put an expiry on a user's or security group's assignment to a role group, so temporary admin access ends without anyone removing it. The roadmap item describes this as setting a limit in days when assigning users and security groups to role groups, for providing admin permission on a temporary basis.

Microsoft Learn describes the same capability as automatically expiring permissions. It is optional and configured per assignment. An administrator can create a temporary assignment with an expiration date, update the date, extend the assignment, or remove the expiration to make the assignment permanent. The selectable range runs from a minimum of one day to a maximum of two years from the current date, in the local time zone of the administrator who sets it. When the date is reached, the assignment is removed and access is revoked; actions already completed or in progress are not affected, but any new operation is denied.

All built-in and custom role groups support expiry except eDiscovery Administrator and eDiscovery Manager. The roadmap record lists status Launched, target date July CY2026, release phase General Availability, platform Web, and clouds Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.

## Why it matters

This gives service owners a built-in way to apply least privilege to Purview administration: a contractor, an incident responder or a covering administrator can be given a role group for a fixed period instead of relying on someone to remove them later. Because expiry is optional, the wiki's view is that it only reduces exposure where the Role management holders choose to use it; existing standing assignments are unaffected unless someone edits them.

The trade-off is visibility. Learn states that no notification is sent before permissions expire and that no extra audit log is generated when they do, so teams that rely on a temporary assignment need their own reminder to extend it.

## Risk assessment

**Data exposure**
- Time-limited assignments shorten how long a user or group can reach the data and settings that the role group's roles cover. Standing assignments with no expiry keep their current reach, so review them separately.

**Security & identity**
- Each assignment keeps its own expiry. If a user holds the same role group through an individual assignment and through a security group, access remains active as long as one of the assignments is valid, so expiring one route does not end access.
- Assigning a role group to a security group means membership changes in that group update added users with the expiry date tied to the role group assignment. Control of the group's membership therefore matters as much as the expiry.
- Roles in the Microsoft Entra ID section of the role groups page are managed in Microsoft Entra ID, not through the Purview expiry setting described in the temporary permissions section.

**Autonomy & actions**
- No change: nothing acts on its own except the automatic removal of the assignment at the expiry date.

**Change & support**
- Expect support calls when access ends. Learn states there is no notification before expiry and no audit record when access expires, so a user can lose access mid-project without warning.
- eDiscovery Administrator and eDiscovery Manager do not support expiry, so temporary access to those two groups needs a different process.

## Cost and licensing

The Learn page on permissions in the Microsoft Purview portal names no licence or meter for temporary role group assignments, and the roadmap record states none. A licence or price for this feature is Not yet published. The only cost the sources show is administrator time to set expiry dates, extend assignments and review who holds standing access.

To set expiry you need an account assigned the Role management role, as the page's steps for managing role groups state.

## Scope

**Who and what.** Expiry applies to assignments of users and security groups to Microsoft Purview role groups, and is set on each assignment. Every built-in and custom role group supports it except eDiscovery Administrator and eDiscovery Manager.

**Roles.** The Learn steps for managing role groups are written for an admin account assigned the Role management role. The page also says viewing Role groups needs global administrator or the Role Management role, which is assigned only to the Organization Management role group.

**Clouds and platform.** The roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the web. Learn states that security groups are supported only in Microsoft 365 commercial cloud organisations for role group membership, while the roadmap description includes security groups and lists the US Government clouds. The two sources are reported as they stand.

**Related option.** Learn separately describes Microsoft Entra Privileged Identity Management for Groups, which lets security groups assigned to Purview role groups give users just-in-time activation. Learn says just-in-time activations cannot be managed through direct user assignments to role groups in the Purview portal.

## Governance guidance

### Before rollout
- Identify who holds the Role management role or global administrator, since those accounts can set and change expiry dates.
- List the members of each Purview role group and decide which are standing assignments and which are temporary, such as contractors or incident cover.
- Plan a separate process for eDiscovery Administrator and eDiscovery Manager, which do not support expiry.
- Agree who sets reminders to extend assignments, because Learn states no notification is sent before access expires.

### At rollout
- Set an expiry on each temporary user or group assignment through the role group's Edit members page, within the one-day to two-year range.
- Audit any security group assigned to a role group, since membership changes there flow through with the assignment's expiry date.
- Tell affected people the date their access will end and who can extend it.

### After rollout
- Search the audit log for the UpdatePermission operation to confirm who added or changed expiry dates.
- Review role groups for users who hold the same role group through both an individual and a group assignment, since the later expiry keeps access active.
- Extend or make permanent only the assignments that still need it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Expiry date on a user's or security group's role group assignment</strong><br><small>User</small><br><small class="controls__note">Needs the Role management role. Choose groups follows the same steps for security groups. Not supported for eDiscovery Administrator or eDiscovery Manager.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › role group › Edit › Choose users › user › Edit expiration <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit record of expiry dates being added or updated</strong><br><small>Tenant</small><br><small class="controls__note">Search for operation UpdatePermission. Needs the Audit Logs or View-Only Audit Logs role. Expiry itself writes no audit record.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Only an account assigned the Role management role can manage role group members in the portal steps Learn gives. Expiry is set per assignment, not per role group and not tenant-wide; Microsoft Learn documents no tenant setting that requires an expiry at the time of writing (November 2026), so enforcement rests on administrators using it.

The audit row shows when an expiry date is added or updated. It does not show the moment access expires, which Learn says generates no additional audit log.

## Open questions

- Does a security group assignment to a role group work in GCC, GCC High and DoD? Learn says security groups are supported only in commercial cloud organisations, but the roadmap lists those clouds. Watch the Learn permissions page.
- Is a licence or meter attached to temporary role group assignments? None is published on the permissions page; watch the Purview service description and Message center.
- Will a PowerShell cmdlet or Microsoft Graph call be documented for setting the expiry? Microsoft Learn documents none at the time of writing (November 2026).
- Will Microsoft add a notification before expiry? Learn states none is sent today.

<!-- rationale
risk: Low. Microsoft Learn describes expiry as optional and set per assignment, and nothing in the sources says existing assignments change. The one gap is that no notice or audit record is produced when access expires.
cost: Low. The only cost the sources show is administrator time to set and review expiry dates; no licence or meter for this feature is published at the time of writing.
impact: Low. Only administrators who manage Purview role groups, and the people they assign, notice it; ordinary users see no change.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Roles / role: The permissions page says Role Management is assigned only to Organization Management. | Found: Role Management role (assigned only to the Organization Management role group). | Fix: Keep the attribution, but add: 'The roles reference instead lists Organization Management and Purview Administrators as default assignments for Role Management.' Cite https://learn.microsoft.com/defender-office-365/scc-permissions#roles-in-microsoft-defender-for-office-365-and-microsoft-purview, whose Role Management row lists both groups. | Source: https://learn.microsoft.com/purview/purview-permissions
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance: At rollout / admin-path: Expiry is reached in the Purview portal through Settings > Roles and scopes > Role groups > role group > Edit > Choose users > user > Edit expiration. | Found: On Edit members of the role group, select Choose users or Choose groups. ... Select Select. ... If the selected users or groups need temporary access, select the users or groups and select Edit expiration. | Fix: For the documented built-in-group route, use 'Settings > Roles and scopes > Role groups > role group > Edit > Edit members of the role group > Choose users > user > Select > user > Edit expiration'. Add to the note: 'For a custom group, continue through Name the role group and Edit roles of the role group to Edit members of the role group.' Both routes are documented at https://learn.microsoft.com/purview/purview-permissions#manage-role-groups; the current route omits intermediate wizard headings and the member-picker confirmation. | Source: https://learn.microsoft.com/purview/purview-permissions
- [supported, minor] controls[1].note; Governance controls table / role: Audit searching requires Audit Logs or View-Only Audit Logs. | Found: You must be assigned the Audit Logs or View-Only Audit Logs roles in the Microsoft Purview portal to search the audit log. ... To access audit cmdlets, you must be assigned the Audit Logs or View-Only Audit Logs roles in the Exchange admin center. | Fix: Replace the role sentence in controls[1].note and its rendered copy with: 'Needs the Audit Logs or View-Only Audit Logs role in the Microsoft Purview portal for UI searches; audit cmdlets require one of those roles in the Exchange admin center and run in Exchange Online PowerShell.' The role names are correct but their separate assignment surfaces are not explained. Source: https://learn.microsoft.com/purview/audit-search. | Source: https://learn.microsoft.com/purview/audit-search
- [supported, minor] front matter: licensing.model / licensing: Licensing is unknown because Microsoft has not published a feature-specific licence. | Found: Any user benefiting from the service requires a license. ... Users with a Purview role assigned for use in the Microsoft Purview portal. | Fix: Set licensing.model to 'included' for this option within licensed Purview solutions. Replace licensing.notes with: 'Users with a Purview role assigned for use in the Microsoft Purview portal require the applicable Purview solution licence. Microsoft has not published a licence, separate price or meter specific to temporary role group assignment expiry at the time of writing (November 2026).' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description. Retain the narrow feature-specific gap in the body rather than implying product licensing is wholly unpublished. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
-->
