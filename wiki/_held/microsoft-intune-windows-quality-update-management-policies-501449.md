---
title: "Microsoft Intune: Windows quality update policies with per-type approval (Worldwide)"
slug: "microsoft-intune-windows-quality-update-management-policies-501449"
roadmapId: 501449
topic: "governance"
products: ["Microsoft Intune"]
summary: "Intune quality update policies let administrators approve each Windows quality update type automatically or manually, including out-of-band updates. Nothing changes until an admin creates a policy; Learn already documents it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "February CY2026"
previewDate: "January CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Learn lists Microsoft Intune Plan 1 and a Windows licence that includes the Autopatch entitlement (for example Microsoft 365 Business Premium or Windows Enterprise E3/E5). A separate price or meter for this feature is not listed on that page."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["intune","windows-autopatch","windows-quality-updates","intune-rbac"]
sources:
  - title: "Microsoft 365 Roadmap 501449"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501449"
    kind: "roadmap"
  - title: "Windows quality updates and .NET Framework updates"
    url: "https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview"
    kind: "learn"
  - title: "Manage Windows quality updates"
    url: "https://learn.microsoft.com/intune/device-updates/windows/manage-quality-updates"
    kind: "learn"
  - title: "Windows update management overview"
    url: "https://learn.microsoft.com/intune/device-updates/windows/"
    kind: "learn"
  - title: "Prerequisites"
    url: "https://learn.microsoft.com/windows/deployment/windows-autopatch/prepare/windows-autopatch-prerequisites"
    kind: "learn"
  - title: "Role-based access control"
    url: "https://learn.microsoft.com/windows/deployment/windows-autopatch/prepare/windows-autopatch-role-based-access-control"
    kind: "learn"
  - title: "Use audit logs to track and monitor events in Microsoft Intune"
    url: "https://learn.microsoft.com/intune/governance/monitor-audit-logs"
    kind: "learn"
  - title: "Approval method and deferral for each Windows quality update type in a policy (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-create?view=graph-rest-beta"
    kind: "learn"
  - title: "Manual approval of an individual quality update release for a policy (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-bulkaction?view=graph-rest-beta"
    kind: "learn"
  - title: "Which administrators hold an Intune role such as Policy and Profile Manager, and which users or devices they manage (Microsoft Intune admin center)"
    url: "https://learn.microsoft.com/intune/fundamentals/role-based-access-control/assign-role"
    kind: "learn"
  - title: "Which administrators hold an Intune role such as Policy and Profile Manager, and which users or devices they manage (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/intune-rbac-deviceandappmanagementroleassignment-create?view=graph-rest-1.0"
    kind: "learn"
  - title: "Audit record of changes made in Intune (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/intune-auditing-auditevent-list"
    kind: "learn"
videos: []
related: ["microsoft-intune-windows-quality-update-management-policies"]
controls:
  - governs: "Approval method and deferral for each Windows quality update type in a policy"
    scope: "tenant"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage updates > Windows updates > Quality updates > Create > Windows quality update policy > Settings"
      docs: "https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview"
    api:
      kind: "graph"
      call: "POST /beta/deviceManagement/windowsQualityUpdatePolicies"
      docs: "https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-create?view=graph-rest-beta"
    note: "The request body sets approvalSettings (windowsQualityUpdateCadence, windowsQualityUpdateCategory, approvalMethodType, deferredDeploymentInDay). Beta endpoint."
  - governs: "Manual approval of an individual quality update release for a policy"
    scope: "tenant"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage updates > Windows updates > Quality updates > Manage updates > release > Approved policies > policy > Approve"
      docs: "https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview"
    api:
      kind: "graph"
      call: "POST /beta/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicyId}/bulkAction"
      docs: "https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-bulkaction?view=graph-rest-beta"
    note: "The request body sets action to approve; the enum lists approve and suspend. Beta endpoint."
  - governs: "Pausing an approved quality update release"
    scope: "tenant"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage updates > Windows updates > Quality updates > Manage updates > release > Approved policies > policy > Pause"
      docs: "https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview"
    api:
      kind: "graph"
      call: "POST /beta/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicyId}/bulkAction"
      docs: "https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-bulkaction?view=graph-rest-beta"
    note: "The request body sets action to suspend, the pause action in the enum. Devices can take up to eight hours to apply a pause."
  - governs: "Which administrators hold an Intune role such as Policy and Profile Manager, and which users or devices they manage"
    scope: "tenant"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Tenant administration > Roles > All roles > role > Assignments > + Assign > Basics > Admin Groups > Add groups > group > Scope (Groups)"
      docs: "https://learn.microsoft.com/intune/fundamentals/role-based-access-control/assign-role"
    api:
      kind: "graph"
      call: "POST /v1.0/deviceManagement/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/intune-rbac-deviceandappmanagementroleassignment-create?view=graph-rest-1.0"
    note: "Assigning roles needs Intune Role Administrator or a custom role with the Roles and Organization permissions listed on the assign-role page."
  - governs: "Audit record of changes made in Intune"
    scope: "tenant"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Tenant administration > Audit logs"
      docs: "https://learn.microsoft.com/intune/governance/monitor-audit-logs"
    api:
      kind: "graph"
      call: "GET /v1.0/deviceManagement/auditEvents"
      docs: "https://learn.microsoft.com/graph/api/intune-auditing-auditevent-list"
    note: "Read-only. Auditing is enabled for all customers and cannot be disabled. Needs the Intune Administrator role or an Intune role with Audit data Read."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-08-28T23:00:27"
