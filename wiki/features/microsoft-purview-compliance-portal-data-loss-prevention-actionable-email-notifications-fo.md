---
title: "Microsoft Purview DLP: actionable email notifications for OneDrive and SharePoint files"
slug: "microsoft-purview-compliance-portal-data-loss-prevention-actionable-email-notifications-fo"
roadmapId: 464996
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview DLP custom email notifications for OneDrive and SharePoint rules can carry action controls, so recipients can stop sharing, delete, label, override or report from the email. Admins choose the actions; Learn marks it preview."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: "December CY2024"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists the licences that give users rights to DLP for Exchange Online, SharePoint Online and OneDrive for Business, including Microsoft 365 E3 and E5. Nothing specific to actionable notifications is published."
audiences: ["compliance","security","m365-admin","end-user"]
tags: ["dlp","purview","onedrive","sharepoint","auditing","sensitivity-labels"]
sources:
  - title: "Send email notifications and show policy tips for DLP policies"
    url: "https://learn.microsoft.com/purview/dlp-use-notifications-and-policy-tips"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Help prevent sharing sensitive items via SharePoint and OneDrive with external users"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 464996"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=464996"
    kind: "roadmap"
videos: []
related: ["microsoft-purview-compliance-portal-data-loss-prevention-decoupling-of-policy-tips-and-ema","auditing","microsoft-purview-data-security-triage-agent-sensitive-data-remediation-through-microsoft","sensitivity-labels"]
controls:
  - governs: "Custom end-user email notification of a DLP rule, the template the actions are added to"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Create policy > Enterprise applications & devices > Custom > Custom > Create or customize advanced DLP rules > Create rule > User Notifications"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity <rule> -NotifyEmailCustomText <text>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Preview and edit notification email opens the template. The cmdlet sets the email text; the reference lists a remediation-actions parameter without describing it."
  - governs: "Audit records of the actions users take from the email"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Needs the Audit Logs or View-Only Audit Logs role. Learn names record types SharepointFileOperation and ComplianceDLPSharePoint (operation DLPInfo) for these actions."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-14T21:56:10"
changes:
  - date: "2026-11-23"
    note: "New briefing on DLP email notifications that carry remediation actions for OneDrive and SharePoint files."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 83 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 82
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "e7396be8be7ef62b2ddd8a34e75db43d"
---

## What's changing

Microsoft Purview Data Loss Prevention (DLP) custom email notifications can now include action controls for files on OneDrive and SharePoint. An admin adds the controls to the customised notification, and the person who receives the email can then respond to the policy match from the mailbox instead of opening the file location first.

Microsoft Learn lists six controls: **Stop sharing file** (removes any sharing access and links on the file), **Delete file**, **Apply sensitivity or retention label on the file** (opens the OneDrive or SharePoint folder or site where the file is located so the user can apply the label), **Override the policy** (requires a business justification), **Report false positive** and **Report unable to take action** (both require a justification and notify the admin via the audit log). The same page says that if you add actions, only markdown can be used to format the email body.

The notification itself is the existing custom email notification, which Learn says is available for policies scoped to the Exchange, SharePoint and OneDrive locations. The page also says email notifications go only to individual recipients, not groups or distribution lists, that only new content triggers an email notification, and that notification emails are sent unprotected.

The roadmap item (464996) has status Launched, release phases General Availability and Preview, a preview date of December CY2024 and a target date of December CY2025, for Worldwide (Standard Multi-Tenant) on the web. The roadmap says the feature is currently available only for OneDrive and SharePoint workloads. At the time of writing (November 2026) the Learn section for actionable email notifications still carries a note that it is in preview, so treat its behaviour as preview documentation.

## Why it matters

This moves part of DLP remediation from the compliance team to the file owner. A person who gets a notification can remove sharing or delete the file from the email, which can shorten the time a shared file stays exposed. It also lets that person override the policy or report a false positive with a justification, so expect more override and false-positive records for your team to review.

Nothing reaches users until an admin selects the actions: Learn says to select them when you configure the email notification. If nobody acts, existing notification emails keep their current content. The decision for a service owner is whether to add the actions, to which rules, and who reads the audit records that follow.

## Risk assessment

**Data exposure**
- **Delete file** and **Stop sharing file** change the file itself, from the email. A rule that matches broadly and notifies a wide set of recipients can lead to files being deleted or unshared by the people who receive the notification. Limit the actions to rules where that outcome is intended.
- Learn says notification emails are sent unprotected. Learn also says external senders receive only a templatised notification without full details, which limits what the email reveals about the policy configuration.

**Security & identity**
- **Override the policy** removes the policy's effect for the item after the recipient gives a business justification. The page does not describe an approval step, so treat each override as a decision to review through the audit log.
- Recipients can include the owner of the content, the person who last modified it, the owner of the site, or a specific user. Choose recipients with that in mind, because each can be given the actions.

**Autonomy & actions**
- The actions are taken by the person who selects them in the email. Learn does not describe an automated action on the user's behalf.
- **Apply sensitivity or retention label on the file** only opens the folder or site where the file is located so the user can apply the label; the label is not applied from the email itself.

**Change & support**
- Actions are recorded in the unified audit log, so reviewers must know where to look (see the controls table). Expect questions from users about why the email format changed, because only markdown can format the body once actions are added.
- The Learn section is marked preview, so details can change.

## Cost and licensing

