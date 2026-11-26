---
title: "Microsoft Teams: improvements to the activity in other accounts and orgs panel"
slug: "microsoft-teams-activity-in-other-accounts-and-orgs-improvements"
roadmapId: 577901
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams desktop gets improvements to a panel that shows missed activity from other signed-in tenants. Microsoft has not stated the default or any licence, and no admin switch is documented, so admins should review it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "The Learn page for the panel names no licence and no meter. A licence requirement for this feature is not yet published."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["teams","cross-tenant","activities","macos","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 577901"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577901"
    kind: "roadmap"
  - title: "Activity in other accounts and orgs (Preview)"
    url: "https://learn.microsoft.com/microsoftteams/activity-in-other-accounts-orgs"
    kind: "learn"
  - title: "How different technologies affect Microsoft Teams sign-in"
    url: "https://learn.microsoft.com/microsoftteams/sign-in-teams"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether the activity in other accounts and orgs panel is available to users"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin setting for the panel is documented at the time of writing (November 2026)."
  - governs: "Which Microsoft Entra tenants Teams desktop accounts can sign in from"
    scope: "other"
    ui: null
    api:
      kind: "other"
      call: "RestrictTeamsSignInToAccountsFromTenantList (Windows registry value; macOS key in com.microsoft.teams)"
      docs: "https://learn.microsoft.com/microsoftteams/sign-in-teams"
    note: "Set by GPO or MDM on the device, not in an admin centre. Does not stop users switching to tenants where they are guests."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-19"
    note: "First briefing for this roadmap item: documents the panel from Learn, notes the preview-versus-roadmap difference and the gaps in default, licence and admin control."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 40 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 40 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 40
  confirmed: 38
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "809668f60974a59c74839bbec2359de3"
---

## What's changing

Microsoft plans improvements to the **Activity in other accounts and orgs** panel in the Teams desktop client. The roadmap item describes the panel as a way to preview and open chats, channels and other activity from other accounts and organisations in the main Teams window, without switching tenants.

Microsoft Learn documents the panel itself, not the improvements. A panel entry point icon appears in the Teams sidebar when a user is signed in to multiple accounts or organisations, with a badge counting new activity notifications. Selecting a notification opens that chat or channel in a separate child window without switching tenants in the main app window. Learn shows only 10 notifications per tenant in the panel, and lets users pin up to three tenants to the left sidebar. Notifications from pinned tenants do not show in the panel. Learn says the panel is for Teams on Windows and macOS desktop only. Microsoft Learn does not say what the roadmap's improvements change, so treat the roadmap description as the only statement of them.

The roadmap record lists the item as In development, with a target of January CY2027, release phase General Availability, platforms Desktop and Mac, and the Worldwide, GCC, GCC High and DoD clouds. The Learn page is titled as a preview and states that the feature is currently in Public Preview. The two sources therefore differ on stage, and the dates are Microsoft's targets, not commitments.

## Why it matters

For a service owner, the panel changes where a user sees another tenant's activity: in the main Teams window, rather than only after switching tenants. This matters most for consultants, secondees, guests in partner tenants and anyone who works across several organisations from one device.

Microsoft has not stated what happens on arrival or whether an admin must act, so base planning on no source saying that existing behaviour changes. Because the panel is documented only for users signed in to more than one account or organisation, expect questions mainly from that group, and expect no admin setting to be available to answer them with.

## Risk assessment

**Data exposure**

- The panel previews chats, channels and other activity from other organisations' tenants inside the main Teams window, and a notification opens in a child window. Content from another tenant can therefore appear beside the main tenant's work on the same screen. Learn documents no admin setting for the panel at the time of writing (November 2026).
- Viewing a notification in the panel does not mark it as read; Learn says items clear when clicked in the panel or viewed in the tenant's main Activity app.

**Security & identity**

- The panel relies on accounts the user has already signed in to. The device policy that restricts Teams sign-in to listed Microsoft Entra tenants limits which accounts can be added, but Learn says it does not stop users switching to tenants where they are invited as a guest. Microsoft has not said whether the panel lists guest tenants.

**Autonomy & actions**

- No change documented: the panel surfaces notifications and opens them on a user's click. Learn describes no automated action.

**Change & support**

- Learn says only 10 notifications per tenant are shown, and that pinned tenants are left out of the panel. Expect support questions about activity that seems to be missing.
- The roadmap target is January CY2027, while the Learn page is a preview page. Brief the help desk on both.

## Cost and licensing

No licence or meter is stated for this feature. The Learn page for the panel names no licence and no charge, and Microsoft has not published a licence requirement specific to it, so the licensing model is recorded as not yet published.

The only cost the sources show is indirect: admin time to tell affected users and the help desk what the panel does. The roadmap record gives no pricing.

## Scope

- **Users:** Learn says the panel entry point appears only when a user is signed in to multiple accounts or organisations, and that users with no access to other organisations or accounts do not see it.
- **Platforms:** the roadmap record lists Desktop and Mac. The Learn page says the panel is available on Teams for desktop (Windows and macOS) only.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.
- **Rollout:** the roadmap target is January CY2027, release phase General Availability, status In development. Microsoft has not described the rollout mechanics or a prerequisite beyond signing in to more than one account.

## Governance guidance

### Before rollout

- Identify which users work across several tenants, such as consultants and secondees, and tell them the panel and its notification previews are coming.
- Decide whether your organisation restricts which tenants Teams desktop can sign in to, using the device policy in the controls table.
- Brief the help desk on the 10-notification limit and on pinned tenants being left out of the panel.

### At rollout

- Check the Teams desktop client on a test device signed in to two tenants, and confirm what the panel shows and where a notification opens.
- Confirm with users on Windows and macOS that the entry point appears only once a second account is signed in.

### After rollout

- Re-read the Learn page for the panel and the Microsoft 365 Roadmap item for changes to the stage, default or any admin control.
- Collect user feedback on missed or duplicate notifications for the help desk.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the activity in other accounts and orgs panel is available to users</strong><br><small>Tenant</small><br><small class="controls__note">No admin setting for the panel is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Microsoft Entra tenants Teams desktop accounts can sign in from</strong><br><small class="controls__note">Set by GPO or MDM on the device, not in an admin centre. Does not stop users switching to tenants where they are guests.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>API</strong><br><code>RestrictTeamsSignInToAccountsFromTenantList (Windows registry value; macOS key in com.microsoft.teams)</code> <a href="https://learn.microsoft.com/microsoftteams/sign-in-teams" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns the panel on or off, and no Teams PowerShell or Graph setting for it, at the time of writing (November 2026). The second row is today's nearest control, not a control over this feature: it limits which Microsoft Entra tenants accounts can sign in from, so it governs how many accounts can exist for the panel to read. Learn says the policy is deployed through device management (MDM or GPO), and that it does not restrict users from being invited as guests in other tenants or switching to them.

## Open questions

- What do the roadmap's improvements change in the panel compared with the preview page? Watch the Learn page for the panel and the roadmap item.
- Is the panel on by default at general availability, and will an admin be able to turn it off? Watch Message center.
- Does the panel list tenants where the user is a guest, or only tenants where the user has an account of their own?
- Does any licence or plan requirement apply to the panel? Watch the Learn page for the panel.

<!-- rationale
risk: Low. The panel gathers missed activity notifications from tenants a user is already signed in to; the roadmap item describes no new data source, and Learn documents no admin setting for it.
cost: Low. The only cost the sources show is admin time to brief users; Microsoft has not published a licence or meter for this feature.
impact: Low. Learn says the panel appears only for users signed in to more than one account or organisation, so a minority of users notice it.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Before this change, users could see another tenant's activity only after switching tenants. | Found: Searched: 'Teams other accounts organizations notifications before switching tenants multitenant organizations'; opened activity-in-other-accounts-orgs and read Plan for multitenant organizations search excerpts. Neither establishes that historical restriction. | Fix: Replace the first sentence with 'For a service owner, the panel brings another tenant's activity notifications together in the main Teams window.' Remove 'rather than only after switching tenants'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Change & support; Governance guidance: Before rollout / behaviour: The panel shows only 10 notifications per tenant. | Found: Only 10 notifications are shown per tenant in the panel with an option to see all. | Fix: Qualify the notification-count statements and help-desk advice with 'with an option to see all', as documented at https://learn.microsoft.com/microsoftteams/activity-in-other-accounts-orgs. Replace 'the 10-notification limit' with 'the initial display of 10 notifications per tenant, with an option to see all'. | Source: https://learn.microsoft.com/microsoftteams/activity-in-other-accounts-orgs
- [supported, minor] front matter: licensing.model; summary; Cost and licensing; Open questions; rationale: cost / licensing: Licensing is recorded as unknown because Microsoft has not published a feature-specific licence requirement. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to 'included' and cite https://learn.microsoft.com/microsoftteams/user-access. Replace the licensing explanation with 'Manage Teams licenses states that, except for joining Teams meetings anonymously, each user in your organisation needs a Teams licence to use Teams. No panel-specific licence requirement is published.' In the summary, replace 'any licence' with 'a panel-specific licence requirement'; narrow the licensing question and rationale to panel-specific licensing. | Source: https://learn.microsoft.com/microsoftteams/user-access
- [contradicted, minor] front matter: action; summary; Governance guidance / consistency: The review action rating fits improvements to an existing interface for which the briefing recommends preparing users and the help desk before rollout. | Found: action: "review"; 'tell them the panel and its notification previews are coming'; 'Brief the help desk on the 10-notification limit'. | Fix: Set action to 'prepare' and replace 'admins should review it' in the summary with 'admins should prepare user communications'. The standard assigns prepare to improvements or redesigns of existing behaviour needing communication, even with an unknown default.
-->
