---
kind: "concept"
title: "Microsoft Purview Insider Risk Management: what does it detect, who sees it and what does it cost?"
slug: "insider-risk-management"
summary: "Microsoft Purview Insider Risk Management scores user activity against policies you write and raises alerts for analysts. Administrators use it to decide what is detected, who can see it and which indicators incur pay-as-you-go charges."
created: "2026-11-21"
updated: "2026-11-21"
version: 2
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
  - title: "Limits in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-limits"
    kind: "learn"
  - title: "Enable analytics in Insider Risk Management"
    url: "https://learn.microsoft.com/purview/insider-risk-management-settings-analytics"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
related: ["auditing","ediscovery","endpoint-dlp","retention","microsoft-purview-insider-risk-management-unified-alert-queue","microsoft-purview-insider-risk-management-irm-alerts-in-xdr","microsoft-purview-insider-risk-management-insider-risk-management-for-agents"]
controls:
  - governs: "Which template a new insider risk policy uses"
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
      path: "Settings > Insider Risk Management > Insider risk settings > Global exclusions > Type > <exclusion type>"
      docs: "https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions"
    api: null
    note: "Choose the type in the Type panel. Sensitive info type exclusions are preview: files still receive risk scores, but activities involving the excluded content are not shown."
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
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Insider Risk Management\" -Member <user>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Run in Security & Compliance PowerShell. Changes can take up to 30 minutes to apply. Administrative units scope members to a region or department."
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
  - date: "2026-11-21"
    note: "Corrected after the independent check: role-group membership now shows Add-RoleGroupMember, the user-limit wording no longer implies every template is capped, and the privacy-default open question was removed."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 139 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 139
  confirmed: 138
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "f732328b0bddbcc79f77012dee6e84d5"
---

## What it is

Microsoft Purview Insider Risk Management is a compliance solution for detecting, investigating and acting on risky activity by people inside your organisation, whether malicious or inadvertent. Administrators write insider risk policies that say which users and which risk indicators to watch, and matching activity raises alerts for analysts.

**How it works**

- **Signals.** Policies use logs from Microsoft 365 and Microsoft Graph. The Microsoft 365 audit log is a prerequisite: policies and analytics scans read it to detect risk activities (see [Microsoft Purview Audit](/concepts/auditing/)).
- **Policies.** Each policy is built from a template and defines which users are in scope and which indicators raise alerts. All global indicators are disabled until you select one or more, and nothing alerts until a policy is configured. The policy dashboard separates user policies from agent policies; agent policies cover Copilot Studio and Microsoft Foundry agents.
- **Triage and cases.** New alerts get a *Needs review* status. Reviewers open a case, add the alert to an existing case or dismiss it. A case can be escalated to Microsoft Purview eDiscovery (Premium).
- **Analytics.** An analytics scan evaluates user activity without any policy, to show where policies are worth creating.
- **Neighbours.** Adaptive Protection uses insider risk levels to drive data loss prevention, data lifecycle management (preview) and Conditional Access (preview) policies. The Data sharing setting passes alert severity to Microsoft Defender XDR, Communication Compliance and DLP.

## Why it matters

Policies decide what is detected and role groups decide who can see it, so the solution is only as good as its set-up. Some templates have prerequisites: an HR connector, a DLP policy when using high-severity DLP alerts as the trigger, or Microsoft Defender for Endpoint integration.

It also puts a person's name beside a risk score. Microsoft's pages describe users as pseudonymised by default and provide a Privacy setting that controls whether analysts see names. Microsoft states that customers are solely responsible for using the service in compliance with applicable laws, and its planning page asks you to identify stakeholders for acting on alerts and cases before you switch policies on.

## Cost and licensing

Microsoft's Purview service description lists Insider Risk Management as included in Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW and Microsoft Defender + Purview Suite FLW, and in Microsoft 365 E5/A5/F5/G5 Insider Risk Management. Microsoft documents availability for tenants hosted in regions supported by Azure service dependencies. The Adaptive Protection page additionally says Insider Risk Management is available for commercial clouds but not US Government cloud programs, while the planning page describes migration between government and commercial clouds; Microsoft does not reconcile the two.

Two charges sit on top. Some indicators are available only if you enable pay-as-you-go billing, and the Usage center in the Purview portal shows usage. For Microsoft Copilot experiences and Enterprise AI apps, all available apps are selected by default; a deselected app's signals are not processed and no cost is incurred. Forensic evidence is an opt-in capacity add-on sold in units of 100 GB per month, metered on ingestion for users scoped in forensic evidence policies. The Get started page states no rate for either.

