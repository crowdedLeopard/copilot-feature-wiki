---
title: "Microsoft Teams: app centric management of app availability in GCC High"
slug: "microsoft-teams-app-centric-management-in-teams-admin-center-to-manage-the-apps-a-gcc-high"
roadmapId: 569433
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams admin center in GCC High moves to per-app availability (everyone, specific users or groups, or no one), replacing app permission policies. Admins should act now: migration is one-way and the roadmap says it is rolling out."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["GCC High"]
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
  notes: "Learn says deploying Teams in GCC High needs a Microsoft 365 Government plan; the app centric management pages name only the Teams Administrator role and no separate licence or meter. Nothing specific to this feature is published."
audiences: ["m365-admin","security","change-adoption"]
tags: ["teams","app-management","admin-controls","governance","powershell","gcc-high"]
sources:
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Purchase third-party Microsoft Teams apps and manage subscriptions and licenses"
    url: "https://learn.microsoft.com/microsoftteams/purchase-third-party-apps"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Update-M365UnifiedTenantSettings"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365unifiedtenantsettings"
    kind: "learn"
  - title: "Plan for government clouds"
    url: "https://learn.microsoft.com/microsoftteams/platform/concepts/cloud-overview"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 569433"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569433"
    kind: "roadmap"
videos: []
related: ["microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app"]
controls:
  - governs: "Which users and groups can use each app (Everyone, Specific users or groups, No one)"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability > Available to"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -AppAssignmentType Everyone"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Teams Administrator role. -AppAssignmentType is also documented with UsersAndGroups (with -Users/-Groups) and Noone. Changes take up to 24 hours."
  - governs: "Default availability of new and unmanaged apps (Org-wide app settings)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > Third-party apps"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api: null
    note: "The Microsoft apps and Custom apps settings sit on the same pane. Does not override apps you set individually or blocked apps. Learn says third-party apps are blocked by default in GCC High."
  - governs: "Whether an app is allowed or blocked for the organisation"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -IsBlocked $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Existing control, separate from per-app availability. Learn says an app must be allowed on every route to be available, and any one block blocks it."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-20"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-19"
    note: "First briefing for the GCC High roadmap item: per-app availability replaces app permission policies; rollout timing for GCC High is not stated by Microsoft."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after the independent check: default state is now on, because Learn describes automatic migration (no GCC High-specific schedule); action is act-now; per-app availability path completed."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 79 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 79 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 79
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "afa61b88c7b278cdfe9e9b8bee7b77a2"
---

## What's changing

App centric management replaces Teams app permission policies with a per-app access setting in the Teams admin center. Instead of building policies and assigning them to users, an admin sets each app's availability to **Everyone**, **Specific users or groups**, or **No one**, and sets a default for new apps published to the Teams app store. This roadmap item covers GCC High; the roadmap record gives the status as Rolling out, targeted for November CY2026, as General Availability on the Web platform.

The roadmap description says the feature evolves the existing app permission policies, and that policies for existing customers are migrated to maintain existing app availability. Learn describes the same behaviour: during migration one security group is created per custom app permission policy, the users assigned to that policy are added to the group, and the group is assigned to each app the policy allowed. Learn adds one exception: where an app is allowed in the global policy but blocked in a custom policy, the app becomes available to all users of the tenant (to none for EDU customers). Admins can change that afterwards.

The app centric management page says not all organisations have the feature and points to Message Center post MC688930 and roadmap item 151829 for timelines. Learn describes automatic migration to app centric management, with manual migration available until it completes; it does not give a GCC High-specific migration schedule.

Microsoft lists the feature under separate roadmap items for other clouds. The GCC item (527830) is Launched, with a January CY2026 target; the DoD item (569434) is Rolling out with a November CY2026 target, the same as this item. This page covers item 569433 for GCC High only.

## Why it matters

This replaces the way a GCC High Teams administrator decides who can use which app. Learn says that after the switch you can't access, edit or use permission policies, and that the migration can't be reverted, so any process built around those policies (documentation, scripts, change tickets) needs rewriting around per-app availability and the groups the migration creates.

