---
title: "Microsoft Teams: Copilot automatically summarises new messages in a chat"
slug: "microsoft-teams-enhanced-copilot-chat-summary"
roadmapId: 501201
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans for Copilot in Teams to summarise new chat messages automatically, so users can catch up without reading each one. Target February CY2027. No admin switch is documented; plan user communication."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "February CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "add-on"
  notes: "Microsoft's Teams AI overview lists Microsoft Copilot among the required licences for Copilot features in Teams, including Copilot in chats and channels; Microsoft 365 Copilot (Premium) is the add-on licence. No licence or price specific to this enhancement is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","m365-copilot","copilot"]
sources:
  - title: "Microsoft 365 Roadmap 501201"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501201"
    kind: "roadmap"
  - title: "Overview of AI in Microsoft Teams for IT admins"
    url: "https://learn.microsoft.com/microsoftteams/copilot-ai-agents-overview"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    kind: "learn"
  - title: "Set-CsTeamsAIPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsaipolicy"
    kind: "learn"
  - title: "Manage Teams meeting transcription"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    kind: "learn"
  - title: "Manage Microsoft Copilot in Teams calls"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-calling-transcription"
    kind: "learn"
  - title: "Which users hold a Microsoft Copilot licence, which Copilot in Teams chats requires (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold a Microsoft Copilot licence, which Copilot in Teams chats requires (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["microsoft-teams-enhanced-copilot-and-ai-controls-for-meetings"]
controls:
  - governs: "Tenant or per-user switch for automatic Copilot chat summaries in Teams"
    scope: "user"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting for Copilot in Teams chats at the time of writing (November 2026); the Teams messaging policy and Teams AI policy have no Copilot chat parameter."
  - governs: "Which users hold a Microsoft Copilot licence, which Copilot in Teams chats requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Acts on the whole Microsoft Copilot licence, not on the chat summary alone. Needs at least License Administrator or User Administrator."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-08-18T23:05:00"
changes:
  - date: "2026-11-27"
    note: "New briefing: Copilot in Teams plans automatic summaries of new chat messages, target February CY2027; no admin setting documented."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 37 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 37
  confirmed: 37
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "abfbcc74354bee62f35f897a77ce24c2"
---

## What's changing

Microsoft plans for Copilot in Teams to generate a summary of the new messages in a chat conversation automatically, so a user who has missed many messages can catch up without reading each one. The roadmap item describes the summary as generated automatically and mentions no admin or user step to turn it on.

Microsoft Learn does not describe this enhancement yet, so what follows about its behaviour is the roadmap's description. Learn's overview of AI in Teams describes the existing capability it extends: Copilot in Teams chats and channels "helps them catch up on conversations quickly and help contribute intelligently".

The roadmap item is **In development**, with a target of **February CY2027** for Targeted Release and General Availability, on desktop, Mac, web, iOS and Android. The record lists the Worldwide (Standard Multi-Tenant) cloud only. No Message center post for this item has been supplied.

## Why it matters

This moves Copilot in Teams chats from something a user asks for to something that appears on its own. Expect the main effect to be on user expectations and support: people will meet AI-generated summaries in chats where they never invoked Copilot, and some will act on a summary without reading the messages behind it.

If nobody acts, the roadmap describes Copilot generating the summaries automatically. Microsoft Learn documents no admin setting specific to chat summaries at the time of writing (November 2026), so the decision in front of a service owner is mostly about communication and about which users hold a Microsoft Copilot licence.

## Risk assessment

**Data exposure**
- The roadmap describes a summary of new messages in a chat conversation the user is catching up on; no source describes it reaching content outside that chat. Microsoft states that prompts, files and responses using Microsoft Copilot never leave the organisation's Microsoft 365 service boundary.

**Security & identity**
- No change described: Microsoft has not described any new identity, connection or permission for this enhancement.

**Autonomy & actions**
- The summary is generated without the user asking, per the roadmap. The roadmap mentions nothing beyond showing the summary; the risk is a user relying on an incomplete or wrong summary of a decision or instruction.

**Change & support**
- Microsoft Learn lists no admin article for Copilot in Teams chats and channels; the Teams Copilot settings Learn documents in the meeting and calling policies describe meetings and calls. Expect questions from users and managers about where the summaries come from and whether they can be switched off.

## Cost and licensing

Microsoft's [Overview of AI in Microsoft Teams for IT admins](https://learn.microsoft.com/microsoftteams/copilot-ai-agents-overview) lists the required licences for Microsoft Copilot features in Teams as a Microsoft Business or Microsoft 365 plan, Teams Enterprise, and Microsoft Copilot; Copilot in Teams chats and channels is one of those features. The [Microsoft Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) describes Microsoft 365 Copilot (Premium) as "the full add-on licensed experience".

