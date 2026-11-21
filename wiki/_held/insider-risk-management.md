---
kind: "concept"
title: "Microsoft Purview Insider Risk Management: what does it detect, who sees it and what does it cost?"
slug: "insider-risk-management"
summary: "Microsoft Purview Insider Risk Management scores user activity against policies you write and raises alerts for analysts. Administrators use it to decide what is detected, who can see it and which indicators incur pay-as-you-go charges."
created: "2026-11-21"
updated: "2026-11-21"
version: 1
tags: ["insider-risk-management","adaptive-protection","auditing","administrative-units","communication-compliance","defender-xdr","privacy","pay-as-you-go"]
covers: []
sources:
  - title: "Learn about Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management"
    kind: "learn"
  - title: "Get started with Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    kind: "learn"
  - title: "Assign permissions in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    kind: "learn"
  - title: "Plan for Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-plan"
    kind: "learn"
  - title: "Create and manage Insider Risk Management policies"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policies"
    kind: "learn"
  - title: "Learn about Insider Risk Management settings"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings"
    kind: "learn"
  - title: "Manage username privacy in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-privacy"
    kind: "learn"
  - title: "Share Insider Risk Management data with other solutions"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-share-data"
    kind: "learn"
  - title: "Review activities with the Insider Risk Management audit log"
    url: "https://learn.microsoft.com/purview/insider-risk-management-audit-log"
    kind: "learn"
  - title: "Help dynamically mitigate risks with Adaptive Protection"
    url: "https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Configure policy indicators in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    kind: "learn"
  - title: "Set up global exclusions for Insider Risk Management policies"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions"
    kind: "learn"
  - title: "Learn about Insider Risk Management policy templates"
    url: "https://learn.microsoft.com/purview/insider-risk-management-policy-templates"
    kind: "learn"
  - title: "Limits in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-limits"
    kind: "learn"
related: ["auditing","ediscovery","endpoint-dlp","retention","microsoft-purview-insider-risk-management-unified-alert-queue","microsoft-purview-insider-risk-management-irm-alerts-in-xdr","microsoft-purview-insider-risk-management-insider-risk-management-for-agents"]
controls:
  - governs: "Which users, templates and indicators a policy detects on"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Policies > Create policy > Policy template"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    api: null
    note: "Role: Insider Risk Management or Insider Risk Management Admins role group. Quick policies need an unrestricted administrator."
  - governs: "Which risk indicators policies can score"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Settings > Policy indicators"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    api: null
    note: "Some indicators are available only with pay-as-you-go billing."
  - governs: "Which generative AI apps the indicators monitor"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Settings > Policy indicators > Generative AI apps indicators > Choose apps to monitor"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators"
    api: null
    note: "For Microsoft Copilot experiences and Enterprise AI apps only. A deselected app's signals are not processed."
  - governs: "Which file types, keywords, file paths and sensitive info types policies ignore"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Insider Risk Management > Insider risk settings > Global exclusions"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions"
    api: null
    note: "Choose the type in the Type panel."
  - governs: "Whether analysts see usernames or anonymised versions"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Insider Risk Management > Privacy"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-privacy"
    api: null
    note: "The page then asks you to choose to show anonymised names or not. Applies to all policies."
  - governs: "Whether alert severity is shared with Microsoft Defender XDR, DLP and Communication Compliance"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Insider Risk Management > Data sharing > Sharing data with other Microsoft security solutions"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-share-data"
    api: null
  - governs: "Whether Adaptive Protection assigns insider risk levels and shares them with other policy engines"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Insider Risk Management > Adaptive protection > Adaptive Protection settings > Adaptive Protection"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection"
    api: null
    note: "Turn Adaptive Protection On or Off. Levels can take up to 36 hours to appear after it is turned on."
  - governs: "Whether analytics scans tenant user activity without policies"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Insider Risk Management > Insider risk settings > Analytics"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-configure"
    api: null
    note: "Setting: Scan your tenant's user activity to identify potential insider risks. Role: Insider Risk Management, Insider Risk Management Admins or Microsoft 365 Global admin role group."
  - governs: "Who is in the Insider Risk Management role groups"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-permissions"
    api: null
    note: "Changes can take up to 30 minutes to apply. Administrative units scope members to a region or department."
  - governs: "Whether the Microsoft 365 audit log records the activity policies read"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "Needs the Audit Logs role in Exchange Online. Run in Exchange Online PowerShell. The banner shows only if auditing is off."