## Risks and limits

- **Auditing off means no signals.** Policies and analytics scans read the Microsoft 365 audit log. Auditing isn't enabled by default for Small and Medium Business licences, and another administrator may have turned it off. The Insider Risk Management audit log is a separate system, so a working one does not show that ingestion is on.
- **User limits apply per template.** Most templates have a maximum number of users in scope, for example 1,000 for Data leaks by priority users and 15,000 for Data leaks. The limit counts users brought in scope by a trigger, not users added to the policy; the limits page does not say what happens above it.
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
<tr><td data-label="Control"><strong>Which template a new insider risk policy uses</strong><br><small>Tenant</small><br><small class="controls__note">Role: Insider Risk Management or Insider Risk Management Admins role group. Quick policies need an unrestricted administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Policies › Create policy › Policy template <a href="https://learn.microsoft.com/purview/insider-risk-management-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which risk indicators policies can score</strong><br><small>Tenant</small><br><small class="controls__note">Some indicators are available only with pay-as-you-go billing.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which generative AI apps the indicators monitor</strong><br><small>Tenant</small><br><small class="controls__note">For Microsoft Copilot experiences and Enterprise AI apps only. A deselected app's signals are not processed.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Settings › Policy indicators › Generative AI apps indicators › Choose apps to monitor <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which file types, keywords, file paths and sensitive info types policies ignore</strong><br><small>Tenant</small><br><small class="controls__note">Choose the type in the Type panel. Sensitive info type exclusions are preview: files still receive risk scores, but activities involving the excluded content are not shown.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Insider risk settings › Global exclusions › Type › &lt;exclusion type ›  <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether analysts see usernames or anonymised versions</strong><br><small>Tenant</small><br><small class="controls__note">The page then asks you to choose to show anonymised names or not. Applies to all policies.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Privacy <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-privacy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether alert severity is shared with Microsoft Defender XDR, DLP and Communication Compliance</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Data sharing › Sharing data with other Microsoft security solutions <a href="https://learn.microsoft.com/purview/insider-risk-management-settings-share-data" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Adaptive Protection assigns insider risk levels and shares them with other policy engines</strong><br><small>Tenant</small><br><small class="controls__note">Turn Adaptive Protection On or Off. Levels can take up to 36 hours to appear after it is turned on.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Insider Risk Management › Adaptive protection › Adaptive Protection settings › Adaptive Protection <a href="https://learn.microsoft.com/purview/insider-risk-management-adaptive-protection" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether analytics scans tenant user activity without policies</strong><br><small>Tenant</small><br><small class="controls__note">Setting: Scan your tenant's user activity to identify potential insider risks. Role: Insider Risk Management, Insider Risk Management Admins or Microsoft 365 Global admin role group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Insider Risk Management › Insider risk settings › Analytics <a href="https://learn.microsoft.com/purview/insider-risk-management-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who is in the Insider Risk Management role groups</strong><br><small>User</small><br><small class="controls__note">Run in Security &amp; Compliance PowerShell. Changes can take up to 30 minutes to apply. Administrative units scope members to a region or department.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Roles groups › Insider Risk Management › Edit › Choose users <a href="https://learn.microsoft.com/purview/insider-risk-management-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Insider Risk Management&quot; -Member &lt;user&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Microsoft 365 audit log records the activity policies read</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs role in Exchange Online. Run in Exchange Online PowerShell. The banner shows only if auditing is off.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Six role groups divide the work. Insider Risk Management holds every action; Admins configure policies and settings but cannot investigate alerts; Analysts, Investigators, Auditors and Approvers hold narrower sets. Microsoft Entra Global Administrator and Compliance Administrator, and Purview Organization Management and Compliance Administrator, can assign users to these role groups. The general Purview permissions page instead says users need to be a global administrator or hold the Role Management role to view role groups in the Roles and scopes area. Role group changes can take up to 30 minutes to apply, and Microsoft asks you to keep at least one member in the Insider Risk Management or Admins role group.

Administrative units make members restricted administrators with limited access to settings, policies and user data. Creating quick policies needs an unrestricted administrator.

The Insider risk audit log records actions on policies, cases, alerts, settings, users and notice templates, keeps them 180 days, cannot be disabled, and is read by the Insider Risk Management or Auditors role groups. Under Settings, Export alerts is disabled by default; when on, alerts appear through the Office 365 Management Activity API under SecurityComplianceAlerts, category InsiderRiskManagement.

