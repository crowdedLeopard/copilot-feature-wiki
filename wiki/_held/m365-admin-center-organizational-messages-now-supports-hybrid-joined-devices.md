---
title: "Microsoft 365 admin center: Organizational messages now supports hybrid-joined devices"
slug: "m365-admin-center-organizational-messages-now-supports-hybrid-joined-devices"
roadmapId: 503564
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "Organizational messages can now target Microsoft Entra hybrid joined Windows devices as well as Entra ID–joined ones. Admins who use messages should confirm their Windows delivery policies cover those devices."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "December CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn says advanced features (fully customised messages, group-level targeting) need Microsoft 365 E3 or E5, Office 365 E3 or E5, or Windows Enterprise E3 or E5. Pre-made messages might still be available without them."
audiences: ["m365-admin","change-adoption"]
tags: ["organizational-messages","m365-admin-center","hybrid-identity","adoption","admin-controls"]
sources:
  - title: "Organizational messages in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365"
    kind: "learn"
  - title: "Organizational messages in Microsoft 365 FAQ"
    url: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq"
    kind: "learn"
  - title: "Assign Microsoft Entra roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
  - title: "Update deviceManagementConfigurationSetting"
    url: "https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationsetting-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Microsoft 365 Roadmap 503564"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503564"
    kind: "roadmap"
videos: []
related: ["m365-admin-center-organizational-messages-now-supports-email-messages"]
controls:
  - governs: "Whether Windows devices can receive organizational messages"
    scope: "group"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage devices > Configuration > Policies > Create > New Policy > Windows 10 and later > Settings catalog > Create > Configuration settings > Add settings > Experience > Enable delivery of organizational messages (User)"
      docs: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365"
    api:
      kind: "graph"
      call: "PATCH /beta/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicyId}/settings/{deviceManagementConfigurationSettingId}"
      docs: "https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationsetting-update?view=graph-rest-beta"
    note: "Applies to Windows delivery only. Beta API; the request body sets settingInstance. Set Enable delivery of organizational messages (User) to Allow in Configuration settings."
  - governs: "Who can write and approve organizational messages"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Show all > Users > Active users > user > Manage roles > Admin center access > Show all by category > Other > Organizational Messages Writer"
      docs: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    note: "Organizational Messages Writer and Approver are Microsoft Entra roles. The request body sets principalId, roleDefinitionId and directoryScopeId."
  - governs: "Stopping or removing a scheduled or active message"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Show all > Reports > Organizational messages > Manage messages"
      docs: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365"
    api: null
    note: "Manage messages lets the team cancel, delete, approve and copy messages. This route opens Manage messages; the page lists those actions without giving the individual message action steps."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-24T22:41:12"
changes:
  - date: "2026-11-22"
    note: "First briefing: records hybrid-joined device support, the Windows delivery policies and the roles and licences for organizational messages."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the Intune path (second Create), removed the Graph create-policy call from the Windows delivery row, added Show all to the role path and trimmed three checklist items with no table row."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the Block-settings list, added the Intune Graph beta setting-update call for row 1, and set the licensing model to included."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 67
  unconfirmed: 0
  contradicted: 1
  attempts: 3
  hash: "ad70914437d76a711a80ba9b94f0fce5"
---

## What's changing

Organizational messages, the in-product messages that admins write and schedule in the Microsoft 365 admin center, now support Microsoft Entra hybrid joined devices. The roadmap item states only: "Organizational Messages now supports Hybrid-joined Devices."

The organizational messages Learn page lists the supported Windows devices under Requirements: "Only Microsoft Entra ID–joined devices and Microsoft Entra hybrid joined devices are supported." That page gives no hybrid-specific configuration, so the steps below are the general ones for Windows delivery. Windows channels such as Windows Spotlight and the taskbar need recipients on Windows 11, version 25H2 or 24H2 Enterprise, and the taskbar needs KB5094126.

The roadmap record gives the status as Launched, with a preview date of December CY2025 and a target date of June CY2026, in the Worldwide (Standard Multi-Tenant) cloud. Release phases listed are General Availability and Preview. The Learn FAQ says government environments such as GCC or GCC-H are not supported at this time.

## Why it matters

