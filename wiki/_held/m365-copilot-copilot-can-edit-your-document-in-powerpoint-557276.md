---
title: "PowerPoint for Mac: Copilot edits presentations through chat for Copilot Chat users"
slug: "m365-copilot-copilot-can-edit-your-document-in-powerpoint-557276"
roadmapId: 557276
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot in PowerPoint for Mac creates and edits slides in the open presentation through chat. The roadmap says users without a Microsoft 365 Copilot licence get it; admins should decide on the Mac connected-experiences preference and Claude access."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Mac"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Sources disagree. The roadmap item and Microsoft's Copilot overview put presentation editing within reach of users without the Microsoft 365 Copilot add-on; the Copilot service description lists Edit with Copilot in PowerPoint as a Premium feature that requires a Microsoft 365 Copilot licence."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["powerpoint","copilot-chat","m365-copilot","unlicensed-users","licensing","macos","cloud-policy","sensitivity-labels","anthropic","microsoft-365-apps"]
sources:
  - title: "Microsoft 365 Roadmap item 557276"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557276"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap item 557177"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557177"
    kind: "roadmap"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft Copilot (service description)"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Use preferences to manage privacy controls for Office for Mac"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Manage sensitivity labels in Office apps"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Enable Claude models only for Copilot experiences in Microsoft 365 apps"
    url: "https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps"
    kind: "learn"
  - title: "Limits for features in Microsoft Copilot Chat"
    url: "https://support.microsoft.com/microsoft-365-copilot/limits-for-features-copilot-chat"
    kind: "docs"
  - title: "Which users can use Anthropic (Claude) models in Copilot experiences, PowerPoint included (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence the service description ties Edit with Copilot to (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence the service description ties Edit with Copilot to (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-chat-agent-mode-in-word-enables-conversational-support-to-create-edit","m365-copilot-copilot-chat-agent-mode-in-excel","sensitivity-labels","cloud-policy","m365-copilot-access-copilot-chat-in-your-m365-apps"]
controls:
  - governs: "Whether Copilot features, editing included, are available in PowerPoint and other Office apps on Mac"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow the use of connected experiences in Office that analyze content"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences"
    api:
      kind: "other"
      call: "Preference OfficeExperiencesAnalyzingContentPreference set to FALSE in domain com.microsoft.office, through a Configuration Profile or MDM"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences"
    note: "Turning it off removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word, not editing alone. Unset, these experiences stay available."
  - governs: "Admin setting that turns off Copilot editing in PowerPoint for Mac alone"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
  - governs: "Whether content with a given sensitivity label is excluded from Copilot in PowerPoint"
    scope: "other"
    ui: null
    api:
      kind: "powershell"
      call: "Set-Label -Identity \"<label GUID>\" -AdvancedSettings @{BlockContentAnalysisServices=\"True\"}"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    note: "Security & Compliance PowerShell only; not available in the Microsoft Purview portal. Labelled content stays available to Copilot in Teams and Copilot Chat."
  - governs: "Which users can use Anthropic (Claude) models in Copilot experiences, PowerPoint included"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    api: null
    note: "AI Administrator or Global Administrator. For EU, EFTA and UK tenants, setting changes take effect on December 9, 2026."
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
    note: "New briefing: Copilot editing in PowerPoint for Mac for Copilot Chat users, with the conflicting licence statements, the Mac connected-experiences preference and the December 9, 2026 Anthropic change."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 67 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected the Cloud Policy admin path, noted that roadmap item 557177 has a different description, removed an unsupported claim about the Anthropic change widening PowerPoint's models, and reworded the editing description to the roadmap's terms."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 71
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "72c031a372ec5c124360feeac2585435"
---

## What's changing

Copilot in PowerPoint for Mac can now create and change the presentation a user has open, through a chat conversation. The roadmap item says users can start a new presentation or build on an existing one, asking Copilot to generate slides, update content, improve layouts and polish design while preserving formatting, structure and branding, and that it is available to Copilot Chat users without a Microsoft 365 Copilot licence.

Microsoft Learn has no page for this Mac item, so its behaviour here is the roadmap's description. Microsoft's [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) lists, among the in-app features for Microsoft 365 Copilot (Basic) users (users without the Copilot add-on who can use Copilot inside the apps), "PowerPoint: Create presentations from prompts or existing content, summarize presentations or edit presentations (add images, apply deck-wide formatting changes)". Neither source describes a step an administrator must take before users can use it; each user chooses to ask Copilot for an edit.

The sources disagree on who gets it. The [Copilot service description](https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot) lists "Edit with Copilot in Word, Excel, PowerPoint, and OneNote" as a Microsoft 365 Copilot (Premium) feature, for which a Microsoft 365 Copilot licence is required, available in Commercial/Worldwide and not currently in GCC, GCC High or DoD.

