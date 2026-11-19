---
title: "Microsoft Teams: latest meeting experience for anonymous join on Safari and Firefox web"
slug: "microsoft-teams-latest-meeting-experiences-with-performance-improvements-on-web-for-safari"
roadmapId: 329253
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Anonymous participants joining Teams meetings from Safari or Firefox on the web get the latest meeting experience. Launched; Microsoft Learn describes no admin setting for it, so the work is communication."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "September CY2024"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "none"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature: the roadmap names no licence. Microsoft Learn's anonymous-join page notes that some features it describes, such as email-code verification of anonymous users, need Teams Premium."
audiences: ["m365-admin","change-adoption"]
tags: ["teams","meeting-policy","user-experience","performance","admin-center","powershell","gcc","gcc-high","dod"]
sources:
  - title: "Manage anonymous participant access to Teams meetings and events (IT admins)"
    url: "https://learn.microsoft.com/microsoftteams/anonymous-users-in-meetings"
    kind: "learn"
  - title: "Teams for Web - Overview and prerequisites"
    url: "https://learn.microsoft.com/microsoftteams/teams-client-web"
    kind: "learn"
  - title: "Plan for meetings with external participants in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/plan-meetings-external-participants"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 329253"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=329253"
    kind: "roadmap"
videos: []
related: ["meeting-policy"]
controls:
  - governs: "Whether anonymous users can join meetings, organisation-wide"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting settings > Participants > Anonymous users can join a meeting"
      docs: "https://learn.microsoft.com/microsoftteams/anonymous-users-in-meetings"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingConfiguration -Identity <policy name> -DisableAnonymousJoin $true"
      docs: "https://learn.microsoft.com/microsoftteams/anonymous-users-in-meetings"
    note: "Learn says this organisation-wide setting is going away and recommends leaving it On. $true prevents anonymous join."
  - governs: "Which organisers can host meetings that allow anonymous participants"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting join & lobby > Anonymous users can join a meeting unverified"
      docs: "https://learn.microsoft.com/microsoftteams/anonymous-users-in-meetings"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowAnonymousUsersToJoinMeeting $false"
      docs: "https://learn.microsoft.com/microsoftteams/anonymous-users-in-meetings"
    note: "Per-organiser policy that Learn recommends for managing anonymous join. Changes might take up to 24 hours to take effect."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-19T01:58:21"
changes:
  - date: "2026-11-19"
    note: "First briefing for this item: roadmap description plus the documented anonymous-join controls; no Learn page describes the experience itself."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 42 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: Unverified label wording, anonymous-join scope, Teams for Web and unchanged-join-rules statements narrowed to what Learn says; lobby-policy checklist step removed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 45 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-19"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 43
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "aa4cfbe53fc716e150d8e54450af4cc9"
---

## What's changing

The roadmap item states that the latest Teams meeting experiences will be available for Teams on the web in Safari and Firefox, for anonymous join only. It lists four parts: performance improvements, a refreshed pre-join screen, an updated meeting stage and an updated meeting toolbar.

An anonymous participant is a person whose identity Teams has not verified, for example someone not signed in to Teams with a work or school account. When anonymous users join a meeting unverified, Teams displays **Unverified** next to their name, according to Microsoft Learn's page on anonymous access. The roadmap limits this change to anonymous join.

The roadmap record shows status Launched, release phase General Availability, platform Web, and a target date of September CY2024. It lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. Microsoft Learn has no page that describes this specific experience at the time of writing (November 2026), so the behaviour above is the roadmap's own description.

## Why it matters

For most tenants this is a visual and performance change that external guests see when they click a meeting link in Safari or Firefox. Microsoft Learn documents anonymous-join settings, lobby policies and organiser meeting options that govern anonymous meeting access.

Microsoft has not stated what happens on arrival, so the page cannot say whether anything needed switching on. Because the status is Launched and no source says existing behaviour changes, treat this as awareness: tell the helpdesk and meeting organisers who invite external guests that the join screens in these browsers may look different.

## Risk assessment

**Data exposure**

- The roadmap item describes interface and performance changes and names no new data access. What anonymous participants can reach is still governed by the existing meeting settings.
- Anonymous participants do not have access to meeting chat before and after the meeting, to profile cards or to collaborative meeting notes, according to Microsoft Learn's anonymous-access page.

**Security & identity**

- Anonymous users are users whose identities are not verified, so the refreshed pre-join and stage do not change the trust you can place in a participant. Lobby policies affect how anonymous participants join, so keep the lobby settings that suit your organisation.

**Autonomy & actions**

- No change described: the roadmap item lists no automated or agent behaviour.

**Change & support**

- External guests on Safari or Firefox may see a different pre-join screen, stage and toolbar from the ones in your existing join instructions. Check any screenshots in guest-facing meeting guidance.

## Cost and licensing

The roadmap item names no licence, add-on or meter for this experience, and Microsoft Learn's anonymous-access page names none for joining as an anonymous participant. A licence or price specific to this experience is not yet published.

The same page says some features it describes require Teams Premium, and that only organisers with a Teams Premium licence can use the option to require anonymous users to verify with an email code. That option is separate from this web experience.

The indirect cost is admin and helpdesk time to update guest-facing guidance.

## Scope

**Who is affected.** Anonymous participants joining meetings from Safari or Firefox on the web. The roadmap item says "for anonymous join only".

