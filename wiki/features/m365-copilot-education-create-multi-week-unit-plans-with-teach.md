---
title: "Microsoft Copilot: Teach builds multi-week unit plans for educators"
slug: "m365-copilot-education-create-multi-week-unit-plans-with-teach"
roadmapId: 577392
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Educators with Microsoft 365 or Office 365 A1, A3 or A5 faculty and staff licences can use Teach to build unit plans spanning several lessons or weeks. No admin action is needed unless the school wants to restrict Teach."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Teach is available to users assigned Microsoft 365 A1/A3/A5 for Faculty/Staff or Office 365 A1/A1 Plus/A3/A5 for Faculty/Staff with Copilot Chat enabled. Nothing specific to unit plans is published."
audiences: ["m365-admin","change-adoption"]
tags: ["education","teach","copilot","copilot-chat","app-management"]
sources:
  - title: "Microsoft 365 Roadmap 577392"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577392"
    kind: "roadmap"
  - title: "Manage Microsoft 365 for Education AI Features"
    url: "https://learn.microsoft.com/microsoft-365/education/guide/1-reference/manage-microsoft-365-education-ai-features"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
videos: []
related: ["app-management"]
controls:
  - governs: "Whether the Copilot app, and so Teach, is available to anyone in the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator. Blocks Copilot Chat in the Copilot app, Outlook and the web for everyone, including Microsoft 365 Copilot licence holders."
  - governs: "Which users can install and use the Copilot app, and so Teach"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Users > Specific users/group in the organization can install"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator. Does not affect admin-deployed apps; removes Copilot Chat, not only Teach, for users left out."
  - governs: "A switch for Teach, or for unit plans in Teach, separate from Copilot Chat"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's guidance is to remove Copilot Chat access to disable Teach."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-26"
    note: "New briefing: Teach unit plans, Teach licensing and default, and the Copilot app controls used to restrict Teach."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 43 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 43
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "8d58c83665f56d4ea46d854a554d1172"
---

## What's changing

Teach, the educator area of the Microsoft Copilot app, can now build structured unit plans that span several lessons or weeks. According to the roadmap item, educators can customise the plan's components to organise connected lesson plans and quizzes across a unit.

Microsoft Learn describes Teach itself but not unit plans yet, so what follows about the unit-plan behaviour is the roadmap's description. Microsoft's education guide describes Teach as a home where educators create lesson plans, draft materials such as quizzes and rubrics, and adjust language, reading level, length, difficulty and alignment to standards. It states that Teach is enabled by default and is reached in the Microsoft Copilot app on web, Windows and Mac. The roadmap item calls the product Microsoft 365 Copilot; Microsoft's Copilot Chat admin page notes that Microsoft 365 Copilot is now named Microsoft Copilot.

The roadmap item lists the feature as Launched, in General Availability, with a target of October CY2026, for the Worldwide (Standard Multi-Tenant) cloud on Desktop and Web.

## Why it matters

For most schools this is a change educators will notice and administrators will not need to configure. Teach is enabled by default for eligible faculty and staff, and Microsoft documents no separate setting for unit plans, so educators who already use Teach get the option without admin action. The practical work is communication: staff who plan a term in Teach will now produce longer, linked sets of lessons and quizzes, and support desks may get questions about where these are kept and how to share them.

Schools that want to keep Teach away from some staff have a blunt tool. Microsoft's documented route to disable Teach is to remove access to Copilot Chat, which also removes Copilot Chat itself for those users.

## Risk assessment

**Data exposure**
- No new data access is described: the roadmap item and Microsoft's Teach description cover creating and organising plans, lessons and quizzes, and neither mentions reading organisational files. Which sources a unit plan draws on is an open question.

**Security & identity**
- Teach is reached through the Copilot app. Microsoft's Copilot Chat page notes that users can sign in with a work or school account or a personal Microsoft account and that chats, files and protections stay separate by account; Teach is not available to consumer or personal accounts.

**Autonomy & actions**
- No change: the feature drafts plans for an educator to edit. Nothing described acts on students, classes or assignments on its own.

**Change & support**
- Educators get a new planning option without notice from IT. Expect questions about where unit plans are saved and how their quizzes reach students; Microsoft has not documented either for unit plans.

## Cost and licensing

Microsoft's guide to managing Microsoft 365 for Education AI features states that Teach is available to users with Microsoft 365 A1/A3/A5 for Faculty/Staff or Office 365 A1/A1 Plus/A3/A5 for Faculty/Staff assigned and Copilot Chat enabled, and that Education customers have access to many generative AI features included in their licensing. Teach isn't available to students, enterprise or business customers, or consumer accounts.

