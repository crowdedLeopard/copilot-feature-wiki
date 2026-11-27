---
title: "Outlook for iOS and Android: Purview label inheritance from email attachments"
slug: "outlook-purview-label-inheritance-from-email-attachment-for-ios-and-android"
roadmapId: 569021
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook for iOS and Android can apply or recommend a sensitivity label on an email from the labels on its attachments, following the label policy. Launched per the roadmap; review your label policy setting."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","iOS"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Purview service description says sensitivity labeling, including automatic or policy-based labeling, requires a Microsoft 365 E5 licence or Information Protection and Governance (IPG). No row for this feature is published."
audiences: ["m365-admin","compliance","security"]
tags: ["outlook","mobile","purview","information-protection","sensitivity-labels","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: Outlook: Purview Label Inheritance from Email Attachment for iOS and Android"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569021"
    kind: "roadmap"
  - title: "Manage sensitivity labels in Office apps"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    kind: "learn"
  - title: "Minimum versions for sensitivity labels in Office apps"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-versions"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Set-LabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["sensitivity-labels","microsoft-purview-information-protection-sensitivity-label-inheritance-for-teams-meeting-a","outlook-purview-dlp-wait-on-send-support-for-outlook-mobile-apps"]
controls:
  - governs: "Whether an email inherits the highest priority label from its attachments"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > policy > Edit Policy > Default settings for emails > Inherit label from attachments > Email inherits highest priority label from attachments"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity Global -AdvancedSettings @{AttachmentAction=\"Automatic\"}"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    note: "Set per label policy. Set-LabelPolicy works only in Security & Compliance PowerShell. Applies to the users the policy is published to."
  - governs: "Whether the inherited label is recommended instead of applied automatically"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > policy > Edit Policy > Default settings for emails > Inherit label from attachments > Recommend users apply the attachments label instead of automatically applying it"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity Global -AdvancedSettings @{AttachmentAction=\"Recommended\"}"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    note: "Available only when the inheritance checkbox is selected. Without it, the label is applied automatically but users can still change it before sending."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-20"
    note: "New briefing: Outlook for iOS and Android label inheritance from attachments, with the label policy controls and the mismatch between the roadmap and Learn's version table."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 45 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after the independent check: stated the Purview service description's licence requirement for policy-based labeling, removed the label-priority claim tied to the policy and the checklist step with no controls row."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 47 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 51
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "c673c35567c3b648a17f9c4abab3f47b"
---

## What's changing

Outlook for iOS and Android now supports label inheritance from email attachments, according to the roadmap item. When a user attaches files that carry sensitivity labels, Outlook can automatically apply, or recommend, a sensitivity label on the email, based on organisational policy settings. The roadmap item says this reduces manual labelling effort.

Microsoft Learn describes the setting in general terms. It is turned on in the sensitivity label policy: a label is selected for an email that has not been manually labelled, from the labels on its attachments that are published to the user, and the highest priority label is selected when Outlook supports it. A manual label is never replaced by inheritance, and inheritance replaces a lower priority label that was applied automatically or as a default, but does not override a higher priority one. The attachment must be a physical file, not a link to a file on SharePoint or OneDrive. Learn's description of the setting does not mention iOS or Android specifically, so what follows about mobile behaviour is the roadmap's description.

The roadmap record lists status Launched, target date September CY2026, release phase General Availability, platforms Android and iOS, and the Worldwide, GCC, GCC High and DoD clouds. Microsoft Learn's Outlook capabilities table still shows "Not available" in the Outlook on iOS and Outlook on Android columns for this capability at the time of writing (November 2026). The two Microsoft sources disagree, and the table gives no minimum app version for mobile.

## Why it matters

This extends an existing label policy setting to mobile Outlook, so the question for a service owner is whether the setting is already on in your label policies and whether you want mobile mail to behave the way the policy says. If the label that is inherited applies encryption, Learn says the same encryption is applied to the email by default, so a mobile user may send an encrypted email without having chosen a label.

Microsoft has not stated whether tenants that already selected the checkbox will see the behaviour on mobile without further action, so plan on the assumption that they may. If nobody acts, no source says existing behaviour changes for tenants that have not selected the checkbox.

## Risk assessment

**Data exposure**
- Inheritance picks the highest priority label among the attachments published to the user, so a mobile email can carry a stricter label than the user would have chosen. The highest priority eligible attachment label wins.
- Learn says the attachment must be a physical file, and a link to a file on SharePoint or OneDrive does not trigger inheritance, so an email that links to a labelled file is not covered by this setting.

**Security & identity**
- If the selected label applies encryption, Learn says the same encryption is applied to the email by default. If the label applies Double Key Encryption, or only user-defined permissions for Word, PowerPoint and Excel, Learn describes cases where no label or protection is selected for the email, so check those labels in your policy.

**Autonomy & actions**
- The label is applied automatically unless the **Recommend users apply the attachments label instead of automatically applying it** option is selected. Without it, Learn says users can still remove the label or select a different one before sending, subject to your label policy's other settings.

**Change & support**
- The roadmap record and Learn's capabilities table disagree on mobile support, so expect users and the service desk to meet inconsistent behaviour between Outlook for iOS, Android and desktop until app versions are confirmed.
- Learn says Outlook for iOS and Android need the mailbox hosted in Exchange Online for sensitivity labels; on-premises mailboxes are not supported.

## Cost and licensing

Microsoft's Purview service description states that sensitivity labeling, including automatic or policy-based labeling, requires a Microsoft 365 E5 licence or Microsoft 365 Information Protection and Governance (IPG), and its table lists manual sensitivity labeling as included in Microsoft 365 E3 and several other plans. Learn also says that to use sensitivity labels in Office apps you must use a subscription edition of Office.

The service description states that automatic or policy-based sensitivity labeling requires Microsoft 365 E5 or Microsoft 365 Information Protection and Governance (IPG); it lists no separate row for attachment inheritance. No meter is documented for this feature at the time of writing (November 2026). The indirect cost is admin time to review label policies and to tell mobile users what to expect.

## Scope

The roadmap record lists Outlook for iOS and Android in the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds, as General Availability with status Launched and a target date of September CY2026. Microsoft Learn's Outlook capabilities table shows "Not available" for this capability on iOS and Android, so the minimum app versions are not yet published.

The setting is configured per sensitivity label policy, so it applies to the users and groups that policy is published to. Learn says that for Outlook for iOS and Android the mailbox must be hosted in Exchange Online; sensitivity labels are not supported for mailboxes hosted on-premises.

## Governance guidance

### Before rollout
- Check each sensitivity label policy for the **Email inherits highest priority label from attachments** checkbox, and note which policies already have it selected.
- Confirm with a test mobile user which Outlook for iOS and Android version shows the behaviour, since Learn's capabilities table and the roadmap record disagree.

### At rollout
- Decide whether the label is applied automatically or only recommended, and set the **Recommend users apply the attachments label instead of automatically applying it** option accordingly.
- Tell mobile users that attaching a labelled file can change the email's label and, if that label encrypts, its protection.

### After rollout
- Collect service desk reports about unexpected labels or protection on emails sent from Outlook for iOS and Android, and compare them with the label policy settings.
- Re-read Learn's capabilities table for Outlook periodically and update guidance once it lists iOS and Android versions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an email inherits the highest priority label from its attachments</strong><br><small>Tenant</small><br><small class="controls__note">Set per label policy. Set-LabelPolicy works only in Security &amp; Compliance PowerShell. Applies to the users the policy is published to.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › policy › Edit Policy › Default settings for emails › Inherit label from attachments › Email inherits highest priority label from attachments <a href="https://learn.microsoft.com/purview/sensitivity-labels-office-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity Global -AdvancedSettings @{AttachmentAction=&quot;Automatic&quot;}</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the inherited label is recommended instead of applied automatically</strong><br><small>Tenant</small><br><small class="controls__note">Available only when the inheritance checkbox is selected. Without it, the label is applied automatically but users can still change it before sending.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › policy › Edit Policy › Default settings for emails › Inherit label from attachments › Recommend users apply the attachments label instead of automatically applying it <a href="https://learn.microsoft.com/purview/sensitivity-labels-office-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity Global -AdvancedSettings @{AttachmentAction=&quot;Recommended&quot;}</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are settings in a sensitivity label policy, so they apply to the users that policy is published to. The portal path combines the steps on the page that publishes label policies with the setting described on the Office apps page. Learn's page for the AttachmentAction setting says Set-LabelPolicy is functional only in Security & Compliance PowerShell. Learn's setting description does not name a separate switch for iOS or Android.

## Open questions

- Which minimum versions of Outlook for iOS and Android support label inheritance from email attachments? Learn's capabilities table shows "Not available"; watch that page and the roadmap item.
- Do label policies that already select the inheritance checkbox take effect on mobile without further action? Microsoft has not stated this; watch Message center and the Learn page.

<!-- rationale
risk: Low. The behaviour follows a label policy checkbox that an administrator selects, and stays inside existing sensitivity labels; tenants that already selected it should check what mobile users will now see.
cost: Low. The only cost the sources show is admin time and communication; Microsoft's Purview service description states the licences for sensitivity labeling but lists no separate row or meter for this feature.
impact: Low. Only users who attach labelled files to email in Outlook for iOS or Android, in tenants whose label policy turns the setting on, would notice a label being applied or recommended.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing; front matter: licensing.notes; rationale: cost / licensing: The licensing requirement is Microsoft 365 E5 or Microsoft 365 Information Protection and Governance, without stating the additional standard/Plan 1 assignment requirement for premium/P2 users. | Found: A standard/Plan 1 license must be assigned in addition to the premium/P2 license for users to have access to sensitivity labeling for Information Protection for Office 365 and AIP, even if the premium licenses/Plan 2 are assigned. | Fix: Keep the E5/IPG requirement and add to the licensing notes and Cost and licensing: 'For users assigned a premium/P2 entitlement, the standard/Plan 1 entitlement must also be assigned for sensitivity labeling to be available.' Cite the existing Microsoft Purview service description. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
-->
