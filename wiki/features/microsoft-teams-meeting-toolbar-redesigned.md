---
title: "Microsoft Teams: redesigned meeting controls with pin, unpin and reorder"
slug: "microsoft-teams-meeting-toolbar-redesigned"
roadmapId: 560321
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams meeting controls are re-laid out and users can pin, unpin and drag controls. On by default; no tenant switch is documented. No action is required, but plan communications and review meeting app pinning policies."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft documents a Teams licence as the general requirement for organisational users, except when joining meetings anonymously; no licence or charge specific to this redesign is published. Source: Manage Teams licenses."
audiences: ["m365-admin","change-adoption","service-owner","end-user"]
tags: ["teams","adoption","app-management","meeting-controls","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 560321"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560321"
    kind: "roadmap"
  - title: "MC1317197: (Updated) Microsoft Teams: A refreshed in-meeting experience with simpler controls and a smarter share panel"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1317197"
    kind: "message-center"
  - title: "New meeting controls experience in Microsoft Teams"
    url: "https://adoption.microsoft.com/microsoft-teams/new-meeting-controls-experience"
    kind: "docs"
  - title: "Use setup policies to manage, install and pin agents and apps for users"
    url: "https://learn.microsoft.com/microsoftteams/teams-app-setup-policies"
    kind: "learn"
  - title: "Set-CsTeamsAppSetupPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsappsetuppolicy"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Tenant-wide switch for the redesigned meeting controls"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice MC1317197 says the new experience cannot be disabled at the tenant level, and the opt-out toggle is per user."
  - governs: "Which apps are pinned in meetings organised by users assigned a setup policy"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Setup policies > policy > Edit > Pinned apps > Add apps"
      docs: "https://learn.microsoft.com/microsoftteams/teams-app-setup-policies"
    api:
      kind: "powershell"
      call: "Set-CsTeamsAppSetupPolicy -Identity <policy name> -AppPresetMeetingList <list>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsappsetuppolicy"
    note: "Pinned apps only. Teams Administrator or higher. Microsoft documents the cmdlet for completeness but says not to use it; edit policies in the Teams admin center. For specific users, extensions apply only in meetings they organise."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-07-21T22:37:32"
changes:
  - date: "2026-11-24"
    note: "New briefing on the Teams meeting toolbar redesign, using the rollout windows in MC1317197 as updated 23 September 2026."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected the setup policy path, the PowerShell qualifier and the pinning scope, and set the licence to the general Teams requirement."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 60 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 60
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "865b604019688eccc4c53524a3db7665"
---

## What's changing

Teams is redesigning the in-meeting toolbar. The roadmap item says users can pin, unpin and reorder controls, Raise Hand is grouped under Reactions to reduce mis-clicks, and Leave is clearly separated on the right.

Microsoft's notice MC1317197 adds detail. Meeting controls are centre-aligned with microphone, camera and share grouped together, less-used actions move into a reorganised More menu, and users personalise controls by drag and drop. The notice says the new experience is enabled by default and cannot be disabled at the tenant level. During rollout users can opt in early and can temporarily return to the previous experience from Teams settings; Microsoft calls this opt-out a temporary adoption aid and says it will be retired, with advance notice in a separate Message Center post.

The notice lists known limitations: pinned-control preferences do not sync across devices at launch, but persist across meetings on the same client, and cross-device sync is planned for a future release. Existing meeting app pinning policies continue to be honoured, and new ones support up to two apps pinned to the main meeting controls, with more in the More menu.

The roadmap record lists the platforms as Desktop and Mac; the notice names Teams for Windows desktop, Teams for Mac desktop and Teams for the web, and excludes consumer Teams, iOS, Android, Teams Rooms and Linux. The roadmap status is Rolling out with a target of July CY2026. The notice (updated 23 September 2026) gives later windows: Targeted Release from late July to mid-August 2026; General Availability in Worldwide from mid-October to late October 2026; GCC and GCC High from late October to mid-December 2026; DoD from mid-December 2026 to early January 2027. The same notice covers a redesigned share panel under roadmap ID 502520, which this briefing does not cover. Microsoft Learn documents no setting for the redesign at the time of writing (November 2026), so behaviour here is as the roadmap and the notice describe it.

## Why it matters

This is a visible change to something every meeting participant uses, and nobody can switch it off for the tenant. Expect helpdesk questions about where Raise hand, Reactions and Leave went, and about customisation that does not follow a user to another device. Microsoft's notice does not require action, but its recommendations are to review meeting app pinning policies, brief users and support teams, and update training material.

The practical decision for an administrator is communication timing and whether existing app pinning policies still give the intended result with only two apps on the main controls. Because the default is on, a tenant that does nothing gets the redesign when its cloud's rollout window reaches it.

## Risk assessment

**Data exposure**
- No change identified: the roadmap and the notice describe layout and personalisation of controls, and the notice states no compliance considerations were identified.

**Security & identity**
- No new permission or identity mechanism is described. Meeting role and policy settings are not described as changing; confirm in a pilot that controls hidden in the More menu remain reachable for the people who need them.

**Autonomy & actions**
- No autonomous behaviour is described. The stated aim is fewer accidental actions: Leave is separated and Raise hand is grouped under Reactions.

**Change & support**
- Users who rely on muscle memory will notice the new layout; the notice says the opt-out toggle is per user, temporary and will be retired, so any helpdesk advice that relies on it needs an end date.
- Personalised pins do not sync across devices at launch, so a user can see different toolbars on two machines.
- App pinning policies: only two apps appear in the main meeting bar, so policies pinning more apps will push the rest into the More menu.

## Cost and licensing

Microsoft documents a Teams licence as the general requirement for organisational users, except when joining meetings anonymously; no licence or charge specific to this redesign is published (Manage Teams licenses, https://learn.microsoft.com/microsoftteams/user-access). The cost the sources point to is time: communicating the change, updating training and briefing the helpdesk, as the notice recommends.

No meter is documented for this feature at the time of writing (November 2026).

## Scope

Microsoft's notice says all Teams work and school users joining meetings are affected. Platforms in the notice are Teams for Windows desktop, Teams for Mac desktop and Teams for the web; consumer Teams, iOS, Android, Teams Rooms and Linux are listed as not in scope. The roadmap record lists Desktop and Mac.

Clouds on the roadmap record: Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Release phases: General Availability and Targeted Release. Rollout windows are in What's changing. The notice states the new experience is enabled by default and cannot be disabled at the tenant level.

Teams Administrator or higher can edit app setup policies, which are the policy route for pinned meeting apps; Microsoft Learn states that role for managing app setup policies.

## Governance guidance

### Before rollout
- Review existing app setup policies that pin meeting apps (Teams admin center), and plan new pinning around the two-app limit on the main meeting controls that Microsoft's notice and Learn describe.
- Download the IT Pro onboarding guide and the end-user visual guide from the Teams adoption page, and brief the helpdesk before your cloud's rollout window.
- Put the cross-device sync limitation and the temporary opt-out into user communications and support scripts.

### At rollout
- Confirm in meetings organised by pilot users assigned the policy that pinned apps appear in the main meeting bar or More menu as expected.
- Tell users where Leave, Raise hand and Reactions now sit and how to pin, unpin and reorder controls.

### After rollout
- Track helpdesk tickets that mention the toolbar and feed them back to your communications.
- Watch Message center for the separate post Microsoft says will announce retirement of the per-user opt-out toggle.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for the redesigned meeting controls</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice MC1317197 says the new experience cannot be disabled at the tenant level, and the opt-out toggle is per user.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which apps are pinned in meetings organised by users assigned a setup policy</strong><br><small>User</small><br><small class="controls__note">Pinned apps only. Teams Administrator or higher. Microsoft documents the cmdlet for completeness but says not to use it; edit policies in the Teams admin center. For specific users, extensions apply only in meetings they organise.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Setup policies › policy › Edit › Pinned apps › Add apps <a href="https://learn.microsoft.com/microsoftteams/teams-app-setup-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsAppSetupPolicy -Identity &lt;policy name&gt; -AppPresetMeetingList &lt;list&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsappsetuppolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The only admin-side control the sources describe is the app setup policy, which governs apps pinned to the meeting bar, not the layout of built-in controls. Microsoft's notice says existing meeting app pinning policies are honoured and new ones support up to two apps on the main controls; Learn says the in-meeting bar displays only two agents and apps and the rest display under the More option.

The notice says the new experience cannot be disabled at the tenant level, and that the per-user opt-out toggle is controlled by individual users and cannot be managed at the tenant level. The table therefore has a row with both sides marked not yet documented for a tenant switch.

For policies assigned to specific users, meeting extensions are available only in meetings organised by those users and are also available to other participants.

Microsoft documents the Set-CsTeamsAppSetupPolicy cmdlet for completeness but explicitly says not to use it; all creation and modification of app setup policies, excluding assignment or removal from users, must happen in the Teams admin center. Learn says changes can take a few hours to take effect after a policy is edited or assigned.

## Open questions

- Will Microsoft add any tenant or policy setting for the redesigned meeting controls? The notice says none exists; watch Message center and the Teams adoption page.
- When will the per-user opt-out toggle be retired? Microsoft says advance notice will come in a separate Message Center post.
- When will personalised control pins sync across devices? The notice says cross-device sync is planned for a future release.
- Will Microsoft publish a licence or charge specific to the redesign? Microsoft documents a Teams licence as the general requirement for organisational users, except when joining meetings anonymously; none specific to this redesign is published. Watch the roadmap item.

<!-- rationale
risk: Low. This changes the layout of in-meeting buttons inside existing meeting permissions, and Microsoft's notice MC1317197 lists no compliance considerations; the exposure is user confusion, not data.
cost: Low. The cost the sources show is admin, helpdesk and training time to prepare users. Microsoft documents a Teams licence as the general requirement for organisational users, except when joining meetings anonymously; no licence or charge specific to this redesign is published.
impact: High. Microsoft's notice says all Teams work and school users joining meetings are affected, and the new experience is on by default and cannot be disabled at the tenant level.
-->
