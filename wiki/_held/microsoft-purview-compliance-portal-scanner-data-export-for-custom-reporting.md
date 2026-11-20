---
title: "Microsoft Purview: information protection scanner data export for custom reporting"
slug: "microsoft-purview-compliance-portal-scanner-data-export-for-custom-reporting"
roadmapId: 494839
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans SQL tables of scanner labelling, classification and protection actions for custom reports. Learn does not yet describe them, so there is nothing to configure now; plan SQL access and scanner roles."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Desktop"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "The scanner prerequisites page lists a licence for information protection as required for the scanner service account. No licence, plan or charge specific to scanner data export is published at the time of writing (November 2026)."
audiences: ["compliance","security"]
tags: ["purview","information-protection","sensitivity-labels","data-export","sql","powershell","monitoring","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 494839"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=494839"
    kind: "roadmap"
  - title: "Learn about the information protection scanner"
    url: "https://learn.microsoft.com/purview/deploy-scanner"
    kind: "learn"
  - title: "Running the information protection scanner"
    url: "https://learn.microsoft.com/purview/deploy-scanner-manage"
    kind: "learn"
  - title: "Get started with the information protection scanner"
    url: "https://learn.microsoft.com/purview/deploy-scanner-prereqs"
    kind: "learn"
  - title: "Configure and install the information protection scanner"
    url: "https://learn.microsoft.com/purview/deploy-scanner-configure-install"
    kind: "learn"
  - title: "Upgrade the Microsoft Purview Information Protection scanner"
    url: "https://learn.microsoft.com/purview/upgrade-scanner-migrate"
    kind: "learn"
  - title: "Set-ScannerContentScan"
    url: "https://learn.microsoft.com/powershell/module/purviewinformationprotection/set-scannercontentscan?view=azureipps"
    kind: "learn"
  - title: "Start-Scan"
    url: "https://learn.microsoft.com/powershell/module/purviewinformationprotection/start-scan?view=azureipps"
    kind: "learn"
  - title: "PurviewInformationProtection Module"
    url: "https://learn.microsoft.com/powershell/module/purviewinformationprotection/"
    kind: "learn"
  - title: "Microsoft 365 Security"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-365-security-compliance-licensing-guidance"
    kind: "learn"
videos: []
related: ["sensitivity-labels","microsoft-purview-information-protection-auto-labeling-per-policy-coverage-report","microsoft-purview-auto-labeling-scalability-policy-management-and-reporting-enhancements"]
controls:
  - governs: "Whether a content scan job enforces labelling policy on scanned files"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Information Protection > Information protection scanner > Content scan jobs > content scan job > Enforce sensitivity labeling policy"
      docs: "https://learn.microsoft.com/purview/deploy-scanner-configure-install"
    api:
      kind: "powershell"
      call: "Set-ScannerContentScan -Enforce On"
      docs: "https://learn.microsoft.com/powershell/module/purviewinformationprotection/set-scannercontentscan?view=azureipps"
    note: "Existing scanner control, not a control over the export. Portal roles: Compliance Administrator, Compliance Data Administrator, Security Administrator or Organization Management."
  - governs: "When a content scan job runs, so results reach reports"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Information Protection > Information protection scanner > Content scan jobs > content scan job > Scan now"
      docs: "https://learn.microsoft.com/purview/deploy-scanner-manage"
    api:
      kind: "powershell"
      call: "Start-Scan"
      docs: "https://learn.microsoft.com/powershell/module/purviewinformationprotection/start-scan?view=azureipps"
    note: "Existing scanner control. The Scan now option only appears once a content scan job is selected. Start-Scan is ignored when the scanner schedule is Always."
  - governs: "Scanner data export to SQL tables for custom reporting"
    scope: "other"
    ui: null
    api: null
    note: "Roadmap feature, In development. Microsoft Learn documents no setting or command for it at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-29T23:01:00"
changes:
  - date: "2026-11-20"
    note: "First briefing: roadmap-only feature; documents today's scanner reports, SQL prerequisites, roles and controls, and lists what Microsoft has not yet said."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 12 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 38
  unconfirmed: 0
  contradicted: 12
  attempts: 1
  hash: "1b4f0c7cd415ec12e7c94144ef44c3f1"
---

## What's changing

The roadmap item describes a Microsoft Purview feature for learning about "the state of your scanned repositories" and creating custom reports with the information protection scanner. It says labelling, classification and protection actions on scanned files are stored in SQL tables that form a foundation to feed into custom reports.

Microsoft Learn does not yet describe this feature. At the time of writing (November 2026), the scanner pages document no table names, columns, permissions or setup steps for the export, so what follows about its behaviour is the roadmap's description.

The documented reporting today is different. The scanner runs as a service on Windows Server and uses sensitivity labels configured in the Microsoft Purview portal. When a scan completes, the reports are in the `%localappdata%\Microsoft\MSIP\Scanner\Reports` directory on the scanner computer: .txt summaries and .csv files with more detail for each file. The page says the portal shows information about the last scan only, and that results of earlier scans are in those reports.

The roadmap record gives the status as In development, a preview date of December CY2026 and a target date of January CY2027, with release phases General Availability and Preview, platform Desktop, and clouds Worldwide (Standard Multi-Tenant), GCC and GCC High. These are Microsoft's targets, not commitments.

## Why it matters

Teams that report on scanner results today work from per-scan files on the scanner computer or the last scan shown in the portal. Microsoft describes SQL tables as the foundation for custom reports, which would give compliance and security teams a way to report across scans. Microsoft has not said where those tables live, who can read them or what they contain beyond the roadmap's description.

Microsoft has not stated what happens on arrival, so no source says existing scanner behaviour changes. Treat this as something to review when documentation appears, and plan the SQL and role questions early, because data about labelled and protected files is the sort of reporting data that gets shared widely once it is queryable.

## Risk assessment

**Data exposure**
- The roadmap says labelling, classification and protection actions on scanned files are stored in SQL tables. Anyone given read access to those tables, or to a report built on them, would see information about those actions. Microsoft has not documented the tables or the permissions that govern them, so no control row can be given.
- Today's per-file detail is in the .csv reports on the scanner computer, and the page says the report folder location or name cannot be changed.

**Security & identity**
- The scanner pages show the install process granting the db_owner role on the scanner database to the service account that runs the scanner. Whether the export sits in that database, and which accounts may read it, is not documented.
- Configuring the scanner in the Microsoft Purview portal needs one of four roles: Compliance Administrator, Compliance Data Administrator, Security Administrator or Organization Management. Whether the same roles govern the export is not stated.

**Autonomy & actions**
- No change stated: the roadmap describes storing the results of labelling, classification and protection actions, not new actions. What the scanner labels or protects is set per content scan job, for example by its Enforce setting (see the controls table).

**Change & support**
- A preview release in December CY2026 means table layouts may change before general availability; expect to rework any report built during preview. Microsoft has not said so, so confirm against the documentation when it appears.
- Scanner upgrades already include running Update-ScannerDatabase to update the scanner database. Whether the export changes that step is not stated.
- SQL capacity: Learn gives a sizing equation for the scanner configuration database. Whether export tables add to it is not stated.

## Cost and licensing

**Licence.** The scanner prerequisites page lists "License for information protection" as required to provide file classification, labeling or protection capabilities to the scanner service account, and links to Microsoft's security and compliance licensing guidance. Microsoft has not published a licence or plan specific to scanner data export at the time of writing (November 2026).

**Meter.** No meter, price or charge for the export is documented at the time of writing.

**Indirect costs.** The scanner needs a Windows Server computer and an SQL Server instance (SQL Server 2016 is the minimum version for the editions listed; SQL Server Express is recommended for test environments only). The prerequisites page gives the example that scanning 1 million files with an average file name length of 250 bytes needs 2 GB of disk space for the configuration database. Any tool you use to build reports on the SQL tables carries its own licence and cost, which this item does not cover. Plan administrator time for SQL access and role design.

## Scope

**Record facts.** Clouds: Worldwide (Standard Multi-Tenant), GCC and GCC High. DoD is not listed on the roadmap item. Platform: Desktop. Release phases: General Availability and Preview, with a preview date of December CY2026 and a target date of January CY2027.

**Prerequisites documented for the scanner.** It runs as a service on Windows Server and discovers, classifies and protects files in UNC paths (SMB or NFS, where NFS is marked Preview) and SharePoint Server document libraries. It stores configuration data in an SQL Server instance. Sign-in to configure it in the Microsoft Purview portal needs Compliance Administrator, Compliance Data Administrator, Security Administrator or Organization Management.

**Not stated.** Which of these prerequisites apply to the export, and whether it is available to every scanner cluster, is not documented.

## Governance guidance

### Before rollout
- Confirm which administrators hold Compliance Administrator, Compliance Data Administrator, Security Administrator or Organization Management, since those roles configure the scanner in the Microsoft Purview portal.
- Identify the SQL Server instance behind each scanner cluster and check its free capacity against the documented sizing equation.
- Review the Enforce setting on each content scan job (see the controls table), because reports will reflect whether labels are applied or only discovered.

### At rollout
- Watch the information protection scanner pages on Microsoft Learn and Message center for the preview, then read the table documentation before pointing any report at the data.
- Test any report on a non-production scanner and SQL Server first, as preview table layouts may change.
- Restrict read access to any export tables to the named reporting team once Microsoft documents the tables and their permissions.

### After rollout
- Compare the first export-based report with the .csv reports on the scanner computer for the same scan, using Scan now or Start-Scan for a manual scan (see the controls table).
- Record in your runbook that scanner upgrades include Update-ScannerDatabase, and re-check after each upgrade that reports still run.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a content scan job enforces labelling policy on scanned files</strong><br><small class="controls__note">Existing scanner control, not a control over the export. Portal roles: Compliance Administrator, Compliance Data Administrator, Security Administrator or Organization Management.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Information Protection › Information protection scanner › Content scan jobs › content scan job › Enforce sensitivity labeling policy <a href="https://learn.microsoft.com/purview/deploy-scanner-configure-install" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-ScannerContentScan -Enforce On</code> <a href="https://learn.microsoft.com/powershell/module/purviewinformationprotection/set-scannercontentscan?view=azureipps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>When a content scan job runs, so results reach reports</strong><br><small class="controls__note">Existing scanner control. The Scan now option only appears once a content scan job is selected. Start-Scan is ignored when the scanner schedule is Always.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Information Protection › Information protection scanner › Content scan jobs › content scan job › Scan now <a href="https://learn.microsoft.com/purview/deploy-scanner-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-Scan</code> <a href="https://learn.microsoft.com/powershell/module/purviewinformationprotection/start-scan?view=azureipps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Scanner data export to SQL tables for custom reporting</strong><br><small class="controls__note">Roadmap feature, In development. Microsoft Learn documents no setting or command for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first two rows are today's controls over what the scanner scans and does. They do not control the export itself. The third row records that no setting, role or command for the export is documented yet.

The Enforce setting of a content scan job decides whether the scanner enforces content scanning and labelling according to your policy; the Learn page's initial configuration sets it to Off. Start-Scan needs the service started and the scanner schedule set to manual, and the page says the cmdlet is ignored when the schedule is Always. Roles for portal configuration are listed in Scope.

## Open questions

- Which SQL tables and columns will hold the labelling, classification and protection actions, and are they in the scanner's configuration database or elsewhere? Watch the information protection scanner pages on Microsoft Learn.
- Which permissions or roles control read access to the export tables, and is access to them audited?
- Is the export on by default or does an administrator turn it on, and is a separate licence needed? Watch Message center and the scanner prerequisites page.
- Will the export need Update-ScannerDatabase, and how will it affect database size?
- Which parts arrive in Preview in December CY2026 and which at general availability in January CY2027 for Worldwide, GCC and GCC High?

<!-- rationale
risk: Low. The roadmap describes stored results of scanner actions and states no new scanning behaviour; what remains open is who can read the SQL tables, because Microsoft has not documented their permissions.
cost: Low. Microsoft has published no licence or meter specific to the export; the known costs are admin time and SQL Server capacity, and the scanner already needs an information protection licence for its service account.
impact: Low. Administrators and reporting teams that run the information protection scanner would notice it; the roadmap item names no effect on end users.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters; Open questions / default: Microsoft has not stated what scanner data export does on arrival. | Found: | `CustomReporting` | Off | `$true`, `$false` | Populates the Custom Reporting tables and columns in the scanner cluster database. | Fix: Set defaultState to admin-opt-in. Replace the unknown-default statements with 'Custom Reporting is off by default and starts populating reporting data on the next scan cycle after an administrator enables it.' Cite https://learn.microsoft.com/purview/deploy-scanner-feature-control and https://learn.microsoft.com/purview/deploy-scanner-custom-reporting. Remove the default-state question from Open questions. | Source: https://learn.microsoft.com/purview/deploy-scanner-feature-control
- [contradicted, blocker] controls[2].ui and controls[2].api; summary; Governance controls / absence: No setting or command is documented for scanner data export, so there is nothing to configure. | Found: Set-ScannerConfiguration -FeatureSettings @{CustomReporting=$true} ... This command enables the Custom Reporting feature for the entire scanner cluster. All nodes pick up the change on their next scan cycle. No service restart is required. | Fix: Keep controls[2].ui null, but set controls[2].api to powershell, call 'Set-ScannerConfiguration -FeatureSettings @{CustomReporting=$true}', docs 'https://learn.microsoft.com/powershell/module/purviewinformationprotection/set-scannerconfiguration?view=azureipps'. Replace its note with 'Preview; off by default. Enables reporting for the cluster on the next scan cycle. Set CustomReporting to $false to stop new writes; existing reporting data is retained.' Remove 'nothing to configure' from the summary and the no-command statements from the prose. Cite https://learn.microsoft.com/purview/deploy-scanner-feature-control and https://learn.microsoft.com/purview/deploy-scanner-custom-reporting. | Source: https://learn.microsoft.com/powershell/module/purviewinformationprotection/set-scannerconfiguration?view=azureipps
- [contradicted, blocker] summary; What's changing; changes[0].note / absence: Microsoft Learn does not yet describe scanner data export and its behaviour is known only from the roadmap. | Found: This article describes the Microsoft Purview Information Protection scanner Custom Reporting feature (preview). Custom Reporting gives scanner administrators the data they need in the scanner cluster database to build their own reports against scan results | Fix: Replace the roadmap-only and no-Learn-documentation statements with 'Microsoft Learn documents Custom Reporting in preview for client and scanner version 3.2.89.0 or later, while the roadmap still lists In development with preview targeted for December CY2026 and general availability targeted for January CY2027.' Cite https://learn.microsoft.com/purview/deploy-scanner-custom-reporting. Replace the summary with 'Custom Reporting (preview) stores scanner results in the cluster SQL database. It is off until an administrator enables it with PowerShell; review database access and capacity before opting in.' | Source: https://learn.microsoft.com/purview/deploy-scanner-custom-reporting
- [contradicted, blocker] What's changing; Why it matters; Risk assessment; Open questions / absence: Microsoft has not documented the export's SQL table names or columns. | Found: ### Additions to `dbo.ScannerFiles` ... ### New table: `dbo.MatchedClassificationAction` ... ### New table: `dbo.ScannedFilesArchive` | Fix: Replace the schema-absence statements with 'The preview documents additions to dbo.ScannerFiles and the new dbo.MatchedClassificationAction and dbo.ScannedFilesArchive tables, with column definitions on the Custom Reporting page.' Cite https://learn.microsoft.com/purview/deploy-scanner-custom-reporting. Remove the question asking which tables and columns will hold the data. | Source: https://learn.microsoft.com/purview/deploy-scanner-custom-reporting
- [contradicted, blocker] Why it matters; Risk assessment: Security & identity; Open questions / absence: Microsoft has not said whether export data lives in the scanner database or elsewhere. | Found: Custom Reporting moves file-state and SIT-match data into the scanner cluster database | Fix: Replace the unknown-location statements with 'Custom Reporting stores its reporting data in the scanner cluster database.' Cite https://learn.microsoft.com/purview/deploy-scanner-custom-reporting and remove the database-location question. | Source: https://learn.microsoft.com/purview/deploy-scanner-custom-reporting
- [contradicted, blocker] Why it matters; Risk assessment: Data exposure; Governance controls; rationale: risk / absence: Microsoft has not documented permissions governing access to the SQL reporting tables. | Found: Database-level roles are database-wide in their permissions scope. ... Members of the db_datareader fixed database role can read all data from all user tables and views. | Fix: Replace the blanket absence claim with 'Reporting data is stored in the scanner cluster SQL database, where SQL Server database permissions govern access.' Cite https://learn.microsoft.com/purview/deploy-scanner-custom-reporting and https://learn.microsoft.com/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-ver17. Remove the assertion that no access control can be identified; do not recommend granting broad database roles. | Source: https://learn.microsoft.com/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-ver17
- [contradicted, blocker] Scope: Not stated / absence: Microsoft has not documented prerequisites applying to the export. | Found: Custom Reporting is available with Microsoft Purview Information Protection client and scanner version 3.2.89.0 or later. Custom Reporting is enabled by an administrator through Scanner feature control. | Fix: Replace the blanket prerequisite gap with 'Custom Reporting requires Microsoft Purview Information Protection client and scanner version 3.2.89.0 or later and administrator enablement through Scanner feature control.' Cite https://learn.microsoft.com/purview/deploy-scanner-custom-reporting. | Source: https://learn.microsoft.com/purview/deploy-scanner-custom-reporting
- [contradicted, blocker] Scope: Not stated / absence: Microsoft has not documented the scanner-cluster scope of export availability. | Found: Scanner features are configured once per scanner cluster. ... An administrator runs a configuration cmdlet once from any node in the cluster, and all nodes pick up the change on the next scan cycle. | Fix: Replace 'whether it is available to every scanner cluster, is not documented' with 'On a supported client and scanner version, feature configuration is per scanner cluster and applies to all its nodes on the next scan cycle.' Cite https://learn.microsoft.com/purview/deploy-scanner-feature-control. Do not extrapolate cloud availability beyond the roadmap list. | Source: https://learn.microsoft.com/purview/deploy-scanner-feature-control
- [contradicted, blocker] Risk assessment: Change & support; Open questions / absence: Microsoft has not said how Custom Reporting affects scanner database upgrades. | Found: Whether you're installing the scanner fresh or upgrading from any earlier version, the scanner deploys the full database schema (including the Custom Reporting tables and columns) on install or upgrade. | Fix: Replace the upgrade uncertainty with 'Installation or upgrade deploys the full Custom Reporting database schema; the reporting tables and columns remain unpopulated until Custom Reporting is enabled.' Cite https://learn.microsoft.com/purview/deploy-scanner-custom-reporting. Remove the question asking whether the export changes the database upgrade step. | Source: https://learn.microsoft.com/purview/deploy-scanner-custom-reporting
- [contradicted, blocker] Risk assessment: Change & support; Open questions / absence: Microsoft has not said whether export tables add to the scanner database's capacity needs. | Found: When you turn on Custom Reporting, the scanner cluster database stores significantly more data: ... Building reports against the scanner cluster database also adds a read workload that runs alongside the scanner's operational reads and writes. | Fix: Replace the capacity gap with 'Enabling Custom Reporting significantly increases scanner cluster database storage and adds reporting reads alongside scanner operations.' Cite https://learn.microsoft.com/purview/deploy-scanner-custom-reporting. Remove the question asking whether database size is affected; retain tenant-specific sizing as an administrator planning task. | Source: https://learn.microsoft.com/purview/deploy-scanner-custom-reporting
- [contradicted, blocker] Cost and licensing: Indirect costs / cost: Any tool used to build reports on the SQL tables carries its own licence and cost. | Found: Microsoft provides the following free tools and extensions to work with our SQL Server Database Engine products, based on your business role and function. ... The data analyst runs queries and generates reports. | Fix: Remove the universal sentence 'Any tool you use to build reports on the SQL tables carries its own licence and cost, which this item does not cover.' It incorrectly rules out free reporting/query tools and tools already licensed. | Source: https://learn.microsoft.com/sql/tools/overview-sql-tools?view=sql-server-ver17
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: previewDate; What's changing; Scope; Risk assessment; Open questions / record: The roadmap preview date is December CY2026. | Found: "previewDate": "December CY2026" | Fix: Keep the roadmap date, but replace the first sentence of Risk assessment: Change & support with 'The roadmap targets preview for December CY2026; plan to recheck reports built during preview before general availability.' In the final Open questions bullet, replace 'arrive in Preview in December CY2026' with 'are targeted for Preview in December CY2026'.
- [supported, minor] front matter: targetDate; What's changing; Scope; Open questions / record: The roadmap general-availability target is January CY2027. | Found: "targetDate": "January CY2027" | Fix: Keep the target date. In the final Open questions bullet, replace 'at general availability in January CY2027' with 'are targeted for general availability in January CY2027', rather than implying a committed arrival.
- [supported, minor] front matter: licensing.model / licensing: Licensing is unknown, although the notes acknowledge the scanner's general information protection licence requirement. | Found: | **License for information protection** | Required to provide file classification, labeling, or protection capabilities to the scanner service account. | Fix: Set licensing.model to included under the standard's product-level licensing rule. Retain the notes that the scanner service account requires a licence for information protection and that no separate export-specific licence or charge is published; do not imply that export is free. | Source: https://learn.microsoft.com/purview/deploy-scanner-prereqs
- [contradicted, minor] Governance guidance: Before rollout and At rollout / consistency: Every control the governance checklist asks administrators to review or restrict appears in the controls table. | Found: Checklist: 'Confirm which administrators hold' the four roles; 'check its free capacity'; 'Restrict read access to any export tables'. Table: Enforce, Scan now, and the export's absent-control row. | Fix: The role-membership review, SQL free-capacity check and reporting-table read-access restriction have no corresponding controls rows. Record this checklist/table mismatch; do not add rows as part of this correction.
-->
