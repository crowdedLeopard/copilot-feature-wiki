---
title: "Planner: tab support in Teams shared and private channels for GCC, GCC High and DoD"
slug: "planner-tab-support-for-shared-and-private-channels-in-microsoft-teams-in-gcc-gcc-h-and-do"
roadmapId: 581866
topic: "modern-work"
products: ["Microsoft Teams","Planner"]
summary: "Microsoft plans to let users add Planner as a tab in Teams shared and private channels in GCC, GCC High and DoD, targeted for January CY2027. Admins should check who could see plans in these channels before it lands."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "none"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Planner admin page says users with a Microsoft 365 licence are entitled to the Planner app, and the Planner service description says Teams integration requires a Microsoft Teams licence. Nothing specific to this tab is published."
audiences: ["m365-admin","service-owner","compliance","end-user"]
tags: ["planner","teams","channels","app-management","gcc","gcc-high","dod"]
sources:
  - title: "Planner: Tab support for shared and private channels in Microsoft Teams in GCC, GCC-H and DoD"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581866"
    kind: "roadmap"
  - title: "Manage the Planner app for your organization in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    kind: "learn"
  - title: "IT Admins - Private channels in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/private-channels"
    kind: "learn"
  - title: "Shared channels in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/shared-channels"
    kind: "learn"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "Microsoft Planner service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description"
    kind: "learn"
  - title: "Agents and tab apps for shared and private channels"
    url: "https://learn.microsoft.com/microsoftteams/platform/build-apps-for-shared-private-channels"
    kind: "learn"
  - title: "Manage channel policies in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-policies"
    kind: "learn"
  - title: "Whether the Planner app is available in Teams for the organisation (PowerShell)"
    url: "https://learn.microsoft.com/planner/disable-planner"
    kind: "learn"
  - title: "Whether users can create private channels (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamschannelspolicy"
    kind: "learn"
videos: []
related: ["microsoft-teams-identify-custom-apps-that-need-updates-for-teams-private-and-shared-channe","app-management","microsoft-teams-connect-teams-meeting-to-existing-planner-plans"]
controls:
  - governs: "Whether the Planner app is available in Teams for the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Planner > Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -IsPlannerAllowed $false"
      docs: "https://learn.microsoft.com/planner/disable-planner"
    note: "Coarse: blocks Planner across Teams, not only in these channels. The PowerShell switch turns off Planner for the organisation, beyond Teams."
  - governs: "Whether users can create private channels"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Teams > Teams policies > policy > Create private channels"
      docs: "https://learn.microsoft.com/microsoftteams/teams-policies"
    api:
      kind: "powershell"
      call: "Set-CsTeamsChannelsPolicy -Identity <policy name> -AllowPrivateChannelCreation $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamschannelspolicy"
    note: "Governs the channel type, not the Planner tab."
  - governs: "Whether team owners can create shared channels"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Teams > Teams policies > policy > Create shared channels"
      docs: "https://learn.microsoft.com/microsoftteams/teams-policies"
    api:
      kind: "powershell"
      call: "Set-CsTeamsChannelsPolicy -Identity <policy name> -AllowSharedChannelCreation $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamschannelspolicy"
    note: "Governs the channel type, not the Planner tab."
  - governs: "Whether shared channel owners can invite people from outside the organisation"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Teams > Teams policies > policy > Invite external users to shared channels"
      docs: "https://learn.microsoft.com/microsoftteams/teams-policies"
    api:
      kind: "powershell"
      call: "Set-CsTeamsChannelsPolicy -Identity <policy name> -AllowChannelSharingToExternalUser $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamschannelspolicy"
    note: "External members or teams already added keep access even when set to FALSE, per the cmdlet reference."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-20T23:20:27"
changes:
  - date: "2026-11-26"
    note: "New briefing: Planner tabs planned for Teams shared and private channels in GCC, GCC High and DoD, targeted for January CY2027."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 10 of 57 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 43
  unconfirmed: 4
  contradicted: 10
  attempts: 1
  hash: "0326beff36b97eb12c0053a0dedbf359"
---

## What's changing

Microsoft plans to let users add Planner as a tab in shared and private channels in Microsoft Teams, so channel members can create and manage tasks inside the channel. This roadmap item covers the US Government clouds: GCC, GCC High and DoD.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Today's documentation describes the gap it closes: the private channels admin page says "Private channels don't support connectors and tabs in Stream, Planner, Tasks by Planner and To Do, and Forms", the Teams service description says "Microsoft Planner isn't currently available to access in private channels", and Planner is not on the shared channels page's list of apps supported in shared channels at the time of writing (November 2026). In standard channels, Planner is already available as a tab.

