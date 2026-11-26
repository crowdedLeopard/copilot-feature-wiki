---
title: "Teams and Microsoft 365 admin centers: unified management of Teams apps and agents across Teams, Outlook and the Microsoft 365 app"
slug: "microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app"
roadmapId: 393931
topic: "governance"
products: ["Microsoft Teams","Microsoft 365 Admin Center"]
summary: "Teams apps and agents that also work in Outlook and the Microsoft 365 app can be managed from either admin centre, with changes synchronised. Never-modified tenants unify automatically; modified tenants opt in through a wizard."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "July CY2024"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "For agent management in the Microsoft 365 admin center, Microsoft requires the organisation to have the required subscription and licences for Microsoft 365, Microsoft Copilot or Microsoft Agent 365, and appropriate licences for users who create, publish or use agents. A separate licence or meter for unification itself is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","outlook","m365-admin-center","governance","app-management"]
sources:
  - title: "Microsoft 365 Roadmap 393931"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=393931"
    kind: "roadmap"
  - title: "MC796790: (Updated) Unified management of app and agent availability and installation in Teams, Outlook, and the Microsoft 365 app"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC796790"
    kind: "message-center"
  - title: "Unified agent and app management"
    url: "https://learn.microsoft.com/microsoftteams/uam-tac-mac"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Set-CsTeamsSettingsCustomApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamssettingscustomapp"
    kind: "learn"
  - title: "Understand Microsoft Teams apps and their capabilities"
    url: "https://learn.microsoft.com/microsoftteams/apps-in-teams"
    kind: "learn"
  - title: "Purchase third-party Microsoft Teams apps and manage subscriptions and licenses"
    url: "https://learn.microsoft.com/microsoftteams/purchase-third-party-apps"
    kind: "learn"
  - title: "Agent management in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview"
    kind: "learn"
videos: []
related: ["microsoft-teams-enable-agents-for-existing-applications-in-your-organization"]
controls:
  - governs: "Moving the tenant to unified agent and app management"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Move to unified app management"
      docs: "https://learn.microsoft.com/microsoftteams/uam-tac-mac"
    api: null
    note: "Applies to tenants with modified settings; only a Global admin can give consent and apply the final changes."
  - governs: "Whether an individual Teams app or agent is allowed or blocked"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app ID> -IsBlocked $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "After unification, Microsoft's page says status changes in either admin centre are synchronised to the other."
  - governs: "Which users and groups an app or agent is available to"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app ID> -AppAssignmentType UsersAndGroups -OperationType Add -Groups <group IDs>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Microsoft's page says availability cannot be updated in bulk in the Teams admin center but can be through PowerShell."
  - governs: "Whether custom apps can be uploaded and made available (org-wide Custom apps switch)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > Custom apps > Let users install and use available apps by default"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Set-CsTeamsSettingsCustomApp -isSideloadedAppsInteractionEnabled $True"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamssettingscustomapp"
    note: "Covers the Custom apps switch only, not the Microsoft apps or Third-party apps switches on the same pane."
  - governs: "App and agent availability from the Microsoft 365 admin center side"
    scope: "app"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Users > Specific users/group in the organization can install"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Microsoft's page says a unified tenant can manage agents and apps on the Integrated apps page and changes sync to the Teams admin center."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-19T01:58:21"
changes:
  - date: "2026-11-19"
    note: "First briefing for this item: covers unified Teams and Microsoft 365 admin center management of apps and agents, the phases in MC796790 and the controls in both centres."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: default state set to on (never-modified tenants unify automatically); Microsoft 365 admin center path and source corrected; MC796790 date and installation wording narrowed; two Teams admin center paths completed; installation checklist bullet removed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: the Open questions roles bullet and the controls note now state that the cross-application app guide limits its Integrated apps controls to Global Admins; third-party app purchasing page added as a source."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: licensing set to included, citing the Microsoft 365 admin center agent management requirements; the cost, licensing notes and licence open question now say only that a separate licence or meter for unification is not yet published."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 62 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 61
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "9504e0bed4c7e7baccab7d5cfd27d732"
---

## What's changing

Administrators can manage Teams apps and agents that also work in Outlook and the Microsoft 365 app from either the Teams admin center (TAC) or the Microsoft 365 admin center (MAC), and the changes apply across all three clients. The roadmap item states that, before this update, changes in the Integrated apps section of the Microsoft 365 admin center affected these apps only in Outlook and the Microsoft 365 app, and changes in the Teams admin center affected only Teams.

