---
title: "Microsoft Purview DLP: set policy tips and email notifications separately for SharePoint and OneDrive rules (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-data-loss-prevention-decoupling-of-policy-tips-and-ema"
roadmapId: 396575
topic: "governance"
products: ["Microsoft Purview"]
summary: "Per the roadmap, Purview DLP rules for SharePoint and OneDrive in GCC, GCC High and DoD can use policy tips, email notifications, both or neither. Launched. Learn lists -NotifyUserType values for this. Review your rules."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists the licences that give users rights to DLP for Exchange Online, SharePoint Online and OneDrive for Business, such as Microsoft 365 E5/A5/G5/E3/A3/G3 and Office 365 E5/A5/G5/E3/A3/G3. A separate licence or meter for this change is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","sharepoint","onedrive","admin-controls","powershell","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 396575"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=396575"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap 394279"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=394279"
    kind: "roadmap"
  - title: "Send email notifications and show policy tips for DLP policies"
    url: "https://learn.microsoft.com/purview/dlp-use-notifications-and-policy-tips"
    kind: "learn"
  - title: "Data Loss Prevention policy reference"
    url: "https://learn.microsoft.com/purview/dlp-policy-reference"
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
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Notification type of a DLP rule for SharePoint and OneDrive (policy tip, email, both or neither)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Categories: Custom > Regulations: Custom > Define policy settings > Customize advanced DLP rules > + Create rule > User Notifications"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity <rule name or GUID> -NotifyUserType Email,PolicyTip"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Set per rule. Security & Compliance PowerShell only. The path is the creation walkthrough, which shows the combined policy-tip option, not four separate choices; it does not describe editing an existing rule."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-21"
    note: "New briefing for the GCC, GCC High and DoD roadmap item on separate policy tips and email notifications in Purview DLP rules for SharePoint and OneDrive."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 57 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Correction: replaced the claim that Learn does not describe the options with the documented -NotifyUserType values, qualified the impact rating, expanded the portal path and removed three checklist steps with no control row."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 50 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 48
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "a8dd10d9739430de7d2aa171b3f465a0"
---

## What's changing

The roadmap item describes decoupling policy tips from email notifications when an admin configures Microsoft Purview Data Loss Prevention (DLP) rules for SharePoint and OneDrive. The record says that today, enabling email notifications also requires policy tips to be enabled, and the reverse. With the change, an admin can choose none, only policy tips, only email notifications, or both.

Learn documents `-NotifyUserType` values NotSet, Email, PolicyTip and Email,PolicyTip. The SharePoint and OneDrive creation walkthrough still shows the combined policy-tip option and does not describe cloud-specific decoupled portal labels. Learn also documents the existing pieces. A rule can notify people by email and show a policy tip, and on OneDrive and SharePoint a policy tip appears as an icon on the document. The SharePoint and OneDrive walkthrough still has the admin select **Notify users in Office 365 services with a policy tip** and then choose who is notified, and the DLP policy reference says user overrides are enabled only when that option is enabled.

This page covers roadmap item 396575: status Launched, target date August CY2026, General Availability, Web, for GCC, GCC High and DoD. Microsoft lists the same feature under roadmap item 394279 for Worldwide (Standard Multi-Tenant), also Launched, with a preview date of February CY2026 and a target date of July CY2026. Microsoft has not stated what happens to existing rules on arrival.

## Why it matters

Until now, per the roadmap record, an admin who wanted only an email to the content owner also had to accept a policy tip on the file, and the reverse. Separating the two lets a DLP owner match the notification to the audience. That changes how much users see and how much mail the rules generate.

Because Microsoft has not stated whether existing rules change on arrival, treat this as a control to review rather than a change that reaches users by itself. The practical task is to find which SharePoint and OneDrive rules rely on notifications, decide per rule which of the four combinations fits, and test the effect on overrides and on what users see before editing production rules.

## Risk assessment

**Data exposure**
- Email-only rules send the notification outside the file's context. Learn notes that notification emails are sent unprotected, and a custom email body can carry tokens such as %%MatchedConditions%%. Keep custom text free of anything you would not put in unprotected email.
- Only new content triggers an email notification; editing existing content triggers policy tips but not emails. A rule set to email only therefore says nothing to users who edit an existing file, which Learn says a policy tip would have covered.

**Security & identity**
- User overrides are the main dependency to test. The DLP policy reference says user overrides are enabled only when the policy-tip option is enabled, and the policy-creation page says that for SharePoint and Exchange, overrides are configured in the user notification section. Turn policy tips off on a block-with-override rule and users may lose the override route; confirm in simulation first.

**Autonomy & actions**
- No change described: the item concerns notification options, not the conditions or block actions of a rule. Confirm that blocking behaviour is unchanged when you switch a rule's notification type.

**Change & support**
- Learn describes the warning and blocked icons as appearing on documents when a rule uses policy tips. If you turn tips off on a rule that blocks access, users may find a file blocked with no icon explaining why. Expect help-desk questions and brief your service desk before changing blocking rules.
- Email notifications go only to individual recipients, not to groups or distribution lists, so an email-only rule needs named recipients or the file's owner, last modifier or site owner.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists which licences give a user rights to DLP for Exchange Online, SharePoint Online and OneDrive for Business: Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2), Exchange Online Plan 2, Office 365 E5/A5/G5/E3/A3/G3, and the Microsoft Purview Suite options. The roadmap record names no separate licence for this change, and a separate licence or meter for it is not yet published.

**Meter and indirect cost.** Learn publishes no meter for DLP notifications. The known cost is admin time to audit rules, test the four combinations and brief users and the service desk. Email-only rules may raise mail volume; Learn publishes no figure for it.

## Scope

