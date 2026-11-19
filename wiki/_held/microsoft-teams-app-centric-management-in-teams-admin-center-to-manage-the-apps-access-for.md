---
title: "Microsoft Teams: app centric management of app access in the Teams admin center for DoD"
slug: "microsoft-teams-app-centric-management-in-teams-admin-center-to-manage-the-apps-access-for"
roadmapId: 569434
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft is rolling out app centric management to DoD tenants: each Teams app gets its own availability setting, replacing app permission policies. Teams admins should review how their policies will map."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["DoD"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn says each user must have a Teams licence to use Teams; the app centric management page names no separate licence or meter. A DoD-specific licence statement is not yet published."
audiences: ["m365-admin","security","change-adoption"]
tags: ["teams","app-management","admin-center","governance","powershell","policy","dod"]
sources:
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Update-M365UnifiedTenantSettings"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365unifiedtenantsettings"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 569434"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569434"
    kind: "roadmap"
videos: []
related: ["microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app","microsoft-teams-enable-agents-for-existing-applications-in-your-organization"]
controls:
  - governs: "Which users and groups can use each Teams app (availability: everyone, specific users or groups, no one)"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Users and groups > Availability > Edit availability > Available to"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -AppAssignmentType Everyone"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Teams Administrator role. -AppAssignmentType also takes UsersAndGroups and Noone; -OperationType, -Users and -Groups add or remove assignments."
  - governs: "Default availability for new apps and apps you have not actively managed (Org-wide app settings)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api: null
    note: "Separate toggles for Microsoft, third-party and custom apps. Does not override apps assigned individually, or blocked apps. Learn says all third-party apps are blocked by default in GCC, GCCH and DoD."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-19"
    note: "New briefing for the DoD roadmap item: per-app availability replaces app permission policies, with the documented migration exception and the controls that apply."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 61
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "dc846a633230e5e9ded29c0bc0e709a0"
---

## What's changing

App centric management gives each Teams app its own availability setting in the Teams admin center. The roadmap item says admins can set a default for new apps published to the Teams app store, and can set each app to "All users can install," "Specific users and groups can install," or "No user can install." It evolves the existing app permission policies, and the roadmap says those policies are migrated for existing customers to maintain existing app availability in the tenant.

Microsoft Learn documents the feature as it works in the Teams admin center. Each app holds a list of users and groups it is assigned to, and Learn names the options `Everyone`, `Specific users or groups` and `No one`. The Learn page does not say what DoD tenants receive or when, so the behaviour described here comes from the general Learn page and the roadmap text. Learn also says that in a Microsoft 365 Government GCC, GCCH and DoD deployment of Teams, all third-party agents and apps are blocked by default.

This roadmap item covers DoD only. Microsoft lists the same feature under separate items for GCC (527830, launched, January CY2026) and GCC High (569433, rolling out, November CY2026). This item's status is Rolling out, with a target of November CY2026, at General Availability on the web platform. The record's dates are targets.

## Why it matters

