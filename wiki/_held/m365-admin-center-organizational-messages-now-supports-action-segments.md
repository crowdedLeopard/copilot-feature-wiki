---
title: "Microsoft 365 admin center: target organizational messages with Action Segments"
slug: "m365-admin-center-organizational-messages-now-supports-action-segments"
roadmapId: 503563
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "Organizational messages can now be aimed at Copilot-licensed users who have been inactive, using two predefined usage segments. Launched; it affects admins and message authors and needs no admin action."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: "December CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Advanced targeting, which includes Usage, needs a tenant with Microsoft 365 E3 or E5, Office 365 E3 or E5, or Windows Enterprise E3 or E5. The segments cover users with a Microsoft Copilot licence. No separate price or meter for Action Segments is documented at the time of writing (November 2026)."
audiences: ["m365-admin","change-adoption"]
tags: ["organizational-messages","m365-admin-center","adoption","m365-copilot","licensing"]
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
  - title: "Microsoft 365 Roadmap item 503563"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503563"
    kind: "roadmap"
videos: []
related: ["m365-admin-center-organizational-messages-now-supports-email-messages","m365-admin-center-organizational-messages-now-supports-hybrid-joined-devices"]
controls:
  - governs: "Whether a message is targeted by usage segment (Usage audience)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Show all > Reports > Organizational messages > Top actions > Create a message > Recipients > Select message recipients > Target audience > Usage"
      docs: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365"
    api: null
    note: "Offered only when the tenant has a qualifying E3 or E5 licence. Usage does not require Adoption Score group-level insights. Segments: Inactive Copilot users; Inactive Copilot users in Teams."
  - governs: "Who can write and schedule organizational messages"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Show all > Users > Active users > user > Roles > Manage roles > Admin center access > Show all by category > Other > Organizational Messages Writer"
      docs: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    note: "The Organizational Messages Approver role is assigned the same way. The request body sets principalId, roleDefinitionId and directoryScopeId."
  - governs: "Cancelling or deleting a scheduled or active message"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Show all > Reports > Organizational messages > Manage messages"
      docs: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365"
    api: null
    note: "Learn lists cancel, delete, approve and copy as the actions available from Manage messages."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-13T23:07:14"
changes:
  - date: "2026-11-23"
    note: "First briefing for roadmap item 503563: Action Segments targeting in organizational messages."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 59 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 54
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "c4633c213de439b18ee971b90974fb7a"
---

## What's changing

Organizational messages in the Microsoft 365 admin center can now be targeted by user activity as well as by Microsoft Entra group. The roadmap item calls this Action Segments: dynamic, pre-defined usage segments that go beyond static group definitions. On Microsoft Learn the option appears as **Usage** under **Target audience** in the **Recipients** step of the **Create a message** wizard.

Learn says that for general availability there are two predefined segments. **Inactive Copilot users** is all users with a Microsoft Copilot licence who have not used Copilot in the prior 28 days. **Inactive Copilot users in Teams** is all users with a Microsoft Copilot licence who have not used Copilot in Teams in the prior 30 days. Learn lists Usage as available for Windows Spotlight, Taskbar, Notification Center and Microsoft Teams notifications.

The same Learn page also says Teams notification channels only support recipient selection via Microsoft Entra groups, which does not match the previous sentence. Treat Teams delivery of Usage targeting as something to test before relying on it (see open questions).

The roadmap record gives the status as Launched, with a preview target of December CY2025 and a general availability target of May CY2026. It lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform. The record gives no default state, and no Message Center post was supplied with it.

## Why it matters

For an administrator running a Copilot adoption campaign, the segments replace a manual step: instead of building and maintaining an Entra group of inactive users, an author can pick a Usage audience when scheduling the message. That makes the message list reflect Copilot usage that you did not curate, so expect recipients to change as people start or stop using Copilot.

Microsoft has not stated what happens on arrival, so base planning on the fact that no source says existing messages change. Authors with the Organizational Messages Writer role will see a new audience choice if the tenant meets the licence condition. The practical decisions are who holds that role, whether approvers review messages, and whether your Windows and Teams surfaces are set up to receive them.

## Risk assessment

**Data exposure**

- Segment membership comes from Copilot usage: a user is in a segment when they hold a Microsoft Copilot licence and have not used Copilot in the stated window. Learn does not describe which per-user usage details an author can see when choosing a segment. The **Manage messages** table shows aggregate figures per message (Total messages seen, clicks, dismisses, clickthrough rate).

