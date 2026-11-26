---
title: "Excel on the web: Copilot Agent Mode (Edit with Copilot) builds and edits workbooks through chat"
slug: "m365-copilot-agent-mode-in-excel"
roadmapId: 527835
topic: "m365-copilot"
products: ["Excel","Microsoft Copilot (Microsoft 365)"]
summary: "Users with a Microsoft 365 Copilot licence can have Copilot build and change Excel workbooks through chat. It is already available to them. Review who holds the licence, who may use Claude models, and which labelled files Copilot must not process."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
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
tags: ["excel","m365-copilot","anthropic","dlp","licensing","data-residency","sensitivity-labels"]
sources:
  - title: "Microsoft 365 Roadmap 527835"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=527835"
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
  - title: "Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork"
    url: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    kind: "learn"
  - title: "View and edit in Excel from Business Central"
    url: "https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel"
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
  - title: "Whether Copilot may process workbooks carrying chosen sensitivity labels (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    kind: "learn"
videos: []
related: ["m365-copilot-local-file-support-for-agent-mode-in-excel","m365-copilot-agent-mode-in-word-for-enhanced-document-editing","sensitivity-labels","m365-copilot-excel-agent"]
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
    note: "AI Administrator or Global Administrator. Applied at provider level across Microsoft Copilot and Copilot Studio experiences."
  - governs: "Whether Copilot may process workbooks carrying chosen sensitivity labels"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Loss Prevention > Policies > Create policy > Custom > Custom policy > Locations > Microsoft Copilot, Copilot Chat, and Copilot Cowork"
      docs: "https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about"
    api:
      kind: "powershell"
      call: "New-DLPComplianceRule -Name \"Copilot Rule\" -Policy \"Copilot Policy\" -AdvancedRule $advrule -RestrictAccess @(@{setting=\"ExcludeContentProcessing\";value=\"Block\"})"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps"
    note: "The rule uses Content contains > Sensitivity labels with Prevent Copilot and Cowork from processing content. Covers Copilot in Word, Excel and PowerPoint; evaluated at file open."
  - governs: "Setting that turns Edit with Copilot in Excel on or off on its own"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting specific to this feature is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-02-13T23:15:55"
changes:
  - date: "2026-11-26"
    note: "New briefing: Agent Mode in Excel on the web is launched as Edit with Copilot; covers the Microsoft 365 Copilot licence, Claude model access and DLP for labelled workbooks."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 57 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 56
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "211a9bf8cde71a46c23cdbe369030f49"
---

## What's changing

Copilot in Excel can now build and change a workbook for the user: the user describes a task in the Copilot pane and Copilot carries it out, using tables, charts, PivotTables and formulas. The roadmap item calls this Agent Mode and lists it for Excel on the web.

Microsoft now calls the capability **Edit with Copilot**. The Microsoft 365 Copilot release notes for March 10, 2026 list "Edit with Copilot in Excel to enhance your productivity (formerly Agent Mode)" for Windows, Web and Mac, against roadmap IDs 542182 and 527835. They describe it as a new option in Copilot in Excel for editing the workbook through chat. Users open Copilot chat in Excel and see a "Let's edit together" welcome message; if it does not appear, they select **Edit with Copilot** from the tools menu. A Microsoft Learn page for Business Central adds that the workbook-editing capabilities previously called Agent Mode are now part of the regular Copilot in Excel experience, where Copilot can edit directly in edit mode, propose a plan first in plan mode, or answer questions in chat mode.

Microsoft's Anthropic page says that in capabilities such as Edit with Copilot in Microsoft 365 apps, users can select **Claude**.

The roadmap record lists the item as Launched, General Availability, targeted for December CY2025, on Web, in the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

Licensed users already have this: Microsoft presents it as an option inside Copilot in Excel, with no admin step in the release notes. The change is that Copilot now writes into the workbook rather than only suggesting. Expect more Copilot-authored formulas, PivotTables and models in budgets and reports, and plan for owners to check them before results are relied on.

The decisions that matter are who holds the licence, whether Claude models may process workbook content, and whether labelled workbooks should be kept away from Copilot. For EU, EFTA and UK tenants, Microsoft says important changes to the Anthropic setting take effect on December 9, 2026, so that setting needs a look now.

## Risk assessment

**Data exposure**
- Copilot works on the workbook the user has open. A Purview DLP policy on the **Microsoft Copilot, Copilot Chat, and Copilot Cowork** location can stop Copilot processing files with chosen sensitivity labels; Microsoft says that when such a file is open in Excel, the Copilot skills in the app are disabled (controls table). The policy is evaluated at file open, so a label applied mid-session takes effect the next time the file is opened.
- Where a user picks a Claude model, Microsoft states that Claude models in Copilot in Microsoft 365 apps are currently excluded from the EU Data Boundary and, where applicable, in-country processing commitments. Who may use Anthropic models is set in the Microsoft 365 admin center (controls table).

