---
title: "Outlook for Mac: sensitivity label inheritance from email attachments"
slug: "outlook-microsoft-purview-label-inheritance-from-email-attachments"
roadmapId: 569022
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook for Mac can apply or recommend a Purview sensitivity label on an email based on the labels of its attached files. It follows the label policy setting; Learn's version table still lists Mac as not available."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Mac"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description says sensitivity labelling, including automatic or policy-based labelling, requires Microsoft 365 E5 or Information Protection and Governance (IPG), and lists manual labelling as included in E3 and other plans. No row names this feature."
audiences: ["compliance","security","m365-admin"]
tags: ["outlook","macos","purview","sensitivity-labels","information-protection","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: Outlook: Microsoft Purview Label Inheritance from Email Attachments"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569022"
    kind: "roadmap"
  - title: "Manage sensitivity labels in Office apps"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    kind: "learn"
  - title: "Minimum versions for sensitivity labels in Office apps"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-versions"
    kind: "learn"
  - title: "Release notes for Office for Mac"
    url: "https://learn.microsoft.com/officeupdates/release-notes-office-for-mac"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Get started with sensitivity labels"
    url: "https://learn.microsoft.com/purview/get-started-with-sensitivity-labels"
    kind: "learn"
  - title: "Set-LabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["sensitivity-labels","microsoft-purview-information-protection-sensitivity-label-inheritance-for-teams-meeting-a","outlook-purview-dlp-wait-on-send-support-for-mac","microsoft-purview-data-loss-prevention-count-of-labelled-documents-condition","outlook-purview-data-loss-prevention-support-for-calendar-events-in-outlook-for-mac"]
controls:
  - governs: "Whether an email inherits the highest priority label from its attachments"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > policy > Edit Policy > Default settings for emails > Inherit label from attachments > Email inherits highest priority label from attachments"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity <policy name> -AdvancedSettings @{AttachmentAction=\"Automatic\"}"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    note: "Set in a label policy, so it applies to the users and groups the policy is published to. Requires a role that can configure label policies."
  - governs: "Whether the attachments' label is applied automatically or only recommended"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > policy > Edit Policy > Default settings for emails > Inherit label from attachments > Recommend users apply the attachments label instead of automatically applying it"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-office-apps"
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity <policy name> -AdvancedSettings @{AttachmentAction=\"Recommended\"}"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    note: "Selectable only after the inherit option is selected. Without the recommend option the label is applied automatically, and users can still remove it or choose another label before sending."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-20"
    note: "New briefing for roadmap item 569022, Launched with a September CY2026 target; notes that the Learn version table and the Office for Mac release notes disagree on Mac support."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 53 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 59
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "e9ce3674ffc8fcfeffb11d290464813d"
---

## What's changing

Outlook for Mac can choose a Microsoft Purview sensitivity label for an email that is being composed, based on the sensitivity labels of the files attached to it. The roadmap item describes the label as automatically applied or recommended. Learn describes the same behaviour for Outlook generally as label inheritance from email attachments: a label is dynamically selected from the labels applied to the attachments and published to the user, and the highest priority label is selected when Outlook supports it.

The behaviour has limits that Learn states. A label the user applied manually is not replaced. An inherited label replaces a lower priority label that was applied automatically or as a default, but does not override a higher priority label. The attachment must be a physical file, not a link to a file on SharePoint or OneDrive. By default, if the selected label applies encryption, the same encryption is applied to the email. Where the highest priority label applies only user-defined permissions for Word, PowerPoint and Excel, Learn says no label or protection is selected for the email.

The roadmap item is marked Launched, with a General Availability release phase and a target of September CY2026, for Mac in Worldwide, GCC, GCC High and DoD. The Office for Mac release notes list "Outlook can automatically inherit an appropriate sensitivity label from labeled attachments" under version 16.113 (16 September 2026). The Learn capabilities table for Outlook still shows label inheritance from email attachments as Not available for Outlook for Mac at the time of writing (November 2026). Both are reported here as Microsoft publishes them.

## Why it matters

This changes which label a Mac user's outgoing email carries without the user choosing one. For a compliance team that uses labels as the condition for encryption, mail flow or data loss prevention rules, an email that inherits the label of its most sensitive attachment is covered by those rules where an unlabelled email would not be.

The setting lives in the label policy, and the Learn page describes it as something an administrator selects. Microsoft has not stated whether a policy that already has it selected starts to apply to Mac users when they update, so confirm this on a pilot Mac before assuming that Mac and Windows behave the same.

## Risk assessment

**Data exposure**
- The inherited label can add encryption to the email. Learn says that by default the email receives the same encryption as the label, such as Do Not Forward, so recipients who are not covered by the label's permissions may be unable to open it. Review the encryption of labels that your policy publishes before enabling the setting.
- Only labels published to the user are candidates, and the label must be scoped to both files and emails. A label scoped to only one of these cannot be inherited, so some attachments may produce no label.

**Security & identity**
- The email takes the highest priority label among the attachments, so label priority order decides the outcome. A mis-ordered priority list can give an email a lower or different label than expected.
- Linked files (SharePoint or OneDrive links) are not read: Learn says the attachment must be a physical file. Sensitive content shared by link does not trigger inheritance.

**Autonomy & actions**
- With the automatic option, the label is applied without a prompt, but the user can still remove it or select a different label before sending. With the recommend option, the user is prompted instead.
- Manually labelled emails are left alone, so a user who sets a lower label by hand keeps it.

**Change & support**
- Microsoft's sources disagree on Mac support: the Office for Mac release notes list the feature under 16.113 while the Learn version table shows Not available for Outlook for Mac. Expect support questions until the table is updated, and test on the Mac build you deploy.
- Learn says that once a manual label is set, inheritance does not replace it; users who change a label and then add a more sensitive attachment may need guidance.

## Cost and licensing

Licence: the Microsoft Purview service description says that sensitivity labelling, including automatic or policy-based labelling, requires a Microsoft 365 E5 licence or Microsoft 365 Information Protection and Governance (IPG), and that administrators and users both need the appropriate licences. It lists Manual Sensitivity Labeling as included in Microsoft 365 E5, A5, G5, E3, A3, G3, F1, F3 and Business Premium, among other plans. The service description has no separate row for label inheritance from email attachments, so which of these levels covers this feature is not yet published.

Meter: no meter or price for this feature is published in the service description at the time of writing (November 2026). The roadmap item does not mention licensing.

Indirect cost: admin time to set the label policy and review label priority and encryption, and user communication for Mac users.

## Scope

- **Users and platform:** Outlook for Mac users who have the label policy published to them. The roadmap lists Mac only.
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.
- **Status:** Launched, General Availability, target September CY2026. The Office for Mac release notes list the feature under version 16.113.
- **Prerequisites from Learn:** sensitivity labels must be published to the user, and the label must be scoped to both files and emails. Learn says labels in Office apps need a subscription edition of Office; for Outlook for Mac, sensitivity labels are supported for on-premises mailboxes from version 16.112.
- **Roles:** Learn lists the Information Protection role groups (including Information Protection Admins), or a role group with the Sensitivity Label Administrator role, or the Compliance Data Administrator, Compliance Administrator or Security Administrator role groups, as able to create and configure labels and label policies.

## Governance guidance

### Before rollout
- Check which labels are published to Mac users and confirm each is scoped to both files and emails (Information Protection > Sensitivity labels), because Learn says that is required for inheritance.
- Review label priority order, since the highest priority label among the attachments is the one the email inherits.
- List the labels that apply encryption and decide whether recipients should receive the same encryption on an email, as Learn says it is applied by default.
- Test on a pilot Mac running the Outlook version you deploy, because the release notes and the Learn version table differ on Mac support.

### At rollout
- Select the inherit-label-from-attachments option in the label policy for a pilot group first (first controls row).
- Choose between automatic application and recommendation (second controls row); the recommend option prompts the user rather than applying the label.
- Tell Mac users that a manually chosen label is not replaced and that linked files are not read.

### After rollout
- Compare the labels on sent test emails with their attachments, including a case with an encrypted label and a case with a linked file.
- Watch Message center and the Learn capabilities table for Outlook for an update to the Mac entry.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an email inherits the highest priority label from its attachments</strong><br><small>Tenant</small><br><small class="controls__note">Set in a label policy, so it applies to the users and groups the policy is published to. Requires a role that can configure label policies.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › policy › Edit Policy › Default settings for emails › Inherit label from attachments › Email inherits highest priority label from attachments <a href="https://learn.microsoft.com/purview/sensitivity-labels-office-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity &lt;policy name&gt; -AdvancedSettings @{AttachmentAction=&quot;Automatic&quot;}</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the attachments' label is applied automatically or only recommended</strong><br><small>Tenant</small><br><small class="controls__note">Selectable only after the inherit option is selected. Without the recommend option the label is applied automatically, and users can still remove it or choose another label before sending.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › policy › Edit Policy › Default settings for emails › Inherit label from attachments › Recommend users apply the attachments label instead of automatically applying it <a href="https://learn.microsoft.com/purview/sensitivity-labels-office-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity &lt;policy name&gt; -AdvancedSettings @{AttachmentAction=&quot;Recommended&quot;}</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are label policy settings, so they apply to the users and groups the policy is published to; Learn says you select users and groups when you create the policy. The portal option and the PowerShell setting are two routes to the same policy setting.

In the portal, the checkbox is on the Default settings for emails page of the policy's Create policy configuration. Learn gives the PowerShell route as the AttachmentAction advanced setting, and says Set-LabelPolicy works only in Security & Compliance PowerShell.

Label scope (files and emails) is set on the label, not on the policy: Learn says the label must be scoped to both for inheritance. See the Learn page on scoping labels to files or emails for the label setting. Label priority is a label-level setting that decides which attachment label wins.

## Open questions

- Which Outlook for Mac versions support label inheritance from email attachments? The release notes list it under 16.113, while the Learn capabilities table shows Not available for Outlook for Mac. Watch the Learn page Minimum versions for sensitivity labels in Office apps.
- Does a label policy that already has the inherit option selected start to apply to Mac users after they update, or does Mac need a separate change? Watch Message center and the Learn page Manage sensitivity labels in Office apps.
- Which licence level covers label inheritance from email attachments: the Microsoft 365 E3 manual labelling row or the E5 and Information Protection and Governance statement? Watch the Microsoft Purview service description.
- Do the encryption cases that Learn lists for Windows, such as Double Key Encryption, behave the same in Outlook for Mac?

<!-- rationale
risk: Low. The feature only chooses among labels already published to the user, and the user can remove or change an automatically applied label before sending; the main exposure is encryption that the inherited label applies to the email.
cost: Low. The only cost the sources show is admin time to set the label policy. The Purview service description names no separate meter or price for this feature, and which licence level covers it is not stated.
impact: Medium. Outlook for Mac users in tenants that publish labels may see an email's label change when they attach labelled files, and recipients see any encryption the label applies.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing; Open questions; rationale: cost / absence: Which licence level covers attachment-label inheritance is not yet published. | Found: Sensitivity labeling, including automatic or policy-based labeling, requires a Microsoft 365 E5 license or Microsoft 365 Information Protection and Governance (IPG). | Fix: Replace the unpublished-licence-level sentence with: 'The service description requires Microsoft 365 E5 or Microsoft 365 Information Protection and Governance (IPG) for automatic or policy-based sensitivity labeling; it does not name attachment inheritance separately.' Remove the open question asking whether the E3 manual-labeling row covers this feature, and replace 'which licence level covers it is not stated' in the cost rationale with 'the service description gives an E5 or IPG requirement for automatic or policy-based labeling'. Retain the narrower statement that no separate attachment-inheritance licensing row is published. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / applicability: Email-label-based mail-flow, DLP and encryption controls can operate on the label inherited from attachments. | Found: Any mail-flow or DLP related controls that are tied to the email's label ... is applied based on the email's attachments. ... If the inherited label includes any advanced controls, such as label encryption, the email has these controls applied | Fix: Add https://learn.microsoft.com/compliance/anz/pspf-label-publishing#label-inheritance to sources for the existing mail-flow and DLP applicability statement. | Source: https://learn.microsoft.com/compliance/anz/pspf-label-publishing#label-inheritance
- [supported, minor] Risk assessment: Data exposure / behaviour: Recipients not authorized by an inherited label's encryption permissions may be unable to open the email. | Found: When a document, email, or meeting invite is encrypted, access to the content is restricted ... Can be decrypted only by users authorized by the label's encryption settings. | Fix: Add https://learn.microsoft.com/purview/encryption-sensitivity-labels to sources for the existing statement about recipients being unable to open encrypted emails. | Source: https://learn.microsoft.com/purview/encryption-sensitivity-labels
- [supported, minor] Governance guidance: Before rollout / admin-path: Information Protection > Sensitivity labels identifies the label list used to review label scopes. | Found: Sign in to the Microsoft Purview portal > Solutions > Information Protection > Sensitivity labels | Fix: Replace the parenthetical route with 'Microsoft Purview portal > Solutions > Information Protection > Sensitivity labels'. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks readers to review label publication, scopes, priority and encryption, but the controls table has no rows for those controls. | Found: Check which labels are published to Mac users and confirm each is scoped to both files and emails ... Review label priority order ... List the labels that apply encryption; table: only inheritance and recommendation. | Fix: The label-publication, label-scope, label-priority and encryption review steps have no corresponding control rows. Remove the first three Before rollout checklist bullets; do not add control rows.
-->
