---
title: "Outlook: new Copilot entry point in classic Outlook"
slug: "outlook-new-copilot-entry-point-in-classic-outlook"
roadmapId: 567007
topic: "m365-copilot"
products: ["Outlook","Microsoft Copilot (Microsoft 365)"]
summary: "Classic Outlook for Windows gets a redesigned Copilot entry point next to the ribbon. Microsoft's notice says no admin action is required; plan user and help desk communication. Rolling out from mid-November 2026."
status: "rolling-out"
releasePhase: ["Current Channel","General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The notice says the entry point is available by default for eligible users with the required Microsoft 365 Copilot licence and that no licensing requirements change. Microsoft Learn says users need a Microsoft Copilot licence and a qualifying prerequisite licence."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["m365-copilot","outlook","copilot","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 567007"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567007"
    kind: "roadmap"
  - title: "MC1441784: (Updated) Microsoft Copilot for Outlook: New Copilot entry point in Classic Outlook"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1441784"
    kind: "message-center"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "user: assignLicense"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which users hold the Microsoft Copilot licence the notice ties availability to"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "graph"
      call: "POST /v1.0/users/{id | userPrincipalName}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    note: "Role: at least License Administrator or User Administrator. The request body takes addLicenses and removeLicenses. The notice also says enterprise-licence users without a Copilot licence will see the entry point."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-20"
    note: "First briefing for roadmap item 567007, based on the roadmap record and Message Center notice MC1441784."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 48 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 67 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ffdec5eaa4c659ed79e1ab5d28805436"
---

## What's changing

Microsoft is replacing the Copilot entry point in classic Outlook for Windows with a new one located next to the Outlook ribbon. Microsoft's notice MC1441784 says users keep access to the Copilot side pane, and that the new entry point also surfaces contextual, AI-powered recommendations based on the task at hand, such as reading email, composing messages or managing a calendar.

The roadmap item describes this as a consistent Copilot entry point across Microsoft 365 apps, already available across other Outlook endpoints and in Word, Excel and PowerPoint, now rolling out to classic Outlook. Microsoft Learn has no page for this change itself, so what follows about behaviour is the roadmap item's and the notice's description.

The roadmap status is Rolling out, with a target of November CY2026, for Current Channel and General Availability on Desktop. The notice, last updated 26 October 2026, gives the General Availability schedule: Worldwide from mid-November 2026, expected to finish by late November 2026; GCC, GCC High and DoD from early December 2026, expected to finish by late December 2026. The notice lists no act-by date.

## Why it matters

This is a visible change to a button users already know, in an app most staff use all day. Microsoft's notice says the entry point is available by default for eligible users with the required Microsoft 365 Copilot licence, and that enterprise-licence users with or without a Copilot licence will see it. Nobody has to switch it on, so the first sign for most tenants will be help desk calls asking where the Copilot button went.

The notice says no action is required, and the wiki's view is that the useful work is communication: tell users the entry point has moved, update training material that shows the old location, and brief the help desk before the Worldwide rollout completes in late November 2026.

## Risk assessment

**Data exposure**
- The notice describes recommendations "based on the task at hand" while reading email, composing messages or managing a calendar. Microsoft has not said whether these recommendations use data that the existing Copilot side pane does not, so treat the data boundary as the one your Copilot deployment already has.

**Security & identity**
- The notice states that no existing Copilot licensing requirements or admin settings are changing. No new permission or identity requirement is described in the notice or on the roadmap item.

**Autonomy & actions**
- The notice says users can act on suggestions with a single click, for example to summarise content, draft responses or organise information. The roadmap item and notice do not describe actions that run without a user selecting them.

**Change & support**
- The Copilot button moves, which can break screenshots and how-to steps in internal guides. Users without a Copilot licence but with an enterprise licence are also told they will see the new entry point, so some users may meet it without being able to use every Copilot capability.

## Cost and licensing

The notice says the feature is available by default for eligible users with the required Microsoft 365 Copilot licence, and that no existing Copilot licensing requirements are changing. Microsoft Learn's requirements page says users need a Microsoft Copilot license and a qualifying prerequisite license, and that Microsoft Copilot works with supported versions of classic Outlook ([Microsoft Copilot requirements](https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements)).

No meter is attached to this change in the roadmap item or the notice. The indirect cost is admin and help desk time. A price or credit rate specific to this entry point is not published, and nothing on the roadmap item suggests one is planned.

## Scope

**Users:** the notice says all users with a Copilot licence, and enterprise-licence users with or without a Copilot licence, will see the new entry point.

**Apps and platforms:** classic Outlook for Windows (roadmap platform: Desktop; release phase: Current Channel, General Availability). The roadmap item says the experience is already available on other Outlook endpoints and in Word, Excel and PowerPoint.

**Clouds:** the roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The notice schedules Worldwide from mid-November 2026 and GCC, GCC High and DoD from early December 2026.

**Prerequisites:** Microsoft Learn says Microsoft Copilot works with supported versions of classic Outlook and that an Exchange Online mailbox is required for mailbox-grounded experiences.

## Governance guidance

### Before rollout
- Tell users and the help desk that the Copilot entry point in classic Outlook is moving next to the Outlook ribbon, as the notice recommends.
- Update internal documentation and training material that show the current location of the Copilot button.
- Check which users hold the Microsoft Copilot licence and which hold only an enterprise licence, because the notice says both groups will see the new entry point.

### At rollout
- Watch for the change during the notice's Worldwide window, mid-November to late November 2026, or the GCC, GCC High and DoD window, early December to late December 2026.
- Direct help desk staff to the side pane, which the notice says users keep.

### After rollout
- Collect user feedback on the contextual suggestions and decide whether further communication is needed.
- Re-read MC1441784 in Message center for timeline updates, since the notice has already been updated once.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft Copilot licence the notice ties availability to</strong><br><small>User</small><br><small class="controls__note">Role: at least License Administrator or User Administrator. The request body takes addLicenses and removeLicenses. The notice also says enterprise-licence users without a Copilot licence will see the entry point.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id | userPrincipalName}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The notice says no existing Copilot licensing requirements or admin settings are changing, and it names no setting for this entry point. The row above is the licensing control the notice ties availability to: it decides who holds the Copilot licence. The notice also says enterprise-licence users without a Copilot licence will see the entry point, so licence assignment is not described as a way to hide it. Assigning licences needs at least the License Administrator or User Administrator role.

## Open questions

- Is there an admin setting or policy that turns the new entry point off or hides it in classic Outlook, separate from licence assignment? Watch MC1441784 and Microsoft Learn.
- What do the contextual recommendations read beyond the open message, draft or calendar item, and do they use any data the side pane does not? Watch Microsoft Learn for a feature page.
- What will enterprise-licence users without a Copilot licence see when they select the new entry point? The notice does not say.
- Will the November and December 2026 windows hold? The notice has been updated once already, and the roadmap target is November CY2026.

<!-- rationale
risk: Low. Microsoft's notice describes a relocated entry point with contextual suggestions and says no existing Copilot licensing requirements or admin settings are changing; Microsoft Learn describes no new data access.
cost: Low. The notice says no Copilot licensing requirements are changing, so the cost known today is admin time to update training material and brief the help desk.
impact: High. The notice says all users with a Copilot licence, and enterprise-licence users with or without one, will see the new entry point, and the Copilot button moves in a daily-use app.
-->