For policies and settings, Microsoft's Insider Risk Management pages document the portal and name no cmdlet or Graph operation.

## What to check

- Confirm auditing is on by running `Get-AdminAuditLogConfig | Format-List UnifiedAuditLogIngestionEnabled` in Exchange Online PowerShell.
- Review who is in the Insider Risk Management role groups, and confirm at least one person is in Insider Risk Management or Admins.
- Read the Status column on the Policies tab for warnings, and compare each template's Users in scope figure with its limit.
- Decide the Privacy setting deliberately, and note what stays visible when it is on.
- Review Policy indicators, including Choose apps to monitor, against your pay-as-you-go budget.
- Review Global exclusions and Data sharing so you know what is not scored and which solutions receive alert severity.

## Open questions

- Which indicators need pay-as-you-go billing, and at what rate? The Get started page states the requirement but no rate.
- Can policies or settings be scripted? Microsoft's Insider Risk Management pages document portal steps only.

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risks and limits: Auditing off means no signals / behaviour: Disabling Microsoft 365 auditing means Insider Risk Management receives no signals. | Found: Searched: Insider Risk Management audit log disabled policies signals no activity auditing prerequisite. Read Get started, Analytics, policy indicators and the audit-log page; they establish an audit prerequisite, not cessation of every signal source. | Fix: Replace the heading 'Auditing off means no signals' with 'Auditing is a prerequisite.' Keep the following sentence about policies and analytics reading the Microsoft 365 audit log.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: Policies / default: Nothing alerts until a policy is configured. | Found: Before potentially risky activities can trigger alerts, you must configure a policy. | Fix: Replace 'nothing alerts until a policy is configured' with 'the Get started page requires a policy before alerts can trigger. For agents, Microsoft documents a Risky Agents (preview) policy that is automatically present and ready to generate alerts when the service is set up.' Cite https://learn.microsoft.com/purview/insider-risk-management-monitoring-agents. This distinguishes manual policy creation from the automatically configured agent policy. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
- [supported, minor] What it is: Policies / applicability: Agent policies cover Copilot Studio agents. | Found: Agent policy covers agents from Microsoft Copilot Studio and Microsoft Foundry. | Fix: Replace 'agent policies cover Copilot Studio and Microsoft Foundry agents' with 'the Risky Agents (preview) policy covers Copilot Studio and Microsoft Foundry agents.' The preview designation is explicit at https://learn.microsoft.com/purview/insider-risk-management-monitoring-agents. | Source: https://learn.microsoft.com/purview/insider-risk-management-policies
- [supported, minor] Risks and limits: Anonymisation / behaviour: Data risk graph cannot be used while username anonymisation is enabled. | Found: With the anonymized versions of usernames setting enabled, you cannot use data risk graph. | Fix: Append to that sentence: 'The data risk graph page repeats that restriction, but its Use data risk graph section says all usernames are visible even if pseudonymization is enabled; Microsoft gives conflicting guidance.' Cite https://learn.microsoft.com/purview/insider-risk-management-data-risk-graph. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-privacy
- [supported, minor] Risks and limits: Anonymisation / behaviour: The Triage Agent dashboard displays usernames despite anonymisation. | Found: user names in prioritized alerts aren't anonymized in the Triage Agent dashboard if Show anonymized versions of usernames is enabled. | Fix: Replace 'The Triage Agent dashboard shows names too' with 'The Triage Agent (preview) dashboard shows names too.' The preview status is stated at https://learn.microsoft.com/purview/copilot-in-purview-agents. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-privacy
- [supported, minor] Governance controls: audit log / behaviour: The insider risk audit log records actions on policies, cases, alerts, settings, users and notice templates. | Found: Areas in identified risk activity detection include: - Policies - Cases - Alerts - Settings - Users - Notice templates | Fix: Append: 'The overview labels the Insider Risk Management audit log as preview, while the dedicated audit-log page does not.' Both https://learn.microsoft.com/purview/insider-risk-management and https://learn.microsoft.com/purview/insider-risk-management-audit-log are already cited; this preserves their differing presentation. | Source: https://learn.microsoft.com/purview/insider-risk-management-audit-log
- [supported, minor] Governance controls: Export alerts / behaviour: Enabling Export alerts exposes alert information through the Office 365 Management Activity API. | Found: You can export Microsoft Purview Insider Risk Management alert information to security information and event management (SIEM) and security orchestration automated response (SOAR) solutions by using the Office 365 Management Activity API schema. | Fix: Append: 'The Insider Risk Management overview labels Office 365 Management APIs integration as preview, while the data-sharing page does not.' This reflects the differing presentation in the two already cited Microsoft pages. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-share-data
- [supported, minor] controls[0].ui / admin-path: Policy template selection is reached through Insider Risk Management > Policies > Create policy > Policy template in the Purview portal. | Found: Go to the Insider Risk Management solution. 3. Select Policies in the left navigation. 4. Select Create policy to open the policy workflow. 5. On the Policy template page, choose a policy category and then select the template for the new policy. | Fix: Keep the path to the documented Policy template page and append to controls[0].note: 'On Policy template, choose a policy category and select the template for the new policy.' The path stops on the correct page but does not identify the final selection. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
- [supported, minor] controls[1].ui / admin-path: The risk-indicator control is under Insider Risk Management > Settings > Policy indicators. | Found: To enable policy indicators for all insider risk policies, complete the following steps: 1. Select Settings, then select Policy indicators. 2. Select one or more policy indicators. | Fix: Keep the documented page path and append to controls[1].note: 'On Policy indicators, select one or more policy indicators.' This identifies the selection that the shortened path leaves to the reader. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-policy-indicators
- [supported, minor] controls[3].ui / admin-path: Global exclusions is reached through Settings > Insider Risk Management > Insider risk settings > Global exclusions > Type > exclusion type. | Found: Under Insider risk settings, select Global exclusions. 4. In the Type panel to the right, select Sensitive info types. | Fix: The placeholder is valid and is not a missing label. Keep the path and replace 'Choose the type in the Type panel' in controls[3].note with 'In Type, select File types, Keywords, File paths or Sensitive info types, then select the appropriate Individual or group tab to configure the exclusions.' The path currently stops on the correct exclusion panel. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-global-exclusions
- [supported, minor] controls[4].ui / admin-path: Username privacy is reached through Settings > Insider Risk Management > Privacy. | Found: Select Settings in the upper-right corner of the page. 3. Select Insider Risk Management to go to the Insider Risk Management settings. 4. Select Privacy. 5. Select the option you want, to show anonymized names or not. | Fix: Extend controls[4].ui.path to 'Settings > Insider Risk Management > Privacy > Show anonymized versions of usernames' and retain the note explaining the alternative choice. The current path stops on the correct page before the named option. | Source: https://learn.microsoft.com/purview/insider-risk-management-settings-privacy
- [supported, minor] controls[7].ui / admin-path: Analytics is reached through Settings > Insider Risk Management > Insider risk settings > Analytics. | Found: You can also turn on scanning by going to Insider risk settings > Analytics and enabling Scan your tenant's user activity to identify potential insider risks. | Fix: Extend controls[7].ui.path to 'Settings > Insider Risk Management > Insider risk settings > Analytics > Scan your tenant's user activity to identify potential insider risks'. The portal-entry steps are also documented in the already cited https://learn.microsoft.com/purview/insider-risk-management-settings-analytics. | Source: https://learn.microsoft.com/purview/insider-risk-management-configure
- [supported, minor] controls[8].ui / admin-path: Role membership is edited through Settings > Roles and groups > Roles groups > Insider Risk Management > Edit > Choose users. | Found: Select Settings in the upper-right corner of the page, select Roles and groups, then select Roles groups in the left navigation pane. 3. Select the Insider Risk Management role group, then select Edit. 4. Select Choose users | Fix: Keep the path supported by the dedicated IRM page and append to controls[8].note: 'The general Purview permissions page instead gives Settings > Roles and scopes > Role groups > Insider Risk Management > Edit.' Cite the already listed https://learn.microsoft.com/purview/purview-permissions. The prose mentions the alternate area but does not explain the navigation disagreement beside this control. | Source: https://learn.microsoft.com/purview/insider-risk-management-permissions
- [supported, minor] sources / absence: The sources omit additional Microsoft pages needed to document the preview and conflicting-guidance qualifications identified in this check. | Found: Searched: page sources for insider-risk-management-monitoring-agents, insider-risk-management-data-risk-graph and copilot-in-purview-agents. Read the complete source list; these supporting Microsoft pages are absent. | Fix: Add https://learn.microsoft.com/purview/insider-risk-management-monitoring-agents, https://learn.microsoft.com/purview/insider-risk-management-data-risk-graph and https://learn.microsoft.com/purview/copilot-in-purview-agents to sources when applying the corresponding preview and conflicting-guidance fixes.
-->