Microsoft's Learn page says that once a tenant is unified, changes to org-wide settings, app status or availability in one admin centre are synchronised to the other. The cross-application app guide still describes separate Teams and Microsoft 365 admin center settings; the unified-management guide describes synchronisation after tenant unification. How a tenant gets there depends on its history. A tenant that never modified its org-wide defaults, app availability or block and unblock settings in either centre is unified automatically. A tenant that did modify them uses **Move to unified app management** on the **Manage apps** page; where the two centres disagree, a wizard compares the settings and lets the admin choose which centre's settings to apply. Only a Global admin can give the final consent.

Microsoft's notice MC796790, including a text update dated 18 November 2026, sets this out in phases. Phase 1 (never-modified tenants) began rolling out at the end of September 2025. Phase 2 (modified tenants) is described as fully rolled out, with no changes applied to org-wide or app-level settings without administrator action. Phase 3 will unify automatically the tenants that have not acted; Microsoft says it will announce the timeline at least 60 days before that phase begins. The notice also describes unified installation management, which it says is generally available: for tenants whose availability is unified, supported app and agent installations are synchronised across both centres within 24 to 48 hours.

The roadmap record gives status Launched, release phase General Availability, a target of July CY2024, Worldwide (Standard Multi-Tenant) and Desktop. MC796790 names roadmap items 393931, 485712 and 503105 together.

## Why it matters

Until a tenant is unified, the two admin centres hold separate settings, and Microsoft's Learn page says to keep them synchronised by hand to avoid unexpected disruption. Unification removes that duplicate work, but it also means a block, an availability change or an org-wide switch set in one centre now reaches Outlook and the Microsoft 365 app as well as Teams. Teams administrators and Microsoft 365 administrators are effectively editing the same settings, so ownership needs agreeing.

If nobody acts, the outcome depends on the tenant. A never-modified tenant is unified anyway. For a modified tenant, Microsoft's notice says nothing changes without administrator action in Phase 2, but Phase 3 will unify tenants that have not acted, on a date Microsoft has not yet announced. Settling differences yourself, in the wizard, is the way to decide which centre's settings win.

## Risk assessment

**Data exposure**
- No new data access is described in Microsoft's pages. The change moves availability and installation settings. In the wizard's **Apply settings from** choice, selecting the wrong centre for an app could make it available, or unavailable, in Outlook and the Microsoft 365 app where the other centre had said otherwise.

**Security & identity**
- Microsoft's page says any Teams or Global admin can make updates up to the **Review summary** page, but only a Global admin can give consent and apply the final changes. Plan who holds that role at the time.
- After unification, a Teams admin's block or availability change in TAC is synchronised to MAC, so the Teams Administrator role now influences Outlook and Microsoft 365 app availability.

**Autonomy & actions**
- Synchronisation is automatic in both directions; Microsoft's page describes no approval step for each change. Phase 3 is described as automatic for tenants that have not unified.

**Change & support**
- Microsoft's notice says app installation is no longer managed through Teams app setup policies, and that installations made through those policies are not unified. Expect questions where users previously received apps by setup policy.
- Availability changes take up to 24 hours to take effect and in rare cases up to six days to reach the client, according to Microsoft's app-centric management page.

## Cost and licensing

For agent management in the Microsoft 365 admin center, Microsoft requires the organisation to have the required subscription and licences for Microsoft 365, Microsoft Copilot or Microsoft Agent 365, and appropriate licences for users who create, publish or use agents ([Agent management in Microsoft 365 admin center](https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview)). A separate licence or meter for unification itself is not yet published. Licences or fees for individual third-party apps are a separate matter set by their publishers.

The cost Microsoft's pages show is admin time: comparing org-wide and app-level settings across the two centres, resolving differences in the wizard, and communicating the result to users.

## Scope

- **Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and Desktop, release phase General Availability, status Launched.
- **Which apps:** Teams apps and agents that also work in Outlook and the Microsoft 365 app. Microsoft's Learn page describes these as Teams apps enhanced to work in Outlook and the Microsoft 365 App.
- **Which tenants:** never-modified tenants are unified automatically; modified tenants choose to unify through the wizard; Phase 3 will unify the rest on a date to be announced. Installation unification applies to tenants whose availability is unified.
- **Roles:** Teams Administrator is the role Microsoft's page names for the Teams admin center. Any Teams or Global admin can prepare the changes; only a Global admin can give consent and apply them.

## Governance guidance

### Before rollout
- Export the app catalogue from the Teams admin center (Manage apps) and compare each app's status and availability with the Integrated apps page in the Microsoft 365 admin center.
- Decide which admin centre's settings should win for org-wide defaults and for apps that differ, and agree who owns each decision.
- Identify who holds the Global admin role, because only a Global admin can give consent and apply the final changes.
- List apps that users received through Teams app setup policies, since Microsoft's notice says those installations are not unified.

