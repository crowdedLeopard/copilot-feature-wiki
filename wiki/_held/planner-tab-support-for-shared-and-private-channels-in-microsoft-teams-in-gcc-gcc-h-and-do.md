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
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft's Planner admin page says users with a Microsoft 365 licence are entitled to the Planner app, and the Planner service description says Teams integration requires a Microsoft Teams licence. Nothing specific to this tab is published."
audiences: ["m365-admin","service-owner","compliance","end-user"]
tags: ["planner","teams","channels","app-management","gcc","gcc-high","dod"]
sources:
  - title: "Planner: Tab support for shared and private channels in Microsoft Teams in GCC, GCC-H and DoD"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581866"
    kind: "roadmap"
  - title: "Disable Planner tab in shared and private channels"
    url: "https://learn.microsoft.com/planner/disable-planner-tab-shared-private-channels"
    kind: "learn"
  - title: "Security, privacy, and compliance in Microsoft Planner"
    url: "https://learn.microsoft.com/planner/planner-security-privacy-compliance"
    kind: "learn"
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
      path: "Teams > Teams policies > policy > Edit > Create private channels"
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
      path: "Teams > Teams policies > policy > Edit > Create shared channels"
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
      path: "Teams > Teams policies > policy > Edit > Invite external users to shared channels"
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
  - date: "2026-11-26"
    note: "Corrected: Microsoft Learn documents the Planner tab in shared and private channels as on by default with a PowerShell disable command; plan access follows channel membership; Teams policy paths now include Edit; action is act-now."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 65 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 64
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "820b28d6a2ec65253782e3e9571e4f47"
---

## What's changing

Microsoft plans to let users add Planner as a tab in shared and private channels in Microsoft Teams, so channel members can create and manage tasks inside the channel. This roadmap item covers the US Government clouds: GCC, GCC High and DoD.

