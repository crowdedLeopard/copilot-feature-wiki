---
title: "Microsoft Teams: unified agent and app installation management across the Teams and Microsoft 365 admin centres"
slug: "microsoft-teams-unified-agent-and-app-installation-management-across-m365-and-teams-admin"
roadmapId: 567883
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "App and agent installation changes made in either the Teams or Microsoft 365 admin centre are to apply across Teams, Outlook and Microsoft 365 Copilot. Compare both centres first: tenants with differences must resolve them."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The Learn pages on unified agent and app management name admin roles (Teams Administrator for the Teams admin center; a Global admin to give consent) and no licence or meter."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["teams","outlook","m365-copilot","m365-admin-center","admin-center","app-management","agents","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 567883"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567883"
    kind: "roadmap"
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
    url: "https://learn.microsoft.com/powershell/module/teams/update-m365teamsapp"
    kind: "learn"
videos: []
related: ["app-management","microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin","microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app","microsoft-teams-streamlined-m365-certified-app-management-in-teams-admin-center"]
controls:
  - governs: "Whether an agent or app is allowed or blocked for the organisation"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/teams/update-m365teamsapp"
    note: "Teams Administrator role to use the Teams admin center. Learn says that in a unified tenant changes made here are synchronised to the Microsoft 365 admin center."
  - governs: "Which users and groups an agent or app is available to (Everyone, specific users or groups, No one)"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability > Available to"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -AppAssignmentType Everyone"
      docs: "https://learn.microsoft.com/powershell/module/teams/update-m365teamsapp"
    note: "Learn says availability changes take up to 24 hours to take effect. The cmdlet's other assignment types are UsersAndGroups and Noone."
  - governs: "Availability of cross-application apps on Outlook and Microsoft Copilot (Microsoft 365 admin center)"
    scope: "app"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Edit Users"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "The page describes this before unification and says these controls are only available to Global Admins. After unification Learn says changes sync with the Teams admin center."
  - governs: "Moving the tenant to unified agent and app management across the two admin centres"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Move to unified app management"
      docs: "https://learn.microsoft.com/microsoftteams/uam-tac-mac"
    api: null
    note: "Any Teams or Global admin can make updates up to the Review summary page; only a Global admin can consent and apply the final changes."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-28T21:59:29"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: Rolling out with an August CY2026 target; Learn documents the unified experience and the move for tenants with differing settings."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 50 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 48
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "54e8a478f50a078383ebd3273d62d228"
---

## What's changing

The roadmap item says administrators will apply app and agent installation changes once and have them enforced across Teams, Outlook and Microsoft 365 Copilot, whether they make the change in the Microsoft 365 admin center or the Teams admin center. It states that previously, changes in the Microsoft 365 admin center applied only to Outlook and Microsoft 365, and changes in the Teams admin center applied only to Teams.

Microsoft Learn documents this as unified agent and app management. After a tenant is unified, Learn says changes to org-wide settings, app status or availability in the Teams admin center (TAC) are automatically synchronised to the Microsoft 365 admin center (MAC) and vice versa. Learn's page points to roadmap ID 485712 for timelines and to Message Center post MC796790, not to item 567883, so treat it as the closest documented description of this item.

How a tenant gets there depends on its history. The roadmap item states no default. Learn says a tenant that never modified its org-wide defaults, app availability or block and unblock settings in either centre is automatically unified. A tenant that did must select **Move to unified app management** on **Teams apps > Manage apps**; where availability differs between the centres, an alignment page lets the admin choose which centre's settings to apply, app by app or in bulk. Learn says only a Global admin can give the final consent and apply the changes.

The roadmap record gives the status as Rolling out, with a target of August CY2026, release phase General Availability, platform Web and cloud Worldwide (Standard Multi-Tenant).

## Why it matters

Before unification, Learn's example for apps that work across hosts shows an app blocked in the Teams admin center remaining downloadable in Outlook and the Microsoft Copilot application, because the Microsoft 365 admin center governed those surfaces separately. Unification removes that gap, which helps an administrator who wants one answer to "is this app or agent allowed?" It also means a setting chosen for Teams reasons now reaches Outlook and Copilot, and the reverse.

The roadmap item states no default, so the advice rests on Learn's per-tenant description. Learn's overview page advises that until a tenant is migrated, settings in both admin centres such as blocked apps and org-wide app settings should be kept synchronised to prevent unexpected disruptions. The practical view: audit both centres now, so that unification is a decision you take, not a merge you accept.

