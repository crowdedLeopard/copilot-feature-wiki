---
title: "Microsoft 365 Copilot: share agents with a Microsoft Teams team"
slug: "m365-copilot-share-agents-to-teams"
roadmapId: 557947
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Users can share an agent with a Teams team from the sharing dialog and notify the team's main channel. Launched on the web; no admin action is required, and no Teams-specific admin control is documented."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "The roadmap names no licence. Learn says recipients need the Microsoft 365 Copilot licence type that an agent's capabilities require, and that usage billing (Copilot Credits) applies to agents grounded in tenant data. Nothing specific to this feature is published."
audiences: ["m365-admin","maker","change-adoption"]
tags: ["agents","agent-builder","teams","m365-copilot","agent-governance"]
sources:
  - title: "Microsoft 365 Roadmap 557947"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557947"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Share and manage agents built in Agent Builder"
    url: "https://learn.microsoft.com/plugins/agent-builder-share-manage-agents"
    kind: "learn"
  - title: "Share agents with other users and makers (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Supported Agent resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-agent-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Agent Builder overview"
    url: "https://learn.microsoft.com/plugins/agent-builder"
    kind: "learn"
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/plugins/prerequisites"
    kind: "learn"
videos: []
related: ["declarative-agents","app-management","microsoft-copilot-studio-agent-sharing-amongst-makers"]
controls:
  - governs: "Who can share Agent Builder agents with the whole organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Sharing"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Applies to Agent Builder agents; No users still allows sharing with individuals. Preview API: applyOnce monitor on microsoft.agent.sharing. Not stated to cover Teams team sharing."
  - governs: "Which users or groups can access and install agents and plugins"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "General agent access, not specific to Teams team sharing. Preview API: applyOnce monitor on microsoft.agent.useraccess."
  - governs: "Switch for sharing an agent with a Teams team or notifying a team's main channel"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting specific to this option is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-04-10T21:45:06"
changes:
  - date: "2026-11-25"
    note: "First briefing for roadmap item 557947, which the roadmap lists as Launched; Learn does not yet describe the Teams team option itself."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 60 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 55
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "765ce76e934c71491a1f94064b64e640"
---

## What's changing

Roadmap item 557947 says users can share an agent with a Microsoft Teams team. They search for and find teams in the agent sharing dialog box, and can send a notification to the team's main channel so members know the agent has been shared and can install and start using it. The roadmap lists the status as Launched, the release phase as General Availability, the platform as Web, the cloud as Worldwide (Standard Multi-Tenant) and the target date as March CY2026.

The Microsoft 365 Copilot release notes for updates released between April 7, 2026 and April 21, 2026 list the feature under Microsoft 365 Copilot extensibility. A July 01, 2026 entry lists it again, under Microsoft 365 Copilot Studio, and its first step reads 'Open the agent sharing dialog in Copilot Studio'. Learn describes two different sharing dialogs: the one for agents built in Agent Builder (add a name, group or email, with the roles Can edit and Can chat) and the one for agents in Copilot Studio's new agent experience (individual users, security groups or the whole organisation). Neither sharing page describes a Teams team option at the time of writing (November 2026), so what follows about behaviour is the roadmap and release notes' description, and which dialog carries the option is an open question.

The roadmap describes the team option and the main-channel notification as things a user chooses in the dialog (users 'can also' send the notification). Microsoft Learn documents no admin switch for either.

## Why it matters

Sharing with a team turns a one-person decision into a group audience. The agent owner picks the team; the team's members are then told in the main channel that the agent exists and how to install it. For a service owner this is a support and adoption event: more people will try agents that have not been through an admin review, and some of them will lack the licence the agent's capabilities need.

If nobody acts, the option stays available in the dialog and each agent owner decides whether to use it. Review the existing agent sharing settings now, because the only documented sharing control covers organisation-wide sharing of Agent Builder agents, and Learn does not say that it reaches sharing with a team.

## Risk assessment

**Data exposure**
- Sharing an agent with a team gives that team's members access to the agent. Learn says access to the agent and access to its knowledge are separate: for SharePoint and OneDrive sources, existing file permissions and sensitivity labels apply, but files uploaded from a device become embedded knowledge, and anyone who can access the agent can receive responses grounded in it, subject to the content's sensitivity-label permissions. Check uploaded files before an owner shares with a team.
- The notification goes to the team's main channel, which is a shared space rather than a named list of recipients.

**Security & identity**
- Learn says that when you add a group to an Agent Builder agent it can only be a chat user (Can chat). It does not say which role a Teams team receives, so confirm that on a test agent before relying on it.
- Recipients need the Microsoft 365 Copilot licence type the agent's capabilities require; without it, using the agent might result in an error.

**Autonomy & actions**
- The roadmap description covers sharing and notification only and describes no new agent actions. Sharing is not a change to what the agent can do.

