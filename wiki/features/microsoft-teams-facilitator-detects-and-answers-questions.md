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
  model: "included"
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
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Supported resources for remediation and applyOnce (preview)"
    url: "https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources"
    kind: "learn"
  - title: "New-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy"
    kind: "learn"
  - title: "New-RetentionComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule"
    kind: "learn"
  - title: "Set-CsTeamsAppPermissionPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsapppermissionpolicy"
    kind: "learn"
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/teams/update-m365teamsapp"
    kind: "learn"
  - title: "Learn about the Microsoft 365 Copilot policy location in Microsoft Purview Data Loss Prevention"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "MC1409304: (Updated) Microsoft Teams: Facilitator proactively detects and resolves knowledge gaps in meetings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1409304"
    kind: "message-center"
  - title: "Microsoft 365 Roadmap item 558341"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558341"
    kind: "roadmap"
videos: []
related: ["microsoft-teams-enhanced-copilot-and-ai-controls-for-meetings","m365-copilot-domain-exclusion-web-grounding"]
controls:
  - governs: "Whether Copilot web search, which Facilitator's answers depend on, is allowed"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview beta API, not for production. Body: mode applyOnce; resource microsoft.copilot.allowwebsearch, properties.value 0, 1 or 2. Tenant-level policies only. The notice does not name this policy."
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
      call: "New-RetentionComplianceRule -Policy <policy name> -RetentionDuration <days> -RetentionComplianceAction Keep"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule"
    note: "Adds a retention rule to an existing policy scoped to Teams chats; specify the rule name as required by the reference."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-19"
roadmapModified: "2026-11-13T19:41:44"
changes:
  - date: "2026-11-17"
    note: "New briefing: Facilitator proactively detecting and answering meeting questions with web search, targeted for February 2027 (MC1409304 updated 12 November 2026)."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after the independent check: shortened the Cloud Policy path, removed the Teams availability row and its false no-API claim (Update-M365TeamsApp is documented), and removed the retention uncertainty."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 77 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after the independent check: licensing model set to included, added the preview Graph operation for the Copilot web search policy, moved the retention call to New-RetentionComplianceRule, completed the app-availability path and dropped an unmatched checklist step."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 93 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-19"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 93
  confirmed: 93
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0d3515c96999ff3bdba15b911ee1bc71"
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
- Agree with your compliance team how Facilitator chat interactions are retained, using a retention policy with the **Teams chats** location (third table row), and note that Purview DLP is listed as not supported for Facilitator.
- Decide whether meetings that discuss sensitive subjects should have Facilitator added at all, because answers are posted in the chat.

### At rollout

- Watch MC1409304 and roadmap item 558341 for further date changes before the early February 2027 Targeted Release.
- Tell the helpdesk and users that Facilitator may answer an unanswered question in the meeting chat and that removing Facilitator from the meeting stops it, per the notice.
- Run a pilot meeting with a licensed user and, if you need it, an external participant, to confirm whether answers appear and for which meeting types.

### After rollout

- Update meeting training material and internal documentation that describe Teams meeting experiences, as the notice recommends.
- Re-check Microsoft Learn for a setting that governs proactive answers separately from Facilitator and from web search (second table row).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot web search, which Facilitator's answers depend on, is allowed</strong><br><small>Tenant</small><br><small class="controls__note">Preview beta API, not for production. Body: mode applyOnce; resource microsoft.copilot.allowwebsearch, properties.value 0, 1 or 2. Tenant-level policies only. The notice does not name this policy.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A separate switch for proactive question detection and answers</strong><br><small>Tenant</small><br><small class="controls__note">No such setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Retention of Facilitator interactions in meetings</strong><br><small>Tenant</small><br><small class="controls__note">Adds a retention rule to an existing policy scoped to Teams chats; specify the rule name as required by the reference.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Lifecycle Management › Policies › Retention Policies <a href="https://learn.microsoft.com/purview/ai-teams-facilitator" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionComplianceRule -Policy &lt;policy name&gt; -RetentionDuration &lt;days&gt; -RetentionComplianceAction Keep</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting that governs only the proactive question-detection capability is documented at the time of writing (November 2026). The documented levers are broader: the Copilot web search policy, which the notice says this feature depends on, and the Teams admin center Allow or Block action for Facilitator as a whole, which Learn says needs Teams admin credentials. Blocking Facilitator therefore removes its notes and other skills, not only this one.

Learn says Facilitator is blocked if all apps are blocked for your organisation, and describes using app permission policies and app-centric management to allow it for a group of users. For tenants migrated to app-centric management, Microsoft documents app availability through Teams admin center > Teams apps > Manage apps > Facilitator > Users and groups > Availability > Edit availability instead (see https://learn.microsoft.com/microsoftteams/app-centric-management). For app-centric management, Microsoft documents Update-M365TeamsApp to manage app availability; the Set-CsTeamsAppPermissionPolicy warning, that app permission policies must be created and changed in the Teams admin center, concerns the older permission-policy mechanism.

Microsoft Learn documents a preview Microsoft Graph beta operation for the Cloud Policy web search policy, `POST /beta/admin/configurationManagement/configurationMonitors`, and says beta APIs are not supported for production use. Set `mode` to `applyOnce` and include a baseline resource of type `microsoft.copilot.allowwebsearch` with `resourceVersion` 1 and a `properties.value` string: `0` enables web search in Microsoft 365 Copilot and Copilot Chat, `1` disables it in both, and `2` disables it in Copilot Work mode only (see https://learn.microsoft.com/graph/utcm-copilot-resources#allowwebsearch-resource-type and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources). Learn says this preview supports tenant-level policies only and the operation fails if the setting is configured in a group-level policy. The TCM service principal needs the delegated `CopilotPolicySettings.ReadWrite` permission, the calling app needs the delegated `ConfigurationMonitoring.ReadWrite.All` permission, and the signed-in user needs the AI Administrator role.

The notice says users can stop the behaviour by removing Facilitator from the meeting. Learn's Purview page lists auditing, eDiscovery and Data Lifecycle Management as supported for Facilitator, including questions and answers for meetings. A retention policy is created with New-RetentionCompliancePolicy and also needs a rule, added with New-RetentionComplianceRule, per the cmdlet references.

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
