---
title: "Outlook on the web: inline Copilot chat for drafting emails without opening the sidebar"
slug: "outlook-inline-chat-for-email-drafting"
roadmapId: 570440
topic: "modern-work"
products: ["Outlook"]
summary: "Microsoft plans an inline Copilot chat in the Outlook on the web compose window, so users can draft with Copilot without opening the Copilot Chat sidebar (target December CY2026). Admins mainly need to brief users and check who has the Copilot app."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's Copilot overview lists \"Outlook: Draft emails\" among Microsoft 365 Copilot (Basic) in-app features, and says Microsoft 365 Copilot (Premium) includes everything in Basic. Nothing specific to inline chat is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["outlook","m365-copilot","copilot-chat","app-management","auditing"]
sources:
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Audit logs for Copilot and AI applications"
    url: "https://learn.microsoft.com/purview/audit-copilot"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Set-OwaMailboxPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-owamailboxpolicy"
    kind: "learn"
  - title: "Microsoft 365 Roadmap 570440"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570440"
    kind: "roadmap"
  - title: "Audit records of Copilot interactions in Outlook (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
videos: []
related: ["outlook-draft-edit-and-format-emails-conversationally-with-copilot-in-outlook","m365-copilot-copilot-chat-in-outlook-expands-to-reason-over-inbox-calendar-and-enterprise","app-management"]
controls:
  - governs: "Whether the Copilot app, which provides Copilot Chat in Outlook, is blocked for the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator only. Blocks Copilot in Outlook for all users, licensed ones included; Learn does not mention the inline compose chat."
  - governs: "Which users can install and use the Copilot app in Outlook"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Users > Specific users/group in the organization can install"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Administrator only. Microsoft suggests assigning a group of licensed users to keep the app from unlicensed users."
  - governs: "Separate switch for the inline chat in Outlook on the web"
    scope: "tenant"
    ui: null
    api: null
    note: "The Copilot settings page and the Set-OwaMailboxPolicy reference list no Outlook drafting or inline chat setting at the time of writing (November 2026)."
  - governs: "Audit records of Copilot interactions in Outlook"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Activities – operation names"
      docs: "https://learn.microsoft.com/purview/audit-copilot"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <start date> -EndDate <end date> -RecordType CopilotInteraction"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "Logged as part of Audit (Standard). Filter exported results on AppHost (Outlook, OutlookOnCanvas)."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-27"
    note: "First briefing for the inline Copilot chat in Outlook on the web compose, with the Copilot app controls and audit records that apply today."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 46 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 42
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "cfb4ed1ac17d9b7679b7683a86ced05b"
---

## What's changing

Microsoft plans to add an inline chat component to email drafting in Outlook, so that users can work with Copilot on a draft without opening Copilot Chat in the sidebar. The roadmap item says this replaces opening Copilot Chat every time a user wants Copilot's help to draft a message.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The item does not say where in the compose window the chat appears, what Copilot can change in the draft, whether the user approves each change, or whether the sidebar remains available alongside it.

The roadmap item lists the Web platform and Worldwide (Standard Multi-Tenant) only. Its status is In development, the release phase is General Availability and the target is December CY2026. That is a target, not a shipped date. No Message Center post for this item was supplied.

## Why it matters

This changes how users meet Copilot while writing mail in Outlook on the web, not what Copilot can reach. Microsoft has not stated what happens on arrival, and no source says the sidebar is removed. Expect users who already draft with Copilot to see a new chat inside compose from about the December CY2026 target, and expect questions from people who did not ask for it.

The decisions are small: who should have the Copilot app in Outlook, what users are told about checking Copilot's text before they send, and whether audit records from Outlook drafting matter to your compliance team. Microsoft documents no switch for the inline chat on its own, so the documented control is the Copilot app as a whole.

## Risk assessment

**Data exposure**
- The roadmap describes a new entry point, not new data sources. Microsoft's Copilot overview says Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) can use open content in Outlook but not organisational data through Microsoft Graph, while Premium uses Microsoft Graph automatically. Which of these applies to the inline chat is not stated; confirm in a pilot what it draws on.

**Security & identity**
- No new connector, agent or permission is described. Blocking the Copilot app in Integrated Apps needs the Global Administrator role on Microsoft's page.

**Autonomy & actions**
- The roadmap says users interact with Copilot inline to draft a message. It does not say whether Copilot writes into the draft directly or whether it can send; test this before describing the feature to users.

**Change & support**
- Expect service desk questions where the chat appears in compose for users who never opened the sidebar, and confusion about whether the sidebar has gone.

## Cost and licensing