**Change & support**
- Learn says changes to the Sharing setting apply only to new sharing actions, and existing shared agents remain accessible unless the owner updates their sharing settings. Turning org-wide sharing off later will not withdraw access already given.
- Expect questions from team members who receive the notification but lack the right licence.

## Cost and licensing

The roadmap record names no licence for this feature. Learn's Agent Builder sharing page says users can only add agents shared with them when they have the type of Microsoft 365 Copilot licence required for accessing the capabilities configured in that agent, and that otherwise attempts to use the agent might result in an error.

The prerequisites page for Copilot extensibility says Microsoft 365 Copilot Chat is available to all Microsoft 365 users, and that in tenants with pay-as-you-go billing (consumed as Copilot Credits) usage billing applies to agents grounded in tenant data. A price or meter specific to sharing with a Teams team is not yet published at the time of writing.

Indirect costs are admin time to check the sharing settings and support time for team members who cannot use the agent.

## Scope

The roadmap lists the platform as Web, the cloud as Worldwide (Standard Multi-Tenant) and the release phase as General Availability, with status Launched and a target date of March CY2026. The users in scope are agent owners who share, and the members of the teams they pick.

The Agent Builder sharing and agent settings pages describe the Sharing setting as applying only to agents built with Microsoft Copilot Agent Builder. Which product's dialog carries the team option is not settled by the release notes, which list it under both Microsoft 365 Copilot extensibility and Copilot Studio.

To set the Graph-based controls below, Learn says AI Administrator is the least-privileged Microsoft Entra role for the signed-in user.

## Governance guidance

### Before rollout
- Record the current Sharing and User access settings in the Microsoft 365 admin center (rows 1 and 2 of the controls table), so you can see what is already allowed.
- Test with one agent and one small team to see which sharing dialog shows the team option and which role the team receives, before telling makers about it.
- Brief makers that sharing an agent does not share its knowledge: SharePoint and OneDrive permissions and sensitivity labels still apply, and uploaded files are embedded knowledge available to anyone with access to the agent.

### At rollout
- Tell agent owners to share only with teams whose members hold the Microsoft 365 Copilot licence type the agent's capabilities need.
- Decide whether org-wide sharing should stay on its default, All users, remembering that No users still allows sharing with specific individuals.

### After rollout
- Re-check shared agents after any change to the Sharing setting, because it applies only to new sharing actions and existing access remains.
- Watch the Microsoft 365 Copilot release notes and the two sharing pages on Learn for a description of the team option and any control for it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can share Agent Builder agents with the whole organisation</strong><br><small>Tenant</small><br><small class="controls__note">Applies to Agent Builder agents; No users still allows sharing with individuals. Preview API: applyOnce monitor on microsoft.agent.sharing. Not stated to cover Teams team sharing.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Sharing <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access and install agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">General agent access, not specific to Teams team sharing. Preview API: applyOnce monitor on microsoft.agent.useraccess.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for sharing an agent with a Teams team or notifying a team's main channel</strong><br><small>Tenant</small><br><small class="controls__note">No setting specific to this option is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn documents the Sharing setting as covering who can share agents with the organisation and as applying to Agent Builder agents. It does not say whether the setting reaches sharing with a Teams team, and no control specific to the team option or the main-channel notification is documented at the time of writing (November 2026), which row 3 records.

The Graph call is a preview Tenant Configuration Management API in the beta version. The monitor is created in applyOnce mode with the resource type microsoft.agent.sharing or microsoft.agent.useraccess, and the TCM service principal needs the CopilotPolicySettings.ReadWrite delegated permission. Sharing offers All users, No users and Specific users on the admin centre page; the Graph resource documents everyone and noOne.

## Open questions

- Which sharing dialog carries the team option: agents built in Agent Builder, Copilot Studio agents, or both? The release notes list it under both. Watch the release notes and the two Learn sharing pages.
- Does Agents > Settings > Sharing apply to sharing with a Teams team, or will a separate control be published?
- Which role does a team receive, given that Learn says a group can only be added to an Agent Builder agent as Can chat, and how is access ended for people who leave the team?
- Are SharePoint knowledge files shared automatically with team members, given that Learn says auto-sharing is supported only when sharing with specific security groups?
- Which account posts the main-channel notification, and what does it say?

