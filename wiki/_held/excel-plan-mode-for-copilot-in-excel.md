---
title: "Excel: Plan Mode lets Copilot outline a step-by-step plan before it changes a workbook"
slug: "excel-plan-mode-for-copilot-in-excel"
roadmapId: 560338
topic: "modern-work"
products: ["Excel"]
summary: "Copilot in Excel can propose a plan that users review and adjust before any edit is applied. Launched for Excel on Windows, Mac and the web. Nothing specific to configure; the existing Copilot in Excel controls apply."
status: "launched"
releasePhase: ["Current Channel","General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "The Copilot service description lists Copilot Chat in Excel for Microsoft 365 Copilot (Basic) and (Premium) users, and Edit with Copilot as needing a Microsoft 365 Copilot licence. It does not list Plan Mode, so the tier that includes it is not yet published."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["excel","m365-copilot","human-in-the-loop","user-confirmation","sensitivity-labels","auditing","microsoft-365-apps"]
sources:
  - title: "Microsoft 365 Roadmap 560338"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560338"
    kind: "roadmap"
  - title: "View and edit in Excel from Business Central"
    url: "https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel"
    kind: "learn"
  - title: "Microsoft Copilot"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Required configuration for Copilot guidance for Sensitive and Regulated customers"
    url: "https://learn.microsoft.com/compliance/anz/blueprint-copilot-reqconfig"
    kind: "learn"
  - title: "Audit logs for Copilot and AI applications"
    url: "https://learn.microsoft.com/purview/audit-copilot"
    kind: "learn"
  - title: "copilotPolicySetting resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/resources/copilotpolicysetting"
    kind: "learn"
  - title: "Whether Copilot features, Plan Mode included, are available in Excel and other Office apps (Group Policy Management)"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    kind: "learn"
  - title: "Whether workbooks with a given sensitivity label are excluded from Copilot in Office apps (PowerShell)"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    kind: "learn"
  - title: "Searching audit records of Copilot interactions, including those in Excel (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/copilot/manage/copilot-admin-reports"
    kind: "learn"
  - title: "Searching audit records of Copilot interactions, including those in Excel (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
videos: []
related: ["m365-copilot-agent-mode-in-excel-for-desktop-apps","m365-copilot-agent-mode-in-excel","m365-copilot-copilot-chat-agent-mode-in-excel","sensitivity-labels","auditing"]
controls:
  - governs: "Whether Copilot features, Plan Mode included, are available in Excel and other Office apps"
    scope: "user"
    ui:
      surface: "Group Policy Management"
      path: "User Configuration > Policies > Administrative Templates > Microsoft Office 2016 > Privacy > Trust Center > Allow the use of connected experiences in Office that analyze content"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    api:
      kind: "other"
      call: "Registry value UserContentDisabled set to 2 (Disabled) under HKEY_CURRENT_USER\\Software\\Policies\\Microsoft\\office\\16.0\\common\\privacy"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    note: "Existing control. Turning it off removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word. Also settable through Cloud Policy."
  - governs: "Whether workbooks with a given sensitivity label are excluded from Copilot in Office apps"
    scope: "other"
    ui: null
    api:
      kind: "powershell"
      call: "Set-Label -Identity <label GUID> -AdvancedSettings @{BlockContentAnalysisServices=\"True\"}"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    note: "Not available in the Microsoft Purview portal. Labelled content stays available to Copilot in other scenarios such as Teams and Copilot Chat."
  - governs: "Searching audit records of Copilot interactions, including those in Excel"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Audit > Search > Workloads > Copilot"
      docs: "https://learn.microsoft.com/copilot/manage/copilot-admin-reports"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <date> -EndDate <date> -Operations CopilotInteraction"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "Records carry an AppHost value such as Excel. Requires a role that can search audit logs, such as Audit Reader."
  - governs: "Tenant or group setting that turns Plan Mode on or off separately from Copilot in Excel"
    scope: "tenant"
    ui: null
    api: null
    note: "Today the only documented levers are the Copilot in Excel controls above."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-07T23:01:35"
changes:
  - date: "2026-11-28"
    note: "New briefing: Plan Mode in Copilot in Excel, with the existing Copilot in Excel controls and the unpublished licence tier."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 46 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 43
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "df2bd1e5da1fae40788df1c7da14e973"
---

## What's changing

Copilot in Excel gains a Plan Mode: before it changes a workbook, Copilot sets out the steps it intends to take, and the user reviews and adjusts that plan before anything is applied. The roadmap item states that users can see which data or capabilities the plan may use, and that the mode is meant for multi-step or high-impact tasks.

Microsoft Learn does not yet have a page for Plan Mode itself. Microsoft's Business Central guidance on [using Copilot in Excel](https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel) describes it as one of three modes: Copilot "can edit the workbook directly in edit mode, propose a plan first in plan mode, or answer questions in chat mode". The same page notes that the workbook-editing capabilities previously called Agent Mode are now part of the regular Copilot in Excel experience. Beyond that, what follows about Plan Mode's behaviour is the roadmap's description.

The roadmap item is **Launched**, with a target of May CY2026, in Current Channel and General Availability, for Desktop, Mac and Web, in the Worldwide (Standard Multi-Tenant) cloud.

## Why it matters

Plan Mode is a safeguard rather than a new exposure: it gives users a checkpoint before Copilot makes multi-step changes to a workbook, which matters most for financial models and for data exported from line-of-business systems. It does not replace edit mode, in which Copilot changes the workbook directly, so the benefit depends on users choosing to plan first.

Microsoft Learn documents no admin setting specific to Plan Mode at the time of writing (November 2026). What a service owner governs is Copilot in Excel as a whole: who has it, which workbooks it may analyse and how its use is audited. The work here is mainly adoption: tell people who edit high-impact workbooks with Copilot that the mode exists.

## Risk assessment

**Data exposure**
- The roadmap says the plan shows which data or capabilities Copilot may use; the mode is not described as reaching anything beyond Copilot in Excel. Workbooks carrying a sensitivity label with the BlockContentAnalysisServices setting are excluded from Microsoft 365 Copilot in the named Office apps, though Microsoft's page says that content remains available to Copilot in other scenarios such as Teams and Copilot Chat.

**Security & identity**
- No change specific to Plan Mode: the roadmap describes a review step inside Copilot in Excel, not a new connection, permission or identity.

**Autonomy & actions**
- Plan Mode reduces unreviewed edits by putting a plan in front of the user first. Edit mode remains available alongside it, so multi-step edits without a plan are still possible. For Business Central exports opened with Edit in Excel, Microsoft advises reviewing changes before choosing **Publish** in the Excel add-in; a plan approved in Excel is not that review.

**Change & support**
- Users will meet a third mode next to edit and chat, and earlier Agent Mode guidance now describes the regular Copilot in Excel experience. Expect questions about which mode to use and why Copilot proposes steps instead of acting.

## Cost and licensing

- **Licence:** the [Microsoft Copilot service description](https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot) lists Copilot Chat in Word, Excel, PowerPoint and OneNote as available to Microsoft 365 Copilot (Basic) and (Premium) users, and Edit with Copilot in those apps as a Premium feature for which "a Microsoft 365 Copilot license is required". Plan Mode is not listed, so which tier includes it is not yet published. Microsoft's Business Central guidance says availability of Copilot in Excel depends on the Microsoft 365 licence and the organisation's tenant configuration.
- **Meter:** none is documented for Plan Mode.
- **Indirect costs:** communication to Excel users and help desk time while the new mode beds in.

## Scope

- **Users:** Excel users who have Copilot in Excel; the licence tier for Plan Mode is not yet published (see Cost and licensing).
- **Platforms:** Desktop, Mac and Web, as the roadmap record lists them.
- **Release:** Current Channel, General Availability; status Launched.
- **Clouds:** Worldwide (Standard Multi-Tenant) only on the roadmap record. The service description lists Edit with Copilot in Excel as not currently available in GCC, GCC High and DoD.
- **Prerequisites:** Copilot features in Excel need connected experiences that analyse content to be allowed.

## Governance guidance

### Before rollout
- Decide whether any group should not have Copilot in Excel at all, and if so set **Allow the use of connected experiences in Office that analyze content** for them, knowing it removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word, not only Plan Mode.
- Apply the BlockContentAnalysisServices advanced setting to sensitivity labels whose workbooks must stay out of Copilot in Office apps, using Security & Compliance PowerShell.
- Brief the help desk and Excel champions that Plan Mode, edit mode and chat mode are three ways of using the same Copilot in Excel.

### At rollout
- Tell finance and reporting teams to use Plan Mode for multi-step changes to models and shared workbooks, and to read the data the plan says it will use before approving it.
- Remind Business Central users that changes made with Copilot in an Edit in Excel workbook still need review before **Publish** in the Excel add-in.

### After rollout
- Search the audit log for CopilotInteraction records with the AppHost Excel to see how Copilot in Excel is used, and check whether the records distinguish Plan Mode from edit mode.
- Watch the Microsoft 365 Copilot release notes and Message center for a licence statement or admin setting for Plan Mode.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot features, Plan Mode included, are available in Excel and other Office apps</strong><br><small>User</small><br><small class="controls__note">Existing control. Turning it off removes Copilot features from Excel, OneNote, Outlook, PowerPoint and Word. Also settable through Cloud Policy.</small></td><td data-label="Admin UI"><strong>Group Policy Management</strong><br>User Configuration › Policies › Administrative Templates › Microsoft Office 2016 › Privacy › Trust Center › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value UserContentDisabled set to 2 (Disabled) under HKEY_CURRENT_USER\Software\Policies\Microsoft\office\16.0\common\privacy</code> <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether workbooks with a given sensitivity label are excluded from Copilot in Office apps</strong><br><small class="controls__note">Not available in the Microsoft Purview portal. Labelled content stays available to Copilot in other scenarios such as Teams and Copilot Chat.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;label GUID&gt; -AdvancedSettings @{BlockContentAnalysisServices=&quot;True&quot;}</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-office-apps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Searching audit records of Copilot interactions, including those in Excel</strong><br><small>Tenant</small><br><small class="controls__note">Records carry an AppHost value such as Excel. Requires a role that can search audit logs, such as Audit Reader.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Audit › Search › Workloads › Copilot <a href="https://learn.microsoft.com/copilot/manage/copilot-admin-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;date&gt; -EndDate &lt;date&gt; -Operations CopilotInteraction</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant or group setting that turns Plan Mode on or off separately from Copilot in Excel</strong><br><small>Tenant</small><br><small class="controls__note">Today the only documented levers are the Copilot in Excel controls above.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns Plan Mode on or off separately from Copilot in Excel at the time of writing (November 2026); the Microsoft Graph Copilot policy settings API accepts a fixed list of setting identifiers, none of them for Excel or Plan Mode. The connected experiences policy works on whole apps: Microsoft's privacy page says it applies to the most current apps on Windows, Mac, iOS and Android, and Microsoft's regulated-customer guidance says the web experiences and modern apps are controlled exclusively by Cloud Policy, with Group Policy taking precedence for Win32 apps where both are used. The sensitivity label setting is not available in the Microsoft Purview portal and is set only through PowerShell. Audit searches need a role such as Audit Reader.

## Open questions

- Which Copilot licence tier includes Plan Mode: is it available to Microsoft 365 Copilot (Basic) users, or only with a Microsoft 365 Copilot licence like Edit with Copilot? Watch the Copilot service description.
- Do CopilotInteraction audit records show that a session used Plan Mode, and record the plan the user approved? Watch the Purview audit documentation for Copilot.
- Will Microsoft add an admin setting for Plan Mode, or a way to make planning the default for edits in Excel? Watch Message center and the Copilot policy settings reference.
- When will Plan Mode reach GCC, GCC High and DoD, given Edit with Copilot in Excel is not yet available there? Watch the roadmap and the service description.

<!-- rationale
risk: Low. Plan Mode adds a review step before Copilot edits a workbook and reaches no new data; the existing Copilot in Excel controls (connected experiences policy, sensitivity labels) still decide what Copilot can work on.
cost: Low. The only cost the sources show is communication and support time; which Copilot licence tier includes Plan Mode is not yet published.
impact: Low. Noticed by Copilot in Excel users who choose to have Copilot plan a task before it edits; administrators have no Plan Mode setting to change.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing; Scope; Open questions; rationale: cost / licensing: Plan Mode's licensing model and the tier that includes it are not yet published. | Found: M365 Copilot (Premium) indicates that a user has a Microsoft Copilot add-on license, including priority access for Copilot in Excel. ... M365 Copilot (Basic) indicates that a user does not have the Microsoft Copilot add-on license but does have standard access to Copilot in Excel. | Fix: Set licensing.model to included. Replace the unpublished-tier statements with: 'Plan mode is one of the Copilot in Excel modes. For work accounts, Microsoft's Excel FAQ lists a commercial Microsoft Copilot subscription or a Copilot Chat-eligible Microsoft 365 or Office 365 business or enterprise subscription; Basic users have standard access and Premium users have priority access.' Cite https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel and https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel. The first page describes plan mode and directs its licensing section to that FAQ. Remove the first Open questions bullet and the unpublished-tier clause from the cost rationale. | Source: https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel
- [contradicted, blocker] controls[3].note; Governance controls table / absence: The controls listed above are the only documented levers governing Copilot in Excel. | Found: Copilot in Excel is a Microsoft Copilot Chat tool and can't be turned off independently. All admin settings for controlling access to Microsoft Copilot Chat apply. | Fix: Replace controls[3].note and its rendered table note with: 'No separate Plan Mode switch is documented. Microsoft describes Copilot in Excel as a Copilot Chat tool and says all admin settings controlling access to Copilot Chat apply.' Cite https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel. Do not describe the existing table as an exhaustive list of controls. | Source: https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: defaultState; summary; Why it matters; rationale: impact / default: Plan Mode is a user-selected capability rather than the default editing mode. | Found: By default, Copilot in Excel opens in edit mode. In editing mode, Copilot in Excel can edit your workbook directly based on your requests. Use plan mode to come up with a plan before editing your workbook | Fix: Keep defaultState user-opt-in and cite https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel in sources. That page also directly supports the summary's Windows, Mac and web availability. | Source: https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: The service description marks Edit with Copilot in these Office apps as a Premium feature requiring a Microsoft 365 Copilot licence. | Found: Edit with Copilot in Word, Excel, PowerPoint, and OneNote ... Microsoft 365 Copilot (Premium) features: A Microsoft 365 Copilot license is required to access this feature. | Fix: After the service-description statement add: 'Microsoft's Excel FAQ separately describes Basic users as having standard access to Copilot in Excel and Premium users as having priority access; its getting-started page describes edit, plan and chat modes together and points to that FAQ for licensing.' Cite https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel and https://support.microsoft.com/en-us/excel/copilot/get-started-with-copilot-in-excel rather than silently resolving the differing descriptions. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
- [unsupported, minor] rationale: risk / behaviour: Plan Mode reaches no new data. | Found: Searched: Copilot Excel plan mode data access no new permissions. Read roadmap, Business Central Excel guidance, Excel FAQ, getting-started page and Copilot privacy guidance. These describe planning and existing access boundaries, not a no-new-data guarantee for Plan Mode. | Fix: Replace 'Plan Mode adds a review step before Copilot edits a workbook and reaches no new data' with 'Plan Mode adds a review step before Copilot edits a workbook'. Keep the risk rating as an editorial judgement rather than asserting an undocumented data-access guarantee.
-->
