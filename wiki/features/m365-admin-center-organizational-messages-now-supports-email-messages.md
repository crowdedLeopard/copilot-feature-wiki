---
title: "Microsoft 365 admin center: Organizational messages can be delivered by email"
slug: "m365-admin-center-organizational-messages-now-supports-email-messages"
roadmapId: 503562
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "Organizational messages can now go out by email, using eight pre-made templates, as well as to Windows and Teams. Nothing is sent until a user with the Writer role schedules a message; admins should decide who holds that role."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: "November CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Learn requires Microsoft 365 E3 or E5, Office 365 E3 or E5, or Windows Enterprise E3 or E5 for advanced features (custom messages, advanced targeting). It states no licence for email, which uses pre-made templates only."
audiences: ["m365-admin","change-adoption","service-owner"]
tags: ["organizational-messages","m365-admin-center","adoption","onboarding","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 503562"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503562"
    kind: "roadmap"
  - title: "Organizational messages in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365"
    kind: "learn"
  - title: "Organizational messages in Microsoft 365 FAQ"
    url: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Assign Microsoft Entra roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
  - title: "Microsoft Entra built-in roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Who can write and schedule organizational messages, including email"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Show all > Users > Active users > user > Roles > Manage roles > Admin center access > Show all by category > Other > Organizational Messages Writer"
      docs: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    note: "Assigns any Entra role; the request body's roleDefinitionId selects Organizational Messages Writer. The Approver role covers custom messages only."
  - governs: "Whether a message is delivered by email, chosen when it is created"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Show all > Reports > Organizational messages > Top actions > Create a message > Objective > Location"
      docs: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365"
    api: null
    note: "Requires the Organizational Messages Writer role. Email offers pre-made templates only."
  - governs: "Which groups receive a message"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Show all > Reports > Organizational messages > Top actions > Create a message > Objective > Location > Template > Customize > Recipients"
      docs: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365"
    api: null
    note: "Learn says available targeting options depend on the message location; the options for email are not stated."
  - governs: "Stopping or removing a scheduled or active message"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Show all > Reports > Organizational messages > Manage messages"
      docs: "https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365"
    api: null
    note: "Learn lists cancel, delete, approve and copy among the actions in Manage messages."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-20"
    note: "New briefing: organizational messages can be delivered by email using eight pre-made templates; roadmap status Launched."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 55 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected the Create a message wizard paths for the email location and recipients rows, narrowed the claim that the Writer role is the only gate, and removed the unsupported scheduling checklist bullet."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 52 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 52
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "51470dfefd5865f413b40344a89d325c"
---

## What's changing

Organizational messages in the Microsoft 365 admin centre can now be delivered by email. Microsoft Learn lists email as a delivery location alongside Windows Spotlight, the Windows Taskbar, Notification Center and Teams, chosen at the **Location** step of the **Create a message** wizard.

Email is limited to eight pre-made templates, and Learn says the email templates aren't customizable. Two are welcome messages (Welcome to Copilot and Welcome to Copilot Chat). Six come from the Great Microsoft Copilot Journey and cover Copilot onboarding and adoption. Learn says pre-made messages need no approval, and email is limited to pre-made templates, so an email does not go through the Approver workflow that custom messages do. Learn also says email open tracking is being removed worldwide: new open count metrics will no longer be available, and open count data already collected stays accessible.

The roadmap item is Launched, with a target of May CY2026 and a preview date of November CY2025; its release phases are General Availability and Preview. The Microsoft 365 Copilot release notes list email under updates released between May 19, 2026 and June 2, 2026. The roadmap lists Worldwide (Standard Multi-Tenant) only, and the organizational messages FAQ says government environments such as GCC or GCC-H aren't supported at this time.

## Why it matters

Email gives a change or adoption team a way to reach inboxes through the same admin-centre workflow it already uses for Windows and Teams messages, and Learn says no tenant policies are needed for email. The catch for a service owner is governance: the Organizational Messages Writer role controls authoring, while pre-made messages do not require approval.

Microsoft has not stated that anything is sent without an author creating and scheduling a message, so expect nothing to arrive until someone with the role does so. Decide now who holds that role and who reviews content before it is scheduled.

## Risk assessment

**Data exposure**
- Email content is limited to the eight pre-made templates, which Learn describes as not customizable, so an author has little room to place organisational information in the message body.
- Learn says new open count metrics are being removed for these emails, so expect less recipient-level engagement data than for other channels.

**Security & identity**
- Authoring requires the Organizational Messages Writer Microsoft Entra role. Pre-made messages need no approval and email is limited to pre-made templates, so the Approver role is not a check on email; manage Writer assignments instead (controls table, first row).

**Autonomy & actions**
- Each email is a message an author creates and schedules in the wizard, with the start date, end date and frequency set at the **Schedule** step. Urgent delivery is not an option for email: Learn says the only locations available for urgent messages are the Windows 11 Taskbar and Notifications area.
- An admin can cancel a message from **Manage messages**; Learn says a cancellation can be made before or during delivery.

**Change & support**
- Email needs none of the Windows tenant policies or Intune settings that the page describes for Windows surfaces, so Windows troubleshooting steps do not apply to it.
- Expect questions from recipients about who sent the email; Learn does not describe the sender or any recipient opt-out for email (see open questions).

## Cost and licensing

Learn names no licence or meter for email. It states that custom messages and advanced targeting (by Companies, Departments, Locations and Usage) need at least one of Microsoft 365 E3 or E5, Office 365 E3 or E5, or Windows Enterprise E3 or E5. Email is limited to pre-made templates, and the FAQ says authoring experiences are disabled if licence requirements aren't met while pre-made messages might still be available without those licences. What this means for email specifically is not yet published.

The organizational messages page documents no price or meter for the feature at the time of writing (November 2026). The indirect cost is admin and communications time: assigning roles, choosing groups and checking the first sends.

## Scope

**Who can author:** users with the Organizational Messages Writer Microsoft Entra role; the Organizational Messages Approver role reviews custom messages. End users need no Entra role to receive organizational messages, but Learn says recipients must have access to the Microsoft products the message is configured for.

**Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. The FAQ says GCC and GCC-H environments aren't supported at this time.

**Prerequisites:** the Windows requirements on the page (tenant policies, Windows 11 versions, Entra-joined devices, firewall endpoints) are marked for Windows channels. Learn says tenant policies aren't needed to send to email.

**Targeting:** Learn says the available targeting options depend on the message location, and gives Windows and Teams as examples. Which options apply to email is not stated.

## Governance guidance

### Before rollout
- Review who holds the Organizational Messages Writer and Approver roles, and assign Writer only to the people who will send email (controls table, first row).
- Agree who reads the chosen template before it is scheduled, because pre-made email messages need no approval in the wizard.
- Choose the Microsoft Entra groups that should receive the first email, using the **Recipients** step of the wizard.

### At rollout
- Create a first email in **Create a message**, with **Email** as the location, and send it to a small test group.
- Check what those recipients receive, including the sender and whether any opt-out is offered, because Learn does not describe either.

### After rollout
- Check **Manage messages** for each message's status (Active, Completed, Failed or Canceled) and cancel any message that should stop.
- Treat open counts as unavailable for email, since Learn says new open count metrics are being removed.
- Re-read the organizational messages page for sender, targeting and licence details when Microsoft adds them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can write and schedule organizational messages, including email</strong><br><small>Tenant</small><br><small class="controls__note">Assigns any Entra role; the request body's roleDefinitionId selects Organizational Messages Writer. The Approver role covers custom messages only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Show all › Users › Active users › user › Roles › Manage roles › Admin center access › Show all by category › Other › Organizational Messages Writer <a href="https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365-faq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a message is delivered by email, chosen when it is created</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Organizational Messages Writer role. Email offers pre-made templates only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Show all › Reports › Organizational messages › Top actions › Create a message › Objective › Location <a href="https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which groups receive a message</strong><br><small>Group</small><br><small class="controls__note">Learn says available targeting options depend on the message location; the options for email are not stated.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Show all › Reports › Organizational messages › Top actions › Create a message › Objective › Location › Template › Customize › Recipients <a href="https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Stopping or removing a scheduled or active message</strong><br><small>Tenant</small><br><small class="controls__note">Learn lists cancel, delete, approve and copy among the actions in Manage messages.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Show all › Reports › Organizational messages › Manage messages <a href="https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Authoring is controlled by Entra role assignment. The Microsoft Graph call in the first row assigns any Microsoft Entra role; the role definition in the request body selects Organizational Messages Writer or Approver.

The Windows tenant policies and Intune settings on the page do not govern email: Learn says they are needed only for Windows surfaces. The FAQ describes the **Allow Microsoft messages to display** setting in terms of Windows surfaces, so do not rely on it for email.

Microsoft Learn documents no API or cmdlet for creating, scheduling or cancelling organizational messages at the time of writing (November 2026), so those rows have no automation side.

## Open questions

- Which address do organizational message emails come from, and can recipients opt out? Watch the organizational messages page on Microsoft Learn.
- Which recipient targeting options apply to email: Microsoft Entra groups only, or also Companies, Departments, Locations and Usage?
- Does an organization without Microsoft 365, Office 365 or Windows Enterprise E3 or E5 licences get the email option for pre-made templates?
- Will custom or customizable email messages follow, given that Learn says email is currently limited to the eight pre-made templates?
- Will government clouds be supported? The FAQ says GCC and GCC-H aren't supported at this time.

<!-- rationale
risk: Low. Email is limited to eight pre-made templates that Learn says aren't customizable, and nothing is sent until an author with the Organizational Messages Writer role schedules a message.
cost: Low. The only cost the sources show is admin time; Learn names licences only for custom messages and advanced targeting, and no licence or meter specific to email is published.
impact: Low. Admins and authors notice first; end users see an email only when an author sends one to them.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What's changing; Risk assessment; controls notes; Open questions; rationale: risk / behaviour: Email functionality is limited to eight pre-made templates. | Found: Email functionality is currently limited to the eight provided pre-made templates. | Fix: After the template breakdown in What's changing, add: "Microsoft's June 2, 2026 Copilot release notes instead describe nine initial email templates, including a third welcome template, Welcome to Copilot Trial; the organizational messages guide lists eight." The conflicting source is https://learn.microsoft.com/microsoft-365/copilot/release-notes#june-2,-2026. | Source: https://learn.microsoft.com/microsoft-365/admin/misc/organizational-messages-microsoft-365
-->
