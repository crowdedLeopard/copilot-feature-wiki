---
title: "Microsoft Purview DLP: remediation actions inside email notifications"
slug: "microsoft-purview-data-loss-prevention-actionable-email-notifications-for-enhanced-inciden"
roadmapId: 527831
topic: "governance"
products: ["Microsoft Purview"]
summary: "Admins can add action buttons to Purview DLP notification emails so users fix OneDrive and SharePoint policy matches from their mailbox. Admins choose the actions per rule; nothing is described as changing until they do."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Purview service description lists the licences that give users DLP for Exchange Online, SharePoint Online and OneDrive for Business, such as Microsoft 365 E3 and E5. A licence or price specific to actionable notifications is not yet published."
audiences: ["compliance","security","m365-admin","end-user"]
tags: ["dlp","purview","onedrive","sharepoint","sensitivity-labels","auditing","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 527831"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=527831"
    kind: "roadmap"
  - title: "Send email notifications and show policy tips for DLP policies"
    url: "https://learn.microsoft.com/purview/dlp-use-notifications-and-policy-tips"
    kind: "learn"
  - title: "Help prevent sharing sensitive items via SharePoint and OneDrive with external users"
    url: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external"
    kind: "learn"
  - title: "Create and deploy data loss prevention policies"
    url: "https://learn.microsoft.com/purview/dlp-create-deploy-policy"
    kind: "learn"
  - title: "Set-DlpComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-data-loss-prevention-decoupling-of-policy-tips-and-ema","auditing","sensitivity-labels"]
controls:
  - governs: "Which remediation actions a DLP rule's email notification offers to users"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Custom (Categories) > Custom (Regulations) > Create or customize advanced DLP rules > + Create rule > User Notifications"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external"
    api: null
    note: "Actions are added where the email notification is configured (Preview and edit notification email). The Set-DlpComplianceRule reference lists -NotifyEmailOnedriveRemediationActions without explaining what it sets."
  - governs: "Audit records of actions users take from notification emails"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Read-only monitoring, not a control over the actions. Run the cmdlet in Exchange Online PowerShell; needs the Audit Logs or View-Only Audit Logs roles."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-14T21:56:10"
changes:
  - date: "2026-11-23"
    note: "New briefing: DLP notification emails can carry remediation actions; roadmap says Launched while Learn still marks the feature as preview."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 55 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Correction: fixed the policy-creation path, removed the unverified PowerShell parameter and the external-recipient claim, dropped the audit-ingestion checklist step and lowered risk to low."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 59
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "6c34c540c888e7d3c1f82833e4c228c9"
---

## What's changing

Microsoft Purview Data Loss Prevention (DLP) email notifications can now carry remediation actions. The roadmap item states that end users can act on OneDrive and SharePoint files that caused a policy match directly from their mailbox, without opening the file's location first.

On Microsoft Learn, the actions are called controls that an admin adds to a customised email notification. They are selected when the email notification is configured. The page lists six: **Stop sharing file** (removes any sharing access and links on the file), **Delete file**, **Apply sensitivity or retention label on the file** (opens the OneDrive or SharePoint location so the user can apply the label), **Override the policy** (requires a business justification), **Report false positive** and **Report unable to take action** (both require a justification and notify the admin through the audit log). If actions are added, the email body can be formatted only with markdown. Custom notification templates are available for policies scoped to the Exchange, SharePoint and OneDrive locations; the actions are described for the OneDrive and SharePoint workloads.

The roadmap record shows status Launched, release phase General Availability, a target of January CY2026, platform Web and clouds GCC, GCC High and DoD. The Learn page, at the time of writing (November 2026), still marks actionable email notifications for OneDrive and SharePoint as in preview. The two sources differ, and this briefing reports both.

## Why it matters

This moves the first step of remediation into the inbox. A user who gets a DLP notification can remove sharing, delete the file, ask for a label or justify an override without waiting for the compliance team, which can reduce the follow-up work that DLP alerts create. It also puts destructive and policy-weakening choices behind a button in an email, so rule design matters more.

Learn describes the actions as something an admin selects in the email notification, so no source says existing notification emails change until a rule is edited. The decisions to take are which rules get actions, who receives those emails, and who watches the resulting audit records.

## Risk assessment

**Data exposure**
- Notification emails are sent unprotected, per the Learn page, and the body can include tokens such as %%Filename%% and %%MatchedSITAndSurroundingcontext%% (the matched sensitive information types and redacted values). Keep the body free of matched values you would not want in a mailbox.
- Recipients are chosen per rule: the content owner, the person who last modified it, the site owner or a specific user, and only individuals, not groups. Confirm who actually receives the action buttons for each rule.
- External senders receive a templated notification without full details.

**Security & identity**
- **Override the policy** from email requires a business justification. Whether the action depends on the rule allowing overrides is a question to confirm before enabling it on a blocking rule.
- **Stop sharing file** removes any sharing access and links on the file, so a mistaken click cuts off legitimate collaborators.

**Autonomy & actions**
- **Delete file** deletes the file. Nothing in the page describes how to recover it, so test this on a pilot rule first.
- **Apply label** opens the file's location and does not apply a label itself.
- No agent or automation is described; each action follows a person's click.

**Change & support**
- Learn states that only new content triggers an email notification; editing existing content triggers policy tips, not emails. Users will not get action buttons for edits.
- The Learn preview label and the roadmap's Launched status disagree, so expect support questions about behaviour and confirm it on a pilot first.
- Override, false-positive and unable-to-act reports are logged for admins, so someone must own that queue.

## Cost and licensing

