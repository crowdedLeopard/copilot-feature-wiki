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
defaultState: "on"
action: "act-now"
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
  - title: "Purchase third-party Microsoft Teams apps and manage subscriptions and licenses"
    url: "https://learn.microsoft.com/microsoftteams/purchase-third-party-apps"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 569434"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569434"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap item 527830"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=527830"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap item 569433"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569433"
    kind: "roadmap"
videos: []
related: ["microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app","microsoft-teams-enable-agents-for-existing-applications-in-your-organization"]
controls:
  - governs: "Which users and groups can use each Teams app (availability: everyone, specific users or groups, no one)"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability > Available to"
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
updated: "2026-11-20"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-19"
    note: "New briefing for the DoD roadmap item: per-app availability replaces app permission policies, with the documented migration exception and the controls that apply."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: Learn describes automatic migration, so the default is on and action is act-now; trimmed checklist items without a controls row; added the omitted heading to the availability path."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 70 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 73 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 73
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "9fc9b612dba6f3598ef372afb500ebce"
---

## What's changing

App centric management gives each Teams app its own availability setting in the Teams admin center. The roadmap item says admins can set a default for new apps published to the Teams app store, and can set each app to "All users can install," "Specific users and groups can install," or "No user can install." It evolves the existing app permission policies, and the roadmap says those policies are migrated for existing customers to maintain existing app availability in the tenant.

Microsoft Learn documents the feature as it works in the Teams admin center. Each app holds a list of users and groups it is assigned to, and Learn names the options `Everyone`, `Specific users or groups` and `No one`. The Learn page does not say what DoD tenants receive or when, so the behaviour described here comes from the general Learn page and the roadmap text. Learn also says that in a Microsoft 365 Government GCC, GCCH and DoD deployment of Teams, all third-party agents and apps are blocked by default.

This roadmap item covers DoD only. Microsoft lists the same feature under separate items for GCC (527830, launched, January CY2026) and GCC High (569433, rolling out, November CY2026). This item's status is Rolling out, with a target of November CY2026, at General Availability on the web platform. The record's dates are targets.

## Why it matters

App centric management replaces the three settings admins used before (the org-wide third-party app setting, the app's allow or block status and the permission policy) with one setting on each app. Learn says that once an organisation moves to the feature it cannot access, edit or use permission policies, and cannot revert the migration. Any policy design that relied on per-user policy assignment has to be re-expressed as users and groups on each app.

Learn describes automatic migration to app centric management and maps existing organisations' old settings to new access settings; it does not publish a DoD-specific rollout window. Learn describes one case where migration changes access: an app allowed in the global policy but blocked in a custom policy becomes available to all users of the tenant (to none for EDU customers). Teams administrators in DoD should find those apps before the migration reaches their tenant.

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

**Clouds and rollout.** The roadmap item lists DoD, with status Rolling out and a target of November CY2026 (General Availability, web). The Learn page says that all organizations do not have the feature available, and points to Message Center post MC688930 and roadmap item 151829 for timelines. It does not give a DoD timeline.

**Who is covered.** Admins manage access for individual users, supported groups or everyone. Supported group types are security groups, Microsoft 365 groups, dynamic user membership groups, nested groups and distribution lists.

**Roles.** Learn says that to use the Teams admin center you must have a Teams Administrator role, and that some higher-privilege roles can also do agent and app governance tasks.

**Out of scope.** Learn says app permissions that admins previously consented to are retained after migration, because app permissions are a different concept from permission policies.

## Governance guidance

### Before rollout
- Find apps that the global policy allows but a custom policy blocks; Learn says auto-migration makes these available to all users of the tenant.
- Decide which apps should stay as `Specific users or groups`.
- Confirm the roadmap target and rollout timing for DoD through your Message Center and the Learn page before relying on a date.

### At rollout
- Open **Manage apps** and check the **Available to** column against the policy inventory, app by app.
- Check the Org-wide app settings, including the third-party apps and custom apps controls, because Learn says they apply to new apps and apps you did not actively manage.
- Test an app assigned to a group and an app set to `No one` with a pilot user, allowing up to 24 hours for changes.

### After rollout
- Use `Update-M365TeamsApp` to change availability in bulk for many apps, since Learn says the Teams admin center does not support bulk updates.
- Re-check the default for new apps whenever you change the org-wide settings, since the change also affects apps you have not actively managed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups can use each Teams app (availability: everyone, specific users or groups, no one)</strong><br><small>App</small><br><small class="controls__note">Teams Administrator role. -AppAssignmentType also takes UsersAndGroups and Noone; -OperationType, -Users and -Groups add or remove assignments.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Users and groups › Select to manage who this app is installed for or available to in your organization › Availability › Edit availability › Available to <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -AppAssignmentType Everyone</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Default availability for new apps and apps you have not actively managed (Org-wide app settings)</strong><br><small>Tenant</small><br><small class="controls__note">Separate toggles for Microsoft, third-party and custom apps. Does not override apps assigned individually, or blocked apps. Learn says all third-party apps are blocked by default in GCC, GCCH and DoD.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn says an organisation uses either permission policies or app centric management, and that the feature replaces permission policies once migrated. The per-app availability setting and the org-wide default interact: org-wide settings apply to new apps and apps whose availability you have not changed, and do not apply to apps assigned individually or to blocked apps.

The PowerShell side of the org-wide default is not mapped by Microsoft Learn: `Update-M365UnifiedTenantSettings` is documented with the setting names DefaultApp, GlobalApp and PrivateApp, but the page does not say which Org-wide app settings toggle each one sets, so no call is given for that row. Reading the Teams admin center requires a Teams Administrator role.

## Open questions

- When will app centric management reach DoD tenants? The Learn page refers to MC688930 and roadmap item 151829 for timelines but does not mention DoD; watch Message center and the Learn page.
- How do the DoD default for third-party apps (blocked by default per Learn) and the new org-wide default setting interact on arrival?
- Which Update-M365UnifiedTenantSettings setting name corresponds to each Org-wide app settings control?

<!-- rationale
risk: Medium. Microsoft's migration notes list one case where an app blocked in a custom policy but allowed globally becomes available to all users, and permission policies cannot be reverted to.
cost: Low. The only cost the sources show is admin time to review the mapping; Microsoft Learn names no separate licence or meter for app centric management.
impact: Low. Teams administrators notice first, because the way access is managed changes; users see a difference only where an app's availability changes.
-->
