---
title: "Microsoft 365 Copilot in Word for Mac: easier access to the Researcher agent from the document"
slug: "m365-copilot-easier-access-to-researcher-in-microsoft-word"
roadmapId: 497914
topic: "m365-copilot"
products: ["Word","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans new ways to start the Researcher agent from the document in Word for Mac. Copilot-licensed Mac users are affected; no new admin control is documented, so check the existing Researcher block, licence and web search settings."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "August CY2025"
previewDate: null
risk: "low"
cost: "none"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Researcher comes with the Microsoft 365 Copilot licence, per Microsoft's general availability announcement, with a published limit of 25 queries per user per month. Nothing specific to the Word for Mac entry points is published."
audiences: ["m365-admin","change-adoption","compliance"]
tags: ["researcher","word","macos","m365-copilot","web-search","cloud-policy"]
sources:
  - title: "Microsoft 365 Roadmap item 497914"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=497914"
    kind: "roadmap"
  - title: "Get started with Researcher agent in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/researcher-agent"
    kind: "learn"
  - title: "Microsoft Copilot Researcher agent frequently asked questions"
    url: "https://learn.microsoft.com/copilot/manage/faq-researcher"
    kind: "learn"
  - title: "Researcher and Analyst are now generally available in Microsoft 365 Copilot"
    url: "https://www.microsoft.com/en-us/copilot/blog/2025/06/02/researcher-and-analyst-are-now-generally-available-in-microsoft-365-copilot/"
    kind: "blog"
  - title: "Data, privacy, and security for web search in Microsoft Copilot and Microsoft Copilot Chat"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Whether Researcher is available to anyone in the organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that brings Researcher (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that brings Researcher (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["web-search","agent-registry","m365-copilot-researcher-agent-for-gcc","m365-copilot-work-iq-apis-researcher-agent-access"]
controls:
  - governs: "Whether Researcher is available to anyone in the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Tenant-wide only for Researcher: the Edit users panel is disabled. The Graph call is beta and requires a Microsoft Agent 365 licence."
  - governs: "Which users hold the Microsoft 365 Copilot licence that brings Researcher"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "At least License or User Administrator. Researcher is available to Microsoft 365 Copilot licence holders."
  - governs: "Whether Copilot, including Researcher, can use web search"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Allow web search in Copilot"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api: null
    note: "Applies to users or groups. The policy is available only in Cloud Policy service; Office Apps Administrator is the recommended role."
  - governs: "Separate switch for Researcher entry points in Word"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no Word-specific or per-app setting for Researcher at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2025-07-10T23:00:59"
changes:
  - date: "2026-11-26"
    note: "New briefing for the Word for Mac roadmap item: Researcher licensing and query limit, the tenant-wide block, licence assignment and the web search policy."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 64 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 63
  unconfirmed: 1
  contradicted: 0
  attempts: 1
  hash: "e248315f93451b6e24908577d87db0d4"
---

## What's changing

Microsoft plans easier ways to start the Researcher agent from the document canvas in Word for Mac, so that a user can go from an idea to a research report without leaving the document. Researcher is a Microsoft-built agent in Microsoft Copilot for complex, multi-step research: it returns a source-cited report drawn from the web and from the user's work content, including files, emails, meetings and chats the user has access to ([Get started with Researcher agent](https://learn.microsoft.com/copilot/manage/researcher-agent)).

Microsoft Learn does not describe the Word entry points yet, so what follows about them is the roadmap's description: Researcher 'now has easier entry points on the Word canvas'. Microsoft has not stated what the entry points look like, where the finished report goes, or whether they appear without admin action. Researcher itself is, in the words of its FAQ, 'part of the core default experience for Microsoft Copilot licensed users'.

This item covers Word for Mac in the Worldwide (Standard Multi-Tenant) cloud. Its status is In development with a target of August CY2025, a target that has passed; the record has not been modified since it was created in July 2025. Microsoft lists the same feature for Word on the web as roadmap item 497913, which is Launched; the two records differ by platform.

## Why it matters

For most tenants this is a discoverability change rather than a new capability. Copilot-licensed users can already run Researcher from the Microsoft Copilot app; entry points in Word put it in front of Mac users while they write. Expect more Researcher runs from those users, and so more reports that mix web results with internal content. Each run counts towards the monthly query limit and complex runs take a long time, so users who first meet Researcher inside Word may raise support questions about both.

Microsoft has not stated what happens on arrival in Word for Mac. No source says existing behaviour changes: the controls that govern Researcher today, the tenant-wide block, the Microsoft 365 Copilot licence and the web search policy, are the ones to check before the entry points appear.

## Risk assessment

**Data exposure**
- Researcher uses Microsoft Graph, connectors and the Bing index, and reads work content the user can already access. The FAQ says it adheres to DLP policies and follows the same policies as Microsoft Copilot. No new data reach is documented for the Word entry points.
- With web search on, Copilot sends generated search queries to Bing; when the user prompts inside Word with a document open, the query may be informed by that document. The Data Protection Addendum and the EU Data Boundary do not apply to those generated queries. The **Allow web search in Copilot** policy (row 3) governs this for Researcher.

**Security & identity**
- No change: Microsoft says that at work Researcher respects the same permissions, policies and compliance the organisation already relies on.

**Autonomy & actions**
- No change documented: the roadmap describes new ways into an existing agent. Researcher may ask clarifying questions before it writes; the FAQ puts complex runs at 10 to 45 minutes.

**Change & support**
- Users can't disable Researcher, or remove or unpin it, according to the FAQ. Administrators can block it only for the whole tenant (row 1).
- The FAQ states that, by default, the content of Researcher sessions isn't directly accessible to admins or compliance tools. Tell compliance teams before Mac users start running reports from Word.

## Cost and licensing

Researcher is available to users with a Microsoft 365 Copilot licence: Microsoft's general availability announcement says Researcher and Analyst 'are available to everyone with a Microsoft 365 Copilot license'. The [Researcher FAQ](https://learn.microsoft.com/copilot/manage/faq-researcher) gives a usage limit of a maximum of 25 queries per user per month; the June 2025 announcement described this as up to 25 combined Researcher and Analyst queries per month.

Neither page names a meter or a separate charge for Researcher, and nothing specific to the Word for Mac entry points is published. The indirect cost is user communication and support time. Scripting the tenant block through Microsoft Graph needs a Microsoft Agent 365 licence (row 1).

## Scope

- **Users:** Microsoft 365 Copilot licence holders who use Word for Mac.
- **Platforms:** Mac, per this record. Word on the web is roadmap item 497913.
- **Clouds:** the record lists Worldwide (Standard Multi-Tenant). The Researcher FAQ answers the question of sovereign cloud availability with 'To be released soon.'
- **Roles:** assigning licences needs at least the License or User Administrator role; Office Apps Administrator is the recommended role for Cloud Policy.
- **Rollout:** the record gives General Availability as the release phase; no rollout mechanics for Word for Mac are published.

## Governance guidance

### Before rollout
- Decide whether Researcher should be available in your tenant at all; if not, block it in the Microsoft 365 admin center under Agents > All agents (row 1), knowing the block applies to every user.
- Check how the **Allow web search in Copilot** policy is set in Cloud Policy (row 3), since Researcher follows it and generated queries go to Bing outside the Data Protection Addendum.
- Review which Mac users hold a Microsoft 365 Copilot licence (row 2), because that licence is what brings Researcher to them.

### At rollout
- Tell Copilot-licensed Mac users that Researcher runs can take many minutes and count towards a limit of 25 queries per user per month.
- Brief compliance teams that the FAQ says Researcher session content isn't directly accessible to compliance tools by default.

### After rollout
- Watch roadmap item 497914 for a status change, since its August CY2025 target has passed while the record still reads In development.
- Check Word for Mac on a test device once the status changes, to see the entry points before users ask about them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Researcher is available to anyone in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Tenant-wide only for Researcher: the Edit users panel is disabled. The Graph call is beta and requires a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that brings Researcher</strong><br><small>User</small><br><small class="controls__note">At least License or User Administrator. Researcher is available to Microsoft 365 Copilot licence holders.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot, including Researcher, can use web search</strong><br><small>Group</small><br><small class="controls__note">Applies to users or groups. The policy is available only in Cloud Policy service; Office Apps Administrator is the recommended role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Allow web search in Copilot <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Separate switch for Researcher entry points in Word</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no Word-specific or per-app setting for Researcher at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- Researcher can't be scoped to some users from agent management: Microsoft says the **Edit users** panel is disabled for Researcher and Analyst, and availability is managed by blocking the agent for the entire tenant. The Microsoft 365 Copilot licence (row 2) is therefore the per-user route.
- Disabling Copilot agents for users does not remove Researcher: the FAQ says it remains accessible in Microsoft Copilot Chat under **Tools** even when Copilot agents are disabled for some or all users. Use **Block** (row 1).
- The Graph block call is a `/beta` API, needs the delegated permission CopilotPackages.ReadWrite.All, and requires a Microsoft Agent 365 licence.
- If **Allow web search in Copilot** is not configured, web search is available unless **Allow the use of additional optional connected experiences in Office** is set to **Disabled**. Choosing **Disabled in Microsoft Copilot Work mode; Enabled in Microsoft Copilot Web mode and Microsoft Copilot Chat** disables web search in Researcher. Cloud Policy settings take effect when the Office app is restarted.

## Open questions

- When will the Researcher entry points reach Word for Mac, given that the August CY2025 target has passed and the Word on the web item (497913) is Launched? Watch the roadmap item and Message center.
- Will the entry points appear automatically for every Copilot-licensed Mac user, or behind a Word or Cloud Policy setting? Watch the Researcher FAQ on Microsoft Learn.
- Does a report started from the Word canvas land in the open document, a new document or the Copilot pane? Watch the Researcher pages on Microsoft Learn.
- Which report will show Researcher use from Word? The FAQ says there is no existing reporting tool for Researcher and Analyst, yet also says admins can see usage metrics.

<!-- rationale
risk: Low. The item adds entry points to Researcher, which Copilot-licensed users already have; no source says it changes what Researcher can reach or who can use it.
cost: None. Researcher is available to everyone with a Microsoft 365 Copilot licence, and no separate meter or charge for it is published.
impact: Medium. Noticed by Microsoft 365 Copilot licence holders who write in Word for Mac; other users and platforms are not covered by this item.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[2].ui.docs; Governance controls table: row 3 Learn link / admin-path: The linked Cloud Policy overview documents the Allow web search in Copilot control itself. | Found: Searched: 'Allow web search in Copilot' in overview-cloud-policy (absent); opened manage-public-web-access, which names the policy, its options and its Researcher applicability. | Fix: Set controls[2].ui.docs and row 3's Admin UI Learn link to https://learn.microsoft.com/copilot/plan/manage-public-web-access. Keep overview-cloud-policy in sources for the navigation steps; it does not show the control's own part of the path.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The web search policy can be reached through Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Allow web search in Copilot. | Found: Under Customization, select Policy Management. Open the configuration details of the policy configuration you want to change by selecting it. On the Configure Settings page, select the policies that you want to include in the policy configuration. | Fix: Include the Policy configurations heading: 'Customization > Policy Management > Policy configurations > policy configuration > Choose the scope > Configure Settings > Allow web search in Copilot'. The overview supplies navigation; https://learn.microsoft.com/copilot/plan/manage-public-web-access supplies the setting name. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
-->