**Security & identity**

- Creating a message needs the Organizational Messages Writer role, and approving customised messages needs the Organizational Messages Approver role. Keep both role holders to the people who run adoption communications, because a message reaches Windows surfaces and Teams under your organisation's name.
- For Windows surfaces, recipients must be on Microsoft Entra ID-joined or Microsoft Entra hybrid joined devices.

**Autonomy & actions**

- No agent or automated action is involved: the segment only decides who receives a message an author has scheduled. Authors can cancel or delete a message from **Manage messages**.

**Change & support**

- Windows delivers messages on a pull model, so a message can take 24 or more hours to reach a device. Expect support questions about messages that arrive late or not at all.
- Segment targeting excludes users without a Copilot licence by definition, so unlicensed users never receive a message aimed at these segments.
- Learn says government environments such as GCC or GCC-H are not supported for organizational messages at this time, and the roadmap record lists only the Worldwide cloud.

## Cost and licensing

Learn lists "Advanced targeting by group level aggregates, including Department, Location, Company, and Usage" among the advanced features of organizational messages. Those features are available when the tenant has at least one of: Microsoft 365 E3 or E5, Office 365 E3 or E5, or Windows Enterprise E3 or E5. Source: [Organizational messages in the Microsoft 365 admin center](https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365).

The two predefined segments only include users who hold a Microsoft Copilot licence, so the segments are empty for anyone without one. The Learn page documents no separate price or meter for Action Segments at the time of writing (November 2026). The indirect cost is the time of message authors and approvers, plus any Intune policy work needed for Windows surfaces.

## Scope

**Users:** the segments cover users with a Microsoft Copilot licence who have not used Copilot in the prior 28 days (30 days for Teams). Message recipients need access to the Microsoft products the message is delivered to, and need no Entra role.

**Roles:** Organizational Messages Writer to author, Organizational Messages Approver to approve customised messages.

**Platforms and surfaces:** the admin centre experience is on the web. Learn lists Usage as available for Windows Spotlight, Taskbar, Notification Center and Microsoft Teams notifications. Windows channels require Windows 11, version 25H2 or 24H2 Enterprise, and Learn says Taskbar delivery needs KB5094126.

**Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant). Learn says GCC and GCC-H are not supported at this time.

**Prerequisites:** the licence condition above. Learn says Usage targeting does not require the Adoption Score group-level insights that the Companies, Departments and Locations options depend on.

## Governance guidance

### Before rollout

- Confirm the tenant holds one of the licences that unlock advanced targeting; if it does not, the Usage option is part of the advanced features that Learn says are restricted to those tenants.
- Decide which people hold the Organizational Messages Writer and Organizational Messages Approver roles, and assign them in the Microsoft 365 admin center.
- Check that Windows devices are Microsoft Entra ID-joined or hybrid joined and that the Intune tenant policies for Windows surfaces are set, as the Learn page describes.

### At rollout

- Create a test message with Target audience set to Usage and the Inactive Copilot users segment, and confirm who receives it before scheduling a wider campaign.
- Test Teams delivery of a Usage-targeted message separately, because Learn gives two different statements about Teams channels.
- Route customised messages through a holder of the Organizational Messages Approver role before they are scheduled.

### After rollout

- Review activity in the **Review activity** experience and export the CSV to compare seen, clicked and dismissed counts per message.
- Cancel any message that is no longer needed from **Manage messages**.
- Re-check the Learn page for new predefined segments beyond the two listed for general availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a message is targeted by usage segment (Usage audience)</strong><br><small>Tenant</small><br><small class="controls__note">Offered only when the tenant has a qualifying E3 or E5 licence. Usage does not require Adoption Score group-level insights. Segments: Inactive Copilot users; Inactive Copilot users in Teams.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Show all › Reports › Organizational messages › Top actions › Create a message › Recipients › Select message recipients › Target audience › Usage <a href="https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can write and schedule organizational messages</strong><br><small>User</small><br><small class="controls__note">The Organizational Messages Approver role is assigned the same way. The request body sets principalId, roleDefinitionId and directoryScopeId.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Show all › Users › Active users › user › Roles › Manage roles › Admin center access › Show all by category › Other › Organizational Messages Writer <a href="https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Cancelling or deleting a scheduled or active message</strong><br><small>Tenant</small><br><small class="controls__note">Learn lists cancel, delete, approve and copy as the actions available from Manage messages.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Show all › Reports › Organizational messages › Manage messages <a href="https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Role assignment is the practical gate: Learn says authors need the Organizational Messages Writer role and approvers the Organizational Messages Approver role, and the Microsoft 365 admin center steps assign either. The licence condition for advanced features decides whether the Usage option is offered.

