---
title: "PowerPoint on the web: Copilot edits presentations through chat for Copilot Chat users (Worldwide)"
slug: "m365-copilot-copilot-can-edit-your-document-in-powerpoint-548646"
roadmapId: 548646
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot in PowerPoint on the web creates and edits slides through chat, and the roadmap says users without a Microsoft 365 Copilot licence get it. It has launched; Microsoft documents no switch for it alone, so brief users and check licensing."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Copilot overview places editing presentations in PowerPoint under Microsoft 365 Copilot (Basic), for users without the Copilot add-on licence. The Copilot service description lists Edit with Copilot in PowerPoint as a Premium feature that requires a Microsoft 365 Copilot licence."
audiences: ["m365-admin","service-owner","change-adoption","compliance"]
tags: ["powerpoint","copilot-chat","m365-copilot","unlicensed-users","anthropic","eu-data-boundary","licensing"]
sources:
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft Copilot (service description)"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Enable Claude models only for Copilot experiences in Microsoft 365 apps"
    url: "https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Privacy controls available for Office products"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/products-versions-privacy-controls"
    kind: "learn"
  - title: "Supported Copilot resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-copilot-resources"
    kind: "learn"
  - title: "Get started with Word, Excel, and PowerPoint Agents in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/wordexcelppt-agents"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "PowerPoint for the web"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-online-service-description/powerpoint-online"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 548646"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=548646"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap item 548520"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=548520"
    kind: "roadmap"
  - title: "Which users may use Claude models from Anthropic, including in Edit with Copilot in Microsoft 365 apps (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence the service description ties Edit with Copilot to (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence the service description ties Edit with Copilot to (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-chat-agent-mode-in-word-enables-conversational-support-to-create-edit","m365-copilot-copilot-chat-agent-mode-in-excel","m365-copilot-copilot-in-powerpoint-for-government-clouds","m365-copilot-access-copilot-chat-in-your-m365-apps","data-residency"]
controls:
  - governs: "Setting that turns Edit with Copilot in PowerPoint on the web on or off on its own"
    scope: "tenant"
    ui: null
    api: null
    note: "The connected-experiences control that removes Copilot from PowerPoint is stated for device apps; the web side-pane setting is not edit-specific."
  - governs: "Which users may use Claude models from Anthropic, including in Edit with Copilot in Microsoft 365 apps"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    api: null
    note: "AI Administrator or Global Administrator. The general subprocessor page says Claude is off by default in the EU/EFTA and UK; the apps-only page says its option is enabled by default for tenants there created after March 25, 2026."
  - governs: "Which users hold the Microsoft 365 Copilot licence the service description ties Edit with Copilot to"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Governs this feature only if the service description is right; the roadmap item says users without this licence get it."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-04-29T23:15:48"
changes:
  - date: "2026-11-28"
    note: "New briefing: Copilot editing in PowerPoint on the web for Copilot Chat users, with the conflicting licence statements, the Claude access setting and the lack of a feature-specific switch."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 66 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: roadmap item 548520 is the listing for Copilot-licensed users, not a duplicate; removed 'from one request'; narrowed the co-authoring statement; gave both Claude regional defaults; action is now review."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 75 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 75
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "18c8ecf0273397df3d2dc901deee7b57"
---

## What's changing

Copilot in PowerPoint on the web can now create and edit a presentation through conversation in the presentation itself. The roadmap item says users can start a new deck or build on an existing one, asking Copilot to generate slides, update content, improve layouts and polish design while keeping formatting, structure and branding, and that it is available to Copilot Chat users without a Microsoft 365 Copilot licence.

Users start it themselves: Microsoft's release notes describe opening PowerPoint and starting edit with Copilot. Microsoft's [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) lists, for Microsoft 365 Copilot (Basic) users (those without the Copilot add-on who have Copilot inside the apps), creating presentations from prompts or existing content, summarising them, and editing them (adding images, applying deck-wide formatting changes). The [Copilot service description](https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot) instead lists Edit with Copilot in Word, Excel, PowerPoint and OneNote as a Microsoft 365 Copilot (Premium) feature that needs a Microsoft 365 Copilot licence. The two statements disagree on who gets it.

