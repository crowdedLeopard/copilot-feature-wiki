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
defaultState: "user-opt-in"
action: "act-now"
licensing:
  model: "included"
  notes: "The roadmap item says Agent Mode in Excel is available without a Microsoft 365 Copilot licence, and the Excel FAQ lists a Copilot Chat-eligible Microsoft 365 or Office 365 business or enterprise subscription for standard access without the add-on. The Copilot service description marks Edit with Copilot as a Premium feature that requires a Microsoft 365 Copilot licence."
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
  - title: "Frequently asked questions about Copilot in Excel"
    url: "https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel"
    kind: "docs"
  - title: "Get started with Copilot in Excel"
    url: "https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel"
    kind: "docs"
  - title: "Limits for features in Microsoft Copilot Chat"
    url: "https://support.microsoft.com/microsoft-365-copilot/limits-for-features-copilot-chat"
    kind: "docs"
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
    note: "The Excel FAQ says Copilot in Excel is a Microsoft Copilot Chat tool, can't be turned off independently, and all admin settings for controlling access to Copilot Chat apply."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-02-12T00:15:53"
changes:
  - date: "2026-11-26"
    note: "New briefing: Agent Mode in Excel for users without a Copilot licence, with the conflicting licence statements and the connected-experiences off switch."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected the default state to user-opt-in, removed the Purview DLP open question, added the Copilot in Excel FAQ's licence and admin-access statements, and updated how users open Copilot in Excel."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "82a33f1f003e8f3709aa5564e1481206"
---

## What's changing

Copilot in Excel gains Agent Mode, which Microsoft now calls Edit with Copilot: a user describes a task in the Copilot chat pane and Copilot builds or changes the open workbook in several steps. The roadmap item says it is releasing to Copilot in Excel for the web, Windows and Mac for Microsoft 365 subscribers without a Microsoft 365 Copilot licence, and that it uses Excel's tables, charts, PivotTables and formulas for work such as budgets, financial models and data analysis.

Microsoft's release notes (March 10, 2026) describe Edit with Copilot in Excel as a new option in Copilot in Excel that lets you edit your workbook through chat. At that release, users saw a "Let's edit together" welcome message in Copilot chat or, if it did not appear, selected **Edit with Copilot** from the tools menu. Microsoft's current guide, [Get started with Copilot in Excel](https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel), says to select the Copilot icon in the lower-right corner of Excel, and that Copilot in Excel opens in edit mode by default. Neither the roadmap item nor the release notes describe a step an administrator must take before users can use it. Later release notes (September 23, 2026) add links in Copilot's response to the cells and objects it changed, and Copilot attribution cards in Excel's **Show Changes** pane.

The sources disagree on who gets it. This roadmap item says users without a Microsoft 365 Copilot licence. Microsoft's Copilot service description lists "Edit with Copilot in Word, Excel, PowerPoint, and OneNote" as a Microsoft 365 Copilot (Premium) feature, for which a Microsoft 365 Copilot licence is required. The [Copilot in Excel FAQ](https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel) also lists a Copilot Chat-eligible Microsoft 365 or Office 365 business or enterprise subscription and says Basic users without the add-on have standard access. The release notes entry for Edit with Copilot in Excel cites roadmap items 542182 and 527835, not this one.

The roadmap item's status is Launched, with a target of January CY2026, General Availability, for the Worldwide (Standard Multi-Tenant) cloud on desktop, Mac and web.

## Why it matters

If the roadmap item is right, Excel users without a Copilot licence can now have Copilot rewrite formulas, add sheets and build PivotTables in shared workbooks, whether or not the organisation bought Copilot for them. That moves AI-made edits into financial models and reports that many people rely on, and users initiate workbook edits by submitting a request to Copilot. Microsoft documents no setting that turns Agent Mode in Excel off on its own; the documented switch for Copilot in Office apps on devices makes Copilot features unavailable in Excel, Word, PowerPoint, OneNote and Outlook together.

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