<!-- rationale
risk: Medium. One share action can reach a whole team, and Microsoft Learn does not say whether the org-wide Sharing setting in the Microsoft 365 admin center applies to sharing with a team.
cost: Low. The only documented cost is admin and support time: no price or meter specific to this feature is published, and recipients need the licence the agent's capabilities require.
impact: Medium. Agent owners and the members of the teams they pick notice it, because members are told in the team's main channel when the notification is sent.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters: second paragraph / absence: The only documented agent sharing control covers organisation-wide sharing of Agent Builder agents. | Found: You configure the sharing limits for agents as a Managed Environments control in the Power Platform admin center. Only share with individuals (no security groups) ... They can't share with a security group. | Fix: Replace the second sentence with: 'Review the existing agent sharing settings now. Learn documents the organisation-wide Sharing control for Agent Builder agents, but does not state that this setting governs the Teams-team sharing option.' This removes the false claim that no other sharing controls are documented without asserting which Copilot Studio controls govern this picker. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits
- [contradicted, blocker] Governance guidance: Before rollout, third bullet; Risk assessment: Data exposure / applicability: Uploaded files are embedded knowledge available to anyone with access to the agent. | Found: Anyone who can access the agent can receive responses grounded in that content, subject to the embedded content's sensitivity-label permissions. | Fix: In the third Before rollout bullet, replace 'uploaded files are embedded knowledge available to anyone with access to the agent' with 'uploaded files are embedded knowledge that can ground responses for anyone with access to the agent, subject to the embedded content's sensitivity-label permissions'. Keep the correctly qualified Risk assessment statement. | Source: https://learn.microsoft.com/plugins/agent-builder-share-manage-agents
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Sharing is not a change to what the agent can do. | Found: Searched: 'share agent Teams sharing changes capabilities actions permissions notification main channel'; read roadmap, release notes, Agent Builder sharing and Teams channel configuration. None states that the new Teams-team share operation preserves all agent capabilities. | Fix: Remove 'Sharing is not a change to what the agent can do.' Keep the preceding, narrower statement that the roadmap describes no new agent actions.
- [contradicted, blocker] rationale: cost; front matter: licensing.notes; Cost and licensing / consistency: The rationale says admin and support time are the only documented costs, although the briefing documents capability-dependent licence requirements and usage billing. | Found: The only documented cost is admin and support time ... usage billing (Copilot Credits) applies to agents grounded in tenant data. | Fix: Replace the cost rationale with: 'Low. Sharing creates admin and support work; no separate price or meter for the sharing action is published. Using the shared agent can incur Copilot Credits under pay-as-you-go, depending on its capabilities.' This distinguishes the sharing action from subsequent agent usage without inventing a sharing charge.
- [contradicted, blocker] Why it matters: first paragraph / record: After an owner selects a team, its members are then told in the main channel that the agent exists. | Found: Users can also send a notification to the main channel of that team | Fix: Replace 'The agent owner picks the team; the team's members are then told in the main channel that the agent exists and how to install it.' with 'The agent owner picks the team and can choose to notify its main channel that the agent exists and how to install it.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api / command: POST /beta/admin/configurationManagement/configurationMonitors can apply an Agent Builder sharing baseline once. | Found: POST /admin/configurationManagement/configurationMonitors mode | monitorMode | The possible values are: monitorOnly, applyOnce, unknownFutureValue. An active applyOnce monitor runs in the background on behalf of the signed-in administrator | Fix: Keep the call. Add to its note: 'Set mode to applyOnce and baseline.resources[].properties.valueObject.organizationWideSharingAssignment.userAssignmentCategory to everyone or noOne for resourceType microsoft.agent.sharing.' The properties are documented at https://learn.microsoft.com/graph/utcm-agent-resources. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
- [supported, minor] controls[1].api / command: POST /beta/admin/configurationManagement/configurationMonitors can apply an agent user-access baseline once. | Found: POST /admin/configurationManagement/configurationMonitors Create a new configurationMonitor object that runs periodically in the background at a scheduled frequency to detect configuration drift in monitorOnly mode, or applies a desired-state baseline once in applyOnce mode. | Fix: Keep the call. Add to its note: 'Set mode to applyOnce and baseline.resources[].properties.valueObject.userAssignmentCategory to everyone or noOne for resourceType microsoft.agent.useraccess.' The properties are documented at https://learn.microsoft.com/graph/utcm-agent-resources. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
- [supported, minor] Risk assessment: Data exposure, second bullet / behaviour: A team's main channel is a shared collaboration space rather than a named recipient list. | Found: A Teams channel is a dedicated space within a team where members can engage in conversations, share files and collaborate on projects. In Teams, a standard channel is visible and accessible to all team members. | Fix: Add https://learn.microsoft.com/microsoftteams/standard-channels to sources for the statement about channel audience. | Source: https://learn.microsoft.com/microsoftteams/standard-channels
- [supported, minor] front matter: licensing.notes; Risk assessment: Security & identity; Cost and licensing; Governance guidance / licensing: The Agent Builder sharing page says recipients need the Microsoft 365 Copilot licence type required by the agent's capabilities. | Found: Users can only add agents that are shared with them when they have the type of Microsoft 365 Copilot license required for accessing the capabilities configured in that agent. | Fix: Keep this attributed to the Agent Builder page, but replace the At rollout licensing bullet with: 'Confirm recipients have the licence or billing-enabled access required for the agent's capabilities. The prerequisites page allows pay-as-you-go users to access agents without a full Copilot licence; the new Copilot Studio sharing page separately requires a Microsoft Copilot Studio per-user licence.' Both differing statements are on already cited pages: https://learn.microsoft.com/plugins/prerequisites and https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent. | Source: https://learn.microsoft.com/plugins/agent-builder-share-manage-agents
-->