The Learn page for actionable email notifications names no licence and no meter. The Microsoft Purview service description says users benefit from DLP for Exchange Online, SharePoint Online and OneDrive for Business under licences that include Microsoft 365 E5, A5, G5, E3, A3 and G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2), Exchange Online Plan 2, Office 365 E5, A5, G5, E3, A3 and G3, and the Microsoft Purview Suite. Read it for the exact list for your plan.

A licence, price or meter specific to actionable notifications is not yet published. The indirect costs are admin time to rewrite notification templates in markdown, user communication about what each action does, and review time for the audit records the actions create.

## Scope

**Who sees it:** the recipients of DLP notification emails from rules that an admin has configured with actions. Recipients are individuals chosen per rule.

**Locations:** the actions apply to files on OneDrive and SharePoint that caused a policy match. Custom notification templates exist for Exchange, SharePoint and OneDrive rules.

**Clouds and platform:** the roadmap record lists GCC, GCC High and DoD and the platform Web. The Learn page names no cloud.

**Roles:** the account that creates and deploys DLP policies must be in one of the Compliance administrator, Compliance data administrator, Information Protection, Information Protection Admin or Security administrator role groups.

**Rollout:** the roadmap target is January CY2026 with status Launched; Learn marks the feature as preview at the time of writing.

## Governance guidance

### Before rollout
- Choose the DLP rules whose notification emails should carry actions, and which of the six actions each rule needs.
- Decide who receives the emails per rule: the content owner, last modifier, site owner or a named user, as individuals and not groups.
- Check that the people editing rules hold one of the role groups listed in Scope.

### At rollout
- Rewrite the email body in markdown, which is the only formatting allowed once actions are added.
- Add the actions in the rule's email notification and pilot them on one rule first.
- Tell recipients what **Stop sharing file** and **Delete file** do before the first email arrives.

### After rollout
- Search the audit log for the DLPInfo operation and the ComplianceDLPSharePoint and SharepointFileOperation record types to see which actions users took.
- Review override, false-positive and unable-to-act justifications and tune the rule where they show a pattern.
- Re-read the Learn page for the end of the preview label and for any cloud-specific notes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which remediation actions a DLP rule's email notification offers to users</strong><br><small class="controls__note">Actions are added where the email notification is configured (Preview and edit notification email). The Set-DlpComplianceRule reference lists -NotifyEmailOnedriveRemediationActions without explaining what it sets.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Enterprise applications &amp; devices › Custom (Categories) › Custom (Regulations) › Create or customize advanced DLP rules › + Create rule › User Notifications <a href="https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit records of actions users take from notification emails</strong><br><small>Tenant</small><br><small class="controls__note">Read-only monitoring, not a control over the actions. Run the cmdlet in Exchange Online PowerShell; needs the Audit Logs or View-Only Audit Logs roles.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Learn page says to select the actions when configuring the email notification, and gives no further navigation for them, so the path above ends at the rule's user notification settings, where **Preview and edit notification email** appears. Existing rules are reached by editing the rule, which the page describes as where **Preview and edit notification email** appears. The Set-DlpComplianceRule reference lists a -NotifyEmailOnedriveRemediationActions parameter without explaining what it sets, so this briefing does not present it as automation for these actions.

The audit row only reads records. It does not restrict or reverse an action. Audit search requires the Audit Logs or View-Only Audit Logs roles in the Microsoft Purview portal.

## Open questions

- Does the Learn preview label for actionable email notifications still apply now that the roadmap lists the item as Launched? Watch the Learn page on DLP notifications.
- Which GCC, GCC High and DoD environments have the actions today, given that the Learn page names no cloud?
- Can anyone who receives the email use the buttons, and does Override the policy require the rule to allow overrides? Watch the same Learn page.
- What does the -NotifyEmailOnedriveRemediationActions parameter in the Set-DlpComplianceRule reference set, and does it correspond to these actions?
- Is a deleted file recoverable after Delete file, and is a feature-specific licence published? Watch the Learn page and Microsoft's Purview service description.

<!-- rationale
risk: Low. The remediation actions are unavailable until an admin selects them in the notification configuration. Before opting in, review destructive actions and recipients because notification emails are sent unprotected.
cost: Low. The Learn page names no licence or meter for these notifications; the cost known is admin time, on top of the Microsoft Purview DLP licence the tenant already needs. A feature-specific licence is not yet published.
impact: Medium. Only people who receive DLP notification emails for OneDrive and SharePoint rule matches see the actions, and only where an admin has added them to the email.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Purview route through Data loss prevention, Policies, custom policy creation and advanced rules ends at User Notifications. | Found: Select Data loss prevention > Policies > + Create policy. ... Select Enterprise applications & devices. ... Select Custom from both the Categories list and the Regulations list. ... select + Create rule. ... Set the User Notifications toggle to On. | Fix: Use 'Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Custom (Categories) > Custom (Regulations) > Assign admin units > Choose where to apply the policy > Define policy settings > Create or customize advanced DLP rules > Customize advanced DLP rules > + Create rule > User Notifications > Preview and edit notification email'. The creation steps are at https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external and the final step at the already-cited https://learn.microsoft.com/purview/dlp-use-notifications-and-policy-tips. Retain the note that actions are selected in the email configuration. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells administrators to decide notification recipients, but no controls row governs recipient selection. | Found: Decide who receives the emails per rule ...; table rows: Which remediation actions a DLP rule's email notification offers to users; Audit records of actions users take from notification emails. | Fix: Remove the Before rollout checklist bullet 'Decide who receives the emails per rule: the content owner, last modifier, site owner or a named user, as individuals and not groups.' Recipient configuration has no corresponding controls row; retain the supported recipient facts in Scope and Risk assessment.
-->
