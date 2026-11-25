---
title: "Viva Engage: advanced moderation permission for corporate communicators"
slug: "microsoft-viva-advanced-moderation-access-control-for-corporate-communicators"
roadmapId: 479408
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Engage admins can grant corporate communicators a permission to use advanced moderation: AI themes, keyword monitoring and action on detected conversations. It is off by default; decide who, if anyone, should hold it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Teams and Surface Devices","Web"]
targetDate: "April CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Theme moderation requires at least 50% of users to hold the Viva Suite or Viva Employee Communications and Communities licence; keyword monitoring, detected conversations and the advanced moderation destination are included in the Microsoft 365 enterprise plan."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["viva-engage","admin-controls","ai","viva-feature-access-management","microsoft-graph","content-moderation"]
sources:
  - title: "Advanced moderation in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/manage-security-and-compliance/manage-data-compliance"
    kind: "learn"
  - title: "AI Summarization and theme extraction FAQ"
    url: "https://learn.microsoft.com/viva/engage/lmc-ai-summ-and-theme-extraction-faq"
    kind: "learn"
  - title: "Admin roles for Advanced moderation and Keyword monitoring"
    url: "https://learn.microsoft.com/viva/engage/lmc-keyword-monitoring-admin-article"
    kind: "learn"
  - title: "Enable advanced moderation from the admin center"
    url: "https://learn.microsoft.com/viva/engage/comms-dashboard-advanced-moderation"
    kind: "learn"
  - title: "Manage administrator roles in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions"
    kind: "learn"
  - title: "AI summarization in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/engage-ai-summarization"
    kind: "learn"
  - title: "View and manage analytics in Viva Engage"
    url: "https://learn.microsoft.com/viva/engage/analytics"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Use the Microsoft Graph API to work with Viva Engage"
    url: "https://learn.microsoft.com/graph/api/resources/engagement-api-overview?view=graph-rest-1.0"
    kind: "learn"
  - title: "engagementRoleMember resource type"
    url: "https://learn.microsoft.com/graph/api/resources/engagementrolemember?view=graph-rest-1.0"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 479408"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=479408"
    kind: "roadmap"
  - title: "Who holds the Corporate Communicator role in Viva Engage (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/engagementrole-post-members?view=graph-rest-1.0"
    kind: "learn"
  - title: "Whether AI Summarization, which theme moderation is built on, processes Engage threads (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy"
    kind: "learn"
videos: []
related: ["viva-feature-access-management","microsoft-viva-network-analytics-enhancements"]
controls:
  - governs: "Whether a corporate communicator has the advanced moderation permission"
    scope: "user"
    ui:
      surface: "Viva Engage admin center"
      path: "Setup & Configuration > Admin Roles"
      docs: "https://learn.microsoft.com/viva/engage/lmc-keyword-monitoring-admin-article"
    api: null
    note: "Off by default. Assigned by Verified, Network or Engage Admins per this page; the exact label of the permission on the Admin Roles page is not given."
  - governs: "Who holds the Corporate Communicator role in Viva Engage"
    scope: "user"
    ui:
      surface: "Viva Engage admin center"
      path: "Setup and configuration > Admin roles > Corporate communicator > Add user"
      docs: "https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions"
    api:
      kind: "graph"
      call: "POST /v1.0/employeeExperience/roles/{engagementRoleId}/members"
      docs: "https://learn.microsoft.com/graph/api/engagementrole-post-members?view=graph-rest-1.0"
    note: "Assigns the role only, not the advanced moderation permission. Needs EngagementRole.ReadWrite.All; native-mode networks only. The request body identifies the assignee through userId; Microsoft's HTTP example uses user@odata.bind."
  - governs: "Whether AI Summarization, which theme moderation is built on, processes Engage threads"
    scope: "tenant"
    ui:
      surface: "Viva Engage admin center"
      path: "Setup & configuration > Manage analytics > Analytics settings > Feature access management"
      docs: "https://learn.microsoft.com/viva/engage/analytics"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId <ModuleId> -FeatureId <FeatureId from Get-VivaModuleFeature> -Name <policy name> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy"
    note: "Managed by the Engage admin; supports tenant, group and user policies and user opt-out. Disabling for the tenant retroactively deletes summarisation history."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-01-31T00:15:03"
changes:
  - date: "2026-11-25"
    note: "New briefing: the off-by-default advanced moderation permission for Viva Engage corporate communicators, its licensing threshold and the role and AI Summarization controls."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected: private-community access for theme moderation now follows Microsoft's FAQ; removed two checklist steps on theme actions; added the request-body note to the Graph role row."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 78 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 76
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "c17deb6dbe0ff0584d1d2810252f75b1"
---

## What's changing

Viva Engage admins can give holders of the Corporate Communicator role a granular permission that opens advanced moderation to them. Microsoft Learn describes the permission as OFF by default, and says it lets corporate communicators create and manage AI-based moderation themes, set up and monitor keywords across the network, use the Advanced Moderation dashboard, and view and act on detected conversations, including mute, close and dismiss.

