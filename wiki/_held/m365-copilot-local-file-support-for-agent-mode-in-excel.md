---
title: "Excel: Copilot Agent Mode editing for workbooks stored on the device"
slug: "m365-copilot-local-file-support-for-agent-mode-in-excel"
roadmapId: 557564
topic: "m365-copilot"
products: ["Excel","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to extend Copilot's multi-step workbook editing in Excel (Agent Mode) to files stored on the device, not only in the cloud. No admin action is documented, and no Learn page covers local files yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac"]
targetDate: "March CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Microsoft describes Microsoft 365 Copilot as an add-on plan with licensing prerequisites. Which licence tier covers local file support, and whether any meter applies, is not yet published."
audiences: ["m365-admin","service-owner","security","change-adoption"]
tags: ["excel","m365-copilot","microsoft-365-apps","macos","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 557564"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557564"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "View and edit in Excel from Business Central"
    url: "https://learn.microsoft.com/dynamics365/business-central/across-work-with-excel"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "Microsoft Copilot"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview"
    kind: "learn"
  - title: "Use policy settings to manage privacy controls for Microsoft 365 Apps for enterprise"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    kind: "learn"
  - title: "Use preferences to manage privacy controls for Office for Mac"
    url: "https://learn.microsoft.com/microsoft-365-apps/privacy/mac-privacy-preferences"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-excel-agent","cloud-policy"]
controls:
  - governs: "Whether Copilot features are available in Excel (connected experiences that analyse content)"
    scope: "user"
    ui:
      surface: "Group Policy Management"
      path: "User Configuration > Policies > Administrative Templates > Microsoft Office 2016 > Privacy > Trust Center > Allow the use of connected experiences in Office that analyze content"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    api:
      kind: "other"
      call: "Registry value UserContentDisabled set to 2 (Disabled)"
      docs: "https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls"
    note: "Existing control, not specific to local files. Turning it off makes Copilot features unavailable in Excel. Also settable through Cloud Policy; Mac uses a preference."
  - governs: "Which users hold the Microsoft Copilot licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "At least License Administrator or User Administrator. Which licence tier covers local file support is not yet published."
  - governs: "Switch for local file support in Agent Mode in Excel"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting specific to this feature is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-02-20T00:00:24"
changes:
  - date: "2026-11-22"
    note: "New briefing: roadmap item 557564 is still In development; Learn does not yet document local file support, and Microsoft's pages now call Agent Mode Edit with Copilot."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 49
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "ce8c177495ee5517ecf6abad4a46a321"
---

## What's changing

The roadmap item states that Microsoft is extending support for modern Excel workbooks stored on the user's device to Agent Mode in Excel, so that multi-step editing with Copilot in Excel works whether files are stored locally or in the cloud. The record lists the status as In development, a target of March CY2026, release phase General Availability, platforms Desktop and Mac, and the Worldwide (Standard Multi-Tenant) cloud. The record was created and last modified on 20 February 2026, and the target month has passed without a status change.

Microsoft Learn does not describe local file support for Agent Mode yet, so what follows about behaviour is the roadmap's description. Microsoft's Copilot release notes for 10 March 2026 list "Edit with Copilot in Excel to enhance your productivity (formerly Agent Mode)" for Windows, Web and Mac, described as a way to build and change workbooks with tables, charts, PivotTables and formulas. A Business Central page also says the workbook-editing capabilities previously called Agent Mode are now part of the regular Copilot in Excel experience. This briefing treats Agent Mode and Edit with Copilot as the same capability on that basis; confirm it when Microsoft documents this item.

The roadmap does not say whether local workbooks need to be saved in a particular place, how the files reach Copilot, or whether users see any prompt the first time. Those points are listed under open questions.

## Why it matters

Local workbooks are where many users keep drafts and data extracts, so this change widens the set of files that Copilot's multi-step editing can reach. Microsoft has not stated what happens on arrival, and no source says existing behaviour changes. Expect users who already use Copilot in Excel to try it on local files, and plan communication and licensing around that rather than around a switch you can flip.

The existing controls decide the outcome. The privacy control for connected experiences that analyse content decides whether Copilot features appear in Excel at all, and the licence assignment decides who has Copilot. No control specific to local file support is documented.

## Risk assessment

**Data exposure**
- Copilot would work on workbooks stored on the device. Microsoft's privacy page says Copilot honours the usage rights of data encrypted by Microsoft Purview Information Protection, applied by sensitivity labels or by Information Rights Management. How that applies to a workbook on the device is not yet documented.
- The connected-experiences policy is the documented lever: if connected experiences that analyse your content are turned off on devices in your organisation, Microsoft says Copilot features are not available in Excel on Windows, Mac, iOS or Android.

**Security & identity**
- No change is documented for this item. Microsoft's requirements page lists a Microsoft Entra ID work or school account as required for Copilot.

**Autonomy & actions**
- The capability is multi-step editing: Copilot builds and changes workbooks using tables, charts, PivotTables and formulas. On local files the workbook on the device is the thing being changed, so users need to review the edits.
- Microsoft's September 2026 release notes say the Show Changes pane in Excel on Windows, Mac and Web now shows on-card attribution when Copilot made edits or suggestions, which helps a reviewer.

**Change & support**
- Microsoft's requirements page says the availability of a Copilot experience can depend on the app, licence and tenant configuration, so expect "why is Copilot missing on my file" questions to start with licence and policy checks.
- Dates are targets only: March CY2026 has passed and the status is still In development.

## Cost and licensing

Microsoft's service description page states that Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites. The requirements page says users need a Microsoft Copilot licence and a qualifying prerequisite licence. Microsoft also describes a Microsoft 365 Copilot (Basic) experience for users without the add-on licence, with Copilot capabilities inside apps such as Word or Excel, and says chat experiences in Word, Excel and PowerPoint vary with the user's licence and tenant configuration.

Which of those tiers includes local file support for Agent Mode is not yet published, and no rate or meter specific to this feature is published. The indirect costs are admin time to check licence assignment and policy, and user communication.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud, the Desktop and Mac platforms, and General Availability as the release phase. No other clouds are listed on the record.

Copilot in desktop apps needs Microsoft 365 Apps deployed to users, and Microsoft's requirements page says the Office Feature Updates task must run on its regular schedule and reach the required network resources for core Copilot experiences in Excel. Licences are assigned by at least a License Administrator or User Administrator. Whether local file support has its own version, channel or platform prerequisite is not stated.

## Governance guidance

### Before rollout
- Check who holds a Microsoft Copilot licence, in Microsoft 365 admin center > Billing > Licenses, so you know who could use the capability once it ships.
- Confirm the state of the *Allow the use of connected experiences in Office that analyze content* policy, because turning it off removes Copilot features from Excel.
- Review how your Purview sensitivity labels and encryption are applied to workbooks users keep on devices, since Copilot honours usage rights on encrypted data.
- Watch roadmap item 557564 and the Copilot release notes for a status change.

### At rollout
- Tell Excel users who work with local files that Copilot edits are made in the workbook and need review before the file is shared.
- Show pilot users the Show Changes pane, where Microsoft says Copilot edits carry attribution.
- Check pilot machines for the Office Feature Updates task and for blocked Copilot endpoints if the feature does not appear.

### After rollout
- Re-read the Copilot release notes for an entry on local files, and update this assessment when Microsoft documents behaviour, licence tier and any admin control.
- Re-check licence assignment if Microsoft states that a tier is excluded.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Copilot features are available in Excel (connected experiences that analyse content)</strong><br><small>User</small><br><small class="controls__note">Existing control, not specific to local files. Turning it off makes Copilot features unavailable in Excel. Also settable through Cloud Policy; Mac uses a preference.</small></td><td data-label="Admin UI"><strong>Group Policy Management</strong><br>User Configuration › Policies › Administrative Templates › Microsoft Office 2016 › Privacy › Trust Center › Allow the use of connected experiences in Office that analyze content <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value UserContentDisabled set to 2 (Disabled)</code> <a href="https://learn.microsoft.com/microsoft-365-apps/privacy/manage-privacy-controls" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft Copilot licence</strong><br><small>User</small><br><small class="controls__note">At least License Administrator or User Administrator. Which licence tier covers local file support is not yet published.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for local file support in Agent Mode in Excel</strong><br><small>Tenant</small><br><small class="controls__note">No setting specific to this feature is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The connected-experiences policy governs whether Copilot features are available in Excel at all; it is not specific to local file support, and no setting for local files alone is documented. Microsoft's page says the privacy settings can be implemented by Group Policy or Cloud Policy (see /concepts/cloud-policy/). On Mac, Microsoft documents a preference in the com.microsoft.office domain, key OfficeExperiencesAnalyzingContentPreference, and says setting it to FALSE makes Copilot features unavailable in certain apps.

The licence row decides who holds Copilot, and assigning licences needs at least the License Administrator or User Administrator role.

## Open questions

- Which licence tier will include local file support for Agent Mode, and will any meter or capacity apply? Watch the Microsoft Copilot service description and the Copilot requirements page.
- What is the default on arrival, and will an admin switch exist? Watch Message center and the roadmap item.
- How is a workbook stored on the device read and processed, and how do sensitivity labels and encryption apply to it? Watch the Microsoft Copilot privacy page.
- Is this item's Agent Mode the capability the release notes now call Edit with Copilot, and will the roadmap status change now that the March CY2026 target has passed?

<!-- rationale
risk: Medium. Copilot would edit workbooks stored on the device, and Microsoft has not described how those files are processed; the connected-experiences policy that governs Copilot in Excel already exists.
cost: Low. No separate licence, meter or price for this feature is published; Microsoft describes Copilot as an add-on plan, so the known cost is admin time and licences already planned.
impact: Medium. Aimed at Excel users on Desktop and Mac who keep workbooks on their device and use Copilot; no admin setting is documented for it and admins are not asked to act.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Data exposure; Open questions / absence: How sensitivity labels and encryption apply to a workbook on the device is not yet documented. | Found: When a labeled or encrypted file stored outside Microsoft 365 (for example, on local storage, a network share, or another cloud service) is open in an Office app, Copilot honors the same protection settings. | Fix: Replace 'How that applies to a workbook on the device is not yet documented.' with 'When a labelled or encrypted file on local storage is open in an Office app, Copilot honours the same protection settings.' Cite https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing. Remove 'and how do sensitivity labels and encryption apply to it' from the processing open question. | Source: https://learn.microsoft.com/copilot/plan/architecture-data-protection-auditing
- [contradicted, blocker] front matter: licensing.notes; controls[1].note; Cost and licensing; Open questions / absence: Which Copilot licence tier covers the local-file Agent Mode capability is not yet published. | Found: | Edit with Copilot in Word, Excel, PowerPoint, and OneNote | Yes | Not currently available | Not currently available | Not currently available | Microsoft 365 Copilot (Premium) features: A Microsoft 365 Copilot license is required to access this feature. | Fix: Replace the licence-tier absence in licensing.notes, controls[1].note and Cost and licensing with 'Microsoft's service description lists Edit with Copilot in Excel as a Microsoft 365 Copilot (Premium) feature requiring a Microsoft 365 Copilot licence; no local-file-specific licensing terms are published.' Keep the existing service-description citation. Change the first open question to 'Will local file support have any additional licensing terms, meter or capacity requirement?' | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Why it matters; Data exposure; Governance guidance; Governance controls / applicability: Turning off connected experiences that analyse content makes Copilot unavailable in Excel on Windows, Mac, iOS and Android. | Found: Microsoft Copilot features won't be available to your users in the following apps: - Excel This applies to when you're running the most current version of these apps on Windows, Mac, iOS, or Android devices. | Fix: Add 'when running the most current version of these apps' to the Data exposure sentence that lists Windows, Mac, iOS and Android. | Source: https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: Microsoft's service description describes Microsoft 365 Copilot as an add-on plan with licensing prerequisites. | Found: Microsoft 365 Copilot is an add-on plan with specific licensing prerequisites. | Fix: Keep the cited add-on description, but add 'Microsoft's licence-options page also says Microsoft Copilot is included with Microsoft 365 E7.' Cite https://learn.microsoft.com/copilot/plan/copilot-license-options, whose text says 'Microsoft Copilot is available with Microsoft 365 E7 or as an add-on'. | Source: https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot
- [contradicted, minor] Governance guidance: Before rollout; At rollout / consistency: The checklist asks readers to review sensitivity labels and encryption and check update-task/network controls that have no controls-table rows. | Found: Review how your Purview sensitivity labels and encryption are applied ... Check pilot machines for the Office Feature Updates task and for blocked Copilot endpoints ... Controls rows: connected experiences, licence assignment, local-file switch. | Fix: The sensitivity-label/encryption review and Office Feature Updates/network checks have no table rows. Remove those two checklist bullets to resolve the checklist/table mismatch without adding unverified controls.
-->