Microsoft Learn documents no API for authoring, targeting or cancelling organizational messages at the time of writing (November 2026), so the first and third rows have no automation side. The Microsoft Graph call in the second row is the general call for assigning a Microsoft Entra role; Learn's example on that page uses the Billing Administrator role.

## Open questions

- Does Usage targeting work on Teams notifications? The Learn page lists Usage as available for Microsoft Teams notifications and also says Teams notification channels only support Microsoft Entra group selection. Watch the Learn page for a correction.
- Which Action Segments beyond Inactive Copilot users and Inactive Copilot users in Teams will be added after general availability?
- How often is segment membership recalculated, and can an author see which users are in a segment before scheduling?
- Is Action Segments targeting enabled by default for qualifying tenants, or does Microsoft intend an admin switch? The roadmap record and Learn page do not say.

<!-- rationale
risk: Low. It adds a way for message authors to choose recipients by Copilot usage; the two segments hold only users with a Microsoft Copilot licence, and authoring is gated by the Organizational Messages Writer role.
cost: Low. The Learn page ties advanced targeting, including Usage, to Microsoft 365, Office 365 or Windows Enterprise E3 or E5 licences and documents no separate meter; the cost is author and approver time.
impact: Low. Admins and message authors choose it; end users notice only a message an author aims at them, which for these segments means Copilot-licensed users who have not used Copilot recently.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters; Open questions / default: Microsoft has not stated whether qualifying authors can use Action Segments without a separate enabling switch. | Found: If your tenant has the appropriate licenses ... the following options are available for a Target audience ... Usage. If the Target audience is Usage, then it is not required to enable advanced targeting of organizational messages. | Fix: Set defaultState to user-opt-in for this per-message author choice. Replace 'Microsoft has not stated what happens on arrival' with 'Qualifying message authors can select Usage in the message wizard without enabling advanced targeting of organizational messages.' Remove the final Open questions bullet asking whether a switch is needed. Source: https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365#enabling-advanced-targeting-of-organizational-messages. | Source: https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365
- [contradicted, blocker] controls[0].ui; Governance controls: Usage audience row / admin-path: The route from Create a message goes directly to Recipients without specifying the preceding wizard choices. | Found: Objective: Select the nature or purpose of your new message. ... Location: ... choose where your message is displayed ... Template: Choose the format of the message. ... The available targeting options depend on the message location you select. | Fix: Replace controls[0].ui.path and its rendered table path with 'Show all > Reports > Organizational messages > Top actions > Create a message > Objective > Adoption > Location > Windows Spotlight > Template > Create your own > Customize > Recipients > Select message recipients > Target audience > Usage'. This is a documented Windows route that retains the choices before the audience step; keep the existing docs URL. | Source: https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: No agent or automated action is involved. | Found: Searched: '"organizational messages" "agent" "automated actions"'. Read organizational-messages-microsoft-365 and returned excerpts. Learn describes an author-selected audience and scheduled delivery, not a blanket absence of automated actions. | Fix: Replace 'No agent or automated action is involved: the segment only decides who receives a message an author has scheduled' with 'Usage is an audience choice in a message that an author creates and schedules.' Source: https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365#create-a-new-message.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist asks administrators to check Windows-delivery Intune policies, but no controls row represents that check. | Found: Check ... that the Intune tenant policies for Windows surfaces are set ...; controls contains only Usage audience, Writer role assignment, and message cancellation/deletion. | Fix: Remove the Before rollout bullet beginning 'Check that Windows devices' from the checklist; the existing body can retain the documented prerequisites. Do not add a controls row.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist directs administrators to Review activity and CSV export, but no controls row represents this monitoring control. | Found: Review activity in the Review activity experience and export the CSV ...; controls contains only Usage audience, Writer role assignment, and message cancellation/deletion. | Fix: Remove the After rollout bullet beginning 'Review activity' from the checklist. Do not add a controls row.
-->