App centric management replaces the three settings admins used before (the org-wide third-party app setting, the app's allow or block status and the permission policy) with one setting on each app. Learn says that once an organisation moves to the feature it cannot access, edit or use permission policies, and cannot revert the migration. Any policy design that relied on per-user policy assignment has to be re-expressed as users and groups on each app.

Microsoft has not stated what a DoD tenant sees on arrival, or whether DoD tenants are migrated automatically, so the wiki rates on today's behaviour continuing and treats the migration as something to prepare for. Learn describes one case where migration changes access: an app allowed in the global policy but blocked in a custom policy becomes available to all users of the tenant (to none for EDU customers). Teams administrators in DoD should find those apps before the migration reaches their tenant.

## Risk assessment

**Data exposure**
- An app that the global app permission policy allows but a custom policy blocks becomes available to all tenant users on auto-migration, per Learn. Review custom policies for that pattern. The per-app availability setting is the control afterwards.
- The `Everyone` option covers org users, new users and guests, while `Specific users or groups` excludes guests even if they are assigned. Check which apps rely on guest access before changing availability.

**Security & identity**
- Auto-migration creates one security group for each custom app permission policy, with policy members added, and assigns those groups to the apps the policy allowed. Group membership therefore now decides app access, so whoever can edit those groups can change who gets an app.
- Learn says Org-wide app settings do not override apps whose availability you saved individually as `Specific users or groups`, `Everyone` or `No one`, nor blocked apps.

**Autonomy & actions**
- No change documented: the feature sets who can install and use apps, and Learn describes no new autonomous behaviour.

**Change & support**
- Learn says availability changes take up to 24 hours to take effect, and in rare cases up to six days to reach the client, so expect a lag in testing.
- Learn says availability cannot be updated in bulk in the Teams admin center, but can be through PowerShell. Plan scripted changes for large catalogues.
- Learn says each add action takes up to 99 users or groups at a time.

## Cost and licensing

Microsoft Learn's licence page says each user in an organisation must have a Teams licence before they can use Teams, apart from joining meetings anonymously. The app centric management page lists no further licence, meter or price, and Microsoft Learn documents no separate charge for the feature at the time of writing (November 2026). A DoD-specific licensing statement is not yet published.

The cost the sources show is admin time: reviewing existing permission policies, deciding group membership for each app and testing availability. Paid third-party apps carry their own subscriptions under the publisher's terms, which are outside this feature.

## Scope

**Clouds and rollout.** The roadmap item lists DoD, with status Rolling out and a target of November CY2026 (General Availability, web). The Learn page says that all organisations do not have the feature available, and points to Message Center post MC688930 and roadmap item 151829 for timelines. It does not give a DoD timeline.

**Who is covered.** Admins manage access for individual users, supported groups or everyone. Supported group types are security groups, Microsoft 365 groups, dynamic user membership groups, nested groups and distribution lists.

**Roles.** Learn says that to use the Teams admin center you must have a Teams Administrator role, and that some higher-privilege roles can also do agent and app governance tasks.

**Out of scope.** Learn says app permissions that admins previously consented to are retained after migration, because app permissions are a different concept from permission policies.

## Governance guidance

### Before rollout
- Export or record each app permission policy and its assignments in the Teams admin center, so you can compare the result after migration.
- Find apps that the global policy allows but a custom policy blocks; Learn says auto-migration makes these available to all users of the tenant.
- Decide which apps should stay as `Specific users or groups` and which security groups will hold their members, and who may edit those groups.
- Confirm the roadmap target and rollout timing for DoD through your Message Center and the Learn page before relying on a date.

### At rollout
- Open **Manage apps** and check the **Available to** column against the policy inventory, app by app.
- Check the Org-wide app settings, including the third-party apps and custom apps controls, because Learn says they apply to new apps and apps you did not actively manage.
- Test an app assigned to a group and an app set to `No one` with a pilot user, allowing up to 24 hours for changes.

### After rollout
- Review the groups created for each former custom policy and remove or replace those you do not need.
- Use `Update-M365TeamsApp` to change availability in bulk for many apps, since Learn says the Teams admin center does not support bulk updates.
- Re-check the default for new apps whenever you change the org-wide settings, since the change also affects apps you have not actively managed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups can use each Teams app (availability: everyone, specific users or groups, no one)</strong><br><small>App</small><br><small class="controls__note">Teams Administrator role. -AppAssignmentType also takes UsersAndGroups and Noone; -OperationType, -Users and -Groups add or remove assignments.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Users and groups › Availability › Edit availability › Available to <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -AppAssignmentType Everyone</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Default availability for new apps and apps you have not actively managed (Org-wide app settings)</strong><br><small>Tenant</small><br><small class="controls__note">Separate toggles for Microsoft, third-party and custom apps. Does not override apps assigned individually, or blocked apps. Learn says all third-party apps are blocked by default in GCC, GCCH and DoD.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn says an organisation uses either permission policies or app centric management, and that the feature replaces permission policies once migrated. The per-app availability setting and the org-wide default interact: org-wide settings apply to new apps and apps whose availability you have not changed, and do not apply to apps assigned individually or to blocked apps.

The PowerShell side of the org-wide default is not mapped by Microsoft Learn: `Update-M365UnifiedTenantSettings` is documented with the setting names DefaultApp, GlobalApp and PrivateApp, but the page does not say which Org-wide app settings toggle each one sets, so no call is given for that row. Reading the Teams admin center requires a Teams Administrator role.

## Open questions

- When will app centric management reach DoD tenants, and will the migration be automatic? The Learn page refers to MC688930 and roadmap item 151829 for timelines but does not mention DoD; watch Message center and the Learn page.
- Do the Learn migration rules, including the allowed-globally-but-blocked-in-a-custom-policy exception, apply unchanged in DoD?
- How do the DoD default for third-party apps (blocked by default per Learn) and the new org-wide default setting interact on arrival?
- Which Update-M365UnifiedTenantSettings setting name corresponds to each Org-wide app settings control?

<!-- rationale
risk: Medium. Microsoft's migration notes list one case where an app blocked in a custom policy but allowed globally becomes available to all users, and permission policies cannot be reverted to.
cost: Low. The only cost the sources show is admin time to review the mapping; Microsoft Learn names no separate licence or meter for app centric management.
impact: Low. Teams administrators notice first, because the way access is managed changes; users see a difference only where an app's availability changes.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters, second paragraph; Open questions / default: The migration's arrival behaviour is unknown because Microsoft has not said whether DoD tenants migrate automatically. | Found: Starting from April 2025, your tenant is automatically migrated to app centric management. For existing organizations, old settings are mapped to new access settings. | Fix: Set defaultState to on. Replace the sentence beginning 'Microsoft has not stated what a DoD tenant sees on arrival' with 'Learn describes automatic migration to app centric management and maps existing organisations' old settings to new access settings; it does not publish a DoD-specific rollout window.' In the first Open questions bullet retain the DoD rollout-window question but remove 'and will the migration be automatic?'. Remove the second Open questions bullet questioning whether the documented migration rules apply: the general documentation does not exclude DoD. Do not apply Learn's general April 2025 date as a DoD rollout date; retain this item's November CY2026 roadmap target. | Source: https://learn.microsoft.com/microsoftteams/app-centric-management
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing, third paragraph / record: The same feature has a separate GCC roadmap item, 527830. | Found: "id": 527830; "title": "Microsoft Teams: App centric management in Teams Admin Center to manage the Apps access for tenants, end-users, and groups in GCC" | Fix: Add the roadmap sources https://www.microsoft.com/microsoft-365/roadmap?id=527830 and https://www.microsoft.com/microsoft-365/roadmap?id=569433 for the cross-cloud comparison. Both records were read and support the comparison.
- [supported, minor] Cost and licensing, second paragraph / licensing: Paid third-party apps have their own service subscriptions, distinct from app centric management. | Found: Some Teams apps require purchasing a service subscription to use app functionality. These service subscriptions are called Software as a Service (SaaS) offers. | Fix: Add https://learn.microsoft.com/microsoftteams/purchase-third-party-apps to sources for the paid third-party app subscription statement. | Source: https://learn.microsoft.com/microsoftteams/purchase-third-party-apps
- [supported, minor] controls[0].ui; Governance controls: first row / admin-path: The per-app availability route is Teams apps > Manage apps > app > Users and groups > Availability > Edit availability > Available to. | Found: Select the Users and groups tab. Under Select to manage who this app is installed for or available to in your organization, select Availability. Select Edit availability. Select the required option from Available to menu. | Fix: Include the omitted heading in the front matter and rendered route: 'Teams apps > Manage apps > app > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability > Available to'. The navigation prefix is supported by the already cited manage-apps page. | Source: https://learn.microsoft.com/microsoftteams/app-centric-management
- [supported, minor] controls[1].ui; Governance controls: second row / admin-path: The default availability controls are reached through Teams apps > Manage apps > Actions > Org-wide app settings. | Found: To change this default setting, access Manage apps page, select Actions > Org-wide app settings, and modify the required settings. | Fix: The route stops on the correct settings pane. Add to this row's note: 'Microsoft apps and Third-party apps each have a separate control; for Custom apps, use Let users install and use available apps by default.' These final controls are documented at the already cited https://learn.microsoft.com/microsoftteams/manage-apps. | Source: https://learn.microsoft.com/microsoftteams/app-centric-management
- [contradicted, minor] front matter: action / consistency: Prepare is the action rating despite rolling-out status, a current-month target and medium migration risk. | Found: action: "prepare"; status: "rolling-out"; targetDate: "November CY2026"; risk: "medium". Learn describes automatic migration and the page advises reviewing conflicting policies before migration. | Fix: Set action to act-now: as of 19 November 2026, the current-month rolling-out change, documented automatic migration and medium risk meet the standard's act-now definition.
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The checklist directs inventory of legacy permission policies and management of directory groups, but the table has only per-app availability and org-wide defaults. | Found: Export or record each app permission policy and its assignments in the Teams admin center; Review the groups created for each former custom policy and remove or replace those you do not need. The controls table has only app availability and org-wide defaults. | Fix: Remove the Before rollout bullet beginning 'Export or record each app permission policy' and the After rollout bullet beginning 'Review the groups created'. In the Before rollout bullet beginning 'Decide which apps', end after 'Specific users or groups'. These directives name policy-inventory or directory-group controls with no table row; do not add unverified rows.
-->