If your Windows estate is mostly hybrid joined, this decides whether organisation-wide messages (Copilot adoption, service notices, urgent notices) can reach those users at all. Check your targeting groups and Intune policies against the hybrid-joined devices you own, because delivery depends on policies applied to those devices.

Microsoft has not stated what happens on arrival, so the wiki treats the default state as not stated. No source says existing behaviour changes: nothing is delivered until an author schedules a message, and Windows delivery also depends on tenant policies you set.

## Risk assessment

**Data exposure**
- Messages are authored text and links that an organisation chooses to show. Targeting by Microsoft Entra group, or by department, location, company or usage where licensed, decides who sees them; check the groups before scheduling, because a message to a broad group now reaches hybrid-joined devices in it.

**Security & identity**
- Authoring needs the Organizational Messages Writer Entra role and approval needs the Organizational Messages Approver role. Keep both lists short, because a writer can put a custom URL in front of users on the lock screen or taskbar.
- Windows delivery needs the endpoints fd.api.orgmsg.microsoft.com and ris.prod.api.personalization.ideas.microsoft.com open on the firewall, so hybrid-joined devices on restricted networks may not receive messages until that is done.

**Autonomy & actions**
- The feature does not act on its own: messages are scheduled by a writer, and custom messages are approved by a different person. Pre-made messages need no approval, per the Learn page.

**Change & support**
- Hybrid-joined devices can be blocked by the same Intune settings that block other Windows devices (Windows Spotlight, Windows Tips). Expect support questions where a device restriction policy sets one of these to Block.
- Windows delivery is a pull model, and the Learn FAQ says messages might take 24 or more hours to arrive, so test well before an urgent date.

## Cost and licensing

The Learn page does not describe a meter, Copilot Credits use or a separate charge for organizational messages. The cost it describes is licences for the advanced features and admin time.

Per the organizational messages page, fully customised message creation and advanced targeting by group level aggregates (department, location, company, usage) are available when the tenant has at least one of: Microsoft 365 E3 or E5, Office 365 E3 or E5, or Windows Enterprise E3 or E5. The FAQ adds that Windows custom messages require Windows E3 or E5, or Microsoft 365 E3 or E5; Teams custom messages require Office 365 E3 or E5, or Microsoft 365 E3 or E5; and pre-made messages might still be available without these licences.

Usage targeting refers to users with a Microsoft Copilot licence who have not used Copilot recently. A licence rule specific to hybrid-joined devices is not published on these pages.

## Scope

Worldwide (Standard Multi-Tenant) is the only cloud on the roadmap record, and the platform is Web, the admin centre. For Windows channels the Learn page limits supported devices to Microsoft Entra ID–joined and Microsoft Entra hybrid joined devices, and requires Windows 11, version 25H2 or 24H2 Enterprise for recipients.

Recipients need access to the Microsoft products the message is configured for; end users do not need Entra roles. Teams notifications and email messages do not need the Windows tenant policies. Teams notifications support recipient selection only by Microsoft Entra group.

Authors need the Organizational Messages Writer role and approvers the Organizational Messages Approver role. Government environments such as GCC and GCC-H are listed as not supported in the Learn FAQ.

## Governance guidance

### Before rollout
- Inventory which Windows devices in your tenant are Microsoft Entra hybrid joined, and confirm they run Windows 11, version 25H2 or 24H2 Enterprise if you will use Windows channels. The service owner does this with the device team.
- Create or check the Intune settings catalog policy that allows organisational messages and assign it to groups containing hybrid-joined devices (controls table, row 1).

### At rollout
- Assign the Organizational Messages Writer and Approver roles to named people only (controls table, row 2).
- Send a pre-made message to a small Microsoft Entra group that includes hybrid-joined devices before targeting wider groups.
- Allow at least 24 hours for the test message to arrive, and longer for a tenant that has not scheduled a message in the past 30 days.

