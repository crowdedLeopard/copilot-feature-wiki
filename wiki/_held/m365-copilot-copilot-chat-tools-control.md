---
title: "Microsoft Copilot Chat: Tools menu in the prompt box"
slug: "m365-copilot-copilot-chat-tools-control"
roadmapId: 497298
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "A Tools menu in the Copilot Chat prompt box lets users trigger task-specific Copilot features. It is Launched. Microsoft Learn documents no separate admin switch for the menu, and states no admin action."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","DoD"]
platforms: ["Desktop","Web"]
targetDate: "September CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Learn says Copilot Chat is available to users with an eligible Microsoft 365 subscription and that a Microsoft Copilot licence is not required for eligible users. A licence or meter specific to the Tools menu is not yet published."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["copilot-chat","copilot","user-experience","app-management","m365-admin-center","gcc","dod"]
sources:
  - title: "Microsoft 365 Roadmap: item 497298"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=497298"
    kind: "roadmap"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
videos: []
related: ["app-management","m365-copilot-app-blocks","m365-copilot-copilot-app-mode-handoffs"]
controls:
  - governs: "Whether users can use Copilot Chat, the app that hosts the Tools menu"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator on the documented page. Acts on the Copilot app as a whole, not on the Tools menu alone. Teams keeps its own settings in the Teams admin center."
  - governs: "Tenant-wide switch for the Tools menu itself"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting for the Tools menu is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-03-13T22:00:48"
changes:
  - date: "2026-11-25"
    note: "New briefing: the Copilot Chat Tools menu is Launched, Microsoft Learn does not describe it, and the control it documents acts on the whole Copilot app."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 38 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 35
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "460748f4ae978bcf9f62e74e35457e27"
---

## What's changing

The roadmap item describes **Tools** as a lightweight entry point in the Copilot Chat prompt box. Selecting Tools opens a menu from which users can discover and trigger the Copilot feature or capability that suits their current task, with consistent interactions across those tools.

The record lists the item as Launched, with release phase General Availability, a target of September CY2025, platforms Desktop and Web, and clouds Worldwide (Standard Multi-Tenant), GCC and DoD. GCC High is not listed on the record, which is a statement about the record and not about availability.

Microsoft Learn does not describe the Tools menu at the time of writing (November 2026), so what the menu contains and how each entry behaves is the roadmap's description only. Microsoft has also not stated what happens on arrival, whether the menu is on by default or which users see it first.

## Why it matters

The menu changes how users reach Copilot features from the prompt box. Because it is a route to other capabilities, the questions for a service owner are which capabilities users can reach through it and whether the existing controls for those capabilities still apply. Microsoft has not published the list.

Microsoft has not stated what happens if nobody acts, and no source says existing behaviour changes. Expect questions from users who see the menu, and plan to check the menu in a pilot account before answering them.

## Risk assessment

**Data exposure**
- The roadmap describes the menu as a way to trigger existing Copilot features. Microsoft Learn describes no data that the menu itself reads, so exposure depends on the features a user launches from it. Check each entry the menu shows in a pilot account against the controls for that feature.

**Security & identity**
- Microsoft has not published an identity or permission model specific to the Tools menu. Users need a work or school account in Microsoft Entra ID for Copilot Chat, and the Integrated Apps block (see the controls table) is the documented way to withdraw the Copilot app.

**Autonomy & actions**
- The roadmap says users discover and trigger features from the menu. No source says the menu starts actions on its own.

**Change & support**
- Menu contents are not documented, so help desk staff cannot be briefed from Microsoft Learn. Capture the entries users see and record them for support.
- Microsoft Learn documents no switch for the menu itself, so the documented levers act on the whole Copilot app.

## Cost and licensing

Microsoft Learn's requirements page says Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription, and its requirements table lists a Microsoft Copilot licence as not required for eligible users. The roadmap item names no licence, meter or price for the Tools menu.

A licence, credit rate or meter specific to the Tools menu is not yet published. Microsoft has not stated whether the features launched from the menu carry their own licence or meter terms, so check each feature's own page before budgeting.

The indirect cost that is known is admin time to review the menu and brief users.

## Scope

The roadmap record lists clouds Worldwide (Standard Multi-Tenant), GCC and DoD, and platforms Desktop and Web. The release phase is General Availability and the status is Launched.

Microsoft Learn says users need a work or school account in Microsoft Entra ID, and that Copilot Chat is available to users with an eligible Microsoft 365 subscription. Which users see the menu, whether rollout is staged and which roles configure it are not stated.

The Integrated Apps controls described below are available to Global Administrators on the page that documents them.

## Governance guidance

### Before rollout
- Open Copilot Chat in a pilot account on web and desktop and list the entries the Tools menu shows, because Microsoft Learn does not list them.
- Check whether the Copilot app is blocked or restricted in Integrated Apps (Microsoft 365 admin center), as that decides whether pilot users see Copilot Chat at all.
- Ask the owners of features reached through the menu to confirm each feature's own licence and data controls.

