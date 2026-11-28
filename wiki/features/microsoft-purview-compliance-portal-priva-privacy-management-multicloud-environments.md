---
title: "Microsoft Priva Privacy Risk Management: data overexposure policies for Azure SQL, Azure Data Lake Storage and Amazon S3"
slug: "microsoft-purview-compliance-portal-priva-privacy-management-multicloud-environments"
roadmapId: 398711
topic: "governance"
products: ["Microsoft Purview"]
summary: "The roadmap says Priva data overexposure policies now cover Azure SQL, Azure Data Lake Storage and Amazon S3 and notify owners of matching assets. It works through policies admins create; check licensing and Data Map setup first."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2026"
previewDate: "June CY2024"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Priva Privacy Risk Management is bought as an add-on to listed Office 365 and Microsoft 365 plans (Microsoft Priva service description). The Amazon S3 scanning connector is a separate add-on to Microsoft Purview under Azure terms. No price specific to this feature is published."
audiences: ["compliance","security","service-owner","finops"]
tags: ["priva","privacy","purview","multicloud","oversharing","azure-storage","sql","data-governance","sensitive-information-types","role-groups"]
sources:
  - title: "Microsoft 365 Roadmap item 398711"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=398711"
    kind: "roadmap"
  - title: "Data overexposure policies in privacy risk management"
    url: "https://learn.microsoft.com/privacy/priva/risk-management-policy-data-overexposure"
    kind: "learn"
  - title: "Privacy risk management policies"
    url: "https://learn.microsoft.com/privacy/priva/risk-management-policies"
    kind: "learn"
  - title: "Find and visualize personal data in Privacy Risk Management"
    url: "https://learn.microsoft.com/privacy/priva/risk-management-find-visualize-data"
    kind: "learn"
  - title: "Learn about Microsoft Priva"
    url: "https://learn.microsoft.com/privacy/priva/priva-overview"
    kind: "learn"
  - title: "How data flows in Microsoft Priva"
    url: "https://learn.microsoft.com/privacy/priva/priva-data-flows"
    kind: "learn"
  - title: "Get started with Priva"
    url: "https://learn.microsoft.com/privacy/priva/priva-setup"
    kind: "learn"
  - title: "Learn about privacy risk management"
    url: "https://learn.microsoft.com/privacy/priva/risk-management"
    kind: "learn"
  - title: "Investigate and remediate alerts in Privacy Risk Management"
    url: "https://learn.microsoft.com/privacy/priva/risk-management-alerts"
    kind: "learn"
  - title: "Microsoft Priva service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-priva-service-description"
    kind: "learn"
  - title: "Microsoft Purview Data Map overview"
    url: "https://learn.microsoft.com/purview/data-map"
    kind: "learn"
  - title: "Amazon S3 Multicloud Scanning Connector for Microsoft Purview"
    url: "https://learn.microsoft.com/purview/register-scan-amazon-s3"
    kind: "learn"
  - title: "Use the Microsoft Graph compliance and privacy APIs"
    url: "https://learn.microsoft.com/graph/api/resources/complianceapioverview?view=graph-rest-1.0"
    kind: "learn"
  - title: "Scans and ingestion in Data Map"
    url: "https://learn.microsoft.com/purview/data-map-scan-ingestion"
    kind: "learn"
  - title: "Manage domains and collections in Data Map"
    url: "https://learn.microsoft.com/purview/data-map-domains-collections-manage"
    kind: "learn"
  - title: "Who can create, edit and turn on Privacy Risk Management policies (Privacy Management Administrators role group) (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Who can create, edit and turn on Privacy Risk Management policies (Privacy Management Administrators role group) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Which Azure and AWS sources are registered in Microsoft Purview Data Map for Priva to evaluate (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/data-map-data-sources-register-manage"
    kind: "learn"
  - title: "Which Azure and AWS sources are registered in Microsoft Purview Data Map for Priva to evaluate (REST API)"
    url: "https://learn.microsoft.com/rest/api/purview/scanningdataplane/data-sources/create-or-replace"
    kind: "learn"
  - title: "Whether the unified audit log records activity for the organisation (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-log-enable-disable"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-insider-risk-management-support-for-multicloud-environ","role-groups","microsoft-purview-compliance-portal-information-protection-sensitivity-labels-protection-p","auditing","classifiers"]
