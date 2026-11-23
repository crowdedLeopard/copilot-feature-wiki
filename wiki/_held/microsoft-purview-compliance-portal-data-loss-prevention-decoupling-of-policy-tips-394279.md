---
title: "Microsoft Purview DLP: set policy tips and email notifications separately for SharePoint and OneDrive rules (Worldwide)"
slug: "microsoft-purview-compliance-portal-data-loss-prevention-decoupling-of-policy-tips-394279"
roadmapId: 394279
topic: "governance"
products: ["Microsoft Purview"]
summary: "Admins can configure policy tips and email notifications independently in DLP rules for SharePoint and OneDrive. Worldwide item, launched. No admin action is needed unless you want to change how rules notify users."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "February CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Purview service description lists the licences that give users rights to DLP for Exchange Online, SharePoint Online and OneDrive for Business, for example Microsoft 365 E5/E3 and Office 365 E5/E3. A licence or price specific to this option is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","dlp","sharepoint","onedrive","powershell"]
sources:
  - title: "Microsoft 365 Roadmap item 394279"
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
related: ["microsoft-purview-compliance-portal-data-loss-prevention-decoupling-of-policy-tips-and-ema"]
controls:
  - governs: "Whether a SharePoint and OneDrive DLP rule shows a policy tip, sends an email notification, both or neither"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Create policy > Enterprise applications & devices > Custom > Customize advanced DLP rules > Create rule > User Notifications > Notify users in Office 365 services with a policy tip"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity <rule> -NotifyUserType Email,PolicyTip"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Per rule. The portal page documents the policy tip option while creating a rule, not the decoupled options. The reference lists NotSet, Email, PolicyTip and Email,PolicyTip as values; it does not tie them to this roadmap item."
  - governs: "Whether users can override a rule's block from Microsoft 365 services"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data loss prevention > Policies > Create policy > Enterprise applications & devices > Custom > Customize advanced DLP rules > Create rule > User overrides > Allow override from M365 services"
      docs: "https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external"
    api:
      kind: "powershell"
      call: "Set-DlpComplianceRule -Identity <rule> -NotifyAllowOverride WithJustification"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule"
    note: "Learn states overrides are enabled only when the policy tip option is enabled. Reference values: FalsePositive, WithAcknowledgement (Exchange only), WithoutJustification, WithJustification."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-08-17T22:52:47"
changes:
  - date: "2026-11-23"
    note: "First briefing for the Worldwide roadmap item 394279: separate policy tip and email notification settings in DLP rules for SharePoint and OneDrive."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 48 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 46
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "063e03af488ab6c6a56ac03abf4e771c"
---

## What's changing

Microsoft Purview Data Loss Prevention (DLP) rules for SharePoint and OneDrive can now treat policy tips and email notifications as separate choices. The roadmap item states that, as of its writing, enabling email notifications also required policy tips to be enabled, and the reverse. With the change, an admin can configure none of them, only policy tips, only email notifications, or both.

A policy tip, for a document in a OneDrive account or SharePoint site, is the warning icon that appears on the item. An email notification is the message sent to the people the rule names. Microsoft Learn describes both as options set for each rule in a DLP policy.

The roadmap record gives status Launched, a target of July CY2026 and a preview date of February CY2026. Release phases are General Availability and Preview, the platform is Web and the cloud is Worldwide (Standard Multi-Tenant). Microsoft lists the same feature under roadmap id 396575 for GCC, GCC High and DoD (Launched, target August CY2026); that item has its own page at /features/microsoft-purview-compliance-portal-data-loss-prevention-decoupling-of-policy-tips-and-ema/.

The Learn pages read for this briefing describe policy tips and email notifications as options for each rule but do not describe the decoupled combinations or say what the option looks like in the portal. What follows about the four combinations is the roadmap's description.

## Why it matters

Rule authors can now match the notification to the audience: a visible warning on the file without an email, or an email without a tip on the item. That matters for teams that wanted one but had to accept both, and for any rule where tips or emails were left on only to satisfy the pairing.

