---
title: "Microsoft Teams: Facilitator detects open questions and answers them with web search"
slug: "microsoft-teams-facilitator-detects-and-answers-questions"
roadmapId: 558341
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "Targeted for February 2027: in meetings where a licensed user adds Facilitator, it may post web-search answers to unanswered questions in the meeting chat. No action is required, but review the Copilot web search setting."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "February CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "prepare"
licensing:
  model: "per-user"
  notes: "The notice says a user with a Microsoft 365 Copilot (Premium) licence must enable Facilitator and other participants need no licence to receive responses. Learn says Facilitator is included with a Microsoft Copilot licence, subject to available capacity. A separate price for this capability is not yet published."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["facilitator","teams","m365-copilot","web-search","ai"]
sources:
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
  - title: "Data, privacy, and security for web search in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft Facilitator"
    url: "https://learn.microsoft.com/purview/ai-teams-facilitator"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "New-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    kind: "learn"
  - title: "Set-CsTeamsAppPermissionPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsapppermissionpolicy"
    kind: "learn"
  - title: "MC1409304"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1409304"
    kind: "message-center"
  - title: "Microsoft 365 Roadmap item 558341"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558341"
    kind: "roadmap"
videos: []
related: ["microsoft-teams-enhanced-copilot-and-ai-controls-for-meetings","teams-ai-generated-meeting-memory","purview-dlp-block-sensitive-data-in-copilot-web-search","m365-copilot-domain-exclusion-web-grounding"]
controls:
  - governs: "Whether Copilot web search, which Facilitator's answers depend on, is allowed"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow web search in Copilot"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api: null
    note: "General Copilot control: the notice says Facilitator depends on the Copilot web search setting but does not name this policy. Policy name and options are from the web search page."
  - governs: "Whether Facilitator is available to the organisation or to a group of users"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Facilitator > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    api: null
    note: "Applies to Facilitator as a whole, not to proactive answers alone. Needs Teams admin credentials."
  - governs: "A separate switch for proactive question detection and answers"
    scope: "tenant"
    ui: null
    api: null
    note: "No such setting is documented at the time of writing (November 2026)."
  - governs: "Retention of Facilitator interactions in meetings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Lifecycle Management > Policies > Retention Policies"
      docs: "https://learn.microsoft.com/purview/ai-teams-facilitator"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy -Name <policy name> -TeamsChatLocation <locations>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    note: "General control: Learn's Purview page names the Teams chats location for Facilitator interactions in meetings; whether it captures proactive answers is not confirmed."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-13T19:41:44"
changes:
  - date: "2026-11-17"
    note: "New briefing: Facilitator proactively detecting and answering meeting questions with web search, targeted for February 2027 (MC1409304 updated 12 November 2026)."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 67
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "63038e77e8aa16c7814cb98c431e81ad"
---

## What's changing

Facilitator, the AI agent that sits in Microsoft Teams meetings, is planned to detect questions that nobody answers and offer to find an answer using web search. The roadmap item describes a prompt such as "What is an LLM?" going unanswered, after which Facilitator posts an offer to look it up and participants can select "Yes" to have it retrieve and share the information.

Microsoft's notice MC1409304 (updated 12 November 2026) describes the behaviour more broadly. Facilitator monitors the meeting conversation in real time for explicit or implicit information needs, performs a web search and posts the response in the meeting chat. The notice says responses are infrequent, typically less than once per meeting, and are limited to questions relevant to the discussion based on agenda signals and conversational context. It says Facilitator must be added to the meeting manually and is not enabled by default, that a user with a Microsoft 365 Copilot (Premium) licence must enable it, and that the feature is supported in standard Teams meetings and not in calls, webinars or town halls.

The roadmap item is "In development" with a target of February CY2027, for General Availability and Targeted Release, Worldwide (Standard Multi-Tenant) only, on Android, desktop, iOS, Mac and web. The notice moves the rollout from December: Targeted Release begins early February 2027 and is expected to complete mid-February 2027, and General Availability (Worldwide) begins mid-February 2027 and is expected to complete early March 2027. The notice sets no act-by date and says no immediate action is required.

