---
title: "Microsoft Teams: Workflows template adds tag members to channels automatically"
slug: "microsoft-teams-workflow-to-automatically-add-tag-members-to-relevant-channels"
roadmapId: 577174
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "A new Workflows template adds people to selected channels when they join a team tag. It is optional and runs only once a team owner configures it, so no admin action is required; review Workflows and data policy settings first."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","Mac","Web"]
targetDate: "March CY2027"
previewDate: "November CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this template. Learn says Microsoft 365 seeded licences entitle users to cloud flows with standard connectors, but the connectors this template uses are not published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","channels","power-automate","automation","data-policies"]
sources:
  - title: "Microsoft 365 Roadmap item 577174"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577174"
    kind: "roadmap"
  - title: "MC1540351: (Updated) Microsoft Teams: Automatically add tag members to channels with Workflows"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1540351"
    kind: "message-center"
  - title: "Manage tags in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/manage-tags"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Create flows in Microsoft Teams"
    url: "https://learn.microsoft.com/power-automate/teams/teams-app-create"
    kind: "learn"
  - title: "Install the Workflows app in Microsoft Teams"
    url: "https://learn.microsoft.com/power-automate/teams/install-teams-app"
    kind: "learn"
  - title: "Manage data policies"
    url: "https://learn.microsoft.com/power-platform/admin/prevent-data-loss"
    kind: "learn"
  - title: "Deep dive on specific licenses"
    url: "https://learn.microsoft.com/power-platform/admin/power-automate-licensing/deep-dive-on-specific-license"
    kind: "learn"
  - title: "Which connectors flows in the default environment may use (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectortobusinessdatagroup?view=pa-ps-latest"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether the Workflows app is allowed in the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api: null
    note: "Learn says flows created from the Workflows app need the app enabled here. Blocking it blocks all Workflows templates, not only this one. Needs the Teams Administrator role."
  - governs: "Which connectors flows in the default environment may use"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy"
      docs: "https://learn.microsoft.com/power-platform/admin/prevent-data-loss"
    api:
      kind: "powershell"
      call: "Add-ConnectorToBusinessDataGroup -PolicyName <policy name> -ConnectorName <connector name>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectortobusinessdatagroup?view=pa-ps-latest"
    note: "Applies to flows in environments in the policy's scope. The connectors this template uses are not yet published. The cmdlet classifies a connector as Business and is one example of the policy cmdlets."
  - governs: "Who can manage tags, whose membership triggers the workflow"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams > Teams settings > Tagging > Who can manage tags"
      docs: "https://learn.microsoft.com/microsoftteams/manage-tags"
    api: null
    note: "Learn says PowerShell cannot manage tags. Not stated whether this setting also governs who can configure the workflow."
  - governs: "Tenant switch for the Join member to channel template alone"
    scope: "tenant"
    ui: null
    api: null
    note: "No template-specific setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-19"
    note: "First briefing for this item, including MC1540351's updated general availability rollout of mid-March 2027."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 60 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 53
  unconfirmed: 2
  contradicted: 5
  attempts: 1
  hash: "2263c0634a525ab59e7cbc8a059a757c"
---

## What's changing

Microsoft is adding a Workflows app template called **Join member to channel when user is added to tag**. Once a team owner configures it, the workflow runs whenever a user is added to a team tag and adds that user to the channels selected in the workflow, so nobody has to add the person to each channel by hand. Microsoft's notice MC1540351 describes it as useful for location-based or project-based groups, where tags map to sites, regions or projects.

The notice says the template applies to channels that all team members can access by default: standard channels, and shared channels that are shared with everyone on the team. It says nothing changes by default: the template is optional and does not run until someone in a team configures it. Microsoft Learn does not describe this template yet, so what this page says about its behaviour comes from the roadmap item and MC1540351.

The roadmap item is **In development**, with a preview target of November CY2026 and a general availability target of March CY2027, for Worldwide (Standard Multi-Tenant) on Android, Desktop, Mac and Web. MC1540351 (updated 2026-11-19) gives Targeted Release as a gradual rollout from November 2026 through January 2027. It gives General Availability (Worldwide) as starting mid-March 2027, previously mid-December 2026, and completing by end of March 2027. The notice sets no act-by date.

## Why it matters

Channel membership is currently something owners keep in step by hand as groups change. This template moves that step into a Power Automate flow created from the Workflows app, so the tag becomes the thing that decides who is in which channels. Microsoft documents no switch for this template alone (see the controls table), so the choice sits with team owners unless the Workflows app is blocked.

The notice says nothing changes by default, so no source says existing behaviour changes if nobody acts. The practical question for an administrator is whether the Workflows app, the Power Automate flows it creates and the data policies covering them are set the way you want before owners start building membership automation on tags.

## Risk assessment

**Data exposure**
- The notice limits the template to channels that all team members can access by default (standard channels and shared channels shared with everyone on the team). Microsoft has not said whether the workflow can be pointed at other channel types, so confirm this before relying on it to keep private content separate.
- Flows made in the Workflows app are stored in the organisation's default environment, so a Power Platform data policy that covers the default environment applies to them. Which connectors the template uses is not yet published.