controls:
  - governs: "Who can create, edit and turn on Privacy Risk Management policies (Privacy Management Administrators role group)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"Privacy Management Administrators\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Needs the Role management role in the portal. Priva roles do not appear in Microsoft Entra ID."
  - governs: "Which data sources a data overexposure policy covers"
    scope: "other"
    ui:
      surface: "Microsoft Priva portal"
      path: "Privacy Risk Management > Policies > Create a policy > Custom > Create > Name and type > Data overexposure > Data sources"
      docs: "https://learn.microsoft.com/privacy/priva/risk-management-policy-data-overexposure"
    api: null
    note: "At the time of writing (November 2026), the Learn page lists only Microsoft 365 sources on this wizard page and does not document Azure or AWS options."
  - governs: "Whether a policy is on and sends alerts and notifications, or stays in test mode"
    scope: "other"
    ui:
      surface: "Microsoft Priva portal"
      path: "Privacy Risk Management > Policies > policy > Policy status > Turn on policy"
      docs: "https://learn.microsoft.com/privacy/priva/risk-management-policies"
    api: null
    note: "In test mode, no alerts are generated, but matches appear on the policy's details page."
  - governs: "Which Azure and AWS sources are registered in Microsoft Purview Data Map for Priva to evaluate"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Map > Data sources > Register > source type > Register sources > Register"
      docs: "https://learn.microsoft.com/purview/data-map-data-sources-register-manage"
    api:
      kind: "rest"
      call: "PUT {endpoint}/scan/datasources/{dataSourceName}?api-version=2023-09-01"
      docs: "https://learn.microsoft.com/rest/api/purview/scanningdataplane/data-sources/create-or-replace"
    note: "Needs Data Source Admin plus another Data Map role. Data Map carries Microsoft's data governance retirement notice. The request body sets kind to the source type and properties to that source's configuration."
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
    note: "Priva setup asks you to enable the audit log for Privacy Risk Management. Needs the Audit Logs role in Exchange Online."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-14T23:15:59"
changes:
  - date: "2026-11-28"
    note: "New briefing: Priva data overexposure policies for Azure SQL, Azure Data Lake Storage and Amazon S3, with the Data Map dependency, costs and the data governance retirement notice."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 73 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: default state now Not stated; custom policy path adds Create; Data Map registration path completed; auditing default exceptions for SMB and trial tenants; removed two unsupported statements."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 87 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 87
  confirmed: 86
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "880f7afa2f75f46f6012705f0fd56aff"
---

## What's changing

Microsoft Priva Privacy Risk Management can now apply its data overexposure policies to data held in Azure SQL, Azure Data Lake Storage and Amazon S3, not only to Microsoft 365 content. According to the roadmap item, organisations create privacy policies that name the data sources, databases or storage buckets in scope, and Priva automatically notifies the owners of data assets when it detects matches.

Priva reaches data outside Microsoft 365 through Microsoft Purview. The Priva overview states that Priva "also evaluates your organization's data sources that are registered through Microsoft Purview", and the Priva data flows page says Privacy Risk Management receives asset metadata, classification data and label data from Microsoft Purview Data Map. In other words, Priva looks at sources that have been registered in Microsoft Purview. A data overexposure policy created from a template starts in test mode, in which no alerts or notifications are sent.

The roadmap item is **Launched**, with a preview date of June CY2024 and a general availability target of January CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web. Microsoft Learn does not yet match that status. At the time of writing (November 2026), the data overexposure policy page lists only Microsoft 365 data sources (SharePoint sites and OneDrive accounts), and the Privacy Risk Management **Reports (preview)** page labels its Azure and Amazon Web Services S3 insights as preview. Azure SQL and Azure Data Lake Storage are not named on the Priva pages.

## Why it matters

For organisations that keep personal data in Azure databases, data lakes or S3 buckets, this brings those stores into the same overexposure policies and alert queue as SharePoint and OneDrive. That helps with privacy assessments, but it depends on infrastructure outside Priva: a Microsoft Purview Data Map with the sources registered, Data Map capacity costs and, because Data Map scans S3 through a Microsoft-run scanner, an AWS role that gives that scanner read access to the buckets.

No source says existing behaviour changes on arrival: the roadmap describes the feature as working through policies that organisations create, and only users assigned a Priva role can access Priva. Microsoft has not stated the multicloud extension's arrival default or whether existing policies gain these sources automatically. The bigger planning question is Data Map itself: Microsoft Learn's Data Map pages say that Microsoft Purview data governance capabilities are being retired and stay in maintenance mode until November 12, 2027. Microsoft has not said how that affects Priva's use of multicloud sources, so confirm it before investing in new scans for this feature.

## Risk assessment

**Data exposure**
- Priva receives asset metadata, classification data and label data from Data Map. For S3, the scanner reads bucket content and sends back only metadata and classification results. The Priva role groups decide who in Priva sees those findings.
- Members of the Privacy Management Investigators role group can view the content of matched items. Privacy Management Analysts can investigate matches but cannot access content items. Keep the investigator group small.

