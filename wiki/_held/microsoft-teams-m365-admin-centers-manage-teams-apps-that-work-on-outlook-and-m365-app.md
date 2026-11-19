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
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "unknown"
  notes: "The Learn pages on unified agent and app management and on Teams admin center app management name the Teams Administrator role and no licence for this feature. A licence statement is not yet published."
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
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Set-CsTeamsSettingsCustomApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamssettingscustomapp"
    kind: "learn"
  - title: "Manage add-ins in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/manage-addins-in-the-admin-center"
    kind: "learn"
  - title: "Understand Microsoft Teams apps and their capabilities"
    url: "https://learn.microsoft.com/microsoftteams/apps-in-teams"
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
      path: "Teams apps > Manage apps > app > Users and groups > Availability > Edit availability"
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
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > Custom apps"
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
      path: "Settings > Integrated apps"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/manage-addins-in-the-admin-center"
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
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 50
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "c4f1d77acdea6fba0a01899bcbda10a1"
---

## What's changing

Administrators can manage Teams apps and agents that also work in Outlook and the Microsoft 365 app from either the Teams admin center (TAC) or the Microsoft 365 admin center (MAC), and the changes apply across all three clients. The roadmap item states that, before this update, changes in the Integrated apps section of the Microsoft 365 admin center affected these apps only in Outlook and the Microsoft 365 app, and changes in the Teams admin center affected only Teams.

Microsoft's Learn page says that once a tenant is unified, changes to org-wide settings, app status or availability in one admin centre are synchronised to the other. How a tenant gets there depends on its history. A tenant that never modified its org-wide defaults, app availability or block and unblock settings in either centre is unified automatically. A tenant that did modify them uses **Move to unified app management** on the **Manage apps** page; where the two centres disagree, a wizard compares the settings and lets the admin choose which centre's settings to apply. Only a Global admin can give the final consent.

Microsoft's notice MC796790, last updated 18 November 2026, sets this out in phases. Phase 1 (never-modified tenants) began rolling out at the end of September 2025. Phase 2 (modified tenants) is described as fully rolled out, with no changes applied to org-wide or app-level settings without administrator action. Phase 3 will unify automatically the tenants that have not acted; Microsoft says it will announce the timeline at least 60 days before that phase begins. The notice also describes unified installation management, which it says is generally available: for tenants whose availability is unified, installations are synchronised across both centres within 24 to 48 hours.

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

No licence or meter for unified agent and app management is stated on the pages read: the Teams admin center page on agent and app management names the Teams Administrator role as the requirement, and the unified management page names no licence. A licence statement for this feature is not yet published. Licences or fees for individual third-party apps are a separate matter set by their publishers.

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
- Confirm installation assignments match in both centres, which Microsoft says synchronise within 24 to 48 hours of unified availability.
- Watch Message center for the Phase 3 timeline notice, which Microsoft says it will give at least 60 days ahead.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Moving the tenant to unified agent and app management</strong><br><small>Tenant</small><br><small class="controls__note">Applies to tenants with modified settings; only a Global admin can give consent and apply the final changes.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Move to unified app management <a href="https://learn.microsoft.com/microsoftteams/uam-tac-mac" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an individual Teams app or agent is allowed or blocked</strong><br><small>App</small><br><small class="controls__note">After unification, Microsoft's page says status changes in either admin centre are synchronised to the other.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app ID&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups an app or agent is available to</strong><br><small>App</small><br><small class="controls__note">Microsoft's page says availability cannot be updated in bulk in the Teams admin center but can be through PowerShell.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Users and groups › Availability › Edit availability <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app ID&gt; -AppAssignmentType UsersAndGroups -OperationType Add -Groups &lt;group IDs&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether custom apps can be uploaded and made available (org-wide Custom apps switch)</strong><br><small>Tenant</small><br><small class="controls__note">Covers the Custom apps switch only, not the Microsoft apps or Third-party apps switches on the same pane.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › Custom apps <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsSettingsCustomApp -isSideloadedAppsInteractionEnabled $True</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamssettingscustomapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>App and agent availability from the Microsoft 365 admin center side</strong><br><small>App</small><br><small class="controls__note">Microsoft's page says a unified tenant can manage agents and apps on the Integrated apps page and changes sync to the Teams admin center.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated apps <a href="https://learn.microsoft.com/microsoft-365/admin/manage/manage-addins-in-the-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Unification is a tenant-wide step; after it, the per-app and org-wide controls below are shared between the two centres. Microsoft documents no PowerShell or API operation for the unification step itself at the time of writing (November 2026), so it is done in the Teams admin center.

The PowerShell cmdlets listed are the Teams module's documented ways to set app state and availability. Microsoft's page does not say how each call appears in the Microsoft 365 admin center. The cmdlet for the org-wide **Custom apps** switch covers that switch only; no cmdlet for the other org-wide switches is listed here. The Teams Administrator role is the role Microsoft names for the Teams admin center; roles for the Integrated apps page are not covered here.

## Open questions

