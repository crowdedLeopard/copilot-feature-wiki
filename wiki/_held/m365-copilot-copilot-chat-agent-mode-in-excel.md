---
title: "Excel: Copilot Agent Mode (Edit with Copilot) for Microsoft 365 users without a Copilot licence"
slug: "m365-copilot-copilot-chat-agent-mode-in-excel"
roadmapId: 543242
topic: "m365-copilot"
products: ["Excel","Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap says Copilot Agent Mode, which builds and edits Excel workbooks through chat, is launched for Microsoft 365 users without a Copilot licence. Microsoft's service description lists it as licence-only. Confirm who has it and how to switch it off."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "January CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "The roadmap item says Agent Mode in Excel is available to Microsoft 365 subscribers without a Microsoft 365 Copilot licence. Microsoft's Copilot service description marks Edit with Copilot in Word, Excel, PowerPoint and OneNote as a Premium feature that requires a Microsoft 365 Copilot licence."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["excel","copilot-chat","m365-copilot","unlicensed-users","licensing","microsoft-365-apps","admin-controls","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 543242"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=543242"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot - Service Descriptions"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Use policy settings to manage privacy controls for Microsoft 365 Apps for enterprise"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Get started with Word, Excel, and PowerPoint Agents in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/wordexcelppt-agents"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence the service description ties Edit with Copilot to (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft 365 Copilot licence the service description ties Edit with Copilot to (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-agent-mode-in-excel-for-desktop-apps","m365-copilot-local-file-support-for-agent-mode-in-excel","m365-copilot-excel-agent","m365-copilot-agent-mode-in-word-for-enhanced-document-editing","cloud-policy"]
controls:
  - governs: "Whether Copilot features, Agent Mode included, are available in Excel and other Office desktop apps"
    scope: "user"
    ui:
      surface: "Group Policy Management"
      path: "User Configuration > Policies > Administrative Templates > Microsoft Office 2016 > Privacy > Trust Center > Allow the use of connected experiences in Office that analyze content"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    api:
      kind: "other"
      call: "Registry value UserContentDisabled set to 2 (Disabled) under HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\office\\16.0\\common\\privacy"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    note: "Also settable through Cloud Policy. Turning it off removes Copilot from Excel, OneNote, Outlook, PowerPoint and Word, not Agent Mode alone. Unconfigured, these experiences stay available."
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
    note: "Governs Agent Mode only if the service description is right; the roadmap item says users without this licence get the feature."
  - governs: "Setting that turns Agent Mode (Edit with Copilot) in Excel on or off on its own"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting specific to this feature is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-02-12T00:15:53"
changes:
  - date: "2026-11-26"
    note: "New briefing: Agent Mode in Excel for users without a Copilot licence, with the conflicting licence statements and the connected-experiences off switch."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 53
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "7801fe6135a5ad42ba4a97ec6011f2e2"
---

## What's changing

Copilot in Excel gains Agent Mode, which Microsoft now calls Edit with Copilot: a user describes a task in the Copilot chat pane and Copilot builds or changes the open workbook in several steps. The roadmap item says it is releasing to Copilot in Excel for the web, Windows and Mac for Microsoft 365 subscribers without a Microsoft 365 Copilot licence, and that it uses Excel's tables, charts, PivotTables and formulas for work such as budgets, financial models and data analysis.

Microsoft's release notes (March 10, 2026) describe Edit with Copilot in Excel as a new option in Copilot in Excel that lets you edit your workbook through chat. Users see a "Let's edit together" welcome message in Copilot chat or, if it does not appear, select **Edit with Copilot** from the tools menu. Neither the roadmap item nor the release notes describe a step an administrator must take before users can use it. Later release notes (September 23, 2026) add links in Copilot's response to the cells and objects it changed, and Copilot attribution cards in Excel's **Show Changes** pane.

The sources disagree on who gets it. This roadmap item says users without a Microsoft 365 Copilot licence. Microsoft's Copilot service description lists "Edit with Copilot in Word, Excel, PowerPoint, and OneNote" as a Microsoft 365 Copilot (Premium) feature, for which a Microsoft 365 Copilot licence is required. The release notes entry for Edit with Copilot in Excel cites roadmap items 542182 and 527835, not this one.

The roadmap item's status is Launched, with a target of January CY2026, General Availability, for the Worldwide (Standard Multi-Tenant) cloud on desktop, Mac and web.

## Why it matters

If the roadmap item is right, Excel users without a Copilot licence can now have Copilot rewrite formulas, add sheets and build PivotTables in shared workbooks, whether or not the organisation bought Copilot for them. That moves AI-made edits into financial models and reports that many people rely on, and it arrives with no admin action. Microsoft documents no setting that turns Agent Mode in Excel off on its own; the documented switch for Copilot in Office apps on devices makes Copilot features unavailable in Excel, Word, PowerPoint, OneNote and Outlook together.

If the service description is right, users without a licence will not see Agent Mode, and the questions are support ones: why one colleague has it and another does not. Either way, plan on the assumption that users without a Copilot licence may have it, and confirm in your own tenant.

## Risk assessment

**Data exposure**
- Copilot works on the workbook the user has open. Microsoft's overview says users without the Copilot add-on can't use organisational data through Microsoft Graph when interacting with Copilot Chat; they provide content by uploading it or working with open content.
- Prompts and responses for users signed in with Microsoft Entra accounts are covered by Enterprise Data Protection, as for other Copilot Chat use. Microsoft's overview says EU traffic stays within the EU Data Boundary, while worldwide traffic can be sent to other regions for processing.

**Security & identity**
- No new sign-in, permission or connector is described for this feature. The release notes describe Copilot editing the user's own open workbook through chat.

**Autonomy & actions**
- Copilot carries out multi-step changes (tables, charts, PivotTables, formulas) in one request. An error in a budget or financial model can spread through dependent sheets before anyone checks it.
- Users can review the changes: Copilot's response links to the sheets, tables and ranges it changed, and Excel's **Show Changes** pane shows Copilot attribution cards. Neither is an admin control.

**Change & support**
- The roadmap and the service description disagree on whether users without a licence get Agent Mode, so expect questions about who has it. Users may also confuse it with the Excel Agent in the Copilot app, which Microsoft says requires a paid Microsoft 365 Copilot licence (see /features/m365-copilot-excel-agent/).
- The documented device-level off switch also removes Copilot from Word, PowerPoint, OneNote and Outlook and turns off other content-analysing features, so using it is a broad change.

## Cost and licensing

- **Licence.** The roadmap item says Agent Mode in Excel is available for Microsoft 365 subscribers without a Microsoft 365 Copilot licence. Microsoft's [Copilot service description](https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot) lists Edit with Copilot in Word, Excel, PowerPoint and OneNote as a Microsoft 365 Copilot (Premium) feature and says a Microsoft 365 Copilot licence is required. Microsoft 365 Copilot is an add-on plan with licensing prerequisites, according to the same page.
- **Limits.** Microsoft's [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) says some features for users without the add-on are subject to fair use limits. A limit specific to Agent Mode in Excel is not yet published.
- **Indirect costs.** Admin time to settle who has the feature, training for finance and analyst teams on checking Copilot's edits, and support calls while the licence position is unclear.
- **Not yet published.** Which of the two licence statements Microsoft will stand by for this feature.

## Scope

- **Users.** Per the roadmap item, Microsoft 365 subscribers without a Microsoft 365 Copilot licence. The service description lists Edit with Copilot for Microsoft 365 Copilot (Premium) users.
- **Platforms.** Excel for the web, Windows and Mac (record platforms: desktop, Mac, web).
- **Clouds.** The roadmap item lists Worldwide (Standard Multi-Tenant) only. The service description shows Edit with Copilot as not currently available in GCC, GCC High and DoD.
- **Admin role.** Microsoft's overview names the AI Administrator role as the least-privileged role for managing Copilot and AI features across Copilot Chat (Basic), Microsoft 365 Copilot (Basic) and Microsoft 365 Copilot (Premium).
- **Related items.** Agent Mode for licensed users on desktop is covered at /features/m365-copilot-agent-mode-in-excel-for-desktop-apps/, and editing workbooks stored on the device at /features/m365-copilot-local-file-support-for-agent-mode-in-excel/.

## Governance guidance

### Before rollout
- Open Excel with a test account that has no Microsoft 365 Copilot licence and check whether **Edit with Copilot** appears in the Copilot tools menu, to settle which licence statement applies in your tenant.
- Check which users hold a Microsoft 365 Copilot licence in the Microsoft 365 admin center, since the service description ties Edit with Copilot to that licence.
- Decide whether the policy **Allow the use of connected experiences in Office that analyze content** is an acceptable way to remove Copilot from Excel for any group, knowing it also removes Copilot from Word, PowerPoint, OneNote and Outlook on those devices.

### At rollout
- Tell Excel users where the option is (Copilot chat > tools menu > **Edit with Copilot**) and that Copilot edits the workbook they have open.
- Ask owners of shared financial models to have users try Agent Mode on a copy first and to check each change through **Review > Show Changes**.
- Brief the service desk that the roadmap and the service description disagree on whether users without a Copilot licence get Agent Mode.

### After rollout
- Review the Microsoft Copilot usage report, which covers Copilot in Excel, for adoption among users without a Copilot licence.
- Watch the Microsoft 365 Copilot release notes and the Copilot service description for a corrected licence statement, and update user guidance when it changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot features, Agent Mode included, are available in Excel and other Office desktop apps</strong><br><small>User</small><br><small class="controls__note">Also settable through Cloud Policy. Turning it off removes Copilot from Excel, OneNote, Outlook, PowerPoint and Word, not Agent Mode alone. Unconfigured, these experiences stay available.</small></td><td data-label="Admin UI"><strong>Group Policy Management</strong><br>User Configuration › Policies › Administrative Templates › Microsoft Office 2016 › Privacy › Trust Center › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value UserContentDisabled set to 2 (Disabled) under HKEY_CURRENT_USER\Software\Policies\Microsoft\office\16.0\common\privacy</code> <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence the service description ties Edit with Copilot to</strong><br><small>User</small><br><small class="controls__note">Governs Agent Mode only if the service description is right; the roadmap item says users without this licence get the feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Setting that turns Agent Mode (Edit with Copilot) in Excel on or off on its own</strong><br><small>Tenant</small><br><small class="controls__note">No setting specific to this feature is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- Microsoft Learn documents no setting that turns Agent Mode (Edit with Copilot) in Excel on or off on its own at the time of writing (November 2026). The connected-experiences policy is the documented admin route for Copilot in Excel on devices, and it is broad: Microsoft says that with it off, Copilot features aren't available in Excel, OneNote, Outlook, PowerPoint and Word, and it also turns off other content-analysing features such as PowerPoint Designer and Translator.
- Microsoft's Copilot privacy page states the connected-experiences effect for the most current apps on Windows, Mac, iOS and Android devices. The Group Policy path in the table is for Windows; Office for Mac and Office for the web have their own privacy-control pages.
- Blocking the Copilot app in Integrated Apps is described as blocking Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web; that page does not name Copilot in Excel.
- Removing a Microsoft 365 Copilot licence governs Agent Mode only if the service description is right that the feature needs that licence.

## Open questions

- Does Agent Mode (Edit with Copilot) in Excel reach users without a Microsoft 365 Copilot licence, as the roadmap item says, or only licensed users, as the Copilot service description says? Watch the service description and Message center.
- Will Microsoft add a tenant or group setting for Edit with Copilot in Excel separate from the connected-experiences policy? Watch the Microsoft 365 Copilot release notes.
- Do fair use limits apply to Agent Mode for users without a Copilot licence, and at what level? Watch the Copilot overview.
- Does the Microsoft Purview data loss prevention location for Microsoft Copilot and Copilot Chat stop Agent Mode from processing labelled workbooks for users without a Copilot licence?
- When will Edit with Copilot in Excel reach GCC, GCC High and DoD? Watch the Copilot service description.

<!-- rationale
risk: Medium. Copilot makes multi-step changes to the workbook a user has open, and the documented admin switch for Copilot in Excel on devices turns Copilot off across Excel, Word, PowerPoint, OneNote and Outlook, not Agent Mode alone.
cost: Low. The roadmap item places Agent Mode in Microsoft 365 subscriptions without a Microsoft 365 Copilot licence, so the known cost is support and communication; Microsoft's service description, however, lists Edit with Copilot as needing that licence.
impact: Medium. Excel users who open Copilot, typically finance and analyst roles, see a new way to have Copilot change their workbooks; users who never open the Copilot pane notice nothing.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters; rationale: impact / consistency: The default is rated on even though the briefing describes a capability users choose to invoke and says users who never open Copilot notice nothing. | Found: defaultState: "on"; impact: "users who never open the Copilot pane notice nothing". The standard defines user-opt-in as "available, but each user or maker chooses to turn it on or to use it". | Fix: Set defaultState to user-opt-in. Replace 'it arrives with no admin action' in Why it matters with 'users initiate workbook edits by submitting a request to Copilot'. https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel says editing follows a submitted prompt; its default edit mode does not mean unattended workbook changes.
- [contradicted, blocker] Open questions: Microsoft Purview DLP / absence: Whether the Microsoft Copilot and Copilot Chat DLP location prevents processing labelled workbooks in this Excel experience remains undocumented. | Found: When a file is open in Word, Excel, or PowerPoint and has a sensitivity label for which DLP policy is configured to prevent processing by Microsoft 365 Copilot and Copilot Chat, the skills in these apps are disabled. | Fix: Remove this open question, or replace it with: 'Microsoft documents that Copilot DLP can prevent processing sensitivity-labelled files open in Excel. The policy is evaluated at file open; a label applied mid-session is enforced when the file is next opened.' Cite https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about. The Excel FAQ identifies this experience as a Copilot Chat tool; do not retain an unlicensed-user applicability gap. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Why it matters; Risk assessment: Data exposure; rationale: impact / behaviour: Copilot directly edits the user's open workbook based on their requests. | Found: In editing mode, Copilot in Excel edits your workbook directly based on your requests. | Fix: Cite https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel for direct workbook editing based on user requests. | Source: https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel
- [supported, minor] What's changing; Governance guidance: Before rollout and At rollout / admin-path: Users can select Edit with Copilot from the tools menu in Copilot chat in Excel. | Found: If you don't see the message, then go to the tools menu and select "Edit with Copilot". | Fix: Keep the historical March entry attributed, but replace the current user instructions with: 'Select the Copilot icon in the lower-right corner of Excel. Copilot opens in edit mode by default.' Cite https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel, which now describes edit, plan and chat modes rather than the older tools-menu entry. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes
- [supported, minor] summary; licensing.notes; What's changing; Cost and licensing; Scope; controls[1].note / licensing: The service description lists Edit with Copilot as a Premium feature requiring a Microsoft 365 Copilot licence. | Found: Edit with Copilot in Word, Excel, PowerPoint, and OneNote [footnote 2]. Microsoft 365 Copilot (Premium) features: A Microsoft 365 Copilot license is required to access this feature. | Fix: Retain the service-description attribution and add: 'The Copilot in Excel FAQ also lists a Copilot Chat-eligible Microsoft 365 or Office 365 business or enterprise subscription and says Basic users without the add-on have standard access.' Cite https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel. This is another Microsoft statement supporting the roadmap, not just a tenant-testing uncertainty. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
- [supported, minor] front matter: licensing.model / licensing: The feature is included for subscribers without the Copilot add-on, with the conflicting service-description requirement noted. | Found: M365 Copilot (Basic) indicates that a user does not have the Microsoft Copilot add-on license but does have standard access to Copilot in Excel. | Fix: Keep licensing.model as included and add the FAQ's eligible entitlement to licensing.notes: 'The Excel FAQ lists a Copilot Chat-eligible Microsoft 365 or Office 365 business or enterprise subscription for standard access without the add-on.' Cite https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel and retain the attributed service-description conflict. | Source: https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel
- [supported, minor] controls[2]; Why it matters; Governance controls; Open questions / absence: No tenant UI or API setting is documented that independently turns Agent Mode in Excel on or off. | Found: Searched: 'Edit with Copilot Excel policy', 'Excel Agent Mode disable Graph', 'Edit with Copilot Excel Microsoft Graph settings'. Read overview, Manage Copilot Chat and Excel FAQ; FAQ says Copilot in Excel can't be turned off independently. | Fix: Keep both null sides. Replace the row note with: 'The Excel FAQ says Copilot in Excel is a Microsoft Copilot Chat tool, cannot be turned off independently, and all admin settings controlling Copilot Chat access apply.' Cite https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel.
- [supported, minor] Cost and licensing; Open questions / absence: A specific fair use limit for Agent Mode in Excel has not been published. | Found: Searched: 'Edit with Copilot Excel limits', 'Excel Copilot Agent Mode admin disable policy fair use limits'. Read overview, Excel FAQ and Limits for features in Microsoft Copilot Chat; the limits page says Microsoft does not publish specific numeric limits. | Fix: Narrow the sentence to 'A numeric fair use limit specific to Agent Mode in Excel is not published' and cite https://support.microsoft.com/microsoft-365-copilot/limits-for-features-copilot-chat, which says service limits vary and Microsoft does not publish or share specific numeric limits.
- [supported, minor] Governance guidance: After rollout / applicability: The Microsoft Copilot usage report covers Excel adoption, including the Basic in-app experience without the add-on. | Found: the Microsoft Copilot usage report focuses on usage of Microsoft Copilot within Microsoft 365 apps such as Teams, Outlook, Word, Excel, and PowerPoint (requires Microsoft 365 (Basic) or Microsoft 365 Copilot (Premium) licenses). | Fix: Replace the bullet with: 'Review the Microsoft Copilot usage report for Excel adoption, but confirm whether your Basic users appear: the overview includes Basic, while the report reference describes its user-level table as users licensed for Microsoft Copilot during the past 180 days.' Cite https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage alongside the overview. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
- [supported, minor] Cost and licensing: Not yet published; Open questions / absence: Microsoft's published statements have not resolved the conflicting licence descriptions. | Found: Searched: 'Edit with Copilot Excel limits', 'Edit with Copilot Excel policy'. Read service description and Excel FAQ: service description requires Premium; FAQ explicitly grants Basic standard access without the add-on. The conflict remains. | Fix: Replace 'Which of the two licence statements Microsoft will stand by for this feature' with 'The service description still conflicts with both the roadmap and the Excel FAQ, which documents Basic standard access without the add-on.' Cite https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel and keep the unresolved question limited to that documentation conflict.
- [supported, minor] Governance controls / applicability: Manage Copilot Chat describes Integrated Apps blocking for the Copilot app, Teams, Outlook and web, without naming Excel in that passage. | Found: This setting blocks Copilot in the Microsoft Copilot app, Teams, Outlook, and Copilot Chat on the web for all users. | Fix: Add to this bullet: 'However, the Excel FAQ says Copilot in Excel is a Copilot Chat tool and all admin settings controlling Copilot Chat access apply.' Cite https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel. Do not use omission of Excel from the older blocking passage to imply the control cannot govern Excel. | Source: https://learn.microsoft.com/copilot/manage/manage-copilot-chat
- [contradicted, minor] Governance guidance: At rollout and After rollout; Governance controls / consistency: The checklist tells readers to check Show Changes and the Microsoft Copilot usage report, but neither has a control row. | Found: 'check each change through Review > Show Changes'; 'Review the Microsoft Copilot usage report'. The table contains only connected-experiences policy, licence assignment and the absent independent switch. | Fix: The Show Changes review step and Microsoft Copilot usage-report review step have no corresponding table rows. For a correction that does not add rows, remove these two checklist bullets; their independently verified factual descriptions may remain elsewhere.
- [supported, minor] Why it matters / behaviour: Copilot in Excel can add worksheets. | Found: Edit worksheets: Add, rename, and delete worksheets | Fix: Cite https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel for the statement that Copilot can add sheets. | Source: https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel
- [supported, minor] Why it matters / behaviour: Copilot's edits can affect shared workbooks seen by collaborators. | Found: When you save Copilot changes to your workbook, anyone with access to the file can see those changes, including people in a coauthoring session. | Fix: Cite https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel for the shared-workbook premise. | Source: https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel
-->