changes:
  - date: "2026-11-25"
    note: "New briefing for the Worldwide roadmap item; Learn documents the policies although the roadmap still reads In development."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 100 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 100
  confirmed: 96
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "9fc1813b4ddc732c30511a515dd74ec0"
---

## What's changing

Intune gets quality update policies that decide, for each type of Windows quality update, whether it is approved automatically or only after an administrator approves it. The roadmap item describes this as managing individual Windows quality updates, including non-security and out-of-band updates, and choosing which update types to approve automatically and the rollout options for those approvals.

Microsoft Learn already documents these policies. Approval is set per update type: monthly security updates, monthly non-security preview updates, out-of-band (OOB) security updates and out-of-band non-security updates. The settings apply to both the Windows OS update and the .NET Framework update of that type. When you create a policy, monthly security updates default to automatic approval and the other types default to manual. For automatic approval you set a deferral of 0 to 30 days (the **Make updates available after** setting). For manual approval, an administrator opens **Manage updates**, reviews a release (severity and included KBs) and approves it for chosen policies. An approved release can be paused; devices that already installed it are not rolled back.

The roadmap record gives the status as In development, with a preview date of January CY2026 and a target of February CY2026, for the Worldwide (Standard Multi-Tenant) cloud on desktop, with release phases General Availability and Preview. Those targets have passed as of November 2026 while the record still reads In development, and the Learn pages describe the policies as documented behaviour. The record was last modified in August 2025. Microsoft lists the feature under a second roadmap item, 501450, for GCC; see [the GCC briefing](/features/microsoft-intune-windows-quality-update-management-policies/).

## Why it matters

This is a new patch-approval control, and it changes who decides when a Windows quality update reaches a device. Microsoft's page says devices with no quality update policy keep receiving quality updates through standard Windows Update behaviour, so the policy is something an administrator chooses to create. Microsoft has not stated any change to that behaviour for tenants that do nothing.

Once a policy is assigned, its approval method governs the device. A manual setting is a change-control gate: if nobody approves, that update type is not offered. Microsoft recommends automatic approval for security updates and manual approval for optional or non-security updates, and warns that manual approval needs care because timely approval of critical updates is essential to security compliance. Decide who owns the monthly and out-of-band approval routine before assigning devices.

## Risk assessment

**Data exposure**
- No new organisational data is described. Intune stores only the policy assignments, not the updates; it sends configuration details to Windows Autopatch, which decides which updates are approved, and devices download approved updates from Windows Update.
- Reporting for this feature depends on letting Intune access Windows diagnostic data from enrolled devices; devices need diagnostic data at the **Required** level.

**Security & identity**
- The risk is delayed patching. A default policy approves only monthly security updates automatically, so out-of-band security updates wait for manual approval; one missed approval leaves assigned devices without that fix.
- A paused release is offered to no new devices, and Microsoft says devices can take up to eight hours to apply a pause or resume.
- Approval and pause rights follow Intune roles: Policy and Profile Manager has read/write on update policies, while the Autopatch Administrator and Autopatch Reader roles show no permission on update policies.

**Autonomy & actions**
- Automatic approval acts without a person: a release is offered after the configured deferral. Deferral set in a cloud-based quality update policy overrides client-side deferral from update ring policies or CSP settings.
- Assigning a device to a quality update policy enrols it in Windows Autopatch for that content type; if it is later unassigned from every policy it stays enrolled for 24 hours, then returns to Windows Update scan and client settings.

