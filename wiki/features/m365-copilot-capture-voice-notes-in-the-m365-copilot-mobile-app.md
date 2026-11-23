---
title: "Microsoft Copilot mobile app: capture voice notes"
slug: "m365-copilot-capture-voice-notes-in-the-m365-copilot-mobile-app"
roadmapId: 498640
topic: "m365-copilot"
products: ["Microsoft 365","Microsoft Copilot (Microsoft 365)"]
summary: "Launched for Android and iOS: licensed users can capture voice notes of offline discussions in the Microsoft Copilot mobile app (formerly Microsoft 365 Copilot). No Learn page, default or admin setting is published yet."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS"]
targetDate: "August CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "The roadmap says voice notes need a Microsoft 365 Copilot licence, which Microsoft describes as an add-on plan with specific licensing prerequisites; Microsoft also says Copilot is available with Microsoft 365 E7. No price specific to voice notes is published."
audiences: ["m365-admin","security","end-user","change-adoption"]
tags: ["m365-copilot","mobile","licensing","adoption"]
sources:
  - title: "Microsoft 365 Roadmap item 498640"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498640"
    kind: "roadmap"
  - title: "Data protection and auditing for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing"
    kind: "learn"
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
  - title: "Microsoft Intune Protected Apps"
    url: "https://learn.microsoft.com/intune/app-management/ref-protected-apps"
    kind: "learn"
  - title: "Manage Collaboration Experiences in Microsoft 365 (Office) for iOS and Android With Microsoft Intune"
    url: "https://learn.microsoft.com/intune/app-management/configuration/configure-microsoft-365-mobile"
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
  - date: "2026-11-23"
    note: "Corrected after the independent check: added Intune app protection and the Copilot app blocking options, narrowed the licence-removal statement, and added the Microsoft 365 E7 licensing sentence."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after the independent check: retention and eDiscovery are documented for Copilot prompts and responses, so the gap is narrowed to voice-note recordings; cost rating raised to medium; app named Microsoft Copilot mobile app."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 55 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-23"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 55
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d1f80fa05439a89baae8587e52c3656f"
---

## What's changing

Voice notes let a user of the Microsoft Copilot mobile app (formerly Microsoft 365 Copilot) capture an in-person discussion and have Copilot turn it into content that is, in the roadmap's words, "structured, actionable, and searchable". The roadmap item (498640) says this needs a Microsoft 365 Copilot licence and lists Android and iOS as the platforms.

Microsoft Learn has no page for this feature at the time of writing (November 2026), so what follows about behaviour is the roadmap's description only. How a note is recorded, what Copilot produces from it, where the result is stored and who can read it are not stated.

The roadmap record shows status Launched, with a preview target of July CY2026 and a general availability target of August CY2026, and lists both General Availability and Preview as release phases. It lists Worldwide (Standard Multi-Tenant) as the only cloud. The record was last modified on 12 October 2026. Microsoft's release notes page says Copilot features are introduced gradually to a subset of users within a tenant before expanding, so some licensed users may see voice notes before others.

## Why it matters

This is a new way for spoken, often unscripted conversation to enter your tenant's Copilot experience from personal phones. The content is meeting-room or corridor talk, which can include other people, customers and sensitive topics, so the questions that matter are where voice-note recordings and any feature-specific saved output are stored and which of your existing controls reach them. Microsoft documents retention policies and eDiscovery for Copilot prompts and responses; handling of voice-note recordings and feature-specific saved artifacts is not yet documented.

Microsoft has not stated what happens on arrival, so do not assume users are opted in or that they need to switch it on. Treat it as something licensed mobile users may already have, and decide what guidance to give them. Licence assignment governs access to licensed Copilot capabilities; Microsoft also documents blocking the Copilot app across web, desktop and mobile, or blocking the mobile app alone.

## Risk assessment

