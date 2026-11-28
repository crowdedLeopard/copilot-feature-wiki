---
title: "Microsoft Teams: view files and conversations side by side"
slug: "microsoft-teams-view-files-and-conversations-side-by-side"
roadmapId: 574094
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams plans to show the conversation beside a PDF, Markdown or HTML file opened from a chat or channel message. Rollout is planned from late December 2026; Microsoft says no admin action is required."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap record nor Message Center post MC1562279 names a licence or charge for this view."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["teams","user-experience","microsoft-365-files","markdown","channels","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 574094"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=574094"
    kind: "roadmap"
  - title: "MC1562279: Microsoft Teams: View files and conversations side by side"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1562279"
    kind: "message-center"
  - title: "Manage messaging policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Microsoft Teams add-on licenses"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/microsoft-teams-add-on-licensing"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Admin setting for the side-by-side file and conversation view"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing (November 2026); the roadmap record and MC1562279 mention no setting."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-21"
    note: "First briefing: Teams side-by-side file and conversation view, rolling out from late December 2026 per MC1562279."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 43 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 55 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 55
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "26c8b292e055dc8e32ea8e0675e1f7d9"
---

## What's changing

Microsoft Teams is adding a side-by-side view. When a user opens a PDF, Markdown or HTML file from a chat or channel message, the conversation appears alongside the file and takes the user to the message where the file was shared. The user can read the discussion and reply without closing the preview.

Microsoft Learn has no page for this feature at the time of writing (November 2026), so what follows is the roadmap record's description and Microsoft's Message Center notice MC1562279, published 20 November 2026.

MC1562279 says the update is for Teams on Windows, Mac and the web. Files opened from a file list, with no originating message, do not show the conversation pane. The roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, with release phases General Availability and Targeted Release.

The roadmap status is In development with a target of December CY2026. MC1562279 says Microsoft will begin rolling out in late December 2026 and expects to complete by early January 2027, in all four clouds. These are Microsoft's targets, not commitments.

## Why it matters

For most tenants this is a change in how a familiar action looks, not a new capability to approve. MC1562279 says no admin action is required and describes the pane as opening whenever a user opens a supported file from a message, so expect users to see it without any switch being turned.

The practical work is communication. Users who open PDFs, Markdown or HTML files from chat will find a second pane, and the pane is absent when they open the same file from a file list. Telling the help desk about that difference before rollout avoids avoidable tickets.

## Risk assessment

**Data exposure**
- The record describes the pane as showing the conversation in which the file was shared. It describes no new data source, connector or storage location, and no change to who can open the file.
- Neither the record nor MC1562279 says how file permissions apply to the pane; confirm with a test file before rollout if sharing rules matter in your tenant.

**Security & identity**
- MC1562279 states "No compliance considerations identified" and describes no change to sign-in, roles or permissions.

**Autonomy & actions**
- No agent or automated action is described. Users open a file and send messages or replies themselves from the pane.

**Change & support**
- The pane appears only for PDF, Markdown and HTML files opened from a chat or channel message. A user who opens the same file from a file list sees no pane, which is the likeliest source of "it disappeared" tickets.
- MC1562279 recommends notifying help desk staff and end users and updating internal guidance.

## Cost and licensing

No licence or charge for this view is named in the roadmap record or in MC1562279, and the Teams add-on licensing page lists no add-on for it. A licence entitlement for this feature is therefore not yet published, and the briefing makes no statement that it is free.

The cost the sources do show is indirect: time to brief the help desk and update internal user guidance, as MC1562279 recommends.

## Scope

**Who:** users opening PDF, Markdown or HTML files from a chat or channel message in Teams. MC1562279 does not describe a licence or role condition.

**Platforms:** Teams on Windows, Mac and the web (the roadmap lists Desktop, Mac and Web).

**Clouds:** Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, as the roadmap record lists them.

**Rollout:** targeted for December CY2026 on the roadmap; MC1562279 gives late December 2026 to early January 2027 for general availability, and the roadmap also lists Targeted Release.

## Governance guidance

### Before rollout
- Brief the help desk on the new pane and on the case where it does not appear: files opened from a file list, with no originating message.
- Update internal Teams guidance with the three supported file types named in MC1562279 (PDF, Markdown, HTML).
- Ask a pilot group in Targeted Release, if you use it, to open a shared file from a chat and from a file list and report the difference.

### At rollout
- Watch Message center for MC1562279 updates to the late December 2026 start and the early January 2027 completion.
- Collect help desk tickets from the first users who report the pane, and share the file-list explanation.

### After rollout
- Review tickets in January 2027 and fold recurring questions into user guidance.
- Re-check Microsoft Learn for a page describing the feature, including any admin setting or licence statement.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Admin setting for the side-by-side file and conversation view</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing (November 2026); the roadmap record and MC1562279 mention no setting.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting for this side-by-side view at the time of writing (November 2026), and the roadmap record and MC1562279 mention none, so the table records that gap. The existing messaging policy settings listed on Learn are not described as governing this view, so do not rely on them to switch it off.

## Open questions

- Is there, or will there be, an admin setting or policy to turn the side-by-side view off for some users? Watch Message center and the Teams messaging policies page on Learn.
- Which licence, if any, does the view depend on? Watch the roadmap item and Learn.
- How do file permissions and sensitivity labels apply to the files shown in the pane? Watch the Learn page for the feature once published.
- Will the Targeted Release phase reach tenants before general availability in late December 2026, and by how much?

<!-- rationale
risk: Low. The record describes a new layout for files users already open from messages, with no new data source, agent or action described; the exposure that remains is a user-interface change nobody has switched on or off.
cost: Low. The only cost the sources show is admin time to brief the help desk and users; no licence or meter for this view is yet published.
impact: Medium. Users on Teams for Windows, Mac and the web who open PDF, Markdown or HTML files from chat or channel messages will see a new pane, so the help desk may field questions.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; Open questions / licensing; rationale: cost / licensing: Licensing is classified as unknown because no entitlement specific to this new view is published. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to 'included'. Replace licensing.notes and the entitlement sentence in Cost and licensing with: 'Manage Teams licenses states that, except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. No licence requirement specific to this view is published at the time of writing (November 2026).' Add https://learn.microsoft.com/microsoftteams/user-access to sources. Replace the licensing open question with 'Will Microsoft publish a licence requirement specific to this view?' In the cost rationale, replace 'no licence or meter for this view is yet published' with 'no licence requirement or meter specific to this view is yet published'. | Source: https://learn.microsoft.com/microsoftteams/user-access
-->