Microsoft has not stated whether the tab appears in these channels automatically or needs an admin to enable it, nor whether existing plans can be attached or only new ones created.

The roadmap item is **In development**, release phase General Availability, targeted for **January CY2027**, on Desktop, Mac and Web. No Message Center post has been supplied for it.

## Why it matters

Teams that keep sensitive work in private channels, or work with partners in shared channels, have had to keep their task plans elsewhere. Once this lands, those plans can sit in the channel itself, which moves task titles, notes and attachments into a space whose audience differs from the parent team's. Only the members added to a shared or private channel can take part in it, and a shared channel can include people outside the organisation through Microsoft Entra B2B direct connect.

Microsoft has not stated what happens on arrival. No source says existing plans or channels change; the work is in deciding what channel owners should be told about who will be able to see a plan added in these channels before they start using it.

## Risk assessment

**Data exposure**
- A plan added to a shared channel may be seen by external participants: the shared channels page says people outside the organisation can join a shared channel through Microsoft Entra B2B direct connect. Microsoft has not documented whether those participants can open or edit the plan. The channel policy setting **Invite external users to shared channels** governs whether owners can invite them.
- For basic plans, the Planner admin page says attachments "are stored in the SharePoint location for the group", while private and shared channels have their own SharePoint sites. Microsoft has not documented where a channel tab plan's attachments go.

**Security & identity**
- No new identity or permission model is documented for this change. How a plan's membership relates to the channel's membership is not documented.

**Autonomy & actions**
- No change: the tab is a place for people to create and manage tasks; nothing acts on its own.

**Change & support**
- Expect help-desk questions from users who were told Planner does not work in private or shared channels, and from members who cannot see a plan they expected. Update any internal guidance that recommends a standard channel as the workaround.

## Cost and licensing

- **Licence:** the Planner admin page for Teams says "Users with a Microsoft 365 license are entitled to the Planner app"; premium capabilities need a Planner premium licence such as Planner Plan 1, Project Plan 3 or Project Plan 5. The Planner service description says Teams integration requires a Microsoft Teams licence.
- **Meter:** Microsoft publishes no meter or separate price for the Planner channel tab.
- **Indirect costs:** admin time to brief channel owners on visibility in shared and private channels.
- **Not yet published:** any licence note specific to the government clouds for this tab.

## Scope

- **Users:** owners and members of shared and private channels in Teams, in tenants in GCC, GCC High and DoD, as the roadmap record lists them.
- **Platforms:** Desktop, Mac and Web per the record. The Planner admin page notes limited functionality when using the Planner app on Teams mobile.
- **Prerequisites:** the Planner app must be allowed in the tenant; the Planner admin page says Planner "is enabled by default for all Teams users". Users need a Teams channel policy that lets them create shared or private channels.
- **Rollout:** not yet published beyond the January CY2027 target.
- **Related:** the shared channels page notes that several supported apps are not available in DoD and GCC High environments, so check the tab is present in your cloud once the target passes.

## Governance guidance

### Before rollout
- Check the Planner app's status in Teams admin center > Teams apps > Manage apps, and decide whether it stays allowed for the whole organisation.
- Review which Teams policies allow **Create private channels**, **Create shared channels** and **Invite external users to shared channels**, since these decide who could sit in a channel that holds a plan.
- Brief owners of private and shared channels that plans may soon be added there, and that who can see the plan is not yet documented.

### At rollout
- Test the tab in a private channel and a shared channel in a pilot team: confirm which members, and whether external participants, can open and edit the plan.
- Confirm where task attachments are stored for a plan added in each channel type before allowing sensitive content.