- **Licence.** The roadmap item says Agent Mode in Excel is available for Microsoft 365 subscribers without a Microsoft 365 Copilot licence. Microsoft's [Copilot service description](https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot) lists Edit with Copilot in Word, Excel, PowerPoint and OneNote as a Microsoft 365 Copilot (Premium) feature and says a Microsoft 365 Copilot licence is required. Microsoft 365 Copilot is an add-on plan with licensing prerequisites, according to the same page. The [Copilot in Excel FAQ](https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel) also lists a Copilot Chat-eligible Microsoft 365 or Office 365 business or enterprise subscription and says Basic users without the add-on have standard access.
- **Limits.** Microsoft's [Copilot overview](https://learn.microsoft.com/copilot/plan/copilot-overview) says some features for users without the add-on are subject to fair use limits. A numeric fair use limit specific to Agent Mode in Excel is not published; Microsoft's [limits page](https://support.microsoft.com/microsoft-365-copilot/limits-for-features-copilot-chat) says that because service limits can vary, Microsoft does not publish or share specific numeric limits.
- **Indirect costs.** Admin time to settle who has the feature, training for finance and analyst teams on checking Copilot's edits, and support calls while the licence position is unclear.
- **Not yet published.** The service description still conflicts with both the roadmap and the Excel FAQ, which documents Basic standard access without the add-on.

## Scope

- **Users.** Per the roadmap item, Microsoft 365 subscribers without a Microsoft 365 Copilot licence. The service description lists Edit with Copilot for Microsoft 365 Copilot (Premium) users.
- **Platforms.** Excel for the web, Windows and Mac (record platforms: desktop, Mac, web).
- **Clouds.** The roadmap item lists Worldwide (Standard Multi-Tenant) only. The service description shows Edit with Copilot as not currently available in GCC, GCC High and DoD.
- **Admin role.** Microsoft's overview names the AI Administrator role as the least-privileged role for managing Copilot and AI features across Copilot Chat (Basic), Microsoft 365 Copilot (Basic) and Microsoft 365 Copilot (Premium).
- **Related items.** Agent Mode for licensed users on desktop is covered at /features/m365-copilot-agent-mode-in-excel-for-desktop-apps/, and editing workbooks stored on the device at /features/m365-copilot-local-file-support-for-agent-mode-in-excel/.

## Governance guidance

### Before rollout
- Open Excel with a test account that has no Microsoft 365 Copilot licence, select the Copilot icon in the lower-right corner of Excel and check whether Copilot opens in edit mode, to settle which licence statement applies in your tenant.
- Check which users hold a Microsoft 365 Copilot licence in the Microsoft 365 admin center, since the service description ties Edit with Copilot to that licence.
- Decide whether the policy **Allow the use of connected experiences in Office that analyze content** is an acceptable way to remove Copilot from Excel for any group, knowing it also removes Copilot from Word, PowerPoint, OneNote and Outlook on those devices.

### At rollout
- Tell Excel users to select the Copilot icon in the lower-right corner of Excel, that Copilot opens in edit mode by default, and that Copilot edits the workbook they have open.
- Ask owners of shared financial models to have users try Agent Mode on a copy first.
- Brief the service desk that the roadmap and the service description disagree on whether users without a Copilot licence get Agent Mode.

### After rollout
- Watch the Microsoft 365 Copilot release notes and the Copilot service description for a corrected licence statement, and update user guidance when it changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot features, Agent Mode included, are available in Excel and other Office desktop apps</strong><br><small>User</small><br><small class="controls__note">Also settable through Cloud Policy. Turning it off removes Copilot from Excel, OneNote, Outlook, PowerPoint and Word, not Agent Mode alone. Unconfigured, these experiences stay available.</small></td><td data-label="Admin UI"><strong>Group Policy Management</strong><br>User Configuration › Policies › Administrative Templates › Microsoft Office 2016 › Privacy › Trust Center › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value UserContentDisabled set to 2 (Disabled) under HKEY_CURRENT_USER\Software\Policies\Microsoft\office\16.0\common\privacy</code> <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft 365 Copilot licence the service description ties Edit with Copilot to</strong><br><small>User</small><br><small class="controls__note">Governs Agent Mode only if the service description is right; the roadmap item says users without this licence get the feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Setting that turns Agent Mode (Edit with Copilot) in Excel on or off on its own</strong><br><small>Tenant</small><br><small class="controls__note">The Excel FAQ says Copilot in Excel is a Microsoft Copilot Chat tool, can't be turned off independently, and all admin settings for controlling access to Copilot Chat apply.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- Microsoft Learn documents no setting that turns Agent Mode (Edit with Copilot) in Excel on or off on its own at the time of writing (November 2026). The connected-experiences policy is the documented admin route for Copilot in Excel on devices, and it is broad: Microsoft says that with it off, Copilot features aren't available in Excel, OneNote, Outlook, PowerPoint and Word, and it also turns off other content-analysing features such as PowerPoint Designer and Translator.
- Microsoft's Copilot privacy page states the connected-experiences effect for the most current apps on Windows, Mac, iOS and Android devices. The Group Policy path in the table is for Windows; Office for Mac and Office for the web have their own privacy-control pages.
- Blocking the Copilot app in Integrated Apps is described as blocking Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web; that page does not name Copilot in Excel. However, the [Copilot in Excel FAQ](https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel) says Copilot in Excel is a Microsoft Copilot Chat tool and all admin settings for controlling access to Microsoft Copilot Chat apply.
- Removing a Microsoft 365 Copilot licence governs Agent Mode only if the service description is right that the feature needs that licence.

## Open questions

- Does Agent Mode (Edit with Copilot) in Excel reach users without a Microsoft 365 Copilot licence, as the roadmap item says, or only licensed users, as the Copilot service description says? Watch the service description and Message center.
- Will Microsoft add a tenant or group setting for Edit with Copilot in Excel separate from the connected-experiences policy? Watch the Microsoft 365 Copilot release notes.
- Do fair use limits apply to Agent Mode for users without a Copilot licence? Watch the Copilot overview.
- When will Edit with Copilot in Excel reach GCC, GCC High and DoD? Watch the Copilot service description.

<!-- rationale
risk: Medium. Copilot makes multi-step changes to the workbook a user has open, and the documented admin switch for Copilot in Excel on devices turns Copilot off across Excel, Word, PowerPoint, OneNote and Outlook, not Agent Mode alone.
cost: Low. The roadmap item places Agent Mode in Microsoft 365 subscriptions without a Microsoft 365 Copilot licence, so the known cost is support and communication; Microsoft's service description, however, lists Edit with Copilot as needing that licence.
impact: Medium. Excel users who open Copilot, typically finance and analyst roles, see a new way to have Copilot change their workbooks; users who never open the Copilot pane notice nothing.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Microsoft's overview says EU traffic stays within the EU Data Boundary. | Found: EU traffic stays within the EU Data Boundary, while worldwide traffic can be sent to the EU and other countries or regions for LLM processing. | Fix: Retain the attribution to the overview, but add: 'Microsoft's privacy page qualifies this: models provided by Anthropic as a subprocessor are currently excluded from the EU Data Boundary.' Link https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy. The Excel FAQ confirms that Copilot in Excel supports Anthropic models. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
-->