## Risk assessment

**Data exposure**

- Unification changes where an app or agent can be installed, not what it reads. An app blocked only in the Teams admin center was documented as still usable in Outlook and the Microsoft Copilot application; choosing the more permissive centre's settings on the alignment page would widen where it can be installed. Review rows 1 to 3 of the controls table before choosing.

**Security & identity**

- Learn says only a Global admin can give consent and apply the final changes, while any Teams or Global admin can make updates up to the Review summary page. Expect a Teams administrator to prepare alignment choices that a Global admin then approves.

**Autonomy & actions**

- The Learn page describes availability and installation of agents and apps, not what an agent can do once it is installed. Agent permissions are unchanged by anything the sources describe, so existing controls for each agent still apply.

**Change & support**

- Learn says availability changes take up to 24 hours to take effect and, in rare cases, up to six days to reach the client. Expect support questions about an app that appears blocked or allowed in one client but not another during that window.
- Learn says unification avoids mismatched configurations between the two centres, so differences found during alignment are the main change to plan for.

## Cost and licensing

**Licence.** Not yet published. The Learn pages on unified agent and app management and on app and agent governance in the Teams admin center name roles and consent steps and no licence or meter for unification. The roadmap record names no licence either.

**Meter and cap.** No meter is documented for this change at the time of writing (November 2026).

**Indirect cost.** Admin time to export and compare app status and availability in both centres, resolve differences and test results across Teams, Outlook and Microsoft 365 Copilot. The alignment page offers a CSV download of app status and availability settings that can support this.

## Scope

**Who and what.** Agents and apps managed in the Teams admin center and the Integrated apps page of the Microsoft 365 admin center. The roadmap record lists Microsoft Teams as the product, Web as the platform and Worldwide (Standard Multi-Tenant) as the cloud.

**Roles.** Learn says you need a Teams Administrator role to use the Teams admin center, that any Teams or Global admin can make updates up to the Review summary page, and that only a Global admin can consent and apply the final changes. For apps that work across hosts, Learn's Microsoft 365 admin center page says its Integrated apps controls are only available to Global Admins.

**Rollout.** The roadmap item is Rolling out with an August CY2026 target. Learn describes two routes: automatic unification for tenants with default settings, and **Move to unified app management** for tenants that modified settings. Learn's unified page cites roadmap ID 485712 for timelines.

## Governance guidance

### Before rollout

- Compare app status and availability for each agent and app in the Teams admin center (rows 1 and 2) and the Microsoft 365 admin center Integrated apps page (row 3), and list the differences.
- Decide which centre's setting should win for each org-wide default and each differing app, and record the decision for the Global admin who will consent.
- Name the Global admin who will approve the move, since only a Global admin can give the final consent.
- Tell Outlook, Microsoft 365 Copilot and Teams owners which apps and agents may change availability.

### At rollout

- Check **Teams apps > Manage apps** for the **Move to unified app management** option (row 4) and, if it appears, start the alignment with your recorded decisions.
- Review the **Review summary** page before **Accept and finish**, because the summary lists the org-wide and app-level settings being applied.
- Allow up to 24 hours for availability changes to take effect before treating a mismatch as a fault.

### After rollout

- Test one allowed and one blocked app or agent in Teams, Outlook and Microsoft 365 Copilot after your first change in either admin centre.
- Export the app catalogue from the Teams admin center as a baseline and keep it for later comparison.
- Watch Message Center post MC796790 and the Learn page for changes to timelines or behaviour.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent or app is allowed or blocked for the organisation</strong><br><small>App</small><br><small class="controls__note">Teams Administrator role to use the Teams admin center. Learn says that in a unified tenant changes made here are synchronised to the Microsoft 365 admin center.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/teams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups an agent or app is available to (Everyone, specific users or groups, No one)</strong><br><small>App</small><br><small class="controls__note">Learn says availability changes take up to 24 hours to take effect. The cmdlet's other assignment types are UsersAndGroups and Noone.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Users and groups › Select to manage who this app is installed for or available to in your organization › Availability › Edit availability › Available to <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -AppAssignmentType Everyone</code> <a href="https://learn.microsoft.com/powershell/module/teams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Availability of cross-application apps on Outlook and Microsoft Copilot (Microsoft 365 admin center)</strong><br><small>App</small><br><small class="controls__note">The page describes this before unification and says these controls are only available to Global Admins. After unification Learn says changes sync with the Teams admin center.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Edit Users <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Moving the tenant to unified agent and app management across the two admin centres</strong><br><small>Tenant</small><br><small class="controls__note">Any Teams or Global admin can make updates up to the Review summary page; only a Global admin can consent and apply the final changes.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Move to unified app management <a href="https://learn.microsoft.com/microsoftteams/uam-tac-mac" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Rows 1 and 2 are the Teams admin center controls; Learn says that after unification a change in either centre is synchronised to the other. Row 3 is documented on Learn's page for apps that work across hosts, which describes the Microsoft 365 admin center before unification: changes there apply to Outlook and the Microsoft Copilot application, and that page says those Integrated apps controls are only available to Global Admins.