### After rollout
- Cancel any message that was scheduled to the wrong group from Manage messages (controls table, row 3).
- Recheck the Intune policies when you add device groups.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Windows devices can receive organizational messages</strong><br><small>Group</small><br><small class="controls__note">Applies to Windows delivery only. Beta API; the request body sets settingInstance. Set Enable delivery of organizational messages (User) to Allow in Configuration settings.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage devices › Configuration › Policies › Create › New Policy › Windows 10 and later › Settings catalog › Create › Configuration settings › Add settings › Experience › Enable delivery of organizational messages (User) <a href="https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicyId}/settings/{deviceManagementConfigurationSettingId}</code> <a href="https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationsetting-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can write and approve organizational messages</strong><br><small>User</small><br><small class="controls__note">Organizational Messages Writer and Approver are Microsoft Entra roles. The request body sets principalId, roleDefinitionId and directoryScopeId.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Show all › Users › Active users › user › Manage roles › Admin center access › Show all by category › Other › Organizational Messages Writer <a href="https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Stopping or removing a scheduled or active message</strong><br><small>Tenant</small><br><small class="controls__note">Manage messages lets the team cancel, delete, approve and copy messages. This route opens Manage messages; the page lists those actions without giving the individual message action steps.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Show all › Reports › Organizational messages › Manage messages <a href="https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Windows delivery depends on Intune policy: the Learn page says some policies can block delivery of organizational messages, and that tenant policies are needed only for Windows surfaces, not for Teams or email. Learn describes no separate admin switch for hybrid-joined devices.

Row 1: The Intune beta API updates an existing policy setting through settingInstance; identify the Enable delivery of organizational messages (User) setting in that policy. This general setting-update API requires an active Intune licence and is not a hybrid-specific endpoint.

Row 2 assigns Microsoft Entra roles, so it needs an admin who can assign roles. The Graph call applies to any Entra role; the Organizational Messages roles are the ones relevant here. Row 3: the Learn page documents cancelling in the admin centre, and at the time of writing (November 2026) it documents no API for cancelling a message.

## Open questions

- Does hybrid-joined support change what existing messages do on devices that were already receiving them? Microsoft has not stated the default state; watch the Message center and the organizational messages Learn page.
- Is there a hybrid-specific prerequisite, such as device registration state or line of sight to the domain controllers, that affects delivery? The Devices entry in Learn names the supported device types without giving separate hybrid-specific prerequisites.
- Which Intune settings are minimum for a hybrid-joined device that is not Intune-managed? Learn describes the Intune policy steps but does not say how unmanaged hybrid-joined devices are handled.

<!-- rationale
risk: Low. Messages reach users only after an author with the Organizational Messages Writer role schedules them, and custom messages need approval from an Organizational Messages Approver first.
cost: Low. The Learn page names no meter or charge for organizational messages; the cost is admin time, plus Microsoft 365, Office 365 or Windows Enterprise E3 or E5 for the advanced features.
impact: Low. Admins notice first, because they author and target messages; end users see something only when a message is scheduled for them on a Windows device.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[2].note; Governance controls table / absence: The cited page lists cancellation, deletion, approval and copying without giving individual message action steps. | Found: To approve or reject a Pending approval message, follow these steps: ... Select the message you want to review. ... select Approve. ... next to the message that you want to copy, select the ellipses ⋮ menu, and then select Copy. | Fix: Replace the second sentence of controls[2].note and its rendered copy with: 'This route opens Manage messages; the page lists cancellation and deletion without giving their individual action steps.' The same page documents individual approval and copying steps: https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365. | Source: https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Intune path through Devices, Configuration, New Policy and Settings catalog reaches Enable delivery of organizational messages (User). | Found: Under Platform, select Windows 10 and later. Under Profile type, select Settings catalog. Select Create. ... In the Configuration settings page, select + Add settings. ... select Experience ... Enable delivery of organizational messages (User) | Fix: Use the fuller path 'Devices > Manage devices > Configuration > Policies > Create > New Policy > Windows 10 and later > Settings catalog > Create > Basics > Configuration settings > Add settings > Experience > Enable delivery of organizational messages (User)'. State in the note that after adding it, close Settings picker and set it to Allow in Configuration settings, as documented at https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365. | Source: https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The Microsoft 365 admin center path Show all > Users > Active users > user > Manage roles > Admin center access > Show all by category > Other > Organizational Messages Writer assigns the writer role. | Found: select Manage roles under Roles. ... select Admin center access, and then select Show all by category. ... In the Other section, select the checkbox next to Organizational Messages Writer and/or Organizational Messages Approver | Fix: Include the omitted Roles heading: 'Show all > Users > Active users > user > Roles > Manage roles > Admin center access > Show all by category > Other > Organizational Messages Writer', as documented at https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq. | Source: https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq
-->