**Security & identity**
- S3 scanning needs a dedicated AWS IAM role that a Microsoft account in AWS uses to read the buckets, with **AmazonS3ReadOnlyAccess** or a custom policy. That is a standing cross-cloud trust; plan for the AWS account owner to approve and review it.
- Registering a source in Data Map needs the Data Source Admin role plus another Data Map role, which is separate from the Priva role groups.

**Autonomy & actions**
- The roadmap says Priva automatically notifies data asset owners when matches are found. Microsoft Learn documents remediation outcomes (making items private, notifying owners, tagging) for Microsoft 365 content. It does not document which outcomes apply to Azure or AWS sources. Test mode sends no alerts or notifications.

**Change & support**
- Owners of Azure and AWS data assets may start receiving privacy notifications they have not seen before. Tell them before a policy is turned on.
- Data Map is under a retirement notice for Microsoft Purview data governance capabilities. A pipeline built now may need rework.

## Cost and licensing

**Licence.** The Microsoft Priva service description says Priva is available as an addition to organisations with Office 365 A1/E1/G1/E3/A5/E5 or Microsoft 365 A3/E3/G3/A5/E5/G5, and that "Priva Risk Management must be added on". It recommends licensing every user you intend to protect with the service. The service description publishes nothing specific to Azure or AWS sources.

**Meters.** Every Microsoft Purview account has a Data Map that starts at one capacity unit and can scale with request load and the amount of metadata stored (Microsoft Purview Data Map overview). Data Map costs therefore grow with the sources you register and scan for Priva. The Amazon S3 Multicloud Scanning Connector is a separate add-on to Microsoft Purview under your Azure agreement, and customers are charged for related data transfer according to the region of the bucket.

**Scan volume.** Each Data Map scan can be scoped to only the information you need and run once or on a schedule, which is where Data Map and AWS transfer volume is decided.

**Not yet published.** A price or meter specific to Priva multicloud policies.

## Scope

