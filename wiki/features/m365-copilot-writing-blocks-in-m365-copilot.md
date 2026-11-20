---
title: "Microsoft 365 Copilot Chat: Writing blocks edit drafts, memos and emails inline"
slug: "m365-copilot-writing-blocks-in-m365-copilot"
roadmapId: 569428
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap says Writing blocks let users edit drafts, memos and emails inline while using Chat. Microsoft Learn does not describe it or any admin setting yet, so administrators should watch for one."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mobile"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn describes Copilot Chat (Basic) as included with eligible Microsoft 365 licenses and says some features are subject to fair use limits. Whether Writing blocks differs by licence, or carries a meter, is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["copilot-chat","m365-copilot","copilot","mobile"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Copilot (Microsoft 365) Writing Blocks in M365 Copilot"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569428"
    kind: "roadmap"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
videos: []
related: ["m365-copilot-app-blocks","m365-copilot-build-interactive-reports-and-dashboards-with-pages","m365-copilot-copilot-chat-in-onenote-can-create-edit-and-refine-content"]
controls:
  - governs: "Whether the Copilot app, and so Copilot Chat, is blocked for the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Choose the Copilot app. Global Admin per the page; blocks Copilot Chat in the listed places, not Writing blocks alone. Learn documents no API for this action at the time of writing (November 2026)."
  - governs: "Switch for Writing blocks alone"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no Writing blocks-specific setting at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-08-20T22:38:45"
changes:
  - date: "2026-11-20"
    note: "First briefing for Writing blocks: the roadmap describes it, Microsoft Learn does not yet, and the only documented lever is blocking the Copilot app through Integrated Apps."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 34 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 34
  confirmed: 34
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "4e1485791174f7f8b58b41cac05ecd8e"
---

## What's changing

Writing blocks are a planned Microsoft 365 Copilot capability that lets users edit drafts, memos, emails and similar writing inline while using Chat. The roadmap item describes it as support for iterating on text with Chat, and gives no further detail.

The roadmap item has the status In development, release phase General Availability and a target date of September CY2026. It lists Worldwide (Standard Multi-Tenant) as the cloud and Desktop and Mobile as platforms. As of 20 November 2026 that target month has passed and the status has not moved, so treat the date as a target that Microsoft has not yet confirmed as met.

Microsoft Learn does not describe Writing blocks at the time of writing (November 2026), so everything above about behaviour is the roadmap's description. No Message center post was supplied for it.

## Why it matters

Inline editing inside Chat changes where people write and revise work text, including emails and memos that may carry organisational content. Microsoft has not stated whether Writing blocks is on by default or how it is switched off, so no source says existing Copilot Chat behaviour changes for your tenant.

The practical issue is control. Microsoft Learn documents no Writing blocks setting at the time of writing, so the lever an administrator can point to today is blocking the Copilot app through Integrated Apps, which is much wider than this feature. Decide in advance whether that is acceptable, and how you will brief users on writing in Chat.

## Risk assessment

**Data exposure**
- The roadmap item names no data source for Writing blocks. Confirm whether drafts or emails are shared with Chat only when a user pastes or opens them, or by another route, before telling users what is safe to put in a block.
- Microsoft documents data protections for Copilot Chat in general (enterprise data protection for work or school accounts), but whether they are described for Writing blocks specifically is not stated.

**Security & identity**
- Microsoft has not described where a Writing block is stored or which identity it uses. Treat these as items to confirm, not assumptions.

**Autonomy & actions**
- The roadmap says users edit drafts and emails inline. It does not say whether Copilot can send, save or write text into other Microsoft 365 files from a block.

**Change & support**
- Users on Desktop and Mobile may see a new editing surface in Chat, so brief the service desk that it is a roadmap item with no Learn page at the time of writing.
- If you must stop it before Microsoft documents a setting, the documented route is blocking the Copilot app through Integrated Apps, which blocks Copilot Chat in the places the Learn pages list, not just Writing blocks.

## Cost and licensing

Licence: Learn describes Copilot Chat (Basic) as the standalone baseline experience included with eligible Microsoft 365 licenses, and says chat experiences in Microsoft 365 apps vary depending on tenant configuration and license (Microsoft Copilot overview). The roadmap item lists the product as Microsoft Copilot (Microsoft 365) and does not name a licence for Writing blocks.

Meter: Learn says some features are subject to fair use limits. A meter, Copilot Credits charge or fair use limit specific to Writing blocks is not yet published. Indirect cost is admin time to confirm behaviour and support time for user questions.

## Scope

The roadmap item targets Microsoft Copilot (Microsoft 365) on Desktop and Mobile, in Worldwide (Standard Multi-Tenant). US Government clouds are not listed on the roadmap item; that is a record fact, not a statement that the feature is unavailable there.

The status is In development, with a target of September CY2026 and release phase General Availability. Prerequisites, role requirements and any difference between licence tiers are not yet published. The Learn pages for the Copilot app block say its controls on the integrated apps portal are available to Global Admins.

## Governance guidance

### Before rollout
- Watch Message center and the roadmap item for a Writing blocks notice, because no Learn page describes it yet.
- Decide who should be told, and what you would say, if users start editing drafts and emails inline in Chat.
- Decide whether blocking the Copilot app through Integrated Apps is acceptable as a stop-gap, knowing it is a blunt control.

### At rollout
- Ask a pilot user to open a draft in Chat and note what content Chat sees and where the edited text ends up.
- Brief the service desk that Writing blocks is a roadmap item with no Learn page at the time of writing.

### After rollout
- Re-check Microsoft Learn for a Writing blocks page and an admin setting, and update your tenant plan if one appears.
- Raise any behaviour that differs from the roadmap description with your Microsoft account team.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Copilot app, and so Copilot Chat, is blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Choose the Copilot app. Global Admin per the page; blocks Copilot Chat in the listed places, not Writing blocks alone. Learn documents no API for this action at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch for Writing blocks alone</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no Writing blocks-specific setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only control in the table that Learn documents is the Integrated Apps block of the Copilot app. Manage Copilot Chat describes it as a tenant-wide control that can be scoped to specific users or groups, and says it blocks Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web. The general Integrated Apps page differs: it says the app is blocked only in the Microsoft Copilot application and Outlook, while Teams continues to honour Teams admin center settings. It is a blunt substitute for a switch that governs Writing blocks alone.

Microsoft Learn documents no Writing blocks-specific setting at the time of writing (November 2026).

## Open questions

- Is Writing blocks on by default for Copilot Chat users when it reaches a tenant, and is any user or group excluded? Watch Message center and the roadmap item.
- Is there an admin setting, in Copilot > Settings or elsewhere, that turns Writing blocks on or off separately from Copilot Chat? Watch the Learn page on Copilot settings in the Microsoft 365 admin center.
- Does Writing blocks differ by licence tier or count against fair use limits?
- Does the September CY2026 target still stand, given the status is still In development on 20 November 2026?

<!-- rationale
risk: Low. The roadmap describes inline editing of text within Chat and names no new data source or autonomous action, but Microsoft Learn documents no Writing blocks setting at the time of writing (November 2026).
cost: Low. The only cost the sources show is admin and support time; no meter or licence specific to Writing blocks is published, and Copilot Chat (Basic) is described as included with eligible Microsoft 365 licenses.
impact: Medium. The roadmap item targets Microsoft Copilot (Microsoft 365) on Desktop and Mobile, so people who write drafts, memos and emails in Chat may notice it; Microsoft has not said who gets it first.
-->
