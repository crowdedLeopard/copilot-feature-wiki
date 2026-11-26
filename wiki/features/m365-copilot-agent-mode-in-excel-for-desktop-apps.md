---
title: "Excel on Windows and Mac: Copilot Agent Mode (Edit with Copilot) builds and edits workbooks, with a choice of model"
slug: "m365-copilot-agent-mode-in-excel-for-desktop-apps"
roadmapId: 542182
topic: "m365-copilot"
products: ["Excel","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot in Excel desktop can now build and change workbooks in multi-step chat, and users can pick OpenAI or Anthropic models. It needs a Microsoft 365 Copilot licence. Check who may use Claude models before December 9, 2026."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac"]
targetDate: "January CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "add-on"
  notes: "Microsoft's Copilot service description lists Edit with Copilot in Word, Excel, PowerPoint, and OneNote as a Microsoft 365 Copilot (Premium) feature: a Microsoft 365 Copilot licence is required. Microsoft 365 Copilot is an add-on plan with licensing prerequisites."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["excel","m365-copilot","anthropic","model-selector","microsoft-365-apps","data-residency","sensitivity-labels","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 542182"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=542182"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot - Service Descriptions"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Claude models from Anthropic in Microsoft Online Services"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor"
    kind: "learn"
  - title: "Enable Claude models only for Copilot experiences in Microsoft 365 apps"
    url: "https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps"
    kind: "learn"
  - title: "View and edit in Excel from Business Central"
    url: "https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that Edit with Copilot in Excel requires (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence that Edit with Copilot in Excel requires (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Which users may use Anthropic (Claude) models, including in Edit with Copilot (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    kind: "learn"
  - title: "Whether Copilot features are available in Excel and other Office apps (connected experiences that analyse content) (Group Policy Management)"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    kind: "learn"
  - title: "Whether workbooks with a given sensitivity label are excluded from Copilot in Office apps (PowerShell)"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    kind: "learn"
videos: []
related: ["m365-copilot-local-file-support-for-agent-mode-in-excel","m365-copilot-when-using-agent-mode-in-word-you-will-be-able-to-manually-select-which-model","m365-copilot-agent-mode-in-word-for-enhanced-document-editing","sensitivity-labels","cloud-policy"]
controls:
  - governs: "Which users hold the Microsoft 365 Copilot licence that Edit with Copilot in Excel requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "The service description lists Edit with Copilot in Excel as a Microsoft 365 Copilot (Premium) feature."
  - governs: "Which users may use Anthropic (Claude) models, including in Edit with Copilot"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences"
      docs: "https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models"
    api: null
    note: "AI Administrator or Global Administrator. Applied at provider level across Microsoft Copilot and Copilot Studio. EU, EFTA and UK options change on December 9, 2026."
  - governs: "Whether Copilot features are available in Excel and other Office apps (connected experiences that analyse content)"
    scope: "user"
    ui:
      surface: "Group Policy Management"
      path: "User Configuration > Policies > Administrative Templates > Microsoft Office 2016 > Privacy > Trust Center > Allow the use of connected experiences in Office that analyze content"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    api:
      kind: "other"
      call: "Registry value UserContentDisabled set to 2 (Disabled)"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    note: "Existing control. Turning it off removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word, not only Edit with Copilot. Also settable through Cloud Policy."
  - governs: "Whether workbooks with a given sensitivity label are excluded from Copilot in Office apps"
    scope: "other"
    ui: null
    api:
      kind: "powershell"
      call: "Set-Label -Identity <label GUID> -AdvancedSettings @{BlockContentAnalysisServices=\"True\"}"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    note: "Not available in the Microsoft Purview portal. Labelled content stays available to Copilot in other scenarios such as Teams and Copilot Chat."
  - governs: "Switch for Edit with Copilot (Agent Mode) in Excel on its own"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting specific to this feature is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-26"
roadmapModified: "2026-02-13T23:15:55"
changes:
  - date: "2026-11-25"
    note: "New briefing: Agent Mode in Excel desktop is launched as Edit with Copilot; covers the Microsoft 365 Copilot licence, Claude model access and the December 9, 2026 Anthropic setting change."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 57 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: the Product Terms and DPA statement now carries Microsoft's exception for Anthropic models with Data Retention; the Anthropic setting path includes View all; removed an unsupported claim about earlier Copilot behaviour; reworded the Show Changes checklist step."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 58
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f3e697d0c2237479a20e900c3c4ca0d3"
---

## What's changing

Copilot in Excel on Windows and Mac gains Agent Mode: users describe a task in the Copilot pane and Copilot builds or changes the workbook over several steps. The roadmap item also states that eligible licences can choose which model to use, including OpenAI and Anthropic models.

Microsoft now calls this capability **Edit with Copilot**. The Microsoft 365 Copilot release notes for March 10, 2026 list "Edit with Copilot in Excel to enhance your productivity (formerly Agent Mode)" for Windows, Web and Mac against roadmap IDs 542182 and 527835. Microsoft describes it as a new option in Copilot in Excel for building and changing workbooks with tables, charts, PivotTables and formulas. Users who don't see the "Let's edit together" welcome message select **Edit with Copilot** from the tools menu. Later release notes add Python: since August 2026, Edit with Copilot can run Python code and write the results into the workbook.

On model choice, Microsoft's Anthropic page says that in capabilities such as Edit with Copilot in Microsoft 365 apps, users can select **Claude**. Claude models are on by default for most commercial customers, excluding the EU, EFTA and UK, where the default is **No users**.

The roadmap record lists the item as Launched, General Availability, targeted for January CY2026, on Desktop and Mac in the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

For licensed users, Edit with Copilot can build and change workbooks through chat. Microsoft describes Edit with Copilot as a new option available in Copilot in Excel and the workbook-editing capabilities as part of the regular Copilot in Excel experience, so expect licensed users to have it already. Expect more Copilot-authored formulas, PivotTables and Python output in finance and reporting workbooks, and plan for users to check them.

The model choice is the governance decision. Where Anthropic is allowed, Excel content a user works on can be processed by Claude models. Microsoft's Product Terms and Data Protection Addendum apply unless the models are labelled "Anthropic models with Data Retention". For EU, EFTA and UK tenants, Microsoft is changing the Anthropic setting on December 9, 2026: a tenant that chose **All users for Microsoft 365 apps only**, or never chose, moves to **All users**.

## Risk assessment

**Data exposure**
- Choosing a Claude model sends the work to a model operated by Anthropic as a Microsoft subprocessor. Microsoft's page says that when Claude models are used in Copilot in Excel, PowerPoint or Word, processing occurs outside the EU Data Boundary, and that Claude models are coming into the EU Data Boundary starting in December 2026. Who may use Anthropic models is set in the Microsoft 365 admin center (controls table).
- A sensitivity label can carry the advanced setting `BlockContentAnalysisServices`. Microsoft says content with that label is excluded from Microsoft 365 Copilot in the named Office apps, but stays available to Copilot elsewhere, for example in Teams and Copilot Chat.

**Security & identity**
- No change to sign-in is documented for this item. The AI Administrator or Global Administrator role is needed to change the Anthropic setting.

**Autonomy & actions**
- Copilot makes multi-step changes to the workbook and, since August 2026, runs Python code whose results land in the workbook. Microsoft says existing security and execution controls continue to help manage how code runs.
- Edits are visible: the Show Changes pane shows on-card attribution when Copilot made edits, and chat responses link to the changed sheets, tables and ranges.

**Change & support**
- EU, EFTA and UK tenants whose Anthropic setting is **All users for Microsoft 365 apps only**, or unset, move to **All users** on December 9, 2026, which widens Claude access beyond Word, Excel and PowerPoint.
- Expect questions about why some users see a model picker or Claude and others do not; licence and the Anthropic user scope decide that.

## Cost and licensing

- **Licence.** The Microsoft Copilot service description lists Edit with Copilot in Word, Excel, PowerPoint, and OneNote with footnote 2, Microsoft 365 Copilot (Premium) features: "A Microsoft 365 Copilot license is required to access this feature." It describes Microsoft 365 Copilot as an add-on plan with specific licensing prerequisites.
- **Model choice.** The roadmap item says eligible licences can select the model. The service description publishes no separate charge for selecting a Claude or OpenAI model at the time of writing (November 2026).
- **Indirect costs.** Admin time to review the Anthropic setting and user scope, and time for workbook owners to review Copilot's edits.

## Scope

- **Users:** holders of a Microsoft 365 Copilot licence, per the service description.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant). The service description shows Edit with Copilot as not currently available in GCC, GCC High and DoD.
- **Platforms:** the record lists Desktop and Mac; the release notes list Windows, Web and Mac for Edit with Copilot in Excel.
- **Claude models:** on by default for most commercial customers; off (**No users**) by default in the EU, EFTA and UK. Microsoft's page says Claude models aren't available for federal GCC customers or in GCC High and DoD.
- **Admin roles:** AI Administrator or Global Administrator for the Anthropic setting; licence assignment in the Microsoft 365 admin center.

## Governance guidance

### Before rollout
- Check the Anthropic setting under Microsoft 365 admin center > Copilot > Settings > View all > AI providers operating as Microsoft subprocessors, and decide which users or groups may use Claude models in Excel.
- Confirm, for EU, EFTA and UK tenants, what the setting will become on December 9, 2026, and set **No users** or **Specific users and groups** before then if **All users** is not wanted.
- Review which users hold Microsoft 365 Copilot licences, since the licence decides who gets Edit with Copilot.

### At rollout
- Tell Excel users that Copilot can now change workbooks directly and run Python, and that they own the result.
- Apply the `BlockContentAnalysisServices` label setting to labels whose workbooks must stay out of Copilot in Office apps, noting Microsoft's warning that some services, such as automatic and recommended labelling, won't work as designed.

### After rollout
- Ask owners of critical workbooks to review Copilot's edits before using the results.
- Recheck the Anthropic user scope after the December 2026 EU Data Boundary change and after any Message center notice on Claude models.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that Edit with Copilot in Excel requires</strong><br><small>User</small><br><small class="controls__note">The service description lists Edit with Copilot in Excel as a Microsoft 365 Copilot (Premium) feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users may use Anthropic (Claude) models, including in Edit with Copilot</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator. Applied at provider level across Microsoft Copilot and Copilot Studio. EU, EFTA and UK options change on December 9, 2026.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot features are available in Excel and other Office apps (connected experiences that analyse content)</strong><br><small>User</small><br><small class="controls__note">Existing control. Turning it off removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word, not only Edit with Copilot. Also settable through Cloud Policy.</small></td><td data-label="Admin UI"><strong>Group Policy Management</strong><br>User Configuration › Policies › Administrative Templates › Microsoft Office 2016 › Privacy › Trust Center › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value UserContentDisabled set to 2 (Disabled)</code> <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether workbooks with a given sensitivity label are excluded from Copilot in Office apps</strong><br><small class="controls__note">Not available in the Microsoft Purview portal. Labelled content stays available to Copilot in other scenarios such as Teams and Copilot Chat.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;label GUID&gt; -AdvancedSettings @{BlockContentAnalysisServices=&quot;True&quot;}</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-office-apps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for Edit with Copilot (Agent Mode) in Excel on its own</strong><br><small>Tenant</small><br><small class="controls__note">No setting specific to this feature is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting that turns off Edit with Copilot in Excel on its own is documented at the time of writing (November 2026). The connected-experiences policy is the documented way to remove Copilot features from Excel, but it also removes them from Word, PowerPoint, Outlook and OneNote. The Anthropic setting is applied at the provider level and enforced across Microsoft Copilot and Copilot Studio, not only Excel. Microsoft's Graph policy settings API lists no Anthropic or Edit with Copilot setting among its supported settings. The label setting is not available in the Microsoft Purview portal; Microsoft says to use the BlockContentAnalysisServices advanced setting with Set-Label or New-Label in Security & Compliance PowerShell.

## Open questions

- Which OpenAI and Anthropic models appear in the Excel model picker, and which model is used when a user makes no choice? Watch the Microsoft 365 Copilot release notes.
- Will Microsoft add a setting that turns off Edit with Copilot in Excel without turning off all Copilot features in Office apps? Watch Message center.
- Once Claude models come into the EU Data Boundary in December 2026, does that cover Copilot in Excel for every EU tenant? Watch the Anthropic subprocessor page.
- Do the Python execution controls for Python in Excel apply in the same way when Edit with Copilot runs the code? Watch the Python in Excel admin documentation.

<!-- rationale
risk: Medium. Copilot now changes workbook content itself, and users can send that work to Claude models, which Microsoft runs through Anthropic as a subprocessor and which are on by default outside the EU, EFTA and UK.
cost: Medium. Microsoft's service description lists Edit with Copilot in Excel as a Premium feature that needs a Microsoft 365 Copilot licence, which is an add-on plan.
impact: Medium. Users who hold a Microsoft 365 Copilot licence and work in Excel on Windows or Mac see a new editing mode in the Copilot pane.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope / default: Microsoft's general Anthropic page says the EU, EFTA and UK default is No users. | Found: the default is set to **No users**. These regions include the European Union (EU), the European Free Trade Association (EFTA), and the United Kingdom (UK). | Fix: After the regional-default statement, add: 'However, Microsoft's apps-specific guidance says the apps-only setting is enabled by default for EU, EFTA and UK tenants created after March 25, 2026; check the actual tenant setting.' Cite https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps, which states: 'This setting is enabled by default for tenants in the EU, EFTA, and UK that were created after March 25, 2026.' | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor
- [supported, minor] front matter: defaultState; Why it matters; rationale: impact / default: Editing is part of the regular Copilot in Excel experience for eligible users, supporting defaultState on. | Found: Copilot in Excel offers three modes: edit, plan, or chat. By default, Copilot in Excel opens in edit mode. | Fix: Add https://support.microsoft.com/topic/a2fd6fe4-97ac-416b-b89a-22f4d1357c7a to sources as 'Get started with Copilot in Excel'; it explicitly confirms the editing default. Keep defaultState as on. | Source: https://support.microsoft.com/topic/a2fd6fe4-97ac-416b-b89a-22f4d1357c7a
- [supported, minor] Governance guidance: Before rollout, first bullet / admin-path: The shortened Anthropic route reaches the AI providers operating as Microsoft subprocessors page. | Found: Go to the Microsoft 365 admin center and select **Copilot** > **Settings** > **View all**. Select **AI providers operating as Microsoft subprocessors**. | Fix: Complete the first governance bullet's route as 'Microsoft 365 admin center > Copilot > Settings > View all > AI providers operating as Microsoft subprocessors > Available subprocessors for your organization > Anthropic > Choose who can access Anthropic models for Copilot and generative AI experiences', matching controls[1].ui. | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor
-->