The roadmap item's status is Launched, with a target of February CY2026, General Availability, for the Worldwide (Standard Multi-Tenant) cloud on the web. Roadmap item 548520 covers PowerPoint on the web for Microsoft 365 Copilot-licensed users and additionally describes brand-kit integration; item 548646 covers Copilot Chat users without that licence. Desktop (499655, 557277) and Mac (557177, 557276) have their own items.

## Why it matters

If the roadmap item is right, people without a Copilot licence can have Copilot rewrite text, add slides and restyle shared decks in PowerPoint on the web, whether or not the organisation bought Copilot for them. Each user chooses to use it; Microsoft Learn documents no admin setting that turns this editing on or off on its own at the time of writing (November 2026), and the device-level privacy control that removes Copilot from PowerPoint does not reach the web version.

If the service description is right, users without a licence will not see edit mode, and the work is support: explaining why one colleague has it and another does not. Plan for the first case and confirm in your own tenant with an unlicensed test account.

## Risk assessment

**Data exposure**
- Microsoft's overview says Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) users can't use organisational data through Microsoft Graph when interacting with Copilot Chat; they upload content or work with open content. For users without the add-on, Copilot works from the deck and what they supply.
- Users can select Claude in Edit with Copilot in Microsoft 365 apps. Microsoft says Claude models in Copilot in Microsoft 365 apps are excluded from the EU Data Boundary and are on by default for most commercial customers outside the EU/EFTA and the UK. The Anthropic access setting (table) decides who can use them.

**Security & identity**
- Prompts and responses are covered by Enterprise Data Protection when users sign in with Microsoft Entra accounts, as for other Copilot use. No new connector or permission is described for this feature.

