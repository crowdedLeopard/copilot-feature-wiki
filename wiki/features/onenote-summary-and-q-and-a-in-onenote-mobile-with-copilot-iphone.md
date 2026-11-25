---
title: "OneNote on iPhone: Copilot chat pane with page summaries and Q&A"
slug: "onenote-summary-and-q-and-a-in-onenote-mobile-with-copilot-iphone"
roadmapId: 422324
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","OneNote"]
summary: "OneNote on iPhone gets a Copilot chat pane that summarises long pages and answers questions about notes, for users with a Microsoft 365 Copilot (Premium) licence. Microsoft says no admin action is required."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["iOS"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "act-now"
licensing:
  model: "add-on"
  notes: "Microsoft's notice MC1307979 says users need a Microsoft 365 Copilot (Premium) licence. Learn describes that licence as the Microsoft 365 Copilot add-on. A price specific to this feature is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["onenote","m365-copilot","copilot-chat","mobile","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 422324"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=422324"
    kind: "roadmap"
  - title: "MC1307979: (Updated) Microsoft 365 Copilot: Copilot chat pane and Summary feature in OneNote Mobile (iPhone)"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1307979"
    kind: "message-center"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
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
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Use preferences to manage privacy controls for Office on iOS devices"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/ios-privacy-preferences"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
videos: []
related: ["onenote-multimodal-capture-in-copilot-notebooks-windows"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot (Premium) licence the pane needs"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Generic licence assignment; the notice names the Premium licence as the requirement. Needs at least the License Administrator or User Administrator role."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-25"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: Copilot chat pane and Summary in OneNote on iPhone, rollout now targeted for the end of November 2026."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 41 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 40 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: action now act-now; removed an unsupported storage claim and an unconfirmed-switch question; added the connected experiences control that makes Copilot unavailable in OneNote on iOS."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 43 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: removed the sentence calling licence assignment the only control tied to this feature, since the connected experiences setting also makes Copilot unavailable in OneNote on iOS."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 45 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 45
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f44b5f6b829d6a2cddca5c7691c14278"
---

## What's changing

Microsoft is adding a Copilot chat pane to OneNote Mobile on iPhone. Through the pane, users can generate a short summary of a longer OneNote page and ask questions about their notes. The roadmap item describes the summary as helping users read relevant information faster, and the question and answer as real-time answers inside the notes.

Microsoft Learn has no page on this feature at the time of writing (November 2026), so what follows about behaviour is the roadmap item's description and Microsoft's notice MC1307979. The notice says users with a Microsoft 365 Copilot (Premium) licence will see the pane, and that existing Microsoft 365 Copilot controls, permissions and policies continue to apply.

The roadmap item is In development, with a target of November CY2026, release phase General Availability, Worldwide (Standard Multi-Tenant) and platform iOS. The roadmap item says Microsoft inadvertently marked it as rolling out and has corrected that. MC1307979, updated 6 November 2026, says rollout begins at the end of November 2026 (previously the end of October) and is expected to complete at the end of November 2026.

## Why it matters

This puts a generative AI reader in front of OneNote content on a phone. Notes often hold meeting minutes, customer detail and drafts, and a summary or a question puts that content into a Copilot response. Microsoft's notice says the pane works on content the user can already access, so the exposure follows from permissions you already manage.

Microsoft's notice says no admin action is required, and it asks administrators to make sure the right users hold the Copilot (Premium) licence, to brief the helpdesk and to review existing Copilot governance. Expect questions from licensed iPhone users around the end of November 2026, and from unlicensed users who hear about it.

## Risk assessment

**Data exposure**

- Microsoft's notice says Copilot chat processes OneNote content that users already have access to, in accordance with existing Microsoft 365 Copilot data handling, permissions and security controls. A user's access to a notebook therefore sets what a summary or answer can draw on.
- Notes that are over-shared today become easier to surface through a question. Review notebook sharing before the pane arrives.

**Security & identity**

- The notice says existing Microsoft 365 Copilot controls, permissions and policies continue to apply. It does not name which of those policies cover this pane on iPhone, so confirm that before relying on any one of them.

**Autonomy & actions**

- The notice and roadmap item describe summaries and answers to questions. They describe no action taken on a user's behalf in OneNote.

**Change & support**

- The pane appears only for users with a Copilot (Premium) licence, so licence assignment decides who sees it and who calls the helpdesk. The rollout date has moved once, from the end of October to the end of November 2026, and the roadmap item was first marked rolling out in error, so users may have heard about it early.

## Cost and licensing

Microsoft's notice MC1307979 says users need a Microsoft 365 Copilot (Premium) licence to see the pane, and that users without one are not impacted. Microsoft Learn's Copilot overview describes the Microsoft 365 Copilot (Premium) licence as the Microsoft 365 Copilot add-on licence with access to the full experience of Copilot in Word, Excel, PowerPoint and OneNote ([Microsoft Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview)).

A price or meter specific to this feature is not yet published. Where users already hold the Premium licence, the cost that follows from the notice is admin time to brief users and the helpdesk. Where they do not, the licence is the cost.

## Scope

**Users and licences.** Users with a Microsoft 365 Copilot (Premium) licence who use OneNote on an iPhone. The notice lists affected users as those with the licence and those accessing OneNote on iPhone.

**Cloud and platform.** The roadmap item lists Worldwide (Standard Multi-Tenant) and iOS. It lists no US Government cloud.

**Rollout.** MC1307979 gives the end of November 2026 for both the start and the completion. The roadmap target is November CY2026 and the status is In development.

**Prerequisites.** The licence above. Microsoft's notice names no other prerequisite.

## Governance guidance

### Before rollout

- Confirm which users hold the Microsoft 365 Copilot (Premium) licence, and decide whether anyone who uses OneNote on iPhone should gain or lose it before the end of November 2026 (see the licence row in the controls table).
- Brief the helpdesk on the new pane and on the licence it depends on, as the notice suggests.

### At rollout

- Watch Message center for MC1307979 updates, since the date has already moved once.
- Tell licensed iPhone users that the pane arrives with the rollout, and tell unlicensed users that the notice says they are not impacted.

### After rollout

- Review existing Microsoft 365 Copilot governance, compliance and usage policies against your requirements, as the notice asks.
- Collect helpdesk questions and decide whether any licensed group needs different guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot (Premium) licence the pane needs</strong><br><small>User</small><br><small class="controls__note">Generic licence assignment; the notice names the Premium licence as the requirement. Needs at least the License Administrator or User Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's notice says existing Microsoft 365 Copilot controls, permissions and policies continue to apply to the pane. Assigning licences needs at least the License Administrator or User Administrator role, per the licence assignment page.

Turning off connected experiences that analyze content makes Copilot features unavailable in current OneNote apps on iOS; this is a broader control, not a pane-only switch ([Data, Privacy, and Security for Microsoft Copilot](https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy)). For iOS, the Cloud Policy setting is named 'Allow the use of connected experiences in Office that analyze content' ([Use preferences to manage privacy controls for Office on iOS devices](https://learn.microsoft.com/microsoft-365-apps/privacy/ios-privacy-preferences)), and Cloud Policy can scope a policy configuration to specific groups ([Overview of Cloud Policy service for Microsoft 365](https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy)).

## Open questions

- Will a price or credit rate specific to this feature be published, or is use covered by the Copilot (Premium) licence alone? Watch the Copilot licensing pages on Microsoft Learn.
- Will the date move again? MC1307979 has already moved from the end of October to the end of November 2026; the roadmap status is still In development.
- Is the pane also planned for other platforms or clouds? The roadmap item lists only iOS and Worldwide.

<!-- rationale
risk: Medium. Generative AI reads OneNote content the user can already open, so existing Copilot permissions and policies decide what it can reach; Microsoft's notice says those controls continue to apply.
cost: Low. Microsoft's notice ties the pane to Microsoft 365 Copilot (Premium) licences; a separate price for this feature is not yet published, so the cost shown is admin and helpdesk time.
impact: Low. Only users with a Microsoft 365 Copilot (Premium) licence who open OneNote on an iPhone see the pane; Microsoft's notice says unlicensed users are not impacted.
-->
