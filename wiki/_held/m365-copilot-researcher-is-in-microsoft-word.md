---
title: "Word: Researcher agent entry points on the document canvas"
slug: "m365-copilot-researcher-is-in-microsoft-word"
roadmapId: 497833
topic: "m365-copilot"
products: ["Word","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans easier ways to start the Researcher agent from the Word desktop canvas. Researcher is part of licensed users' default Copilot experience; admins should confirm who has it and how web search is set."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "August CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's Researcher FAQ says Researcher is part of the core default experience for Microsoft Copilot licensed users, and the 2025 release notes place it under the Copilot Premium licence. No licence or meter specific to the Word entry points is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["researcher","word","m365-copilot","web-search","cloud-policy","agents","licensing"]
sources:
  - title: "Get started with Researcher agent in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/researcher-agent"
    kind: "learn"
  - title: "Microsoft Copilot Researcher agent frequently asked questions"
    url: "https://learn.microsoft.com/copilot/manage/faq-researcher"
    kind: "learn"
  - title: "2025 Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 497833"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=497833"
    kind: "roadmap"
  - title: "Whether the Researcher agent is available in the organisation (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Whether the Researcher agent is available in the organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that Researcher comes with (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that Researcher comes with (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Whether Researcher can use public web content (Microsoft 365 Apps admin center)"
    url: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    kind: "learn"
videos: []
related: ["m365-copilot-researcher-agent-for-gcc","web-search","agent-registry","cloud-policy","m365-copilot-work-iq-apis-researcher-agent-access"]
controls:
  - governs: "Whether the Researcher agent is available in the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Tenant-wide only for Researcher. Graph call is beta and needs a Microsoft Agent 365 licence. Effect on the Word entry points not stated."
  - governs: "Which users hold the Microsoft 365 Copilot licence that Researcher comes with"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Requires at least License Administrator or User Administrator."
  - governs: "Whether Researcher can use public web content"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Create > Choose the scope > Configure Settings > Allow web search in Copilot"
      docs: "https://learn.microsoft.com/copilot/plan/manage-public-web-access"
    api: null
    note: "Cloud Policy setting for all users or specific groups. Office Apps Administrator is the recommended role."
  - governs: "Separate switch for Researcher entry points in Word"
    scope: "tenant"
    ui: null
    api: null
    note: "The documented availability control for Researcher is the tenant-wide block in the first row."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2025-07-17T23:00:21"
changes:
  - date: "2026-11-26"
    note: "New briefing: Researcher entry points in Word desktop, with the tenant-wide Researcher block, licence assignment and web search policy as controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 53 statements contradicted, 5 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 47
  unconfirmed: 5
  contradicted: 1
  attempts: 1
  hash: "9cb5f9ba6da0c2fbf63d87ca0c7e8cad"
---

## What's changing

Microsoft plans to give the Researcher agent easier entry points on the Word canvas, so a user can go from an idea in a document to a research report without leaving Word. Researcher is Microsoft's agent for multi-step research: it draws on the web and on the files, emails, meetings and chats the user can access, and returns a structured report with cited sources.

Microsoft Learn does not describe the Word entry points yet, so what follows about them is the roadmap's description. The Learn page for Researcher, at the time of writing (November 2026), tells users to find Researcher under **Agents** in Chat in the Microsoft Copilot app. Microsoft's Researcher FAQ describes Researcher as part of the core default experience for Microsoft Copilot licensed users and says users can't disable it, so expect the Word entry points to appear for those users without an administrator switching anything on.

The roadmap item is **In development** with a target of **August CY2025**, for **Desktop**, in the Worldwide (Standard Multi-Tenant) cloud, at General Availability. The target date is more than a year past and the record was last modified in July 2025, so treat the timing as uncertain.

## Why it matters

This change does not give Researcher new data or new powers; it makes an existing agent easier to reach from where people write. Expect more Researcher use among licensed Word users, and so more long-running reports built from work content and, where web search is allowed, the web. Because Researcher is on by default for licensed users and the Word entry points come with it, the decisions that matter are the ones already in place: who holds the licence, whether web search is allowed, and whether Researcher is blocked for the tenant.

The FAQ gives a limit of 25 Researcher queries per user per month, which users starting research from Word may reach sooner than they expect. Service desks should be ready for questions about that limit and about reports that take many minutes to finish.

## Risk assessment

**Data exposure**
- Researcher reads files, emails, meetings and chats the user already has access to, so an overshared SharePoint site feeds Researcher reports started from Word just as it feeds Chat. The FAQ says Researcher adheres to DLP policies and follows the same policies as Microsoft Copilot.

**Security & identity**
- No change: the roadmap item describes new entry points, not a new identity or connection.

**Autonomy & actions**
- Researcher runs a multi-step search and composes a report; the FAQ says complex queries can take 10 to 45 minutes. The roadmap item describes no new actions in the document beyond starting research.

**Change & support**
- Users can't disable or unpin Researcher themselves, per the FAQ. Microsoft has not said whether blocking Researcher in the Microsoft 365 admin center removes the Word entry points, so confirm the behaviour in a test tenant before relying on the block.

## Cost and licensing

**Licence.** Microsoft's [Researcher FAQ](https://learn.microsoft.com/copilot/manage/faq-researcher) says Researcher is part of the core default experience for Microsoft Copilot licensed users. The [2025 release notes](https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes) describe Researcher as part of the Copilot Premium license. No licence specific to the Word entry points is published.

**Meter and limits.** No meter is documented for Researcher in Word at the time of writing (November 2026). The FAQ sets a maximum of 25 Researcher queries per user per month.

**Indirect costs.** Admin time to check licence assignment and web search policy, and communication to licensed Word users.

## Scope

- **Users:** Microsoft Copilot licensed users, for whom Researcher is part of the default experience.
- **Platforms:** Desktop, per the roadmap record.
- **Clouds:** Worldwide (Standard Multi-Tenant), per the roadmap record.
- **Roles:** License Administrator or User Administrator to assign licences; Office Apps Administrator is the recommended role for Cloud Policy.
- **Release phase:** General Availability, per the roadmap record.

## Governance guidance

### Before rollout
- Confirm which users hold the Microsoft 365 Copilot licence in the Microsoft 365 admin center, since Researcher is part of the default experience for licensed users.
- Decide whether Researcher may use web content and set the **Allow web search in Copilot** policy in the Microsoft 365 Apps admin center accordingly.
- Decide whether Researcher should be available at all; for Researcher the documented availability control is the tenant-wide **Block** action.

### At rollout
- Tell licensed Word users that Researcher can be started from Word, that reports can take many minutes, and that the FAQ sets 25 queries per user per month.
- Test in a pilot whether a tenant-wide block of Researcher removes the Word entry points.

### After rollout
- Track support tickets about the monthly query limit and long-running reports.
- Watch Message center and the [Researcher FAQ](https://learn.microsoft.com/copilot/manage/faq-researcher) for a Word-specific setting or usage reporting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Researcher agent is available in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Tenant-wide only for Researcher. Graph call is beta and needs a Microsoft Agent 365 licence. Effect on the Word entry points not stated.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that Researcher comes with</strong><br><small>User</small><br><small class="controls__note">Requires at least License Administrator or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Researcher can use public web content</strong><br><small>Group</small><br><small class="controls__note">Cloud Policy setting for all users or specific groups. Office Apps Administrator is the recommended role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Create › Choose the scope › Configure Settings › Allow web search in Copilot <a href="https://learn.microsoft.com/copilot/plan/manage-public-web-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Separate switch for Researcher entry points in Word</strong><br><small>Tenant</small><br><small class="controls__note">The documented availability control for Researcher is the tenant-wide block in the first row.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

For Researcher, the agent-management page says the **Edit users** panel is disabled, and directs admins to block the agent for the whole tenant to manage its availability; licence assignment is the per-user lever. The FAQ also says Researcher remains accessible in Microsoft Copilot Chat under **Tools** even when Copilot agents are disabled for some or all users, so agent-access settings are not a substitute for the block. The Graph block call is a beta API and needs a Microsoft Agent 365 licence. The FAQ says Researcher won't use web data when web search is disabled at the tenant level; setting **Allow web search in Copilot** to the option that disables Work mode also disables web search in Researcher.

## Open questions

- Does blocking Researcher in the Microsoft 365 admin center also remove its entry points on the Word canvas? Watch the agent management pages on Microsoft Learn.
- Do Researcher queries started from Word count against the 25-queries-per-user monthly limit in the same way as queries from Chat?
- Which Copilot licence tiers see the Word entry points, given that the FAQ says "Microsoft Copilot licensed users" and the release notes say Copilot Premium?
- When will the Word entry points ship, given the August CY2025 target has passed while the item is still In development? Watch Message center and the roadmap item.

<!-- rationale
risk: Low. The roadmap item adds entry points to an agent licensed users already have; Researcher keeps the same data reach, web search setting and tenant-wide block it has today.
cost: Low. Microsoft describes Researcher as part of the default experience for Microsoft Copilot licensed users and publishes no separate licence or meter for the Word entry points; the cost is communication and support time.
impact: Medium. Users who already have Researcher and write in Word desktop will notice the new starting points; staff without the Copilot licence are not the target.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState; What's changing; Why it matters / default: The new Word entry points are enabled on arrival and appear for licensed users without an administrator enabling them. | Found: Searched: Researcher agent Word canvas entry points default automatic rollout licence meter block controls; Researcher Word. Read roadmap, researcher-agent, faq-researcher, previous-year-release-notes and support's Get started with Researcher; none establishes the Word-entry-point rollout default. | Fix: Set defaultState to "unknown". Replace the sentence beginning "Microsoft's Researcher FAQ describes" with "Microsoft's Researcher FAQ describes Researcher as part of the core default experience for Microsoft Copilot licensed users and says users can't disable it. Microsoft has not stated what happens to the Word entry points on arrival." Replace the Why it matters sentence beginning "Because Researcher is on by default" with "The existing decisions to review are who holds the licence, whether web search is allowed, and whether Researcher is blocked for the tenant."
- [unsupported, major] Why it matters; Risk assessment: Data exposure; rationale: risk / behaviour: The Word entry-point change gives Researcher no new data and guarantees the same data reach as Chat. | Found: Searched: Researcher agent Word canvas entry points default automatic rollout licence meter block controls; Researcher Word. Read roadmap, researcher-agent and faq-researcher. They describe entry points and general Researcher data access, not a comparison of Word and Chat data reach. | Fix: Replace the first sentence of Why it matters with "The roadmap describes easier entry points to the existing Researcher agent." Replace the oversharing comparison with "Researcher draws on work content the user can access, so review oversharing before promoting its use." In the risk rationale, replace "Researcher keeps the same data reach, web search setting and tenant-wide block it has today" with "Microsoft documents Researcher's existing data access, web search policy and tenant-wide block, but does not describe the Word entry points in detail".
- [unsupported, major] Why it matters / behaviour: The Word entry-point change gives Researcher no new powers. | Found: Searched: Researcher agent Word canvas entry points default automatic rollout licence meter block controls; Researcher Word. Read roadmap, researcher-agent and faq-researcher; none states that the Word integration has no additional capabilities. | Fix: Replace the first sentence of Why it matters with "The roadmap describes easier entry points to the existing Researcher agent."
- [unsupported, major] Risk assessment: Security & identity / behaviour: There is no identity change in the Word integration. | Found: Searched: Researcher agent Word canvas entry points default automatic rollout licence meter block controls; Researcher Word. Read roadmap, researcher-agent and faq-researcher; none describes identity or connection mechanics for the Word entry points. | Fix: Replace "No change: the roadmap item describes new entry points, not a new identity or connection" with "The roadmap item describes new entry points and does not describe their identity or connection mechanics."
- [contradicted, blocker] controls[2].api; Governance controls table / absence: Microsoft has not documented automation for the Allow web search in Copilot control. | Found: These resources also support remediation and applyOnce. The 20 Copilot resources are Office Cloud Policy Service (OCPS) settings. TCM supports these settings only in tenant-level policies in the Microsoft 365 Apps admin center. | Fix: Replace the blanket automation gap with the documented tenant-level preview option: api.kind "graph", api.call "POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors", api.docs "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta". In the existing row's note say: "UI supports all users or specific groups. Preview API is tenant-level only: use mode applyOnce and a baseline resourceType microsoft.copilot.allowwebsearch, resourceVersion 1, with properties.value 0 to enable both modes, 1 to disable both, or 2 to disable Work mode web search. The target setting must not be configured in any group-level policy, or applyOnce fails. Calling app requires delegated ConfigurationMonitoring.ReadWrite.All; the TCM service principal requires delegated CopilotPolicySettings.ReadWrite, and the signed-in user requires AI Administrator. Beta APIs are not supported for production applications." Keep the existing Office Apps Administrator UI qualification. Cite https://learn.microsoft.com/graph/utcm-copilot-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. Do not present t… | Source: https://learn.microsoft.com/graph/utcm-copilot-resources
- [unsupported, major] Risk assessment: Security & identity / behaviour: There is no connection change in the Word integration. | Found: Searched: Researcher agent Word canvas entry points default automatic rollout licence meter block controls; Researcher Word. Read roadmap, researcher-agent and faq-researcher; none describes connection mechanics for the Word entry points. | Fix: Replace "No change: the roadmap item describes new entry points, not a new identity or connection" with "The roadmap item describes new entry points and does not describe their identity or connection mechanics."
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The Microsoft 365 Apps admin center route is Customization > Policy Management > Create > Choose the scope > Configure Settings > Allow web search in Copilot. | Found: Under Customization, select Policy Management. On the Policy configurations page, select Create. On the Start with the basics page, enter a name (required) and a description (optional), then select Next. | Fix: Use "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow web search in Copilot". The omitted heading and basics page do not change a wizard choice, so this is not a blocker. The Cloud Policy overview documents the route; the existing manage-public-web-access link documents the final policy and is valid. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
-->