The roadmap item's status is Launched, General Availability, with a target of April CY2026, for the Worldwide (Standard Multi-Tenant) cloud on Mac. Microsoft also lists roadmap item 557177 for Mac under the same title, also Launched for Worldwide with a target of March CY2026, but its description differs from this item's: it describes Copilot connecting to a brand kit and is available to Microsoft 365 Copilot–licensed users. Separate items cover desktop and web.

## Why it matters

If nobody acts, Mac users who can use Copilot in PowerPoint can have it add, rewrite and restyle slides in shared decks, whether or not the organisation bought Copilot for them, if the roadmap is right. Edits land in the presentation itself, so a wrong figure or reworded claim can reach a customer deck before anyone checks it. Microsoft Learn documents no setting that turns Copilot editing in PowerPoint off on its own; the documented Mac control removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word together.

The licence conflict is a support question as much as a cost one: some unlicensed users may see the feature and others not, depending on which source proves right. For tenants in the EU, EFTA and the UK, Microsoft's Anthropic setting changes on December 9, 2026.

## Risk assessment

**Data exposure**
- Copilot works on the presentation open in PowerPoint. A sensitivity label with the advanced setting *BlockContentAnalysisServices* excludes labelled content from Microsoft 365 Copilot in Word, Excel, PowerPoint and Outlook; Microsoft's page says the content stays available to Copilot in other scenarios, such as Teams and Copilot Chat.

**Security & identity**
- No new sign-in, permission or connector is described for this feature. Where the Anthropic subprocessor is enabled, Claude models are among the models available to Copilot experiences in PowerPoint; the Microsoft 365 admin center setting decides which users can use them.

**Autonomy & actions**
- The roadmap describes Copilot updating slide content, improving layouts and polishing design through natural conversation. The roadmap describes edits made directly in the presentation; Microsoft documents no approval step an administrator can require before changes are written.

**Change & support**
- Microsoft lists two Mac roadmap items under this title with different targets, and its licence sources disagree. Expect questions from Mac users about why the feature appears for some and not others.

## Cost and licensing

**Licence.** The roadmap item says Copilot Chat users without a Microsoft 365 Copilot licence get it. Microsoft's [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) says Microsoft 365 Copilot (Basic) users don't have the add-on licence but can use Copilot in Word, Excel, PowerPoint and OneNote, and that Copilot Chat (Basic) users don't have access to Copilot in those apps. The [Copilot service description](https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot) says a Microsoft 365 Copilot licence is required for Edit with Copilot in PowerPoint.

**Meter and caps.** The overview says some features are subject to fair use limits. A limit specific to editing in PowerPoint for Mac is not yet published.

**Indirect costs.** Admin time to set the Mac preference or Cloud Policy, to review label settings and to brief Mac users.

## Scope

- **Users:** PowerPoint users on Mac. The roadmap says Copilot Chat users without a Microsoft 365 Copilot licence; the service description says Microsoft 365 Copilot licence holders.
- **Cloud:** Worldwide (Standard Multi-Tenant), as the record lists it. The service description marks Edit with Copilot as not currently available in GCC, GCC High and DoD.
- **Platform:** Mac. Desktop and web are separate roadmap items.
- **Roles:** Office Apps Administrator (recommended), Security Administrator or Global Administrator for Cloud Policy; AI Administrator or Global Administrator for the Anthropic setting.
- **Status:** Launched, General Availability, target April CY2026.

## Governance guidance

### Before rollout
- Decide whether Mac users without a Microsoft 365 Copilot licence should have Copilot edit presentations, knowing the documented off switch removes Copilot from Excel, OneNote, Outlook, PowerPoint and Word together.
- Check which users hold a Microsoft 365 Copilot licence in the Microsoft 365 admin center, so support can tell users which licence statement applies to them.
- Check the Anthropic subprocessor setting before December 9, 2026 if the tenant is in the EU, EFTA or UK, and set the users or groups who may use Claude models.

### At rollout
- Set *OfficeExperiencesAnalyzingContentPreference* to FALSE through a Configuration Profile or MDM, or set the Cloud Policy *Allow the use of connected experiences in Office that analyze content*, for Mac users who must not use Copilot in Office.
- Add *BlockContentAnalysisServices* to sensitivity labels whose content must not be sent to Copilot in PowerPoint, in Security & Compliance PowerShell.
- Tell Mac PowerPoint users that Copilot changes the open deck directly, and to review slides before sharing them.