### At rollout
- Open Teams apps > Manage apps and, if your tenant was modified, select **Move to unified app management**.
- Work through **Align org-wide app settings** and **Align app-level settings**, using bulk resolution for groups of apps where the choice is the same.
- Review the **Review summary** page before a Global admin accepts and finishes.

### After rollout
- Allow for the up to 24 hours (rarely up to six days) that availability changes can take to reach clients, then spot-check a few apps in Teams, Outlook and the Microsoft 365 app.
- Watch Message center for the Phase 3 timeline notice, which Microsoft says it will give at least 60 days ahead.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Moving the tenant to unified agent and app management</strong><br><small>Tenant</small><br><small class="controls__note">Applies to tenants with modified settings; only a Global admin can give consent and apply the final changes.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Move to unified app management <a href="https://learn.microsoft.com/microsoftteams/uam-tac-mac" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an individual Teams app or agent is allowed or blocked</strong><br><small>App</small><br><small class="controls__note">After unification, Microsoft's page says status changes in either admin centre are synchronised to the other.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app ID&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups an app or agent is available to</strong><br><small>App</small><br><small class="controls__note">Microsoft's page says availability cannot be updated in bulk in the Teams admin center but can be through PowerShell.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Users and groups › Select to manage who this app is installed for or available to in your organization › Availability › Edit availability <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app ID&gt; -AppAssignmentType UsersAndGroups -OperationType Add -Groups &lt;group IDs&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether custom apps can be uploaded and made available (org-wide Custom apps switch)</strong><br><small>Tenant</small><br><small class="controls__note">Covers the Custom apps switch only, not the Microsoft apps or Third-party apps switches on the same pane.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › Custom apps › Let users install and use available apps by default <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsSettingsCustomApp -isSideloadedAppsInteractionEnabled $True</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamssettingscustomapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>App and agent availability from the Microsoft 365 admin center side</strong><br><small>App</small><br><small class="controls__note">Microsoft's page says a unified tenant can manage agents and apps on the Integrated apps page and changes sync to the Teams admin center.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Users › Specific users/group in the organization can install <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Unification is a tenant-wide step; after it, the per-app and org-wide controls below are shared between the two centres. Microsoft documents no PowerShell or API operation for the unification step itself at the time of writing (November 2026), so it is done in the Teams admin center.

The PowerShell cmdlets listed are the Teams module's documented ways to set app state and availability. Microsoft's page does not say how each call appears in the Microsoft 365 admin center. The cmdlet for the org-wide **Custom apps** switch covers that switch only; no cmdlet for the other org-wide switches is listed here. The Teams Administrator role is the role Microsoft names for the Teams admin center. The cross-application app guide says its Integrated apps controls are available only to Global Admins.

## Open questions

- When will Phase 3 (automatic unification of tenants that have not acted) begin? Microsoft says the timeline will come at least 60 days beforehand; watch MC796790 in Message center.
- The cited cross-application app guide says its Integrated apps controls are available only to Global Admins. It does not explain how those permissions interact with the Teams Administrator role after unification.
- Is a separate licence or meter for unification itself planned? One is not yet published.
- Is there a documented way to script the move to unified app management, or to confirm a tenant's unification state, other than the Teams admin center?

<!-- rationale
risk: Medium. After unification a change in either admin centre is synchronised to the other, and Microsoft plans an automatic Phase 3 for tenants that have not unified, with a date not yet announced.
cost: Low. The only cost the sources show is admin time to align settings; a separate licence or meter for unification itself is not yet published.
impact: Medium. Admins of both centres see the change first; users notice only if aligning settings changes which apps or agents are available to them in Teams, Outlook or the Microsoft 365 app.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The printed Teams app availability route reaches Edit availability through Users and groups and Availability. | Found: Select the Users and groups tab. ... select Availability. ... Select Edit availability. ... Select the required option from Available to menu. | Fix: Complete controls[2].ui.path and its rendered row as 'Teams apps > Manage apps > app > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability > Available to > Specific users or groups'. This is the specific-user/group option documented at https://learn.microsoft.com/microsoftteams/app-centric-management. | Source: https://learn.microsoft.com/microsoftteams/app-centric-management
- [contradicted, minor] Governance guidance: Before rollout, setup-policy installation inventory / consistency: Every control the governance checklist asks readers to take stock of appears in the controls table. | Found: Checklist: 'List apps that users received through Teams app setup policies'. Controls: tenant unification, app blocking, app availability, Custom apps and MAC availability; no setup-policy installation-assignment row. | Fix: Remove the Before rollout bullet beginning 'List apps that users received through Teams app setup policies'. Keep the supported setup-policy installation limitation in Risk assessment.
-->
