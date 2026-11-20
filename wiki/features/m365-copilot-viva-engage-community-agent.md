---
title: "Viva Engage: Community Agent drafts and posts answers in communities"
slug: "m365-copilot-viva-engage-community-agent"
roadmapId: 499898
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "Community Agent answers questions in Viva Engage communities from community content, SharePoint and public websites. Community admins choose review or automatic posting; Microsoft has not stated the general availability default."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "September CY2025"
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "During public preview, Microsoft Learn requires a Microsoft 365 Copilot licence to add the agent or review drafts; reading answers and community analytics need a standard Viva Engage licence. General availability licensing is not yet published."
audiences: ["m365-admin","service-owner","change-adoption","security"]
tags: ["viva-engage","agents","m365-copilot","human-in-the-loop","knowledge-grounding","sensitivity-labels","sharepoint","auditing"]
sources:
  - title: "Microsoft 365 Roadmap 499898"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=499898"
    kind: "roadmap"
  - title: "Set up and manage Community Agents in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/community-agent"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Network Data Export API"
    url: "https://learn.microsoft.com/rest/api/yammer/network-data-export"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "user: assignLicense"
    url: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    kind: "learn"
  - title: "Use the Microsoft Graph API to work with Viva Engage"
    url: "https://learn.microsoft.com/graph/api/resources/engagement-api-overview?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["knowledge-grounding","sensitivity-labels","auditing","microsoft-viva-engage-community-feed-improvements"]
controls:
  - governs: "Whether community admins can add Community Agent in the network (preview)"
    scope: "tenant"
    ui:
      surface: "Engage admin center"
      path: "Tenant settings > Community Agent preview"
      docs: "https://learn.microsoft.com/viva/engage/community-agent"
    api: null
    note: "Network admin. Preview toggle that Learn says a new network-wide setting will replace at general availability, with at least 30 days' notice."
  - governs: "Whether answers need review before posting in a community"
    scope: "agent"
    ui:
      surface: "Viva Engage"
      path: "community > Admin actions > Set up community agent > Agent settings > Require review before posting"
      docs: "https://learn.microsoft.com/viva/engage/community-agent"
    api: null
    note: "Set by a community admin. The page states the agent posts automatically by default."
  - governs: "Which knowledge sources the community's agent draws on"
    scope: "agent"
    ui:
      surface: "Viva Engage"
      path: "community > More items (...) > Settings > Agent settings > Knowledge"
      docs: "https://learn.microsoft.com/viva/engage/community-agent"
    api: null
    note: "Community admin. Includes Add SharePoint site, Add public website, Include public community content and Only use expert and verified content."
  - governs: "Which users hold the Microsoft 365 Copilot licence needed to add the agent or review drafts"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "graph"
      call: "POST /v1.0/users/{id | userPrincipalName}/assignLicense"
      docs: "https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0"
    note: "General licence assignment, not specific to Community Agent. The request body sets addLicenses and removeLicenses. Needs at least License Administrator or User Administrator."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-09T22:04:35"
changes:
  - date: "2026-11-20"
    note: "First briefing for roadmap item 499898, based on the public preview documentation for Community Agent."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 88 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 88
  confirmed: 87
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "0a1cde271da13941bd8855f10b56ac6b"
---

## What's changing

Community Agent is an AI agent for Viva Engage communities. It drafts answers to members' questions, especially ones that come up repeatedly, using community conversations, the community's connected SharePoint library, and any additional SharePoint sites, libraries or public websites a community admin adds. The roadmap item says community admins can require human review before answers are posted or allow automatic posting.

The Microsoft Learn page describes the behaviour as it stands in public preview. Admins choose whether the agent posts automatically or requires admin or expert review; the page states that by default the agent posts answers automatically. The agent skips questions that already have a Best or Verified answer and questions older than 14 days, and does not respond if it finds no relevant information. If **Require review before posting** is on, or the agent has low confidence in its answer, a community admin or expert must approve the answer before it is posted. Reviewers can approve, edit or dismiss a draft.

The roadmap item is In development with a target of November CY2026, release phase General Availability, Worldwide (Standard Multi-Tenant) and Web, and lists a preview date of September CY2025. The Learn page is marked public preview and says a network admin must first turn on the **Community Agent preview** toggle in the Engage admin center. It adds that at general availability a new network-wide Community Agent setting will replace the toggle, with at least 30 days' notice and the new setting available from the start of that notice period. The preview page is not necessarily the final design.

## Why it matters