**Licence.** Microsoft's Copilot overview lists "Outlook: Draft emails, summarize threads, and use the coaching tips to improve clarity, sentiment and tone" among the in-app features of Microsoft 365 Copilot (Basic), which it describes as users without the Copilot add-on licence who have access to Copilot capabilities inside apps. It says Microsoft 365 Copilot (Premium) includes everything in Basic. The same page lists Copilot Chat in Outlook among the ways to reach Copilot Chat (Basic). No page states which of these covers the inline chat.

**Meter.** A price or meter specific to inline chat is not yet published at the time of writing (November 2026). The overview says some features are subject to fair use limits; it does not say whether this one is.

**Audit.** Microsoft's audit page says Copilot activities are logged as part of Audit (Standard), and that pay-as-you-go audit billing does not apply to Microsoft applications.

**Indirect costs.** Admin time for a pilot, user communication and service desk briefing.

## Scope

**Who and where.** The roadmap lists Outlook on the Web, Worldwide (Standard Multi-Tenant), status In development, General Availability, target December CY2026. Other Outlook clients and the US Government clouds are not listed on the item.

**Licences.** See Cost and licensing: the overview places Outlook email drafting in Microsoft 365 Copilot (Basic); the licence for inline chat is not stated.

**Roles.** Integrated Apps controls are available only to Global Administrators on Microsoft's page. For Copilot settings in the Microsoft 365 admin center, Microsoft's page says to use an appropriate admin role, such as AI Administrator.

**Rollout mechanics and prerequisites.** Not stated by the roadmap or on Learn.

## Governance guidance

### Before rollout
- Check in Integrated Apps whether the Copilot app is available to everyone or only to a group, since that decides who can reach Copilot Chat in Outlook (rows 1 and 2).
- Decide with the compliance team whether Copilot use in Outlook needs reviewing in the audit log, and confirm auditing is turned on (row 4).
- Draft a user note that a Copilot chat may appear inside the compose window and that the sender remains responsible for the email.

### At rollout
- Test the inline chat with a pilot mailbox in Outlook on the web to see whether it writes into the draft directly and whether the sidebar remains.
- Brief the service desk that Microsoft documents no switch for the inline chat on its own (row 3), so the documented lever for a user who objects to it is their access to the Copilot app.

### After rollout
- Search the audit log for Copilot interactions and look at the AppHost values Outlook and OutlookOnCanvas to see how drafting use is recorded (row 4).
- Watch the roadmap item and the Copilot release notes for the shipped behaviour and any new admin setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Copilot app, which provides Copilot Chat in Outlook, is blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator only. Blocks Copilot in Outlook for all users, licensed ones included; Learn does not mention the inline compose chat.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can install and use the Copilot app in Outlook</strong><br><small>Group</small><br><small class="controls__note">Global Administrator only. Microsoft suggests assigning a group of licensed users to keep the app from unlicensed users.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Users › Specific users/group in the organization can install <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Separate switch for the inline chat in Outlook on the web</strong><br><small>Tenant</small><br><small class="controls__note">The Copilot settings page and the Set-OwaMailboxPolicy reference list no Outlook drafting or inline chat setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit records of Copilot interactions in Outlook</strong><br><small>Tenant</small><br><small class="controls__note">Logged as part of Audit (Standard). Filter exported results on AppHost (Outlook, OutlookOnCanvas).</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Activities – operation names <a href="https://learn.microsoft.com/purview/audit-copilot" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;start date&gt; -EndDate &lt;end date&gt; -RecordType CopilotInteraction</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Blocking the Copilot app in Integrated Apps is tenant-wide: Microsoft's Manage Copilot Chat page says it blocks Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web, including for users with a Microsoft 365 Copilot licence. Neither that page nor the Integrated Apps page mentions the inline compose chat, so confirm the block's effect on it in a pilot.

To keep Copilot Chat from unlicensed users without blocking it for everyone, Microsoft's page says to choose **Specific users/group in the organization can install** and assign a group of licensed users. The Integrated Apps controls need the Global Administrator role.

Microsoft Graph documents a beta block operation for Copilot packages, which needs a Microsoft Agent 365 licence; its page does not say that the Copilot app itself is blocked through it.

Microsoft's audit page lists an AppHost value OutlookOnCanvas for "Copilot inline in Outlook compose", described as the on-canvas helper in the compose window as opposed to a separate Copilot pane. Whether the new inline chat is recorded under that value or under Outlook is not stated.

## Open questions

- Does the inline chat replace the Copilot Chat sidebar in Outlook on the web, or sit alongside it? Watch the roadmap item and the Microsoft 365 Copilot release notes.
- Which licence covers inline chat: Copilot Chat (Basic), Microsoft 365 Copilot (Basic) or Premium, and does it use organisational data for Premium users?
- Does blocking or scoping the Copilot app in Integrated Apps also remove the inline chat from compose?
- Will Microsoft add a separate admin or user setting for the inline chat, for example in Outlook on the web mailbox policies?
- Are inline chat interactions audited under AppHost OutlookOnCanvas or Outlook?