Learn describes automatic migration to app centric management, with manual migration available until it completes; it does not give a GCC High-specific migration schedule. Plan on the roadmap's description: existing availability is migrated, with the policy-conflict exception above. The practical risk is not new data access but an unnoticed change to who can install an app, in a cloud where Learn also says third-party apps are not available in GCC High.

## Risk assessment

**Data exposure**
- Availability to **Everyone** includes guests per Learn, whereas **Specific users or groups** excludes guests even if they are assigned. Check which apps end up on Everyone after migration, because those are available to guests as well as members.
- Learn's conflict case (allowed in the global policy, blocked in a custom policy) makes the app available to all users of the tenant. An app you meant to restrict to a subset can widen; review it after migration.

**Security & identity**
- Per-app access now rests on group membership. The migration creates a security group per custom policy, so whoever can edit those groups, or the Microsoft 365 and distribution list groups you assign, controls app access. Review group ownership.
- Learn says blocked apps stay unavailable after migration: their status shows as unblocked but availability is **No one**.

**Autonomy & actions**
- No change documented: the feature sets who can install and use an app, and Learn describes no new autonomous behaviour.

**Change & support**
- Changes take up to 24 hours to apply, and in rare cases up to six days to reach the client, per Learn. Expect support calls about apps that are not yet visible after a change.
- Learn says the UI cannot update availability in bulk, but PowerShell can. Teams with many apps need a script.
- The migration cannot be undone, and the policies cannot be used afterwards, so review before you start the wizard if your tenant is offered it.

## Cost and licensing

No licence, price or meter specific to app centric management is published. The Learn pages for the feature (app centric management and the Teams admin center overview) name the Teams Administrator role as the requirement for using the Teams admin center and mention no separate licence or meter. Learn's government-cloud page says deploying Teams in GCC, GCC High or DoD needs a suitable Microsoft 365 Government plan, so the feature comes with the Teams deployment you already run.

The cost known today is indirect: admin time to inventory policies, review per-app availability, and manage the groups created during migration. Paid third-party app licences are a separate matter (Learn describes buying them from the Manage apps page), and Learn's government-cloud table marks third-party apps as not available in GCC High.

## Scope

**Cloud and platform:** GCC High, Web, per the roadmap record. Learn's government-cloud page lists Manage apps in Teams admin center as available in GCC High.

**Who is affected:** Teams administrators. Learn says you must have a Teams Administrator role to use the Teams admin center, and recommends the lowest-privilege role that works.

**Third-party apps:** Learn says that in GCC, GCC High and DoD all third-party agents and apps are blocked by default, and the government-cloud page says third-party apps aren't available for GCC High and DoD. In GCC High, expect the feature to matter mainly for Microsoft-built and organisation-built apps.

**Rollout:** Rolling out, target November CY2026 (roadmap record). Learn says migration of existing policies maintains existing availability, with the one conflict case noted above. Group types supported for assignment: security groups, Microsoft 365 groups, dynamic membership groups, nested groups and distribution lists; up to 99 users or groups can be added to an app at a time.

## Governance guidance

### Before rollout
- Find apps that one policy allows and another blocks; Learn says the global-allow, custom-block case becomes available to all tenant users after auto-migration.
- Identify the owners of the groups you will assign to apps, and agree who may edit group membership.
- Tell service desk staff that availability changes take up to 24 hours, and in rare cases up to six days, to show in the client.

### At rollout
- Open each app's **Users and groups** tab and confirm its availability matches the policy it replaced (per-app availability row in the controls table).
- Check the Org-wide app settings default for Microsoft apps and third-party apps against the old global policy mapping (org-wide default row).
- Review apps shown as unblocked with availability **No one**; Learn says these were blocked before migration.

