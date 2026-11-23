---
title: "Microsoft 365 Copilot mobile app: capture voice notes"
slug: "m365-copilot-capture-voice-notes-in-the-m365-copilot-mobile-app"
roadmapId: 498640
topic: "m365-copilot"
products: ["Microsoft 365","Microsoft Copilot (Microsoft 365)"]
summary: "Launched for Android and iOS: licensed users can capture voice notes of offline discussions in the Microsoft 365 Copilot mobile app. Microsoft has published no Learn page, default or admin setting for it yet."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS"]
targetDate: "August CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "The roadmap says voice notes need a Microsoft 365 Copilot licence, which Microsoft describes as an add-on plan with specific licensing prerequisites. No price specific to voice notes is published."
audiences: ["m365-admin","security","end-user","change-adoption"]
tags: ["m365-copilot","mobile","licensing","adoption"]
sources:
  - title: "Microsoft 365 Roadmap item 498640"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498640"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Microsoft Copilot"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["onenote-multimodal-capture-in-copilot-notebooks-windows","m365-copilot-multiple-voice-styles-in-m365-copilot-voice-chats"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence the roadmap names as the prerequisite"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Role: at least License Administrator or User Administrator. Governs Copilot as a whole, not voice notes separately."
  - governs: "Switch that turns voice notes on or off for the tenant or for groups"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting for voice notes is documented at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-23"
    note: "First briefing: the roadmap lists voice notes in the Microsoft 365 Copilot mobile app as Launched; Microsoft Learn has no feature page yet."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 41 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 41
  confirmed: 38
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "5aaaf01fb4712fe4b2ad6a7c112c267d"
---

## What's changing

Voice notes let a user of the Microsoft 365 Copilot mobile app capture an in-person discussion and have Copilot turn it into content that is, in the roadmap's words, "structured, actionable, and searchable". The roadmap item (498640) says this needs a Microsoft 365 Copilot licence and lists Android and iOS as the platforms.

Microsoft Learn has no page for this feature at the time of writing (November 2026), so what follows about behaviour is the roadmap's description only. How a note is recorded, what Copilot produces from it, where the result is stored and who can read it are not stated.

The roadmap record shows status Launched, with a preview target of July CY2026 and a general availability target of August CY2026, and lists both General Availability and Preview as release phases. It lists Worldwide (Standard Multi-Tenant) as the only cloud. The record was last modified on 12 October 2026. Microsoft's release notes page says Copilot features are introduced gradually to a subset of users within a tenant before expanding, so some licensed users may see voice notes before others.

## Why it matters

This is a new way for spoken, often unscripted conversation to enter your tenant's Copilot experience from personal phones. The content is meeting-room or corridor talk, which can include other people, customers and sensitive topics, so the questions that matter are where the output is stored, how long it is kept and which of your existing controls reach it. Microsoft has not yet answered those for this feature.

Microsoft has not stated what happens on arrival, so do not assume users are opted in or that they need to switch it on. Treat it as something licensed mobile users may already have, and decide what guidance to give them. The only lever Microsoft documents today that clearly applies is whether a user holds the Copilot licence.

## Risk assessment

**Data exposure**
- The roadmap says voice notes make offline discussions "searchable". Microsoft Learn does not yet say where the notes and their structured output are stored, who else can open them or whether retention and sensitivity labels apply, so confirm these before encouraging use for confidential meetings.
- Spoken discussions can carry other people's words and personal data. Decide your organisation's position on capturing colleagues, customers and external parties before users start.

**Security & identity**
- The roadmap ties the feature to a Microsoft 365 Copilot licence. The control Microsoft documents for who holds that licence is licence assignment (see the controls table).
- Whether mobile app protection or device management policies cover the feature is not stated; confirm with Microsoft before relying on them.

**Autonomy & actions**
- The roadmap description speaks of capturing and structuring discussions. It describes no automatic actions in other apps, and none should be assumed.

**Change & support**
- Gradual rollout and the Preview and General Availability phases on the record mean users in one department may have voice notes while others do not. Expect support questions about why it is missing for some users.

## Cost and licensing

The roadmap says voice notes need a Microsoft 365 Copilot licence. Microsoft's service description page calls Microsoft 365 Copilot "an add-on plan with specific licensing prerequisites", and Microsoft's Copilot requirements page says users need a Microsoft Copilot licence and a qualifying prerequisite licence (see the sources).

No price, meter or Copilot Credits rate specific to voice notes is published at the time of writing, and no spending control applies to it that Microsoft documents. Indirect costs are admin time to assign licences and communicate to users.

For a tenant that already holds Copilot licences, the licence is the only entitlement the roadmap names. Whether storing voice notes consumes storage or other capacity is not stated.

## Scope

Users: those with a Microsoft 365 Copilot licence, per the roadmap. Platforms: Android and iOS, in the Microsoft 365 Copilot mobile app. Cloud: Worldwide (Standard Multi-Tenant); the record lists no US Government cloud. Release phases on the record: General Availability and Preview, with the status Launched.

Admin roles: assigning licences requires at least the License Administrator or User Administrator role. No roles or prerequisites specific to voice notes are published. Rollout is gradual across a tenant according to Microsoft's release notes page.

## Governance guidance

### Before rollout
- Identify who holds a Microsoft 365 Copilot licence in your tenant, using the Active users licence view in the controls table, so you know who can use voice notes.
- Draft guidance on recording discussions that involve other people, customers or confidential topics, and agree who approves it.
- Ask your Microsoft account team or watch Message center for where voice notes are stored and which retention controls apply.

### At rollout
- Tell licensed Android and iOS users that the feature is launched, and that availability may differ between colleagues.
- Brief the help desk that the feature is gradual and that no separate admin switch is documented.
- Check licence assignment for users who ask for access, using the same Active users path.

### After rollout
- Review support tickets for questions about missing voice notes and where output is kept.
- Re-check Microsoft Learn and the Microsoft 365 Copilot release notes for a feature page, and update your guidance when storage and control details appear.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence the roadmap names as the prerequisite</strong><br><small>User</small><br><small class="controls__note">Role: at least License Administrator or User Administrator. Governs Copilot as a whole, not voice notes separately.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch that turns voice notes on or off for the tenant or for groups</strong><br><small>Tenant</small><br><small class="controls__note">No setting for voice notes is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The licence is the only control in the table that Microsoft documents as applying to this feature, and it applies because the roadmap names the Copilot licence as the prerequisite. Removing the licence from a user is a blunt tool: it removes Copilot as a whole, not just voice notes. Microsoft Learn's Copilot settings page for the Microsoft 365 admin center lists no setting for voice notes at the time of writing (November 2026).

Licence assignment requires at least the License Administrator or User Administrator role.

## Open questions

- Where are voice notes and their structured output stored, and do retention policies, sensitivity labels and eDiscovery reach them? Watch the Microsoft 365 Copilot release notes and Learn for a feature page.
- Does voice notes appear automatically for licensed users, or does each user turn it on? Microsoft has not stated the default.
- Will Microsoft add an admin setting to turn voice notes off separately from Copilot as a whole?
- Do Intune app protection or other mobile management policies apply to voice notes in the Microsoft 365 Copilot mobile app?

<!-- rationale
risk: Medium. The feature turns spoken offline discussions into structured, searchable content, and Microsoft has not yet published where that content is kept or which controls cover it.
cost: Low. The roadmap says a Microsoft 365 Copilot licence is needed and no separate price or meter is published for voice notes, so the known cost is licence assignment and admin time.
impact: Medium. Licensed users on Android and iOS notice it, and the roadmap record does not say whether it arrives for them automatically or by choice.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity; Open questions / applicability: Whether mobile app protection or device management policies cover the feature is not stated. | Found: They include all Microsoft 365 mobile applications, such as Edge, Outlook, OneDrive, Microsoft 365 (Office), or Teams, as this ensures that users can access and manipulate work or school data within any Microsoft app in a secure fashion. | Fix: Replace the risk bullet with: 'Microsoft documents Intune app protection for the Microsoft Copilot mobile app on Android and iOS. Feature-specific handling of voice-note recordings and output is not yet documented.' Cite https://learn.microsoft.com/intune/app-management/ref-protected-apps. Narrow the final open question to: 'How do the app's protection settings handle voice-note recordings and output?' | Source: https://learn.microsoft.com/intune/app-management/configuration/configure-microsoft-365-mobile
- [contradicted, blocker] Why it matters / absence: Whether a user holds the Copilot licence is the only documented lever that clearly applies. | Found: If you wish to restrict usage of Copilot in your organization, use the Integrated Apps settings to block it across web, desktop, and mobile. Alternatively, block the Microsoft Copilot mobile app to restrict access to Copilot on mobile only. | Fix: Replace the sentence with: 'Licence assignment governs access to licensed Copilot capabilities; Microsoft also documents blocking the Copilot app across web, desktop and mobile, or blocking the mobile app alone.' Cite https://learn.microsoft.com/intune/app-management/configuration/configure-microsoft-365-mobile. Do not describe licence assignment as the only available control. | Source: https://learn.microsoft.com/intune/app-management/configuration/configure-microsoft-365-mobile
- [contradicted, blocker] Governance controls / licensing: Removing a user's Copilot licence removes Copilot as a whole. | Found: Microsoft Copilot license: Required for licensed Microsoft Copilot capabilities ... Not required for eligible users [Microsoft Copilot Chat]. | Fix: Replace 'it removes Copilot as a whole, not just voice notes' with 'it removes entitlement to licensed Copilot capabilities, not just voice notes; eligible users can still access Copilot Chat without that licence'. Cite https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements. | Source: https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing / licensing: Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites. | Found: Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites. | Fix: Add to licensing notes and the licensing paragraph: 'The License options for Microsoft Copilot page also says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible plans.' Cite https://learn.microsoft.com/copilot/plan/copilot-license-options, already in sources. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
-->
