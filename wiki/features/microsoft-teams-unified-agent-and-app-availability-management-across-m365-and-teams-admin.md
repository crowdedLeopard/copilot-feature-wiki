---
title: "Teams and Microsoft 365 admin centres: unified agent and app availability across Teams, Outlook and Microsoft 365 Copilot"
slug: "microsoft-teams-unified-agent-and-app-availability-management-across-m365-and-teams-admin"
roadmapId: 503105
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)","Outlook"]
summary: "Agent and app availability set in either the Teams or Microsoft 365 admin centre will apply to Teams, Outlook and Microsoft 365 Copilot. Modified tenants opt in through a Teams admin center wizard; a later phase unifies the rest."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "November CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "included"
  notes: "Teams use requires a Teams license, except for joining meetings anonymously. Microsoft has not published a licence specific to availability unification as of November 2026."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","outlook","m365-copilot","m365-admin-center","app-management","agents","governance"]
sources:
  - title: "Microsoft 365 Roadmap 503105"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503105"
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
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Purchase third-party Microsoft Teams apps and manage subscriptions and licenses"
    url: "https://learn.microsoft.com/microsoftteams/purchase-third-party-apps"
    kind: "learn"
videos: []
related: ["microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app"]
controls:
  - governs: "Moving the tenant to unified agent and app management"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Move to unified app management"
      docs: "https://learn.microsoft.com/microsoftteams/uam-tac-mac"
    api: null
    note: "Only a Global admin can give consent and apply the final changes. Any Teams or Global admin can work up to the Review summary page."
  - governs: "Which users can use an agent or app (everyone, specific users or groups, no one)"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability > Available to"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -AppAssignmentType Everyone"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "AppAssignmentType takes Everyone, UsersAndGroups or Noone. Learn says availability changes take up to 24 hours to take effect."
  - governs: "Whether an agent or app is allowed or blocked for the organisation"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -IsBlocked $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "The reference describes IsBlocked as the state of the app in the tenant, and its example using $true is labelled as unblocking, so test the value before scripting."
  - governs: "Org-wide defaults for Microsoft, third-party and custom apps"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > app type > Let users install and use available apps by default"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api: null
    note: "As of November 2026, no automation for these defaults was found. Set-CsTeamsSettingsCustomApp is for the custom-app upload switch, not Let users install and use available apps by default. Changes take effect after a few hours."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2025-11-13T00:15:06"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: covers the Phase 2 wizard, the Phase 3 automatic unification still to be dated, and the Teams admin center controls."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 64 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Correction: removed Set-CsTeamsSettingsCustomApp as an availability-default automation route, set licensing to included with the Teams licence statement, completed two admin paths and dropped an unsupported checklist step."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 65
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "ce66b7951c80e4f388ab2c29e5663fff"
---

## What's changing

Microsoft is unifying how agent and app availability is managed across the Teams admin center (TAC) and the Microsoft 365 admin center (MAC). The roadmap description says that changes made in the Integrated apps section of the MAC affected these agents and apps only in Outlook and Microsoft 365 Copilot, and changes made in the TAC affected only Teams. Microsoft Learn says that once a tenant is unified, changes to org-wide settings, agent or app status and availability in one admin centre are synchronised to the other.

This item is one of three roadmap items named in Microsoft's notice MC796790 (roadmap IDs 393931, 485712 and 503105). The notice describes three phases. Phase 1, which began rolling out at the end of September 2025, targets tenants that have never modified org-wide defaults, app availability or block and unblock settings in either admin centre; Learn says those tenants are unified automatically. Phase 2 targets tenants that have modified those settings. The notice says it is fully rolled out, that tenants choose to align through a wizard in the TAC, and that no org-wide or app-level setting is changed without administrator action. Phase 3 will unify automatically any tenant that has not acted; the notice says the timeline will be announced at least 60 days before it begins and gives no date.

In the wizard, a tenant with no differences between the admin centres gives consent to move to unified app management. A tenant with differences first chooses which admin centre's org-wide settings to apply, then resolves per-app status and availability differences one app at a time or in bulk, and can download the comparison as a CSV file. Any Teams or Global admin can work up to the Review summary page; only a Global admin can give consent and apply the final changes.