- **Cloud and platform:** Worldwide (Standard Multi-Tenant), on the web, as the roadmap record lists them.
- **Sources:** Azure SQL, Azure Data Lake Storage and Amazon S3 according to the roadmap item. Microsoft Learn's Priva Reports page shows Azure (preview) and AWS S3 (preview) locations.
- **Policy type:** data overexposure policies. Learn says the Reports page's data transfer and unused personal data cards apply only to Microsoft 365 data.
- **Roles:** Privacy Management or Privacy Management Administrators to create and manage policies. Data Source Admin plus another Data Map role to register sources.
- **Prerequisites:** the Priva Privacy Risk Management add-on, the Microsoft 365 audit log (Priva's setup page asks you to enable it), and sources registered and scanned in Microsoft Purview Data Map.
- **Out of scope:** tenants provisioned in local data centres in Norway, Poland, Qatar, Singapore, South Africa, South Korea, Spain, Sweden, Switzerland or the United Arab Emirates, where Priva solutions are not available.

## Governance guidance

### Before rollout
- Confirm the tenant holds the Priva Privacy Risk Management add-on for the users you intend to cover.
- Check in the Microsoft Purview portal (Data Map > Data sources) whether the Azure SQL, Azure Data Lake Storage and S3 sources are registered, and who holds the Data Source Admin role.
- Ask the AWS account owner to review the IAM role that the Purview S3 scanner would use before granting it.
- Assign the Privacy Management Administrators role group only to the people who will build policies.
- Verify that auditing is on (Audit > Start recording user and admin activity), as Priva setup requires for Privacy Risk Management.

### At rollout
- Create a custom data overexposure policy and check on its **Data sources** page which Azure and AWS options your tenant shows.
- Leave the policy in test mode for at least five days, as Learn recommends, and review matches by location.
- Tell the owners of the in-scope Azure and AWS data assets that Priva notifications may reach them.

### After rollout
- Turn the policy on from its **Policy status** card once test results are understood.
- Review the **Overexposed personal data** card on the Reports page filtered to Azure and AWS.
- Track Data Map capacity and AWS data transfer charges against the scan schedule.
- Follow the Microsoft Purview data governance retirement timeline for its effect on registered sources.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can create, edit and turn on Privacy Risk Management policies (Privacy Management Administrators role group)</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Role management role in the portal. Priva roles do not appear in Microsoft Entra ID.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;Privacy Management Administrators&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which data sources a data overexposure policy covers</strong><br><small class="controls__note">At the time of writing (November 2026), the Learn page lists only Microsoft 365 sources on this wizard page and does not document Azure or AWS options.</small></td><td data-label="Admin UI"><strong>Microsoft Priva portal</strong><br>Privacy Risk Management › Policies › Create a policy › Custom › Create › Name and type › Data overexposure › Data sources <a href="https://learn.microsoft.com/privacy/priva/risk-management-policy-data-overexposure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a policy is on and sends alerts and notifications, or stays in test mode</strong><br><small class="controls__note">In test mode, no alerts are generated, but matches appear on the policy's details page.</small></td><td data-label="Admin UI"><strong>Microsoft Priva portal</strong><br>Privacy Risk Management › Policies › policy › Policy status › Turn on policy <a href="https://learn.microsoft.com/privacy/priva/risk-management-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Azure and AWS sources are registered in Microsoft Purview Data Map for Priva to evaluate</strong><br><small>Tenant</small><br><small class="controls__note">Needs Data Source Admin plus another Data Map role. Data Map carries Microsoft's data governance retirement notice. The request body sets kind to the source type and properties to that source's configuration.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Map › Data sources › Register › source type › Register sources › Register <a href="https://learn.microsoft.com/purview/data-map-data-sources-register-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PUT {endpoint}/scan/datasources/{dataSourceName}?api-version=2023-09-01</code> <a href="https://learn.microsoft.com/rest/api/purview/scanningdataplane/data-sources/create-or-replace" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the unified audit log records activity for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Priva setup asks you to enable the audit log for Privacy Risk Management. Needs the Audit Logs role in Exchange Online.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Start recording user and admin activity <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AdminAuditLogConfig -UnifiedAuditLogIngestionEnabled $true</code> <a href="https://learn.microsoft.com/purview/audit-log-enable-disable" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Priva and Data Map have separate permission models. The Priva role groups decide who can create policies and see findings, and the Data Map roles decide who can register and scan Azure and AWS sources. Priva policy settings have no PowerShell or Microsoft Graph automation documented at the time of writing (November 2026): the Microsoft Graph compliance and privacy APIs cover Priva subject rights requests only. Run Add-RoleGroupMember in Security & Compliance PowerShell, where its Identity and Member parameters apply. Auditing is on by default for Microsoft 365 organisations except those using SMB licences, including Business Basic, Business Standard and Business Premium, and unmanaged tenants using free enterprise trials; these must enable it manually. Turning it on or off needs the Audit Logs role in Exchange Online.

## Open questions

- Which Azure and AWS options appear on a data overexposure policy's **Data sources** page now that the roadmap item is Launched, given that the Learn page still lists only Microsoft 365 sources? Watch the data overexposure policy page on Microsoft Learn.
- Which outcomes, such as owner notification or tagging, apply to matches in Azure SQL, Azure Data Lake Storage and S3, and who counts as the data asset owner? Watch the Privacy Risk Management policies page.
- How does the retirement of Microsoft Purview data governance capabilities, in maintenance mode until November 12, 2027, affect Priva's access to sources registered in Data Map? Watch the retirement announcement and Message center.
- Are Azure SQL and Azure Data Lake Storage covered by the Reports page's Azure (preview) location, and when does it leave preview?

<!-- rationale
risk: Low. The roadmap describes policies that organisations create to bring Azure and AWS sources into scope, and a Priva policy created from a template starts in test mode, which sends no alerts or notifications.
cost: Variable. Priva Privacy Risk Management is an add-on licence, and the Azure and AWS sources reach Priva through Microsoft Purview Data Map, which is sized in capacity units with usage costs; S3 scanning also incurs AWS data transfer charges.
impact: Low. Privacy and compliance administrators who build policies notice it, along with the owners of Azure and AWS data assets that the roadmap says Priva notifies when a policy finds matches.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls table; Governance guidance / admin-path: The policy activation path is Privacy Risk Management > Policies > policy > Policy status > Turn on policy. | Found: From your Policies page, find the policy and select its name to open its details page. In the Policy status card, select Turn on policy. ... The Overview tab of the policy details page tells you the status of your policy | Fix: Add the documented Overview heading: 'Privacy Risk Management > Policies > policy > Overview > Policy status > Turn on policy'. The cited page places the Policy status card on the Overview tab. | Source: https://learn.microsoft.com/privacy/priva/risk-management-policies
- [contradicted, minor] Governance guidance; Governance controls table / consistency: Some checklist controls have no corresponding controls-table row. | Found: who holds the Data Source Admin role; review the IAM role; Review the Overexposed personal data card; Track Data Map capacity ... against the scan schedule. The table covers Priva administrator membership, policy sources, policy activation, source registration and auditing. | Fix: Identify the Before rollout checks of Data Source Admin membership and the AWS IAM role, and the After rollout checks of Reports and Data Map capacity/scan scheduling, as checklist controls without matching table rows. Source registration is not role assignment or scan configuration; do not add rows as part of this correction.
-->
