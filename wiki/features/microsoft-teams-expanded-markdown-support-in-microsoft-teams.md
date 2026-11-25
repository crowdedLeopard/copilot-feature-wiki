---
title: "Microsoft Teams: expanded Markdown support in the compose box"
slug: "microsoft-teams-expanded-markdown-support-in-microsoft-teams"
roadmapId: 576199
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams adds a Markdown compose mode to chats and channels, with general availability now from mid-January 2027. Users choose it from the compose box; Microsoft's notice says no admin action is required. No admin setting for it is documented."
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
  - title: "MC1562278: (Updated) Microsoft Teams: Expanded Markdown support in the compose box"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1562278"
    kind: "message-center"
  - title: "Manage messaging policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    kind: "learn"
  - title: "Set-CsTeamsMessagingConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingconfiguration"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Learn about retention for Microsoft Teams"
    url: "https://learn.microsoft.com/purview/retention-policies-teams"
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
updated: "2026-11-25"
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
  - date: "2026-11-25"
    note: "MC1562278 was updated: general availability now runs from mid-January 2027 to late February 2027 (previously December 2026), with a public preview in December 2026; dates and checklist updated."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 54 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 52
  unconfirmed: 2
  contradicted: 0
  attempts: 0
  hash: "0486bd35294f0350093e94f1d4aed2b2"
---

## What's changing

Microsoft Teams is adding an updated Markdown compose experience to chats and channels. Users select **Format in Markdown** from the compose box's **Actions and apps (+)** menu. In that mode the Markdown syntax stays visible and editable as they write, instead of formatting rendering automatically as they type.

Microsoft's notice MC1562278 lists what the updated experience includes: a dedicated Markdown toolbar for inserting formatting syntax, a **Preview message** option to see the rendered formatting before sending, and **Format in rich text** in the same menu to return to rich text authoring. Teams remembers the selected compose mode and applies it across chats and channels until the user switches modes.

The notice, updated on 25 November 2026, gives a public preview beginning in mid-December 2026 and expected to complete by late December 2026, and general availability for Worldwide, GCC, GCC High and DoD beginning in mid-January 2027 (previously early December 2026) and expected to complete by late February 2027 (previously mid-December 2026), on Teams for Windows, Mac and web. The roadmap record still lists the item as In development with a target of December CY2026, so the notice is the later statement on timing. Microsoft Learn does not describe this compose-box feature at the time of writing (November 2026), so the behaviour above is the notice's and the roadmap's description.

## Why it matters

This is a small change for administrators. The notice says no admin action is required to prepare and identifies no compliance considerations, and it describes Markdown mode as something each user selects from the compose box rather than a change to how everyone's compose box behaves on arrival.

The practical effects are on support and training: a user who switches to Markdown mode sees syntax rather than formatted text while writing, and the mode stays on across chats and channels until they switch back. A service desk that knows this will answer "why is my message full of asterisks" faster. Microsoft Learn documents no admin switch for the feature at the time of writing (November 2026), so plan on communication rather than control. The later general availability window gives more time to prepare that communication.

## Risk assessment

**Data exposure**
- No new data source is described: the feature changes how users compose messages in chats and channels they already use. Retention policies for Teams retain and delete data from chats and channel messages, which is where these messages are sent. Whether compliance copies hold the Markdown source or the rendered text is not documented; see Open questions.

**Security & identity**
- No change to identity or sign-in is described. The notice identifies no compliance considerations and asks organisations to review as appropriate.

**Autonomy & actions**
- No autonomous behaviour: a person selects the mode, writes, optionally previews and sends.

**Change & support**
- The compose mode is remembered across chats and channels until the user switches modes, so a user can leave Markdown mode on and see syntax everywhere. Prepare a one-line answer for the service desk: select **Format in rich text** in the **Actions and apps (+)** menu to switch back.
- The rollout dates moved once already (general availability from early December 2026 to mid-January 2027), so time user communications to the notice rather than the roadmap target.

## Cost and licensing

