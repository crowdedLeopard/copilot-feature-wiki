---
title: "Microsoft Teams: admin list of custom apps that need updates for private and shared channels"
slug: "microsoft-teams-identify-custom-apps-that-need-updates-for-teams-private-and-shared-channe"
roadmapId: 569019
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams admin center gets a list of custom line-of-business apps that need updating for private and shared channels. Admins use it to chase developers; no admin setting is documented. Launched, September 2026 target."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Teams requires a Teams license for each organisational user except for anonymously joining meetings. Microsoft has not published a licence requirement specific to this admin list. The Manage apps page names the Teams Administrator role as a requirement for the Teams admin center."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","admin-center","app-management","channels","gcc"]
sources:
  - title: "Microsoft 365 Roadmap item 569019"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569019"
    kind: "roadmap"
  - title: "MC1459131: (Updated) Microsoft Teams: Prepare custom apps for private and shared channel compatibility"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1459131"
    kind: "message-center"
  - title: "Agents and tab apps for shared and private channels"
    url: "https://learn.microsoft.com/microsoftteams/platform/build-apps-for-shared-private-channels"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Manage custom apps in Microsoft Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/teams-custom-app-policies-and-settings"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Get-AllM365TeamsApps"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/get-allm365teamsapps"
    kind: "learn"
videos: []
related: ["microsoft-teams-m365-admin-centers-manage-teams-apps-that-work-on-outlook-and-m365-app"]
controls:
  - governs: "Which custom apps are listed as needing updates for private and shared channels"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api: null
    note: "View only. MC1459131 places the list under Manage apps; Learn does not describe its layout. Teams Administrator role."
  - governs: "Whether a custom app is allowed or blocked for the organisation"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Existing control for apps in general, not for channel support. Until migrated to unified app management, keep blocked apps synchronized in Teams admin center and under Integrated apps in Microsoft 365 admin center."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-21"
    note: "First briefing on the Teams admin center list of custom apps that need updates for private and shared channels."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 51 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the manifest conditions for tier1-only apps, removed an unsupported statement about Microsoft not updating custom apps, and set licensing to included (Teams licence) with the feature-specific gap narrowed."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the Allow or Block guidance: until a tenant is migrated to unified app management, blocked apps must be kept synchronized between Teams admin center and Microsoft 365 admin center."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-21"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 53
  unconfirmed: 0
  contradicted: 1
  attempts: 3
  hash: "675ea6b8e060cad4653679cfa9564ed2"
---

## What's changing

Teams admin center now lists the custom line-of-business (LOB) apps in a tenant that need updating to work in private and shared channels. The roadmap item says the list helps admins identify impacted apps, understand which apps need developer action and coordinate updates.

Microsoft's notice MC1459131 says admins can view a list of custom LOB apps that are not compatible with private and shared channels in the Teams admin center under Teams apps > Manage apps. The notice gives a Worldwide rollout window of mid-September 2026 (previously early September) to late September 2026. Its end date is 2026-11-30, and it sets no act-by date.

The roadmap record lists the item as Launched, with a target of September CY2026, General Availability, on Web, for Worldwide (Standard Multi-Tenant) and GCC. The notice gives a window for Worldwide only. No Microsoft Learn page found describes the admin list itself, so what it shows and how it decides an app is incompatible rests on the roadmap and the notice.

The fix sits with developers. Microsoft's developer page says most apps can support shared and private channels with a simple manifest update. In app manifest v1.25 and later, `supportsChannelFeatures` replaces `supportedChannelTypes`. An app that does not use channel or team membership to determine message delivery, task assignment or permissions, access or manage files stored in Teams or SharePoint, combine or share data across multiple channels or teams, or customize the experience based on internal, guest or external users needs only `supportsChannelFeatures: tier1` added to its manifest and verification and testing across channels.

## Why it matters

This is a work list for service owners. Microsoft's notice says that if apps are not updated to support private and shared channels, users may be unable to access those app experiences in these channels. Custom apps are built within or commissioned for your organisation, so the update work sits with your own developers or suppliers.

If nobody acts, Microsoft has not stated that the change alters anything for existing apps. The exposure is that apps users rely on stay unavailable in private and shared channels. Use the list to find owners and agree dates early, because the notice itself recommends reviewing custom apps used in team and channel scenarios and asking developers to complete the required updates.

## Risk assessment

**Data exposure**
- The list is a report on apps; the sources describe no new data access. The developer page warns that apps which ignore channel boundaries risk unintended data exposure, since private and shared channels have their own SharePoint sites. Treat that as a review point for each update, not as a feature of the list.

**Security & identity**
- Updates for these channels involve membership and external users. The developer page says channel members can include guests and cross-tenant users, and that apps needing to tell them apart must validate user roles and tenant IDs. Ask developers how each app does this before you allow the updated version.

**Autonomy & actions**
- No change: the sources describe the list as a view and do not describe any automatic action on apps.

