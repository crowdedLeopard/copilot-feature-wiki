---
title: "Microsoft Teams Rooms on Windows: shared meeting timer from the room console"
slug: "microsoft-teams-set-and-manage-meeting-timers-in-teams-rooms-on-windows"
roadmapId: 581893
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms on Windows will get a shared countdown timer started from the touch console, shown in the room and to participants. The roadmap ties it to a Teams Rooms Pro licence. No admin control is documented yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Teams and Surface Devices"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The roadmap item states the timer is available with a Teams Rooms Pro licence. The Teams Rooms licences page lists no price or timer-specific entitlement."
audiences: ["m365-admin","service-owner","end-user"]
tags: ["teams","teams-rooms","pro-management-portal","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 581893"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581893"
    kind: "roadmap"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Teams Rooms (Windows and Android) home screen and admin controls"
    url: "https://learn.microsoft.com/microsoftteams/rooms/mtr-home-refresh"
    kind: "learn"
videos: []
related: ["microsoft-teams-standard-and-basic-licensed-teams-rooms-on-windows-in-the-pro-management-p","microsoft-teams-ai-powered-notes-for-in-person-meetings-with-facilitator-in-teams-r-560318"]
controls:
  - governs: "A switch for the Teams Rooms meeting timer"
    scope: "other"
    ui: null
    api: null
    note: "No admin setting for the timer is documented at the time of writing (November 2026). The roadmap states only a Teams Rooms Pro licence condition."
confidence: "low"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-11-21T00:14:55"
changes:
  - date: "2026-11-21"
    note: "New briefing: planned Teams Rooms on Windows meeting timer, targeted January CY2027, with a Teams Rooms Pro licence condition and no documented admin control."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 40 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 35
  unconfirmed: 3
  contradicted: 2
  attempts: 1
  hash: "7affac3079b88ea428ff3adb08295b77"
---

## What's changing

Microsoft plans a shared countdown timer for Microsoft Teams Rooms on Windows. Per the roadmap item, a room user can start, pause, resume or cancel the timer from the room's touch console. The countdown is shown on the front-of-room display and in participants' meeting views.

Microsoft Learn does not describe this feature at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description. The roadmap states it is available with a Teams Rooms Pro licence. It does not say whether the timer is on by default or who in a meeting can start it.

The roadmap item lists the status as In development, with a target of January CY2027 and General Availability as the release phase. The cloud listed is Worldwide (Standard Multi-Tenant), and the platforms listed are Desktop and Teams and Surface Devices. These are Microsoft's targets, not commitments.

## Why it matters

For most tenants this is a small change with no data or spend consequence documented. Its practical effect is on rooms: the roadmap ties the timer to the Teams Rooms Pro licence, so rooms on other licences are a question to settle before users ask where the timer is.

Microsoft has not stated what happens on arrival, so plan on a feature that appears in Pro-licensed rooms without an admin switch being documented, and confirm that against Message center and the Learn page once they exist.

## Risk assessment

**Data exposure**
- No source describes the timer reading or storing anything beyond the meeting it runs in. Microsoft has not said whether timer actions appear in meeting records or logs.

**Security & identity**
- No change documented. The roadmap says the countdown is visible in participants' meeting views, so treat the timer text as visible to meeting participants.

**Autonomy & actions**
- The roadmap describes the timer as started, paused, resumed and cancelled from the room's touch console. It does not describe any automatic or AI-driven action.

**Change & support**
- Expect help-desk questions from room users in January CY2027 if the timer appears in some rooms and not others, because the roadmap ties it to a Teams Rooms Pro licence.
- Microsoft has not documented an admin setting to turn the timer off for a room or tenant, so the only lever before arrival is the room's licence.

## Cost and licensing

The roadmap item states: "Available with a Teams Rooms Pro license." The Teams Rooms licences page describes Teams Rooms Pro as the licence that delivers enhanced in-room meeting experiences and advanced management features, and Teams Rooms Basic as providing core meeting experiences at no additional cost ([Microsoft Teams Rooms licenses](https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing)).

That page's Basic and Pro feature comparison tables do not list a meeting timer, so whether a Basic-licensed room gets the timer is not stated beyond the roadmap's wording. No separate meter or price for the timer is published on the pages read, and the Pro licence price is not published there either.

Indirect cost is admin time to check which rooms hold a Pro licence, and the licence cost of moving any Basic-licensed room to Pro if you want the timer there.

## Scope

The roadmap lists Microsoft Teams as the product, Teams Rooms on Windows in the title, the Worldwide (Standard Multi-Tenant) cloud, and the platforms Desktop and Teams and Surface Devices. The roadmap item does not list GCC, GCC High or DoD; that is a record fact, not a statement that the feature is unavailable there.

The room needs a Teams Rooms Pro licence according to the roadmap. Microsoft has not published rollout mechanics, a required app version or release channel, or the roles needed to configure the feature.

## Governance guidance

### Before rollout
- Inventory the licence type of each Teams Rooms on Windows device, using the License Type column in the Pro Management portal Rooms or Inventory view, so you know which rooms the roadmap's Teams Rooms Pro condition covers.
- Decide whether any Basic-licensed room justifies moving to Pro for the timer, and put the licence cost, once published, into that decision.
- Tell room owners and meeting organisers that a countdown may appear on the front-of-room display and in participants' views from January CY2027, at the earliest.

### At rollout
- Watch Message center and the roadmap item for a post that states the default, the rollout window and any admin setting.
- Test the timer in one Pro-licensed room first and record who can start it and which participants see it.

### After rollout
- Ask room users whether the timer appears consistently across rooms and report gaps against the room's licence type first.
- Re-read this page when Microsoft publishes a Learn article for the timer, because the controls table currently has no documented setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>A switch for the Teams Rooms meeting timer</strong><br><small class="controls__note">No admin setting for the timer is documented at the time of writing (November 2026). The roadmap states only a Teams Rooms Pro licence condition.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No admin setting, policy parameter or API for the timer is documented at the time of writing (November 2026), so the table shows the gap rather than a control. Room-level settings that Microsoft documents for Teams Rooms on Windows, such as those in the Pro Management portal, are not documented as governing the timer, and none of them should be assumed to.

The room's licence is the only condition the roadmap states. Treat that as a licensing fact about the room account, not as a control over who can start the timer.

## Open questions

- Is the timer on by default in Pro-licensed rooms, and will Microsoft announce it in Message center with a rollout window?
- Will an admin setting in the Pro Management portal, the Teams admin center or PowerShell turn the timer off per room or per tenant?
- Who in a meeting can start, pause, resume or cancel the timer: only the room console, or also organisers and presenters on other devices?
- Does a Teams Rooms Basic licence get the timer, or is it limited to Pro as the roadmap wording suggests?
- Is timer activity recorded in any audit log or meeting record?

<!-- rationale
risk: Low. The timer is a display feature in meetings that room users start themselves, and no source describes it reading new organisational data or acting on its own.
cost: Low. The roadmap says it is available with a Teams Rooms Pro licence and no separate meter is documented; the cost is Pro licensing for any room not already on it, with its price not published on the pages read.
impact: Low. Only Teams Rooms on Windows users and participants in those meetings see the timer, and only when someone starts one; nothing in the sources shows admin action is needed.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Risk assessment: Change & support, second bullet / applicability: The room's licence is the only lever administrators have before the timer arrives. | Found: Searched: Teams Rooms meeting timer PowerShell Set-CsTeamsMeetingPolicy XML configuration timer. Read pro-portal-settings, mtr-home-refresh; searched device-settings-available, xml-config-file and Set-CsTeamsMeetingPolicy. No source states licensing is the only possible lever. | Fix: Replace the bullet with: 'Microsoft has not documented a timer-specific admin setting as of November 2026; the roadmap states that the timer is available with a Teams Rooms Pro licence.'
- [unsupported, blocker] Why it matters, second paragraph / default: Administrators should plan on the feature appearing in Pro-licensed rooms without an admin switch. | Found: Searched: Teams Rooms Windows meeting timer countdown admin settings default version license audit logs; Teams Rooms countdown. Read roadmap and mtr-home-refresh. Neither states whether the feature appears automatically or requires enabling. | Fix: Replace the paragraph with: 'Microsoft has not stated what happens on arrival. Confirm the timer's default and any admin setting against Message center and Microsoft Learn when feature-specific guidance is published.'
- [contradicted, blocker] Governance guidance: Before rollout, second bullet / cost: The Pro licence cost must wait until it is published before it can inform an upgrade decision. | Found: Microsoft Teams Rooms Pro ... $40.00 ... room/month, paid yearly ... (Annual subscription-auto renews) | Fix: Replace 'and put the licence cost, once published, into that decision' with 'and use the published Pro licence price or your organisation's contracted price in that decision'. Cite https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-rooms/compare-rooms-plans. | Source: https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-rooms/compare-rooms-plans
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: impact / behaviour: The timer is visible only when someone starts one. | Found: Searched: Teams Rooms timer; Teams Rooms countdown. Read roadmap and mtr-home-refresh. The record documents starting a timer from the console but does not state that no timer UI appears before starting or that every timer must be manually started. | Fix: Replace the impact rationale with: 'Low. The roadmap describes a countdown shown on the front-of-room display and in participants' meeting views, with timer actions available from the room console.'
- [contradicted, minor] Governance guidance: Before rollout, first bullet; Governance controls / consistency: The licence inventory check in the governance checklist has no corresponding controls-table row. | Found: Inventory the licence type ... using the License Type column in the Pro Management portal Rooms or Inventory view ... Controls table: A switch for the Teams Rooms meeting timer. | Fix: The Before rollout licence inventory step has no table row. Remove that checklist bullet to satisfy the checklist/table rule without adding a new control row; retain any licence inventory advice in Cost and licensing.
-->
