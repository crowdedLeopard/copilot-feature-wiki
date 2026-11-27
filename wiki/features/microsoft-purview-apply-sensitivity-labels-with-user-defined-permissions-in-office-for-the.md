---
title: "Microsoft Purview: apply sensitivity labels with user-defined permissions in Word, Excel and PowerPoint for the web"
slug: "microsoft-purview-apply-sensitivity-labels-with-user-defined-permissions-in-office-for-the"
roadmapId: 468888
topic: "governance"
products: ["Excel","Microsoft Purview","PowerPoint","Word"]
summary: "Users can apply labels that let them choose who can open a document, and with what rights, in Office for the web. Web support is opt-in: it needs SharePoint and OneDrive label support, and Microsoft asks for co-authoring of encrypted files first."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Manual Sensitivity Labeling as included in Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium, Office 365 E5/A5/E3/A3 and other plans. The same page also says sensitivity labeling requires Microsoft 365 E5 or Information Protection and Governance."
audiences: ["compliance","m365-admin","security","change-adoption"]
tags: ["purview","sensitivity-labels","encryption","information-protection","word","excel","powerpoint","sharepoint","onedrive","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 468888"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=468888"
    kind: "roadmap"
  - title: "Enable sensitivity labels for files in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    kind: "learn"
  - title: "Restrict access to content by using sensitivity labels to apply encryption"
    url: "https://learn.microsoft.com/purview/encryption-sensitivity-labels"
    kind: "learn"
  - title: "Minimum versions for sensitivity labels in Office apps"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-versions"
    kind: "learn"
  - title: "Enable co-authoring for files encrypted with sensitivity labels"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-coauthoring"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Get started with sensitivity labels"
    url: "https://learn.microsoft.com/purview/get-started-with-sensitivity-labels"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Whether a label prompts users to choose permissions in Word, PowerPoint and Excel (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    kind: "learn"
  - title: "Whether co-authoring is supported for files encrypted with sensitivity labels (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    kind: "learn"
  - title: "Searching audit records of labels applied, changed or removed on files (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
videos: []
related: ["sensitivity-labels","microsoft-purview-compliance-portal-custom-permissions-ui-enhancements-in-microsoft-purvie","auditing","guest-access","microsoft-purview-use-sensitivity-labels-to-block-all-connected-experiences-that-analyze-c"]
controls:
  - governs: "Whether a label prompts users to choose permissions in Word, PowerPoint and Excel"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > label > Edit label > Define the scope for this label > Files & other data assets > Choose protection settings for the types of items you selected > Control access > Access control"
      docs: "https://learn.microsoft.com/purview/encryption-sensitivity-labels"
    api:
      kind: "powershell"
      call: "Set-Label -Identity <label> -EncryptionPromptUser $true"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    note: "On Access control, select Configure access control settings > Let users assign permissions when they apply the label > In Word, PowerPoint, and Excel, prompt users to specify permissions. API needs EncryptionProtectionType UserDefined."
  - governs: "Whether SharePoint and OneDrive process labelled files so labels appear in Office for the web"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Sensitivity labels > Turn on now"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -EnableAIPIntegration $true"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    note: "Portal route needs a global administrator and shows only while the setting is off. Multi-Geo tenants must use PowerShell in each geo-location."
  - governs: "Whether co-authoring is supported for files encrypted with sensitivity labels"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Solution settings > Information Protection > Co-authoring for files with sensitivity labels > Turn on co-authoring for files with sensitivity labels"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-coauthoring"
    api:
      kind: "powershell"
      call: "Set-PolicyConfig -EnableLabelCoauth $true"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig"
    note: "Needs at least DLP Compliance Management or Information Protection Admin. Changes labelling metadata; can be turned off only with PowerShell."
  - governs: "Searching audit records of labels applied, changed or removed on files"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Labels applied in Office for the web are recorded as FileSensitivityLabelApplied; changes as FileSensitivityLabelChanged."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-22T23:00:47"
changes:
  - date: "2026-11-27"
    note: "New briefing: user-defined permissions labels in Office for the web, the two tenant prerequisites and their portal and PowerShell controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 71 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected the label editing path to include the label scope page and the user-defined permissions options, replaced 'any browser' with the web apps, and narrowed a checklist step."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 77 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 77
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ce95cc4c1a7c23378ed70bc38d1ff049"
---

## What's changing

Users of Word, Excel and PowerPoint for the web can apply a sensitivity label configured for user-defined permissions and choose, as they apply it, who can open the document and with which permissions. Microsoft Learn defines user-defined permissions as an encryption configuration in which the label setting **Let users assign permissions when they apply the label** and the checkbox **In Word, PowerPoint, and Excel, prompt users to specify permissions** are selected. With this configuration, Learn says, the user and not the administrator controls both who can access the document and what permissions they have.

Web support is opt-in. The capabilities table for Word, Excel and PowerPoint gives the web column for both user-defined permissions rows as **Yes - opt-in**, linked to the step that enables sensitivity labels for Office files in SharePoint and OneDrive. Once that is enabled, labels with this configuration are displayed in Office for the web, and Learn asks administrators to make sure co-authoring for files encrypted with sensitivity labels is enabled before users select these labels or change the label applied. In Office for the web, users can also enter a domain name, and typing the @ character offers a selectable entry for everybody in the organisation.

The roadmap item is **Launched** (General Availability), with a target of April CY2026, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the Web platform.

## Why it matters

This puts the choice of who can read an encrypted document in the hands of whoever applies the label, in Word, Excel and PowerPoint for the web. The domain option is wider than many users will expect: Learn states that entering a domain grants access to all users in every domain the organisation owns in Microsoft Entra ID, so **@sales.contoso.com** is not limited to the sales subdomain. Relabelling also behaves differently: when a file labelled with user-defined permissions is relabelled with a label that doesn't apply encryption, the original encryption is removed rather than preserved.

Nothing becomes available in the web apps until an administrator has enabled sensitivity labels for SharePoint and OneDrive and published a label with this configuration. In a tenant that has already done both, Learn states that labels with this configuration are displayed in Office for the web, so the decision to review is which of those labels users should reach from the browser, and whether the co-authoring prerequisite is in place.

## Risk assessment

**Data exposure**
- A domain entered in the permissions prompt grants access to all users in every domain the organisation owns in Microsoft Entra ID, and the @ entry selects everybody in the organisation. The control is which labels carry the user-defined permissions setting (first row of the table) and which users are published them.
- Relabelling a user-defined permissions file with a label that applies no encryption removes the original encryption. Plan the label order and tooltips so users do not downgrade by accident.
- In Office for the web, screen captures of encrypted documents aren't prevented; copying to the clipboard is blocked when the **Copy** usage right isn't granted.

**Security & identity**
- Guests from another tenant can't open a file in Office for the web, or from SharePoint or OneDrive in desktop apps, when the label grants permissions to a group in their home tenant. Learn's workaround is to grant permissions to the external user directly or to a group in your own tenant.

**Autonomy & actions**
- No change: the label is applied by a person. Learn states that a label that lets users assign permissions can be recommended but can only be automatically applied for the Do Not Forward and Encrypt-Only options, which are Outlook options.

**Change & support**
- The co-authoring prerequisite changes where Office files store labelling metadata. Learn warns not to enable it if any app, service, script or tool reads or writes labelling metadata in the old location, and it can't be turned off in the Microsoft Purview portal once on.
- Some files labelled and encrypted in desktop apps (Power Query data, custom add-in data, custom XML parts, bibliographies) can't be processed by SharePoint and OneDrive; users must open them in desktop apps.
- Printing, downloading, exporting and creating a copy aren't supported for encrypted documents in Office for the web, which may surprise users and reach the helpdesk.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists **Manual Sensitivity Labeling** as included in Microsoft 365 E5/A5/G5/E3/A3/G3/F1/F3/Business Premium, OneDrive for Business (Plan 2), Enterprise Mobility + Security E3/E5, Office 365 E5/A5/E3/A3, and AIP Plan 1 and Plan 2. Learn describes user-defined permissions as options for when users manually apply a sensitivity label. The same service description also states that sensitivity labeling, including automatic or policy-based labeling, requires a Microsoft 365 E5 licence or Microsoft 365 Information Protection and Governance; the two statements are on the same page, and the table row is the entry for manual labelling. The Get started page adds that admins also need a licence to manage sensitivity labels.

**Meter.** The service description and the Get started page document no meter for this feature at the time of writing (November 2026); the Get started page names pay-as-you-go billing only for applying labels to non-Microsoft 365 data sources.

**Indirect costs.** Admin time to check that every labelling app and tool supports the co-authoring metadata change, user guidance on domain entries, and helpdesk time for encrypted files that can't be opened or printed in the browser.

## Scope

- **Users:** people in scope of a label policy that publishes a label configured for user-defined permissions, licensed for manual sensitivity labelling.
- **Apps and files:** Word (.docx, .docm), Excel (.xlsx, .xlsm, .xlsb) and PowerPoint (.pptx, .ppsx) for the web, for files in SharePoint and OneDrive.
- **Roles:** turning on label support from the Microsoft Purview portal needs a global administrator; the PowerShell route needs SharePoint admin privileges. Co-authoring needs at least the DLP Compliance Management or Information Protection Admin role, or the Security Administrator or Compliance Administrator role.
- **Clouds:** Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, as the roadmap record lists them.
- **Timing:** the SharePoint and OneDrive setting takes about 15 minutes to take effect; Learn says to wait 24 hours after turning on co-authoring.
- **Multi-Geo:** label support must be enabled with PowerShell in each geo-location.
- **Out of scope:** labels whose encryption sets **User access to content expires** to a value other than **Never**, or uses **Double Key Encryption**, aren't displayed in Office for the web. Documents encrypted with an on-premises key, Double Key Encryption or a Rights Management template applied without a label can't be opened in Office for the web.

## Governance guidance

### Before rollout
- List the labels that have **Let users assign permissions when they apply the label** with the Word, PowerPoint and Excel prompt selected.
- Check every app, service, script and tool that reads labelling metadata against the minimum versions on the co-authoring page before turning co-authoring on.
- Confirm that sensitivity labels are enabled for Office files in SharePoint and OneDrive, running Set-SPOTenant in each geo-location for Multi-Geo tenants.
- Write user guidance on domain entries and the @ everybody entry, and on relabelling to a label without encryption.

### At rollout
- Turn on co-authoring for files with sensitivity labels, then wait 24 hours before users apply these labels in the web apps.
- Test a user-defined permissions label in Word, Excel and PowerPoint for the web with a pilot account, including a guest and a relabel to a label without encryption.
- Tell owners who share with other tenants to grant permissions to the guest directly or to a group in your tenant, not to a group in the guest's tenant.

### After rollout
- Search the audit log for **Applied sensitivity label to file**, **Changed sensitivity label applied to file** and **Removed sensitivity label from file** to see web labelling activity.
- Track helpdesk calls about encrypted files that open only in desktop apps, such as files with Power Query data or files over 12 MB copied to another site.
- Turn off the Word, PowerPoint and Excel prompt on any label where user-chosen permissions prove too broad.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a label prompts users to choose permissions in Word, PowerPoint and Excel</strong><br><small class="controls__note">On Access control, select Configure access control settings &gt; Let users assign permissions when they apply the label &gt; In Word, PowerPoint, and Excel, prompt users to specify permissions. API needs EncryptionProtectionType UserDefined.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › label › Edit label › Define the scope for this label › Files &amp; other data assets › Choose protection settings for the types of items you selected › Control access › Access control <a href="https://learn.microsoft.com/purview/encryption-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;label&gt; -EncryptionPromptUser $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether SharePoint and OneDrive process labelled files so labels appear in Office for the web</strong><br><small>Tenant</small><br><small class="controls__note">Portal route needs a global administrator and shows only while the setting is off. Multi-Geo tenants must use PowerShell in each geo-location.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Sensitivity labels › Turn on now <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -EnableAIPIntegration $true</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether co-authoring is supported for files encrypted with sensitivity labels</strong><br><small>Tenant</small><br><small class="controls__note">Needs at least DLP Compliance Management or Information Protection Admin. Changes labelling metadata; can be turned off only with PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Solution settings › Information Protection › Co-authoring for files with sensitivity labels › Turn on co-authoring for files with sensitivity labels <a href="https://learn.microsoft.com/purview/sensitivity-labels-coauthoring" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PolicyConfig -EnableLabelCoauth $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-policyconfig" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Searching audit records of labels applied, changed or removed on files</strong><br><small>Tenant</small><br><small class="controls__note">Labels applied in Office for the web are recorded as FileSensitivityLabelApplied; changes as FileSensitivityLabelChanged.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Office for the web shows a user-defined permissions label only when three things line up: the label is configured to prompt in Word, PowerPoint and Excel, the tenant has sensitivity labels enabled for SharePoint and OneDrive, and the label is published to the user in a label policy (Microsoft Purview portal > Solutions > Information Protection > Publishing policies, as described on Create and configure sensitivity labels and their policies). Learn asks for co-authoring to be on before users select these labels in the browser.

Co-authoring for files with sensitivity labels can't be turned off in the Microsoft Purview portal once on; Learn documents Set-PolicyConfig with EnableLabelCoauth set to $false for that, and warns that labelling information for unencrypted Word, Excel and PowerPoint files is lost. Changes to whether a label lets users assign permissions apply only to newly labelled or relabelled items.

## Open questions

- Which statement in the Microsoft Purview service description governs this capability: the Manual Sensitivity Labeling row that includes Microsoft 365 E3, or the sentence that sensitivity labeling requires Microsoft 365 E5 or Information Protection and Governance? Watch the service description.
- Will Microsoft offer a way to keep user-defined permissions labels to desktop apps while SharePoint and OneDrive label support stays on? Watch the Enable sensitivity labels for files in SharePoint and OneDrive page.
- Will Office for the web support labels whose encryption sets an expiry other than Never? Watch the capabilities table for Word, Excel and PowerPoint.
- Will guests whose permissions come through a group in their home tenant be able to open these files? Watch the Limitations section of the SharePoint and OneDrive page.

<!-- rationale
risk: Medium. The user, not the administrator, decides who can open the document, and a domain entry grants access to every domain the organisation owns in Microsoft Entra ID; the label's own settings are the control.
cost: Low. The Microsoft Purview service description lists manual sensitivity labelling as included in Microsoft 365 E3 and E5 and other plans; the known cost is admin time on the co-authoring prerequisite and user guidance.
impact: Medium. Only users who are published a label configured for user-defined permissions notice, and only in Word, Excel and PowerPoint for the web.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Purview path through Sensitivity labels, Edit label, scope and Control access reaches the Access control page for configuring user-defined permissions. | Found: on the **Choose protection settings for the types of items you selected** page, make sure you select **Control access**. ... On the **Access control** page, select one of the following options | Fix: Extend controls[0].ui.path to 'Solutions > Information Protection > Sensitivity labels > label > Edit label > Define the scope for this label > Files & other data assets > Choose protection settings for the types of items you selected > Control access > Access control > Configure access control settings > Let users assign permissions when they apply the label > In Word, PowerPoint, and Excel, prompt users to specify permissions'. The existing note already gives these final choices. The entry steps are supported by the already-cited https://learn.microsoft.com/purview/create-sensitivity-labels. | Source: https://learn.microsoft.com/purview/encryption-sensitivity-labels
-->