**Security & identity**
- Microsoft has not said which account the workflow runs as or who owns the flow. Confirm this, because it decides who can edit or stop the membership automation when the owner leaves.
- Tags can be created and assigned by team owners and, with the Microsoft default, team members. Anyone who can add a person to a tag can therefore trigger the workflow once it is configured. The **Who can manage tags** setting is the tenant control over that.

**Autonomy & actions**
- Once configured, the workflow adds users to channels without a person approving each addition. A tag added by mistake changes channel membership straight away.
- Microsoft's notice does not say what happens to channel membership when a user is removed from the tag. Treat removal as unconfirmed.

**Change & support**
- General availability moved from mid-December 2026 to mid-March 2027 in the updated notice, so plan against the new dates.
- A tag can have up to 200 members and a team up to 200 tags. Large location-based groups may meet those limits.

## Cost and licensing

Microsoft has not yet published a licence statement or meter for this template. MC1540351 describes it as part of the Workflows app and Power Automate and does not mention a charge.

Learn's Power Automate licensing page says users with seeded licences from Microsoft 365 can create and run cloud flows with standard connectors ([Deep dive on specific licenses](https://learn.microsoft.com/power-platform/admin/power-automate-licensing/deep-dive-on-specific-license)). The Workflows app page lists an account with access to Microsoft Teams as its only prerequisite and names no licence. Which connectors this template uses is not yet published, so whether that standard-connector entitlement is enough for it is unconfirmed. Indirect cost is admin and team-owner time to set up and review the workflows.

## Scope

**Who:** Team owners who choose to configure the workflow, and Teams users who are added to team tags associated with configured workflows (MC1540351). The notice lists Microsoft Teams, the Workflows app and Power Automate as the services involved.

**Where:** The roadmap item lists Worldwide (Standard Multi-Tenant) and the platforms Android, Desktop, Mac and Web. Release phases are Targeted Release and General Availability. Learn states that the Workflows app is not available in Microsoft 365 Government tenants.

**Prerequisites:** The Workflows app must be enabled in the Teams admin center for flows created from it to work. Flows created from the Workflows app are located in the organisation's default environment.

## Governance guidance

### Before rollout
- Check whether the Workflows app is allowed in your organisation in the Teams admin center (Teams apps > Manage apps), as MC1540351 recommends confirming that this template is permitted.
- Review the data policies that cover the default environment, because flows made in the Workflows app are created there, and decide whether the template's connectors fit them once Microsoft publishes the list.
- Set **Who can manage tags** to a specific value rather than **Microsoft default**, since tag changes are what trigger the workflow.

### At rollout
- Tell team owners that the template is optional, that it adds members to selected channels, and that it works for standard channels and shared channels shared with the whole team.
- Pilot it in one team with a location-based or project-based tag before encouraging wider use.

### After rollout
- Review which teams have configured the workflow and who owns each flow.
- Check tag sizes against the 200-member tag limit for groups that grow.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Workflows app is allowed in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Learn says flows created from the Workflows app need the app enabled here. Blocking it blocks all Workflows templates, not only this one. Needs the Teams Administrator role.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which connectors flows in the default environment may use</strong><br><small>Environment</small><br><small class="controls__note">Applies to flows in environments in the policy's scope. The connectors this template uses are not yet published. The cmdlet classifies a connector as Business and is one example of the policy cmdlets.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy <a href="https://learn.microsoft.com/power-platform/admin/prevent-data-loss" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorToBusinessDataGroup -PolicyName &lt;policy name&gt; -ConnectorName &lt;connector name&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectortobusinessdatagroup?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can manage tags, whose membership triggers the workflow</strong><br><small>Tenant</small><br><small class="controls__note">Learn says PowerShell cannot manage tags. Not stated whether this setting also governs who can configure the workflow.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams › Teams settings › Tagging › Who can manage tags <a href="https://learn.microsoft.com/microsoftteams/manage-tags" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for the Join member to channel template alone</strong><br><small>Tenant</small><br><small class="controls__note">No template-specific setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No tenant switch specific to this template is documented at the time of writing (November 2026). The nearest controls are the Workflows app allow or block, the data policies that cover the default environment, and the tag management setting. None is described by Microsoft as governing this template, so confirm each against the template once it is documented.

The Teams admin center needs the Teams Administrator role. Creating tenant-level data policies needs the Power Platform Administrator role.

## Open questions

- Which connectors and which account does the **Join member to channel when user is added to tag** workflow use, and what licence does it need? Watch the Workflows app documentation on Microsoft Learn.
- What happens to channel membership when a user is removed from the tag? Watch MC1540351 for updates.
- Is there a tenant-level switch for this template apart from blocking the whole Workflows app? Watch the Teams admin center documentation.
- Can the workflow target channel types other than standard channels and shared channels shared with everyone on the team? Watch MC1540351 for further clarification.