The roadmap record lists the item as Rolling out, targeted for November CY2025, General Availability, Worldwide (Standard Multi-Tenant), Desktop. The notice's text, updated on 18 November 2026, adds that installation management is also unified, within 24 to 48 hours of a tenant completing availability unification, and that installations made through Teams app setup policies are not unified. Learn's unified management page points to roadmap ID 485712 for timelines.

## Why it matters

Learn lists avoiding mismatched configurations as a purpose of unification. For a service owner, the practical change is that either admin centre becomes a route to change what users can use in Teams, Outlook and Microsoft 365 Copilot. A block that used to cover one surface can then cover all three, and an app that one admin centre allowed can become available where the other had blocked it, depending on which side you choose in the wizard.

If nobody acts, Microsoft has not said that a tenant with modified settings changes today: the notice says Phase 2 applies nothing without administrator action. It does say Phase 3 will unify tenants that have not acted, on a date still to be announced, and it does not say how that phase treats differences between the two admin centres. Running the wizard yourself is the way to decide those differences before Microsoft does it for you.

## Risk assessment

**Data exposure**
- The roadmap description covers availability management, not what data an agent or app reads. The exposure comes from availability: applying one admin centre's settings in the wizard can make an agent or app available on surfaces where the other admin centre had blocked it. Compare the per-app differences before choosing which side to apply.

**Security & identity**
- Consent and the final apply need a Global admin; a Teams admin can prepare the changes up to the Review summary page. Agree who does this before the wizard is started.
- Third-party apps have a single org-wide control that manages bulk availability of new and existing third-party agents and apps. After unification that default is shared with the other admin centre, so check its position on the Align org-wide app settings page.

**Autonomy & actions**
- No change to what agents or apps do is described. The change decides which agents and apps users can use and, per the notice, how installation is managed.

**Change & support**
- Learn says availability changes take up to 24 hours to take effect and, in rare cases, up to six days to reach the client, so expect a delay between a change and what users report.
- The notice says installations made through Teams app setup policies are not unified. Users and support teams can see differences between installation assignments and availability after the move.
- A tenant that does nothing will be unified automatically in Phase 3 on a date not yet announced.

## Cost and licensing

Microsoft Learn says each user in your organisation must have a Teams licence before they can use Teams, except for joining Teams meetings anonymously. Microsoft has not published a licence specific to availability unification as of November 2026. Microsoft Learn's Teams admin center page names the Teams Administrator role as what you need to use the Teams admin center.

The same pages document no meter or charge for unification. The known cost is administrator time: comparing org-wide settings and per-app availability across both admin centres, running the wizard, and testing afterwards. Any price an app publisher charges for a paid app is separate from this change: Learn describes such charges as service subscriptions for the app.

## Scope

**Who gets it.** Tenants on the roadmap's Worldwide (Standard Multi-Tenant) cloud, on Desktop, per the record. Unmodified tenants are unified automatically (Phase 1); modified tenants use the wizard (Phase 2, fully rolled out per the notice); remaining tenants are unified in Phase 3, which has no announced date.

**Roles.** Teams Administrator for the Teams admin center. Any Teams or Global admin can work up to the Review summary page; only a Global admin can give consent and apply the final changes.

**Surfaces.** Agents and apps that work across Teams, Outlook and Microsoft 365 Copilot, per the roadmap description. Learn also notes that you can only view and manage agents and apps deployed in the same release channel as your tenant.

## Governance guidance

### Before rollout
- Compare the Manage apps page in the Teams admin center with the Integrated apps page in the Microsoft 365 admin center for blocked apps, per-app availability and org-wide settings, to learn whether your tenant has differences.
- Export the agent and app catalogue from the Teams admin center as CSV, so you hold a record of status and availability before anything changes.
- Decide, per org-wide setting and per differing app, which admin centre's value should win, and write the decision down.
- Name the Global admin who will give consent, and the Teams admin who will prepare the changes.

### At rollout
- Open Teams apps > Manage apps in the Teams admin center and select Move to unified app management if your tenant has modified settings (controls table, row 1).
- Set the org-wide settings on the Align org-wide app settings page, then resolve each differing app individually or in bulk.
- Review the Review summary page before the Global admin accepts and finishes.