confidence: "high"
dependents: 13
changes:
  - date: "2026-11-21"
    note: "New concept page explaining Insider Risk Management: its policies, role groups, licensing, pay-as-you-go indicators and controls."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 109 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 109
  confirmed: 105
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "259ad7cb7a135c7548983d80cf4425c0"
---

## What it is

Microsoft Purview Insider Risk Management is a compliance solution for detecting, investigating and acting on risky activity by people inside your organisation, whether malicious or inadvertent. Administrators write insider risk policies that say which users and which risk indicators to watch, and matching activity raises alerts for analysts.

**How it works**

- **Signals.** Policies use logs from Microsoft 365 and Microsoft Graph. The Microsoft 365 audit log is a prerequisite: policies and analytics scans read it to detect risk activities (see [Microsoft Purview Audit](/concepts/auditing/)).
- **Policies.** Each policy is built from a template and defines which users are in scope and which indicators raise alerts. All global indicators are disabled until you select one or more, and nothing alerts until a policy is configured. The policy dashboard separates user policies from agent policies; agent policies cover Copilot Studio and Microsoft Foundry agents.
- **Triage and cases.** New alerts get a *Needs review* status. Reviewers open a case, add the alert to an existing case or dismiss it. A case can be escalated to Microsoft Purview eDiscovery (Premium).
- **Analytics.** An analytics scan evaluates user activity without any policy, to show where policies are worth creating.
- **Neighbours.** Adaptive Protection uses insider risk levels to drive data loss prevention, data lifecycle management and Conditional Access policies. The Data sharing setting passes alert severity to Microsoft Defender XDR, Communication Compliance and DLP.

## Why it matters

Policies decide what is detected and role groups decide who can see it, so the solution is only as good as its set-up. Some templates have prerequisites (an HR connector, a DLP policy or Microsoft Defender for Endpoint integration), and Security policy violation policies assign no risk scores until a Defender for Endpoint subscription is added.

It also puts a person's name beside a risk score. Microsoft's pages describe users as pseudonymised by default and provide a Privacy setting that controls whether analysts see names. Microsoft states that customers are solely responsible for using the service in compliance with applicable laws, and its planning page asks you to identify stakeholders for acting on alerts and cases before you switch policies on.

## Cost and licensing

Microsoft's Purview service description lists Insider Risk Management as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and in Microsoft 365 E5/A5/F5/G5 Insider Risk Management. The user must hold the required licence when a Purview policy or feature is used in locations tied to their account, such as mailboxes, OneDrive accounts, Teams chats and devices. Microsoft documents availability for tenants hosted in regions supported by Azure service dependencies.

Two charges sit on top. Some indicators are available only if you enable pay-as-you-go billing, and the Usage center in the Purview portal shows usage. For Microsoft Copilot experiences and Enterprise AI apps, all available apps are monitored by default; a deselected app's signals are not processed and no cost is incurred. Forensic evidence is an opt-in capacity add-on sold in units of 100 GB per month, metered on ingestion for users scoped in forensic evidence policies. The Get started page states no rate for either.

## Risks and limits