Microsoft Learn does not yet describe the proactive behaviour. Its Facilitator page lists "AI-powered Q&A from meeting and web content" as generally available, which is a different, prompted capability, so what follows about proactive answers is the roadmap's and the notice's description.

## Why it matters

For a service owner, this changes who starts a web search from a meeting. Learn describes a licensed user prompting Facilitator and everyone seeing the reply; under this plan Facilitator can post an answer after a participant's question goes unanswered, without anyone prompting it. That is a new way for AI-generated text to reach every participant, including unlicensed ones, who can see Facilitator's responses.

If nobody acts, the notice says the behaviour applies only where a licensed user has added Facilitator to a meeting, so exposure follows existing Facilitator adoption. Expect questions from the helpdesk about unprompted answers, and decide before February 2027 whether your Copilot web search configuration is the one you want for meetings.

## Risk assessment

**Data exposure**

- Facilitator processes meeting conversation in real time to detect knowledge gaps and generates a web search. The notice's compliance table says the feature changes how meeting conversations are processed. Microsoft has not said what text is sent to the search service; Learn's page on Copilot web search describes generated queries sent to the Bing search service and says the Data Protection Addendum doesn't apply to them. Confirm with Microsoft whether Facilitator follows that page.
- Microsoft Learn's Purview page for Facilitator lists data loss prevention and sensitivity labels as not supported for Facilitator, so the Purview DLP policy that can block Copilot web searches is not confirmed to cover Facilitator.

**Security & identity**

- Answers are posted in the meeting chat for everyone to see, per Learn, so a poor or misleading web answer is visible to external or unlicensed participants too. The notice says the experience is supported in meetings with external or cross-tenant participants, while Learn's Facilitator page says Facilitator isn't supported in external chats and meetings. Test before relying on either statement.

**Autonomy & actions**

- Facilitator decides when to speak: it posts without a participant prompting it. The notice limits this to questions relevant to the meeting and says it is infrequent. Microsoft describes the output as a response in the meeting chat and describes no other action.
- Users can stop the behaviour by removing Facilitator from the meeting, per the notice.

**Change & support**

- The date has moved once already, from December 2026 to February 2027. Plan communications against the notice rather than the earlier date.
- The notice recommends informing the helpdesk and users about proactive Facilitator responses and updating training material.

## Cost and licensing

The notice says a user with a Microsoft 365 Copilot (Premium) licence must enable Facilitator for the meeting and that other participants do not need a licence to receive responses. Learn's Facilitator page says Facilitator is included with a Microsoft Copilot licence and is subject to available capacity, and lists an eligible Microsoft 365 base licence and an eligible Teams licence as further prerequisites.

No price, meter or credit rate for the proactive question-answering capability is published at the time of writing (November 2026). Treat the cost as admin time for configuration, communication and helpdesk readiness until Microsoft says otherwise.

## Scope

- **Who:** meetings where a user with a Microsoft 365 Copilot (Premium) licence has added Facilitator. Other participants receive the responses without a licence, per the notice.
- **Meeting types:** standard Teams meetings; the notice says calls, webinars and town halls are not supported. The notice says meetings with external or cross-tenant participants are supported, whereas Learn's Facilitator page says Facilitator isn't supported in external chats and meetings. Both are Microsoft statements; confirm which applies.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) only.
- **Platforms:** Android, desktop, iOS, Mac and web, per the roadmap record.
- **Rollout:** Targeted Release from early February 2027 to mid-February 2027, then General Availability (Worldwide) from mid-February 2027 to early March 2027, per MC1409304. These are Microsoft's targets, and the item's status is "In development".
- **Prerequisite:** the notice says the feature depends on the Copilot web search setting and no responses are generated if web search is disabled.

## Governance guidance

### Before rollout

