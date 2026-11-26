---
title: "Microsoft Teams: open, edit and discuss shared pages inside Teams"
slug: "microsoft-teams-open-and-collaborate-on-pages-in-teams"
roadmapId: 580886
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans to let users open a page shared in a Teams chat or channel inside Teams, in the main window or a new one, and edit and discuss it there. No new admin control is documented; check existing Loop settings and brief users."
status: "in-development"
releasePhase: ["General Availability","Preview","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "January CY2027"
previewDate: "January CY2027"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Loop requirements page lists a OneDrive or SharePoint licence for Loop components and the Loop with workspaces service plan for Loop workspaces. Which applies to opening a shared page in Teams is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","microsoft-loop","channels","cloud-policy","powershell","sharing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 580886"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580886"
    kind: "roadmap"
  - title: "Manage pages and loop components in channels"
    url: "https://support.microsoft.com/en-us/teams/teams-channels/manage-pages-and-loop-components-in-channels"
    kind: "docs"
  - title: "Admin policies for Loop components and Loop workspaces"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration"
    kind: "learn"
  - title: "Requirements for Loop components and Loop workspaces"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-requirements"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
  - title: "Get-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/get-spotenant"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Overview of Loop storage"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-storage"
    kind: "learn"
  - title: "Overview of Loop workspaces and Loop components permissions"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-permission"
    kind: "learn"
videos: []
related: ["cloud-policy","copilot-notebooks","conditional-access"]
controls:
  - governs: "Loop component creation and integration in Teams chats and channels"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsLoopEnabled $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "SharePoint Online administrator. Tenant-wide, can't be set per user. Microsoft has not said whether it governs opening shared pages in Teams."
  - governs: "Whether users can create Loop workspaces, including Teams channel workspaces"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Home > Org settings > Services > Loop > Loop workspaces"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration"
    api: null
    note: "Office Apps Administrator, Security Administrator or Global Administrator. Sets Create Loop workspaces in Loop for all users; does not restrict access to existing workspaces."
  - governs: "Switch for opening shared pages inside Teams"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting specific to this feature is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-26T00:16:54"
changes:
  - date: "2026-11-26"
    note: "New briefing: shared pages open and can be edited inside Teams, with the existing Loop controls for Teams and workspaces."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: editing in Teams makes changes easier for people with edit access, not anyone in the chat; completed the Loop workspaces admin path; cited the Loop storage and permissions pages."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 67 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: Autonomy & actions now says the roadmap does not state what happens on arrival; completed the Cloud Policy group-scoping route; cited Get-SPOTenant; removed the firewall checklist item."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 56 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 56
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "1ab2202181235e717f1c231522358595"
---

## What's changing

Microsoft plans to let people open a page that has been shared in a Teams chat or channel inside Teams, edit it there and discuss it with colleagues. The roadmap item states that a page can be opened in the main Teams window or in a new window, whichever the user prefers. Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description.

The roadmap's more-information link is the support article on managing pages and Loop components in channels. It describes channel pages as Loop pages: a channel member adds one with **Add a tab** > **New page**, pages created through a channel are listed in that channel's **Shared** tab, and once a page is created "all users who have access to the channel will be able to see and contribute to it". The roadmap does not say whether Copilot Pages shared in Teams are included.

Microsoft has not stated whether opening pages in Teams will be on by default, or how it changes what happens today when someone selects a shared page link.

The item is In development, with preview and general availability both targeted for January CY2027. The record lists the release phases General Availability, Preview and Targeted Release, the platforms Desktop, Mac and Web, and the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds.

## Why it matters

This is a change to where people work on content they can already reach, not a new way to share it. The governance questions are the existing Loop ones: who can create pages and components, where they are stored, and who can edit them. Microsoft's Loop admin page says Loop components "are always shared as editable by others", even where the tenant's default link is view-only, so editing beside the conversation makes it easier for people with edit access to change shared content.

Microsoft has not stated what happens on arrival, and no source says existing permissions or storage change. The work is telling users and the help desk where pages will open, and confirming that the tenant's Loop settings are what it wants, bearing in mind that the Teams Loop switch applies to the whole tenant.

## Risk assessment

**Data exposure**
- No new data reach is described: the roadmap covers pages already shared into a chat or channel. The support article says everyone with access to a channel can see and contribute to its pages, which is today's behaviour.
- Loop files are stored in OneDrive, SharePoint or SharePoint Embedded; channel pages are found and deleted in SharePoint, so existing SharePoint retention and sharing settings remain the controls ([Loop storage](https://learn.microsoft.com/microsoft-365/loop/loop-storage); [Loop permissions](https://learn.microsoft.com/microsoft-365/loop/loop-permission)).

**Security & identity**
- No change described. The Loop admin page says its creation settings "don't restrict access to existing Loop files or workspaces" and points to Conditional Access policies to block access to existing Loop content.

**Autonomy & actions**
- The roadmap describes users opening and editing shared pages; it does not describe autonomous actions or state what happens on arrival.

**Change & support**
- Users will find pages opening in Teams or a new Teams window; expect questions about where edits are saved and who can see them.
- The Teams Loop switch (`IsLoopEnabled`) applies to the entire tenant and can't be configured per user, so there is no documented per-group pilot for the Teams side.
- The roadmap lists GCC, GCC High and DoD, while the Loop requirements page lists Loop workspaces as not available in those clouds and Loop components in Teams as available.

## Cost and licensing

- **Licence:** Microsoft has published no licence specific to this feature. The [Loop requirements page](https://learn.microsoft.com/microsoft-365/loop/loop-requirements) lists a "OneDrive or SharePoint license" for Loop components and the "Loop with workspaces service plan" for Loop workspaces. Which of these covers opening a shared page in Teams is not yet published.
- **Meter:** none is documented for this feature at the time of writing (November 2026).
- **Indirect costs:** the [Loop admin policies page](https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration) states that Loop file storage "counts against your organization's SharePoint quota". Expect admin time for user communication and help-desk briefing.

## Scope

- **Users:** people who receive a page in a Teams chat or channel (roadmap item).
- **Platforms:** Desktop, Mac and Web, as the record lists them. Mobile is not listed.
- **Clouds:** the record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The Loop requirements page lists "Loop components in Teams (chat, channels, chat notes, meeting notes)" as available in the US government clouds and Loop workspaces as not available there.
- **Roles:** `Set-SPOTenant` must be run by a SharePoint Online administrator. The Loop setting in the Microsoft 365 admin center is changed as Office Apps Administrator, Security Administrator or Global Administrator.
- **Prerequisites:** the Loop requirements page asks for WebSocket traffic to `*.svc.ms` and `*.office.com` for real-time collaboration, and an Exchange Online mailbox for @mentions and workspace sharing.
- **Rollout:** preview and general availability targeted for January CY2027, with Targeted Release among the listed phases.

## Governance guidance

### Before rollout
- Check the tenant's Teams Loop state by running [`Get-SPOTenant`](https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/get-spotenant) as a SharePoint administrator and reading `IsLoopEnabled`.
- Confirm whether Loop workspace creation is allowed under Microsoft 365 admin center > Home > Org settings > Services > Loop > Loop workspaces checkbox.
- Brief the help desk that, per the roadmap, shared pages can be opened in the main Teams window or a new window.

### At rollout
- Watch Message center for a post on this item that states the default and the rollout window.
- Test with a Targeted Release user that a page shared in a chat, and one added through **Add a tab** > **New page** in a channel, open and edit in Teams on desktop, Mac and web.

### After rollout
- Recheck `IsLoopEnabled` in every region if the tenant has several, since Microsoft says Loop components must be disabled in all regions for consistent results.
- Gather help-desk questions about where page edits are stored and feed them into user guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Loop component creation and integration in Teams chats and channels</strong><br><small>Tenant</small><br><small class="controls__note">SharePoint Online administrator. Tenant-wide, can't be set per user. Microsoft has not said whether it governs opening shared pages in Teams.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsLoopEnabled $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can create Loop workspaces, including Teams channel workspaces</strong><br><small>Tenant</small><br><small class="controls__note">Office Apps Administrator, Security Administrator or Global Administrator. Sets Create Loop workspaces in Loop for all users; does not restrict access to existing workspaces.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Home › Org settings › Services › Loop › Loop workspaces <a href="https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch for opening shared pages inside Teams</strong><br><small>Tenant</small><br><small class="controls__note">No setting specific to this feature is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting that governs opening shared pages inside Teams at the time of writing (November 2026); the other rows are the existing Loop controls. `IsLoopEnabled` "controls Loop component creation and integration in Microsoft Teams", applies to the entire tenant and can't be configured at the user level. For Teams creation and integration, the Loop admin page says "Teams only checks" this SharePoint property, while it lists Teams channel shared workspaces under the Cloud Policy setting **Create Loop workspaces in Loop**.

The Loop admin page says these controls govern creation and "don't restrict access to existing Loop files or workspaces"; it points to [Conditional Access policies](https://learn.microsoft.com/sharepoint/control-access-from-unmanaged-devices) for blocking access to existing Loop content. The admin centre checkbox sets **Create Loop workspaces in Loop** for all users; to scope it to groups, the same page uses Cloud Policy (config.office.com > Customization > Policy Management > policy configuration > Choose the scope > group > Configure Settings > Create Loop workspaces in Loop).

## Open questions

- Will opening shared pages in Teams be on by default, and does it replace opening them in the browser or the Loop app? Watch Message center for a post on this item.
- Does the feature cover Copilot Pages shared in chats and channels, which have their own Cloud Policy setting, **Create and view Copilot Pages and Copilot Notebooks**?
- Does `Set-SPOTenant -IsLoopEnabled $false` stop pages opening in Teams, or only the creation of Loop components?
- Will GCC, GCC High and DoD tenants get this for workspace pages, given that the Loop requirements page lists Loop workspaces as not available in those clouds?
- Which licence covers opening and editing a workspace page in Teams: a OneDrive or SharePoint licence, or the Loop with workspaces service plan?

<!-- rationale
risk: Low. The roadmap describes opening and editing pages that have already been shared into a chat or channel, and no source says sharing, permissions or storage change.
cost: Low. No licence or meter specific to this feature is published; the known costs are user communication and Loop files counting against SharePoint storage quota.
impact: Medium. People who receive and work on pages in Teams chats and channels will notice where pages open; administrators see no new setting.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: The Loop admin page says components are always shared as editable, even when other files' default share links are view-only. | Found: the components are always shared as editable by others, even if your organization is set to create shareable links that have view-only permissions as the default value for other file types. | Fix: After that sentence add: 'Microsoft's Loop permissions page also documents page and component sharing with edit or read-only access; the admin page's statement should not be read as granting every recipient edit access.' Cite https://learn.microsoft.com/microsoft-365/loop/loop-permission. | Source: https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration
- [supported, minor] Governance controls / admin-path: The Loop admin page gives config.office.com > Customization > Policy Management > policy configuration > Choose the scope > group > Configure Settings > Create Loop workspaces in Loop for group scoping. | Found: Select Customization from the left pane. Select Policy Management. Create a new policy configuration or edit an existing one. From the Choose the scope dropdown list, choose either All users or select the group for which you want to apply the policy. | Fix: After the path add: 'The Cloud Policy overview describes selecting Add Groups on Choose the scope before Configure Settings: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy.' This acknowledges the different group-selection steps without invalidating the cited Loop route. | Source: https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration
- [supported, minor] Open questions / applicability: Copilot Pages have the separate Cloud Policy setting Create and view Copilot Pages and Copilot Notebooks. | Found: Copilot Pages and Copilot Notebooks creation | Cloud Policy: Create and view Copilot Pages and Copilot Notebooks | Enabled | Fix: Add https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration to sources, titled 'Admin policies for Copilot Pages and Copilot Notebooks', and cite it on the existing sentence naming that policy. | Source: https://learn.microsoft.com/microsoft-365/loop/cpcn-admin-configuration
-->
