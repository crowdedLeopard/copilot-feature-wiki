---
title: "Outlook desktop: Create PDF from email that keeps the sensitivity label"
slug: "outlook-export-to-pdf-preserving-sensitivity-labels"
roadmapId: 561651
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook desktop is planned to gain File > Open & Export > Create PDF, keeping an email's sensitivity label. It matters where mandatory labelling blocks Print to PDF. No default or admin setting is stated."
status: "in-development"
releasePhase: ["Current Channel","General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Manual Sensitivity Labeling as Included in the plans in its table, and says labelling including automatic labelling requires Microsoft 365 E5 or Information Protection and Governance. A licence specific to this feature is not yet published."
audiences: ["m365-admin","security","compliance","end-user"]
tags: ["outlook","sensitivity-labels","information-protection","purview"]
sources:
  - title: "Microsoft 365 Roadmap 561651"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561651"
    kind: "roadmap"
  - title: "Print to PDF is blocked if Mandatory Labeling is enabled"
    url: "https://support.microsoft.com/en-us/office/print-to-pdf-is-blocked-if-mandatory-labeling-is-enabled-328c575c-9db9-4879-953b-a5e176f61e78"
    kind: "docs"
  - title: "Manage sensitivity labels in Office apps"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "docs"
  - title: "Set-LabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    kind: "learn"
videos: []
related: ["sensitivity-labels","cloud-policy","outlook-microsoft-purview-label-inheritance-from-email-attachments"]
controls:
  - governs: "Mandatory labelling for email and documents, which makes Print to PDF unavailable for labelled content"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Microsoft Purview portal > Label policy configuration > Policy settings > Require users to apply a label to their email or documents"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    api: null
    note: "Set per label policy. Learn describes a separate checkbox to clear mandatory labelling for email where the Outlook app supports it."
  - governs: "Office policy that turns off label and encryption handling when creating PDFs"
    scope: "user"
    ui:
      surface: "Group Policy or Cloud Policy service for Microsoft 365"
      path: "User Configuration/Administrative Templates/Microsoft Office 2016/Microsoft Save As PDF and Save As XPS add-ins > Use the Sensitivity feature in Office to apply sensitivity labels to PDFs"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    api:
      kind: "other"
      call: "Registry value HKEY_CURRENT_USER\\software\\policies\\microsoft\\office\\16.0\\common\\fixedformat disablepdfprotection (DWORD) = 1"
      docs: "https://support.microsoft.com/en-us/office/print-to-pdf-is-blocked-if-mandatory-labeling-is-enabled-328c575c-9db9-4879-953b-a5e176f61e78"
    note: "Learn names Word, Excel and PowerPoint for the policy; the support page says the registry key covers Print to PDF and export in Office applications. Coverage of Outlook Create PDF is not stated."
  - governs: "Outlook Desktop printing to PDF without preserving the label or encryption"
    scope: "user"
    ui: null
    api:
      kind: "other"
      call: "Registry value HKEY_CURRENT_USER\\Software\\Microsoft\\Office\\16.0\\Outlook\\Preferences disablepdfprotectioninoutlook (DWORD) = 1"
      docs: "https://support.microsoft.com/en-us/office/print-to-pdf-is-blocked-if-mandatory-labeling-is-enabled-328c575c-9db9-4879-953b-a5e176f61e78"
    note: "Applies to Outlook Desktop only. Weakens protection: PDFs printed with it set do not keep the label or encryption."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-05-08T22:15:03"
changes:
  - date: "2026-11-24"
    note: "First briefing for roadmap item 561651: a label-preserving Create PDF in Outlook desktop, with the existing Print to PDF block and workarounds as context."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 45 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 41
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "1a4f472978b7037961c573f2369c3140"
---

## What's changing

The Microsoft 365 Roadmap item describes the ability to create PDFs from email messages in Outlook and preserve sensitivity labels, reached from File -> Open & Export -> Create PDF. The record lists the Desktop platform, the Current Channel and General Availability release phases, and the Worldwide (Standard Multi-Tenant) cloud.

The item sits beside a known gap. Microsoft's support page "Print to PDF is blocked if Mandatory Labeling is enabled" (last updated 26 August 2024) says Outlook Desktop blocks printing to PDF when mandatory labelling is enabled, from January 2024, and that Outlook Desktop did not support exporting files to PDF. Microsoft Learn says the same Print to PDF option is unavailable under mandatory labelling because printing removes the label. Word, Excel and PowerPoint for Windows can export to PDF with the label and its content markings. This briefing reads the roadmap item as Outlook gaining that kind of export, but the item does not say so.

Microsoft Learn does not describe Create PDF in Outlook at the time of writing (November 2026), so what follows about its behaviour is the roadmap's one-sentence description. Whether encryption from the label carries into the PDF, which Outlook versions get it, and which desktop clients are meant are not stated.

The roadmap status is In development with a target of July CY2026. That month has passed as of 24 November 2026 and the record shows no launch; treat the date as a target that has not been met.

## Why it matters

If your tenant requires labels on email, Outlook Desktop users have had no supported way to turn a labelled email into a PDF without dropping the label. The documented workaround is a registry key that prints to PDF without preserving the label or encryption, which weakens the protection you applied. A route that keeps the label would let you stop relying on that workaround.

Microsoft has not stated what happens on arrival, so base planning on no source saying that existing behaviour changes. Expect help-desk questions from users who find the new menu entry and from users who still see the blocked Print to PDF message.

## Risk assessment

**Data exposure**
- A PDF created with the existing Print to PDF route, or with the Outlook registry key `disablepdfprotectioninoutlook`, does not keep the label or encryption, so labelled content can leave Outlook as an unlabelled file. The new export is described as preserving the label; the roadmap does not say how encryption is handled.
- Microsoft Learn states Outlook doesn't currently support PDF attachments inheriting encryption from a labelled message, so confirm how an encrypted label behaves in a created PDF before relying on it.

**Security & identity**
- No change documented: the roadmap item names no new permission, connection or identity. For PDFs from Word, Excel and PowerPoint, Microsoft Learn says encrypted PDFs can be opened with Microsoft Edge on Windows or Mac.

**Autonomy & actions**
- No change documented: the item describes a user-initiated menu action, File -> Open & Export -> Create PDF.

**Change & support**
- Where the registry key `disablepdfprotectioninoutlook` is deployed, users can already print labelled email to PDF without the label. Decide whether to keep it once a label-preserving route exists.
- The Office policy `disablepdfprotection` disables label handling for both Print to PDF and export in Office applications, according to the support page. Whether it also affects the new Outlook Create PDF is not stated.

## Cost and licensing

No separate meter is documented for this feature at the time of writing. The Microsoft Purview service description lists Manual Sensitivity Labeling as Included in the plans in its table (Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium, OneDrive for Business Plan 2, Enterprise Mobility + Security E3/E5, Office 365 E5/A5/E3/A3, and Azure Information Protection Plan 1 and 2). The same page says that sensitivity labelling, including automatic or policy-based labelling, requires a Microsoft 365 E5 licence or Microsoft 365 Information Protection and Governance.

A licence or price specific to Create PDF in Outlook is not yet published. Indirect cost is admin time to review the mandatory labelling policy and any registry workaround, and user communication.

## Scope

The roadmap record lists the Outlook product, the Desktop platform, the Current Channel and General Availability release phases, and the Worldwide (Standard Multi-Tenant) cloud. It lists no other clouds; the record does not say the feature is unavailable elsewhere.

The record does not say whether it targets Outlook for Windows, Outlook for Mac or new Outlook, and no minimum Outlook build is stated. Learn documents that the existing Print to PDF block applies to Outlook Desktop and that it is tied to mandatory labelling in a sensitivity label policy.

## Governance guidance

### Before rollout
- Check whether your sensitivity label policies require users to apply a label to their email, using the mandatory labelling row in the controls table; that setting is what makes Print to PDF unavailable for labelled email.
- Find out whether the Outlook registry value `disablepdfprotectioninoutlook` or the Office policy `disablepdfprotection` is deployed in your tenant, because either lets labelled content reach a PDF without its label.
- Ask your Outlook for Windows desktop users whether they save labelled email as PDF today, so you know who to tell.

### At rollout
- Watch Message center and the Microsoft 365 Roadmap item 561651 for the move from In development to rolling out; the target is July CY2026 and has passed.
- Test Create PDF on a pilot device with a labelled email and an email whose label applies encryption, and open the result in a label-aware PDF reader.

### After rollout
- Review whether the registry workaround is still needed once users have a label-preserving route, and remove it only after the pilot confirms the label stays on the PDF.
- Update the user guidance that tells people to avoid Print to PDF for labelled email.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Mandatory labelling for email and documents, which makes Print to PDF unavailable for labelled content</strong><br><small>Tenant</small><br><small class="controls__note">Set per label policy. Learn describes a separate checkbox to clear mandatory labelling for email where the Outlook app supports it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Microsoft Purview portal › Label policy configuration › Policy settings › Require users to apply a label to their email or documents <a href="https://learn.microsoft.com/purview/sensitivity-labels-office-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Office policy that turns off label and encryption handling when creating PDFs</strong><br><small>User</small><br><small class="controls__note">Learn names Word, Excel and PowerPoint for the policy; the support page says the registry key covers Print to PDF and export in Office applications. Coverage of Outlook Create PDF is not stated.</small></td><td data-label="Admin UI"><strong>Group Policy or Cloud Policy service for Microsoft 365</strong><br>User Configuration/Administrative Templates/Microsoft Office 2016/Microsoft Save As PDF and Save As XPS add-ins › Use the Sensitivity feature in Office to apply sensitivity labels to PDFs <a href="https://learn.microsoft.com/purview/sensitivity-labels-office-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value HKEY_CURRENT_USER\software\policies\microsoft\office\16.0\common\fixedformat disablepdfprotection (DWORD) = 1</code> <a href="https://support.microsoft.com/en-us/office/print-to-pdf-is-blocked-if-mandatory-labeling-is-enabled-328c575c-9db9-4879-953b-a5e176f61e78" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Outlook Desktop printing to PDF without preserving the label or encryption</strong><br><small>User</small><br><small class="controls__note">Applies to Outlook Desktop only. Weakens protection: PDFs printed with it set do not keep the label or encryption.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value HKEY_CURRENT_USER\Software\Microsoft\Office\16.0\Outlook\Preferences disablepdfprotectioninoutlook (DWORD) = 1</code> <a href="https://support.microsoft.com/en-us/office/print-to-pdf-is-blocked-if-mandatory-labeling-is-enabled-328c575c-9db9-4879-953b-a5e176f61e78" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Mandatory labelling is set in the label policy. Microsoft Learn documents the registry value and the Office policy as separate mechanisms from the label policy: the label policy setting makes Print to PDF unavailable, the registry values change how PDF creation treats labels.

The Office policy page for the Sensitivity feature setting names Word, Excel and PowerPoint. The support page says the registry key disables saving with labels for Print to PDF and export in the Office applications. Whether either governs the new Outlook Create PDF is not stated. Microsoft Learn documents no administrator setting for Create PDF itself at the time of writing (November 2026).

## Open questions

- Does Create PDF in Outlook carry encryption from the label into the PDF, given that Learn says Outlook doesn't currently support PDF attachments inheriting encryption from a labelled message? Watch the Learn page on sensitivity labels in Office apps.
- Which Outlook clients and minimum builds get Create PDF, and when? The roadmap target of July CY2026 has passed with the status still In development; watch the roadmap item and Message center.
- Will an administrator setting control Create PDF, or does it follow the existing PDF policy settings and mandatory labelling?
- Is the default on arrival on or off, and is any licence beyond the sensitivity labelling licences needed?

<!-- rationale
risk: Low. The roadmap describes an export that preserves the label, so it stays inside existing label boundaries; the exposure that remains is the existing registry workaround that prints to PDF without the label.
cost: Low. The only cost the sources show is admin and user-communication time; Microsoft has published no licence or price specific to this feature.
impact: Medium. People who save labelled email as PDF in Outlook for Windows desktop notice it, most of all in tenants with mandatory labelling, where Print to PDF is blocked.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: Microsoft Purview portal > Label policy configuration > Policy settings > Require users to apply a label to their email or documents is a complete route from the portal navigation. | Found: Sign in to the Microsoft Purview portal > Solutions > Information Protection > Publishing policies. ... To edit an existing label policy, select it, and then select the Edit Policy button from the flyout pane. | Fix: Keep the surface Microsoft Purview portal; replace the path with 'Solutions > Information Protection > Publishing policies > policy > Edit Policy > Policy settings > Require users to apply a label to their email or documents'. Cite https://learn.microsoft.com/purview/create-sensitivity-labels for the route into the policy and retain https://learn.microsoft.com/purview/sensitivity-labels-office-apps for the setting. Remove the duplicate portal name and the non-navigation step 'Label policy configuration'. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels
- [contradicted, blocker] controls[0].api; Governance controls table / absence: No automation is documented for the mandatory-labelling control. | Found: DisableMandatoryInOutlook: Outlook apps that support this setting exempt Outlook messages from mandatory labeling. Example: Set-LabelPolicy -Identity Global -AdvancedSettings @{DisableMandatoryInOutlook="True"} | Fix: Replace controls[0].api null with kind 'powershell', call 'Set-LabelPolicy -Identity <policy> -AdvancedSettings @{DisableMandatoryInOutlook="True"}', and docs https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy. Add to the note: 'This call exempts Outlook messages from mandatory labelling in Outlook apps that support the setting; it does not configure mandatory labelling for documents.' | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy
- [contradicted, blocker] controls[1].ui; Governance controls table / admin-path: The User Configuration/Administrative Templates/Microsoft Office 2016/Microsoft Save As PDF and Save As XPS add-ins path works in Group Policy or Cloud Policy. | Found: Under Customization, select Policy Management. ... On the Configure Settings page, select the policies that you want to include in the policy configuration. You can search for the policy by name, or you can create a custom filter. | Fix: Narrow controls[1].ui.surface to 'Group Policy' and retain the existing path and Office-apps docs URL. Add to the note: 'Configure Use the Sensitivity feature in Office to apply sensitivity labels to PDFs as Disabled.' The cited Office-apps page documents that exact Group Policy location; do not present it as Cloud Policy navigation. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [unsupported, major] Why it matters / behaviour: Outlook Desktop users in tenants requiring email labels have had no supported way to turn a labelled email into a PDF without dropping the label. | Found: Searched: Outlook "labelled email" "PDF" preserve sensitivity supported export. Read search results, Office-apps PDF support and Print to PDF support; these establish native printing/export limitations, not the absence of every supported label-preserving workflow. | Fix: Replace the sentence with: 'Microsoft's August 2024 support page says Outlook Desktop cannot print PDFs with the label applied and does not support exporting files to PDF.' Retain the existing support-page citation.
-->