Advanced moderation sits in the Engage **Communications dashboard** and has three parts: **Theme moderation**, backed by a large language model that monitors and optionally mutes conversations matching themes you define; **Keyword monitoring**, which detects exact terms or phrases; and **Detected conversations**, which gathers matched threads for triage. Theme moderation is built on the Viva Engage AI Summarization service, supports up to 30 themes at a time, and does not detect older conversations retroactively when a theme is added.

The permission is assigned in the Viva Engage admin center under **Setup & Configuration > Admin Roles**. The two Learn pages differ on who can assign it: the advanced moderation page names Network admins and Verified admins, while the admin roles article for advanced moderation adds Engage Admins.

The roadmap item lists the feature as **In development** with a target of **April CY2025**, for general availability in the Worldwide (Standard Multi-Tenant) cloud on Teams and Surface Devices and Web. Microsoft Learn already documents the permission and how to assign it, so the record and the documentation disagree on status; check your own Engage admin center.

## Why it matters

This moves a network-wide moderation capability from admins to communicators. A corporate communicator who holds the permission can define AI themes that scan conversations across the network, route matches to people by email and auto-mute matching threads. Learn says muting does not notify users, and that muted conversations leave the Home feed, storylines feed and email digests while staying discoverable through notifications, search and other feeds. That is a quiet way to reduce the reach of employees' posts, so the people who hold it, and the themes they set, deserve the same scrutiny as admin access.

If nobody acts, nothing changes: the permission is off until an admin assigns it. The decision is whether communications teams should run moderation themselves, and if so which named people, with what written rules for themes and muting.

## Risk assessment