### After rollout
- Recheck the Copilot service description's feature table for a change to the Edit with Copilot licence footnote.
- Recheck the Anthropic setting after December 9, 2026 to confirm which users can use Claude models in PowerPoint.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot features, editing included, are available in PowerPoint and other Office apps on Mac</strong><br><small>User</small><br><small class="controls__note">Turning it off removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word, not editing alone. Unset, these experiences stay available.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Preference OfficeExperiencesAnalyzingContentPreference set to FALSE in domain com.microsoft.office, through a Configuration Profile or MDM</code> <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin setting that turns off Copilot editing in PowerPoint for Mac alone</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether content with a given sensitivity label is excluded from Copilot in PowerPoint</strong><br><small class="controls__note">Security &amp; Compliance PowerShell only; not available in the Microsoft Purview portal. Labelled content stays available to Copilot in Teams and Copilot Chat.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &quot;&lt;label GUID&gt;&quot; -AdvancedSettings @{BlockContentAnalysisServices=&quot;True&quot;}</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-office-apps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can use Anthropic (Claude) models in Copilot experiences, PowerPoint included</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator. For EU, EFTA and UK tenants, setting changes take effect on December 9, 2026.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence the service description ties Edit with Copilot to</strong><br><small>User</small><br><small class="controls__note">Governs this feature only if the service description is right; the roadmap item says users without this licence get it.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- The connected-experiences preference is the documented Mac control; when it is enforced, users can't change it. Unset, connected experiences that analyze content stay available. Cloud Policy settings take precedence over preference settings.
- Cloud Policy needs the Office Apps Administrator (recommended), Security Administrator or Global Administrator role. The Anthropic setting needs AI Administrator or Global Administrator.
- The label setting is not available in the Microsoft Purview portal; it is set only through Security & Compliance PowerShell, and excludes labelled content from Copilot in the Office apps, not from Teams or Copilot Chat.
- The licence row governs this feature only if the service description is right.

## Open questions

- Which licence does Microsoft intend for Copilot editing in PowerPoint for Mac: the service description's Microsoft 365 Copilot (Premium) requirement, or the roadmap's Copilot Chat users? Watch the Copilot service description.
- Which subscriptions make a user Microsoft 365 Copilot (Basic), with Copilot inside PowerPoint, rather than Copilot Chat (Basic), without it? Watch the Copilot overview.
- Will Microsoft add an admin setting that turns off Copilot editing in PowerPoint without removing other Copilot features in Office? Watch Message center and the Mac privacy preferences page.
- What fair use limits apply to Copilot edits in PowerPoint for users without the add-on?

<!-- rationale
risk: Medium. Copilot can rewrite slides in a presentation a Mac user has open with no admin step, and the documented off switch removes Copilot from Word, Excel, PowerPoint, OneNote and Outlook together rather than from editing alone.
cost: Low. The roadmap says no Microsoft 365 Copilot licence is needed, so the known cost is admin and support time; Microsoft's service description instead lists Edit with Copilot in PowerPoint as needing that licence.
impact: Medium. PowerPoint users on Mac notice it, including those without a Microsoft 365 Copilot licence if the roadmap item is right.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; What's changing: each user chooses to ask Copilot for an edit / default: The feature's default state is user-opt-in. | Found: Copilot is an AI-powered assistant available in PowerPoint for Windows, Mac, and the web. It can be accessed by opening Copilot Chat using the Copilot icon at the bottom-right corner of the screen. It is on by default in the prompt box. | Fix: Set defaultState to "on". Replace "Neither source describes a step an administrator must take before users can use it; each user chooses to ask Copilot for an edit" with "Microsoft's Edit with Copilot in PowerPoint page says it is on by default in the prompt box; users ask for changes through Copilot Chat." Cite and add https://support.microsoft.com/en-us/topic/008f17aa-8e5f-4cda-ba6c-0588000bdad7 to sources. | Source: https://support.microsoft.com/en-us/topic/008f17aa-8e5f-4cda-ba6c-0588000bdad7
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].governs; Risk assessment: Data exposure; Governance guidance; Governance controls / applicability: BlockContentAnalysisServices excludes labelled content from Copilot in Word, Excel, PowerPoint and Outlook. | Found: Support for this setting differs for clients and apps. Identify the minimum versions of Office that support this setting by using the capabilities tables ... content with the configured sensitivity label will be excluded from Microsoft 365 Copilot in the named Office apps | Fix: Qualify the Risk assessment sentence as: "On Office clients that support the setting, a sensitivity label with the advanced setting BlockContentAnalysisServices excludes labelled content from Microsoft 365 Copilot in Word, Excel, PowerPoint and Outlook." Add "Requires an Office client version that supports this setting" to controls[2].note; the existing cited page links to the supported-version tables. | Source: https://learn.microsoft.com/purview/sensitivity-labels-office-apps
-->