Microsoft has not stated whether existing rules change when the option arrives, and no source says they do. Treat it as a choice to review rather than a deadline, and check the rules that notify users before relying on a particular combination, because the Learn pages describe behaviours that depend on policy tips (see Risk assessment).

## Risk assessment

**Data exposure**
- No new data access is described. A rule set to notify by policy tip only sends no email; a rule set to email only sends a message to the recipients the rule names. Learn states that notification emails are sent unprotected, so keep sensitive detail out of custom email text and tokens.

**Security & identity**
- Learn states that user overrides are enabled only when **Notify users in Office 365 services with a policy tip** is enabled. If a rule moves to email notifications only, confirm whether users can still override it; the pages read do not say how overrides behave in the decoupled design.

**Autonomy & actions**
- Learn lists actions, user notifications and user overrides as separate parts of a rule, and the roadmap item describes only a change to notifications. Confirm in a pilot that a rule set to neither tip nor email still applies its configured actions.

**Change & support**
- Learn states that only new content triggers an email notification and that editing existing content triggers policy tips but not email notifications. A rule changed to email only could therefore give users no notice when an existing file is edited; confirm this against the decoupled behaviour in a pilot.
- Email notifications go only to individual recipients, not to groups or distribution lists, so plan which people or roles receive them.

## Cost and licensing

Licence: Microsoft's Purview service description lists the licences that give a user rights to Data Loss Prevention for Exchange Online, SharePoint Online and OneDrive for Business: Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2), Exchange Online Plan 2, Office 365 E5/A5/G5/E3/A3/G3, and the Microsoft Purview Suite and related suites. This option is a setting inside those DLP rules.

Meter: the pages read describe no meter for policy tips or email notifications. A licence or price specific to the decoupled option is not yet published.

Indirect cost is admin time to review rules and to retest what users see, plus any user communication if a rule stops showing tips.

## Scope

The roadmap item covers DLP rules for SharePoint and OneDrive in the Microsoft Purview compliance portal, on the web, in the Worldwide (Standard Multi-Tenant) cloud. GCC, GCC High and DoD are listed on the separate roadmap item 396575.

The account that creates and deploys DLP policies must be a member of one of the role groups listed on Learn's page for creating and deploying DLP policies. Users need one of the licences listed under Cost and licensing for DLP on these workloads.

## Governance guidance

### Before rollout
- List the DLP rules scoped to SharePoint sites and OneDrive accounts that notify users, and note whether each sends a policy tip, an email or both.
- Check which rules rely on user overrides, because Learn ties **Allow override from M365 services** to the policy tip option.
- Decide per rule which of the four combinations fits and who should receive email notifications, using individual recipients.

### At rollout
- Change the notification type on one pilot rule and confirm in the Microsoft Purview portal what users see on a matching file and whether the email arrives.
- Test an edit to an existing file as well as a new file, since Learn says only new content triggers an email notification.
- Review custom email and policy tip text separately, because Learn describes them as configured separately.

### After rollout
- Re-check that overrides still work where you expect them on rules that no longer show policy tips.
- Watch the Learn page and Message center for documentation of the decoupled options and update your rule standards when it appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a SharePoint and OneDrive DLP rule shows a policy tip, sends an email notification, both or neither</strong><br><small class="controls__note">Per rule. The portal page documents the policy tip option while creating a rule, not the decoupled options. The reference lists NotSet, Email, PolicyTip and Email,PolicyTip as values; it does not tie them to this roadmap item.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Create policy › Enterprise applications &amp; devices › Custom › Customize advanced DLP rules › Create rule › User Notifications › Notify users in Office 365 services with a policy tip <a href="https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &lt;rule&gt; -NotifyUserType Email,PolicyTip</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can override a rule's block from Microsoft 365 services</strong><br><small class="controls__note">Learn states overrides are enabled only when the policy tip option is enabled. Reference values: FalsePositive, WithAcknowledgement (Exchange only), WithoutJustification, WithJustification.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data loss prevention › Policies › Create policy › Enterprise applications &amp; devices › Custom › Customize advanced DLP rules › Create rule › User overrides › Allow override from M365 services <a href="https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-DlpComplianceRule -Identity &lt;rule&gt; -NotifyAllowOverride WithJustification</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-dlpcompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The notification controls are set per rule, so changing a policy's rules one at a time is the unit of work. The PowerShell reference describes the NotifyUserType parameter as the type of notification used for a rule and lists NotSet, Email, PolicyTip and Email,PolicyTip as values. Those values line up with the roadmap's four combinations, but the reference does not link them to this roadmap item.

