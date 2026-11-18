---
kind: "concept"
title: "Microsoft Purview Audit: what the unified audit log records, how long it keeps it and what it costs"
slug: "auditing"
summary: "Microsoft Purview Audit records user, admin and Copilot activity in one searchable log. Administrators use it to confirm logging is on, set retention, search records and see what Copilot or an agent touched."
created: "2026-11-18"
updated: "2026-11-18"
version: 1
tags: ["auditing","purview","retention","dataverse","agents","powershell","admin-controls"]
covers: []
sources:
  - title: "Learn about auditing solutions in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/audit-solutions-overview"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Turn auditing on or off"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
  - title: "Audit logs for Copilot and AI applications"
    url: "https://learn.microsoft.com/purview/audit-copilot"
    kind: "learn"
  - title: "Manage audit log retention policies"
    url: "https://learn.microsoft.com/purview/audit-log-retention-policies"
    kind: "learn"
  - title: "Get started with auditing solutions"
    url: "https://learn.microsoft.com/purview/audit-get-started"
    kind: "learn"
  - title: "Learn about Microsoft Purview billing models"
    url: "https://learn.microsoft.com/purview/purview-billing-models"
    kind: "learn"
  - title: "Enable Microsoft Purview pay-as-you-go features for new customers"
    url: "https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement"
    kind: "learn"
  - title: "Manage Dataverse auditing"
    url: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    kind: "learn"
  - title: "Configure auditing"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
  - title: "Create auditLogQuery"
    url: "https://learn.microsoft.com/graph/api/security-auditcoreroot-post-auditlogqueries"
    kind: "learn"
related: ["microsoft-power-platform-governance-and-administration-security-and-compliance-prevent-sen","m365-backup-activity-logs","data-policies","agent-identity"]
controls:
  - governs: "Whether the unified audit log records activity for the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Start recording user and admin activity"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    api:
      kind: "powershell"
      call: "Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true"
      docs: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    note: "Exchange Online PowerShell. The portal banner appears only when auditing is off; turning it off is documented in PowerShell. Needs the Audit Logs role in Exchange Online."
  - governs: "Searching and exporting audit records"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <start> -EndDate <end> -UserIds <users> -Operations <operations> -ResultSize <n>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "Needs the Audit Logs or View-Only Audit Logs role. A restricted admin sees only logs within their administrative units."
  - governs: "Programmatic audit search through Microsoft Graph"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "graph"
      call: "POST /v1.0/security/auditLog/queries"
      docs: "https://learn.microsoft.com/graph/api/security-auditcoreroot-post-auditlogqueries"
    note: "Needs an AuditLogsQuery permission, for example AuditLogsQuery.Read.All."
  - governs: "How long audit records are retained (Audit (Premium) retention policies)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Create audit retention policy"
      docs: "https://learn.microsoft.com/purview/audit-log-retention-policies"
    api:
      kind: "powershell"
      call: "New-UnifiedAuditLogRetentionPolicy -Name \"<name>\" -RecordTypes <record type> -RetentionDuration <duration> -Priority <priority>"
      docs: "https://learn.microsoft.com/purview/audit-log-retention-policies"
    note: "Security & Compliance PowerShell. Needs the Organization Configuration role. Up to 50 policies; the default policy cannot be modified."
  - governs: "Whether Dataverse auditing is on for an environment, and its retention"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Compliance > Auditing > environment > Set up auditing > Turn on auditing"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    api:
      kind: "rest"
      call: "GET [Organization URI]/api/data/v9.2/organizations?$select=auditsettings,isauditenabled,auditretentionperiodv2,isuseraccessauditenabled,useraccessauditinginterval"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
    note: "Needs System Administrator or System Customizer. Table and column auditing are set separately. Dataverse logs consume log storage capacity."
confidence: "medium"
dependents: 11
changes:
  - date: "2026-11-18"
    note: "New concept page on Microsoft Purview Audit, with Dataverse auditing as the second sense of the tag."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 98 statements contradicted, 2 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 98
  confirmed: 91
  unconfirmed: 2
  contradicted: 5
  attempts: 1
  hash: "1a9a10148dc75b1796299a1150dee6c2"
---

## What it is