### After rollout
- Update internal guidance that tells users to use a standard channel for Planner.
- Watch Message center and the Planner admin page for documentation of permissions and storage for channel plans.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Planner app is available in Teams for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Coarse: blocks Planner across Teams, not only in these channels. The PowerShell switch turns off Planner for the organisation, beyond Teams.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Planner › Block <a href="https://learn.microsoft.com/microsoftteams/manage-planner-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -IsPlannerAllowed $false</code> <a href="https://learn.microsoft.com/planner/disable-planner" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can create private channels</strong><br><small>User</small><br><small class="controls__note">Governs the channel type, not the Planner tab.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams › Teams policies › policy › Create private channels <a href="https://learn.microsoft.com/microsoftteams/teams-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsChannelsPolicy -Identity &lt;policy name&gt; -AllowPrivateChannelCreation $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamschannelspolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether team owners can create shared channels</strong><br><small>User</small><br><small class="controls__note">Governs the channel type, not the Planner tab.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams › Teams policies › policy › Create shared channels <a href="https://learn.microsoft.com/microsoftteams/teams-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsChannelsPolicy -Identity &lt;policy name&gt; -AllowSharedChannelCreation $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamschannelspolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether shared channel owners can invite people from outside the organisation</strong><br><small>User</small><br><small class="controls__note">External members or teams already added keep access even when set to FALSE, per the cmdlet reference.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams › Teams policies › policy › Invite external users to shared channels <a href="https://learn.microsoft.com/microsoftteams/teams-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsChannelsPolicy -Identity &lt;policy name&gt; -AllowChannelSharingToExternalUser $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamschannelspolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting specific to the Planner tab in shared or private channels at the time of writing (November 2026); the rows above are existing controls over the Planner app or the channels it would sit in. Blocking Planner in **Manage apps** removes it from Teams for the organisation, not just from these channels. `Set-PlannerConfiguration -IsPlannerAllowed $false` turns Planner off for the organisation, and its page is addressed to a global admin and applies to basic plans in Teams and on the web and to other Planner endpoints. To allow or block Planner for specific users, the Planner admin page points to a custom app permission policy. Teams policy changes may take 24 hours to take effect, and the teams policies page says that, with **Create shared channels** on, Teams apps that are available for the organisation are also available in shared channels.

## Open questions

- Will the Planner tab appear in shared and private channels automatically, or does an admin or team owner need to enable it? Watch Message center.
- Can external participants in a shared channel (B2B direct connect) view or edit a plan added as a tab there?
- Is a plan in a private channel visible to team members outside the channel, for example through Planner on the web?
- Where are attachments for a channel plan stored: the team's SharePoint site or the channel's own site?
- Will existing plans be attachable to these channels, or only new ones created?