### At rollout
- Tell users the menu is a shortcut in the prompt box, and tell the help desk which entries your pilot found.
- Use a Global Administrator account for the Integrated Apps block, as the page documenting it limits those controls to Global Admins.

### After rollout
- Watch Message center and the Microsoft 365 Copilot release notes for a Learn page or admin setting that covers the Tools menu.
- Re-check the menu contents in a pilot account after Copilot updates, because the menu is not documented.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use Copilot Chat, the app that hosts the Tools menu</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator on the documented page. Acts on the Copilot app as a whole, not on the Tools menu alone. Teams keeps its own settings in the Teams admin center.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the Tools menu itself</strong><br><small>Tenant</small><br><small class="controls__note">No setting for the Tools menu is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented control is the Copilot app block in Integrated Apps. Learn's Integrated Apps page says its settings for the CoPilot app apply to both Microsoft Copilot and the Copilot Chat apps, so a block acts on the whole app and not on the Tools menu alone. Learn's Integrated Apps page says a blocked app is blocked for all users in the organisation, while the Manage Copilot Chat page describes the control as tenant-wide and scopeable to specific users or groups; read both before using it.

The Integrated Apps page states that its controls are only available to Global Admins. No separate switch for the Tools menu is documented, and the second row records that gap.

## Open questions

- Which capabilities does the Tools menu list, and does the list differ by licence, tenant or cloud? Watch the Microsoft Copilot release notes and the roadmap item.
- Is the menu on by default for all Copilot Chat users, or does Microsoft stage it by tenant? Watch Message center for a post on this item.
- Will Microsoft add an admin setting for the Tools menu or for individual entries in it? Watch the Copilot Chat management page on Microsoft Learn.
- Do the capabilities launched from the menu carry licence or credit terms beyond Copilot Chat's own? Watch each capability's Learn page.

<!-- rationale
risk: Low. The roadmap describes the menu as an entry point to existing Copilot features, and no source says it reads new data or acts on its own. The default state is not stated, so this rates today's behaviour continuing.
cost: Low. Copilot Chat is available with an eligible Microsoft 365 subscription and no licence or meter specific to the Tools menu is published. Any terms of the features launched from the menu are not stated, so the known cost is admin time.
impact: Medium. The menu sits in the prompt box on desktop and web, so Copilot Chat users see it. The roadmap does not say which users or tenants see it first.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope: second paragraph; Open questions: second bullet / absence: Whether Microsoft stages the rollout is not stated. | Found: Copilot features are introduced using a safe deployment model, gradually rolling out to a subset of users within a tenant before expanding across the organization. | Fix: Replace the staging absence in Scope with: 'Microsoft describes Copilot features as gradually rolling out to a subset of users within a tenant before expanding across the organization; a Tools-specific rollout sequence is not stated.' In Open questions, replace the second bullet's question with: 'What is the Tools menu's default state and feature-specific rollout sequence?' Cite https://learn.microsoft.com/microsoft-365/copilot/release-notes. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
- [contradicted, blocker] Governance guidance: Before rollout, second bullet / applicability: Whether the Copilot app is blocked or restricted in Integrated Apps decides whether pilot users see Copilot Chat at all. | Found: The availability setting of an app doesn't impact any admin deployed apps. The availability setting only allows you to control which end users can install and use these apps on their own. Any previous admin deployments made are still be honored. | Fix: Replace that bullet with: 'Check whether the Copilot app is blocked in Integrated Apps (Microsoft 365 admin center). Do not treat restricted app availability as equivalent to blocking: availability restrictions do not affect admin-deployed apps.' The qualification is documented at https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365 under 'How to manage the availability of an app in your organization'. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls table / applicability: Teams keeps its own app settings in the Teams admin center. | Found: The app is only be blocked in the Microsoft Copilot application and Outlook. Teams continues to honor the current setting for Teams Apps made in the Teams admin center | Fix: Keep the cited page's Teams qualification, but append to Governance controls: 'The pages also disagree about Teams: the Integrated Apps page says Teams retains its own settings, while Manage Copilot Chat says the Integrated Apps block also blocks Copilot in Teams.' The latter statement is at https://learn.microsoft.com/copilot/manage/manage-copilot-chat under 'Block users from using Copilot Chat'. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365
- [unsupported, minor] summary: final clause / behaviour: Microsoft Learn states that no administrator action is needed for the Tools menu. | Found: Searched: 'Copilot Chat Tools no admin action' and '497298'; read Manage Copilot Chat and Copilot settings and searched both release-note pages. No statement of required or unnecessary admin action for this menu found. | Fix: Replace 'and states no admin action' with 'and does not specify administrator action for the menu'. This removes an unsupported attribution of advice and agrees with the body's statement that arrival behaviour is not stated.
-->