Microsoft Purview Audit records the operations that users and admins perform across Microsoft 365 services in one searchable store, the unified audit log. Each audited activity produces an audit record. Administrators search the records in the Microsoft Purview portal, with the Search-UnifiedAuditLog cmdlet in Exchange Online PowerShell, or through Microsoft Graph.

There are two tiers. **Audit (Standard)** is on by default for organisations with the appropriate subscription and keeps records for 180 days. **Audit (Premium)** adds audit log retention policies, retention of up to one year (up to 10 years with an add-on licence), intelligent insights and higher Office 365 Management Activity API bandwidth.

**Copilot and agent records.** Microsoft documents that interactions with Copilot, Cowork and AI applications are logged automatically as part of Audit (Standard). A record names the user, the time and the host app, lists the resources Copilot accessed, and carries agent properties such as AgentId, AgentName and AgentVersion. Admin changes to Copilot settings, plug-ins, promptbooks and workspaces are logged too.

**Dataverse auditing is a different log.** It records changes to records, and user access, inside one Dataverse environment. Dataverse stores it, and it consumes log storage capacity. It is configured per environment, table and column. User access logging and Read logs are sent to Purview, for production environments only. See [Power Platform: Dataverse audit events sent to Purview](/features/microsoft-power-platform-governance-and-administration-security-and-compliance-prevent-sen/).

## Why it matters

Audit is where an administrator answers who did what, when and to which resource, including what a Copilot or agent interaction accessed. How long the answer is available depends on the licence of the person who performed the activity, so the same event can be searchable for 180 days or for a year.

If logging is off, the evidence does not exist. Microsoft says auditing is not enabled by default for Small and Medium Business licences (Business Basic, Standard and Premium) or for unmanaged tenants on enterprise trials. If auditing is turned off, Purview searches and Search-UnifiedAuditLog return no results, and the Office 365 Management Activity API and Microsoft Sentinel cannot be used to access the data.

## Cost and licensing

Licensing for Audit (Standard) and Audit (Premium) needs the appropriate organisation subscription plus the per-user licensing required to log and retain records; Microsoft lists the plans on its subscription requirements page.

- **One year retention:** the user who performs the activity needs an Office 365 E5 or Microsoft 365 E5 licence, or a Microsoft Purview Suite or E5 eDiscovery and Audit add-on licence.
- **10-year retention:** a per-user 10-Year Audit Log Retention add-on on top of that.
- **Non-Microsoft AI applications:** audit logs for user interactions are billed pay-as-you-go, by the number of audit records processed, and retained for 180 days. This needs an Azure subscription linked to Purview. Microsoft's Copilot audit page states that Microsoft applications, including Security Copilot, Copilot in Fabric and Copilot Studio custom applications, are included in Audit (Standard); its Get started page lists some of the same products under pay-as-you-go. See Open questions. No per-record rate appears on the Copilot audit page.
- **Dataverse auditing:** log storage capacity, not an Audit licence.

## Risks and limits