No meter is documented for this feature at the time of writing. A licence, price or meter specific to the enhanced chat summary is not yet published. The indirect cost is the time to brief users and support staff.

## Scope

- **Users**: users with the licences the Teams AI overview lists for Copilot in Teams chats, including Microsoft Copilot. Whether users with only Copilot Chat (Basic), which Microsoft says can work with open content in Teams, get any form of the automatic summary is not stated.
- **Roles**: assigning or removing the Microsoft Copilot licence needs at least the License Administrator or User Administrator role.
- **Clouds**: Worldwide (Standard Multi-Tenant), as the roadmap record lists it. GCC, GCC High and DoD are not listed on the record.
- **Platforms**: Android, desktop, iOS, Mac and web.
- **Rollout**: Targeted Release and General Availability, target February CY2027.

## Governance guidance

### Before rollout
- Check which users hold a Microsoft Copilot licence (Microsoft 365 admin center > Users > Active users), since that group is where the summaries are expected to appear.
- Brief the service desk that Copilot summaries may appear in Teams chats without the user asking, and that Microsoft documents no chat-summary setting at the time of writing.
- Draft user guidance that a Copilot summary is a starting point and that decisions and instructions should be read in the original messages.

### At rollout
- Watch Message center for a post on this roadmap item that states the default and any new setting.
- Send the user guidance to licensed users in the week the feature reaches Targeted Release users.

### After rollout
- Review support tickets that mention chat summaries to find misunderstandings worth a follow-up note.
- Check Message center and the Teams AI overview page for a new Copilot chat setting, and add it to your policy baseline if one appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant or per-user switch for automatic Copilot chat summaries in Teams</strong><br><small>User</small><br><small class="controls__note">Microsoft Learn documents no setting for Copilot in Teams chats at the time of writing (November 2026); the Teams messaging policy and Teams AI policy have no Copilot chat parameter.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users hold a Microsoft Copilot licence, which Copilot in Teams chats requires</strong><br><small>User</small><br><small class="controls__note">Acts on the whole Microsoft Copilot licence, not on the chat summary alone. Needs at least License Administrator or User Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant or per-user setting for Copilot in Teams chats at the time of writing (November 2026); the Teams AI overview lists no admin article for that feature. Learn documents Copilot settings for Teams meetings and events (the meeting policy) and for calls (the calling policy); those pages describe meetings and calls, not chats.

A licence change acts on the whole Microsoft Copilot licence, not on this summary alone. Licence changes need at least the License Administrator or User Administrator role.

## Open questions

- Will the automatic chat summary be on by default for every Microsoft Copilot licensed user, and will Microsoft add a Teams policy setting to turn it off? Watch Message center and the Teams AI overview page.
- Does the summary appear for users with only Copilot Chat (Basic) in Teams, or only for users with a Microsoft Copilot licence?
- Are automatically generated summaries recorded as Copilot interactions for Microsoft Purview audit and retention in the same way as summaries a user asks for?
- Can a user turn the automatic summary off for themselves, or for a particular chat?

<!-- rationale
risk: Low. The roadmap describes a summary of new messages in a chat the user is reading, and Microsoft states Copilot prompts and responses stay inside the organisation's Microsoft 365 service boundary.
cost: Low. Copilot in Teams chats sits under the Microsoft Copilot licence, and no separate price for this enhancement is published, so the known cost is communication and support time.
impact: Medium. Users who hold a Microsoft Copilot licence and work in busy Teams chats will see summaries appear without asking for them.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / behaviour: The existing chat-summary experience is something the user asks Copilot for. | Found: Summarize chats and channel conversations | Type a prompt or select a prompt from **More prompts** in Copilot compose box in a chat or channel and submit. | Fix: Add https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage to sources to support the comparison with the existing prompt-driven chat-summary experience. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing / licensing: Microsoft 365 Copilot (Premium) is an add-on licensed experience. | Found: Microsoft 365 Copilot (Premium) is the full add-on licensed experience | Fix: Keep the cited add-on description, but append to licensing notes and Cost and licensing: 'Microsoft's licence-options page also says Microsoft Copilot is available with Microsoft 365 E7.' Cite https://learn.microsoft.com/copilot/plan/copilot-license-options, which states 'Microsoft Copilot is available with Microsoft 365 E7 or as an add-on'. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
-->