**Data exposure**
- The roadmap says voice notes make offline discussions "searchable". Microsoft documents that a hidden folder in the user's mailbox stores Copilot prompts and responses, which can be searched with eDiscovery, monitored with Communication Compliance and managed with retention policies (see [Data protection and auditing for Microsoft Copilot](https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing)). Microsoft Learn does not yet say where voice-note recordings and feature-specific saved artifacts are stored, who else can open them or whether sensitivity labels apply, so confirm these before encouraging use for confidential meetings.
- Spoken discussions can carry other people's words and personal data. Decide your organisation's position on capturing colleagues, customers and external parties before users start.

**Security & identity**
- The roadmap ties the feature to a Microsoft 365 Copilot licence. The control Microsoft documents for who holds that licence is licence assignment (see the controls table).
- Microsoft documents Intune app protection for the Microsoft Copilot mobile app on Android and iOS. Feature-specific handling of voice-note recordings and output is not yet documented.

**Autonomy & actions**
- The roadmap description speaks of capturing and structuring discussions. It describes no automatic actions in other apps, and none should be assumed.

**Change & support**
- Gradual rollout and the Preview and General Availability phases on the record mean users in one department may have voice notes while others do not. Expect support questions about why it is missing for some users.

## Cost and licensing

The roadmap says voice notes need a Microsoft 365 Copilot licence. Microsoft's service description page calls Microsoft 365 Copilot "an add-on plan with specific licensing prerequisites", and Microsoft's Copilot requirements page says users need a Microsoft Copilot licence and a qualifying prerequisite licence (see the sources). The License options for Microsoft Copilot page also says Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible plans.

No price, meter or Copilot Credits rate specific to voice notes is published at the time of writing, and no spending control applies to it that Microsoft documents. For tenants that already hold the required entitlement, indirect costs are admin time to assign licences and communicate to users.

For a tenant that already holds Copilot licences, the licence is the only entitlement the roadmap names. Whether storing voice notes consumes storage or other capacity is not stated.

## Scope

Users: those with a Microsoft 365 Copilot licence, per the roadmap. Platforms: Android and iOS, in the Microsoft Copilot mobile app. Cloud: Worldwide (Standard Multi-Tenant); the record lists no US Government cloud. Release phases on the record: General Availability and Preview, with the status Launched.

Admin roles: assigning licences requires at least the License Administrator or User Administrator role. No roles or prerequisites specific to voice notes are published. Rollout is gradual across a tenant according to Microsoft's release notes page.

## Governance guidance

### Before rollout
- Identify who holds a Microsoft 365 Copilot licence in your tenant, using the Active users licence view in the controls table, so you know who can use voice notes.
- Draft guidance on recording discussions that involve other people, customers or confidential topics, and agree who approves it.
- Ask your Microsoft account team or watch Message center for where voice-note recordings are stored and which retention controls apply to them.

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

The licence is the only control in the table that Microsoft documents as applying to this feature, and it applies because the roadmap names the Copilot licence as the prerequisite. Removing the licence from a user is a blunt tool: it removes entitlement to licensed Copilot capabilities, not just voice notes; eligible users can still access Copilot Chat without that licence. Microsoft Learn's Copilot settings page for the Microsoft 365 admin center lists no setting for voice notes at the time of writing (November 2026).

Licence assignment requires at least the License Administrator or User Administrator role.

## Open questions

- Where are voice-note recordings and feature-specific saved artifacts stored, and do retention policies, sensitivity labels and eDiscovery reach them? Watch the Microsoft 365 Copilot release notes and Learn for a feature page.
- Does voice notes appear automatically for licensed users, or does each user turn it on? Microsoft has not stated the default.
- Will Microsoft add an admin setting to turn voice notes off separately from Copilot as a whole?
- How do the app's protection settings handle voice-note recordings and output?

<!-- rationale
risk: Medium. The feature turns spoken offline discussions into structured, searchable content, and Microsoft has not yet published where voice-note recordings and feature-specific saved artifacts are kept or which controls cover them.
cost: Medium. Voice notes require the Microsoft 365 Copilot entitlement, available through an add-on or Microsoft 365 E7. Tenants that already hold the required entitlement mainly face licence-assignment and communication time; no separate voice-notes price or meter is published.
impact: Medium. Licensed users on Android and iOS notice it, and the roadmap record does not say whether it arrives for them automatically or by choice.
-->
