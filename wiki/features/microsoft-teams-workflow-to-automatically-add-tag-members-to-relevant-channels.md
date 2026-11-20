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
  - title: "Microsoft 365 Roadmap 577174"
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
  - title: "Share a cloud flow"
    url: "https://learn.microsoft.com/power-automate/create-team-flows"
    kind: "learn"
  - title: "Add-ConnectorToBusinessDataGroup"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectortobusinessdatagroup?view=pa-ps-latest"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp?view=teams-ps"
    kind: "learn"
  - title: "Set-CsTeamsTargetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamstargetingpolicy?view=teams-ps"
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
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <application ID> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp?view=teams-ps"
    note: "Learn says flows created from the Workflows app need the app enabled here. Blocking it blocks all Workflows templates, not only this one. Needs the Teams Administrator role."
  - governs: "Which connectors flows in the default environment may use"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Settings > Data and privacy > Data policy > policy > Edit Policy > Prebuilt connectors > connector > Move to Business"
      docs: "https://learn.microsoft.com/power-platform/admin/prevent-data-loss"
    api:
      kind: "powershell"
      call: "Add-ConnectorToBusinessDataGroup -PolicyName <policy name> -ConnectorName <connector name>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectortobusinessdatagroup?view=pa-ps-latest"
    note: "Applies to flows in environments in the policy's scope. This route classifies a selected connector as Business, like the PowerShell example. The connectors this template uses are not yet published."
  - governs: "Who can manage tags, whose membership triggers the workflow"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams > Teams settings > Tagging > Who can manage tags"
      docs: "https://learn.microsoft.com/microsoftteams/manage-tags"
    api:
      kind: "powershell"
      call: "Set-CsTeamsTargetingPolicy -Identity <policy name> -ManageTagsPermissionMode <mode>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamstargetingpolicy?view=teams-ps"
    note: "The Manage tags article says PowerShell cannot manage tags; the Set-CsTeamsTargetingPolicy reference documents -ManageTagsPermissionMode for tag permissions. Not stated whether it also governs who can configure the workflow."
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
  - date: "2026-11-19"
    note: "Correction: updated the data policy path and note, added the Teams for Education and per-team tag setting qualifications, narrowed the flow account statement, and removed two unsupported statements."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: added the Update-M365TeamsApp and Set-CsTeamsTargetingPolicy PowerShell calls to two controls, and reworded the flow-ownership and Microsoft default tag statements to match Microsoft Learn."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 64
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "adc8d8feb6556ca6a318f6c95290b4f1"
---

## What's changing

Microsoft is adding a Workflows app template called **Join member to channel when user is added to tag**. Once a team owner configures it, the workflow runs whenever a user is added to a team tag and adds that user to the channels selected in the workflow, so nobody has to add the person to each channel by hand. Microsoft's notice MC1540351 describes it as useful for location-based or project-based groups, where tags map to sites, regions or projects.

The notice says the template applies to channels that all team members can access by default: standard channels, and shared channels that are shared with everyone on the team. It says nothing changes by default: the template is optional and does not run until someone in a team configures it. Microsoft Learn does not describe this template yet, so what this page says about its behaviour comes from the roadmap item and MC1540351.

The roadmap item is **In development**, with a preview target of November CY2026 and a general availability target of March CY2027, for Worldwide (Standard Multi-Tenant) on Android, Desktop, Mac and Web. MC1540351 (updated 2026-11-19) gives Targeted Release as a gradual rollout from November 2026 through January 2027. It gives General Availability (Worldwide) as starting mid-March 2027, previously mid-December 2026, and completing by end of March 2027. The notice sets no act-by date.

## Why it matters

This template uses a Power Automate flow created from the Workflows app to add people to channels, so the tag becomes the thing that decides who is in which channels. Microsoft documents no switch for this template alone (see the controls table), so the choice sits with team owners unless the Workflows app is blocked.

The notice says nothing changes by default, so no source says existing behaviour changes if nobody acts. The practical question for an administrator is whether the Workflows app, the Power Automate flows it creates and the data policies covering them are set the way you want before owners start building membership automation on tags.

## Risk assessment

**Data exposure**
- The notice limits the template to channels that all team members can access by default (standard channels and shared channels shared with everyone on the team). Microsoft has not said whether the workflow can be pointed at other channel types, so confirm this before relying on it to keep private content separate.
- Flows made in the Workflows app are stored in the organisation's default environment, so a Power Platform data policy that covers the default environment applies to them. Which connectors the template uses is not yet published.