**Autonomy & actions**
- Copilot changes slide content, layout and design in the open presentation. In shared or branded decks, [co-authors can see changes as they are made](https://learn.microsoft.com/office365/servicedescriptions/office-online-service-description/powerpoint-online); review is the user's job, not an admin control.

**Change & support**
- The roadmap and the service description disagree on whether users without a licence get edit mode, so expect questions about who has it, and confusion with the separate PowerPoint Agent in the Copilot app, which Microsoft says needs a paid Microsoft 365 Copilot licence.

## Cost and licensing

- **Licence.** The roadmap item says the feature is for Copilot Chat users without a Microsoft 365 Copilot licence. Microsoft's [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) describes Copilot Chat (Basic) as included with eligible Microsoft 365 licences, and lists editing presentations in PowerPoint for Microsoft 365 Copilot (Basic) users, who don't have the add-on. The [Copilot service description](https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot) lists Edit with Copilot in PowerPoint as a Premium feature for which a Microsoft 365 Copilot licence is required; Microsoft 365 Copilot is an add-on plan with licensing prerequisites.
- **Meter.** Microsoft's Copilot overview names no meter for Copilot in PowerPoint.
- **Limits.** The overview says some features for Basic users are subject to fair use limits.
- **Indirect costs.** Admin time to settle which licence statement applies, user guidance on reviewing Copilot's edits, and service desk time while the two statements conflict.

## Scope

- **Users.** Per the roadmap item, Copilot Chat users without a Microsoft 365 Copilot licence; the service description ties Edit with Copilot to Microsoft 365 Copilot (Premium) users.
- **Platform.** PowerPoint on the web (record platform: Web). Desktop and Mac are covered by separate roadmap items.
- **Clouds.** The roadmap item lists Worldwide (Standard Multi-Tenant). The service description shows Edit with Copilot in PowerPoint as not currently available in GCC, GCC High and DoD.
- **Admin role.** Microsoft's overview names the AI Administrator role as the least-privileged role for managing Copilot and AI features across Copilot Chat (Basic), Microsoft 365 Copilot (Basic) and Microsoft 365 Copilot (Premium). The Anthropic setting needs AI Administrator or Global Administrator.

## Governance guidance

### Before rollout
- Open a presentation in PowerPoint on the web with a test account that has no Microsoft 365 Copilot licence and try to start edit with Copilot, to settle which licence statement applies in your tenant.
- Check which users hold a Microsoft 365 Copilot licence in the Microsoft 365 admin center, since the service description ties Edit with Copilot to it.
- Decide, with your data protection lead, who may use Claude models, and set **Choose who can access Anthropic models for Copilot and generative AI experiences** to match, given Microsoft's EU Data Boundary exclusion for Claude.

### At rollout
- Tell PowerPoint on the web users that Copilot can now change slides, layout and design directly, and ask owners of branded or shared decks to try it on a copy first.
- Brief the service desk that the roadmap and the service description disagree on whether unlicensed users get edit mode, and that the PowerPoint Agent in the Copilot app is a different, licensed feature.

### After rollout
- Watch the Copilot service description and Message center for a corrected licence statement for Edit with Copilot in PowerPoint, and update user guidance when it changes.
- Recheck the Anthropic access assignment when Microsoft changes Claude availability for Copilot in Microsoft 365 apps.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Setting that turns Edit with Copilot in PowerPoint on the web on or off on its own</strong><br><small>Tenant</small><br><small class="controls__note">The connected-experiences control that removes Copilot from PowerPoint is stated for device apps; the web side-pane setting is not edit-specific.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users may use Claude models from Anthropic, including in Edit with Copilot in Microsoft 365 apps</strong><br><small>Group</small><br><small class="controls__note">AI Administrator or Global Administrator. The general subprocessor page says Claude is off by default in the EU/EFTA and UK; the apps-only page says its option is enabled by default for tenants there created after March 25, 2026.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence the service description ties Edit with Copilot to</strong><br><small>User</small><br><small class="controls__note">Governs this feature only if the service description is right; the roadmap item says users without this licence get it.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- Microsoft Learn documents no setting that turns Edit with Copilot in PowerPoint on the web on or off on its own at the time of writing (November 2026).
- The privacy control **Allow the use of connected experiences in Office that analyze content** removes Copilot features from PowerPoint, but Microsoft states that for the most current apps on Windows, Mac, iOS and Android devices. For Office apps in web browsers, the privacy control Microsoft lists is **Allow the use of additional optional connected experiences in Office**, set through Cloud Policy.
- Microsoft documents, in preview, a Copilot Chat side-pane setting in [Tenant Configuration Management](https://learn.microsoft.com/graph/utcm-copilot-resources#copilotchatsidepane-resource-type) that shows or hides Copilot Chat entry points in Microsoft 365 apps for users without a Microsoft 365 Copilot licence, and does not apply to licensed users. It is not an edit-only switch.
- The licence row governs this feature only if the service description is right; the roadmap item says users without that licence get it.
- Microsoft's overview says Anthropic subprocessors are available only in applicable Microsoft 365 licensed experiences and aren't available to all users by default; the Anthropic row decides Claude access, not whether users can edit with Copilot.

## Open questions

- Does Edit with Copilot in PowerPoint on the web reach users without a Microsoft 365 Copilot licence, as the roadmap item says, or only licensed users, as the service description says? Watch the service description and Message center.
- Does hiding the Copilot Chat side pane for unlicensed users also remove edit with Copilot in PowerPoint on the web? Watch the Tenant Configuration Management reference and the Copilot controls pages.
- Is Copilot in PowerPoint on the web an optional connected experience, so that the web privacy control removes it? Watch the Microsoft 365 Apps privacy documentation.
- Can users without a Copilot licence select Claude when editing in PowerPoint on the web? Watch the Anthropic subprocessor page.

<!-- rationale
risk: Medium. Copilot changes slide content and design in the presentation a user has open, and Microsoft Learn documents no admin setting that turns this editing on or off on its own.
cost: Low. The roadmap item makes it available to Copilot Chat users without a Microsoft 365 Copilot licence and Microsoft names no meter for it, so the known cost is support and communication; the Copilot service description, however, lists Edit with Copilot as needing that licence.
impact: Medium. PowerPoint on the web users who open Copilot, including those without a Copilot licence, gain a way to have Copilot rewrite and restyle their decks; users who never open Copilot notice nothing.
-->