- **Auditing off means no signals.** Policies and analytics scans read the Microsoft 365 audit log. Auditing isn't enabled by default for Small and Medium Business licences, and another administrator may have turned it off. The Insider Risk Management audit log is a separate system, so a working one does not show that ingestion is on.
- **User limits reduce performance.** Each template caps users in scope, for example 1,000 for Data leaks by priority users and 15,000 for Data leaks. Near or over the limit, policy performance reduces. The limit counts users brought in scope by a trigger, not users added to the policy.
- **Anonymisation has gaps.** Names still appear in activity metadata and in Content explorer files and content. Alerts exported through the exporting API or to eDiscovery show usernames, and data risk graph cannot be used while anonymisation is on. The Triage Agent dashboard shows names too.
- **Administrative units can hide alerts.** Restricted administrators cannot see alerts for users who reach them through security or distribution groups added to an administrative unit; add users directly.
- **Exclusions do not always remove events.** A globally excluded event that is part of an obfuscation sequence is still included in that sequence.
- **Adaptive Protection reaches other solutions.** Turning it off stops insider risk levels being assigned and shared with DLP, data lifecycle management and Conditional Access, and resets existing levels. Alert severity (Low, Medium, High) is not the same as insider risk level (Elevated, Moderate, Minor).
- **Cloud migration loses open work.** Active cases and alerts don't migrate between the Microsoft 365 US Government Cloud and the commercial cloud; close them first.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users, templates and indicators a policy detects on</strong><br><small>Tenant</small><br><small class="controls__note">Role: Insider Risk Management or Insider Risk Management Admins role group. Quick policies need an unrestricted administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Policies › Create policy › Policy template <a href="https://learn.microsoft.com/purview/insider-risk-management-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which risk indicators policies can score</strong><br><small>Tenant</small><br><small class="controls__note">Some indicators are available only with pay-as-you-go billing.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which generative AI apps the indicators monitor</strong><br><small>Tenant</small><br><small class="controls__note">For Microsoft Copilot experiences and Enterprise AI apps only. A deselected app's signals are not processed.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators › Generative AI apps indicators › Choose apps to monitor <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which file types, keywords, file paths and sensitive info types policies ignore</strong><br><small>Tenant</small><br><small class="controls__note">Choose the type in the Type panel.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Insider risk settings › Global exclusions <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether analysts see usernames or anonymised versions</strong><br><small>Tenant</small><br><small class="controls__note">The page then asks you to choose to show anonymised names or not. Applies to all policies.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Privacy <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-privacy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether alert severity is shared with Microsoft Defender XDR, DLP and Communication Compliance</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Data sharing › Sharing data with other Microsoft security solutions <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-share-data" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Adaptive Protection assigns insider risk levels and shares them with other policy engines</strong><br><small>Tenant</small><br><small class="controls__note">Turn Adaptive Protection On or Off. Levels can take up to 36 hours to appear after it is turned on.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Adaptive protection › Adaptive Protection settings › Adaptive Protection <a href="https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether analytics scans tenant user activity without policies</strong><br><small>Tenant</small><br><small class="controls__note">Setting: Scan your tenant's user activity to identify potential insider risks. Role: Insider Risk Management, Insider Risk Management Admins or Microsoft 365 Global admin role group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Insider risk settings › Analytics <a href="https://learn.microsoft.com/purview/insider-risk-management-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who is in the Insider Risk Management role groups</strong><br><small>User</small><br><small class="controls__note">Changes can take up to 30 minutes to apply. Administrative units scope members to a region or department.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Microsoft 365 audit log records the activity policies read</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs role in Exchange Online. Run in Exchange Online PowerShell. The banner shows only if auditing is off.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Six role groups divide the work. Insider Risk Management holds every action; Admins configure policies and settings but cannot investigate alerts; Analysts, Investigators, Auditors and Approvers hold narrower sets. Microsoft Entra Global Administrator and Compliance Administrator, and Purview Organization Management and Compliance Administrator, can assign users to these role groups. Role group changes can take up to 30 minutes to apply, and Microsoft asks you to keep at least one member in the Insider Risk Management or Admins role group.

Administrative units make members restricted administrators with limited access to settings, policies and user data. Creating quick policies needs an unrestricted administrator.

The Insider risk audit log records actions on policies, cases, alerts, settings, users and notice templates, keeps them 180 days, cannot be disabled, and is read by the Insider Risk Management or Auditors role groups. Under Settings, Export alerts is disabled by default; when on, alerts appear through the Office 365 Management Activity API under SecurityComplianceAlerts, category InsiderRiskManagement.

The Insider Risk Management pages read for this page document the portal for policies, settings and role groups, and name no cmdlet or Graph operation for them.

## What to check

- Confirm auditing is on by running `Get-AdminAuditLogConfig | Format-List UnifiedAuditLogIngestionEnabled` in Exchange Online PowerShell.
- Review who is in the Insider Risk Management role groups, and confirm at least one person is in Insider Risk Management or Admins.
- Read the Status column on the Policies tab for warnings, and compare each template's Users in scope figure with its limit.
- Decide the Privacy setting deliberately, and note what stays visible when it is on.
- Review Policy indicators, including Choose apps to monitor, against your pay-as-you-go budget.
- Review Global exclusions and Data sharing so you know what is not scored and which solutions receive alert severity.