This is a new way for content from SharePoint sites and public websites to reach a whole community as posted replies, written by an agent. Each community admin decides whether a person checks the answer first, so the practical exposure is set community by community rather than once for the tenant. Treat the review setting, the sources and the label rules as the places where a wrong or oversharing answer is stopped.

Microsoft has not stated what the network-wide setting that replaces the preview toggle will default to at general availability, and no source says existing behaviour changes if nobody acts. The Learn page promises at least 30 days' notice before that setting replaces the toggle, so watch for it and set your network's preference then.

## Risk assessment

**Data exposure**

- Answers are drafted from community conversations, the community's connected SharePoint library, other SharePoint sites or libraries an admin adds, public websites, and, if switched on, other public communities in the network. A posted answer is visible as a reply in the community, so what the agent draws on becomes readable there.
- Adding a SharePoint site can add the community's Microsoft 365 group as a site visitor with Read permissions, and Learn says files that do not inherit the site's permissions are not used. Check who is in the community before approving a site.
- The page says the agent uses sites whose sensitivity label is at or below the label on the community or its Microsoft 365 group, and checks labels on files and site pages for each answer; for files this applies to labels without encryption.
- Learn lists Restricted Content Discovery, Information Barriers, Data Loss Prevention, Conditional Access and Information Rights Management as unsupported SharePoint compliance features, with support not currently planned for general availability. Do not rely on them to limit what the agent draws on.

**Security & identity**

- Any community admin can add a SharePoint site or library, and an admin with Full Control of the site can grant the access. Site owners can remove the access at any time.
- Public websites must be accessible without signing in, and the agent searches only the websites added. SharePoint sites and public websites share a total limit of 10.

**Autonomy & actions**

- By default the agent posts answers without a person reading them. Turning on **Require review before posting** sends drafts to a community admin or expert, and the agent also asks for approval when it has low confidence.
- Approved or edited answers are marked as verified by the reviewer, and answers written by the agent are used as knowledge only if an admin or expert has marked them verified.
- A community admin can delete a posted agent answer.

**Change & support**

- Expect questions from community admins about why the agent skipped a question; the **Skipped** view explains why. Drafting can take a minute or two, and automatic posting adds a wait.
- The preview toggle is replaced at general availability, so any process that relies on it will change.

## Cost and licensing

During public preview, the Learn page lists these requirements: community admins who add the agent and community admins or experts who review drafts need a Microsoft 365 Copilot licence; community members need a standard Viva Engage licence to read answers; community admins need a standard Viva Engage licence to view community analytics; network admins need Viva Engage premium to view Community Agent analytics across the network.

The page names no Copilot Credits meter and no price for the agent. Licensing and any meter at general availability are not yet published, so confirm them when the roadmap item moves to Launched. Indirect costs are admin and expert time to review drafts and to maintain sources, and Viva Engage premium if you want network-wide analytics.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) and the Web platform only; the record lists no US Government clouds. Community admins can add one Community Agent per community. A network admin must first turn on the preview toggle before community admins can add the agent in the preview.

The preview supports SharePoint team and communication sites only. The community's connected SharePoint library is included automatically, and other public communities in the network, extra SharePoint sites, and public websites are added in the community's agent settings. Community admins and experts who review need a Microsoft 365 Copilot licence; members need a standard Viva Engage licence.

## Governance guidance

### Before rollout

- Decide which communities should have an agent and which community admins and experts will review drafts, and confirm those people hold a Microsoft 365 Copilot licence.
- Inventory the SharePoint sites and public websites community admins are likely to connect, and check their sensitivity labels against the label on the community or its Microsoft 365 group.
- Review the SharePoint sites for reliance on Restricted Content Discovery, Information Barriers, Data Loss Prevention, Conditional Access or Information Rights Management, which Learn lists as unsupported for the agent.
- Agree who in the network team will watch for the notice that the network-wide setting is replacing the preview toggle.

### At rollout

- Decide whether to turn on the **Community Agent preview** toggle in the Engage admin center, and tell network admins and community admins what you decided.
- Tell community admins that the page states the agent posts automatically by default, and ask them to turn on **Require review before posting** where a person should check answers first.
- Ask community admins to leave **Include public community content** and **Only use expert and verified content** in the state they intend; Learn says both are off by default.

### After rollout