**Security & identity**
- No change to sign-in or permissions is documented for this item. Changing the Anthropic setting needs the AI Administrator or Global Administrator role.

**Autonomy & actions**
- Copilot makes multi-step changes to the workbook on the user's request. Plan for the workbook owner to review those changes before results are relied on.

**Change & support**
- Expect questions about why some users see Edit with Copilot and others do not: the Microsoft 365 Copilot licence decides that.
- EU, EFTA and UK tenants face a Microsoft-set change to the Anthropic setting on December 9, 2026.

## Cost and licensing

- **Licence.** The Microsoft Copilot service description lists **Edit with Copilot in Word, Excel, PowerPoint, and OneNote** with footnote 2, Microsoft 365 Copilot (Premium) features: "A Microsoft 365 Copilot license is required to access this feature." The same page describes Microsoft 365 Copilot as an add-on plan with specific licensing prerequisites.
- **Meter.** The service description publishes no separate charge or meter for Edit with Copilot at the time of writing (November 2026).
- **Indirect costs.** The service description's footnote for Microsoft Purview controls for Copilot says they require a licence for Microsoft Purview. Add admin time to review the Anthropic setting and DLP coverage, and owners' time to check Copilot's edits.

## Scope

- **Users:** holders of a Microsoft 365 Copilot licence, per the service description.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant). The service description shows Edit with Copilot as not currently available in GCC, GCCH and DoD, and notes that Copilot's ability to analyse structured Excel data is affected there until Edit with Copilot in Excel is released.
- **Platforms:** the record lists Web; the release notes list Windows, Web and Mac for Edit with Copilot in Excel.
- **Claude models:** on by default for most commercial customers; disabled by default for customers within the EU Data Boundary and in the UK. Microsoft says Claude models are not available for federal GCC customers or in GCC High and DoD.
- **Admin roles:** AI Administrator or Global Administrator for the Anthropic setting.

## Governance guidance

### Before rollout
- Review which users hold Microsoft 365 Copilot licences in the Microsoft 365 admin center, since the licence decides who gets Edit with Copilot.
- Check the Anthropic setting under Copilot > Settings > View all > AI providers operating as Microsoft subprocessors, and decide which users or groups may use Claude models.
- Confirm, for EU, EFTA and UK tenants, what the December 9, 2026 change does to your Anthropic setting, using Microsoft's page on Claude models in Microsoft 365 apps.

### At rollout
- Create or extend a Purview DLP policy on the Microsoft Copilot, Copilot Chat, and Copilot Cowork location for sensitivity labels whose workbooks Copilot must not process.
- Tell Excel users that Copilot can now change workbooks directly and that they own the result.

### After rollout
- Ask owners of finance and reporting workbooks to review Copilot's edits before results are used.
- Recheck the Anthropic user scope after December 9, 2026 and after any Message center notice on Claude models.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence that Edit with Copilot in Excel requires</strong><br><small>User</small><br><small class="controls__note">The service description lists Edit with Copilot in Excel as a Microsoft 365 Copilot (Premium) feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users may use Anthropic (Claude) models, including in Edit with Copilot</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator. Applied at provider level across Microsoft Copilot and Copilot Studio experiences.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › AI providers operating as Microsoft subprocessors › Available subprocessors for your organization › Anthropic › Choose who can access Anthropic models for Copilot and generative AI experiences <a href="https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor#opt-in-to-use-claude-models" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Copilot may process workbooks carrying chosen sensitivity labels</strong><br><small>Tenant</small><br><small class="controls__note">The rule uses Content contains &gt; Sensitivity labels with Prevent Copilot and Cowork from processing content. Covers Copilot in Word, Excel and PowerPoint; evaluated at file open.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Loss Prevention › Policies › Create policy › Custom › Custom policy › Locations › Microsoft Copilot, Copilot Chat, and Copilot Cowork <a href="https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DLPComplianceRule -Name &quot;Copilot Rule&quot; -Policy &quot;Copilot Policy&quot; -AdvancedRule $advrule -RestrictAccess @(@{setting=&quot;ExcludeContentProcessing&quot;;value=&quot;Block&quot;})</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-dlpcompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Setting that turns Edit with Copilot in Excel on or off on its own</strong><br><small>Tenant</small><br><small class="controls__note">No setting specific to this feature is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- Microsoft Learn documents no setting that turns Edit with Copilot in Excel on or off on its own at the time of writing (November 2026). Today the licence is the availability control.
- The Anthropic setting applies at provider level: Microsoft says the assignments are enforced across Microsoft Copilot and Copilot Studio experiences, so narrowing it for Excel narrows it everywhere. It needs the AI Administrator or Global Administrator role.
- The DLP location applies to Microsoft 365 Copilot, Copilot Chat, Cowork and Copilot in Word, Excel and PowerPoint, not only to this feature. See [/concepts/sensitivity-labels/](/concepts/sensitivity-labels/).