## Open questions

- Which indicators need pay-as-you-go billing, and at what rate? The Get started page states the requirement but no rate.
- Can policies, settings or role group membership be scripted? The pages read document portal steps only.
- Does a new tenant start with the Privacy setting on? One banner says users are pseudonymised by default, while the planning page tells you to keep the setting enabled.

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[8].api / absence: Microsoft has not documented automation for Insider Risk Management role-group membership. | Found: Use the Add-RoleGroupMember cmdlet to add members to a management role group. The Identity parameter specifies the role group to add a member to. The Member parameter specifies who you want to add to the role group. | Fix: Set controls[8].api to kind 'powershell', call 'Add-RoleGroupMember -Identity "Insider Risk Management" -Member <user>', docs 'https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember'. Add 'Run in Security & Compliance PowerShell' to its note. Narrow the prose and Open questions automation gaps to policies and settings, removing role-group membership. https://learn.microsoft.com/entra/identity/role-based-access-control/m365-workload-docs#microsoft-365 explicitly lists Add-RoleGroupMember for Purview-specific roles. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember
- [contradicted, blocker] Risks and limits: User limits / behaviour: Each template caps the number of users in scope. | Found: | Forensic evidence | Unlimited | | Fix: Replace 'Each template caps users in scope' with 'Most templates have maximum user-in-scope limits'. Forensic evidence is explicitly unlimited in the cited limits table; do not describe all templates as capped. | Source: https://learn.microsoft.com/purview/insider-risk-management-limits
- [contradicted, blocker] Open questions: Privacy / absence: Whether a new tenant starts with Privacy on remains undocumented. | Found: With privacy on by default, insider risk indicators help identify unusual levels of risk activities when evaluated daily for users that are in-scope for insider risk policies. | Fix: Remove the final Open questions bullet. The cited policies page expressly says privacy is on by default, and the cited privacy page says users are pseudonymized by default; the planning recommendation to keep it enabled does not contradict that default. | Source: https://learn.microsoft.com/purview/insider-risk-management-policies
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: The policy creation route is Microsoft Purview portal > Insider Risk Management > Policies > Create policy > Policy template. | Found: Select Policies in the left navigation. 4. Select Create policy to open the policy workflow. 5. On the Policy template page, choose a policy category and then select the template for the new policy. | Fix: The printed route correctly reaches template selection but not user and indicator selection. Narrow this row's governs to 'Which template a new insider risk policy uses'; preserve the printed path. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
- [supported, minor] controls[3].ui / admin-path: Global exclusions are reached through Settings > Insider Risk Management > Insider risk settings > Global exclusions in the Microsoft Purview portal. | Found: Select Settings in the upper-right corner of the page, then select Insider Risk Management to go to the Insider Risk Management settings. 3. Under Insider risk settings, select Global exclusions. | Fix: The path stops on the correct page. Append ' > Type > exclusion type', using a lower-case placeholder for the selected type; retain the note telling readers to choose the type. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions
- [supported, minor] controls[8].ui / admin-path: Role-group membership is edited at Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users. | Found: Select Settings in the upper-right corner of the page, select Roles and groups, then select Roles groups in the left navigation pane. 3. Select the Insider Risk Management role group, then select Edit. 4. Select Choose users | Fix: The cited IRM page supports this route, but https://learn.microsoft.com/purview/purview-permissions instead gives 'Settings > Roles and scopes > Role groups > role group > Edit > Choose users'. Add a note reporting that alternative navigation rather than silently choosing between the two pages. | Source: https://learn.microsoft.com/purview/insider-risk-management-permissions
- [supported, minor] What it is: Neighbours; controls[6] / applicability: Adaptive Protection uses insider risk levels to dynamically apply DLP, data lifecycle management and Conditional Access policies. | Found: Microsoft Purview Data Loss Prevention (DLP) Microsoft Purview Data Lifecycle Management (preview) Microsoft Entra Conditional Access (preview) | Fix: Change the Neighbours sentence to 'Adaptive Protection uses insider risk levels to drive data loss prevention, data lifecycle management (preview) and Conditional Access (preview) policies.' Preserve those preview qualifications wherever these integrations are described as available. | Source: https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection
- [supported, minor] Why it matters / applicability: Some template detections require a DLP policy. | Found: For the Data leaks template, configure at least one Microsoft Purview Data Loss Prevention (DLP) policy to define sensitive information in your organization and to receive insider risk alerts for High Severity DLP policy alerts. | Fix: Replace 'a DLP policy' in the prerequisites parenthesis with 'a DLP policy when using high-severity DLP alerts as the trigger'. The cited Get started page says a DLP policy is optional for Data leaks and Data leaks by priority users. | Source: https://learn.microsoft.com/purview/insider-risk-management-plan
- [supported, minor] Cost and licensing / availability: Microsoft documents availability in tenant regions supported by Azure service dependencies. | Found: Insider Risk Management is currently available in tenants hosted in geographical regions and countries supported by Azure service dependencies. | Fix: Add: 'The Adaptive Protection page additionally says Insider Risk Management is available for commercial clouds but not US Government cloud programs, while the planning page describes migration between government and commercial clouds.' Both pages are already cited; report this documentation discrepancy without resolving it by inference. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
- [supported, minor] Risks and limits: User limits / behaviour: Data leaks by priority users has a 1,000-user scope limit. | Found: | Data leaks by priority users | 1,000 | | Fix: Add 'across all policies using a given template' to the sentence giving the 1,000 and 15,000 examples. https://learn.microsoft.com/purview/insider-risk-management-policy-templates says these maximum limits apply across all policies using a given policy template, not independently to each policy. | Source: https://learn.microsoft.com/purview/insider-risk-management-limits
- [supported, minor] controls[3].governs / behaviour: Global exclusions decide which sensitive info types policies ignore. | Found: The system treats these excluded types as non-sensitive info types. If a file contains any sensitive info type you identify in this section, the system risk scores the file but doesn't show activities involving content related to sensitive info types. | Fix: Clarify the row note: 'Sensitive info type exclusions are preview and treat the excluded types as non-sensitive; files still receive risk scores, but activities involving the excluded sensitive content are not shown.' This distinguishes type exclusion from excluding the file itself. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions
- [supported, minor] Governance controls: role assignment / role: Entra Global Administrator and Compliance Administrator, and Purview Organization Management and Compliance Administrator, can assign users to these role groups. | Found: Members of the following roles can assign users to Insider Risk Management role groups Microsoft Entra ID Global Administrator Microsoft Entra ID Compliance Administrator Microsoft Purview Organization Management Microsoft Purview Compliance Administrator | Fix: Add: 'The general Purview permissions page instead requires Global Administrator or the Role Management role to view and modify role groups.' Cite https://learn.microsoft.com/purview/purview-permissions alongside the solution-specific permissions page; do not silently resolve their different role guidance. | Source: https://learn.microsoft.com/purview/insider-risk-management-permissions
- [supported, minor] Governance controls: Export alerts / behaviour: When Export alerts is enabled, alerts are available through the Office 365 Management Activity API. | Found: You can export Microsoft Purview Insider Risk Management alert information to security information and event management (SIEM) and security orchestration automated response (SOAR) solutions by using the Office 365 Management Activity API schema. | Fix: Add: 'The Insider Risk Management overview labels Office 365 Management APIs integration as preview, while the data-sharing page documents it without that label.' Both pages are already cited. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-share-data
- [contradicted, minor] sources / consistency: Every Microsoft page needed to support the page's controls and resolve documentation discrepancies is cited. | Found: Select Settings in the upper-right corner of the page. 3. Select Insider Risk Management to go to the Insider Risk Management settings. 4. Under Insider risk settings, select Analytics, and then turn off the setting. | Fix: Add https://learn.microsoft.com/purview/insider-risk-management-settings-analytics and https://learn.microsoft.com/purview/purview-permissions to sources. For the corrected membership automation, also cite https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember and https://learn.microsoft.com/entra/identity/role-based-access-control/m365-workload-docs#microsoft-365. These are the additional Microsoft pages used in this verification. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-analytics
-->