The Learn page for actionable email notifications names no licence and no meter. DLP for Exchange Online, SharePoint Online and OneDrive for Business is covered by the [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description), which lists these licences as giving users rights to the service: Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2), Exchange Online Plan 2, Office 365 E5/A5/G5/E3/A3/G3, and Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW.

Because the feature is an option inside DLP custom email notifications, that is the requirement to plan around. A licence or price specific to actionable notifications is not yet published. The indirect cost is admin time to edit rules and review audit records.

## Scope

The feature applies to DLP rules that cover OneDrive and SharePoint locations; the roadmap says it is currently available only for those workloads. The roadmap lists Worldwide (Standard Multi-Tenant) and the web platform.

The actions are added per rule, in the custom email notification. The notification recipients are chosen in the rule: the owner of the content, the person who last modified it, the owner of the site, or a specific user, as individual recipients rather than groups. Learn says the account that creates and deploys policies must be in one of the Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator role groups.

## Governance guidance

### Before rollout
- List the DLP rules scoped to SharePoint sites and OneDrive accounts and decide which of them should get any of the six actions, starting with **Stop sharing file** and **Report false positive** if you want the lower-impact choices.
- Confirm who creates and deploys policies: Learn lists the Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin and Security administrator role groups.
- Assign someone with the Audit Logs or View-Only Audit Logs role to review the resulting records.

### At rollout
- Edit the custom email notification of the chosen rule and select the actions to include (Microsoft Purview portal, **Preview and edit notification email**).
- Rewrite the email body in markdown, because Learn says only markdown mode can be used when actions are added.
- Check the recipient setting of the rule, so only the people who should be able to act receive the actions.

### After rollout
- Search the audit log for the SharepointFileOperation record type (delete, stop share, apply label) and for DLPInfo operations under ComplianceDLPSharePoint (override, false positive, unable to take action).
- Review the justifications given for overrides and false positives and tune the rule's conditions where the same match recurs.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Custom end-user email notification of a DLP rule, the template the actions are added to</strong><br><small class="controls__note">Preview and edit notification email opens the template. The cmdlet sets the email text; the reference lists a remediation-actions parameter without describing it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Create policy › Enterprise applications &amp; devices › Custom › Custom › Create or customize advanced DLP rules › Create rule › User Notifications <a href="https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &lt;rule&gt; -NotifyEmailCustomText &lt;text&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Audit records of the actions users take from the email</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs or View-Only Audit Logs role. Learn names record types SharepointFileOperation and ComplianceDLPSharePoint (operation DLPInfo) for these actions.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The actions are chosen per rule inside the custom email notification; no separate tenant-wide switch is described on the Learn page. The PowerShell row covers the custom email text of the rule. The Set-DlpComplianceRule reference also lists a -NotifyEmailOnedriveRemediationActions parameter whose description is an unfilled placeholder, so confirm before scripting whether it sets the actions.

Creating and deploying policies needs one of the role groups listed in the scope section. Searching the audit log needs the Audit Logs or View-Only Audit Logs role. Report false positive, Report unable to take action and Override are the actions that notify or record through the audit log, according to Learn.

## Open questions

- Which licence, if any, applies specifically to actionable email notifications, beyond the DLP licences on the Purview service description? Watch the service description and the DLP notifications page.
- How does the email action identify the person who selects it, and can a forwarded or shared email be used by someone other than the intended recipient? The Learn page does not describe this.
- Does the -NotifyEmailOnedriveRemediationActions parameter in Set-DlpComplianceRule set these actions, and what values does it accept? The reference page currently has no description for it.
- When will the Learn page drop its preview note, given the roadmap item shows status Launched with release phases General Availability and Preview?

<!-- rationale
risk: Medium. Once an admin adds the actions, a recipient can delete a file, stop its sharing or override the policy from the email; the page says these actions are written to the audit log, and the admin chooses which actions to include.
cost: Low. The Learn page for the feature names no licence or meter, so the known cost is admin time; DLP for SharePoint and OneDrive already needs the licences on the Purview service description. Nothing specific to this feature is published.
impact: Medium. Users who receive DLP notification emails for SharePoint or OneDrive rules see new action controls, and the compliance team sees the resulting audit records and false-positive reports.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: table / admin-path: The printed Microsoft Purview portal creation path reaches a rule's User Notifications control. | Found: On the Define policy settings page, the Create or customize advanced DLP rules option should already be selected. Select Next. On the Customize advanced DLP rules page, select + Create rule. Set the User Notifications toggle to On. | Fix: In both copies, use 'Data loss prevention > Policies > Create policy > Enterprise applications & devices > Custom > Custom > Define policy settings > Create or customize advanced DLP rules > Customize advanced DLP rules > Create rule > User Notifications'. This restores the named wizard headings at https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external; omitted selections of administrative scope and policy locations are permitted scope-selection omissions. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external
- [contradicted, minor] front matter: risk; rationale: risk / consistency: Medium risk is assigned on the basis of actions users can take after an administrator enables them. | Found: risk: "medium"; defaultState: "admin-opt-in"; rationale: "Medium. Once an admin adds the actions, a recipient can delete a file, stop its sharing or override the policy from the email"; Why it matters: "Nothing reaches users until an admin selects the actions". | Fix: Set risk to 'low' and replace its rationale with 'Low. Actionable notifications reach users only after an administrator selects the actions in the email configuration; leaving this new option unconfigured adds no remediation actions.' The assessment scale rates the change before administrator action and explicitly places admin-opt-in changes in low risk.
-->