Each user in the organisation must have a Teams licence before they can use Teams, except for joining Teams meetings anonymously ([Manage Teams licenses](https://learn.microsoft.com/microsoftteams/user-access)). The notice MC1562278 and the roadmap record name no further licence, and no licence requirement or meter specific to Markdown compose mode is published as of November 2026.

The cost the sources show is indirect: communicating the change, updating user help and handling service desk questions.

## Scope

**Users and platforms.** Microsoft Teams users who compose messages in chats and channels, on Teams for Windows, Mac and web, per MC1562278. The roadmap record lists Desktop, Mac and Web.

**Clouds.** The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the notice gives general availability for the same four.

**Rollout.** Public preview from mid-December 2026 to late December 2026, then general availability from mid-January 2027 to late February 2027, per the notice. The roadmap record lists the release phases General Availability and Targeted Release, status In development and a target of December CY2026.

**Prerequisites.** None are stated in the notice or the roadmap record beyond the Teams licence every Teams user needs.

## Governance guidance

### Before rollout
- Brief the service desk and Teams champions on selecting **Format in Markdown** and **Format in rich text** from the compose box's **Actions and apps (+)** menu, and on turning on **Preview message** before sending, as MC1562278 describes.
- Update any rollout plan that used the early December 2026 date to the notice's general availability window of mid-January 2027 to late February 2027.
- Assign someone to send test messages in both modes from a pilot account and compare how they look to recipients on Windows, Mac and web.

### At rollout
- Check from mid-January 2027 whether the option has appeared for a pilot account on each supported platform; the notice expects rollout to complete by late February 2027.
- Tell users that the selected mode persists across chats and channels until they switch it, so that nobody is surprised by visible syntax.

### After rollout
- Review service desk tickets for confusion about visible syntax or unexpected formatting, and add the answer to your Teams guidance.
- Check Message center and the Teams messaging policies page for any setting that governs Markdown mode, since none is documented at the time of writing (November 2026).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use the Markdown compose mode</strong><br><small>Tenant</small><br><small class="controls__note">No admin setting for Markdown compose mode is documented at the time of writing (November 2026). MC1562278 says users choose the mode from the compose box.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The table has one row because Microsoft Learn documents no setting for this feature at the time of writing (November 2026). The messaging policy settings list in the Teams admin center covers chat features such as **Edit sent messages**, **Use Giphy in conversations**, **URL previews** and **Text predictions**, but no Markdown or compose-mode setting, and neither Set-CsTeamsMessagingPolicy nor Set-CsTeamsMessagingConfiguration has a parameter for it.

Because the notice describes the mode as a user's choice from the compose box, the practical control is communication and support readiness.

## Open questions

- Will Microsoft add a messaging policy setting or tenant control for the Markdown compose mode? Watch Message center and the Teams messaging policies page on Microsoft Learn.
- Do compliance copies of messages composed in Markdown mode, as searched in eDiscovery and reviewed in communication compliance, hold the Markdown source or the rendered text? Watch the Microsoft Purview retention for Teams page.
- How will recipients on Teams mobile clients, which the notice does not list, see messages composed in Markdown mode?
- Which users receive the public preview from mid-December 2026, and will the roadmap status and December CY2026 target be updated to match the notice's later general availability dates?

<!-- rationale
risk: Low. Users choose the mode themselves in the compose box, Microsoft's notice MC1562278 identifies no compliance considerations, and the feature adds no new data source or autonomous action.
cost: Low. The only cost the sources show is admin and service desk time; Teams already needs a Teams licence per user, and no licence or meter specific to this feature is published.
impact: Low. Nothing changes for a user until they select Format in Markdown, so mainly people who choose to write in Markdown will notice; the choice is then remembered across chats and channels.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions; rationale: risk / behaviour: The feature has no autonomous behaviour or action. | Found: Searched: 'Microsoft Teams expanded Markdown compose box new data source identity sign-in autonomous actions'. Read the roadmap, MC1562278 and Learn search results; the notice describes user actions but does not categorically rule out autonomous behaviour. | Fix: Replace 'No autonomous behaviour: a person selects the mode, writes, optionally previews and sends' with 'The notice describes user-controlled authoring: a person selects the mode, writes, optionally previews and sends'. Apply the risk-rationale replacement given for the data-source claim.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: risk / behaviour: The feature adds no new data source. | Found: Searched: 'Microsoft Teams expanded Markdown compose box new data source identity sign-in autonomous actions'. Read the roadmap, MC1562278 and Learn search results; no source explicitly establishes that no new data source is added. | Fix: In the risk rationale, replace 'the feature adds no new data source or autonomous action' with 'the notice describes user-selected message authoring and identifies no new data source'.
-->