<!-- rationale
risk: Low. The roadmap describes a new place to talk to Copilot while drafting, not new data access or new actions, and the Copilot app's Integrated Apps block covers Copilot in Outlook.
cost: Low. Microsoft's Copilot overview lists Outlook email drafting among Microsoft 365 Copilot (Basic) in-app features; no price or meter for inline chat is published, so the known cost is admin and support time.
impact: Medium. Users who draft email with Copilot in Outlook on the web notice a new inline chat in compose; other users and other Outlook clients are not named in the roadmap item.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: Premium uses Microsoft Graph automatically, without mentioning the Work IQ configuration exception. | Found: When Work IQ is off, Copilot responses aren't grounded in Microsoft Graph and Work IQ. | Fix: Replace 'while Premium uses Microsoft Graph automatically' with 'while Premium can automatically use Microsoft Graph and Work IQ; when Work IQ is off, responses are not grounded in Microsoft Graph and Work IQ'. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
- [unsupported, major] Why it matters: first sentence / behaviour: The change does not change what Copilot can reach. | Found: Searched: 'Outlook inline Copilot chat email drafting unchanged data access'. Read roadmap, Copilot overview, privacy-and-protections search excerpt and release notes. None states that this specific inline chat preserves the existing data-access scope. | Fix: Replace the first sentence with: 'The roadmap describes a new way to reach Copilot while writing mail in Outlook on the web; it does not specify the inline chat's data-access scope.'
- [contradicted, blocker] controls[1].governs; Governance guidance: Before rollout; Governance controls / applicability: The app availability selection decides which users can use Copilot in Outlook, without qualifying existing administrator deployments. | Found: The availability setting of an app doesn't impact any admin deployed apps. The availability setting only allows you to control which end users can install and use these apps on their own. Any previous admin deployments made are still be honored. | Fix: Change controls[1].governs and its rendered label to 'Which users can self-install and use the Copilot app in Outlook'. Add to its note and the group-scoping prose: 'Availability settings do not affect admin-deployed apps; existing admin deployments remain honored.' Replace the first Before rollout bullet with 'Check both Copilot app availability and existing admin deployments in Integrated Apps; restricting self-installation does not remove admin-deployed access.' | Source: https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: The overview says Basic can use open Outlook content but not organizational data through Microsoft Graph. | Found: Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) can't use organizational data via Microsoft Graph when interacting with Copilot Chat. | Fix: After this sentence add: 'Microsoft also documents that Copilot Chat in Outlook can access inbox, calendar, meetings, chats and limited files through lexical indexing without the Copilot add-on; this does not establish the new inline chat's data scope.' Cite https://learn.microsoft.com/copilot/plan/privacy-and-protections#organizational-data. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
- [supported, minor] Governance controls: first paragraph / applicability: Manage Copilot Chat says the Integrated Apps block also blocks Copilot in Teams. | Found: This setting blocks Copilot in the Microsoft Copilot app, Teams, Outlook, and Copilot Chat on the web for all users. | Fix: After the first sentence add: 'The Integrated Apps documentation differs on Teams: it says the block affects Outlook and the Microsoft Copilot application, while Teams continues to honor Teams admin center settings.' Cite https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365. | Source: https://learn.microsoft.com/copilot/manage/manage-copilot-chat
- [supported, minor] controls[0].note; Governance controls: first paragraph / applicability: The Copilot app's documented Outlook block is presented with a caveat about confirmation for the new inline chat. | Found: The Copilot app is an integrated app that provides Copilot Chat via web, in the Microsoft Copilot app (web, desktop, mobile) and in Outlook (web, desktop, mobile). | Fix: Replace the final sentence of controls[0].note with 'Microsoft documents this as blocking the Copilot app in Outlook, including licensed users.' Replace the pilot-confirmation sentence in the first Governance controls paragraph with 'Microsoft describes the block as applying to the Copilot app in Outlook.' | Source: https://learn.microsoft.com/copilot/manage/manage-copilot-chat
- [contradicted, minor] Governance guidance: Before rollout; controls[3] / consistency: The checklist says to confirm auditing is turned on and points to a row that only searches existing records. | Found: confirm auditing is turned on (row 4) / Audit > Activities – operation names / Search-UnifiedAuditLog | Fix: Remove 'and confirm auditing is turned on' from the Before rollout bullet: row 4 documents searching audit records, not the auditing enablement control.
-->