- Check whether the **Allow web search in Copilot** policy is configured in Cloud Policy and decide the setting you want (first table row). Learn says that if it isn't configured, web search is available to users, unless **Allow the use of additional optional connected experiences in Office** is Disabled.
- Confirm that Facilitator is allowed or blocked in the Teams admin center as you intend (second table row). Learn says Facilitator is allowed by default.
- Agree with your compliance team how Facilitator chat interactions are retained, using a retention policy with the **Teams chats** location (fourth table row), and note that Purview DLP is listed as not supported for Facilitator.
- Decide whether meetings that discuss sensitive subjects should have Facilitator added at all, because answers are posted in the chat.

### At rollout

- Watch MC1409304 and roadmap item 558341 for further date changes before the early February 2027 Targeted Release.
- Tell the helpdesk and users that Facilitator may answer an unanswered question in the meeting chat and that removing Facilitator from the meeting stops it, per the notice.
- Run a pilot meeting with a licensed user and, if you need it, an external participant, to confirm whether answers appear and for which meeting types.

### After rollout

- Update meeting training material and internal documentation that describe Teams meeting experiences, as the notice recommends.
- Re-check Microsoft Learn for a setting that governs proactive answers separately from Facilitator and from web search (third table row).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot web search, which Facilitator's answers depend on, is allowed</strong><br><small>Tenant</small><br><small class="controls__note">General Copilot control: the notice says Facilitator depends on the Copilot web search setting but does not name this policy. Policy name and options are from the web search page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Allow web search in Copilot <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Facilitator is available to the organisation or to a group of users</strong><br><small>Tenant</small><br><small class="controls__note">Applies to Facilitator as a whole, not to proactive answers alone. Needs Teams admin credentials.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Facilitator › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/facilitator-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>A separate switch for proactive question detection and answers</strong><br><small>Tenant</small><br><small class="controls__note">No such setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Retention of Facilitator interactions in meetings</strong><br><small>Tenant</small><br><small class="controls__note">General control: Learn's Purview page names the Teams chats location for Facilitator interactions in meetings; whether it captures proactive answers is not confirmed.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Lifecycle Management › Policies › Retention Policies <a href="https://learn.microsoft.com/purview/ai-teams-facilitator" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy -Name &lt;policy name&gt; -TeamsChatLocation &lt;locations&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting that governs only the proactive question-detection capability is documented at the time of writing (November 2026). The documented levers are broader: the Copilot web search policy, which the notice says this feature depends on, and the Teams admin center Allow or Block action for Facilitator as a whole, which Learn says needs Teams admin credentials. Blocking Facilitator therefore removes its notes and other skills, not only this one.

Learn says Facilitator is blocked if all apps are blocked for your organisation, and describes using app permission policies and app-centric management to allow it for a group of users. The Teams PowerShell reference lists Set-CsTeamsAppPermissionPolicy but says app permission policies must be created and changed in the Teams admin center, so the Teams row has no API call. Microsoft Learn documents no API for the Cloud Policy web search policy at the time of writing.

The notice says users can stop the behaviour by removing Facilitator from the meeting. Learn's Purview page lists auditing, eDiscovery and Data Lifecycle Management as supported for Facilitator, including questions and answers for meetings; whether proactive answers fall under that is not confirmed. A retention policy also needs a rule, via New-RetentionComplianceRule, per the cmdlet reference.

## Open questions

- Does a separate admin setting control proactive question detection, independent of Facilitator and the Copilot web search policy? Watch the Facilitator page on Microsoft Learn and MC1409304.
- Does the **Allow web search in Copilot** policy, including its option that disables web search in Copilot Work mode, govern Facilitator's web search? The notice says the feature depends on the Copilot web search setting but does not name the policy.
- Do external and cross-tenant meetings support the feature? MC1409304 says yes; Learn's Facilitator page says Facilitator isn't supported in external meetings.
- What does Facilitator send to the search service, and do Learn's web search privacy terms, including the Data Protection Addendum exclusion for generated queries, apply to it?
- Will Microsoft publish a price or meter for this capability, and does it count against the capacity Learn mentions for Facilitator?

