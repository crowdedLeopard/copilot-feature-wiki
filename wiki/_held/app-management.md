---
kind: "concept"
title: "Agent and app management: who can use which Teams app or agent?"
slug: "app-management"
summary: "The Teams admin center settings that allow, block and assign Teams apps and agents per user or group, set defaults for new ones, and sync with the Microsoft 365 admin center once a tenant is unified."
created: "2026-11-22"
updated: "2026-11-22"
version: 2
tags: ["app-management","teams","agents","third-party-apps","admin-controls","m365-admin-center","powershell"]
covers: []
sources:
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
  - title: "Unified agent and app management"
    url: "https://learn.microsoft.com/microsoftteams/uam-tac-mac"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Update-M365UnifiedTenantSettings"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365unifiedtenantsettings"
    kind: "learn"
  - title: "Get-AllM365TeamsApps"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/get-allm365teamsapps"
    kind: "learn"
  - title: "Purchase third-party Microsoft Teams apps and manage subscriptions and licenses"
    url: "https://learn.microsoft.com/microsoftteams/purchase-third-party-apps"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
related: ["facilitator","microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app","microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin","microsoft-teams-streamlined-m365-certified-app-management-in-teams-admin-center","microsoft-teams-enable-agents-for-existing-applications-in-your-organization"]
controls:
  - governs: "Which users and groups can use each app or agent (Everyone, Specific users or groups, No one)"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability > Available to"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -AppAssignmentType UsersAndGroups -OperationType Add -Groups <group-ids>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Teams Administrator role. Changes take up to 24 hours. AppAssignmentType also takes Everyone and Noone. Guests cannot use an app set to Specific users or groups."
  - governs: "Whether an individual app or agent is allowed or blocked for the organisation"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "The reference's own examples describe -IsBlocked $true as unblocking an app; test on one app first."
  - governs: "Default availability of new and unmanaged apps, by app type (Org-wide app settings)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api: null
    note: "Update-M365UnifiedTenantSettings documents a GlobalApp setting, but Microsoft has not documented which Org-wide app setting it changes; no equivalent call for this control is established."
  - governs: "Who can use built-in Teams agents such as Channel Agent and Facilitator"
    scope: "agent"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Built-in Teams agents > agent > Edit availability"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api: null
    note: "Choose everyone, specific users or groups, or no one. Not governed by the Microsoft apps org-wide setting."
  - governs: "Moving the tenant to unified agent and app management across the two admin centres"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Move to unified app management"
      docs: "https://learn.microsoft.com/microsoftteams/uam-tac-mac"
    api: null
    note: "Only a Global admin can give consent and apply the final changes. Tenants that never changed these settings are unified automatically."
  - governs: "Whether an agent is blocked for the whole organisation from the Microsoft 365 admin center"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "The API is in beta, needs the delegated CopilotPackages.ReadWrite.All permission and a Microsoft Agent 365 licence."
confidence: "medium"
dependents: 11
changes:
  - date: "2026-11-22"
    note: "First concept page for Teams and Microsoft 365 agent and app management: availability types, org-wide defaults, unified management and where each control lives."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 72 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected: removed the unsupported PowerShell call for org-wide app settings, reworded the third-party blocking guidance, and fixed the built-in agents path. Teams licence wording, auto-migration inconsistency and the checklist were also revised."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 82 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 81
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "8392243024e8967dcceed67e6a8010e2"
---

## What it is

**Agent and app management** is the set of Teams admin center settings that decide which Teams apps and agents your organisation allows, who can use each one, and what a newly published app gets by default. Access is set on each app as one of three availability types: **Everyone**, **Specific users or groups** or **No one**. Microsoft calls this *app centric management*, and it replaces app permission policies, which Microsoft describes as deprecated.

Three settings work together on the **Manage apps** page:

| Setting | What it decides |
| --- | --- |
| Org-wide app settings | The default for new apps and for apps you have not actively managed, by type: Microsoft, third-party and custom |
| Allow or Block | Whether the app is usable in the organisation at all |
| Availability | Which users and groups can use the app |

Microsoft states that to allow an agent or app you must set all of these, while any one of them can block it.

**Unified management.** Once a tenant is unified, changes to org-wide settings, app status or availability in the Teams admin center are synchronised to the Microsoft 365 admin center and the reverse, so one decision governs Teams, Outlook and Microsoft Copilot apps. Tenants that never changed these settings in either centre are unified automatically; tenants that did opt in through a wizard on **Manage apps**.