**Clouds and platform.** The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the platform Web.

**Rollout.** Status is Launched with the release phase General Availability and a target date of September CY2024. No Message Center post was supplied with the record.

**Related browser documentation.** Microsoft Learn's Teams for Web page lists Microsoft Edge, Chrome, Firefox and Safari as browsers on which the Teams for Web client is available. That page does not describe this specific anonymous-join refresh.

## Governance guidance

### Before rollout

- Identify the organisers and teams who regularly invite external guests, and brief them that the join screens in Safari and Firefox may look different.
- Review whether anonymous join is what you want: check the organisation-wide and per-organiser anonymous-join settings in the controls table.

### At rollout

- Update helpdesk scripts and any guest-facing joining instructions that show Safari or Firefox screens.

### After rollout

- Collect guest feedback and helpdesk tickets about joining from Safari and Firefox, and raise any fault with Microsoft support.
- Recheck the Teams for Web and anonymous-access pages on Microsoft Learn for a page that describes this experience.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether anonymous users can join meetings, organisation-wide</strong><br><small>Tenant</small><br><small class="controls__note">Learn says this organisation-wide setting is going away and recommends leaving it On. $true prevents anonymous join.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting settings › Participants › Anonymous users can join a meeting <a href="https://learn.microsoft.com/microsoftteams/anonymous-users-in-meetings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingConfiguration -Identity &lt;policy name&gt; -DisableAnonymousJoin $true</code> <a href="https://learn.microsoft.com/microsoftteams/anonymous-users-in-meetings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which organisers can host meetings that allow anonymous participants</strong><br><small>User</small><br><small class="controls__note">Per-organiser policy that Learn recommends for managing anonymous join. Changes might take up to 24 hours to take effect.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting join &amp; lobby › Anonymous users can join a meeting unverified <a href="https://learn.microsoft.com/microsoftteams/anonymous-users-in-meetings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowAnonymousUsersToJoinMeeting $false</code> <a href="https://learn.microsoft.com/microsoftteams/anonymous-users-in-meetings" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

These controls decide whether anonymous participants can join meetings at all. Microsoft Learn describes no setting that selects the meeting experience those participants see in Safari or Firefox.

The page describing them says the organisation-wide **Anonymous users can join a meeting** setting is going away, and recommends leaving it On and using the per-organiser policy. Meeting policy changes might take up to 24 hours to take effect. Roles required to change them are not covered here.

For how meeting policies work, see [Teams meeting policy](/concepts/meeting-policy/).

## Open questions

- Is there an admin setting or policy that controls the meeting experience anonymous participants see in Safari and Firefox? Watch the Teams for Web and anonymous-access pages on Microsoft Learn.
- What was the default on arrival, and did existing behaviour change for anonymous joiners? The roadmap item and Learn do not state it.
- Does any licence apply to this experience? Watch the Teams licensing pages on Microsoft Learn.
- Which Safari and Firefox versions does this anonymous-join experience support? Learn's Teams for Web page does not identify browser-version requirements specific to this refresh.

<!-- rationale
risk: Low. The roadmap item describes interface and performance changes for anonymous joiners on Safari and Firefox, and names no new data access or autonomous action.
cost: Low. The roadmap names no licence or meter, so the only cost the sources show is admin and helpdesk time; licensing for this experience is not yet published.
impact: Low. People who notice are anonymous participants joining from Safari or Firefox.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model; licensing.notes; Open questions / licensing: The licensing model is unknown because Microsoft has not published the entitlement covering this anonymous-join experience. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to 'included' rather than 'unknown' and cite https://learn.microsoft.com/microsoftteams/user-access. Begin the licensing notes and section with: 'Microsoft requires organisational users to have a Teams license, except when joining Teams meetings anonymously. Anonymous meeting join is exempt from that requirement; no separate licence or price for this refresh was found.' Replace the open question 'Does any licence apply to this experience?' with 'Will Microsoft publish any licensing terms specific to this refresh?' Keep the separate Teams Premium email-verification qualification. | Source: https://learn.microsoft.com/microsoftteams/user-access
- [contradicted, blocker] Governance controls: paragraph immediately after table / applicability: These controls decide whether anonymous participants can join meetings at all. | Found: If you turn off the organization-wide Anonymous users can join a meeting setting and Anonymous users can join a meeting after verifying is set to No, anonymous users can't join meetings in your organization. | Fix: Replace 'These controls decide whether anonymous participants can join meetings at all.' with 'These controls manage unverified anonymous meeting join; joining after email-code verification is governed separately.' The cited article makes blocking all anonymous participation conditional on the separate verification policy also being set to No. | Source: https://learn.microsoft.com/microsoftteams/anonymous-users-in-meetings
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls table / command: Set-CsTeamsMeetingConfiguration -Identity <policy name> -DisableAnonymousJoin $true is the documented organisation-wide blocking call. | Found: Set-CsTeamsMeetingConfiguration -Identity <policy name> -DisableAnonymousJoin $true | Fix: The cited article prints this exact example, but https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingconfiguration says of -Identity: 'The only valid input is Global'. Replace the call in both places with 'Set-CsTeamsMeetingConfiguration -Identity Global -DisableAnonymousJoin $true' and cite that reference alongside the article. | Source: https://learn.microsoft.com/microsoftteams/anonymous-users-in-meetings
-->
