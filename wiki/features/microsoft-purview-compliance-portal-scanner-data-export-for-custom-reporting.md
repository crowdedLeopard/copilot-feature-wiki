---
title: "Microsoft Purview: information protection scanner data export for custom reporting"
slug: "microsoft-purview-compliance-portal-scanner-data-export-for-custom-reporting"
roadmapId: 494839
topic: "governance"
products: ["Microsoft Purview"]
summary: "Custom Reporting (preview) stores scanner results in the cluster SQL database. It is off until an administrator enables it with PowerShell; review database access and capacity before opting in."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Desktop"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The scanner prerequisites page lists a licence for information protection as required for the scanner service account. No separate licence, plan or charge specific to scanner data export is published at the time of writing (November 2026); that is not a statement that the export is free."
audiences: ["compliance","security"]
tags: ["purview","information-protection","sensitivity-labels","data-export","sql","powershell","monitoring","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 494839"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=494839"
    kind: "roadmap"
  - title: "Microsoft Purview Information Protection scanner Custom Reporting (preview)"
    url: "https://learn.microsoft.com/purview/deploy-scanner-custom-reporting"
    kind: "learn"
  - title: "Microsoft Purview Information Protection scanner feature control (preview)"
    url: "https://learn.microsoft.com/purview/deploy-scanner-feature-control"
    kind: "learn"
  - title: "Set-ScannerConfiguration"
    url: "https://learn.microsoft.com/powershell/module/purviewinformationprotection/set-scannerconfiguration?view=azureipps"
    kind: "learn"
  - title: "Database-level roles"
    url: "https://learn.microsoft.com/sql/relational-databases/security/authentication-access/database-level-roles?view=sql-server-ver17"
    kind: "learn"
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
  - governs: "Scanner data export (Custom Reporting) to the scanner cluster database"
    scope: "other"
    ui: null
    api:
      kind: "powershell"
      call: "Set-ScannerConfiguration -FeatureSettings @{CustomReporting=$true}"
      docs: "https://learn.microsoft.com/powershell/module/purviewinformationprotection/set-scannerconfiguration?view=azureipps"
    note: "Preview; off by default. Enables reporting for the cluster on the next scan cycle. Set CustomReporting to $false to stop new writes; existing reporting data is retained."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-29T23:01:00"
changes:
  - date: "2026-11-20"
    note: "First briefing: roadmap-only feature; documents today's scanner reports, SQL prerequisites, roles and controls, and lists what Microsoft has not yet said."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 12 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after the independent check: Learn documents Custom Reporting (preview), off by default and enabled with Set-ScannerConfiguration; removed the claims that no documentation, tables, setting or command existed."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after the independent check: the open question on roles now states the db_owner requirement for the configuring account, and the unsupported checklist bullet on restricting database read access was removed."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 73 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-20"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 73
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "b5850794611c3c3acf764597ad6a0519"
---

## What's changing

The roadmap item describes a Microsoft Purview feature for learning about "the state of your scanned repositories" and creating custom reports with the information protection scanner. It says labelling, classification and protection actions on scanned files are stored in SQL tables that form a foundation to feed into custom reports.

Microsoft Learn documents Custom Reporting in preview for client and scanner version 3.2.89.0 or later, while the roadmap still lists In development with preview targeted for December CY2026 and general availability targeted for January CY2027. Custom Reporting is off by default and starts populating reporting data on the next scan cycle after an administrator enables it ([Scanner feature control](https://learn.microsoft.com/purview/deploy-scanner-feature-control), [Custom Reporting](https://learn.microsoft.com/purview/deploy-scanner-custom-reporting)).

Custom Reporting stores its reporting data in the scanner cluster database. The preview documents additions to dbo.ScannerFiles and the new dbo.MatchedClassificationAction and dbo.ScannedFilesArchive tables, with column definitions on the Custom Reporting page.

Without Custom Reporting, reporting works differently. The scanner runs as a service on Windows Server and uses sensitivity labels configured in the Microsoft Purview portal. When a scan completes, the reports are in the `%localappdata%\Microsoft\MSIP\Scanner\Reports` directory on the scanner computer: .txt summaries and .csv files with more detail for each file. The page says the portal shows information about the last scan only, and that results of earlier scans are in those reports.

The roadmap record gives the status as In development, a preview date of December CY2026 and a target date of January CY2027, with release phases General Availability and Preview, platform Desktop, and clouds Worldwide (Standard Multi-Tenant), GCC and GCC High. These are Microsoft's targets, not commitments.

## Why it matters

Teams that report on scanner results work from per-scan files on the scanner computer or the last scan shown in the portal. Microsoft describes SQL tables as the foundation for custom reports, which would give compliance and security teams a way to report across scans. Learn says Custom Reporting stores its reporting data in the scanner cluster database, where SQL Server database permissions govern access.

Custom Reporting is off by default and starts populating reporting data on the next scan cycle after an administrator enables it. Treat this as something to review, and plan database access and capacity before opting in, because data about labelled and protected files is the sort of reporting data that gets shared widely once it is queryable.

## Risk assessment

**Data exposure**
- Reporting data is stored in the scanner cluster SQL database, where SQL Server database permissions govern access. SQL Server documents that members of the db_datareader fixed database role can read all data from all user tables and views, so anyone given that role on the scanner database could read the reporting tables.
- Today's per-file detail is in the .csv reports on the scanner computer, and the page says the report folder location or name cannot be changed.

**Security & identity**
- The scanner pages show the install process granting the db_owner role on the scanner database to the service account that runs the scanner. Custom Reporting stores its reporting data in the scanner cluster database.
- Configuring the scanner in the Microsoft Purview portal needs one of four roles: Compliance Administrator, Compliance Data Administrator, Security Administrator or Organization Management. Whether the same roles govern the export is not stated.

**Autonomy & actions**
- No change stated: the roadmap describes storing the results of labelling, classification and protection actions, not new actions. What the scanner labels or protects is set per content scan job, for example by its Enforce setting (see the controls table).

**Change & support**
- The roadmap targets preview for December CY2026; plan to recheck reports built during preview before general availability.
- Scanner upgrades already include running Update-ScannerDatabase to update the scanner database. Installation or upgrade deploys the full Custom Reporting database schema; the reporting tables and columns remain unpopulated until Custom Reporting is enabled.
- SQL capacity: Learn gives a sizing equation for the scanner configuration database. Enabling Custom Reporting significantly increases scanner cluster database storage and adds reporting reads alongside scanner operations.

## Cost and licensing

**Licence.** The scanner prerequisites page lists "License for information protection" as required to provide file classification, labeling or protection capabilities to the scanner service account, and links to Microsoft's security and compliance licensing guidance. Microsoft has not published a licence or plan specific to scanner data export at the time of writing (November 2026).

**Meter.** No meter, price or charge for the export is documented at the time of writing.

**Indirect costs.** The scanner needs a Windows Server computer and an SQL Server instance (SQL Server 2016 is the minimum version for the editions listed; SQL Server Express is recommended for test environments only). The prerequisites page gives the example that scanning 1 million files with an average file name length of 250 bytes needs 2 GB of disk space for the configuration database. Plan administrator time for SQL access and role design.

## Scope

**Record facts.** Clouds: Worldwide (Standard Multi-Tenant), GCC and GCC High. DoD is not listed on the roadmap item. Platform: Desktop. Release phases: General Availability and Preview, with a preview date of December CY2026 and a target date of January CY2027.

**Prerequisites documented for the scanner.** It runs as a service on Windows Server and discovers, classifies and protects files in UNC paths (SMB or NFS, where NFS is marked Preview) and SharePoint Server document libraries. It stores configuration data in an SQL Server instance. Sign-in to configure it in the Microsoft Purview portal needs Compliance Administrator, Compliance Data Administrator, Security Administrator or Organization Management.

**Custom Reporting.** Custom Reporting requires Microsoft Purview Information Protection client and scanner version 3.2.89.0 or later and administrator enablement through Scanner feature control. On a supported client and scanner version, feature configuration is per scanner cluster and applies to all its nodes on the next scan cycle.

## Governance guidance

### Before rollout
- Confirm which administrators hold Compliance Administrator, Compliance Data Administrator, Security Administrator or Organization Management, since those roles configure the scanner in the Microsoft Purview portal.
- Identify the SQL Server instance behind each scanner cluster and check its free capacity against the documented sizing equation.
- Review the Enforce setting on each content scan job (see the controls table), because reports will reflect whether labels are applied or only discovered.

### At rollout
- Read the Custom Reporting and Scanner feature control pages on Microsoft Learn, and check the client and scanner version, before enabling Custom Reporting with Set-ScannerConfiguration (see the controls table).
- Test any report on a non-production scanner and SQL Server first, as the feature is in preview.

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
<tr><td data-label="Control"><strong>Scanner data export (Custom Reporting) to the scanner cluster database</strong><br><small class="controls__note">Preview; off by default. Enables reporting for the cluster on the next scan cycle. Set CustomReporting to $false to stop new writes; existing reporting data is retained.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-ScannerConfiguration -FeatureSettings @{CustomReporting=$true}</code> <a href="https://learn.microsoft.com/powershell/module/purviewinformationprotection/set-scannerconfiguration?view=azureipps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The first two rows are existing scanner controls over what the scanner scans and does. They do not control the export itself. The third row is the Custom Reporting switch: Learn documents it through PowerShell, and says that for features also configurable from the Microsoft Purview portal, a setting configured in the portal takes precedence and prevents updates from PowerShell.

The Enforce setting of a content scan job decides whether the scanner enforces content scanning and labelling according to your policy; the Learn page's initial configuration sets it to Off. Start-Scan needs the service started and the scanner schedule set to manual, and the page says the cmdlet is ignored when the schedule is Always. Roles for portal configuration are listed in Scope.

## Open questions

- The scanner prerequisites require the user account that configures the scanner to have the db_owner role for the scanner configuration database ([Get started with the information protection scanner](https://learn.microsoft.com/purview/deploy-scanner-prereqs#deploying-the-scanner-with-alternative-configurations)). Is an additional Microsoft Purview portal role required specifically to enable Custom Reporting? Watch the Scanner feature control page on Microsoft Learn.
- Will a licence or charge specific to Custom Reporting be published? Watch Message center and the scanner prerequisites page.
- Which parts are targeted for Preview in December CY2026 and which are targeted for general availability in January CY2027 for Worldwide, GCC and GCC High?

<!-- rationale
risk: Low. Custom Reporting is off until an administrator enables it; once on, reporting data sits in the scanner cluster SQL database, where SQL Server database permissions govern who can read it.
cost: Low. Microsoft has published no licence or meter specific to the export; the known costs are admin time and SQL Server capacity, and the scanner already needs an information protection licence for its service account.
impact: Low. Administrators and reporting teams that run the information protection scanner would notice it; the roadmap item names no effect on end users.
-->