The guide publishes no separate charge or meter for Teach, and nothing specific to unit plans is published. Beyond licences, plan for staff time to brief educators.

## Scope

- **Users:** faculty and staff assigned Microsoft 365 A1/A3/A5 or Office 365 A1/A1 Plus/A3/A5 faculty and staff licences, with Copilot Chat enabled. Not students, enterprise or business customers, or personal accounts.
- **Platforms:** the roadmap item lists Desktop and Web; Microsoft's guide says Teach is in the Microsoft Copilot app on web, Windows and Mac.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap item lists.
- **Roles:** Microsoft states the Integrated Apps controls in the Microsoft 365 admin center are only available to Global Administrators.
- **Rollout:** Launched, General Availability, target October CY2026.

## Governance guidance

### Before rollout
- Tell faculty and staff that Teach can now build multi-week unit plans, and say where to send questions about saving and sharing them.
- Check in Integrated Apps whether the Copilot app is blocked or limited to specific users, since that decides which educators reach Teach.

### At rollout
- Ask a small group of educators to build one unit plan and report where it was saved and how its quizzes were shared.
- Update help-desk notes to say that turning off Teach for a user means removing their Copilot Chat access through the Copilot app's availability in Integrated Apps.

### After rollout
- Watch Message center and the Microsoft 365 for Education AI features page for a Teach-specific setting or unit-plan documentation.
- Revisit any Copilot app restriction if Microsoft documents a separate Teach control.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Copilot app, and so Teach, is available to anyone in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator. Blocks Copilot Chat in the Copilot app, Outlook and the web for everyone, including Microsoft 365 Copilot licence holders.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can install and use the Copilot app, and so Teach</strong><br><small>User</small><br><small class="controls__note">Global Administrator. Does not affect admin-deployed apps; removes Copilot Chat, not only Teach, for users left out.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Users › Specific users/group in the organization can install <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A switch for Teach, or for unit plans in Teach, separate from Copilot Chat</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's guidance is to remove Copilot Chat access to disable Teach.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft's documented route to disable Teach for some or all users is to remove access to Copilot Chat by managing the Copilot app in Integrated Apps. That is broad: Microsoft states that blocking the Copilot app through Integrated Apps blocks it tenant-wide across the Microsoft Copilot app, Outlook and the web, including for users assigned a Microsoft 365 Copilot licence. On the Integrated Apps page, the Copilot app settings apply to both the Microsoft Copilot and Copilot Chat apps.

The availability setting controls which users can install and use the app themselves; Microsoft notes it does not affect apps an admin has deployed, so check the Copilot app's deployment as well. Integrated Apps changes apply to the Copilot app and Outlook; Copilot Chat in Teams is managed in the Teams admin center.

The Agent 365 Package Management API in Microsoft Graph blocks packages, which its overview defines as an agent or a tool such as a plugin, MCP server or skill; it does not list the Copilot app itself.

## Open questions

- Where are unit plans and their linked lesson plans and quizzes saved, and are they covered by the school's retention and eDiscovery settings? Watch the Teach support article and the Microsoft 365 for Education AI features page.
- Does a unit plan draw on the educator's files or the web, or only on what the educator types?
- How do quizzes created in a unit plan reach students, for example through Microsoft Forms or Teams for Education Assignments?
- Will Microsoft add a setting to turn off Teach, or unit plans, without removing Copilot Chat? Watch Message center.
- Will unit plans reach Teach in the US Government clouds, which the roadmap item does not list?

<!-- rationale
risk: Low. Unit plans are a new output inside Teach, which eligible educators already have; nothing described reads new data or acts on its own.
cost: None. Microsoft's education guide lists Teach as available to users with Microsoft 365 A1/A3/A5 or Office 365 A1/A1 Plus/A3/A5 faculty and staff licences and Copilot Chat enabled; no meter is documented for it.
impact: Medium. Educators with eligible faculty and staff licences notice it; Teach is not available to students.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls: Integrated Apps changes and Teams / applicability: Integrated Apps changes apply to the Copilot app and Outlook, while Copilot Chat in Teams is managed in the Teams admin center. | Found: Any changes made on the integrated apps portal on the Microsoft 365 admin center only impact whether and how a cross application app is surfaced on Outlook and the Microsoft Copilot application. To manage how these apps show up on Teams, use the Teams admin center. | Fix: Add: 'Microsoft documentation differs on Teams: the Integrated Apps article says its changes affect only Outlook and the Copilot app, but Manage Copilot Chat says blocking through Integrated Apps also blocks Teams.' Both cited URLs already appear in sources. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365
-->
