---
title: "Microsoft 365 Copilot app: redesigned navigation pane with longer chat history and quick create for Notebooks and agents"
slug: "m365-copilot-app-navigation-pane-update"
roadmapId: 518222
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The Microsoft 365 Copilot app has a reorganised navigation pane on Desktop, Mac and Web, with more chat history and shortcuts to create Notebooks and agents. It has launched; no admin action is needed beyond checking existing Notebook and agent controls."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "December CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "none"
licensing:
  model: "included"
  notes: "Part of the Copilot app. Microsoft Learn states Copilot Chat is available to users with an eligible Microsoft 365 subscription, and licensed Microsoft Copilot capabilities need a Microsoft Copilot licence. Nothing specific to this redesign is published."
audiences: ["m365-admin","change-adoption"]
tags: ["m365-copilot","copilot-chat","copilot-notebooks","agent-builder","cloud-policy","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap item 518222"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=518222"
    kind: "roadmap"
  - title: "2025 Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Admin policies for Copilot Pages and Copilot Notebooks"
    url: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Share and manage agents built in Agent Builder"
    url: "https://learn.microsoft.com/plugins/agent-builder-share-manage-agents"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Which users or groups can access and install agents and plugins (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access"
    kind: "learn"
videos: []
related: ["copilot-notebooks","cloud-policy","m365-copilot-access-sharepoint-agents-in-the-m365-copilot-app"]
controls:
  - governs: "Whether users can create and view Copilot Notebooks, and so whether the Notebooks module shows in the Copilot app"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > policy configuration > Choose the scope > Configure Settings > Create and view Copilot Pages and Copilot Notebooks"
      docs: "https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration"
    api: null
    note: "Default Enabled; Not configured behaves as Enabled. Scope is All users or a group. Requires the Office Apps admin role."
  - governs: "Which users or groups can access and install agents and plugins"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access"
    api: null
    note: "Options All users (default), No users, Specific users or groups. Controls agent access, not Agent Builder creation on its own."
  - governs: "Turning off agent creation in Agent Builder while keeping agents available"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft states admins can't disable agent creation in Agent Builder separately while keeping agents enabled."
  - governs: "Tenant-wide switch to keep the previous Copilot app navigation layout"
    scope: "tenant"
    ui: null
    api: null
    note: "The Copilot app experience settings Microsoft documents cover Search, Chat, Agents, Pages and Notebooks, Create and the Copilot key, not the navigation layout."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-18T22:30:51"
changes:
  - date: "2026-11-28"
    note: "New briefing: launched navigation redesign in the Microsoft 365 Copilot app, with the Notebook and agent access controls its new shortcuts lead to."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 64 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 59
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "dde596c420cf60521053d05e3d45f71d"
---

## What's changing

The Microsoft 365 Copilot app has a simpler navigation pane. The roadmap item lists three changes: an expanded chat history, quick actions to create new Notebooks and Agents, and grouping of features so users find them faster. It applies to the app on Desktop, Mac and Web.

Microsoft Learn does not describe roadmap item 518222 itself, so what follows about its behaviour is the roadmap's description. Microsoft's 2025 release notes describe a closely related change under a different roadmap ID (516570), released for Windows and Web in the update of December 23, 2025: the navigation pane "highlights key agents, removes clutter, and expands visible chat history beyond the previous limit of five recent chats", with chat search made more prominent. Treat that as the nearest published description, not as documentation of this item.

The roadmap item describes the change as already part of the app ("now has"), with no admin step, and Microsoft Learn documents no setting to keep the previous layout at the time of writing (November 2026). Microsoft has since renamed Microsoft 365 Copilot to Microsoft Copilot, so current Learn pages call this the Microsoft Copilot app.

The roadmap status is Launched, with a target of December CY2025, in the General Availability and Targeted Release phases, for the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

This is a layout change, so the main effect is on support and training: screenshots, how-to guides and helpdesk scripts that point users to the old navigation are out of date, and users see a longer list of past chats in the pane.

The quick actions put Notebook and agent creation one click from the navigation. They do not change who may use those features: the existing Cloud Policy setting for Copilot Notebooks and the agent **User access** setting still decide that. A tenant that has never looked at those settings is running at their defaults, under which Notebooks are available and all users can access agents, so the new shortcuts are a reasonable prompt to confirm those choices are deliberate.

## Risk assessment

**Data exposure**
- No change described: the roadmap item and the related release note describe layout, chat history and search, not new data access.

**Security & identity**
- No change: no new sign-in, identity or permission is described.

**Autonomy & actions**
- The create-agent shortcut makes agent building easier to find. Microsoft's Agent Builder page states that creating agents in Agent Builder is a core Copilot capability when agents are enabled and that admins can't disable agent creation separately while keeping agents enabled; whether this shortcut opens Agent Builder is not documented. Agent access is governed by **Agents > Settings > User access**.

**Change & support**
- Users who relied on the old layout need to relearn where features sit. Microsoft offers no documented switch to keep the previous layout, so internal guides are the only lever.
- Where Copilot Notebooks creation is disabled by Cloud Policy, Microsoft states the Notebooks module is hidden in the Copilot app; how the new create-Notebook quick action appears in that case is not documented.

## Cost and licensing

- **Licence:** the redesign is part of the Copilot app. The Microsoft Copilot requirements page states that "Microsoft Copilot Chat is available to users with an eligible Microsoft 365 subscription" and that licensed Microsoft Copilot capabilities need a Microsoft Copilot licence and a qualifying prerequisite licence. A licence specific to the navigation redesign is not yet published.
- **Meter:** no meter is documented for this change.
- **Indirect cost:** admin and helpdesk time to update user guidance and screenshots.

## Scope

- **Users:** people who use the Microsoft 365 Copilot app; which features they see in the pane depends on their licence and on tenant settings for agents and Notebooks.
- **Platforms:** Desktop, Mac and Web, as the roadmap record lists them.
- **Cloud:** Worldwide (Standard Multi-Tenant) is the only cloud the roadmap record lists.
- **Release phase:** General Availability and Targeted Release.
- **Roles:** Copilot settings in the Microsoft 365 admin center use a role such as **AI Administrator**; creating Cloud Policy settings for Microsoft 365 apps requires the **Office Apps admin** role.

## Governance guidance

### Before rollout
- Confirm the Cloud Policy value of **Create and view Copilot Pages and Copilot Notebooks** for each user group in the Microsoft 365 Apps admin center, since the new pane offers a create-Notebook shortcut.
- Confirm who can access agents under **Agents > Settings > User access** in the Microsoft 365 admin center, since the pane offers a create-agent shortcut.

### At rollout
- Update internal Copilot app guides and helpdesk scripts to show the new navigation and the longer chat history.
- Tell users that the pane now shows a longer chat history and groups features differently, and where the Notebook and agent shortcuts sit.

### After rollout
- Watch helpdesk tickets about missing Notebooks or agents and check them against the Cloud Policy and **User access** settings before treating them as faults.
- Watch Message center and the Microsoft Copilot release notes for any admin setting for the navigation pane.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can create and view Copilot Notebooks, and so whether the Notebooks module shows in the Copilot app</strong><br><small>Group</small><br><small class="controls__note">Default Enabled; Not configured behaves as Enabled. Scope is All users or a group. Requires the Office Apps admin role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › policy configuration › Choose the scope › Configure Settings › Create and view Copilot Pages and Copilot Notebooks <a href="https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access and install agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">Options All users (default), No users, Specific users or groups. Controls agent access, not Agent Builder creation on its own.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Turning off agent creation in Agent Builder while keeping agents available</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft states admins can't disable agent creation in Agent Builder separately while keeping agents enabled.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to keep the previous Copilot app navigation layout</strong><br><small>Tenant</small><br><small class="controls__note">The Copilot app experience settings Microsoft documents cover Search, Chat, Agents, Pages and Notebooks, Create and the Copilot key, not the navigation layout.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting governs the navigation layout itself; the rows below govern the features the new shortcuts lead to. Cloud Policy changes take up to 90 minutes to apply where policy configurations already existed, and up to 24 hours where none existed. The Graph copilotPolicySetting API (beta) updates tenant-level Copilot policy settings, but its supported list covers Copilot Chat pinning, open-content access, image generation, web search and Admin Copilot, not Notebooks or agent access. A Graph configurationMonitor runs periodically against tenant configuration and is not documented as changing these settings.

## Open questions

- Does the create-agent quick action open Agent Builder, and is it hidden for users who are not granted agent access under **User access**? Watch the Microsoft Copilot release notes.
- Is the create-Notebook quick action hidden when **Create and view Copilot Pages and Copilot Notebooks** is disabled, as Microsoft states the Notebooks module is? Watch the Copilot Notebooks admin policies page.
- How does the expanded chat history decide which chats it shows, and can users still pin chats in the new layout? Watch the Microsoft Copilot release notes.
- Will Microsoft publish a Learn page or Message center post for roadmap item 518222 that differs from the related release note for item 516570?

<!-- rationale
risk: Low. The redesign changes where things sit in the app; the Notebook and agent features its shortcuts lead to are already governed by existing Cloud Policy and agent access settings.
cost: Low. The only cost the sources show is admin and helpdesk time for a layout change; no licence or meter specific to the redesign is published.
impact: Medium. Everyone who uses the Microsoft 365 Copilot app on Desktop, Mac or Web sees a new layout, but the roadmap describes no capability added or removed.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: The quick actions put Notebook and agent creation one click from the navigation. | Found: Searched: Copilot app navigation pane 518222 quick actions create Notebook agent one click hidden disabled; "Microsoft 365 Copilot" "navigation" "quick actions". Read roadmap, previous-year-release-notes and Agent Builder sharing page; none states a one-click creation flow for this update. | Fix: Replace the sentence with: 'The roadmap describes quick actions in the navigation pane to create new Notebooks and agents.'
- [unsupported, major] Why it matters / behaviour: The new quick actions do not change who may use Notebooks or agents. | Found: Searched: Copilot app navigation pane 518222 quick actions create Notebook agent one click hidden disabled. Read roadmap, cpcn-admin-configuration, agent-settings and agent-builder-share-manage-agents; they document existing controls, not an unchanged-access guarantee for this update. | Fix: Replace 'They do not change who may use those features: the existing Cloud Policy setting for Copilot Notebooks and the agent User access setting still decide that' with 'Microsoft documents existing Cloud Policy controls for Copilot Notebooks and the User access setting for agent access.'
- [contradicted, blocker] Why it matters / availability: A tenant using the policy defaults has Notebooks available. | Found: If your organization disabled the creation of OneDrive, regardless of the setting noted here, these people in your organization can't create Copilot Pages or Copilot Notebooks. | Fix: Replace 'Notebooks are available' with 'the Notebooks creation policy is Enabled by default, although users whose OneDrive creation is disabled cannot create Copilot Pages or Copilot Notebooks'. The qualification is at https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
- [contradicted, blocker] Why it matters / availability: Under the default setting all users can access agents. | Found: All users - This option is the default. It means that all users in the organization can access agents and plugins, subject to the existing app policies and user assignments. | Fix: Replace 'all users can access agents' with 'all users can access agents subject to existing app policies and user assignments', as qualified at https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls / behaviour: A Graph configurationMonitor runs periodically in the background. | Found: Create a new configurationMonitor object that runs periodically in the background at a scheduled frequency. | Fix: Add https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-1.0 to sources for the configurationMonitor sentence. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-1.0
- [contradicted, minor] front matter: impact; rationale: impact / consistency: An impact rating of medium fits a default navigation change seen by everyone who uses the app. | Found: impact: "medium"; "Everyone who uses the Microsoft 365 Copilot app on Desktop, Mac or Web sees a new layout". The standard defines high as "most users, or a change to default behaviour" and medium as specific roles or one business unit. | Fix: Set impact to 'high' and replace the impact rationale with: 'High. The navigation redesign changes the default app experience on Desktop, Mac and Web.'
-->