### After rollout
- Change availability of one low-risk app in one admin centre and confirm the other shows it, allowing up to 24 hours (rows 2 and 3).
- Re-check the org-wide app settings, because an org-wide change applies only to apps whose availability you did not set (row 4).
- Watch MC796790 in Message center for the Phase 3 timeline, which Microsoft says will come at least 60 days ahead.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Moving the tenant to unified agent and app management</strong><br><small>Tenant</small><br><small class="controls__note">Only a Global admin can give consent and apply the final changes. Any Teams or Global admin can work up to the Review summary page.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Move to unified app management <a href="https://learn.microsoft.com/microsoftteams/uam-tac-mac" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can use an agent or app (everyone, specific users or groups, no one)</strong><br><small>App</small><br><small class="controls__note">AppAssignmentType takes Everyone, UsersAndGroups or Noone. Learn says availability changes take up to 24 hours to take effect.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Users and groups › Select to manage who this app is installed for or available to in your organization › Availability › Edit availability › Available to <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -AppAssignmentType Everyone</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an agent or app is allowed or blocked for the organisation</strong><br><small>App</small><br><small class="controls__note">The reference describes IsBlocked as the state of the app in the tenant, and its example using $true is labelled as unblocking, so test the value before scripting.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Org-wide defaults for Microsoft, third-party and custom apps</strong><br><small>Tenant</small><br><small class="controls__note">As of November 2026, no automation for these defaults was found. Set-CsTeamsSettingsCustomApp is for the custom-app upload switch, not Let users install and use available apps by default. Changes take effect after a few hours.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › app type › Let users install and use available apps by default <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The unification wizard is a Teams admin center experience, and Microsoft Learn documents no cmdlet or API that runs it. After a tenant is unified, Learn says to allow or block an agent or app in the Teams admin center or on the Integrated apps page of the Microsoft 365 admin center.

Org-wide app settings are defaults. Learn says a change to the org-wide setting applies only to apps whose availability you have not set, so a per-app assignment (row 2) outranks the default (row 4).

The Update-M365TeamsApp cmdlet is a Teams module cmdlet. Its reference page describes updating app state, availability and installation, and does not mention unified management, so confirm in a test tenant that a scripted change appears in the other admin centre before relying on it.

## Open questions

- When will Phase 3 begin, and how will it resolve differences between the two admin centres for tenants that have not used the wizard? Watch MC796790 in Message center.
- Does a change made with Update-M365TeamsApp synchronise to the Microsoft 365 admin center in a unified tenant? The cmdlet reference page does not say.
- Will Microsoft publish a licence specific to availability unification? Watch the Learn page on unified agent and app management.
- Will Microsoft document an automation route for the move to unified app management, or is the Teams admin center wizard the only documented route?

<!-- rationale
risk: Medium. Once a tenant is unified, a block or availability change in either admin centre reaches Teams, Outlook and Microsoft 365 Copilot, and Microsoft's notice says tenants that do not act will be unified automatically in a later phase.
cost: Low. The Learn pages name the Teams Administrator role and no licence or meter; the cost shown is admin time to compare settings and run the wizard. A licence specific to unified management is not yet published.
impact: Medium. Administrators do the work, but the availability they align decides which agents and apps users see in Teams, Outlook and Microsoft 365 Copilot.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].note / command: Set-CsTeamsSettingsCustomApp controls custom-app uploading rather than the availability default. | Found: If the isSideloadedAppsInteractionEnabled is set to true, the switch is enabled. So that the custom apps can be uploaded as app packages and available in the organization's app store, vice versa. | Fix: Add https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamssettingscustomapp?view=teams-ps to sources with title 'Set-CsTeamsSettingsCustomApp'; this reference supports the distinction in controls[3].note. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamssettingscustomapp?view=teams-ps
- [contradicted, minor] Governance guidance: Before rollout, catalogue-export bullet / consistency: The governance checklist's catalogue-export instruction has no corresponding control row. | Found: Export the agent and app catalogue from the Teams admin center as CSV. Controls cover moving to unified management, per-app availability, allow/block status and org-wide defaults, but not catalogue export. | Fix: Remove the Before rollout bullet beginning 'Export the agent and app catalogue from the Teams admin center as CSV'; it asks readers to use a control not represented in the controls table.
-->