**Built-in Teams agents** such as Channel Agent and Facilitator are managed on their own page, not on **Manage apps**. The Manage apps overview directs built-in agents to Built-in Teams agents; the [Facilitator setup page](https://learn.microsoft.com/microsoftteams/facilitator-teams) still directs administrators to Teams apps > Manage apps > Facilitator > Allow or Block. For the Facilitator agent, see [/concepts/facilitator/](/concepts/facilitator/). For unified management at work, see [/features/microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app/](/features/microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app/).

## Why it matters

This is where an organisation decides which apps and agents its users can add, and for whom. Availability is set per app, so an administrator can allow one agent to a pilot group, block another for everyone and leave the rest to the org-wide defaults.

The defaults matter because they are what every app you have not touched inherits. Microsoft documents that for new organisations the default lets users install apps, and that org-wide settings apply to new apps in the Teams app store and to existing apps whose availability you did not change. A new third-party app therefore reaches users on the org-wide third-party setting, not on a decision about that app.

## Cost and licensing

Microsoft's pages on **Manage apps**, app centric management and unified management document no licence or meter for these management settings themselves (at the time of writing, November 2026). Using the Teams admin center needs a Teams Administrator role. Except for joining Teams meetings anonymously, each user in the organisation needs a Teams licence to use Teams.

Costs arise from what you manage, and those belong on the product's own page:

- **Paid third-party apps.** Licences for a third-party app's service are bought on **Manage apps**, by credit card, debit card or invoice billing. Plans and pricing appear on the app's details page in the admin center. Invoice billing needs an account with the Teams Administrator and Billing Administrator roles.
- **Frontline tailoring.** The **Show tailored apps** setting applies to users with an F licence.
- **Agent package API.** The Microsoft Graph Package Management API used to block an agent requires a Microsoft Agent 365 licence.

## Risks and limits

- **Changes are not immediate.** Availability changes take up to 24 hours and, in rare cases, up to six days to reach the client, so test a block before relying on it.
- **Migration is one-way.** Once a tenant is on app centric management, permission policies cannot be opened, edited or used, and the migration cannot be reverted.
- **Org-wide settings skip managed apps.** A change to the org-wide setting applies only to apps whose availability you did not change, so flipping the third-party toggle does not reach apps you have set individually.
- **Guests.** **Everyone** includes guests, whereas guests cannot use an app set to **Specific users or groups**, even if assigned to it.
- **Conflicting policies on auto-migration.** Where a custom policy blocked an app that the Global policy allowed, the app migrates as available to all users (none for EDU customers). The same Learn page's Understand the auto-migration process section instead describes the app as allowed for the affected user and describes policy-specific security groups; the page gives inconsistent descriptions of the conflict outcome.
- **Two admin centres out of step.** Until a tenant is unified, Microsoft says to keep blocked apps and org-wide settings synchronised in both centres. A block in the Microsoft 365 admin center Integrated apps page affects only Outlook and the Microsoft Copilot application.
- **Bulk edits need PowerShell.** The Teams admin center cannot update availability in bulk, and the group picker takes up to 99 users or groups at a time.
- **Release channel.** You can only view and manage apps deployed in the same release channel as your tenant.
- **Government clouds.** In GCC, GCC High and DoD, all third-party agents and apps are blocked by default.
- **In-app purchases.** Enabling app purchasing also turns on in-app purchasing; blocking the app prevents it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups can use each app or agent (Everyone, Specific users or groups, No one)</strong><br><small>App</small><br><small class="controls__note">Teams Administrator role. Changes take up to 24 hours. AppAssignmentType also takes Everyone and Noone. Guests cannot use an app set to Specific users or groups.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Users and groups › Select to manage who this app is installed for or available to in your organization › Availability › Edit availability › Available to <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -AppAssignmentType UsersAndGroups -OperationType Add -Groups &lt;group-ids&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an individual app or agent is allowed or blocked for the organisation</strong><br><small>App</small><br><small class="controls__note">The reference's own examples describe -IsBlocked $true as unblocking an app; test on one app first.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Default availability of new and unmanaged apps, by app type (Org-wide app settings)</strong><br><small>Tenant</small><br><small class="controls__note">Update-M365UnifiedTenantSettings documents a GlobalApp setting, but Microsoft has not documented which Org-wide app setting it changes; no equivalent call for this control is established.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can use built-in Teams agents such as Channel Agent and Facilitator</strong><br><small>Agent</small><br><small class="controls__note">Choose everyone, specific users or groups, or no one. Not governed by the Microsoft apps org-wide setting.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Built-in Teams agents › agent › Edit availability <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Moving the tenant to unified agent and app management across the two admin centres</strong><br><small>Tenant</small><br><small class="controls__note">Only a Global admin can give consent and apply the final changes. Tenants that never changed these settings are unified automatically.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Move to unified app management <a href="https://learn.microsoft.com/microsoftteams/uam-tac-mac" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation from the Microsoft 365 admin center</strong><br><small>Agent</small><br><small class="controls__note">The API is in beta, needs the delegated CopilotPackages.ReadWrite.All permission and a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Teams Administrator role is required for the Teams admin center. Only a Global admin can give consent and apply the move to unified management, though any Teams or Global admin can prepare the changes up to the review summary. The Microsoft 365 admin center Integrated apps controls are available to Global Administrators.

The controls interact: org-wide settings are the default, and an app's own availability overrides them once you save it. The org-wide third-party setting blocks new and unmanaged third-party apps; individually saved availability assignments remain intact. To block one app, use Allow or Block. Built-in Teams agents are no longer governed by the **Microsoft apps** setting.

To stop users buying third-party apps, Microsoft documents disabling purchases with the MSCommerce PowerShell module; see [Purchase third-party Teams apps](https://learn.microsoft.com/microsoftteams/purchase-third-party-apps). To watch the result, the **Usage reports** page offers a Teams app usage report, and **Manage apps** can export the app catalogue as CSV. Get-AllM365TeamsApps returns each app's status, availability and who last assigned it.

## What to check

- Review the Org-wide app settings for Microsoft, third-party and custom apps and record what each new app inherits.
- Check whether your tenant is unified, and if a **Move to unified app management** banner shows, plan who gives Global admin consent.
- Confirm the availability of Channel Agent, Facilitator and other agents on the Built-in Teams agents page.
- Test one Allow or Block change with Update-M365TeamsApp before scripting it in bulk.

## Open questions

- Which Org-wide app setting does each Update-M365UnifiedTenantSettings setting name (DefaultApp, GlobalApp, PrivateApp, EnableCopilotExtensibility) change? The reference does not map them.
- Does Update-M365TeamsApp with -IsBlocked $true block or unblock? The reference's own examples describe it as unblocking while the parameter is described as the state of the app.
- Is there a PowerShell or API call to move a tenant to unified app management, or to change built-in Teams agent availability? Microsoft documents only the admin centre routes.

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[3].api; Open questions / absence: Microsoft documents only admin-centre routes, and no PowerShell or API call, for changing built-in Teams agent availability. | Found: You can also use app centric management to allow and block, create policies, and assign users. | Fix: Set controls[3].api to powershell, call 'Update-M365TeamsApp -Id <app-id> -AppAssignmentType UsersAndGroups -OperationType Add -Groups <group-ids>', docs https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp. Add to its note: 'The Facilitator setup page documents app centric management for assigning users, whose reference documents this PowerShell operation; the Manage apps overview instead directs built-in agents to the dedicated page.' The applicability source is https://learn.microsoft.com/microsoftteams/facilitator-teams and the automation source is https://learn.microsoft.com/microsoftteams/app-centric-management. Replace the last Open questions item with 'Is there a PowerShell or API call to move a tenant to unified app management? Microsoft documents only the admin centre route.' | Source: https://learn.microsoft.com/microsoftteams/facilitator-teams
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: Built-in Teams agents; What to check / applicability: Channel Agent, Facilitator and other built-in Teams agents are managed on Built-in Teams agents, not Manage apps. | Found: Built-in Teams agents like Channel Agent, Facilitator, and other built-in agents available across chats, channels, and meetings are managed from the Built-In Teams agents page, not the Manage apps page. | Fix: After the Facilitator route discrepancy, add: 'The Channel Agent setup page likewise directs administrators to Teams apps > Manage apps > Channel Agent > Allow or Block.' Cite and add to sources https://learn.microsoft.com/microsoftteams/set-up-channel-agent-teams, titled 'Set up a Channel Agent for Microsoft Teams'. Its documented steps select Teams apps > Manage apps, select Channel Agent, and select Allow or Block in the Actions menu. | Source: https://learn.microsoft.com/microsoftteams/manage-apps
-->