User overrides are a separate section of the rule. Learn states they are enabled only when the policy tip option is enabled. Email notification recipients are individuals only. The role needed is a member of a role group listed on the create-and-deploy page.

## Open questions

- What happens to existing SharePoint and OneDrive rules when the option arrives: do rules that have both enabled keep both? Microsoft has not stated a default; watch the Learn page on email notifications and policy tips and Message center.
- How does the portal present the four combinations, and does the page for creating a rule document them? The pages read do not yet.
- Can users still override a rule that sends only email notifications, given that Learn ties overrides to the policy tip option?
- Does the NotifyUserType parameter in Set-DlpComplianceRule set the decoupled combinations, as the values suggest?

<!-- rationale
risk: Low. The roadmap describes a change to how a rule notifies users, and no source says existing rules change; the default is not stated, so this is rated on today's behaviour continuing.
cost: Low. The only cost the sources show is admin time to review rules; the roadmap item and Learn publish no separate licence or meter for this option.
impact: Low. DLP rule authors notice the new choices; end users notice only if an admin changes whether a rule shows a policy tip, sends an email, both or neither.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] summary; rationale: impact / default: No admin action is needed unless notification changes are wanted, and end users notice changes only if an admin changes a rule. | Found: Searched: '394279 decoupling existing rules default no admin action required'. Read the roadmap, dlp-use-notifications-and-policy-tips, dlp-policy-reference, dlp-create-deploy-policy and Set-DlpComplianceRule; none states the rollout effect on existing rules. | Fix: Replace the summary's final sentence with 'Microsoft has not stated what happens to existing rules; review notification choices before changing them.' Replace the impact rationale's final sentence with 'DLP rule authors have new notification choices; the effect on existing rules and their users is not stated.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Microsoft Purview portal path reaches the documented rule policy-tip setting. | Found: On the Define policy settings page, the Create or customize advanced DLP rules option should already be selected. Select Next. ... Set the User Notifications toggle to On. ... Select Notify users in Office 365 services with a policy tip | Fix: Expand both copies of the path to 'Data loss prevention > Policies > Create policy > Enterprise applications & devices > Categories: Custom > Regulations: Custom > Choose where to apply the policy: SharePoint sites and OneDrive accounts > Define policy settings > Customize advanced DLP rules > Create rule > User Notifications: On > Notify users in Office 365 services with a policy tip'. Keep the note that this documents the policy-tip setting, not all four portal combinations. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The printed Microsoft Purview portal path reaches the Allow override from M365 services setting. | Found: Set the User Notifications toggle to On. ... Select Notify users in Office 365 services with a policy tip ... Under User overrides, make sure that Allow override from M365 services is NOT selected. | Fix: Expand both copies of the path to 'Data loss prevention > Policies > Create policy > Enterprise applications & devices > Categories: Custom > Regulations: Custom > Choose where to apply the policy: SharePoint sites and OneDrive accounts > Define policy settings > Customize advanced DLP rules > Create rule > User overrides > Allow override from M365 services'. Retain the note that overrides require the policy-tip setting. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist's instruction to review custom email and policy-tip text has no corresponding text-customization control in the table. | Found: Checklist: 'Review custom email and policy tip text separately'. Table controls: notification type; whether users can override a rule's block. Neither row locates text customization. | Fix: Remove 'Review custom email and policy tip text separately, because Learn describes them as configured separately' from the checklist; neither existing table row documents text customization. Do not add a control row.
-->