<!-- rationale
risk: Medium. Microsoft's notice MC1409304 says Facilitator monitors meeting conversation in real time and posts web-search answers unprompted, depending on the Copilot web search setting; Microsoft Learn lists data loss prevention as unsupported for Facilitator.
cost: Low. The notice says a user with a Microsoft 365 Copilot (Premium) licence must enable Facilitator; no separate price or meter for this capability is published, so the known cost is admin and communication time.
impact: Low. A licensed user has to add Facilitator to a meeting, so only those meetings see the answers, and the notice says responses typically occur less than once per meeting. Everyone in such a meeting sees them.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The linked Cloud Policy overview documents the complete path ending in Allow web search in Copilot. | Found: On the Configure Settings page, select the policies that you want to include in the policy configuration. You can search for the policy by name | Fix: Shorten controls[0].ui.path and its rendered counterpart to 'Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings'. Keep the existing note identifying Allow web search in Copilot and its separate web-search source: that policy name is not on the linked overview page. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [contradicted, blocker] controls[1].api; Governance controls table and prose / absence: Facilitator availability has no documented automation because app permission policies must be edited in the admin center. | Found: You can't update app availability in bulk in Teams admin center, but you can do so through PowerShell. For more information on PowerShell cmdlets for app availability, see Update-M365TeamsApp. | Fix: Replace the no-automation conclusion with 'For app-centric management, Microsoft documents Update-M365TeamsApp to manage app availability; the Set-CsTeamsAppPermissionPolicy warning concerns the older permission-policy mechanism.' Remove controls[1] and its rendered row rather than publishing a false API-absence cell; retain the verified UI path in prose and cite https://learn.microsoft.com/microsoftteams/app-centric-management and https://learn.microsoft.com/powershell/module/teams/update-m365teamsapp?view=teams-ps. Remove checklist references to the deleted table row. | Source: https://learn.microsoft.com/microsoftteams/app-centric-management
- [contradicted, blocker] controls[3].note; Governance controls table and prose / applicability: Whether documented Facilitator meeting-interaction retention covers proactive answers is unconfirmed. | Found: For Facilitator AI interactions in meetings, use a retention policy with the Teams chats option. | Fix: Replace controls[3].note and its rendered text with 'For Facilitator AI interactions in meetings, Microsoft specifies a retention policy with the Teams chats location.' Remove the retention uncertainty: the documented class includes the Facilitator meeting-chat responses described in MC1409304. In the final Governance controls paragraph, remove 'whether proactive answers fall under that is not confirmed' because the same page also explicitly supports Facilitator questions and answers for meetings. | Source: https://learn.microsoft.com/purview/ai-teams-facilitator
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment / applicability: Purview DLP can block sensitive information from being sent in Copilot web searches. | Found: When a user prompt contains the configured SITs, Copilot and Cowork block external web search as a grounding source | Fix: Add https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about to sources for the statement about DLP blocking Copilot web searches; retain the distinction from Facilitator. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about#block-sensitive-information-types-in-web-search
- [supported, minor] controls[1].ui; Governance controls table; Governance guidance / admin-path: Learn documents Teams admin center > Teams apps > Manage apps > Facilitator > Allow or Block. | Found: select Teams apps > Manage apps. ... Select Facilitator from the app list. ... In the actions menu, select Allow or Block. | Fix: Add this qualification to controls[1].note and the corresponding prose: 'For tenants migrated to app-centric management, Microsoft documents app availability through Users and groups > Availability > Edit availability instead; see https://learn.microsoft.com/microsoftteams/app-centric-management#add-or-modify-app-availability-for-users.' Add that source. | Source: https://learn.microsoft.com/microsoftteams/facilitator-teams
- [supported, minor] Governance controls / command: The Set-CsTeamsAppPermissionPolicy reference requires creation and modification of app permission policies in the Teams admin center. | Found: We require that all creation and modification of app permission polices (not including the assignment or removal of policies from users) happens in the Microsoft Teams & Skype for Business Admin Center | Fix: Keep this warning scoped to app permission policies, and add 'This does not rule out the app-centric-management PowerShell documented at https://learn.microsoft.com/microsoftteams/app-centric-management.' Cite that page; correct the broader API-absence claim as specified separately. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsapppermissionpolicy
-->
