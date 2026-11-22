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
  model: "mixed"
  notes: "Learn says advanced features (fully customised messages, group-level targeting) need Microsoft 365 E3 or E5, Office 365 E3 or E5, or Windows Enterprise E3 or E5. Pre-made messages might still be available without them."
audiences: ["m365-admin","change-adoption"]
tags: ["organizational-messages","m365-admin-center","hybrid-identity","adoption","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 503564"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503564"
    kind: "roadmap"
  - title: "Organizational messages in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365"
    kind: "learn"
  - title: "Organizational messages in Microsoft 365 FAQ"
    url: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq"
    kind: "learn"
  - title: "Create deviceManagementConfigurationPolicy"
    url: "https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationpolicy-create?view=graph-rest-beta"
    kind: "learn"
  - title: "Assign Microsoft Entra roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
videos: []
related: ["m365-admin-center-organizational-messages-now-supports-email-messages"]
controls:
  - governs: "Whether Windows devices can receive organizational messages"
    scope: "group"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage devices > Configuration > Policies > Create > New Policy > Windows 10 and later > Settings catalog > Configuration settings > Add settings > Experience > Enable delivery of organizational messages (User)"
      docs: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365"
    api:
      kind: "graph"
      call: "POST /beta/deviceManagement/configurationPolicies"
      docs: "https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationpolicy-create?view=graph-rest-beta"
    note: "Applies to Windows delivery only. The Graph call creates the policy that holds the settings; beta API."
  - governs: "Who can write and approve organizational messages"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Manage roles > Admin center access > Show all by category > Other > Organizational Messages Writer"
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
    note: "Manage messages lets the team cancel, delete, approve and copy messages."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-24T22:41:12"
changes:
  - date: "2026-11-22"
    note: "First briefing: records hybrid-joined device support, the Windows delivery policies and the roles and licences for organizational messages."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 59
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "ff2c3b8012053ecacfa6cbf3f4e43818"
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
- Hybrid-joined devices can be blocked by the same Intune settings that block other Windows devices (Windows Spotlight, Windows Tips, Disable Cloud Optimized Content). Expect support questions where a device restriction policy sets one of these to Block.
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
- Check that no Intune device restriction policy sets Windows Spotlight, Windows Spotlight on lock screen, Windows Tips, Windows Spotlight in action center or Windows Spotlight personalization to Block.
- Open the two Windows delivery endpoints on the firewall used by hybrid-joined devices.

### At rollout
- Assign the Organizational Messages Writer and Approver roles to named people only (controls table, row 2).
- Send a pre-made message to a small Microsoft Entra group that includes hybrid-joined devices before targeting wider groups.
- Allow at least 24 hours for the test message to arrive, and longer for a tenant that has not scheduled a message in the past 30 days.

### After rollout
- Review Messages seen, Clicks and Dismisses in the Review activity view to confirm hybrid-joined users are receiving messages.
- Cancel any message that was scheduled to the wrong group from Manage messages (controls table, row 3).
- Recheck the Intune policies when you add device groups.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Windows devices can receive organizational messages</strong><br><small>Group</small><br><small class="controls__note">Applies to Windows delivery only. The Graph call creates the policy that holds the settings; beta API.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage devices › Configuration › Policies › Create › New Policy › Windows 10 and later › Settings catalog › Configuration settings › Add settings › Experience › Enable delivery of organizational messages (User) <a href="https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/deviceManagement/configurationPolicies</code> <a href="https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationpolicy-create?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can write and approve organizational messages</strong><br><small>User</small><br><small class="controls__note">Organizational Messages Writer and Approver are Microsoft Entra roles. The request body sets principalId, roleDefinitionId and directoryScopeId.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Manage roles › Admin center access › Show all by category › Other › Organizational Messages Writer <a href="https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Stopping or removing a scheduled or active message</strong><br><small>Tenant</small><br><small class="controls__note">Manage messages lets the team cancel, delete, approve and copy messages.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Show all › Reports › Organizational messages › Manage messages <a href="https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Windows delivery depends on Intune policy: the Learn page says some policies can block delivery of organizational messages, and that tenant policies are needed only for Windows surfaces, not for Teams or email. Learn describes no separate admin switch for hybrid-joined devices.

The Graph call in row 1 creates the settings catalog policy object; the Experience settings are chosen in the policy, as the Learn steps show. The Intune Graph /beta API requires an active Intune licence and may change.

Row 2 assigns Microsoft Entra roles, so it needs an admin who can assign roles. The Graph call applies to any Entra role; the Organizational Messages roles are the ones relevant here. Row 3: the Learn page documents cancelling in the admin centre, and at the time of writing (November 2026) it documents no API for cancelling a message.

## Open questions

- Does hybrid-joined support change what existing messages do on devices that were already receiving them? Microsoft has not stated the default state; watch the Message center and the organizational messages Learn page.
- Is there a hybrid-specific prerequisite, such as device registration state or line of sight to the domain controllers, that affects delivery? The Learn requirements list only names the device types.
- Which Intune settings are minimum for a hybrid-joined device that is not Intune-managed? Learn describes the Intune policy steps but does not say how unmanaged hybrid-joined devices are handled.

<!-- rationale
risk: Low. Messages reach users only after an author with the Organizational Messages Writer role schedules them, and custom messages need approval from an Organizational Messages Approver first.
cost: Low. The Learn page names no meter or charge for organizational messages; the cost is admin time, plus Microsoft 365, Office 365 or Windows Enterprise E3 or E5 for the advanced features.
impact: Low. Admins notice first, because they author and target messages; end users see something only when a message is scheduled for them on a Windows device.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The printed Intune route goes from Settings catalog directly to Configuration settings and then to Enable delivery of organizational messages (User). | Found: Under Profile type, select Settings catalog. Select Create. The Create profile wizard opens. | Fix: Replace the path with 'Devices > Manage devices > Configuration > Policies > Create > New Policy > Windows 10 and later > Settings catalog > Create > Configuration settings > Add settings > Experience > Enable delivery of organizational messages (User)'. The second Create opens the wizard, as documented at https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365. | Source: https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365
- [contradicted, blocker] controls[0].api; Governance controls table / command: POST /beta/deviceManagement/configurationPolicies is the automation equivalent for enabling Windows organisational-message delivery. | Found: Create a new deviceManagementConfigurationPolicy object. In the request body, supply a JSON representation for the deviceManagementConfigurationPolicy object. | Fix: Set controls[0].api to null and remove its Graph-create explanation from the row note and Governance controls prose. The cited operation creates the policy container; its documented request properties do not set Enable delivery of organizational messages (User), so it is not the equivalent delivery control. | Source: https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationpolicy-create?view=graph-rest-beta
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The Microsoft 365 admin center role-assignment path reaches Organizational Messages Writer through Users, Active users and Manage roles. | Found: From the left navigation bar, select ... Show all, and then select Users to expand it. Under Users, select Active users. | Fix: Use the full documented path 'Show all > Users > Active users > user > Manage roles > Admin center access > Show all by category > Other > Organizational Messages Writer'. The omitted Show all is the navigation-expansion step; the remaining printed labels match https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq. | Source: https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: Every control the governance checklist asks the reader to check or configure has a controls-table row. | Found: Checklist: Check that no Intune device restriction policy sets ... to Block; Open the two Windows delivery endpoints; Review Messages seen, Clicks and Dismisses. Table: Windows delivery setting, author/approver roles, and stopping/removing messages only. | Fix: Remove the checklist bullets beginning 'Check that no Intune device restriction policy', 'Open the two Windows delivery endpoints', and 'Review Messages seen, Clicks and Dismisses'. Their factual explanations can remain in the body; these checklist controls have no corresponding table rows. Do not add rows as part of this correction.
-->