- When will Phase 3 (automatic unification of tenants that have not acted) begin? Microsoft says the timeline will come at least 60 days beforehand; watch MC796790 in Message center.
- Which Microsoft 365 admin center roles can change app availability on the Integrated apps page once a tenant is unified, and how do they interact with the Teams Administrator role? Not covered on the pages read.
- Which licence, if any, does unified agent and app management depend on? A licence statement is not yet published.
- Is there a documented way to script the move to unified app management, or to confirm a tenant's unification state, other than the Teams admin center?

<!-- rationale
risk: Medium. After unification a change in either admin centre is synchronised to the other, and Microsoft plans an automatic Phase 3 for tenants that have not unified, with a date not yet announced.
cost: Low. The only cost the sources show is admin time to align settings; a licence or meter for unified management is not yet published.
impact: Medium. Admins of both centres see the change first; users notice only if aligning settings changes which apps or agents are available to them in Teams, Outlook or the Microsoft 365 app.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: MC796790 update date / record: MC796790 was last updated on 18 November 2026. | Found: Published 2024-05-29; last updated 2026-11-19; Microsoft's end date 2026-12-31 | Fix: Replace 'last updated 18 November 2026' with 'including a text update dated 18 November 2026'. The supplied notice metadata says last updated 19 November 2026, while the notice body begins 'Updated November 18, 2026'.
- [contradicted, blocker] controls[4].ui; Governance controls table / admin-path: Settings > Integrated apps is the complete MAC path to the app availability control, documented by the add-in management page. | Found: Select Settings, then select Integrated Apps. Select the Available Apps list. Next, select the app you want to edit. This launches the app's overview pane. Scroll down and select Edit Users or select the Users tab in the overview pane. | Fix: Replace the row's UI path with 'Settings > Integrated Apps > Available Apps > app > Users > Specific users/group in the organization can install' and its docs URL with https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365. The existing Office add-in reference does not document Teams cross-application app availability. Retain the existing unification qualification and synchronization source. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365
- [contradicted, blocker] front matter: defaultState / default: The feature's overall default state is admin-opt-in. | Found: If your tenant never modified its org-wide defaults, app availability, or app block or unblock settings in either TAC or MAC, then your tenant's app availability policies are automatically unified. | Fix: Set defaultState to 'on', not 'admin-opt-in'. Preserve the body qualification that never-modified tenants unify automatically, while modified tenants currently choose alignment in Phase 2 and are subject to future automatic Phase 3 unification. | Source: https://learn.microsoft.com/microsoftteams/uam-tac-mac
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Why it matters; Risk assessment; controls notes; rationale: risk / behaviour: After unification, org-wide settings, app status and availability changes synchronize automatically in both directions. | Found: After your tenant is unified, all changes to org-wide settings, agent app, status, or availability in TAC are automatically synchronized in MAC and vice versa. | Fix: Add: 'The cross-application app guide still describes separate Teams and Microsoft 365 admin center settings; the unified-management guide describes synchronization after tenant unification.' Cite https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365 alongside the existing unified-management source. | Source: https://learn.microsoft.com/microsoftteams/uam-tac-mac
- [supported, minor] What's changing; Governance guidance: After rollout / record: Installations synchronize across the centers within 24 to 48 hours after availability unification. | Found: app and agent installations are also unified across the Microsoft 365 admin center (MAC) and Teams admin center (TAC) within 24–48 hours of completing availability unification. | Fix: In both occurrences, qualify installations as 'supported app and agent installations'. The same notice states: 'Existing installation assignments for supported apps and agents will be synchronized across both admin centers.'
- [supported, minor] Cost and licensing: third-party app fees / licensing: Individual third-party apps can have their own publisher-defined licenses and fees. | Found: Some apps may have a Private plan. Private plans are special pricing that your organization can separately negotiate with an app developer. | Fix: Add https://learn.microsoft.com/microsoftteams/purchase-third-party-apps to sources for the sentence about individual third-party app licenses and fees. | Source: https://learn.microsoft.com/microsoftteams/purchase-third-party-apps
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Per-app availability is reached through Teams apps > Manage apps > app > Users and groups > Availability > Edit availability. | Found: Select the Users and groups tab. Under Select to manage who this app is installed for or available to in your organization, select Availability. Select Edit availability. | Fix: Include the omitted heading: 'Teams apps > Manage apps > app > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability'. | Source: https://learn.microsoft.com/microsoftteams/app-centric-management
- [supported, minor] controls[3].ui; Governance controls table / admin-path: The org-wide Custom apps setting is under Teams apps > Manage apps > Actions > Org-wide app settings > Custom apps. | Found: On Manage apps page, under the Actions menu, select Org-wide app settings. Under Custom apps, turn off or turn on Let users install and use available apps by default option. | Fix: Complete the path with the switch label: 'Teams apps > Manage apps > Actions > Org-wide app settings > Custom apps > Let users install and use available apps by default'. | Source: https://learn.microsoft.com/microsoftteams/manage-apps
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: Every control the governance checklist asks readers to check has a controls-table row. | Found: Checklist: 'Confirm installation assignments match in both centres'. Table rows cover moving to unification, allow/block, availability, Custom apps and MAC availability, but not installation assignments. | Fix: Remove the checklist bullet 'Confirm installation assignments match in both centres, which Microsoft says synchronise within 24 to 48 hours of unified availability.' It has no installation-assignment row; retain the installation timing explanation in What's changing.
-->