<!-- rationale
risk: Medium. Shared channels can include people from other organisations, and Microsoft has not yet documented who can see a plan added as a tab in a shared or private channel.
cost: None. Microsoft's Planner admin page says users with a Microsoft 365 licence are entitled to the Planner app, which is used as an app and as a channel tab; no separate charge is published for this change.
impact: Medium. Owners and members of shared and private channels notice it; standard channels already take a Planner tab.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; What's changing; Why it matters; Open questions / default: Microsoft has not stated the default or whether an administrator must enable the Planner tab in shared and private channels. | Found: Open PowerShell and run the following command to disable the Planner tab for shared and private channels in your tenant. The Planner tab is enabled by default. | Fix: Set defaultState to 'on'. Replace the repeated default gap with: 'Microsoft Learn states that the Planner tab in shared and private channels is enabled by default; the government-cloud roadmap item remains In development, targeted for January CY2027.' Cite https://learn.microsoft.com/planner/disable-planner-tab-shared-private-channels. Remove the corresponding default question. | Source: https://learn.microsoft.com/planner/disable-planner-tab-shared-private-channels
- [contradicted, blocker] controls[1].ui / admin-path: Teams > Teams policies > policy > Create private channels is the complete route to editing private-channel creation. | Found: Select the policy by clicking to the left of the policy name, and then click Edit. ... Turn on or turn off the settings that you want | Fix: Replace the path with 'Teams > Teams policies > policy > Edit > Create private channels' in the front matter and rendered table. Keep Teams admin center as the surface and https://learn.microsoft.com/microsoftteams/teams-policies as docs. | Source: https://learn.microsoft.com/microsoftteams/teams-policies
- [contradicted, blocker] controls[2].ui / admin-path: Teams > Teams policies > policy > Create shared channels is the complete route to editing shared-channel creation. | Found: Select the policy by clicking to the left of the policy name, and then click Edit. ... Create shared channels: When On, team owners can create shared channels. | Fix: Replace the path with 'Teams > Teams policies > policy > Edit > Create shared channels' in the front matter and rendered table. Keep Teams admin center as the surface and https://learn.microsoft.com/microsoftteams/teams-policies as docs. | Source: https://learn.microsoft.com/microsoftteams/teams-policies
- [contradicted, blocker] controls[3].ui / admin-path: Teams > Teams policies > policy > Invite external users to shared channels is the complete route to editing external invitations. | Found: Select the policy by clicking to the left of the policy name, and then click Edit. ... Invite external users to shared channels | Fix: Replace the path with 'Teams > Teams policies > policy > Edit > Invite external users to shared channels' in the front matter and rendered table. Keep Teams admin center as the surface and https://learn.microsoft.com/microsoftteams/teams-policies as docs. | Source: https://learn.microsoft.com/microsoftteams/teams-policies
- [contradicted, blocker] What's changing / absence: Microsoft Learn does not describe Planner tabs in shared and private channels yet. | Found: You can disable the Planner tab in shared and private channels for your tenant by using Windows PowerShell. Disabling this tab blocks users from accessing existing plans created in shared and private channels | Fix: Replace with: 'Microsoft Learn documents the Planner tab in shared and private channels, including its default and disable command. The government-cloud roadmap item remains In development, targeted for January CY2027.' Cite https://learn.microsoft.com/planner/disable-planner-tab-shared-private-channels. | Source: https://learn.microsoft.com/planner/disable-planner-tab-shared-private-channels
- [contradicted, blocker] Risk assessment: Security & identity / absence: No identity or permission model is documented for this change. | Found: Users authenticate via Microsoft Entra ID ... Within Planner, each Plan is inside a container, and access to the plan is defined by the container. ... Plans can be inside other types of containers, like a Meeting or a Channel | Fix: Replace the bullet with: 'Planner users authenticate through Microsoft Entra ID. Plan access is defined by its container; Microsoft says channel-contained plans use the channel's membership.' Cite https://learn.microsoft.com/planner/planner-security-privacy-compliance. | Source: https://learn.microsoft.com/planner/planner-security-privacy-compliance
- [contradicted, blocker] Risk assessment: Security & identity; Governance guidance; rationale: risk; Open questions / absence: Microsoft has not documented how channel-plan membership relates to channel membership or who can see the plan. | Found: Within Planner, each Plan is inside a container, and access to the plan is defined by the container. ... Plans can be inside other types of containers, like a Meeting or a Channel, and will use the membership defined by those containers. | Fix: Replace the membership gap throughout with: 'Access to a channel-contained plan follows the channel's membership, according to Microsoft's Planner security documentation.' Cite https://learn.microsoft.com/planner/planner-security-privacy-compliance. Remove the question implying that the membership relationship is wholly undocumented; retain pilot testing as advice. | Source: https://learn.microsoft.com/planner/planner-security-privacy-compliance
- [contradicted, blocker] Risk assessment: Data exposure; Open questions / absence: Microsoft has not documented whether external channel participants can open or edit the plan. | Found: Plans can be inside other types of containers, like a Meeting or a Channel, and will use the membership defined by those containers. Generally, the members of a container can create, update, and delete the tasks in the plan. | Fix: Replace with: 'Channel-contained plans use channel membership. Microsoft says container members can generally create, update and delete tasks, with further restrictions possible through Business Scenarios API customizations. Test external participants in the pilot.' Cite https://learn.microsoft.com/planner/planner-security-privacy-compliance; remove the blanket claim that access and editing are undocumented. | Source: https://learn.microsoft.com/planner/planner-security-privacy-compliance
- [unsupported, blocker] Scope: Prerequisites / role: Users need a policy allowing them to create shared or private channels to use the Planner tab. | Found: Searched: Planner tab shared private channels prerequisites users create channel policy access plans. Read teams-policies, private-channels, shared-channels and Planner tab disable docs; creation policies govern channel creation, not every member's use of an existing channel plan. | Fix: Replace with: 'Teams channel policies control who can create private or shared channels; these are channel-creation controls, not documented prerequisites for every plan user.' Cite https://learn.microsoft.com/microsoftteams/teams-policies.
- [unsupported, major] Why it matters / behaviour: Teams using private or shared channels have had to keep their task plans elsewhere. | Found: Searched: Planner tab shared private channels prerequisites users create channel policy access plans; Planner shared private channel plans existing plans attach. Read channel limitations and Planner tab disable docs; no historical period or universal requirement to keep plans elsewhere stated. | Fix: Remove 'have had to keep their task plans elsewhere'. Keep the supported forward-looking statement: 'The roadmap plans task creation and management directly within shared and private channels.'
- [unsupported, major] Why it matters / behaviour: The new tab moves task titles, notes and attachments into the channel space. | Found: Searched: Planner shared private channel plans existing plans attach attachments storage external participants membership; site:learn.microsoft.com/planner "channel" "attachments". Read roadmap, Planner security and storage docs; no movement of notes or attachments into channels stated. | Fix: Replace with: 'This brings task creation and management into a channel whose membership can differ from the parent team's.' Do not imply a storage migration or confirmed attachment capability for this channel-plan type.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Nothing acts autonomously in this feature. | Found: Searched: Planner tab shared private channels autonomous actions automation. Read roadmap, Planner app, channel-tab disable and security docs; these describe task management but do not state an absolute absence of automated actions. | Fix: Remove 'No change' and 'nothing acts on its own'. Retain: 'The roadmap describes a tab for creating and managing tasks directly within the channel.'
- [contradicted, blocker] Governance controls / absence: Microsoft Learn documents no setting specific to the Planner tab in shared or private channels. | Found: Set-PlannerConfiguration -AllowTeamsChannelContainerAccess $false ... Disabling this experience blocks access to: Any existing plans created from shared and private channels; Creation of new plans from shared and private channels | Fix: Replace the absence sentence with: 'Microsoft documents the tenant-wide command Set-PlannerConfiguration -AllowTeamsChannelContainerAccess $false to disable Planner tabs in shared and private channels. It blocks access to existing plans created from those channels and creation of new plans there; $true re-enables the experience.' Cite https://learn.microsoft.com/planner/disable-planner-tab-shared-private-channels. Do not substitute the broader IsPlannerAllowed switch for this narrower operation. | Source: https://learn.microsoft.com/planner/disable-planner-tab-shared-private-channels
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: clouds; title; summary; What's changing; Scope / record: The roadmap lists GCC, GCC High and DoD for the planned capability. | Found: "clouds": ["GCC", "GCC High", "DoD"] | Fix: Keep the roadmap scope. Add to Scope: 'Microsoft's documentation differs on current shared-channel availability: the Teams service description lists No for GCC High and DoD, while the app integration page says shared-channel tab apps are available there.' Cite https://learn.microsoft.com/office365/servicedescriptions/teams-service-description and https://learn.microsoft.com/microsoftteams/platform/build-apps-for-shared-private-channels.
- [supported, minor] Cost and licensing: Licence / licensing: Premium Planner capabilities require a premium licence such as Planner Plan 1, Project Plan 3 or Project Plan 5. | Found: Users with a Planner premium license such as Planner Plan 1, Project Plan 3, or Project Plan 5, can use the premium capabilities in Planner. | Fix: Use: 'Premium capabilities require a Planner premium licence. The Planner admin page names Planner Plan 1, Project Plan 3 and Project Plan 5; the service description now calls the latter plans Planner and Project Plan 3 and Planner and Project Plan 5, and says Plan 5 reached end of sale on May 1, 2026, with existing subscriptions continuing under applicable policies.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description. | Source: https://learn.microsoft.com/microsoftteams/manage-planner-app
- [supported, minor] controls[0].api; Governance controls / command: Set-PlannerConfiguration -IsPlannerAllowed $false turns off Planner for the organisation. | Found: Turn off Planner for your organization using PowerShell ... Set-PlannerConfiguration -IsPlannerAllowed $false | Fix: Keep the command. Add: 'The disable-Planner article's heading describes turning off Planner, but its numbered instruction describes turning off Outlook calendar sync; Microsoft's Planner admin FAQ links this article as the organisation-wide Planner disable control.' Cite https://learn.microsoft.com/planner/faq-for-planner-admins in addition to the existing reference. | Source: https://learn.microsoft.com/planner/disable-planner
- [supported, minor] What's changing: private-channel documentation / availability: The private-channel admin page states that private channels do not support Planner tabs. | Found: Private channels don't support connectors and tabs in Stream, Planner, Tasks by Planner and To Do, and Forms. | Fix: Keep the attribution, but add: 'This limitation differs from the Planner channel-tab article, which documents an enabled-by-default Planner tab in shared and private channels.' Cite https://learn.microsoft.com/planner/disable-planner-tab-shared-private-channels; do not treat the old limitation as a complete description of current behaviour. | Source: https://learn.microsoft.com/microsoftteams/private-channels
- [supported, minor] What's changing: Teams service description / availability: The Teams service description states that Planner is not currently available in private channels. | Found: Microsoft Planner isn't currently available to access in private channels. | Fix: Retain this as an attributed documentation discrepancy, not a settled current limitation. The same sentence added for the private-channel admin page can report that https://learn.microsoft.com/planner/disable-planner-tab-shared-private-channels documents the Planner tab and its enabled default. | Source: https://learn.microsoft.com/office365/servicedescriptions/teams-service-description
- [contradicted, minor] front matter: action / consistency: The action rating review describes an optional capability that needs no decision before automatic arrival. | Found: action: "review"; risk: "medium"; targetDate: "January CY2027". Schema: act-now applies when the change arrives without admin action, is targeted within about 60 days, and has a control or decision before arrival. | Fix: Set action to 'act-now': the January target is within about 60 days of November 26, 2026, Microsoft documents an enabled default and a disabling control, and the page rates risk medium.
-->