### After rollout
- Script bulk changes with `Update-M365TeamsApp` rather than the UI, which Learn says cannot update availability in bulk.
- Re-check apps set to **Everyone** for guest exposure.
- Retire runbooks that refer to permission policies, which cannot be used after migration.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups can use each app (Everyone, Specific users or groups, No one)</strong><br><small>App</small><br><small class="controls__note">Teams Administrator role. -AppAssignmentType is also documented with UsersAndGroups (with -Users/-Groups) and Noone. Changes take up to 24 hours.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Users and groups › Select to manage who this app is installed for or available to in your organization › Availability › Edit availability › Available to <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -AppAssignmentType Everyone</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Default availability of new and unmanaged apps (Org-wide app settings)</strong><br><small>Tenant</small><br><small class="controls__note">The Microsoft apps and Custom apps settings sit on the same pane. Does not override apps you set individually or blocked apps. Learn says third-party apps are blocked by default in GCC High.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › Third-party apps <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an app is allowed or blocked for the organisation</strong><br><small>App</small><br><small class="controls__note">Existing control, separate from per-app availability. Learn says an app must be allowed on every route to be available, and any one block blocks it.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

App availability and app status are separate controls on the Manage apps page. Learn says that to block an app you can use any one of the Org-wide app settings or the app-centric setting, and Learn's migration notes say previously blocked apps show as unblocked with availability **No one**.

Org-wide app settings apply to new apps published to the Teams store and to existing apps whose availability you have not changed. They do not apply to apps set to Specific users and groups, apps saved as Everyone or No one, or blocked apps. After migration, changing the third-party org-wide setting affects only apps you have not actively managed.

The Microsoft Teams PowerShell reference documents `Update-M365TeamsApp` for per-app changes. For the org-wide defaults, the `Update-M365UnifiedTenantSettings` reference lists `GlobalApp`, `DefaultApp` and `PrivateApp` as setting names without saying which Org-wide app setting each changes, so no call is given for that row. Role: Teams Administrator.

## Open questions

- When will automatic migration reach this GCC High tenant? Learn gives no GCC High-specific schedule; the roadmap target is November CY2026.
- Which `Update-M365UnifiedTenantSettings` setting name corresponds to each Org-wide app setting, so the defaults can be scripted?
- Is any behaviour of per-app availability different in GCC High from the commercial cloud, beyond third-party apps being unavailable? Watch the Teams government-cloud pages on Learn.

<!-- rationale
risk: Medium. Per Learn, once a tenant migrates, permission policies can no longer be used or edited and the migration cannot be reverted; one policy conflict case changes who gets an app.
cost: Low. Learn names a Teams Administrator role, not a separate licence or meter, so the known cost is admin time to review per-app availability and the groups the migration creates.
impact: Low. Admins see new screens and rules; users notice only where an app's availability changes, which Learn says happens in one policy-conflict case.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Teams apps > Manage apps > Actions > Org-wide app settings > Third-party apps reaches the pane containing the third-party default. | Found: On Manage apps page, under the Actions menu, select Org-wide app settings. You can then configure the settings in the pane. | Fix: Complete controls[1].ui.path and the matching table cell as 'Teams apps > Manage apps > Actions > Org-wide app settings > Third-party apps > Let users install and use available apps by default'. The switch label is documented at https://learn.microsoft.com/microsoftteams/app-centric-management#default-settings-for-app-availability, already cited. | Source: https://learn.microsoft.com/microsoftteams/manage-apps
- [supported, minor] controls[2].api; Governance controls table / command: Update-M365TeamsApp -Id <app id> -IsBlocked $true is documented for changing the app's org-level state. | Found: Update-M365TeamsApp -Id 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b -IsBlocked $true Unblocks Bookings app (App ID 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b). | Fix: Keep the call but append to controls[2].note and the matching table note: 'The reference describes -IsBlocked $true as unblocking in Example 3, but also describes -IsBlocked $false as unblocking in Example 4; its examples do not consistently establish the Boolean polarity. Use the UI when the intended state must be unambiguous.' Source: https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp
-->