The PowerShell cmdlet is documented in the Teams module. Confirm in a test tenant whether a change made with it is synchronised to the Microsoft 365 admin center before relying on it for both centres. Org-wide defaults and each app's status and availability are separate settings, which the alignment page resolves separately.

## Open questions

- Is roadmap item 567883 the same rollout as the unified agent and app management that Learn ties to roadmap ID 485712 and MC796790? Watch the roadmap item and Message center for confirmation.
- What happens, and when, to a tenant with custom or differing settings that does not select Move to unified app management? Watch the Manage apps page and MC796790.
- Do built-in Teams agents, which Learn says are managed from the Built-in Teams agents page, follow the same synchronisation? Watch the unified agent and app management Learn page.
- Is any licence or meter attached to unified management? Watch the Learn pages and Message center.

<!-- rationale
risk: Medium. One availability change can now reach Outlook and Microsoft 365 Copilot as well as Teams, so settings that differ between the two admin centres must be reconciled before they are merged.
cost: Low. The only cost the sources show is admin time to compare and align the two admin centres; the Learn pages on unified management name no licence or meter, so licensing is not yet published.
impact: Medium. Admins in both centres notice first; users notice when an app or agent becomes installable, or stops being usable, on a surface where it behaved differently before.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure; Autonomy & actions / behaviour: Unification does not change what an app reads or its agent permissions. | Found: Searched: unified app management agent permissions data access unchanged; "unified agent and app management" "permissions". Read uam-tac-mac, manage-apps and app-centric-management; none states this assurance for cross-centre unification. | Fix: Replace 'Unification changes where an app or agent can be installed, not what it reads.' with 'The roadmap describes a change to where app and agent installation changes are enforced.' Replace 'Agent permissions are unchanged by anything the sources describe, so existing controls for each agent still apply.' with 'Confirm each agent's data permissions and action permissions separately before changing its availability.' The retained-consent passage in app-centric-management concerns a different migration and does not establish this claim.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls / admin-path: Microsoft 365 admin center > Settings > Integrated Apps > Available Apps > app > Edit Users reaches the cross-application app availability control. | Found: Scroll down and select Edit Users or select the Users tab in the overview pane. Read more about user groups and assignments earlier in this article. 6. Select the availability status of the app you want to set: | Fix: The path stops on the right pane but before the availability selection. Use 'Settings > Integrated Apps > Available Apps > app > Edit Users > availability status', with 'availability status' as the placeholder for 'No users in the organization can install', 'All users in the organization can install', or 'Specific users/group in the organization can install'. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365
- [supported, minor] front matter: licensing.model; Cost and licensing; rationale: cost / licensing: The licensing model is unknown because no feature-specific licence is published. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to 'included' under the standard's product-level licence rule. Add and cite https://learn.microsoft.com/microsoftteams/user-access with: 'Teams users need a Teams license, except when joining meetings anonymously. No licence specific to unified management is published.' Retain the narrower feature-specific uncertainty in the cost rationale instead of saying licensing as a whole is unpublished. | Source: https://learn.microsoft.com/microsoftteams/user-access
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks administrators to decide each org-wide default, but the controls table has no org-wide-defaults control. | Found: Decide which centre's setting should win for each org-wide default and each differing app | Table rows: app Allow or Block; app availability in Teams; app availability in Microsoft 365; moving the tenant to unified management. | Fix: Narrow the checklist bullet to 'Decide which centre's setting should win for each differing app, and record the decision for the Global admin who will consent.' Do not add a control row as part of this correction.
-->
