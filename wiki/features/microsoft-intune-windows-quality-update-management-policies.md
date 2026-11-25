---
title: "Microsoft Intune: Windows quality update policies with per-type approval (GCC)"
slug: "microsoft-intune-windows-quality-update-management-policies"
roadmapId: 501450
topic: "governance"
products: ["Microsoft Intune"]
summary: "Roadmap item 501450 (GCC) plans Intune policies that approve Windows security, non-security and out-of-band updates by type, with rollout options. Optional: devices keep their current update behaviour until an admin creates a policy."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC"]
platforms: ["Desktop"]
targetDate: "February CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn lists Microsoft Intune Plan 1 and a Windows licence that includes the Autopatch entitlement for quality update policies. The Autopatch prerequisites page lists qualifying licences, including Microsoft 365 Business Premium and Windows Enterprise E3 or E5."
audiences: ["m365-admin","security","change-adoption"]
tags: ["intune","windows-autopatch","windows-quality-updates","microsoft-graph","policy","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 501450"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501450"
    kind: "roadmap"
  - title: "Windows quality updates and .NET Framework updates"
    url: "https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview"
    kind: "learn"
  - title: "Manage Windows quality updates"
    url: "https://learn.microsoft.com/intune/device-updates/windows/manage-quality-updates"
    kind: "learn"
  - title: "Prerequisites"
    url: "https://learn.microsoft.com/windows/deployment/windows-autopatch/prepare/windows-autopatch-prerequisites"
    kind: "learn"
  - title: "windowsQualityUpdatePolicy resource type"
    url: "https://learn.microsoft.com/graph/api/resources/intune-softwareupdate-windowsqualityupdatepolicy?view=graph-rest-beta"
    kind: "learn"
  - title: "Approval method and deferral for each Windows quality update type (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-create?view=graph-rest-beta"
    kind: "learn"
  - title: "Approving an individual quality update release for a policy (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-bulkaction?view=graph-rest-beta"
    kind: "learn"
  - title: "windowsQualityUpdatePolicyActionType enum type"
    url: "https://learn.microsoft.com/graph/api/resources/intune-softwareupdate-windowsqualityupdatepolicyactiontype?view=graph-rest-beta"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Approval method and deferral for each Windows quality update type"
    scope: "group"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage updates > Windows updates > Quality updates > Create > Windows quality update policy > Settings"
      docs: "https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview"
    api:
      kind: "graph"
      call: "POST /beta/deviceManagement/windowsQualityUpdatePolicies"
      docs: "https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-create?view=graph-rest-beta"
    note: "Role: Policy and Profile manager, or a custom role with the permissions listed in Scope. Beta endpoint. The request body property approvalSettings carries approvalMethodType and deferredDeploymentInDay; hotpatchEnabled sets hotpatch."
  - governs: "Approving an individual quality update release for a policy"
    scope: "group"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage updates > Windows updates > Quality updates > Manage updates > release > Approved policies > policy > Approve"
      docs: "https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview"
    api:
      kind: "graph"
      call: "POST /beta/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicyId}/bulkAction"
      docs: "https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-bulkaction?view=graph-rest-beta"
    note: "Beta endpoint. The request body takes action and ids; action=approve approves a quality update and action=suspend pauses it. To pause a release in the UI, follow the same route and select Pause instead of Approve."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-25"
roadmapModified: "2025-10-03T22:00:02"
changes:
  - date: "2026-11-24"
    note: "First briefing for the GCC roadmap item; it separates the roadmap record from what Learn documents for Windows quality update policies."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 64 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: licensing model set to included, custom-role requirements and Windows Insider enrolment exception added, approval and pause separated in the controls, LTSC disagreement reported, and unsupported statements removed."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 82 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 82
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "aa7835775d75ed9ab1735271bacdc938"
---

## What's changing

Roadmap item 501450 describes Intune policies for managing individual Windows quality updates, including non-security and out-of-band updates, where an administrator chooses which update types are approved automatically and the rollout options for those approvals. This record covers GCC and the Desktop platform. Microsoft lists the same title under a second roadmap item, 501449, which covers Worldwide (Standard Multi-Tenant) and also shows a Preview release phase and a January CY2026 preview date.

The roadmap item has no more-info link. Microsoft Learn documents Windows quality update policies that match its description, and what follows about behaviour comes from those pages, not from the roadmap text. A policy sets an approval method for each update type: monthly security updates, monthly non-security preview updates, out-of-band security updates and out-of-band non-security updates. Each type is either automatic, with a deferral of 0 to 30 days, or manual. When you create a policy, monthly security updates default to automatic and the other types default to manual. Learn says the same settings also govern supported .NET Framework updates.

Administrators then approve or pause individual releases from the Manage updates page. Learn says an approved update that is paused has its approval revoked, no new devices receive it and devices that already installed it are not rolled back.

The roadmap record shows status In development and a target of February CY2026. That month has passed at the time of writing (November 2026) and the record, last modified on 2025-10-03, still shows In development. Learn's page on managing quality updates lists Public cloud and Government Community Cloud (GCC) as supported clouds. Treat the roadmap dates as Microsoft's targets and check the item before relying on them.

## Why it matters

This changes who decides when a Windows patch reaches a device. A policy with manual approval holds back an update type until someone approves it, so patch timeliness becomes an operational duty of the Intune administrator, not a setting left to Windows Update defaults. Windows Autopatch recommends automatic approval for security updates and manual approval for optional updates.

It is optional. Learn says devices without a quality update policy continue to receive monthly quality updates through standard Windows Update behaviour, so if nobody acts, devices keep their current update behaviour. The exposure begins when a team creates a policy and assigns devices to it without an owner for the manual approvals.

## Risk assessment

**Data exposure**

- The feature manages update delivery. Learn says reporting for this feature needs your organisation to allow Intune to access Windows diagnostic data from enrolled devices, and that telemetry must be on at a minimum setting of Required.

**Security & identity**

- Patch lag is the main exposure. In a policy, only monthly security updates default to automatic; the other three types default to manual. Learn says that where a device has both a cloud-based quality update policy and a legacy quality update policy (with only the hotpatch setting), monthly security updates are not offered until you approve them manually or automatically. Check each type's approval method when you create the policy.
- Learn says to manage this feature you use the Policy and Profile manager role or a custom role with the Device configurations permissions Assign, Create, Delete, View Reports, Update and Read, plus permissions providing visibility into and access to managed devices, such as Organization/Read and Managed devices/Read. Scope who holds either.

**Autonomy & actions**

- Automatic approval offers an update to assigned devices after the deferral you set (0 to 30 days), with no further human step. Learn recommends keeping quality update deferrals under three days. A manual override can approve an update before the deferral ends.
- A pause stops new devices receiving a release but does not roll back installed updates, and devices can take up to eight hours to apply a new pause.

**Change & support**

- Learn says quality update policy deferrals override deferrals from update ring policies, while update ring settings such as deadlines and grace periods stay active. Expect support questions where both policy types target the same device.
- Learn says the approval method of an existing policy cannot be changed, so a wrong choice means a new policy.
- If a policy has hotpatch enabled, approving non-security updates does not deliver them to the device; Learn says to disable the hotpatch setting to receive them.
- The Intune Manage Windows quality updates page says Windows Enterprise LTSC is unsupported for this policy type and directs administrators to update rings; the Windows Autopatch overview and prerequisites pages separately say Autopatch supports quality-update management for currently serviced Windows 10/11 LTSC devices. Windows 10 devices in Extended Security Updates take .NET Framework updates from Windows Update client settings, so the policy approvals cover only the operating system updates on them.

## Cost and licensing

Learn's page on managing Windows quality updates lists two licensing requirements: Microsoft Intune Plan 1, and a Windows licence that includes the Autopatch entitlement. The Windows Autopatch prerequisites page says Windows Autopatch is available to Microsoft 365 Business Premium, Windows 10/11 Education A3 or A5, Windows 10/11 Enterprise E3 or E5 and the corresponding VDA licences, and its feature table marks Quality updates as available for Business Premium, A3+, E3+ and F3.

The indirect cost is administrator time: manual approvals each month, pausing releases when problems appear, and handling devices that two policy types both target.

## Scope

The roadmap record lists the GCC cloud, the Desktop platform and the General Availability release phase for item 501450, with status In development and a target of February CY2026. The Worldwide equivalent is roadmap item 501449.

Learn says the policy type supports Windows Pro, Pro Education, Enterprise and Education editions, on devices that are managed by Intune and are Microsoft Entra joined or Microsoft Entra hybrid joined. Devices need telemetry on at a minimum setting of Required and the Microsoft Account Sign-In Assistant service (`wlidsvc`) enabled and running. The Intune Manage Windows quality updates page says Windows Enterprise LTSC is unsupported for this policy type and directs administrators to update rings; the Windows Autopatch overview and prerequisites pages separately say Autopatch supports quality-update management for currently serviced Windows 10/11 LTSC devices. Learn says managed devices targeted by a quality update policy are automatically enrolled in Windows Autopatch, except devices running Windows Insider builds: those devices are not enrolled for quality updates and the policy approval settings do not apply. It also says that a device no longer assigned to any quality update policy stays enrolled for 24 hours before it is unenrolled.

To manage policies, Learn says to use an account with the Policy and Profile manager role or a custom role with the Device configurations permissions Assign, Create, Delete, View Reports, Update and Read, plus permissions providing visibility into and access to managed devices, such as Organization/Read and Managed devices/Read. To view reports, it lists Endpoint Security Manager, Read Only Operator, Help Desk Operator or a custom role with the Managed devices View Reports permission.

## Governance guidance

### Before rollout

- Decide per update type whether approval is automatic or manual, and name who approves the manual types each month; the Create policy settings row holds the choice, and Learn says it cannot be changed later.
- Confirm the licences Learn names (Microsoft Intune Plan 1 and a Windows licence with the Autopatch entitlement) cover every assigned user or device.

### At rollout

- Pilot the policy on a small device group before assigning broad groups, and choose deferrals for each ring within the 0 to 30 day range Learn gives.
- Turn hotpatch off in any policy where non-security updates must reach devices, since Learn says approved non-security updates are not delivered to hotpatch-enabled devices.
- Approve the first monthly releases from the Manage updates page and read each release's included KBs before approving a manual type.

### After rollout

- Review the Approved policies column for releases marked Needs review so no manual type waits unapproved.
- Pause a release from the Manage updates page when an update causes problems, allowing up to eight hours for devices to apply the pause.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Approval method and deferral for each Windows quality update type</strong><br><small>Group</small><br><small class="controls__note">Role: Policy and Profile manager, or a custom role with the permissions listed in Scope. Beta endpoint. The request body property approvalSettings carries approvalMethodType and deferredDeploymentInDay; hotpatchEnabled sets hotpatch.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage updates › Windows updates › Quality updates › Create › Windows quality update policy › Settings <a href="https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/deviceManagement/windowsQualityUpdatePolicies</code> <a href="https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-create?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Approving an individual quality update release for a policy</strong><br><small>Group</small><br><small class="controls__note">Beta endpoint. The request body takes action and ids; action=approve approves a quality update and action=suspend pauses it. To pause a release in the UI, follow the same route and select Pause instead of Approve.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage updates › Windows updates › Quality updates › Manage updates › release › Approved policies › policy › Approve <a href="https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicyId}/bulkAction</code> <a href="https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-bulkaction?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Creating a policy and approving a release are separate steps. The policy sets the approval method and deferral for each update type; the Manage updates page records approvals per release and policy, and shows Needs review where a manual type has not been approved. The Graph resource carries the same approval settings in its approvalSettings collection, and its bulkAction operation takes an action and a list of ids.

Update ring policies still set client-side settings such as deadlines and grace periods, but Learn says a quality update policy's approval settings and deferrals take priority for devices with both. The Graph reference marks these Intune operations as /beta, which Microsoft says are subject to more frequent change.

## Open questions

- When will roadmap item 501450 move from In development, given that the February CY2026 target month has passed? Watch the roadmap item and Message center.
- Does Microsoft intend any difference in GCC behaviour or availability from the Worldwide item 501449, given that Learn's quality updates page lists GCC as a supported cloud? Watch both roadmap items and the Learn page.
- Which quality update settings and releases does GCC receive first, and will the roadmap's preview phase on item 501449 apply to GCC tenants? Watch Message center.
- Will Microsoft publish a version 1.0 Graph reference for quality update policies, so scripts need not depend on /beta? Watch the Graph reference for windowsQualityUpdatePolicy.

<!-- rationale
risk: Medium. Once a device is assigned to a quality update policy, approval settings and deferrals override update ring deferrals, so a manual-approval type that nobody approves leaves devices without that update.
cost: Low. Learn names Microsoft Intune Plan 1 and a Windows licence with the Autopatch entitlement as requirements; the visible extra cost is admin time to approve, pause and monitor releases.
impact: Medium. Intune and update administrators set the policies; users on assigned Windows devices notice only when and whether updates arrive and when restarts follow.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope / record: Roadmap item 501449 has the same title and describes the equivalent capability. | Found: "id": 501449, "title": "Microsoft Intune: Windows Quality Update management policies" | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=501449 to sources as 'Microsoft 365 Roadmap 501449', kind roadmap, for the Worldwide comparison.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The creation route in Microsoft Intune admin center is Devices > Manage updates > Windows updates > Quality updates > Create > Windows quality update policy > Settings. | Found: Select Devices > Manage updates > Windows updates > Quality updates. ... Select Create. ... Select Windows quality update policy. ... Under Settings, choose your approval method configuration | Fix: For the automatic deferral control, extend the path to 'Devices > Manage updates > Windows updates > Quality updates > Create > Windows quality update policy > Settings > Make updates available after'. Retain the note explaining that approval methods are chosen under Settings; the intervening Basics name entry and Next do not need to be path steps. | Source: https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview
-->