Microsoft Learn documents the Planner tab in shared and private channels, including its default and disable command ([Disable Planner tab in shared and private channels](https://learn.microsoft.com/planner/disable-planner-tab-shared-private-channels)). Other pages still describe a limitation: the private channels admin page says "Private channels don't support connectors and tabs in Stream, Planner, Tasks by Planner and To Do, and Forms", the Teams service description says "Microsoft Planner isn't currently available to access in private channels", and Planner is not on the shared channels page's list of apps supported in shared channels at the time of writing (November 2026). This limitation differs from the Planner channel-tab article, which documents an enabled-by-default Planner tab in shared and private channels. In standard channels, Planner is already available as a tab.

Microsoft Learn states that the Planner tab in shared and private channels is enabled by default. Microsoft has not stated whether existing plans can be attached or only new ones created.

The roadmap item is **In development**, release phase General Availability, targeted for **January CY2027**, on Desktop, Mac and Web. No Message Center post has been supplied for it.

## Why it matters

The roadmap plans task creation and management directly within shared and private channels. This brings task creation and management into a channel whose membership can differ from the parent team's. Only the members added to a shared or private channel can take part in it, and a shared channel can include people outside the organisation through Microsoft Entra B2B direct connect.

Microsoft Learn states that the Planner tab in shared and private channels is enabled by default, so expect channel members to be able to add plans there once it reaches these clouds, unless an admin disables it. The work is in deciding whether to leave the tab on and what channel owners should be told about who will be able to see a plan added in these channels before they start using it.

## Risk assessment

**Data exposure**
- A plan added to a shared channel may be seen by external participants: the shared channels page says people outside the organisation can join a shared channel through Microsoft Entra B2B direct connect. Channel-contained plans use channel membership. Microsoft says container members can generally create, update and delete tasks, with further restrictions possible through Business Scenarios API customizations. Test external participants in the pilot. The channel policy setting **Invite external users to shared channels** governs whether owners can invite them.
- For basic plans, the Planner admin page says attachments "are stored in the SharePoint location for the group", while private and shared channels have their own SharePoint sites. Microsoft has not documented where a channel tab plan's attachments go.

**Security & identity**
- Planner users authenticate through Microsoft Entra ID. Plan access is defined by its container; Microsoft says channel-contained plans use the channel's membership ([Security, privacy, and compliance in Microsoft Planner](https://learn.microsoft.com/planner/planner-security-privacy-compliance)).

**Autonomy & actions**
- The roadmap describes a tab for creating and managing tasks directly within the channel.

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
- **Prerequisites:** the Planner app must be allowed in the tenant; the Planner admin page says Planner "is enabled by default for all Teams users". Teams channel policies control who can create private or shared channels; these are channel-creation controls, not documented prerequisites for every plan user.
- **Rollout:** not yet published beyond the January CY2027 target.
- **Related:** the shared channels page notes that several supported apps are not available in DoD and GCC High environments, so check the tab is present in your cloud once the target passes.

## Governance guidance

### Before rollout
- Check the Planner app's status in Teams admin center > Teams apps > Manage apps, and decide whether it stays allowed for the whole organisation.
- Review which Teams policies allow **Create private channels**, **Create shared channels** and **Invite external users to shared channels**, since these decide who could sit in a channel that holds a plan.
- Brief owners of private and shared channels that plans may soon be added there, and that access to a channel-contained plan follows the channel's membership, according to Microsoft's Planner security documentation.

### At rollout
- Test the tab in a private channel and a shared channel in a pilot team: confirm whether external participants can open and edit the plan.
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
<tr><td data-label="Control"><strong>Whether users can create private channels</strong><br><small>User</small><br><small class="controls__note">Governs the channel type, not the Planner tab.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams › Teams policies › policy › Edit › Create private channels <a href="https://learn.microsoft.com/microsoftteams/teams-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsChannelsPolicy -Identity &lt;policy name&gt; -AllowPrivateChannelCreation $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamschannelspolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether team owners can create shared channels</strong><br><small>User</small><br><small class="controls__note">Governs the channel type, not the Planner tab.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams › Teams policies › policy › Edit › Create shared channels <a href="https://learn.microsoft.com/microsoftteams/teams-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsChannelsPolicy -Identity &lt;policy name&gt; -AllowSharedChannelCreation $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamschannelspolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether shared channel owners can invite people from outside the organisation</strong><br><small>User</small><br><small class="controls__note">External members or teams already added keep access even when set to FALSE, per the cmdlet reference.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams › Teams policies › policy › Edit › Invite external users to shared channels <a href="https://learn.microsoft.com/microsoftteams/teams-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsChannelsPolicy -Identity &lt;policy name&gt; -AllowChannelSharingToExternalUser $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamschannelspolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft documents the tenant-wide command `Set-PlannerConfiguration -AllowTeamsChannelContainerAccess $false` to disable Planner tabs in shared and private channels ([Disable Planner tab in shared and private channels](https://learn.microsoft.com/planner/disable-planner-tab-shared-private-channels)). It blocks access to existing plans created from those channels and creation of new plans there; `$true` re-enables the experience. The rows above are existing controls over the Planner app or the channels it would sit in. Blocking Planner in **Manage apps** removes it from Teams for the organisation, not just from these channels. `Set-PlannerConfiguration -IsPlannerAllowed $false` turns Planner off for the organisation, and its page is addressed to a global admin and applies to basic plans in Teams and on the web and to other Planner endpoints. To allow or block Planner for specific users, the Planner admin page points to a custom app permission policy. Teams policy changes may take 24 hours to take effect, and the teams policies page says that, with **Create shared channels** on, Teams apps that are available for the organisation are also available in shared channels.

## Open questions

- Where are attachments for a channel plan stored: the team's SharePoint site or the channel's own site?
- Will existing plans be attachable to these channels, or only new ones created?

<!-- rationale
risk: Medium. Shared channels can include people from other organisations, and access to a plan added as a tab in a shared or private channel follows the channel's membership; Microsoft Learn says the tab is enabled by default.
cost: None. Microsoft's Planner admin page says users with a Microsoft 365 licence are entitled to the Planner app, which is used as an app and as a channel tab; no separate charge is published for this change.
impact: Medium. Owners and members of shared and private channels notice it; standard channels already take a Planner tab.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].note; Governance controls table / applicability: The PowerShell switch turns off Planner for the organisation beyond Teams, with no plan-type qualification in the row. | Found: This article applies to: Basic plans in the Planner app in Teams and Web; All plans in other Planner endpoints (including Planner mobile, and Planner connectors). For premium plans, see Disable Project for the web or Roadmap from Microsoft 365. | Fix: Replace the second sentence of controls[0].note and its rendered copy with: 'The PowerShell switch applies to basic plans in Teams and Web, and to all plans in other Planner endpoints, including Planner mobile and connectors; premium plans in Teams and Web require a different control.' The scope is stated at https://learn.microsoft.com/planner/disable-planner. Keep the existing plan-type qualification in the governance prose. | Source: https://learn.microsoft.com/planner/disable-planner
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: Licence / licensing: The cited Planner Teams admin page names Planner Plan 1, Project Plan 3 and Project Plan 5 as premium licences for premium capabilities. | Found: Users with a Planner premium license such as Planner Plan 1, Project Plan 3, or Project Plan 5, can use the premium capabilities in Planner. | Fix: Remove the premium-capabilities clause. The separately cited https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description also lists Microsoft 365 Copilot entitlements, uses Planner and Project Plan 3, and says Plan 5 reached end of sale on May 1, 2026; the older admin-page wording is misleading as current purchasing guidance. | Source: https://learn.microsoft.com/microsoftteams/manage-planner-app
-->