## Open questions

- Will Microsoft add a tenant or group setting for Edit with Copilot separate from the Copilot licence? Watch the Microsoft 365 Copilot release notes and Message center.
- Does the Cloud Policy setting **Block Copilot Access to Open Content**, listed in the Graph copilotPolicySetting reference, stop Edit with Copilot from working on an open workbook?
- Which audit events record the changes Edit with Copilot makes to a workbook, as distinct from the user's own edits?
- When will Edit with Copilot in Excel reach GCC, GCC High and DoD? Watch the Copilot service description.

<!-- rationale
risk: Medium. Copilot makes multi-step changes inside workbooks users can already open, and users can choose Claude models, which Microsoft excludes from the EU Data Boundary; existing licence, Anthropic and DLP controls cover this but need checking.
cost: Medium. Microsoft's Copilot service description lists Edit with Copilot as a Microsoft 365 Copilot (Premium) feature that requires a Microsoft 365 Copilot licence, an add-on plan.
impact: Medium. Licensed Excel users, typically finance and analyst roles, see a new way of working in the Copilot pane; unlicensed users are not in scope.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters / behaviour: Before this change, Copilot only suggested changes rather than writing into the workbook. | Found: Copilot can now analyze text by identifying themes and sentiments, citing data examples, and inserting a column with labels | Fix: Replace 'The change is that Copilot now writes into the workbook rather than only suggesting.' with 'Edit with Copilot lets users request multi-step workbook updates through chat.' The March 10, 2026 release notes at https://learn.microsoft.com/microsoft-365/copilot/release-notes support this narrower description. | Source: https://learn.microsoft.com/microsoft-365/copilot/previous-year-release-notes#july-22,-2025
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Claude models / default: Claude models are disabled by default for customers within the EU Data Boundary and in the UK. | Found: Customers within the EU Data Boundary and customers in the UK have Claude models disabled by default. | Fix: Add after this sentence: 'However, Microsoft's regional apps-only guidance says that setting is enabled by default for EU, EFTA and UK tenants created after March 25, 2026.' Cite https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps, which states this exception; retain the general page's statement as attributed guidance. | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor
- [supported, minor] controls[1].note; Governance controls / applicability: Anthropic access assignments operate at provider level across Microsoft Copilot and Copilot Studio, so narrowing access for Excel narrows it everywhere. | Found: These assignments are applied at the provider level and enforced across Microsoft Copilot and Copilot Studio experiences. | Fix: Replace 'so narrowing it for Excel narrows it everywhere' with 'although EU, EFTA and UK tenants currently also have an All users for Microsoft 365 apps only option, which Microsoft says will be removed on December 9, 2026'. Cite https://learn.microsoft.com/copilot/implement/copilot-anthropic-apps alongside the general provider guidance. | Source: https://learn.microsoft.com/copilot/implement/connect-to-ai-subprocessor
- [supported, minor] controls[2].ui; Governance controls table / admin-path: The printed Purview path reaches the Copilot DLP location used to exclude labelled workbooks. | Found: Go to Data Loss Prevention > Policies and select + Create policy. ... Select the Custom template, then Custom policy. ... On the Locations page, set the Microsoft Copilot, Copilot Chat, and Copilot Cowork location to on. | Fix: The path reaches the policy location but stops before the label-processing control. Append ' > rule > Content contains > Sensitivity labels > Prevent Copilot and Cowork from processing content' to controls[2].ui.path and its rendered table entry, using the condition and action documented at https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
- [supported, minor] Risk assessment: Data exposure / behaviour: Copilot skills are disabled when a workbook with a label excluded by DLP is open in Excel. | Found: When a file is open in Word, Excel, or PowerPoint and has a sensitivity label for which DLP policy is configured to prevent processing by Microsoft 365 Copilot and Copilot Chat, the skills in these apps are disabled. | Fix: Add Microsoft's qualification: 'Certain experiences that do not reference file content or do not use large language models are not currently blocked in the user experience.' The surrounding note at https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about states this exception. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
-->