- **Logging can be off without anyone noticing.** SMB and trial tenants must turn it on; verify with Get-AdminAuditLogConfig in Exchange Online PowerShell, because the same cmdlet in Security & Compliance PowerShell always shows False.
- **Retention follows the user's licence.** Records for non-E5 and guest users are kept for 180 days. A 10-year policy is not retroactive.
- **Non-user actors get a fixed year.** Records generated by service principals, system events and application activities are kept for one year, not configurable, and custom retention policies do not apply to them.
- **Records are not instant.** Core services typically appear 60 to 90 minutes after an event, Microsoft commits to no time, and broad searches in large tenants can take up to 48 hours.
- **Search has ceilings.** A search covers at most 180 days; each admin can run 10 search jobs at once; export is capped at 50,000 rows for Standard and 1,000,000 for Premium.
- **Admin units narrow what an admin sees.** A restricted admin can only search user-generated logs within their units; unrestricted admins see logs from non-user and system accounts.
- **Dataverse auditing has gaps.** It does not audit retrieve or export operations, table or column definition changes, or authentication; Read logs cover retrieval and export.
- **Dataverse retention is stamped at write time.** Changing the period does not change existing records.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the unified audit log records activity for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Exchange Online PowerShell. The portal banner appears only when auditing is off; turning it off is documented in PowerShell. Needs the Audit Logs role in Exchange Online.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Searching and exporting audit records</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs or View-Only Audit Logs role. A restricted admin sees only logs within their administrative units.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;start&gt; -EndDate &lt;end&gt; -UserIds &lt;users&gt; -Operations &lt;operations&gt; -ResultSize &lt;n&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Programmatic audit search through Microsoft Graph</strong><br><small>Tenant</small><br><small class="controls__note">Needs an AuditLogsQuery permission, for example AuditLogsQuery.Read.All.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/security/auditLog/queries</code> <a href="https://learn.microsoft.com/graph/api/security-auditcoreroot-post-auditlogqueries" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>How long audit records are retained (Audit (Premium) retention policies)</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Needs the Organization Configuration role. Up to 50 policies; the default policy cannot be modified.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Create audit retention policy <a href="https://learn.microsoft.com/purview/audit-log-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-UnifiedAuditLogRetentionPolicy -Name &quot;&lt;name&gt;&quot; -RecordTypes &lt;record type&gt; -RetentionDuration &lt;duration&gt; -Priority &lt;priority&gt;</code> <a href="https://learn.microsoft.com/purview/audit-log-retention-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Dataverse auditing is on for an environment, and its retention</strong><br><small>Environment</small><br><small class="controls__note">Needs System Administrator or System Customizer. Table and column auditing are set separately. Dataverse logs consume log storage capacity.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Compliance › Auditing › environment › Set up auditing › Turn on auditing <a href="https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET [Organization URI]/api/data/v9.2/organizations?$select=auditsettings,isauditenabled,auditretentionperiodv2,isuseraccessauditenabled,useraccessauditinginterval</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Searching needs the Audit Logs or View-Only Audit Logs role in the Microsoft Purview portal, held by the Audit Reader and Audit Manager role groups by default. The cmdlets need the same roles in the Exchange admin center. Turning auditing on or off needs the Audit Logs role in Exchange Online. Creating retention policies needs the Organization Configuration role. Changing Dataverse auditing needs System Administrator, System Customizer or equivalent.

**How they interact.** A custom retention policy overrides the default policy; a lower priority number wins. These controls decide what is recorded, kept and searchable. They do not restrict the activity being recorded; for that, see [Data policies](/concepts/data-policies/). Enabling pay-as-you-go is a separate Purview billing step: see Enable Microsoft Purview pay-as-you-go features.

## What to check

- Run Get-AdminAuditLogConfig | Format-List UnifiedAuditLogIngestionEnabled in Exchange Online PowerShell and confirm True.
- Compare the licences of your users with the retention you need; list audit retention policies with Get-UnifiedAuditLogRetentionPolicy and review their priorities.
- Search for a recent Copilot interaction and confirm the record shows the agent and resources you expect.
- Confirm who holds the Audit Logs and View-Only Audit Logs roles and whether any admin is restricted by administrative units.
- Review each production Dataverse environment under Security > Compliance > Auditing and its retention setting.
- Check whether pay-as-you-go billing is linked if you need audit records for non-Microsoft AI applications.

## Open questions

