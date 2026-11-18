---
title: "Microsoft 365 Copilot Chat: App Blocks turn requests into interactive apps in the conversation"
slug: "m365-copilot-app-blocks"
roadmapId: 577743
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft is rolling out App Blocks in Copilot Chat, which renders calculators, dashboards and forms inside the chat. Microsoft Learn does not yet describe it or any admin setting for it, so admins should watch for one."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft Learn describes Copilot Chat (Basic) as included with eligible Microsoft 365 licenses, and the roadmap item is about Copilot Chat users. Nothing specific to App Blocks is published, including any meter or whether availability differs by licence."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["copilot-chat","m365-copilot","copilot","knowledge-grounding"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Copilot (Microsoft 365): App Blocks"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577743"
    kind: "roadmap"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
videos: []
related: ["microsoft-copilot-studio-deliver-rich-interactive-app-experiences-in-copilot-studio-agents","m365-copilot-build-interactive-reports-and-dashboards-with-pages"]
controls:
  - governs: "Whether users can use Copilot Chat, and so App Blocks, at all"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Choose the Copilot app. Global Admin per the page; blocks Copilot Chat as a whole, not App Blocks alone. Learn documents no API for this action at the time of writing (November 2026)."
  - governs: "Switch for App Blocks alone"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no App Blocks-specific setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-18"
    note: "First briefing for App Blocks: the roadmap describes it, Microsoft Learn does not yet, and the only documented lever is blocking Copilot Chat as a whole."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 44 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 43
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "d17a67066949fc8d0a2b26f35b58c238"
---

## What's changing

App Blocks lets Microsoft 365 Copilot Chat users turn a request and their data into an interactive experience inside the conversation. The roadmap item lists calculators, dashboards, forms, planners, visualisations, simulations and comparison tools as examples. Users can explore data, adjust inputs and see the outcome in place, instead of reading a static answer.

The roadmap item also describes grounded scenarios, where current information is retrieved and then rendered as an interactive experience. It does not say which sources that information comes from.

The roadmap item has the status Rolling out, release phase General Availability and a target date of November CY2026. It lists Worldwide (Standard Multi-Tenant) as the cloud and Android, Desktop, iOS, Mac and Web as platforms. Microsoft Learn does not describe App Blocks at the time of writing (November 2026), so everything above about behaviour is the roadmap's description. No Message center post was supplied for it.

## Why it matters

Chat answers that users can adjust and reuse in the conversation change what Copilot Chat produces and what people may expect to do with it. Because Microsoft has not stated whether App Blocks is on by default or how it is switched off, no source says existing Copilot Chat behaviour changes for your tenant. Plan on it reaching users during the November CY2026 target window, as the roadmap status is Rolling out.

The practical issue is control. Microsoft Learn documents no App Blocks setting at the time of writing, so the lever an administrator can point to today is blocking Copilot Chat as a whole, which is far wider than the feature.

## Risk assessment

**Data exposure**
- The roadmap item says grounded scenarios retrieve current information and render it interactively, but does not name the sources. Confirm whether work data or web content is involved before telling users what is safe to put into an App Block.
- Learn says Copilot Chat can use organisational content, but you must explicitly provide that content with your prompt. Whether that rule is the same for App Blocks is not stated.

**Security & identity**
- Microsoft has not described how an interactive experience runs, where it is stored or under which identity it retrieves data. Treat these as items to confirm, not assumptions.

**Autonomy & actions**
- The roadmap describes users adjusting inputs and simulating workflows in place. It does not say whether an App Block can write to Microsoft 365 data or call other services.

**Change & support**
- Users on web, desktop and mobile may see new interactive output in Copilot Chat, so brief the service desk on what it is and that Learn has no page for it yet.
- If you need to stop it before Microsoft documents a setting, the documented route is blocking Copilot through Integrated Apps, which blocks Copilot Chat for the users in scope, not just App Blocks.

## Cost and licensing

Licence: Learn describes Copilot Chat (Basic) as the standalone baseline experience included with eligible Microsoft 365 licenses (Microsoft Copilot overview). The roadmap item is about Copilot Chat users. Learn also says some Copilot Chat features are subject to fair use limits; whether App Blocks is one of them is not stated.

Meter: no meter or Copilot Credits charge specific to App Blocks is published at the time of writing (November 2026). Indirect cost is admin time to confirm behaviour and support time for user questions.

## Scope

The roadmap item aims App Blocks at Microsoft 365 Copilot Chat users. It lists Worldwide (Standard Multi-Tenant) as the cloud and Android, Desktop, iOS, Mac and Web as platforms. US Government clouds are not listed on the roadmap item; that is a record fact, not a statement that the feature is unavailable there.

The status is Rolling out, with a target of November CY2026 and release phase General Availability. Prerequisites, role requirements and any difference between licence tiers are not published. To manage Copilot settings in the Microsoft 365 admin center, Learn says to use an appropriate admin role, such as AI Administrator.

## Governance guidance

### Before rollout
- Watch Message center and the roadmap item for an App Blocks notice, because no Learn page describes it yet.
- Decide who should be told, and what you would say, if users start generating interactive apps in Copilot Chat.
- Decide whether blocking Copilot through Integrated Apps is acceptable as a stop-gap, knowing it blocks Copilot Chat as a whole.

### At rollout
- Ask a pilot user to request a calculator or form in Copilot Chat and note what data it uses and where it appears.
- Brief the service desk that App Blocks is a roadmap item with no Learn page at the time of writing.

### After rollout
- Re-check Microsoft Learn for an App Blocks page and an admin setting, and update your tenant plan if one appears.
- Raise any behaviour that differs from the roadmap description with your Microsoft account team.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use Copilot Chat, and so App Blocks, at all</strong><br><small>Tenant</small><br><small class="controls__note">Choose the Copilot app. Global Admin per the page; blocks Copilot Chat as a whole, not App Blocks alone. Learn documents no API for this action at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch for App Blocks alone</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no App Blocks-specific setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only control in the table that Learn documents is the Integrated Apps block of the Copilot app. It is tenant-wide and, according to the Manage Copilot Chat page, can be scoped to specific users or groups, including licensed users. It blocks Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web, so it is a blunt substitute for a switch that governs App Blocks alone. The Integrated Apps page says its controls are available to Global Admins.

No App Blocks-specific setting or API is documented at the time of writing (November 2026).

## Open questions

- Is App Blocks on by default for Copilot Chat users when it reaches a tenant, and is any user or group excluded? Watch Message center and the roadmap item.
- Is there an admin setting, in Copilot > Settings or elsewhere, that turns App Blocks on or off separately from Copilot Chat? Watch the Learn page on Copilot settings in the Microsoft 365 admin center.
- What data can an App Block retrieve, and do existing Copilot Chat controls such as the Allow web search in Copilot policy govern it?
- Does App Blocks differ by licence tier or count against fair use limits?

<!-- rationale
risk: Medium. App Blocks is new in-chat behaviour that can render retrieved current information, and Microsoft Learn documents no App Blocks setting at the time of writing (November 2026); the documented lever blocks Copilot Chat as a whole.
cost: Low. The only cost the sources show is admin and support time; no licence or meter specific to App Blocks is published, and Learn describes Copilot Chat (Basic) as included with eligible Microsoft 365 licenses.
impact: Medium. The roadmap item targets Copilot Chat users on Android, Desktop, iOS, Mac and Web, so people who use Copilot Chat may notice new interactive answers; Microsoft has not said whether every user gets it.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: Users must explicitly provide organisational content with their prompt for Copilot Chat to use it. | Found: In this context, Copilot Chat is aware of your open content and can use it instead of requiring you to copy and paste information or upload a file. | Fix: Replace 'Learn says Copilot Chat can use organisational content, but you must explicitly provide that content with your prompt.' with 'For Copilot Chat (Basic), Learn documents user-provided prompt content, content already open in Teams and Outlook, and pay-as-you-go agents as routes to organisational content.' Keep the following App Blocks-specific uncertainty. Source: https://learn.microsoft.com/copilot/plan/copilot-overview. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls; Risk assessment: Change & support / applicability: Manage Copilot Chat says the block can be scoped to specific users or groups, including licensed users. | Found: Blocking Copilot through Integrated Apps is a tenant-wide control that you can scope to specific users or groups, including licensed users. | Fix: After the scoping sentence add: 'However, the cited Integrated Apps instructions say that choosing Block app blocks all users in the organisation; confirm the effective scope before relying on a selective block.' The conflicting source is https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#how-to-block-an-app. | Source: https://learn.microsoft.com/copilot/manage/manage-copilot-chat
- [supported, minor] Governance controls / applicability: Manage Copilot Chat says Integrated Apps blocking covers the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web. | Found: This setting blocks Copilot in the Microsoft Copilot app, Teams, Outlook, and Copilot Chat on the web for all users. | Fix: Attribute the coverage sentence to Manage Copilot Chat and add: 'The Integrated Apps page instead says the app is blocked only in Microsoft Copilot and Outlook, while Teams continues to honour its Teams admin center setting.' Cite https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365#how-to-block-an-app for the disagreement. | Source: https://learn.microsoft.com/copilot/manage/manage-copilot-chat
-->