**Change & support**
- The approval method of an existing policy cannot be edited; Microsoft says to create a new policy instead.
- If hotpatch is enabled in a policy, approved non-security updates are not offered to those devices; Microsoft says to disable the hotpatch setting in the policy to receive them.
- When a device has several cloud-based policies, the policy approving the latest release takes priority. Against a legacy hotpatch-only policy, the cloud-based policy takes priority and monthly security updates are not offered until approved.

## Cost and licensing

The licensing requirements on the [Manage Windows quality updates](https://learn.microsoft.com/intune/device-updates/windows/manage-quality-updates) page are Microsoft Intune Plan 1 and a Windows licence that includes the Autopatch entitlement. The Windows Autopatch prerequisites page lists Microsoft 365 Business Premium, Windows 10/11 Education A3 or A5, Windows 10/11 Enterprise E3 or E5 (included in Microsoft 365 F3, E3 or E5) and Windows 10/11 Enterprise E3 or E5 VDA, and its feature table marks quality updates as available for Business Premium, A3+, E3+ and F3.

The Learn page for this feature lists no meter, price or credit rate for quality update policies. The cost left is administrative: someone has to review and approve releases for manual types, and to pause a release when a problem appears.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), the desktop platform, and release phases General Availability and Preview. Learn's prerequisites page lists the public cloud and Government Community Cloud (GCC) as supported; GCC has its own roadmap item, 501450.

Devices must be managed by Intune and Microsoft Entra joined or hybrid joined; Entra registered devices are not supported for this policy type. Supported editions are Pro, Pro Education, Enterprise and Education; Windows Enterprise LTSC is not supported and Microsoft says to use update ring policies for it. Devices need diagnostic data at the Required level, the Microsoft Account Sign-In Assistant service (wlidsvc) enabled, and access to Intune, Windows Update and Windows Autopatch endpoints. Devices running Windows Insider builds added to the policy are not enrolled in Windows Autopatch for quality updates, so the policy's approvals do not apply. On Windows 10 devices enrolled in Extended Security Updates, approvals apply to OS updates only and .NET Framework updates follow client-side settings.

To manage the policies, use Policy and Profile Manager or a custom role with the Device configurations permissions Assign, Create, Delete, View Reports, Update and Read, plus visibility of managed devices.

## Governance guidance

### Before rollout
- Confirm that the tenant holds Microsoft Intune Plan 1 and a Windows licence with the Autopatch entitlement for the devices you will assign.
- Check devices against the prerequisites: Entra joined or hybrid joined, supported edition (not LTSC), diagnostic data at Required, and wlidsvc running.
- Decide per update type whether approval is automatic or manual, and the deferral in days for automatic types, before creating the policy; the approval method cannot be edited afterwards.
- Name the owner of manual approvals, and check that the owners hold Policy and Profile Manager or an equivalent custom role.

### At rollout
- Create the policy with the approval method and deferral for security, non-security and out-of-band types, then assign the device groups.
- Treat out-of-band security updates as manual by default and approve them from **Manage updates** when needed.
- Review each release's severity and KBs before approving it for the policies that need review.
- Check devices that are in several policies, or in an update ring policy or hotpatch-only policy, using the documented precedence rules.

### After rollout
- Pause a release from **Manage updates** if an approved update causes problems, and allow up to eight hours for devices to receive the change.
- Review the Intune audit log for changes made to update policies and approvals.
- Re-assign devices you remove from a policy within 24 hours if they should stay under Autopatch-managed approvals.
- Re-read the Learn page when the roadmap status changes, because the roadmap record and Learn currently differ on whether the feature has shipped.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Approval method and deferral for each Windows quality update type in a policy</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets approvalSettings (windowsQualityUpdateCadence, windowsQualityUpdateCategory, approvalMethodType, deferredDeploymentInDay). Beta endpoint.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage updates › Windows updates › Quality updates › Create › Windows quality update policy › Settings <a href="https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/deviceManagement/windowsQualityUpdatePolicies</code> <a href="https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-create?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Manual approval of an individual quality update release for a policy</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets action to approve; the enum lists approve and suspend. Beta endpoint.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage updates › Windows updates › Quality updates › Manage updates › release › Approved policies › policy › Approve <a href="https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicyId}/bulkAction</code> <a href="https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-bulkaction?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Pausing an approved quality update release</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets action to suspend, the pause action in the enum. Devices can take up to eight hours to apply a pause.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage updates › Windows updates › Quality updates › Manage updates › release › Approved policies › policy › Pause <a href="https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicyId}/bulkAction</code> <a href="https://learn.microsoft.com/graph/api/intune-softwareupdate-windowsqualityupdatepolicy-bulkaction?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which administrators hold an Intune role such as Policy and Profile Manager, and which users or devices they manage</strong><br><small>Tenant</small><br><small class="controls__note">Assigning roles needs Intune Role Administrator or a custom role with the Roles and Organization permissions listed on the assign-role page.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Tenant administration › Roles › All roles › role › Assignments › + Assign › Basics › Admin Groups › Add groups › group › Scope (Groups) <a href="https://learn.microsoft.com/intune/fundamentals/role-based-access-control/assign-role" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/deviceManagement/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/intune-rbac-deviceandappmanagementroleassignment-create?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Audit record of changes made in Intune</strong><br><small>Tenant</small><br><small class="controls__note">Read-only. Auditing is enabled for all customers and cannot be disabled. Needs the Intune Administrator role or an Intune role with Audit data Read.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Tenant administration › Audit logs <a href="https://learn.microsoft.com/intune/governance/monitor-audit-logs" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /v1.0/deviceManagement/auditEvents</code> <a href="https://learn.microsoft.com/graph/api/intune-auditing-auditevent-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Approving and pausing a release use the same Graph operation, `bulkAction`; the request body's `action` value selects between them. The Graph quality update policy APIs are under `/beta/`, which Microsoft says is subject to more frequent change.