- Which Copilot Studio and Security Copilot interactions need pay-as-you-go: the Copilot audit page says they are included in Audit (Standard), while Get started lists them under non-Microsoft 365 AI data.
- What is the per-record rate for pay-as-you-go audit? The Copilot audit page names the unit but states no rate.
- What is the default Dataverse audit retention? The Power Platform admin guide says Forever; the developer reference for the organization table says 30 days.

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[4].api / command: The displayed GET of organizations audit settings is the automation equivalent of enabling Dataverse auditing and setting retention. | Found: Retrieve organization settings: Use the following queries to retrieve your organization settings. ... Change organization settings: Change the column values in the organization table to change how auditing works for the environment. | Fix: Keep the documented GET, but change this row's governs text to 'Inspecting Dataverse environment audit settings and retention' and add 'The REST call is read-only; it does not enable auditing or change retention.' to its note. Apply the same wording to the rendered row. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure
- [contradicted, blocker] What it is: Dataverse auditing is a different log / licensing: User access logging and Read logs are sent to Purview for production environments, with no licensing qualification given. | Found: The option to turn on activity logging is only visible when the minimum MicrosoftOffice licensing requirements are met. ... User access or activity logging is sent to Purview for production environments only. | Fix: Replace the sentence with 'User access logging and Read logs can be sent to Purview for production environments only; the option to turn on activity logging is visible only when the minimum Microsoft Office licensing requirements are met.' | Source: https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing
- [unsupported, major] Why it matters / behaviour: If logging is off, the evidence does not exist. | Found: Searched: Microsoft Purview auditing turned off existing audit records evidence audit status changes. Opened audit-log-enable-disable and audit-search: they state searches return no results, not that no evidence exists; status changes themselves are audited. | Fix: Remove 'If logging is off, the evidence does not exist.' The following documented sentence about searches returning no results already states the supported consequence.
- [unsupported, blocker] Cost and licensing: Dataverse auditing / licensing: Dataverse auditing does not require an Audit licence. | Found: Searched: Dataverse auditing license Microsoft Purview Audit license required storage capacity; Dataverse auditing no additional license. Opened manage-dataverse-auditing, auditing/configure and activity-logs-overview; none states this blanket licence exemption. | Fix: Replace 'Dataverse auditing: log storage capacity, not an Audit licence.' with 'Dataverse auditing: audit logs consume Dataverse log storage capacity.'
- [contradicted, blocker] Risks and limits: Search has ceilings / behaviour: Each administrator can run ten audit search jobs concurrently without an additional restriction on unfiltered jobs. | Found: Each admin Audit account user can have up to 10 search jobs running at the same time, with a limit of one unfiltered search job. | Fix: Replace 'each admin can run 10 search jobs at once' with 'each admin can run up to 10 search jobs at once, with a limit of one unfiltered search job'. | Source: https://learn.microsoft.com/purview/audit-search
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risks and limits: Dataverse retention is stamped at write time / behaviour: Changing Dataverse audit retention does not change existing records' retention. | Found: Changing the retention period here doesn't change the retention period for already existing records. ... Use the Security page auditing option to set the retention policy. This option provides the flexibility to apply the retention policy to existing logs. | Fix: Add to this bullet: 'The same admin guide also says the Security page auditing option can apply retention to existing logs, while the developer configuration reference marks ApplyRetentionToExistingLogs as ignored; Microsoft documentation is inconsistent on this point.' | Source: https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing
- [supported, minor] Governance controls: How they interact / applicability: Data policies can restrict Copilot Studio agent interactions with data and services. | Found: Data policies let you govern how agents connect and interact with data and services, both within and outside your organization. ... These data policies apply to Copilot Studio agents in the environments included in the policy's scope. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention to sources for the data-policy cross-reference; it is the additional Microsoft page relied on for this statement. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] Governance controls: How they interact; Cost and licensing / behaviour: Enabling Purview pay-as-you-go is a separate billing enablement step, presented without its documented preview qualification. | Found: In this procedure, you enable the Microsoft Purview pay-as-you-go features by associating your Microsoft 365 tenant with an Azure subscription for billing purposes. ... This featue is in preview. | Fix: Replace 'Enabling pay-as-you-go is a separate Purview billing step' with 'The documented pay-as-you-go enablement flow is a separate Purview billing step and is marked preview'. | Source: https://learn.microsoft.com/purview/purview-payg-subscription-based-enablement
- [contradicted, minor] What to check: role assignments and administrative units / consistency: The checklist asks readers to review role assignments and administrative-unit restrictions, but the table has no row for managing those controls. | Found: Confirm who holds the Audit Logs and View-Only Audit Logs roles and whether any admin is restricted by administrative units. / Searching and exporting audit records | Fix: Remove this checklist bullet; role assignment and administrative-unit scoping are discussed in the notes but have no corresponding control row. Do not add a new row as part of this correction.
- [contradicted, minor] What to check: pay-as-you-go billing / consistency: The checklist asks readers to check pay-as-you-go billing linkage, but the controls table has no billing-enablement row. | Found: Check whether pay-as-you-go billing is linked if you need audit records for non-Microsoft AI applications. / Enabling pay-as-you-go is a separate Purview billing step | Fix: Remove the final checklist bullet about pay-as-you-go billing linkage; the table does not contain that control. Keep the existing billing explanation and source.
-->