**Change & support**
- Affected custom apps may be unavailable to users in private and shared channels until updated, per MC1459131. Expect helpdesk questions from channel members and plan the developer work before they arise.
- The developer page says apps already published with an earlier manifest version continue to work, and that a manifest declaring `supportedChannelTypes` cannot be uploaded or submitted under v1.25 and later. Developers who move to v1.25 must migrate the property.

## Cost and licensing

Teams requires a Teams license for each organisational user except for anonymously joining meetings, per the Manage Teams licenses page. Microsoft has not published a licence requirement specific to this admin list. The Manage apps page says only that you need a Teams Administrator role to use the Teams admin center.

No meter is documented for the list at the time of writing (November 2026). The known cost is indirect: admin time to review the list and developer or supplier time to update, test and redeploy each custom app. The developer page gives no price or estimate for that work.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, the Web platform and General Availability. MC1459131 gives a Worldwide rollout window only (mid-September to late September 2026), so the GCC timing is not stated in the notice.

The list covers custom LOB apps, per the notice, and is read by administrators in the Teams admin center. The Manage apps page says the Teams Administrator role is required for the admin center. The developer page notes that message extension apps that operate only in personal scope do not require updates to be available in shared and private channels.

## Governance guidance

### Before rollout
- Open Teams admin center > Teams apps > Manage apps and look for the list of custom apps flagged for private and shared channels; Microsoft Learn does not yet describe its layout.
- Identify the owner or supplier of each flagged app, using the developer contact details on each app's details page.
- Send developers the Microsoft developer page on shared and private channels and ask for a date for the `supportsChannelFeatures` manifest update.

### At rollout
- Check each flagged app against the developer page's test guidance: standard, private and shared channel.
- Hold new app versions until developers confirm how the app handles guests, cross-tenant users and channel SharePoint sites.
- Tell channel owners which custom apps may be unavailable in their private and shared channels until updated.

### After rollout
- Recheck the list after each app update and record which apps still appear.
- Use the Allow or Block control on Manage apps for any custom app you decide to withdraw instead of updating. Until your tenant is migrated to unified app management, keep blocked-app settings synchronized in Teams admin center and under Integrated apps in Microsoft 365 admin center.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which custom apps are listed as needing updates for private and shared channels</strong><br><small>Tenant</small><br><small class="controls__note">View only. MC1459131 places the list under Manage apps; Learn does not describe its layout. Teams Administrator role.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a custom app is allowed or blocked for the organisation</strong><br><small>App</small><br><small class="controls__note">Existing control for apps in general, not for channel support. Until migrated to unified app management, keep blocked apps synchronized in Teams admin center and under Integrated apps in Microsoft 365 admin center.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The list is documented only in the roadmap item and MC1459131, which place it under Teams apps > Manage apps. Microsoft Learn documents no switch for it and no scripting surface for it at the time of writing (November 2026), so the first row shows no API.

The Allow or Block row is an existing control for apps in general, not for this feature. It decides whether an app is available in the organisation and does not change whether the app supports private and shared channels. Until your tenant is migrated to unified app management, keep blocked-app settings synchronized in Teams admin center and under Integrated apps in Microsoft 365 admin center. The Teams admin center needs a Teams Administrator role per the Manage apps page.

## Open questions

- How does the Teams admin center decide that a custom app is incompatible, and does it rely on the `supportsChannelFeatures` manifest declaration? Watch the Manage apps and developer pages on Microsoft Learn.
- Is the list on by default for every tenant, and is there any admin setting for it? Microsoft has not stated either.
- Does the GCC rollout follow the Worldwide window? The record lists GCC; the notice gives dates for Worldwide only. Watch Message center.
- Is any licence requirement specific to the list published beyond the Teams licence? Microsoft has not published one.

<!-- rationale
risk: Medium. The list itself only reports on apps, but Microsoft's notice says users may be unable to reach custom app experiences in private and shared channels until developers update those apps.
cost: Low. The only cost the sources show is admin and developer time to find and update affected custom apps; no licence requirement or meter specific to the list is published.
impact: Medium. Teams administrators see the list, app developers must act on it, and users of affected custom apps in team channels notice if an app is not updated.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing; Governance controls / absence: No Microsoft Learn page describes the admin list itself, which is documented only in the roadmap and MC1459131. | Found: Admins can now view custom apps in the Teams admin center that need updates to work in private and shared channels, helping them identify apps that require developer action. | Fix: Replace the What's changing sentence with 'Microsoft Learn's Teams admin release notes also confirm the list, but its layout and incompatibility criteria are not yet documented.' Replace the first Governance controls sentence with 'The roadmap, MC1459131 and Teams admin release notes document the list; MC1459131 places it under Teams apps > Manage apps.' Add https://learn.microsoft.com/officeupdates/teams-admin to sources. Retain the narrower gaps about layout, detection criteria and automation. | Source: https://learn.microsoft.com/officeupdates/teams-admin#october-07,-2026
-->