- Search the Microsoft Purview audit log for the Community Agent operations, such as AgentSettingsUpdated and SuggestedAnswerApproved, using an account with the Audit Logs or View-Only Audit Logs role.
- Use the network analytics view to see which communities have an agent and whether each posts automatically or requires review; this needs Viva Engage premium.
- Ask verified admins to run the Network Data Export when you need a record of how each agent is configured and how drafts were reviewed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether community admins can add Community Agent in the network (preview)</strong><br><small>Tenant</small><br><small class="controls__note">Network admin. Preview toggle that Learn says a new network-wide setting will replace at general availability, with at least 30 days' notice.</small></td><td data-label="Admin UI"><strong>Engage admin center</strong><br>Tenant settings › Community Agent preview <a href="https://learn.microsoft.com/viva/engage/community-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether answers need review before posting in a community</strong><br><small>Agent</small><br><small class="controls__note">Set by a community admin. The page states the agent posts automatically by default.</small></td><td data-label="Admin UI"><strong>Viva Engage</strong><br>community › Admin actions › Set up community agent › Agent settings › Require review before posting <a href="https://learn.microsoft.com/viva/engage/community-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which knowledge sources the community's agent draws on</strong><br><small>Agent</small><br><small class="controls__note">Community admin. Includes Add SharePoint site, Add public website, Include public community content and Only use expert and verified content.</small></td><td data-label="Admin UI"><strong>Viva Engage</strong><br>community › More items (...) › Settings › Agent settings › Knowledge <a href="https://learn.microsoft.com/viva/engage/community-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence needed to add the agent or review drafts</strong><br><small>User</small><br><small class="controls__note">General licence assignment, not specific to Community Agent. The request body sets addLicenses and removeLicenses. Needs at least License Administrator or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/users/{id | userPrincipalName}/assignLicense</code> <a href="https://learn.microsoft.com/graph/api/user-assignlicense?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The only tenant-level control Learn documents is the preview toggle, which a network admin sets in the Engage admin center; it is replaced at general availability. Microsoft Learn documents no API or PowerShell cmdlet for the toggle or for the per-community agent settings at the time of writing (November 2026). Review and knowledge-source choices are made community by community in the agent settings by community admins, so there is no single place that enforces review across the network.

The Microsoft 365 Copilot licence is the lever for who can add the agent and review drafts; the licence row describes the general licence-assignment steps and needs a License or User Administrator role or one of the Graph roles its reference lists.

For monitoring, Learn says audit logs cover agent setup and settings, knowledge source additions and removals, SharePoint access grants and answer reviews. Viva Engage verified admins can export agent configuration, knowledge sources and draft review data through the [Network Data Export API](https://learn.microsoft.com/rest/api/yammer/network-data-export), and the network analytics view shows each community's agent status and mode.

## Open questions

- What will the network-wide Community Agent setting that replaces the preview toggle default to at general availability? Watch the Community Agent page on Microsoft Learn and Message center for the 30-day notice.
- Which licence and any Copilot Credits meter will apply at general availability, and will community admins and experts still need a Microsoft 365 Copilot licence? Watch the roadmap item and the Learn page.
- Will any API or PowerShell control for the tenant setting or per-community agent settings be published? Watch the Viva Engage Graph documentation.
- Will support for Restricted Content Discovery, Information Barriers, Data Loss Prevention, Conditional Access or Information Rights Management be added, given Learn says it is not currently planned for general availability?

<!-- rationale
risk: Medium. On the preview page the agent posts answers automatically unless a community admin turns on Require review before posting, and it can draw on SharePoint sites and public websites an admin adds.
cost: Medium. The preview page requires a Microsoft 365 Copilot licence for community admins and experts who add the agent or review drafts. Licensing at general availability is not yet published.
impact: Medium. Community admins and experts set it up and review drafts, and community members see agent answers posted as replies to their questions.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity / role: Site owners can remove the access granted to the community. | Found: Full Control | Contains all available SharePoint permissions. By default, the Owners group has this permission level. | Fix: Add https://learn.microsoft.com/sharepoint/understanding-permission-levels to sources for the site-owner permissions claim. | Source: https://learn.microsoft.com/sharepoint/understanding-permission-levels
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks administrators to check sensitivity labels, but that control has no corresponding row in the controls table. | Found: check their sensitivity labels against the label on the community or its Microsoft 365 group. | Controls rows cover the preview toggle, answer review, agent knowledge sources and user licence assignment. | Fix: The Before rollout inventory bullet's sensitivity-label check has no controls row. Remove 'and check their sensitivity labels against the label on the community or its Microsoft 365 group' from that bullet; do not add a control row in this correction.
-->