**Data exposure**
- Theme moderation is built on the AI Summarization service, which Learn says controls all AI data processing for the network and is enabled by default for all users. Granting this permission adds communicators as people who can direct that processing towards chosen themes; the AI Summarization control (table row 3) governs whether processing happens at all.
- Detected conversations stay visible in the advanced moderation pages for 30 days; after that they are found through network export, eDiscovery or Engage search. Microsoft says AI summarization and theme extraction only access content within communities and groups each user has permission to view, and do not expose private-community content to unauthorized users ([AI Summarization and theme extraction FAQ](https://learn.microsoft.com/viva/engage/lmc-ai-summ-and-theme-extraction-faq)).

**Security & identity**
- The permission rides on the Corporate Communicator role, which Engage admins, network admins, verified admins and other corporate communicators can assign. A communicator can therefore add further communicators; whether a communicator can also grant the advanced moderation permission is not stated, as the pages name only admin roles for it.

**Autonomy & actions**
- Auto-mute acts on matching conversations without a person reviewing each one, and its quality depends on how themes are worded. Theme moderation can also block new posts, comments or replies that match a theme; Learn says admins configure blocking and that blocks do not apply to network admins, corporate communicators or designated leaders.

**Change & support**
- Employees whose threads are muted are not told, so expect support questions about posts that seem to have lost reach. Agree who answers them before granting the permission.

## Cost and licensing

The advanced moderation page states that **theme moderation requires at least 50% of users in your organization to have the Viva Suite license, or the Viva Employee Communications and Communities license**, and that keyword monitoring, detected conversations and the overall advanced moderation destination are included in the Microsoft 365 enterprise plan ([Advanced moderation in Viva Engage](https://learn.microsoft.com/viva/engage/manage-security-and-compliance/manage-data-compliance)). The threshold is a tenant condition, not a per-communicator assignment.

The Engage admin roles page says Viva Engage admin roles other than Global and Engage administrators can administer premium features without an assigned premium licence ([Manage administrator roles in Viva Engage](https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions)). No meter is documented for the permission or for theme moderation at the time of writing (November 2026). The indirect cost is people's time: writing and reviewing themes, triaging detected conversations, and handling questions about muted posts.

## Scope

- **Who receives it:** holders of the Corporate Communicator role in Viva Engage, once an admin assigns the permission.
- **Who assigns it:** Network admins and Verified admins per the advanced moderation page; Verified Admins, Network Admins and Engage Admins per the admin roles article.
- **Cloud:** the roadmap lists Worldwide (Standard Multi-Tenant) only.
- **Platforms:** Teams and Surface Devices, and Web, per the roadmap.
- **Prerequisite for themes:** the 50% Viva licensing threshold above, and AI Summarization left enabled for the users whose conversations are to be checked.
- **Status:** In development, target April CY2025 on the roadmap; Learn already documents the permission.

## Governance guidance

### Before rollout
- List current corporate communicators in the Viva Engage admin center (Setup and configuration > Admin roles > Corporate communicator) and decide which, if any, should get advanced moderation.
- Confirm the tenant meets the 50% Viva Suite or Employee Communications and Communities threshold before promising AI themes to the communications team.
- Check the AI Summarization setting (Setup & configuration > Manage analytics > Analytics settings > Feature access management) and do not disable it for the tenant without reading the warning that history data is retroactively deleted.

### At rollout
- Assign the advanced moderation permission in Setup & Configuration > Admin Roles to the named communicators only.
- Tell the support desk that muted threads leave the Home feed and digests without notifying the author.

### After rollout
- Review the Admin Roles list each quarter and remove the permission from communicators who no longer moderate.
- Review the theme list against the 30-theme limit and retire themes that produce noise.
- Use network export or eDiscovery for conversations older than 30 days, which drop out of the advanced moderation pages.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a corporate communicator has the advanced moderation permission</strong><br><small>User</small><br><small class="controls__note">Off by default. Assigned by Verified, Network or Engage Admins per this page; the exact label of the permission on the Admin Roles page is not given.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Setup &amp; Configuration › Admin Roles <a href="https://learn.microsoft.com/viva/engage/lmc-keyword-monitoring-admin-article" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who holds the Corporate Communicator role in Viva Engage</strong><br><small>User</small><br><small class="controls__note">Assigns the role only, not the advanced moderation permission. Needs EngagementRole.ReadWrite.All; native-mode networks only. The request body identifies the assignee through userId; Microsoft's HTTP example uses user@odata.bind.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Setup and configuration › Admin roles › Corporate communicator › Add user <a href="https://learn.microsoft.com/viva/engage/eac-key-admin-roles-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/employeeExperience/roles/{engagementRoleId}/members</code> <a href="https://learn.microsoft.com/graph/api/engagementrole-post-members?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether AI Summarization, which theme moderation is built on, processes Engage threads</strong><br><small>Tenant</small><br><small class="controls__note">Managed by the Engage admin; supports tenant, group and user policies and user opt-out. Disabling for the tenant retroactively deletes summarisation history.</small></td><td data-label="Admin UI"><strong>Viva Engage admin center</strong><br>Setup &amp; configuration › Manage analytics › Analytics settings › Feature access management <a href="https://learn.microsoft.com/viva/engage/analytics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId &lt;ModuleId&gt; -FeatureId &lt;FeatureId from Get-VivaModuleFeature&gt; -Name &lt;policy name&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- The advanced moderation permission is set per corporate communicator in the Viva Engage admin center. The Microsoft Graph Viva Engage role API assigns roles such as Corporate Communicator, but its role member object carries only the user and assignment date, so it does not set the advanced moderation permission at the time of writing (November 2026).
- The Graph role API is supported only for Viva Engage networks in native mode.
- Theme actions are set by whoever creates the theme, in Communications dashboard > Advanced moderation > Add theme, through the **Auto-mute** and **Email notification** toggles; blocking new content is configured per theme.
- AI Summarization is governed through Viva Feature Access Management by the Engage admin. Disabling it for the tenant stops all processing of Engage threads and retroactively deletes history data; Learn advises creating a user or group policy to avoid that. Changes generally take effect within 24 hours.

## Open questions

- Do corporate communicators with the permission see keyword monitoring matches from private communities they are not members of? Watch the advanced moderation page on Learn.
- Can a corporate communicator holding the permission configure the block-new-content action for a theme, or only admins? The page says admins configure blocking.
- Which roles may assign the permission: Network and Verified admins only, or Engage Admins too, as the two Learn pages differ?
- Are permission grants and theme changes written to the Microsoft Purview audit log, and under which activity names?
- Why does the roadmap still show In development for a permission Learn documents, and will Message center announce general availability?

<!-- rationale
risk: Low. The advanced moderation permission is off by default, so nothing changes until an admin grants it; once granted, a communicator can monitor and mute conversations across the network, so the choice of holders matters.
cost: Low. The permission is a role setting with no licence of its own published; theme moderation needs at least 50% of users on Viva Suite or Viva Employee Communications and Communities, and keyword monitoring is in the Microsoft 365 enterprise plan.
impact: Low. Only Engage admins and the corporate communicators they choose see the change; employees notice only through moderation actions such as muted conversations.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist's instruction to review and retire moderation themes is represented in the controls table. | Found: Review the theme list against the 30-theme limit and retire themes that produce noise. | Table rows cover permission assignment, Corporate Communicator role assignment and AI Summarization, not theme management. | Fix: Remove the After rollout checklist bullet beginning 'Review the theme list against the 30-theme limit'; theme management has no corresponding controls-table row. Do not add a row as part of this correction.
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist's instruction to use network export or eDiscovery is represented in the controls table. | Found: Use network export or eDiscovery for conversations older than 30 days, which drop out of the advanced moderation pages. | No controls-table row covers network export or eDiscovery. | Fix: Remove the After rollout checklist bullet beginning 'Use network export or eDiscovery'; neither mechanism has a controls-table row. Keep the supported retrieval information in Risk assessment and do not add rows as part of this correction.
-->