**Security & identity**
- Microsoft has not documented which account this template uses for its connections. Review flow ownership separately: any cloud-flow owner can edit or stop it, and when an owner whose credentials a connection uses is removed, the credentials for that connection need updating so the flow keeps running properly ([Share a cloud flow](https://learn.microsoft.com/power-automate/create-team-flows)).
- Tags can be created and assigned by team owners and permitted team members. The Manage tags article says Microsoft default includes owners and members, whereas the Set-CsTeamsTargetingPolicy reference equates MicrosoftDefault with EnabledTeamOwner ([Manage tags in Microsoft Teams](https://learn.microsoft.com/microsoftteams/manage-tags); [Set-CsTeamsTargetingPolicy](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamstargetingpolicy?view=teams-ps)). In Teams for Education, non-owner students cannot manage tags when **Who can manage tags** is set to Team owners or Microsoft default. Anyone who can add a person to a tag can therefore trigger the workflow once it is configured. The **Who can manage tags** setting is the tenant control over that. If **Team owners can change who can manage tags** is enabled, **Who can manage tags** is the default for each team and team owners can change it; when that setting is off, it cannot be changed per team.

**Autonomy & actions**
- Once configured, the workflow adds users to channels without a person approving each addition. Adding someone to the tag by mistake can trigger an unintended channel addition.
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
- Set **Who can manage tags** to a specific value rather than **Microsoft default**, since tag changes are what trigger the workflow. If **Team owners can change who can manage tags** is enabled, the value is the default for each team and team owners can change it; when that setting is off, it cannot be changed per team.

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
<tr><td data-label="Control"><strong>Whether the Workflows app is allowed in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Learn says flows created from the Workflows app need the app enabled here. Blocking it blocks all Workflows templates, not only this one. Needs the Teams Administrator role.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;application ID&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which connectors flows in the default environment may use</strong><br><small>Environment</small><br><small class="controls__note">Applies to flows in environments in the policy's scope. This route classifies a selected connector as Business, like the PowerShell example. The connectors this template uses are not yet published.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Settings › Data and privacy › Data policy › policy › Edit Policy › Prebuilt connectors › connector › Move to Business <a href="https://learn.microsoft.com/power-platform/admin/prevent-data-loss" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorToBusinessDataGroup -PolicyName &lt;policy name&gt; -ConnectorName &lt;connector name&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectortobusinessdatagroup?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can manage tags, whose membership triggers the workflow</strong><br><small>Tenant</small><br><small class="controls__note">The Manage tags article says PowerShell cannot manage tags; the Set-CsTeamsTargetingPolicy reference documents -ManageTagsPermissionMode for tag permissions. Not stated whether it also governs who can configure the workflow.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams › Teams settings › Tagging › Who can manage tags <a href="https://learn.microsoft.com/microsoftteams/manage-tags" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsTargetingPolicy -Identity &lt;policy name&gt; -ManageTagsPermissionMode &lt;mode&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamstargetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for the Join member to channel template alone</strong><br><small>Tenant</small><br><small class="controls__note">No template-specific setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No tenant switch specific to this template is documented at the time of writing (November 2026). The nearest controls are the Workflows app allow or block, the data policies that cover the default environment, and the tag management setting.

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

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; rationale: cost / licensing: Licensing is classified as unknown because this template's entitlement and connectors are not yet published. | Found: Users gain limited rights to use Power Automate if they inherited seeded plans from licenses tied to other Microsoft products: - Microsoft 365 (formerly Office 365) / Dynamics 365 Enterprise / Dynamics 365 Professional / Dynamics 365 Team Member | Fix: Set licensing.model to included to acknowledge the published product-level entitlement. Replace licensing.notes with: 'Microsoft 365 seeded licences include cloud flows with standard connectors. No template-specific licence statement or connector list is published, so whether this entitlement is sufficient for the template remains unconfirmed.' Retain the template-specific uncertainty in the body and cost rationale. Source: https://learn.microsoft.com/power-platform/admin/power-automate-licensing/deep-dive-on-specific-license. | Source: https://learn.microsoft.com/power-platform/admin/power-automate-licensing/deep-dive-on-specific-license
-->
