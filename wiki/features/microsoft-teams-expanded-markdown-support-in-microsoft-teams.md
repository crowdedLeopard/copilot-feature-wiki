---
title: "Microsoft Teams: expanded Markdown support in the compose box"
slug: "microsoft-teams-expanded-markdown-support-in-microsoft-teams"
roadmapId: 576199
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams adds a Markdown compose mode to chats and channels from early December 2026. Users choose it from the compose box; Microsoft's notice says no admin action is required. No admin setting for it is documented."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Each user in the organisation must have a Teams licence before they can use Teams, except for joining meetings anonymously. No licence requirement specific to Markdown compose mode is published as of November 2026."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","user-experience","markdown","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 576199"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576199"
    kind: "roadmap"
  - title: "MC1562278: Microsoft Teams: Expanded Markdown support in the compose box"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1562278"
    kind: "message-center"
  - title: "Manage messaging policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    kind: "learn"
  - title: "Microsoft Teams Premium licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether users can use the Markdown compose mode"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin setting for Markdown compose mode is documented at the time of writing (November 2026). MC1562278 says users choose the mode from the compose box."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-26T23:15:50"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item, based on Message Center post MC1562278 and the roadmap record."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 46 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: reworded the policy-pilot and messaging-policy statements, and the Preview message menu location; licensing now cites the general Teams licence requirement."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 46 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 46
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "551b324674114f79b2418167e164e1e2"
---

## What's changing

Microsoft Teams is adding an updated Markdown compose experience to chats and channels. Users select **Format in Markdown** from the **Actions and apps (+)** menu in the compose box. In that mode the Markdown syntax stays visible and editable as they type, instead of being rendered live.

Microsoft's notice MC1562278 lists what the updated experience includes: a dedicated Markdown toolbar for inserting syntax, a **Preview message** option that shows the rendered formatting before sending, and **Format in rich text** in the same menu to switch back. Teams remembers the selected compose mode and applies it across chats and channels until the user switches modes.

The notice says rollout is general availability for Worldwide, GCC, GCC High and DoD, beginning in early December 2026 and expected to finish by mid-December 2026, on Teams for Windows, Mac and web. The roadmap record lists the item as In development with a target of December CY2026, and lists the Desktop, Mac and Web platforms. Microsoft Learn does not describe this compose-box feature at the time of writing (November 2026), so the behaviour above is the notice's and the roadmap's description.

## Why it matters

This is a small change for administrators. The notice says no admin action is required and identifies no compliance considerations, and the feature is something each user selects from the compose box rather than a change to how everyone's compose box behaves on arrival.

The practical effects are on support and training: users who switch on Markdown mode will see syntax rather than formatted text while they write, and the mode stays on across chats and channels until they switch it off. A service desk that knows this will answer "why is my message full of asterisks" faster. Microsoft Learn documents no admin switch for the feature at the time of writing, so plan on communication rather than control.

## Risk assessment

**Data exposure**
- No new data source is described. The feature changes how users compose messages in chats and channels they can already use. How messages composed in Markdown mode appear in retention, eDiscovery, DLP or communication compliance reviews is not documented; see Open questions.

**Security & identity**
- No change to identity or sign-in is described. The notice states that no compliance considerations were identified and asks you to review as appropriate for your organisation.

**Autonomy & actions**
- No autonomous behaviour: a person selects the mode, writes, optionally previews and sends. The feature does not describe an agent or an automated action.

**Change & support**
- The compose mode is remembered across chats and channels until the user switches modes, so a user can leave Markdown mode on without noticing and write in syntax everywhere. Prepare a one-line answer for the service desk: use **Format in rich text** in the **Actions and apps (+)** menu to switch back.
- No Markdown-specific messaging policy setting is documented at the time of writing (November 2026), so a policy-scoped pilot of this mode is not documented.

## Cost and licensing

Microsoft has not published a licence requirement or a meter specific to this feature. The notice MC1562278 and the roadmap record name no licence, and the Teams Premium licensing page does not mention Markdown or the compose box. Each user in the organisation must have a Teams licence before they can use Teams, except for joining meetings anonymously ([Manage Teams licenses](https://learn.microsoft.com/microsoftteams/user-access)). No licence requirement specific to Markdown compose mode is published as of November 2026.

The cost the sources show is indirect: communicating the change, updating user help and handling service desk questions.

## Scope

**Users and platforms.** Microsoft Teams users who compose messages in chats and channels on Teams for Windows, Mac and web, per MC1562278. The roadmap record lists Desktop, Mac and Web.

**Clouds.** The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the notice gives general availability for the same four.

**Rollout.** The notice gives early December 2026 to mid-December 2026. The roadmap record lists the release phases General Availability and Targeted Release, status In development and a target of December CY2026; the notice is the more specific statement on timing.

**Prerequisites.** None are stated in the notice or the roadmap record.

## Governance guidance

### Before rollout
- Brief the service desk and Teams champions on selecting **Format in Markdown** and **Format in rich text** from the compose box's **Actions and apps (+)** menu, and on using **Preview message** to see rendered formatting before sending, as described in MC1562278.
- Read MC1562278 in your Message center and record that Microsoft states no admin action is required and no compliance considerations were identified.
- Assign someone to send test messages in both modes from a pilot account and compare how they look to a recipient on desktop, Mac and web.

### At rollout
- Check from early December 2026 whether the option has appeared for a pilot account on each supported platform; the notice expects rollout to complete by mid-December 2026.
- Tell users that the selected mode persists across chats and channels until they switch it, so that nobody is surprised by visible syntax.

### After rollout
- Review service desk tickets for confusion about visible syntax or unexpected formatting, and fold the answer into your Teams guidance.
- Check Message center and the Teams messaging policies page again for any setting that governs Markdown mode, since none is documented at the time of writing (November 2026).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use the Markdown compose mode</strong><br><small>Tenant</small><br><small class="controls__note">No admin setting for Markdown compose mode is documented at the time of writing (November 2026). MC1562278 says users choose the mode from the compose box.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The table has one row because Microsoft documents no setting for this feature. The Teams messaging policy settings page lists chat settings such as **Edit sent messages**, **Use Giphy in conversations** and **URL previews**, but it lists no setting that switches Markdown mode separately from other messaging capabilities.

Because the notice describes the mode as a user's choice from the compose box, the practical control is communication and support readiness.

## Open questions

- Will Microsoft add a messaging policy setting or tenant control for the Markdown compose mode? Watch Message center and the Teams messaging policies page on Microsoft Learn.
- How do messages composed in Markdown mode appear in retention, eDiscovery, data loss prevention and communication compliance review: as rendered text or as the Markdown source? Microsoft has not said.
- Does the feature require a licence beyond the Teams licence users already need? Microsoft has not published a licence requirement specific to it.
- The roadmap record lists Desktop, Mac and Web and the notice names Windows, Mac and web: how will recipients on other clients see messages composed in Markdown mode? Microsoft has not said.
- The roadmap record lists the item as In development while the notice gives a rollout beginning in early December 2026: will the status change before then?

<!-- rationale
risk: Low. Users choose the mode themselves in the compose box, Microsoft's notice MC1562278 identifies no compliance considerations, and the feature adds no new data source or autonomous action.
cost: Low. The only cost the sources show is admin and service desk time; no licence or meter specific to this feature is yet published.
impact: Low. Nothing changes for a user until they select Format in Markdown, so mainly people who already write in Markdown will notice; the setting is then remembered across chats and channels.
-->
