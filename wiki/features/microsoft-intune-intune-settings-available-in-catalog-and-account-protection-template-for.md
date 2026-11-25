---
title: "Microsoft Intune: Administrator protection settings in the settings catalog and account protection template"
slug: "microsoft-intune-intune-settings-available-in-catalog-and-account-protection-template-for"
roadmapId: 501456
topic: "governance"
products: ["Microsoft Intune"]
summary: "Intune will expose 'Adminless' settings in the settings catalog and account protection template. Learn documents catalog policies for Administrator protection: normally off; enabled by default for Windows security baseline users from October 2026."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop"]
targetDate: "November CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "off"
action: "prepare"
licensing:
  model: "included"
  notes: "Intune licence required for any user or device that benefits from Intune (Microsoft Intune licensing page). The Administrator protection page lists Windows 11 Home, Pro, Enterprise and Education; no feature-specific licence or price is published."
audiences: ["m365-admin","security","change-adoption"]
tags: ["intune","administrator-protection","settings-catalog","least-privilege","windows-11","admin-controls","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: item 501456"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501456"
    kind: "roadmap"
  - title: "Administrator protection"
    url: "https://learn.microsoft.com/windows/security/application-security/application-control/administrator-protection/"
    kind: "learn"
  - title: "Use the Intune settings catalog to configure settings"
    url: "https://learn.microsoft.com/intune/device-configuration/settings-catalog/"
    kind: "learn"
  - title: "Account protection policy for endpoint security in Intune"
    url: "https://learn.microsoft.com/intune/device-configuration/endpoint-security/account-protection"
    kind: "learn"
  - title: "What's new in Microsoft Intune"
    url: "https://learn.microsoft.com/intune/whats-new/#week-of-october-26,-2026-service-release-2610"
    kind: "learn"
  - title: "Microsoft Intune licensing"
    url: "https://learn.microsoft.com/intune/fundamentals/licensing"
    kind: "learn"
  - title: "Create deviceManagementConfigurationPolicy"
    url: "https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationpolicy-create?view=graph-rest-beta"
    kind: "learn"
  - title: "Creation of a settings catalog policy; Administrator protection settings are configured separately (Microsoft Intune admin center)"
    url: "https://learn.microsoft.com/windows/security/application-security/application-control/administrator-protection/#configuration"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Creation of a settings catalog policy; Administrator protection settings are configured separately"
    scope: "group"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage devices > Configuration > Create > New policy > Windows 10 and later > Settings catalog > Configuration settings > Add settings > Local Policies Security Options > User Account Control Type Of Admin Approval Mode"
      docs: "https://learn.microsoft.com/windows/security/application-security/application-control/administrator-protection/#configuration"
    api:
      kind: "graph"
      call: "POST /beta/deviceManagement/configurationPolicies"
      docs: "https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationpolicy-create?view=graph-rest-beta"
    note: "Graph creates the policy container only; it does not enable Administrator protection or set its elevation prompt. In the UI, set Local Policies Security Options using the two settings Learn names. Needs at least Policy and Profile Manager."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-25"
roadmapModified: "2025-10-01T23:01:01"
changes:
  - date: "2026-11-24"
    note: "New briefing: Intune settings catalog route for Administrator protection, what the account protection template page does and does not list, and the gap between the roadmap status and Learn."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: baseline users can get Administrator protection by default without the Intune policy, and the Graph call only creates the policy container."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: the settings path now links the Administrator protection page, the October 26, 2026 Intune release note on Account protection policies is added, and the checklist-to-table gap is stated in full."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 75 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 74
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "7de1028b32cfc55e22620f20232928f6"
---

## What's changing

The roadmap item says settings for the "Adminless feature" will be configurable in the Intune settings catalog and in the account protection template. Microsoft's roadmap text is one sentence and does not define "Adminless". Microsoft has not said on the pages read that "Adminless" is the roadmap's name for Administrator protection, so that reading is the wiki's inference from the matching Learn page and should be confirmed.

Learn describes Administrator protection as a Windows 11 platform security feature that keeps users deprivileged and grants just-in-time elevation only with the user's explicit approval. Windows uses a hidden, system-generated, profile-separated user account to create an isolated admin token that is destroyed when the process ends. The page says it is available with KB5120998 and is off by default.

For Intune, the Learn page says to create a **Settings catalog** policy and use two settings in the category **Local Policies Security Options**: *User Account Control Type Of Admin Approval Mode* (enables the feature) and *User Account Control Behavior Of the Elevation Prompt for Administrator Protection* (chooses the prompt type). The same page also says enterprise customers can enable the feature using custom OMA-URI. The account protection template is documented as covering Windows Hello for Business, Credential Guard, Windows LAPS and local group membership; the Account protection reference page does not list Administrator protection settings in it. However, Intune's October 26, 2026 release notes state that endpoint security Account protection policies now include two Administrator protection settings: the Administrator Approval Mode type and elevation prompt behavior.

The roadmap record shows status In development, target November CY2025, General Availability, Desktop, in Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Learn already documents the catalog route, so the roadmap status and Learn disagree; the target date is a plan, not a delivery date.

## Why it matters

Administrator protection changes how elevation works on a Windows 11 device, so the Intune settings are the way most Intune-managed tenants would roll it out and test it. Learn says the feature is off by default, so on current documentation nothing changes on a device until a policy, the Windows Security toggle or another method turns it on. The exception Learn gives is for organisations that use Windows security baselines: for them it becomes enabled by default with the October 2026 Windows security update, with the new defaults manageable by policy.

The operational cost is support load. Learn lists cases where the feature breaks workflows, including devices that need Hyper-V, apps that access shared files across profiles, devices managed with LAPS, and Windows 365 Cloud PCs and Azure Virtual Desktop session hosts. Pilot before broad assignment, and keep the policy scoped to groups you have tested.

## Risk assessment

**Data exposure**

- No new data access is described. The page says the admin token is issued to the requesting process and destroyed once the process ends, so the change reduces standing admin rights rather than adding data flows.
- Elevation events are written to the Microsoft-Windows-LUA ETW provider (event IDs 15031 and 15032); Learn describes capturing them with Logman or WPR.

**Security & identity**

- Learn says each admin operation needs interactive user authorisation, with no auto-elevations, and describes integration with Windows Hello. Windows security baseline users can have Administrator protection enabled by default by the October 2026 Windows security update even without this Intune policy.
- The Learn page says to not enable it on devices managed with Windows LAPS. Check whether any Intune LAPS policy targets the same devices before assigning.
- Elevated apps do not receive SSO credentials from the standard session, so domain or cloud sign-in must be repeated in the elevated session.

**Autonomy & actions**

- No autonomous behaviour is described. Learn says users need to interactively authorise every admin operation, so test any tool you expect to elevate without a person present. Learn lists remote logon behaviour as controlled by a separate policy.

**Change & support**

- A reboot is required for the feature to take effect, so schedule the change like any restart-requiring policy.
- Learn lists known issues: settings data does not carry across the standard and elevated profiles, WSL and Visual Studio distros may need separate setup in the elevated profile, and elevated apps cannot reach network drives mapped from the un-elevated session.
- Learn says support for Windows 365 Cloud PCs, Azure Virtual Desktop session hosts and Windows Server is planned for a future release; scope policies to exclude them.

## Cost and licensing

Microsoft's Intune licensing page says an Intune licence is required for any user or device that benefits directly or indirectly from the Microsoft Intune service. Neither the Administrator protection page nor the settings catalog page, as read, names an additional licence, plan or meter for these settings. The Administrator protection page lists Windows 11 Home, Pro, Enterprise and Education as supported editions.

The known costs are indirect: pilot and testing time, support calls from the app side effects above, and a reboot. A price or licence specific to configuring these settings through the account protection template is not yet published, and the roadmap item names none.

## Scope

- **Clouds and platform:** the roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with platform Desktop. Learn describes the feature for Windows 11; "supported Windows 11 devices outside Windows 365 Cloud PCs and Azure Virtual Desktop session hosts".
- **Rollout:** the roadmap target is November CY2025 and its status is In development. Learn already describes the catalog route as available with KB5120998.
- **Roles:** the settings catalog page asks for at least the Policy and Profile Manager built-in role to create the policy.
- **Prerequisites:** Windows 11 Home, Pro, Enterprise or Education. The page says a reboot is required for the feature to take effect.
- **Baseline users:** for organisations that use Windows security baselines, Learn says the feature becomes enabled by default with the October 2026 Windows security update.

## Governance guidance

### Before rollout

- Identify devices that Learn says to leave out: Windows 365 Cloud PCs, Azure Virtual Desktop session hosts, devices that require Hyper-V and devices managed with Windows LAPS, and exclude them from assignment.
- Check whether your Windows security baselines already set "User Account Control: Configure type of Admin Approval Mode", because Learn says baseline users get Administrator protection enabled by default with the October 2026 update.
- Inventory apps that use shared files across profiles, network drives, or WSL and Visual Studio when run elevated, and test them with a pilot group.

### At rollout

- Create a settings catalog policy for the pilot group with *User Account Control Type Of Admin Approval Mode* and choose the elevation prompt type with *User Account Control Behavior Of the Elevation Prompt for Administrator Protection*.
- Assign the policy to a security group of pilot devices or users, as Learn describes, and schedule the reboot the feature needs.
- Tell pilot users that each admin action now asks for authorisation and that elevated apps do not inherit their SSO or mapped drives.

### After rollout

- Capture elevation events 15031 and 15032 from the Microsoft-Windows-LUA provider on pilot devices to see which apps elevate.
- Review Intune policy status for the pilot group and widen the assignment only after support issues are understood.
- Watch the roadmap item and Learn for changes to the account protection template and for support on Cloud PCs, session hosts and Windows Server.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creation of a settings catalog policy; Administrator protection settings are configured separately</strong><br><small>Group</small><br><small class="controls__note">Graph creates the policy container only; it does not enable Administrator protection or set its elevation prompt. In the UI, set Local Policies Security Options using the two settings Learn names. Needs at least Policy and Profile Manager.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage devices › Configuration › Create › New policy › Windows 10 and later › Settings catalog › Configuration settings › Add settings › Local Policies Security Options › User Account Control Type Of Admin Approval Mode <a href="https://learn.microsoft.com/windows/security/application-security/application-control/administrator-protection/#configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/deviceManagement/configurationPolicies</code> <a href="https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationpolicy-create?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The settings catalog is the route Learn documents for Intune. Creating the policy needs at least the Policy and Profile Manager built-in role.

The account protection template (Microsoft Intune admin center > Endpoint security > Manage > Account protection > Create policy > Windows > Account protection) is documented with Account protection, Local admin password solution (Windows LAPS) and Local user group membership profiles. Its page says the Account protection profile settings are also in the settings catalog and describes Windows Hello for Business and Credential Guard. It does not list Administrator protection, so the table gives only the catalog route. However, Intune's October 26, 2026 release notes state that endpoint security Account protection policies now include two Administrator protection settings: the Administrator Approval Mode type and elevation prompt behavior.

The Graph row is the general settings catalog policy creation call. The reference page read does not name the Administrator protection settings, so the call creates a catalog policy and is not documentation of these two settings. The Administrator protection page also lists group policy and a Windows Security toggle (preview) as other ways to enable it; these are outside Intune and are not rows.

The checklist's Intune LAPS targeting review, Windows security baseline check, elevation-event capture and Intune policy-status review have no corresponding row in the controls table.

## Open questions

- Does "Adminless" in the roadmap item mean Administrator protection? The Learn pages read do not say; watch the roadmap item and the Administrator protection Learn page.
- Why does the roadmap still show In development with a November CY2025 target when Learn documents the catalog settings as available? Watch the roadmap item for a status change.
- Which Intune licence plan, if any, does Microsoft associate with these settings? No feature-specific licence is published on the pages read.
- Does Intune deliver the baseline default change described for security baseline users through Intune security baselines, or only through Windows baselines? The Learn note names Windows security baselines.

<!-- rationale
risk: Medium. Learn lists app and sign-in side effects of Administrator protection (separate elevated profile, no shared SSO or mapped drives), and says baseline users get it enabled by default with the October 2026 update.
cost: Low. An Intune licence is required for devices that use Intune; the Learn pages read name no extra licence or meter for these settings, so the known cost is admin time, testing and support.
impact: Medium. People on devices that receive the policy approve every admin action interactively, and a reboot is required, so affected user groups notice; devices without the policy are not changed by the Intune settings.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Microsoft Intune admin center route reaches User Account Control Type Of Admin Approval Mode. | Found: create a Settings catalog policy ... Local Policies Security Options: ... User Account Control Type Of Admin Approval Mode (enables the feature) | Fix: Include the wizard progression documented at https://learn.microsoft.com/intune/device-configuration/settings-catalog/: 'Devices > Manage devices > Configuration > Create > New policy > Windows 10 and later > Settings catalog > Create > Basics > Configuration settings > Add settings > Local Policies Security Options > User Account Control Type Of Admin Approval Mode'. The catalog page supports the initial route and is already cited; the linked Administrator protection page supports the final category and setting. The pre-check's missing words are therefore not a wrong-path finding. | Source: https://learn.microsoft.com/windows/security/application-security/application-control/administrator-protection/#configuration
- [contradicted, minor] Governance guidance; Governance controls: checklist-to-table gap / consistency: The checklist tells readers to review LAPS targeting and security baselines, capture elevation events and review policy status, but the table has no rows for these controls. | Found: Check whether your Windows security baselines already set ... Capture elevation events 15031 and 15032 ... The checklist's Intune LAPS targeting review, Windows security baseline check, elevation-event capture and Intune policy-status review have no corresponding row in the controls table. | Fix: The Before rollout LAPS-targeting and Windows-security-baseline checks and the After rollout elevation-event capture and Intune-policy-status review lack table rows. Acknowledging that gap does not meet the checklist rule. Remove those four checklist instructions; retain their already-supported factual explanations in the body. Do not add unverified control rows.
-->
