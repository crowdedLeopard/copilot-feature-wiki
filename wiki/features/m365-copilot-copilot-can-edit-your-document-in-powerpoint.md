---
title: "PowerPoint for desktop: Copilot edits presentations through chat for Copilot Chat users"
slug: "m365-copilot-copilot-can-edit-your-document-in-powerpoint"
roadmapId: 557277
topic: "m365-copilot"
products: ["PowerPoint","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot in PowerPoint on desktop creates and edits slides in the open presentation through chat. The roadmap says Copilot Chat users without a Copilot licence get it; admins should decide on the Office privacy policy and Claude access."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Sources disagree. The roadmap says Copilot Chat users without a Microsoft 365 Copilot licence get it; the Copilot service description lists Edit with Copilot in PowerPoint as a Premium feature that requires a Microsoft 365 Copilot licence."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["powerpoint","copilot-chat","m365-copilot","unlicensed-users","licensing","anthropic","sensitivity-labels","microsoft-365-apps"]
sources:
  - title: "Microsoft 365 Roadmap item 557277"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557277"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap item 499655"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=499655"
    kind: "roadmap"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Microsoft Copilot (service description)"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Use policy settings to manage privacy controls for Microsoft 365 Apps for enterprise"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
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
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Which users can use Claude models, including in Edit with Copilot (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-chat-agent-mode-in-word-enables-conversational-support-to-create-edit","m365-copilot-copilot-chat-agent-mode-in-excel","m365-copilot-access-copilot-chat-in-your-m365-apps","sensitivity-labels","m365-copilot-powerpoint-agent"]
controls:
  - governs: "Whether Copilot features, editing included, are available in PowerPoint and the other Office apps"
    scope: "user"
    ui:
      surface: "Group Policy Management"
      path: "User Configuration > Policies > Administrative Templates > Microsoft Office 2016 > Privacy > Trust Center > Allow the use of connected experiences in Office that analyze content"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    api:
      kind: "other"
      call: "Registry value UserContentDisabled set to 2 (Disabled) under HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\office\\16.0\\common\\privacy"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    note: "Also settable through Cloud Policy. Turning it off removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word, not editing alone. Unconfigured, these experiences stay available."
  - governs: "Whether content under a sensitivity label is excluded from Microsoft 365 Copilot in PowerPoint"
    scope: "other"
    ui: null
    api:
      kind: "powershell"
      call: "Set-Label -Identity <label GUID> -AdvancedSettings @{BlockContentAnalysisServices=\"True\"}"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    note: "Security & Compliance PowerShell. Labelled content stays available to Copilot in other scenarios, such as Teams and Copilot Chat."
  - governs: "Which users can use Claude models, including in Edit with Copilot"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    api: null
    note: "AI Administrator or Global Administrator. Decides who can use Claude models."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-04-29T23:15:48"
changes:
  - date: "2026-11-28"
    note: "New briefing for the desktop roadmap item 557277, which Microsoft also lists as 499655."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 58 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: removed the unsupported claim that the Anthropic setting does not turn editing off, reworded the opening of Why it matters, and described 499655 as a separate licensed-user item."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 62 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 62
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f05240704e4b3cb8cb13d09a7a9b7634"
---

## What's changing

Copilot in PowerPoint on desktop can create, edit and refine a presentation through conversation, working directly in the open file. The roadmap item states that users can start a new presentation or build on an existing one, asking Copilot to generate slides, update content, improve layouts and polish design while preserving formatting, structure and branding, and that the capability is available to Copilot Chat users without a Microsoft 365 Copilot licence.

Microsoft's [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) lists, among the in-app features for Microsoft 365 Copilot (Basic) users (people without the Copilot add-on licence who have Copilot inside the apps), PowerPoint's ability to "create presentations from prompts or existing content, summarize presentations or edit presentations (add images, apply deck-wide formatting changes)". Microsoft's [Copilot service description](https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot) lists **Edit with Copilot in Word, Excel, PowerPoint, and OneNote** as a Microsoft 365 Copilot (Premium) feature, for which a Microsoft 365 Copilot licence is required. The two statements disagree about who gets the editing experience; Cost and licensing gives both.

The roadmap record shows the item as Launched, in General Availability, for Desktop in the Worldwide (Standard Multi-Tenant) cloud, with a target of April CY2026. [Roadmap item 499655](https://www.microsoft.com/microsoft-365/roadmap?id=499655) describes desktop conversational editing for Microsoft 365 Copilot-licensed users (target March CY2026); the two records name the same platform and cloud. Mac and web are listed under separate items.

## Why it matters

The roadmap describes presentation editing for the Copilot Chat population, not only for people with a Microsoft 365 Copilot licence. Expect questions about what unlicensed users may do, about slide quality and branding, and, in tenants with data residency commitments, about which AI model processed the content.

If nobody acts, the feature is available: the roadmap says it is available to Copilot Chat users, and Microsoft's privacy-controls page says connected experiences that analyse content are available to users when the policy governing them is not configured. Tenants that have turned that policy off do not get Copilot features in PowerPoint at all. Where Claude models are enabled, users of Edit with Copilot can choose them, and Microsoft states those models are currently excluded from the EU Data Boundary.

## Risk assessment

**Data exposure**
- Copilot reads and rewrites the content of the open presentation. A sensitivity label configured with the BlockContentAnalysisServices advanced setting excludes labelled content from Microsoft 365 Copilot in Word, Excel, PowerPoint and Outlook; Microsoft's page says that content remains available to Copilot in other scenarios, such as Teams and Copilot Chat.
- Users can select Claude in Edit with Copilot in Microsoft 365 apps. Microsoft states Claude models in Copilot in Microsoft 365 apps are excluded from the EU Data Boundary and, where applicable, in-country processing commitments, and are on by default for most commercial-cloud customers outside the EU, EFTA and UK. The Anthropic subprocessor setting decides who can use them.

**Security & identity**
- No change to report: the roadmap describes Copilot editing the user's open presentation and names no new identity, permission or connection.

**Autonomy & actions**
- Copilot changes slides, text, layout and design in the open file at the user's request. Microsoft's privacy page notes that generative AI responses aren't guaranteed to be 100% factual, so review of each edit rests with the user before the deck is shared.

**Change & support**
- The roadmap and the service description give different answers on whether a Microsoft 365 Copilot licence is needed, so expect helpdesk questions from users who do or do not see the editing experience. Microsoft's overview says some features for users without the add-on licence are subject to fair use limits.

## Cost and licensing

- **Licence.** Microsoft's sources disagree. The roadmap item says the feature is available to Copilot Chat users without a Microsoft 365 Copilot licence, and the [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) lists editing presentations among PowerPoint features for Microsoft 365 Copilot (Basic) users. The [Copilot service description](https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot) lists Edit with Copilot in PowerPoint as a Premium feature that requires a Microsoft 365 Copilot licence, and describes Microsoft 365 Copilot as an add-on plan with specific licensing prerequisites.
- **Limits.** The overview says some features for users without the add-on licence are subject to fair use limits.
- **Indirect costs.** Helpdesk time and user communication, especially while the licensing statements disagree.

## Scope

- **Users:** Copilot Chat users without a Microsoft 365 Copilot licence, according to the roadmap; the service description ties Edit with Copilot to Microsoft 365 Copilot licence holders.
- **Platform:** Desktop, per the record. Mac (557177, 557276) and web (548520, 548646) are separate roadmap items.
- **Cloud:** Worldwide (Standard Multi-Tenant), per the record. The service description marks Edit with Copilot in Word, Excel, PowerPoint and OneNote as not currently available in GCC, GCCH and DoD.
- **Prerequisite:** Copilot features in PowerPoint depend on connected experiences that analyse content being allowed.
- **Roles:** changing the Anthropic subprocessor setting needs the AI Administrator or Global Administrator role.

## Governance guidance

### Before rollout
- Decide whether users without a Microsoft 365 Copilot licence should edit presentations with Copilot; the documented device policy, Allow the use of connected experiences in Office that analyze content, removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word together.
- Check who can access Anthropic models in the Microsoft 365 admin center's AI providers operating as Microsoft subprocessors setting (path in the controls table), against your EU Data Boundary commitments.
- Identify sensitivity labels whose content must stay out of Copilot in PowerPoint, and set BlockContentAnalysisServices on them with Set-Label in Security & Compliance PowerShell.

### At rollout
- Tell PowerPoint desktop users that Copilot edits change the open file and that they should review slides before sharing them.
- Brief the helpdesk on the licensing difference between the roadmap item and the service description, so they can explain why some users see the editing experience.

### After rollout
- Re-check the Edit with Copilot row of the Copilot service description for a change in its licence footnote.
- For tenants in the EU, EFTA or UK, read Microsoft's page on enabling Claude models only for Copilot experiences in Microsoft 365 apps before 9 December 2026, when Microsoft says important changes to that setting take effect.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot features, editing included, are available in PowerPoint and the other Office apps</strong><br><small>User</small><br><small class="controls__note">Also settable through Cloud Policy. Turning it off removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word, not editing alone. Unconfigured, these experiences stay available.</small></td><td data-label="Admin UI"><strong>Group Policy Management</strong><br>User Configuration › Policies › Administrative Templates › Microsoft Office 2016 › Privacy › Trust Center › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value UserContentDisabled set to 2 (Disabled) under HKEY_CURRENT_USER\Software\Policies\Microsoft\office\16.0\common\privacy</code> <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether content under a sensitivity label is excluded from Microsoft 365 Copilot in PowerPoint</strong><br><small class="controls__note">Security &amp; Compliance PowerShell. Labelled content stays available to Copilot in other scenarios, such as Teams and Copilot Chat.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;label GUID&gt; -AdvancedSettings @{BlockContentAnalysisServices=&quot;True&quot;}</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-office-apps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can use Claude models, including in Edit with Copilot</strong><br><small>User</small><br><small class="controls__note">AI Administrator or Global Administrator. Decides who can use Claude models.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The connected-experiences policy is set per user through Group Policy or Cloud Policy; Microsoft's page lists Excel, OneNote, Outlook, PowerPoint and Word as the apps where Copilot features become unavailable when it is turned off, and when it is not configured these experiences are available. The sensitivity label setting is set only through Security & Compliance PowerShell and keeps labelled content out of Copilot in the named Office apps, not out of Copilot in Teams or Copilot Chat. The Anthropic setting decides who can use Claude models and needs the AI Administrator or Global Administrator role. Blocking the Copilot app in Integrated Apps blocks Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web, according to [Manage Copilot Chat](https://learn.microsoft.com/copilot/manage/manage-copilot-chat).

## Open questions

- Does Edit with Copilot in PowerPoint desktop need a Microsoft 365 Copilot licence, as the service description says, or only Copilot Chat eligibility, as the roadmap says? Watch the service description's feature table.
- What fair use limit applies to presentation edits by users without a Copilot licence, and what do they see when it is reached?
- Can users without a Copilot licence choose Claude models when editing in PowerPoint, or does that choice apply only to licensed users?
- Does editing for users without a Copilot licence draw on other organisational files, meetings or email, or only on the open presentation?

<!-- rationale
risk: Medium. Copilot rewrites content in users' open presentations without a Copilot licence rollout, and users can pick Claude models that Microsoft excludes from the EU Data Boundary; existing Office privacy, label and model settings cover it.
cost: Low. The roadmap says no Microsoft 365 Copilot licence is needed, leaving support and communication time; Microsoft's service description instead lists Edit with Copilot as a feature that requires that licence.
impact: Medium. PowerPoint desktop users who open Copilot notice it, including people without a Copilot licence; nothing changes for users who do not use Copilot.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].governs/note; Why it matters; Scope; Governance guidance; Governance controls; rationale: risk / applicability: Turning off connected experiences that analyse content makes Copilot features unavailable in Excel, OneNote, Outlook, PowerPoint and Word. | Found: If you turn off connected experiences that analyze your content on devices in your organization, Microsoft Copilot features won't be available ... This applies to when you're running the most current version of these apps on Windows, Mac, iOS, or Android devices. | Fix: Add to controls[0].note and qualify the corresponding prose: 'This applies when running the most current version of these apps.' The qualification is stated at https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy#microsoft-copilot-and-privacy-controls-for-connected-experiences. | Source: https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy
- [supported, minor] controls[1].governs; Risk assessment; Governance guidance; Governance controls; rationale: risk / applicability: BlockContentAnalysisServices excludes labelled content from Microsoft 365 Copilot in Word, Excel, PowerPoint and Outlook. | Found: Although content with the configured sensitivity label will be excluded from Microsoft 365 Copilot in the named Office apps ... Support for this setting differs for clients and apps. | Fix: Add to controls[1].note: 'Support differs by client and app; check the minimum supported Office versions in the sensitivity-label capabilities tables.' Cite https://learn.microsoft.com/purview/sensitivity-labels-office-apps#prevent-connected-experiences-that-analyze-content for this qualification. | Source: https://learn.microsoft.com/purview/sensitivity-labels-office-apps
-->