The roadmap record lists GCC, GCC High and DoD, the Web platform and General Availability. It describes rules for DLP on SharePoint and OneDrive. The Worldwide (Standard Multi-Tenant) cloud is listed under the separate roadmap item 394279.

The account that creates and deploys DLP policies must be a member of one of the role groups listed on the Learn page for creating and deploying DLP policies. Learn lists the Microsoft Purview portal as where the policy is created. The rollout mechanics and the default state are not stated.

## Governance guidance

### Before rollout
- Inventory the DLP rules that cover SharePoint sites and OneDrive accounts and have **User Notifications** switched on, and record for each whether it relies on a policy tip, an email, or both (control: notification type of a DLP rule).
- Decide per rule which of the four combinations fits, using the fact that emails fire only for new content while policy tips also appear on edits.
- Confirm with Microsoft's Learn pages or a test policy which options your GCC, GCC High or DoD tenant shows, because the Learn walkthrough does not describe cloud-specific decoupled portal labels.

### At rollout
- Brief the service desk on what a user will and will not see once a rule has policy tips off.

### After rollout
- Check that rules which block with override still offer the override to users after the notification type changes.
- Review alert volume and user feedback from the rules you changed before changing further rules.
- Re-read the Learn pages for DLP notifications and the Message center for the documentation of the decoupled options, and update your rule standards.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Notification type of a DLP rule for SharePoint and OneDrive (policy tip, email, both or neither)</strong><br><small>Tenant</small><br><small class="controls__note">Set per rule. Security &amp; Compliance PowerShell only. The path is the creation walkthrough, which shows the combined policy-tip option, not four separate choices; it does not describe editing an existing rule.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › + Create policy › Enterprise applications &amp; devices › Categories: Custom › Regulations: Custom › Define policy settings › Customize advanced DLP rules › + Create rule › User Notifications <a href="https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &lt;rule name or GUID&gt; -NotifyUserType Email,PolicyTip</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The notification type is set per rule, so each SharePoint or OneDrive rule needs its own review. Creating or editing a policy requires membership of one of the role groups on the Learn page for creating and deploying DLP policies.

The portal path above is the route the SharePoint and OneDrive walkthrough takes to the **User Notifications** section of a rule. That walkthrough still shows the policy-tip option as the way to choose who is notified, and it does not describe cloud-specific decoupled portal labels.

The `Set-DlpComplianceRule` reference lists `-NotifyUserType` as the parameter that specifies the type of notification used for the rule, with the values `NotSet`, `Email`, `PolicyTip` and `Email,PolicyTip`. It is available only in Security & Compliance PowerShell.

## Open questions

- Does the decoupled configuration change existing SharePoint and OneDrive rules on arrival, and is anything required from admins? Watch the Message center and the Learn page on DLP notifications.
- Do user overrides still require the policy-tip option once a rule can have policy tips off? The DLP policy reference currently says they are enabled only with it.
- What do users see on a file that a rule blocks when policy tips are off for that rule?
- Which portal labels and which `-NotifyUserType` values set each of the four combinations in GCC, GCC High and DoD, and do they differ from the Worldwide tenant listed under roadmap item 394279?

<!-- rationale
risk: Low. The item changes only how a DLP rule notifies people, and no source says existing rules change on arrival. The default is not stated, so this is rated on today's behaviour continuing.
cost: Low. The Microsoft Purview service description lists the licences that cover DLP for SharePoint and OneDrive and publishes no separate licence or meter for this change; the known cost is admin time to review rules.
impact: Low. DLP admins notice first. Microsoft has not stated what happens to existing rules on arrival; this rating assumes today's notification behaviour continues.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table and prose / admin-path: The printed Microsoft Purview portal creation route reaches User Notifications in a SharePoint and OneDrive DLP rule. | Found: Select Custom from both the Categories list and the Regulations list. On the Define policy settings page, the Create or customize advanced DLP rules option should already be selected. Set the User Notifications toggle to On. | Fix: Use this fuller route in both copies of the table: 'Data loss prevention > Policies > + Create policy > Enterprise applications & devices > Categories: Custom > Regulations: Custom > Assign admin units > Choose where to apply the policy > SharePoint sites > OneDrive accounts > Define policy settings > Create or customize advanced DLP rules > Customize advanced DLP rules > + Create rule > User Notifications'. The category and regulation selections are documented despite the automatic word check; the omitted scope steps and already-selected advanced-rules option are not blockers. Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external
- [supported, minor] Governance controls / role: The listed administrative role groups provide permissions to edit DLP policies. | Found: Information Protection Admin | Create, edit, and delete DLP policies, sensitivity labels and their policies, and all classifier types. DLP Compliance Management | View and edit settings and reports for data loss prevention (DLP) policies. | Fix: Cite https://learn.microsoft.com/defender-office-365/scc-permissions for the editing-permissions statement; the creation page already cited explicitly states creation and deployment permissions, while the role reference states editing permissions. | Source: https://learn.microsoft.com/defender-office-365/scc-permissions
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist tells readers to check the user-override control, but the controls table contains only notification type. | Found: Check that rules which block with override still offer the override to users after the notification type changes. Table control: Notification type of a DLP rule for SharePoint and OneDrive (policy tip, email, both or neither). | Fix: Remove the After rollout bullet 'Check that rules which block with override still offer the override to users after the notification type changes.' It names an override control without a corresponding table row; the existing prose already explains the dependency.
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist tells readers to review alerts, but the controls table has no alert-monitoring row. | Found: Review alert volume and user feedback from the rules you changed before changing further rules. Table control: Notification type of a DLP rule for SharePoint and OneDrive (policy tip, email, both or neither). | Fix: Replace that After rollout bullet with 'Review user feedback from the rules you changed before changing further rules.' This removes the alert-control instruction that has no corresponding table row.
-->