<!-- rationale
risk: Low. Microsoft's notice MC1540351 says nothing runs until someone in a team configures the template, and it covers only channels that all team members can access by default.
cost: Low. The only cost the sources show is admin and team-owner time; the licence and connectors the template needs are not yet published.
impact: Low. Team owners who set the template up and members added to the tag notice it; nothing changes for anyone else by default, according to MC1540351.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: Security > Data and privacy > Data policy is the path to the control that configures which connectors flows may use. | Found: From the list of data policies, select a policy, and then select Edit Policy. Proceed through the steps described in Walkthrough: Create a data policy | Fix: Replace the UI path with 'Security > Settings > Data and privacy > Data policy > policy > Edit Policy > Prebuilt connectors > connector > Move to Business'. State in the note that this route classifies a selected connector as Business, matching the PowerShell example. The current path ends at the policy list, before the editing and connector-classification choices documented at https://learn.microsoft.com/power-platform/admin/prevent-data-loss. | Source: https://learn.microsoft.com/power-platform/admin/prevent-data-loss
- [contradicted, blocker] Risk assessment: Security & identity / role: Microsoft default allows team members to create and assign tags without an Education exception. | Found: If you're using Teams for Education, non-owner students can't manage tags when Who can manage tags is set to Team owners or Microsoft default. | Fix: Add immediately after the Microsoft default statement: 'In Teams for Education, non-owner students cannot manage tags when Who can manage tags is set to Team owners or Microsoft default.' Source: https://learn.microsoft.com/microsoftteams/manage-tags. | Source: https://learn.microsoft.com/microsoftteams/manage-tags
- [contradicted, blocker] Risk assessment: Security & identity / absence: Microsoft has not said who owns the flow created through the Workflows app. | Found: Add or remove other owners (but not the flow's creator), including guest users. | Fix: Narrow 'Microsoft has not said which account the workflow runs as or who owns the flow' to 'Microsoft has not documented which account this template uses for its connections.' General cloud-flow ownership is documented at https://learn.microsoft.com/power-automate/create-team-flows, and https://learn.microsoft.com/power-automate/teams/teams-app-home documents the Owners column for identifying the users who own a Workflows flow. | Source: https://learn.microsoft.com/power-automate/create-team-flows
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: An accidental tag addition changes channel membership straight away. | Found: Searched: "Join member to channel" immediately; "Join member to channel" approval. Read MC1540351 and Create flows in Microsoft Teams. The notice says automatically and promptly, but specifies no immediate processing guarantee or latency. | Fix: Replace 'A tag added by mistake changes channel membership straight away' with 'Adding someone to the tag by mistake can trigger an unintended channel addition.'
- [unsupported, major] Why it matters / behaviour: Channel membership is currently something owners keep in step by hand as groups change. | Found: Searched: Teams channel membership manual owners tags. Read MC1540351, Manage tags and Teams and channels overview excerpts. The notice says this template eliminates manual additions, not that channel membership generally requires manual maintenance. | Fix: Remove 'Channel membership is currently something owners keep in step by hand as groups change.' The following sentence already explains the planned change without making an unsupported general claim about existing behaviour.
- [contradicted, blocker] Governance controls / applicability: Microsoft has not described the app, data-policy or tag-management controls as governing this template. | Found: Facebook and Twitter connectors are altogether blocked from being used in any app or flow in non-test environments such as production or default environments. | Fix: Remove 'None is described by Microsoft as governing this template, so confirm each against the template once it is documented.' The documented data-policy scope includes flows in the default environment, where Learn says Workflows-created flows reside; a separate template-specific confirmation is not needed for that general scope. | Source: https://learn.microsoft.com/power-platform/admin/prevent-data-loss
- [contradicted, blocker] controls[2].note; Risk assessment: Security & identity; Governance guidance: Before rollout / applicability: Setting the tenant Who can manage tags value controls who can manage the triggering tags without a team-level override qualification. | Found: When you turn on this setting, team owners can set whether team members can create and manage tags within a team and the value of the Who can manage tags setting is the default value for each team. | Fix: Add to the existing tag-control note and the Before rollout tag-setting bullet: 'If Team owners can change who can manage tags is enabled, Who can manage tags is the default for each team and team owners can change it; when that setting is off, it cannot be changed per team.' Source: https://learn.microsoft.com/microsoftteams/manage-tags. | Source: https://learn.microsoft.com/microsoftteams/manage-tags
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity / behaviour: Flow ownership affects who can edit or stop the automation and its continuity when an owner leaves. | Found: Any owner of a cloud flow can perform these actions: - Manage the properties of the flow (for example, start or stop the flow, add owners, or update credentials for a connection). - Edit the definition of the flow | Fix: Cite https://learn.microsoft.com/power-automate/create-team-flows for ownership, edit and stop permissions, and the documented consequences of an owner leaving. | Source: https://learn.microsoft.com/power-automate/create-team-flows
-->