The create-policy and approval controls need update-policy permissions in Intune: Policy and Profile Manager has read/write, and Autopatch Administrator and Autopatch Reader do not grant it. Role assignments can be scoped by groups and scope tags. The audit log row covers Intune audit events generally; Learn's audit page lists a SoftwareUpdates category but does not name quality update policy actions.

## Open questions

- The roadmap item still reads In development with a February CY2026 target, while Learn documents the policies. When will the roadmap status move to Launched? Watch the roadmap item and Message center.
- The roadmap says "rollout options for those approvals". Does that mean only the 0 to 30 day deferral that Learn documents, or further options? Watch the Learn quality update page.
- The Graph quality update policy APIs are beta. Will they reach v1.0, and with what changes? Watch the Graph reference.
- Is there a Preview release phase still to come for this Worldwide item, given the roadmap lists both Preview and General Availability?

<!-- rationale
risk: Medium. A policy created with its defaults approves only monthly security updates automatically; other update types, including out-of-band security updates, wait for manual approval, and Microsoft says timely approval of critical updates is essential.
cost: Low. The Learn page lists Intune Plan 1 and a Windows licence with the Autopatch entitlement as requirements and names no separate meter; the cost left is admin time to run approvals.
impact: Medium. Intune and endpoint administrators run the approvals; users notice only through when quality updates reach their Windows devices.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing / applicability: The settings apply to both the Windows OS update and the .NET Framework update of each type without a Framework-version qualification. | Found: You can't manage .NET Framework 3.5 updates through Windows Autopatch quality update policies. These updates don't appear in the quality updates workflow. Windows Update delivers these updates as standalone. Client-side settings govern these updates. | Fix: Replace the sentence with: 'The settings apply to Windows OS updates and supported .NET Framework updates of that type on Windows 11; .NET Framework 3.5 updates remain governed by client-side settings.' Keep the existing Windows 10 ESU qualification in Scope. Source: https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview. | Source: https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview
- [contradicted, blocker] Risk assessment: Security & identity / behaviour: Microsoft states that resume instructions take up to eight hours to apply. | Found: Windows devices take on average eight hours to communicate back to Microsoft Intune with new instructions to pause, resume, or roll back updates. | Fix: Replace 'Microsoft says devices can take up to eight hours to apply a pause or resume' with 'Microsoft says devices can take up to eight hours to apply new pause settings; communication with Intune for pause or resume instructions takes eight hours on average.' Source: https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview. | Source: https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope; Governance guidance / behaviour: Windows Enterprise LTSC is unsupported and Microsoft says to use update ring policies instead. | Found: Windows Enterprise LTSC (Long Term Service Channel) isn't supported. Use update ring policies instead. | Fix: Replace the LTSC sentence with: 'The Intune Manage Windows quality updates page says Windows Enterprise LTSC is not supported and to use update ring policies instead; the Autopatch prerequisites page separately says currently serviced Windows 10 and Windows 11 LTSC devices support its quality-update workload.' Both pages are already cited: https://learn.microsoft.com/intune/device-updates/windows/manage-quality-updates and https://learn.microsoft.com/windows/deployment/windows-autopatch/prepare/windows-autopatch-prerequisites. | Source: https://learn.microsoft.com/intune/device-updates/windows/manage-quality-updates
- [supported, minor] controls[0].ui; Governance controls / admin-path: The policy approval-settings UI is reached in Microsoft Intune admin center through Devices > Manage updates > Windows updates > Quality updates > Create > Windows quality update policy > Settings. | Found: Select Devices > Manage updates > Windows updates > Quality updates. Select Create. Select Windows quality update policy. Under Basics, enter a name for your new policy and select Next. Under Settings, choose your approval method configuration | Fix: Include the omitted wizard heading and name the deferral control: set controls[0].ui.path to 'Devices > Manage updates > Windows updates > Quality updates > Create > Windows quality update policy > Basics > Settings' and append to its note: 'Choose approval methods under Settings; automatic deferral is Make updates available after.' Keep the existing docs URL and update the rendered row identically. | Source: https://learn.microsoft.com/windows/deployment/windows-autopatch/manage/windows-autopatch-windows-quality-update-overview
- [supported, minor] controls[0].note; Governance controls / command: approvalSettings contains windowsQualityUpdateCadence, windowsQualityUpdateCategory, approvalMethodType and deferredDeploymentInDay to set the approval rule. | Found: approvalMethodType ... Possible values are: manual, automatic, unknownFutureValue. deferredDeploymentInDay | Int32 | The deferral days for auto approval type, not applicable for manual approve | Fix: Add https://learn.microsoft.com/graph/api/resources/intune-softwareupdate-windowsqualityupdateapprovalsetting?view=graph-rest-beta to sources; it states the semantics of the nested approval settings. | Source: https://learn.microsoft.com/graph/api/resources/intune-softwareupdate-windowsqualityupdateapprovalsetting?view=graph-rest-beta
- [supported, minor] controls[1].note; Governance controls / command: The bulkAction action value approve selects approval, and the enum includes approve and suspend. | Found: approve | 0 | Enum value to represent the approval actions for quality update; suspend | 1 | Enum value to represent the pause actions for quality update | Fix: Add https://learn.microsoft.com/graph/api/resources/intune-softwareupdate-windowsqualityupdatepolicyactiontype?view=graph-rest-beta to sources; this supports both approval and pause action values. | Source: https://learn.microsoft.com/graph/api/resources/intune-softwareupdate-windowsqualityupdatepolicyactiontype?view=graph-rest-beta
- [supported, minor] controls[3].api; Governance controls / command: POST /v1.0/deviceManagement/roleAssignments creates an Intune role assignment specifying administrator members and managed resource scopes. | Found: POST https://graph.microsoft.com/v1.0/deviceManagement/roleAssignments; resourceScopes ... list of resource scope security group Entra IDs; members ... list of role member security group Entra IDs. | Fix: Append to controls[3].note: 'The request body sets members for administrator security groups and resourceScopes for managed users or devices.' Update the rendered note identically; keep the existing call and docs URL. | Source: https://learn.microsoft.com/graph/api/intune-rbac-deviceandappmanagementroleassignment-create?view=graph-rest-1.0
- [supported, minor] Governance controls / behaviour: Learn's Intune audit documentation lists a SoftwareUpdates category. | Found: Category | The pane where the action took place. ... Role = 9, SoftwareUpdates =10, DeviceSetupConfiguration = 11 | Fix: Replace 'Learn's audit page lists a SoftwareUpdates category' with 'Learn's Intune log-integration page lists a SoftwareUpdates category' and add https://learn.microsoft.com/intune/governance/integrate-azure-monitor to sources. The cited monitor-audit-logs page does not itself list that category. | Source: https://learn.microsoft.com/intune/governance/integrate-azure-monitor
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells readers to check diagnostic-data configuration and wlidsvc, but neither configuration control has a table row. | Found: Check devices against the prerequisites: ... diagnostic data at Required, and wlidsvc running. Controls table: approval/deferral, manual approval, pause, role assignment, audit logs. | Fix: The Before rollout prerequisite-check step has no table row for diagnostic-data configuration or wlidsvc. Record this checklist/table gap; do not add control rows as part of this correction.
- [contradicted, minor] Governance guidance: At rollout and After rollout; Governance controls / consistency: The checklist instructs device-group assignment and reassignment, but the controls table has no policy-assignment row. | Found: Create the policy ... then assign the device groups. Re-assign devices you remove from a policy within 24 hours ... Controls table has no quality-policy device-assignment row. | Fix: The At rollout device-group assignment and After rollout reassignment steps have no corresponding controls-table row. Record this checklist/table gap; do not add a row as part of this correction.
-->
